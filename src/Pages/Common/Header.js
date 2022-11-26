import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
export function Header({ history }) {

    const [togglemenu, setTogglemenu] = useState(false);
    const [showmenu, setshowmenu] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 800) {
            setTogglemenu(true);
        }
        else {
            setTogglemenu(false);
        }
    }, [])


    const toggleNavBar = () => {
        if (window.scrollY >= 100 || window.innerWidth < 800) {
            setTogglemenu(true);
        }
        else {
            setTogglemenu(false);
        }
    };
    window.addEventListener('scroll', toggleNavBar);
    return (
        <React.Fragment>
            {
                (togglemenu) ?
                    <motion.nav
                        initial={{ y: -80 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.2 }}
                        className={` w-[100%] bg-white px-[18%] mx-auto flex ${showmenu ? 'h-[100vh] flex-col justify-center ' : 'flex-row  justify-between'}  items-center top-0 z-10 fixed`}>
                        {showmenu ? <AiOutlineCloseCircle className='absolute right-10 top-10 ml-8 text-[#231f20]' fontSize={27} onClick={() => { setshowmenu(false) }} /> : null}
                        <div className='p-2 flex flex-row flex-nowrap' >
                            <a className='font-Common font-bold text-[1.77em] line-none text-[#231f20] '>
                                eslon
                                <span className='text-[#991900]'>mutfak</span>
                            </a>
                        </div >
                        <ul className='hidden lg:flex flex-row justify-center uppercase items-center font-Common tracking-[0.22em] text-[0.77em] leading-[1.65] font-normal text-[#231f20] '>
                            <li className="mx-8 flex flex-col group"><a className='cursor-pointer group-hover:text-[#991900]' onClick={() => { history.push('/') }}>ANA SAYFA</a> <div className='bg-[#991900] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#991900]' /></li>
                            <li className="mx-8 flex flex-col group"><a className='cursor-pointer group-hover:text-[#991900]' onClick={() => { history.push('/AboutUs') }} >BİZ KİMİZ?</a><div className='bg-[#991900] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#991900]' /></li>
                            <li className="mx-8 flex flex-col group"><a className='cursor-pointer group-hover:text-[#991900]' onClick={() => { history.push('/Catalogs') }}>KATALOGLARIMIZ</a><div className='bg-[#991900] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#991900]' /></li>
                            <li className="mx-8 flex flex-col group"><a className='cursor-pointer group-hover:text-[#991900]' onClick={() => { history.push('/Products') }}>ÜRÜNLERİMİZ</a><div className='bg-[#991900] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#991900]' /></li>
                            <li className="mx-8 flex flex-col group"><a className='cursor-pointer group-hover:text-[#991900]' onClick={() => { history.push('/Contacts') }}>İLETİŞİM</a><div className='bg-[#991900] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#991900]' /></li>
                        </ul>
                        {!showmenu ?
                            <div className='visible lg:hidden'>
                                <GiHamburgerMenu className='text-[#231f20]' fontSize={27} onClick={() => { setshowmenu(true) }} />
                            </div>
                            : null}
                        {showmenu ?
                            <motion.ul
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.2 }}
                                className='w-full flex flex-col justify-between uppercase items-center font-Common tracking-[0.22em] text-[0.77em] leading-[1.65] font-normal text-[#231f20] '>
                                <li className="my-4 flex flex-col group"><a className='cursor-pointer group-hover:text-[#991900]' onClick={() => {
                                    setshowmenu(false)
                                    history.push('/')
                                }}>ANA SAYFA</a> <div className='bg-[#991900] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#991900]' /></li>
                                <li className="my-4 flex flex-col group"><a className='cursor-pointer group-hover:text-[#991900]' onClick={() => {
                                    setshowmenu(false)
                                    history.push('/AboutUs')
                                }} >BİZ KİMİZ?</a><div className='bg-[#991900] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#991900]' /></li>
                                <li className="my-4 flex flex-col group"><a className='cursor-pointer group-hover:text-[#991900]' onClick={() => {
                                    setshowmenu(false)
                                    history.push('/Catalogs')
                                }}>KATALOGLARIMIZ</a><div className='bg-[#991900] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#991900]' /></li>
                                <li className="my-4 flex flex-col group"><a className='cursor-pointer group-hover:text-[#991900]' onClick={() => {
                                    setshowmenu(false)
                                    history.push('/Products')
                                }}>ÜRÜNLERİMİZ</a><div className='bg-[#991900] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#991900]' /></li>
                                <li className="my-4 flex flex-col group"><a className='cursor-pointer group-hover:text-[#991900]' onClick={() => {
                                    setshowmenu(false)
                                    history.push('/Contacts')
                                }}>İLETİŞİM</a><div className='bg-[#991900] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#991900]' /></li>
                            </motion.ul>
                            : null}
                    </motion.nav >
                    : null}
        </React.Fragment>
    )
}
export default withRouter(Header)