const analyzeArray = (array) => {
  const object = {
    average: array.reduce((acc, current) => acc + current, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  };
  return object;
}

module.exports = analyzeArray;