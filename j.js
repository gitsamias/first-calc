let resu = document.querySelector(".res");
let tdc = document.querySelectorAll(".td");
tdc.forEach(item=>{
    item.addEventListener("click",function(item){
        if(resu.innerHTML=="0"){
            resu.innerHTML = item.target.innerHTML
        }
        else{
            return resu.innerHTML +=item.target.innerHTML
        }
    })
})
let result = document.querySelector(".rss")
result.addEventListener("click" , function(){
    let a = eval(resu.innerHTML)
    resu.innerHTML = " ";
    resu.innerHTML = a  
})
let c = document.querySelector(".clear-all")
c.addEventListener("click" , clear)
function clear(){
    resu.innerHTML = " ";
    resu.innerHTML = "0"
}
let yc = document.querySelector(".llc").addEventListener("click" , ync)
function ync(){
    let text = resu.innerText;
    if (text.length === 1) {
        resu.innerText = 0;
    } else { 
        resu.innerText = text.substring(text.length-1,1);
        if(resu.innerText.length === 0){
            resu.innerText = "0"
        }
    }
}