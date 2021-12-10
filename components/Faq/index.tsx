import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'

const faqs = [
  {
    question: 'What is this NFT collection about ?',
    answer:
      "The Crappy Birds: Genesis collection is made of 3,000 randomly generated birds made to bootstrap the game development, the community and what's around it.",
  },
  {
    question: 'What chain are Crappy Birds minted on ?',
    answer: 'On the Ethereum blockchain as ERC-721 tokens.',
  },
  {
    question: 'What are the perks of having a Crappy Birds: Genesis NFT ?',
    answer:
      'Private community membership, game early access, whitelisted for future sales and more through roadmap activations.',
  },
  {
    question: 'Are there secondary sales royalties ?',
    answer:
      'Yes, royalties are set at 5%. We strongly believe in community-driven development, and as part of our growth strategy, money earned from secondary sales will be used to grow the game.',
  },
  {
    question: 'What is the game genre of Crappy Birds ?',
    answer: '2D side-scrolling platformer / Metroidvania / MMO',
  },
  {
    question: 'What is your inspiration for the Crappy Birds game ?',
    answer:
      'You can think of a mix between Flappy Bird, Super Mario, Hollow Knight and Maplestory.',
  },
  {
    question: 'Will there be a play-and-earn aspect to the game ?',
    answer:
      'Yes. We want to create a fun game first, and then implement play-and-earn mechanics in a smooth way.',
  },
  {
    question: 'Do you plan to launch ERC20 tokens for the game ?',
    answer:
      'Most likely yes, as a play-and-earn game would need one or more currencies in the game.',
  },
  {
    question:
      "If the NFT sale doesn't sell out, will the game still be developed?",
    answer:
      'Yes of course, but we may have to reduce the scope of the game to fit into the available budget.',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Faq = ({}) => {
  return (
    <div
      className="py-16 overflow-hidden lg:py-24 bg-gradient-to-b from-dark-500 to-black"
      id="faq"
    >
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
