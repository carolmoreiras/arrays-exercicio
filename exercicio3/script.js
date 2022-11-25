//- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;

const listaNumeros = [2, 7, 11, 24, 36]
const listaNumerosCopia = [2, 7, 11, 24, 36]
listaNumerosCopia.unshift(0)
console.log(listaNumeros)
console.log(listaNumerosCopia)

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

const listaFrutas= ["mamão", "maçã", "morango", "limão", "mexirica"]
const listaFrutasCopia = ["mamão", "maçã", "morango", "limão", "mexirica"]
listaFrutasCopia.pop()
console.log(listaFrutas)
console.log(listaFrutasCopia)

//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

const listaMista = [2, 7, "mamão", "maçã", true, "morango", false, 24]
const listaMistaCopia = [2, 7, "mamão", "maçã", true, "morango", false, 24]

//altera o array original e retorna os itens deletados
console.log("elemento deletado:", listaMistaCopia.splice(1,1))

console.log(listaMista)
console.log(listaMistaCopia)
