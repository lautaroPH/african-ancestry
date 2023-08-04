import Step from './Step';

const HowItWorkSection = () => {
  return (
    <section className="flex flex-col items-center justify-center max-w-lg px-4 pt-20 pb-20 m-auto lg:max-w-7xl">
      <h3 className="text-4xl font-semibold text-center lg:text-5xl lg:text-left text-purple-secondary">
        How It Works
      </h3>
      <p className="mt-5 tracking-widest text-purple-secondary lg:w-[100ch] text-center">
        We each carry in our DNA a series of indicators that provide information
        about our ancestry. This information is passed from generation to
        generation and can tell a profound story about where we come from, and
        highlight our connections to modern-day Africa.
      </p>
      <div className="flex flex-wrap items-start justify-center gap-16 px-4 mt-16">
        <Step
          info={
            'Depending on which test you purchase, we analyze either the mitochondrial DNA (mtDNA) that you inherited from your mother, the Y chromosome that men inherit from their fathers or autosomal DNA that you inherit from both parents.'
          }
          step={'1'}
          title={'Your DNA'}
        />
        <Step
          info={
            'You share information within the genes we extract that is unchanged through every branch of your family tree. In other words, we identify the unique fingerprint that you share with your parents, grandparents, great-grandparents and so on along a single lineage.'
          }
          step={'2'}
          title={'Your Family Tree'}
        />
        <Step
          info={
            'Utilizing pioneering genetic scientific methods, we look closely for markers or mutations that indicate where in the world your ancestry is found. If your genes indicate Africa, we then compare them to the world’s largest database of African lineages to.'
          }
          step={'3'}
          title={'Your History'}
        />
      </div>
      <div className="w-full mt-16 text-center">
        <button className="hover:bg-[#ce4729] transition-colors duration-300 ease-in-out bg-[#FF7050] text-white font-bold text-lg py-2 px-20">
          Find Your Roots
        </button>
      </div>
    </section>
  );
};

export default HowItWorkSection;
