var browserify = require("browserify"),
    fileUtils = require("@nathanfaucett/file_utils"),
    filePath = require("@nathanfaucett/file_path");


module.exports = compile;


function compile(callback) {
    var out = browserify(filePath.join(__dirname, "..", "lib", "index.js"));

    out.bundle(function(error, buffer) {
        if (error) {
            callback(error);
        } else {
            fileUtils.writeFileSync(filePath.join(__dirname, "..", "dist", "browserify", "index.js"), buffer);
            callback();
        }
    });
}
