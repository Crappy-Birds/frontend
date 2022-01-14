import { HiCheck } from 'react-icons/hi'

const benefits = [
  {
    name: 'Exclusive In-Game rewards',
    description: 'Receive in-game rewards, such as cosmectics and title.',
  },
  {
    name: 'Early-Access',
    description:
      //'Try out the game first and get involved as the game evolve by taking part in closed alpha and beta.',
      'Be the first to try out the game and get involved by taking part in closed alpha and beta.',
  },
  {
    name: 'Whitelist',
    description:
      'Holding a Genesis Crappy Bird grants you a whitelist spot for future drop.',
  },
  {
    name: 'Community Membership',
    description:
      'Access to private Discord channels and get development insights from the team before anyone else.',
  },
  {
    name: 'A crappy profile picture',
    description:
      'Using your Crappy Bird as profile picture might be a good way to show off your bad taste.',
  },
  {
    name: 'Commercial Usage Rights',
    description:
      'The holder has full rights to use their Genesis Crappy Birds for personal and commercial purposes.',
  },
]

const Benefits = () => {
  return (
    <div className="pb-16 overflow-hidden lg:pb-24 bg-gradient-to-b from-dark-400 via-brand-700 to-brand-700">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-base font-semibold tracking-wide uppercase text-brand-500">
            Genesis&apos; holders benefits
          </h3>
          <h2 className="text-2xl italic font-extrabold tracking-tight text-white uppercase sm:text-3xl">
            Welcome to The Nest
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Holding a Crappy Bird grants an exclusive access to The Nest and
            many perks that will be unlocked through the roadmap.
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
                <p className="text-lg font-semibold leading-6 text-gray-50 ml-9">
                  {benefit.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-300 ml-9">
                {benefit.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Benefits
