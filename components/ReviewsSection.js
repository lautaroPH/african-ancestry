import Review from './Review';

const ReviewsSection = () => {
  return (
    <section className="pt-20 pb-20 bg-purple-light">
      <h3 className="text-5xl font-semibold text-center text-white">Reviews</h3>
      <div className="flex flex-wrap items-center justify-center max-w-md px-4 m-auto mt-16 gap-14 lg:max-w-7xl sm:px-0">
        <Review
          image={'/barbara.webp'}
          title={'Focusing'}
          review={
            'Pleased with being provided the country and the people now I can plan a trip back with purpose. But first I’m educating myself on the history of Cameroon as well as present day events.'
          }
          person={'Barbara I.'}
        />
        <Review
          image={'/ilex.webp'}
          title={'Glad to know'}
          review={
            'Thank you for providing a little personal historical clarity. I know that this is only a start but it is a nice start. You have sparked an interest in me to learn more about my personal background and the backgrounds of my African people!'
          }
          person={'Ilex B.'}
        />
        <Review
          image={'/tonya.webp'}
          title={'Fang People...'}
          review={
            'Wow!!! I immediately revealed the results to my living relatives so that the historical tree could continue refining roots of our ancestry. Thank you so very much for the opportunity.'
          }
          person={'Tonya Barrett C.'}
        />
      </div>
      <div className="w-full mt-10 text-center">
        <button className="hover:bg-[#ce4729] transition-colors duration-300 ease-in-out bg-[#FF7050] text-white font-bold text-lg py-2 px-20">
          Find Your Roots
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
