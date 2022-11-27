import React from 'react'
import Slider from 'react-slick';
import img from '../../assets/img'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faArrowLeft, faArrowRight, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router-dom';
import { FaSearchMinus } from "react-icons/fa"
import { useState } from 'react';
import { motion } from "framer-motion"
export function Catalogs({ history }) {


  const [slidercount, setslidercount] = useState(4)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidercount,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const settingssmallscren = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const slideritems = [
    {
      Id: 1,
      img: img.productslider1,
      title: "A PROJEMİZ"
    },
    {
      Id: 2,
      img: img.productslider2,
      title: "B PROJEMİZ"
    },
    {
      Id: 3,
      img: img.productslider3,
      title: "C PROJEMİZ"
    },
    {
      Id: 4,
      img: img.productslider4,
      title: "D PROJEMİZ"
    },
    {
      Id: 5,
      img: img.productslider5,
      title: "E PROJEMİZ"
    },
    {
      Id: 6,
      img: img.productslider1,
      title: "F PROJEMİZ"
    },
    {
      Id: 7,
      img: img.productslider2,
      title: "G PROJEMİZ"
    },
    {
      Id: 8,
      img: img.productslider3,
      title: "H PROJEMİZ"
    },

  ]

  return (
    <div className='w-[100%]  mx-auto flex flex-col justify-center items-center '>
      <h1 className='text-[1.0875em] lg:text-[1.6875em]  mx-auto lg:w-1/3 text-center lg:whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#231f20] font-semibold'>ÜRÜN <span className='text-[#991900]'>SETLERİMİZ</span></h1>
      <div className='hidden lg:block mt-20 w-[100%]'>
        <Slider  {...settings}>
          {slideritems.map(item => {
            return <div
              key={item} className='relative group w-full flex justify-center items-center'>
              <h2 className='top-20 group-hover:top-40 opacity-1 group-hover:opacity-0  absolute left-8 w-1/2  font-Common text-[] md:text-[0.9em] lg:text-[1.2em] leading-[1.75] tracking-[0.17em] text-[#fff]'>{item.title}</h2>
              <div className='h-[800px] w-full  overflow-hidden  flex justify-center items-center relative'>
                <img className="h-[800px] w-auto object-none  transition-all ease-in-out duration-[2000ms] " src={item.img} alt={item.title} >
                </img>
                <button className='absolute right-0 top-0 ' onClick={() => { setslidercount(4) }}>kapat</button>
              </div>
              <p className='-rotate-90 absolute bottom-0 left-0 mb-40 -ml-24 text-[10px]  font-bold whitespace-nowrap uppercase tracking-[1em] lg:tracking-[2vmin] opacity-1 group-hover:opacity-0 transition-all ease-in-out duration-1000 text-[#fff] '>ESLON MUTFAK</p>
              <div style={{ transform: 'translate(-50%,-50%)' }} className='absolute left-[50%] top-[50%] transition-all ease-in-out duration-1000 text-[0.4vmin] p-2 group-hover:text-[5vmin] cursor-pointer group-hover:opacity-50 rounded-full hover:bg-[#d99b54] bg-[#991900] opacity-0'
                onClick={() => { }}
              >
                <FaSearchMinus className='m-2 text-[#fff] group-hover:opacity-1' icon={faMagnifyingGlassPlus} />
              </div>
            </div>
          })}
        </Slider>
      </div>
      <div className=' lg:hidden mt-20 w-[100%]'>
        <Slider  {...settingssmallscren}>
          {slideritems.map(item => {
            return <div key={item} className='relative group'>
              <h2 className='top-20 group-hover:top-40 opacity-1 group-hover:opacity-0 transition-all ease-in-out duration-1000 absolute left-8 w-1/2  font-Common text-[] md:text-[0.9em] lg:text-[1.2em] leading-[1.75] tracking-[0.17em] text-[#fff]'>{item.title}</h2>
              <div className='overflow-hidden inline-block'>
                <img className="group-hover:scale-125 transition-all ease-in-out duration-[2000ms]" src={item.img} alt={item.title} />
              </div>
              <p className='-rotate-90 absolute bottom-0 left-0 mb-40 -ml-24 text-[10px]  font-bold whitespace-nowrap uppercase tracking-[1em] lg:tracking-[2vmin] opacity-1 group-hover:opacity-0 transition-all ease-in-out duration-1000 text-[#fff] '>ESLON MUTFAK</p>
              <div style={{ transform: 'translate(-50%,-50%)' }} className='absolute left-[50%] top-[50%] transition-all ease-in-out duration-1000 text-[0.4vmin] p-2 group-hover:text-[5vmin] cursor-pointer group-hover:opacity-50 rounded-full hover:bg-[#d99b54] bg-[#991900] opacity-0'
                onClick={() => { history.push("/Project/" + item.Id) }}
              >
                <FaSearchMinus className='m-2 text-[#fff] group-hover:opacity-1' icon={faMagnifyingGlassPlus} />
              </div>
            </div>
          })}
        </Slider>
      </div>
    </div>
  )
}
export default withRouter(Catalogs)

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='flex flex-row flex-nowrap justify-center items-center hover:text-[#991900] text-[#c5c4c2] transition-all ease-in-out duration-300 cursor-pointer'
      style={{ position: 'absolute', right: 20, bottom: '50%', zIndex: 2 }}
      onClick={onClick}
    >
      <p className='text-[1em] font-Common tracking-[0.32em]   mr-[5px]'>İLERİ</p>
      <FontAwesomeIcon className=' text-[2.4vmin]  mr-[5px] ' icon={faArrowRight} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='flex flex-row flex-nowrap justify-center items-center hover:text-[#991900] text-[#c5c4c2] transition-all ease-in-out duration-300 cursor-pointer'
      style={{ position: 'absolute', left: 20, bottom: '50%', zIndex: 2 }}
      onClick={onClick}
    >
      <FontAwesomeIcon className='  text-[2.4vmin]   ' icon={faArrowLeft} />
      <p className='text-[1em] font-Common tracking-[0.32em]   ml-[5px]'>GERİ</p>
    </div>
  );
}
