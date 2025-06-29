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


function Gallery() {
  return (
    <div className="mt-20">
      <div className="ml-10 lg:ml-20">
        <h1 className="text-5xl lg:text-8xl leading-tight text-[#BDBDBD]">Photo</h1>
        <h1 className="text-5xl lg:text-8xl font-bold">Gallery</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 mx-auto lg:grid-cols-3 xl:grid-cols-5 p-5">
        <img className="w-full h-auto" src={gallery1} alt="" />
        <img className="w-full h-auto" src={gallery1} alt="" />
        <img className="w-full h-auto" src={gallery2} alt="" />
        <img className="w-full h-auto" src={gallery3} alt="" />
        <img className="w-full h-auto" src={gallery4} alt="" />
        <img className="w-full h-auto" src={gallery5} alt="" />
        <img className="w-full h-auto" src={gallery6} alt="" />
        <img className="w-full h-auto" src={gallery7} alt="" />
        <img className="w-full h-auto" src={gallery8} alt="" />
        <img className="w-full h-auto" src={gallery9} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
