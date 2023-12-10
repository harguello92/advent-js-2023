function findNaughtyStep(original: string, modified: string) {
  const maxLength = Math.max(original.length, modified.length);
  let letter = "";

  for (let i = 0; i <= maxLength; i++) {
    if (original[i] !== modified[i]) {
      letter = original.length > modified.length ? original[i] : modified[i];
      break;
    }
  }

  return letter;
}
