import React from 'react'
import img from '../../assets/img'

export default function services() {

  const items = [
    {
      img: img.isologo1,
      title: 'ISO 9001:2015',
      text: 'Avrupa Standardizasyon Komitesi (CEN – COMITÉ EUROPÉEN DE NORMALISATION)tarafından  verilen ISO 9001, bir Kalite Yönetim Sistemi belgesidir. Dünya genelinde kabul görmüş bu belge, değişen ve gelişen konjonktüre bağlı olarak revize edilmektedir.  Ürünün imal edilmesi ve ticarete konu olması aşamalarıdaki tüm operasyonel sürece ilişkin kalite alt yapısını ifade eden bu belge 2015 tarihinde revize edilmiştir (ISO 9001:2015).',
    },
    {
      img: img.isologo1,
      title: 'ISO 14001:2015',
      text: 'Ürünün imal edilmesinden tüketiciye ulaştırılmasına kadar geçen süreç içerisinde çevresel faktörlerin dikkate alındığını kanıtlar nitelikte olan ISO 14001 Çevre Yönetim Sistemi uluslar arası bir standarttır.  Bu standart sertifikası, üretim ve ticaret organizasyonunda tarafların çevresel farkındalıklara sahip olduğunu göstermektedir.',
    },
    {
      img: img.isologo1,
      title: 'OHSAS 18001:2007',
      text: 'İngiliz Standartlar Enstitüsü (BSI – British Standarts Institute) tarafından yayımlanan OHSAS bir İş Sağlığı ve Güvenliği sertifikasıdır. İş sağlığı ve güvenliğinin sistematik bir şekilde yönetilmesi ve geliştirilmesi maksadıyla yayımlanan bu sertifika kuruluşların yasal standartlara uyumunu ve iş ortamının daimi suretle geliştirilmesini ve iyileştirilmesini gösterir.',
    },
  ]

  return (
    <div className='mt-20 w-full px-[20%] flex flex-col justify-center items-center'>
      <h1 className='text-[1.0875em] lg:text-[1.6875em]  mx-auto lg:w-1/3 text-center whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#231f20] font-semibold'>KALİTE<span className='text-[#991900]'>KONTROL</span></h1>
      <div className='mt-8 flex flex-col lg:flex-row justify-center items-start w-full'>
        {items.map(item => {
          return <div className='font-Common lg:px-8 flex flex-col justify-center items-center text-center  w-full'>
            <img className='w-1/2' src={item.img} alt="" />
            <h2 className='mt-4 tracking-[0.2em] text-[1.125em] leading-[1.35] font-bold text-[#991900]'>{item.title}</h2>
            <p className='mt-4 text-[1em] leading-[1.65] text-[#747474] font-Common'>
              {item.text}
            </p>
          </div>
        })}
      </div>
    </div>
  )
}
