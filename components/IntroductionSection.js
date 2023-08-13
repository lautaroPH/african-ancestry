import StarsSvg from '@/components/Svg/StarsSvg';
import TickSvg from '@/components/Svg/TickSvg';
import PointSvg from './Svg/PointSvg';
import CountdownTimer from './CountDownTimer';

const IntroductionSection = () => {
  return (
    <section className="py-8 relative px-6 bg-[#F5F0FF] lg:bg-transparent">
      <div className="relative max-w-lg grid-cols-2 gap-10 m-auto lg:grid lg:m-auto lg:max-w-7xl">
        <article className="p-10 bg-white rounded-md lg:hidden">
          <picture className="flex items-center justify-center">
            <img src="/first-image.webp" alt="first image" />
          </picture>
        </article>
        <article>
          <div className="flex items-center justify-center gap-1 px-6 py-2 mt-10 text-sm font-medium border border-gray-300 bg-[#352f8514] text-purple-primary lg:w-80 rounded-2xl">
            <StarsSvg />
            600+ Verified Reviews
            <TickSvg />
          </div>
          <h1 className="mt-8 text-4xl font-bold text-center lg:text-left text-purple-secondary lg:text-7xl">
            Trace your DNA.
          </h1>
          <h2 className="text-4xl font-bold text-center lg:text-left text-purple-secondary lg:text-7xl">
            Find your roots!
          </h2>
          <p className="mt-8 text-lg font-light text-center text-purple-secondary lg:text-left">
            Discover your African roots with the MatriClan Test Kit! This
            at-home test kit reveals the specific roots of your mother’s
            maternal line up to 2,000 years ago.
          </p>
          <div className="flex flex-col items-center justify-between mt-5 lg:flex-row gap-y-4">
            <p className="font-bold text-purple-secondary">
              Discount 20% off start in
            </p>
            <CountdownTimer />
          </div>
          <div className="w-full text-center lg:text-left">
            <button className="w-full flex-wrap lg:w-auto flex items-center justify-center gap-2 hover:bg-[#ce4729] transition-colors duration-300 ease-in-out mt-8 bg-[#FF7050] text-white font-bold text-lg py-2 px-4">
              Start Your Journey
              <PointSvg />
              $240 <span className="font-light line-through">$299</span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-1 mt-8 text-xs lg:justify-start text-purple-primary">
            <p>Starting at $28/mo with</p>
            <img src="/affirm.png" alt="affirm" className="-mt-2" />
          </div>
        </article>
        <article className="hidden pl-20 lg:block">
          <picture>
            <img src="/dna.webp" alt="dna" />
          </picture>
        </article>
      </div>
    </section>
  );
};

export default IntroductionSection;
