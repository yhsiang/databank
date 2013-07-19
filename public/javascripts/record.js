$(function () {
	$('.inputother').hide();
	$('.other').on('click', function (evt) {
		$(this).parent().next().toggle();
	})
});