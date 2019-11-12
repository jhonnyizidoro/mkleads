import {DefaultCrudRepository} from '@loopback/repository';
import {ExchangeVehicle, ExchangeVehicleRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ExchangeVehicleRepository extends DefaultCrudRepository<
  ExchangeVehicle,
  typeof ExchangeVehicle.prototype.id,
  ExchangeVehicleRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ExchangeVehicle, dataSource);
  }
}
