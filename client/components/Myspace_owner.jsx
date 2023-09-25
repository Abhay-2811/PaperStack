
import { get_people } from '@/utils/tableland_utils'

const Myspace_owner = async () => {
    const data = await get_people();

  return (
    <div>Myspace_owner</div>
  )
}

export default Myspace_owner