import { createPaths, paths } from "../utils/files.js";

export const cipherTable = new Map([
  ["а", "ф"],
  ["б", "ч"],
  ["в", "ш"],
  ["г", "м"],
  ["ґ", "й"],
  ["д", "е"],
  ["е", "у"],
  ["є", "ж"],
  ["ж", "р"],
  ["з", "і"],
  ["и", "л"],
  ["і", "з"],
  ["ї", "п"],
  ["й", "г"],
  ["к", "я"],
  ["л", "о"],
  ["м", "н"],
  ["н", "т"],
  ["о", "ї"],
  ["п", "к"],
  ["р", "д"],
  ["с", "х"],
  ["т", "б"],
  ["у", "ц"],
  ["ф", "в"],
  ["х", "є"],
  ["ц", "а"],
  ["ч", "и"],
  ["ш", "с"],
  ["щ", "ґ"],
  ["ь", "ю"],
  ["ю", "щ"],
  ["я", " "],
  [" ", "ь"],
]);

export const filesToCipher = [
  paths("texts", "faust-retell.txt"),
  paths("texts", "mur-part-one.txt"),
  paths("texts", "misto.txt"),
  paths("texts", "random.txt"),
];

export const cipheredFiles = [paths("texts", "random-ciphered.txt")];

export const files = [
  paths("texts", "faust-retell.txt"),
  paths("texts", "mur-part-one.txt"),
  paths("texts", "misto.txt"),
];

export const resultPaths = createPaths("results", "alphabet", files);
export const resultPaths2 = createPaths("results", "bi-gram", files);
export const resultPaths22 = createPaths("results", "bi-gram-matrix", files);
export const resultPaths3 = createPaths("results", "tri-gram", files);
export const resultPaths4 = createPaths("texts", undefined, filesToCipher);
