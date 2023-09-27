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
    setLoading({bool: true, text: 'Deploying contract...'})
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
      <div>
        <h1>
        DAO contract has been successfully deployed.
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

export default Create
