
function myFunction(){
    var element = document.getElementById("myLinks");

    if(element.style.opacity === "1"){
        element.style.marginLeft = "100%"
        element.style.opacity = "0";
        element.style.pointerEvents = "none"

    }  else{
        element.style.opacity = "1"
        element.style.marginLeft = "0"
        element.style.pointerEvents = "all"
    }
}
