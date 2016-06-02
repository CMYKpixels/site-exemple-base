$(function() {
	// Ancres animées
	$('.site-menu a').scrollOffset();

	// Menu burger
	$('.site-menu-burger').on('click', function() {
		$(this).find('i').toggleClass('fa-close').toggleClass('fa-bars');

		$('.site-menu-list').slideToggle();
	});
});
