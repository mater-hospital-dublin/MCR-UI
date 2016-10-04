Mater Care Record UI
=========

This repository contains the code base for the Mater Care Record Angular UI, which is a separate package that sits on top of
 the Mater Care Record Java Middleware.
 

### Requirements

To develop and run the application locally you must have the following installed:
* NodeJS
* A running version of The Mater Care Record Middleware listening on port 19191


### Installation

Install the JavaScript package manager NodeJS:  
https://nodejs.org/download/

Install Grunt, the JavaScript task runner. You may need to be root user:  
```sh
npm install -g grunt-cli bower
```

Install all packages used in the Mater Care Record project. If you are prompted to select a version of AngularJS, select v1.3.12:  
```sh
bower install
```

Update Bower:  
```sh
bower update
```

Update NodeJS:  
```sh
npm update
```

### Running the Application

In order to serve the web assets, use the grunt command shown below. This will also watch for changes:  
```sh
grunt serve
```

### Running the Socket Server
Requires Node.js version >= 6.0.0 and MySQL

Mysql connection credentials are located in socket-server/lib/db.js
 
##### Install dependencies (if you have not done it before):
```sh
npm install
```

##### Run server:
```sh
node ./socket-server/scoket
```
##### OR
```sh
npm run socket-server
```


##### ENJOY!
