<?php
	$first = $_POST["fname"];
	$last = $_POST["lname"];
	$pass = $_POST["password"];
	
	$response = {
		"First Name" : $first,
		"Last Name" :$last,
		"Password" : $pass
	}
	$file = $fopen("user.json","w") or die("Was unable to open file");
	$fwrite($response,$filesize($file));
	$fclose($file);
	echo "Saved";
?>