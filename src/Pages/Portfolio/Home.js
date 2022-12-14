import React, { useEffect, useState } from 'react'
import img from "../../assets/img"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CgFacebook, CgInstagram } from 'react-icons/cg';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { withRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export function Home({ history }) {

  const [imageloaded, setimageloaded] = useState(false)
  const [sliderindex, setsliderindex] = useState(0)


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (oldIndex, newIndex) => {
      setsliderindex(newIndex)
    }
  }


  const slideritems = [
    {
      Id: 2,
      img: img.slide2,
      title: "B PROJEMİZ"
    },
    {
      Id: 1,
      img: img.slide1,
      title: "A PROJEMİZ"
    },
    {
      Id: 3,
      img: img.slide3,
      title: "C PROJEMİZ"
    },
    {
      Id: 4,
      img: img.slide4,
      title: "D PROJEMİZ"
    },
  ]

  return (
    <div className='relative z-0 h-auto'>
      <div className='bg-[#f6f5f3] flex flex-col justify-center items-center absolute z-40 left-0 top-0 w-[40vmin] h-[40vmin] p-[4.8vmin 2em 4.8vmin] text-center transition-all'>
       {/*  <a className='font-Common font-bold text-[4vmin] line-none text-[#231f20]'>
          eslon
          <span className='text-[#991900]'>mutfak</span>
        </a> */}
        <img src={img.Logo} alt="logo"/>
        <div className='flex flex-row mt-[8vmin] font-Common'>
          <span className='text-[8vmin] tracking-widest leading-none text-[#991900]'>{sliderindex + 1}</span>
          <span className='mr-[0.4em] tracking-widest leading-none text-[2vmin] text-[#231f20] align-top'>/</span>
          <span className='text-[#231f20] tracking-widest leading-non text-[2vmin] align-top'>4</span>
        </div>
      </div>
      {/*  <div className='top-[44vmin] absolute left-[25vmin] flex flex-row justify-center items-center'>
        <div className='flex flex-row justify-center items-center hover:text-[#991900] text-[#231f20] transition-all ease-in-out duration-300 cursor-pointer'>
          <FontAwesomeIcon className=' text-[2.4vmin]  mr-[5px] opacity-25' icon={faArrowLeft} />
          <p className=' text-[1em]  font-Common tracking-[0.32em]  mr-[4vmin]'>GERİ</p>
        </div>
        <div className='flex flex-row justify-center items-center hover:text-[#991900] text-[#231f20] transition-all ease-in-out duration-300 cursor-pointer'>
          <p className=' text-[1em] font-Common tracking-[0.32em]   mr-[5px]'>İLERİ

          </p>
          <FontAwesomeIcon className='  text-[2.4vmin]  mr-[2vmin] opacity-25' icon={faArrowRight} />
        </div>
      </div> */}
      <div className='bg-white/60  p-4 rounded-3xl top-[30%] z-50  text-[#991900] w-1/3 absolute  right-[5vmin] md:right-[10vmin] lg:right-[25vmin] flex flex-col justify-center items-center'>
        <h1 className='text-[200%] text-center tracking-widest leading-[1.3em]'>YENİ WEB SİTEMİZLE HİZMETİNİZDEYİZ</h1>
        <p className='font-semibold mt-12 text-[16px] lg:text-[18px] text-right'>Sizlere en iyi hizmeti vermek için
          çağın önüne geçmeye devam ediyoruz.
        </p>
        <div className='mt-[2.3vmin] text-[2.1vmin]   items-center flex flex-nowrap  justify-end'>
          <button className=' rounded-3xl   flex flex-row justify-center text-center items-center px-4 py-4 transition-all ease-in-out duration-300 bg-[#fff] hover:bg-[#cb9c67]' onClick={() => { history.push('/AboutUs') }}> İNCELEMEK İÇİN TIKLAYINIZ
            <FontAwesomeIcon className=' ml-2 text-[2.4vmin]  mr-[2vmin] opacity-25 ' icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className='h-[100vh] w-[19.735vmin] z-30  absolute left-0 top-0 bg-[#f6f5f3]'>
        <div className='flex flex-col justify-center items-center bottom-0 z-10  absolute left-0 w-[100%]'>
          <p className='-rotate-90 mb-20 text-[10px] font-bold whitespace-nowrap uppercase tracking-[1em] font-Common text-[#231f20] '>eslon mutfak</p>
          <div className='h-[5vmin] mt-[3.8vmin] w-[1px] bg-[#c5c4c2]' />
          <CgFacebook className=' hover:text-[#991900] transition-all ease-in-out duration-300 cursor-pointer text-[2.4vmin] text-[#c5c4c2] mt-[3.8vmin]' />
          <CgInstagram className='hover:text-[#991900] transition-all ease-in-out duration-300 cursor-pointer text-[2.4vmin] text-[#c5c4c2] mt-[3.8vmin] ' />
          <AiOutlineLinkedin className='mb-4 hover:text-[#991900] transition-all ease-in-out duration-300 cursor-pointer text-[2.4vmin] text-[#c5c4c2] mt-[3.8vmin]' />
        </div>
      </div>
      <div className='whitespace-nowrap hidden md:hidden z-50 lg:visible absolute lg:left-[25%] md:left-[35%] sm:left-[45%] top-[11vmin] w-[60%] lg:flex flex-row justify-between items-center'>
        <p className='font-Common font-light text-[0.75em] mr-4 tracking-[0.22em] text-[#231f20]'>ESGROUP©</p>
        <div className=' lg:flex flex-row justify-center items-center  font-light text-[0.75em]  cursor-pointer tracking-[0.22em]'>
          <a className='cursor-pointer text-[#231f20] mr-[8vmin] hover:text-[#991900] font-Common' onClick={() => { history.push('/') }}>ESLON MUTFAK</a>
          <a className='cursor-pointer text-[#231f20] mr-[8vmin] hover:text-[#991900] font-Common' onClick={() => { history.push('/AboutUs') }}>BİZ KİMİZ</a>
          <a className='cursor-pointer text-[#231f20] mr-[8vmin] hover:text-[#991900] font-Common' onClick={() => { history.push('/Catalogs') }}>KATALOGLARIMIZ</a>
          <a className='cursor-pointer text-[#231f20] mr-[8vmin] hover:text-[#991900] font-Common' onClick={() => { history.push('/Products') }}>ÜRÜNLERİMİZ</a>
          <a className='cursor-pointer text-[#231f20] mr-[8vmin] hover:text-[#991900] font-Common' onClick={() => { history.push('/Contacts') }}>İLETİŞİM</a>
        </div>
      </div>
      <Slider  {...settings} className="z-0 absolute left-0 top-0">
        {slideritems.map(item => {
          return <img className={`w-[100vw]  h-[100vh] left-0 top-0 z-0 object-cover ${imageloaded ? {} : 'hidden'}`} src={item.img} onLoad={() => setimageloaded(true)} alt=""></img>
        })}
      </Slider>
    </div>
  )
}
export default withRouter(Home)


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='bg-white/60  p-4 rounded-3xl flex flex-row flex-nowrap justify-center items-center hover:text-[#991900] text-[#9b9b9b] transition-all ease-in-out duration-300 cursor-pointer'
      style={{ position: 'absolute', left: '20%', bottom: '50%', zIndex: 2 }}
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
      className='bg-white/60  p-4 rounded-3xl flex flex-row flex-nowrap justify-center items-center hover:text-[#991900] text-[#9b9b9b] transition-all ease-in-out duration-300 cursor-pointer'
      style={{ position: 'absolute', left: '11%', bottom: '50%', zIndex: 2 }}
      onClick={onClick}
    >
      <FontAwesomeIcon className='  text-[2.4vmin]   ' icon={faArrowLeft} />
      <p className='text-[1em] font-Common tracking-[0.32em]   ml-[5px]'>GERİ</p>
    </div>
  );
}