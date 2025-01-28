import React, { useState } from 'react'
import {FaInstagram} from 'react-icons/fa'
import { CiFacebook } from "react-icons/ci";
import { TfiTwitter } from "react-icons/tfi";
import DoctorHeader from './DoctorHeader';
import { Link } from 'react-router-dom';
import DoctorNavbar from './DoctorNavbar';

const DoctorHome = () => {
   
  return (
    <>
    <div>
    <header className='bg-blue-400 flex justify-around items-center p-2 text-white fixed w-full'>
        <div className='flex gap-1 flex-wrap sm:gap-2 md:gap-3'>
            <div><FaInstagram/></div>
            <div><CiFacebook/></div>
            <div><TfiTwitter/></div>
        </div>

        <div className='flex gap-5 flex-wrap '>
            <div><button>Make an Appointment Now!</button></div>
            <Link to='appointment'><div><button className='ring-2 ring-white'><span className='m-2'>Book an Appointment</span></button></div></Link>
        </div>
    </header>
   <main className='pt-10'>
   <div>
        <div>
           <DoctorHeader/>
        </div>
        <hr  className='border'/>
    </div>
    <div>
        <DoctorNavbar/>
    </div>
   </main>
    </div>
    </>
  )
}

export default DoctorHome