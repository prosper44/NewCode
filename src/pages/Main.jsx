import React from 'react'
import Heads from '../components/Heads'
import house from '../assets/house.png'
import glass1 from '../assets/glass1.jpg'
import glass2 from '../assets/glass2.jpg'
import glass3 from '../assets/glass3.jpg'
import { GoArrowRight } from "react-icons/go";
import frame2 from '../assets/frame2.png'
import frame3 from '../assets/frame3.png'
import frame4 from '../assets/frame4.png'
import frame5 from '../assets/frame5.png'
import person from '../assets/person.jpg'

const Main = () => {
 
  return (
    <div>
     

      <div className='flex-row justify-center  xl:flex    mt-10'>
        <div className='mt-[100px] lg:mt-[350px] ml-[100px] sm:ml-[230px] lg:ml-[100px] xl:ml-[400px]'>
          <h1 className='font-roboto text-[#BDBDBD] text-[60px] lg:text-[84px] leading-[40px]'>PROJECT</h1>
          <h1 className='font-roboto text-[#333333] text-[60px] lg:text-[74px] font-bold'>Lorum</h1>
        </div>

        <div className='ml-[90px] sm:ml-[230px] w-[500px] lg:w-[1100px] lg:ml-[150px]'>
          <img  src={house}  alt="" />
        </div>
      </div>

      <div className='   xl:flex xl:gap-10 border-none py-10 px-30 xl:w-[1250px] lg:justify-end ml-[100px] md:ml-[260px]  bg-[#FBFBFB] '>
          <div className='flex'>
            <div>
              <img className='h-[200px] w-[200px] lg:h-[340px] lg:w-[330px]' src={glass1}  alt="" />
              <img className='mt-10 h-[100px] w-[200px] lg:h-[200px]lg:w-[330px]'  src={glass2}  width="330px" alt="" />
            </div>

            <div>
              <img className='h-[300px] w-[200px] lg:h-[420px] ml-10 mt-[60px]' src={glass3}   alt="" />
            </div>
          </div>

        <div className='mt-8 font-roboto'>
          <h1 className='text-[60px] lg:text-[74px] text-[#BDBDBD]'>About</h1> <br/>
          <p className='text-[17px] lg:text-[23px] text-[#000000]'>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the<br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and<br/> scrambled it to make a type specimen book. It has<br/> survived not only five centuries, but also the leap into <br/> electronic typesetting, remaining essentially unchanged.</p>
          <br/><br/>
          
          <div className='flex p-9 border-none bg-white w-[300px] justify-center'>
            <button>READ MORE</button>
            <GoArrowRight className='text-2xl ml-6 font-semibold'/>
          </div>
        </div>
      </div>

      <div className='mt-40'>
        <h1 className='ml-[100px] text-center lg:text-[70px]  text-[#BDBDBD] text-[50px]  '>Main Focus/Mission Statement</h1>
        <div className='ml-[100px] md:flex md:gap-5 md:justify-center items-center lg:flex lg:gap-10 lg:justify-center lg:items-center'>
            <div className='flex '>
                 <div><h1 className='font-extrabold text-[#F2F2F2] text-[200px]  lg:text-[290px]'>1</h1></div> 
                 <div className='mt-[100px] lg:mt-[130px] text-[20px] lg:text-[25px] xl:text-w-[33px] ml-10 '><p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Sed efficitur, lectus et<br/> facilisis placerat.</p></div>
            </div>

            <div className='flex '>
                 <div><h1 className='font-extrabold text-[#F2F2F2] text-[200px] lg:text-[290px]'>2</h1></div> 
                 <div className='mt-[100px] lg:mt-[130px] text-[20px] lg:text-[25px] xl:text-w-[33px] ml-10 '><p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Sed efficitur, lectus et<br/> facilisis placerat.</p></div>
            </div>
          </div>
      </div>


      <div className='ml-[90px] md:ml-[200px]  '>
        <h1 className='xl:mr-[450px] text-[90px] text-[#BDBDBD]'>Our Projects</h1>
        <div>
          <div className='xl:flex lg:flex-row mt-[90px]  xl:gap-10 '>
            <div className=' p-10  border bg-black md:w-[500px]  h-[450px] justify-center'>
              <h1 className='text-[50px] lg:text-[90px]  text-white p-10 leading-[89px]  font-extrabold'>Sample<br/> Project</h1>
              <div className='flex mt-10'>
                <button className='text-white '>VIEW MORE</button>
                <GoArrowRight className='text-2xl text-white ml-6 font-semibold'/>
              </div>
          </div>
          <div className='mt-10 '>
             <img className='w-[600px] md:w-[500px] md:mt-10 xl:w-[750px] h-[400px]' src={frame2} alt="" />
          </div>
           
          </div>

          <div className='md:mr-[100px]  md:flex-row lg:flex lg:gap-10 lg:ml-[110px] lg:justify-center xl:flex    mt-10'>
            <img className='w-[600px]  md:w-[600px] lg:w-[300px] h-[310px] ' src={frame3}  alt="" />
            <img className='mt-10 w-[600px]  h-[310px] md:mt-10 lg:w-[400px]' src={frame4} alt="" />
            <img className='mt-10 w-[600px]  h-[310px] md:mt-10  lg:w-[300px]' src={frame5} alt="" />
          </div>
        </div>
      </div>

      <div className='flex border px-10 py-8 mt-10 w-[300px] ml-[90px] md:ml-[200px] lg:ml-[1000px]  bg-[#333333]'>
        <button className='text-white flex text-center'>ALL PROJECTS</button>
        <GoArrowRight className='text-2xl text-white ml-6 font-semibold'/>
      </div>


      <div className='ml-[90px] md:ml-[200px] xl:flex xl:gap-10 xl:justify-center mt-20'>
        <div className=''>
          <h1 className=' text-[#BDBDBD] text-[50px] lg:text-[90px]' >Contact Us</h1>
          
           <label className='p-5 bg-[#F3F3F3] border  mt-10'>
            <span>Name</span><input className='bg-[#F3F3F3] w-[370px] lg:w-[470px] p-4' type='name'/> <br />
          
           </label><br/> <br/>

           <label className='p-5 bg-[#F3F3F3] border  '>
            <span>Phone Number</span><span className='text-red-700 '>*</span><input className='bg-[#F3F3F3] w-[300px] lg:w-[400px] p-4' type='name'/> <br />
          
           </label><br/> <br/>

           <label className='p-5 bg-[#F3F3F3] border  mt-10'>
            <span>Email</span><span className='text-red-700'>*</span><input className='bg-[#F3F3F3] w-[370px] lg:w-[470px] p-4' type='name'/> <br />
          
           </label><br/> <br/>

           <label className='p-5 bg-[#F3F3F3] border '>
            <span>Interested In</span><input className='bg-[#F3F3F3] w-[323px] lg:w-[420px] p-4' type='name'/> <br />
          
           </label> <br/> <br/>

           <label className=' bg-[#F3F3F3] border '>
             <textarea className='bg-[#F3F3F3] w-[452px] lg:w-[550px] h-[200px] p-4'>Message</textarea>
           </label>
        </div>

        <div>
          <img className='w-[400px] lg:w-[800px] h-[600px] mt-[150px]' src={person} alt="" />
        </div>
      
      </div>
       <div className='bg-[#2C2C2C] mt-[90px] flex w-[250px] md:ml-[400px] ml-[135px]'>
        <button className='text-white  p-[40px] '>SEND EMAIL</button>
        <GoArrowRight className='text-white mt-[40px] text-2xl '/>
       </div>


    
    </div>

    
  )
}

export default Main
