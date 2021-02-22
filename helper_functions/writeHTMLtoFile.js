const fs = require("fs");

const writeHTMLtoFile = (path, data) => {
    fs.writeFile(path, data, (err) => {
        if (err) throw err;
        console.log("HTML file has been successfully generated.");
    })
}

module.exports = writeHTMLtoFile;