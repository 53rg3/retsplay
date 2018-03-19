var path = require('path');
module.exports = {

    mode: "production", // "development", "production",

    entry: "./src/app/App.tsx",

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
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};
