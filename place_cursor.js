function place_cursor(){
	var the_input_field;
	the_input_field = document.getElementById('id_of_input_element');
	the_input_field.focus();

}

window.addEventListener('load', place_cursor, false);