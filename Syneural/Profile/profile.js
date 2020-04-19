var buttonbool = false;
var namevar = document.getElementById("namevar").innerText;
var job = document.getElementById("jobvar").innerText;
var age = document.getElementById("agevar").innerText;
var gender = document.getElementById("gendervar").innerText;
var lifestyle = document.getElementById("lifestylevar").innerText;
var contact = document.getElementById("contactvar").innerText;

function namevar() {
    var deleteme = document.getElementById("namevar");
    var namebox = document.createElement('input');
    namebox.setAttribute('type', 'text');
    namebox.setAttribute('value', deleteme.innerText);
    namebox.setAttribute('id', 'namevar1');
    deleteme.parentNode.removeChild(deleteme);
    var deleteme1 = document.getElementById("gear1");
    deleteme1.parentNode.removeChild(deleteme1);
    var div = document.getElementById('firstdiv');
    div.appendChild(namebox);
    if (buttonbool == false) {
        var button = document.createElement('input');
        button.setAttribute('type', 'submit');
        document.getElementById('form').appendChild(button);
        document.getElementById('fix').innerText += '\n Click Submit once you are finished!';
        buttonbool = true;
    }
}
function job() {
    var deleteme = document.getElementById("jobvar");
    var jobbox = document.createElement('input');
    jobbox.setAttribute('type', 'text');
    jobbox.setAttribute('value', deleteme.innerText);
    jobbox.setAttribute('id', 'jobvar1');
    deleteme.parentNode.removeChild(deleteme);
    var deleteme1 = document.getElementById("gear2");
    deleteme1.parentNode.removeChild(deleteme1);
    var div = document.getElementById('seconddiv');
    div.appendChild(jobbox);
    if (buttonbool == false) {
        var button = document.createElement('input');
        button.setAttribute('type', 'submit');
        document.getElementById('form').appendChild(button);
        document.getElementById('fix').innerText += '\n Click Submit once you are finished!';
        buttonbool = true;
    }
}
function gender(input) {
    var genderbox = document.createElement('input');
    genderbox.setAttribute('type', 'radio');
    genderbox.setAttribute('id', 'gendervar1');
    genderbox.setAttribute('name', 'gen');
    var genderboxlabel = document.createElement('label');
    genderboxlabel.setAttribute('for', 'gendervar1');
    var genderbox1 = document.createElement('input');
    genderbox1.setAttribute('type', 'radio');
    genderbox1.setAttribute('id', 'gendervar2');
    genderbox1.setAttribute('name', 'gen');
    var genderboxlabel1 = document.createElement('label');
    genderboxlabel1.setAttribute('for', 'gendervar2');
    var genderbox2 = document.createElement('input');
    genderbox2.setAttribute('type', 'radio');
    genderbox2.setAttribute('id', 'gendervar3');
    genderbox2.setAttribute('name', 'gen');
    var genderboxlabel2 = document.createElement('label');
    genderboxlabel2.setAttribute('for', 'gendervar3');
    var div = document.getElementById('thirddiv');
    var div2 = document.createElement('div');
    div2.setAttribute('id', 'div2');
    div.appendChild(div2)
    div2.appendChild(genderbox);
    div2.appendChild(genderboxlabel);
    div2.appendChild(genderbox1);
    div2.appendChild(genderboxlabel1);
    div2.appendChild(genderbox2);
    div2.appendChild(genderboxlabel2);
    if (input === 'gender') {
        genderboxlabel.innerText = 'Male\n';   
        genderboxlabel1.innerText = 'Female\n';
        genderboxlabel2.innerText = 'Other\n';
    }
    else if (input === 'shipping') {
        genderboxlabel.innerText = 'Standard\n';   
        genderboxlabel1.innerText = 'Priority\n';
        genderboxlabel2.innerText = 'One-Day Shipping\n';
    }
    else if (input === 'blend') {
        var genderbox3 = document.createElement('input');
        genderbox3.setAttribute('type', 'radio');
        genderbox3.setAttribute('id', 'gendervar3');
        genderbox3.setAttribute('name', 'gen');
        var genderboxlabel3 = document.createElement('label');
        genderboxlabel3.setAttribute('for', 'gendervar3');
        var genderbox4 = document.createElement('input');
        genderbox4.setAttribute('type', 'radio');
        genderbox4.setAttribute('id', 'gendervar4');
        genderbox4.setAttribute('name', 'gen');
        var genderboxlabel4 = document.createElement('label');
        genderboxlabel4.setAttribute('for', 'gendervar4');
        genderboxlabel.innerText = '1 week\n';
        genderboxlabel1.innerText = '2 weeks\n';
        genderboxlabel2.innerText = '3 weeks\n';
        genderboxlabel3.innerText = '4 weeks\n';
        genderboxlabel4.innerText = '5 weeks\n';
        div2.appendChild(genderbox3);
        div2.appendChild(genderboxlabel3);
        div2.appendChild(genderbox4);
        div2.appendChild(genderboxlabel4);
    }
    var deleteme = document.getElementById("gendervar");
    deleteme.parentNode.removeChild(deleteme);
    var deleteme1 = document.getElementById("gear3");
    deleteme1.parentNode.removeChild(deleteme1);
    if (buttonbool == false) {
        var button = document.createElement('input');
        button.setAttribute('type', 'submit');
        document.getElementById('form').appendChild(button);
        document.getElementById('fix').innerText += '\n Click Submit once you are finished!';
        buttonbool = true;
    }
    div.removeAttribute('onclick');
}
function age() {
    var deleteme = document.getElementById("agevar");
    var agebox = document.createElement('input');
    agebox.setAttribute('type', 'text');
    agebox.setAttribute('value', deleteme.innerText);
    agebox.setAttribute('id', 'agevar1');
    deleteme.parentNode.removeChild(deleteme);
    var deleteme1 = document.getElementById("gear3");
    deleteme1.parentNode.removeChild(deleteme1);
    var div = document.getElementById('fourthdiv');
    div.appendChild(agebox);
    if (buttonbool == false) {
        var button = document.createElement('input');
        button.setAttribute('type', 'submit');
        document.getElementById('form').appendChild(button);
        document.getElementById('fix').innerText += '\n Click Submit once you are finished!';
        buttonbool = true;
    }
}


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
////////PROFILE 3 ///////// PROFILE 3 ///////// PROFILE 3 /////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

