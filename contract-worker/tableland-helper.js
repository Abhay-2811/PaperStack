const { Database } = require('@tableland/sdk')
const { Wallet, getDefaultProvider } = require('ethers')
require('dotenv').config()
const privateKey = process.env.PRIVATE_KEY
const wallet = new Wallet(privateKey)
const provider = getDefaultProvider('https://rpc.ankr.com/filecoin_testnet')
const signer = wallet.connect(provider)
// Connect to the database
const db = new Database({ signer })
const viem = require('viem')
const chains = require('viem/chains')
const publicClient = viem.createPublicClient({
  chain: chains.filecoinCalibration,
  transport: viem.http('https://rpc.ankr.com/filecoin_testnet')
})

async function createTable () {
  const prefix = 'dao_proposals'
  //proposalPassed: 0 - failed, 1 - passed, 2 - no yet completed
  const { meta: create } = await db
    .prepare(
      `CREATE TABLE ${prefix} (proposalId integer primary key, contractAdd text, description text, proposalPassed integer);`
    )
    .run()
  await create.txn?.wait()

  // The table's `name` is in the format `{prefix}_{chainId}_{tableId}`
  const tableName = create.txn?.names[0] ?? ''
  console.log(tableName)
}

// createTable();
// table name: dao_proposals_314159_680

const add_row_proposals = async (pID, ca, desc) => {
  const { meta: insert } = await db
    .prepare(
      `INSERT INTO dao_proposals_314159_680 (proposalId, contractAdd, description, proposalPassed) VALUES (?, ?, ?, ?);`
    )
    .bind(
      pID,
      ca,
      desc,
      2
    )
    .run()

  // Wait for transaction finality
  const hash = insert.txn.transactionHash
  console.log(hash);
  await publicClient.waitForTransactionReceipt({ hash })
  console.log('Added proposal')
}

module.exports.add_row_proposals = add_row_proposals
