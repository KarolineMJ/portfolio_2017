let scrollPos = window.scrollY;

let navBar = document.getElementById('navBar');
// selects the element by Id

function addClassOnScroll(){
	navBar.classList.add("scrolled");
}

function removeClassOnScroll(){
	navBar.classList.remove("scrolled");
}


window.addEventListener('scroll', function(){
	scrollPos = window.scrollY;

	if(scrollPos > 60){
		addClassOnScroll();
	}
	else{
		removeClassOnScroll();
	}
	console.log(scrollpos);

});

function load(){
	window.open("welcome.html", "_self");
}
