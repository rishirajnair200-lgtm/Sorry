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




function createHearts(){

    setInterval(()=>{

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = ["❤️","💖","💕","💗"]
        [Math.floor(Math.random()*4)];

        heart.style.left = Math.random()*100 + "vw";

        heart.style.fontSize = (18 + Math.random()*22) + "px";

        heart.style.animationDuration = (6 + Math.random()*5) + "s";


        document.getElementById("hearts")
        .appendChild(heart);


        setTimeout(()=>{

            heart.remove();

        },11000);


    },350);

}





window.onload = ()=>{

    typeWriter();

    createHearts();

};





// Card animation

const cards = document.querySelectorAll(".glass");


const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate(

            [
                {
                    opacity:0,
                    transform:"translateY(40px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }
            ],

            {
                duration:900,
                fill:"forwards"
            }

            );

        }

    });

});



cards.forEach(card=>{

    observer.observe(card);

});





// Open heart button

const startBtn = document.getElementById("startBtn");


if(startBtn){

startBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:window.innerHeight,

        behavior:"smooth"

    });

});

}
