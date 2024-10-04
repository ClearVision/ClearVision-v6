[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-link]: https://github.com/prettier/prettier
[release-badge]: https://img.shields.io/github/v/release/ClearVision/ClearVision-v6?include_prereleases&style=flat-square
[release-link]: https://github.com/ClearVision/ClearVision-v6/releases
[license-badge]: https://img.shields.io/github/license/ClearVision/ClearVision-v6?style=flat-square
[license-link]: https://github.com/ClearVision/ClearVision-v6/blob/master/LICENSE
[discord-badge]: https://discord.com/api/guilds/212324635356692500/widget.png?style=shield
[discord-link]: https://clearvision.github.io/join
[issues-badge]: https://img.shields.io/github/issues/ClearVision/ClearVision-v6?style=flat-square
[issues-link]: https://github.com/ClearVision/ClearVision-v6/issues
[prs-badge]: https://img.shields.io/github/issues-pr/ClearVision/ClearVision-v6?style=flat-square
[prs-link]: https://github.com/ClearVision/ClearVision-v6/pulls
[sass-badge]: https://img.shields.io/badge/Sass-CC6699.svg?style=flat-square&logo=sass&logoColor=white
[sass-link]: https://sass-lang.com/

<div align="center">

# ClearVision v6

[![code style: prettier][prettier-badge]][prettier-link]
[![Language: Sass][sass-badge]][sass-link]
[![Releases][release-badge]][release-link]
[![License][license-badge]][license-link]
[![Discord Server][discord-badge]][discord-link]
[![Issues][issues-badge]][issues-link]
[![Pull Requests][prs-badge]][prs-link]

![v6 Sapphire](https://i.imgur.com/U7UXrEN.png)

</div>

## Theme Editor

You can now customize the theme with a preview before downloading it to your computer.

Please keep in mind that **we do not manage the theme editor**, and cannot help with any bugs that come from using it.

> [Theme Editor](https://bdeditor.dev/theme/clearvision)

_Thank you to @Gibbu to providing this._

## Installing

Note: ClearVision doesn't actively support plugins (as in, we don't seek out and actively theme fixes to every new plugin). However, when a plugin is widely used, we try our best to stay compatible.

**For BD and Vencord:**

Download the theme file from [our official support server](https://clearvision.github.io/join), [the BetterDiscord Website](https://betterdiscord.app/theme/ClearVision) or [releases](https://github.com/ClearVision/ClearVision-v6/releases) and move it into your injector's themes folder:

- BetterDiscord: `%appdata%\betterdiscord\themes`
- Vencord: `%appdata%\vencord\themes`

**For Replugged:**

Check out our replugged theme [here!](https://github.com/ClearVision/CV-Replugged)

**For using the theme online:**

There are multiple ways to do this if your client offers using an online version. The suggested two are `https://clearvision.github.io/ClearVision-v6/main.css` or `https://raw.githubusercontent.com/ClearVision/ClearVision-v6/master/ClearVision_v6.theme.css`

For customizing the theme from there, you'll want to use custom css and add any variables you'd like to change. It should look something like this

```
:root {
  --main-color: red;
  --hover-color: yellow;
}
```

## Building from source

To build the theme from source, first install npm from the dependecies below, then you can run `npm install` to install all missing dependencies and `npm run build` to compile the theme into the `/public` folder.

### Dependencies

- [NodeJS/npm](https://nodejs.org/)
- [sass](https://www.npmjs.com/package/sass)
- [PostCSS Autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [PostCSS CLI](https://www.npmjs.com/package/postcss-cli)
- [rimraf](https://www.npmjs.com/package/rimraf) (for cleanup)
- [Prettier](https://www.npmjs.com/package/prettier) (code formatting)

## Contributing

You can run `npm run test` to compile the theme.
The `main.css` file will be in the `/test` directory, which can then be copied into BetterDiscord's Custom CSS, or placed in the themes folder and enabled in settings, make sure any other theme's are disabled for testing.
