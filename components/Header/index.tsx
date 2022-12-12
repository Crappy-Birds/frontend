import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../../public/images/logo.png'
import Image from 'next/image'

const navigation = [
  { name: 'About', href: '#about', isExternal: false },
  { name: 'Get a Bird', href: '#mint', isExternal: false },
  { name: 'Roadmap', href: '#roadmap', isExternal: false },
  /* { name: 'FAQ', href: '#faq', isExternal: false }, */
  { name: 'Team', href: '#team', isExternal: false },
  {
    name: 'Documentation',
    href: 'https://docs.crappybirds.io/',
    isExternal: true,
  },
]

const Header: React.FC = () => {
  return (
    <header>
      <Popover className="relative bg-brand-400">
        <div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 md:space-x-10 lg:px-8 h-[75px]">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Crappy Birds</span>
            <div className="absolute top-0 z-10 w-1/2 h-auto max-w-md transition-transform duration-500 xl:-translate-x-7 2xl:-translate-x-12 md:w-1/4 xl:w-full translate-y-1/3 md:translate-y-2/4 xl:translate-y-1/4 -rotate-2 hover:rotate-2">
              <Image
                src={Logo}
                alt="Crappy Birds Logo"
                width={498}
                height={115}
              />
            </div>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-dark-900 hover:text-gray-500 hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dark-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="justify-end hidden space-x-10 md:flex"
          >
            {navigation.map((item) =>
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs font-bold uppercase transition duration-500 ease-in-out lg:text-sm text-dark-900 hover:rotate-6 hover:bg-brand-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs font-bold uppercase transition duration-500 ease-in-out lg:text-sm text-dark-900 hover:rotate-6 hover:bg-brand-300"
                >
                  {item.name}
                </a>
              )
            )}
          </Popover.Group>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
          >
            <div className="divide-y-2 rounded-lg shadow-lg bg-gradient-to-b from-brand-400 to-brand-500 ring-1 ring-black ring-opacity-5 divide-brand-500">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      className="w-auto h-8"
                      src={Logo}
                      alt="Crappy Birds Logo"
                      placeholder="blur"
                      width={498 / 3}
                      height={115 / 3}
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-dark-500 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dark-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="grid grid-cols-2 gap-4">
                  {navigation.map((item) =>
                    item.isExternal ? (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-sm font-semibold uppercase text-dark-900 hover:text-pink-600"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-sm font-semibold uppercase text-dark-900 hover:text-pink-600"
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}

export default Header
