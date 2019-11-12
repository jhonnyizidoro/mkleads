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
import {post, requestBody} from "@loopback/openapi-v3";
import {Order} from "../models";

const ORDER_SCHEMA = {
  type: 'object',
  properties: {
    orderId: {type: 'number', nullable: true},
    vehicle: {
      type: 'object',
      properties: {
        id: {type: 'string', nullable: true},
        externalId: {type: 'string'},
        title: {type: 'string'},
        sellValue: {type: 'string'},
        image: {type: 'string'},
      }, nullable: true
    },
    payment: {
      type: 'object',
      properties: {
        method: {type: 'string'},
        entry: {type: 'string'},
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
          km: {type: 'number'},
          conditionExternal: {type: 'string'},
          conditionInternal: {type: 'string'},
          financing: {type: 'boolean'},
          valueFinancing: {type: 'number'},
          valueOffer: {type: 'number'},
          accepted: {type: 'boolean'},
          fipeDetails: {
            type: 'object',
            properties: {
              fipeCod: {type: 'number'},
              brand: {type: 'string'},
              model: {type: 'string'},
              year: {type: 'string'},
              reference: {type: 'string'},
              value: {type: 'number'},
            }
          },
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
      order: Order,
  ): Promise<object> {
    let proposal, client, exchageVehicle, dealerVehicle = {};

    if (order.client.id && order.client.id !== 0) {
      const id = order.client.id;
      delete order.client.id;
      await this.clientRepository.updateById(id, order.client);
      client = await this.clientRepository.findById(id);
    } else {
      delete order.client.id;
      client = await this.clientRepository.create(order.client);
    }
    /*
    if (order.orderId && order.orderId !== 0)
      proposal = this.proposalRepository.findById(order.orderId);
    else {
      proposal = this.proposalRepository.create();
    }
    if (order.orderId && order.orderId !== 0)
      exchageVehicle = this.exchangeVehicleRepository.findById(order.orderId);
    else
      exchageVehicle = Proposal

    if (order.orderId && order.orderId !== 0)
      dealerVehicle = this.dealerVehicleRepository.findById(order.orderId);
    else
      dealerVehicle = Proposal
     */
    return client;
  }
}
