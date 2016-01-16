$(document).ready(function() {
	console.log("Script added");
	var id;
	$('.summary input:checkbox').click(function() {
		if ($(this).is(':checked')) {
			id = $(this).attr('id');
			$('.summary #'+id).fadeTo('slow',0.25);
		}
		else {
			id = $(this).attr('id');
			$('.summary #'+id).fadeTo('slow',1);
		}
	});
	$('.nav button').click(function(){ 
		if($(this).text() == "Hide Images") {
        	$(this).text('Display Images');
        	$('img').fadeTo('slow',0);
			$('.summary .image').fadeTo('slow',0);
    	} else {
        	$(this).text('Hide Images');
        	$('img').fadeTo('slow',1);
			$('.summary .image').fadeTo('slow',1);
    	}
	});

	$('.directions button').click(function() {
		$('.directions li').fadeTo('slow',1);
	});

	$('.directions li').click(function() {
		id = $(this).attr('id');
		$(this).fadeTo('slow',1);
		$('.directions li').each(function() {
			if (this.id != id) {
			 $(this).fadeTo('slow',0.25);
			}
		});	
	}); 
});