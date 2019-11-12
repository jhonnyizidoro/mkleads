import {DefaultCrudRepository} from '@loopback/repository';
import {Dealer, DealerRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DealerRepository extends DefaultCrudRepository<
  Dealer,
  typeof Dealer.prototype.id,
  DealerRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Dealer, dataSource);
  }
}
