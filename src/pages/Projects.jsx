import React from 'react'
import { GoArrowRight } from "react-icons/go";
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const Projects = () => {
  return (
    <div>
      <div className='bg-[#FBFBFB] mt-[150px]'>
        <div className='ml-[166px]'>
              <h1 className='text-[80px] leading-[20px] text-[#BDBDBD]'>Our</h1>
              <h1 className='text-[80px] font-bold'>Projects</h1>
        </div>

        <div className='sm:ml-[150px] md:ml-[270px] md:flex-col lg:flex-row lg:justify-center xl:ml-[10px] xl:flex xl:justify-center xl:gap-10 xl:mt-[40px] border-t w-[1650px] py-10'>
            
            <div>
                <img className='w-[450px] md:w-[300px] lg:w-[500px]' src={project1} alt="" />
            </div>
            <div>
                <h1 className='mt-10 text-5xl text-[#BDBDBD]'>Sample Project </h1>
                <p className='mt-[50px] ml-[40px]  sm:text-[20px] lg:mt-[110px] lg:text-2xl leading-8'>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and<br/> scrambled it to make a type specimen book.</p>

                <div className='flex  lg:mt-[90px] bg-white p-10 w-[250px]'>
                                <button className=' '>VIEW MORE</button>
                                <GoArrowRight className='text-2xl font-semibold'/>
                </div>
            </div>
        </div>

        <div className='sm:ml-[150px] md:ml-[270px] md:flex-col lg:flex-row lg:justify-center xl:ml-[10px] xl:flex xl:justify-center xl:gap-10 xl:mt-[40px] border-t w-[1650px] py-10'>
            
            <div>
                <img className='w-[450px] md:w-[300px] lg:w-[500px]' src={project2} alt="" />
            </div>
            <div>
                <h1 className='mt-10 text-5xl text-[#BDBDBD]'>Sample Project 2 </h1>
                <p className='mt-[50px] ml-[40px]  sm:text-[20px] lg:mt-[110px] lg:text-2xl leading-8'>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and<br/> scrambled it to make a type specimen book.</p>

                <div className='flex mt-[90px] bg-white p-10 w-[250px]'>
                                <button className=' '>VIEW MORE</button>
                                <GoArrowRight className='text-2xl font-semibold'/>
                </div>
            </div>
        </div>

        <div className='sm:ml-[150px] md:ml-[270px] md:flex-col lg:flex-row lg:justify-center xl:ml-[10px] xl:flex xl:justify-center xl:gap-10 xl:mt-[40px] border-t w-[1650px] py-10'>
            
            <div>
                <img className='w-[450px] md:w-[300px] lg:w-[500px]' src={project3} alt="" />
            </div>
            <div>
                <h1 className='mt-10 text-5xl text-[#BDBDBD]'>Sample Project 3 </h1>
                <p className='mt-[50px] ml-[40px]  sm:text-[20px] lg:mt-[110px] lg:text-2xl leading-8'>Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry. Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and<br/> scrambled it to make a type specimen book.</p>

                <div className='flex mt-[90px] bg-white p-10 w-[250px]'>
                                <button className=' '>VIEW MORE</button>
                                <GoArrowRight className='text-2xl font-semibold'/>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Projects
