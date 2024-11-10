export const calcFrequencies = (texts) => {
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
    const sortedFrequencies = new Map(
      [...relativeFrequencies.entries()].sort()
    );
    return sortedFrequencies;
  });
};

export const calcBiGrams = (texts) => {
  return texts.map((words) => {
    const biGrams = [];
    words.forEach((el) => {
      el.split("").forEach((e, i) => {
        if (i < el.length - 1) {
          biGrams.push(el[i] + el[i + 1]);
        }
      });
    });
    return biGrams;
  });
};

export const calcTriGrams = (texts) => {
  return texts.map((words) => {
    const triGrams = [];
    words.forEach((el) => {
      el.split("").forEach((e, i) => {
        if (i < el.length - 2) {
          triGrams.push(el[i] + el[i + 1] + el[i + 2]);
        }
      });
    });
    return triGrams;
  });
};

export const lengths = (texts) => texts.map((text) => text.length);

export const mergeDictionaries = (dicts) => {
  const newDictionary = new Map();

  dicts.forEach((el) => {
    el.forEach((elem, key) => {
      const value = newDictionary.get(key);
      newDictionary.set(key, !value ? elem : (value + elem) / 2);
    });
  });

  return newDictionary;
};

export const sortByRate = (dict) => {
  const sortedEntries = Array.from(dict.entries()).sort((a, b) => b[1] - a[1]);
  const sortedDict = new Map(sortedEntries);
  return sortedDict;
};
