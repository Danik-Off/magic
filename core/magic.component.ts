import Attribute from "./interfaces/atribute.vdom.interface";
import ElementVDom from "./interfaces/element.vdom.interface";

export default class Component implements ElementVDom{
    tag: string;
    props: Attribute[];
    children: string | ElementVDom[];
    elementDom: Element;

}