function findFirstRepeated(gifts: number[]): number {
  return (
    gifts.find((gift, index) => {
      return gifts.indexOf(gift) !== index;
    }) ?? -1
  );
}
