
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-10 pt-[150px] dark:bg-gray-dark"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px]">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Hello, Crypto Miner!
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  You can not avoid hearing about people mining these digital currencies, which is destabilizing the graphics processor market, now that the cryptocurrency craze is in full swing. Here is what &quot;crypto mining&quot; actually is.
                </p>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  What exactly is cryptomining? In a nutshell, crypto mining is the process by which new coins, or cryptocurrency units, are produced. You can probably guess that this kind of mining doesn&apos;t require callused hands to hold pickaxe handles. Instead, it&apos;s computer processors that do all the hard work, chipping away at complex math problems. Of course, you may wonder why these digital currencies even need to be mined: after all, it&apos;s make-believe money with no backing except what people will pay for it. Turning on a money printer is how governments create real currency, so it stands to reason that cryptocurrency could do the same.  
                </p>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  The Bitcoin Network The main obstacle to cryptocurrency for years was that there was no way to limit the supply: there were many ideas for creating digital coins, but there was no way to guarantee that people wouldn&apos;t just duplicate them at will. Without an authority like a central bank---an institution that regulates the flow of currency---it becomes very tricky to manage the supply of any currency. Prior to Satoshi Nakamoto&apos;s (probably a fictitious) creation of the blockchain, this issue baffled developers of digital currencies for decades. The full theory of how these work is pretty complicated- --we go into more depth in our article on explaining the &quot;blockchain&quot;---but the easiest way to explain it is to picture it as a chain.
                </p>
                <img src="https://hitscounter.dev/api/hit?url=easy-crypto.org&label=Remote+Viewer&icon=currency-bitcoin&color=%2375b798" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
