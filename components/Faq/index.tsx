import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'

const faqs = [
  {
    question: 'Is this a great question about Crappy Birds ?',
    answer:
      "I don't know. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Is this a great question about Crappy Birds ?',
    answer:
      "I don't know. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Is this a great question about Crappy Birds ?',
    answer:
      "I don't know. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Is this a great question about Crappy Birds ?',
    answer:
      "I don't know. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Is this a great question about Crappy Birds ?',
    answer:
      "I don't know. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Faq = ({}) => {
  return (
    <div className="py-16 overflow-hidden bg-dark-500 lg:py-24" id="faq">
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="px-4 text-3xl italic font-extrabold leading-8 tracking-tight uppercase sm:px-0 md:text-center text-gray-50 sm:text-5xl">
          FAQ
        </h2>
        <div className="max-w-3xl mx-auto">
          <dl className="mt-12 space-y-6 divide-y divide-gray-600">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                        <span className="font-medium text-gray-100">
                          {faq.question}
                        </span>
                        <span className="flex items-center ml-6 h-7">
                          <HiChevronDown
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform transition duration-300 ease-out'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Transition
                      enter="transition duration-200 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-100 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel as="dd" className="pr-12 mt-2" static>
                        <p className="text-base text-gray-400">{faq.answer}</p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Faq
