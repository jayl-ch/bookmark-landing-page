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
  if (isValid === null || isValid) {
    return "max-h-0";
  } else if (!isValid) {
    return "max-h-10";
  }
}

export function errorIcon(isValid) {
  if (isValid === null || isValid) return "hidden";
  else if (!isValid) return "block";
}
