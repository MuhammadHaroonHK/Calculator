let buttons= document.querySelectorAll("button");
let screen = document.getElementById("display");
let buttonArray = Array.from(buttons);
let string= "";

buttonArray.forEach((button) => {
    button.addEventListener(("click"), (e) =>{

        if(e.target.innerHTML == 'CA') {
            string='';
            screen.value=string;
        } else if(e.target.innerHTML == 'DEL') {
            string=string.substring(0, string.length-1);
            screen.value=string;
        }else if(e.target.innerHTML == '=' ) {
            string= eval(string);
            screen.value = string;
        }
        else {
            string+=e.target.innerHTML;
        screen.value = string;
    }
    });
});