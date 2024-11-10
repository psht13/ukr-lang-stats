import { files, resultPaths2, resultPaths22 } from "../constants/index.js";

import {
  calcRelativeFrequencies,
  calcBiGrams,
  calcFrequencies,
  lengths,
} from "../utils/calculations.js";

import { generateMatrixes, readFiles, writeToCSVs } from "../utils/files.js";

import { clearText, splitOnWords } from "../utils/text-manipulations.js";

const plainTexts = readFiles(files);
const clearedTexts = clearText(plainTexts);
const splittedOnWords = splitOnWords(clearedTexts);
const biGrams = calcBiGrams(splittedOnWords);
const biGramFrequencies = calcFrequencies(biGrams);
const lens = lengths(biGrams);
const relativeFrequencies = calcRelativeFrequencies(biGramFrequencies, lens);
const result2 = writeToCSVs(relativeFrequencies, resultPaths2);
generateMatrixes(relativeFrequencies, resultPaths22);

export default { result2, relativeFrequencies, clearedTexts };
