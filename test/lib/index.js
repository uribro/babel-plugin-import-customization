'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequireComponent = exports.default = undefined;

var _component = require('./components/component.cust');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequireComponent = require('./components/requireComponent.cust').default;

exports.default = _component2.default;
exports.RequireComponent = RequireComponent;