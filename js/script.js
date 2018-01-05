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


function sendEmail() {
        var email = "mj.design@outlook.dk";
        var emne = "Questions about portfolio";
        var navn = document.getElementById("inputname").value;
        var emailAdresse = document.getElementById("inputemail").value;
        var phone = document.getElementById("inputphone").value;
    	var subject = document.getElementById("subject").value;
    	var textToDesigner = document.getElementById("textToDesigner").value;




        var box = document.kontaktFormular.length;

        for (var i = 0; i < box; i++) {
        	if(document.kontaktFormular[i]){
				email = email + navn + emailAdresse + phone + subject + textToDesigner;
                email += ";";
        	}

        }


        window.location = "mailto:" + email + "&subject=" + emne + "&body=" + "Navn: " + navn + ", email: " + emailAdresse + ", phone: " + phone + ", subject: " + subject + ", details: " + textToDesigner;
    }
