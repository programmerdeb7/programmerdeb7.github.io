webpackJsonp([1],{"/NIL":function(t,e){},"7jHT":function(t,e){},"9M+g":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=a("kxiW"),o=Object(s.initializeApp)({apiKey:"AIzaSyC87Lfg7x_OIsTDsD7wJ24qShPp5TVsyyw",authDomain:"vue-simple-project-01.firebaseapp.com",databaseURL:"https://vue-simple-project-01.firebaseio.com",projectId:"vue-simple-project-01",storageBucket:"vue-simple-project-01.appspot.com",messagingSenderId:"604770702570"}).firestore(),n=(o.collection("comments"),o.collection("homePageStatus"),a("VogD"));i.default.use(n.default);var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{id:"navbar",fixed:"top"}},[a("b-container",[a("b-navbar-brand",{attrs:{href:"#",id:"navbarBrand",to:"/"}},[t._v("\n        debbroto \n        "),a("vue-typed-js",{attrs:{strings:["<b>portfolio</b>"],loop:!0,showCursor:!1,id:"navTypeJs"}},[a("span",{staticClass:"typing"})])],1),t._v(" "),a("b-navbar-nav",{staticClass:"ml-auto",attrs:{id:"navbarRight"}},[a("b-nav-item",{attrs:{to:"career",id:"careerLink"}},[t.spiner.career?a("b-spinner",{attrs:{type:"grow",label:"Spinning"}}):t._e(),t._v("Career")],1),t._v(" "),a("b-nav-item",{attrs:{to:"skills",id:"skillsLink"}},[t.spiner.skills?a("b-spinner",{attrs:{type:"grow",label:"Spinning"}}):t._e(),t._v("Skills")],1),t._v(" "),a("b-nav-item",{attrs:{to:"portfolio",id:"portfolioLink"}},[t.spiner.portfolio?a("b-spinner",{attrs:{type:"grow",label:"Spinning"}}):t._e(),t._v("Portfolio")],1),t._v(" "),a("b-nav-item",{attrs:{to:"about",id:"aboutLink"}},[t.spiner.about?a("b-spinner",{attrs:{type:"grow",label:"Spinning"}}):t._e(),t._v("About")],1)],1)],1)],1),t._v(" "),a("router-view",{on:{career:t.careerHover,skills:t.skillsHover}})],1)},staticRenderFns:[]};var l=a("VU/8")({name:"app",data:function(){return{spiner:{career:!1,skills:!1,portfolio:!1,about:!1}}},methods:{careerHover:function(t){1==t&&(this.spiner.career=!0),0==t&&(this.spiner.career=!1)},skillsHover:function(t){this.spiner.skills=1==t||0!=t}}},r,!1,function(t){a("ul9O")},null,null).exports,c=a("hnaQ"),d=a("Tqaz"),v=(a("Jmt5"),a("9M+g"),a("/ocq")),u=a("uSVs"),_=a.n(u),b=a("jOQl"),p=a.n(b);i.default.use(n.default);var f={components:{"vue-flip":_.a,isotope:p.a},data:function(){return{jobRetriveData:[],loader:!0,dataLoadSignal:!1,list:[{id:1,name:"JavaScript"},{id:2,name:"Vue JS"},{id:3,name:"Nuxt JS"}],option1:{id:"first",getSortData:{id:"id",name:function(t){return t.name.toLowerCase()}},getFilterData:{isEven:function(t){return t.id%2==0},isOdd:function(t){return t.id%2!=0}}}}},firestore:function(){return{jobRetriveData:o.collection("jobs").orderBy("createdAt","asc")}},methods:{careerHover:function(t){1==t&&this.$emit("career",!0),0==t&&this.$emit("career",!1)},skillsHover:function(t){1==t&&this.$emit("skills",!0),0==t&&this.$emit("skills",!1)}},watch:{jobRetriveData:function(){this.jobRetriveData.length>1&&(this.loader=!1,this.dataLoadSignal=!0)}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loader?a("div",{staticClass:"lds-ring"},[a("span",{attrs:{id:"loaderText"}},[t._v("Loading")]),a("div"),a("div"),a("div"),a("div")]):t._e(),t._v(" "),t.dataLoadSignal?a("b-container",{attrs:{id:"mainbody"},on:{mouseover:function(e){return t.careerHover(!0)},mouseout:function(e){return t.careerHover(!1)}}},[a("b-row",[a("b-col",{attrs:{cols:"12",md:"6"}},[a("div",{attrs:{id:"career"}},[a("h1",[t._v("Career Objective")]),t._v(" "),a("p",{attrs:{id:"career-info-a"}},[t._v("\n              I am passionate programmer (ACMICPC contestant) and possess sound knowledge of Javascript, Vue JS, Nuxt JS, Vuetify, React JS, JQuary, Python, PHP,\n              DBMS(SQL Server, MySql), Version Control (git), HTML5, CSS3, Bootstrap, Stylus, Automation and web development methodology related fields.\n            ")]),t._v(" "),a("p",{attrs:{id:"career-info-b"}},[t._v("I want to apply my knowledge and skills to help achieve the business goal of the company.")]),t._v(" "),a("router-link",{attrs:{to:"career"}},[a("a",{staticClass:"button"},[t._v("See more")])])],1)]),t._v(" "),a("b-col",{attrs:{cols:"12",md:"6"}},[a("div",{attrs:{id:"career"}},[a("div",{staticClass:"code"},[a("pre",[a("code",{staticClass:"language-js"},[t._v('{\n  "name": "Debbroto Sarkar",\n  "occupation": "Web Developer",\n  "available_for_hire:" true\n}')])])])])])],1)],1):t._e(),t._v(" "),t.dataLoadSignal?a("div",{attrs:{id:"skills"},on:{mouseover:function(e){return t.skillsHover(!0)},mouseout:function(e){return t.skillsHover(!1)}}},[a("b-container",[a("h1",[t._v("Technical Skills")]),t._v(" "),a("p",[t._v("This comes from having a decent understanding of all the code as well as being able to read the Perl scripts.")]),t._v(" "),a("isotope",{attrs:{options:t.option1,list:t.list}},t._l(t.list,function(e){return a("div",{key:e.id},[t._v("\n            "+t._s(e.name)+"\n          ")])}),0)],1)],1):t._e(),t._v(" "),a("h1",{staticStyle:{"text-align":"center","background-color":"red",color:"#fff",padding:"10px"}},[t._v("Development Status : In Progress")]),t._v(" "),a("br"),a("br"),a("br"),a("br")],1)},staticRenderFns:[]};var h=a("VU/8")(f,m,!1,function(t){a("oWZu")},"data-v-f70ea36a",null).exports,C={data:function(){return{jobRetriveData:[],loader:!0}},firestore:function(){return{jobRetriveData:o.collection(this.jobType).orderBy("createdAt","desc")}},methods:{},watch:{jobRetriveData:function(){this.jobRetriveData.length>0&&(this.loader=!1)}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.loader?e("div",{staticClass:"lds-ring"},[e("span",{attrs:{id:"loaderText"}},[this._v("Loading")]),e("div"),e("div"),e("div"),e("div")]):this._e()])},staticRenderFns:[]};var y=a("VU/8")(C,g,!1,function(t){a("vp6l")},"data-v-39a12fc1",null).exports,k={props:["jobType","jobTitle"],data:function(){return{jobRetriveData:[],searchKey:"",loader:!0,comment:"",showDismissibleAlert:!1,dismissSecs:5,dismissCountDown:0}},firestore:function(){return{jobRetriveData:o.collection(this.jobType).orderBy("createdAt","asc")}},methods:{redirectSource:function(t){window.open(t)},sunmitComments:function(){""!=this.comment?(this.$emit("comment",this.comment),this.comment="",this.dismissCountDown=this.dismissSecs):alert("Please! Input something.")},countDownChanged:function(t){this.dismissCountDown=t},openNav:function(){document.getElementById("mySidenav").style.height="100%"},closeNav:function(){document.getElementById("mySidenav").style.height="0"}},watch:{jobRetriveData:function(){this.jobRetriveData.length>0&&(this.loader=!1)}}},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{type:"light",variant:"light",id:"navbar",fixed:"top"}},[a("div",{attrs:{id:"navbar-container"}},[a("b-navbar-brand",{attrs:{href:"#",id:"navbar-brand"}},[t._v(t._s(this.jobType)+" "),a("i",{staticClass:"fab fa-searchengin"}),t._v(" JOBS")]),t._v(" "),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form",[a("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",id:"search-input",placeholder:"Enter your input",list:"my-list-id"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),t._v(" "),a("datalist",{attrs:{id:"my-list-id"}},t._l(t.jobRetriveData,function(e){return a("option",{key:e},[t._v(t._s(e.key))])}),0),t._v(" "),a("span",{attrs:{id:"menu"},on:{click:function(e){return t.openNav()}}},[a("i",{staticClass:"fas fa-bars"})]),t._v(" "),a("div",{staticClass:"sidenav",attrs:{id:"mySidenav"}},[a("a",{staticClass:"closebtn",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.closeNav()}}},[t._v("×")]),t._v(" "),a("div",{staticClass:"navLinks"},[a("a",{attrs:{href:"#"}},[t._v("Home")]),t._v(" "),a("a",{attrs:{href:"#"}},[t._v("About")]),t._v(" "),a("a",{attrs:{href:"#"}},[t._v("Services")]),t._v(" "),a("a",{attrs:{href:"#"}},[t._v("Contact")])])])],1)],1)],1)]),t._v(" "),a("div",{attrs:{id:"it-jobs"}},[t.loader?a("div",{staticClass:"lds-ring"},[a("span",{attrs:{id:"loaderText"}},[t._v("Loading")]),a("div"),a("div"),a("div"),a("div")]):t._e(),t._v(" "),t._l(t.jobRetriveData,function(e){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.title==t.jobTitle,expression:"job.title == jobTitle"}],key:e,attrs:{sm:"12"}},[a("b-card",{attrs:{title:e.title,tag:"article",id:"job-card"}},[""!=e.companyName?a("b-card-text",[t._v(t._s(e.companyName))]):t._e(),t._v(" "),a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{staticClass:"item",attrs:{col:"",sm:"6"}},[t._v("Vacancies")]),t._v(" "),a("b-col",{staticClass:"item",attrs:{col:"",sm:"6"}},[t._v("Deadline")])],1),t._v(" "),a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{staticClass:"value",attrs:{col:"",sm:"6"}},[a("i",{staticClass:"fas fa-user-friends"}),t._v(" "+t._s(e.vacancies))]),t._v(" "),a("b-col",{staticClass:"value",attrs:{col:"",sm:"6"}},[a("i",{staticClass:"fas fa-clock"}),t._v(" "+t._s(e.deadline))])],1),t._v(" "),a("div",{attrs:{id:"divider"}}),t._v(" "),a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{staticClass:"item",attrs:{col:"",sm:"6"}},[t._v("Location")]),t._v(" "),a("b-col",{staticClass:"item",attrs:{col:"",sm:"6"}},[t._v("Salary")])],1),t._v(" "),a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{staticClass:"value",attrs:{col:"",sm:"6"}},[a("i",{staticClass:"fas fa-plane"}),t._v(" "+t._s(e.location))]),t._v(" "),a("b-col",{staticClass:"value",attrs:{col:"",sm:"6"}},[a("i",{staticClass:"fas fa-wallet"}),t._v(" "+t._s(e.salary))])],1)],1),t._v(" "),a("b-card",{attrs:{id:"job-card"}},[""!=e.jobContent?a("div",[a("div",{staticClass:"heading"},[t._v("Job Content")]),t._v(" "),a("div",{staticClass:"block-text"},[t._v(t._s(e.jobContent))]),t._v(" "),a("div",{attrs:{id:"border-divider"}})]):t._e(),t._v(" "),e.jobDescription.length?a("div",[a("div",{staticClass:"heading"},[t._v("Job Description")]),t._v(" "),a("ul",{staticClass:"ul"},t._l(e.jobDescription,function(e){return a("li",{key:e,staticClass:"block-text"},[t._v(t._s(e.value))])}),0)]):t._e(),t._v(" "),""!=e.photoUrl?a("img",{attrs:{src:e.photoUrl,width:"100%",id:"job-image"}}):t._e(),t._v(" "),""!=e.docsUrl?a("div",{attrs:{id:"docs-link"}},[a("i",{staticClass:"fas fa-link"}),t._v(" "),a("b-link",{attrs:{href:e.docsUrl}},[t._v("Document Link")])],1):t._e(),t._v(" "),a("div",{attrs:{id:"border-divider"}}),t._v(" "),e.jobRequirements.length?a("div",[a("div",{staticClass:"heading"},[t._v("Job Requirements")]),t._v(" "),a("ul",{staticClass:"ul"},t._l(e.jobRequirements,function(e){return a("li",{key:e,staticClass:"block-text"},[t._v(t._s(e.value))])}),0)]):t._e(),t._v(" "),e.education.length?a("div",[a("div",{staticClass:"heading"},[t._v("Educational Requirements")]),t._v(" "),a("ul",{staticClass:"ul"},t._l(e.education,function(e){return a("li",{key:e,staticClass:"block-text"},[t._v(t._s(e.value))])}),0)]):t._e(),t._v(" "),e.experience.length?a("div",[a("div",{staticClass:"heading"},[t._v("Experience Need")]),t._v(" "),a("ul",{staticClass:"ul"},t._l(e.experience,function(e){return a("li",{key:e,staticClass:"block-text"},[t._v(t._s(e.value))])}),0)]):t._e(),t._v(" "),a("div",{attrs:{id:"border-divider"}}),t._v(" "),""!=e.jobType?a("div",[a("div",{staticClass:"heading"},[t._v("Employment Status")]),t._v(" "),a("div",{staticClass:"block-text"},[a("i",{staticClass:"fas fa-user-clock"}),t._v(" "+t._s(e.jobType))]),t._v(" "),a("div",{attrs:{id:"divider"}})]):t._e(),t._v(" "),a("div",{staticClass:"heading"},[t._v("Salary")]),t._v(" "),a("div",{staticClass:"block-text"},[a("i",{staticClass:"fas fa-wallet"}),t._v(" "+t._s(e.salary))]),t._v(" "),a("div",{attrs:{id:"divider"}}),t._v(" "),""!=e.compensations?a("div",[a("div",{staticClass:"heading"},[t._v("Compensation and other benefits")]),t._v(" "),a("ul",{staticClass:"ul"},t._l(e.compensations,function(e){return a("li",{key:e,staticClass:"block-text"},[t._v(t._s(e.value))])}),0)]):t._e(),t._v(" "),a("div",{staticClass:"heading red"},[t._v("Deadline")]),t._v(" "),a("div",{staticClass:"block-text red"},[a("i",{staticClass:"fas fa-clock"}),t._v(" "+t._s(e.deadline))]),t._v(" "),a("div",{attrs:{id:"border-divider"}}),t._v(" "),""!=e.readBeforeApply?a("div",[a("div",{staticClass:"heading green"},[t._v("Read before apply")]),t._v(" "),a("div",{staticClass:"block-text green"},[t._v(t._s(e.readBeforeApply))]),t._v(" "),a("div",{attrs:{id:"divider"}})]):t._e(),t._v(" "),""!=e.applicationProcedure?a("div",[a("div",{staticClass:"heading green"},[t._v("Apply procedure")]),t._v(" "),a("div",{staticClass:"block-text green"},[t._v(t._s(e.applicationProcedure))])]):t._e(),t._v(" "),""!=e.companyInfo?a("div",[a("div",{attrs:{id:"border-divider"}}),t._v(" "),a("div",{staticClass:"heading deep-yellow"},[t._v("Company information")]),t._v(" "),a("div",{staticClass:"block-text deep-yellow"},[t._v(t._s(e.companyInfo))])]):t._e(),t._v(" "),a("div",{attrs:{id:"divider"}}),a("div",{attrs:{id:"divider"}}),t._v(" "),a("b-button",{attrs:{squared:"",block:"",variant:"outline-warning"},on:{click:function(a){return t.redirectSource(e.sourceUrl)}}},[t._v("Apply")])],1)],1)}),t._v(" "),t.loader?t._e():a("div",{staticClass:"inbox"},[a("b-card",[a("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"success"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v("\n          Thank you for your contribution!\n        ")]),t._v(" "),a("div",{staticClass:"inbox-icon"},[a("i",{staticClass:"fas fa-location-arrow"})]),t._v(" "),a("div",{staticClass:"inbox-text"},[a("span",[t._v("WANT SOME INBOX LOVE?")])]),t._v(" "),a("b-form",{staticClass:"inbox-form",attrs:{inline:""}},[a("b-input-group",[a("b-input",{attrs:{id:"inline-form-input-message",placeholder:"Message..."},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),t._v(" "),a("b-button",{attrs:{id:"inline-form-input-btn",type:"submit"},on:{click:function(e){return t.sunmitComments()}}},[t._v("Submit")])],1)],1)],1)],1),t._v(" "),t.loader?t._e():a("div",{staticClass:"footer"},[a("b-card",[a("div",{staticClass:"footer-icon"},[a("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-simple-project-01.appspot.com/o/logo.png?alt=media&token=28f1d208-ac5c-45ea-a97e-d2e028e372ba"}})]),t._v(" "),a("div",{staticClass:"footer-text"},[a("span",[t._v("This is a smaller way to find and get a govt job")])]),t._v(" "),a("div",{attrs:{id:"footer-border-divider"}}),t._v(" "),a("div",{staticClass:"footer-navbar"},[a("i",{staticClass:"fab fa-facebook footer-link"}),t._v(" "),a("i",{staticClass:"fab fa-facebook-messenger footer-link"}),t._v(" "),a("i",{staticClass:"fab fa-google-plus footer-link"}),t._v(" "),a("i",{staticClass:"fab fa-youtube footer-link"}),t._v(" "),a("i",{staticClass:"fab fa-google-drive footer-link"})])])],1)],2)],1)},staticRenderFns:[]};var w=a("VU/8")(k,j,!1,function(t){a("7jHT")},"data-v-15bdb991",null).exports;i.default.use(v.a);var S=new v.a({routes:[{path:"/",name:"home",component:h},{path:"/career",name:"career",component:y},{path:"/job_details",name:"job_details",component:w}]});i.default.config.productionTip=!1,i.default.use(c.a),i.default.use(d.a),new i.default({el:"#app",router:S,components:{App:l},template:"<App/>"})},oWZu:function(t,e){},ul9O:function(t,e){},vp6l:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e617b0794b1f8e8b59b9.js.map