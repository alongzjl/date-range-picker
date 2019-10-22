'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 年和月的选择组件


var yStr = '年',
    months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

var DateSelectItem = function (_Component) {
    _inherits(DateSelectItem, _Component);

    function DateSelectItem(state) {
        _classCallCheck(this, DateSelectItem);

        var _this = _possibleConstructorReturn(this, (DateSelectItem.__proto__ || Object.getPrototypeOf(DateSelectItem)).call(this, state));

        _this.state = {};
        return _this;
    }

    _createClass(DateSelectItem, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                year = _props.year,
                month = _props.month,
                anther = _props.anther;

            this.setState({
                yStr: year + yStr,
                mStr: months[month - 1],
                m: month,
                y: year,
                anther: anther
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.month) {
                var year = nextProps.year,
                    month = nextProps.month,
                    anther = nextProps.anther;

                this.setState({
                    yStr: year + yStr,
                    mStr: months[month - 1],
                    m: month,
                    y: year,
                    anther: anther
                });
            }
        }
    }, {
        key: 'selectLeft',
        value: function selectLeft() {
            var year = this.state.y,
                month = this.state.m;
            if (month == 1) {
                year = year - 1;
                month = 12;
            } else {
                month = month - 1;
            };
            this.setState({
                yStr: year + yStr,
                mStr: months[month - 1],
                m: month,
                y: year
            });
            this.props.selectHanlder(year, month, this.props.which);
        }
    }, {
        key: 'selectRight',
        value: function selectRight() {
            var year = this.state.y,
                month = this.state.m;
            if (month == 12) {
                year = year + 1;
                month = 1;
            } else {
                month = month + 1;
            }
            this.setState({
                yStr: year + yStr,
                mStr: months[month - 1],
                m: month,
                y: year
            });
            this.props.selectHanlder(year, month, this.props.which);
        }
    }, {
        key: 'render',
        value: function render() {
            var which = this.props.which,
                anther = this.state.anther,
                year = anther.year,
                month = anther.month,
                left = true,
                right = true;
            if (which == 'left') {
                if (year == this.state.y && month <= this.state.m + 1 || year == this.state.y + 1 && month == 1 && this.state.m == 12) {
                    left = false;
                }
            } else {
                if (year == this.state.y - 1 && month == 12 && this.state.m == 1 || year == this.state.y && month >= this.state.m - 1) {
                    right = false;
                }
            }
            return _react2.default.createElement(
                'div',
                { className: 'select-group' },
                right ? _react2.default.createElement(
                    'span',
                    { className: 'switch-btn prev-btn', onClick: this.selectLeft.bind(this) },
                    _react2.default.createElement('span', { className: 'arrow' })
                ) : null,
                _react2.default.createElement(
                    'span',
                    { className: 'value' },
                    this.state.yStr,
                    '\xA0',
                    this.state.mStr
                ),
                left ? _react2.default.createElement(
                    'span',
                    { className: 'switch-btn next-btn', onClick: this.selectRight.bind(this) },
                    _react2.default.createElement('span', { className: 'arrow' })
                ) : null
            );
        }
    }]);

    return DateSelectItem;
}(_react.Component);

exports.default = DateSelectItem;