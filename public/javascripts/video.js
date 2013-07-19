$(function () {
	$('.inputother').hide();
	$('.other').on('click', function (evt) {
		$(this).parent().next().toggle();
	})
	$('.addtimecode').on('click', function () {
		var html = $('.format').html();
		var target = $(this).parent().parent().prev();
		$('<div class="row timecode">'+html+'</div>').insertAfter(target);
	});
});