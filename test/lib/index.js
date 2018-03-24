'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequireComponent = exports.default = undefined;

var _componentCust = require('./components/component.cust.js');

var _componentCust2 = _interopRequireDefault(_componentCust);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequireComponent = require('./components/requireComponent.cust.js').default;

exports.default = _componentCust2.default;
exports.RequireComponent = RequireComponent;