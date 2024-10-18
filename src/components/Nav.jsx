import React, { useState } from 'react';
import { navLinks } from '../constants';
import { hamburger } from "../assets/icons";
import { headerLogo } from '../assets/images';
import { closeIcon } from "../assets/icons"; // Assuming you have a close icon available

function Nav() {
  const [isMobile, setMobile] = useState(false);
  const toggle = () => {
    setMobile(!isMobile);
  };

  return (
    <header className='padding-x py-1 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/" className=''>
          <img 
            src={headerLogo} 
            alt="header-logo"
            width={100}
            height={15}
          />
        </a>
        <ul className='flex-1 flex justify-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <button onClick={toggle}>
            <img 
              src={hamburger} 
              alt="Hamburger" 
              height={25}
              width={25}
            />
          </button>
          {isMobile && (
            <div className="flex flex-col items-center fixed top-0 left-0 w-full h-full bg-gray-500 text-white z-50">
              <button onClick={toggle} className="self-end m-4 pt-4">
                <img 
                  src={closeIcon} 
                  alt="Close" 
                  height={25}
                  width={25}
                />
              </button>
              <ul className="flex flex-col items-center gap-6 mt-4">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="block py-2 text-center hover:text-gray-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
