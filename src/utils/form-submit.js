export function submitForm(e, isValid, setIsValid) {
  e.preventDefault();

  if (isValid === null || !isValid) {
    setIsValid(false);
    return;
  }

  window.alert("Submitted");
}
