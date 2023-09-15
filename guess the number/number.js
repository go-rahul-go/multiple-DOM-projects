let form = document.querySelector("form");
let button = document.querySelector('button')

let previous=document.querySelector("#previous")
let prevNumber;
let attempts = 0;
let remaining = document.querySelector("#remaining");

remaining.innerText = `remaining guess ${10}`
previous.innerText=`previous number`;


form.addEventListener("submit", (event) => {
    let random = Math.floor(Math.random() * 100);
    
    event.preventDefault();
    let number = document.querySelector("form input");
    prevNumber=number.value;
    attempts++;

    if (attempts === 10) {
        button.disabled = true;
        number.value=1;
        number.disabled = true;
        setTimeout(()=>{
            document.querySelector("#timeout").innerText=""
        },2000)
        document.querySelector("#timeout").innerText="you ran out of attempts"

    }
    else if(random==number)
    {
        alert("you won")

    }
    previous.innerText=`previous number ${prevNumber}`
    remaining.innerText = `remaining guess ${10 - attempts}`

})
