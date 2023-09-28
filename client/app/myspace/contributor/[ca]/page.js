'use client'
import Papa from 'papaparse'
import { useState } from 'react'
import { add_contribution } from '@/utils/tableland_utils'
import { get_alloted_pages, get_cid } from '@/utils/contract_interaction'
import { useWalletClient } from 'wagmi'
import { filecoinCalibration } from 'wagmi/chains'

const contributor = async ({ params }) => {
  const [files, setFiles] = useState();
  let wc
  let pagesAlloted

  if (typeof window !== 'undefined') {
    const { data: walletClient } = useWalletClient({
      chainId: filecoinCalibration.id,
      onError (error) {
        console.log('Error', error)
      }
    })
    wc = walletClient
  }

  if (wc) {
    const pages_alloted = await get_alloted_pages(params.ca, wc.account.address)
    pagesAlloted = pages_alloted.slice(0,4)
  }
  const cid = await get_cid(params.ca)
  
  
  const handleChange = e => {
    const files = e.target.files
    setFiles(files)
  }

  const handleSubmit = async () => {
    if (files) {
      Papa.parse(files[0], {
        complete: async function (results) {
          console.log('Finished parsing to json, Beginning table edit...')
          await add_contribution(
            wc.account.address,
            params.ca,
            JSON.stringify(results.data)
          )
        }
      })
    } else {
      throw Error('File not uploaded yet')
    }
  }
  return (
    <div className='flex flex-col text-2xl ml-48 mt-32 border border-spacing-10 p-10 w-3/4 rounded-md border-red-400'>
      <h1>
        You are contributing to{' '}
        <a
          href={`https://calibration.filfox.info/en/address/${params.ca}`}
          target='_blank'
        >
          <span className='text-decoration-line: underline underline-offset-4'>
            {params.ca}
          </span>
        </a>
      </h1>
      <div className='grid grid-cols-5 gap-1 mt-10'>
        {pagesAlloted?.map((pageNo, index) => (
          <div
            key={index}
            className='focus:outline-none text-2 bg-red-400 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-max mt-5'
          >
            <a href={`https://${cid}.ipfs.w3s.link/${index+1}.png`} target='_blank'>
              View Page {index+1}
            </a>
          </div>
        ))}
      </div>

      <label
        htmlFor='contribution_csv'
        className='block mb-2 text-lg font-medium text-gray-400 mt-20'
      >
        Upload (.csv,.xlsx,.xls) file of contribution
      </label>
      <input
        id='contribution_csv'
        type='file'
        accept='.csv,.xlsx,.xls'
        onChange={handleChange}
        className='block w-full text-sm  border  rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400'
      />
      <button
        type='button'
        class='focus:outline-none text-2 bg-red-400 focus:ring-4 focus:ring-purple-300 font-semibold rounded-lg text-base px-5 py-2.5 mb-2 w-32 mt-20'
        onClick={handleSubmit}
      >
        Contribute
      </button>
    </div>
  )
}

export default contributor
