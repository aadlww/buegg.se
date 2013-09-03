
showAlert = function(string){
	$('#alertDiv').css('background-color', '#fdea47');
 	$("#alertDiv").html(string);
 	$('#alertDiv').show().delay(2000).slideUp('slow');
}

showSuccess = function(string){
	$('#alertDiv').css('background-color', '#e7ecc3');
 	$("#alertDiv").html(string);
 	$('#alertDiv').show().delay(2000).slideUp('slow');
}

showError = function(string){
	$('#alertDiv').css('background-color', '#FFCCCC');
 	$("#alertDiv").html(string);
 	$('#alertDiv').show().delay(2000).slideUp('slow');
}
