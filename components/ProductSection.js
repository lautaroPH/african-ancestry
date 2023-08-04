import ListOfBenefits from './ListOfBenefits';

const ProductSection = () => {
  return (
    <section className="flex flex-col items-center justify-center max-w-lg px-4 pt-20 pb-20 m-auto lg:max-w-7xl">
      <h3 className="text-5xl font-semibold text-center text-purple-secondary lg:text-left">
        What you get with the product
      </h3>
      <p className="mt-5 tracking-widest text-center text-purple-secondary lg:w-[100ch]">
        Your mtDNA has power. It provides energy for every cell in your body.
        mtDNA also has a series of unique markers that tell a profound story
        about you and your family.
      </p>
      <article className="flex flex-col items-center justify-between gap-10 p-4 mt-10 border rounded-sm lg:p-10 lg:flex-row border-purple-primary">
        <picture className="bg-[#fff0ed] p-4">
          <img src="/product.webp" alt="product" />
        </picture>
        <ListOfBenefits />
      </article>
    </section>
  );
};

export default ProductSection;
