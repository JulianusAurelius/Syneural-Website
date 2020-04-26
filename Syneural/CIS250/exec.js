var imgbool = false;
var sqlbool = false;
function check() {
    if (imgbool == true) {
        var img = document.getElementById('img');
        img.parentNode.removeChild(img);
        imgbool = false;
    }
    else if (sqlbool == true) {
        var sql = document.getElementById('sql');
        var sql1 = document.getElementById('sql1');
        var sql2 = document.getElementById('sql2');
        sql.parentNode.removeChild(sql);
        sql1.parentNode.removeChild(sql1);
        sql2.parentNode.removeChild(sql2);
        sqlbool = false;
    }
}

function run1() {
    var img = document.createElement('img');
    img.setAttribute('src', 'img1.jpg');
    img.setAttribute('id', 'img')
    var div = document.getElementById('div');
    div.appendChild(img);
    imgbool = true;
}
function run2() {
    var img = document.createElement('img');
    img.setAttribute('src', 'img2.jpg');
    img.setAttribute('id', 'img')
    var div = document.getElementById('div');
    div.appendChild(img);
    div.style.height="750px";
    imgbool = true;
}
function run3() {
    var img = document.createElement('img');
    img.setAttribute('src', 'img3.png');
    img.setAttribute('id', 'img')
    var div = document.getElementById('div');
    div.appendChild(img);
    div.style.height="750px";
    imgbool = true;
}
function run4() {
    var sql = document.createElement('textarea');
    sql.setAttribute('placeholder', 'ENTER SQL CODE HERE');
    sql.setAttribute('cols', '30');
    sql.setAttribute('rows', '10');
    sql.setAttribute('id', 'sql');
    var div = document.getElementById('div');
    var sql1 = document.createElement('button');
    sql1.innerText = "Execute WITHOUT Saving";
    sql1.setAttribute('id', 'sql1');
    var sql2 = document.createElement('button');
    sql2.innerText = "Execute WITH Saving";
    sql2.setAttribute('id', 'sql2');
    div.appendChild(sql);
    div.appendChild(sql1);
    div.appendChild(sql2);
    sqlbool = true;
}


//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
////////  BLEND  /////////  BLEND  /////////  BLEND  /////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
var addbool = false;
var maintainbool = false;
var removeBbool = false;

