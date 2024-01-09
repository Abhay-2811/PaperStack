import { filecoinCalibration } from 'wagmi/chains'
import { ContractData, gov_contract, pst_token } from './contract_data'
import { publicClient } from './viemClient'
import { parseUnits, parseEther, http, createWalletClient } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { hexlify } from 'ethers/lib/utils'

export const deployContract = async (
  auditorsArray,
  reward,
  pages,
  papersCid,
  walletClient
) => {
  const [account] = await walletClient.getAddresses()
  if (account) {
    const hash = await walletClient.deployContract({
      ...ContractData,
      account,
      args: [auditorsArray, parseUnits(reward, 18), Number(pages), papersCid],
      value: parseUnits(reward, 18)
    })
    const receipt = await publicClient.waitForTransactionReceipt({ hash })
    return receipt.contractAddress
  }
}

export const add_contributor = async (contractAddress, qty, walletClient) => {
  const [account] = await walletClient.getAddresses()
  const { request } = await publicClient.simulateContract({
    account,
    address: contractAddress,
    abi: ContractData.abi,
    functionName: 'pledgeJob',
    args: [qty],
    value: parseEther('1')
  })
  const hash = await walletClient.writeContract(request)
  await publicClient.waitForTransactionReceipt({ hash })
}

export const get_alloted_pages = async (contractAdd, userAdd) => {
  const pagesAlloted = await publicClient.readContract({
    address: contractAdd,
    abi: ContractData.abi,
    functionName: 'getAssignedPages',
    args: [userAdd]
  })
  console.log(pagesAlloted)
  return pagesAlloted
}

export const get_cid = async contractAdd => {
  const cid = await publicClient.readContract({
    address: contractAdd,
    abi: ContractData.abi,
    functionName: 'data_cid'
  })
  console.log(cid)
  return cid
}

export const create_proposal = async (
  description,
  contractAdd,
  walletClient
) => {
  const [account] = await walletClient.getAddresses()
  const { request } = await publicClient.simulateContract({
    account,
    address: gov_contract.address,
    abi: gov_contract.abi,
    functionName: 'createProposal',
    args: [description, contractAdd]
  })
  const hash = await walletClient.writeContract(request)
  await publicClient.waitForTransactionReceipt({ hash })
}

export const vote_proposal = async (pid, vote, walletClient) => {
  const [account] = await walletClient.getAddresses()
  const { request } = await publicClient.simulateContract({
    account,
    address: gov_contract.address,
    abi: gov_contract.abi,
    functionName: 'vote',
    args: [pid, vote]
  })
  const hash = await walletClient.writeContract(request)
  await publicClient.waitForTransactionReceipt({ hash })
  console.log('Voted')
}

export const mint_pst = async address => {
  const pk = process.env.NEXT_PUBLIC_VIEM_PRIVATE_KEY
  const account = privateKeyToAccount(pk)

  const client = createWalletClient({
    account,
    chain: filecoinCalibration,
    transport: http()
  })
  const hash = await client.writeContract({
    address: pst_token.address,
    abi: pst_token.abi,
    functionName: 'mint',
    args: [address, parseUnits('50', 18)]
  })
  await publicClient.waitForTransactionReceipt({ hash })
  console.log('Minted')
}
