import { files, resultPaths } from "./constants/index.js";

import {
  calcRelativeFrequencies,
  calculateFrequencies,
} from "./utils/calculations.js";

import { readFiles, writeToCSVs } from "./utils/files.js";

import {
  clearText,
  removeSpaces,
  splitOnChars,
} from "./utils/text-manipulations.js";

const plainTexts = readFiles(files);
const clearedTexts = clearText(plainTexts);
const splittedTexts = splitOnChars(clearedTexts);
const { spacelessTexts, lengths } = removeSpaces(splittedTexts);
const frequencies = calculateFrequencies(spacelessTexts);
const relativeFrequencies = calcRelativeFrequencies(frequencies, lengths);
export const result1 = writeToCSVs(relativeFrequencies, resultPaths);
