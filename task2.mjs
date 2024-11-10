import { files, resultPaths2 } from "./constants/index.mjs";

import {
  calcRelativeFrequencies,
  calculateBiGrams,
  calculateFrequencies,
  lengths,
} from "./utils/calculations.mjs";

import { readFiles, writeToCSVs } from "./utils/files.mjs";

import { clearText, splitOnWords } from "./utils/text-manipulations.mjs";

const plainTexts = readFiles(files);
const clearedTexts = clearText(plainTexts);
const splittedOnWords = splitOnWords(clearedTexts);
const biGrams = calculateBiGrams(splittedOnWords);
const biGramFrequencies = calculateFrequencies(biGrams);
const lens = lengths(biGrams);
const relFrequencies = calcRelativeFrequencies(biGramFrequencies, lens);
const results = writeToCSVs(relFrequencies, resultPaths2);

console.log(results);
