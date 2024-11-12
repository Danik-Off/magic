import { Attribute } from './attribute.vdom.type';

export type ElementVDom = {
    tag: string;
    props?: Array<Attribute>;
    children?: Array<ElementVDom| string> ;
    elementDom?: Element | null;
};
