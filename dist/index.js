(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
    typeof define === 'function' && define.amd ? define(['react'], factory) :
    (global = global || self, global.mfeTestTypeScript = factory(global.React));
}(this, function (React) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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

    var App =
    /** @class */
    function (_super) {
      __extends(App, _super);

      function App(props) {
        var _this = _super.call(this, props) || this;

        _this.onChangeValue = function (event) {
          _this.setState({
            todoTitle: event.target.value
          });
        };

        _this.onCheck = function (index) {
          _this.setState(function (state) {
            state.todos[index].completed = !state.todos[index].completed;
            return {
              todos: state.todos.slice()
            };
          });
        };

        _this.deleteTodo = function (index) {
          _this.setState(function (state) {
            state.todos.splice(index, 1);
            return {
              todos: state.todos.slice()
            };
          });
        };

        _this.addTodo = function (event) {
          _this.setState(function (state) {
            return {
              todos: [{
                title: state.todoTitle,
                completed: false
              }].concat(state.todos)
            };
          });
        };

        _this.state = {
          todoTitle: "",
          todos: []
        };
        return _this;
      }

      App.prototype.render = function () {
        return React__default.createElement("div", null, React__default.createElement(Input, {
          onChange: this.onChangeValue,
          value: this.state.todoTitle,
          addTodo: this.addTodo
        }), React__default.createElement(TodoList, {
          todos: this.state.todos,
          onCheck: this.onCheck,
          deleteTodo: this.deleteTodo
        }));
      };

      return App;
    }(React.Component);

    var Input = function Input(props) {
      return React__default.createElement("div", null, React__default.createElement("input", {
        type: "text",
        name: "todo-title",
        value: props.value,
        onChange: props.onChange
      }), React__default.createElement("button", {
        onClick: props.addTodo
      }, "Add"));
    };

    var TodoList = function TodoList(props) {
      return props.todos.map(function (el, index) {
        return React__default.createElement("div", {
          key: index
        }, React__default.createElement("input", {
          type: "checkbox",
          name: "todo",
          checked: el.completed,
          onChange: function onChange(event) {
            return props.onCheck(index);
          }
        }), React__default.createElement("span", {
          style: el.completed ? {
            textDecoration: "line-through"
          } : {}
        }, el.title), React__default.createElement("button", {
          onClick: function onClick(event) {
            return props.deleteTodo(index);
          }
        }, "X"));
      });
    };

    return App;

}));
//# sourceMappingURL=index.js.map
