$(function () {
  $('.nav-tabs a').on('click', function(evt){
  	//evt.preventDefault();
  	//var lng = $(this).attr('href').split('=')[1];
  	//location='/event?setLng='+lng;
  });
  $('.addlng').on('click', function () {
		var html = $('.format').html();
		var target = $(this).parent().prev();
		var lng = $('.lng').val();
		var newhtml = html.replace(/日文/,lng);

		$('<div class="control-group">'+newhtml+'</div>').insertAfter(target);
	});
});