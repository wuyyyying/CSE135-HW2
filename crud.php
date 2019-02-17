<html>
   <body>
      <?php
         $myfile_w = fopen("/var/www/html/users.txt", "a") or die("Unable to open file write!");
         if($_GET["action"] == "create"){
            $fullname = "fullname: " . $_GET["fullname"] . ", ";
            $login = "login: " . $_GET["login"] . ", ";
            $admin = "admin: " . $_GET["admin"];
            $txt = $fullname . $login . $admin . "\n";
            fwrite($myfile_w, $txt);
            fclose($myfile_w); 
            $myfile_r = fopen("/var/www/html/users.txt", "r") or die("Unable to open file read!");
            while(!feof($myfile_r)) {
               echo fgets($myfile_r) . "<br>";
            } 
            fclose($myfile_r);
         }
         if($_GET["action"] == "read"){
            $myfile_r = fopen("/var/www/html/users.txt", "r") or die("Unable to open file read!");
            while(!feof($myfile_r)) {     
               $find = fgets($myfile_r);
               if(strpos($find, $_GET["fullname"])){
                  echo $find;
                  break;
               }
            } 
            fclose($myfile_r);
         }
         if ($_GET["action"] == "update"){
            $fullname = "fullname: " . $_GET["fullname"] . ", ";
            $login = "login: " . $_GET["login"] . ", ";
            $admin = "admin: " . $_GET["admin"];
            $txt = $fullname . $login . $admin . "\n";

            $fname = "/var/www/html/users.txt"; 
            $lines = file($fname); 
            foreach($lines as $line){
               if(!strstr($line, $_GET["fullname"])){
                  $out .= $line;
               }
               else{
                  $out .= $txt;
               }
            }
            $f = fopen($fname, "w");  
            fwrite($f, $out);  
            fclose($f); 
            $myfile_r = fopen("/var/www/html/users.txt", "r") or die("Unable to open file read!");
            while(!feof($myfile_r)) {
               echo fgets($myfile_r) . "<br>";
            } 
            fclose($myfile_r);
         } 

         if($_GET["action"] == "delete"){
            $fname = "/var/www/html/users.txt"; 
            $lines = file($fname); 
            foreach($lines as $line){
               if(!strstr($line, $_GET["fullname"])){
                  $out .= $line;
               }
            }
            $f = fopen($fname, "w");  
            fwrite($f, $out);  
            fclose($f); 
            $myfile_r = fopen("/var/www/html/users.txt", "r") or die("Unable to open file read!");
            while(!feof($myfile_r)) {
               echo fgets($myfile_r) . "<br>";
            } 
            fclose($myfile_r);
         }
      ?>
   </body>
</html>
