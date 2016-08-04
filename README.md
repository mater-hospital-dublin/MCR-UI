Ripple IDCR Demonstrator
=========


### Requirements

To develop and run the application locally you must have the following installed:
* NodeJS
* A running version of Org-Ripple-Core


### Installation

Install the JavaScript package manager NodeJS:  
https://nodejs.org/download/

Install Grunt, the JavaScript task runner. You may need to be root user:  
```sh
npm install -g grunt-cli bower
```

Install all packages used in the Ripple project. If you are prompted to select a version of AngularJS, select v1.3.12:  
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


##### ENJOY!
