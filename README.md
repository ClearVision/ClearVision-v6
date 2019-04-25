# ClearVision v6

## Installing
Download the theme file and move it into your BetterDiscord themes folder.

[ClearVision_v6.theme.css](https://gitlab.com/ClearVision/v6/uploads/624c0aabf63c1146020bc6394465d1d3/ClearVision_v6.theme.css)



## Building from source
In order to build the theme from source, you have to install [Sass](https://sass-lang.com/install). This Repository uses [Node Sass](https://github.com/sass/node-sass) to compile.  
When compiling, make sure to load/include the `src` folder for `@import` directives.

If you use [Node Sass](https://github.com/sass/node-sass) via CLI, you can run:
```
node-sass --watch main.scss public/main.css --include-path=src
```

If you use [Dart Sass](https://github.com/sass/dart-sass) via CLI, you can run:
```
sass --watch main.scss:public/main.css --load-path=src
```