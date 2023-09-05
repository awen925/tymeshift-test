# Tymeshift Test Application

Simple application for `all locations`.

## Author

Aron Wyen

## Introduction

This app has 2 main parts - Location-Card page and Card-Detail modal. \
Here the timezone for each location is set manually by myself and the time in the location card is continuously updated after every 1 minute.

## How to install the application

You can install this app by running `yarn` script. \
About node version and npm version, you can find them at `.npmrc`. \
Then you can see the application by simply running the script - `yarn start`

## Design Decisions

Before starting the home task, I made some decisions regarding how to build this app.

### Tech stacks

React.js, MUI, Context API, react-query, Jest

### Design Architecture

#### UI library

Following the requirements in the instruction, as a frontend UI library I chose `React.js`.

#### State management

This application is quite simple app, so I decided to use `Context API` to manage global states (view counts of each location card).

#### Styling

In this application, I used MUI v5 for the styling.

#### Handle data fetching dealing with remote apis

`react-query` with `axios`

#### Error handling or Dirty actions

`ErrorBoundary` - This is set for catching up UI errors. \
And for the errors during the server api call, I handled it in `Layout` component.

#### Unit testing

I did unit testing for some of components and they are in `src/__test__`.
In order to see how they are working, you can run `yarn test`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### `yarn lint:fix`

If you want to fix lint issues through whole codebase, then you should need this script run.
