import { createTables } from './config/db'
import { GenericDAO } from './models/dao/GenericDAO'

import { Beneficiario } from './models/entities/Beneficiario'
import { Consulta } from './models/entities/Consulta'
import { Exame } from './models/entities/Exame'


const run = async () => {
  await createTables()

  const newBeneficiario = new Beneficiario ('Bob','Rua:casas n:2','999999999',new Date(21/2/3))
  const dao1 = new GenericDAO(Beneficiario)
  const savedUser = await dao1.save(newBeneficiario)
  console.log(savedUser)

  const dao2 = new GenericDAO(Beneficiario)
  const busca = await dao2.findById(1)
  console.log(busca)
}

run()
