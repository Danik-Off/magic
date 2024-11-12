import { Attribute } from './types/attribute.vdom.type';
import { ElementVDom } from './types/element.vdom.type';

const rootVDom = {};

function render(elementVDom: ElementVDom, conteiner: Element): void {
    const element = document.createElement(elementVDom.tag);

    if (elementVDom.props) {
        //устанавливаем атрибуты
        elementVDom.props.forEach((prop: Attribute): void => {
            element.setAttribute(prop.name, prop.value);
        });
    }

    if (elementVDom.children) {
        elementVDom.children.forEach((childElementVdom: ElementVDom | string): void => {
            if (typeof childElementVdom === 'string') {
                element.innerText = childElementVdom;
            } else {
                render(childElementVdom, element);
            }
        });
    }

    elementVDom.elementDom = element;
    conteiner.appendChild(element);
}
function remove(): void {}
function patch(): void {}
export { render };
