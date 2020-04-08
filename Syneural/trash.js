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



