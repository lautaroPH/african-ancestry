const WhyBoxInfo = () => {
  return (
    <article className="grid grid-cols-2">
      <div className="flex flex-col items-center justify-center pb-3 pr-3 border-b border-r border-gray-300 gap-y-5">
        <img src="/akan-gif.webp" alt="why1" />
        <p className="text-sm text-center text-purple-primary w-44">
          Specific African country and tribe results
        </p>
      </div>
      <div className="flex flex-col items-center justify-center pb-3 border-b border-gray-300 gap-y-5">
        <img src="/data-base.webp" alt="why1" />
        <p className="text-sm text-center text-purple-primary">
          Largest database of African genetic sequences
        </p>
      </div>
      <div className="flex flex-col items-center justify-center border-r border-gray-300 gap-y-5">
        <img src="/black-owned.webp" alt="why1" />
        <p className="text-sm text-center text-purple-primary">
          Black-owned business
        </p>
      </div>
      <div className="flex flex-col items-center justify-center pt-3 gap-y-5">
        <img src="/ez.webp" alt="why1" />
        <p className="text-sm text-center text-purple-primary">
          Your privacy is everything
        </p>
      </div>
    </article>
  );
};

export default WhyBoxInfo;
