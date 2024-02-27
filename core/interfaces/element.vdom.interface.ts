import Attribute from "./atribute.vdom.interface";

export default interface ElementVDom{
tag:string,
props:Array<Attribute>,
children:Array<ElementVDom>|string;
elementDom:Element | null;
}