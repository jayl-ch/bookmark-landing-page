export function errorBorder(isValid) {
  if (isValid === null) {
    return;
  } else {
    if (!isValid) {
      return " border-[var(--primary-red-400)] border-2";
    }
  }
}

export function errorMessage(isValid) {
  if (isValid === null) {
    return;
  } else {
    if (!isValid) {
      return "max-h-10 px-4 py-1";
    }
  }
}
