import React from 'react'
import map from '../assets/map.png'
const Contact = () => {
  return (
    <div>
      <div className='ml-[110px] mt-[90px]'>
             
        </div>


        <div className='ml-[100px] md:ml-[90px] lg:flex lg:gap-10 lg:justify-center'>
           <div>
             <h1 className='text-[80px] leading-[50px] text-[#BDBDBD]'>Contact</h1>
             <h1 className='text-[80px] font-bold'>Information</h1>
             <h1 className='text-[25px] font-bold mt-10'>Company Name</h1>
            <h1  className='text-[25px] leading-[50px] '>1234 Sample Street Austin Texas 76401</h1>
            <h1  className='text-[25px] font-bold mt-[60px]'>512.333.2222</h1>
            <p className='mt-[60px] text-[20px]'>sampleemail@gmail.com</p>

            <button className='text-center py-[30px] px-[80px] bg-[#2C2C2C] text-white mt-[60px]'>CONTACT US</button>
           </div>
            <div className='sm:mt-10'>
                <img className='lg:w-[600px]' src={map} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contact
