import React from 'react';
import ReactDOM from 'react-dom';

export default class ReactRenderer {

  constructor(components) {
    this.components = components;
  }

  renderAll() {

    for (let componentIndex = 0; componentIndex < this.components.length; componentIndex++) {

      // Use this to render React components in divs using the id. Ex, <div id="MySimpleComponent"></div>
      // let container = document.getElementById(this.components[componentIndex].name);

      // Use this to render React components using the name as the tag. Ex, <MySimpleComponent></MySimpleComponent>
      let containers = document.getElementsByTagName(this.components[componentIndex].name)

      if (containers && containers.length > 0) {

        for (let i = containers.length - 1; i >= 0; i--) {
          let props = this.getPropsFromAttributes(containers[i]);
          let element = this.components[componentIndex].component;

          if (props !== null) {
            element = React.cloneElement(
              element,
              props
            )
          }

          ReactDOM.render(element, containers[i]);
        }
      }
    }
  }

  // Turns the dom element's attributes into an object to use as props.
  getPropsFromAttributes(container) {
    let props = {};
    if (container.attributes.length > 0) {
      for (let attributeIndex = 0; attributeIndex < container.attributes.length; attributeIndex++) {
        let attribute = container.attributes[attributeIndex];
        if (this.hasJsonStructure(attribute.value)) {
          props[attribute.name] = JSON.parse(attribute.value);
        } else {
          props[attribute.name] = attribute.value;
        }
      }
      return props;
    }
    return null;
  }


  hasJsonStructure(str) {
    if (typeof str !== 'string')
      return false;
    try {
      const result = JSON.parse(str);
      const type = Object.prototype.toString.call(result);
      return type === '[object Object]' || type === '[object Array]';
    } catch (err) {
      return false;
    }
  }

}
