
// Javascript for the Local Time clock on each cities page, taken from: https://www.javascriptfreecode.com/32.htm coded by: Kerixa Inc.



		/**********
		
			Clock for Pacific (PST)
			
		*/


// variables (global)
var timerID = null;
var timerRunning = false;


// function to stop the clock (if it is running) and then sets the timeRunning variable to false to show the clock is stopped
function stopclockPST(){ 
	if(timerRunning)
	clearTimeout(timerID);
	timerRunning = false;
} // end stopclockPST


/* function to get the current time (in each timezone, by using getUTCHours...and so on) 
	(in hours, minutes and seconds) and then display it (on a 12-hour clock) */
function showtimePST(){
	var now = new Date();
	var hours = (now.getUTCHours());   
	
		if (hours <= 12) {			// change for specific timezone
			hours = (hours+5);
		}
			else { 
				hours = (hours-7);
			}
		
	var minutes = now.getUTCMinutes();
	var seconds = now.getUTCSeconds()

	var timeValue = "" + ((hours >12) ? hours -12:hours) 
	timeValue += ((minutes < 10) ? ":0" : ":") + minutes
	timeValue += ((seconds < 10) ? ":0" : ":") + seconds
	timeValue += ( (now.getUTCHours() >= 0 && now.getUTCHours() <= 6) 
		|| (now.getUTCHours() >= 19) )  ? " PM" : " AM"
		
	document.clock.face.value = timeValue;

	timerID = setTimeout("showtimePST()",1000);
	timerRunning = true;
} // end showtimePST


// function that ensures the clock is stopped and then starts it again
function startclockPST(){
	stopclockPST();
	showtimePST();
	timerID = null;
	timerRunning = false;
} // end startclockPST



		/**********
		
			Clock for Mountain (MST)
			
		*/


function stopclockMST (){
	if(timerRunning)
	clearTimeout(timerID);
	timerRunning = false;
}

function showtimeMST (){
	var now = new Date();
	var hours = (now.getUTCHours());	
	
		if (hours <= 12) {			// change for specific timezone
			hours = (hours+6);
		}
			else { 
				hours = (hours-6);
			}
		
	var minutes = (now.getUTCMinutes());  
	var seconds = now.getUTCSeconds()

	var timeValue = "" + ((hours >12) ? hours -12:hours)
	timeValue += ((minutes < 10) ? ":0" : ":") + minutes
	timeValue += ((seconds < 10) ? ":0" : ":") + seconds
	timeValue += ( (now.getUTCHours() >= 0 && now.getUTCHours() <= 5) 
		|| (now.getUTCHours() >= 18) )  ? " PM" : " AM" 
		
	document.clock.face.value = timeValue;

	timerID = setTimeout("showtimeMST()",1000);
	timerRunning = true;
}

function startclockMST (){
	stopclockMST();
	showtimeMST();
	timerID = null;
	timerRunning = false;
}



		/**********
		
			Clock for Central (CST)
			
		*/


function stopclockCST (){
	if(timerRunning)
	clearTimeout(timerID);
	timerRunning = false;
}

function showtimeCST (){
	var now = new Date();
	var hours = (now.getUTCHours());	  
	
		if (hours <= 12) {			// change for specific timezone
			hours = (hours+7);
		}
			else { 
				hours = (hours-5);
			}
		
	var minutes = (now.getUTCMinutes());  
	var seconds = now.getUTCSeconds()

	var timeValue = "" + ((hours >12) ? hours -12:hours)   
	timeValue += ((minutes < 10) ? ":0" : ":") + minutes
	timeValue += ((seconds < 10) ? ":0" : ":") + seconds
	timeValue += ( (now.getUTCHours() >= 0 && now.getUTCHours() <= 4) 
		|| (now.getUTCHours() >= 17) )  ? " PM" : " AM" 
	
	document.clock.face.value = timeValue;

	timerID = setTimeout("showtimeCST()",1000);
	timerRunning = true;
}

function startclockCST (){
	stopclockCST();
	showtimeCST();
	timerID = null;
	timerRunning = false;
}



		/**********
		
			Clock for Eastern (EST)
			
		*/


function stopclockEST (){
	if(timerRunning)
	clearTimeout(timerID);
	timerRunning = false;
}

