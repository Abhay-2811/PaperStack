'use client'
import Image from 'next/image'
import Loading from './loading'

export default function Home() {
  const handleSubmit = async()=>{
    await createTable("dao_data","id integer primary key, org_name text, owner_add text, description text, reward integer, pages integer, contract_add text")
  }
  return (
    <>
    <Loading text="Something"/>
    </>
  )
}


// org creates dao
// dao data: Id, Org Name, Description, Owner_Add, Reward, Pages, Contract Add , dao_data_314159_333
// people: CA, Address, Role(Owner, Contributor, Auditor), ContributionCid (for Contributors)
// 