webpackJsonp([17],{"2uFj":function(e,t,n){"use strict";t.a={TOKEN_KEY:"token",ROUTER_KEY:"routers",DYNAMIC_ROUTER_KEY:"dynamic-routers",ROUTER_WHITE_LIST:["/login"]}},HBSQ:function(e,t){},MWF8:function(e,t,n){var i={"./":["8hXn",1],"./basic/form":["Uial",5],"./basic/form.vue":["Uial",5],"./basic/table":["Yvoq",6],"./basic/table.vue":["Yvoq",6],"./components/menu-bar":["7Yuv",0,7],"./components/menu-bar.vue":["7Yuv",0,7],"./components/menu-item":["uQBQ",0],"./components/menu-item.vue":["uQBQ",0],"./components/menu-link":["1ENj",0],"./components/menu-link.vue":["1ENj",0],"./components/nav-bar":["H0Nb",8],"./components/nav-bar.vue":["H0Nb",8],"./components/views-bar":["jKLp",0,4],"./components/views-bar.vue":["jKLp",0,4],"./home":["26dS",3,0],"./home.vue":["26dS",3,0],"./index":["8hXn",1],"./index.vue":["8hXn",1],"./login":["Quw4",2],"./login.vue":["Quw4",2],"./menu-1/menu-1-1":["xaN/",15],"./menu-1/menu-1-1.vue":["xaN/",15],"./menu-1/menu-1-1/menu-1-1-1":["lC8t",14],"./menu-1/menu-1-1/menu-1-1-1.vue":["lC8t",14],"./menu-1/menu-1-1/menu-1-1-2":["DQab",13],"./menu-1/menu-1-1/menu-1-1-2.vue":["DQab",13],"./menu-1/menu-1-2":["lDs9",12],"./menu-1/menu-1-2.vue":["lDs9",12],"./settings":["p9Hj",9],"./settings.vue":["p9Hj",9],"./user/user":["+L4n",11],"./user/user.vue":["+L4n",11],"./user/user1":["lqB7",10],"./user/user1.vue":["lqB7",10]};function r(e){var t=i[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}r.keys=function(){return Object.keys(i)},r.id="MWF8",e.exports=r},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("xd7I"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("C7Lr")({name:"App"},r,!1,function(e){n("hXs7")},null,null).exports,s=n("YaEn"),a=n("4YfN"),u=n.n(a),c=n("SQ6o"),m=n("2uFj"),d=n("2bvH"),l=n("hRKE"),f=n.n(l),p=n("mAfS"),v=n.n(p),E={getCircularReplacer:function(){var e=new v.a;return function(t,n){if("object"===(void 0===n?"undefined":f()(n))&&null!==n){if(e.has(n))return;e.add(n)}return n}},notNull:function(e){return null!=e&&void 0!=e&&"null"!=e&&"undefined"!=e&&""!=e},isNull:function(e){return!this.notNull(e)},getSettingStorage:function(e){var t=localStorage.getItem(e);return"true"==(t=!!this.notNull(t)&&t)}},g={state:{settings:{openSetting:E.getSettingStorage("openSetting"),showViewsBar:E.getSettingStorage("showViewsBar"),viewBarType:localStorage.getItem("viewBarType")||"tab",keepViewsByRefresh:E.getSettingStorage("keepViewsByRefresh"),collapseMenu:E.getSettingStorage("collapseMenu"),uniqueOpened:E.getSettingStorage("uniqueOpened"),showBreadCrumb:E.getSettingStorage("showBreadCrumb")}},mutations:{UPDATE_SETTINGS:function(e,t){var n=t.key,i=t.value,r=t.type;if(r&&"toggle"===r)return e.settings[n]=!e.settings[n],void localStorage.setItem(n,e.settings[n]);e.settings[n]=i,localStorage.setItem(n,i)}},actions:{updateSettings:function(e,t){(0,e.commit)("UPDATE_SETTINGS",t)}}},h=n("rVsN"),w=n.n(h),S=n("aA9S"),V=n.n(S),I=n("IHPB"),R=n.n(I),_=n("HzJ8"),T=n.n(_),D=n("KH7x"),y=n.n(D),b=n("3cXf"),N=n.n(b),O={state:{keepViewsByRefresh:E.getSettingStorage("keepViewsByRefresh"),visitedViews:[]},mutations:{ADD_VISITED_VIEW:function(e,t){var n=e.keepViewsByRefresh?JSON.parse(localStorage.getItem("visitedViews")||"[]"):e.visitedViews;if(n.some(function(e){return e.path===t.path}))e.visitedViews=n;else{var i={};i.name=t.name||"无标题",i.path=t.path,i.fullPath=t.fullPath,i.fixed=t.fixed,n.push(i),e.visitedViews=n,localStorage.setItem("visitedViews",N()(n))}},DEL_VISITED_VIEW:function(e,t){var n=e.keepViewsByRefresh?JSON.parse(localStorage.getItem("visitedViews")||"[]"):e.visitedViews,i=!0,r=!1,o=void 0;try{for(var s,a=T()(n.entries());!(i=(s=a.next()).done);i=!0){var u=s.value,c=y()(u,2),m=c[0];if(c[1].path===t.path){n.splice(m,1),e.visitedViews=n,localStorage.setItem("visitedViews",N()(n));break}}}catch(e){r=!0,o=e}finally{try{!i&&a.return&&a.return()}finally{if(r)throw o}}},DEL_OTHERS_VISITED_VIEWS:function(e,t){var n=e.keepViewsByRefresh?JSON.parse(localStorage.getItem("visitedViews")||"[]"):e.visitedViews,i=n.filter(function(e){return e.fixed}),r=!0,o=!1,s=void 0;try{for(var a,u=T()(n.entries());!(r=(a=u.next()).done);r=!0){var c=a.value,m=y()(c,2),d=m[0];if(m[1].path===t.path&&!t.fixed){n=n.slice(d,d+1),n=[].concat(R()(i),R()(n)),e.visitedViews=n,localStorage.setItem("visitedViews",N()(n));break}}}catch(e){o=!0,s=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw s}}},DEL_ALL_VISITED_VIEWS:function(e){var t=e.visitedViews.filter(function(e){return e.fixed});e.visitedViews=t,localStorage.setItem("visitedViews",N()(t))},UPDATE_VISITED_VIEW:function(e,t){var n=!0,i=!1,r=void 0;try{for(var o,s=T()(e.visitedViews);!(n=(o=s.next()).done);n=!0){var a=o.value;if(a.path===t.path){a=V()(a,t);break}}}catch(e){i=!0,r=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw r}}}},actions:{addView:function(e,t){(0,e.dispatch)("addVisitedView",t)},addVisitedView:function(e,t){(0,e.commit)("ADD_VISITED_VIEW",t)},delView:function(e,t){var n=e.dispatch,i=e.state;return new w.a(function(e){n("delVisitedView",t),e({visitedViews:[].concat(R()(i.visitedViews))})})},delVisitedView:function(e,t){var n=e.commit,i=e.state;return new w.a(function(e){n("DEL_VISITED_VIEW",t),e([].concat(R()(i.visitedViews)))})},delOthersViews:function(e,t){var n=e.dispatch,i=e.state;return new w.a(function(e){n("delOthersVisitedViews",t),e({visitedViews:[].concat(R()(i.visitedViews))})})},delOthersVisitedViews:function(e,t){var n=e.commit,i=e.state;return new w.a(function(e){n("DEL_OTHERS_VISITED_VIEWS",t),e([].concat(R()(i.visitedViews)))})},delAllViews:function(e,t){var n=e.dispatch,i=e.state;return new w.a(function(e){n("delAllVisitedViews",t),e({visitedViews:[].concat(R()(i.visitedViews))})})},delAllVisitedViews:function(e){var t=e.commit,n=e.state;return new w.a(function(e){t("DEL_ALL_VISITED_VIEWS"),e([].concat(R()(n.visitedViews)))})},updateVisitedView:function(e,t){(0,e.commit)("UPDATE_VISITED_VIEW",t)}}},U={state:{user:{},role:[],routers:s.a.options.routes,dynamicRouters:[]},mutations:{GET_USER:function(e){return e.user},SET_USER:function(e,t){e.user=t},SET_ROUTER:function(e,t){e.routers=e.routers.concat(t)},GET_DYNAMIC_ROUTER:function(e){return e.dynamicRouters},SET_DYNAMIC_ROUTER:function(e,t){e.dynamicRouters=t}},actions:{getUser:function(e){(0,e.commit)("GET_USER")},setUser:function(e,t){(0,e.commit)("SET_USER",t)},setRouters:function(e,t){(0,e.commit)("SET_ROUTER",t)},getDynamicRouters:function(e){(0,e.commit)("GET_DYNAMIC_ROUTER")},setDynamicRouters:function(e,t){(0,e.commit)("SET_DYNAMIC_ROUTER",t)}}},x={settings:function(e){return e.settings.settings},visitedViews:function(e){return e.viewsBar.visitedViews},showBreadCrumb:function(e){return e.viewsBar.showBreadCrumb},user:function(e){return e.user.user},routers:function(e){return e.user.routers},dynamicRouters:function(e){return e.user.dynamicRouters}};i.default.use(d.a);var B=new d.a.Store({modules:{settings:g,viewsBar:O,user:U},getters:x}),Y=n("pd7E");s.a.beforeEach(function(e,t,n){c.a.getToken()?0===B.state.user.dynamicRouters.length?k(n,e):n():m.a.ROUTER_WHITE_LIST.indexOf(e.path)>-1?n():n("/login")}),s.a.afterEach(function(){});var k=function(e,t){var n=c.a.getDynamicRouters();0===n.length&&(n=Y.a.routers,c.a.setDynamicRouters(n)),B.dispatch("setDynamicRouters",Y.a.routers),s.a.addRoutes(A(n)),e(u()({},t,{replace:!0}))},A=function e(t){return t.filter(function(t){if(t.component){var n=t.component;t.component=L(n)}return t.children&&t.children.length&&(t.children=e(t.children)),!0})},L=function(e){return function(){return n("MWF8")("./"+e)}},K=n("NxjZ"),j=n.n(K),H=(n("zlkP"),n("HBSQ"),n("e9aj")),C=n.n(H),W=(n("JE8S"),n("Eczu")),Q=n.n(W);n("nj3L");i.default.config.productionTip=!1,i.default.use(j.a),i.default.use(C.a),i.default.use(Q.a),new i.default({el:"#app",router:s.a,store:B,components:{App:o},template:"<App/>"})},SQ6o:function(e,t,n){"use strict";var i=n("3cXf"),r=n.n(i),o=n("2uFj"),s={getToken:function(){return sessionStorage.getItem(o.a.TOKEN_KEY)},setToken:function(e){return sessionStorage.setItem(o.a.TOKEN_KEY,e)},delToken:function(){return sessionStorage.setItem(o.a.TOKEN_KEY,null)},getRouters:function(){var e=sessionStorage.get(o.a.ROUTER_KEY);return JSON.parse(e||"[]")},setRouters:function(e){return sessionStorage.set(o.a.ROUTER_KEY,r()(e))},getDynamicRouters:function(){var e=sessionStorage.getItem(o.a.DYNAMIC_ROUTER_KEY);return JSON.parse(e||"[]")},setDynamicRouters:function(e){return sessionStorage.setItem(o.a.DYNAMIC_ROUTER_KEY,r()(e))},delRouters:function(){return sessionStorage.setItem(o.a.ROUTER_KEY,null)}};t.a=s},YaEn:function(e,t,n){"use strict";var i=n("xd7I"),r=n("7LQH");i.default.use(r.a),t.a=new r.a({mode:"history",routes:[{path:"/login",name:"login",component:function(){return n.e(2).then(n.bind(null,"Quw4"))}}]})},hXs7:function(e,t){},nj3L:function(e,t){},pd7E:function(e,t,n){"use strict";t.a={userName:"admin",password:"admin",roles:[],routers:[{path:"/",name:"home",component:"home",redirect:"index",children:[{id:1,path:"index",name:"首页",icon:"el-icon-s-home",parentId:0,fixed:!0,component:"index",meta:{fixed:!0}}]},{path:"https://github.com/dongdong-cloud/vue-admin",name:"项目地址",isExternal:!0,icon:"fa fa-github"},{id:2,path:"/basic",name:"基础组件",icon:"fa fa-cogs",parentId:0,component:"home",children:[{id:3,path:"table",name:"表格",icon:"fa fa-table",parentId:2,component:"basic/table"},{id:4,path:"form",name:"表单",icon:"fa fa-wpforms",parentId:2,component:"basic/form"}]},{id:5,path:"/menu-1",name:"多级菜单",icon:"el-icon-menu",parentId:0,component:"home",children:[{id:6,path:"menu-1-1",name:"二级菜单 1",icon:"el-icon-menu",parentId:5,component:"menu-1/menu-1-1",children:[{id:8,path:"menu-1-1-1",name:"三级菜单 1",icon:"el-icon-menu",parentId:6,component:"menu-1/menu-1-1/menu-1-1-1"},{id:9,path:"menu-1-1-2",name:"三级菜单 2",icon:"el-icon-menu",parentId:6,component:"menu-1/menu-1-1/menu-1-1-2"}]},{id:7,path:"menu-1-2",name:"二级菜单 2",icon:"el-icon-menu",parentId:5,component:"menu-1/menu-1-2"}]}]}},zlkP:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b1067be4cc3452ee6ac2.js.map