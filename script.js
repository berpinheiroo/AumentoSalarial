PerguntarNome()
PerguntarSalario()
var salario = PerguntarSalario()
var nome = PerguntarNome()

function PerguntarNome(){
    nome = prompt("Qual o nome do colaborador?")
    return nome
}

function PerguntarSalario(){
    salario = prompt("Qual o salario do colaborador?")
    return salario
}

if(salario <= 1500){
    salario = salario * 1.20
}


if(salario >= 1501 && salario <= 2000){
    salario = salario * 1.15
}

if(salario >= 2001 && salario <3000){
    salario = salario * 1.10
}

if(salario >= 3001){
    salario = salario * 1.05
}

console.log(nome, salario)