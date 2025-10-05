'use client'

import Link from 'next/link'
import { useState } from 'react'

const services = [
  {
    href: '/fivem-services',
    title: 'FiveM/MTA Services',
    description: 'Custom scripts and resources for FiveM/MTA servers'
  },
  {
    href: '/web-development',
    title: 'Web Development',
    description: 'Modern web applications and websites'
  },
  {
    href: '/bot-development',
    title: 'Bot Development',
    description: 'Custom Discord and Telegram bots'
  },
  {
    href: '/app-development',
    title: 'App Development',
    description: 'Native and cross-platform mobile apps'
  },
  {
    href: '/software-development',
    title: 'Software Development',
    description: 'Custom software solutions'
  },
  {
    href: '/other-services',
    title: 'Other',
    description: 'Contact us for any other service'
  }
]

const marketingServices = [
  {
    href: '/fivem-marketing',
    title: 'Marketing Digital',
    description: 'Specialized Marketing for Business'
  }
]

const importantMore = [
  {
    href: '/portfolio',
    title: 'Portfolio',
    description: 'Discover our work and clients'
  },
  {
    href: '/become-partner',
    title: 'Become a Partner',
    description: 'Join as a partner and get exclusive benefits'
  },
  {
    href: '/social-media',
    title: 'Social Media',
    description: 'Follow us on social media and get 5% discount'
  },
  {
    href: '/foundation',
    title: 'Foundation & Charity',
    description: 'Help us make the world a better place through technology'
  }
]

const legal = [
  {
    href: '/privacy',
    title: 'Privacy Policy',
    description: 'Our privacy and data protection policy'
  },
  {
    href: '/terms',
    title: 'Terms & Conditions',
    description: 'Terms and conditions of service'
  }
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="flex items-center gap-2">
              {/* Logo */}
              <img
                src="images/logo.png" // 🔹 cambia esto por tu logo real
                alt="ViralEdge Logo"
                className="h-12 w-auto"
              />
              {/* Texto */}
              <span className="text-xl font-semibold text-white">ViralEdge</span>
            </div>
          </Link>
        </div>

        {/* Botón mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {/* Services Dropdown */}
          <div className="nav-item group">
            Services
            <div className="dropdown group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <div className="py-2">
                {services.map((service, index) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="dropdown-item hover:scale-105 transition-all"
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    <div>
                      <div className="text-sm font-medium text-white">{service.title}</div>
                      <div className="text-xs text-white/50">{service.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Marketing Services Dropdown */}
          <div className="nav-item">
            Marketing Services
            <div className="dropdown">
              <div className="py-2">
                {marketingServices.map((service) => (
                  <Link key={service.href} href={service.href} className="dropdown-item">
                    <div>
                      <div className="text-sm font-medium text-white">{service.title}</div>
                      <div className="text-xs text-white/50">{service.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Important More Dropdown */}
          <div className="nav-item">
            Important More
            <div className="dropdown">
              <div className="py-2">
                {importantMore.map((item) => (
                  <Link key={item.href} href={item.href} className="dropdown-item">
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-white/50">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Dropdown */}
          <div className="nav-item">
            Legal
            <div className="dropdown">
              <div className="py-2">
                {legal.map((item) => (
                  <Link key={item.href} href={item.href} className="dropdown-item">
                    <div>
                      <div className="text-sm font-medium text-white">{item.title}</div>
                      <div className="text-xs text-white/50">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <div className="flex items-center gap-2">
                  <img
                    src="/logo.png"
                    alt="ViralEdge Logo"
                    className="h-8 w-auto"
                  />
                  <span className="text-xl font-semibold text-white">ViralEdge</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
