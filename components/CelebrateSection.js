const CelebrateSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-20 pb-20 bg-purple-primary">
      <h3 className="text-5xl font-semibold text-center text-white lg:text-left">
        Celebrate Your Blackness{' '}
      </h3>
      <p className="mt-5 tracking-widest text-center text-white">
        From the people who have paved the way to the places that inspire us to
        the spaces that have become sacred.
      </p>
      <div className="mt-20 border-4 border-white rounded-md lg:border-8">
        <iframe
          src="https://www.youtube.com/embed/8gBIByhd4Mg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="lg:w-[1000px] lg:h-[500px] w-full sm:w-[500px] sm:h-[250px]"
        ></iframe>
      </div>
    </section>
  );
};

export default CelebrateSection;
