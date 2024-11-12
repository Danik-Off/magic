function magic(tag, props, ...children) {
    return {
        tag,
        props,
        children,
        elementDom: null,
    };
}

function parseJSX(jsx) {
    jsx = jsx.trim();

    const singleTagRegex = /^<([a-zA-Z0-9]+)([^>]*)>(.*?)<\/\1>$/s;
    if (singleTagRegex.test(jsx)) {
        const match = jsx.match(singleTagRegex);
        const tag = match[1];
        const attributesStr = match[2];
        const childrenStr = match[3];

        const props = parseAttributes(attributesStr);
        const children = parseChildren(childrenStr);

        return `magic('${tag}', [${props.join(', ')}], ${children.join(', ')})`;
    }

    const tagRegex = /<([a-zA-Z0-9]+)([^>]*)>(.*?)<\/\1>/gs;
    let result = '';
    let lastIndex = 0;
    let match;

    while ((match = tagRegex.exec(jsx)) !== null) {
        result += jsx.slice(lastIndex, match.index);

        const tag = match[1];
        const attributesStr = match[2];
        const childrenStr = match[3];

        const props = parseAttributes(attributesStr);
        const children = parseChildren(childrenStr);

        result += `magic('${tag}', ${JSON.stringify(props)}, ${children.join(', ')})`;

        lastIndex = tagRegex.lastIndex;
    }

    result += jsx.slice(lastIndex);
    return result;
}

function parseAttributes(attributesStr, variables = {}) {
    console.log('🚀 ~ Входные атрибуты:', attributesStr);

    const attributes = [];

    const attrRegex = /([a-zA-Z\-]+)\s*=\s*(['"])(.*?)\2/g;
    let match;

    if (!attributesStr || attributesStr.trim() === '') {
        return attributes;
    }

    while ((match = attrRegex.exec(attributesStr)) !== null) {
        const name = match[1].trim();
        let value = match[3].trim();

        if (/\{([^}]+)\}/.test(value)) {
            value = value.replace(/\{([^}]+)\}/g, '$1');
        } else {
            value = `"${value}"`;
        }
        console.log('🚀 ~ functionparseAttributes(attributesStr,variables ~ value:', value);

        attributes.push(`{ name:'${name}', value:${value} }`);
    }

    console.log('🚀 ~ Все атрибуты:', attributes);
    return attributes;
}

function parseChildren(childrenStr) {
    const children = [];
    childrenStr = childrenStr.trim();
    if (!childrenStr) return children;

    if (!childrenStr.includes('<')) {
        if (/\{([^}]+)\}/.test(childrenStr)) {
            children.push(childrenStr.replace(/\{([^}]+)\}/g, '$1'));
        } else {
            children.push(`"${childrenStr}"`);
        }
    }

    const tagRegex = /<([a-zA-Z0-9]+)([^>]*)>(.*?)<\/\1>/gs;
    let match;

    while ((match = tagRegex.exec(childrenStr)) !== null) {
        children.push(parseJSX(match[0]));
    }

    return children;
}

module.exports = parseJSX;
