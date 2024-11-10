import { files, resultPaths2 } from "./constants/index.js";

import {
  calcRelativeFrequencies,
  calculateBiGrams,
  calculateFrequencies,
  lengths,
} from "./utils/calculations.js";

import { readFiles, writeToCSVs } from "./utils/files.js";

import { clearText, splitOnWords } from "./utils/text-manipulations.js";

const plainTexts = readFiles(files);
const clearedTexts = clearText(plainTexts);
const splittedOnWords = splitOnWords(clearedTexts);
const biGrams = calculateBiGrams(splittedOnWords);
const biGramFrequencies = calculateFrequencies(biGrams);
const lens = lengths(biGrams);
const relFrequencies = calcRelativeFrequencies(biGramFrequencies, lens);
export const result2 = writeToCSVs(relFrequencies, resultPaths2);
