$(function () {
	$('.addlng').on('click', function () {
		var html = $('.format').html();
		var target = $(this).parent().prev();
		var lng = $('.lng').val();
		var newhtml = html.replace(/日文/,lng);

		$('<div class="control-group">'+newhtml+'</div>').insertAfter(target);
	});

});