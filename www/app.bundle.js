webpackJsonp([0],{0:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}o(1);var n=o(4),a=o(8),i=r(a),u=o(38),c=r(u),l=o(177),s=r(l);o(183),o(190);var p=document.getElementById("app");c["default"].render(i["default"].createElement(n.AppContainer,null,i["default"].createElement(s["default"],null)),p),function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(p,"rootElement","/p/gh/monaca-templates/onsenui-v2-react-minimum/src/main.jsx")}()},1:function(e,t,o){e.exports=o(2)},2:function(e,t,o){"use strict";e.exports=o(3)},3:function(e,t){"use strict"},4:function(e,t,o){e.exports=o(5)},5:function(e,t,o){"use strict";var r=o(6);e.exports=function(e){throw this&&this.callback?new Error('React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.'):e&&e.types&&e.types.IfStatement?new Error('React Hot Loader: The Babel plugin is exported separately. Replace "react-hot-loader" with "react-hot-loader/babel" in the "plugins" section of your .babelrc file. While we recommend the above, if you prefer not to use Babel, you may remove "react-hot-loader" from the "plugins" section of your .babelrc file altogether, and instead add "react-hot-loader/webpack" to the "loaders" section of your Webpack configuration.'):new Error('React Hot Loader does not have a default export. If you use the import statement, make sure to include the curly braces: import { AppContainer } from "react-hot-loader". If you use CommonJS, make sure to read the named export: require("react-hot-loader").AppContainer.')},e.exports.AppContainer=r},6:function(e,t,o){"use strict";e.exports=o(7)},7:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),u=o(8),c=u.Component,l=function(e){function t(){return r(this,t),n(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return this.props.component?u.createElement(this.props.component,this.props.prop):u.Children.only(this.props.children)}}]),t}(c);e.exports=l},177:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),c=o(8),l=r(c),s=o(38),p=(r(s),o(178)),f=o(181),d=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"alertPopup",value:function(){f.notification.alert("This is an Onsen UI alert notification test.")}},{key:"renderToolbar",value:function(){return l["default"].createElement(p.Toolbar,null,l["default"].createElement("div",{className:"center"},"Onsen UI"))}},{key:"render",value:function(){return l["default"].createElement(p.Page,{renderToolbar:this.renderToolbar},l["default"].createElement("div",null,"Hello World!"),l["default"].createElement(p.Button,{onClick:this.alertPopup},"Click Me!"))}}]),t}(l["default"].Component),h=d;t["default"]=h,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"App","/p/gh/monaca-templates/onsenui-v2-react-minimum/src/App.jsx"),__REACT_HOT_LOADER__.register(h,"default","/p/gh/monaca-templates/onsenui-v2-react-minimum/src/App.jsx"))}()},183:function(e,t){},190:183});