import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodsDataSource} from '../datasources';
import {Transaction, TransactionRelations} from '../models';

export class TransactionRepository extends DefaultCrudRepository<
  Transaction,
  typeof Transaction.prototype.id,
  TransactionRelations
> {
  constructor(
    @inject('datasources.mongods') dataSource: MongodsDataSource,
  ) {
    super(Transaction, dataSource);
  }
}
