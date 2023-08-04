import PlusSvg from './Svg/PlusSvg';

const Question = ({ title }) => {
  return (
    <article className="rounded-sm border bg-[#2B206A1A] px-4 py-2 flex items-center justify-between w-full lg:w-[600px]">
      <p className="font-medium text-purple-primary">{title}</p>
      <button>
        <PlusSvg />
      </button>
    </article>
  );
};

export default Question;
