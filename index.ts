/**
 * @module
 *
 * This module contains function to print a pyramid made of asterisks
 *
 * @example
 * ```ts
 * import { printPyramid } from "@naishe/print-pyramid";
 *
 * printPyramid(3); // returns a string of a pyramid of height 3
 * ```
 */

/**
 * Gives you a pyramid made of asterisks
 * @param height height of the pyramid, default is 10
 * @returns pyramid made of asterisks
 * @example printPyramid()
 * @example printPyramid(5)
 * @example Run as deno script: deno run index.ts 13 pink
 */
export function printPyramid(height: number = 10): string {
  const pyramidRows = [];
  for (let i = 0; i < height; i++) {
    let str = "";
    for (let j = 0; j < height - i; j++) {
      str += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      str += "*";
    }
    pyramidRows.push(str);
  }
  return pyramidRows.join("\n");
}

if (import.meta.main) {
  const height = Deno.args[0] ? parseInt(Deno.args[0]) : 10;
  const color = Deno.args[1] || "red";
  const pyramid = printPyramid(height);
  console.log(`%c${pyramid}`, `color: ${color}`);
}
