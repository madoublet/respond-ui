# RespondCMS

A Responsive CMS powered by Angular 4

## Install Angular CLI and RespondCMS dependencies 

1. Install Angular CLI globally with `npm install -g @angular/cli`

2. Clone the `respond-ui` repo:
 
    `git clone https://github.com/madoublet/respond-ui`

3. Install dependencies

    `$ cd respond-ui`
    
    `$ npm install`

## Configure your backend server

Modify the `target` property in proxy.conf.json to point to the your backend server.
By default it will proxy all requests to `/api` to http://localhost:8080.

## Development server

Run `npm start` or `ng serve --proxy-config proxy.conf.json` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
See `ng serve --help` for more options to the `ng serve` command.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
