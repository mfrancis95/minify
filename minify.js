var request = require("request");

function minifyCSS(css) {
    return new Promise(function(resolve, reject) {
        request.post("https://cssminifier.com/raw", {form: {input: css}}, function(error, response, minified) {
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
    return new Promise(function(resolve, reject) {
        request.post("https://javascript-minifier.com/raw", {form: {input: js}}, function(error, response, minified) {
            if (error) {
                reject(error);
            }
            else {
                resolve(minified);
            }
        });
    });
}
