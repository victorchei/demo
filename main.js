const btn = document.getElementById('btn');
const number1 = document.querySelector('#num1');
const textResult = document.getElementById('inputResult');

if (btn) {
  btn.addEventListener('click', test);
}

function test(event) {
  const value = Number(number1.value);

  console.log(value);
  if (textResult) {
    textResult.textContent = `Введене число: ${value}`;
  }
}
