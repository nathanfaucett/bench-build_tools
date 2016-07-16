var Benchmark = require("benchmark"),

    comn = require("./comn"),
    webpack = require("./webpack"),
    browserify = require("./browserify");


var suite = new Benchmark.Suite();


suite.add("comn", function(deferred) {
    comn(function() {
        deferred.resolve();
    });
}, {
    "defer": true
});

suite.add("webpack", function(deferred) {
    webpack(function() {
        deferred.resolve();
    });
}, {
    "defer": true
});

suite.add("browserify", function(deferred) {
    browserify(function() {
        deferred.resolve();
    });
}, {
    "defer": true
});

suite.on("cycle", function(event) {
    console.log(String(event.target));
});

suite.on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
    console.log("==========================================\n");
});

console.log("\n=== build tools bench ====================");
suite.run();
