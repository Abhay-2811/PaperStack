'use client'
import { useWalletClient } from 'wagmi'
import { filecoinCalibration } from 'wagmi/chains'
import { add_contributor } from '@/utils/contract_interaction'
import { useState } from 'react'
import { add_row_people } from '@/utils/tableland_utils'
import Loading from '@/app/loading'

const fetchDataWithId = async id => {
  let headersList = {
    Accept: '*/*'
  }

  let response = await fetch(
    `https://testnets.tableland.network/api/v1/query?statement=select%20%2A%20from%20dao_data_314159_337%20where%20id%3D${id}`,
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
  return data[0]
}

const id = async ({ params }) => {
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

  const [qty, setQty] = useState(0)
  const [loading, setLoading] = useState({ bool: false, text: '' })
  const [alldone, setAlldone] = useState(false)

  const data = await fetchDataWithId(params.id)

  const handleChange = e => {
    e.preventDefault()
    setQty(e.target.value)
  }

  const handleClick = async e => {
    e.preventDefault()
    setLoading({ bool: true, text: 'contract interation...' })
    await add_contributor(data.contract_add, qty, wc)
    setLoading({ bool: true, text: 'table update...' })
    await add_row_people(data.contract_add, wc.account.address, 'contributor')
    setAlldone(true)
  }
  if (alldone) {
    return (
      <div className='flex flex-col space-y-10 ml-[10%] mt-[10%] content-center align-middle '>
        <h1 className='text-5xl font-bold text-blue-400 content-center'>
          Added Contributor
        </h1>
        <p>
          Note: Data would reflect on jobs page in few minutes due to on-chain
          table updation.
        </p>
      </div>
    )
  }
  if (loading.bool) {
    return <Loading text={loading.text} />
  }
  return (
    <div className=' max-w-lg p-6 border rounded-lg shadow bg-gray-800 border-gray-700 ml-[33%] mt-[10%]'>
      <h5 className='mb-2 text-2xl tracking-tight text-white'>
        Commit data to <b>{data.org_name}</b>
      </h5>
      <p className='mb-3 font-normal text-gray-400'>
        <b>Note: </b>You'll be staking 1 FIL to ensure the quality of data
        commited. If auditors find unsatisfactory results they might deny reward
        and stake return
      </p>
      <form onSubmit={handleClick}>
        <input
          type='text'
          id='qty'
          className=' border mb-3 text-sm rounded-lg block w-[30%] p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
          placeholder='Page Quantity'
          required
          onChange={handleChange}
        ></input>
        <button
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'
          type='submit'
        >
          Continue
          <svg
            className='w-3.5 h-3.5 ml-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default id
