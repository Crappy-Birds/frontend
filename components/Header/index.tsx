import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Buy a Bird', href: '#mint' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Team', href: '#team' },
]

const logo = '/images/logo.png'

const Header: React.FC = () => {
  return (
    <header>
      <Popover className="relative">
        <div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Crappy Birds</span>
              <Image
                className="w-auto h-8 sm:h-10"
                src={logo}
                alt="Crappy Birds Logo"
                width={192}
                height={18}
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="justify-end hidden space-x-10 md:flex"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs italic font-normal text-white uppercase hover:text-pink-600"
              >
                {item.name}
              </a>
            ))}
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
            <div className="divide-y-2 rounded-lg shadow-lg bg-dark-500 ring-1 ring-black ring-opacity-5 divide-dark-400">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      className="w-auto h-8"
                      src={logo}
                      alt="Logo"
                      width={192 * 0.85}
                      height={18 * 0.85}
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-200 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="px-5 py-6">
                <div className="grid grid-cols-2 gap-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm italic font-normal text-gray-300 uppercase hover:text-pink-600"
                    >
                      {item.name}
                    </a>
                  ))}
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
