import React from 'react'
import Heads from '../components/Heads'
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
import gallery5 from '../assets/gallery5.jpg'
import gallery6 from '../assets/gallery6.jpg'
import gallery7 from '../assets/gallery7.jpg'
import gallery8 from '../assets/gallery8.jpg'
import gallery9 from '../assets/gallery9.jpg'


const Gallery = () => {
  return (
    <div>
      <div className='mt-[180px]'>
        <div className='ml-[100px]'>
              <h1 className='text-[100px] leading-[20px] text-[#BDBDBD]'>Photo</h1>
              <h1 className='text-[100px] font-bold'>Gallery</h1>
        </div>

        <div className='grid grid-cols-2 gap-5 ml-[100px] md:grid md:grid-cols-2 md:gap-5 md:ml-[200px] lg:grid lg:grid-cols-3 lg:ml-[200px] lg:gap-5  xl:grid xl:grid-cols-5 xl:gap-5 xl:ml-[100px]    '>
            <img className='w-[255px] h-[330px]' src={gallery1} alt="" />
            <img className='w-[255px] h-[330px]' src={gallery1} alt="" />
            <img className='w-[255px] h-[330px]' src={gallery2} alt="" />
            <img className='w-[255px] h-[330px]' src={gallery3} alt="" />
            <img className='w-[255px] h-[330px]' src={gallery4} alt="" />
            <img className='w-[255px] h-[330px]' src={gallery5} alt="" />
            <img className='w-[255px] h-[330px]' src={gallery6} alt="" />
            <img className='w-[255px] h-[330px]' src={gallery7}alt="" />
            <img className='w-[255px] h-[330px]' src={gallery8} alt="" />
            <img className='w-[255px] h-[330px]' src={gallery9} alt="" />
            
            

        </div>
      </div>
    </div>
  )
}

export default Gallery
