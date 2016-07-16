(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
        module.exports = a;


        function a() {
            return "a";
        }

    }, {}],
    2: [function(require, module, exports) {
        module.exports = b;


        function b() {
            return "b";
        }

    }, {}],
    3: [function(require, module, exports) {
        var a = require("../../a"),
            b = require("./b");


        module.exports = ab;


        function ab() {
            return a() + b();
        }

    }, {
        "../../a": 1,
        "./b": 2
    }],
    4: [function(require, module, exports) {
        var ab = require("./ab");


        module.exports = abc;


        function abc() {
            return ab() + "c";
        }

    }, {
        "./ab": 3
    }],
    5: [function(require, module, exports) {
        (function(process) {
            var a = require("./a"),
                log;


            var button = document.getElementById("button");


            button.onclick = function onClick() {
                require.async("./ab", function(ab) {
                    var abc = require("./abc");

                    if (ab() === "ab") {
                        log(abc());
                    }
                });
                require.async("./ab", function(ab) {
                    log(ab());
                });
            };

            process.nextTick(function() {
                log(a());
            });

            log = require("./log");
            log(a());

        }).call(this, require('_process'))
    }, {
        "./a": 1,
        "./abc": 4,
        "./log": 6,
        "_process": 7
    }],
    6: [function(require, module, exports) {
        module.exports = log;


        function log() {
            console.log.apply(console, arguments);
        }

    }, {}],
    7: [function(require, module, exports) {
        // shim for using process in browser

        var process = module.exports = {};

        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        (function() {
            try {
                cachedSetTimeout = setTimeout;
            } catch (e) {
                cachedSetTimeout = function() {
                    throw new Error('setTimeout is not defined');
                }
            }
            try {
                cachedClearTimeout = clearTimeout;
            } catch (e) {
                cachedClearTimeout = function() {
                    throw new Error('clearTimeout is not defined');
                }
            }
        }())
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return;
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue);
            } else {
                queueIndex = -1;
            }
            if (queue.length) {
                drainQueue();
            }
        }

        function drainQueue() {
            if (draining) {
                return;
            }
            var timeout = cachedSetTimeout(cleanUpNextTick);
            draining = true;

            var len = queue.length;
            while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run();
                    }
                }
                queueIndex = -1;
                len = queue.length;
            }
            currentQueue = null;
            draining = false;
            cachedClearTimeout(timeout);
        }

        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
                cachedSetTimeout(drainQueue, 0);
            }
        };

        // v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun;
            this.array = array;
        }
        Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() {}

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;

        process.binding = function(name) {
            throw new Error('process.binding is not supported');
        };

        process.cwd = function() {
            return '/'
        };
        process.chdir = function(dir) {
            throw new Error('process.chdir is not supported');
        };
        process.umask = function() {
            return 0;
        };

    }, {}]
}, {}, [5]);
