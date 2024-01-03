import React from 'react'
import { pst_token } from '@/utils/contract_data'
import { useState } from 'react'
import { useContractRead } from 'wagmi'
import Link from 'next/link'
import Image from 'next/image'
const BalanceComp = (props) => {
  const [userBalance, setUserBalance] = useState(0)

  const readBalance = useContractRead({
    abi: pst_token.abi,
    address: pst_token.address,
    functionName: 'balanceOf',
    args: [props.address],
    onSuccess (data) {
      setUserBalance(Number(data) / 10 ** 18)
      console.log(Number(data) / 10 ** 18)
    }
  })
  return (
    <Link href='/myspace'>
      <div className='flex items-center justify-between space-x-1 ml-5 bg-black h-{64px} p-1 rounded-lg border border-black px-3'>
        <Image src='/clover.svg' width={30} height={30} alt='token logo' />
        <div>{userBalance}</div>
      </div>
    </Link>
  )
}

export default BalanceComp
