const RightAboutArticle = () => {
  return (
    <article className="order-1 px-4 mt-8 lg:pl-20 lg:order-2">
      <h3 className="text-4xl font-semibold lg:text-5xl text-purple-secondary">
        About
      </h3>
      <h3 className="mt-3 text-4xl font-semibold lg:mt-5 lg:text-5xl text-purple-secondary">
        African Ancestry
      </h3>
      <p className="mt-10 text-sm tracking-widest text-center lg:text-left lg:text-base text-purple-secondary">
        Founded in 2003 by Dr. Rick Kittles and Dr. Gina Paige, African Ancestry
        is the world leader in tracing maternal and paternal lineages of African
        descent having helped more than 1,000,000 people re-connect with the
        roots of their family tree. With the industry’s largest and most
        comprehensive database of over 30,000 indigenous African DNA samples.
      </p>
      <div className="grid items-center grid-cols-2 gap-5 mt-10">
        <div>
          <img
            src="/gina.webp"
            alt="Dr Gina Paige"
            className="w-20 border-4 border-white rounded-full drop-shadow-2xl"
          />
          <p className="mt-5 font-semibold text-purple-light">Dr. Gina Paige</p>
          <p className="mt-2 text-sm font-light">
            Co-founder & President, African Ancestry, Inc
          </p>
        </div>
        <div>
          <img
            src="/rick.webp"
            alt="Dr. Rick Kittles"
            className="w-20 border-4 border-white rounded-full drop-shadow-2xl"
          />
          <p className="mt-5 font-semibold text-purple-light">
            Dr. Rick Kittles
          </p>
          <p className="mt-2 text-sm font-light">
            Co-founder, Scientific Director, African Ancestry, Inc.
          </p>
        </div>
      </div>
    </article>
  );
};

export default RightAboutArticle;
