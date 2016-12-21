function OnInput(event) {
    var $text1 =$("#text1");
    var $viem = $("#viem");
	//alert ("The new content: " + event.target.value);
	$(document).ready(function() {
        var searchTerm = $text1.val();
        if(searchTerm == "")
			$("#num").html("<p>**区</p>");
		else
		$("#num").html($('#text1').val());
		// remove any old highlighted terms
		$viem.removeHighlight();
		// disable highlighting if empty
		if(searchTerm) {
			// highlight the new term
			$("#viem").highlight(searchTerm);
		}
	});
}
