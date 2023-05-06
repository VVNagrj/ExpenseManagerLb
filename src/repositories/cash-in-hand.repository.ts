import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodsDataSource} from '../datasources';
import {CashInHand, CashInHandRelations} from '../models';

export class CashInHandRepository extends DefaultCrudRepository<
  CashInHand,
  typeof CashInHand.prototype.id,
  CashInHandRelations
> {
  constructor(
    @inject('datasources.mongods') dataSource: MongodsDataSource,
  ) {
    super(CashInHand, dataSource);
  }
}
