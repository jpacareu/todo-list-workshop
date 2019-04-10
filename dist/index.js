(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = global || self, global.mfeTestTypeScript = factory(global.React));
}(this, function (React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "body {\n  background: lightgray;\n}\n";
  styleInject(css);

  function Hello(props) {
    return React.createElement("div", null, "Hello ", props.name);
  }

  function App(props) {
    return React.createElement(Hello, {
      name: "Jhon Doe"
    });
  }

  return App;

}));
//# sourceMappingURL=index.js.map
