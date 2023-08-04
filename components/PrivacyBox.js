const PrivacyBox = ({ image, title, info }) => {
  return (
    <article className="flex flex-col items-center justify-center gap-8 px-8 py-10 text-center bg-white lg:flex-row lg:items-start">
      <img className="object-contain" src={image} alt="confidential" />
      <div>
        <p className="text-lg font-bold text-purple-secondary">{title}</p>
        <p className="mt-5 text-purple-primary">{info}</p>
      </div>
    </article>
  );
};

export default PrivacyBox;
