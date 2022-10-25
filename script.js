var salario
var nome
var continuar = 's'

function PerguntarNome(){
    nome = prompt("Qual o nome do colaborador?")
}

function PerguntarSalario(){
    salario = prompt("Qual o salario do colaborador?")

    if(salario <= 1500){
        salario = salario * 1.20
    }
    
    
    if(salario >= 1501 && salario <= 2000){
        salario = salario * 1.15
    }
    
    if(salario >= 2001 && salario <=3000){
        salario = salario * 1.10
    }
    
    if(salario >= 3001){
        salario = salario * 1.05
    }
}

function PerguntarContinuacao(){
    continuar = prompt("Deseja continuar? Digite 's' para sim")
}

while(continuar == 's'){
    PerguntarNome()
    PerguntarSalario()
    PerguntarContinuacao()
    console.log("O nome do colaborador e:", nome, "e seu salario, ja com aumento, e:", salario)
 }