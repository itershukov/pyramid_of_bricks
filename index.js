/**
 * Created by itersh on 20.03.2018.
 */

const brickWeight = 1;

exports.w = (() => {
  let cache = {};

  function calc(row, pos) {
    const index = `${row}_${pos}`;

    if (cache[index])
      return cache[index];

    if (pos < 0 || pos > row || row < 0)
      return 0;

    const leftHalfWeight = calc(row - 1, pos - 1)
      , rightHalfWeight = calc(row - 1, pos);

    cache[index] = (leftHalfWeight + rightHalfWeight + brickWeight)/2;

    return cache[index];
  }

  return (row, pos) => {
    const leftHalfWeight = calc(row - 1, pos -1)
      , rightHalfWeight = calc(row - 1, pos);

    return leftHalfWeight + rightHalfWeight;
  }
})()