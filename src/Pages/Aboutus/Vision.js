import React from 'react'
import img from '../../assets/img'

export default function services() {

  const items = [
    {
      title: 'VİZYONUMUZ',
      items: [
        "Tüm dünya pazarlarında yer almak",
        "Sektörümüze dair tüm organizasyonlara katılmak",
        "Üretim kapasitesini artırmak",
        "Çevresel farkındalıkları en üst düzeye çıkarmak",
      ]
    },
    {
      title: 'MİSYONUMUZ',
      items: [
        "Üretimde kalite düzeyini daima artırmak",
        "Global gelişmeleri yakından takip etmek",
        "İnovasyon odaklı üretimi geliştirmek",
        "Verimliliği en üst düzeyde tutmak",
        "Kurumsal Sosyal Sorumluluğun gereklerini yerine  getirmek",
        "Müşteri memnuniyetini maksimize etmek",
      ]
    },
  ]

  return (
    <div className='mt-20 w-full px-[20%] flex flex-col justify-center items-center'>
      <h1 className='text-[1.0875em] lg:text-[1.6875em]  mx-auto lg:w-1/3 text-center whitespace-nowrap mt-12 font-Common tracking-[0.32em] text-[#231f20] font-semibold'>VİZYON<span className='text-[#991900]'> MİSYON</span></h1>
      <div className='mt-8 flex flex-col lg:flex-row justify-center items-start w-full'>
        {items.map(item => {
          return <div className='font-Common lg:px-8 flex flex-col justify-center items-center text-center  w-full'>
            <h2 className='mt-4 tracking-[0.2em] text-[1.125em] leading-[1.35] font-bold text-[#991900]'>{item.title}</h2>
            {item.items.map(subitem => {
              return <p className='mt-4 text-[1em] leading-[1.65] text-[#747474] font-Common'>
                {subitem}
              </p>
            })}
          </div>
        })}
      </div>
    </div>
  )
}
