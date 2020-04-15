function scroll() {
    // Get the navbar
    var navbarsticky = document.getElementById("navbar");
    var sidebar = document.getElementById("sidebar");
    var profilebar = document.getElementById("forum-div");
    // Get the offset position of the navbar
    var sticky = navbarsticky.offsetHeight;
    //var sticky1 = profilebar.innerHeight + profilebar.scrollY;
    if (window.pageYOffset >= sticky) {
        sidebar.classList.add("sticky");
    }
    ////Trying to make it so that when it scrolls to the bottom that the sidebar stops above the profile ending
    // Line 23 for profile bar CSS
    // Line 47 for Stickyend
    //else if (window.pageYOffset >= sticky1) {
    //    sidebar.classList.remove("sticky");
    //    sidebar.classList.add("stickyend");
    //}
    else if (window.pageYOffset < sticky) {
        sidebar.classList.remove("sticky");
    }
}


//The following displays each option's extended info from the nav bar
var buybool = false;
var infobool = false;
var dealsbool = false;
var forumbool = false;
var profilebool = false;
var cartbool = false;

function buy() {
    buybool = true;
    if (infobool == true) {
        if1 = document.getElementById('Navinfo1');
        if2 = document.getElementById('Navinfo2');
        if3 = document.getElementById('Navinfo3');
        if1.parentNode.removeChild(if1);
        if2.parentNode.removeChild(if2);
        if3.parentNode.removeChild(if3);
        infobool = false;
    }
    else if (dealsbool == true) {
        if1 = document.getElementById('Navdeals1');
        if2 = document.getElementById('Navdeals2');
        if3 = document.getElementById('Navdeals3');
        if4= document.getElementById('Navdeals4');
        if1.parentNode.removeChild(if1);
        if2.parentNode.removeChild(if2);
        if3.parentNode.removeChild(if3);
        if4.parentNode.removeChild(if4);
        dealsbool = false;
    }
    else if (forumbool == true) {
        if1 = document.getElementById('Navforum1');
        if2 = document.getElementById('Navforum2');
        if3 = document.getElementById('Navforum3');
        if1.parentNode.removeChild(if1);
        if2.parentNode.removeChild(if2);
        if3.parentNode.removeChild(if3);
        forumbool = false;
    }
    else if (profilebool == true) {
        if1 = document.getElementById('Navprofile1');
        if2 = document.getElementById('Navprofile2');
        if3 = document.getElementById('Navprofile3');
        if1.parentNode.removeChild(if1);
        if2.parentNode.removeChild(if2);
        if3.parentNode.removeChild(if3);
        profilebool = false;
    }
    else if (cartbool == true) {
        if1= document.getElementById('Navcart1');
        if1.parentNode.removeChild(if1);
        cartbool = false;
    }
    else {
        var original = document.getElementById('h1');
        //delete h1
        original.parentNode.removeChild(original);
    }
    //exit('buy');
    var holder = document.getElementById('holder');
    //display:grid
    holder.style.display='grid';
    //gridtemplate: 5fr
    holder.style.displayTemplate='1fr 1fr 1fr 1fr 1fr';
    //create 5 children, give them text, id's, and links, and place them at the right places
    var child1 = document.createElement('a');
    var childText1 = document.createTextNode('Buy Mixing Powder!');
    child1.setAttribute('id', 'Navbuy1');
    child1.setAttribute('href', 'buy/buy1.html');
    child1.setAttribute('class', 'black');
    child1.appendChild(childText1);
    holder.appendChild(child1);
    var child2 = document.createElement('a');
    var childText2 = document.createTextNode('Buy Ready-To-Drink!');
    child2.setAttribute('id', 'Navbuy2');
    child2.setAttribute('href', 'buy/buy2.html');
    child2.setAttribute('class', 'black');
    child2.appendChild(childText2);
    holder.appendChild(child2);
    var child3 = document.createElement('a');
    var childText3 = document.createTextNode('Buy Power Bars!');
    child3.setAttribute('id', 'Navbuy3');
    child3.setAttribute('href', 'buy/buy3.html');
    child3.setAttribute('class', 'black');
    child3.appendChild(childText3);
    holder.appendChild(child3);
    var child4 = document.createElement('a');
    var childText4 = document.createTextNode('Browse Our Other Products!');
    child4.setAttribute('id', 'Navbuy4');
    child4.setAttribute('href', 'buy/buy4.html');
    child4.setAttribute('class', 'black');
    child4.appendChild(childText4);
    holder.appendChild(child4);
    var child5 = document.createElement('a');
    var childText5 = document.createTextNode('Buy Merchandise!');
    child5.setAttribute('id', 'Navbuy5');
    child5.setAttribute('href', 'buy/buy5.html');
    child5.setAttribute('class', 'black');
    child5.appendChild(childText5);
    holder.appendChild(child5);
}
 
