let tabuleiro = [...document.querySelectorAll(".tabuleiro")];
let Q1 = document.querySelector("#Q1");
let Q2 = document.querySelector("#Q2");
let Q3 = document.querySelector("#Q3");
let Q4 = document.querySelector("#Q4");
let Q5 = document.querySelector("#Q5");
let Q6 = document.querySelector("#Q6");
let Q7 = document.querySelector("#Q7");
let Q8 = document.querySelector("#Q8");
let Q9 = document.querySelector("#Q9");
let num = 0, letra;

function letraXletraO(){
    if(num%2==0){
        return "<p>X</p>";
    }else{
        return "<p>O</p>";
    }
}

function alternarXO(K){
    if(K.textContent == "X"){
        K.innerHTML = letra;
        num++;
    }else{
        K.innerHTML = letra;
        num++;
    }
}

function removerAlertar(Q){
  
  tabuleiro.map((Q)=>{
    if(Q.hasChildNodes()){ Q.removeChild(Q.firstChild);}
  });
  alert("X ganhou!");
  
}


tabuleiro.map((K)=>{
  K.addEventListener("click", (Q)=>{
    
    
     letra = letraXletraO();
    
     alternarXO(K)
    
    
    
    if(Q1.textContent == "X" && Q2.textContent == "X" && Q3.textContent == "X") removerAlertar(Q)
    if(Q4.textContent == "X" && Q5.textContent == "X" && Q6.textContent == "X") removerAlertar(Q)
    if(Q7.textContent == "X" && Q8.textContent == "X" && Q9.textContent == "X") removerAlertar(Q)
    if(Q1.textContent == "X" && Q4.textContent == "X" && Q7.textContent == "X") removerAlertar(Q)
    if(Q2.textContent == "X" && Q5.textContent == "X" && Q8.textContent == "X") removerAlertar(Q)
    if(Q3.textContent == "X" && Q6.textContent == "X" && Q9.textContent == "X") removerAlertar(Q)
    if(Q1.textContent == "X" && Q5.textContent == "X" && Q9.textContent == "X") removerAlertar(Q)
    if(Q7.textContent == "X" && Q5.textContent == "X" && Q3.textContent == "X") removerAlertar(Q)
    
    if(Q1.textContent == "O" && Q2.textContent == "O" && Q3.textContent == "O") removerAlertar(Q)
    if(Q4.textContent == "O" && Q5.textContent == "O" && Q6.textContent == "O") removerAlertar(Q)
    if(Q7.textContent == "O" && Q8.textContent == "O" && Q9.textContent == "O") removerAlertar(Q)
    if(Q1.textContent == "O" && Q4.textContent == "O" && Q7.textContent == "O") removerAlertar(Q)
    if(Q2.textContent == "O" && Q5.textContent == "O" && Q8.textContent == "O") removerAlertar(Q)
    if(Q3.textContent == "O" && Q6.textContent == "O" && Q9.textContent == "O") removerAlertar(Q)
    if(Q1.textContent == "O" && Q5.textContent == "O" && Q9.textContent == "O") removerAlertar(Q)
    if(Q7.textContent == "O" && Q5.textContent == "O" && Q3.textContent == "O") removerAlertar(Q)
       
       
     
     
    });
});

