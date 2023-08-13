import BagSvg from './Svg/BagSvg';

const Header = () => {
  return (
    <header className="bg-[#F5F0FF] lg:bg-transparent relative z-20 flex items-center justify-between px-4 pt-8  lg:m-auto lg:max-w-7xl">
      <img
        src="/logo.webp"
        alt="African Ancestry"
        className="hidden sm:block"
      />
      <img src="/logo-tiny.webp" alt="African Ancestry" className="sm:hidden" />
      {/* <button className="flex items-center justify-center bg-[#352F85] p-2 sm:p-3 rounded-full hover:bg-[#242060] transition-colors duration-300 ease-in-out">
        <BagSvg className={'w-5 h-5 sm:w-7 sm:h-7'} />
      </button> */}
    </header>
  );
};

export default Header;
