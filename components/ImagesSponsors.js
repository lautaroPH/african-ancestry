import { images } from '@/images';

const ImagesSponsors = () => {
  return (
    <article className="flex flex-wrap items-center justify-between mt-10 gap-x-1 gap-y-5 sm:gap-5">
      {images.map((image, index) => (
        <img key={index} src={image} alt="sponsor" className="" />
      ))}
    </article>
  );
};

export default ImagesSponsors;
