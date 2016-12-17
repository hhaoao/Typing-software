function OnInput(event) {
	//alert ("The new content: " + event.target.value);
	$(document).ready(function() {
		if($("#text1").val() == "")
			$("#num").html("<p>**区</p>");
		else
		$("#num").html($('#text1').val());
		var searchTerm = $("#text1").val();
		// remove any old highlighted terms
		$("#viem").removeHighlight();
		// disable highlighting if empty
		if(searchTerm) {
			// highlight the new term
			$("#viem").highlight(searchTerm);
		}
	});
}
