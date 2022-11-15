import { Pool } from 'pg'

const sqlPool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'plano-de-saude',
  user: 'dev',
  password: 'senha123',
})

export const createTables = async () => {
  const client = await sqlPool.connect()

  try {
    await client.query('BEGIN')

    
    await client.query(`
        create table if not exists "beneficiario" (
          "id" serial primary key ,
          "nome" varchar not null,
          "email" varchar ,
          "endereco" varchar not null,
          "telefone" varchar not null,
          "dataNascimento" date not null
      )
    `)

    await client.query(`
        create table if not exists "consulta" (
          "id" serial primary key,
          "especialidade" varchar not null,
          "nomeMedico" varchar not null,
          "dataHorario" timestamp not null,
          "idBeneficiario" integer not null
          references beneficiario(id),
          "caraterUrgencia" boolean default false
      )      
    `)

    await client.query(`
        create table if not exists "exame" (
          "id" serial primary key,
          "especialidade" varchar not null,
          "profissionalResponsavel" varchar not null,
          "dataHorario" date not null,
          "idBeneficiario" integer not null
          references beneficiario(id),
          "caraterUrgencia" boolean default false
      )      
    `)

    await client.query('COMMIT')
  } catch (err) {
    console.log(err)
    await client.query('ROLLBACK')
  }

  console.log('Feito')
  client.release()
}

export const executeQuery = async (query: string, values?: any[]) => {
  const result = values
    ? await sqlPool.query(query, values)
    : await sqlPool.query(query)

  return result
}

process.on('SIGINT', async () => {
  await sqlPool.end()
  console.log('Connection to db closed')
})
