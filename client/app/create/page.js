'use client'
import ImagesUpload from '../../components/ImagesUpload'
import { useState, useEffect } from 'react'
import { Web3Storage } from 'web3.storage'
import { useWalletClient } from 'wagmi'
import { filecoinCalibration } from 'wagmi/chains'
import { deployContract } from '../../utils/contract_interaction'
import Loading from '../loading'
import { add_row_dao_data, add_row_people } from '../../utils/tableland_utils'

const Create = () => {
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
  const [loading, setLoading] = useState({bool: false, text: ''});
  const [alldone, setAlldone] = useState(false);
  
  
  const api_key = process.env.NEXT_PUBLIC_WEB3_API
  const [formData, setFormData] = useState({
    orgName: '',
    desc: '',
    auditors: '',
    reward: 0,
    pages: 0
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading({bool: true, text: 'generating cid...'})
    const client = new Web3Storage({ token: api_key })
    const cid = await client.put(pages);
    const auditorsArray = JSON.parse(formData.auditors)
    setLoading({bool: true, text: 'deploying contract...'})
    await deployContract(
      JSON.parse(formData.auditors),
      formData.reward,
      formData.pages,
      cid,
      wc
    ).then(async(dao_contract_add) => {
      setLoading({bool: true, text: 'updating tables...'})
      await add_row_dao_data(formData.orgName, formData.desc, wc.account.address, formData.reward, formData.pages, dao_contract_add);
      await add_row_people(dao_contract_add,wc.account.address,'owner');
      await add_row_people(dao_contract_add,auditorsArray[0],'auditor');
      await add_row_people(dao_contract_add,auditorsArray[1],'auditor');
      setAlldone(true);
      setLoading({bool: false, text: ''})
    })
  }
  const [pages, setPages] = useState([])

  if(alldone){
    return(
      <div className='flex flex-col space-y-10 ml-[10%] mt-[10%] content-center align-middle '>
      <h1 className='text-5xl font-bold text-blue-400 content-center'>
      DAO contract has been successfully deployed 🎉
      </h1>
      <p>
        Note: Data would reflect on jobs page in few minutes due to on-chain table updation.
      </p>
    </div>
    )
  }
  if (loading.bool){
    return (
      <Loading text={loading.text}/>
    )
  }
  return (
    <form className='ml-40 mr-40 mt-24 dark' onSubmit={handleSubmit}>
      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='orgName'
          id='orgName'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
          onChange={handleChange}
        />
        <label
          htmlFor='orgName'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Organisation Name
        </label>
      </div>
      <div className='relative z-0 w-full mb-6 group'>
        <textarea
          type='text'
          name='desc'
          id='desc'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
          onChange={handleChange}
        />
        <label
          htmlFor='desc'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Description (About Datatype and Language)
        </label>
      </div>

      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='number'
            name='reward'
            id='reward'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
            onChange={handleChange}
          />
          <label
            htmlFor='reward'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Reward Pool (Total)
          </label>
        </div>
        <div className='relative z-0 w-full mb-6 group'>
          <input
            type='number'
            name='pages'
            id='pages'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
            onChange={handleChange}
          />
          <label
            htmlFor='pages'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Number of Pages
          </label>
        </div>
      </div>

      <div className='relative z-0 w-full mb-6 group'>
        <input
          type='text'
          name='auditors'
          id='auditors'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required
          onChange={handleChange}
        />
        <label
          htmlFor='auditors'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Array of Auditors seperated by comma
        </label>
      </div>

      <div
        class='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 w-4/5'
        role='alert'
      >
        <span class='font-medium'>
          <b>Warning!</b>
        </span>{' '}
        Auditors have the power to refuse rewards to contributors and make sure
        they are trusted personnel to the organization.
      </div>

      <div className='relative z-0 w-full mb-6 group'>
        <ImagesUpload setPages={pages => setPages(pages)} />
      </div>
      <button
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        type='submit'
      >
        Submit
      </button>
    </form>
  )
}

export default Create
