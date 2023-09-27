import React from 'react'

export default function Tile() {
  return (
    <div className='bg-[#d4c7af] w-3/6 px-14 py-10 text-[#131313] opacity-90 rounded-[3.5rem]'>
        <div className='tile-top'>
            <span>image</span>
            <span>name</span>
        </div>
        <div className='tile-body'>
            <span className='font-bold text-2xl'>title of the blog</span>
            <p className='font-medium text-xl'>description of the blog description of the blog description of the blog description of the blog </p>
        </div>
    </div>
  )
}
