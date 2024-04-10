/*
	Student Name: Michael Campbell
	File Name: script.js
	Date: 4/3/2023
*/

//Hamburger Menu Function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var headshot = document.getElementById("headshot");
	if (menu.style.display === "block" && headshot.style.display === "none") {
		menu.style.display = "none";
		headshot.style.display = "block";
	} else {
		menu.style.display = "block";
		headshot.style.display = "none";
	}
}