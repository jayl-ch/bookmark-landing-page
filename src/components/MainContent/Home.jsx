import heroIllustration from "../../assets/images/illustration-hero.svg";

export const BtnStyle =
  "shadow-[var(--btn-box-shadow)] font-semibold w-full text-md px-[clamp(1rem,2vw,3rem)] py-[clamp(1rem,1.2vw,1.2rem)] rounded-md md:w-auto";

const HeroIllustration = () => (
  <img className="mx-auto md:w-5xl" src={heroIllustration} alt="" />
);

const Cta = () => (
  <>
    <h1 className="text-4xl font-bold leading-snug text-center text-[var(--neutral-blue-950)] md:text-left md:text-5xl">
      A Simple Bookmark Manager
    </h1>
    <p className="text-center text-gray-500 md:text-left">
      A clean and simple interface to organize your favourite websites. Open a
      new browser tab and see your sites load instantly. Try it for free.
    </p>
    <div className="flex gap-5 w-full justify-center md:justify-start">
      <button
        className={`text-[var(--neutral-grey-50)] bg-[var(--primary-blue-600)] ${BtnStyle}`}
      >
        Get it on Chrome
      </button>
      <button
        className={`text-[var(--neutral-blue-950)] bg-[var(--neutral-grey-50)] ${BtnStyle}`}
      >
        Get it on Firefox
      </button>
    </div>
  </>
);

function Home() {
  return (
    <section className="flex flex-col justify-center min-h-screen px-2 md:min-h-[calc(100vh-5.75rem)] md:flex-row-reverse md:items-center md:max-w-[var(--max-width)] md:mx-auto">
      <div className="">
        <HeroIllustration />
      </div>
      <div className="flex flex-col gap-5 items-center p-6 md:items-start">
        <Cta />
      </div>
    </section>
  );
}

export default Home;
