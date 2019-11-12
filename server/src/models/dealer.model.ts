import {Entity, model, property} from '@loopback/repository';

@model()
export class Dealer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
  })
  config?: number;


  constructor(data?: Partial<Dealer>) {
    super(data);
  }
}

export interface DealerRelations {
  // describe navigational properties here
}

export type DealerWithRelations = Dealer & DealerRelations;
