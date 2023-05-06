import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {CashInHand} from '../models';
import {CashInHandRepository} from '../repositories';

export class CashInHandController {
  constructor(
    @repository(CashInHandRepository)
    public cashInHandRepository : CashInHandRepository,
  ) {}

  @post('/cash-in-hands')
  @response(200, {
    description: 'CashInHand model instance',
    content: {'application/json': {schema: getModelSchemaRef(CashInHand)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CashInHand, {
            title: 'NewCashInHand',
            
          }),
        },
      },
    })
    cashInHand: CashInHand,
  ): Promise<CashInHand> {
    return this.cashInHandRepository.create(cashInHand);
  }

  @get('/cash-in-hands/count')
  @response(200, {
    description: 'CashInHand model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CashInHand) where?: Where<CashInHand>,
  ): Promise<Count> {
    return this.cashInHandRepository.count(where);
  }

  @get('/cash-in-hands')
  @response(200, {
    description: 'Array of CashInHand model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CashInHand, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CashInHand) filter?: Filter<CashInHand>,
  ): Promise<CashInHand[]> {
    return this.cashInHandRepository.find(filter);
  }

  @patch('/cash-in-hands')
  @response(200, {
    description: 'CashInHand PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CashInHand, {partial: true}),
        },
      },
    })
    cashInHand: CashInHand,
    @param.where(CashInHand) where?: Where<CashInHand>,
  ): Promise<Count> {
    return this.cashInHandRepository.updateAll(cashInHand, where);
  }

  @get('/cash-in-hands/{id}')
  @response(200, {
    description: 'CashInHand model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CashInHand, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CashInHand, {exclude: 'where'}) filter?: FilterExcludingWhere<CashInHand>
  ): Promise<CashInHand> {
    return this.cashInHandRepository.findById(id, filter);
  }

  @patch('/cash-in-hands/{id}')
  @response(204, {
    description: 'CashInHand PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CashInHand, {partial: true}),
        },
      },
    })
    cashInHand: CashInHand,
  ): Promise<void> {
    await this.cashInHandRepository.updateById(id, cashInHand);
  }

  @put('/cash-in-hands/{id}')
  @response(204, {
    description: 'CashInHand PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cashInHand: CashInHand,
  ): Promise<void> {
    await this.cashInHandRepository.replaceById(id, cashInHand);
  }

  @del('/cash-in-hands/{id}')
  @response(204, {
    description: 'CashInHand DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cashInHandRepository.deleteById(id);
  }
}
