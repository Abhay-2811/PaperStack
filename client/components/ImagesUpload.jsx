'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Web3Storage } from 'web3.storage'


const ImagesUpload = () => {
  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(false)
  const api_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGJjZThiMWY4MTVGM0IxMjhEN2UxNDE0NDVBM2M4NGM4YWE1RkNCYUQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTUwMjM2MDIxNTIsIm5hbWUiOiJwYXBlci1zdGFjayJ9.OggGLsY9v7D0wLdiET01S-SiQmCycySeL9mYRGHkaxk'
const client = new Web3Storage({token: api_key})
  const handleImgSelection = e => {
    if (e.target.files) {
      const _files = Array.from(e.target.files)
      setImages(_files)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const cid = await client.put(images)
    
}

  return (
    <>
      <label
        class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
        for='pages_upload'
      >
        Upload Pages
      </label>
      <input
        class='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
        id='pages_upload'
        type='file'
        multiple
        webkitdirectory="true"
        onChange={handleImgSelection}
      />
      {images.length ? <div className='border border-blue-600 text-sm p-2 w-60 rounded-lg  mt-3'>
        Selected {images.length} files
      </div>:<></>}
      <button onClick={handleSubmit} type='submit'>Upload</button>
    </>
  )
}

export default ImagesUpload
