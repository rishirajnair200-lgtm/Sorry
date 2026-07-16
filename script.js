const letter = `Dear Manya ❤️

Sometimes I get loud...
Sometimes I let my emotions take over.

I'm really sorry for every moment where my words hurt you.

You deserve patience,
kindness,
and love.

I'm working on becoming a better person every single day.

I'll always care about your safety,
but I never want that care to come out as shouting.

I hope you'll forgive me.

I love you.

Forever,
Rishi ❤️`;

const typedText = document.getElementById("typedText");

let i = 0;

function typeWriter(){

if(i < letter.length){

typedText.innerHTML += letter.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

window.onload=()=>{

typeWriter();

createHearts();

};

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*22)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

},350);

}

const cards=document.querySelectorAll(".glass");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards"

});

}

});

});

cards.forEach(card=>observer.observe(card));

document.getElementById("startBtn").addEventListener("click",()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

});

const gallery=document.querySelectorAll(".photo img");

gallery.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.top="0";

overlay.style.left="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background="rgba(0,0,0,.92)";

overlay.style.display="flex";

overlay.style.justifyContent="center";

overlay.style.alignItems="center";

overlay.style.zIndex="9999";

const big=document.createElement("img");

big.src=img.src;

big.style.maxWidth="90%";

big.style.maxHeight="90%";

big.style.borderRadius="20px";

overlay.appendChild(big);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});
const audio=document.getElementById("audio");

const playBtn=document.getElementById("playBtn");

const progress=document.getElementById("progress");

const time=document.getElementById("time");

playBtn.onclick=()=>{

if(audio.paused){

audio.play();

playBtn.innerHTML="⏸ Pause";

}else{

audio.pause();

playBtn.innerHTML="▶ Play";

}

}

audio.addEventListener("timeupdate",()=>{

progress.max=audio.duration;

progress.value=audio.currentTime;

let m1=Math.floor(audio.currentTime/60);

let s1=Math.floor(audio.currentTime%60);

let m2=Math.floor(audio.duration/60)||0;

let s2=Math.floor(audio.duration%60)||0;

if(s1<10)s1="0"+s1;

if(s2<10)s2="0"+s2;

time.innerHTML=`${m1}:${s1} / ${m2}:${s2}`;

});

progress.oninput=()=>{

audio.currentTime=progress.value;

};
