    //setTimeout(() => {
        var div = document.createElement('div');
        div.textContent = "Sup, y'all?";
        div.setAttribute('id', 'buy1');
        div.setAttribute('onmouseover', 'buy();')
        //div.setAttribute('onmouseleave', 'buyexit();')
        document.getElementById('nav').appendChild(div);
        //setInterval(() => {
        //    if (julian == false) {
        //        break;
        //    }
        //}, 1000);
    //}, 1000);


    
    for (i=0;i<100;i++) {
        var div = document.getElementById('buy1');
        document.getElementById('nav').removeChild(div);
    }
    //var element = document.getElementById('note');
    //document.getElementById('note').parentNode.removeChild(element);



///FOR exec.js BLEND
    var form1 = document.getElementById('form1');
    var form1t = document.getElementById('form1t');
    var form1 = document.getElementById('form2');
    var form1t = document.getElementById('form2t');
    var form1 = document.getElementById('form3');
    var form1t = document.getElementById('form3t');
    var form1 = document.getElementById('form4');
    var form1t = document.getElementById('form4t');
    form1.parentNode.removeChild(form1);
    form1t.parentNode.removeChild(form1t);
    form2.parentNode.removeChild(form2);
    form2t.parentNode.removeChild(form2t);
    form3.parentNode.removeChild(form3);
    form3t.parentNode.removeChild(form3t);
    form4.parentNode.removeChild(form4);
    form4t.parentNode.removeChild(form4t);