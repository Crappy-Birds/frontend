import Image from 'next/image'
import { FaBook, FaRegNewspaper } from 'react-icons/fa'
import CrappyBirdsOnline from '../../public/images/crappy-birds-online-game.jpg'

const socialFeatures = [
  {
    id: 1,
    name: 'Documentation',
    description: 'Learn more about the project.',
    icon: FaBook,
    bg: 'bg-zinc-500',
    link: 'https://docs.crappybirds.io/',
  },
  {
    id: 1,
    name: 'Litepaper',
    description: 'Learn more about the project.',
    icon: FaRegNewspaper,
    bg: 'bg-zinc-500',
    link: '/docs/crappy-birds-litepaper.pdf',
  },
]

const AboutGame = () => {
  return (
    <div
      className="py-16 overflow-hidden lg:pb-24 lg:pt-16 bg-gradient-to-b from-[#FFFBF3] to-[#FFFBF3]"
      id="about-game"
    >
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="mt-8 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="max-w-[512px] max-h-[512px] mx-auto h-full w-full my-10 lg:my-0 md:place-self-start">
            <div className="relative aspect-w-1 aspect-h-1">
              <div
                className="transition-transform duration-300 border-8 border-white rounded-lg shadow-xl hover:-rotate-3"
                aria-hidden="true"
              >
                <Image
                  src={CrappyBirdsOnline}
                  layout="fill"
                  objectFit="cover"
                  alt="Crappy Birds Online - Game scene"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-5 text-lg font-medium">
              <h2 className="text-2xl italic font-extrabold tracking-tight uppercase sm:text-3xl">
                Crappy Birds Online
              </h2>
              <p>
                Crappy Birds Online is a fun-first 2D Side-Scrolling MMORPG
                leveraging NFTs for cosmetic items, lands and other properties.
              </p>
              <ul className="ml-6 space-y-2 list-disc">
                <li>Explore a vast interconnected world</li>
                <li>Customize your character</li>
                <li>Socialize and hang out with others</li>
                <li>Fight vicious enemies and bosses</li>
                <li>Scavenge and recycle waste for raw materials</li>
                <li>Craft equipment, weapons and gadgets to get stronger</li>
                <li>Run your own business in a player-driven economy</li>
                {/* <li>2D Side-scrolling MMORPG</li>
                <li>Free-to-Play-and-Earn</li>
                <li>Target platform PC, controller friendly</li>
                <li>Inspired by Maplestory, Hollow Knight, Flappy Birds</li> */}
              </ul>
            </div>
            <dl className="mt-8 space-y-4">
              {socialFeatures.map((item) => (
                <div
                  key={item.id}
                  className="relative p-4 transition duration-500 ease-out bg-black bg-opacity-0 rounded-lg hover:bg-opacity-5 group hover:translate-x-4"
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
                  <dd className="mt-1 ml-16 text-base text-gray-600 duration-500 group-hover:text-gray-700">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutGame
