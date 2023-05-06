import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class CashInHand extends Entity {
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
    type: 'number',
    required: true,
  })
  amountInHand: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CashInHand>) {
    super(data);
  }
}

export interface CashInHandRelations {
  // describe navigational properties here
}

export type CashInHandWithRelations = CashInHand & CashInHandRelations;
