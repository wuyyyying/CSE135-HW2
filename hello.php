<?php
   $background_colors = array('#3386FF', '#FBFD66', '#FFFFFF');
   $count = count($background_colors) - 1;
   $i = rand(0, $count);
   $rand_background = $background_colors[$i];
   date_default_timezone_set("America/Los_Angeles");
   echo "Hello Web World from Language PHP on ";
   echo date("Y.m.d")." ";   
   echo date("h:i:sa");
   if ($rand_background == '#3386FF')
      echo " enjoy my BLUE page!";
   if ($rand_background == '#FBFD66')
      echo " enjoy my YELLOW page!";
   else
      echo " enjoy my WHITE page!";
?>

<html>
   <head>
   </head>
   <body style="background: <?php echo $rand_background; ?>;">

   </body>
</html>
