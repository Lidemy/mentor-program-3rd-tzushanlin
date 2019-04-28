function join(str, concatStr) {
  let joinStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (i === str.length - 1) {
      joinStr += str[i];
    } else {
      joinStr += str[i] + concatStr;
    }
  }
  return joinStr;
}

console.log(join(['a', 'b', 'c'], '!'));


function repeat(str, times) {
  let repeatStr = '';
  for (let i = 1; i <= times; i += 1) {
    repeatStr += str;
  }
  return repeatStr;
}

console.log(repeat('a', 5));
