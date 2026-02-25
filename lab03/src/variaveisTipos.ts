let nome: string = "Eric"
let idade: number = 37
let ativo: boolean = true

let dado: any = 10
let vazio: null = null
let indefinido: undefined = undefined 

// Tipo literais (valores  especificos)
let situacao: "ativo" | "inativo" = "ativo" //só aceitas esses 2 valores

// União de tipos (Union Type)
let idadeOuNulo: string | null | 3 = 3;

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo ${ativo}`)

let valor = 48;
console.log(typeof valor);