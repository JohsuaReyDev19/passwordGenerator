
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbols = "~`!@#$%^&*()_-=+[{}]\|';:/?.>,<";
const allChar = upperCase + lowerCase + number + symbols;

const passwordbox = document.getElementById("PasswordBox")
var length = 12;

function generate(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }

    passwordbox.value = password
}

function copyPassword(){
    passwordbox.select()
    document.execCommand("copy");
}