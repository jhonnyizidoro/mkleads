import {Entity, model, property} from '@loopback/repository';

@model({
  name: 'dealer_vehicle',
})
export class DealerVehicle extends Entity {
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
    type: 'string',
  })
  external_id?: string;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'number',
  })
  sell_value?: number;

  @property({
    type: 'number',
  })
  km?: number;

  @property({
    type: 'string',
  })
  fuel?: string;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'string',
  })
  car_body?: string;

  @property({
    type: 'string',
  })
  transmission?: string;

  @property({
    type: 'boolean',
    default: true,
  })
  status?: boolean;


  constructor(data?: Partial<DealerVehicle>) {
    super(data);
  }
}

export interface DealerVehicleRelations {
  // describe navigational properties here
}

export type DealerVehicleWithRelations = DealerVehicle & DealerVehicleRelations;
