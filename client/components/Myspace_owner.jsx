import Link from 'next/link'

//https://testnets.tableland.network/api/v1/query?statement=SELECT+COUNT%28%2A%29+AS+total_contri+FROM+people_314159_395+where+role%3D%27contributor%27+and+dao_add%3D%270xb59E00B604cb492d3C0bAe8349fbA469f5E94885%27

const no_of_contributors = async dao_add => {
  let headersList = {
    Accept: '*/*'
  }

  let response = await fetch(
    `https://testnets.tableland.network/api/v1/query?statement=SELECT+COUNT%28%2A%29+AS+total_contri+FROM+people_314159_395+where+role%3D%27contributor%27+and+dao_add%3D%27${dao_add}%27`,
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
  return data[0].total_contri;
}

const Myspace_owner = async props => {
  const contri_no = await no_of_contributors(props.data.dao_add)
  return (
    <div className='flex flex-col text-lg h-max mb-10 item-center bg-gray-800 border shadow-lg shadow-green-400 border-gray-700 p-6 m-6 rounded-md w-4/5 right-3/4'>
      <h1 className='text-2xl'>Owner</h1>
      <hr class='h-px my-5 border-0 bg-green-400'></hr>
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
        <span className='text-gray-300'>
          <b>No. of Contributors: {''}</b>{' '}
        </span>
        {contri_no}
      </h1>
      <Link href={`myspace/owner/${props.data.dao_add}`}>
        <button
          type='button'
          class='focus:outline-none text-black bg-green-400 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-32 mt-5'
        >
          End DAO
        </button>
      </Link>
    </div>
  )
}

export default Myspace_owner
