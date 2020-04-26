//How often shipments doesn't calc when created
//Personalize no doesn't delete personal div
//I have a profile should have Yes I want to subscribe checked. No change of booleans

var question = 7;
var answer = 0;
var costpmeal = 1.51;
var ship = false;
var subbool = false;
var profno = 0;
var hundo = false;

function calc(input) {
    if (input == 'ship') {
        document.getElementById('numship').removeAttribute('onclick');
        answer += 1;
        ship = true;
    }
    else if (input == 'quantity') {
        document.getElementById('numquantity').removeAttribute('onclick');
        answer += 1;
    }
    else if (input == 'prof') {
        answer += 6;
    }
    else if (input == 1) {
        document.getElementById('male').removeAttribute('onclick');
        document.getElementById('female').removeAttribute('onclick');
        answer += 1;
        profno += 1;
    }
    else if (input == 2) {
        document.getElementById('strenous').removeAttribute('onclick');
        answer += 1;
        profno += 1;
    }
    else if (input == 3) {
        document.getElementById('weight').removeAttribute('onclick');
        answer += 1;
        profno += 1;
    }
    else if (input == 4) {
        document.getElementById('gainweight').removeAttribute('onclick');
        document.getElementById('mainweight').removeAttribute('onclick');
        document.getElementById('loseweight').removeAttribute('onclick');
        answer += 1;
        profno += 1;
    }
    else if (input == 5) {
        document.getElementById('age').removeAttribute('onclick');
        answer += 1;
        profno += 1;
    }
    var progress = answer/question*100;
    var perc = document.getElementById('cont');
    perc.setAttribute('data-pct', Math.round(progress));
    var pro = document.getElementById('bar'); 
    pro.style.strokeDashoffset = 566 - progress/100*566;
    if (progress == 100) {
        var progdiv = document.getElementById('progress');
        var h4 = document.createElement('h4');
        h4.setAttribute('id', 'h4hundo');
        h4.innerText = 'Congrats! All ready to order!';
        h4.style.color = 'black';
        progdiv.appendChild(h4);
    }
    else if (hundo == true) {
        var h4 = document.getElementById('h4hundo');
        h4.parentNode.removeChild(h4);
    }
}

