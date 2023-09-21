/* flow : 
1. Get data from db and display 
2. Create cta button that goes to dynamic page of job 
3. there user can apply to do the no of pages he wants 

*/

import JobCard from "../../components/JobCard"

const getData = async () => {
  let headersList = {
    Accept: '*/*'
  }

  let response = await fetch(
    'https://mocki.io/v1/82e12a2f-9a8d-4a0b-9baa-cab659a9f004',
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
export default async function Jobs () {
    const data = await getData()
  return (
    <div className=' ml-40 mt-20'>
      {data.map(value => (
        <div key={value}>{<JobCard id={value.id} desc={value.description} by={value.by} rpp={10} />}</div>
      ))}
    </div>
  )
}
