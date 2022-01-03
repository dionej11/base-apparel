const $button = document.getElementById("form-button"),
    $input = document.getElementById("email"),
    $imgError = document.querySelector(".input--error"),
    $spanError = document.querySelector(".msj-error");

$input.addEventListener("keyup",(e)=> {
    let regex = new RegExp($input.pattern);
    if(!regex.exec($input.value)){
        $spanError.classList.remove("none");
        $imgError.classList.remove("none");
        $button.style.background = "linear-gradient(135deg,hsl(0deg 73% 86%),hsl(0deg 63% 87%))";
    }else{
        $spanError.classList.add("none");
        $imgError.classList.add("none");
        $button.classList.remove("gradient");
        $button.style.background = "linear-gradient(135deg,hsl(0, 80%, 86%),hsl(0, 74%, 74%))";
    }
})