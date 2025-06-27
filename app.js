let started=false;
let level=0;

let gameseq=[];
let userseq=[];

let h2=document.querySelector("h2");

let btns=["red","yellow","green","purple"];

document.addEventListener("keypress",function(){

    
    if(started==false){
        started=true;
    levelup();
    console.log("Game_Started");
    }
});

function levelup(){
    level++;
    h2.innerText="Level "+level;
    userseq=[];
    let randome_index=Math.floor(Math.random()*3);
    let btn="."+btns[randome_index];
    let button =document.querySelector(btn);

    button_flash(button);
     let color=button.getAttribute("id");
     
   gameseq.push(color);
   console.log(gameseq);

}

function button_flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500)
    
}

function BtnflashBYuser(btn){
    btn.classList.add("light-green");
    setTimeout(function(){
        btn.classList.remove("light-green");
    },250);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function btnpress(){
    let btn=this;
    BtnflashBYuser(btn);
   let color=btn.getAttribute("id");
   console.log(color);
   userseq.push(color);
   check_ANS(userseq.length-1);
    console.log(userseq);
}

function check_ANS( ind){

    if(gameseq[ind]==userseq[ind]){
        if(userseq.length==gameseq.length){
     setTimeout(levelup(),1000);
     }
    }
    else{
        h2.innerText="Game over ! press any key to restart";
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },200);
        resrart();
        
    }

}

function resrart(){
    started=false;
    level=0;
    userseq=[];
    gameseq=[];

   
}