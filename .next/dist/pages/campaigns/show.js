"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _NewElectionForm = require("../../components/NewElectionForm");

var _NewElectionForm2 = _interopRequireDefault(_NewElectionForm);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/marceau/voting/pages/campaigns/show.js?entry";


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          electionsCount = _props.electionsCount,
          votersCount = _props.votersCount,
          admin = _props.admin;

      var items = [{
        header: admin,
        meta: "Address of the administrator of the elections",
        description: "The admin created this campaign and can open elections",
        style: { overflowWrap: "break-word" }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      });
    }

    //test
    //static async getInitialProps() {
    //  const elections = await campaign.methods.elections().call();
    //  return { elections };
    //}

  }, {
    key: "renderElections",
    value: function renderElections() {
      var _this2 = this;

      console.log(this.props.elections);
      var items = this.props.elections.map(function (address) {
        return {
          header: _this2.props.elections,
          description: _react2.default.createElement(_routes.Link, { route: "/elections/" + _this2.props.elections, __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }, "View Elections")),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      });
    }

    // fin du test

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Campaign Show"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_NewElectionForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "View Elections"))), "//test", this.renderElections()))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary, elections;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                _context.next = 6;
                return campaign.methods.elections(0).call();

              case 6:
                elections = _context.sent;
                return _context.abrupt("return", {
                  address: props.query.address,
                  balance: summary[0],
                  electionsCount: summary[1],
                  votersCount: summary[2],
                  admin: summary[3],
                  elections: elections["description"]
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJOZXdFbGVjdGlvbkZvcm0iLCJMaW5rIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsImVsZWN0aW9uc0NvdW50Iiwidm90ZXJzQ291bnQiLCJhZG1pbiIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJjb25zb2xlIiwibG9nIiwiZWxlY3Rpb25zIiwibWFwIiwiZmx1aWQiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJyZW5kZXJFbGVjdGlvbnMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFxQjs7OztBQUM1QixBQUFTLEFBQVk7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7OztrQ0FnQlU7bUJBQ3FELEtBRHJELEFBQzBEO1VBRDFELEFBQ0osaUJBREksQUFDSjtVQURJLEFBQ0ssaUJBREwsQUFDSztVQURMLEFBQ2Msd0JBRGQsQUFDYztVQURkLEFBQzhCLHFCQUQ5QixBQUM4QjtVQUQ5QixBQUMyQyxlQUQzQyxBQUMyQyxBQUV2RDs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQUxiLEFBQWMsQUFDWixBQUlTLEFBQWdCLEFBSTNCO0FBUkUsQUFDRSxPQUZVOzsy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