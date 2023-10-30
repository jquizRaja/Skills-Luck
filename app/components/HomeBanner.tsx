import Image from 'next/image';
import React from 'react'

const HomeBanner = () => {
  return (
    <div className='relative
    bg-gradient-to-r from-sky-600 to-green-400
    mb-8
    '>
      <div className='
       mx-auto
       px-8
       py-12
       flex
       flex-col
       gap-2
       md:flex-row
       items-center
       justify-evenly
      '>
        <div className='
        mb-8
        md:mb-0
        text-center
        '>
          <h1 className='text-4xl 
           md:text-6xl
           font-bold
           text-white
           mb-4
          '>Summer Sale</h1>
          <p className='text-lg md:xl text-white mb-2'>Enjoy sale on Selected items</p>
          <p className='
           text-2xl
           md:text-5xl
           text-yellow-400
           font-bold
          '>Get 50% OFF</p>
        </div>
        <div className='
         w-1/3
         relative
         aspect-video
        '>
          <Image
           src='/homeBanner/sale.jpg'
           height={600}
           width={1000}
           alt='bannerImg'
           className='object-contain'
           priority={true}
           />
        </div>
      </div>  
    </div>
  )
}

export default HomeBanner
