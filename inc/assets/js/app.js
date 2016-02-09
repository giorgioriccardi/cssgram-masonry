// Let's try to write plain JS
// http://youmightnotneedjquery.com/ | http://tutorialzine.com/2014/06/10-tips-for-writing-javascript-without-jquery/ | https://plainjs.com/javascript/attributes/

var InstagramClasses = ['_1977', 'aden', 'brooklyn', 'clarendon', 'earlybird', 'gingham', 'hudson', 'inkwell', 'lark', 'lofi', 'mayfair', 
                        'moon', 'nashville', 'perpetua', 'reyes', 'rise', 'slumber', 'toaster', 'walden', 'willow', 'xpro2'];

var addRandomClass;

var clearClasses;

function assignRandomClass () {

    // let's take a single class from the array and output it randomly
    var randomClass = InstagramClasses[~~(Math.random()*InstagramClasses.length)]; // works
    // ~~ Tilde, the forgotten JavaScript bitwise operators

    // assign all classes in the array to the first <img>
    document.getElementsByTagName('img')[0].classList.add(randomClass); // just for debugging

}

window.onload =  function() {
    assignRandomClass();
};