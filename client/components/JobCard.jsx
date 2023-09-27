// card representing a job

/*
req: 
- By [Mostly Country or org]
- Job ID
- Desc
- Reward Per page
*/
import Link from 'next/link'
const JobCard = props => {
  return (
    // <div className="flex flex-col h-60 mb-10 item-center bg-gray-800 border border-gray-700 p-6 m-6 rounded-md w-4/5 right-3/4">
    //     <h1>BY: {props.by}</h1>
    //     <p>Id: {props.id}</p>
    //     <p>desc: {props.desc}</p>
    //     <p><b>RPP: {props.rpp}</b></p>
    //     <Link href={`/jobs/${props.id}`}><button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-32 mt-5">Join</button></Link>
    <div className='flex flex-col text-lg h-max mb-20 space-y-4 item-center bg-gray-800 border shadow-lg shadow-purple-400 border-gray-700 p-6 m-6 rounded-md w-4/5 right-3/4'>
      <h1 className='text-2xl'>{props.data.org_name}</h1>
      <hr class='h-px my-5 border-0 bg-purple-400'></hr>
      <h1>
        <span className='text-gray-300'>
          <b>Contract Address: {''}</b>
        </span>
        <a
          href={`https://calibration.filfox.info/en/address/${props.data.contract_add}`}
          target='_blank'
        >
          <span className='text-decoration-line: underline underline-offset-4'>
            {props.data.contract_add}
          </span>
        </a>
      </h1>
      <h1>
        <span className='text-gray-300'>
          <b>Description: {''}</b>
        </span>

        <span className=''>{props.data.description}</span>
      </h1>
      <h1>
        <span className='text-gray-300'>
          <b>Reward Per Paper (RPP): {''}</b>
        </span>

        <span className=''>{props.data.reward / props.data.pages} FIL</span>
      </h1>
      <Link href={`/jobs/${props.data.id}`}>
        <button
          type='button'
          class='focus:outline-none text-black bg-purple-400 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-32 mt-5'
        >
          Join
        </button>
      </Link>
    </div>
    // </div>
  )
}

export default JobCard

//50597510915499179392016943495283357158305762652415975765010922707632800278817,2093806872777181203481288292431922262474753732518197974293601792653361431682
//50597510915499179392016943495283357158305762652415975765010922707632800278817
