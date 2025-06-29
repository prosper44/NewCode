import React from 'react'
import headlogo from '../assets/headlogo.png'
import { Link } from 'react-router-dom'

function Heads() {
  return (
    <header className="flex justify-between mt-10">
      <HeaderLogo />
      <HeaderNavigation />
    </header>
  );
}

function HeaderLogo() {
  return (
    <div className="ml-20">
      <img src={headlogo} width="100px" height="43.71px" alt="" />
    </div>
  );
}

function HeaderNavigation() {
  return (
    <nav>
      <ul className="flex-row gap-10 lg:flex lg:gap-[75px] lg:mr-60">
        <NavigationLink to="/" label="MAIN" />
        <NavigationLink to="/Gallery" label="GALLERY" />
        <NavigationLink to="/Projects" label="PROJECTS" />
        <NavigationLink to="/Certificate" label="CERTIFICATIONS" />
        <NavigationLink to="/Contact" label="CONTACTS" />
      </ul>
    </nav>
  );
}

function NavigationLink({ to, label }) {
  return (
    <Link to={to}>
      <li className="hover:border-t-[2px] hover:border-t-black hover:border-b-black hover:border-b-[2px] px-[7px] lg:px-[15px] py-[5px]">
        {label}
      </li>
    </Link>
  );
}

export default Heads;