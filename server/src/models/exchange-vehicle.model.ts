import {Entity, model, property} from '@loopback/repository';

@model({
  name: 'exchange_vehicle',
})
export class ExchangeVehicle extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  dealer_id?: number;

  @property({
    type: 'number',
  })
  proposal_id?: number;

  @property({
    type: 'string',
  })
  fipe_id?: string;

  @property({
    type: 'string',
  })
  fipe_brand?: string;

  @property({
    type: 'string',
  })
  fipe_model?: string;

  @property({
    type: 'string',
  })
  fipe_year?: string;

  @property({
    type: 'number',
  })
  fipe_value?: number;

  @property({
    type: 'string',
  })
  fipe_reference?: string;

  @property({
    type: 'string',
  })
  km?: string;

  @property({
    type: 'string',
  })
  condition_external?: string;

  @property({
    type: 'string',
  })
  condition_internal?: string;

  @property({
    type: 'boolean',
  })
  financing?: boolean;

  @property({
    type: 'number',
  })
  value_financing?: number;

  @property({
    type: 'number',
  })
  value_offer?: number;

  @property({
    type: 'boolean',
  })
  accepted?: boolean;


  constructor(data?: Partial<ExchangeVehicle>) {
    super(data);
  }
}

export interface ExchangeVehicleRelations {
  // describe navigational properties here
}

export type ExchangeVehicleWithRelations = ExchangeVehicle & ExchangeVehicleRelations;
