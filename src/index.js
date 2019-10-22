/*
	日期选择控件
	by--Along  2018-10-30
*/



import React,{
    Component
} from "react";
import DateSet from './dateSet'
import "./index.less";
 
 //精确判断元素的类型
 function getAttr(obj) {
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase()
} 
  
export default class DatePickerRY extends Component {
	defaultProps = {
		onChange() { }
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
			show:'点击选择日期范围',
			now: '',
			defaultValue:props.defaultValue
		}
	}
	componentWillMount(){ 
		
	}  
	showDate = () => {
		debugger
		console.log(123)
		let now = new Date().getTime()
		this.setState({now:now},()=>{
			this.datePickerModal.show()
		}) 
	}  
	dateChange = date => {
		if(getAttr(date) === 'array'){
			this.setState({show:`${date[0]}-${date[1]}`})
			this.props.onChange&&this.props.onChange(JSON.stringify(date))
		}else{
			this.props.onChange&&this.props.onChange(date)
		}
	} 
	render(){
		let { defaultValue } = this.state,
			show = defaultValue ? `${defaultValue[0]}-${defaultValue[1]}` : this.state.show
		return (
				<div> 
					<div onClick={this.showDate} className="dateInput">{show}</div>
					<DateSet 
						ref={com => { this.datePickerModal = com }} 
						min={this.state.min} 
						max={this.state.max} 
						confirm={this.dateChange}
						now={this.state.now}
						defaultValue={defaultValue}
						remove={()=>{this.dateChange('')}} 
					/>
				</div>
			)
	}
}
