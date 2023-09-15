let body = document.querySelector("body")
let h1=document.querySelector(".navigation h1")
let start=document.querySelector("#start")
let stop=document.querySelector("#stop")
let colors=["#5CC8FF","#3D348B","#FFA552","#BAFF29","#A42CD6","pink","#9C95DC","#EE6123","white","grey","#00916E","#703D57","#B744B8","#3423A6","#F22B29"]
let timeout;
let i=0;
start.addEventListener("click",(event)=>{
    timeout=setInterval(()=>{
        if(i<colors.length)
         {
            h1.style.color=colors[i]
            body.style.backgroundColor=colors[i];
            i++;
         }
        else
            i=0;
    },700)
})

stop.addEventListener("click",(event)=>{
    clearInterval(timeout);
})



