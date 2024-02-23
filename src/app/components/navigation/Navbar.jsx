'use client';
import Image from 'next/image';
import { facebook } from '../../constants/assets';
import { HiMenu } from 'react-icons/hi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IoIosRocket } from 'react-icons/io';
import { MdWork } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoHomeSharp } from 'react-icons/io5';

const navLinks = [
  { id: 1, title: 'Home', path: '/', icon: <IoHomeSharp />, target: '' },
  {
    id: 2,
    title: 'Mission',
    path: '/mission',
    icon: <IoIosRocket />,
    target: '',
  },
  { id: 3, title: 'Work', path: '/work', icon: <MdWork />, target: '' },
  {
    id: 4,
    title: 'Calendly',
    path: 'https://calendly.com/prashantdubey/',
    icon: <FaPhoneVolume />,
    target: '_blank',
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavopen] = useState(false);
  const [toggle, setToggle] = useState(false);

  function handleNav() {
    setIsNavopen((prevState) => {
      return !prevState;
    });
    setToggle((prevState) => {
      return !prevState;
    });
  }

  return (
    <nav className="navbar__container w-full min-w-72">
      <div className="navButtons__container flex items-center justify-between">
        <div className="brand__container">
          <h1 className="">Enlightner</h1>
        </div>
        <div className="nav__container hidden sm:hidden md:hidden lg:flex">
          <div className="navItems__container">
            <ul className="navItems flex gap-2">
              {navLinks.map((link) => {
                return (
                  <li
                    className={
                      link.path === pathname
                        ? `w-full border-2 border-zinc-400 bg-white p-2 font-semibold text-black`
                        : `w-full p-2 font-semibold hover:bg-black hover:text-white`
                    }
                    key={link.id}
                  >
                    <Link
                      href={`${link.path}`}
                      id={link.title}
                      className="flex items-center gap-2"
                      target={link.target}
                    >
                      {link.icon}
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div
          className="hamburgerMenu__container  lg:hidden xl:hidden 2xl:hidden"
          onClick={handleNav}
        >
          {toggle === true ? (
            <HiMenuAlt3 className=" h-10 w-12" />
          ) : (
            <HiMenu className=" h-10 w-12" />
          )}
        </div>
      </div>
      <div className="navItems__container my-4 lg:hidden xl:hidden 2xl:hidden">
        {isNavOpen && (
          <ul className="navItems flex flex-col items-end justify-start rounded-md bg-black text-xl text-white">
            {navLinks.map((link) => {
              return (
                <li
                  className={
                    link.path === pathname
                      ? `w-full border-2 border-zinc-400 bg-white p-2 font-semibold text-black`
                      : `w-full p-2 font-semibold hover:bg-white hover:text-black`
                  }
                  key={link.id}
                >
                  <Link
                    href={`${link.path}`}
                    id={link.title}
                    className="flex items-center gap-2"
                  >
                    {link.icon}
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
