$(document).ready(function (){
	$('#reg-form').on('submit', function(e){
		e.preventDefault();
		console.log($('#inputName').val());
		console.log($('#inputEmail').val());
		console.log($('#inputCity').val());

		$('.table').removeClass('hide');
		$('td#name-val').text($('#inputName').val());
		$('td#email-val').text($('#inputEmail').val());
		$('td#city-val').text($('#inputCity').val());
	})
})