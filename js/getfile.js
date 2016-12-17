for(var a in data){
			document.write("<input type='radio' name='radiobutton' value='radiobutton'><span>"+data[a]+"</span><br />");
			}
			$(function(){
				var id = $("input[type='radio']:first").next("span").text();
				var a = "upload1/" + id;
				console.log(id);
  			$("input[type='radio']").click(function(){
    		 id= $(this).next("span").text();
    		 a = "upload1/" + id;
  		});
			$("#b01").click(function() {
			htmlobj = $.ajax({
				url: a,
			async: false
		});
		$("#viem").html(htmlobj.responseText);
	});
});