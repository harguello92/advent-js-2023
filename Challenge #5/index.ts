function cyberReindeer(road: string, time: number) {
  let cleanRoad = road.replace("S", ".");
  const stopPosition = road.indexOf("|") - 1;
  const roads = [road];

  for (let i = 1; i < time; i++) {
    let modification = cleanRoad.substring(0, i);
    modification += "S";
    modification += cleanRoad.substring(i + 1);

    if (i === stopPosition) {
      roads.push(...new Array(5 - i).fill(modification));
      cleanRoad = cleanRoad.replaceAll("|", "*");
      continue;
    }

    roads.push(modification);
  }

  return roads.splice(0, time);
}
