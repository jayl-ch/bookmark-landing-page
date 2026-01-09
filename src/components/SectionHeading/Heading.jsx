function HeadingTitle({ title, paragraph }) {
  return (
    <>
      <h2 className="text-center font-semibold text-2xl md:text-3xl">
        {title}
      </h2>

      <p className="text-center text-gray-500 my-4">{paragraph}</p>
    </>
  );
}

export default HeadingTitle;
