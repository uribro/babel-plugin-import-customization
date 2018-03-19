const path = require('path');
const fs = require('fs');

const trimJSExtentions = (filePath) => {
    return filePath.replace(/\.js$/, '');
}

const isImportingIntoCustomization = (filename, customizationSuffix) => {
    const importingFileName = trimJSExtentions(filename);
    const parsedImporting = path.parse(importingFileName);
    return parsedImporting.ext === '.' + customizationSuffix;
}

const getCustomizationFilePath = (filename, customizationSuffix, importedValue) => {
    const importingDir = path.dirname(filename)
    const importedFilePath = path.resolve(importingDir, importedValue)
    const importedFileDir =  path.dirname(importedFilePath)
    const importedFileName = path.basename(importedFilePath);
    const importedFileNameWithoutExention = trimJSExtentions(importedFileName);
    const custFileToLoadName = importedFileNameWithoutExention + '.' + customizationSuffix + '.js'
    const custFilePath = path.resolve(importedFileDir, custFileToLoadName);
    return custFilePath;
}

const getCustSuffix = (options) => {
    return process.env[options.env] || options.suffix;
}

const isRequireCall = (treePath, t) => {
    return t.isIdentifier(treePath.node.callee, { name: 'require' });;
}

const transform = (treePath, state, isCallExpression, t) => {
    if (isCallExpression && !isRequireCall(treePath, t)) {
       return;
    }


    const customizationSuffix = getCustSuffix(state.opts);
    if (!customizationSuffix) {
        return;
    
    }

    const source = isCallExpression ? treePath.node.arguments[0] : treePath.node.source;
    if (source && source.type === 'StringLiteral') {
        const filename = state.file.opts.filename;
        
        if(isImportingIntoCustomization(filename, customizationSuffix)) {
            return;
        }
        
        const importedValue = source.value; 
        const custFilePath = getCustomizationFilePath(filename, customizationSuffix, importedValue)
        const isCustFileExists = fs.existsSync(custFilePath);

        if (isCustFileExists) {
            const newImportedValue = trimJSExtentions(importedValue) + '.' + customizationSuffix;
            const newPath = t.stringLiteral(newImportedValue);
            if (isCallExpression) {
                treePath.replaceWith(t.CallExpression(treePath.node.callee, [newPath]));
            } else {
                treePath.replaceWith(t.ImportDeclaration(treePath.node.specifiers, newPath));
            } 
        }
    }
}

module.exports = function ({ types: t }) {
	return {
		visitor: {
            ImportDeclaration: {
                enter: (treePath, state) => {
                    transform(treePath, state, false, t);
                }
            },

            CallExpression: {
                enter: (treePath, state) => {
                    transform(treePath, state, true, t);
                }
            }
		}
	};
};

