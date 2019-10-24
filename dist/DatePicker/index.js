"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _core = require("./core");

var _core2 = _interopRequireDefault(_core);

var _select = require("./select");

var _select2 = _interopRequireDefault(_select);

var _dateItem = require("./date-item");

var _dateItem2 = _interopRequireDefault(_dateItem);

var _time = require("./time");

var _time2 = _interopRequireDefault(_time);

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 日期时间选择器组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 引用参考
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * <DatePicker min={min} start={start} isTime={isTime} confirm={this.dateChange.bind(this)} cancel={this.closeDate.bind(this)} />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var datepicker_left = new _core2.default();
var datepicker_right = new _core2.default();
//日期组件

var DatePicker = function (_Component) {
    _inherits(DatePicker, _Component);

    function DatePicker(state) {
        _classCallCheck(this, DatePicker);

        var _this2 = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, state));

        _this2.state = {
            min: _this2.props.min || '1900/01/01',
            max: _this2.props.max,
            isTime: _this2.props.isTime,
            chooseL: '',
            chooseR: ''
        };
        return _this2;
    }

    _createClass(DatePicker, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.init(this.props);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(props) {
            this.init(props);
        }
    }, {
        key: "init",
        value: function init(props) {
            var defaultValue = props.defaultValue,
                now = props.now,
                data_left = {},
                data_right = {},
                _this = this,
                n_l = '',
                n_r = '';

            if (defaultValue) {
                var start = defaultValue[0].split(' ')[0].split('-').join('/'),
                    end = defaultValue[1].split(' ')[0].split('-').join('/');
                n_l = new Date(defaultValue[0]).getTime();
                n_r = new Date(defaultValue[1]).getTime();
                this.setState({ chooseL: defaultValue[0], chooseR: defaultValue[1], d_time_start: start, d_time_end: end });
            } else {
                n_l = n_r = now;
                this.setState({ chooseL: '', chooseR: '', d_time_start: '', d_time_end: '' });
            }
            datepicker_left.init({
                min: this.state.min,
                max: this.state.max,
                isTime: this.state.isTime,
                now: n_l,
                type: 'left'
            }).createMonthDate(function (info) {
                data_left = Object.assign({}, data_left, {
                    month: info
                });
            }).createHours(function (info) {
                data_left = Object.assign({}, data_left, {
                    hours: info
                });
            }).createMinutes(function (info) {
                data_left = Object.assign({}, data_left, {
                    minutes: info
                });
            });
            datepicker_right.init({
                min: this.state.min,
                max: this.state.max,
                isTime: this.state.isTime,
                now: n_r,
                type: 'right'
            }).createMonthDate(function (info) {
                data_right = Object.assign({}, data_right, {
                    month: info
                });
            }).createHours(function (info) {
                data_right = Object.assign({}, data_right, {
                    hours: info
                });
            }).createMinutes(function (info) {
                data_right = Object.assign({}, data_right, {
                    minutes: info
                });
            });
            this.setState({
                left: {
                    data: data_left,
                    year: datepicker_left.data.year,
                    month: datepicker_left.data.month,
                    date: datepicker_left.data.date,
                    hours: datepicker_left.data.hours,
                    minutes: datepicker_left.data.minutes,
                    datetime: new Date(now).getFullYear() + '' + (new Date(now).getMonth() + 1) + '' + new Date(now).getDate(),
                    weeks_list: datepicker_left.lang[datepicker_left.data.lang].weeks
                },
                right: {
                    data: data_right,
                    year: datepicker_right.data.year,
                    month: datepicker_right.data.month,
                    date: datepicker_right.data.date,
                    hours: datepicker_right.data.hours,
                    minutes: datepicker_right.data.minutes,
                    datetime: new Date(now).getFullYear() + '' + (new Date(now).getMonth() + 1) + '' + new Date(now).getDate(),
                    weeks_list: datepicker_right.lang[datepicker_right.data.lang].weeks
                }
            });
        }
    }, {
        key: "selectDate",
        value: function selectDate(item, type, which) {
            var _this3 = this;

            if (type == 'not-allowed') return false;
            var status = false;
            if (which == 'left') {
                var left = this.state.left;
                if (item.year != this.state.left.year) {
                    datepicker_left.data.year = item.year;
                    status = true;
                }
                if (item.month != this.state.left.month) {
                    datepicker_left.data.month = item.month;
                    status = true;
                }
                if (status) {
                    var data = this.state.left.data;
                    datepicker_left.createMonthDate(function (info) {
                        data = Object.assign({}, data, {
                            month: info
                        });
                    });
                    left.data = data;
                    this.setState({ left: left });
                }
                this.setState({ left: _extends({}, left, {
                        date: item.date,
                        month: item.month,
                        year: item.year,
                        choosedDate: item.year + '' + item.month + '' + item.date
                    }) }, function () {
                    _this3.dateFormat(which);
                });
            } else {
                var right = this.state.right;
                if (item.year != this.state.right.year) {
                    datepicker_right.data.year = item.year;
                    status = true;
                }
                if (item.month != this.state.right.month) {
                    datepicker_right.data.month = item.month;
                    status = true;
                }
                if (status) {
                    var data = this.state.right.data;
                    datepicker_right.createMonthDate(function (info) {
                        data = Object.assign({}, data, {
                            month: info
                        });
                    });
                    right.data = data;
                    this.setState({ right: right });
                }
                this.setState({ right: _extends({}, right, {
                        date: item.date,
                        month: item.month,
                        year: item.year,
                        choosedDate: item.year + '' + item.month + '' + item.date
                    }) }, function () {
                    _this3.dateFormat(which);
                });
            }
        }
    }, {
        key: "selectMonth",
        value: function selectMonth(y, m, which) {
            if (which == 'left') {
                var data = this.state.left.data;
                datepicker_left.data.year = y;
                datepicker_left.data.month = m;
                datepicker_left.createMonthDate(function (info) {
                    data = Object.assign({}, data, {
                        month: info
                    });
                });
                this.setState({ left: _extends({}, this.state.left, {
                        data: data,
                        month: m,
                        year: y
                    }) });
            } else {
                var _data = this.state.right.data;
                datepicker_right.data.year = y;
                datepicker_right.data.month = m;
                datepicker_right.createMonthDate(function (info) {
                    _data = Object.assign({}, _data, {
                        month: info
                    });
                });
                this.setState({ right: _extends({}, this.state.right, {
                        data: _data,
                        month: m,
                        year: y
                    }) });
            }
        }
    }, {
        key: "selectTimeLeft",
        value: function selectTimeLeft(val, type) {
            var obj = {},
                chooseL = this.state.chooseL,
                chooseR = this.state.chooseR,
                value = val < 10 ? '0' + val : val;
            obj[type] = val;
            if (chooseL) {
                var date = chooseL.split(' '),
                    time = type == 'hours' ? value + ":" + date[1].split(':')[1] : date[1].split(':')[0] + ":" + value,
                    newData = this.timeCheck(date[0] + " " + time, chooseR, 'left');
                if (newData) {
                    var l_obj = { hours: newData.h_l, minutes: newData.m_l, date: newData.day_l },
                        r_obj = { hours: newData.h_r, minutes: newData.m_r, date: newData.day_r };
                    this.setState({
                        left: _extends({}, this.state.left, l_obj),
                        right: _extends({}, this.state.right, r_obj),
                        chooseL: newData.left,
                        chooseR: newData.right
                    });
                } else {
                    this.setState({ left: _extends({}, this.state.left, obj), chooseL: date[0] + " " + time });
                }
            } else {
                this.setState({ left: _extends({}, this.state.left, obj) });
            }
        }
    }, {
        key: "selectTimeRight",
        value: function selectTimeRight(val, type) {
            var chooseL = this.state.chooseL,
                chooseR = this.state.chooseR,
                obj = {},
                value = val < 10 ? '0' + val : val;
            obj[type] = val;
            if (chooseR) {
                var date = chooseR.split(' '),
                    time = type == 'hours' ? value + ":" + date[1].split(':')[1] : date[1].split(':')[0] + ":" + value,
                    newData = this.timeCheck(chooseL, date[0] + " " + time, 'right');
                if (newData) {
                    var l_obj = { hours: newData.h_l, minutes: newData.m_l, date: newData.day_l },
                        r_obj = { hours: newData.h_r, minutes: newData.m_r, date: newData.day_r };
                    this.setState({
                        left: _extends({}, this.state.left, l_obj),
                        right: _extends({}, this.state.right, r_obj),
                        chooseL: newData.left,
                        chooseR: newData.right
                    });
                } else {
                    this.setState({ right: _extends({}, this.state.right, obj), chooseR: date[0] + " " + time });
                }
            } else {
                this.setState({ right: _extends({}, this.state.right, obj) });
            }
        }
        //time大小限制----后者>=前者

    }, {
        key: "timeCheck",
        value: function timeCheck(left, right, str) {
            if (!left || !right) return false;
            left = left.split(' ');right = right.split(' ');
            var d_l = left[0],
                d_r = right[0],
                l_time = left[1].split(':'),
                r_time = right[1].split(':'),
                day_l = d_l.split('_')[2],
                day_r = d_r.split('_')[2],
                h_l = parseInt(l_time[0]),
                m_l = parseInt(l_time[1]),
                h_r = parseInt(r_time[0]),
                m_r = parseInt(r_time[1]);
            if (d_l < d_r) return false;
            if (h_l >= h_r) {
                str === 'left' ? h_r = h_l : h_l = h_r;
                if (m_l >= m_r) {
                    if (str === 'left') {
                        if (h_l == 23) {
                            var date = d_r.split('-'),
                                day = parseInt(date[2]) + 1;
                            date[2] = datepicker_left.digit(day);
                            if (m_l >= 59) {
                                m_r = 0;h_r = 0;d_r = date.join('-');day_l = date[2];this.setState({ d_time_end: date.join('/') });
                            } else {
                                m_r = m_l + 1;
                            }
                        } else {
                            if (m_l >= 59) {
                                m_r = 0;h_r = h_r + 1;
                            } else {
                                m_r = m_l + 1;
                            }
                        }
                    } else {
                        if (h_r == 0) {
                            var _date = d_l.split('-'),
                                _day = parseInt(_date[2]) - 1;
                            _date[2] = datepicker_left.digit(_day);
                            if (m_r <= 0) {
                                m_l = 59;h_l = 23;d_l = _date.join('-');day_r = _date[2];this.setState({ d_time_start: _date.join('/') });
                            } else {
                                m_l = m_r - 1;
                            }
                        } else {
                            if (m_r <= 0) {
                                m_l = 59;h_l = h_l - 1;
                            } else {
                                m_l = m_r - 1;
                            }
                        }
                    }
                }
            }
            var new_l = d_l + " " + datepicker_left.digit(h_l) + ":" + datepicker_left.digit(m_l),
                new_r = d_r + " " + datepicker_left.digit(h_r) + ":" + datepicker_left.digit(m_r);
            return { left: new_l, right: new_r, h_l: h_l, h_r: h_r, m_l: m_l, m_r: m_r, day_l: day_l, day_r: day_r };
        }
        // 确定按钮
        // 传出 日期、时间、毫秒数

    }, {
        key: "confirm",
        value: function confirm() {
            var _state = this.state,
                chooseL = _state.chooseL,
                chooseR = _state.chooseR,
                isTime = this.props.isTime;

            var date = isTime ? [chooseL, chooseR] : [chooseL.split(" ")[0], chooseR.split(" ")[0]];
            this.state.chooseL && this.state.chooseR ? this.props.confirm(date) : this.props.confirm();
        }
    }, {
        key: "dateFormat",
        value: function dateFormat(str) {
            var date = [],
                time = [],
                chooseL = this.state.chooseL,
                chooseR = this.state.chooseR;
            date.push(datepicker_left.digit(this.state[str].year));
            date.push(datepicker_left.digit(this.state[str].month));
            date.push(datepicker_left.digit(this.state[str].date));
            time.push(datepicker_left.digit(this.state[str].hours));
            time.push(datepicker_left.digit(this.state[str].minutes));
            var d = date.join('-') + ' ' + time.join(':');
            var d_time = date.join('/');
            if (chooseL && chooseR) {
                this.setState({ chooseL: d, chooseR: '', d_time_start: d_time, d_time_end: '' });
            } else if (chooseL && !chooseR) {
                if (new Date(d) < new Date(chooseL)) {
                    var end = chooseL.split(' ')[0].split('-').join('/');
                    this.setState({ chooseL: d, chooseR: chooseL, d_time_end: end, d_time_start: d_time });
                } else {
                    this.setState({ chooseR: d, d_time_end: d_time });
                }
            } else {
                this.setState({ chooseL: d, d_time_start: d_time });
            }
        }
        // 取消按钮

    }, {
        key: "cancel",
        value: function cancel() {
            this.props.cancel();
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.hidden) return null;
            var _this = this;
            var date_left = '',
                date_right = '';
            var date_table_left = this.state.left.data.month.table;
            var date_table_right = this.state.right.data.month.table;
            // 左边日历表格
            if (date_table_left && date_table_left.length) {
                var week_num = date_table_left.length / 7;
                var week_list = [];
                for (var i = 0; i < week_num; i++) {
                    week_list.push(date_table_left.slice(i * 7, i * 7 + 7));
                }
                var status = false;
                var status2 = false;
                date_left = _react2.default.createElement(
                    "tbody",
                    null,
                    week_list.map(function (item, index) {
                        return _react2.default.createElement(
                            "tr",
                            { key: index },
                            item.map(function (item, index) {
                                if (item.date == 1 && !status2) {
                                    status = true;
                                    status2 = true;
                                }
                                var className = '',
                                    style = { cursor: 'pointer' };
                                if (!status) {
                                    className = 'not-now-month';style = { cursor: 'not-allowed' };
                                };
                                var datetime = item.year + '' + item.month + '' + item.date;
                                if (datetime == _this.state.left.datetime) {
                                    className = 'now-date';
                                };
                                var dateNum = new Date(item.year + "/" + item.month + "/" + item.date);
                                if (dateNum < new Date(_this.state.min) || dateNum > new Date(_this.state.max)) {
                                    style = { cursor: 'not-allowed', color: 'red' };
                                }
                                if (_this.state.d_time_start && _this.state.d_time_end && new Date(_this.state.d_time_start) <= dateNum && dateNum <= new Date(_this.state.d_time_end)) {
                                    className ? className += ' choosedDate' : className += 'choosedDate';
                                } else if (_this.state.d_time_start == item.year + '/' + item.month + '/' + datepicker_left.digit(item.date)) {
                                    className ? className += ' choosedDate' : className += 'choosedDate';
                                }
                                if (item.date == _this.state.left.data.month.days) {
                                    status = false;
                                }
                                return _react2.default.createElement(_dateItem2.default, { key: index, style: style, className: className, which: "left", selectDate: _this.selectDate.bind(_this), item: item, index: index });
                            })
                        );
                    })
                );
            }
            // 右边日历表格
            if (date_table_right && date_table_right.length) {
                var _week_num = date_table_right.length / 7;
                var _week_list = [];
                for (var i = 0; i < _week_num; i++) {
                    _week_list.push(date_table_right.slice(i * 7, i * 7 + 7));
                }
                var _status = false;
                var _status2 = false;
                date_right = _react2.default.createElement(
                    "tbody",
                    null,
                    _week_list.map(function (item, index) {
                        return _react2.default.createElement(
                            "tr",
                            { key: index },
                            item.map(function (item, index) {
                                if (item.date == 1 && !_status2) {
                                    _status = true;
                                    _status2 = true;
                                }
                                var className = '',
                                    style = { cursor: 'pointer' };
                                if (!_status) {
                                    className = 'not-now-month';style = { cursor: 'not-allowed' };
                                };
                                var datetime = item.year + '' + item.month + '' + item.date;
                                if (datetime == _this.state.right.datetime) className = 'now-date';
                                var dateNum = new Date(item.year + "/" + item.month + "/" + item.date);
                                if (dateNum < new Date(_this.state.min) || dateNum > new Date(_this.state.max)) {
                                    style = { cursor: 'not-allowed', color: 'red' };
                                }
                                if (_this.state.d_time_start && _this.state.d_time_end && new Date(_this.state.d_time_start) <= dateNum && dateNum <= new Date(_this.state.d_time_end)) {
                                    className ? className += ' choosedDate' : className += 'choosedDate';
                                } else if (_this.state.d_time_start == item.year + '/' + item.month + '/' + datepicker_left.digit(item.date)) {
                                    className ? className += ' choosedDate' : className += 'choosedDate';
                                }
                                if (item.date == _this.state.right.data.month.days) {
                                    _status = false;
                                }
                                return _react2.default.createElement(_dateItem2.default, { key: index, style: style, which: "right", className: className, selectDate: _this.selectDate.bind(_this), item: item, index: index });
                            })
                        );
                    })
                );
            }
            // 时间选择器
            var timeSelect_left = null,
                timeSelect_right = null,
                showStr = '请选择一个日期范围: ...',
                chooseL = this.state.chooseL,
                chooseR = this.state.chooseR;
            if (this.props.isTime) {
                timeSelect_left = _react2.default.createElement(_time2.default, { hours: this.state.left.hours, minutes: this.state.left.minutes, selectHanlder: this.selectTimeLeft.bind(this) });
                timeSelect_right = _react2.default.createElement(_time2.default, { hours: this.state.right.hours, minutes: this.state.right.minutes, selectHanlder: this.selectTimeRight.bind(this) });
            } else {
                chooseL = this.state.chooseL.split(" ")[0], chooseR = this.state.chooseR.split(" ")[0];
            }
            if (chooseL && !chooseR) {
                showStr = "\u5F00\u59CB: " + chooseL + " ~ \u7ED3\u675F: ...";
            } else if (chooseL && chooseR) {
                showStr = "\u5F00\u59CB: " + chooseL + " ~ \u7ED3\u675F: " + chooseR;
            }
            return _react2.default.createElement(
                "div",
                { className: "date-picker-group-along" },
                _react2.default.createElement(
                    "div",
                    { className: "options-group" },
                    _react2.default.createElement(
                        "div",
                        { className: "showDateAll" },
                        showStr
                    ),
                    _react2.default.createElement(
                        "span",
                        { className: "option-btn confirm-btn", onClick: this.confirm.bind(this) },
                        datepicker_left.lang[datepicker_left.data.lang].confirm
                    ),
                    _react2.default.createElement(
                        "span",
                        { className: "option-btn cancel-btn", onClick: this.cancel.bind(this) },
                        datepicker_left.lang[datepicker_left.data.lang].cancel
                    ),
                    this.state.chooseL ? _react2.default.createElement(
                        "span",
                        { className: "option-btn remove-btn", onClick: this.props.remove },
                        "\u6E05\u9664"
                    ) : null
                ),
                _react2.default.createElement(
                    "div",
                    { className: "left" },
                    _react2.default.createElement(
                        "div",
                        { className: "date-picker-year-month" },
                        _react2.default.createElement(_select2.default, { which: "left", anther: this.state.right, month: this.state.left.month, year: this.state.left.year, selectHanlder: this.selectMonth.bind(this) })
                    ),
                    _react2.default.createElement(
                        "table",
                        null,
                        _react2.default.createElement(
                            "thead",
                            null,
                            _react2.default.createElement(
                                "tr",
                                null,
                                this.state.left.weeks_list.map(function (item, index) {
                                    return _react2.default.createElement(
                                        "th",
                                        { key: index },
                                        item
                                    );
                                })
                            )
                        ),
                        date_left
                    ),
                    timeSelect_left
                ),
                _react2.default.createElement(
                    "div",
                    { className: "right" },
                    _react2.default.createElement(
                        "div",
                        { className: "date-picker-year-month" },
                        _react2.default.createElement(_select2.default, { which: "right", anther: this.state.left, month: this.state.right.month, year: this.state.right.year, selectHanlder: this.selectMonth.bind(this) })
                    ),
                    _react2.default.createElement(
                        "table",
                        null,
                        _react2.default.createElement(
                            "thead",
                            null,
                            _react2.default.createElement(
                                "tr",
                                null,
                                this.state.right.weeks_list.map(function (item, index) {
                                    return _react2.default.createElement(
                                        "th",
                                        { key: index },
                                        item
                                    );
                                })
                            )
                        ),
                        date_right
                    ),
                    timeSelect_right
                )
            );
        }
    }]);

    return DatePicker;
}(_react.Component);

exports.default = DatePicker;