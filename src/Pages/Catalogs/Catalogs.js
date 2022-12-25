import React from 'react'
import { faArrowLeft, faArrowRight, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from '../../assets/img';
import { withRouter } from 'react-router-dom';
export function Catalogs({ history }) {

  const slideritems = [
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
    <div className='mt-12 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {slideritems.map(item => {
        return <a key={item} href={item.url} target="_blank" rel="noopener noreferrer">
          <div className='group flex flex-col justify-center items-center w-full' >
            <h5 className='text-[#231f20]  group-hover:text-[#991900] text-xl font-Common font-semibold transition-all ease-in-out duration-500'>{item.title}</h5>
            <img className='w-2/3 hover:opacity-100 cursor-pointer transition-all ease-in-out duration-500 opacity-50' src={item.img} alt="" />
          </div>
        </a>
      })}
    </div >
  )
}
export default withRouter(Catalogs)
