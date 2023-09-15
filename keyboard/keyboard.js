let input = document.querySelector("textarea")
let p=document.querySelector("p")
input.addEventListener("keydown",(event)=>{
   let key=event.code;
   if(key.startsWith("Key"))
   {
        key=key.slice(0,3)+" "+key[3];
   } 
   else if(key.startsWith("Digit"))
   {
    key=key.slice(0,5)+" "+key[5];
   }
 
   p.innerText=key+" is pressed";
})