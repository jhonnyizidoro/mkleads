import {Entity, model, property} from '@loopback/repository';

@model()
export class Proposal extends Entity {
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
  client_id?: number;

  @property({
    type: 'number',
  })
  dealer_vehicle_id?: number;

  @property({
    type: 'string',
  })
  payment_method?: string;

  @property({
    type: 'number',
  })
  entry?: number;

  @property({
    type: 'string',
  })
  installment?: string;

  @property({
    type: 'date',
  })
  mail_sended_at?: string;


  constructor(data?: Partial<Proposal>) {
    super(data);
  }
}

export interface ProposalRelations {
  // describe navigational properties here
}

export type ProposalWithRelations = Proposal & ProposalRelations;
