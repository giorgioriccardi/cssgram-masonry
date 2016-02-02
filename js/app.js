
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

	var addRandomClass = function(element){
		
        var randomClass = InstagramClasses[~~(Math.random()*InstagramClasses.length)];
        // ~~ Tilde, the forgotten JavaScript bitwise operators
        // http://rocha.la/JavaScript-bitwise-operators-in-practice
        
        element.children('img').addClass(randomClass);
		element.children('figcaption').text('#' + randomClass);
	};
	
	var clearClasses = function(element){
		// absolutely not efficient, every time the loop is executed on all classes. 
		// If you are sure that the img has only the classes from InstagramClasses added dynamically, 
		// then you can use $(this).removeClass(); without param (and you can remove the each loop)
		$.each(InstagramClasses, function( index, value ) { 
			element.children('img').removeClass(value); 
		});

		element.children('figcaption').html('<i style="color: #fff">Ready for the next one?</i>');
	};

    $('figure').each(function(){
		addRandomClass($(this));
    });

    $('figure').hover(
		function(){
            clearClasses($(this));
        },  // function when mouse enter
		function(){
            addRandomClass($(this));
        } // function when mouse exit
    );
	

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