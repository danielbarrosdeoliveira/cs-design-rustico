"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll } from "react-scroll";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    animateScroll.scrollToTop();
  };

  return (
    <header className="bg-zinc-800">
      <div className="container mx-auto px-8">
        <nav className="container flex justify-between h-16 items-center relative">
          <Link href="/">
            <Image
              src="/images/logo-cs-rustico.png"
              alt="Logo Carlos Silva Design Rústico"
              width={90}
              height={60}
            />
          </Link>
          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            {menuOpen && (
              <div className="fixed top-16 left-0 bg-zinc-800 w-full z-10">
                <ul className="flex flex-col items-center mt-2 space-y-2">
                  <li>
                    <ScrollLink
                      to="servicos"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={closeMenu}
                    >
                      Serviços
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="sobre"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={closeMenu}
                    >
                      Sobre
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="contato"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={closeMenu}
                    >
                      Contato
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <ul className="hidden lg:flex space-x-4 lg:space-x-8">
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="px-2 font-semibold text-white uppercase transition-all duration-150 ease-linear hover:text-[#d18448] hover:cursor-pointer"
              >
                Sobre
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="px-2 font-semibold text-white uppercase transition-all duration-150 ease-linear hover:text-[#d18448] hover:cursor-pointer"
              >
                Serviços
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contato"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="px-2 font-semibold text-white uppercase transition-all duration-150 ease-linear hover:text-[#d18448] hover:cursor-pointer"
              >
                Contato
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
