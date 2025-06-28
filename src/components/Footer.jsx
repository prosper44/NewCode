import React from 'react'
import footerlogo from '../assets/footerlogo.png'
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";


function Footer() {
  return (
    <div className='w-full'>
        <div className='w-full mx-auto mt-[100px] p-20 bg-[#2C2C2C] text-white font-semibold text-2xl  xl:flex xl:justify-center lg:gap-[60px] '>
              <div>
                <img className='ml-[90px] h-[100px]' src={footerlogo} alt="" />
              </div>


              <div className='ml-[90px] mt-[90px]'>
                <h1>Information</h1>
                <ul>
                  <li className='mt-5'>Main</li>
                  <li className='mt-5'>Gallery</li>
                  <li className='mt-5'>Projects</li>
                  <li className='mt-5'>Certifications</li>
                  <li className='mt-5'>Contacts</li>
                </ul>

              </div>

              <div className='ml-[90px] mt-[100px]'>
                <h1>Contacts</h1>
                  <div className='flex gap-5 mt-10'>
                    <CiLocationOn/>
                    <p>1234 Sample street<br/>Austin Texas 78704</p> 
                 
                  </div>

                  <div className='flex gap-5 mt-[50px]'>
                    <FaPhone/>
                    <p>512.333.2222</p>
                  </div>

                  <div  className='flex gap-5 mt-[30px]'>
                    <MdOutlineEmail className='mt-2' />
                    <p>sampleemail@gmail.com</p>
                  </div>
              </div>

              <div className='ml-[90px] mt-[100px]'>
                <p>Social Media</p>
                <div className='flex gap-10 mt-10'>
                <FaFacebookF />
                <FaTwitter/>
                <BsLinkedin/>
                <FaPinterestP/>
              </div>
         </div>
      </div>

     

      <div className='bg-[#2C2C2C] text-center text-white border-t border-[#C8C8C880] p-[40px]'>
        <p className='text-[#C8C8C880]'>© 2021 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
