var request = require("request");

function minifyCSS(css) {
    return new Promise((resolve, reject) => {
        request.post("https://cssminifier.com/raw", {form: {input: css}}, (error, response, minified) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(minified);
            }
        });
    });
}

function minifyJS(js) {
    return new Promise((resolve, reject) => {
        request.post("https://javascript-minifier.com/raw", {form: {input: js}}, (error, response, minified) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(minified);
            }
        });
    });
}

module.exports.css = minifyCSS;
module.exports.js = minifyJS;
