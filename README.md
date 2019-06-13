<div align="center">

# ClearVision v6

[![Releases](https://img.shields.io/github/release-pre/ClearVision/v6.svg?style=flat-square)](https://github.com/ClearVision/v6/releases)
[![License](https://img.shields.io/github/license/ClearVision/v6.svg?style=flat-square)](https://github.com/ClearVision/v6/blob/master/LICENSE)
[![Discord Server](https://img.shields.io/discord/212324635356692500.svg?style=flat-square)](https://clearvision.gitlab.io/join)
[![Issues](https://img.shields.io/github/issues/ClearVision/v6.svg?style=flat-square)](https://github.com/ClearVision/v6/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/ClearVision/v6.svg?style=flat-square)](https://github.com/ClearVision/v6/pulls)

![v6 Sapphire](https://github.com/Zerthox/ClearVision/raw/master/screenshots/v6.png)

</div>

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