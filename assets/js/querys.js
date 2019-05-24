$(document).ready(function(){
	function myFunction(x) {
	  if (x.matches) { // If media query matches
		$("[id*=mesa-cards]").removeClass("col-3");
		$("[id*=mesa-cards]").addClass("col-6");
	  } else {
	    $("[id*=mesa-cards]").removeClass("col-6");
		$("[id*=mesa-cards]").addClass("col-3");
	  }
	}

	var x = window.matchMedia("(max-width: 992px)")
	myFunction(x) // Call listener function at run time
	x.addListener(myFunction) // Attach listener function on state changes
});