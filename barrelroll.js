function barrelRoll() {
    var a=document.body,b=a.scrollTop,c=getComputedStyle(a).overflow;-1==a.style.transform.indexOf("rotate(")&&(a.style.transform="rotate(0deg)"),a.setAttribute("style","overflow:hidden;transition:transform 2s;transform:rotate("+(parseFloat(a.style.transform.substr(7,100))+360-1e-4)+"deg);transform-origin:"+innerWidth/2+"px "+(innerHeight/2+b)+"px;position:absolute;width:100%;height:100%;"),setTimeout(function(){a.style.overflow=c,a.setAttribute("style","overflow:default;transition:none;transform:none;transform-origin:none;")},2e3);
}