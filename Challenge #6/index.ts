function maxDistance(movements: string) {
  let counter = 0;

  const operationsMap = {
    ">": () => counter++,
    "<": () => counter--,
    "*": () => (counter >= -1 ? counter++ : counter--),
  };

  for (let i = 0; i < movements.length; i++) {
    operationsMap[movements[i]]();
  }

  return Math.abs(counter);
}
