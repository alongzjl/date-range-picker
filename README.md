日期范围选择框组件 DateRangePicker
 {
     min:时间戳，
     max:时间戳,
     onchange:date=>{} //回调
    defaultDate // 日期
 } 

1.0.6 
webpack打包
1.0.11 react 15.6.1

update
params {
    min:min,//最小值
    max:max,//最大值
    showTime:false,//是否显示time
    onchange:(date)=>{}//回调函数 返回 date == ["2019-09-12 12:20","2019-09-12 12:20"]
    defaultValue:["2019-09-12 12:20","2019-09-12 12:20"]
}

本地运行

npm install

npm run dev


npm 地址：https://www.npmjs.com/package/along-date-range