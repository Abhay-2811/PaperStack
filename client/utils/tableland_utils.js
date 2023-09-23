import { Database } from '@tableland/sdk'
import { publicClient, get_pk_walletClient } from './viemClient'

export const createTable = async (tableName, fields) => {
  const db = new Database()

  const { meta: create } = await db
    .prepare(`CREATE TABLE ${tableName} (${fields});`)
    .run()

  console.log(create.txn.name)
}

// Tables Created

/* 
dao data (dao_data_314159_337 ): 
id integer primary key, org_name text, owner_add text, description text,reward integer, pages integer, contract_add text

people ( people_314159_334 ): 
id integer primary key, dao_add text, user_add text, role text, contribution_json text, contract_add text, reward_released_bool integer
*/

export const add_row_dao_data = async (
  org_name,
  desc,
  owner_add,
  reward,
  pages,
  contract_add
) => {
  const signer = get_pk_walletClient()
  console.log(signer.address);
  const db = new Database({ signer })
  const { meta: insert } = await db
    .prepare(
      `INSERT INTO dao_data_314159_337 (org_name, owner_add, description, reward, pages, contract_add) VALUES (?, ?, ?, ?, ?, ?);`
    )
    .bind(org_name, owner_add, desc, reward, pages, contract_add)
    .run()
  const hash = insert.txn.transactionHash
  await publicClient.waitForTransactionReceipt({ hash })
  const { results } = await db
    .prepare(`SELECT * FROM dao_data_314159_337;`)
    .all()
  console.log(results)
}

export const add_row_people = async (
  dao_add,
  user_add,
  role,
  contribution_json,
  contract_add
) => {
  const signer = get_pk_walletClient()
  const db = new Database({ signer })
  const { meta: insert } = await db
    .prepare(
      `INSERT INTO people_314159_334 (dao_add, user_add, role, contribution_json, contract_add, reward_released_bool) VALUES (?, ?, ?, ?, ?, ?)`
    )
    .bind(dao_add, user_add, role, contribution_json, contract_add, 0)
    .run()
  const hash = insert.txn.transactionHash
  await publicClient.waitForTransactionReceipt({ hash })
  const { results } = await db.prepare(`SELECT * FROM people_314159_334;`).all()
  console.log(results)
}

export const get_dao_data = async () => {
  let headersList = {
    Accept: '*/*'
  }

  let response = await fetch(
    'https://testnets.tableland.network/api/v1/query?statement=select%20%2A%20from%20dao_data_314159_337',
    {
      method: 'GET',
      headers: headersList
    }
  )
  if (!response.ok) {
    console.log('In error')
    throw new Error('Failed to fetch data')
  }
  let data = await response.json()
  return data
}

export const get_people = async () => {
    let headersList = {
        Accept: '*/*'
      }
    
      let response = await fetch(
        'https://testnets.tableland.network/api/v1/query?statement=select%20%2A%20from%20people_314159_334',
        {
          method: 'GET',
          headers: headersList
        }
      )
      if (!response.ok) {
        console.log('In error')
        throw new Error('Failed to fetch data')
      }
      let data = await response.json()
      return data
}
