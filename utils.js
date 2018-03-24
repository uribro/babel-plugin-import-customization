const path = require('path');

module.exports.getMatchedFileName = (filePath, suffix) => {
    const fileDir =  path.dirname(filePath)
    const fileName = path.basename(filePath);
    let extention = path.extname(fileName) || '.js';
    let fileNameWithoutExtention = fileName.replace(/\.[^/.]+$/, '');
    const matchedFileName = `${fileNameWithoutExtention}.${suffix}${extention}`;
    return `${fileDir}/${matchedFileName}`;
   
}
