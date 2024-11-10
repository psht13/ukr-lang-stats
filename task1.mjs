import { files, resultPaths } from "./file-paths/index.mjs";

import {
  calculateFrequencies,
  calcRelativeFrequencies,
  clearText,
  readFiles,
  removeSpaces,
  splitOnChars,
  writeToCSVs,
} from "./utils.mjs";

const plainTexts = readFiles(files);
const clearedTexts = clearText(plainTexts);
const splittedTexts = splitOnChars(clearedTexts);
const { spacelessTexts, lengths } = removeSpaces(splittedTexts);
const frequencies = calculateFrequencies(spacelessTexts);
const relativeFrequencies = calcRelativeFrequencies(frequencies, lengths);
const result = writeToCSVs(relativeFrequencies, resultPaths);
console.log(result);
