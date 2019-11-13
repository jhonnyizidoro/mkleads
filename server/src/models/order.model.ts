import {Model, model, property, hasOne, hasMany} from '@loopback/repository';
import {
  Client,
  Proposal,
  DealerVehicle,
  DealerVehicleWithRelations,
  ClientWithRelations,
  ProposalWithRelations,
  ExchangeVehicle,
  ExchangeVehicleWithRelations,
} from "../models";

@model()
export class Order extends Model {
  @property({
    type: 'number',
    id: true,
  })
  order_id: number;

  @property({
    type: 'number',
  })
  dealer_id: number;

  @hasOne(() => DealerVehicle)
  vehicle: DealerVehicle;

  @hasOne(() => Proposal)
  payment: Proposal;

  @hasOne(() => Client)
  client: Client;

  @hasMany(() => ExchangeVehicle)
  exchanges: ExchangeVehicle[];

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  vehicle: DealerVehicleWithRelations;
  client: ClientWithRelations;
  payment: ProposalWithRelations;
  exchanges: ExchangeVehicleWithRelations;
}

export type OrderWithRelations = Order & OrderRelations;


