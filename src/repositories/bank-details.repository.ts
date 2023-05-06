import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodsDataSource} from '../datasources';
import {BankDetails, BankDetailsRelations} from '../models';

export class BankDetailsRepository extends DefaultCrudRepository<
  BankDetails,
  typeof BankDetails.prototype.id,
  BankDetailsRelations
> {
  constructor(
    @inject('datasources.mongods') dataSource: MongodsDataSource,
  ) {
    super(BankDetails, dataSource);
  }
}
