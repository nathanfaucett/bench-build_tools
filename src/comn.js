var comn = require("@nathanfaucett/comn"),
    fileUtils = require("@nathanfaucett/file_utils"),
    filePath = require("@nathanfaucett/file_path");


module.exports = compile;


function compile(callback) {
    var out = comn(filePath.join(__dirname, "..", "lib", "index.js"));

    if (typeof(out) === "string") {
        fileUtils.writeFileSync(filePath.join(__dirname, "..", "dist", "comn", "index.js"), out);
    } else {
        for (var path in out) {
            fileUtils.writeFileSync(filePath.join(__dirname, "..", "dist", "comn", path), out[path]);
        }
    }
    callback();
}
