const args = process.argv;

const valor = parseFloat(args[2]);
const unidadeOrigem = args[3];
const unidadeDestino = args[4];

console.log(`Valor: ${valor}`);
console.log(`De: ${unidadeOrigem}`);
console.log(`Para: ${unidadeDestino}`);

function converter(valor, origem, destino) {
  origem = origem.toLowerCase();
  destino = destino.toLowerCase();

  // km para milhas
  if (origem === 'km' && destino === 'milhas') {
    return valor * 0.621371;
  }

  // milhas para km
  else if (origem === 'milhas' && destino === 'km') {
    return valor / 0.621371;
  }

  // celsius para fahrenheit
  else if (origem === 'celsius' && destino === 'fahrenheit') {
    return (valor * 9/5) + 32;
  }

  // fahrenheit para celsius
  else if (origem === 'fahrenheit' && destino === 'celsius') {
    return (valor - 32) * 5/9;
  }

  // Se não reconheceu a conversão, retorna null
  else {
    return null;
  }
}

const resultado = converter(valor, unidadeOrigem, unidadeDestino);

if (resultado !== null) {
  console.log(`${valor} ${unidadeOrigem} é igual a ${resultado.toFixed(2)} ${unidadeDestino}.`);
} else {
  console.log(`Conversão de ${unidadeOrigem} para ${unidadeDestino} não é suportada.`);
}
