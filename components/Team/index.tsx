import Image from 'next/image'
import Fafifox from '../../public/images/team_fafifox.png'
import Yam from '../../public/images/team_yam.png'
import Luax from '../../public/images/team_luax.png'
import Eliz0r from '../../public/images/team_eliz0r.png'
import Etamiin from '../../public/images/team_etamiin.png'

const people = [
  {
    name: 'fafifox',
    role: 'CEO & Co-Founder',
    bio: 'Software Engineer, also make crappy pixel art',
    imageUrl: Fafifox,
    twitterUrl: 'https://twitter.com/fafif0x',
    linkedinUrl: 'https://www.linkedin.com/in/hugomalatrait',
    githubUrl: 'https://github.com/fafifox',
  },
  {
    name: 'yam',
    role: 'CTO & Co-Founder',
    bio: 'Software & Machine Learning Engineer',
    imageUrl: Yam,
    twitterUrl: 'https://twitter.com/CaptaineDoge',
    linkedinUrl: 'https://www.linkedin.com/in/saad-el-madafri-4ab208190/',
    githubUrl: 'https://github.com/yamidevs',
  },
  {
    name: 'luax',
    role: 'Advisor',
    bio: 'Blockchain Developer & NFT Builder',
    imageUrl: Luax,
    twitterUrl: 'https://twitter.com/Luax0',
    linkedinUrl: 'https://www.linkedin.com/in/yann-guineau/',
    githubUrl: 'https://github.com/LuaxY',
  },
  {
    name: 'eliz0r',
    role: 'Illustrator',
    bio: 'Concept Artist & Illustrator',
    imageUrl: Eliz0r,
    twitterUrl: 'https://twitter.com/Eliz0r',
    behanceUrl: 'https://www.behance.net/Eliz0r',
  },
  {
    name: 'etamiin',
    role: 'Game Developer',
    bio: 'Unity Wizard',
    imageUrl: Etamiin,
    twitterUrl: 'https://twitter.com/Etamiin0',
    linkedinUrl: 'https://www.linkedin.com/in/abdelbourahla/',
    githubUrl: 'https://github.com/Etamiin',
  },
]

const Team = ({}) => {
  return (
    <div
      className="py-16 overflow-hidden bg-[#FFF2AF] lg:py-24 border-t-4 border-opacity-50 border-dark-500 border-dashed"
      id="team"
    >
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="px-4 text-3xl italic font-extrabold leading-8 tracking-tight uppercase sm:px-0 md:text-center sm:text-5xl">
          Team
        </h2>
        <ul className="max-w-4xl px-4 mx-auto mt-12 space-y-12 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
          {people.map((person) => (
            <li key={person.name}>
              <div className="space-y-4">
                <div className="relative aspect-w-1 aspect-h-1">
                  <div className="border-8 border-white rounded-lg shadow-lg">
                    <Image
                      className="object-contain"
                      src={person.imageUrl}
                      layout="fill"
                      alt={`Team Member Picture - ${person.name}`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-black">{person.name}</h3>
                    <p className="text-gray-900">{person.role}</p>
                    <div className="text-lg">
                      <p className="text-gray-600">{person.bio}</p>
                    </div>
                  </div>
                  <ul className="flex space-x-5">
                    {person.twitterUrl && (
                      <li>
                        <a
                          href={person.twitterUrl}
                          className="text-gray-600 hover:text-gray-500"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                    )}
                    {person.linkedinUrl && (
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className="text-gray-600 hover:text-gray-500"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    )}
                    {person.githubUrl && (
                      <li>
                        <a
                          href={person.githubUrl}
                          className="text-gray-600 hover:text-gray-500"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">Github</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <title>GitHub</title>
                            <path
                              fillRule="evenodd"
                              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    )}
                    {person.behanceUrl && (
                      <li>
                        <a
                          href={person.behanceUrl}
                          className="text-gray-600 hover:text-gray-500"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="sr-only">Behance</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <title>Behance</title>
                            <path d="M0 4.4804V19.243h7.1554c.6613 0 1.3078-.0832 1.9297-.248.6288-.1654 1.1905-.4203 1.6792-.7661.485-.3431.8784-.788 1.1677-1.3369.2862-.542.4294-1.187.4294-1.9354 0-.9232-.219-1.7109-.6675-2.369-.446-.6542-1.1187-1.1139-2.0274-1.3746.6674-.3161 1.1658-.7227 1.506-1.2177.3371-.4967.5058-1.1174.5058-1.8607 0-.6873-.1127-1.2677-.3375-1.7318-.2306-.4709-.552-.8452-.9632-1.1266-.4176-.2808-.912-.4857-1.4912-.6085-.5827-.1261-1.22-.1872-1.9264-.1872zm15.6674.9903v1.4567h5.9844V5.4707zM3.2509 6.9947h3.0407c.2873 0 .5683.0204.8359.0731.2728.0466.508.134.716.2595.2096.1205.3754.293.501.5132.1208.2203.1806.5038.1806.8474 0 .6189-.1811 1.0702-.5551 1.3426-.3778.2775-.8543.4147-1.4304.4147H3.2509zm15.545 1.2564c-.819 0-1.5587.1462-2.2294.436-.6705.2904-1.2463.6875-1.7318 1.1915-.4846.5011-.8535 1.0986-1.12 1.7909-.2612.69-.3942 1.4366-.3942 2.236 0 .8268.1284 1.5891.3835 2.2786.258.6923.6198 1.2822 1.0856 1.781.478.4967 1.046.8784 1.726 1.1497.6806.269 1.4382.4048 2.2803.4048 1.208 0 2.2446-.2771 3.0949-.8326.8599-.5528 1.4902-1.471 1.9058-2.7574h-2.585c-.1.3307-.359.649-.784.9467-.4295.2988-.9417.4492-1.534.4492-.8233 0-1.4588-.2168-1.8985-.6462-.4412-.4294-.7267-1.2289-.7267-2.0742h7.713c.0552-.8291-.0122-1.6218-.2045-2.3797-.1938-.7601-.5033-1.4365-.9393-2.029-.4355-.5931-.9904-1.0667-1.667-1.4165-.6788-.3543-1.4703-.5288-2.3747-.5288zm-.0887 2.217c.7209 0 1.3126.2092 1.6612.5954.3503.389.6065.9432.6766 1.6915h-4.7766c.0136-.2085.058-.4444.1339-.7045.0749-.2668.2039-.5164.3933-.753.1905-.2326.4402-.431.744-.5896.3109-.1608.6986-.2397 1.1676-.2397zM3.251 12.664h3.5334c.6996 0 1.2682.1602 1.6948.4836.4259.328.6405.8685.6405 1.6292 0 .3885-.0632.7094-.1946.9566-.131.2495-.3106.4466-.528.5896-.2172.1491-.4753.2498-.7661.3137-.2862.0639-.5905.092-.9115.092H3.2509z" />
                          </svg>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Team
