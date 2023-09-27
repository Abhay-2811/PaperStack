import Link from 'next/link'
import { get_alloted_pages } from '@/utils/contract_interaction'

const fetchDataWithId = async contract_add => {
  let headersList = {
    Accept: '*/*'
  }

  let response = await fetch(
    `https://testnets.tableland.network/api/v1/query?statement=select%20%2A%20from%20dao_data_314159_337%20where%20contract_add%3D%27${contract_add}%27`,
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
const Myspace_contri = async props => {
  const dao_data = await fetchDataWithId(props.data.dao_add);
  return (
    <div className='flex flex-col text-lg h-max mb-10 space-y-4 item-center bg-gray-800 border shadow-lg shadow-red-400 border-gray-700 p-6 m-6 rounded-md w-4/5 right-3/4'>
      <h1 className='text-2xl'>Contributor</h1>
      <hr class='h-px my-5 border-0 bg-red-400'></hr>
      <h1>
        <span className='text-gray-300'><b>Contract Address: {''}</b></span>
        <a
          href={`https://calibration.filfox.info/en/address/${props.data.dao_add}`}
          target='_blank'
        >
          <span className='text-decoration-line: underline underline-offset-4'>
            {props.data.dao_add}
          </span>
        </a>
      </h1>
      <h1>
        <span className='text-gray-300'><b>Status: {''}</b></span>
        {props.data.contribution_json !== '' ? (
          <>Waiting for Auditors to accept contribution and release reward</>
        ) : (
          <>Not Yet Committed Data</>
        )}
      </h1>
      <h1>
        <span className='text-gray-300'><b>Description: {''}</b> </span>
        {dao_data.description}
      </h1>

      <Link href={`myspace/contributor/${props.data.dao_add}`}>
        <button
          type='button'
          class='focus:outline-none text-2 bg-red-400 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-32 mt-5'
        >
          Contribute
        </button>
      </Link>
    </div>
  )
}

export default Myspace_contri
