import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
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
    type: 'boolean',
  })
  admin_system?: boolean;

  @property({
    type: 'string',
  })
  login?: string;

  @property({
    type: 'string',
  })
  password?: string;

  @property({
    type: 'string',
  })
  last_login?: string;

  @property({
    type: 'boolean',
    default: true,
  })
  status?: boolean;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
