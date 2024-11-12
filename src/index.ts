import { render } from './core/magic.vdom';
import testComponent from './testComponent.tsm';
import { ElementVDom } from './core/types/element.vdom.type';

const vdom = {
    tag: 'div',
    props: [],
    children: [testComponent()],
} as ElementVDom;

render(vdom, document.querySelector('#root'));
