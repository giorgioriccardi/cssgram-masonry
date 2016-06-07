$(document).ready(function(){

	// Open External links in a new window
	// just in case we forget the target in the HTML
	$("a[href^='http']").attr('target','_blank');



	// Instagram Classes

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

		// var randomClass = InstagramClasses[~~(Math.random() * InstagramClasses.length)];
		// ~~ Tilde, the forgotten JavaScript bitwise operators
		// http://rocha.la/JavaScript-bitwise-operators-in-practice

		var randomClass = InstagramClasses[Math.floor(Math.random() * InstagramClasses.length)];

			element.children('img').addClass(randomClass);

			element.children('figcaption').text('#' + randomClass);
	};

  	var clearClasses = function(element){

		element.children('img').removeClass();

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



	// get random images from an external source via php function

	var getImages = [
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/bear.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/bird.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/cat.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/cow.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/dog.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/elephant.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/fish.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/frog.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/lion.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/penguins.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/pig.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/rino.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/snake.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/squirrel.jpg',
		'http://www.griccardi.com/temp/BCIT-JS-2016/_images/turtle.jpg',
	];

	function getRandomImage() {
		return getImages[Math.floor(Math.random() * getImages.length)];
	}

	var createImage = $('<img />').attr('src', getRandomImage).prependTo('#getRandomImg');



	// get random images from an external source via php function

	function loadRandomImage() {
		$.ajax({
		    url: 'getimage.php',
		    success: function (imageUrl) {
		      $('<img />').attr('src', imageUrl).prependTo('#loadRandomImg');
		    },
		});
	}

	loadRandomImage();


}); // end .ready(function())





// get Page Load Time

//calculate the time before calling the function in window.onload
var beforeLoad = (new Date()).getTime();

function getPageLoadTime(){

        //calculate the current time in afterload
        var afterLoad = (new Date()).getTime();

        // now use the beforeload and afterload to calculate the seconds
        var seconds = (afterLoad - beforeLoad) / 1000;

        // Place the seconds in the innerHTML to show the results
        $('#load_time').text('Page load time:  ' + seconds + '"');
}

window.onload = getPageLoadTime;



/* Available Classes for http://una.im/CSSgram/ */

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
