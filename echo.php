<?php
date_default_timezone_set("America/Los_Angeles");
echo "Hello ". $_GET["first"] . " " . $_GET["last"] . " from a Web app written in PHP on " . date("Y-m-d") . " " . date("h:i:sa") . ".";
$background = '#FFFFFF';
if ($_GET["response"] == "BLUE") 
   $background = '#3386FF';
if ($_GET["response"] == "YELLOW") 
   $background = '#FBFD66';
?>

<html>
   <body style="background: <?php echo $background; ?>;">

   </body>
</html>
