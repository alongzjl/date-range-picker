'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSkylight = require('react-skylight');

var _reactSkylight2 = _interopRequireDefault(_reactSkylight);

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var commonCss = {
	dialogStyles: {
		height: '440px',
		width: '740px',
		left: 0,
		right: 0,
		top: '50%',
		margin: '-220px auto 0',
		padding: '10px',
		background: '#fff',
		boxShadow: '0 4px 10px 0 rgba(0,0,0,0.20)',
		borderRadius: '6px'
	},
	titleStyle: {
		height: '45px',
		lineHeight: '45px',
		paddingLeft: '24px',
		display: 'none'
	},
	closeButtonStyle: {
		cursor: 'pointer',
		position: 'absolute',
		fontSize: '40px',
		color: '#92969C',
		right: '20px',
		top: '20px',
		display: 'none'
	}
};

var DateSet = function (_React$Component) {
	_inherits(DateSet, _React$Component);

	function DateSet() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, DateSet);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateSet.__proto__ || Object.getPrototypeOf(DateSet)).call.apply(_ref, [this].concat(args))), _this), _this.show = function () {
			debugger;
			_this.datePickerModal.show();
		}, _this.cancelClick = function () {
			_this.datePickerModal.hide();
		}, _this.dateChange = function (date) {
			if (date) {
				_this.props.confirm(date);
			}
			_this.datePickerModal.hide();
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(DateSet, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactSkylight2.default,
					{
						dialogStyles: _extends({}, commonCss.dialogStyles, { paddingBottom: '40px' }),
						titleStyle: commonCss.titleStyle,
						closeButtonStyle: commonCss.closeButtonStyle,
						hideOnOverlayClicked: true,
						ref: function ref(com) {
							_this2.datePickerModal = com;
						},
						title: ''
					},
					_react2.default.createElement(_DatePicker2.default, {
						min: this.props.min,
						max: this.props.max,
						isTime: true,
						confirm: this.dateChange,
						cancel: this.cancelClick,
						now: this.props.now,
						defaultValue: this.props.defaultValue,
						remove: this.props.remove
					})
				)
			);
		}
	}]);

	return DateSet;
}(_react2.default.Component);

exports.default = DateSet;