function showtimeEST (){
	var now = new Date();
	var hours = now.getUTCHours();			
	
		if (hours <= 12) {					// change for specific timezone
			hours = (hours+8);
		}
			else { 
				hours = (hours-4);
			}
	
	var minutes = now.getUTCMinutes();  
	var seconds = now.getUTCSeconds()
	
	
	var timeValue = "" + ((hours >12) ? hours -12:hours)   
	timeValue += ((minutes < 10) ? ":0" : ":") + minutes
	timeValue += ((seconds < 10) ? ":0" : ":") + seconds
	timeValue += ( (now.getUTCHours() >= 0 && now.getUTCHours() <= 3) 
		|| (now.getUTCHours() >= 16) )  ? " PM" : " AM"   
	
	 
	document.clock.face.value = timeValue;

	timerID = setTimeout("showtimeEST()",1000);
	timerRunning = true;
}

function startclockEST (){
	stopclockEST();
	showtimeEST();
	timerID = null;
	timerRunning = false;
}



		/**********
		
			Clock for Atlantic (AST)
			
		*/


function stopclockAST (){
	if(timerRunning)
	clearTimeout(timerID);
	timerRunning = false;
}

function showtimeAST (){
	var now = new Date();
	var hours = (now.getUTCHours());	
	
		if (hours <= 12) {					// change for specific timezone
			hours = (hours+9);
		}
			else { 
				hours = (hours-3);
			}
		
	var minutes = (now.getUTCMinutes());  
	var seconds = now.getUTCSeconds()

	var timeValue = "" + ((hours >12) ? hours -12:hours)
	timeValue += ((minutes < 10) ? ":0" : ":") + minutes
	timeValue += ((seconds < 10) ? ":0" : ":") + seconds
	timeValue += ( (now.getUTCHours() >= 0 && now.getUTCHours() <= 2) 
		|| (now.getUTCHours() >= 15) )  ? " PM" : " AM"   
		
	document.clock.face.value = timeValue;

	timerID = setTimeout("showtimeAST()",1000);
	timerRunning = true;
}

function startclockAST (){
	stopclockAST();
	showtimeAST();
	timerID = null;
	timerRunning = false;
}



		/**********
		
			Clock for Newfoundland (NST)
			
		*/


function stopclockNST (){
	if(timerRunning)
	clearTimeout(timerID);
	timerRunning = false;
}

function showtimeNST (){
	var now = new Date();
	var hours = (now.getUTCHours());
	
		if (hours <= 12) {					// change for specific timezone
			hours = (hours+10);
		}
			else { 
				hours = (hours-2);
			}
	
	var minutes = now.getUTCMinutes();  

		if (minutes <= 30) {					// change minutes for Newfoundland only 
			minutes = (minutes+30);
		}
			else { 
				minutes = (minutes-30); 
			}
	
	var seconds = now.getUTCSeconds()

	var timeValue = "" + ((hours >12) ? hours -12:hours)
	timeValue += ((minutes < 10) ? ":0" : ":") + minutes
	timeValue += ((seconds < 10) ? ":0" : ":") + seconds
	timeValue += ( (now.getUTCHours() >= 0 && now.getUTCHours() <= 1) 
		|| (now.getUTCHours() >= 14) )  ? " PM" : " AM" 
		
	document.clock.face.value = timeValue;

	timerID = setTimeout("showtimeNST()",1000);
	timerRunning = true;
}

function startclockNST (){
	stopclockNST();
	showtimeNST();
	timerID = null;
	timerRunning = false;
}




		/**********
		
			Back To Top Bottom
			
		*/


/* show the button when the user scrolls down 30px from the top of the page */
window.onscroll = function() {scrollUpFunction()};

function scrollUpFunction(){
	
	var topButton = document.getElementById("backToTopButton"); 	/* create the button variable */
	
		if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
			topButton.style.display = "block";
		}
			else {
				topButton.style.display = "none";
			}
		}

/* return to the top of the page when the user clicks the button */
function backToTopFunction(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}




		/**********
		
			Map of Canada City Popups
			
		*/

/* function for each city popup, open the popup when user clicks the button */
function vicFunction() {
  var cityPopup = document.getElementById("vicPopup");    /* create the button (popup) variable */
  cityPopup.classList.toggle("show");	
}

