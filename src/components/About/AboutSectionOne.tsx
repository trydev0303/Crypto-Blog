import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            
          <div className="w-full px-4 lg:w-2/5">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:ml-0">
                <Image
                  src="/images/about/FB102.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/FB102.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/5">
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                At just 22 years old, fresh out of school, I wasted no time diving into the world of cryptocurrency—a realm full of promise and opportunity. While most people hesitated, unsure if crypto was a fleeting trend or a genuine revolution, I saw its potential and went all in. My first major move was investing in an Antminer L7, a high-performance device that mines Litecoin and Dogecoin with impressive efficiency. It wasn’t just a purchase; it was my first stake in the digital frontier.
              </p>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
              But I didn’t let the Antminer sit idle. Instead of solely mining myself, I discovered Mining Rig Rentals, a platform that allowed me to rent out the machine to other enthusiasts in need of its power. It was a clever way to earn passive income while taking the time to study the market and strategize for my next steps in the crypto ecosystem.</p>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
              My journey didn’t stop there. Late nights became routine as I poured over whitepapers, tracked emerging trends, and connected with crypto aficionados from around the globe. I wasn’t simply a participant; I was a visionary, constantly questioning how blockchain technology could reshape industries and create new opportunities not just for myself, but for others. What sets me apart is my blend of ambition and calculated risk-taking. My crypto journey is a testament to my determination to innovate and forge my own path. And while my investment in the Antminer L7 marked the beginning, it’s clear I’m only just scratching the surface of what I’ll achieve in this exciting, unpredictable world.</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
