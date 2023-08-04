import ContainsSvg from './Svg/ContainsSvg';
import CountrySvg from './Svg/CountrySvg';
import FamilySvg from './Svg/FamilySvg';
import PunchSvg from './Svg/PunchSvg';

const LeftChooseArticle = () => {
  return (
    <article className="flex flex-col items-center justify-center pr-16 border-r gap-y-10 border-purple-light">
      <img
        src="/logo.webp"
        alt="logo"
        className="hidden object-cover lg:block"
      />
      <img
        src="/logo-tiny.webp"
        alt="logo"
        className="object-cover lg:hidden"
      />
      <div className="flex flex-col items-center justify-center">
        <CountrySvg className="w-12 h-12 lg:w-20 lg:h-20" />
        <p className="text-purple-light text-sm lg:text-base lg:w-[30ch] text-center mt-5">
          Identifies your present-day African country of origin
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <FamilySvg className="w-12 h-12 lg:w-20 lg:h-20" />
        <p className="text-purple-light text-sm lg:text-base lg:w-[30ch] text-center mt-5">
          Results can be shared with your entire family
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <ContainsSvg className="w-12 h-12 lg:w-20 lg:h-20" />
        <p className="text-purple-light text-sm lg:text-base lg:w-[30ch] text-center mt-5">
          Contains over 33,000 African lineages across 40 countries
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <PunchSvg className="w-12 h-12 lg:w-20 lg:h-20" />
        <p className="text-purple-light text-sm lg:text-base lg:w-[30ch] text-center mt-5">
          100% Black-Owned including black geneticists and staff
        </p>
      </div>
    </article>
  );
};

export default LeftChooseArticle;
