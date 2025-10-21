type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;

  return (
    <div className="flex flex-col border-b border-stroke last-of-type:border-none dark:border-strokedark transition-all duration-300">
      {/* Question Button */}
      <button
        onClick={() => handleFaqToggle(id)}
        className="flex cursor-pointer items-center justify-between px-6 py-5 text-metatitle3 font-medium text-black dark:text-white lg:px-9 lg:py-7.5"
      >
        {quest}

        {activeFaq === id ? (
          <svg
            width="18"
            height="4"
            viewBox="0 0 18 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary transition-transform duration-300"
          >
            <path
              d="M17.1666 0.833374H0.833313V3.16671H17.1666V0.833374Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary transition-transform duration-300"
          >
            <path
              d="M7.83331 7.83337V0.833374H10.1666V7.83337H17.1666V10.1667H10.1666V17.1667H7.83331V10.1667H0.833313V7.83337H7.83331Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>

      {/* Answer Section */}
      <div
        className={`overflow-hidden border-t border-stroke dark:border-strokedark transition-all duration-300 ${
          activeFaq === id ? "max-h-[1000px] py-5 lg:py-7.5 px-6 lg:px-9 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px] space-y-2"
          dangerouslySetInnerHTML={{ __html: ans }}
        />
      </div>
    </div>
  );
};

export default FAQItem;
