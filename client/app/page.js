'use client'
import Image from 'next/image'
import Loading from './loading'
import { add_row_people } from '@/utils/tableland_utils'
export default function Home() {
  const handleSubmit = async()=>{
    await add_row_people('0x285c7ae7349ac6b03e22e0c81c9b283766c3fb90','0x72d2F62A93305752CC57D48Ea217CA687EA43dc0','owner');
    console.log("done 1");
    await add_row_people('0x1d7fa801bfa079f530d3aae636be4fbbf79495b8','0x72d2F62A93305752CC57D48Ea217CA687EA43dc0','owner');
    console.log("done 2");
    await add_row_people('0xb59E00B604cb492d3C0bAe8349fbA469f5E94885','0x63DAc31bF8c2C972903f2bc303a502587268954d','owner');
    console.log("done 3");
  }
  return (
    <>
    <button onClick={handleSubmit}>CLick</button>
    </>
  )
}

