
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix?.length) return [];

  const res = matrix.reduce((acc, m, i) => {
    acc.push(i % 2 === 0 ? m : m.reverse());
    return acc;
  }, []);

  return res.flat();
}
