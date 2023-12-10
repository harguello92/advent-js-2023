function decode(message: string) {
  return message.replaceAll(/\(([a-zA-Z]+)\)/g, (_: any, group: string) => {
    if (message.includes("(")) {
      decode(message);
    }

    return group;
  });
}

const a = decode("hola (odnum)");
console.log(a);

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
