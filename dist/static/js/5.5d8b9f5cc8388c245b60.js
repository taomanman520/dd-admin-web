webpackJsonp([5],{BMsY:function(e,t){},Uial:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")}}},r={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{md:12}},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"活动名称"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"活动区域"}},[l("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"活动时间"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),e._v(" "),l("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),l("el-col",{attrs:{span:11}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"即时配送"}},[l("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"活动性质"}},[l("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),l("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),l("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),l("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"特殊资源"}},[l("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[l("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),l("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"活动形式"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),l("el-button",[e._v("取消")])],1)],1)],1),e._v(" "),l("el-col",{attrs:{md:12}},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"活动名称"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"活动区域"}},[l("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"活动时间"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),e._v(" "),l("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),l("el-col",{attrs:{span:11}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"即时配送"}},[l("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"活动性质"}},[l("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[l("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),l("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),l("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),l("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"特殊资源"}},[l("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[l("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),l("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"活动形式"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),l("el-button",[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var o=l("C7Lr")(a,r,!1,function(e){l("BMsY")},null,null);t.default=o.exports}});
//# sourceMappingURL=5.5d8b9f5cc8388c245b60.js.map