import React from 'react'
import { pst_token } from '@/utils/contract_data'
import { useState } from 'react'
import { useContractRead } from 'wagmi'
import Image from 'next/image'
import { useAccount } from 'wagmi'
import { mint_pst } from '@/utils/contract_interaction'
import { Spinner } from '@nextui-org/spinner'

const BalanceComp = props => {
  const [userBalance, setUserBalance] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [minting, setMinting] = useState({ bool: false, text: 'Mint' })

  const { address } = useAccount()
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
  const toggle = () => {
    setIsOpen(old => !old)
  }
  const transClass = isOpen ? 'flex' : 'hidden'
  const mint = async () => {
    setMinting({ bool: true, text: 'Minting' })
    await mint_pst(address)
    setMinting({ bool: false, text: '✅ Minted 50 PST' })
  }
  return (
    <>
      <div className='relative'>
        <button onClick={toggle}>
          <div className='flex items-center justify-between space-x-1 ml-5 bg-black h-{64px} p-1 rounded-lg border border-black px-3'>
            <Image src='/clover.svg' width={30} height={30} alt='token logo' />
            <div>{userBalance}</div>
          </div>
        </button>
        <div
          className={`absolute items-center right-[2px] top-10 z-30 w-[250px] min-h-[50px] flex flex-col py-4 bg-zinc-600 rounded-md ${transClass}`}
        >
          <h1 className='flex'>
            Mint PST{' '}
            <Image src='/clover.svg' width={30} height={30} alt='token logo' />
            Tokens{' '}
          </h1>
          <button
            className='focus:outline-none text-black bg-green-400 focus:ring-4 focus:ring-green-300 disabled:bg-gray-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-[50%] mt-5'
            onClick={mint}
          >
            {minting.bool ? <Spinner size='sm' /> : <>{minting.text}</>}
          </button>
          <p className='p-10 text-red-300'>
            Already Minted? <br/>It may take few seconds to take effect so wait and
            reload website
          </p>
        </div>
      </div>

      {isOpen ? (
        <div
          className='fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40'
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  )
}

export default BalanceComp
