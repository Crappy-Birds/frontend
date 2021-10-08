import React from 'react'
import { FaDiscord, FaTwitter } from 'react-icons/fa'

const navigation = [
  {
    name: 'Discord',
    href: 'https://discord.gg/jvJP4YYHFV',
    icon: FaDiscord,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/crappybirds',
    icon: FaTwitter,
  },
]

const Footer = ({}) => {
  return (
    <footer className="bg-dark-500">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-5 h-5" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-base text-center text-gray-400">
            &copy; 2021 Crappy Birds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
