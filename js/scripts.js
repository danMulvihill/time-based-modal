
var cookie = Cookies.get('visited')

if( !cookie ){
    console.log("in if: "+Cookies.get('visited'))
    setTimeout(function(){
        document.querySelector("#modal").style = "display:block;";
        document.querySelector("body").style="background: #555";
    }, 3000)
    
    var closeButton = document.querySelector("#x-button");
    
    closeButton.onclick = function(){
        document.querySelector("#modal").style = "display:none";
        document.querySelector("body").style="background: #fff";
    }
    
    var closeButton2 = document.querySelector("#more-button");
    
    closeButton2.onclick = function(){
        document.querySelector("#modal").style = "display:none";
        document.querySelector("body").style="background: #fff";
    }

    Cookies.set("visited", "visitor");

}else{
    
    
    console.log(Cookies.get('visited')+": you've been have before")
}




// if(document.querySelector('body').classList.contains('green')){
//     document.querySelector('body').classList.remove('green')
// }else{
//     document.querySelector('body').className
// }