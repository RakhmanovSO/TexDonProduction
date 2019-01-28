"use strict";

const path = require ('path');

module.exports = {

   // mode: "production",
    mode: "development",
    devtool: "source-map",
    entry: "./application/app.js",
    watch: false,
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public/js")
    },
    //watch: true

};
