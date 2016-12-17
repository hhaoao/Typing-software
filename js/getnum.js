function jd(){
	var i = 0;
	
	function show_time(){
		$("#clock").html("时间为：" + i++ + "秒" + "<br>" + "速度为:" + ($('#text1').val().length/i).toFixed(2) + "字/秒");
	}
	
	viem_time = setInterval(show_time,1000);

}

	function uj(){
	i=0;
	clearInterval(viem_time);
//	$("#clock").html("时间为：0秒" + "<br>" + "速度为:0.00字/秒");
}