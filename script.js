$(document).ready(function() {
	console.log("Script added");
	var id;//this variable is used to store Id of the elements

/*when the checkbox is clicked upon below code is executed to fade the items in the ingredients list
and when the user unchecks the checkbox the item gets '1' opacity*/
	$('.summary input:checkbox').click(function() {
		if ($(this).is(':checked')) { //if statement checks whether the checkbox is checked or not
			id = $(this).attr('id');
			$('.summary #'+id).fadeTo('slow',0.25);
		}
		else {
			id = $(this).attr('id');
			$('.summary #'+id).fadeTo('slow',1);
		}
	});
/*when the button inside the div with the 'nav' class is clicked, depending upon the text set for the button, 
all the images on the page are either displayed or hide*/
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
/*when the button inside the div with the 'directions' class is clicked, 
the directions list is reset(as it was when the page first loaded)*/
	$('.directions button').click(function() {
		$('.directions li').fadeTo('slow',1);
	});
/*when the user clicks on a particular step in the directions list, that particular direction gets the opacity '1'
and all the other directions get the opacity '0.25'*/
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
