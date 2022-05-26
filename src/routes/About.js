import React from 'react'
import logo from "../assets/logo-half.png";

const str = "The 'Decypher Project', prepared by the senior students of Hacettepe University, aims to provide information about Cryptology and Cryptology Methods."
const About = () => {
  return (
    <div className='w-full h-[400px] flex items-center justify-center mt-[200px]'>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className='col-span-2 pt-[60px]'>
        <p className='text-white font-light text-xl'>
          The <strong className='font-bold'>'Decypher Project'</strong>, prepared by the senior students of Hacettepe University, aims to provide information about Cryptology and Cryptology Methods.
        </p>
        
        <h3 className='mt-12 text-white font-medium text-3xl mb-4'>Prepared By</h3>
        <ul className=' list-disc text-white pl-3'>
          <li>
            <p className='text-white font-medium text-lg'>Sena Ermiş</p>
            <p className='text-gray-400 font-medium text-base'>21937896</p>
          </li>
          <li>
            <p className='text-white font-medium text-lg'>Özge Hamzaoğlu</p>
            <p className='text-gray-400 font-medium text-base'>21937987</p>
          </li>
          <li>
            <p className='text-white font-medium text-lg'>Enes Ergün</p>
            <p className='text-gray-400 font-medium text-base'>21820817</p>
          </li>
          <li>
            <p className='text-white font-medium text-lg'>Kadri Çabuk</p>
            <p className='text-gray-400 font-medium text-base'>21520528</p>
          </li>
        </ul>
        </div>
        
      </div>
      
    </div>
  )
}

export default About;