const inputs = document.querySelectorAll('.input');
const showPassword = document.querySelector('.show-password');
const button = document.querySelector("#singup-button");
const handleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}
const handleFocusOut = ({target}) => {
    if(target.value == ''){
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}
const checkButton = () => {
    if (inputs[1].value != ''){
        let a = inputs[1].value.split("");
        button.disabled = false;
        if(inputs[0].value != '' && a.length > 8){
        }else{
            button.disabled = true;
        }
    }
}
const checkPassword = () => {
    let a = inputs[1].value.split("");
    if(a.length >= 1){
        showPassword.style.visibility = "visible"
    }else{
        showPassword.style.visibility = "hidden"
    }
}
const showMePassword = () =>{
    if ( inputs[1].type === "password"){
        inputs[1].type = "text"
    }else{
        inputs[1].type = "password"
    }
}
inputs.forEach((input) => input.addEventListener('keydown', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('focusout', checkButton));
inputs[1].addEventListener('keyup', checkPassword);
showPassword.addEventListener('click', showMePassword);