function info(){
    infobool = true;
    if (buybool == true) {
        if1 = document.getElementById('Navbuy1');
        if2 = document.getElementById('Navbuy2');
        if3 = document.getElementById('Navbuy3');
        if4 = document.getElementById('Navbuy4');
        if5 = document.getElementById('Navbuy5');
        if1.parentNode.removeChild(if1);
        if2.parentNode.removeChild(if2);
        if3.parentNode.removeChild(if3);
        if4.parentNode.removeChild(if4);
        if5.parentNode.removeChild(if5);
        buybool = false;
    }
    else if (dealsbool == true) {
        if1 = document.getElementById('Navdeals1');
        if2 = document.getElementById('Navdeals2');
        if3 = document.getElementById('Navdeals3');
        if4 = document.getElementById('Navdeals4');
        if1.parentNode.removeChild(if1);
        if1.parentNode.removeChild(if2);
        if2.parentNode.removeChild(if3);
        if3.parentNode.removeChild(if4);
        dealsbool = false;
    }
    else if (forumbool == true) {
        document.getElementById('Navforum1');
        document.getElementById('Navforum2');
        document.getElementById('Navforum3');
        if1.parentNode.removeChild(if1);
        if2.parentNode.removeChild(if2);
        if3.parentNode.removeChild(if3);
        forumbool = false;
    }
    else if (profilebool == true) {
        if1 = document.getElementById('Navprofile1');
        if2 = document.getElementById('Navprofile2');
        if3 = document.getElementById('Navprofile3');
        if1.parentNode.removeChild(if1);
        if2.parentNode.removeChild(if2);
        if3.parentNode.removeChild(if3);
        profilebool = false;
    }
    else if (cartbool == true) {
        if1= document.getElementById('Navcart1');
        if1.parentNode.removeChild(if1);
        cartbool = false;
    }
    else {
        var original = document.getElementById('h1');
        //delete h1
        original.parentNode.removeChild(original);
    }
    var holder = document.getElementById('holder');
    //display:grid
    holdrer.style.display='grid';
    //gridtemplate: 5fr
    holder.style.displayTemplate='1fr 1fr 1fr';
    //create 5 children, give them text, id's, and links, and place them at the right places
    var child1 = document.createElement('a');
    var childText1 = document.createTextNode('Learn the Science!');
    child1.setAttribute('id', 'Navinfo1');
    child1.setAttribute('href', 'info/info1.html');
    child1.setAttribute('class', 'black');
    child1.appendChild(childText1);
    holder.appendChild(child1);
    var child2 = document.createElement('a');
    var childText2 = document.createTextNode('Learn the Ingredients!');
    child2.setAttribute('id', 'Navinfo2');
    child2.setAttribute('href', 'info/info2.html');
    child2.setAttribute('class', 'black');
    child2.appendChild(childText2);
    holder.appendChild(child2);
    var child3 = document.createElement('a');
    var childText3 = document.createTextNode('Find out more about our Team!');
    child3.setAttribute('id', 'Navinfo3');
    child3.setAttribute('href', 'info/info3.html');
    child3.setAttribute('class', 'black');
    child3.appendChild(childText3);
    holder.appendChild(child3);
}
function deals(){
    var holder = document.getElementById('holder');
    //delete h1
    var original = document.getElementById('h1');
    if (buybool == true) {
        if1 = document.getElementById('Navbuy1');
        if2 = document.getElementById('Navbuy2');
        if3 = document.getElementById('Navbuy3');
        if1.parentNode.removeChild(if1);
        if2.parentNode.removeChild(if2);
        if3.parentNode.removeChild(if3);
        buybool = false;
    }
    else if (infobool == true) {
        if1 = document.getElementById('Navinfo1');
        if2 = document.getElementById('Navinfo2');
        if3 = document.getElementById('Navinfo3');
        if1.parentNode.removeChild(if1);
        if1.parentNode.removeChild(if2);
        if2.parentNode.removeChild(if3);
        infobool = false;
    }
    else if (forumbool == true) {
        document.getElementById('Navforum1');
        document.getElementById('Navforum2');
        document.getElementById('Navforum3');
        if1.parentNode.removeChild(if1);
        if2.parentNode.removeChild(if2);
        if3.parentNode.removeChild(if3);
        forumbool = false;
    }
    else if (profilebool == true) {
        if1 = document.getElementById('Navprofile1');
        if2 = document.getElementById('Navprofile2');
        if3 = document.getElementById('Navprofile3');
        if1.parentNode.removeChild(if1);
        if2.parentNode.removeChild(if2);
        if3.parentNode.removeChild(if3);
        profilebool = false;
    }
    else if (cartbool == true) {
        if1= document.getElementById('Navcart1');
        if1.parentNode.removeChild(if1);
        cartbool = false;
    }
    else {
        //delete h1
        original.parentNode.removeChild(original);
    }
    original.parentNode.removeChild(original);
    //display:grid
    document.getElementById('holder').style.display='grid';
    //gridtemplate: 5fr
    document.getElementById('holder').style.displayTemplate='1fr 1fr 1fr 1fr';
    //create 5 children, give them text, id's, and links, and place them at the right places
    var child1 = document.createElement('a');
    var childText1 = document.createTextNode('deals Mixing Powder!');
    child1.setAttribute('id', 'Navdeals1');
    child1.setAttribute('href', 'deals/deals1.html');
    child1.setAttribute('class', 'black');
    child1.appendChild(childText1);
    holder.appendChild(child1);
    var child2 = document.createElement('a');
    var childText2 = document.createTextNode('deals Ready-To-Drink!');
    child2.setAttribute('id', 'Navdeals2');
    child2.setAttribute('href', 'deals/deals2.html');
    child2.setAttribute('class', 'black');
    child2.appendChild(childText2);
    holder.appendChild(child2);
    var child3 = document.createElement('a');
    var childText3 = document.createTextNode('deals Power Bars!');
    child3.setAttribute('id', 'Navdeals3');
    child3.setAttribute('href', 'deals/deals3.html');
    child3.setAttribute('class', 'black');
    child3.appendChild(childText3);
    holder.appendChild(child3);
    var child4 = document.createElement('a');
    var childText4 = document.createTextNode('Browse Our Other Products!');
    child4.setAttribute('id', 'Navdeals4');
    child4.setAttribute('href', 'deals/deals4.html');
    child4.setAttribute('class', 'black');
    child4.appendChild(childText4);
    holder.appendChild(child4);
}
function forum(){
    var holder = document.getElementById('holder');
    //delete h1
    var original = document.getElementById('h1');
    original.parentNode.removeChild(original);
    //display:grid
    document.getElementById('holder').style.display='grid';
    //gridtemplate: 5fr
    document.getElementById('holder').style.displayTemplate='1fr 1fr 1fr';
    //create 5 children, give them text, id's, and links, and place them at the right places
    var child1 = document.createElement('a');
    var childText1 = document.createTextNode('forum Mixing Powder!');
    child1.setAttribute('id', 'Navforum1');
    child1.setAttribute('href', 'forum/forum1.html');
    child1.setAttribute('class', 'black');
    child1.appendChild(childText1);
    holder.appendChild(child1);
    var child2 = document.createElement('a');
    var childText2 = document.createTextNode('forum Ready-To-Drink!');
    child2.setAttribute('id', 'Navforum2');
    child2.setAttribute('href', 'forum/forum2.html');
    child2.setAttribute('class', 'black');
    child2.appendChild(childText2);
    holder.appendChild(child2);
    var child3 = document.createElement('a');
    var childText3 = document.createTextNode('forum Power Bars!');
    child3.setAttribute('id', 'Navforum3');
    child3.setAttribute('href', 'forum/forum3.html');
    child3.setAttribute('class', 'black');
    child3.appendChild(childText3);
    holder.appendChild(child3);
}
function profile(){
    var holder = document.getElementById('holder');
    //delete h1
    var original = document.getElementById('h1');
    original.parentNode.removeChild(original);
    //display:grid
    document.getElementById('holder').style.display='grid';
    //gridtemplate: 5fr
    document.getElementById('holder').style.displayTemplate='1fr 1fr 1fr';
    //create 5 children, give them text, id's, and links, and place them at the right places
    var child1 = document.createElement('a');
    var childText1 = document.createTextNode('profile Mixing Powder!');
    child1.setAttribute('id', 'Navprofile1');
    child1.setAttribute('href', 'profile/profile1.html');
    child1.setAttribute('class', 'black');
    child1.appendChild(childText1);
    holder.appendChild(child1);
    var child2 = document.createElement('a');
    var childText2 = document.createTextNode('profile Ready-To-Drink!');
    child2.setAttribute('id', 'Navprofile2');
    child2.setAttribute('href', 'profile/profile2.html');
    child2.setAttribute('class', 'black');
    child2.appendChild(childText2);
    holder.appendChild(child2);
    var child3 = document.createElement('a');
    var childText3 = document.createTextNode('profile Power Bars!');
    child3.setAttribute('id', 'Navprofile3');
    child3.setAttribute('href', 'profile/profile3.html');
    child3.setAttribute('class', 'black');
    child3.appendChild(childText3);
    holder.appendChild(child3);
}
function cart(){
    var holder = document.getElementById('holder');
    //delete h1
    var original = document.getElementById('h1');
    original.parentNode.removeChild(original);
    //display:grid
    document.getElementById('holder').style.display='grid';
    //gridtemplate: 5fr
    document.getElementById('holder').style.displayTemplate='1fr';
    //create 5 children, give them text, id's, and links, and place them at the right places
    var child1 = document.createElement('a');
    var childText1 = document.createTextNode('cart Mixing Powder!');
    child1.setAttribute('id', 'Navcart1');
    child1.setAttribute('href', 'cart/cart1.html');
    child1.setAttribute('class', 'black');
    child1.appendChild(childText1);
    holder.appendChild(child1);
}

//function exit(currentTab) {
    //erases any holderX children
//    document.getElementsByClassName('black').delete();
    //puts back h1 element
//    var child1 = document.createElement('h1');
//    var childText1 = document.createTextNode('Welcome to Surreal');
//   child1.setAttribute('id', 'h1');
//    child1.appendChild(childText1);
//    holder.appendChild(child1);
//    //remove display:grid
//}

