# CSE135-HW2
All hw2-related files are located either in root (for Nodejs) or /var/www/html/ (for PHP).  
PHP is in Apache at port 8081.  
NodeJs is a new server at port 8084 (The old NodeJs server is at 8083, just a homepage).  

## PHP

Login: Username is ying, password is cse135

**Program 1**  
      File:   
      /var/www/html/hello.php  
      Link: http://157.230.57.144:8081/hello  
      Description: The background color should be a random color from yellow, blue and white after every time someone refreshes the webpage.  

**Program 2**  
      File:   
      /var/www/html/hellodata.php  
      /var/www/html/hello_data.html  
      Link: http://157.230.57.144:8081/hello_data  
      Description: This page provides a form with dropdown selections, with different options selected it will send that option to hellodata.php and sends back a message. Or you can also manually input the query string in URL and test it. Error page is supported.  

**Program 3**  
      File:   
      /var/www/html/environment_var.php  
      Link: http://157.230.57.144:8081/environment_var  
      Description: Display a list of all environment variables.  

**Program 4**  
      File:   
      /var/www/html/form.html  
      /var/www/html/echo.php  
      Link: http://157.230.57.144:8081/form  
      Description: The html file will take the form data and send it to echo.php which will display another webpage that shows the info collected from the form.  

**Program 5**  
      File:   
      /var/www/html/sessionpage1.php  
      /var/www/html/sessionpage2.php  
      Link: http://157.230.57.144:8081/sessionpage1, http://157.230.57.144:8081/sessionpage2  
      Description: On sessionpage1, the form collects user info and will save that using the cookie approach. After submitting it will create a link to go to page2, we can then see the saved user info on page 2. If click the "Clear Session" on page 2, we will go back to page 1 automatically, and going to page 2 without submitting the form will show the other string.(With a link to go back to page 1)  

**Program 7**  
      File:   
      /var/www/html/crud_php.html
      /var/www/html/crud.php  
      Link: http://157.230.57.144:8081/crud_php  
      Description: The html file will take the form data including action and user info and send them to crud.php that shows the latest list of users after the action applied. For reading and deleting, we only use the fullname to find that specific user. We store all the user data in a file, upon changing that file we will then display the newest version. For creating a user we simply append that new user to the file; for reading a user we find that user object with the correct fullname and display that; for updating a user we find that user object with the correct fullname, change other fields and display the entire "database"; for deleting a user we find that user object with the correct fullname, remove it from the file and display the entire "database".  


## NodeJS

**Program 1**  
      File:   
      /root/nodes.js  
      /var/www/html/hello.html  
      Link: http://157.230.57.144:8084/hello_world  
      Description:  
         The html file has javascript code that performs the same behavior as php’s. The nodes.js will send this file and display the content.  

**Program 2**  
      File: /root/nodes.js  
      Link: http://157.230.57.144:8084/hellodata?response=XML, http://157.230.57.144:8084/hellodata?response=JSON  
      Description: For Nodejs we didn't make a form to submit the options, instead this should be tested manually by going to these two URLs. Error page is supported.  

**Program 3**  
      File: /root/nodes.js  
      Link: http://157.230.57.144:8084/environment  
      Description: Display a list of all environment variables.  

**Program 4**  
      File: /root/nodes.js  
            /var/www/html/form_nodejs.html  
      Link: http://157.230.57.144:8084/form_nodejs  
      Description: The html file will take the form data and send it to nodes.js which will display another webpage that shows the info collected from the form.  

**Program 5**  
      File:   
            /root/nodes.js  
            /root/sessionpage1.html  
            /root/sessionpage2.html  
            /root/sessionlink.html  
      Link: http://157.230.57.144:8084/sessionpage1, http://157.230.57.144:8084/sessionpage2   
      Description:  On sessionpage1, the form collects user info and will save that using the cookie approach. After submitting it will create a link to go to page2, we can then see the saved user info on page 2. If click the "Clear Session" on page 2, we will go back to page 1 automatically, and going to page 2 without submitting the form will show the other string.(With a link to go back to page 1)  

**Program 7**  
      File:   
            /root/nodes.js  
            /var/www/html/crud.html  
      Link: http://157.230.57.144:8084/crud   
      Description:  The html file will take the form data including action and user info and send to the server, then the corresponding result is displayed. We used a json file to store all the user data, upon changing the json file we will display the newest version. For creating a user we simply append that new user to the file; for reading a user we find that user object with the correct fullname and display that; for updating a user we find that user object with the correct fullname, change other fields and display the entire "database"; for deleting a user we find that user object with the correct fullname, remove it from the file and display the entire "database".  

## Experience with PHP and NodeJS
PHP seems to be more modular as individual tasks are usually written in separate php files. On the other hand, the majority of NodeJS code is located in nodes.js file. Though it doesn’t mean that we can’t write JavaScript in separate file -- we can always write different files handling different tasks and then call sendfile in nodes.js. However, dealing with different requests through express in Node.js seems to be easier and more concise, as all the requests handling part can be written in a function in the same file. So overall PHP is easier for a single task/program as you just write a few files and don't need to bring up a running server again, but it can be tedious if we have multiple tasks to do. Node.js on the other hand might seem to require more work as you need to bring up that server, but you can store all programs in one file and is slightly more efficient when you have more tasks. 


For now, we think we can use PHP as our analytic backend, but if it requires us to be more efficient, we will switch to Node.js.
