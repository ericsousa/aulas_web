for (let i=0; i<5; i++) {
    console.log(`Iteração: ${i}`);
}

let contador = 0;
while(contador < 10)  {
    console.log(contador);
    contador++;
}

let num:number = 5;
do {
    console.log("Number: ", num);
    num++;
} while(num < 5);

// of - trás o valor da lista
let numbers: number[] = [10,11,12,13,14,15];
for (const num of numbers) {
    console.log(num);
}

//in - trás o nome do objeto
// let pessoa = {nome: "Alice", idade: 25, cidade: "Boituva"};
// for (const chave in pessoa) {
//     console.log(`${chave}: ${pessoa[chave]}`);
// }

