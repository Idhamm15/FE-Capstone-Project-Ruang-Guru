// components/Footer.tsx

import React from 'react';
import logo from "../../assets/logo_genpro_white.svg";

const Footer: React.FC = () => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111928" fill-opacity="1" d="M0,256L48,234.7C96,213,192,171,288,176C384,181,480,235,576,234.7C672,235,768,181,864,138.7C960,96,1056,64,1152,42.7C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <footer className="bg-white shadow dark:bg-gray-900">
        <div className=" mx-auto p-4 md:py-">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        </div>
    </footer>


    </>
  );
};

export default Footer;

