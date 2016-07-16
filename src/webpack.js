var webpack = require("webpack"),
    filePath = require("@nathanfaucett/file_path");


var compiler = webpack({
    entry: filePath.join(__dirname, "..", "lib", "index.js"),
    output: {
        path: filePath.join(__dirname, "..", "dist", "webpack"),
        filename: "index.js"
    }
});


module.exports = compile;


function compile(callback) {
    compiler.run(callback);
}