function vanFunction() {
  var cityPopup = document.getElementById("vanPopup");
  cityPopup.classList.toggle("show");
}

function edmFunction() {
  var cityPopup = document.getElementById("edmPopup");
  cityPopup.classList.toggle("show");
}

function calFunction() {
  var cityPopup = document.getElementById("calPopup");
  cityPopup.classList.toggle("show");
}

function regFunction() {
  var cityPopup = document.getElementById("regPopup");
  cityPopup.classList.toggle("show");
}

function saskFunction() {
  var cityPopup = document.getElementById("saskPopup");
  cityPopup.classList.toggle("show");
}

function winFunction() {
  var cityPopup = document.getElementById("winPopup");
  cityPopup.classList.toggle("show");
}

function hamFunction() {
  var cityPopup = document.getElementById("hamPopup");
  cityPopup.classList.toggle("show");
}

function torFunction() {
  var cityPopup = document.getElementById("torPopup");
  cityPopup.classList.toggle("show");
}

function ottFunction() {
  var cityPopup = document.getElementById("ottPopup");
  cityPopup.classList.toggle("show");
}

function mtlFunction() {
  var cityPopup = document.getElementById("mtlPopup");
  cityPopup.classList.toggle("show");
}

function fredFunction() {
  var cityPopup = document.getElementById("fredPopup");
  cityPopup.classList.toggle("show");
}

function halFunction() {
  var cityPopup = document.getElementById("halPopup");
  cityPopup.classList.toggle("show");
}

function charFunction() {
  var cityPopup = document.getElementById("charPopup");
  cityPopup.classList.toggle("show");
}

function stjFunction() {
  var cityPopup = document.getElementById("stjPopup");
  cityPopup.classList.toggle("show");
}




		/**********
		
			Collapsible List for FAQs
			
		*/

	/* code referenced from: https://www.w3schools.com/howto/howto_js_accordion.asp  by: w3schools.com */
			
/* create the variables, button and loop variable */
var theQuestion = document.getElementsByClassName("question");
var i;

for (i = 0; i < theQuestion.length; i++) {
	
    theQuestion[i].addEventListener("click", function() {		
    this.classList.toggle("active");
	
	
	/* toggle between hiding and showing the active panel, where the “answer” is contained */
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
    } 
		else {
             answer.style.maxHeight = answer.scrollHeight + "px";
	    } 
    });
}

  


		/**********
		
			Disclaimer
			
		*/


$(document).ready(function(){
  $(".disclaimerTitle").click(function(){
    $(".disclaimerMessage").fadeToggle(800);
  });
});



		/**********
		
			Sports leagues panels
			
		*/


$(document).ready(function(){
  $("#hockey").click(function(){
    $("#hockeySlideout").slideToggle(450);
  });
});


$(document).ready(function(){
  $("#basketball").click(function(){
    $("#basketballSlideout").slideToggle(450);
  });
});

$(document).ready(function(){
  $("#baseball").click(function(){
    $("#baseballSlideout").slideToggle(450);
  });
});

$(document).ready(function(){
  $("#football").click(function(){
    $("#footballSlideout").slideToggle(450);
  });
});

$(document).ready(function(){
  $("#soccer").click(function(){
    $("#soccerSlideout").slideToggle(450);
  });
});


$(document).ready(function(){
  $("#lacrosse").click(function(){
    $("#lacrosseSlideout").slideToggle(450);
  });
});





		/**********
		
			Local Current Weather using The Open Weather Map
			
		*/
		

		
// my api key for The Open Weather Map: f0c6b46a3447608dc35af27963e60828

