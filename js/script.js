$(document).ready(function() {
	main(); /* Run the main function when document is ready */
});

var width=32; /*Variable to store the pixel value given by user*/

/* Function to dynamically create HTML content */
function fillDoc() {
	$('body').empty();	//Clear the body of any code to avoid duplication
	$('body').append('<div id="wrapper"></div>');
	$('#wrapper').append('<div id="header"></div>');
	$('#wrapper').append('<div id="whiteboard"></div>');
	$('#wrapper').append('<div id="footer"></div>');
	$('#header').append('Sketchpad');
	$('#footer').append('<button id="clear">Clear</button>');
	$('#footer').append('<input type="number" id="width"></input>');
	$('#footer').append('<button id="setWidth">Set Width</button>');
}

/* Function to create the pixels in whiteboard */
function fillPixel(width) {
	var i;

	for(i=0;i<(width*width);i++)
		$('#whiteboard').append('<div class="pixel white"></div>'); /* Adding pixel divs*/

	//Finding pixel size and adding css to class pixel so that it remains within the whiteboard
	var pixelSize = ($('#whiteboard').width()) / width;
	$('.pixel').css({
		'height':pixelSize,
		'width':pixelSize
	});
}

//Function to draw on the whiteboard
function draw() {
	//On mouseover change color
	$('.pixel').on('mouseover',function() {
			$(this).removeClass('white');
			$(this).addClass('black');
	});
}

//Function to clear whiteboard on clicking clear button
function clear() {
	$('#clear').on('click',function() {
		$('.pixel').removeClass('black');
		$('.pixel').addClass('white');
	});
}

//Function to dynaically set width of whiteboard as per user. Initially it is 32
function setWidth() {
	$('#setWidth').on('click',function() {
		//Function works only when user enters width between 10 and 80
		if( $('#width').val() > 9 && $('#width').val() < 81) {
			width=$('#width').val();
			fillDoc();
			fillPixel(width);
			main();
		}
		else{
			alert("Please enter width between 10 and 80");
		}
	});
}

//Main function to run code
function main() {
	fillDoc();	//Fill HTML
	fillPixel(width);	//Make pixels
	draw();		//Draw on whiteboard
	clear();	//Clear
	setWidth();	//Change width
}
