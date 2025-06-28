import React from 'react'
import headlogo from '../assets/headlogo.png'
import { Link } from 'react-router-dom'

const Heads = () => {
  return (
    <div>
      <header className='flex justify-between mt-10'>
              <div className='ml-20'>
                  <img src={headlogo} width="100px" height="43.71px" alt="" />
              </div>
      
              <div className=''>
                  <ul className='flex-row gap-10 lg:flex lg:gap-[75px] lg:mr-60'>
                      <Link to="/"><li className='w-[75px] py-[5px] border-t-[2px] border-t-black border-b-black px-[7px] lg:px-[15px] border-b-[2px]'>MAIN</li></Link>
                      <Link to="/Gallery"><li className='lg:hover:px-[15px] lg:hover:py-[5px] hover:w-[85px] hover:border-t-[2px] hover:border-t-black hover:border-b-black hover:border-b-[2px]'>GALLERY</li></Link>
                      <Link to="/Projects"><li className=' hover:w-[90px] hover:border-t-[2px] hover:border-t-black hover:border-b-black hover:px-[5px] lg:hover:px-[15px] lg:hover:py-[5px] hover:border-b-[2px]'>PROJECTS</li></Link>
                      <Link to='/Certificate'> <li className='hover:w-[135px] hover:border-t-[2px] hover:border-t-black hover:border-b-black hover:px-[5px] lg:hover:px-[15px] lg:hover:py-[5px] hover:border-b-[2px]'>CERTIFICATIONS</li></Link>
                      <Link to='/Contact'><li className=' hover:w-[95px] hover:border-t-[2px] hover:border-t-black hover:border-b-black hover:px-[5px] lg:hover:px-[15px] lg:hover:py-[5px] hover:border-b-[2px]'>CONTACTS</li></Link>
                  </ul>
              </div>
            </header>
    </div>
  )
}

export default Heads
