import path from "node:path";

export const createPaths = (dir, name) =>
  files.reduce((ac, el, i) => {
    ac.push(path.resolve(dir, `${name}-${i + 1}.csv`));
    return ac;
  }, []);

export const files = [
  path.resolve("texts", "faust-retell.txt"),
  path.resolve("texts", "mur-part-one.txt"),
];

export const resultPaths = createPaths("results", "alphabet");
export const resultPaths2 = createPaths("results", "bi-gram");
export const resultPaths22 = createPaths("results", "bi-gram-matrix");
export const resultPaths3 = createPaths("results", "tri-gram");
