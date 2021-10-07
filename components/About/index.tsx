import Image from 'next/image'
import { FaDiscord, FaTwitter } from 'react-icons/fa'

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

const About = () => {
  return (
    <div className="py-16 overflow-hidden bg-dark-400 lg:py-24">
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-3xl italic font-extrabold leading-8 tracking-tight uppercase md:text-center text-gray-50 sm:text-5xl">
          Welcome to The Nest
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-300 md:text-center md:text-lg">
          In a world where humans are no more. Some weird birds have survived,
          and for better or worse, they have discovered and adopted human
          culture.
          <br />
          <br />
          They now like to hang out in a place called The Nest, to relax, have a
          drink, hang out with friends, throw parties or events, well, it&apos;s
          a place to have fun and cheer up...
        </p>

        <div className="mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h3 className="text-2xl italic font-extrabold tracking-tight lowercase text-gray-50 sm:text-3xl">
              What are those ?
            </h3>
            <p className="mt-3 text-base text-gray-300 md:text-lg">
              Crappy Birds is an NFT collection made of 9,000 unique birds,
              <br />
              randomly generated from over 160 attributes across 10 categories.
              <br />
              <br />
              Each Crappy Bird grants an exclusive access to The Nest and
              futures areas and perks that can be unlocked by the community
              through the roadmap.
              <br />
              They are stored as ERC-721 tokens on the Ethereum blockchain
            </p>

            <dl className="mt-10 space-y-10">
              {socialFeatures.map((item) => (
                <div
                  key={item.id}
                  className="relative transition-all duration-500 ease-out group hover:translate-x-4"
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
              className="relative mx-auto"
              src="/images/crappybirds.gif"
              width={512}
              height={512}
              alt="Preview"
            />
          </div>
        </div>

        {/* <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Always in the loop
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ex obcaecati natus eligendi delectus, cum deleniti sunt in
                labore nihil quod quibusdam expedita nemo.
              </p>

              <dl className="mt-10 space-y-10">
                {socialFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                        <item.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
              <Image
                className="relative mx-auto"
                width={980}
                height={748}
                src="/images/feature-example-2.png"
                alt=""
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default About
