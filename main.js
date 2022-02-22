
//Get the button
var mybutton = document.getElementById('myBtn');

//When user scrolls down 20px from the document 
window.onscroll = function() {scrollFunction()};

//scrooll function to show button after scrolling
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentelement.scrollTop > 20) {
		mybutton.style.display = 'block';
	}else {
		mybutton.style.display = 'none';
	}
}