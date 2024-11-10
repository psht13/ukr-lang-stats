import fs from "node:fs";

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
  return `Successfully wrote CSV files! \n${csvsLengths.join(
    " | "
  )}\n${filePaths.join("\n")}\n`;
};
