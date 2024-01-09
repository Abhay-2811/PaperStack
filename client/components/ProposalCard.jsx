import { publicClient } from '@/utils/viemClient'
import { gov_contract, pst_token } from '@/utils/contract_data'
import Image from 'next/image'
import { useContractRead, useWalletClient } from 'wagmi'
import { vote_proposal } from '@/utils/contract_interaction'
import { filecoinCalibration } from 'wagmi/chains'
import { CircularProgress } from '@nextui-org/progress'

const proposalData = async pid => {
  const data = await publicClient.readContract({
    address: gov_contract.address,
    abi: gov_contract.abi,
    functionName: 'proposals',
    args: [pid]
  })
  console.log(data)
}

const ProposalCard = async props => {
  const readBalance = useContractRead({
    abi: pst_token.abi,
    address: pst_token.address,
    functionName: 'balanceOf',
    args: [props.address]
  })
  let wc
  if (typeof window !== 'undefined') {
    const { data: walletClient } = useWalletClient({
      chainId: filecoinCalibration.id,
      onError (error) {
        console.log('Error', error)
      }
    })
    wc = walletClient
  }
  const data = props.data
  await proposalData(data.proposalId)
  console.log(data)
  const handleClick = async (pid, vote) => {
    await vote_proposal(pid, vote, wc)
  }
  return (
    <div className='flex flex-col text-lg h-max mb-10 space-y-4 item-center bg-gray-800 border shadow-lg shadow-purple-400 border-gray-700 p-6 m-6 rounded-md right-3/4'>
      <h1 className='text-2xl'>
        Proposal ID: {data?.proposalId}
        <br />
        {data?.org_name}
      </h1>
      <hr class='h-px my-5 border-0 bg-purple-400'></hr>
      <h1>
        <span className='text-gray-300'>
          <b>Contract Address: {''}</b>
        </span>
        <a href={`https://calibration.filfox.info/en/address/`} target='_blank'>
          <span className='text-decoration-line: underline underline-offset-4'>
            {data?.contract_add}
          </span>
        </a>
      </h1>
      <h1>
        <span className='text-gray-300'>
          <b>Description: {''}</b>
        </span>

        <span className=''>{data?.des}</span>
      </h1>
      <CircularProgress
        label='Progress'
        classNames={{
            indicator: "green",
            track: "red",
            value: "font-semibold text-white",
            label: 'text-lg font-semibold'
          }}
        value={Math.random()*100}
        color='success'
        showValueLabel={true}
      />
      <div className='flex flex-row space-x-4'>
        {Number(readBalance.data) !== 0 ? (
          <>
            <button
              type='button'
              class='focus:outline-none text-black bg-green-400 focus:ring-4 focus:ring-green-300 disabled:bg-gray-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-auto mt-5'
              onClick={() => handleClick(data.proposalId, 1)}
            >
              Vote For Cause
            </button>
            <button
              type='button'
              class='focus:outline-none text-black bg-red-400 focus:ring-4 focus:ring-red-300 disabled:bg-gray-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-auto mt-5'
              onClick={() => handleClick(data.proposalId, 0)}
            >
              Vote Against Cause
            </button>
          </>
        ) : (
          <div class='focus:outline-none text-black bg-gray-400 focus:ring-4 focus:gray-red-300 disabled:bg-gray-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-auto mt-5'>
            0 Balance Can't vote
          </div>
        )}
      </div>
    </div>
  )
}

export default ProposalCard
