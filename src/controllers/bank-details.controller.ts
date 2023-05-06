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
import {BankDetails} from '../models';
import {BankDetailsRepository} from '../repositories';

export class BankDetailsController {
  constructor(
    @repository(BankDetailsRepository)
    public bankDetailsRepository : BankDetailsRepository,
  ) {}

  @post('/bank-details')
  @response(200, {
    description: 'BankDetails model instance',
    content: {'application/json': {schema: getModelSchemaRef(BankDetails)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BankDetails, {
            title: 'NewBankDetails',
            
          }),
        },
      },
    })
    bankDetails: BankDetails,
  ): Promise<BankDetails> {
    return this.bankDetailsRepository.create(bankDetails);
  }

  @get('/bank-details/count')
  @response(200, {
    description: 'BankDetails model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BankDetails) where?: Where<BankDetails>,
  ): Promise<Count> {
    return this.bankDetailsRepository.count(where);
  }

  @get('/bank-details')
  @response(200, {
    description: 'Array of BankDetails model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BankDetails, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BankDetails) filter?: Filter<BankDetails>,
  ): Promise<BankDetails[]> {
    return this.bankDetailsRepository.find(filter);
  }

  @patch('/bank-details')
  @response(200, {
    description: 'BankDetails PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BankDetails, {partial: true}),
        },
      },
    })
    bankDetails: BankDetails,
    @param.where(BankDetails) where?: Where<BankDetails>,
  ): Promise<Count> {
    return this.bankDetailsRepository.updateAll(bankDetails, where);
  }

  @get('/bank-details/{id}')
  @response(200, {
    description: 'BankDetails model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BankDetails, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BankDetails, {exclude: 'where'}) filter?: FilterExcludingWhere<BankDetails>
  ): Promise<BankDetails> {
    return this.bankDetailsRepository.findById(id, filter);
  }

  @patch('/bank-details/{id}')
  @response(204, {
    description: 'BankDetails PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BankDetails, {partial: true}),
        },
      },
    })
    bankDetails: BankDetails,
  ): Promise<void> {
    await this.bankDetailsRepository.updateById(id, bankDetails);
  }

  @put('/bank-details/{id}')
  @response(204, {
    description: 'BankDetails PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() bankDetails: BankDetails,
  ): Promise<void> {
    await this.bankDetailsRepository.replaceById(id, bankDetails);
  }

  @del('/bank-details/{id}')
  @response(204, {
    description: 'BankDetails DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.bankDetailsRepository.deleteById(id);
  }
}
