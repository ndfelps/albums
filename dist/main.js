$(document).on('ready', start) 

function start() {
	$('nav a').on('click', tab);
		function tab(e) {

		}
	function tab(e) {
		var $target = $(e.target);
		var targetName = $target.attr('href');
		$('main section').hide();
		$(targetName).show();
		$('nav a').removeClass('active');
		$target.addClass('active');
	}
}