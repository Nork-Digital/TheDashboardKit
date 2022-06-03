# TheDashboardFramework
 

## Summary
Starter theme for creating dashboards and digital products

Uses SCSS and AutoPrefixr, PICO.CSS for CSS framework with RESET.css, gulp-file-include for @@includ header and footer for less repetitive code and Gulp for all processing tasks. 

## Usage

The boilerplate is setup to use [Gulp] to compile SCSS, JS and all tasks, run it through [AutoPrefixr](https://github.com/ai/autoprefixer), lint, concatenate and minify JavaScript (with source maps), optimize images, with flexibility to add any additional tasks via the gulpfile. .

Open the folder directory in terminal and run `npm install` to pull in all Gulp dependencies. Run `gulp` to execute tasks. Code as you will.


- Compile `assets/sass/` to `style.css`

- Concatenate and minify all javascript in the folder `assets/js/main` to `assets/js/script.js`

- Minify and lint `assets/js/source/main.js` to `assets/js/main.min.js`

- Compress all imagens `assets/img-raw` to `assets/img`


### TODO

Supports [bower](https://github.com/bower/bower) to install and manage JavaScript dependencies in the `assets/js/vendor` folder.

### Features

1. Normalized stylesheet for cross-browser compatibility using Normalize.css version 3 (IE8+)
2. Easy to customize
3. Flexible grid 
4. Media Queries can be nested in each selector using SASS
5. SCSS with plenty of mixins ready to go
6. Gulp for processing all SASS, JavaScript and images, and cross-device refreshing with BrowserSync
7. Much much more



### Contributing:

Anyone and everyone is welcome to contribute and fix!

