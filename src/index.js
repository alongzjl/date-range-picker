/*
	日期选择控件
	by--Along  2018-10-30
*/

import React,{
    Component
} from "react";
import PropTypes from 'prop-types';
import DatePicker from './DatePicker';
import { Input } from "antd";
import "./index.less";
import 'antd/dist/antd.css';
 //精确判断元素的类型
 function getAttr(obj) {
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase()
}   
export default class DatePickerRY extends Component {
	static propTypes = {
		onChange: PropTypes.func,
		placeholder: PropTypes.string,
		showTime:PropTypes.bool 
	}
	static defaultProps = {
		onChange() { },
		placeholder: "点击选择日期范围",
		showTime:false
	}
	constructor(props) {
		super(props)
		let now = new Date(),
			str = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`,
			min = new Date(str).getTime(),
			max = min + 90*24*60*60*1000
		this.state = {
			min:props.min || min,
			max:props.max || max,
			now: new Date().getTime(),
			showMode:false,
			defaultValue:props.defaultValue
		}
	}
	componentWillMount(){ 
		
	}  
	showDateMode = () => {
		this.setState({showMode:true})
	}  
	hideDateMode = () => {
		this.setState({showMode:false})
	}
	dateChange = date => {
		if(getAttr(date) === 'array'){
			this.setState({ defaultValue: date, showMode: false }, () => { 
				this.props.onChange&&this.props.onChange(JSON.stringify(date))
			})
		}else{
			 this.setState({ showMode: false }, () => { 
				this.props.onChange && this.props.onChange(date)
			})
		}
	} 
	render(){
		let { defaultValue,showMode,showTime } = this.state,
			value = defaultValue ? `${defaultValue[0]}-${defaultValue[1]}` : ""
		return (
			<div className="along-range"> 
				<Input
					placeholder={this.props.placeholder}
					value={value}
					readOnly
					onClick={this.showDateMode}
				/>
				{
					showMode ? <DatePicker 
						min={this.state.min} 
						max={this.state.max} 
						isTime={showTime}
						confirm={this.dateChange} 
						cancel={this.hideDateMode}
						now={this.state.now}
						defaultValue={defaultValue} 
						remove={() => { this.setState({defaultValue:""})}} 
					/> : null
				}
				</div>
			)
	}
}

