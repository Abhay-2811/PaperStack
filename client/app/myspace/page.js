// user comes to this place to see his data
'use client'
import { useWalletClient } from 'wagmi'
import { filecoinCalibration } from 'wagmi/chains'
import Myspace_auditor from '@/components/Myspace_auditor'
import Myspace_contri from '@/components/Myspace_contri'
import Myspace_owner from '@/components/Myspace_owner'
import { Tabs, Tab } from '@nextui-org/tabs'

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

const myspace = async () => {
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

  return (
    <div className='flex flex-col items-center w-auto'>
      <Tabs aria-label='options' className='dark w-[60%] mt-8' fullWidth={true}> 
        <Tab key='proposals' title='Proposals'>
          <>Proposals</>
        </Tab>
        <Tab key='daos' title='Dao Involvements'>
          <div className=' mt-20'>
            {data.map((value, index) => (
              <div key={index}>
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
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}

export default myspace
