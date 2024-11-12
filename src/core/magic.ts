import { Attribute } from './types/attribute.vdom.type';
import { ElementVDom } from './types/element.vdom.type';

// Функция для создания виртуального DOM-элемента
function magic(tag: string, props: Attribute[], ...children: (ElementVDom | string)[]): ElementVDom {
    return {
        tag,
        props,
        children,
    };
}

export default magic;
