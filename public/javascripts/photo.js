$(function() {
	$('#submit').on('click', function(evt){
		evt.preventDefault();
		var msg ='';
		$('input[type=text]').each(function (index, ele) {
			if( $(ele).val() == '' && $(ele).attr('id') != 'inputother') {
				$(ele).parent().parent().addClass('error');
				msg='有欄位沒有確實填寫';
			}
		});
		if( $('textarea').val() == '' ) {
			$('textarea').parent().parent().addClass('error');
			msg='有欄位沒有確實填寫';
		}
		if (msg !='' ) {
			$('.msg').appendto(msg);
		} else { 
			var params = $('form').serialize();
			var wk = '';
			$('.workgroup:checked').each(function (index, ele) {
				if( index ==0 ) wk = $(ele).val();
				else wk += ','+$(ele).val();
			});
			params+='&workgroup='+wk;
			var pt = '';
			$('.participant:checked').each(function (index, ele) {
				if( index ==0 ) pt = $(ele).val();
				else pt += ','+$(ele).val();
			});
			if($('#other')[0].checked) {
				if(pt != '') pt+=','+$('#inputother').val();
				else pt = $('#inputother').val();
			}
			params+='&participant='+pt;
			console.log(params);
		
		$.post('/photo/create', params, function (data) {
			alert(data);
			$('form')[0].reset();
		});
		//*/
		}
	});
	$('.reset').on('click', function (evt) {
		$('form')[0].reset();
	})
	$('#inputother').hide();
	$('#other').on('click', function() {
		$('#inputother').toggle();
	})
});