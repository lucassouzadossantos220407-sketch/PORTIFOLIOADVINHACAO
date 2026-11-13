const numerosecreto = Math.floor(Math.random()*100)+1; 
let tentativas = 10;
function jogo(){
    
if(tentativas === 0){
    document.getElementById("tentativas").textContent =  "perdeu o número secreto era " + numerosecreto;
    return;
} 

const palpitedojogador = Number( document.getElementById("palpite").value);
if (palpitedojogador >= 1 && palpitedojogador <= 100) {

} else {
    document.getElementById("mensagens").textContent =
        "Digite um número entre 1 e 100!";
    return;
}
tentativas -- ;
document.getElementById("mensagens").textContent = palpitedojogador;

document.getElementById("tentativas").textContent = "Tentativas restantes " + tentativas;

if(palpitedojogador === numerosecreto){
   document.getElementById("mensagens").textContent ="Acertou!"
}
else if(palpitedojogador<numerosecreto){
    document.getElementById("mensagens").textContent ="O número secreto é maior!"
}
else {
 document.getElementById("mensagens").textContent ="O número secreto é menor!"
}
}
