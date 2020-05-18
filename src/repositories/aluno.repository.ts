import {DefaultCrudRepository} from '@loopback/repository';
import {Aluno, AlunoRelations} from '../models';
import {AlunoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AlunoRepository extends DefaultCrudRepository<
  Aluno,
  typeof Aluno.prototype.id,
  AlunoRelations
> {
  constructor(
    @inject('datasources.aluno') dataSource: AlunoDataSource,
  ) {
    super(Aluno, dataSource);
  }
}
