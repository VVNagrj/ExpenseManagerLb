import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Expenses extends Entity {
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
  expenses: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'string',
    required: true,
  })
  vendor: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'string',
    required: true,
  })
  modeOfPayment: string;

  @property({
    type: 'string',
    required: true,
  })
  paymentType: string;

  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  diffrenceAmount: number[];

  @property({
    type: 'number',
    required: true,
  })
  paymentId?: number;

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
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Expenses>) {
    super(data);
  }
}

export interface ExpensesRelations {
  // describe navigational properties here
}

export type ExpensesWithRelations = Expenses & ExpensesRelations;
