import Image from 'next/image'
import { FaDiscord, FaTwitter, FaBook } from 'react-icons/fa'
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
  {
    id: 3,
    name: 'Documentation',
    description: 'Learn about the project in details.',
    icon: FaBook,
    bg: 'bg-brand-500',
    link: 'https://docs.crappybirds.io/',
  },
]

const About = () => {
  return (
    <div
      className="py-16 overflow-hidden lg:py-24 bg-gradient-to-b from-brand-500 to-[#FFFBF3]"
      id="about"
    >
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <h1 className="text-3xl italic font-extrabold tracking-tight uppercase md:text-center sm:text-5xl">
          About those Crappy Birds
        </h1>
        <p className="max-w-2xl mx-auto mt-8 text-lg font-medium md:text-center">
          Crappy Birds is a community project, focusing on building a fun-loving
          community and a free-to-play-and-earn MMO game leveraging NFTs.
        </p>
        <div className="mt-8 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="space-y-5">
            <h2 className="text-2xl italic font-extrabold tracking-tight uppercase sm:text-3xl">
              Genesis Collection
            </h2>
            <p className="text-lg font-medium">
              Crappy Birds : Genesis is an NFT collection made of 3,000 unique
              birds, randomly generated from over 170 attributes across 10
              categories.
            </p>
            <dl className="mt-12 space-y-10">
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
                      className="ml-16 text-lg font-medium leading-6 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-['']"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.name}
                    </a>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-600 duration-500 group-hover:text-gray-700">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* <div className="relative mx-auto my-10 aspect-w-1 aspect-h-1 w-full max-w-[512px] max-h-[512px] lg:my-0 lg:place-self-end"> */}
          <div className="max-w-[512px] max-h-[512px] mx-auto h-full w-full my-10 lg:my-0 md:place-self-end">
            <div className="relative aspect-w-1 aspect-h-1">
              <div
                className="transition-transform duration-300 border-8 border-white rounded-lg shadow-xl hover:rotate-3"
                aria-hidden="true"
              >
                <Image
                  src={BirdsGif}
                  layout="fill"
                  objectFit="cover"
                  alt="Crappy Birds: Genesis NFT collection preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
