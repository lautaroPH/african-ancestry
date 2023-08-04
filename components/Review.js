import QuotsSecondSvg from './Svg/QuotsSecondSvg';
import StarsSvg from './Svg/StarsSvg';
import TickSvg from './Svg/TickSvg';

const Review = ({ title, review, image, person }) => {
  return (
    <article className="relative z-50 flex flex-col items-center justify-center p-10 bg-white rounded-md sm:w-80">
      <div className="absolute z-50 left-32 -top-6">
        <QuotsSecondSvg />
      </div>
      <StarsSvg />
      <p className="mt-5 text-2xl font-medium text-purple-primary">{title}</p>
      <p className="h-32 mt-5 text-sm text-center text-purple-primary">
        {review}
      </p>
      <div className="flex items-center gap-3 mt-10">
        <img src={image} alt="avatar" className="w-20 h-20 rounded-full" />
        <div className="text-purple-primary">
          <p>{person}</p>
          <p className="flex items-center gap-2">
            Verified Buyer <TickSvg />
          </p>
        </div>
      </div>
    </article>
  );
};

export default Review;