function profileEnter() {
    var holder = document.getElementById('holder');
    holder.innerHTML = '<div id="noprofilediv"><h4>Let'+"'"+'s Personalize this for you! Take 30 seconds and change your life?</h4><div class="boxblocks"><input type="radio" name="cont" id="nocont" onclick="deleteNoProfileDiv2Child();"><label for="nocont">No</label></div><div class="boxblocks"><input type="radio" name="cont" id="yescont" checked><label for="nocont">Yes</label></div><div id="noprofilediv2"><br><br><br><br><div id="deleteme"><h5>What Gender we you biologically at birth?</h5><div class="boxblocks1"><input type="radio" name="gender" id="male" onclick="calc(1);"><label for="male">Male</label></div><div class="boxblocks1"><input type="radio" name="gender" id="female" onclick="calc(1);"><label for="female">Female</label></div><br><br><br><h5>How strenous is your daily life? (Includes working out)</h5><div class="boxblocks1"><input type="range" id="strenous" onclick="calc(2);"><label for="strenous">Left is relaxed, Right is extreme</label></div><br><br><br><br><div class="boxblocks1"><input type="number" id="weight" min="50" max="500" onclick="calc(3);"><label for="weight">What is your weight?</label></div><br><br><br><h5>Are you trying to lose weight, gain weight, or stay the same?</h5><div class="boxblocks1"><input type="radio" id="gainweight" name="weight" onclick="calc(4);"><label for="gainweight">Gain Weight</label></div><div class="boxblocks1"><input type="radio" id="mainweight" name="weight" onclick="calc(4);"><label for="mainweight">Maintain Weight</label></div><div class="boxblocks1"><input type="radio" id="loseweight" name="weight" onclick="calc(4);"><label for="loseweight">Lose Weight</label></div><br><br><br><div class="boxblocks1"><input type="number" id="age" min="10" max="110" onclick="calc(5);"><label for="age">What is your age?</label></div><br><br><br><textarea placeholder="Any allergies or dietary restrictions? If so, write them here. If not, leave this completely blank" cols="30" rows="5"></textarea></div></div>';
    var no = document.getElementById('profileno');
    no.removeAttribute('onclick');
    var yes = document.getElementById('profileyes');
    yes.setAttribute('onclick', 'profileExit();');
    
    answer -= 5;
    var progress = answer/question*100;
    var perc = document.getElementById('cont');
    perc.setAttribute('data-pct', Math.round(progress));
    var pro = document.getElementById('bar'); 
    pro.style.strokeDashoffset = 566 - progress/100*566;
    if (progress == 100) {
        var progdiv = document.getElementById('progress');
        var h4 = document.createElement('h4');
        h4.innerText = 'Congrats! All ready to order!';
        h4.style.color = 'black';
        progdiv.appendChild(h4);
    }
    else if (hundo == true) {
        var h4 = document.getElementById('h4hundo');
        h4.parentNode.removeChild(h4);
    }

    
    var change = document.getElementById('change');
    change.innerText = 'Would you like to subscribe for 10% off?';
    var idno = document.getElementById('yessub');
    idno.setAttribute('onclick', 'addSubOption();');
    var idno1 = document.getElementById('yessub1');
    idno1.innerText = 'No, not this\ntime, thank you';
    var idyes1 = document.getElementById('nosub1');
    idyes1.innerText = 'Yes I want\nto Subscribe!';
    idno.checked = true;
    if (subbool == true) {
        var del1 = document.getElementById('parentdiv');
        var del2 = document.getElementById('boxblocks1');
        var del3 = document.getElementById('boxblocks2');
        var del4 = document.getElementById('addsub');
        var del5 = document.getElementById('nosub1');
        var del6 = document.getElementById('addsub1');
        var del7 = document.getElementById('nosub2');
        del1.parentNode.removeChild(del1);
        del2.parentNode.removeChild(del2);
        del3.parentNode.removeChild(del3);
        del4.parentNode.removeChild(del4);
        del5.parentNode.removeChild(del5);
        del6.parentNode.removeChild(del6);
        del7.parentNode.removeChild(del7);
        subbool = false;
    }
}

