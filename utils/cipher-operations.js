import { alphabet, readFiles } from "./files.js";
import { filesToCipher, cipheredFiles } from "../constants/index.js";
import { clearText, splitOnChars, splitOnWords } from "./text-manipulations.js";
import {
  calcBiGrams,
  calcFrequencies,
  calcRelativeFrequencies,
  calcTriGrams,
  lengths,
  sortByRate,
} from "./calculations.js";

export const cipher = (a, b) => {
  const contents = readFiles(filesToCipher);
  const splittedTexts = splitOnChars(contents);

  return splittedTexts.map((el) => {
    return el
      .map((e) => {
        if (alphabet.includes(e)) {
          const newCode = (alphabet.indexOf(e) * a + b) % 33;
          return alphabet[newCode];
        }
        return e;
      })
      .join("");
  });
};

export const decipherService = ({ alp, bi, tri }) => {
  const sortedAlp = sortByRate(alp);
  const sortedBi = sortByRate(bi);
  const sortedTri = sortByRate(tri);

  const files = readFiles(cipheredFiles);
  const clearedTexts = clearText(files);

  const splittedTexts = splitOnChars(clearedTexts);
  const lensAlp = lengths(splittedTexts);
  const frequencies = calcFrequencies(splittedTexts);
  const splittedOnWords = splitOnWords(clearedTexts);
  const relativeAlpFrequencies = calcRelativeFrequencies(frequencies, lensAlp);

  const biGrams = calcBiGrams(splittedOnWords);
  const biGramFrequencies = calcFrequencies(biGrams);
  const lensBi = lengths(biGrams);
  const relativeBiFrequencies = calcRelativeFrequencies(
    biGramFrequencies,
    lensBi
  );

  const triGrams = calcTriGrams(splittedOnWords);
  const triGramFrequencies = calcFrequencies(triGrams);
  const lensTri = lengths(triGrams);
  const relativeTriFrequencies = calcRelativeFrequencies(
    triGramFrequencies,
    lensTri
  );

  const sAlpFrequencies = relativeAlpFrequencies.map((el) => sortByRate(el));
  const sBiFrequencies = relativeBiFrequencies.map((el) => sortByRate(el));
  const sTriFrequencies = relativeTriFrequencies.map((el) => sortByRate(el));

  Array.from(dict.entries()).sort((a, b) => b[1] - a[1]);

  return { mixedAlp, mixedBi, mixedTri };
};
