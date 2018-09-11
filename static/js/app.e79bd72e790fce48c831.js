webpackJsonp([1],[,,function(t,a,e){"use strict";var n=e(43),i=e.n(n),s=e(33),r=e(15),o=e.n(r),c=s.a.getApiURL();a.a={login:function(t,a){o.a.post(c+"auth/login/",a).then(function(a){200===a.status&&(localStorage.setItem("auth",i()(a.data)),t.$router.push("/"))}).catch(function(a){console.log(a.response.data),t.openSnack("Login ou Senha Incorretos")})},logout:function(){localStorage.removeItem("auth"),location.href="#/login"}}},function(t,a,e){function n(t){e(47)}var i=e(1)(e(40),e(63),n,"data-v-0f60fbd4",null);t.exports=i.exports},,,,,,,,function(t,a,e){"use strict";var n=e(4),i=e(70),s=e(56),r=e.n(s),o=e(57),c=e.n(o),l=e(59),u=e.n(l),d=e(58),p=e.n(d),v=e(60),m=e.n(v),f=e(61),_=e.n(f);n.default.use(i.a),a.a=new i.a({routes:[{path:"/",name:"dashboard",component:u.a,meta:{requiresAuth:!0}},{path:"/charts",name:"charts",component:p.a,meta:{requiresAuth:!0}},{path:"/patient",name:"patient",component:m.a,meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:_.a,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:r.a},{path:"/singup",name:"singup",component:c.a}]})},function(t,a){},function(t,a,e){function n(t){e(53)}var i=e(1)(e(35),e(69),n,null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,,function(t,a,e){"use strict";a.a={getApiURL:function(){return"https://monitorv1-api.herokuapp.com/"}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(4),i=e(13),s=e.n(i),r=e(11),o=e(14),c=e.n(o),l=e(12),u=(e.n(l),e(2));n.default.config.productionTip=!1,n.default.use(c.a),n.default.material.registerTheme("default",{primary:{color:"blue",hue:"200"}}),r.a.beforeEach(function(t,a,e){t.meta.requiresAuth&&(null==localStorage.getItem("auth")||"undefined"===localStorage.getItem("auth")?(e(),u.a.logout()):e()),e()}),new n.default({el:"#app",router:r.a,render:function(t){return t(s.a)}})},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"app"}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(2);a.default={name:"login",data:function(){return{login:"",password:"",snackBar:{vertical:"top",horizontal:"center",duration:1e4}}},methods:{loginHandler:function(){var t={email:this.login,password:this.password};n.a.login(this,t)},openSnack:function(t){this.$refs.snackbar.open(t)}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(2);a.default={name:"singup",data:function(){return{name:"",email:"",password:"",snackBar:{vertical:"top",horizontal:"center",duration:1e4}}},methods:{sinupHandler:function(){var t={email:this.email,password:this.password};n.a.login(this,t)},openSnack:function(t){this.$refs.snackbar.open(t)}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(3),i=e.n(n);a.default={name:"charts",components:{Navigation:i.a}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(3),i=e.n(n);a.default={name:"dashboard",components:{Navigation:i.a}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(2);a.default={name:"navigation",data:function(){return{user:[],token:[]}},methods:{toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()},logout:function(){n.a.logout()}},created:function(){this.user=JSON.parse(localStorage.getItem("auth")).user,this.token=JSON.parse(localStorage.getItem("auth")).token}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(3),i=e.n(n);a.default={name:"newPatient",components:{Navigation:i.a}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(3),i=e.n(n);a.default={name:"profile",components:{Navigation:i.a}}},,,,function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},,,function(t,a,e){function n(t){e(52)}var i=e(1)(e(36),e(68),n,"data-v-f21751ee",null);t.exports=i.exports},function(t,a,e){function n(t){e(46)}var i=e(1)(e(37),e(62),n,"data-v-08cd127a",null);t.exports=i.exports},function(t,a,e){function n(t){e(49)}var i=e(1)(e(38),e(65),n,"data-v-0ffbd8d7",null);t.exports=i.exports},function(t,a,e){function n(t){e(50)}var i=e(1)(e(39),e(66),n,"data-v-2843ae82",null);t.exports=i.exports},function(t,a,e){function n(t){e(51)}var i=e(1)(e(41),e(67),n,"data-v-2b6d3cc7",null);t.exports=i.exports},function(t,a,e){function n(t){e(48)}var i=e(1)(e(42),e(64),n,"data-v-0f8aced2",null);t.exports=i.exports},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("md-snackbar",{ref:"snackbar",attrs:{"md-position":t.snackBar.vertical+" "+t.snackBar.horizontal,"md-duration":t.snackBar.duration}},[e("span",[t._v("Login ou senha incorretos")]),t._v(" "),e("md-button",{staticClass:"md-accent",attrs:{"md-theme":"light-blue"},nativeOn:{click:function(a){t.$refs.snackbar.close()}}},[t._v("OK")])],1),t._v(" "),e("div",{staticClass:"login-wrapper"},[e("div",{staticClass:"login-box"},[e("h1",[t._v("Criar Conta")]),t._v(" "),e("div",{staticClass:"login-form"},[e("md-input-container",[e("label",[t._v("Nome")]),t._v(" "),e("md-input",{attrs:{type:"name"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),t._v(" "),e("md-input-container",[e("label",[t._v("Email")]),t._v(" "),e("md-input",{attrs:{type:"email"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),t._v(" "),e("md-input-container",{attrs:{"md-has-password":""}},[e("label",[t._v("Senha")]),t._v(" "),e("md-input",{attrs:{type:"password"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1)],1),t._v(" "),e("div",{staticClass:"login-controls"},[e("md-button",{staticClass:"md-raised md-primary",on:{click:t.sinupHandler}},[t._v("Cadastrar")]),t._v(" "),e("a",{staticClass:"link-primary",attrs:{href:"#"}},[t._v("Ja possui uma conta?")]),t._v(" "),e("a",{staticClass:"link-primary",attrs:{href:"#"}},[t._v("Esqueceu sua senha? ")])],1)])])],1)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"phone-viewport"},[e("md-toolbar",[e("md-button",{staticClass:"md-icon-button",on:{click:t.toggleLeftSidenav}},[e("md-icon",[t._v("menu")])],1),t._v(" "),e("h2",{staticClass:"md-title"},[t._v("Monitor Dashboard")])],1),t._v(" "),e("md-sidenav",{ref:"leftSidenav",staticClass:"md-left"},[e("md-toolbar",{staticClass:"md-medium"},[e("div",{staticClass:"md-toolbar-container"},[e("h3",{staticClass:"md-title"},[t._v("Ola, "+t._s(this.user.first_name))])])]),t._v(" "),e("div",{staticClass:"phone-viewport"},[e("md-list",[e("md-list-item",[e("md-icon",[t._v("home")]),t._v(" "),e("a",{staticClass:"link-primary",attrs:{href:"#/"}},[t._v("Home")])],1),t._v(" "),e("md-list-item",[e("md-icon",[t._v("timeline")]),t._v(" "),e("a",{staticClass:"link-primary",attrs:{href:"#/charts"}},[t._v("Gráficos de Batimentos")])],1),t._v(" "),e("md-list-item",[e("md-icon",[t._v("add_box")]),t._v(" "),e("a",{staticClass:"link-primary",attrs:{href:"#/patient"}},[t._v("Cadastro de Pacientes")])],1),t._v(" "),e("md-list-item",[e("md-icon",[t._v("person")]),t._v(" "),e("a",{staticClass:"link-primary",attrs:{href:"#/profile"}},[t._v("Perfil")])],1),t._v(" "),e("md-divider",{staticClass:"md-inset"}),t._v(" "),e("md-list-item",[e("md-icon",[t._v("exit_to_app")]),t._v(" "),e("a",{staticClass:"link-primary",attrs:{href:"#/login"},on:{click:t.logout}},[t._v("Sair")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("Navigation"),t._v(" "),e("h1",[t._v("Perfil")])],1)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("Navigation"),t._v(" "),e("h1",[t._v("Graficos")])],1)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-wrapper"},[e("Navigation")],1)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[e("Navigation"),t._v(" "),e("h1",[t._v("Cadastro Paciente")])],1)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("md-snackbar",{ref:"snackbar",attrs:{"md-position":t.snackBar.vertical+" "+t.snackBar.horizontal,"md-duration":t.snackBar.duration}},[e("span",[t._v("Login ou senha incorretos")]),t._v(" "),e("md-button",{staticClass:"md-accent",attrs:{"md-theme":"light-blue"},nativeOn:{click:function(a){t.$refs.snackbar.close()}}},[t._v("OK")])],1),t._v(" "),e("div",{staticClass:"login-wrapper"},[e("div",{staticClass:"login-box"},[e("h1",[t._v(" Monitor App")]),t._v(" "),e("div",{staticClass:"login-form"},[e("md-input-container",[e("label",[t._v("Login")]),t._v(" "),e("md-input",{attrs:{type:"text"},model:{value:t.login,callback:function(a){t.login=a},expression:"login"}})],1),t._v(" "),e("md-input-container",{attrs:{"md-has-password":""}},[e("label",[t._v("Senha")]),t._v(" "),e("md-input",{attrs:{type:"password"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1)],1),t._v(" "),e("div",{staticClass:"login-controls"},[e("md-button",{staticClass:"md-raised md-primary",on:{click:t.loginHandler}},[t._v("Entrar")]),t._v(" "),e("a",{staticClass:"link-primary",attrs:{href:"#/singup/"}},[t._v("Cadastre-se")]),t._v(" "),e("a",{staticClass:"link-primary",attrs:{href:"#"}},[t._v("Problemas ao logar?")])],1)])])],1)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}}],[34]);
//# sourceMappingURL=app.e79bd72e790fce48c831.js.map