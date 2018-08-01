
var arr = function(N){

    let arr = [];
    for (let i = 0; i > N; i++){
      arr.push(i);
    }
  return arr;
}
console.log(arr(4));
      



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