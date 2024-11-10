import result1 from "./libs/alphabet.js";
import result2 from "./libs/bi-gram.js";
import result3 from "./libs/tri-gram.js";
import result4 from "./libs/cipher.js";

console.time("Calculation Time");

console.log(result1.res);
console.log(result2.res);
console.log(result3.res);
console.log(result4.res);

console.log(
  result4.decipher({
    alp: result1.ultimate,
    bi: result2.ultimate,
    tri: result3.ultimate,
  })
);

console.timeEnd("Calculation Time");