function add() {
    if (maintainbool == true) {
        maintainbool = false;
        var button = document.getElementById('button2');
        button.setAttribute('onclick', 'maintain();');
        var form = document.getElementById('formbody');
        form.parentNode.removeChild(form);
    }
    else if (removeBbool == true) {
        removeBbool = false;
        var button = document.getElementById('button3');
        button.setAttribute('onclick', 'deleteB();');
        var form = document.getElementById('formbody');
        form.parentNode.removeChild(form);
    }


    var form = document.createElement('form');
    form.setAttribute('id', 'formbody');

    var form1 = document.createElement('input');
    var form1text = document.createElement('label');
    form1.setAttribute('type', 'text');
    form1.setAttribute('value', 'Blend Name');
    form1.setAttribute('id', 'form1');
    form1text.setAttribute('for', 'form1');
    form1text.setAttribute('id', 'form1t');
    form1text.innerText = " Blend Name\n\n";

    var form2 = document.createElement('input');
    var form2text = document.createElement('label');
    form2.setAttribute('type', 'number');
    form2.setAttribute('id', 'form2');
    form2text.setAttribute('for', 'form2');
    form1text.setAttribute('id', 'form2t');
    form2text.innerText = " Price\n\n";

    var form3 = document.createElement('button');
    var form3text = document.createElement('label');
    form3.innerText = "Ingredients and Quantities";
    form3.setAttribute('id', 'form3');
    form3.setAttribute('height', '20px');
    form3text.setAttribute('for', 'form3');
    form1text.setAttribute('id', 'form3t');
    form3text.innerText = " Ingredients and Quantities (CSV only) Upload Here\n\n";

    var form4 = document.createElement('textarea');
    var form4text = document.createElement('label');
    form4.setAttribute('placeholder', 'Description');
    form4.setAttribute('id', 'form4');
    form4.setAttribute('rows', '5');
    form4.setAttribute('cols', '50');
    form4text.setAttribute('for', 'form4');
    form1text.setAttribute('id', 'form4t');
    form4text.innerText = " Blend Name\n";

    var submit = document.createElement('input');
    submit.setAttribute('type', 'submit');

    var div = document.getElementById('div');
    div.appendChild(form);
    form.appendChild(form1);
    form.appendChild(form1text);
    form.appendChild(form2);
    form.appendChild(form2text);
    form.appendChild(form3);
    form.appendChild(form3text);
    form.appendChild(form4);
    form.appendChild(form4text);
    form.appendChild(submit);
    var att = document.getElementById('button1');
    att.removeAttribute('onclick');
    addbool = true;
}
/////////////////////////////////////////////////////////////////////////////
function maintain() {
    if (addbool == true) {
        addbool = false;
        var button = document.getElementById('button1');
        button.setAttribute('onclick', 'add();');
        var form = document.getElementById('formbody');
        form.parentNode.removeChild(form);
    }
    else if (removeBbool == true) {
        removeBbool = false;
        var button = document.getElementById('button3');
        button.setAttribute('onclick', 'deleteB();');
        var form = document.getElementById('formbody');
        form.parentNode.removeChild(form);
    }


    var form = document.createElement('form');
    form.setAttribute('id', 'formbody');

    var option1 = document.createElement('input');
    option1.setAttribute('id', 'op1');
    option1.setAttribute('name', 'blends');
    option1.setAttribute('type', 'radio');
    var option1t = document.createElement('label');
    option1t.setAttribute('for', 'op1');
    option1t.innerText = " Blend 1";
    
    var option2 = document.createElement('input');
    option2.setAttribute('id', 'op2');
    option2.setAttribute('name', 'blends');
    option2.setAttribute('type', 'radio');
    var option2t = document.createElement('label');
    option2t.setAttribute('for', 'op2');
    option2t.innerText = " Blend 2";
    
    var option3 = document.createElement('input');
    option3.setAttribute('id', 'op3');
    option3.setAttribute('name', 'blends');
    option3.setAttribute('type', 'radio');
    var option3t = document.createElement('label');
    option3t.setAttribute('for', 'op3');
    option3t.innerText = " Blend 3\n\n\n";

    var div2 = document.createElement('div');
    div2.setAttribute('id', 'div2');
    div2.appendChild(option1);
    div2.appendChild(option1t);
    div2.appendChild(option2);
    div2.appendChild(option2t);
    div2.appendChild(option3);
    div2.appendChild(option3t);
    var p1 = document.createElement('p');
    p1.innerText = "Select the product you want to Modify!";
    div2.appendChild(p1);


    var form1 = document.createElement('input');
    var form1text = document.createElement('label');
    form1.setAttribute('type', 'text');
    form1.setAttribute('value', 'Blend Name');
    form1.setAttribute('id', 'form1');
    form1text.setAttribute('for', 'form1');
    form1text.innerText = " Blend Name\n\n";

    var form2 = document.createElement('input');
    var form2text = document.createElement('label');
    form2.setAttribute('type', 'number');
    form2.setAttribute('id', 'form2');
    form2text.setAttribute('for', 'form2');
    form2text.setAttribute('id', 'form2t');
    form2text.innerText = " Price\n\n";

    var form3 = document.createElement('button');
    var form3text = document.createElement('label');
    form3.innerText = "Ingredients and Quantities";
    form3.setAttribute('id', 'form3');
    form3.setAttribute('height', '20px');
    form3text.setAttribute('for', 'form3');
    form3text.innerText = " Ingredients and Quantities (CSV only) Upload Here\n\n";
    
    var form4 = document.createElement('button');
    var form4text = document.createElement('label');
    form4.innerText = "Ingredients and Quantities (Current)";
    form4.setAttribute('id', 'form4');
    form4.setAttribute('height', '20px');
    form4text.setAttribute('for', 'form4');
    form4text.innerText = " Download Current CSV Indredient and Quantities File\n\n";

    var form5 = document.createElement('textarea');
    var form5text = document.createElement('label');
    form5.setAttribute('placeholder', 'Description');
    form5.setAttribute('id', 'form5');
    form5.setAttribute('rows', '5');
    form5.setAttribute('cols', '50');
    form5text.setAttribute('for', 'form5');
    form5text.innerText = " Blend Name\n";
    
    var submit = document.createElement('input');
    submit.setAttribute('type', 'submit');


    var div = document.getElementById('div');
    div.appendChild(form);
    form.appendChild(div2);
    form.appendChild(form1);
    form.appendChild(form1text);
    form.appendChild(form2);
    form.appendChild(form2text);
    form.appendChild(form3);
    form.appendChild(form3text);
    form.appendChild(form4);
    form.appendChild(form4text);
    form.appendChild(form5);
    form.appendChild(form5text);
    form.appendChild(submit);
    var att = document.getElementById('button2');
    att.removeAttribute('onclick');
    maintainbool = true;
}
/////////////////////////////////////////////////////////////////////////////////
function deleteB() {
    if (addbool == true) {
        addbool = false;
        var button = document.getElementById('button1');
        button.setAttribute('onclick', 'add();');
        var form = document.getElementById('formbody');
        form.parentNode.removeChild(form);
    }
    else if (maintainbool == true) {
        maintainbool = false;
        var button = document.getElementById('button2');
        button.setAttribute('onclick', 'maintain();');
        var form = document.getElementById('formbody');
        form.parentNode.removeChild(form);
    }

    var form = document.createElement('form');
    form.setAttribute('id', 'formbody');

    var option1 = document.createElement('input');
    option1.setAttribute('id', 'op1');
    option1.setAttribute('name', 'blends');
    option1.setAttribute('type', 'radio');
    var option1t = document.createElement('label');
    option1t.setAttribute('for', 'op1');
    option1t.innerText = " Blend 1";
    
    var option2 = document.createElement('input');
    option2.setAttribute('id', 'op2');
    option2.setAttribute('name', 'blends');
    option2.setAttribute('type', 'radio');
    var option2t = document.createElement('label');
    option2t.setAttribute('for', 'op2');
    option2t.innerText = " Blend 2";
    
    var option3 = document.createElement('input');
    option3.setAttribute('id', 'op3');
    option3.setAttribute('name', 'blends');
    option3.setAttribute('type', 'radio');
    var option3t = document.createElement('label');
    option3t.setAttribute('for', 'op3');
    option3t.innerText = " Blend 3\n\n\n";

    var button = document.createElement('button');
    button.setAttribute('id', 'button4');
    button.setAttribute('onclick', 'warning();');
    button.innerText = "Delete Blend";

    var div2 = document.createElement('div');
    div2.setAttribute('id', 'div2');
    div2.appendChild(option1);
    div2.appendChild(option1t);
    div2.appendChild(option2);
    div2.appendChild(option2t);
    div2.appendChild(option3);
    div2.appendChild(option3t);
    var p1 = document.createElement('p');
    p1.innerText = "Select the product you want to Delete!";
    div2.appendChild(p1);


    var div = document.getElementById('div');
    div.appendChild(form);
    form.appendChild(div2);
    form.appendChild(button);
    var att = document.getElementById('button3');
    att.removeAttribute('onclick');
    removeBbool = true;
}

function warning() {
    window.alert('Are you sure you want to delete this blend?');
}