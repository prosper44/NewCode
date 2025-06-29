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
    <div className="w-full">
      <div className="w-full mx-auto mt-20 p-8 md:p-12 bg-[#2C2C2C] text-white font-semibold text-lg flex flex-col xl:flex-row xl:justify-center xl:gap-[200px] gap-10 items-start">
        <FooterLogo />
        <FooterLinks />
        <FooterContacts />
        <FooterSocialMedia />
      </div>
      <div className="bg-[#2C2C2C] text-center text-white border-t border-[#C8C8C880] p-4">
        <p className="text-[#C8C8C880]"> 2021 All Rights Reserved</p>
      </div>
    </div>
  );
}

function FooterLogo() {
  return (
    <div className="flex justify-center xl:justify-start">
      <img className="h-20" src={footerlogo} alt="" />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="mt-8 xl:mt-0">
      <h1>Information</h1>
      <ul>
        <li className="mt-4">Main</li>
        <li className="mt-4">Gallery</li>
        <li className="mt-4">Projects</li>
        <li className="mt-4">Certifications</li>
        <li className="mt-4">Contacts</li>
      </ul>
    </div>
  );
}

function FooterContacts() {
  return (
    <div className="mt-8 xl:mt-0">
      <h1>Contacts</h1>
      <div className="flex gap-4 mt-4">
        <CiLocationOn />
        <p>1234 Sample street<br />Austin Texas 78704</p>
      </div>
      <div className="flex gap-4 mt-8">
        <FaPhone />
        <p>512.333.2222</p>
      </div>
      <div className="flex gap-5 mt-4">
        <MdOutlineEmail className="mt-1" />
        <p>sampleemail@gmail.com</p>
      </div>
    </div>
  );
}

function FooterSocialMedia() {
  return (
    <div className="mt-8 xl:mt-0">
      <p>Social Media</p>
      <div className="flex gap-10 mt-4">
        <FaFacebookF />
        <FaTwitter />
        <BsLinkedin />
        <FaPinterestP />
      </div>
    </div>
  );
}

export default Footer;


