var hit;
var score =0;
function makebubble(){
        document.querySelector("#bottom").innerHTML="";
    for(i=1;i<162;i++){
        var rn = Math.floor(Math.random()*10)
        document.querySelector("#bottom").innerHTML += `<div class="bubble">${rn}</div>`
    }
}
makebubble();
function timer(){
    var timer = 15;
        setInterval(function(){
            if(timer>0){
                timer--
                document.querySelector("#timerdiv").textContent=timer
            }
            else{
                setTimeout(function(){
                    document.querySelector("#page2").style.top="0%"
                    document.querySelector("h1").innerHTML=`Game Over <br> Your Score is ${score} `
                    document.querySelector("h1").style.fontSize="40px"
                    btn.style.display="none"
                },1000)
            }
            
        },1000)
}

function increasescore(){
    score = score + 10;
    document.querySelector("#scorediv").textContent=score;
}
function gethit(){
    hit = Math.floor(Math.random()*10)
    document.querySelector("#hitdiv").textContent=hit
}
gethit();
document.querySelector("#bottom").addEventListener("click",function(dets){
    console.log(dets.target.textContent)
    if(Number(dets.target.textContent)===hit){
        increasescore();
        makebubble();
        gethit();
    }
})
var btn = document.querySelector("button")
btn.addEventListener("mouseenter",function(){
    btn.textContent="lets play"
    btn.style.backgroundColor="rgb(47, 28, 77)"
    btn.style.color="white"
    btn.addEventListener("click",function(){
        // console.log("hey")
        document.querySelector("#page2").style.top= "-100%"
        setTimeout(function(){
            // console.log("hey")
            timer();
        },1500)
    })
})
btn.addEventListener("mouseleave",function(){
    btn.textContent="start"
    btn.style.backgroundColor="white"
    btn.style.color="black"
})