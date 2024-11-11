import { cipherTable, resultPaths4 } from "../constants/index.js";
import { cipher, decipherService } from "../utils/cipher-operations.js";
import { writeFiles } from "../utils/files.js";

const cipheredFiles = cipher({
  type: "",
  table: cipherTable,
  a: 4,
  b: 5,
});
const res = writeFiles(resultPaths4, cipheredFiles);
const decipher = (args) => decipherService(args);

export default { res, decipher };
