import heroIllustration from "../../assets/images/illustration-hero.svg";

const HeroIllustration = () => (
  <img
    className="after:content-[''] after:absolute relative after:top-0 after:bottom-0 after:left-0 after:right-[-5rem] after:bg-[var(--primary-blue-600)]"
    src={heroIllustration}
    alt=""
  />
);

const CTA = () => (
  <>
    <h1 className="text-4xl font-bold leading-snug text-center text-[var(--neutral-blue-950)]">
      A Simple Bookmark Manager
    </h1>
    <p className="text-center text-gray-500">
      A clean and simple interface to organize your favourite websites. Open a
      new browser tab and see your sites load instantly. Try it for free.
    </p>
    <div className="flex gap-5 w-full justify-center">
      <button className="shadow-[var(--btn-box-shadow)] font-semibold w-full text-md px-4 py-3 rounded text-[var(--neutral-grey-50)] bg-[var(--primary-blue-600)]">
        Get it on Chrome
      </button>
      <button className="shadow-[var(--btn-box-shadow)] font-semibold w-full text-md px-4 py-3 rounded text-[var(--neutral-blue-950)] bg-[var(--neutral-grey-50)]">
        Get it on Firefox
      </button>
    </div>
  </>
);

function Home() {
  return (
    <section className="flex flex-col justify-center h-screen px-2">
      <div className="">
        <HeroIllustration />
      </div>
      <div className="flex flex-col gap-5 items-center p-6">
        <CTA />
      </div>
    </section>
  );
}

export default Home;
