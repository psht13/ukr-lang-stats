import { files, resultPaths } from "./constants/index.mjs";

import {
  calcRelativeFrequencies,
  calculateFrequencies,
} from "./utils/calculations.mjs";

import { readFiles, writeToCSVs } from "./utils/files.mjs";

import {
  clearText,
  removeSpaces,
  splitOnChars,
} from "./utils/text-manipulations.mjs";

const plainTexts = readFiles(files);
const clearedTexts = clearText(plainTexts);
const splittedTexts = splitOnChars(clearedTexts);
const { spacelessTexts, lengths } = removeSpaces(splittedTexts);
const frequencies = calculateFrequencies(spacelessTexts);
const relativeFrequencies = calcRelativeFrequencies(frequencies, lengths);
const result = writeToCSVs(relativeFrequencies, resultPaths);

console.log(result);
