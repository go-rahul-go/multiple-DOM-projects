const showTime = document.querySelector(".time");

setInterval(() => {
    let date = new Date().toLocaleTimeString();
    let day = new Date().toLocaleDateString();
    showTime.innerText=day+" "+date;
}, 1000);

const colorButtons = document.querySelectorAll(".color-type");
const colorBox = document.querySelector(".color-box");
const navigation = document.querySelector(".navigation");

colorButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(button.getAttribute("id")=="blue")
        {
            colorBox.style.backgroundColor="blue";
            colorBox.style.color="white";
            navigation.style.backgroundColor="#039dfc";
            
        }
        if(button.getAttribute("id")=="yellow")
        {
            colorBox.style.backgroundColor="yellow";
            colorBox.style.color="black";
            navigation.style.backgroundColor="#f77502";
            
        }
        if(button.getAttribute("id")=="black")
        {
            colorBox.style.backgroundColor="black";
            colorBox.style.color="white";
            button.style.borderColor="white";
            navigation.style.backgroundColor="#545453";
            
        }
        if(button.getAttribute("id")=="grey")
        {
           
            colorBox.style.backgroundColor="#b5b5b3";
            colorBox.style.color="black";
            button.style.borderColor="black";
            navigation.style.backgroundColor="#8c8c89";
            
        }
    })
})