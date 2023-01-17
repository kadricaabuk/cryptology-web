import React from 'react'
import logo from "../assets/logo-half.png";
import phone from "../assets/PHONE.png";
import phone2 from "../assets/PHONE2.png";
import apiInfo from "../assets/api-intro.png";

const About = () => {
  return (
    <div className='w-full h-["fit-content"] flex items-center justify-center'>
      <div className="grid grid-cols-3 gap-4">
        <div className='fixed'>
          <img src={logo} alt="" width={400}/>
        </div>
        <div className='invisible'>
          <img src={logo} alt="" />
        </div>
        <div className='col-span-2 pt-[60px] pl-[100px]'>
        <p className='text-white font-light text-xl'>
          The <strong className='font-bold'>'Decypher Project'</strong>, has born as a final project of the Cyrptology Introduction Course at Hacettepe University.<br/><br/>Nowadays, aiming to be a web bussines.
        </p>
        <p className='text-white font-medium text-2xl my-[20px]'>Decypher Mobile</p>
        <div className='flex flex-row gap-2'>
          <img src={phone} alt="" width={100}/>
          <img src={phone2} alt="" width={100}/>
        </div>
        <p className='text-white font-medium text-2xl my-[20px]'>Decypher API</p>
        <div className='flex flex-row gap-2'>
          <img src={apiInfo} alt="" width={300}/>
        </div>
        
        <p className='mt-12 text-white font-light text-xl mb-4'>Prepared By <strong className='font-medium'>Kadri Çabuk</strong></p>
        </div>
        
      </div>
      
    </div>
  )
}

export default About;