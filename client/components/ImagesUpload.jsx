'use client'

import {useState} from 'react'

const ImagesUpload = (props) => {
  const [images, setImages] = useState(0);
  
  const handleImgSelection = e => {
    if (e.target.files) {
      const _files = Array.from(e.target.files)
      setImages(_files.length)
      props.setPages(_files)
    }
  }


  return (
    <>
      <label
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
        for='pages_upload'
      >
        Upload Pages
      </label>
      <input
        className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
        id='pages_upload'
        type='file'
        multiple
        webkitdirectory="true"
        onChange={handleImgSelection}
      />
      {images ? <div className='border border-blue-600 text-sm p-2 w-60 rounded-lg  mt-3'>
        Selected {images} files
      </div>:<></>}
    </>
  )
}

export default ImagesUpload
