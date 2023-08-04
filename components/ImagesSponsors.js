import { images } from '@/images';

const ImagesSponsors = () => {
  return (
    <article className="flex flex-wrap items-center justify-between gap-5 mt-10">
      {images.map((image, index) => (
        <img key={index} src={image} alt="sponsor" className="" />
      ))}
    </article>
  );
};

export default ImagesSponsors;
