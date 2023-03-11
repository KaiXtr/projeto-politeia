//Função para reajustar o tamanho da barra superior
function barra() {
	var els = document.querySelectorAll("header");
	for (var i = 0; i < els.length; i++){
		if (window.scrollY > 100) {
			els[i].classList.add("minimizada");
		}else {
			els[i].classList.remove("minimizada");
		}
	}
}
//Função para revelar automaticamente elementos da página
function revelar() {
	var els = document.querySelectorAll("h3, p");
	for (var i = 0; i < els.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = els[i].getBoundingClientRect().top;

		if (elementTop < windowHeight - 50) {
			els[i].classList.add("ativo");
		}else {
			els[i].classList.remove("ativo");
		}
	}
}
//Função para abrir os botões de Perguntas Frequentes
function abrir(x){
	var el = document.getElementById("faq-" + x);
	if (el.style.display == "block") el.style.display = "none";
	else el.style.display = "block";
}
//Função para abrir a barra lateral para dispositivos móveis
function sidebar() {
	var el = document.getElementById("sidebar");
	if (el.style.visibility == "visible") {
		el.style.width = "0%";
		el.style.visibility = "hidden";
	}else {
		el.style.width = "60%";
		el.style.visibility = "visible";
	}
}
window.addEventListener("scroll", barra);
barra();
window.addEventListener("scroll", revelar);
revelar();