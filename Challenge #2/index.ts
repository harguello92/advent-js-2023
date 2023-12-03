function manufacture(gifts: string[], materials: string) {
  return gifts.filter((gift) => {
    const giftLetters = gift.split("");
    return giftLetters.every((letter) => materials.indexOf(letter) >= 0);
  });
}
