'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _antd = require('antd');

require('./index.less');

require('antd/dist/antd.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	日期选择控件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	by--Along  2018-10-30
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

//精确判断元素的类型
function getAttr(obj) {
	return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

var DatePickerRY = function (_Component) {
	_inherits(DatePickerRY, _Component);

	function DatePickerRY(props) {
		_classCallCheck(this, DatePickerRY);

		var _this = _possibleConstructorReturn(this, (DatePickerRY.__proto__ || Object.getPrototypeOf(DatePickerRY)).call(this, props));

		_this.showDateMode = function () {
			_this.setState({ showMode: true });
		};

		_this.hideDateMode = function () {
			_this.setState({ showMode: false });
		};

		_this.dateChange = function (date) {
			if (getAttr(date) === 'array') {
				_this.setState({ defaultValue: date, showMode: false }, function () {
					_this.props.onChange && _this.props.onChange(JSON.stringify(date));
				});
			} else {
				_this.setState({ showMode: false }, function () {
					_this.props.onChange && _this.props.onChange(date);
				});
			}
		};

		var now = new Date(),
		    str = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate(),
		    min = new Date(str).getTime(),
		    max = min + 90 * 24 * 60 * 60 * 1000;
		_this.state = {
			min: props.min || min,
			max: props.max || max,
			now: new Date().getTime(),
			showMode: false,
			defaultValue: props.defaultValue
		};
		return _this;
	}

	_createClass(DatePickerRY, [{
		key: 'componentWillMount',
		value: function componentWillMount() {}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    defaultValue = _state.defaultValue,
			    showMode = _state.showMode,
			    showTime = _state.showTime,
			    value = defaultValue ? defaultValue[0] + '-' + defaultValue[1] : "";

			return _react2.default.createElement(
				'div',
				{ className: 'along-range' },
				_react2.default.createElement(_antd.Input, {
					placeholder: this.props.placeholder,
					value: value,
					readOnly: true,
					onClick: this.showDateMode
				}),
				showMode ? _react2.default.createElement(_DatePicker2.default, {
					min: this.state.min,
					max: this.state.max,
					isTime: showTime,
					confirm: this.dateChange,
					cancel: this.hideDateMode,
					now: this.state.now,
					defaultValue: defaultValue,
					remove: function remove() {
						_this2.setState({ defaultValue: "" });
					}
				}) : null
			);
		}
	}]);

	return DatePickerRY;
}(_react.Component);

DatePickerRY.propTypes = {
	onChange: _propTypes2.default.func,
	placeholder: _propTypes2.default.string,
	showTime: _propTypes2.default.bool
};
DatePickerRY.defaultProps = {
	onChange: function onChange() {},

	placeholder: "点击选择日期范围",
	showTime: false
};
exports.default = DatePickerRY;