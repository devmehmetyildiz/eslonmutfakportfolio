import React from 'react'
import img from '../../assets/img'
import { faSoap, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Clients() {

  const clients = [
    {
      title: 'TÜRKÇE KATALOG',
      img: img.katalogTR,
      url: 'Katalog/katalogTR.pdf'
    },
    {
      title: 'ENGLISH CATALOG',
      img: img.katalogEN,
      url: 'Katalog/katalogEN.pdf'
    },
    {
      title: 'كتالوج عربي',
      img: img.katalogAR,
      url: 'Katalog/katalogAR.pdf'
    },
    {
      title: 'DEUTSCHER KATALOG',
      img: img.katalogDe,
      url: 'Katalog/katalogDE.pdf'
    },
    {
      title: 'CATALOGUE FRANÇAIS',
      img: img.katalogFR,
      url: 'Katalog/katalogFR.pdf'
    },
    {
      title: 'РОССИЙСКИЙ КАТАЛОГ',
      img: img.katalogRU,
      url: 'Katalog/katalogRU.pdf'
    },
    {
      title: 'ΕΛΛΗΝΙΚΟΣ ΚΑΤΑΛΟΓΟΣ',
      img: img.katalogYUN,
      url: 'Katalog/katalogGRE.pdf'
    },
    {
      title: 'POLSKİ KATALOG',
      img: img.katalogPOL,
      url: 'Katalog/katalogPOL.pdf'
    },
  ]

  return (
    <div className='w-[100%]  mx-auto flex flex-col justify-center items-center '>
      <h1 className='text-[1.0875em] lg:text-[1.6875em]  mx-auto lg:w-1/3 text-center whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#231f20] font-semibold'>KATA<span className='text-[#991900]'>LOGLARIMIZ</span></h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 mt-4'>
        {clients.map(item => {
          return <a key={item} href={item.url} target="_blank" rel="noopener noreferrer">
            <div className='group flex flex-col justify-center items-center w-full' >
              <h5 className='text-[#231f20]  group-hover:text-[#991900] text-xl font-Common font-semibold transition-all ease-in-out duration-500'>{item.title}</h5>
              <img className='w-2/3 hover:opacity-100 cursor-pointer transition-all ease-in-out duration-500 opacity-50' src={item.img} alt="" />
            </div>
          </a>
        })}
      </div>
      {/* <div className='mt-8 text-[#fff] font-Common font-bold'>
        <button className='shadow-lg hover:shadow-none shadow-[#991900] rounded-3xl  flex flex-row justify-center items-center px-8 py-[0.8em] transition-all ease-in-out duration-1000 bg-[#991900] hover:bg-[#cb9c67]'>TEKLİF ALMAK İÇİN TIKLAYIN
          <FontAwesomeIcon className=' text-[#fff] text-[2.4vmin]  mr-[2vmin] opacity-25 ml-2' icon={faArrowRight} />
        </button>
      </div> */}
    </div>
  )
}
