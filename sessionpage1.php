<!DOCTYPE html>
<html>
<body>

<form action="" method="post">
First Name: <input type="text" name="first"><br>
Last Name: <input type="text" name="last"><br>
<input type="submit">
</form>

<?php
if (isset($_GET["clear"])) {
	setcookie("user", "", time() - 3600);
}
if (isset($_POST["first"])) {
	setcookie("user", $_POST["first"] . " " . $_POST["last"]);
	header("text/html");
	echo '<a href="./sessionpage2.php" id="go"">Go to page 2</a>';
}
?>

</body>
</html>
