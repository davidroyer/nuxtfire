webpackJsonp([2],{219:function(t,e,n){n(237);var o=n(23)(n(233),n(245),"data-v-b7a4cafa",null);t.exports=o.exports},220:function(t,e,n){"use strict";var o=n(59),r=n.n(o);e.a=r.a.create({baseURL:"https://nuxtfire.firebaseio.com/"})},221:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),r=n.n(o),a=n(97),s=(n.n(a),n(96)),c=(n.n(s),n(220));n.d(e,"store",function(){return l});var i=void 0,u=void 0;if(t.browser){var f={apiKey:"AIzaSyCz8gCkmdI8jV-jB9_2sgH2rP1s7CyuiAY",authDomain:"nuxtfire.firebaseapp.com",databaseURL:"https://nuxtfire.firebaseio.com",projectId:"nuxtfire",storageBucket:"nuxtfire.appspot.com",messagingSenderId:"355187584526"};r.a.initializeApp(f),i=r.a.database().ref(),u=r.a.auth(),console.log(u)}var l={state:{currentKey:"",mainMenuIsOpen:!1,api:i,auth:u,posts:{}},setCurrentKey:function(t){this.state.currentKey=t},GetPosts:function(){var t=this;c.a.get("posts.json").then(function(e){console.log(e.data),t.state.posts=e.data}).catch(function(t){console.log(t)})}}}).call(e,n(58))},233:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o=n(59),r=n.n(o),a=n(221),s=a.store;if(t.browser){var c=localStorage.currentKey;console.log(c),console.log("Current Key:  ",s.state.currentKey)}e.default={data:function(){return{currentKey:s.state.currentKey,post:{}}},watch:{$route:"getPost"},computed:{updatedKey:function(){if(t.browser)return localStorage.currentKey}},methods:{getPost:function(){var e=this;if(t.browser){var n=localStorage.currentKey;r.a.get("https://nuxtfire.firebaseio.com/posts/"+n+".json").then(function(t){e.post=t.data}).catch(function(t){console.log(t)})}}},created:function(){this.getPost()}}}).call(e,n(58))},237:function(t,e){},245:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("h1",{staticClass:"display-1"},[t._v("INDEX.VUE")])])}]}}});