// Code referenced from: https://www.youtube.com/watch?v=InoAIgBZIEA&ab_channel=iEatWebsites by: iEatWebsites

		var city = "Victoria,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".vicTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".vicWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".vicFeels").append(feelsLike);
});


		var city = "Vancouver,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".vanTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".vanWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".vanFeels").append(feelsLike);
});


		var city = "Calgary,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".calTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".calWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".calFeels").append(feelsLike);
});


		var city = "Edmonton,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".edmTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".edmWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".edmFeels").append(feelsLike);
});


		var city = "Regina,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".regTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".regWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".regFeels").append(feelsLike);
});


		var city = "Saskatoon,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".saskTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".saskWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".saskFeels").append(feelsLike);
});


		var city = "Winnipeg,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".winTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".winWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".winFeels").append(feelsLike);
});


		var city = "Ottawa,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".ottTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".ottWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".ottFeels").append(feelsLike);
});


		var city = "Montreal,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".monTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".monWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".monFeels").append(feelsLike);
});


		var city = "Toronto,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".torTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".torWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".torFeels").append(feelsLike);
});


		var city = "Hamilton,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".hamTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".hamWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".hamFeels").append(feelsLike);
});


		var city = "Fredericton,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".fredTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".fredWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".fredFeels").append(feelsLike);
});


		var city = "Halifax,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".halTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".halWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".halFeels").append(feelsLike);
});


		var city = "Charlottetown,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".charTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".charWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".charFeels").append(feelsLike);
});


		var city = "St. John's,CA";
		
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=f0c6b46a3447608dc35af27963e60828",
		   function(data) {
			console.log(data);
			
			var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"; 
			$(".icon").attr("src", icon);
			
			var temp = Math.round(data.main.temp) + " \u00B0C";
			$(".stjTemp").append(temp);
			
			var weatherText = data.weather[0].main;
			$(".stjWeaText").append(weatherText);
			
			var feelsLike = "Feels like: " + Math.round(data.main.feels_like) + " \u00B0C";
			$(".stjFeels").append(feelsLike);
});




		/**********
		
			Google Map of each city using Google Maps
			
		*/


// my api key for Google Maps: AIzaSyA5jleOMDcFhg0RUOZFBcGAs8SMM2Hg0Rk

// Code referenced from: https://www.youtube.com/watch?v=Zxf1mnP5zcw&ab_channel=TraversyMedia by: Traversy Media

function calMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 11,
		center: {lat:51.0447, lng:-114.0719}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("calMap"), attributes);
	
	// New markers
	addMarker({
		coordinates: {lat:51.0374, lng:-114.0519},
		content: "<h4>Scotiabank Saddledome</h4><h6>Flames</h6><h6>Roughnecks</h6>"
	})
	addMarker({
		coordinates: {lat:51.0704, lng:-114.1215},
		content: "<h4>McMahon Stadium</h4><h6>Stampeders</h6>"
	})
	addMarker({
		coordinates: {lat:50.8837, lng:-114.0988},
		content: "<h4>ATCO Field</h4><h6>Calvary FC</h6>"
	})
	
	//Add marker function
	function addMarker(properties){
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: map,
		});
	
		if(properties.content){
			var infoWindow = new google.maps.InfoWindow({
				content: properties.content
			});
			
			marker.addListener("click", function() {
				infoWindow.open(map, marker);
			});	
		}	
	} // end of add marker function
	
} // end of calMapFunction
	
	
	
function vicMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 11,
		center: {lat:48.4284, lng:-123.3656}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("vicMap"), attributes);
	
	// New markers
	addMarker({
		coordinates: {lat:48.4431, lng:-123.5236},
		content: "<h4>Starlight Stadium</h4><h6>Pacific FC</h6>"
	})
	
	//Add marker function
	function addMarker(properties){
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: map,
		});
	
		if(properties.content){
			var infoWindow = new google.maps.InfoWindow({
				content: properties.content
			});
			
			marker.addListener("click", function() {
				infoWindow.open(map, marker);
			});	
		}	
	} // end of add marker function
	
} // end of vicMapFunction
	
	

function vanMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 11,
		center: {lat:49.2827, lng:-123.1207}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("vanMap"), attributes);
	
	// New markers
	addMarker({
		coordinates: {lat:49.2778, lng:-123.1088},
		content: "<h4>Rogers Arena</h4><h6>Canucks</h6><h6>Warriors</h6>"
	})
	addMarker({
		coordinates: {lat:49.2767, lng:-123.1119},
		content: "<h4>BC Place</h4><h6>Lions</h6><h6>Whitecaps</h6>"
	})
	
	//Add marker function
	function addMarker(properties){
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: map,
		});
	
		if(properties.content){
			var infoWindow = new google.maps.InfoWindow({
				content: properties.content
			});
			
			marker.addListener("click", function() {
				infoWindow.open(map, marker);
			});	
		}	
	} // end of add marker function
	
} // end of vanMapFunction
	
	

function edmMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 11,
		center: {lat:53.5461, lng:-113.4938}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("edmMap"), attributes);
	
	// New markers
	addMarker({
		coordinates: {lat:53.5470, lng:-113.4978},
		content: "<h4>Rogers Place</h4><h6>Oilers</h6>"
	})
	addMarker({
		coordinates: {lat:53.5596, lng:-113.4762},
		content: "<h4>Commonwealth Stadium</h4><h6>Elks</h6>"
	})
	addMarker({
		coordinates: {lat:53.5573, lng:-113.4783},
		content: "<h4>Clarke Stadium</h4><h6>FC Edmonton</h6>"
	})
	
	//Add marker function
	function addMarker(properties){
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: map,
		});
	
		if(properties.content){
			var infoWindow = new google.maps.InfoWindow({
				content: properties.content
			});
			
			marker.addListener("click", function() {
				infoWindow.open(map, marker);
			});	
		}	
	} // end of add marker function
	
} // end of edmMapFunction



function regMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 11,
		center: {lat:50.4452, lng:-104.6330}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("regMap"), attributes);
	
	// New markers
	addMarker({
		coordinates: {lat:50.4505, lng:-104.6330},
		content: "<h4>Mosiac Stadium</h4><h6>Roughriders</h6>"
	})
	
	//Add marker function
	function addMarker(properties){
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: map,
		});
	
		if(properties.content){
			var infoWindow = new google.maps.InfoWindow({
				content: properties.content
			});
			
			marker.addListener("click", function() {
				infoWindow.open(map, marker);
			});	
		}	
	} // end of add marker function
	
} // end of regMapFunction


function saskMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 11,
		center: {lat:52.1579, lng:-106.6702}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("saskMap"), attributes);
	
	// New markers
	addMarker({
		coordinates: {lat:52.1897, lng:-106.6794},
		content: "<h4>SaskTel Centre</h4><h6>Rush</h6>"
	})
	
	//Add marker function
	function addMarker(properties){
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: map,
		});
	
		if(properties.content){
			var infoWindow = new google.maps.InfoWindow({
				content: properties.content
			});
			
			marker.addListener("click", function() {
				infoWindow.open(map, marker);
			});	
		}	
	} // end of add marker function
	
} // end of saskMapFunction


function winMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 11,
		center: {lat:49.8951, lng:-97.1384}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("winMap"), attributes);
	
	// New markers
	addMarker({
		coordinates: {lat:49.8926, lng:-97.1438},
		content: "<h4>Canada Life Centre</h4><h6>Jets</h6>"
	})
	addMarker({
		coordinates: {lat:49.8078, lng:-97.1431},
		content: "<h4>IG Field</h4><h6>Blue Bombers</h6><h6>Valour FC</h6>"
	})
	
	//Add marker function
	function addMarker(properties){
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: map,
		});
	
		if(properties.content){
			var infoWindow = new google.maps.InfoWindow({
				content: properties.content
			});
			
			marker.addListener("click", function() {
				infoWindow.open(map, marker);
			});	
		}	
	} // end of add marker function
	
} // end of winMapFunction


function ottMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 11,
		center: {lat:45.4215, lng:-75.6972}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("ottMap"), attributes);
	
	// New markers
	addMarker({
		coordinates: {lat:45.2969, lng:-75.9268},
		content: "<h4>Canadian Tire Centre</h4><h6>Senators</h6>"
	})
	addMarker({
		coordinates: {lat:45.3984, lng:-75.6836},
		content: "<h4>TD Place Stadium</h4><h6>RedBlacks</h6><h6>Atletico</h6>"
	})
	
	//Add marker function
	function addMarker(properties){
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: map,
		});
	
		if(properties.content){
			var infoWindow = new google.maps.InfoWindow({
				content: properties.content
			});
			
			marker.addListener("click", function() {
				infoWindow.open(map, marker);
			});	
		}	
	} // end of add marker function
	
} // end of ottMapFunction


function monMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 11,
		center: {lat:45.5017, lng:-73.5673}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("monMap"), attributes);
	
	// New markers
	addMarker({
		coordinates: {lat:45.4961, lng:-73.5693},
		content: "<h4>Bell Centre</h4><h6>Canadiens</h6>"
	})
	addMarker({
		coordinates: {lat:45.5101, lng:-73.5807},
		content: "<h4>Percival Molson Memorial Stadium</h4><h6>Alouettes</h6>"
	})
	addMarker({
		coordinates: {lat:45.5631, lng:-73.5525},
		content: "<h4>Saputo Stadium</h4><h6>CF Montreal</h6>"
	})
	
	//Add marker function
	function addMarker(properties){
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: map,
		});
	
		if(properties.content){
			var infoWindow = new google.maps.InfoWindow({
				content: properties.content
			});
			
			marker.addListener("click", function() {
				infoWindow.open(map, marker);
			});	
		}	
	} // end of add marker function
	
} // end of monMapFunction


function torMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 11,
		center: {lat:43.6532, lng:-79.3832}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("torMap"), attributes);
	
	// New markers
	addMarker({
		coordinates: {lat:43.6435, lng:-79.3791},
		content: "<h4>Scotiabank Arena</h4><h6>Maple Leafs</h6><h6>Raptors</h6>"
	})
	addMarker({
		coordinates: {lat:43.6418, lng:-79.3891},
		content: "<h4>Rogers Centre</h4><h6>Blue Jays</h6>"
	})
	addMarker({
		coordinates: {lat:43.6332, lng:-79.4186},
		content: "<h4>BMO Field</h4><h6>Toronto FC</h6><h6>Argonauts</h6>"
	})
	addMarker({
		coordinates: {lat:43.7752, lng:-79.5062},
		content: "<h4>York Lions Stadium</h4><h6>York United FC</h6>"
	})
	addMarker({
		coordinates: {lat:43.2590, lng:-79.8723},
		content: "<h4>FirstOntario Centre</h4><h6>Rock</h6>"
	})
	
	//Add marker function
	function addMarker(properties){
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: map,
		});
	
		if(properties.content){
			var infoWindow = new google.maps.InfoWindow({
				content: properties.content
			});
			
			marker.addListener("click", function() {
				infoWindow.open(map, marker);
			});	
		}	
	} // end of add marker function
	
} // end of torMapFunction


function hamMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 11,
		center: {lat:43.2557, lng:-79.8711}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("hamMap"), attributes);
	
	// New markers
	addMarker({
		coordinates: {lat:43.2522, lng:-79.8301},
		content: "<h4>Tim Hortons Field</h4><h6>Tiger-Cats</h6><h6>Forge FC</h6>"
	})
	
	//Add marker function
	function addMarker(properties){
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: map,
		});
	
		if(properties.content){
			var infoWindow = new google.maps.InfoWindow({
				content: properties.content
			});
			
			marker.addListener("click", function() {
				infoWindow.open(map, marker);
			});	
		}	
	} // end of add marker function
	
} // end of hamMapFunction


function fredMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 13,
		center: {lat:45.9636, lng:-66.6431}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("fredMap"), attributes);
		
} // end of fredMapFunction


function halMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 11,
		center: {lat:44.6476, lng:-63.5728}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("halMap"), attributes);
	
	// New markers
	addMarker({
		coordinates: {lat:44.6444, lng:-63.5836},
		content: "<h4>Wanderers Grounds</h4><h6>Wanderers</h6>"
	})
	addMarker({
		coordinates: {lat:44.6484, lng:-63.5769},
		content: "<h4>Scotiabank Centre</h4><h6>Thunderbirds</h6>"
	})
	
	//Add marker function
	function addMarker(properties){
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: map,
		});
	
		if(properties.content){
			var infoWindow = new google.maps.InfoWindow({
				content: properties.content
			});
			
			marker.addListener("click", function() {
				infoWindow.open(map, marker);
			});	
		}	
	} // end of add marker function
	
} // end of halMapFunction


function charMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 13,
		center: {lat:46.2382, lng:-63.1311}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("charMap"), attributes);
	
} // end of charMapFunction


function stjMapFunction() {
	
	// Map attributes
	var attributes = {
		zoom: 13,
		center: {lat:47.5615, lng:-52.7126}
	}
	
	// New map
	var map = new google.maps.Map(document.getElementById("stjMap"), attributes);
		
} // end of stjMapFunction