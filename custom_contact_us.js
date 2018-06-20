 
$(function() {

  var x = document.getElementsByClassName("at_offerwarndiv alert alert-danger text-center b24-roomwarn");	
		for (i = 0; i < x.length; i++) {

			if (x[i].innerHTML != "Not available")
			{
				x[i].innerHTML = "CONTACT US"
			}
       
    	}

});
