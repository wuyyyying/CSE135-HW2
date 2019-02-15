<!DOCTYPE html>
<html>
<body>


<?php
if(!isset($_COOKIE["user"])) {
	echo "Howdy stranger. Please tell me your name on page1!<br>";
	echo "<a href='./sessionpage1.php'>Go to page 1</a>";
} else {
	echo "Hi " . $_COOKIE["user"] . " nice to meet you!<br>";
	echo '<form action="/sessionpage1.php" method="get"><input name="clear" value="DEFAULT" hidden><input type="submit" value="Clear Session"></form>';
}
?>

</body>
</html>
