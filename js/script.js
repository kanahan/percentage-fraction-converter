
document.querySelector("#inputNum").addEventListener("keyup", (e) => {
  const regex = /^[0-9]*$/;
  if (!regex.test(document.querySelector("#inputNum").value)) {
    return false;
  }
  const inputVal = document.querySelector("#inputNum").value;
  let fraction = getResult(inputVal, 100);

  document.querySelector(".red").innerHTML = `${100 - inputVal}%`;
  document.querySelector("#total").innerHTML = `${fraction[1]}`;
  document.querySelector(".green.num").innerHTML = `${fraction[0]}`;
  document.querySelector(".red.num").innerHTML = `${fraction[1] - fraction[0]}`;
})

function getResult(numerator, denominator) {
  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  gcd = gcd(numerator, denominator);
  return [numerator / gcd, denominator / gcd];
}