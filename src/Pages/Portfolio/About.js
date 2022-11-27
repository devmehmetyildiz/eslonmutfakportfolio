import React from 'react'
import img from '../../assets/img'

export default function About() {
  return (
    <div className='w-[100%] lg:w-[60%] mx-auto flex flex-col justify-center items-center '>
      <div className='flex flex-row flex-wrap justify-center items-center'>
        <h1 className='text-[1.0875em] lg:text-[1.6875em]  mx-auto  text-center  mt-12 font-Common tracking-[0.32em] text-[#231f20] font-semibold'>ESLON MUTFAK</h1>
        <h1 className='text-[1.0875em] lg:text-[1.6875em]  mx-auto  text-center  mt-12 font-Common tracking-[0.32em] text-[#991900] font-semibold'>NELER YAPIYOR</h1>
      </div>
      <div className='flex flex-col mt-6  lg:flex-row justify-center items-center lg:items-start'>
        <div className='flex flex-col w-2/3 md:w-1/2 lg:w-1/3 justify-center items-center'>
          <h2 className='leading-[1.1] font-Common font-bold text-[#231f20] text-[1.8em]'>51 YILDIR MUTFAKLARINIZI<span className='text-[#991900]'> RENKLENDİRİYORUZ.</span></h2>
          <p className='mt-4 text-[1em] leading-[1.65] text-[#747474]'>Günde 10.000 adet granit, seramik ve P.T.F.E (PFOA İçermez) 
          kaplama ürün üretim kapasitesimizle, verimliliği ve üretim 
          kapasitesini her geçen gün arttırarak ve halihazırda 27 ülkeye 
          ihraç ettiğimiz tava, tencere, kaserol, grill ve sosluk gibi 
          ürünlerimizle 51 yıldır mutfaklarınızdayız.
          
            
          </p>
        </div>
        <div className='flex flex-col w-1/2 lg:w-1/3 text-center justify-center items-center px-8'>
          <h2 className='leading-[1.1] w-[100%] text-center font-Common font-bold text-[#231f20] text-[1.8em] mt-4 lg:mt-0'>ürün çeşitlerimiz</h2>
          <div className='mt-4 flex flex-col justify-center items-center'>
            <img className='mb-4 w-1/4 py-2' src={img.iconArchitecture} alt="" />
            <p className='text-[1.125em] leading-[1.35] font-bold text-[#231f20] tracking-[0.2em] font-Common'>tencereler</p>
            <img className='my-4 w-1/4 py-2' src={img.iconInteriors} alt="" />
            <p className='text-[1.125em] leading-[1.35] font-bold text-[#231f20] tracking-[0.2em] font-Common'>tavalar</p>
            <img className='my-4 w-1/4 py-2' src={img.iconPlanning} alt="" />
            <p className='text-[1.125em] leading-[1.35] font-bold text-[#231f20] tracking-[0.2em] font-Common'>ve diğerleri</p>
          </div>
        </div>
        <img className='w-1/2 lg:w-1/3 p-4' src={img.portfolio} />
      </div>
    </div>
  )
}
