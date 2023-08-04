const Step = ({ step, title, info }) => {
  return (
    <article className="relative flex flex-col items-center justify-center bg-[#fff0ed] border border-purple-light rounded-md sm:w-80 py-8 px-10 sm:h-[440px]">
      <div className="absolute px-6 py-2 text-lg font-bold text-white rounded-sm bg-purple-light -top-6 sm:left-[105px]">
        <p>Step #{step}</p>
      </div>
      <img src={`/step-${step}.webp`} alt={`step-${step}`} className="mt-6" />
      <p className="mt-4 text-2xl font-semibold text-purple-secondary ">
        {title}
      </p>
      <p className="mt-5 text-center text-purple-primary">{info}</p>
    </article>
  );
};

export default Step;
