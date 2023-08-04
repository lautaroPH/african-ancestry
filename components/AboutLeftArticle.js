import QuotsSvg from './Svg/QuotsSvg';

const AboutLeftArticle = () => {
  return (
    <article className="relative order-2 lg:order-1">
      <picture>
        <img src="/about.webp" alt="about us" />
      </picture>
      <div className="absolute px-10 lg:w-[430px] py-8 text-white bg-purple-light -bottom-24 lg:bottom-0 right-0 lg:right-5 xl:right-24">
        <div className="absolute left-0 -top-16">
          <QuotsSvg />
        </div>
        <p className="tracking-widest">
          I can’t wait to go to Bioko Island … to have the sun in that part of
          the region on my body and know that I’m home...
        </p>
        <p className="mt-5 text-xs font-medium">
          Ramunda Y., African Ancestry Family Member
        </p>
      </div>
    </article>
  );
};

export default AboutLeftArticle;
