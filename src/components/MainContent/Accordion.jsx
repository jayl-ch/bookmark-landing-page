import HeadingTitle from "../SectionHeading/Heading";
import { MoreInfoBtn } from "./Features";

const FaqHeading = () => {
  const title = "Frequently Asked Questions";
  const paragraph =
    "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.";
  return (
    <div>
      <HeadingTitle title={title} paragraph={paragraph} />
      <p></p>
    </div>
  );
};

const Question = ({ activeIndex, setActiveIndex }) => {
  const faq = [
    {
      index: 0,
      question: "What is Bookmark?",
      ans: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      index: 1,
      question: "How can I request a new browser?",
      ans: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      index: 2,
      question: "Is there a mobile app?",
      ans: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      index: 3,
      question: "What about other Chromium browsers?",
      ans: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa. ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
  ];

  return (
    <>
      {faq.map(({ question, ans, index }) => (
        <div key={index} className="border-b-gray-400 border-b py-4">
          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) => (prev === index ? null : index))
            }
            className="flex items-center justify-between w-full cursor-pointer"
          >
            <p className="text-[var(--neutral-blue-950)] font-semibold">
              {question}
            </p>
            <svg
              className={`transition-[rotate,color] duration-300 ${activeIndex === index ? "rotate-180 text-[var(--primary-red-400)]" : "rotate-0 text-[var(--primary-blue-600)]"}`}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          </button>
          <div
            className={`mt-4 overflow-hidden transition-[max-height] duration-300 ${activeIndex === index ? "max-h-50" : "max-h-0"}`}
          >
            <p className="text-gray-600">{ans}</p>
          </div>
        </div>
      ))}
    </>
  );
};

function Accordion({ activeIndex, setActiveIndex }) {
  return (
    <section className="p-6 max-w-130 flex flex-col items-center gap-10 mx-auto mt-10">
      <FaqHeading />
      <div>
        <Question activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      <MoreInfoBtn />
    </section>
  );
}

export default Accordion;
