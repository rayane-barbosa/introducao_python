//alert - console.log - prompt

var numeroSecreto = parseInt(Math.random()*10)
var tentativas = 3

while (tentativas > 0){
  var chute = parseInt(prompt("Digite um número de 0 a 10"))
  if (chute == numeroSecreto){
    alert("Parabéns! Você acertou!!!")
    break
  } else if (chute > numeroSecreto){
    alert("O número secreto é menor")
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto){
    alert("O número secreto é maior")
    tentativas = tentativas - 1
  } 
  
}if (chute != numeroSecreto){
    alert("Sinto muito! Você esgotou suas tentativas!! :( . O número era: " +numeroSecreto)
}