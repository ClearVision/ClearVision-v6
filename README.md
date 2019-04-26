# ClearVision v6

## Installing
Download the theme file and move it into your BetterDiscord themes folder:

>[ClearVision_v6.theme.css](https://gitlab.com/ClearVision/v6/uploads/624c0aabf63c1146020bc6394465d1d3/ClearVision_v6.theme.css)

## Building from source
In order build the theme from source, you have to install [Sass](https://sass-lang.com) & [PostCSS Autoprefixer](https://github.com/postcss/autoprefixer).  
The CI of this repository uses [Node Sass](https://github.com/sass/node-sass) & [PostCSS CLI](https://github.com/postcss/postcss-cli) to build the theme.

When compiling, make sure to load/include the `src/` folder for the `@import` directives.

## Contributing
In order to contribute you need to be able to compile [Sass](https://sass-lang.com).

If you use [Node Sass](https://github.com/sass/node-sass) via CLI, you can run:
```
node-sass main.scss public/main.css --watch --include-path=src
```

If you use [Dart Sass](https://github.com/sass/dart-sass) via CLI, you can run:
```
sass main.scss:public/main.css --watch --load-path=src
```

This will compile the theme into the `public/` folder.