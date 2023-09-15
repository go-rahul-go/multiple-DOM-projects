

let span=document.querySelectorAll(".clock span");


setInterval(()=>{
    let time=new Date();
    let hour=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    span[0].innerText=(hour>12)?"0"+(hour-12)+":":"0"+hour+":";
    span[1].innerText=(minutes<10)?"0"+minutes+":":minutes+":";
    span[2].innerText=(seconds<10)?"0"+seconds:seconds;
    span[3].innerText=(hour>12)?" PM":" AM"
},1000)