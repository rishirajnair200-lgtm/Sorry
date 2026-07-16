const message = `Dear Manya ❤️

Sometimes I get loud...
Sometimes I let my emotions take over.

I'm sorry for every moment where my words hurt you.

You deserve patience, kindness and love.

I'm working on becoming a better person every day.

I love you.

Forever,
Rishi ❤️`;


let index = 0;

const text = document.getElementById("letter");


function typing(){

if(index < message.length){

text.innerHTML += message[index];

index++;

setTimeout(typing,40);

}

}


function hearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*20)+"px";

document.getElementById("hearts").appendChild(heart);


setTimeout(()=>{

heart.remove();

},7000);


},400);

}



window.onload=function(){

typing();

hearts();

};



document.getElementById("open").onclick=function(){

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

};
