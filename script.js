function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu-bottom');
	let links = menu.find('.burger-menu-link');
	let overlay = menu.find('.burger-menu-overlay');

	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger-menu-active');
		if (menu.hasClass('burger-menu-active')) {
			$('body').css('overflow' , 'hidden');
		} else {
			$('body').css('overflow' , 'visible');
		}
	}
}

burgerMenu('.burger-menu');







 $(document).ready(function(){
    $("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

	$('.nav-order').click(function(){
		$('main').css('filter','blur(1px)');
		$('header').css('filter','blur(1px)');
		$('footer').css('filter','blur(1px)');
		$('.popap-box').fadeIn("fast");
		
	});
	$('.bottom-header').click(function(){
		$('main').css('filter','blur(1px)');
		$('header').css('filter','blur(1px)');
		$('footer').css('filter','blur(1px)');
		$('.popap-box').fadeIn("fast");
		
	});
	$('.product-nav-order').click(function(){
		$('main').css('filter','blur(1px)');
		$('header').css('filter','blur(1px)');
		$('footer').css('filter','blur(1px)');
		$('.popap-box').fadeIn("fast");
		
	});
	$('.close').click(function(){
		$('main').css('filter','none');
		$('header').css('filter','none');
		$('footer').css('filter','none');
		$('.popap-box').fadeOut("fast");
		
	});
});
 $(document).mouseup(function (e) { 
	var popup = $('.popap-container');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.popap-box').fadeOut("fast");
		$('main').css('filter','none');
		$('header').css('filter','none');
		$('footer').css('filter','none');
		
	}
});