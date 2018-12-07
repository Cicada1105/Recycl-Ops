<?php
	$file = $fopen("user.json","r") or die("Unable to open file");
	$data = $fread($file,$filesize($file));
	$fclose($file);
	echo $data;
?>