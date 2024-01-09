// user comes to this place to see his data
'use client'
import { useWalletClient } from 'wagmi'
import { filecoinCalibration } from 'wagmi/chains'
import Myspace_auditor from '@/components/Myspace_auditor'
import Myspace_contri from '@/components/Myspace_contri'
import Myspace_owner from '@/components/Myspace_owner'
import { Tabs, Tab } from '@nextui-org/tabs'
import ProposalCard from '@/components/ProposalCard'
import { useAccount } from 'wagmi'

const fetchDataWithAdd = async address => {
  let headersList = {
    Accept: '*/*'
  }

  let response = await fetch(
    `https://testnets.tableland.network/api/v1/query?statement=select%20%2A%20from%20people_314159_395%20where%20user_add%3D%27${address}%27`,
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

const fetchProposalData = async () => {
  let headersList = {
    Accept: '*/*'
  }

  let response = await fetch(
    `https://testnets.tableland.network/api/v1/query?statement=SELECT%20%2A%0AFROM%20dao_data_314159_337%0AJOIN%20dao_proposals_314159_680%20ON%20dao_data_314159_337.contract_add%20%3D%20dao_proposals_314159_680.contractAdd`,
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

const myspace = async () => {
  const { isConnected, address } = useAccount()
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

  const data = await fetchDataWithAdd(wc?.account.address)
  const proposalData = await fetchProposalData()

  return (
    <div className='flex flex-col items-center'>
      <Tabs aria-label='options' className='dark w-[50%] mt-8' fullWidth={true}>
        <Tab
          key='proposals'
          title='Proposals'
          className='w-screen items-center'
        >
          {proposalData?.map((data, index) => (
            <div className=' ml-40 mt-20 w-[80%]'>
              {isConnected ? (
                <ProposalCard data={data} key={index} address={address} />
              ) : (
                <>Wallet Not Connected</>
              )}
            </div>
          ))}
        </Tab>
        <Tab
          key='daos'
          title='Dao Involvements'
          className='w-screen items-center overflow-clip'
        >
          {data.map((value, index) => (
            <div key={index} className='ml-40 mt-20 w-[80%]'>
              {value.role == 'owner' ? <Myspace_owner data={value} /> : <></>}
              {value.role == 'auditor' ? (
                <Myspace_auditor data={value} />
              ) : (
                <></>
              )}
              {value.role == 'contributor' ? (
                <Myspace_contri data={value} />
              ) : (
                <></>
              )}
            </div>
          ))}
        </Tab>
      </Tabs>
    </div>
  )
}

export default myspace
