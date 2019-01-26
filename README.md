# react-dropper-element
React HOC for drop on any elements.

Live Demo: https://yvnino.github.io/react-dropper-element/example/public/

## install

npm install --save react-dropper-element

## usage

```
import DragDropElement from 'react-dropper-element';


<DropperElement 
  isActive 
  dropZoneLayout={ /* Your Drop Element  */ }
  onDrop={ /* Drop handler function  */ }>
  <div>
    <div>Drag and drop a Photo</div>
    <div> or </div>
    <div> the green element here</div>
  </div>
</DropperElement>

```


## Component properties

Property        |       Type         |       Description
:---------------|:-------------------|:--------------------------------
dropZoneLayout | element object  | React element to appear on top of the the element to drop to.
onDrop | function  | on drop handler function
isActive | boolean  | Active or disactive the drop zone, default - true

## License

This project is licensed under the MIT License.
