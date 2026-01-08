import tab1 from "../../assets/images/illustration-features-tab-1.svg";
import tab2 from "../../assets/images/illustration-features-tab-2.svg";
import tab3 from "../../assets/images/illustration-features-tab-3.svg";

const FeaturesHeading = () => (
  <>
    <h2 className="text-center font-semibold text-2xl md:text-3xl">Features</h2>
    <p className="text-center my-4 text-gray-500">
      Our aim is to make it quick and easy for you to access your favourite
      websites. Your bookmarks sync between your devices so you can access them
      on the go.
    </p>
  </>
);

const TabBtn = ({ setIndex, index }) => {
  const tabs = [
    { index: 0, tab: "Simple Bookmarking" },
    { index: 1, tab: "Speedy Searching" },
    { index: 2, tab: "Easy Sharing" },
  ];

  return (
    <ul className="flex flex-col gap-2 items-center max-w-4xl mx-auto md:flex-row md:gap-0">
      {tabs.map((item) => (
        <li
          className="text-center first-of-type:border-t border-b border-gray-300 w-full md:first:border-t-0"
          key={item.index}
        >
          <button
            onClick={() => setIndex(item.index)}
            className={`transition-[border, color] duration-300 cursor-pointer text-gray-500 text-lg py-4 ${index === item.index ? "text-gray-800 border-b-2 md:border-b-4 border-[var(--primary-red-400)]" : ""} md:w-full`}
          >
            {item.tab}
          </button>
        </li>
      ))}
    </ul>
  );
};

const TabCards = ({ index }) => {
  const tabsContent = [
    {
      id: 1,
      img: tab1,
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      id: 2,
      img: tab2,
      title: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
      id: 3,
      img: tab3,
      title: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];

  return (
    <div
      key={tabsContent[index].id}
      className="animate-ease flex flex-col justify-between md:flex-row md:items-center py-10 md:gap-10"
    >
      <img
        className="md:w-[clamp(22rem,40vw,40rem)] mx-auto"
        src={tabsContent[index].img}
        alt=""
      />
      <div className="py-8 md:px-8">
        <h2 className="text-2xl text-center font-semibold md:text-4xl md:text-left">
          {tabsContent[index].title}
        </h2>
        <p className="text-center text-gray-500 py-4 md:text-left">
          {tabsContent[index].description}
        </p>
        <MoreInfoBtn />
      </div>
    </div>
  );
};

const MoreInfoBtn = () => (
  <button className="px-6 py-3 shadow-[var(--btn-box-shadow)] bg-[var(--primary-blue-600)] rounded text-[var(--neutral-grey-50)] font-semibold hidden md:block">
    More Info
  </button>
);

function Features({ setIndex, index }) {
  return (
    <section className="mt-10 px-6 md:max-w-[var(--max-width)] mx-auto">
      <div className="max-w-120 mx-auto">
        <FeaturesHeading />
      </div>
      <TabBtn setIndex={setIndex} index={index} />
      <TabCards index={index} />
    </section>
  );
}

export default Features;
