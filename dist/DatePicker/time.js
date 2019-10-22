'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 时间选择组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TimeSelect = function (_Component) {
    _inherits(TimeSelect, _Component);

    function TimeSelect(state) {
        _classCallCheck(this, TimeSelect);

        var _this = _possibleConstructorReturn(this, (TimeSelect.__proto__ || Object.getPrototypeOf(TimeSelect)).call(this, state));

        _this.selectItem = function (v, max) {
            var type = max == 23 ? 'hours' : 'minutes';
            _this.props.selectHanlder(v, type);
        };

        _this.state = {};
        return _this;
    }
    // 滑块


    _createClass(TimeSelect, [{
        key: 'renderSlider',
        value: function renderSlider(max, val) {
            var _this2 = this;

            var value = val < 10 ? '0' + val : val;
            var str = max == 23 ? '时' : '分';
            return _react2.default.createElement(
                _antd.Row,
                null,
                _react2.default.createElement(
                    _antd.Col,
                    { span: 6 },
                    _react2.default.createElement(
                        'div',
                        { style: { width: '100%', fontSize: '14px' } },
                        value,
                        ' ',
                        str
                    )
                ),
                _react2.default.createElement(
                    _antd.Col,
                    { span: 16 },
                    _react2.default.createElement(_antd.Slider, {
                        min: 0, max: max, step: 1,
                        value: val, onChange: function onChange(v) {
                            return _this2.selectItem(v, max);
                        }
                    })
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'date-picker-time-group' },
                this.renderSlider.bind(this, 23, this.props.hours)(),
                this.renderSlider.bind(this, 59, this.props.minutes)()
            );
        }
    }]);

    return TimeSelect;
}(_react.Component);

exports.default = TimeSelect;