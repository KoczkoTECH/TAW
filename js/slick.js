$(".team-carousel").slick({
	// infinite: true, - te właściwości na razie nie bedą nam potrzebne
	arrows: false, //To się tyczy przesuwania pomiędzy kolejnymi kartami
	autoplay: true, //To sprawia, że karuzela będzie sięsama odświeżała i przesuwała
	mobileFirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
	], //Powyższy kod tyczy się responsywności i jak widać wyżej mamy breakpointy. Jedynie co tam ustawaimy to ile kart ma się wyświetlać w jakiej rozdzielczości.
});
