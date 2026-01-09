import chrome from "../../assets/images/logo-chrome.svg";
import firefox from "../../assets/images/logo-firefox.svg";
import opera from "../../assets/images/logo-opera.svg";
// import bgdots from "../../assets/images/bg-dots.svg";
import { BtnStyle } from "./Home";
import HeadingTitle from "../SectionHeading/Heading";

const Heading = () => {
  const title = "Download the extension";
  const paragraph =
    "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.";

  return (
    <>
      <HeadingTitle title={title} paragraph={paragraph} />
    </>
  );
};

const CardBtn = () => (
  <button
    className={`bg-[var(--primary-blue-600)] text-[var(--neutral-grey-50)] ${BtnStyle} w-full`}
  >
    Add & Install Extension
  </button>
);

const Cards = () => {
  const cardContent = [
    { id: 0, img: chrome, title: "Chrome", version: "62" },
    { id: 1, img: firefox, title: "Firefox", version: "55" },
    { id: 2, img: opera, title: "Opera", version: "46" },
  ];

  return (
    <>
      {cardContent.map(({ id, img, title, version }) => (
        <div
          key={id}
          className={`shadow-[var(--btn-box-shadow)] p-8 rounded-xl flex flex-col gap-5 max-w-100 w-full mx-auto md:nth-[2]:mt-20 md:nth-[3]:mt-40`}
        >
          <img src={img} alt="" className="mx-auto" />
          <div className="mx-auto">
            <h3 className="text-2xl font-md">Add to {title}</h3>
            <p className="text-center text-gray-500">
              Minimum version {version}
            </p>
          </div>
          <CardBtn />
        </div>
      ))}
    </>
  );
};

function Extensions() {
  return (
    <section className="p-6 md:max-w-[var(--max-width)] mx-auto flex flex-col gap-10 mt-10">
      <div>
        <Heading />
      </div>
      <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
        <Cards />
      </div>
    </section>
  );
}

export default Extensions;
