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


var res = screen.width;

let infographic = document.getElementById('infographic');

width = res*0.55;
infographic.style.width = width + 'px';
infographic.style.height = width*2.5 + 'px';

let rightBar = document.getElementById('rightBar');

width = res*0.45;
rightBar.style.width = width + 'px';
rightBar.style.height = infographic.height + 'px';
rightBar.style.left = infographic.width + 'px'
*/
var res = screen.width;
function contentPosition(cssClass, width, height, top, left){
    let Class = document.getElementById(cssClass);
    Class.style.position = 'absolute';
    Class.style.width = width + 'px';
    Class.style.height = height + 'px';
    Class.style.top = top + 'rem';
    Class.style.left = left + 'px';
}

contentPosition('infographic', res*0.55, (res*0.55)*2.5, 3, 0)
contentPosition('rightBar', res*0.45, (res*0.55)*2.5, 3, res*0.55)
