var fs = require("src/img");
fs.readdir('data', (err, fileList) => {
    images = fileList;
});
