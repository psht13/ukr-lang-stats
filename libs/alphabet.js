import { files, resultPaths } from "../constants/index.js";

import {
  calcRelativeFrequencies,
  calcFrequencies,
  lengths,
  mergeDictionaries,
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
//const spacelessTexts = removeSpaces(splittedTexts);
const lens = lengths(splittedTexts);
const frequencies = calcFrequencies(splittedTexts);
const relativeFrequencies = calcRelativeFrequencies(frequencies, lens);
const ultimate = mergeDictionaries(relativeFrequencies);
const res = writeToCSVs(relativeFrequencies, resultPaths);

export default { res, relativeFrequencies, clearedTexts, ultimate };
