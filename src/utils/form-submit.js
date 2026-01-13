export function submitForm(e, isValid, setIsValid, setIsFormSubmitted) {
  e.preventDefault();

  if (isValid === null || !isValid) {
    setIsValid(false);
    setIsFormSubmitted(false);
    return;
  }

  setIsFormSubmitted(true);
}
