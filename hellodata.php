<?php
$data = "Hello Data it's " . date("Y-m-d");
if ($_GET["response"] == "XML") {
	#header('Content-type: text/xml');
	$content = "<?xml version='1.0' encoding='UTF-8'?><message>" . $data . "</message>";
	$xml = new SimpleXMLElement($content);
	print_r($xml->asXML());
}
else if ($_GET["response"] == "JSON") {
	header('Content-type: application/json');
	$myObj->msg = $data;
	$myJSON = json_encode($myObj);
	echo $myJSON;
}
else if (empty($_GET)) {
	header('Content-type: text/html');
	echo "<h1>Error: Specify response paramter</h1>";
}
else {
	header('Content-type: text/html');
	echo "<h1>Error: Specify response parameter</h1>";
}
?>
