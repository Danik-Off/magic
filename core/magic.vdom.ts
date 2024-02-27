import ElementVDom from "./interfaces/element.vdom.interface";

const rootVDom = {

}


function render(elementVDom:ElementVDom,conteiner:Element):void{
   const element = document.createElement(elementVDom.tag);
   elementVDom.props.forEach(( prop
   )=>{
    element.setAttribute(prop.name,prop.value);
   });
   if(typeof(elementVDom.children) ==="string"){
    element.innerHTML = elementVDom.children;
   }
   else{
    elementVDom.children.forEach(childElementVdom => {
    render(childElementVdom,element);
    });
   }
   elementVDom.elementDom = element;
   conteiner.appendChild(element);
  
}
function remove():void{

}
function patch():void{

}
