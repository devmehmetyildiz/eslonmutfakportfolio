import React from 'react'
import { faSoap, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center mt-12'>
      <h1 className='text-[1.0875em] lg:text-[1.6875em]  mx-auto lg:w-1/3 text-center lg:whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#231f20] font-semibold'>İLETİŞİM  <span className='text-[#991900]'>BİLGİLERİ</span></h1>
      <div className='w-[100%] px-[18%] mt-20 flex flex-col lg:flex-row justify-between items-center'>
        <div className=' flex h-[100%] tracking-wide whitespace-nowrap pt-8  p-2 m-2 flex-col items-start justify-center text-[1.125em] text-[#747474] max-h-[7em] leading-[1.7]'>
          <p>Telefon: +90 (344) 257 93 30</p>
          <p>Fax: +90 (344) 257 93 76</p>

          <p>info@eslonmutfak.com.tr</p>
          
          <h1>Organize Sanayi Bölgesi 3. Cd. No:3</h1>
          <h1>Onikişubat / KAHRAMANMARAŞ</h1>
          
        </div>
        <div className='mt-20 lg:mt-0 flex  flex-col lg:flex-row justify-center items-center'>
          <div className='flex flex-col justify-center items-center h-[100%]'>
            <input className=' h-[3em] text-[1em]  rounded-lg text-[#666666] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#991900]  m-2 p-2' placeholder='İSİM* ' />
            <input className='h-[3em] text-[1em] rounded-lg text-[#666666] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#991900]  m-2 p-2' placeholder='SOY İSİM*' />
          </div>
          <div className='flex flex-col justify-center items-center h-[100%]'>
            <input className='h-[3em] text-[1em] rounded-lg text-[#666666] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#991900]  m-2 p-2' placeholder='TELEFON*' />
            <input className='h-[3em] text-[1em] rounded-lg text-[#666666] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#991900]  m-2 p-2' placeholder='FİRMA' />
          </div>
          <div className='h-[100%]'>
            <input className='h-[7em] text-[1em] rounded-lg text-[#666666] bg-[#f3f3f3] focus:outline focus:outline-offset-2 focus:outline-[#991900]  m-2 p-2' placeholder='MESAJINIZ' />
          </div>
        </div>
      </div>
      <div className='w-[100%] px-[23%] my-4 flex flex-row justify-center lg:justify-end items-end'>
        <button className='mt-4  shadow-lg hover:shadow-none shadow-[#991900] rounded-3xl text-[#fff] flex flex-row justify-center items-center px-4 py-4 transition-all ease-in-out duration-1000 bg-[#991900] hover:bg-[#cb9c67]'>GÖNDER
          <FontAwesomeIcon className=' text-[#fff] text-[2.4vmin]  mr-[2vmin] opacity-25 ml-2' icon={faArrowRight} />
        </button>
      </div>
      <div className='flex my-12 flex-col lg:flex-row  justify-between items-center w-[100%] lg:px-[23%]'>
        <a className='font-Common font-bold cursor-pointer text-[4vmin] line-none text-[#231f20]'>
          eslon
          <span className='text-[#991900]'>mutfak</span>
        </a>
        <a className='font-Common  text-[12px] line-none cursor-pointer text-[#d0d0d0] hover:text-[#991900]'>
          by ARMS TEKNOLOJİ
        </a>
        <p className='font-Common  text-[12px] line-none text-[#d0d0d0] cursor-default'>
          © Eslon Mutfak 2022. Tüm Hakları Saklıdır.
        </p>
      </div>
    </div>
  )
}
