console.log("Manya website loaded ❤️");
const text = `Dear Manya ❤️

Sometimes I get loud...
Sometimes my emotions take over.

I'm sorry for the moments where my words hurt you.

You deserve patience, kindness and love.

I'm working on becoming a better person every day.

I love you.

Forever,
Rishi ❤️`;


let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,40);

}

}



function createHearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";


document.getElementById("hearts").appendChild(heart);



setTimeout(()=>{

heart.remove();

},7000);



},400);

}




window.onload=()=>{

typing();

createHearts();

};



document.getElementById("openBtn").onclick=()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

};
