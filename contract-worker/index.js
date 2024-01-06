const viem = require('viem')
const chains = require('viem/chains')
const contractAbi = require('./gov_contract.json')
require('dotenv').config()
const tableland_sdk = require('@tableland/sdk')
const helper = require('./tableland-helper')

async function main () {
  const contractAddress = contractAbi.address
  const contract_abi = contractAbi.abi
  const publicClient = viem.createPublicClient({
    chain: chains.filecoinCalibration,
    transport: viem.http('https://rpc.ankr.com/filecoin_testnet')
  });


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
    eventName: 'Voted',
    onLogs: logs => {
      logs.map(async log => {
        console.log(Number(log.args.inSupport))
      })
    }
  })

  publicClient.watchContractEvent({
    address: contractAddress,
    abi: contract_abi,
    eventName: 'ProposalExecuted',
    onLogs: logs => {
      logs.map(async log => {
        console.log(log.args);
        const values = log.args;

        await helper.add_row_proposals(
          Number(log.args.proposalId),
          log.args.dao_address,
          log.args.description
        )
      })
    }
  })

}

main()

/* logs example: args: { proposalId: 4n, description: 'Something', dao_address: 0xa... },
 */
