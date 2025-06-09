
//these are all variables we need

const lowercases="abcdefghijklmnopqrstuvwxyz";
const uppercases="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const symbols="!@##$%^&*-+=_?``~()*/;:''.,><";


//fetch the element's id

const passwordEl=document.getElementById('password');
const generateBtn=document.getElementById('generate');
const lengthEl =document.getElementById('length');
const lowercaseEl=document.getElementById('lowercase');
const uppercaseEl=document.getElementById('uppercase');
const numberEl=document.getElementById('number');
const symbolEl=document.getElementById('symbol');


//now write vent listner function that triggers when you click the button

generateBtn.addEventListener('click',function(){

    const length=lengthEl.value;
    let characters="";//temporary...for storage purpose
    let password="";  //the final output of password


    if (uppercaseEl.checked){
        characters+=uppercases;
    }
    if (lowercaseEl.checked){
        characters+=lowercases;
    }
    if (symbolEl.checked){
        characters+=symbols;
    }
    if (numberEl.checked){
        characters+=numbers;
    }
    for (i=0;i<length;i++){
        let randomindexEl=Math.floor(Math.random()*characters.length) //to find the random index
        password+=characters[randomindexEl]
    }
    passwordEl.value=password




})