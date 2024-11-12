const parseJSX = require('../magicJsxPlugin/parser');
module.exports = function (source, ...an) {
    console.log(source);
    const parsed = parseJSX(source);
    console.log(parsed);
    return parsed;
};