function profileExit() {
    var no = document.getElementById('profileno');
    no.setAttribute('onclick', 'profileEnter();');
    var yes = document.getElementById('profileyes');
    yes.removeAttribute('onclick');
    var div = document.getElementById('noprofilediv');
    div.parentNode.removeChild(div);
    var change = document.getElementById('change');
    change.innerText = 'Are you subscribed?';
    var idno = document.getElementById('yessub');
    idno.setAttribute('onclick', 'addSubOption();');
    var idno1 = document.getElementById('yessub1');
    idno1.innerText = 'No';
    var idyes1 = document.getElementById('nosub1');
    idyes1.innerText = 'Yes';
    var idyes = document.getElementById('nosub');
    idyes.checked = true;

    
    var button = document.getElementById('replace');
    button.parentNode.removeChild(button);
    var buttonnew = document.createElement('button');
    buttonnew.setAttribute('id', 'replace');
    buttonnew.innerText = 'Place Order';
    form.appendChild(buttonnew);

    answer += 5 - profno;
    profno = 0;
    var progress = answer/question*100;
    var perc = document.getElementById('cont');
    perc.setAttribute('data-pct', Math.round(progress));
    var pro = document.getElementById('bar'); 
    pro.style.strokeDashoffset = 566 - progress/100*566;
    if (progress == 100) {
        var progdiv = document.getElementById('progress');
        var h4 = document.createElement('h4');
        h4.innerText = 'Congrats! All ready to order!';
        h4.style.color = 'black';
        progdiv.appendChild(h4);
    }
    else if (hundo == true) {
        var h4 = document.getElementById('h4hundo');
        h4.parentNode.removeChild(h4);
    }
}
function addSubOption() {
    var parentdiv = document.createElement('div');
    parentdiv.setAttribute('id', 'parentdiv');
    var divadd = document.createElement('div');
    divadd.setAttribute('class', 'boxblocks');
    divadd.setAttribute('id', 'boxblocks1');
    var divadd1 = document.createElement('div');
    divadd1.setAttribute('class', 'boxblocks');
    divadd.setAttribute('id', 'boxblocks2');
    var addsub = document.createElement('input');
    addsub.setAttribute('id', 'addsub');
    addsub.setAttribute('name', 'sub');
    addsub.setAttribute('type', 'radio');
    addsub.checked = true;
    var nosub = document.createElement('input');
    nosub.setAttribute('id', 'nosub1');
    nosub.setAttribute('name', 'sub');
    nosub.setAttribute('type', 'radio');
    var addsub1 = document.createElement('label');
    addsub1.setAttribute('id', 'addsub1');
    var nosub1 = document.createElement('label');
    nosub1.setAttribute('id', 'nosub2');
    addsub1.innerText = 'I would like\nto subscribe!\n(10% off!)';
    nosub1.innerText = 'I would just\nlike to order 1\ntime';
    divadd.appendChild(addsub);
    divadd.appendChild(addsub1);
    divadd1.appendChild(nosub);
    divadd1.appendChild(nosub1);
    parentdiv.appendChild(divadd);
    parentdiv.appendChild(divadd1);
    var form = document.getElementById('form');
    form.appendChild(parentdiv);
    var idno = document.getElementById('yessub');
    idno.removeAttribute('onclick');
    var idyes = document.getElementById('nosub');
    idyes.setAttribute('onclick', 'removeSubOption();');

    var button = document.getElementById('replace');
    button.parentNode.removeChild(button);
    var buttonnew = document.createElement('button');
    buttonnew.setAttribute('id', 'replace');
    buttonnew.innerText = 'Place Order';
    form.appendChild(buttonnew);
    subbool = true;
}
function removeSubOption() {
    var del1 = document.getElementById('parentdiv');
    var del2 = document.getElementById('boxblocks1');
    var del3 = document.getElementById('boxblocks2');
    var del4 = document.getElementById('addsub');
    var del5 = document.getElementById('nosub1');
    var del6 = document.getElementById('addsub1');
    var del7 = document.getElementById('nosub2');
    del1.parentNode.removeChild(del1);
    del2.parentNode.removeChild(del2);
    del3.parentNode.removeChild(del3);
    del4.parentNode.removeChild(del4);
    del5.parentNode.removeChild(del5);
    del6.parentNode.removeChild(del6);
    del7.parentNode.removeChild(del7);
    var idno = document.getElementById('yessub');
    idno.addAttribute('onclick', 'addSubOption();');
    subbool = false;
}

