const LoginBtn = () => (
  <button
    className="w-full mt-8 text-[var(--neutral-grey-50)] tracking-widest text-xl font-semibold uppercase border-2 rounded-md border-[var(--neutral-grey-50)] py-3"
    type="button"
  >
    login
  </button>
);

function Login() {
  return <LoginBtn />;
}

export default Login;
