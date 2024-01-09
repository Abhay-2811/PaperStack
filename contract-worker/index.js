const viem = require('viem')
const chains = require('viem/chains')
const contractAbi = require('./gov_contract.json')
require('dotenv').config()
const { helper } = require('./tableland-helper')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())

const PORT = process.env.PORT || 8000

app.listen(PORT, async () => {
  console.log('Listening at PORT: ', PORT)
  const contractAddress = contractAbi.address
  const contract_abi = contractAbi.abi
  const publicClient = viem.createPublicClient({
    chain: chains.filecoinCalibration,
    transport: viem.http('https://rpc.ankr.com/filecoin_testnet')
  })

  publicClient.watchContractEvent({
    address: contractAddress,
    abi: contract_abi,
    eventName: 'ProposalCreated',
    onLogs: logs => {
      logs.map(async log => {
        console.log(log.args)
        await helper.add_row_proposals(
          Number(log.args.proposalId),
          log.args.dao_address,
          log.args.description
        )
      })
    }
  })

  publicClient.watchContractEvent({
    address: contractAddress,
    abi: contract_abi,
    eventName: 'ProposalExecuted',
    onLogs: logs => {
      logs.map(async log => {
        console.log(log.args)
        const values = log.args
        await helper.executeProposal(
          Number(values.proposalId),
          Number(values.passed)
        )
      })
    }
  })
})

/* logs example: args: { proposalId: 4n, description: 'Something', dao_address: 0xa... },
 */
