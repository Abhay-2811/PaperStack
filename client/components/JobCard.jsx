
// card representing a job 

/*
req: 
- By [Mostly Country or org]
- Job ID
- Desc
- Reward Per page
*/ 
const JobCard = (props) => {
  return (
    <div className="flex flex-col h-60 mb-10 item-center bg-gray-800 border border-gray-700 p-6 m-6 rounded-md w-4/5 right-3/4">
        <h1>BY: {props.by}</h1>
        <p>Id: {props.id}</p>
        <p>desc: {props.desc}</p>
        <p><b>RPP: {props.rpp}</b></p>
        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-32 mt-5">Join</button>
    </div>
  )
}

export default JobCard


//50597510915499179392016943495283357158305762652415975765010922707632800278817,2093806872777181203481288292431922262474753732518197974293601792653361431682
//50597510915499179392016943495283357158305762652415975765010922707632800278817
