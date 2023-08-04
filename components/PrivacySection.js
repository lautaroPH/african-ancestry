import PrivacyBox from './PrivacyBox';

const PrivacySection = () => {
  return (
    <section className="bg-[#fff0ed] flex items-center justify-center px-4 flex-col pt-20 pb-20">
      <h3 className="text-5xl font-semibold text-center lg:text-left text-purple-secondary">
        Privacy is everything{' '}
      </h3>
      <p className="mt-5 tracking-widest text-center text-purple-secondary">
        We DO NOT sell or share your genetic information.
      </p>
      <div className="flex flex-col max-w-lg grid-cols-2 gap-16 m-auto mt-20 lg:grid lg:max-w-7xl">
        <PrivacyBox
          image={'/confidential.webp'}
          info={
            'When your DNA sample is submitted to the lab, no personal information is provided. It is only identified by a barcode maintained by African Ancestry.'
          }
          title={'Your Information Is Confidential'}
        />
        <PrivacyBox
          image={'/genetic.webp'}
          info={
            '  Once your DNA sequence has been analyzed, all generic material including additional cheek swabs are destroyed at the lab.'
          }
          title={'All Genetic Material Is Destroyed'}
        />
      </div>
    </section>
  );
};

export default PrivacySection;
