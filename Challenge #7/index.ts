function drawGift(size: number, symbol: string) {
  if (size < 2) {
    return "#\n";
  }

  const sizeWithoutBorders = size - 2;
  let giftShape = `${" ".repeat(size - 1)}`;
  giftShape += `${"#".repeat(size)}\n`;

  for (let i = 0; i < sizeWithoutBorders; i++) {
    giftShape += `${" ".repeat(sizeWithoutBorders - i)}`;
    giftShape += `#${symbol.repeat(sizeWithoutBorders)}`;
    giftShape += `#${symbol.repeat(i)}#\n`;
  }

  giftShape += `${"#".repeat(size)}`;
  giftShape += `${symbol.repeat(sizeWithoutBorders)}#\n`;

  for (let i = sizeWithoutBorders; i > 0; i--) {
    giftShape += `#${symbol.repeat(sizeWithoutBorders)}`;
    giftShape += `#${symbol.repeat(i - 1)}#\n`;
  }

  giftShape += `${"#".repeat(size)}\n`;

  return giftShape;
}
