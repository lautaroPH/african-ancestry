import WhyBoxInfo from './WhyBoxInfo';
import WhyImages from './WhyImages';

const WhySection = () => {
  return (
    <section className="bg-[#fff0ed] flex items-center justify-center flex-col pt-20 pb-20 px-4">
      <h3 className="text-5xl font-semibold text-center lg:text-left text-purple-secondary">
        Why African Ancestry
      </h3>
      <p className="mt-5 tracking-widest text-center lg:text-left text-purple-secondary">
        Helped more than <span className="font-bold">1,000,000 people</span>{' '}
        re-connect with the roots of their family tree.
      </p>
      <div className="flex flex-col items-center justify-center max-w-xs grid-cols-2 gap-10 m-auto mt-20 lg:grid lg:max-w-7xl">
        <WhyImages />
        <WhyBoxInfo />
      </div>
    </section>
  );
};

export default WhySection;
