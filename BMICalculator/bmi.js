let form = document.getElementById("form");



form.addEventListener("submit", (event) => {
    event.preventDefault();
    let weight = document.querySelector("#weight")
    let height = document.querySelector("#height")
    let result = document.querySelector("#result")
    let remark=document.querySelector("#remark");
    //formula weight/height^2
    weight = Number.parseInt(weight.value)
    height=Number.parseInt(height.value)
    let meters = height / 100;
   
    let bmi=weight/(meters ** 2)
    result.innerText=bmi.toFixed(2);
    if(bmi<18.50)
    {
        remark.innerText="underweight"
        remark.style.color="red"
    }
    else if(bmi>18.50 && bmi<24.99)
    {
        remark.innerText="normal"
        remark.style.color="green"
    }
    else if(bmi>25)
    {
        remark.innerText="overweight"
        remark.style.color="red"
    }
    
})