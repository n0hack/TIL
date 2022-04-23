function currencyAdjustment(stringParts, region, amount) {
  console.log(stringParts);
  console.log(region);
  console.log(amount);

  let sign;
  if (region === 1) {
    sign = '$';
  } else {
    sign = '\u20ac'; // 유로 기호
    amount = 0.9 * amount;
  }
  return `${stringParts[0]}${sign}${amount}${stringParts[2]}`;
}
const amount = 100;
const region = 2;
const message = currencyAdjustment`You've earned ${region} ${amount}`;
console.log(message);
