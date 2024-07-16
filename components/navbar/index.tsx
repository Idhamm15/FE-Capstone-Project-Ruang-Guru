"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgDetailsMore } from "react-icons/cg";
import { TbArticle } from "react-icons/tb";
import { IoRocketOutline } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import logo from '../../assets/AxietyAlly-logos.png';
import toggle from '../../assets/toogle.svg';
import iconUser from '../../assets/produk/icon-user.png';

function Navbar () {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const [isMobileNavMore, setMobileNavMore] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleClick = () => {
        setMobileNavOpen(!isMobileNavOpen);
    };

    const handleNavMore = () => {
        setMobileNavMore(!isMobileNavMore);
    }

    const handleDropdownClick = () => {
      setDropdownOpen(!isDropdownOpen);
  };


   return (
        <>
            {/* Navigation */}
            <nav className='py-9 px-4 z-10 relative'>
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between'>
                        <Image src={logo} alt='Logo' className='order-1 sm:order-2' width={300} height={200}/>
                        {/* <div className='order-1 sm:order-2'>
                            <h1>AxietyAlly</h1>
                        </div> */}
     
                        <Image src={toggle} alt='Toggle' className='lg:hidden order-2 sm:order-1' onClick={handleToggleClick} />
                        <div className='order-2 hidden lg:block'>
                            <ul className='flex gap-16'>
                                {/* Belum Login */}
                                <li className='text-grey font-bold text-sm'>
                                    <Link href='/'>Home</Link>
                                </li>
                                <li className='text-grey font-bold text-sm opacity-50 hover:text-red-800'>
                                    <Link href='/artikel'>Artikel</Link>
                                </li>
                                <li className='text-grey font-bold text-sm opacity-50 hover:text-red-800'>
                                    <Link href='/feature'>Feature</Link>
                                </li>
                                <li className='text-grey font-bold text-sm opacity-50 hover:text-red-800'>
                                    <Link href='/contact'>Contact</Link>
                                </li>

                                {/* Sudah Login */}
                                {/* <li className='text-grey font-bold text-sm opacity-50 hover:text-red-800'>
                                    <Link href='/keranjang'>Keranjang</Link>
                                </li> */}
                            </ul>
                        </div>
                        {/* Belum Login */}
                        <div className='order-3 hidden sm:block'>
                            <button className='grow bg-white px-8 py-4 font-bold text-grey rounded-full text-sm hover:text-red-800'>Login</button>
                            <button className='grow bg-red-700 px-8 py-4 font-bold text-white rounded-full text-sm hover:bg-red-800'>Sign Up</button>
                        </div>

                        {/* Sudah Login */}
                        {/* <div className='order-3 hidden sm:block pl-24'>
                            <div className="relative">
                                <button onClick={handleDropdownClick} className="flex items-center gap-2 focus:outline-none">
                                    <Image className='h-10 w-10' src={iconUser} alt='User' />
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                                        <Link href="/dashboard"><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a></Link>
                                        <Link href="/dashboard-account"><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a></Link>
                                        <div className="border-t border-gray-200"></div>
                                        <Link href="/"><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a></Link>
                                    </div>
                                )}
                            </div>
                        </div> */}

                        {/* End of Dropdown */}
                    </div>
                </div>

                <div className={`z-50 fixed bottom-0 left-0 right-0 bg-white p-4 border lg:hidden ${isMobileNavOpen ? '' : 'hidden'}`}>
                    <ul className='flex justify-between'>
                        <li>
                            <Link href='/' className='flex justify-center flex-col items-center gap-1 text-ungu'>
                                <IoHomeOutline className='text-grey text-2xl hover:text-purple-500' />
                                <span className='text-grey text-base font-bold'>Beranda</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/artikel' className='flex justify-center flex-col items-center gap-1 text-ungu'>
                                <TbArticle className='text-grey text-2xl opacity-50' />
                                <span className='text-grey opacity-50 text-base font-normal hover:text-purple-500'>Artikel</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/feature' className='flex justify-center flex-col items-center gap-1 text-ungu'>
                                <IoRocketOutline className='text-grey text-2xl opacity-50' />
                                <span className='text-grey opacity-50 text-base font-normal hover:text-purple-500'>Feature</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact' className='flex justify-center flex-col items-center gap-1 text-ungu'>
                                <BiSolidContact className='text-grey text-2xl opacity-50' />
                                <span className='text-grey opacity-50 text-base font-normal hover:text-purple-500'>Contact</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={handleNavMore} className='flex justify-center flex-col items-center gap-1 text-ungu'>
                                <CgDetailsMore className='text-grey text-2xl opacity-50' />
                                <span className='text-grey opacity-50 text-base font-normal hover:text-purple-500'>Lainnya</span>
                            </button>
                        </li>
                    </ul>
                    <div className={`absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 w-3/4 border-separate ${isMobileNavMore ? '' : 'hidden'}`}>
                        <button className='grow bg-white px-8 py-4 font-bold text-grey rounded-full text-sm hover:text-purple-700'>Login</button>
                        <button className='grow bg-purple-600 px-8 py-4 font-bold text-white rounded-full text-sm hover:bg-purple-700'>Sign Up</button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;