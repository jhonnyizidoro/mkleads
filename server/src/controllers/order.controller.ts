// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


// import {ResponseObject} from "@loopback/rest";
import {repository} from "@loopback/repository";
import {
  ClientRepository,
  DealerRepository,
  DealerVehicleRepository,
  ExchangeVehicleRepository,
  ProposalRepository,
  UserRepository
} from "../repositories";
import {getModelSchemaRef, post, requestBody} from "@loopback/openapi-v3";
import {Order, Client, Proposal, ExchangeVehicle} from "../models";

const ORDER_SCHEMA = {
  type: 'object',
  properties: {
    order_id: {type: 'number', nullable: true},
    dealer_id: {type: 'number', require: true},
    vehicle: {
      type: 'object',
      properties: {
        id: {type: 'number', nullable: true},
        external_id: {type: 'string'},
        title: {type: 'string'},
        sell_value: {type: 'number'},
        image: {type: 'string'},
      }, nullable: true
    },
    payment: {
      type: 'object',
      properties: {
        payment_method: {type: 'string'},
        entry: {type: 'number'},
        installment: {type: 'string'},
      },
      nullable: true
    },
    client: {
      type: 'object',
      properties: {
        id: {type: 'number', nullable: true},
        name: {type: 'string'},
        cpf: {type: 'string'},
        cellphone: {type: 'string'},
        email: {type: 'string'},
      },
      nullable: true
    },
    exchanges: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {type: 'number', nullable: true},
          km: {type: 'string'},
          condition_external: {type: 'string'},
          condition_internal: {type: 'string'},
          financing: {type: 'boolean'},
          value_financing: {type: 'number'},
          value_offer: {type: 'number'},
          accepted: {type: 'boolean'},
          fipe_id: {type: 'string'},
          fipe_brand: {type: 'string'},
          fipe_model: {type: 'string'},
          fipe_year: {type: 'string'},
          fipe_value: {type: 'number'},
          fipe_reference: {type: 'string'},
        },
        nullable: true
      }
    },
  },
}

export class OrderController {
  constructor(
    @repository(ClientRepository) public clientRepository: ClientRepository,
    @repository(DealerRepository) public delaerRepository: DealerRepository,
    @repository(DealerVehicleRepository) public dealerVehicleRepository: DealerVehicleRepository,
    @repository(ExchangeVehicleRepository) public exchangeVehicleRepository: ExchangeVehicleRepository,
    @repository(ProposalRepository) public proposalRepository: ProposalRepository,
    @repository(UserRepository) public userRepository: UserRepository,
  ) {
  }

