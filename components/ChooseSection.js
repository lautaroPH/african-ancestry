import LeftChooseArticle from './LeftChooseArticle';
import RightChooseArticle from './RightChooseArticle';

const ChooseSection = () => {
  return (
    <section className="bg-[#f5f0ff] flex items-center justify-center flex-col pt-20 pb-20 px-4">
      <h3 className="text-4xl font-semibold text-center lg:text-5xl lg:text-left text-purple-secondary">
        Better. Bolder. Blacker.
      </h3>
      <h3 className="mt-4 text-4xl font-semibold text-center lg:text-5xl lg:text-left text-purple-secondary">
        Choose African Ancestry
      </h3>
      <article className="grid max-w-lg grid-cols-2 m-auto mt-16 lg:max-w-7xl">
        <LeftChooseArticle />
        <RightChooseArticle />
      </article>
    </section>
  );
};

export default ChooseSection;
