import { files, resultPaths } from "../constants/index.js";

import {
  calcRelativeFrequencies,
  calcFrequencies,
  lengths,
} from "../utils/calculations.js";

import { readFiles, writeToCSVs } from "../utils/files.js";

import {
  clearText,
  removeSpaces,
  splitOnChars,
} from "../utils/text-manipulations.js";

const plainTexts = readFiles(files);
const clearedTexts = clearText(plainTexts);
const splittedTexts = splitOnChars(clearedTexts);
const spacelessTexts = removeSpaces(splittedTexts);
const lens = lengths(spacelessTexts);
const frequencies = calcFrequencies(spacelessTexts);
const relativeFrequencies = calcRelativeFrequencies(frequencies, lens);
const result1 = writeToCSVs(relativeFrequencies, resultPaths);

export default { result1, relativeFrequencies, clearedTexts };
