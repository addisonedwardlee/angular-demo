This is a demo app that shows best practices for building Angular apps <br>
A video of the presentation can be found here  <br> [https://www.youtube.com/watch?v=9IBljKq4XrQ](https://www.youtube.com/watch?v=9IBljKq4XrQ)

The ```master``` branch is the completed version with notes.

To build this out on your own, follow these steps

1. Clone this repo (why not star it while you're at it!) <br>
```git clone https://github.com/addisonedwardlee/angular-demo.git```

2. Enter into the folder you just created
```cd angular-demo```

3. Run this command to get the demo branch <br>
```git checkout origin/demo```

4. Run this command to install dependencies and launch a server <br>
```npm start```


**---Note---**

I am preserving the architecture of this app to match the demo video, but would otherwise rebuild it as follows
```
    app/                        --> all of the files to be used in production
      assets/                   --> all static asset files
        css/                    --> css files
          app.css               --> default stylesheet
        img/                    --> image files
      bower_components/         --> all client side dependencies
      common/                   --> all components that are shared across the application
        directives/             --> a folder for application level directives
        filters/                --> a folder for application level filters
          timeConversion.js     --> custom filter for converting time
        services/               --> a folder for application level services
        values/                 --> a folder for application level values
          userData.js           --> custom value for tracking the user's data
      modules/                  --> all custom modules, associated by a feature or view
        activityFeed/           --> all components related to the activityFeed module
          activityFeed.html     --> the template rendered for this module
          activityFeed.js       --> the application logic for this module
          activityService.js    --> a service only used by this module
          activityPostDir.html  --> the template rendered for a module specific directive
          activityPostDir.js    --> the application logic for a module specific directive
        login/                  --> a custom module for this application
          login.html            --> the template rendered for this module
          login.js              --> the application logic for this module
          loginService.js       --> a service only used by this module
      app.js                    --> application
      index.html                --> app layout file (the main html template file of the app)
    test/                       --> test config and source files
      protractor-conf.js        --> config file for running e2e tests with Protractor
      e2e/                      --> end-to-end specs
        scenarios.js            --> end-to-end tests
      karma.conf.js             --> config file for running unit tests with Karma
      unit/
        --> Under this folder should be an exact structural copy 
            of the app, replacing *.js files with *_test.js testing files
```

If a single module has many services, directives, filters, etc., I would recommend creating 
separate folders for each one of these within the module itself
```
activityFeed/       --> all components related to the activityFeed module
  activityFeed.html --> the template rendered for this module
  activityFeed.js   --> the application logic for this module
  services/
    activityService1.js --> a service only used by this module
    activityService2.js --> a service only used by this module
    activityService3.js --> a service only used by this module
```
