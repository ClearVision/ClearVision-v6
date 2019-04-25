# ClearVision v6

## Contributing
In order to compile the theme locally, you have to install [Sass](https://sass-lang.com/install). This Repository uses [Node Sass](https://github.com/sass/node-sass) to compile.  
When compiling, make sure to load/include the `src` folder for `@import` directives.

If you use [Node Sass](https://github.com/sass/node-sass) via CLI, you can run:
```
node-sass --watch main.scss public/main.css --include-path=src
```

If you use [Dart Sass](https://github.com/sass/dart-sass) via CLI, you can run:
```
sass --watch main.scss:public/main.css --load-path=src
```