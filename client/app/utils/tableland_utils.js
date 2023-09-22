import { Database } from '@tableland/sdk'

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

export const add_row_dao_data = async(org_name, desc, owner_add, reward, pages, contract_add)=>{
    const db = new Database();
    const {meta: insert} = await db
        .prepare(`INSERT INTO dao_data_314159_337 (org_name, owner_add, description, reward, pages, conntract_add) VALUES (?, ?, ?, ?, ?, ?);`)
        .bind(org_name,owner_add, desc,reward, pages, contract_add)
        .run();
    await insert.txn.wait();
    const { results } = await db.prepare(`SELECT * FROM dao_data_314159_337;`).all();
    console.log(results);
}

export const add_row_people = async(dao_add, user_add, role, contribution_json, contract_add)=>{
    const db = new Database();
    const {meta: insert} = await db
        .prepare(`INSERT INTO people_314159_334 (dao_add, user_add, role, contribution_json, contract_add, reward_released_bool) VALUES (?, ?, ?, ?, ?, ?)`)
        .bind(dao_add, user_add, role, contribution_json, contract_add, 0)
        .run();
    await insert.txn.wait();
    const { results } = await db.prepare(`SELECT * FROM people_314159_334;`).all();
    console.log(results);

}