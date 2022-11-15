import { Entity } from './Entity'

export class Consulta extends Entity {
  especialidade:string
  nomeMedico:string
  dataHorario:Date
  idBeneficiario?:string
  caraterUrgencia:boolean
  constructor(especialidade:string,nomeMedico:string,dataHorario:Date,caraterUrgencia:boolean,idBeneficiario?:string) {
    super()
    this.especialidade=especialidade
    this.nomeMedico = nomeMedico
    this.dataHorario = dataHorario
    this.idBeneficiario = idBeneficiario
    this.caraterUrgencia = caraterUrgencia
  }
}
