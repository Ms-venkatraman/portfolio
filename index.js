var se=document.querySelector(".Service");
var sub=document.querySelector(".sub-services");
console.log("any")
var non=document.querySelector(".none");
var help=document.querySelector(".help")
var hel=document.querySelector(".h1");
help.addEventListener("click", function(){
    hel.classList.toggle("h1");
    console.log("function working")
})

se.addEventListener("click", function(){
    sub.classList.toggle("none");
})

var btnsub=document.querySelector(".btn-sub");
btnsub.addEventListener("click",function(event){
    var usern=document.getElementById("name");
    var userph=document.getElementById("ph");
    event.preventDefault();
    username=usern.value;
    console.log(username)
    if(username==""&&userph.value==""){
        alert("XXX please enter a value")        
    }
    else
    {
    console.log(usern.value)
    alert(usern.value +"- Thanks for giving information...")
    }
})
