
// jQuery(document).ready(function($) { //wordpress wrapping function
$(document).ready(function(){
    var InstagramClasses = [
                                '_1977', 
                                'aden', 
                                'brooklyn', 
                                'clarendon', 
                                'earlybird', 
                                'gingham', 
                                'hudson', 
                                'inkwell', 
                                'lark', 
                                'lofi', 
                                'mayfair', 
                                'moon', 
                                'nashville', 
                                'perpetua', 
                                'reyes', 
                                'rise', 
                                'slumber', 
                                'toaster', 
                                'walden', 
                                'willow', 
                                'xpro2' 
                            ];

    $('figure').each(function(){
        $(this).addClass(InstagramClasses[~~(Math.random()*InstagramClasses.length)]);
    });

    $('figure').hover(function(){
        $('figure').removeClass(InstagramClasses); // non sono sicuro sia corretto, ancora da testare
    });

    // $('#container').hover(function(){     
    //     $('figure').addClass('moon');    
    // },     
    // function(){    
    //     $('figure').removeClass('moon');     
    // });

    // alert('test grc');

});


/*Available Classes for http://una.im/CSSgram/*/

/*
    1977: class='_1977', 
    Aden: class='aden', 
    Brooklyn: class='brooklyn', 
    Clarendon: class='clarendon', 
    Earlybird: class='earlybird', 
    Gingham: class='gingham', 
    Hudson: class='hudson', 
    Inkwell: class='inkwell', 
    Lark: class='lark', 
    Lo-Fi: class='lofi', 
    Mayfair: class='mayfair', 
    Moon: class='moon', 
    Nashville: class='nashville', 
    Perpetua: class='perpetua', 
    Reyes: class='reyes', 
    Rise: class='rise', 
    Slumber: class='slumber', 
    Toaster: class='toaster', 
    Walden: class='walden', 
    Willow: class='willow', 
    X-pro II: class='xpro2'
*/




// when document is loaded
// $(document).ready(function () {

//     // set classes
//     var classes     = new Array ('toaster', 'mayfair', 'hudson');

//     // calculate length once, as this will never change
//     var length      = classes.length;

//     // select all a-tags
//     var links       = $('figure');

//     // loop through all a-tags and apply color randomly
//     $.each( links, function(key, value) {
//         // get random value/class-name from array and add it using the addClass function
//         $(value).addClass( classes[ Math.floor ( Math.random() * length ) ] );
//     });

// });