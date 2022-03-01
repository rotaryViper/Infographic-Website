"use strict"
/*
function contentSetUp(cssClass) {
    let cssClasss = document.getElementsByClassName(cssClass)[0];
    cssClasss.style.width = cssClasss.style.height = screen.width;

    //document.getElementsByClassName(cssClass)[0].style.width = screen.width;
    console.log(cssClasss.width);
    console.log(cssClasss.height);
}

contentSetUp('infographic');
contentSetUp('rightBar');
*/

let res = screen.width;
let width, height;

let infographic = document.getElementById('infographic');

width = res*0.55;
infographic.style.width = width + 'px';
infographic.style.height = width*2.5 + 'px';

let rightBar = document.getElementById('rightBar');

width = res*0.45;
rightBar.style.width = width + 'px';
rightBar.style.height = infographic.height + 'px';
rightBar.style.left = infographic.width + 'px'