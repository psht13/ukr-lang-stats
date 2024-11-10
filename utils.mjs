import fs from "node:fs";

export const readFiles = (filePaths) => {
  return filePaths.map((file) => fs.readFileSync(file, "utf8"));
};

export const clearText = (texts) => {
  return texts.map((text) =>
    text
      .replace(/[^А-Яа-яЇїІіЄєҐґ\s]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase()
  );
};

export const splitOnChars = (texts) => {
  return texts.map((text) => text.split(""));
};

export const removeSpaces = (texts) => {
  const spacelessTexts = texts.map((text) => text.filter((el) => el !== " "));
  const lengths = spacelessTexts.map((text) => text.length);
  return { spacelessTexts, lengths };
};

export const calculateFrequencies = (texts) => {
  return texts.map((text) => {
    const frequencies = new Map();
    text.forEach((el) => {
      frequencies.set(el, (frequencies.get(el) ?? 0) + 1);
    });
    const sortedFrequencies = new Map([...frequencies.entries()].sort());
    return sortedFrequencies;
  });
};

export const calcRelativeFrequencies = (frequencies, lengths) => {
  return frequencies.map((el, i) => {
    const relativeFrequencies = new Map();
    el.entries().forEach(([key, el]) => {
      return relativeFrequencies.set(key, (el / lengths[i]) * 100);
    });
    return relativeFrequencies;
  });
};

export const writeToCSV = (frequencyMap, filePath) => {
  const data = frequencyMap.entries();
  let csvContent = `Char,Freq\n`;
  data.forEach(([key, value]) => (csvContent += `${key},${value}\n`));
  fs.writeFileSync(filePath, csvContent, "utf-8");
};

export const writeToCSVs = (frequencyMaps, filePaths) => {
  frequencyMaps.forEach((el, i) => writeToCSV(el, filePaths[i]));
  const csvs = readFiles(filePaths);
  const csvsLengths = csvs.map((csv) => csv.length);
  return `Successfully wrote CSV files! \n${csvsLengths.join(" | ")}`;
};
