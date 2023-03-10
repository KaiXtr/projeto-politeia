function abrir(x){
	var el = document.getElementById("faq-" + x);
	console.log("faq-" + x);
	if (el.style.display == "block") el.style.display = "none";
	else el.style.display = "block";
}