//import { HiCheck } from 'react-icons/hi'

const benefits = [
  {
    name: 'Founding Feather Pass',
    description:
      'Every holder is granted an exclusive access to every expansion of our world and gets an edge on our upcoming drops (access list, land sale, token, staking, airdrop … ?)',
  },
  {
    name: 'Help shape the game',
    description: `Holders will be consulted to voice their opinions and make choices during the game development.
    You will be able to choose between different designs & names of game elements. You may also be consulted to give your opinion on strategic choices.`,
  },
  {
    name: 'Backstage Access',
    description:
      'Holders of our NFTs will have access to the production backstage. We will share with you our progress and the production process',
  },
  {
    name: 'Early Access',
    description:
      'Get closer to the team and play the game in early-access during the development phases (tests, alpha, beta …)',
  },
  {
    name: 'In-Game Rewards',
    description:
      'Receive exclusive cosmetics items, title to set you apart in game, and get your name in the game backer credits',
  },
  {
    name: 'Digital Goodies',
    description:
      'Receive a digital Artbook of the game, a Wallpaper and the digital soundtrack',
  },
  {
    name: 'Crappy Birds Figurine',
    description:
      'Receive a <Crappy Birds Physical Figurine - Limited Edition> for free by holding 3 NFTs',
  },
  {
    name: 'Special Rewards',
    description:
      'We have special rewards in the pipeline for our biggest supporter: Design <something> for the game in collaboration with the team',
  },
]

const Benefits = () => {
  return (
    <div
      className="overflow-hidden bg-gradient-to-b from-[#FFFBF3] to-[#FFFBF3]"
      id="benefits"
    >
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-base font-semibold tracking-wide uppercase text-brand-500">
            Genesis&apos; Holders Benefits
          </h3>
          <h2 className="text-2xl italic font-extrabold tracking-tight uppercase sm:text-3xl">
            Utility & Rewards
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            There&apos;s way more than a crappy profile picture. Your NFT is the
            gateway to the Crappy Birds universe.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-12 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.name}
              className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
            >
              {/* <div className="flex items-center justify-center w-12 h-12 text-white bg-brand-500 rounded-xl sm:shrink-0">
                <HiCheck
                  className="absolute w-8 h-8 text-white"
                  aria-hidden="true"
                />
              </div> */}
              <div className="sm:min-w-0 sm:flex-1">
                <p className="text-xl font-semibold leading-8 text-gray-900">
                  {benefit.name}
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Benefits
