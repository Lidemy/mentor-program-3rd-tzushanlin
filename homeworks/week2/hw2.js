function capitalize(str) {
  let capitalFirst = ' ';
  if (str[0] >= 'a' && str[0] <= 'z') {
    capitalFirst = str[0].toUpperCase() + str.substring(1);
    return capitalFirst;
  }
  return str;
}

console.log(capitalize('hello'));
