'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { FaLinkedin } from 'react-icons/fa6'
import '@fontsource/anuphan'

interface HeaderProps {
  isSticky?: boolean
}

const Header: React.FC<HeaderProps> = ({ isSticky = false }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const pathname = usePathname()

  const solutionsDesktopRef = useRef<HTMLDivElement>(null)
  const solutionsMobileRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const desktopContains =
        solutionsDesktopRef.current &&
        solutionsDesktopRef.current.contains(e.target as Node)
      const mobileContains =
        solutionsMobileRef.current &&
        solutionsMobileRef.current.contains(e.target as Node)
      if (!desktopContains && !mobileContains) {
        setSolutionsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinkClass = (href: string) =>
    `transition hover:text-[#8C6A5E] ${
      pathname === href ? 'text-[#8C6A5E] font-bold' : 'text-[#4B3832]'
    }`

  const solutionsButtonClass = () =>
    `flex items-center transition hover:text-[#8C6A5E] ${
      (pathname ?? '').startsWith('/solutions')
        ? 'text-[#8C6A5E] font-bold'
        : 'text-[#4B3832]'
    }`

  const handleMobileLinkClick = () => {
    setMenuOpen(false)
    setSolutionsOpen(false)
  }

  return (
    <header
      className={`bg-[#F5EFE6] border-b border-[#EDE0D4] shadow-md select-none ${
        isSticky ? 'sticky top-0 z-50' : ''
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-6 relative">
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden p-0 text-[#4B3832] hover:text-[#8C6A5E] focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <Link href="/" className="flex items-center">
            <Image
              src="/logos/noetiq_research_logo_name.svg"
              alt="Noetiq Research Logo"
              className="h-20 w-auto"
              width={200}
              height={80}
            />
          </Link>
        </div>

        <div className="flex items-center justify-center h-12">
          <nav className="hidden md:flex md:justify-center md:space-x-8 text-[#4B3832] font-light font-[Anuphan]">
            <Link href="/" className={navLinkClass('/')}>
              Home
            </Link>
            <div className="relative" ref={solutionsDesktopRef}>
              <button
                onClick={() => setSolutionsOpen((prev) => !prev)}
                className={solutionsButtonClass()}
                aria-haspopup="true"
                aria-expanded={solutionsOpen}
              >
                <span>Solutions</span>
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    solutionsOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.585l3.71-3.4a.75.75 0 111.02 1.1l-4.23 3.88a.75.75 0 01-1.02 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 bg-[#F5EFE6] shadow-md rounded-md p-2 z-10">
                  <ul>
                    <li>
                      <Link
                        href="/solutions/frameworks"
                        className="block px-4 py-2 transition hover:text-[#8C6A5E] text-[#4B3832]"
                      >
                        Frameworks
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/products"
                        className="block px-4 py-2 transition text-[#4B3832] hover:text-[#8C6A5E]"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/solutions/services"
                        className="block px-4 py-2 transition hover:text-[#8C6A5E] text-[#4B3832]"
                      >
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link href="/blog" className={navLinkClass('/blog')}>
              Research Blog
            </Link>
            <Link href="/about" className={navLinkClass('/about')}>
              About
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex justify-end items-center gap-4">
          <a href="mailto:support@noetiqresearch.com">
            <TfiEmail className="text-[#4B3832] transition hover:text-[#8C6A5E] w-5 h-5 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/company/noetiq-research"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[#4B3832] transition hover:text-[#8C6A5E] w-5 h-5 cursor-pointer" />
          </a>
          <a
            href="https://x.com/noetiq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-[#4B3832] transition hover:text-[#8C6A5E] w-5 h-5 cursor-pointer" />
          </a>
          <a
            href="https://github.com/noetiq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-[#4B3832] transition hover:text-[#8C6A5E] w-5 h-5 cursor-pointer" />
          </a>
          <a
            href="https://huggingface.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              src="/logos/hf-icon.svg"
              alt="Hugging Face Logo"
              className="h-5 w-auto transition duration-300 hover:brightness-75"
              width={100}
              height={100}
            />
          </a>
        </div>
      </div>

      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} p-4`}>
        <nav>
          <ul className="flex flex-col space-y-2 text-[#4B3832] font-light font-[Anuphan]">
            <li>
              <Link
                href="/"
                onClick={handleMobileLinkClick}
                className={navLinkClass('/')}
              >
                Home
              </Link>
            </li>
            <li ref={solutionsMobileRef}>
              <button
                onClick={() => setSolutionsOpen((prev) => !prev)}
                className="flex items-center transition hover:text-[#8C6A5E]"
                aria-haspopup="true"
                aria-expanded={solutionsOpen}
              >
                <span>Solutions</span>
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    solutionsOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.585l3.71-3.4a.75.75 0 111.02 1.1l-4.23 3.88a.75.75 0 01-1.02 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {solutionsOpen && (
                <ul className="pl-4">
                  <li>
                    <Link
                      href="/solutions/frameworks"
                      onClick={handleMobileLinkClick}
                      className="block px-4 py-2 transition hover:text-[#8C6A5E]"
                    >
                      Frameworks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/products"
                      onClick={handleMobileLinkClick}
                      className="block px-4 py-2 transition hover:text-[#8C6A5E]"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions/services"
                      onClick={handleMobileLinkClick}
                      className="block px-4 py-2 transition hover:text-[#8C6A5E]"
                    >
                      Services
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/blog"
                onClick={handleMobileLinkClick}
                className={navLinkClass('/blog')}
              >
                Research Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={handleMobileLinkClick}
                className={navLinkClass('/about')}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
