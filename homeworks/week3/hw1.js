function stars(n) {
  const printStars = [];
  for (let i = 1; i <= n; i += 1) {
    printStars.push('*'.repeat(i));
  }
  return printStars;
}


module.exports = stars;
