const path = require('path');

module.exports = {
    mode: "production",

    entry: "./src/script/main",

    output: {
        path: path.resolve(__dirname, "dist/js/"),

        filename: "bundle.js"
    }
}