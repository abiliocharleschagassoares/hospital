import { Entity } from './Entity'

export class Exame extends Entity {
  especialidade:string
  profissionalResponsavel:string
  dataHorario:Date
  idBeneficiario?:string
  caraterUrgencia:boolean
  constructor(especialidade:string,profissionalResponsavel:string,dataHorario:Date,caraterUrgencia:boolean,idBeneficiario?:string) {
    super()
    this.especialidade=especialidade
    this.profissionalResponsavel = profissionalResponsavel
    this.dataHorario = dataHorario
    this.idBeneficiario = idBeneficiario
    this.caraterUrgencia = caraterUrgencia
  }
}