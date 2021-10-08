import Image from 'next/image'

const Mint = () => {
  return (
    <div className="py-16 overflow-hidden bg-dark-500 lg:py-24" id="mint">
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="flex flex-wrap px-4 sm:px-0">
          <div className="w-full sm:w-1/2">
            <h3 className="text-3xl italic font-extrabold tracking-tight uppercase text-gray-50 sm:text-5xl">
              Join The Nest
            </h3>
            <p className="mt-3 text-xl italic text-gray-300">
              Birds of a feather, you know ...
            </p>
            <Image
              className="relative mx-auto"
              src="/images/drunk-crappy-bird-01.png"
              width={512}
              height={512}
              alt=""
            />
          </div>

          <div className="h-auto px-0 sm:px-8 w-1-2 md:-mx-4">
            <div className="flex flex-col content-start w-full h-full p-4 space-y-4 border border-gray-500 md:p-8 rounded-xl bg-dark-400">
              <h4 className="text-2xl italic capitalize md:text-3xl">
                Get a Crappy Bird
              </h4>
              <p>Enter the amount of birds you would like to purchase.</p>
              <div className="bg-[#191920] py-8 px-4 rounded-lg flex flex-row justify-between">
                <div className="hidden md:inline">
                  <Image
                    className="relative mx-auto"
                    src="/images/random-crappy-birds.png"
                    width={72}
                    height={72}
                    alt="A drunk Crappy Bird is showing the mint panel"
                  />
                </div>
                <div className="md:content-end md:text-right">
                  <p className="text-lg font-medium">Price per Crappy Bird</p>
                  <p className="text-xl font-bold">0.07 ETH Each</p>
                  <p className="text-base">9,000 remaining</p>
                </div>
              </div>
              <div className="space-y-4">
                <label htmlFor="mint-amount" className="sr-only">
                  Mint Amount
                </label>
                <div>
                  <input
                    type="number"
                    name="mint-amount"
                    id="mint-amount"
                    className="block w-full h-12 border-gray-600 rounded-md shadow-sm bg-dark-500 focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    placeholder="0"
                  />
                </div>
                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-base italic font-bold text-white uppercase bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mint
