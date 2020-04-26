var account = 'JulianBeltz';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function tryme() {
    var int26 = getRandomInt(25);
    var int261 = getRandomInt(25);
    var int262 = getRandomInt(25);
    var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var intname = getRandomInt(account.length);
    var intname1 = getRandomInt(account.length);
    var intname2 = getRandomInt(account.length);
    if (intname == intname1) {
        if (intname1 > 0 && intname1 != intname2 - 1) {
            intname1 += 1;
        }
        else if (intname1 = 0 && intname1 != intname2 + 1) {
            intname1 += 1;
        }
        else {
            intname1 += 2;
        }
    }
    if (intname1 == intname2) {
        if (intname1 > 0 && intname1 != intname - 1) {
            intname1 += 1;
        }
        else if (intname1 = 0 && intname1 != intname + 1) {
            intname1 += 1;
        }
        else {
            intname1 += 2;
        }

    }
    if (intname == intname2) {
        if (intname > 0 && intname != intname1 - 1) {
            intname += 1;
        }
        else if (intname = 0 && intname != intname1 + 1) {
            intname += 1;
        }
        else {
            intname += 2;
        }

    }
    account = setCharAt(account,intname,abc[int26]);
    account = setCharAt(account,intname1,abc[int261]);
    account = setCharAt(account,intname2,abc[int262]);
    account += abc[intname] + intname2 + abc[intname1];
    document.getElementById('account').innerText = account;
    account = 'JulianBeltz';
}