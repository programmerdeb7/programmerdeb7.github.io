webpackJsonp([1],{"/NIL":function(e,t){},"2YHQ":function(e,t){},"9M+g":function(e,t){},Djk4:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("7+uW"),r=a("kxiW"),i=Object(r.initializeApp)({apiKey:"AIzaSyC87Lfg7x_OIsTDsD7wJ24qShPp5TVsyyw",authDomain:"vue-simple-project-01.firebaseapp.com",databaseURL:"https://vue-simple-project-01.firebaseio.com",projectId:"vue-simple-project-01",storageBucket:"vue-simple-project-01.appspot.com",messagingSenderId:"604770702570"}).firestore(),n=(i.collection("comments"),i.collection("homePageStatus"),a("VogD"));o.default.use(n.default);var s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{id:"navbar",fixed:"top"}},[a("b-container",[a("b-navbar-brand",{attrs:{href:"#",id:"navbarBrand",to:"/"}},[e._v("\n        debbroto \n        "),a("vue-typed-js",{attrs:{strings:["<b>portfolio</b>"],loop:!0,showCursor:!1,id:"navTypeJs"}},[a("span",{staticClass:"typing"})])],1),e._v(" "),a("b-navbar-nav",{staticClass:"ml-auto",attrs:{id:"navbarRight"}},[a("b-nav-item",{attrs:{to:"career",id:"careerLink"}},[e.spiner.career?a("b-spinner",{attrs:{type:"grow",label:"Spinning"}}):e._e(),e._v("Career")],1),e._v(" "),a("b-nav-item",{attrs:{to:"skills",id:"skillsLink"}},[e.spiner.skills?a("b-spinner",{attrs:{type:"grow",label:"Spinning"}}):e._e(),e._v("Skills")],1),e._v(" "),a("b-nav-item",{attrs:{to:"experience",id:"expLink"}},[e.spiner.exp?a("b-spinner",{attrs:{type:"grow",label:"Spinning"}}):e._e(),e._v("Experience")],1),e._v(" "),a("b-nav-item",{attrs:{to:"portfolio",id:"portfolioLink"}},[e.spiner.portfolio?a("b-spinner",{attrs:{type:"grow",label:"Spinning"}}):e._e(),e._v("Portfolio")],1),e._v(" "),a("b-nav-item",{attrs:{to:"about",id:"aboutLink"}},[e.spiner.about?a("b-spinner",{attrs:{type:"grow",label:"Spinning"}}):e._e(),e._v("About")],1)],1)],1)],1),e._v(" "),a("router-view",{on:{career:e.careerHover,skills:e.skillsHover,exp:e.expHover}})],1)},staticRenderFns:[]};var l=a("VU/8")({name:"app",data:function(){return{spiner:{career:!1,skills:!1,exp:!1,portfolio:!1,about:!1}}},methods:{careerHover:function(e){1==e&&(this.spiner.career=!0),0==e&&(this.spiner.career=!1)},skillsHover:function(e){this.spiner.skills=1==e||0!=e},expHover:function(e){this.spiner.exp=1==e||0!=e}}},s,!1,function(e){a("p0s6")},null,null).exports,c=a("hnaQ"),p=a("Tqaz"),d=(a("Jmt5"),a("9M+g"),a("/ocq")),v=a("uSVs"),f=a.n(v),u=a("Puvr"),g=a.n(u),m={components:{"vue-flip":f.a,VueCircle:g.a},data:function(){return{jobRetriveData:[],loader:!0,dataLoadSignal:!1,fill:{gradient:["#e34c25"]},skillDate:[{name:"HTML",progress:80,fill:"#eb6d18",img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/html.png?alt=media&token=50fbf3d7-569b-4d25-bca6-5bc772f40460"},{name:"CSS",progress:80,fill:"#13c0e5",img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/css.png?alt=media&token=bce4e715-4089-4a48-abc7-162a17f2e8e5"},{name:"JS",progress:70,fill:"#f7af25",img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/js.png?alt=media&token=3a67f7ef-1cfc-4c70-86bd-88f680d13ad6"},{name:"Vue JS",progress:60,fill:{gradient:["#000","#41b883"]},img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/vue.png?alt=media&token=ed1bdd96-2282-4db2-b289-312fcea11e1f"},{name:"Nuxt JS",progress:40,fill:{gradient:["#41b883","#000000"]},img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/nuxt.png?alt=media&token=c58f3290-9474-45ae-b973-961dfdcf9e49"},{name:"JQuery",progress:50,fill:{gradient:["#82dea3"]},img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/jquery.png?alt=media&token=af06c3a4-9cba-486a-a226-703837b7ab4c"},{name:"Node JS",progress:20,fill:{gradient:["#99d815","#554f0e"]},img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/node.png?alt=media&token=2484700e-0032-4e40-8353-3033a02360b6"},{name:"PHP",progress:70,fill:{gradient:["#ffd379","#f73466"]},img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/php.png?alt=media&token=a5d6c832-8ebb-40e2-859f-896212a0f102"},{name:"Python",progress:40,fill:{gradient:["#376e9d","#fdd250"]},img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/python.png?alt=media&token=eae42f27-5a30-401c-826a-56d13675d509"},{name:"Bootstrap",progress:80,fill:"#6633b0",img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/bootstrap.png?alt=media&token=7d0a90e1-aca8-4412-a44b-1546f0fc04ce"},{name:"Vuetify",progress:60,fill:{gradient:["#6fbedb","#10a8e5"]},img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/vuetify.png?alt=media&token=7e433eaa-42a9-406a-ac85-b539c56adc91"},{name:"MySql",progress:70,fill:{gradient:["#0d067c"]},img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/mysql.png?alt=media&token=b0f9cfe3-ee60-4674-b408-757aeddaf566"},{name:"Mongo DB",progress:10,fill:{gradient:["#00ff00","#323b20"]},img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/mongo.png?alt=media&token=44d5bccc-3053-4045-95d9-a20f5e901627"},{name:"Firebase",progress:50,fill:{gradient:["#ffbd20","#6fbedb"]},img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/firebase.png?alt=media&token=8a9ca77a-5bfd-480b-9a7c-0b1aa0dca09d"},{name:"Android",progress:30,fill:{gradient:["#3aeabb"]},img:"https://firebasestorage.googleapis.com/v0/b/portfolio-62af9.appspot.com/o/android.png?alt=media&token=bcc21420-ef61-4501-8815-a18520217bb5"}],expData:[{name:"W3 Engineers Ltd.",designation:"Jr. Software Engineer",duration:"3 Sep 2018 - 25 August 2019",responsibilities:"As a web developer, My primary responsiblities is for implementing visual and interactive components in vue. I also responsible for server-side application logic and integration of the work front-end developers do.",resKey:["Design, Develop and Implement Vue Component.","Work with rest API."]},{name:"Funush Private Ltd.",designation:"Front End Developer",duration:"1 Sep 2018 - Current",responsibilities:"As a front-end web developer, My primary responsiblities is for implementing structure, data, design, content, and functionality. I also responsible for design web pages and build different vue components.",resKey:["Design web pages.","Design, Develop and Implement Vue Component.","Work with rest API."]}]}},firestore:function(){return{jobRetriveData:i.collection("jobs").orderBy("createdAt","asc")}},methods:{careerHover:function(e){1==e&&this.$emit("career",!0),0==e&&this.$emit("career",!1)},skillsHover:function(e){1==e&&this.$emit("skills",!0),0==e&&this.$emit("skills",!1)},expHover:function(e){1==e&&this.$emit("exp",!0),0==e&&this.$emit("exp",!1)}},computed:{formattedClubs:function(){return this.skillDate.reduce(function(e,t,a){return a%5==0&&e.push([]),e[e.length-1].push(t),e},[])}},watch:{jobRetriveData:function(){this.jobRetriveData.length>1&&(this.loader=!1,this.dataLoadSignal=!0)}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loader?a("div",{staticClass:"lds-ring"},[a("span",{attrs:{id:"loaderText"}},[e._v("Loading")]),a("div"),a("div"),a("div"),a("div")]):e._e(),e._v(" "),e.dataLoadSignal?a("b-container",{attrs:{id:"careerSection"},on:{mouseover:function(t){return e.careerHover(!0)},mouseout:function(t){return e.careerHover(!1)}}},[a("b-row",[a("b-col",{attrs:{cols:"12",md:"6"}},[a("div",{attrs:{id:"careerContent"}},[a("h1",[e._v("Career Objective")]),e._v(" "),a("div",{staticClass:"career-info"},[a("p",[e._v("\n                I am passionate programmer (ACMICPC contestant) and possess sound knowledge of Javascript, Vue JS, Nuxt JS, Vuetify, React JS, JQuary, Python, PHP,\n                DBMS(SQL Server, MySql), Version Control (git), HTML5, CSS3, Bootstrap, Stylus, Automation and web development methodology related fields.\n              ")]),e._v(" "),a("p",[e._v("I want to apply my knowledge and skills to help achieve the business goal of the company.")])]),e._v(" "),a("router-link",{staticClass:"career-btn",attrs:{to:"career"}},[a("a",{staticClass:"button"},[e._v("See more")])])],1)]),e._v(" "),a("b-col",{attrs:{cols:"12",md:"6"}},[a("div",{attrs:{id:"careerContent"}},[a("div",{staticClass:"code"},[a("pre",[a("code",{staticClass:"language-js"},[e._v('{\n  "name": "Debbroto Sarkar",\n  "occupation": "Web Developer",\n  "available_for_hire:" true\n}\n')])])])])])],1)],1):e._e(),e._v(" "),e.dataLoadSignal?a("div",{attrs:{id:"skillSection"},on:{mouseover:function(t){return e.skillsHover(!0)},mouseout:function(t){return e.skillsHover(!1)}}},[a("b-container",[a("h1",[e._v("Technical Skills")]),e._v(" "),a("p",[e._v("This comes from having a decent understanding of all the code as well as being able to read the Perl scripts.")]),e._v(" "),a("div",{staticClass:"skill-cards"},[e._l(e.formattedClubs,function(t){return a("b-row",{key:t,staticClass:"skill-row"},e._l(t,function(t){return a("b-col",{key:t,attrs:{cols:"12",sm:"12",md:"",lg:""}},[a("vue-flip",{staticClass:"card html-card",attrs:{"active-hover":"true"}},[a("div",{staticClass:"slot",attrs:{slot:"front"},slot:"front"},[a("img",{attrs:{src:t.img}}),e._v(" "),a("h2",[e._v(e._s(t.name))])]),e._v(" "),a("div",{staticClass:"slot",attrs:{slot:"back"},slot:"back"},[a("vue-circle",{staticClass:"vue-circle",attrs:{progress:t.progress,size:100,reverse:!1,"line-cap":"round",fill:t.fill,"empty-fill":"rgba(255, 255, 255, 1)","animation-start-value":0,"start-angle":60,"insert-mode":"append",thickness:5,"show-percent":!0},on:{"vue-circle-progress":e.progress,"vue-circle-end":e.progress_end}})],1)])],1)}),1)}),e._v(" "),a("router-link",{staticClass:"skill-btn",attrs:{to:"skills"}},[a("a",{staticClass:"button"},[e._v("See more skills")])])],2)])],1):e._e(),e._v(" "),e.dataLoadSignal?a("b-container",{attrs:{id:"expSection"},on:{mouseover:function(t){return e.expHover(!0)},mouseout:function(t){return e.expHover(!1)}}},[a("h1",[e._v("Experience")]),e._v(" "),a("p",[e._v("However, very recently I have come to an understanding that complex coding is not very pleasant. Think something easy.")]),e._v(" "),a("div",{staticClass:"exp-body"},[e._l(e.expData,function(t){return a("b-row",{key:t,staticClass:"exp"},[a("b-col",{attrs:{cols:"12",md:"3"}},[a("div",{staticClass:"exp-title"},[a("h2",[e._v(e._s(t.name))]),e._v(" "),a("div",{staticClass:"subtitle"},[e._v(e._s(t.duration))])])]),e._v(" "),a("b-col",{attrs:{cols:"12",md:"9"}},[a("div",{staticClass:"exp-description"},[a("h2",[e._v(e._s(t.designation))]),e._v(" "),a("div",{staticClass:"exp-details"},[e._v(e._s(t.responsibilities))]),e._v(" "),a("ol",e._l(t.resKey,function(t){return a("li",{key:t},[e._v(" "+e._s(t))])}),0)])])],1)}),e._v(" "),a("router-link",{staticClass:"exp-btn",attrs:{to:"experience"}},[a("a",{staticClass:"button"},[e._v("See more experience")])])],2)]):e._e(),e._v(" "),e.dataLoadSignal?a("div",[a("h1",{staticStyle:{"background-color":"red",padding:"10px","text-align":"center",color:"#fff"}},[e._v("Development Status : In Progress")])]):e._e(),e._v(" "),a("br"),a("br"),a("br"),a("br")],1)},staticRenderFns:[]};var h=a("VU/8")(m,b,!1,function(e){a("qMtr")},"data-v-b680146c",null).exports,_={data:function(){return{jobRetriveData:[],loader:!0,dataLoadSignal:!1}},firestore:function(){return{jobRetriveData:i.collection("jobs").orderBy("createdAt","asc")}},methods:{careerHover:function(e){1==e&&this.$emit("career",!0),0==e&&this.$emit("career",!1)}},watch:{jobRetriveData:function(){this.jobRetriveData.length>1&&(this.loader=!1,this.dataLoadSignal=!0)}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loader?a("div",{staticClass:"lds-ring"},[a("span",{attrs:{id:"loaderText"}},[e._v("Loading")]),a("div"),a("div"),a("div"),a("div")]):e._e(),e._v(" "),e.dataLoadSignal?a("b-container",{attrs:{id:"careerSection"},on:{mouseover:function(t){return e.careerHover(!0)},mouseout:function(t){return e.careerHover(!1)}}},[a("b-row",[a("b-col",{attrs:{cols:"12",md:"6"}},[a("div",{attrs:{id:"careerContent"}},[a("h1",[e._v("Career Objective")]),e._v(" "),a("div",{staticClass:"career-info"},[a("p",[e._v("\n                I am passionate programmer (ACMICPC contestant) and possess sound knowledge of Javascript, Vue JS, Nuxt JS, Vuetify, React JS, JQuary, Python, PHP,\n                DBMS(SQL Server, MySql), Version Control (git), HTML5, CSS3, Bootstrap, Stylus, Automation and web development methodology related fields.\n              ")]),e._v(" "),a("p",[e._v("I want to apply my knowledge and skills to help achieve the business goal of the company.")])])])]),e._v(" "),a("b-col",{attrs:{cols:"12",md:"6"}},[a("div",{attrs:{id:"careerContent"}},[a("div",{staticClass:"code"},[a("pre",[a("code",{staticClass:"language-js"},[e._v('{\n  "name": "Debbroto Sarkar",\n  "occupation": "Web Developer",\n  "available_for_hire:" true\n}\n')])])])])])],1)],1):e._e(),e._v(" "),e.dataLoadSignal?a("div",[a("h1",{staticStyle:{"background-color":"red",padding:"10px","text-align":"center",color:"#fff"}},[e._v("Development Status : In Progress")])]):e._e(),e._v(" "),a("br"),a("br"),a("br"),a("br")],1)},staticRenderFns:[]};var S=a("VU/8")(_,k,!1,function(e){a("2YHQ")},"data-v-327cff4c",null).exports,y={data:function(){return{jobRetriveData:[],loader:!0,dataLoadSignal:!0}},firestore:function(){return{jobRetriveData:i.collection("jobs").orderBy("createdAt","asc")}},methods:{skillsHover:function(e){1==e&&this.$emit("skills",!0),0==e&&this.$emit("skills",!1)}},watch:{jobRetriveData:function(){this.jobRetriveData.length>1&&(this.loader=!1,this.dataLoadSignal=!0)}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loader?a("div",{staticClass:"lds-ring"},[a("span",{attrs:{id:"loaderText"}},[e._v("Loading")]),a("div"),a("div"),a("div"),a("div")]):e._e(),e._v(" "),e.dataLoadSignal?a("div",{staticStyle:{"margin-top":"82px","text-align":"center"},on:{mouseover:function(t){return e.skillsHover(!0)},mouseout:function(t){return e.skillsHover(!1)}}},[e._v("\n    No Data Found!\n    "),a("h1",{staticStyle:{"background-color":"red",padding:"10px","text-align":"center",color:"#fff"}},[e._v("Development Status : In Progress")])]):e._e(),e._v(" "),a("br"),a("br"),a("br"),a("br")])},staticRenderFns:[]};var C=a("VU/8")(y,x,!1,function(e){a("c8hz")},"data-v-406da7fc",null).exports,D={data:function(){return{jobRetriveData:[],loader:!0,dataLoadSignal:!1}},firestore:function(){return{jobRetriveData:i.collection("jobs").orderBy("createdAt","asc")}},methods:{expHover:function(e){1==e&&this.$emit("exp",!0),0==e&&this.$emit("exp",!1)}},watch:{jobRetriveData:function(){this.jobRetriveData.length>1&&(this.loader=!1,this.dataLoadSignal=!0)}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.loader?a("div",{staticClass:"lds-ring"},[a("span",{attrs:{id:"loaderText"}},[e._v("Loading")]),a("div"),a("div"),a("div"),a("div")]):e._e(),e._v(" "),e.dataLoadSignal?a("div",{staticStyle:{"margin-top":"82px","text-align":"center"},on:{mouseover:function(t){return e.expHover(!0)},mouseout:function(t){return e.expHover(!1)}}},[e._v("\n    No Data Found!\n    "),a("h1",{staticStyle:{"background-color":"red",padding:"10px","text-align":"center",color:"#fff"}},[e._v("Development Status : In Progress")])]):e._e(),e._v(" "),a("br"),a("br"),a("br"),a("br")])},staticRenderFns:[]};var j=a("VU/8")(D,w,!1,function(e){a("Djk4")},"data-v-75e33562",null).exports;o.default.use(d.a);var H=new d.a({routes:[{path:"/",name:"home",component:h},{path:"/career",name:"career",component:S},{path:"/skills",name:"skills",component:C},{path:"/experience",name:"experience",component:j}]});o.default.config.productionTip=!1,o.default.use(c.a),o.default.use(p.a),new o.default({el:"#app",router:H,components:{App:l},template:"<App/>"})},c8hz:function(e,t){},p0s6:function(e,t){},qMtr:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.24bb88fec2bc2a3a8791.js.map