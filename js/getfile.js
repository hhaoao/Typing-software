$.each(data,function (i) {
			document.write("<input type='radio' name='radiobutton' value='radiobutton'><span>"+data[i]+"</span><br />");
			});
			$(function(){
				var id = $("input[type='radio']:first").next("span").text();
				var a = "upload1/" + id;
  			$("input[type='radio']").click(function(){
    		 id= $(this).next("span").text();
    		 a = "upload1/" + id;
  		});
			$("#gbnr").click(function() {
				$.ajax({
				url: a,
			async: false,
				success:function (result) {
                    $("#viem").html(result);
                }
		});
	});
});