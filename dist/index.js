"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _dateSet = require("./dateSet");

var _dateSet2 = _interopRequireDefault(_dateSet);

require("./index.less");

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

		_initialiseProps.call(_this);

		var now = new Date(),
		    str = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate(),
		    min = new Date(str).getTime(),
		    max = min + 90 * 24 * 60 * 60 * 1000;
		_this.state = {
			min: props.min || min,
			max: props.max || max,
			show: '点击选择日期范围',
			now: '',
			defaultValue: props.defaultValue
		};
		return _this;
	}

	_createClass(DatePickerRY, [{
		key: "componentWillMount",
		value: function componentWillMount() {}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var defaultValue = this.state.defaultValue,
			    show = defaultValue ? defaultValue[0] + "-" + defaultValue[1] : this.state.show;

			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"div",
					{ onClick: this.showDate, className: "dateInput" },
					show
				),
				_react2.default.createElement(_dateSet2.default, {
					ref: function ref(com) {
						_this2.datePickerModal = com;
					},
					min: this.state.min,
					max: this.state.max,
					confirm: this.dateChange,
					now: this.state.now,
					defaultValue: defaultValue,
					remove: function remove() {
						_this2.dateChange('');
					}
				})
			);
		}
	}]);

	return DatePickerRY;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
	var _this3 = this;

	this.defaultProps = {
		onChange: function onChange() {}
	};

	this.showDate = function () {
		debugger;
		console.log(123);
		var now = new Date().getTime();
		_this3.setState({ now: now }, function () {
			_this3.datePickerModal.show();
		});
	};

	this.dateChange = function (date) {
		if (getAttr(date) === 'array') {
			_this3.setState({ show: date[0] + "-" + date[1] });
			_this3.props.onChange && _this3.props.onChange(JSON.stringify(date));
		} else {
			_this3.props.onChange && _this3.props.onChange(date);
		}
	};
};

exports.default = DatePickerRY;