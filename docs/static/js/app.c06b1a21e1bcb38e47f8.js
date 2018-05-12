webpackJsonp([1],{0:function(t,e){},"25nT":function(t,e){},"7zck":function(t,e){},Gg6h:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o=n("Zrlr"),i=n.n(o),r=n("wxAW"),s=n.n(r),c=new(function(){function t(){i()(this,t),this.env=null}return s()(t,[{key:"setEnv",value:function(t){this.env=t}},{key:"isDevMode",value:function(){return null===this.env||"development"===this.env.NODE_ENV}}]),t}()),u={name:"App",data:function(){return{items:[{title:"Config",icon:"dashboard",to:"config"},{title:"Main",icon:"question_answer",to:"main"}]}},methods:{switchComponent:function(t){this.$router.push(t)}},mounted:function(){c.setEnv(Object({NODE_ENV:"production"}))}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-content",[e("v-container",{attrs:{fluid:""}},[e("router-view")],1)],1),this._v(" "),e("v-footer",{attrs:{app:""}})],1)},staticRenderFns:[]};var d=n("VU/8")(u,l,!1,function(t){n("25nT")},null,null).exports,f=n("/ocq"),p={name:"ProjectView",data:function(){return{g:null,height:700,areaScale:null,textScale:null,alphaScale:null,simulation:null,zoomFunc:null,updateTextLocation:null,div:null}},computed:{repositoryList:function(){return this.$store.state.userinfo.repositoryBeanList}},methods:{initChartContainer:function(){if(!this.g){var t=this.$d3.select("#projectViewSvg");this.g=t.append("g"),this.div=this.$d3.select("#projectViewDiv")}},startDisplay:function(){var t=this;this.areaScale=this.$d3.scaleSqrt().domain(this.$d3.extent(this.repositoryList,function(t){return t.count})).range([20,80]),this.textScale=this.$d3.scaleSqrt().domain(this.$d3.extent(this.repositoryList,function(t){return t.count})).range([6,24]),this.alphaScale=this.$d3.scaleLinear().domain(this.$d3.extent(this.repositoryList,function(t){return t.count})).range([.8,1]);var e=this,n=this.div.style("width");this.width=parseFloat(n.substr(0,n.length-2)),this.simulation=this.$d3.forceSimulation(this.repositoryList).force("charge",this.$d3.forceManyBody()).force("collide",this.$d3.forceCollide().radius(function(e){return t.areaScale(e.count)+3})).force("forceX",this.$d3.forceX(this.width/2).strength(.05)).force("forceY",this.$d3.forceY(this.height/2).strength(.05)).on("tick",function(){var t=e.$d3.zoomTransform(e.div);e.updateTextLocation();var n=e.div.selectAll("span").data(e.repositoryList);n.enter().append("span").merge(n).text(function(t){return t.name}).style("font-size",function(t){return e.textScale(t.count)+"px"}).style("left",function(n){return n.x-1.5*e.areaScale(n.count)/2*t.k+"px"}).style("top",function(n){return n.y-e.textScale(n.count)/2*t.k+"px"}).style("width",function(t){return 1.5*e.areaScale(t.count)+"px"}),n.exit().remove();var a=e.g.selectAll("circle").data(e.repositoryList);a.enter().append("circle").merge(a).attr("cx",function(t){return t.x}).attr("cy",function(t){return t.y}).attr("r",function(t){return e.areaScale(t.count)}).style("opacity",function(t){return e.alphaScale(t.count)}).call(e.enableDragFunc()),a.exit().remove()}),this.enableDragFunc(),this.enableZoomFunc()},enableZoomFunc:function(){var t=this;this.zoomFunc=this.$d3.zoom().scaleExtent([.5,10]).on("zoom",function(){t.g.attr("transform",t.$d3.event.transform),t.div.selectAll("span").data(t.repositoryList).each(function(e){var n=t.$d3.select(this),a=n.style("left"),o=n.style("top");n.style("transform-origin","-"+a+" -"+o)}),t.div.selectAll("span").data(t.repositoryList).style("transform","translate("+t.$d3.event.transform.x+"px,"+t.$d3.event.transform.y+"px) scale("+t.$d3.event.transform.k+")")}),this.g.call(this.zoomFunc)},enableDragFunc:function(){var t=this,e=this;return this.updateTextLocation=function(){e.div.selectAll("span").data(e.repositoryList).each(function(t){var n=e.$d3.select(this),a=n.style("left"),o=n.style("top");n.style("transform-origin","-"+a+" -"+o)})},this.$d3.drag().on("start",function(e){t.$d3.event.active||t.simulation.alphaTarget(.3).restart(),e.fx=t.$d3.event.x,e.fy=t.$d3.event.y}).on("drag",function(n){n.fx=t.$d3.event.x,n.fy=t.$d3.event.y,e.updateTextLocation()}).on("end",function(e){t.$d3.event.active||t.simulation.alphaTarget(0),e.fx=null,e.fy=null})},update:function(){this.initChartContainer(),this.startDisplay()}},watch:{"$store.state.userinfo.repositoryBeanList":{handler:function(t,e){this.update()},deep:!0}},mounted:function(){this.update()}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"projectViewContainer"}},[e("svg",{attrs:{id:"projectViewSvg"}}),this._v(" "),e("div",{attrs:{id:"projectViewDiv"}})])])},staticRenderFns:[]};var v=n("VU/8")(p,h,!1,function(t){n("r6ZC")},null,null).exports,m=n("mvHQ"),g=n.n(m),y=n("NYxO"),x={state:{domainName:"https://api.github.com/graphql",privateToken:"83f30f4332b2371486791b2fadd8f677f476a8c2"},mutations:{},actions:{}},w={state:{username:"ssthouse",avatarUrl:"https://assets-cdn.github.com/images/modules/logos_page/Octocat.png",follwerList:[],followingList:[],repositoryBeanList:[]},mutations:{updateUserInfo:function(t,e){t.avatarUrl=e.avatarUrl},updateUsername:function(t,e){t.username=e},updateRepositoryBeanList:function(t,e){t.repositoryBeanList=e}},actions:{}};a.a.use(y.a);var $=new y.a.Store({modules:{gitlabConfig:x,userinfo:w}}),_=n("mtWM"),b=n.n(_).a.create({baseURL:"https://api.github.com/graphql",headers:{Authorization:"Bearer "+"e741155e35e144246dfe8e1afc09af750997de3b".split("").reverse().join("")}}),C=function t(e,n){i()(this,t),this.name=e,this.count=n},L=function(){function t(){i()(this,t),this.store=$}return s()(t,[{key:"getRepositoryBeanListFromQuery",value:function(t){if(t){for(var e=[],n=t.user.repositories.nodes,a=0;a<n.length;a++){var o=n[a];o.ref&&e.push(new C(o.name,o.ref.target.history.totalCount))}return e}}},{key:"getAllProjects",value:function(){var t=this,e={query:'query {\n        user(login: "'+this.store.state.userinfo.username+'") {\n          avatarUrl\n          name\n          repositories(first: 100){\n            totalCount\n            pageInfo{\n              hasNextPage\n              endCursor\n            }\n            nodes{\n              id\n              name\n              ref(qualifiedName: "master") {\n                target {\n                  ... on Commit {\n                    history {\n                      totalCount\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }'};b.post("",g()(e)).then(function(e){var n=e.data.data.user;t.store.commit("updateUserInfo",{avatarUrl:n.avatarUrl}),t.store.commit("updateRepositoryBeanList",t.getRepositoryBeanListFromQuery(e.data.data))}).catch(function(t){console.log("~~~~~~~~~~~~~~~~error get all projects")})}}]),t}(),S=n("JnRc"),j=n.n(S),k=j.a.Object.extend("UserRecord"),D=new(function(){function t(){i()(this,t)}return s()(t,[{key:"addRecord",value:function(t){c.isDevMode()?console.log("emit user record in dev mode"):(new k).save({username:t}).then(function(t){console.log("save userName to leancloud")}).catch(function(t){console.log("error save user record to leancloud"),console.log(t)})}}]),t}()),U={name:"Main",components:{"project-view":v},data:function(){return{projectDao:new L,username:"",userRecorder:D}},computed:{avatarUrl:function(){return this.$store.state.userinfo.avatarUrl}},methods:{showProjects:function(){this.$store.commit("updateUsername",this.username),this.projectDao.getAllProjects(),this.userRecorder.addRecord(this.username)}},created:function(){c.setEnv(Object({NODE_ENV:"production"}))}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md4:"","offset-md4":""}},[n("div",{staticClass:"flex-row"},[n("v-text-field",{staticClass:"input-group--focused",attrs:{label:"github usename"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("v-btn",{on:{click:t.showProjects}},[t._v("show")])],1)])],1),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{md4:"","offset-md4":"",xs12:""}},[n("v-card",{staticStyle:{width:"100%"}},[n("v-card-title",{staticClass:"action-title",attrs:{"primary-title":""}},[t._v("Support actions:")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-direction":"column"}},[n("v-chip",{attrs:{selected:""}},[t._v("Zoom by mouse wheel")]),t._v(" "),n("v-chip",{attrs:{selected:""}},[t._v("Circles can be draged")])],1)],1)],1),t._v(" "),n("v-flex",{staticStyle:{"margin-top":"20px"},attrs:{md4:"","offset-md4":"",xs12:""}},[n("v-avatar",{staticClass:"grey lighten-4",attrs:{tile:!1,size:"120px"}},[n("img",{attrs:{src:t.avatarUrl,alt:"avatar"}})])],1)],1),t._v(" "),n("project-view")],1)},staticRenderFns:[]};var A=n("VU/8")(U,N,!1,function(t){n("NiSs")},"data-v-74944e98",null).exports,E={name:"Config",data:function(){return{projectDao:new L,domainName:this.$store.state.gitlabConfig.domainName,privateToken:this.$store.state.gitlabConfig.privateToken}},methods:{testConnection:function(){this.projectDao.getAllProjects()}}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  Config page:\n  "),n("v-text-field",{attrs:{label:"domain:",value:t.domainName}}),t._v(" "),n("v-text-field",{attrs:{label:"private token:",value:t.privateToken}}),t._v(" "),n("v-btn",{on:{click:function(e){t.testConnection()}}},[t._v("Test connection")])],1)},staticRenderFns:[]};var P=n("VU/8")(E,F,!1,function(t){n("Gg6h")},"data-v-852ba536",null).exports;a.a.use(f.a);var R=new f.a({routes:[{path:"/",redirect:"main"},{path:"/main",name:"main",component:A},{path:"/config",name:"config",component:P}]}),T=(n("7zck"),n("3EgV")),q=n.n(T),z=n("8+8L"),V=n("vwbq"),B=new(function(){function t(){i()(this,t),this.APP_ID="86t8rMn6wqyJwqwFKsuBqjie-gzGzoHsz",this.APP_KEY="49cGO1dtTXdWqRlDJq8OarIb"}return s()(t,[{key:"init",value:function(){j.a.init({appId:this.APP_ID,appKey:this.APP_KEY})}}]),t}());a.a.use(z.a),a.a.use(q.a),a.a.config.productionTip=!1,a.a.prototype.$axios=b,a.a.prototype.$d3=V,a.a.prototype.$leancloud=B,B.init(),new a.a({el:"#app",router:R,store:$,components:{App:d},template:"<App/>"})},NiSs:function(t,e){},r6ZC:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c06b1a21e1bcb38e47f8.js.map