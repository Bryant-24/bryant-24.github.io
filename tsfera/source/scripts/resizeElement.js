var width, widths, width_stock, widths_stock, width_recomm, widths_recomm;
var IE=(navigator.userAgent.indexOf('MSIE')!=-1)

function resizeElement() {
    if(window.innerWidth)
        width=window.innerWidth;
    else if((document.body)&&(document.body.clientWidth))
        width=document.body.clientWidth;
        widths=document.body.clientWidth;
        width_stock=document.body.clientWidth;
        widths_stock=document.body.clientWidth;
        width_recomm=document.body.clientWidth;
        widths_recomm=document.body.clientWidth;

    if(IE)
    {
        if(document.documentElement&&document.documentElement.clientHeight&&document.documentElement.clientWidth)
        {
            width=document.documentElement.clientWidth;
            widths=document.documentElement.clientWidth;
            width_stock=document.documentElement.clientWidth;
            widths_stock=document.documentElement.clientWidth;
            width_recomm=document.documentElement.clientWidth;
            widths_recomm=document.documentElement.clientWidth;
        }
    }

    var elementNovetly=document.getElementById('prev_last_novetly');
    var elementLastNovetly=document.getElementById('last_novetly');
    var elementStock=document.getElementById('prev_last_stock');
    var elementLastStock=document.getElementById('last_stock');
    var elementRecomm=document.getElementById('prev_last_recomm');
    var elementLastRecomm=document.getElementById('last_recomm');



    width=(width>1230)?"block":"none";
    widths=(widths>1390)?"block":"none";
    width_stock=(width_stock>1230)?"block":"none";
    widths_stock=(widths_stock>1390)?"block":"none";
    width_recomm=(width_recomm>1230)?"block":"none";
    widths_recomm=(widths_recomm>1390)?"block":"none";

    if(elementNovetly != null)
    {
        elementNovetly.style.display=width;
    }
    if(elementLastNovetly != null)
    {
    elementLastNovetly.style.display=widths;
    }
    if(elementStock != null)
    {
        elementStock.style.display=width_stock;
    }
    if(elementLastStock != null)
    {
        elementLastStock.style.display=widths_stock;
    }
    if(elementRecomm != null)
    {
        elementRecomm.style.display=width_recomm;
    }
    if(elementLastRecomm != null)
    {
        elementLastRecomm.style.display=widths_recomm;
    }
}
window.onload=resizeElement;
