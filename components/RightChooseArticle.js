import DisLikeSvg from './Svg/DisLikeSvg';
import GlassSvg from './Svg/GlassSvg';
import InternetSvg from './Svg/InternetSvg';
import ThreePersonSvg from './Svg/ThreePersonSvg';

const RightChooseArticle = () => {
  return (
    <article className="flex flex-col items-center justify-center pl-16 gap-y-12">
      <div className="text-center">
        <p className="font-bold text-gray-600 lg:text-2xl">Other</p>
        <p className="font-bold text-gray-600 lg:text-2xl">DNA Companies</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <GlassSvg className="w-12 h-12 lg:w-20 lg:h-20" />
        <p className="text-gray-500 text-sm lg:text-base lg:w-[30ch] text-center mt-5">
          Reveal what percentage of your Ancestry is African
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <ThreePersonSvg className="w-12 h-12 lg:w-20 lg:h-20" />
        <p className="text-gray-500 text-sm lg:text-base lg:w-[30ch] text-center mt-5">
          Results can only be shared by siblings with the same two parents
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <InternetSvg className="w-12 h-12 lg:w-20 lg:h-20" />
        <p className="text-gray-500 text-sm lg:text-base lg:w-[30ch] text-center mt-5">
          Contain fewer than 3000 African lineages across 10 African regions
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <DisLikeSvg className="w-12 h-12 lg:w-20 lg:h-20" />
        <p className="text-gray-500 text-sm lg:text-base lg:w-[30ch] text-center mt-5">
          Publicly traded with no Black ownership or geneticists
        </p>
      </div>
    </article>
  );
};

export default RightChooseArticle;