function blend() {
    var blendbox = document.createElement('input');
    blendbox.setAttribute('type', 'radio');
    blendbox.setAttribute('id', 'blendvar1');
    blendbox.setAttribute('name', 'gen');
    var blendboxlabel = document.createElement('label');
    blendboxlabel.setAttribute('for', 'blendvar1');
    blendboxlabel.innerText = 'First Option\n';   
    var blendbox1 = document.createElement('input');
    blendbox1.setAttribute('type', 'radio');
    blendbox1.setAttribute('id', 'blendvar2');
    blendbox1.setAttribute('name', 'gen');
    var blendboxlabel1 = document.createElement('label');
    blendboxlabel1.setAttribute('for', 'blendvar2');
    blendboxlabel1.innerText = 'Second Option';
    var blendbox2 = document.createElement('input');
    blendbox2.setAttribute('type', 'radio');
    blendbox2.setAttribute('id', 'blendvar3');
    blendbox2.setAttribute('name', 'gen');
    var blendboxlabel2 = document.createElement('label');
    blendboxlabel2.setAttribute('for', 'blendvar3');
    blendboxlabel2.innerText = 'Third Option';
    var div = document.getElementById('firstdiv');
    var div2 = document.createElement('div');
    div2.setAttribute('id', 'div2');
    var br = document.createElement('br');
    div.appendChild(div2);
    div2.appendChild(blendbox);
    div2.appendChild(blendboxlabel);
    div2.appendChild(blendbox1);
    div2.appendChild(blendboxlabel1);
    div2.appendChild(br);
    div2.appendChild(blendbox2);
    div2.appendChild(blendboxlabel2);
    div.removeAttribute('onclick');
}
function blendQ() {
    var blendqbox = document.createElement('input');
    blendqbox.setAttribute('type', 'radio');
    blendqbox.setAttribute('id', 'blendqvar1');
    blendqbox.setAttribute('name', 'gen');
    var blendqboxlabel = document.createElement('label');
    blendqboxlabel.setAttribute('for', 'blendqvar1');
    blendqboxlabel.innerText = 'One Week Worths\n';   
    var blendqbox1 = document.createElement('input');
    blendqbox1.setAttribute('type', 'radio');
    blendqbox1.setAttribute('id', 'blendqvar2');
    blendqbox1.setAttribute('name', 'gen');
    var blendqboxlabel1 = document.createElement('label');
    blendqboxlabel1.setAttribute('for', 'blendqvar2');
    blendqboxlabel1.innerText = 'Two Week Worths\n';
    var blendqbox2 = document.createElement('input');
    blendqbox2.setAttribute('type', 'radio');
    blendqbox2.setAttribute('id', 'blendqvar3');
    blendqbox2.setAttribute('name', 'gen');
    var blendqboxlabel2 = document.createElement('label');
    blendqboxlabel2.setAttribute('for', 'blendqvar3');
    blendqboxlabel2.innerText = 'Three Week Worths\n';
    var blendqbox3 = document.createElement('input');
    blendqbox3.setAttribute('type', 'radio');
    blendqbox3.setAttribute('id', 'blendqvar4');
    blendqbox3.setAttribute('name', 'gen');
    var blendqboxlabel3 = document.createElement('label');
    blendqboxlabel3.setAttribute('for', 'blendqvar4');
    blendqboxlabel3.innerText = 'Four Week Worths\n';
    var blendqbox4 = document.createElement('input');
    blendqbox4.setAttribute('type', 'radio');
    blendqbox4.setAttribute('id', 'blendqvar5');
    blendqbox4.setAttribute('name', 'gen');
    var blendqboxlabel4 = document.createElement('label');
    blendqboxlabel4.setAttribute('for', 'blendqvar5');
    blendqboxlabel4.innerText = 'Five Week Worths\n';
    var div = document.getElementById('seconddiv');
    var div2 = document.createElement('div');
    div2.setAttribute('id', 'div2');
    div.appendChild(div2);
    div2.appendChild(blendqbox);
    div2.appendChild(blendqboxlabel);
    div2.appendChild(blendqbox1);
    div2.appendChild(blendqboxlabel1);
    div2.appendChild(blendqbox2);
    div2.appendChild(blendqboxlabel2);
    div2.appendChild(blendqbox3);
    div2.appendChild(blendqboxlabel3);
    div2.appendChild(blendqbox4);
    div2.appendChild(blendqboxlabel4);
    div.removeAttribute('onclick');
}