(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(10),i=a.n(s),o=(a(17),a(3)),r=a(4),c=a(6),m=a(5),d=a(7),h=(a(8),a(20),a(2)),u=a(1),p=a.n(u),g=[{id:0,name:"New year",date:"01.01"},{id:1,name:"Christmas",date:"01.07"},{id:2,name:"Men's day",date:"02.23"},{id:3,name:"Women's day",date:"03.08"},{id:4,name:"Labor day",date:"05.01"},{id:5,name:"Victory Day",date:"05.09"},{id:6,name:"Independence day",date:"07.03"},{id:7,name:"November revolution day",date:"11.07"}],y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).ifNotFirstToday=function(e,t){if(0!==e)return l.a.createElement("div",{className:t},e," more events")},e.onClick=function(){e.props.clickCell(e.props.date,e.props.month),p()(function(){p()("table.main").css("opacity",".5"),p()(".spacer").css("display","block"),p()("table.dayEvents").css("display","table")})},e.state={holidaysState:g},e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=0,a="additional_events",n="additional_events more";(this.props.date<this.props.todayDate&&this.props.month===this.props.todayMonth&&this.props.year===this.props.todayYear||this.props.month<this.props.todayMonth&&this.props.year<=this.props.todayYear)&&(a="additional_events before",n="additional_events before");var s=l.a.createElement("td",{tabIndex:"0",onClick:this.onClick},l.a.createElement("div",{tabIndex:"0",className:this.props.isNowDate},l.a.createElement("p",null,this.props.date))),i=JSON.parse(this.props.stateXXX);if(i){var o=24,r=0,c=0;i.map(function(m,d){m.month===e.props.month+1&&m.day===e.props.date&&m.year===e.props.year&&(parseInt(m.time1.substring(0,m.time1.length-3),10)<parseInt(o,10)?(s=l.a.createElement("td",{tabIndex:"0",onClick:e.onClick},l.a.createElement("div",{tabIndex:"0",className:e.props.isNowDate},l.a.createElement("p",null,e.props.date),l.a.createElement("div",{className:a},m.task),e.ifNotFirstToday(c,n))),o=m.time1.substring(0,m.time1.length-3),r=d,c++,t++):(s=l.a.createElement("td",{tabIndex:"0",onClick:e.onClick},l.a.createElement("div",{tabIndex:"0",className:e.props.isNowDate},l.a.createElement("p",null,e.props.date),l.a.createElement("div",{className:a},i[r].task),e.ifNotFirstToday(c,n))),c++,t++))},this),r=0,c=0}return this.state.holidaysState.map(function(e){var a=this,i=new Date(e.date);i.getMonth()===this.props.month&&i.getDate()===this.props.date&&(s=l.a.createElement("td",{tabIndex:"0",onClick:function(){a.props.clickCell(a.props.date,a.props.month),p()(function(){p()(".spacer").css("display","block"),p()("table.main").css("opacity",".5"),p()("table.dayEvents").css("display","table")})},className:"holiday"},l.a.createElement("div",{tabIndex:"0",className:this.props.isNowDate},l.a.createElement("p",null,this.props.date)),l.a.createElement("p",{className:"holiday"},e.name),this.ifNotFirstToday(t,n)))},this),s}}]),t}(l.a.Component),b=!1,E="";var v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={task:"",time1:"00:00",time2:"00:00",disabled:!1,afterAlert:!0},e.onTaskChange=e.onTaskChange.bind(Object(h.a)(Object(h.a)(e))),e.onTime1Change=e.onTime1Change.bind(Object(h.a)(Object(h.a)(e))),e.onTime2Change=e.onTime2Change.bind(Object(h.a)(Object(h.a)(e))),e.onSubmit=e.onSubmit.bind(Object(h.a)(Object(h.a)(e))),e.onDayChange=e.onDayChange.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"checkbox",value:function(){E=""===E?"checked":""}},{key:"onSubmit",value:function(e){var t=this;if(!localStorage.getItem("myEl")){localStorage.clear();localStorage.setItem("myEl",JSON.stringify([]))}var a=JSON.parse(localStorage.getItem("myEl")),n=!0;if(a.map(function(e){e.day===t.props.day&&e.month===t.props.month&&e.year===t.props.year&&parseInt(t.state.time2)>parseInt(e.time1)&&parseInt(t.state.time1)<=parseInt(e.time1)&&(alert("You have already event at this time"),n=!1)}),parseInt(this.state.time2)<=parseInt(this.state.time1)&&!1===this.state.disabled&&(alert("Check the time"),n=!1,this.setState({task:""})),console.log("time2 =  "+parseInt(this.state.time2)),console.log("time1 =  "+parseInt(this.state.time1)),n){var l={day:this.props.day,month:this.props.month,year:this.props.year,task:this.state.task,time1:this.state.time1,time2:this.state.time2};a.push(l),localStorage.setItem("myEl",JSON.stringify(a)),this.props.changeDEB(l.task),this.setState({task:""}),this.setState({disabled:!1}),E=""}e.preventDefault()}},{key:"onTaskChange",value:function(e){this.setState({task:e.target.value})}},{key:"onTime1Change",value:function(e){this.setState({time1:e.target.value})}},{key:"onTime2Change",value:function(e){this.setState({time2:e.target.value})}},{key:"onDayChange",value:function(){this.checkbox(),!1===this.state.disabled?(this.setState({time1:"00:00"}),this.setState({time2:"00:00"}),this.setState({disabled:!0})):(this.setState({time1:this.props.timeStart}),this.setState({time2:this.props.timeStart}),this.setState({disabled:!1}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"form col-lg-6 col-md-6 col-sm-10 col-11"},l.a.createElement("button",{onClick:function(){E="",e.setState({disabled:!1}),e.setState({task:""}),b=!1,p()(function(){p()(".dayEvents").css("zIndex","4"),p()("table").css("display","table"),p()(".form").css("display","none"),p()("table.dayEvents").css("opacity","1"),p()("table.main").css("opacity",".5")})}},"\u2190"),l.a.createElement("h1",null,"Create task"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",null,l.a.createElement("div",{className:"time_handlers"},"Time of beginning  "),l.a.createElement("label",null,l.a.createElement("input",{disabled:this.state.disabled,type:"time",step:"3600",name:"time1",value:this.state.time1,onChange:this.onTime1Change})),l.a.createElement("br",null),l.a.createElement("div",{className:"time_handlers"},"Time of the end  "),l.a.createElement("label",null,l.a.createElement("input",{disabled:this.state.disabled,type:"time",step:"3600",name:"time2",value:this.state.time2,onChange:this.onTime2Change}))),l.a.createElement("input",{type:"checkbox",checked:E,name:"allday",value:"allday",onChange:this.onDayChange})," All day ",l.a.createElement("br",null),l.a.createElement("textarea",{className:"tasktext",name:"com",rows:"3",onChange:this.onTaskChange,value:this.state.task}),l.a.createElement("p",null,l.a.createElement("input",{className:"submitButton",type:"submit",value:"Submit",onClick:function(){b=!1,p()(function(){p()(".dayEvents").css("zIndex","4"),p()("table").css("display","table"),p()(".form").css("display","none"),p()("table.dayEvents").css("opacity","1"),p()("table.main").css("opacity",".5")})}}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.time1!==e.timeStart&&!1===b?(b=!0,{time1:e.timeStart,time2:(a=parseInt(e.timeStart.substring(0,e.timeStart.length-3))+1+":00",a.length>4?a:"0"+a)}):null;var a}}]),t}(l.a.Component),S=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={isSmall:"inCellSmall"},e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:this.state.isSmall,onClick:function(){console.log(e.state.isSmall),"inCellSmall"===e.state.isSmall?e.setState({isSmall:"inCellBig"}):e.setState({isSmall:"inCellSmall"})}},this.props.eventTask)}}]),t}(l.a.Component),f="00:00",k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).selectedTime=function(e){a.setState({timeStart:e}),f=e},a.changeDEB=function(e){a.setState({storage:localStorage.getItem("myEl")}),a.props.transit(e)},a.state={isSmall:"inCellSmall",day:a.props.day,month:a.props.month,timeStart:"00:00",storage:localStorage.getItem("myEl")},a.selectedTime=a.selectedTime.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"addZero",value:function(e){return e.length>4?e:"0"+e}},{key:"render",value:function(){for(var e=this,t=[],a=[],n=0,s=JSON.parse(this.state.storage),i=function(t){var i=[];i.push(l.a.createElement("td",null,t+":00")),s&&s.map(function(a,s){var o;e.addZero(t+":00")===a.time1&&a.month===e.props.month&&a.year===e.props.year&&a.day===e.props.day&&(o="00:00"===a.time2?24:a.time2.substring(0,a.time2.length-3)-a.time1.substring(0,a.time1.length-3),i.push(l.a.createElement("td",{rowSpan:o,className:"setEvent"},l.a.createElement(S,{eventTask:a.task}),l.a.createElement("button",{className:"deleteOneEvent",onClick:function(){e.props.eventDelete(s)}},"delete"))),n=o)},e),n<=0&&i.push(l.a.createElement("td",{onClick:function(){e.selectedTime(t+":00"),p()(function(){p()(".dayEvents").css("zIndex","2"),p()("table.main").css("opacity",".3"),p()(".form").css("display","block")})}})),--n,a.push(l.a.createElement("tr",null,i))},o=0;o<25;o++)i(o);return t.push(l.a.createElement("table",{className:"dayEvents col-lg-6 col-md-8 col-sm-10 col-11"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,l.a.createElement("div",{className:"eventDate"},l.a.createElement("div",null,this.props.monthName),l.a.createElement("div",null,this.props.day)),l.a.createElement("button",{onClick:function(){e.setState({isSmall:"inCellSmall"}),p()(function(){p()(".spacer").css("display","none"),p()("table.main").css("opacity","1"),p()("table.dayEvents").css("display","none")})}},"\xd7")))),l.a.createElement("tbody",null,a))),l.a.createElement("div",null,l.a.createElement("div",null,t),l.a.createElement(v,{month:this.props.month,timeStart:this.addZero(this.state.timeStart),monthName:this.props.monthName,day:this.props.day,changeDEB:this.changeDEB,year:this.props.year}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.storage!==localStorage.getItem("myEl")?{storage:localStorage.getItem("myEl")}:t.timeStart!==f?{timeStart:f}:null}}]),t}(l.a.Component),C=new Date,D=["January","February","March","April","May","June","July","August","September","October","November","December"],N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).transit=function(e){a.setState({storageForCellBuild:localStorage.getItem("myEl")}),a.setState({taskForCellBuild:e})},a.eventDelete=function(e){var t=JSON.parse(localStorage.getItem("myEl"));t.splice(e,1),localStorage.setItem("myEl",JSON.stringify(t)),a.setState({storageForCellBuild:localStorage.getItem("myEl")})},a.clickCell=function(e,t){a.setState({day:e}),a.setState({month:t})},a.clearLocalStorage=function(){localStorage.clear(),a.setState({storageForCellBuild:localStorage.getItem("myEl")})},a.createTable=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(1),n.setDate(1);for(var s=[],i=[],o=0;o<6;o++){for(var r=[],c=0;c<7;c++)0===o&&c<t.getDay()-1?(n.setDate(2-t.getDay()+c),r.push(l.a.createElement(y,{stateXXX:a.state.storageForCellBuild,taskForCellBuild:a.state.taskForCellBuild,date:n.getDate(),clickCell:a.clickCell,month:n.getMonth(),year:n.getFullYear(),isNowDate:"numbers otherMonth",todayDate:C.getDate(),todayMonth:C.getMonth(),todayYear:C.getFullYear()})),n.setDate(1),n.setMonth(n.getMonth()+1)):(t.getMonth()===e.getMonth()?t.getDate()===C.getDate()&&t.getMonth()===C.getMonth()&&t.getFullYear()===C.getFullYear()?r.push(l.a.createElement(y,{clickCell:a.clickCell,date:t.getDate(),month:t.getMonth(),year:n.getFullYear(),stateXXX:a.state.storageForCellBuild,taskForCellBuild:a.state.taskForCellBuild,isNowDate:"numbers nowDate",todayDate:C.getDate(),todayMonth:C.getMonth(),todayYear:C.getFullYear()})):r.push(l.a.createElement(y,{clickCell:a.clickCell,date:t.getDate(),month:t.getMonth(),year:n.getFullYear(),stateXXX:a.state.storageForCellBuild,taskForCellBuild:a.state.taskForCellBuild,isNowDate:"numbers",todayDate:C.getDate(),todayMonth:C.getMonth(),todayYear:C.getFullYear()})):r.push(l.a.createElement(y,{stateXXX:a.state.storageForCellBuild,taskForCellBuild:a.state.taskForCellBuild,clickCell:a.clickCell,date:t.getDate(),month:t.getMonth(),year:n.getFullYear(),isNowDate:"numbers otherMonth",todayDate:C.getDate(),todayMonth:C.getMonth(),todayYear:C.getFullYear()})),t.setDate(t.getDate()+1));i.push(l.a.createElement("tr",null,r))}return s.push(l.a.createElement("table",{className:"main col-lg-12 col-md-12 col-sm-12 col-xs-12"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:2},l.a.createElement("button",{className:"decrease",onClick:function(){e.setMonth(e.getMonth()-1),a.setState({dataState:e})}},"\u2190"),l.a.createElement("div",{className:"head"},D[e.getMonth()]),l.a.createElement("div",{className:"head"},e.getFullYear()),l.a.createElement("button",{className:"increase",onClick:function(){e.setMonth(e.getMonth()+1),a.setState({dataState:e})}},"\u2192")))),l.a.createElement("tbody",null,i))),s},a.state={dataState:a.props.helpDate,storageForCellBuild:localStorage.getItem("myEl")},a.transit=a.transit.bind(Object(h.a)(Object(h.a)(a))),a.eventDelete=a.eventDelete.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"scontainer"},l.a.createElement("div",{className:"calendar"},this.createTable(this.state.dataState)),l.a.createElement("br",null),l.a.createElement("button",{className:"deleteAllEv",onClick:this.clearLocalStorage},"DELETE ALL EVENTS"),l.a.createElement(k,{day:this.state.day,month:this.state.month+1,transit:this.transit,eventDelete:this.eventDelete,monthName:D[this.state.month],year:this.state.dataState.getFullYear()}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.storageForCellBuild!==localStorage.getItem("myEl")?{storageForCellBuild:localStorage.getItem("myEl")}:t.dataState!==e.helpDate?{dataState:e.helpDate}:null}}]),t}(l.a.Component),O=new Date,j=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"spacer"}),l.a.createElement(N,{helpDate:O}))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.80ab4dd4.chunk.js.map