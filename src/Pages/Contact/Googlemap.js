import React from 'react'
import { AiFillPhone } from "react-icons/ai"
import { FiMail } from "react-icons/fi"
import { FaMapMarkerAlt, FaFax } from "react-icons/fa"
export default function googlemap() {
  return (
    <div className=' w-full flex flex-col lg:flex-row justify-center flex-nowrap items-center'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.0479295605414!2d36.75205631516889!3d37.60103097979152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152dd7334e6d9bef%3A0xcfb052cf72213b91!2sEslon%20Mutfak%20E%C5%9Fyalar%C4%B1%20San.%20Tic.%20Ltd.%20%C5%9Eti.!5e0!3m2!1str!2str!4v1669572776400!5m2!1str!2str"
        width="100%"
        height="500px"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
      <div className='w-full lg:w-1/2 text-white font-Common bg-[#991900] h-[500px] flex flex-col justfy-center items-start'>
        <div className='flex flex-col justfy-start tracking-widest items-start p-4'>
          <div className='w-full  flex text-2xl flex-row justify-start mb-4 items-center'>
            <AiFillPhone className='mr-4' />
            <h1>Telefon</h1>
          </div>
          <div className='text-lg'>
            <h1>+90 (344) 257 93 30</h1>
          </div>
        </div>
        <div className='flex flex-col justfy-start tracking-widest items-start p-4'>
          <div className='w-full  flex text-2xl flex-row justify-start mb-4 items-center'>
            <FaFax className='mr-4' />
            <h1>Fax</h1>
          </div>
          <div className='text-lg'>
            <h1>+90 (344) 257 93 76</h1>
          </div>
        </div>
        <div className='flex flex-col justfy-start items-start tracking-widest p-4'>
          <div className='w-full text-2xl  flex flex-row justify-start mb-4 items-center'>
            <FiMail className='mr-4' />
            <h1>Email</h1>
          </div>
          <h1 className='text-lg'>info@eslonmutfak.com.tr</h1>

        </div>
        <div className='flex flex-col justfy-start tracking-widest items-start p-4'>
          <div className='w-full flex text-2xl flex-row justify-start mb-4 items-center'>
            <FaMapMarkerAlt className='mr-4' />
            <h1>Adres</h1>
          </div>
          <div className='text-lg'>
            <h1>Organize Sanayi Bölgesi 3. Cd. No:3</h1>
            <h1>Onikişubat/Kahramanmaraş</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
