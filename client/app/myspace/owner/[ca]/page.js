'use client'
import React from 'react'
import CsvDownloadButton from 'react-json-to-csv'
import { useState } from 'react'
import data_deal from '@/utils/data_deal'
import { useWalletClient } from 'wagmi'
import { filecoinCalibration } from 'wagmi/chains'
import Loading from '@/app/loading'
import { ClipLoader } from 'react-spinners'
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
  const [downloaded, setDownloaded] = useState(false)
  const [finalData, setFinalData] = useState()
  const [walletClient, setWalletClient] = useState()
  const [loading, setLoading] = useState({ bool: false, text: '' })
  const [uploaded, setUploaded] = useState(false)

  let wc
  if (typeof window !== 'undefined') {
    const { data: walletClient } = useWalletClient({
      chainId: filecoinCalibration.id,
      onError (error) {
        console.log('Error', error)
      }
    })
    wc = walletClient
  }
  const data = await getContributions(params.ca)
  console.log(data)
  let final_contribution = new Array()

  data.map(value => {
    if (typeof value.contribution_json != 'string') {
      final_contribution = [...final_contribution, value.contribution_json]
    }
  })

  console.log(final_contribution)

  const handleSubmit = () => {
    setDownloaded(true)
    setFinalData(final_contribution[0])
    console.log(wc)
    setWalletClient(wc)
  }

  const createDeal = async () => {
    setLoading({ bool: true, text: 'Creating Data Deal on FVM' })
    await data_deal(finalData, walletClient)
    setLoading({ bool: false, text: '' })
    setUploaded(true)
  }

  if (loading.bool) {
    return (
      <div className='flex align-middle text-2xl ml-48 mt-32 border border-spacing-10 p-10 w-3/4 rounded-md border-green-400'>
      <ClipLoader color='#31C48D' size={50} />
      <span className=' text-green-400 ml-5 mt-3'>{loading.text}Creating deal on FVM</span>
    </div>
    )
  }

  if (uploaded) {
    return (
      <div className='flex flex-col text-2xl ml-48 mt-32 border border-spacing-10 p-10 w-3/4 rounded-md border-green-400'>
        ✅ Deal Proposed on FVM, Once the deal is picked up by SP's your
        perpetual storage would begin !!
      </div>
    )
  }

  return (
    <div className='flex flex-col text-2xl ml-48 mt-32 border border-spacing-10 p-10 w-3/4 rounded-md border-green-400'>
      {downloaded ? (
        <>
          Backup generated data to FVM for perpetual, decentralized and cheap
          storage.
          <button
            className='focus:outline-none text-2 bg-green-400 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-max mt-20'
            onClick={createDeal}
          >
            Create deal
          </button>
        </>
      ) : (
        <>
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
            Ending DAO will only take audited data and return you csv version.
          </p>

          <button
            type='button'
            className='focus:outline-none text-2 bg-green-400 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-max mt-20'
            onClick={handleSubmit}
          >
            <CsvDownloadButton
              data={final_contribution[0]}
              filename={`data_${params.ca}`}
            ></CsvDownloadButton>
          </button>
        </>
      )}
    </div>
  )
}

export default owner
