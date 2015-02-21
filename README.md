# Flux with deployd

This tiny classroom management tool is a demo of [Flux](http://facebook.github.io/flux/docs/overview.html) associated with [Deployd](http://www.deployd.com). Since [Deployd](http://www.deployd.com) creates a standard Rest API, this demo can be used with any other Rest API easily.

## Architecture

### The views
The view is composed of multiple component:

* The `app` component contains all the application and the other components.
* The `period` component display and allows modification of a school period. It contains the following sub-components:
    * The `listPeriods` component
    * The `period` component
* The `classroom` component

... More to come soon...


## Getting started

### Requirements

* [nodejs / npm](http://nodejs.org/)
* [gulp](http://gulpjs.com/) `npm install gulp -g`

### Setup and start the app

```shell
npm install
gulp
```
Browse to [http://localhost:3000](http://localhost:3000) to see the app.