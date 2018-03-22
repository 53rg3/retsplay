var path = require('path');
module.exports = {

    mode: "development", // "development", "production",

    entry: "./src/app/AppRoot.tsx",

    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "../public/javascripts/")
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};
