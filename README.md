# ClearVision v6

## Installing
Download the theme file and move it into your BetterDiscord themes folder:

>[ClearVision_v6.theme.css](https://clearvision.gitlab.io/download/v6/latest)

## Building from source
In order build the theme from source you have to install [Sass](https://sass-lang.com) & [PostCSS Autoprefixer](https://github.com/postcss/autoprefixer).  
The CI of this repository uses [Node Sass](https://github.com/sass/node-sass) & [PostCSS CLI](https://github.com/postcss/postcss-cli) to build the theme.

## Contributing
In order to contribute you need to be able to compile [Sass](https://sass-lang.com).

If you use [Node Sass](https://github.com/sass/node-sass) via CLI, you can run:
```
node-sass main.scss public/main.css --watch
```

If you use [Dart Sass](https://github.com/sass/dart-sass) via CLI, you can run:
```
sass main.scss:public/main.css --watch
```

This will compile the theme into the `/public` folder and watch changes.