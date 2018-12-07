<?php
	$response = $_REQUEST[""];
	$file = $fopen("user.json","w") or die("Was unable to open file");
	$fwrite($response,$filesize($file))
	$fclose();
	echo "Saved";
?>