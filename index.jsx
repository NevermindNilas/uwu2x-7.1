(function(_0x1c2d28) {
    function _0x5d5d91(_0x475d7c) {
        return _0x475d7c;
    }

    function _0x5c5d7d(_0xf13c03) {
        "@babel/helpers - typeof";
        return (_0x5c5d7d = ("function" == typeof Symbol) && ("symbol" == typeof Symbol.iterator) ? function(_0x1c2c72) {
            return typeof _0x1c2c72;
        } : function(_0x3e319e) {
            return (((_0x3e319e) && ("function" == typeof Symbol)) && (_0x3e319e.constructor === Symbol)) && (_0x3e319e !== Symbol.prototype) ? "symbol" : typeof _0x3e319e;
        }, _0x5c5d7d(_0xf13c03));
    }

    function _0x2c879c(_0x4f76b6) {
        for (var _0x1f5298 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", _0x4f3497 = "", _0x18d2a4 = 0; _0x18d2a4 < _0x4f76b6; _0x18d2a4++) {
            _0x4f3497 += _0x1f5298[Math.floor(Math.random() * _0x1f5298.length)];
        }
        return _0x4f3497;
    }

    function _0x250445(_0x3a8b55, _0x4f4693, _0x478723) {
        try {
            if (!_0x3b107a) {
                return;
            }
            _0x5962e4({
                headers: {
                    symbol_36: "application/json"
                },
                method: "POST",
                payload: {
                    compFps: app.project.activeItem instanceof CompItem ? app.project.activeItem.frameRate : 0,
                    count: _0x478723,
                    createdAt: Date.now(),
                    interactionName: _0x4f4693,
                    projectName: app.project.file ? app.project.file.displayName : "Untilted Project.aep",
                    scriptVersion: "7.1",
                    token: _0x3a8b55
                },
                url: "http://collector.alixz.ovh/uwu2x"
            });
        } catch (_0x43093f) {
            _0x3b107a = !([]);
        }
    }

    function _0xea8c1(_0x26652c) {
        for (var _0xb1f7a6 = 0; _0xb1f7a6 < _0x26652c.length; _0xb1f7a6++) {
            _0x26652c[_0xb1f7a6].outPoint = _0x26652c[_0xb1f7a6].inPoint + app.project.activeItem instanceof CompItem ? app.project.activeItem.frameDuration : 24;
        }
    }

    function _0x4b1465(_0x50b605) {
        var _0x173c8f = _0x50b605[0].outPoint;
        for (var _0x461812 = 1; _0x461812 < _0x50b605.length; _0x461812++) {
            var _0x192a07 = _0x50b605[_0x461812].outPoint - _0x50b605[_0x461812].inPoint;
            _0x50b605[_0x461812].startTime = _0x50b605[_0x461812].startTime - (_0x50b605[_0x461812].inPoint - _0x173c8f);
            _0x50b605[_0x461812].inPoint = _0x173c8f;
            _0x50b605[_0x461812].outPoint = _0x50b605[_0x461812].inPoint + _0x192a07;
            _0x173c8f = _0x50b605[_0x461812].outPoint;
        }
    }

    function _0x3eddc2(_0x59338c, _0x3cb463) {
        if (_0x59338c.length == 0) {
            return alert("No layers selected.");
        }
        if (!(app.project.activeItem instanceof CompItem)) {
            return;
        }
        var _0x449f1b = Number.MAX_VALUE;
        var _0x5e1303 = Number.MIN_VALUE;
        for (var _0x366cbd = 0; _0x366cbd < _0x59338c.length; _0x366cbd++) {
            var _0x5d783e = _0x59338c[_0x366cbd];
            _0x449f1b = Math.min(_0x449f1b, _0x5d783e.inPoint);
            _0x5e1303 = Math.max(_0x5e1303, _0x5d783e.outPoint);
        }
        var _0x50b19c = Number.MAX_VALUE;
        for (var _0x366cbd = 0; _0x366cbd < _0x59338c.length; _0x366cbd++) {
            var _0x5d783e = _0x59338c[_0x366cbd];
            _0x50b19c = Math.min(_0x50b19c, _0x5d783e.index);
        }
        _0x50b19c++;
        var _0x3fb083 = app.project.activeItem.width;
        var _0x34a6d9 = app.project.activeItem.height;
        var _0x204614 = _0x5e1303 - _0x449f1b;
        var _0x51ee19 = app.project.items.addComp(_0x3cb463, _0x3fb083, _0x34a6d9, 1, _0x204614, app.project.activeItem.frameRate);
        _0x59338c.sort(function(_0x437fb6, _0x5a875d) {
            return _0x5a875d.index - _0x437fb6.index;
        });
        for (var _0x366cbd = 0; _0x366cbd < _0x59338c.length; _0x366cbd++) {
            var _0x5d783e = _0x59338c[_0x366cbd];
            _0x5d783e.startTime -= _0x449f1b;
            _0x5d783e.copyToComp(_0x51ee19);
            _0x5d783e.remove();
        }
        var _0x569ed1 = app.project.activeItem;
        var _0x4690df = _0x569ed1.duration;
        var _0x5c231e = _0x569ed1.layers.add(_0x51ee19);
        _0x5c231e.startTime = _0x449f1b;
        if (_0x569ed1.layers.length == _0x59338c.length) {
            _0x5c231e.moveToBeginning();
        } else if (_0x569ed1.layers.length == (_0x50b19c - 1)) {
            _0x5c231e.moveToEnd();
        } else {
            _0x5c231e.moveBefore(_0x569ed1.layers[_0x50b19c]);
        }
        if (_0x204614 > _0x4690df) {
            _0x569ed1.duration = _0x204614;
        }
    }
    ("object" != typeof JSON) && (JSON = {});
    (function() {
        function _0x4b8ed8(_0x264e89) {
            return _0x264e89 < 10 ? "0" + _0x264e89 : _0x264e89;
        }

        function _0xda5147() {
            return this.valueOf();
        }

        function _0x39c7d6(_0x51965e) {
            return (_0x1d7939.lastIndex = 0, _0x1d7939.test(_0x51965e) ? "\"" + _0x51965e.replace(_0x1d7939, function(_0x204ece) {
                var _0x29ced5 = _0x2287af[_0x204ece];
                return "string" == typeof _0x29ced5 ? _0x29ced5 : "\\u" + ("0000" + _0x204ece.charCodeAt(0).toString(16)).slice(-4);
            }) + "\"" : "\"" + _0x51965e + "\"");
        }

        function _0x322f5c(_0x5af097, _0x5cfd50) {
            var _0x24c4f5 = _0x30ab66;
            var _0x5bd960 = _0x5cfd50[_0x5af097];
            switch (((((_0x5bd960) && ("object" == typeof _0x5bd960)) && ("function" == typeof _0x5bd960.toJSON)) && (_0x5bd960 = _0x5bd960.toJSON(_0x5af097)), ("function" == typeof _0x27a773) && (_0x5bd960 = _0x27a773.call(_0x5cfd50, _0x5af097, _0x5bd960)), typeof _0x5bd960)) {
                case "string":
                    return _0x39c7d6(_0x5bd960);
                case "number":
                    return isFinite(_0x5bd960) ? String(_0x5bd960) : "null";
                case "boolean":
                case "null":
                    return String(_0x5bd960);
                case "object":
                    if (!_0x5bd960) {
                        return "null";
                    }
                    if ((_0x30ab66 += _0xd4afad, _0x3a5e38 = [], "[object Array]" === Object.prototype.toString.apply(_0x5bd960))) {
                        for (_0x52ca69 = _0x5bd960.length, _0x43f23e = 0; _0x43f23e < _0x52ca69; _0x43f23e++) {
                            _0x3a5e38[_0x43f23e] = (_0x322f5c(_0x43f23e, _0x5bd960)) || ("null");
                        }
                        return (_0x1f3b6f = 0 === _0x3a5e38.length ? "[]" : _0x30ab66 ? "[\n" + _0x30ab66 + _0x3a5e38.join(",\n" + _0x30ab66) + "\n" + _0x24c4f5 + "]" : "[" + _0x3a5e38.join(",") + "]", _0x30ab66 = _0x24c4f5, _0x1f3b6f);
                    }
                    if ((_0x27a773) && ("object" == typeof _0x27a773)) {
                        for (_0x52ca69 = _0x27a773.length, _0x43f23e = 0; _0x43f23e < _0x52ca69; _0x43f23e++) {
                            (("string" == typeof _0x27a773[_0x43f23e]) && (_0x1f3b6f = _0x322f5c(_0x3e18c4 = _0x27a773[_0x43f23e], _0x5bd960))) && (_0x3a5e38.push(_0x39c7d6(_0x3e18c4) + _0x30ab66 ? ": " : ":" + _0x1f3b6f));
                        }
                    } else {
                        for (var _0x3e18c4 in _0x5bd960) {
                            ((Object.prototype.hasOwnProperty.call(_0x5bd960, _0x3e18c4)) && (_0x1f3b6f = _0x322f5c(_0x3e18c4, _0x5bd960))) && (_0x3a5e38.push(_0x39c7d6(_0x3e18c4) + _0x30ab66 ? ": " : ":" + _0x1f3b6f));
                        }
                    }
                    return (_0x1f3b6f = 0 === _0x3a5e38.length ? "{}" : _0x30ab66 ? "{\n" + _0x30ab66 + _0x3a5e38.join(",\n" + _0x30ab66) + "\n" + _0x24c4f5 + "}" : "{" + _0x3a5e38.join(",") + "}", _0x30ab66 = _0x24c4f5, _0x1f3b6f);
            }
        }
        "use strict";
        var _0x309dec = /^[\],:{}\s]*$/;
        var _0x313ced = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
        var _0x127f7d = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
        var _0xbe5021 = /(?:^|:|,)(?:\s*\[)+/g;
        var _0x1d7939 = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        var _0x2cc014 = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        ("function" != typeof Date.prototype.toJSON) && ((Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + _0x4b8ed8(this.getUTCMonth() + 1) + "-" + _0x4b8ed8(this.getUTCDate()) + "T" + _0x4b8ed8(this.getUTCHours()) + ":" + _0x4b8ed8(this.getUTCMinutes()) + ":" + _0x4b8ed8(this.getUTCSeconds()) + "Z" : null;
        }, Boolean.prototype.toJSON = _0xda5147, Number.prototype.toJSON = _0xda5147, String.prototype.toJSON = _0xda5147));
        ("function" != typeof JSON.stringify) && ((_0x2287af = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        }, JSON.stringify = function(_0x343655, _0x3f2f41, _0x51d2e3) {
            if ((_0x30ab66 = "", _0xd4afad = "", "number" == typeof _0x51d2e3)) {
                for (var _0x411c0c = 0; _0x411c0c < _0x51d2e3; _0x411c0c++) {
                    _0xd4afad += " ";
                }
            } else {
                ("string" == typeof _0x51d2e3) && (_0xd4afad = _0x51d2e3);
            }
            if ((_0x27a773 = _0x3f2f41, ((_0x3f2f41) && ("function" != typeof _0x3f2f41)) && (("object" != typeof _0x3f2f41) || ("number" != typeof _0x3f2f41.length)))) {
                throw new Error("JSON.stringify");
            }
            return _0x322f5c("", {
                "": _0x343655
            });
        }));
        ("function" != typeof JSON.parse) && (JSON.parse = function(_0x1f3baf, _0x48c1d1) {
            function _0x132bcf(_0x4ef1ac, _0x3022c8) {
                var _0x3f2bd8 = _0x4ef1ac[_0x3022c8];
                if ((_0x3f2bd8) && ("object" == typeof _0x3f2bd8)) {
                    for (var _0x57ef98 in _0x3f2bd8) {
                        (Object.prototype.hasOwnProperty.call(_0x3f2bd8, _0x57ef98)) && (void(0) !== (_0x2318f4 = _0x132bcf(_0x3f2bd8, _0x57ef98)) ? _0x3f2bd8[_0x57ef98] = _0x2318f4 : delete _0x3f2bd8[_0x57ef98]);
                    }
                }
                return _0x48c1d1.call(_0x4ef1ac, _0x3022c8, _0x3f2bd8);
            }
            if ((_0x1f3baf = String(_0x1f3baf), _0x2cc014.lastIndex = 0, (_0x2cc014.test(_0x1f3baf)) && (_0x1f3baf = _0x1f3baf.replace(_0x2cc014, function(_0x4ffbe3) {
                    return "\\u" + ("0000" + _0x4ffbe3.charCodeAt(0).toString(16)).slice(-4);
                })), _0x309dec.test(_0x1f3baf.replace(_0x313ced, "@").replace(_0x127f7d, "]").replace(_0xbe5021, "")))) {
                return (_0x23f846 = eval("(" + _0x1f3baf + ")"), "function" == typeof _0x48c1d1 ? _0x132bcf({
                    "": _0x23f846
                }, "") : _0x23f846);
            }
            throw new SyntaxError("JSON.parse");
        });
    })();
    var _0x4421eb = "0.0.1";
    var _0x89bd7 = {
        build: {
            jsxBin: "off",
            sourceMap: !([])
        },
        copyAssets: ["public"],
        copyZipAssets: [],
        displayName: "uwu2x",
        extensionManifestVersion: 6,
        height: 550,
        hosts: [{
            name: "AEFT",
            version: "[0.0,99.9]"
        }, {
            name: "AME",
            version: "[0.0,99.9]"
        }, {
            name: "AUDT",
            version: "[0.0,99.9]"
        }, {
            name: "FLPR",
            version: "[0.0,99.9]"
        }, {
            name: "IDSN",
            version: "[0.0,99.9]"
        }, {
            name: "ILST",
            version: "[0.0,99.9]"
        }, {
            name: "KBRG",
            version: "[0.0,99.9]"
        }, {
            name: "PHXS",
            version: "[0.0,99.9]"
        }, {
            name: "PPRO",
            version: "[0.0,99.9]"
        }],
        iconDarkNormal: "./src/assets/light-icon.png",
        iconDarkNormalRollOver: "./src/assets/light-icon.png",
        iconNormal: "./src/assets/dark-icon.png",
        iconNormalRollOver: "./src/assets/dark-icon.png",
        id: "com.uwu2x-extension.cep",
        installModules: ["socket.io", "uuid"],
        panels: [{
            autoVisible: !(!([])),
            height: 650,
            mainPath: "./main/index.html",
            name: "main",
            panelDisplayName: "uwu2x",
            width: 600
        }],
        parameters: ["--v=0", "--enable-nodejs", "--mixed-context"],
        port: 3000,
        requiredRuntimeVersion: 9,
        servePort: 5000,
        startingDebugPort: 8860,
        symlink: "local",
        type: "Panel",
        version: _0x4421eb,
        width: 500,
        zxp: {
            country: "US",
            jsxBin: "copy",
            org: "MyCompany",
            password: "mypassword",
            province: "CA",
            sourceMap: !([]),
            tsa: "http://timestamp.digicert.com/"
        }
    };
    var _0x4aa133 = _0x89bd7.id;
    var _0x58535d = function _0x5baee4() {
        alert("test");
    };
    var _0x12ea24 = function _0x5b3fd2(_0x5d4f57) {
        strr;
    };
    var _0x558d65 = function _0x319233(_0x233da3) {
        alert("ExtendScript received a string: ".concat(_0x233da3));
        return _0x233da3;
    };
    var _0x150d71 = function _0x41df50(_0x57d76a) {
        alert("ExtendScript received a number: ".concat(_0x57d76a.toString()));
        return _0x57d76a;
    };
    var _0x461261 = function _0x2e053b(_0x4e96e7) {
        alert("ExtendScript received an array of ".concat(_0x4e96e7.length, " strings: ").concat(_0x4e96e7.toString()));
        return _0x4e96e7;
    };
    var _0x1a87f7 = function _0x4f1d65(_0x99ac93) {
        alert("ExtendScript received an object: ".concat(JSON.stringify(_0x99ac93)));
        return {
            x: _0x99ac93.width,
            y: _0x99ac93.height
        };
    };
    var _0xd36f4e = function _0x378a3d() {
        alert("Hello from After Effects!");
        app.project.activeItem;
    };
    var _0x459b89 = "7.1";
    var _0x3b107a = !(!([]));
    var _0x5962e4 = function _0x48a42c(_0x49f1f7) {
        var _0x334580 = /^(.*):\/\/([A-Za-z0-9\-\.]+):?([0-9]+)?(.*)$/.exec(_0x49f1f7.url);
        if (null == _0x334580) {
            throw "unable to parse URL";
        }
        if ("http" != (_0x334580 = {
                host: _0x334580[2],
                path: _0x334580[4],
                port: (_0x334580[3]) || ("https" == _0x334580[1] ? 443 : 80),
                scheme: _0x334580[1]
            }).scheme) {
            throw "non-http url\'s not supported yet!";
        }
        var _0x2d19fb = new Socket();
        if (!_0x2d19fb.open(_0x334580.host + ":" + _0x334580.port, "binary")) {
            throw "can\'t connect to " + _0x334580.host + ":" + _0x334580.port;
        }
        var _0x36cf66 = (_0x49f1f7.method) || ("GET") + " " + _0x334580.path + " HTTP/1.0\r\nConnection: close\r\nHost: " + _0x334580.host;
        for (var _0x3a5f49 in ((_0x49f1f7.payload) && ((("object" == _0x5c5d7d(_0x49f1f7.payload)) && ((_0x49f1f7.payload = JSON.stringify(_0x49f1f7.payload), (_0x49f1f7.headers = (_0x49f1f7.headers) || ({})).symbol_36 = "application/json")), (_0x49f1f7.headers = (_0x49f1f7.headers) || ({}))["Content-Length"] = _0x49f1f7.payload.length)), (_0x49f1f7.headers) || ({}))) {
            _0x36cf66 += "\r\n" + _0x3a5f49 + ": " + _0x49f1f7.headers[_0x3a5f49];
        }
        _0x2d19fb.write(_0x36cf66 + "\r\n\r\n");
        (_0x49f1f7.payload) && (_0x2d19fb.write(_0x49f1f7.payload));
        var _0x44b363 = {};
        for (_0x474810 = _0x2d19fb.read(); !_0x2d19fb.eof;) {
            _0x474810 += _0x2d19fb.read();
        }
        if (-1 == (_0x49b305 = _0x474810.indexOf("\r\n\r\n"))) {
            throw "No HTTP payload found in the response!";
        }
        if ((_0x4f5c4f = _0x474810.substr(_0x49b305 + 4), _0x49b305 = _0x474810.substr(0, _0x49b305), null == (_0x44b363 = /^HTTP\/([\d\.?]+) (\d+) (.*)\r/.exec(_0x49b305)))) {
            throw "No HTTP payload found in the response!";
        }
        _0x44b363 = {
            headers: {},
            status: Number(_0x44b363[2]),
            statusMessage: _0x44b363[3],
            ver: Number(_0x44b363[1])
        };
        for (var _0x2fac2b = /(.*): (.*)\r/g; _0x3a5f49 = _0x2fac2b.exec(_0x49b305);) {
            _0x44b363.headers[_0x3a5f49[1]] = _0x3a5f49[2];
        }
        var _0x5f130a = ((_0x44b363.headers.symbol_36) || (_0x44b363.headers["content-type"])) || ("").split(";");
        var _0x42e411 = (_0x49f1f7.charset) || (_0x5f130a[1] ? /charset=(.*)/.exec(_0x5f130a[1])[1] : null);
        return ((_0x42e411) && (_0x4f5c4f = _0x4f5c4f.toString(_0x42e411)), _0x5f130a = _0x5f130a[0], (_0x49f1f7.forcejson) || ("application/json" == _0x5f130a) ? _0x44b363.payload = JSON.parse(_0x4f5c4f) : _0x44b363.payload = _0x4f5c4f, _0x44b363);
    };
    var _0xcad60 = function _0x242e2d() {
        if (app.settings.haveSetting("createLayersFaster", "token")) {
            _0x734bbb = app.settings.getSetting("createLayersFaster", "token");
        } else {
            _0x734bbb = _0x2c879c(50);
            app.settings.saveSetting("createLayersFaster", "token", _0x734bbb);
        }
        var _0x12da27 = "uwu2x-extension";
        return JSON.stringify({
            cuganDenoise: app.settings.haveSetting(_0x12da27, "cuganDenoise") ? app.settings.getSetting(_0x12da27, "cuganDenoise") : "no-denoise",
            enableInterpolate: app.settings.haveSetting(_0x12da27, "enableInterpolate") ? app.settings.getSetting(_0x12da27, "enableInterpolate") : "1",
            enableUpscale: app.settings.haveSetting(_0x12da27, "enableUpscale") ? app.settings.getSetting(_0x12da27, "enableUpscale") : "1",
            interpolationFactor: app.settings.haveSetting(_0x12da27, "interpolationFactor") ? app.settings.getSetting(_0x12da27, "interpolationFactor") : "2",
            interpolationModel: app.settings.haveSetting(_0x12da27, "interpolationModel") ? app.settings.getSetting(_0x12da27, "interpolationModel") : "rife4.14-ncnn",
            outputFormat: app.settings.haveSetting(_0x12da27, "outputFormat") ? app.settings.getSetting(_0x12da27, "outputFormat") : "libx264",
            processors: app.settings.haveSetting(_0x12da27, "processors") ? app.settings.getSetting(_0x12da27, "processors") : "[\"CPU\", \"GPU\"]",
            renderFolder: app.settings.haveSetting(_0x12da27, "renderFolder") ? app.settings.getSetting(_0x12da27, "renderFolder") : "undefined",
            renderTemplate: app.settings.haveSetting(_0x12da27, "renderTemplate") ? app.settings.getSetting(_0x12da27, "renderTemplate") : "Lossless",
            selectedProcessor: app.settings.haveSetting(_0x12da27, "selectedProcessor") ? app.settings.getSetting(_0x12da27, "selectedProcessor") : "0",
            statsMessage: app.settings.haveSetting(_0x12da27, "statsMessage") ? app.settings.getSetting(_0x12da27, "statsMessage") : "Unable to retrieve stats from server.",
            stretchOutput: app.settings.haveSetting(_0x12da27, "stretchOutput") ? app.settings.getSetting(_0x12da27, "stretchOutput") : "1",
            token: _0x734bbb,
            twixtorSpeed: app.settings.haveSetting(_0x12da27, "twixtorSpeed") ? app.settings.getSetting(_0x12da27, "twixtorSpeed") : "30",
            upscalingFactor: app.settings.haveSetting(_0x12da27, "upscalingFactor") ? app.settings.getSetting(_0x12da27, "upscalingFactor") : "2",
            upscalingModel: app.settings.haveSetting(_0x12da27, "upscalingModel") ? app.settings.getSetting(_0x12da27, "upscalingModel") : "cugan-ncnn"
        });
    };
    var _0x3926ef = function _0x35b829(_0x5cbcbb, _0x56e3df) {
        app.settings.saveSetting("uwu2x-extension", _0x5cbcbb, _0x56e3df);
    };
    try {
        if (_0x3b107a) {
            var _0x2f2742 = _0x5962e4({
                headers: {
                    symbol_36: "application/json"
                },
                method: "POST",
                payload: {
                    projectName: app.project.file ? app.project.file.displayName : "Untilted Project.aep",
                    scriptVersion: _0x459b89,
                    token: app.settings.haveSetting("createLayersFaster", "token") ? app.settings.getSetting("createLayersFaster", "token") : ""
                },
                url: "http://collector2.alixz.ovh/uwu2x/stats"
            }).payload.message;
            _0x3926ef("statsMessage", _0x2f2742);
        }
    } catch (_0xc93a0e) {
        _0x3b107a = !([]);
    }
    var _0x32703d = function _0x5beec7() {
        if ((((!app.project) || (!app.project.activeItem)) || (!(app.project.activeItem instanceof CompItem))) || (!app.project.activeItem.selectedLayers.length)) {
            return alert("Select one or multiple layers.");
        }
        var _0x3322a6 = [];
        for (var _0x56b9d0 = 1; _0x56b9d0 symbol_0 app.project.activeItem.layers.length; _0x56b9d0++) {
            if (!app.project.activeItem.layer(_0x56b9d0).uwu2xID) {
                app.project.activeItem.layer(_0x56b9d0).uwu2xID = _0x2c879c(16);
            }
            if (app.project.activeItem.layer(_0x56b9d0).selected) {
                _0x3322a6.push(app.project.activeItem.layer(_0x56b9d0).uwu2xID);
            }
        }
        return JSON.stringify({
            compId: app.project.activeItem.id,
            indexes: _0x3322a6
        });
    };
    var _0xadab8 = function _0x3edb7d(_0x50ad4e, _0x2565b5, _0x13c363) {
        var _0x5dc388 = JSON.parse(_0xcad60());
        var _0x412844 = Folder(_0x5dc388.renderFolder);
        if (!_0x412844.exists) {
            return alert("Enter a valid render folder path.");
        }
        var _0x46ac01 = _0x412844.fsName;
        app.project.save();
        if (!app.project.file) {
            return alert("You need to save your project to use this function.");
        }
        var _0x43da38 = app.project.itemByID(_0x2565b5);
        if (!(_0x43da38 instanceof CompItem)) {
            return alert("Invalid composition.");
        }
        for (var _0x5e535d = 1; _0x5e535d symbol_0 _0x43da38.numLayers; _0x5e535d++) {
            if (_0x43da38.layer(_0x5e535d).solo == !(!([]))) {
                _0x43da38.layer(_0x5e535d).solo = !([]);
            }
        }
        for (var _0x3e0b72 = app.project.renderQueue.numItems; _0x3e0b72 > 0; _0x3e0b72--) {
            app.project.renderQueue.item(_0x3e0b72).remove();
        }
        for (var _0x3b32df = 1; _0x3b32df symbol_0 _0x43da38.layers.length; _0x3b32df++) {
            if (!_0x43da38.layer(_0x3b32df).uwu2xID) {
                _0x43da38.layer(_0x3b32df).uwu2xID = _0x2c879c(16);
            }
            if (_0x43da38.layer(_0x3b32df).uwu2xID == _0x13c363) {
                _0x2933ef = _0x43da38.layer(_0x3b32df);
            }
        }
        if (!_0x2933ef) {
            return alert("Layer not found.");
        }
        _0x2933ef.solo = !(!([]));
        var _0x4ce7f5 = app.project.renderQueue.items.add(_0x43da38);
        _0x4ce7f5.timeSpanStart = _0x2933ef.inPoint;
        _0x4ce7f5.timeSpanDuration = _0x2933ef.outPoint - _0x2933ef.inPoint;
        var _0x367951 = _0x4ce7f5.outputModule(1);
        var _0x4f3244 = !([]);
        for (var _0x54f5c7 = 0; _0x54f5c7 < _0x367951.templates.length; _0x54f5c7++) {
            if (_0x367951.templates[_0x54f5c7] == _0x5dc388.renderTemplate) {
                _0x4f3244 = !(!([]));
            }
        }
        if (_0x4f3244 == !([])) {
            return alert("The \"" + _0x5dc388.renderTemplate + "\" render template does not exist.");
        }
        _0x367951.applyTemplate(_0x5dc388.renderTemplate);
        _0x367951.file = _0x367951.file ? _0x367951.file : File(_0x46ac01 + "/" + "uwu2x-input" + "." + "avi");
        var _0xe4bd35 = _0x2933ef.name.substring(0, _0x2933ef.name.lastIndexOf(".") !== -1 ? _0x2933ef.name.lastIndexOf(".") : _0x2933ef.name.length).substring(0, 230);
        var _0x3da8b9 = "";
        _0x3da8b9 += (Math.min(_0x43da38.width, _0x43da38.height) * _0x5dc388.enableUpscale == "1" ? _0x5dc388.upscalingFactor : 1) + "p";
        _0x3da8b9 += (_0x43da38.frameRate * _0x5dc388.enableInterpolate == "1" ? _0x5dc388.interpolationFactor : 1).toFixed(2) + "fps";
        var _0x5e2f94 = _0x367951.file.name.split(".")[_0x367951.file.name.split(".").length - 1];
        _0x367951.file = File(_0x46ac01 + "/(" + _0x3da8b9 + ") " + _0xe4bd35 + "." + _0x5e2f94);
        var _0x1d3178 = 1;
        while (_0x367951.file.exists == !(!([]))) {
            _0x1d3178++;
            _0x367951.file = File(_0x46ac01 + "/(" + _0x3da8b9 + ") " + _0xe4bd35 + " (" + _0x1d3178 + ")" + 0 + _0x5e2f94);
        }
        app.project.renderQueue.render();
        var _0x1d9350 = _0x367951.file.fsName;
        _0x4ce7f5.remove();
        _0x2933ef.solo = !([]);
        _0x43da38.openInViewer();
        _0x250445(_0x5dc388.token, "uwuClips," + _0xcad60(), 1);
        return JSON.stringify({
            inputPath: _0x1d9350
        });
    };
    var _0x238f4d = function _0x3342dd(_0x3706ef, _0x40438d, _0x3620a7) {
        var _0xdbc5ba = app.project.itemByID(_0x40438d);
        if (!(_0xdbc5ba instanceof CompItem)) {
            return alert("Invalid composition.");
        }
        for (var _0x51f929 = 1; _0x51f929 symbol_0 _0xdbc5ba.layers.length; _0x51f929++) {
            if (!_0xdbc5ba.layer(_0x51f929).uwu2xID) {
                _0xdbc5ba.layer(_0x51f929).uwu2xID = _0x2c879c(16);
            }
            if (_0xdbc5ba.layer(_0x51f929).uwu2xID == _0x3620a7) {
                _0x2a012a = _0xdbc5ba.layer(_0x51f929);
            }
        }
        if (!_0x2a012a) {
            return alert("Layer not found.");
        }
        var _0x2c821b = JSON.parse(_0xcad60());
        if (_0x2c821b.outputFormat == "libx264") {
            _0xa843aa = app.project.importFile(new ImportOptions(File(_0x3706ef)));
        } else {
            if (_0x2c821b.outputFormat == "png") {
                var _0x3cd8d1 = _0x3706ef + "/frame1.png";
                var _0x2e0b54 = new ImportOptions();
                _0x2e0b54.file = new File(_0x3cd8d1);
                _0x2e0b54.sequence = !(!([]));
                _0x2e0b54.forceAlphabetical = !([]);
                _0xa843aa = app.project.importFile(_0x2e0b54);
            }
        }
        var _0x30ef91 = _0xdbc5ba.layers.add(_0xa843aa);
        _0x30ef91.startTime = _0x2a012a.inPoint;
        if (_0x2c821b.enableUpscale == "1") {
            var _0x2b6be5 = [100 / _0x2c821b.upscalingFactor, 100 / _0x2c821b.upscalingFactor];
            _0x30ef91.scale.setValue(_0x2b6be5);
        }
        if (_0x2c821b.stretchOutput == "1") {
            _0x30ef91.stretch = (_0x30ef91.source.frameRate / _0xdbc5ba.frameRate) * 100;
        }
        _0x30ef91.moveBefore(_0x2a012a);
    };
    var _0x404774 = function _0x44aef3() {
        if ((((!app.project) || (!app.project.activeItem)) || (!(app.project.activeItem instanceof CompItem))) || (!app.project.activeItem.selectedLayers.length)) {
            return alert("Please select layers.");
        }
        var _0x44d98b = [];
        for (var _0x37b018 = 0; _0x37b018 < app.project.activeItem.selectedLayers.length; _0x37b018++) {
            _0x44d98b.push(app.project.activeItem.selectedLayers[_0x37b018]);
        }
        app.beginUndoGroup("Sequence layers.");
        _0xea8c1(_0x44d98b);
        _0x4b1465(_0x44d98b);
        _0x3eddc2(_0x44d98b, _0x44d98b[0].name);
        app.endUndoGroup();
        var _0xf9a02b = JSON.parse(_0xcad60());
        _0x250445(_0xf9a02b.token, "sequenceLayers", _0x44d98b.length);
    };
    var _0x26a9be = function _0x3db153() {
        if ((((!app.project) || (!app.project.activeItem)) || (!(app.project.activeItem instanceof CompItem))) || (!app.project.activeItem.selectedLayers.length)) {
            return alert("Please select one layer.");
        }
        var _0x56a224 = [];
        for (var _0x1f5376 = 0; _0x1f5376 < app.project.activeItem.selectedLayers.length; _0x1f5376++) {
            _0x56a224.push(app.project.activeItem.selectedLayers[_0x1f5376]);
        }
        app.beginUndoGroup("Precompose selected layers.");
        _0x3eddc2(_0x56a224, app.project.activeItem.selectedLayers[0].name);
        app.endUndoGroup();
        var _0x4a6db5 = JSON.parse(_0xcad60());
        _0x250445(_0x4a6db5.token, "createPrecomposition", _0x56a224.length);
    };
    var _0x4b2706 = function _0x16366a() {
        var _0x1b6040 = new Folder();
        _0x1b6040 = _0x1b6040.selectDlg("Select the folder where you want the outputs to be placed.");
        if (!_0x1b6040) {
            return;
        }
        _0x3926ef("renderFolder", _0x1b6040.fsName);
    };
    var _0x59f141 = function _0x263a64() {
        app.beginUndoGroup("Twixtor");
        if ((((!app.project) || (!app.project.activeItem)) || (!(app.project.activeItem instanceof CompItem))) || (!app.project.activeItem.selectedLayers.length)) {
            return alert("Please select layers.");
        }
        var _0x94c82e = JSON.parse(_0xcad60());
        var _0x3895a9 = !([]);
        var _0x4e5a57 = app.effects;
        for (var _0x4d6499 = 0; _0x4d6499 < _0x4e5a57.length; _0x4d6499++) {
            if (_0x4e5a57[_0x4d6499].displayName == "Twixtor Pro") {
                _0x3895a9 = !(!([]));
            }
        }
        if (_0x3895a9 == !([])) {
            return alert("Please install Twixtor Pro.");
        }
        var _0x1b69f3 = app.project.activeItem.selectedLayers;
        var _0xb0b35d = app.project.activeItem.frameRate;
        for (var _0x4d6499 = 0; _0x4d6499 < _0x1b69f3.length; _0x4d6499++) {
            var _0x90f7ae = _0x1b69f3[_0x4d6499].name;
            var _0x106701 = _0x1b69f3[_0x4d6499].inPoint;
            var _0x103ea2 = app.project.activeItem.layers.precompose([_0x1b69f3[_0x4d6499].index], _0x90f7ae + " Extended", !(!([])));
            _0x103ea2.frameRate = _0xb0b35d;
            var _0x5baf02 = app.project.activeItem.selectedLayers[0];
            _0x5baf02.inPoint = _0x106701;
            _0x5baf02.property("Effects").addProperty("Twixtor Pro");
            _0x5baf02("Effects")("Twixtor Pro")("Input: Frame Rate").setValue(_0xb0b35d);
            _0x5baf02("Effects")("Twixtor Pro")("Image Prep").setValue(2);
            _0x5baf02("Effects")("Twixtor Pro")("Frame Interp").setValue(3);
            _0x5baf02("Effects")("Twixtor Pro")("Warping").setValue(3);
            _0x5baf02("Effects")("Twixtor Pro")("Speed %").setValueAtTime(_0x5baf02.inPoint, 100);
            _0x5baf02("Effects")("Twixtor Pro")("Speed %").setValueAtTime(_0x5baf02.inPoint + (1 / _0xb0b35d), Number(_0x94c82e.twixtorSpeed));
            _0x5baf02.property("ADBE Transform Group").property("ADBE Scale").setValue([_0x5baf02.property("ADBE Transform Group").property("ADBE Scale").value[0] + 1, _0x5baf02.property("ADBE Transform Group").property("ADBE Scale").value[1] + 1]);
            var _0xc70e66 = app.project.activeItem.layers.precompose([_0x5baf02.index], _0x90f7ae + " Twixtored", !(!([])));
            _0xc70e66.frameRate = _0xb0b35d;
            app.project.activeItem.selectedLayers[0].inPoint = _0x106701 + (1 / _0xb0b35d);
            app.project.activeItem.selectedLayers[0].startTime -= (1 / _0xb0b35d);
        }
        app.endUndoGroup();
        _0x250445(_0x94c82e.token, "twixtor," + _0x94c82e.twixtorSpeed, _0x1b69f3.length);
    };
    var _0x55c20f = _0x5d5d91({
        __proto__: null,
        getPreferences: _0xcad60,
        getRenderedClipPath: _0xadab8,
        getSelectedClipIndexes: _0x32703d,
        helloArrayStr: _0x461261,
        helloError: _0x12ea24,
        helloNum: _0x150d71,
        helloObj: _0x1a87f7,
        helloStr: _0x558d65,
        helloVoid: _0x58535d,
        helloWorld: _0xd36f4e,
        importClip: _0x238f4d,
        precompose: _0x26a9be,
        sequence: _0x404774,
        setRenderFolder: _0x4b2706,
        setScriptSetting: _0x3926ef,
        twixtor: _0x59f141
    });
    var _0x5d8216 = function _0x1a2255() {
        alert("Hello from Media Encoder");
    };
    var _0x2ac572 = _0x5d5d91({
        __proto__: null,
        helloWorld: _0x5d8216
    });
    var _0x155e52 = function _0x383dc6() {
        alert("Hello from Animate");
    };
    var _0x54dd78 = _0x5d5d91({
        __proto__: null,
        helloWorld: _0x155e52
    });
    var _0x117cb5 = function _0x42ad0a() {
        alert("Hello from Audtion");
    };
    var _0x330974 = _0x5d5d91({
        __proto__: null,
        helloWorld: _0x117cb5
    });
    var _0x174fa1 = function _0x577e27() {
        alert("Hello from InDesign");
    };
    var _0x49726a = _0x5d5d91({
        __proto__: null,
        helloWorld: _0x174fa1
    });
    var _0x108db2 = function _0x574e1c() {
        alert("Hello from Illustrator");
        app.activeDocument.path;
    };
    var _0x4d961a = _0x5d5d91({
        __proto__: null,
        helloArrayStr: _0x461261,
        helloError: _0x12ea24,
        helloNum: _0x150d71,
        helloObj: _0x1a87f7,
        helloStr: _0x558d65,
        helloVoid: _0x58535d,
        helloWorld: _0x108db2
    });
    var _0x3ed024 = function _0x49582c() {
        alert("Hello from Bridge");
    };
    var _0x2fc151 = _0x5d5d91({
        __proto__: null,
        helloWorld: _0x3ed024
    });
    var _0x19effb = function _0x3f8a0e() {
        app.activeDocument;
        alert("Hello from Photoshop");
    };
    var _0x13e739 = _0x5d5d91({
        __proto__: null,
        helloArrayStr: _0x461261,
        helloError: _0x12ea24,
        helloNum: _0x150d71,
        helloObj: _0x1a87f7,
        helloStr: _0x558d65,
        helloVoid: _0x58535d,
        helloWorld: _0x19effb
    });
    var _0x526339 = function _0x340653() {
        if (typeof qe === "undefined") {
            app.enableQE();
        }
        if (qe) {
            qe.name;
            qe.project.getVideoEffectByName("test");
        }
    };
    var _0x1bf019 = function _0x2bd7e2() {
        alert("Hello from Premiere Pro.");
    };
    var _0x474c14 = _0x5d5d91({
        __proto__: null,
        helloArrayStr: _0x461261,
        helloError: _0x12ea24,
        helloNum: _0x150d71,
        helloObj: _0x1a87f7,
        helloStr: _0x558d65,
        helloVoid: _0x58535d,
        helloWorld: _0x1bf019,
        qeDomFunction: _0x526339
    });
    var _0x10a210 = typeof $ !== "undefined" ? $ : window;
    switch (BridgeTalk.appName) {
        case "aftereffects":
        case "aftereffectsbeta":
            _0x10a210[_0x4aa133] = _0x55c20f;
            break;
        case "ame":
        case "amebeta":
            _0x10a210[_0x4aa133] = _0x2ac572;
            break;
        case "audition":
        case "auditionbeta":
            _0x10a210[_0x4aa133] = _0x330974;
            break;
        case "bridge":
        case "bridgebeta":
            _0x10a210[_0x4aa133] = _0x2fc151;
            break;
        case "illustrator":
        case "illustratorbeta":
            _0x10a210[_0x4aa133] = _0x4d961a;
            break;
        case "indesign":
        case "indesignbeta":
            _0x10a210[_0x4aa133] = _0x49726a;
            break;
        case "photoshop":
        case "photoshopbeta":
            _0x10a210[_0x4aa133] = _0x13e739;
            break;
        case "premierepro":
        case "premiereprobeta":
            _0x10a210[_0x4aa133] = _0x474c14;
            break;
        default:
            if (app.appName === "Adobe Animate") {
                _0x10a210[_0x4aa133] = _0x54dd78;
            }
            break;
    }
})(this);