$(document).on('ready', start) 

function start() {
	$('a nav').on('click', tab);
	var $targetSec = $(window.location.hash);
	if (!$targetSec.length) {
		$targetSec = $('main section').eq(0);
	}
	$targetSec.show();

	$('a nav[href="#' + $targetSec.attr('id')+'"]').addClass('active');

	function tab(e) {
		var $target = $(e.target);
		var targetName = $target.attr('href');
		$('main section').hide();
		$(targetName).show();
		$('a nav').removeClass('active');
		$target.addClass('active');
	}
}