function personal() {
    var deleteme = document.getElementById('noprofilediv2');
    deleteme.parentNode.removeChild(deleteme);
    var addfun = document.getElementById('yescont');
    addfun.setAttribute('onclick', 'addprofilediv();');

    answer += 5 - profno;
    profno = 5;
    var progress = answer/question*100;
    var perc = document.getElementById('cont');
    perc.setAttribute('data-pct', Math.round(progress));
    var pro = document.getElementById('bar'); 
    pro.style.strokeDashoffset = 566 - progress/100*566;
    if (progress == 100) {
        var progdiv = document.getElementById('progress');
        var h4 = document.createElement('h4');
        h4.innerText = 'Congrats! All ready to order!';
        h4.style.color = 'black';
        progdiv.appendChild(h4);
    }
    else if (hundo == true) {
        var h4 = document.getElementById('h4hundo');
        h4.parentNode.removeChild(h4);
    }
}
function addprofilediv() {
    var add = document.getElementById('noprofilediv');
    add.innerHTML += '<div id="noprofilediv2"><br><br><br><br><div id="deleteme"><h5>What Gender we you biologically at birth?</h5><div class="boxblocks1"><input type="radio" name="gender" id="male" onclick="calc(1);"><label for="male">Male</label></div><div class="boxblocks1"><input type="radio" name="gender" id="female" onclick="calc(1);"><label for="female">Female</label></div><br><br><br><h5>How strenous is your daily life? (Includes working out)</h5><div class="boxblocks1"><input type="range" id="strenous" onclick="calc(2);"><label for="strenous">Left is relaxed, Right is extreme</label></div><br><br><br><br><div class="boxblocks1"><input type="number" id="weight" min="50" max="500" onclick="calc(3);"><label for="weight">What is your weight?</label></div><br><br><br><h5>Are you trying to lose weight, gain weight, or stay the same?</h5><div class="boxblocks1"><input type="radio" id="gainweight" name="weight" onclick="calc(4);"><label for="gainweight">Gain Weight</label></div><div class="boxblocks1"><input type="radio" id="mainweight" name="weight" onclick="calc(4);"><label for="mainweight">Maintain Weight</label></div><div class="boxblocks1"><input type="radio" id="loseweight" name="weight" onclick="calc(4);"><label for="loseweight">Lose Weight</label></div><br><br><br><div class="boxblocks1"><input type="number" id="age" min="10" max="110" onclick="calc(5);"><label for="age">What is your age?</label></div><br><br><br><textarea placeholder="Any allergies or dietary restrictions? If so, write them here. If not, leave this completely blank" cols="30" rows="5"></textarea></div>';
    var addfun = document.getElementById('yescont');
    addfun.removeAttribute('onclick');
    
    answer -= 5;
    profno = 0;
    var progress = answer/question*100;
    var perc = document.getElementById('cont');
    perc.setAttribute('data-pct', Math.round(progress));
    var pro = document.getElementById('bar'); 
    pro.style.strokeDashoffset = 566 - progress/100*566;
    if (progress == 100) {
        var progdiv = document.getElementById('progress');
        var h4 = document.createElement('h4');
        h4.innerText = 'Congrats! All ready to order!';
        h4.style.color = 'black';
        progdiv.appendChild(h4);
    }
    else if (hundo == true) {
        var h4 = document.getElementById('h4hundo');
        h4.parentNode.removeChild(h4);
    }
}


///////////////////////////////
//This isn't switching properly
///////////////////////////////
function nosub1() {
    if (document.getElementById('noship').checked == true) {
        var deleteme = document.getElementById('numship');
        deleteme.parentNode.removeChild(deleteme);
        var label = document.getElementById('numshiplabel');
        label.style.color = 'rgba(0, 0, 0, 0.438)';
        
        if (ship == false) {
            answer += 1;
            var progress = answer/question*100;
            var perc = document.getElementById('cont');
            perc.setAttribute('data-pct', Math.round(progress));
            var pro = document.getElementById('bar'); 
            pro.style.strokeDashoffset = 566 - progress/100*566;
            if (progress == 100) {
                var progdiv = document.getElementById('progress');
                var h4 = document.createElement('h4');
                h4.innerText = 'Congrats! All ready to order!';
                h4.style.color = 'black';
                progdiv.appendChild(h4);
            }
            else if (hundo == true) {
                var h4 = document.getElementById('h4hundo');
                h4.parentNode.removeChild(h4);
            }
        }
    }
     if (document.getElementById('noship').checked == false) {
        var addme = document.createElement('input');
        addme.setAttribute('type', 'number');
        addme.setAttribute('id', 'numship');
        addme.setAttribute('value', 'Shipping');
        addme.setAttribute('min', '1');
        addme.setAttribute('max', '10');
        addme.setAttribute('step', '1');
        var label = document.getElementById('numshiplabel');
        label.style.color = 'black';
        var addback = document.getElementById('addback');
        addback.appendChild(addme);
        addback.insertBefore(addme, addback.childNodes[0]);
        
        answer -= 1;
        var progress = answer/question*100;
        var perc = document.getElementById('cont');
        perc.setAttribute('data-pct', Math.round(progress));
        var pro = document.getElementById('bar'); 
        pro.style.strokeDashoffset = 566 - progress/100*566;
        if (progress == 100) {
            var progdiv = document.getElementById('progress');
            var h4 = document.createElement('h4');
            h4.innerText = 'Congrats! All ready to order!';
            h4.style.color = 'black';
            progdiv.appendChild(h4);
        }
        else if (hundo == true) {
            var h4 = document.getElementById('h4hundo');
            h4.parentNode.removeChild(h4);
        }
        ship = false;
    }
}