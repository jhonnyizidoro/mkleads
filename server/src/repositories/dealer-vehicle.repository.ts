import {DefaultCrudRepository} from '@loopback/repository';
import {DealerVehicle, DealerVehicleRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DealerVehicleRepository extends DefaultCrudRepository<
  DealerVehicle,
  typeof DealerVehicle.prototype.id,
  DealerVehicleRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(DealerVehicle, dataSource);
  }
}
