import { readFileSync } from "node:fs";

const elves = readFileSync("day01.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n\n");  // Split on newline

function part1() {
  //do something here

  const calories = elves.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0); // split on newline and convert to number
  });

  console.log(Math.max(...calories));
  }

function part2() {
  const calories = elves.map((elf) => {
    const calories = elf.split("\n").map(Number);
    return calories.reduce((previous, current) => previous + current, 0); // split on newline and convert to number
  })

  calories.sort((a, b) => b - a); // sort in descending order
  console.log(calories[0], calories[1] + calories[2]);
}
part1();
part2();