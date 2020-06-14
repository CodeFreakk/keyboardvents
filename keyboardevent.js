window.addEventListener("keydown",checkKeyPress,false);
function checkKeyPress(key){
    if(key.keyCode == 65 ){
        alert("You clicked A")
    }
    else(
        alert("Please click A")
    )
}
window.addEventListener("keyup",checkKey,false);
function checkKey(key){
    if(key.keyCode == 65 ){
        alert("You clicked A")
    }
    else(
        alert("Please click A")
    )
}
window.addEventListener( "keypress" ,checkPress,false);
function checkPress(key){
    if(key.keyCode == 97 ){
        alert("You clicked A")
    }
    else(
        alert("Please click A")
    )
}