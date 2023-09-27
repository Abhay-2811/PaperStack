/* flow : 
1. Get data from db and display 
2. Create cta button that goes to dynamic page of job 
3. there user can apply to do the no of pages he wants 

*/

import JobCard from '../../components/JobCard'
import { get_dao_data } from '@/utils/tableland_utils'

export default async function Jobs () {
  const data = await get_dao_data();

  return (
    <div className=' ml-40 mt-20'>
      {data.map(value => (
        <div key={value}>
          {
            <JobCard
              // id={value.id}
              // desc={value.description}
              // by={value.org_name}
              // rpp={value.reward / value.pages}
              data = {value}
            />
          }
        </div>
      ))}
    </div>
  )
}
