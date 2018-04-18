let scrollPos = window.scrollY;

let navBar = document.getElementById('navBar');
// selects the element by Id

let myVar;

function loaderThreeSec(){
    myVar = setTimeout(showPage, 7000);
}

function showPage(){
    document.querySelector("#section10").style.display="block";
}

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
        document.querySelector("#section10").style.display="none";
	}
	else{
		removeClassOnScroll();
        document.querySelector("#section10").style.display="block";
	}
	console.log(scrollpos);

});

function load(){
	window.open("welcome.html", "_self");
}

let layerOne = document.getElementById('parallax');

layerOne.addEventListener('click', makeItSaturated);

function makeItSaturated(){
    layerOne.classList.toggle('saturated')
}

