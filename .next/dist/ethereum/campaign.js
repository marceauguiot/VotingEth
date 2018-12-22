"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Voting = require("./build/Voting.json");

var _Voting2 = _interopRequireDefault(_Voting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Voting2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJWb3RpbmciLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFtQixBQUFuQixBQUVBOzs7Ozs7a0JBQWUsbUJBQVcsQUFDeEI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsS0FBSyxBQUFMLE1BQVcsaUJBQU8sQUFBbEIsQUFBdEIsWUFBb0QsQUFBcEQsQUFBUCxBQUNEO0FBRkQiLCJmaWxlIjoiY2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmNlYXUvdm90aW5nIn0=