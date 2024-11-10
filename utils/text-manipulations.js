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
  return spacelessTexts;
};

export const splitOnWords = (texts) => {
  return texts.map((el) => el.split(" "));
};
