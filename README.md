#Install Dependencies

Angular 1.6

Gulp

Browserif

#####Setup a project folder and create a package.json file:

`$ mkdir my-ng-seeds && cd my-ng-seeds
$ npm init`

#####Do the same for Bower:

`$ bower init`

#####Install global dependencies:

`$ npm install -g gulp bower`

#####Bower install directory
You can specify where you want the dependencies (commonly known as bower components)
installed to by adding a .bowerrc file and adding the following code:

`{
  "directory": "/app/bower_components"
}`

#####Install local dependencies:
######NPM

`$ npm install gulp bower gulp-clean gulp-jshint gulp-uglify gulp-minify-css gulp-connect --save`

######Bower

`$ bower install angular angular-animate angular-route jquery animate.css bootstrap fontawesome --save`

#####Install jshint

`npm install --save-dev jshint`

#####Install run-sequence

`npm install run-sequence`