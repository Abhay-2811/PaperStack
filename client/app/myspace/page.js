// user comes to this place to see his data
'use client'
import { useWalletClient } from 'wagmi'
import { filecoinCalibration } from 'wagmi/chains'

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
    <div>
      {data.map((value, index) => (
        <div key={index}>
          {value.role == 'owner' ? <>Is owner</> : <></>}
          {value.role == 'auditor' ? <>Is auditor</>:<></>}
          {value.role == 'contributor' ? <>Is contributor</>:<></>}
        </div>
      ))}
    </div>
  )
}

export default myspace
