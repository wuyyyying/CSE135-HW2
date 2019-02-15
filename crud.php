<html>
   <body>
      <?php
         $myfile_w = fopen("/var/www/html/users.txt", "w") or die("Unable to open file write!");
         if($_GET["action"] == "create"){
            $fullname = "fullname: " . $_GET["fullname"];
            $login = "login: " . $_GET["login"];
            $admin = "admin: " . $_GET["admin"];
            $txt = $fullname . $login . $admin . "\n";
            fwrite($myfile_w, $txt);
            fclose($myfile_w);
         }
         $myfile_r = fopen("/var/www/html/users.txt", "r") or die("Unable to open file read!");
         while(!feof($myfile)) {
            echo fgets($myfile) . "<br>";
         } 
         fclose($myfile_r);
      ?>
   </body>
</html>
