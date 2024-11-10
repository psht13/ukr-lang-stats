import path from "node:path";

export const createPaths = (dir, name, paths) =>
  paths.reduce((ac, el, i) => {
    ac.push(
      // трохи trash-коду
      path.resolve(
        dir,
        `${name ?? el.slice(el.lastIndexOf("/") + 1, el.lastIndexOf("."))}-${
          name ? i + 1 : "ciphered"
        }.${!name ? "txt" : "csv"}`
      )
    );
    return ac;
  }, []);

export const filesToCipher = [
  path.resolve("texts", "faust-retell.txt"),
  path.resolve("texts", "mur-part-one.txt"),
];

export const cipheredFiles = [path.resolve("texts", "misto.txt")];

export const files = [
  path.resolve("texts", "faust-retell.txt"),
  path.resolve("texts", "mur-part-one.txt"),
];

export const resultPaths = createPaths("results", "alphabet", files);
export const resultPaths2 = createPaths("results", "bi-gram", files);
export const resultPaths22 = createPaths("results", "bi-gram-matrix", files);
export const resultPaths3 = createPaths("results", "tri-gram", files);
export const resultPaths4 = createPaths("texts", undefined, filesToCipher);
