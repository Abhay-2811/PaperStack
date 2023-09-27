'use client'
import CsvDownloadButton from 'react-json-to-csv'

const getContributors = async dao_add => {
  let headersList = {
    Accept: '*/*'
  }

  let response = await fetch(
    `https://testnets.tableland.network/api/v1/query?statement=SELECT+%2A+FROM+people_314159_395+where+dao_add%3D%27${dao_add}%27+and+role%3D%27contributor%27`,
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

const audit = async ({ params }) => {
  const data = await getContributors(params.ca)
  return (
    <div>
      {data.map((value, index) => (
        <div key={index}>
          {
            value.conribution_json !== '' ? <>Has Contributed</> : <></>
          }
        </div>
      ))}
    </div>
  )
}

export default audit
