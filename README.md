# VerivoxApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

## Project requirements
- Angular in the lasted version.
- Angular CLI
- Node JS

## Project Installments
- Into the project folder run this command `npm install`
- Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via Jest

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project Explanation
This project is created in Angular / Typescript and based on the wireframes provided by the document, so I decided to use it and try to give a better presentation using the following structure:
- I create a mock service using the `of` RxJs functionality to simulate a service response and the call for this service was done with the async process.

- For the layout for the code challenge I used SASS with the SCSS syntax and implemented media queries to control the items shown by the different resolutions (Desktop, Mobile, and Tablets) Focusing on Mobile First.
- The UI has a filter with three options to sort the information (Download speed, Upload speed, and, Lower price).

- I decided to not use any Angular boilerplate because I think that when a developer uses it installs and creates many things that are not used in the project, for example, some Angular boilerplates have Interceptors, Css libraries like Tailwind, Bootstrap, Guards, and some kinds like that. These things add weight to the project and I think that is not necessary for this code challenge, so I decide to create my own Angular boilerplate with just the necessary things like Angular Material(some modules) and SASS, and Jest.


## Unit test information
The unit tests are running with Jest, I use it because is a good, efficient, and is the most common library to create a Unit test, in the project I create four small tests apart from the default test for the application (Create different components):
- Test to load data from the mock service response.
- Test to sort data by Download Speed
- Test to sort data by Upload Speed.
- Test to sort data by Lower Price
