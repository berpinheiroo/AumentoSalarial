var salario
var nome
var aumento = " "
var continuar = 's'

function PerguntarNome(){
    nome = prompt("Qual o nome do colaborador?")
}

function PerguntarSalario(){
    salario = prompt("Qual o salario do colaborador?")

    if(salario <= 1500){
        salario = salario * 1.20
        aumento = "20%"
    }
    
    
    if(salario >= 1501 && salario <= 2000){
        salario = salario * 1.15
        aumento = "15%"
    }
    
    if(salario >= 2001 && salario <=3000){
        salario = salario * 1.10
        aumento = "10%"
    }
    
    if(salario >= 3001){
        salario = salario * 1.05
        aumento = "5%"
    }
}

function PerguntarContinuacao(){
    continuar = prompt("Deseja continuar? Digite 's' para sim")
}

while(continuar == 's'){
    PerguntarNome()
    PerguntarSalario()
    PerguntarContinuacao()
    console.log("O nome do colaborador e:", nome, "e seu salario, com o aumento de", aumento,  "e:", salario)
 }