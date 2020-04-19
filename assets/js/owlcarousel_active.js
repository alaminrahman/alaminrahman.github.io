
$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	dots:true,
	items: 4,
	autoplay:true,	
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:4
		}
	}
});
