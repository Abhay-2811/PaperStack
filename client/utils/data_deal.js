import lighthouse from '@lighthouse-web3/sdk'
import { dealClient } from '@/utils/contract_data'
import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { publicClient } from './viemClient'
import CID from "cids";

export default async function data_deal (data, walletClient) {
  const output = await lighthouse.uploadText(
    JSON.stringify(data),
    process.env.NEXT_PUBLIC_LH_API_KEY
  )
  const hash = output.data.Hash
  const size = output.data.Size
  const carLink = `https://ipfs.io/ipfs/${hash}?format=car`
  await dataDeal(hash,carLink,size,walletClient)
}

const dataDeal = async (cid, carLink, fileSize, walletClient) => {
  try {
    console.log('deal initiated ....')
    const cidHexRaw = new CID(cid).toV1().toString('base16').substring(1)
    const cidHex = '0x' + cidHexRaw

    const extraParamsV1 = [carLink, 10000, false, false]
    const DealRequestStruct = [
      cidHex,
      fileSize,
      false,
      cid,
      940000, //startEpoch - be sure to check while final deploy
      9800000, // end epoch - '👆'
      0,
      0,
      0,
      1,
      extraParamsV1
    ]

    const [account] = await walletClient.getAddresses();
    const { request } = await publicClient.simulateContract({
        account,
        address: dealClient.address,
        abi: dealClient.abi,
        functionName: 'makeDealProposal',
        args: [DealRequestStruct]
      })
      const hash = await walletClient.writeContract(request);
      await publicClient.waitForTransactionReceipt({ hash });
  } catch (error) {
    console.log(error)
    return
  }
}
