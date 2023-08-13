import Question from './Question';

const QuestionsSection = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center justify-center max-w-lg px-4 pt-20 pb-20 m-auto bg-white lg:max-w-7xl">
        <h3 className="text-5xl font-semibold text-center text-purple-secondary">
          Frequently Asked Questions
        </h3>
        <div className="flex flex-col items-center justify-center mt-10 lg:mt-20 gap-y-6">
          <Question title={'Who own African Ancestry?'} />
          <Question
            title={`What's the likelihood of receiving a results other than African?`}
          />
          <Question title={'How do the test kit works?'} />
          <Question
            title={`Can I send results from another company's test for analysis?`}
          />
          <Question title={'What is the refund policy?'} />
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
