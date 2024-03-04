//Poprawiamy menu główne, bo tekst na stronie zlewał się z naszym menu

document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	allNavItems.forEach(item =>
		item.addEventListener("click", () => {
			navList.classList.remove("show");
		})
	);

	window.addEventListener("scroll", addShadow);
}); //DOMContentLoaded odpala się dopiero wtedy jak treści strony się załadują. Po przecinku dajemy funkcję anonimową - nie ma nazwy

//Rozwiązujemy nie zamykającym się menu na telefonach - kod jest powyżej tyczy się zmiennych allNavItems, navList i dotyczą one pętli forEach

//1. Kliknięcie linku -> nawigacja się zamyka
//2. Potrzebuje wszystkie linki
//3. jak to jest, że nawigacja się pojawia i znika w momencie jak klikniemy w burger ikonkę?
