alert("Welcome to the game!");
let input=document.querySelector("#input");
let Guessbtn=document.querySelector("#btn");
let restbtn=document.querySelector("#Rst");
let msg=document.querySelector("#msg");

let gameNum=92;
function Guess(){
    let userguess=Number(input.value);
    if(userguess===gameNum)
    {
       msg.innerText="Congrats!! You Guess the right number";
    }
    else{
        msg.innerText="Ohh ! Your guess is Wrong .Click on Reset and Try Again";
    }
    input.disabled=true;
    Guessbtn.disabled=true;
}
Guessbtn.addEventListener("click",Guess);

restbtn.addEventListener("click",()=>{
    input.value="";
    input.focus();
    msg.innerText="Make a guess !";
   input.disabled=false;
    Guessbtn.disabled=false;
    alert("Game reset");
});
