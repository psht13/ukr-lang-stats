import { files, resultPaths2, resultPaths3 } from "../constants/index.js";

import {
  calcRelativeFrequencies,
  calcBiGrams,
  calcFrequencies,
  lengths,
  calcTriGrams,
  mergeDictionaries,
} from "../utils/calculations.js";

import { readFiles, writeToCSVs } from "../utils/files.js";

import { clearText, splitOnWords } from "../utils/text-manipulations.js";

const plainTexts = readFiles(files);
const clearedTexts = clearText(plainTexts);
const splittedOnWords = splitOnWords(clearedTexts);
const triGrams = calcTriGrams(splittedOnWords);
const triGramFrequencies = calcFrequencies(triGrams);
const lens = lengths(triGrams);
const relativeFrequencies = calcRelativeFrequencies(triGramFrequencies, lens);
const ultimate = mergeDictionaries(relativeFrequencies);
const res = writeToCSVs(relativeFrequencies, resultPaths3);

export default { res, relativeFrequencies, clearedTexts, ultimate };
