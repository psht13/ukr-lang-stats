import { resultPaths4 } from "../constants/index.js";
import { cipher, decipherService } from "../utils/cipher-operations.js";
import { writeFiles } from "../utils/files.js";

const cipheredFiles = cipher(4, 5);
const res = writeFiles(resultPaths4, cipheredFiles);
const decipher = (args) => decipherService(args);

export default { res, decipher };
