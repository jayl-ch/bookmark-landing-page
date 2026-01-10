export function validateEmail(e, setIsValid) {
  let target = e.target.value;

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!target.trim()) {
    setIsValid(null);
    return;
  }

  if (regex.test(target)) {
    setIsValid(true);
  } else {
    setIsValid(false);
  }
}
