'use client'
import React from 'react'
import CsvDownloadButton from 'react-json-to-csv'

//
const getContributions = async dao_add => {
  let headersList = {
    Accept: '*/*'
  }

  let response = await fetch(
    `https://testnets.tableland.network/api/v1/query?statement=SELECT+contribution_json+FROM+people_314159_395+where+dao_add%3D%27${dao_add}%27`,
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

const owner = async ({ params }) => {
  const data = await getContributions(params.ca)
  console.log(data)
  let final_contribution = new Array()
  // value: {cont_json}
  //value.conti_json = [19][3]
  data.map(value => {
    if (typeof value.contribution_json != 'string') {
      final_contribution = [...final_contribution, value.contribution_json]
    }
  })
  console.log(final_contribution)

  const handleSubmit = () => {}
  return (
    <div className='flex flex-col text-2xl ml-48 mt-32 border border-spacing-10 p-10 w-3/4 rounded-md border-green-400'>
      <h1>
        You are Ending DAO {''}
        <a
          href={`https://calibration.filfox.info/en/address/${params.ca}`}
          target='_blank'
        >
          <span className='text-decoration-line: underline underline-offset-4'>
            {params.ca}
          </span>
        </a>
      </h1>
      <p className='text-md mt-8'>
        Ending DAO will take only audited data and return you csv version.
      </p>

      <button
        type='button'
        class='focus:outline-none text-2 bg-green-400 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-32 mt-20'
        onClick={handleSubmit}
      >
        <CsvDownloadButton data={final_contribution[0]} filename={`data_${params.ca}`}></CsvDownloadButton>
      </button>
    </div>
  )
}

export default owner
