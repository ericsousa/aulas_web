let nomes: string[] = ["ano", "joao", "maria"];
console.log(nomes);

let numeros: number[] = [1,2,3,4];
console.log(numeros[1]);

// onde esta joao - retorna a posicao
console.log(nomes.indexOf("joao"));

nomes.splice(1,1); // remove a partir da posicao 1, 1 elemento

let year: Array<number> = [20, 30, 40]; // outra maneira de declarar listas

let fruits: string[] = ["Banana", "Maça"];
fruits.push("Pera");
fruits.unshift("Uva");
fruits.pop();
fruits.shift();

console.log(fruits[0]);
console.log(fruits.length); 