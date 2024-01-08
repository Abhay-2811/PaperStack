
import Link from "next/link";
import Image from "next/image";
import { publicClient } from "@/utils/viemClient";
import { gov_contract } from "@/utils/contract_data";

const proposalData = async(pid)=>{
    const data = await publicClient.readContract({
        address: gov_contract.address,
        abi: gov_contract.abi,
        functionName: 'proposals',
        args: [pid]
    });
    console.log(data);
}

const ProposalCard = async(props) => {
    const data = props.data;
    await proposalData(data.proposalId);
    console.log(data);
  return (
    <div className='flflex flex-col text-lg h-max mb-10 space-y-4 item-center bg-gray-800 border shadow-lg shadow-purple-400 border-gray-700 p-6 m-6 rounded-md right-3/4' >
    <h1 className='text-2xl'>
        Proposal: {data?.proposalId}<br />{data?.org_name}
    </h1>
    <hr class='h-px my-5 border-0 bg-purple-400'></hr>
    <h1>
      <span className='text-gray-300'>
        <b>Contract Address: {''}</b>
      </span>
      <a
        href={`https://calibration.filfox.info/en/address/`}
        target='_blank'
      >
        <span className='text-decoration-line: underline underline-offset-4'>
          {data?.contract_add}
        </span>
      </a>
    </h1>
    <h1>
      <span className='text-gray-300'>
        <b>Description: {''}</b>
      </span>

      <span className=''>{data?.description}</span>
    </h1>
    <h1 className='flex space-x-3'>
      <span className='text-gray-300'>
        <b>Reward Per Paper (RPP): {''}</b>
      </span>

      <div className='flex'>
        {'props.data.reward / props.data.pages '}<Image src='/clover.svg' width={30} height={30} alt='token logo' />
      </div>
    </h1>
    <Link href={`/jobs/${'props.data.id'}`}>
      <button
        type='button'
        class='focus:outline-none text-black bg-purple-400 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-32 mt-5'
      >
        Join
      </button>
    </Link>
  </div>
  )
}

export default ProposalCard