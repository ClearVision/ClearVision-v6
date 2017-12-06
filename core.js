/* ClearVision Core by Zerthox */
!function() {
    var config = "https://gitlab.com/ClearVisionTesters/ClearVision/raw/ClearVision6/config.json";
    var process = window.require("process"),
        fs = window.require("fs"),
        path = window.require("path"),
        rimraf = window.require("rimraf");
    window.cvcore = new class cvcore {
        constructor(config) {
            var self = this;
            this.enabled = false;
            this.files = {
                config: config
            };
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
            this.dir = path.resolve(dir, "ClearVision");
            this.storage = {
                create: function() {
                    if (!fs.existsSync(self.dir)) {
                        fs.mkdirSync(self.dir);
                    }
                },
                set: function(name, content) {
                    this.create();
                    var p = name.split(/[/\\]/g);
                    if (p.length > 1) {
                        let c = self.dir;
                        for (var i = 0; i < p.length - 1; i++) {
                            c = path.resolve(c, p[i]);
                            if (!fs.existsSync(c)) {
                                fs.mkdirSync(c);
                            }
                        }
                    }
                    return fs.writeFileSync(path.resolve(self.dir, name), content);
                },
                get: function(name) {
                    try {
                        return fs.readFileSync(path.resolve(self.dir, name)).toString();
                    }
                    catch (e) {
                        return null;
                    }
                },
                delete: function(name) {
                    return rimraf.sync(path.resolve(self.dir, name));
                },
                list: function() {
                    return fs.readdirSync(path.resolve(self.dir));
                }
            };
            this.storage.create();
            this.styles = [];
            self.css = {
                settings: self.storage.get("settings.css")
            };
            this.checkVersion();
        }
        enable() {
            var self = this;
            this.clearCSS();
            let c = this.storage.get("main.css");
            function f() {
                self.update();
                self.enabled = true;
                self.log("Enabled");
            }
            var s = (this.css.settings === null);
            if (c === null) {
                this.fetch(self.files.css.main, function(r) {
                    self.injectCSS("cv-main", r);
                    self.storage.set("main.css", r);
                    if (s) {
                        self.fetch(self.files.css.settings, function(r) {
                            self.css.settings = r;
                            self.storage.set("settings.css", r);
                            f();
                        });
                    }
                    else {
                        f();
                    }
                });
            }
            else if (s) {
                self.injectCSS("cv-main", c);
                self.fetch(self.files.css.settings, function(r) {
                    self.css.settings = r;
                    self.storage.set("settings.css", r);
                    f();
                });
            }
            else {
                this.injectCSS("cv-main", c);
                f();
            }
        }
        disable() {
            this.clearCSS();
            self.enabled = false;
            this.log("Disabled");
        }
        update() {
            this.injectCSS("cv-settings", this.convert(this.css.settings, this.settings.user));
            this.save();
        }
        save() {
            var o = {
                version: this.version,
                settings: {
                    user: this.settings.user
                }
            };
            this.storage.set("config.json", JSON.stringify(o));
        }
        checkVersion() {
            var self = this;
            var s = JSON.parse(this.storage.get("config.json"));
            this.fetch(this.files.config, function(r) {
                var r = JSON.parse(r);
                self.version = r.version;
                self.files.css = r.css;
                self.files.js = r.js;
                self.settings = {
                    default: r.settings.default,
                    user: s && s.settings && s instanceof Object ? s.settings.user : r.settings.default
                };
                if (self.version != (s &&s.version)) {
                    self.storage.delete("");
                    self.storage.create();
                    self.fetch(self.files.js.core, function(r) {
                        self.storage.set("core.js", r);
                        self.fetch(self.files.css.main, function(r) {
                            self.storage.set("main.css", r);
                            self.fetch(self.files.css.settings, function(r) {
                                self.storage.set("settings.css", r);
                                if (self.enabled) {
                                    self.disable();
                                    self.enable();
                                }
                                else {
                                    this.save();
                                }
                            });
                        });
                    });
                }
            });
        }
        injectCSS(name, css) {
            var s = document.getElementById(`#${name}`);
            if (s != null) {
                s.innerHTML = css;
            }
            else {
                let e = document.createElement("style");
                e.id = name
                e.innerHTML = css;
                document.head.append(e);
                this.styles.push(e);
            }
        }
        clearCSS() {
            for (var i = 0; i < this.styles.length; i++) {
                this.styles[i].remove();
                this.styles.splice(i);
            }
            var a = document.querySelectorAll(`#cv-main, #cv-settings`);
            for (var i = 0; i < a.length; i++) {
                a[i].remove();
            }
        }
        convert(css, vars) {
            try {
                vars = JSON.parse(vars);
            }
            catch (e) {}
            if (vars instanceof Object) {
                var a = css.match(/\$[\w-]+/g);
                for (var i = 0; i < a.length; i++) {
                    let prop = a[i].replace("$", "");
                    let value = vars[prop];
                    if (value === undefined) {
                        value = this.default[prop];
                    }
                    css = css.split(a[i]).join(value);
                }
                return css;
            }
            else {
                return undefined;
            }
        }
        serialize(settings) {
            try {
                settings = JSON.parse(settings);
            }
            catch (e) {}
            if (settings instanceof Object) {
                var s = "";
                for (var e in settings) {
                    s += `\n${e}: ${settings[e]};`;
                }
                s = s.replace("\n", "");
                return s;
            }
            else {
                return undefined;
            }
        }
        parse(settings) {
            var r = {};
            var a = settings.split(/[\n;]+/);
            for (var i = 0; i < a.length; i++) {
                let p = a[i].match(/[\w-]+?\s*?:/);
                if (p != null) {
                    let n = a[i].indexOf(":");
                    let v = a[i].slice(n + 1).trim();
                    if (RegExp(/^(["']).*\1$/).test(v)) {
                        v = v.slice(1, -1);
                    }
                    r[p[0].slice(0, -1).trim()] = v;
                }
            }
            return r;
        }
        fetch(url, callback) {
            var self = this,
                r = null;
            fetch(url).then(function(r) {
                if (r.status === 200) {
                    return r.text();
                }
                else {
                    function resolveStatus(c) {
                        var r = `[${c}] `;
                        switch(c) {
                            case 0: {
                                r += "Not connected, verify network.";
                                break;
                            }
                            case 404: {
                                r += "Requested page not found.";
                                break;
                            }
                            case 500: {
                                r += "Internal Server Error.";
                                break;
                            }
                            default: {
                                r += "Uncaught Error.";
                            }
                        }
                    }
                    self.alert("ClearVision Error", `Error fetching data from server: ${resolveStatus(r.status)}`);
                }
            }).then(callback);
        }
        log(text) {
            console.log(`%c[ClearVision] %c${text}`, `color: ${this.settings.user["main-color"]}`, "");
        }
        alert(title, text, target = document.querySelectorAll(".app-XZYfmp > .theme-dark")[1]) {
            var modal = `<div class="modal-2LIEKY" style="opacity: 1; transform: scale(1) translateZ(0px);">
                <div class="inner-1_1f7b">
                    <div class="modal-3HOjGZ modal-KwRiOq size-2pbXxj">
                        <div class="flex-lFgbSz flex-3B1Tl4 horizontal-2BEEBe horizontal-2VE-Fw flex-3B1Tl4 directionRow-yNbSvJ justifyStart-2yIZo0 alignCenter-3VxkQP noWrap-v6g9vO header-3sp3cE"
                            style="flex: 0 0 auto;">
                            <div class="flexChild-1KGW5q" style="flex: 1 1 auto;">
                                <h4 class="h4-2IXpeI title-1pmpPr size16-3IvaX_ height20-165WbF weightSemiBold-T8sxWH defaultColor-v22dK1 defaultMarginh4-jAopYe marginReset-3hwONl">${title}</h4>
                            </div>
                            <svg class="close-3ejNTg flexChild-1KGW5q" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 12 12">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M0 0h12v12H0"></path>
                                    <path class="fill" fill="currentColor" d="M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"></path>
                                </g>
                            </svg>
                        </div>
                        <div class="scrollerWrap-2uBjct content-1Cut5s scrollerThemed-19vinI themeGhostHairline-2H8SiW">
                            <div class="scroller-fzNley inner-tqJwAU container-1kADKt content-3KEfmo">${text}</div>
                        </div>
                    </div>
                </div>
            </div>`;
            function toNode(html) {
                var d = document.createElement("div");
                d.innerHTML = html;
                return d.firstElementChild;
            }
            function close() {
                target.innerHTML = "";
            }
            var b = toNode(`<div class="backdrop-2ohBEd" style="opacity: 0.85; background-color: rgb(0, 0, 0); transform: translateZ(0px);"></div>`);
            b.onclick = close;
            target.append(b);
            var e = toNode(modal);
            e.querySelector(".close-3ejNTg").onclick = close;
            target.append(e);
        }
    }(config);
}();
