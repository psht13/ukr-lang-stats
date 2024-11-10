import fs from "node:fs";

export const alphabet = Array.from("абвгґдежзийіїклмнопрстуфхцчшщьюя");

export const readFiles = (filePaths) => {
  return filePaths.map((file) => fs.readFileSync(file, "utf8"));
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
  return `Successfully wrote CSV files!\n${filePaths.join("\n")}\n`;
};

export const generateBiGramFrequencyMatrixCSV = (biGramMap, path) => {
  const csvContent = [];

  csvContent.push(["", ...alphabet].join(","));

  alphabet.forEach((rowLetter) => {
    const row = [rowLetter];

    alphabet.forEach((colLetter) => {
      const biGram = rowLetter + colLetter;
      const frequency = biGramMap.get(biGram) ?? 0;
      row.push(frequency.toFixed(4));
    });

    csvContent.push(row.join(","));
  });

  const csvData = csvContent.join("\n");
  fs.writeFileSync(path, csvData, "utf-8");
};

export const generateMatrixes = (maps, paths) => {
  return maps.map((el, i) => {
    return generateBiGramFrequencyMatrixCSV(el, paths[i]);
  });
};

export const writeFiles = (filePaths, texts) => {
  texts.forEach((el, i) => fs.writeFileSync(filePaths[i], el, "utf-8"));
  return "Successfully wrote Ciphered files!\n";
};
