var width, height;
var IE=(navigator.userAgent.indexOf('MSIE')!=-1)
function resizeElement() {
    if(window.innerWidth)
    width=window.innerWidth;
    else if((document.body)&&(document.body.clientWidth))
    width=document.body.clientWidth;
    if(window.innerHeight)
    height=window.innerHeight;
    else if((document.body)&&(document.body.clientHeight))
    height=document.body.clientHeight;
    if(IE)
    {
    if(document.documentElement&&document.documentElement.clientHeight&&document.documentElement.clientWidth)
    {
    width=document.documentElement.clientWidth;
    height=document.documentElement.clientHeight;
    }
}

var element=document.getElementById('girl');
var elements=document.getElementById('boy');
var elementw=document.getElementById('wrapper');
width=(width>1900)?"block":"none";
widthz=(width=="block")?"0 auto 0 auto":"0 auto";

element.style.display=width;
elements.style.display=width;
elementw.style.margin=widthz;
}
window.onload=resizeElement;
