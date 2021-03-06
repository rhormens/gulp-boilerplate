# Gulp Boilerplate
A simple way to start your project using Gulp.

## Requires

* [Node.JS](http://nodejs.org/)
* [Gulp](http://gulpjs.com)

## Modules list
* [gulp](https://github.com/gulpjs/gulp)
* [breakpoint-sass](https://github.com/Team-Sass/breakpoint)
* [browser-sync](http://www.browsersync.io/docs/gulp/)
* [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)
* [gulp-css-globbing](https://github.com/jsahlen/gulp-css-globbing)
* [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
* [gulp-livereload](https://github.com/vohof/gulp-livereload)
* [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins)
* [gulp-sass](https://github.com/dlmanning/gulp-sass)
* [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps)
* [gulp-watch](https://github.com/floatdrop/gulp-watch)
* [gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith)
* [gulp.concat](https://github.com/contra/gulp-concat)
* [gulp.rename](https://github.com/hparra/gulp-rename)
* [gulp.uglify](https://github.com/terinjokes/gulp-uglify)
* [gulp-util](https://github.com/gulpjs/gulp-util)


## Quick Start

Clone the git repo and run NPM

``` bash
git clone https://github.com/ciandt-dev/gulp-boilerplate.git
cd gulp-boilerplate
npm install
```

## Run
``` bash
gulp
```

### Example

Run `server` task, to start browser-sync and watch for `sass:dev` and `js:compress`:
``` bash
gulp server
```

## Only Windows users

Only for Windows users who want to delete/remove the bigger ```node_modules``` folder can do this with only two commands.

To install, try this:
```bash
npm install rimraf -g
```

In the root where is ```node_modules```, try:
```bash
rimraf node_modules
```

## License

The code is available under the [MIT License](LICENSE.md).