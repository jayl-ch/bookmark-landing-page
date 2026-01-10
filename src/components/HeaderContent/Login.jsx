const LoginBtn = (isVisible) => (
  <button
    className={`${isVisible ? "block" : "hidden"} w-full md:w-auto cursor-pointer mt-8 text-[var(--neutral-grey-50)] tracking-widest text-xl font-semibold uppercase border-2 rounded-md border-[var(--neutral-grey-50)] md:text-sm md:mt-0 md:border-none py-3 md:px-8 md:bg-[var(--primary-red-400)]`}
    type="button"
  >
    login
  </button>
);

function Login(isVisible) {
  return <LoginBtn isVisible={isVisible} />;
}

export default Login;
