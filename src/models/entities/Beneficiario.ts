import { Entity } from './Entity'

export class Beneficiario extends Entity {
  nome: string
  dataNascimento: Date
  email?: string
  endereco:string
  telefone :string
  
  constructor(nome: string, endereco:string , telefone:string , dataNascimento:Date , email?: string ) {
    super()
    this.nome = nome
    this.dataNascimento= dataNascimento
    this.telefone =telefone
    this.endereco = endereco
    this.email = email
  }
}
