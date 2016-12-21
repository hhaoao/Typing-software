$(document).ready(function() {
    var tpath = "upload1/upload1.text";
	$("#gbnr").click(function() {
            $.ajax({
            url: tpath,
            async: false,
            success: function (result) {
                $("#viem").html(result.responseText);
            }
        });
	});
});