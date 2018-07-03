$(document).ready(function () {

	var notification = $('.toast-notification');

	notification.hide();

	$('.show-toast').click(function() {
		notification.show();

		setTimeout(function(){
		   notification.hide();
		}, 1000);

	});

});