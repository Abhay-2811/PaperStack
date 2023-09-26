'use client'
import Image from 'next/image'
import Loading from './loading'
// import { add_row_people, createTable } from '@/utils/tableland_utils'
import { add_contribution } from '@/utils/tableland_utils'
export default function Home () {
  const handleSubmit = async () => {
    await add_contribution('0x72d2F62A93305752CC57D48Ea217CA687EA43dc0','0x285c7ae7349ac6b03e22e0c81c9b283766c3fb90',{"id":'1'});
  }
  return (
    <>
      <button onClick={handleSubmit}>CLick</button>
    </>
  )
}
