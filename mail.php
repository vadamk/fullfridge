<?php

	$recepient = "support@fullfridge.com.ua"; //e-mail
	$sitename = "Full Fridge"; //sitename

	$type = trim($_POST["type"]);
	$name = trim($_POST["name"]);
	$phone = trim($_POST["phone"]);
	$email = trim($_POST["email"]);
	$message = trim($_POST["message"]);

	$body = "
	<p><b>Type:</b> $type</p>  
	<p><b>Name:</b> $name</p>  
	<p><b>Phone:</b> $phone</p>
	<p><b>E-MAIL:</b> $email</p>
	<p><b>Message:</b> $message</p>";

	$headers = "From: $sitename <support@fullfridge.com.ua>\r\n";
	$headers .= "Content-type: text/html; charset=\"utf8\"\r\n";

	mail($recepient, $sitename, $body, $headers);
	mail("adamkskif@gmail.com", $sitename, $body, $headers);
?>