  @post('/order', {
    responses: {
      '200': {
        description: 'Order response',
        content: {'application/json': {schema: ORDER_SCHEMA}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: ORDER_SCHEMA,
        },
      },
    })
      payload: Order,
  ): Promise<object> {
    const responseOrder = new Order();
    if (payload.client && payload.client.id && payload.client.id !== 0) {
      const client = payload.client;
      if (client.name && client.name === '')
        delete client.name;
      if (client.cellphone && client.cellphone === '')
        delete client.cellphone;
      if (client.cpf && client.cpf === '')
        delete client.cpf;
      if (client.email && client.email === '')
        delete client.email;
      await this.clientRepository.updateById(client.id, client);
      responseOrder.client = await this.clientRepository.findById(client.id);
    } else if (payload.client && payload.client.name && payload.client.name !== '') {
      delete payload.client.id;
      responseOrder.client = await this.clientRepository.create({dealer_id: payload.dealer_id, ...payload.client});
    }

    if (payload.vehicle && payload.vehicle.id && payload.vehicle.id !== 0) {
      const dealerVehicle = payload.vehicle;

      if (dealerVehicle.external_id && dealerVehicle.external_id === '')
        delete dealerVehicle.external_id;

      if (dealerVehicle.title && dealerVehicle.title === '')
        delete dealerVehicle.title;

      if (dealerVehicle.image && dealerVehicle.image === '')
        delete dealerVehicle.image;

      if (dealerVehicle.sell_value && dealerVehicle.sell_value === 0)
        delete dealerVehicle.sell_value;

      await this.dealerVehicleRepository.updateById(dealerVehicle.id, dealerVehicle);
      responseOrder.vehicle = await this.dealerVehicleRepository.findById(dealerVehicle.id);
    } else if (payload.vehicle && payload.vehicle.title && payload.vehicle.title !== '' && payload.vehicle.sell_value && payload.vehicle.sell_value !== 0) {
      delete payload.vehicle.id;
      responseOrder.vehicle = await this.dealerVehicleRepository.create({dealer_id: payload.dealer_id, ...payload.vehicle});
    }

    if (payload.order_id && payload.order_id !== 0) {
      const proposal = new Proposal();

      if (responseOrder.client && responseOrder.client.id)
        proposal.client_id = responseOrder.client.id;

      if (responseOrder.vehicle.id)
        proposal.dealer_vehicle_id = responseOrder.vehicle.id;

      if (payload.payment) {
        if (payload.payment.payment_method && payload.payment.payment_method !== '')
          proposal.payment_method = payload.payment.payment_method;
        if (payload.payment.entry && payload.payment.entry !== 0)
          proposal.entry = payload.payment.entry;
        if (payload.payment.installment && payload.payment.installment !== '')
          proposal.installment = payload.payment.installment;
      }
      await this.proposalRepository.updateById(payload.order_id, proposal);
      const dbProposal = await this.proposalRepository.findById(payload.order_id);
      responseOrder.order_id = dbProposal.getId();
      if (payload.payment)
        responseOrder.payment = dbProposal;


    } else if (responseOrder.vehicle && responseOrder.vehicle.id && payload.dealer_id) {
      const proposal = new Proposal();
      proposal.dealer_id = payload.dealer_id;

      if (responseOrder.client && responseOrder.client.id)
        proposal.client_id = responseOrder.client.id;

      if (responseOrder.vehicle.id)
        proposal.dealer_vehicle_id = responseOrder.vehicle.id;

      if (payload.payment) {
        if (payload.payment.payment_method && payload.payment.payment_method !== '')
          proposal.payment_method = payload.payment.payment_method;
        if (payload.payment.entry && payload.payment.entry !== 0)
          proposal.entry = payload.payment.entry;
        if (payload.payment.installment && payload.payment.installment !== '')
          proposal.installment = payload.payment.installment;
      }

      const dbProposal = await this.proposalRepository.create(proposal);
      responseOrder.order_id = dbProposal.getId();

      if (payload.payment)
        responseOrder.payment = dbProposal;
    }

    if (payload.exchanges && payload.exchanges.length > 0 && responseOrder.order_id && responseOrder.order_id !== 0) {
      responseOrder.exchanges = []
      const promises = payload.exchanges.map(async (vehicleExchange, key) => {
        if (vehicleExchange.id && vehicleExchange.id !== 0) {

          if (vehicleExchange.km && vehicleExchange.km == '')
            delete vehicleExchange.km;

          if (vehicleExchange.condition_external && vehicleExchange.condition_external === '')
            delete vehicleExchange.condition_external;

          if (vehicleExchange.condition_internal && vehicleExchange.condition_internal === '')
            delete vehicleExchange.condition_internal;

          if (vehicleExchange.value_offer && vehicleExchange.value_offer === 0)
            delete vehicleExchange.value_offer;

          if (vehicleExchange.fipe_brand && vehicleExchange.fipe_brand === '')
            delete vehicleExchange.fipe_brand;

          if (vehicleExchange.fipe_model && vehicleExchange.fipe_model === '')
            delete vehicleExchange.fipe_model;

          if (vehicleExchange.fipe_value)
            if (vehicleExchange.fipe_value === 0)
              delete vehicleExchange.fipe_value;
            else
              vehicleExchange.value_offer = vehicleExchange.fipe_value - (vehicleExchange.fipe_value * 0.15)

          if (vehicleExchange.fipe_year && vehicleExchange.fipe_year === '')
            delete vehicleExchange.fipe_year;

          if (vehicleExchange.fipe_reference && vehicleExchange.fipe_reference === '')
            delete vehicleExchange.fipe_reference;

          await this.exchangeVehicleRepository.updateById(vehicleExchange.id, vehicleExchange);
          const vehicleExchangeDb = await this.exchangeVehicleRepository.findById(vehicleExchange.id)
          responseOrder.exchanges.push(vehicleExchangeDb);
        } else if (vehicleExchange.fipe_brand && vehicleExchange.fipe_model && vehicleExchange.fipe_value && vehicleExchange.fipe_year && vehicleExchange.fipe_reference) {

          delete vehicleExchange.id;

          if (vehicleExchange.fipe_value)
            vehicleExchange.value_offer = vehicleExchange.fipe_value - (vehicleExchange.fipe_value * 0.15)

          const vehicleExchangeDb = await this.exchangeVehicleRepository.create({dealer_id: payload.dealer_id, proposal_id: payload.order_id, ...vehicleExchange});
          responseOrder.exchanges.push(vehicleExchangeDb);
        }
      })
      await Promise.all(promises);
    }

    return responseOrder;
  }
}
