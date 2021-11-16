import Image from 'next/image'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { HiCheck } from 'react-icons/hi'
import BirdsGif from '../../public/images/crappybirds.gif'

const socialFeatures = [
  {
    id: 1,
    name: 'Discord',
    description: 'Hang out with the birds and stay up-to-date.',
    icon: FaDiscord,
    bg: 'bg-indigo-500',
    link: 'https://discord.gg/jvJP4YYHFV',
  },
  {
    id: 2,
    name: 'Twitter',
    description: 'Follow our Twitter for sneak peeks and memes.',
    icon: FaTwitter,
    bg: 'bg-blue-400',
    link: 'https://twitter.com/crappybirds',
  },
]

const benefits = [
  {
    name: 'Exclusive Membership',
    description:
      'Cool benefits. Lorem ipsum dolor sit amet. Duis diam turpis pellentesque.',
  },
  {
    name: 'Game Early-Access',
    description:
      'Cool benefits. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Whitelist',
    description:
      'Cool benefits. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam turpis pellentesque.',
  },
  {
    name: 'Ownership',
    description:
      'Cool benefits. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Profile Picture',
    description:
      'Cool benefits. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    name: 'Long-term',
    description:
      'Cool benefits. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam turpis pellentesque.',
  },
]

const About = () => {
  return (
    <div className="py-16 overflow-hidden bg-dark-400 lg:py-24" id="about">
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <h1 className="text-3xl italic font-extrabold leading-8 tracking-tight uppercase md:text-center text-gray-50 sm:text-5xl">
          About those Crappy Birds
        </h1>
        {/* <h2 className="text-3xl italic font-extrabold leading-8 tracking-tight uppercase md:text-center text-gray-50 sm:text-5xl">
          Welcome to The Nest
        </h2>*/}
        <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-300 md:text-center">
          In a world where humans are no more. Some weird birds have survived,
          and for better or worse, they have discovered and adopted human
          culture.
          <br />
          <br />
          They now like to hang out in a place called The Nest, to relax, have a
          drink, hang out with friends, throw parties or events, well, it&apos;s
          a place to have fun and cheer up ...
        </p>

        <div className="mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-2xl italic font-extrabold tracking-tight uppercase text-gray-50 sm:text-3xl">
              Genesis NFT Drop
            </h2>
            <p className="mt-3 text-lg text-gray-300">
              Crappy Birds : Genesis is an NFT collection made of 9,000 unique
              birds, randomly generated from over 170 attributes across 10
              categories.
              <br />
              <br />
              Our goal is to build a strong brand and develop a multiplayer
              online game including play-and-earn mechanics, funds from the sale
              will be used to bootstrap and develop the Crappy Birds ecosystem.
              {/* <br />
              <br />
              They are stored as ERC-721 tokens on the Ethereum blockchain */}
            </p>

            <dl className="mt-10 space-y-10">
              {socialFeatures.map((item) => (
                <div
                  key={item.id}
                  className="relative transition-transform duration-500 ease-out group hover:translate-x-4"
                >
                  <dt>
                    <div
                      className={`absolute flex items-center justify-center w-12 h-12 text-white rounded-md ${item.bg}`}
                    >
                      <item.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <a
                      className="ml-16 text-lg font-medium leading-6 text-gray-100 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-['']"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.name}
                    </a>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-400 duration-500 group-hover:text-gray-300">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="relative mt-10 md:-mx-4 lg:mt-0 lg:place-self-end"
            aria-hidden="true"
          >
            <Image
              className="relative object-cover mx-auto rounded-lg shadow-lg"
              src={BirdsGif}
              width={512}
              height={512}
              alt="Crappy Birds NFT Preview"
            />
          </div>
        </div>

        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-base font-semibold tracking-wide uppercase text-brand-500">
              Genesis&apos; holders benefits
            </h3>
            <h2 className="text-2xl italic font-extrabold tracking-tight uppercase text-gray-50 sm:text-3xl">
              Welcome to The Nest
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Each Crappy Bird grants an exclusive access to The Nest and
              futures perks that can be unlocked by the community through the
              roadmap.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="relative">
                <dt>
                  <HiCheck
                    className="absolute w-6 h-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="text-lg font-medium leading-6 text-gray-100 ml-9">
                    {benefit.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-400 ml-9">
                  {benefit.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default About
