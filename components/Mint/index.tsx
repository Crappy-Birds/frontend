import Image from 'next/image'
import { useState } from 'react'
import DrunkBird from '../../public/images/drunk-crappy-bird-01.png'
import RandomThumbnail from '../../public/images/random-crappy-birds.png'

const Mint = () => {
  const mintPrice = 400 // 0.04
  const [birdAmount, setBirdAmount] = useState<number>()

  const handleBirdAmountChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setBirdAmount(Number(event.target.value))

  return (
    <div
      className="py-16 overflow-hidden lg:py-24 bg-gradient-to-b from-brand-700 to-brand-800"
      id="mint"
    >
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="flex flex-wrap items-center px-4 sm:px-0">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h3 className="text-3xl italic font-extrabold tracking-tight uppercase text-gray-50 sm:text-5xl">
              Join The Nest
            </h3>
            <p className="mt-3 text-xl italic text-gray-300">
              Birds of a feather, you know ...
            </p>
            <Image
              className="relative mx-auto"
              src={DrunkBird}
              alt="Drunk Crappy Bird showing the mint form"
            />
          </div>

          <div className="w-full h-auto px-0 text-center lg:w-1/2 sm:px-8 md:-mx-4">
            <div className="flex flex-col content-start w-full h-full p-4 space-y-4 text-left border shadow-xl border-brand-500 md:p-8 rounded-xl bg-dark-400">
              <h4 className="text-2xl italic capitalize md:text-3xl">
                Get a Crappy Bird
              </h4>
              <p>Enter the amount of birds you would like to purchase.</p>
              <div className="bg-[#191920] py-8 px-4 rounded-lg flex flex-row justify-between items-center">
                <div className="hidden md:inline">
                  <Image
                    className="relative mx-auto rounded-lg bg-brand-600"
                    src={RandomThumbnail}
                    alt=""
                  />
                </div>
                <div className="md:content-end md:text-right">
                  <p className="text-lg font-medium">Price per Crappy Bird</p>
                  <p className="text-2xl italic font-bold">
                    <span className="text-brand-600">{mintPrice / 10000}</span>{' '}
                    ETH Each
                  </p>
                  <p className="text-lg">9,000 remaining</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="mint-amount"
                      className="block text-sm font-medium text-gray-300"
                    >
                      Mint amount
                    </label>
                    <span className="text-sm text-gray-400">
                      Limited to 3 per user
                    </span>
                  </div>
                  <input
                    type="number"
                    min={1}
                    max={3}
                    step={1}
                    name="mint-amount"
                    id="mint-amount"
                    value={birdAmount}
                    onChange={(e) => handleBirdAmountChange(e)}
                    className="block w-full h-12 border-gray-600 rounded-md shadow-sm peer out-of-range:border-red-500 bg-dark-500 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                    placeholder="0"
                  />
                  <p
                    className="hidden mt-2 text-sm text-red-600 peer-out-of-range:inline"
                    id="email-error"
                  >
                    Number not in range
                  </p>
                </div>
                {birdAmount && (
                  <div className="flex justify-between transition-all duration-700">
                    <p className="text-lg font-bold uppercase sm:text-2xl">
                      Total :
                    </p>
                    <p className="text-lg font-bold uppercase sm:text-2xl">
                      {(birdAmount * mintPrice) / 10000 || 0} ETH
                    </p>
                  </div>
                )}
                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-base italic font-bold text-white uppercase border border-transparent rounded-md shadow-sm disabled:cursor-not-allowed disabled:opacity-50 bg-brand-600 hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  disabled={true}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
            <span className="text-sm text-gray-400">
              Note: Ninety birds are being withheld from the sale. These will be
              used for giveaways, events — and for the team
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mint
