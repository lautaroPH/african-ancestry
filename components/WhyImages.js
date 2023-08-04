import StarsSvg from './Svg/StarsSvg';
import TickSvg from './Svg/TickSvg';

const WhyImages = () => {
  return (
    <article className="relative grid items-center justify-center grid-cols-2">
      <img src="/why-first.webp" alt="why1" />
      <img className="-ml-6 lg:-ml-16" src="/why-second.webp" alt="why1" />
      <img className="-mt-6 lg:-mt-16" src="/why-third.webp" alt="why1" />
      <img
        className="-mt-6 -ml-6 lg:-ml-16 lg:-mt-16"
        src="/why-fourth.webp"
        alt="why1"
      />
      <div className="bg-gradient-to-b text-xs from-[#ff7051] to-purple-light absolute top-[70px] lg:bottom-0 left-10 lg:left-0 flex flex-col items-center justify-center m-auto lg:text-sm text-white border-2 lg:border-8 border-white rounded-full w-32 h-32 lg:w-44 lg:h-44 lg:-top-16 right-16">
        <StarsSvg />
        <p className="font-bold">600+</p>
        <div className="flex items-center gap-1">
          <p className="font-medium">Verified reviews</p>
          <TickSvg />
        </div>
      </div>
    </article>
  );
};

export default WhyImages;
