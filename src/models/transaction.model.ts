import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Transaction extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  userId: number;

  @property({
    type: 'string',
    required: true,
  })
  operation: string;

  @property({
    type: 'string',
    required: true,
  })
  operator: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'array',
    itemType: 'any',
    required: true,
  })
  linkedAccountBefore: any[];

  @property({
    type: 'array',
    itemType: 'any',
    required: true,
  })
  linkedAccountAfter: any[];

  @property({
    type: 'string',
    required: true,
  })
  paymentType: string;

  @property({
    type: 'string',
    required: true,
  })
  paymentMode: string;

  @property({
    type: 'number',
    required: true,
  })
  paymentId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}

export interface TransactionRelations {
  // describe navigational properties here
}

export type TransactionWithRelations = Transaction & TransactionRelations;
