# Respond UI

Respond 6 is an open source, responsive content management system built on the Lumen PHP and Angular (currently 4) frameworks. Respond 6 is built so that you can quickly build beautiful, responsive websites. The latest version features flat-file storage, a beautiful visual editor, and fast static sites. Learn more about Respond at https://respondcms.com.  

This repository provides the Angular CLI powered front-end of Respond.  Installation instructions are provided below.  Respond UI does require a corresponding Respond backend to function.  Learn more about setting up the Respond backend at https://respondcms.com/documentation/installation.

## Install Resond UI

1. Install Angular CLI globally with 
    ```
    npm install -g @angular/cli
    ```

2. Clone the `respond-ui` repo:
    ```
    git clone https://github.com/madoublet/respond-ui
    ```

3. Install dependencies
    ```
    cd respond-ui
    npm install
    ```

4. Update the proxy.conf.json to point to your development backend. Replace http://path-to-respond-backend.com" with the URL of your backend-server.
    ```
    "/api": {
        "target": "http://path-to-respond-backend.com",
        "changeOrigin": true,
        "secure": false
    },
    "/sites": {
        "target": "http://path-to-respond-backend.com",
        "changeOrigin": true,
        "secure": false
    },
    "/themes": {
        "target": "http://path-to-respond-backend.com",
        "changeOrigin": true,
        "secure": false
    },
    "/edit": {
        "target": "http://path-to-respond-backend.com",
        "changeOrigin": true,
        "secure": false
    },
    "/app/libs": {
        "target": "http://path-to-respond-backend.com",
        "changeOrigin": true,
        "secure": false
    }
    }
    ```

5. Serve the app.
    ```
    ng serve --proxy-config proxy.conf.json
    ```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build for production

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Additional help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
