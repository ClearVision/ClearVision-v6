//META{"name":"ClearVision"}*//

class ClearVision {
	getName() {
		return "ClearVision";
	}
	getDescription() {
		return "Auto-updating theme with easy customization, Website: zerthox.github.io/ClearVision | Discord: discord.me/clearvision";
	}
	getVersion() {
		return "6-pre";
	}
	getAuthor() {
		return "Zerthox";
	}
	getSettingsPanel() {
		var input =(window.cvcore && window.cvcore.serialize(window.cvcore.settings.user)) ? window.cvcore.serialize(window.cvcore.settings.user) : "Error: Settings not found";
		var html = $(`<textarea class="cv-textarea" style="height: 220px; margin: 5px; padding: 3px 5px; flex-grow: 1; font-family: Menlo, Consolas, Monaco, monospace;">${input}</textarea>`);
		html.on("input", function() {
			var v = $(this).val();
			window.cvcore.settings.user = window.cvcore.parse(v);
			window.cvcore.update();
		});
		return $('<div class="cv-container" style="display: flex;"></div>').append(html)[0];
	}
	constructor() {
		if (!window.cvcore) {
			var s = document.createElement("script");
			s.type = "text/javascript";
			var r = null;
			try {
				var process = window.require("process"),
					fs = window.require("fs"),
					path = window.require("path");
				let dir;
				switch (process.platform) {
					case "win32": {
						dir = path.resolve(process.env.appdata);
						break;
					}
					case "darwin": {
						dir = path.resolve(process.env.HOME, "Library/Preferences");
						break;
					}
					default: {
						dir = path.resolve(process.env.HOME, ".config");
					}
				}
				let p = path.resolve(dir, "ClearVision", "core.js");
				r = fs.readFileSync(p).toString();
			}
			catch (e) {
				s.src = "https://gitlab.com/ClearVisionTesters/ClearVision/raw/ClearVision6/core.js";
			}
			if (r === null) {
				s.src = "https://gitlab.com/ClearVisionTesters/ClearVision/raw/ClearVision6/core.js";
			}
			else {
				s.innerHTML = r;
			}
			document.head.append(s);
		}
	}
	start() {
		window.cvcore.enable();
	}
	stop() {
		window.cvcore.disable();		
	}
	observer(e) {}
	onMessage() {}
	onSwitch() {}
	load() {}
	unload() {}
}
