const texto = document.querySelector('#resultadoImc')
const calcular = document.querySelector('#calcular');
const form = document.querySelector('#form');
const resetar = document.querySelector('#resetar');


calcular.addEventListener('click', function (e) {
  e.preventDefault();
  const altura = document.querySelector('#altura').value;
  const peso = document.querySelector('#peso').value;
  const imc = peso / (altura * altura);
  const reduzirDigitos = imc.toFixed(2);

  if (reduzirDigitos <= 18.5) {
    texto.style.color = 'green';
    return texto.textContent = `Abaixo do peso: ${reduzirDigitos}`;
  }
  else if (reduzirDigitos >= 18 && reduzirDigitos <= 24.9) {
    texto.style.color = 'black';
    return texto.textContent = `Peso normal: ${reduzirDigitos}`;
  }
  if (reduzirDigitos >= 25 && reduzirDigitos <= 29.9) {
    texto.style.color = 'red';
    return texto.textContent = `Sobrepeso: ${reduzirDigitos}`;
  }
  else if (reduzirDigitos >= 30 && reduzirDigitos <= 34.9) {
    texto.style.color = 'red';
    return texto.textContent = `Obesidade Grau I: ${reduzirDigitos}`;
  }
  if (reduzirDigitos >= 35 && reduzirDigitos <= 39.9) {
    texto.style.color = 'red';
    return texto.textContent = `Obesidade Grau II: ${reduzirDigitos}`;
  }
  else if (reduzirDigitos >= 40) {
    texto.style.color = 'red';
    return texto.textContent = `Obesidade Grau III: ${reduzirDigitos}`;
  }
  else {
    return texto.textContent = `Insira um valor!`;
  };
  
});
resetar.addEventListener('click', function (e) {
  e.preventDefault();
  form.reset();
  texto.textContent='';
});






//prompt('Homem ou Mulher?')
//calcularIMC();
//homemOrMulher();
