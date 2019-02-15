#!/usr/bin/env nodejs
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var fs = require('fs');
app.use(cookieParser());

// Program 1
//---------------------------------------------------
app.get('/hello_world', function(req, res){
   res.sendFile('/root/hello.html');
});
//---------------------------------------------------

// Program 2
//---------------------------------------------------
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var fs = require('fs');

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
}
today = mm + '/' + dd + '/' + yyyy;

app.get('/hellodata', function (req, res) {
   if (req.query.response === "XML") {
      let content = "<?xml version='1.0' encoding='UTF-8'?><message>" + "Hello Data it's " + today + "</message>";
      res.set('Content-Type', 'application/xml');
      res.send(content);
   }
   else if (req.query.response === "JSON") {
      let obj = {"msg" : "Hello Data it's " + today};
      res.json(obj);
   }
   else {
      res.send("<h1>Error: Specify response paramter</h1>");
   }
});
//---------------------------------------------------

// Program 3
//---------------------------------------------------
app.get('/environment', function (req, res) {
   let reqH = req.headers;
   let envH = app.settings.env;
   res.send(reqH);
});
//---------------------------------------------------

// Program 4
//---------------------------------------------------
app.get('/form_nodejs', function(req, res){
   res.sendFile('/var/www/html/form_nodejs.html');
});
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/echo', function (req, res) {
   var d = new Date();
   var h = d.getUTCHours()+16;
   var m = d.getUTCMinutes();
   var s = d.getUTCSeconds();
   if (s < 10)
      s = "0" + s;
   var current_time = h + ":" + m + ":" + s;
   var color = 1;
   if (req.body.response === "YELLOW")
      color = 2;
   if (req.body.response === "WHITE")
      color = 3;
   var html_string = `
   <html>
      <head>
         <script>
         function random_background() {
            if(${color} === 1){
               document.body.style.backgroundColor = 'blue';
            }
            if(${color} === 2){
               document.body.style.backgroundColor = 'yellow';
            }
            if(${color} === 3){
               document.body.style.backgroundColor = 'white';
            }
         }
         </script>
      </head>
   <body onload="random_background()">
   </body>
   </html>`;
   let content = html_string + "Hello " + req.body.first + " " + req.body.last + " from a Web app written in Javascript on " + today + " " + current_time;
   res.send(content);
});
//---------------------------------------------------

// Program 5
//---------------------------------------------------
app.get('/sessionpage1', function (req, res) {
   if (req.query.first && req.query.last) {
      res.cookie("username", req.query.first + ' ' + req.query.last);
      res.sendFile('/root/sessionlink.html');
   }
   else {
      res.clearCookie('username');
      res.sendFile('/root/sessionpage1.html');
   }
});

app.get('/sessionpage2', function (req, res) {
   if (req.cookies.username) {
      res.send("Hi " + req.cookies.username + " nice to meet you!" + "<br><button><a href='/sessionpage1'>Clear Session</a></button>");
   }
   else {
      res.send("Howdy stranger. Please tell me your name on page1!" + "<br><button><a href='/sessionpage1'>Go to page 1</a></button>");
   }
});
//---------------------------------------------------

// Program 7
//---------------------------------------------------
app.get('/crud', function (req, res) {
   res.sendFile("/root/crud.html");
});

app.post('/test-rest', function (req, res) {
   if (req.body.action === "create") {
      let obj;
      let json;
      let newUser = {
         fullname: req.body.fullname,
         login: req.body.login,
         admin: req.body.admin
      };
      fs.readFile('users.json', 'utf8', (err, data) => {
         if (err){
            console.log(err);
         } else {
            if (data) {
               obj = JSON.parse(data); //now it an object
            }
            else {
               obj = {"users":[]};
            }
	    obj.users.push(newUser); //add some data
	    json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('users.json', json, 'utf8', function (err) {
               if (err) throw err;
               }); // write it back 
            }
            res.json(obj);
      });
   }
   else if (req.body.action === "read") {
      //var json = require('/root/users.json');
      var json = JSON.parse(fs.readFileSync('/root/users.json', 'utf8'));
      var rooms = new Map();
      for (user of json.users) {
         rooms.set(user.fullname, user);
      }
      res.json(rooms.get(req.body.fullname));
   }
   else if (req.body.action === "update") {
      //var json = require('/root/users.json');
      var json = JSON.parse(fs.readFileSync('/root/users.json', 'utf8'));
      var rooms = new Map();
      for (user of json.users) {
         rooms.set(user.fullname, user);
      }
      let target = rooms.get(req.body.fullname);
      target.login = req.body.login;
      target.admin = req.body.admin;
      json.users[req.body.fullname] = target;
      
      jsonS = JSON.stringify(json);
      fs.writeFile('users.json', jsonS, 'utf8', function (err) {
         if (err) throw err;
         }); // write it back 
      res.json(json);
   }
   else if (req.body.action === "delete") {
      var json = JSON.parse(fs.readFileSync('/root/users.json', 'utf8'));
      var rooms = new Map();
      for (user of json.users) {
         rooms.set(user.fullname, user);
      }
      let users = json.users;

      let index = 0;
      for (user of users) {
         if (user.fullname === req.body.fullname) {
	    users.splice(index, 1);
	    break;
         }
	 index += 1;
      }
      json.users = users;

      jsonS = JSON.stringify(json);
      fs.writeFile('users.json', jsonS, 'utf8', function (err) {
         if (err) throw err;
         }); // write it back 
      res.json(json);
   }
});

app.get('/crud-users', function (req, res) {
   var obj = JSON.parse(fs.readFileSync('/root/users.json', 'utf8'));
   res.json(obj);
});
//---------------------------------------------------

var server = app.listen(8084, "157.230.57.144", function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
})
