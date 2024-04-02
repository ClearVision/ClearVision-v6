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

<div align="center">

# ClearVision v6

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

__For BD and Vencord:__

Download the theme file from [our official support server](https://clearvision.github.io/join), [the BetterDiscord Website](https://betterdiscord.app/theme/ClearVision) or [releases](https://github.com/ClearVision/ClearVision-v6/releases) and move it into your injector's themes folder:

- BetterDiscord: `%appdata%\betterdiscord\themes`
- Vencord: `%appdata%\vencord\themes`

__For Replugged:__

Check out our replugged theme [here!](https://github.com/ClearVision/CV-Replugged)

## Building from source

To build the theme from source, you can simply run `npm install` to install all missing dependencies and `npm run build` to compile the theme into the `/public` folder.

### Dependencies

- [NodeJS/npm](https://nodejs.org/)
- [sass](https://www.npmjs.com/package/sass)
- [PostCSS Autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [PostCSS CLI](https://www.npmjs.com/package/postcss-cli)
- [rimraf](https://www.npmjs.com/package/rimraf) (for cleanup)
- [Prettier](https://www.npmjs.com/package/prettier) (code formatting)

## Contributing

You can run `npm run test` to compile the theme.
The `main.css` file will be in the `/test` directory, which can then be copied into BetterDiscord's Custom CSS.
