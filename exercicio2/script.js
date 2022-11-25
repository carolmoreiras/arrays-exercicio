//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

const listaNumeros = [2, 7, 11, 24, 36]
console.log(listaNumeros.length)

const listaFrutas = ["mamão", "maçã", "morango", "limão", "mexirica"]
console.log(listaFrutas.length)

const listaMista = [2, 7, "mamão", "maçã", true, "morango", false, 24]
console.log(listaMista.length)

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(listaNumeros[0])
console.log(listaFrutas[1])
console.log(listaMista[2])

//- Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 

console.log(listaNumeros.includes(2)) //vale true
console.log(listaMista.includes("limão")) //vale false