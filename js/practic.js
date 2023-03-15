'use strict'
// кнопки
document.querySelector('.fa-angle-right').addEventListener('click', toRight);
document.querySelector('.fa-angle-left').addEventListener('click', toLeft);
let slaides = Array.from(document.querySelectorAll('.slaid'));
let slaider = document.querySelector('.slaider').offsetWidth;
let slaidLength = slaides.length;
let translate = 0;
let count = 0;
let slaidshow = document.querySelector('.slaides');
function toRight(){
    count++;
    if(count>=slaidLength){
        translate = 0;
        count = 0;
    } else{
        translate = -slaider*count;
    }
    slaidshow.style.transform = `translate(${translate}px)`;
}
function toLeft(){
    count--;
    if(count<0){
        translate = -slaider*slaidshow-1;
        count = slaidLength - 1;
    } else{
        translate = -slaider*count;
    }
    slaidshow.style.transform = `translate(${translate}px)`;
}

