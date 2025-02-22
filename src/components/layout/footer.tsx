import Link from 'next/link'

const links = [
  { text: 'About', href: '/about' },
  { text: 'Solutions', href: '/solutions' },
  { text: 'Research Blog', href: '/blog' },
  { text: 'Contact Us', href: '/contact' },
]

const socialLinks = [
  { text: 'Twitter', href: 'https://twitter.com/noetiq', icon: 'mdi:twitter' },
  {
    text: 'LinkedIn',
    href: 'https://linkedin.com/company/noetiq-research',
    icon: 'mdi:linkedin',
  },
  { text: 'GitHub', href: 'https://github.com/noetiq', icon: 'mdi:github' },
]

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="bg-[#4B3832] py-6 text-[#F5EFE6]">
      <div className="container mx-auto text-center px-6">
        <p className="text-lg">
          &copy; {year} Noetiq Research. All rights reserved.
        </p>
        <nav className="mt-4">
          {links.map(({ text, href }) => (
            <Link
              key={href}
              href={href}
              className="mx-4 text-[#EFE3D7] hover:underline"
            >
              {text}
            </Link>
          ))}
        </nav>
        <div className="mt-4 flex justify-center space-x-4">
          {socialLinks.map(({ text, href, icon }) => (
            <a
              key={href}
              href={href}
              className="text-[#EFE3D7] hover:underline flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="iconify" data-icon={icon} />
              <span>{text}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
