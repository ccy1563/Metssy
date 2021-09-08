const path = require("path");

module.exports = {
    entry: "./frontend/entry.jsx",
    output: {
        filename: "./bundle.js",
        path: path.resolve(__dirname, "app", "assets", "javascripts"),
    },

    module: {
        rules: [
            {
                test: [/\.jsx?$/],

                exclude: /(node_modules)/,

                use: {
                    loader: "babel-loader",

                    options: {
                        presets: ["@babel/env", "@babel/react"],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

    devtool: "source-map",

    resolve: {
        extensions: [".js", ".jsx", "*"],
    },
};