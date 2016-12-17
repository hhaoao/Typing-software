$(document).ready(function() {
	$("#b01").click(function() {
		htmlobj = $.ajax({
			url: "text/test1.txt",
			async: false
		});
		$("#viem").html(htmlobj.responseText);
	});
});