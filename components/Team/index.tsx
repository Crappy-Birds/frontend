import Image from 'next/image'
const people = [
  {
    name: 'fafifox',
    role: 'Role',
    imageUrl: '/images/team_fafifox.png',
    twitterUrl: 'https://twitter.com/fafif0x',
  },
  {
    name: 'yam',
    role: 'Role',
    imageUrl: '/images/team_yam.png',
    twitterUrl: 'https://twitter.com/',
  },
]

const Team = ({}) => {
  return (
    <div className="py-16 overflow-hidden bg-dark-500 lg:py-24">
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="px-4 text-3xl italic font-extrabold leading-8 tracking-tight uppercase sm:px-0 md:text-center text-gray-50 sm:text-5xl">
          Team
        </h2>
        <ul
          role="list"
          className="max-w-2xl px-4 mx-auto mt-12 space-y-12 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="space-y-4">
                <div className="aspect-w-1 aspect-h-1">
                  <Image
                    className="object-cover rounded-lg shadow-lg"
                    src={person.imageUrl}
                    layout="fill"
                    alt=""
                  />
                </div>

                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3>{person.name}</h3>
                    <p className="text-pink-600">{person.role}</p>
                  </div>
                  <ul role="list" className="flex space-x-5">
                    <li>
                      <a
                        href={person.twitterUrl}
                        className="text-gray-400 hover:text-gray-500"
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
