import Link from 'next/link'
const Myspace_auditor = props => {
  return (
    <div className='flex flex-col text-lg h-max mb-10 space-y-4 item-center bg-gray-800 border shadow-lg shadow-blue-400 border-gray-700 p-6 m-6 rounded-md w-4/5 right-3/4'>
      <h1 className='text-2xl'>Auditor</h1>
      <hr class="h-px my-5 border-0 bg-blue-400"></hr>
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
      <Link href={`myspace/audit/${props.data.dao_add}`}>
        <button
          type='button'
          class='focus:outline-none text-black bg-blue-400 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-32 mt-5'
        >
          Audit
        </button>
      </Link>
    </div>
  )
}

export default Myspace_auditor
