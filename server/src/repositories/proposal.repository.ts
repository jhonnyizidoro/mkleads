import {DefaultCrudRepository} from '@loopback/repository';
import {Proposal, ProposalRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProposalRepository extends DefaultCrudRepository<
  Proposal,
  typeof Proposal.prototype.id,
  ProposalRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Proposal, dataSource);
  }
}
