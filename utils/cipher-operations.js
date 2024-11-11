import { alphabet, readFiles } from "./files.js";
import { filesToCipher, cipheredFiles } from "../constants/index.js";
import { clearText, splitOnChars, splitOnWords } from "./text-manipulations.js";
import {
  calcBiGrams,
  calcFrequencies,
  calcRelativeFrequencies,
  calcTriGrams,
  lengths,
  mergeDictionaries,
  sortByRate,
} from "./calculations.js";

export const cipher = ({ type, table, a, b }) => {
  const contents = readFiles(filesToCipher);
  const splittedTexts = splitOnChars(contents);

  if (type === "athenian") return cipherAthenian(splittedTexts, a, b);
  return cipherTable(splittedTexts, table);
};

export const cipherTable = (texts, table) => {
  return texts.map((el) => {
    return el
      .map((e) => {
        if (table.get(e)) return table.get(e);
        return e;
      })
      .join("");
  });
};

export const cipherAthenian = (texts, a, b) => {
  return texts.map((el) => {
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

  const sAlpFrequencies = mergeDictionaries(
    relativeAlpFrequencies.map((el) => sortByRate(el))
  );
  const sBiFrequencies = mergeDictionaries(
    relativeBiFrequencies.map((el) => sortByRate(el))
  );
  const sTriFrequencies = mergeDictionaries(
    relativeTriFrequencies.map((el) => sortByRate(el))
  );

  const alpArr = toArray(sortedAlp);
  const alpArrCip = toArray(sAlpFrequencies);
  const biArr = toArray(sortedBi);
  const biArrCip = toArray(sBiFrequencies);
  const triArr = toArray(sortedTri);
  const triArrCip = toArray(sTriFrequencies);

  const mixedAlp = new Map([[["Normal Statistics"], ["Ciphered Statistics"]]]);
  writeDicts(mixedAlp, alpArr, alpArrCip);
  const mixedBi = new Map([[["Normal Statistics"], ["Ciphered Statistics"]]]);
  writeDicts(mixedBi, biArr, biArrCip);
  const mixedTri = new Map([[["Normal Statistics"], ["Ciphered Statistics"]]]);
  writeDicts(mixedTri, triArr, triArrCip);

  return { mixedAlp, mixedBi, mixedTri };
};

const writeDicts = (mixed, bigger, lower) => {
  bigger.forEach((el, i) =>
    lower[i] ? mixed.set(el, lower[i]) : mixed.set(el, undefined)
  );
};

const toArray = (dict) => Array.from(dict.entries());
