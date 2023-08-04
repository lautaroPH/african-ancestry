import AboutLeftArticle from './AboutLeftArticle';
import ImagesSponsors from './ImagesSponsors';
import RightAboutArticle from './RightAboutArticle';

const AboutSection = () => {
  return (
    <section className="max-w-md px-4 pb-20 m-auto mt-20 lg:mt-52 lg:max-w-7xl">
      <h4 className="font-medium text-center text-purple-secondary tracking-[0.3em]">
        FEATURED IN
      </h4>
      <ImagesSponsors />
      <div className="flex flex-col items-center justify-center grid-cols-2 gap-10 mt-20 lg:grid">
        <AboutLeftArticle />
        <RightAboutArticle />
      </div>
    </section>
  );
};

export default AboutSection;
