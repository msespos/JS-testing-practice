const analyzeArray = require('./analyzeArray')

test('analyzes array correctly', () => {
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  };
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual(object);
});

test('analyzes second array correctly', () => {
  const object = {
    average: -1/6,
    min: -1,
    max: 1,
    length: 6
  };
  expect(analyzeArray([-1,1,-1,1,-1,0])).toStrictEqual(object);
});