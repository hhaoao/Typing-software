<?php
	$bfile = array();
	$path1 = "D:\wamp\www\dazi/upload1";
	foreach(scandir($path1) as $afile)
	{
	if($afile=='.'||$afile=='..') continue;
	array_push($bfile,$afile);
	}
	$new_arr=json_encode($bfile);
	echo "var data =". $new_arr;
?>