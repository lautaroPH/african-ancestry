const FindOutSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-20 pb-20 bg-purple-light">
      <h3 className="text-5xl font-semibold text-center text-white">
        Find out your specific African roots
      </h3>
      <article className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 m-auto mt-20 text-white lg:w-[1000px]">
        <img src="/jacqueline.webp" alt="Jacqueline" />
        <div className="flex flex-col items-center lg:items-start lg:justify-start">
          <p className="text-center lg:text-left pb-10 text-2xl font-medium tracking-widest sm:w-[30ch] border-b border-[#FF7050]">
            This was the best gift I could have ever purchased for myself, my
            daughter and my family members!
          </p>
          <p className="pt-10 text-xl font-bold">Jacqueline D.</p>
          <button className="hover:bg-[#ce4729] transition-colors duration-300 ease-in-out bg-[#FF7050] text-white font-bold text-lg py-2 px-10 mt-10 ">
            Find Your Roots
          </button>
        </div>
      </article>
    </section>
  );
};

export default FindOutSection;
