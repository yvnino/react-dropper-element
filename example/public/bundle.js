webpackJsonp([0],{8:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),c=n(i),s=r(1),f=n(s),p=r(2),m=n(p),g=t.App=function(e){function t(e){l(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.onLoadImg=function(e){r.setState({image:e.target.result})},r.onDrop=function(e){var t=e.dataTransfer,n=t.files,l=t.items;n.length&&r.readFile(n[0]),l.length&&"draganddropelemnt"===l[0].type&&r.setState({draggedElements:[].concat(a(r.state.draggedElements),[c.default.createElement("div",{style:{backgroundColor:"green",height:"40px",width:"40px",border:"solid 1px #000000"}})])})},r.dropZoneLayout=function(){return c.default.createElement("div",{style:{height:"500px",width:"500px",backgroundColor:"rgba(0, 0, 0, 0.6)"}},c.default.createElement("div",{className:"dropZoneLayoutContent"},c.default.createElement("div",{className:"dropZoneLayoutIcon"}),c.default.createElement("div",{className:"dropZoneLayoutText"},"Drop your photos here to upload")))},r.readFile=function(e){var t=new FileReader;t.onload=r.onLoadImg,t.readAsDataURL(e)},r.state={image:null,draggedElements:[]},r}return d(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{style:{height:"1800px",width:"100%"}},c.default.createElement("div",{style:{color:"#0000000"}},"REACT-DROPPER"),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("div",{style:{display:"flex"}},c.default.createElement(m.default,{isActive:!0,dropZoneLayout:this.dropZoneLayout(),onDrop:this.onDrop},c.default.createElement("div",{style:{height:"200px",width:"300px",border:"solid 1px #000000",marginRight:"100px"}},!!this.state.draggedElements.length&&this.state.draggedElements.map(function(e){return e}),c.default.createElement("div",{className:"noPhotosIcon"}),c.default.createElement("div",null,"Drag and drop a Photo"),c.default.createElement("div",null," or "),c.default.createElement("div",null," the green element here"))),!!this.state.image&&c.default.createElement("img",{src:this.state.image,width:"200px",height:"200px",alt:"imageDisplay"})),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("div",{onDragStart:function(e){e.dataTransfer.setData("draganddropelemnt",e.target)},draggable:!0,style:{backgroundColor:"green",height:"100px",width:"100px",border:"solid 1px #000000"}},"DRAG ME"))}}]),t}(c.default.Component);f.default.render(c.default.createElement(g,null),document.getElementById("root"))}},[8]);