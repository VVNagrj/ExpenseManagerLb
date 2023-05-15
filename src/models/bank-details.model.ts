import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class BankDetails extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  bankName: string;

  @property({
    type: 'string',
    required: true,
  })
  ifscCode: string;

  @property({
    type: 'string',
    required: true,
  })
  accountNumber: string;

  @property({
    type: 'number',
    required: true,
  })
  userId: number;

  @property({
    type: 'number',
    required: true,
  })
  accountBalance: number;

  @property({
    type: 'boolean',
    required: true,
  })
  isHavingUpi?: boolean;

  @property({
    type: 'string',
  })
  upiId?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  isHavingCreditCard?: boolean;

  @property({
    type: 'string',
  })
  creditCard?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BankDetails>) {
    super(data);
  }
}

export interface BankDetailsRelations {
  // describe navigational properties here
}

export type BankDetailsWithRelations = BankDetails & BankDetailsRelations;
