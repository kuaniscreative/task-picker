(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,a){e.exports=a.p+"static/media/add.c0662be8.svg"},200:function(e,t,a){e.exports=a.p+"static/media/edit.59724c85.svg"},201:function(e,t,a){e.exports=a.p+"static/media/flag.6fa57ba3.svg"},202:function(e,t,a){e.exports=a.p+"static/media/dropUp.66543978.svg"},204:function(e,t,a){e.exports=a(404)},209:function(e,t,a){},404:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(126),i=a.n(s),c=(a(209),a(4)),o=a(7),l=a(8),u=a(10),d=a(9),h=a(11),p=a(18),f=a(25),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={tag:a.props.tag,active:a.props.active},a.handleClick=function(e){a.setState({active:!a.state.active},function(){a.props.checkTagState(a.state.active,a.props.tag)})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){this.props.active&&!1===this.state.active&&this.setState({active:this.props.active})}},{key:"render",value:function(){return r.a.createElement("div",{className:this.state.active?"tagObj tagActive":"tagObj",onClick:this.handleClick},this.props.tag)}}]),t}(n.Component),m=a(5),k=a(22),E=a(17),v=a(42),T=a.n(v),b=a(199),O=a.n(b),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={noNewTag:a.props.noNewTag,tag:{tag:"",ownerId:a.props.auth.uid}},a.handleChange=function(e){a.setState({tag:Object(c.a)({},a.state.tag,{tag:e.target.value})})},a.handleSubmit=function(e){a.props.addTag(a.state.tag,a.props.auth.uid),a.setState({tag:Object(c.a)({},a.state.tag,{tag:""})})},a.matchWithEditingTaskTag=function(e,t){var a=!1,n=!0,r=!1,s=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){e===i.value&&(a=!0)}}catch(o){r=!0,s=o}finally{try{n||null==c.return||c.return()}finally{if(r)throw s}}return a},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.noNewTag?null:r.a.createElement("div",{className:"tagInput tagObj"},r.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.tag.tag,placeholder:"\u65b0\u6a19\u7c64"}),r.a.createElement("span",{onClick:this.handleSubmit},r.a.createElement("img",{src:O.a,alt:""}))),a=this.props.tags&&this.props.tags.length?this.props.tags.map(function(t,a){var n=e.props.editingTaskTags&&e.matchWithEditingTaskTag(t.tag,e.props.editingTaskTags);return r.a.createElement(g,{tag:t.tag,checkTagState:e.props.checkTagState,key:a,active:n})}):r.a.createElement("p",null,"No tags");return r.a.createElement("div",{className:"tagList"},r.a.createElement(T.a,{heightRelativeToParent:"100%"},t,a))}}]),t}(n.Component),y=Object(E.d)(Object(m.b)(function(e){return{tags:e.localStore.allTags,defaultTags:e.firestore.ordered.defaultTags,auth:e.firebase.auth,firestore:e.firestore}},function(e){return{addTag:function(t,a){e(function(e,t){return function(a,n,r){r.getfirebase;var s=(0,r.getFirestore)();void 0!==t?s.collection("userTags").add(Object(c.a)({},e)).then(function(){a({type:"ADD_TAG",tag:e})}).catch(function(e){a({type:"ADD_TAG_ERROR",err:e})}):(console.log("middle ware received"),a({type:"ADD_TAG",tag:e}))}}(t,a))}}}),Object(k.firestoreConnect)([{collection:"defaultTags"},{collection:"userTags"}]))(S),j=a(200),A=a.n(j),_=a(201),C=a.n(_),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={task:{task:a.props.task.task,description:a.props.task.description,tags:a.props.task.tags,id:a.props.task.id},editing:!1,showTagList:!1},a.toggleEditMode=function(){a.setState({editing:!a.state.editing})},a.toggleTagList=function(){a.setState({showTagList:!a.state.showTagList})},a.handleChange=function(e){a.setState({task:Object(c.a)({},a.state.task,Object(f.a)({},e.target.name,e.target.value))})},a.handleTags=function(e){var t=e.target.value.split(" ");a.setState({task:Object(c.a)({},a.state.task,{tags:t})})},a.handleSubmit=function(e){e.preventDefault(),a.props.editTask(a.state.task,a.props.userId),a.setState({editing:!a.state.editing})},a.checkTagState=function(e,t){var n=Object(p.a)(a.state.task.tags);if(e){var r=!0,s=!0,i=!1,o=void 0;try{for(var l,u=n[Symbol.iterator]();!(s=(l=u.next()).done);s=!0){var d=l.value;t===d&&(r=!1)}}catch(h){i=!0,o=h}finally{try{s||null==u.return||u.return()}finally{if(i)throw o}}r&&n.push(t),a.setState({task:Object(c.a)({},a.state.task,{tags:n})})}else n=n.filter(function(e){return e!==t}),a.setState({task:Object(c.a)({},a.state.task,{tags:n})})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.task.tags&&this.props.task.tags.map(function(e,t){return r.a.createElement("div",{key:t,className:"tagObj"},e)}),a=this.state.editing?r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"task",onChange:this.handleChange,defaultValue:this.state.task.task,autoComplete:"off"}),r.a.createElement("textarea",{type:"text",name:"description",onChange:this.handleChange,defaultValue:this.state.task.description,autoComplete:"off"}),r.a.createElement(y,{checkTagState:this.checkTagState,noNewTag:!1,editingTaskTags:this.state.task.tags}),r.a.createElement("div",{className:"formButtonArea"},r.a.createElement("button",null,"\u5132\u5b58"),r.a.createElement("button",{onClick:function(){e.props.deleteTask(e.props.task.id)},name:"delete"},"\u522a\u9664"))):r.a.createElement("div",{className:"taskObjWrapper"},r.a.createElement("div",{className:"taskObjUpper"},r.a.createElement("div",{className:"title"},this.props.task.task)),r.a.createElement("div",{className:"taskObjLower"},r.a.createElement("div",{className:"description"},this.props.task.description)),r.a.createElement("div",{className:this.state.showTagList?"taskObjTagList":"taskObjTagList tagListHidden"},r.a.createElement(T.a,{heightRelativeToParent:"100%"},r.a.createElement("div",{className:"tags"},t))),this.props.disableEdit?null:r.a.createElement("button",{className:"editBtn",onClick:this.toggleEditMode},r.a.createElement("img",{src:A.a,alt:""})),this.props.task.tags?r.a.createElement("button",{className:"toggleTagsBtn",onClick:this.toggleTagList},r.a.createElement("img",{src:C.a,alt:""})):null);return r.a.createElement("div",{className:this.state.editing?"taskEditForm":"taskObj",key:this.props.task.id},a)}}]),t}(n.Component),R=Object(m.b)(function(e){return{userId:e.firebase.auth.uid}},function(e){return{deleteTask:function(t){e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("userTasks").doc(e).delete().then(function(){t({type:"DELETE_TASK",taskId:e})}).catch(function(e){t({type:"DELETE_TASK_ERROR",err:e})})}}(t))},editTask:function(t,a){e(function(e,t){return function(a,n,r){r.getFirebase;var s=(0,r.getFirestore)();t?s.collection("userTasks").doc(e.id).update({task:e.task,description:e.description,tags:e.tags,id:e.id,ownerId:t}).then(function(){a({type:"UPDATE_TASK",task:e})}).catch(function(e){a({type:"UPDATE_TASK_ERROR",err:e})}):a({type:"UPDATE_DEFAULT_TASK",task:e})}}(t,a))}}})(N),L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={picked:!1},a.defaultTaskBeforePick={task:"\u6311\u9078\u4efb\u52d9",description:"\u7121\u8ad6\u4f60\u9078\u64c7\u505a\u4ec0\u9ebc\uff0c\u53ea\u8981\u6301\u7e8c\u5730\u505a\uff0c\u5c31\u6703\u8b8a\u5f97\u66f4\u597d\u3002"},a.defaultTaskAfterPick={task:"\u6df1\u547c\u5438\uff0c\u7136\u5f8c\u64c1\u62b1\u5929\u7a7a",description:"\u5b8c\u6210\u4e86\u4e00\u4ef6\u4efb\u52d9\uff0c\u5f88\u597d\u3002\u611f\u53d7\u4e00\u4e0b\u73fe\u5728\u7684\u5fc3\u60c5\u5427\uff01"},a.handleFinishing=function(){a.props.clearCurrentTask(),a.setState({picked:!0},function(){console.log(a.state)})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.currentTask?r.a.createElement(R,{task:this.props.currentTask,disableEdit:!0}):this.state.picked?r.a.createElement(R,{task:this.defaultTaskAfterPick,disableEdit:!0}):r.a.createElement(R,{task:this.defaultTaskBeforePick,disableEdit:!0});return r.a.createElement("div",{id:"currentTask"},r.a.createElement("div",{className:"currentTaskWrapper"},e,this.props.currentTask?r.a.createElement("button",{id:"finBtn",onClick:this.handleFinishing},"\u5b8c\u6210"):null))}}]),t}(n.Component),D=Object(m.b)(function(e){return{currentTask:e.localStore.currentTask,auth:e.firebase.auth}},function(e){return{clearCurrentTask:function(){e({type:"CLEAR_CURRENT_TASK"})}}})(L),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleSelect=function(e,t){var a=document.getElementsByClassName("area-line"),n=document.getElementById("title-scroll"),r=document.getElementById("template"),s=!0,i=!1,c=void 0;try{for(var o,l=a[Symbol.iterator]();!(s=(o=l.next()).done);s=!0){o.value.classList.remove("area-line-active")}}catch(u){i=!0,c=u}finally{try{s||null==l.return||l.return()}finally{if(i)throw c}}e.target.classList.toggle("area-line-active"),n.style.transform="translate(0, -"+100*t+"%)",r.style.transform="translate(-"+100*t+"%, 0)"},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"nav"},r.a.createElement("div",{id:"area-titles"},r.a.createElement("div",{id:"title-scroll"},r.a.createElement("div",{className:"title"},r.a.createElement("span",null,"\u6311\u4efb\u52d9")),r.a.createElement("div",{className:"title"},r.a.createElement("span",null,"\u7576\u4e0b\u4efb\u52d9")),r.a.createElement("div",{className:"title"},r.a.createElement("span",null,"\u65b0\u589e\u4efb\u52d9")),r.a.createElement("div",{className:"title"},r.a.createElement("span",null,"\u4efb\u52d9\u6e05\u55ae")))),r.a.createElement("div",{id:"area-paging"},r.a.createElement("div",{className:"pagingWrapper"},r.a.createElement("div",{className:"area-line area-line-active",onClick:function(t){e.handleSelect(t,0)}}),r.a.createElement("div",{className:"area-line",onClick:function(t){e.handleSelect(t,1)}}),r.a.createElement("div",{className:"area-line",onClick:function(t){e.handleSelect(t,2)}}),r.a.createElement("div",{className:"area-line",onClick:function(t){e.handleSelect(t,3)}}))))}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={task:"",description:"",tags:[],ownerId:a.props.auth.uid},a.checkTagState=function(e,t){var n=Object(p.a)(a.state.tags);if(e)n.push(t),a.setState({tags:n});else{var r=n.filter(function(e){return e!==t});a.setState({tags:r})}},a.handleChange=function(e){a.setState(Object(f.a)({},e.target.id,e.target.value))},a.handleTags=function(e){var t=e.target.value.split(" ");a.setState({tags:t})},a.handleSubmit=function(e){e.preventDefault(),a.props.addTask(a.state,a.props.auth.uid),a.setState({task:"",description:"",tags:[]})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{id:"taskForm",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",id:"task",onChange:this.handleChange,value:this.state.task,autoComplete:"off",placeholder:"\u4efb\u52d9"}),r.a.createElement("textarea",{type:"text",id:"description",onChange:this.handleChange,value:this.state.description,autoComplete:"off",placeholder:"\u8aaa\u660e"}),r.a.createElement(y,{checkTagState:this.checkTagState,noNewTag:!1}),r.a.createElement("div",{className:"formButtonArea"},r.a.createElement("button",{form:"taskForm"},"\u65b0\u589e"))))}}]),t}(n.Component),U=Object(m.b)(function(e){return{allTags:e.localStore.allTags,auth:e.firebase.auth}},function(e){return{addTask:function(t,a){e(function(e,t){return function(a,n,r){r.getFirebase;var s=(0,r.getFirestore)();if(void 0!==t)s.collection("userTasks").add(Object(c.a)({},e)).then(function(t){a({type:"ADD_TASK",task:e,taskId:t.id})}).catch(function(e){a({type:"ADD_TASK_ERROR",err:e})});else{var i=n().localStore.tasks.length;a({type:"ADD_TASK",task:e,taskId:i})}}}(t,a))}}})(I),F=Object(E.d)(Object(m.b)(function(e){return{tasks:e.localStore.tasks,firestore:e.firestore,auth:e.firebase.auth}}),Object(k.firestoreConnect)([{collection:"defaultTasks"},{collection:"userTasks"}]))(function(e){var t=e.tasks,a=(e.auth,t&&t.length?t.map(function(e){return r.a.createElement(R,{key:e.id,task:e})}):r.a.createElement("p",null,"No Tasks!"));return r.a.createElement("div",{id:"taskList"},r.a.createElement("div",{className:"taskWrapper"},r.a.createElement(T.a,{heightRelativeToParent:"100%"},a)))}),G=a(202),P=a.n(G),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectedTags:[],pickedTask:null,animationPerformed:!1},a.returnToDefaultStyle=function(){document.querySelector("li:nth-child(2)").classList.add("transparent"),a.setState({pickedTask:null,animationPerformed:!1})},a.checkTagState=function(e,t){var n=Object(p.a)(a.state.selectedTags);e?(n.push(t),a.setState({selectedTags:n})):(n=n.filter(function(e){return e!==t}),a.setState({selectedTags:n}))},a.toggleTagSelectionPannel=function(){var e=document.getElementById("buttonWrapper");"none"===e.style.display?e.style.display="block":e.style.display="none";var t=document.querySelector("#picker .tagList");"1"===t.style.opacity?t.style.opacity="0":t.style.opacity="1";var a=document.querySelectorAll("#picker .tagObj");"pointer"===a[0].style.cursor?a.forEach(function(e){e.style.cursor="default"}):a.forEach(function(e){e.style.cursor="pointer"}),document.querySelector("#tagSelectionBtn img").classList.toggle("flip")},a.pickTask=function(){var e=Object(p.a)(a.props.tasks),t=[],n=!0,r=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var o=i.value,l=!1,u=!0,d=!1,h=void 0;try{for(var f,g=o.tags[Symbol.iterator]();!(u=(f=g.next()).done);u=!0){var m=f.value,k=!0,E=!1,v=void 0;try{for(var T,b=a.state.selectedTags[Symbol.iterator]();!(k=(T=b.next()).done);k=!0){m===T.value&&(l=!0)}}catch(y){E=!0,v=y}finally{try{k||null==b.return||b.return()}finally{if(E)throw v}}}}catch(y){d=!0,h=y}finally{try{u||null==g.return||g.return()}finally{if(d)throw h}}l&&t.push(o)}}catch(y){r=!0,s=y}finally{try{n||null==c.return||c.return()}finally{if(r)throw s}}var O=document.getElementsByClassName("deckWrapper")[0];O&&!a.state.animationPerformed&&O.classList.toggle("isAnimating");if(0!==a.state.selectedTags.length&&0===t.length)console.log("nomatch"),a.setState({pickedTask:{task:"\u5662\u4e0d",description:"\u6c92\u6709\u914d\u5c0d\u5230\u7684\u4efb\u52d9\u5462 :(",id:"noMatchInPicker"}});else if(0===t.length){var S=Object(p.a)(a.props.tasks);a.setState({pickedTask:S[Math.floor(Math.random()*S.length)]})}else a.setState({pickedTask:t[Math.floor(Math.random()*t.length)]})},a.execute=function(){console.log(a.state.pickedTask),a.props.setCurrentTask(a.state.pickedTask);var e=document.getElementsByClassName("area-line"),t=document.getElementById("title-scroll"),n=document.getElementById("template"),r=!0,s=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done);r=!0){c.value.classList.remove("area-line-active")}}catch(l){s=!0,i=l}finally{try{r||null==o.return||o.return()}finally{if(s)throw i}}e[1].classList.toggle("area-line-active"),t.style.transform="translate(0, -100%)",n.style.transform="translate(-100%, 0)",a.returnToDefaultStyle()},a.animationEnd=function(e){var t=document.getElementsByClassName("deckWrapper")[0],n=document.getElementsByClassName("transparent")[0];n&&n.classList.toggle("transparent"),t&&t.classList.toggle("isAnimating"),a.setState({animationPerformed:!0})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.loggedIn!==this.props.loggedIn&&this.returnToDefaultStyle()}},{key:"render",value:function(){return r.a.createElement("div",{id:"picker"},r.a.createElement("ul",{className:"deck"},r.a.createElement("li",null,r.a.createElement("div",{className:"deckWrapper"},r.a.createElement("div",{className:"pickerCard"}),r.a.createElement("div",{className:this.state.pickedTask&&this.state.pickedTask?"pickerCard animatedCard":"pickerCard",onAnimationEnd:this.animationEnd},this.state.pickedTask&&this.state.pickedTask?r.a.createElement(R,{task:this.state.pickedTask,disableEdit:!0}):null),r.a.createElement("div",{className:"pickerCard"},r.a.createElement("div",{id:"tagSelectionBtn",onClick:this.toggleTagSelectionPannel},"\u9078\u53d6\u4efb\u52d9\u7bc4\u570d",r.a.createElement("img",{src:P.a,alt:""})),r.a.createElement(y,{checkTagState:this.checkTagState,noNewTag:!0})),r.a.createElement("div",{id:"buttonWrapper"},r.a.createElement("button",{id:"pickerButton",onClick:this.pickTask},this.state.animationPerformed?"\u518d\u4e00\u6b21":"\u6311\u4efb\u52d9"),this.state.animationPerformed?r.a.createElement("button",{id:"excuteBtn",onClick:this.execute},"\u57f7\u884c"):null))),r.a.createElement("li",{className:this.animationPerformed?"null":"transparent"},this.state.pickedTask&&this.state.pickedTask?r.a.createElement(R,{task:this.state.pickedTask,disableEdit:!0}):null)))}}]),t}(n.Component),K=Object(E.d)(Object(m.b)(function(e){return{loggedIn:!!e.firebase.auth.uid,userId:e.firebase.auth.uid,tasks:e.firebase.auth.uid?e.localStore.tasks:e.firestore.ordered.defaultTasks,allTags:e.firebase.auth.uid?e.localStore.allTags:e.firestore.ordered.defaultTags,currentTask:e.localStore.currentTask}},function(e){return{setCurrentTask:function(t){e(function(e){return console.log(e),{type:"SET_CURRENT_TASK",task:e}}(t))}}}),Object(k.firestoreConnect)([{collection:"defaultTasks"}]))(x),W=a(408),B=a(405),M=a(80),H=a.n(M),q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={email:"",password:""},a.redirectToHome=function(){return r.a.createElement(W.a,{to:"/"})},a.handleChange=function(e){a.setState(Object(f.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement(W.a,{to:"/"}):r.a.createElement("div",{id:"signInForm"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(B.a,{to:"/",className:"closeBtn"},r.a.createElement("img",{src:H.a,alt:"",id:"closeImg"})),r.a.createElement("div",{className:"inputWrapper"},r.a.createElement("input",{type:"text",id:"email",onChange:this.handleChange,value:this.state.email,placeholder:"\u5e33\u865f",autoComplete:"off"}),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange,value:this.state.password,placeholder:"\u5bc6\u78bc",autoComplete:"off"}),r.a.createElement("button",null,"\u767b\u5165"))))}}]),t}(n.Component),V=Object(m.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signIn:function(t){var a;e((a=t,function(e,t,n){var r=n.getFirebase,s=n.getFirestore,i=r(),c=s();i.auth().signInWithEmailAndPassword(a.email,a.password).then(function(){var t=i.auth().currentUser.uid;c.collection("users").doc(t).get().then(function(t){e({type:"LOGIN_SUCCESS",data:t.data()})}).then(function(){c.collection("userTasks").where("ownerId","==",t).get().then(function(t){var a=[];t.docs.forEach(function(e){var t=e.data();t.id=e.id,a.push(t)}),e({type:"LOAD_TASKS_WHEN_LOGIN",tasks:a})}).catch(function(t){e({type:"LOAD_TASKS_ERROR",err:t})})}).catch(function(e){console.log(e)}),c.collection("userTags").where("ownerId","==",t).get().then(function(t){var a=[];t.docs.forEach(function(e){var t=e.data();t.id=e.id,a.push(t)}),e({type:"LOAD_TAGS_WHEN_LOGIN",tags:a})})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}))},signOut:function(){e(function(e,t,a){var n=a.getFirebase,r=a.getFirestore,s=n(),i=r();s.auth().signOut().then(function(){e({type:"LOGOUT_SUCCESS"})}).then(function(){i.collection("defaultTasks").get().then(function(t){var a=[];t.docs.forEach(function(e){var t=e.data();t.id=e.id,a.push(t)}),e({type:"LOAD_TASKS_WHEN_LOGOUT",tasks:a})}),i.collection("defaultTags").get().then(function(t){var a=[];t.docs.forEach(function(e){var t=e.data();t.id=e.id,a.push(t)}),e({type:"LOAD_TAGS_WHEN_LOGOUT",tags:a})})})})}}})(q),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",name:""},a.handleChange=function(e){a.setState(Object(f.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement(W.a,{to:"/"}):r.a.createElement("div",{id:"signUpForm"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(B.a,{to:"/",className:"closeBtn"},r.a.createElement("img",{src:H.a,alt:"",id:"closeImg"})),r.a.createElement("div",{className:"inputWrapper"},r.a.createElement("input",{type:"text",id:"email",onChange:this.handleChange,value:this.state.email,placeholder:"\u8f38\u5165\u4fe1\u7bb1",autoComplete:"off"}),r.a.createElement("input",{type:"text",id:"password",onChange:this.handleChange,value:this.state.password,placeholder:"\u8f38\u5165\u5bc6\u78bc",autoComplete:"off"}),r.a.createElement("input",{type:"text",id:"name",onChange:this.handleChange,value:this.state.name,placeholder:"\u4f60\u7684\u540d\u5b57",autoComplete:"off"}),r.a.createElement("button",null,"\u8a3b\u518a"))))}}]),t}(n.Component),J=Object(m.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){e(function(e){return function(t,a,n){var r=n.getFirebase,s=n.getFirestore,i=r(),c=s();i.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return c.collection("users").doc(t.user.uid).collection("user-profile").add({name:e.name})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(z),Z=Object(m.b)(function(e){return{auth:e.firebase.auth}},function(e){return{signOut:function(){e(function(e,t,a){var n=a.getFirebase,r=a.getFirestore,s=n(),i=r();s.auth().signOut().then(function(){e({type:"LOGOUT_SUCCESS"})}).then(function(){i.collection("defaultTasks").get().then(function(t){var a=[];t.docs.forEach(function(e){var t=e.data();t.id=e.id,a.push(t)}),e({type:"LOAD_TASKS_WHEN_LOGOUT",tasks:a})}),i.collection("defaultTags").get().then(function(t){var a=[];t.docs.forEach(function(e){var t=e.data();t.id=e.id,a.push(t)}),e({type:"LOAD_TAGS_WHEN_LOGOUT",tags:a})})})})}}})(function(e){var t=e.auth,a=e.signOut,n=t.uid?r.a.createElement("div",{id:"authPannel"},r.a.createElement("button",{onClick:function(){a()}},"\u767b\u51fa")):r.a.createElement("div",{id:"authPannel"},r.a.createElement(B.a,{to:"/signIn"},"\u767b\u5165"),"\uff5c",r.a.createElement(B.a,{to:"/signUp"},"\u8a3b\u518a"));return r.a.createElement("div",{id:"header"},r.a.createElement("span",{id:"siteTitle"},"\u4efb\u52d9\u6311\u9078\u5927\u5e2b"),n)}),$=a(407),Q=a(406),X=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.firebase.auth.uid?this.props.loadDataToCentral(this.props.firebase.auth.uid):this.props.loadDataToCentral()}},{key:"render",value:function(){return r.a.createElement($.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("ul",{id:"template"},r.a.createElement("li",{className:"mainArea"},r.a.createElement(K,null)),r.a.createElement("li",{className:"mainArea"},r.a.createElement(D,null)),r.a.createElement("li",{className:"mainArea"},r.a.createElement(U,null)),r.a.createElement("li",{className:"mainArea"},r.a.createElement(F,null))),r.a.createElement(w,null),r.a.createElement(Z,null),r.a.createElement(Q.a,{path:"/signIn",component:V}),r.a.createElement(Q.a,{path:"/signUp",component:J})))}}]),t}(n.Component),Y=Object(m.b)(function(e){return Object(c.a)({},e)},function(e){return{signOut:function(){e(function(e,t,a){var n=a.getFirebase,r=a.getFirestore,s=n(),i=r();s.auth().signOut().then(function(){e({type:"LOGOUT_SUCCESS"})}).then(function(){i.collection("defaultTasks").get().then(function(t){var a=[];t.docs.forEach(function(e){var t=e.data();t.id=e.id,a.push(t)}),e({type:"LOAD_TASKS_WHEN_LOGOUT",tasks:a})}),i.collection("defaultTags").get().then(function(t){var a=[];t.docs.forEach(function(e){var t=e.data();t.id=e.id,a.push(t)}),e({type:"LOAD_TAGS_WHEN_LOGOUT",tags:a})})})})},loadDataToCentral:function(t){e(function(e){var t=e;return function(a,n,r){r.getFirebase;var s=(0,r.getFirestore)();void 0!==t?(s.collection("userTasks").where("ownerId","==",e).get().then(function(e){var t=[];e.docs.forEach(function(e){var a=e.data();a.id=e.id,t.push(a)}),a({type:"LOAD_TASKS_FROM_FIRESTORE",tasks:t})}).catch(function(e){a({type:"LOAD_TASKS_ERROR",err:e})}),s.collection("userTags").where("ownerId","==",e).get().then(function(e){var t=[];e.docs.forEach(function(e){var a=e.data();a.id=e.id,t.push(a)}),a({type:"LOAD_TAGS_FROM_FIRESTORE",tags:t})}).catch(function(e){a({type:"LOAD_TAGS_ERROR",err:e})})):(s.collection("defaultTasks").get().then(function(e){var t=[];e.docs.forEach(function(e){var a=e.data();a.id=e.id,t.push(a)}),a({type:"LOAD_TASKS_FROM_FIRESTORE",tasks:t})}),s.collection("defaultTags").get().then(function(e){var t=[];e.docs.forEach(function(e){var a=e.data();a.id=e.id,t.push(a)}),a({type:"LOAD_TAGS_FROM_FIRESTORE",tags:t})}))}}(t))},clearCentralTasks:function(){e({type:"CLEAR_CENTRAL_TASKS"})}}})(X);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee={tasks:[],allTags:[],currentTask:null},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_TASKS_WHEN_LOGIN":case"LOAD_TASKS_WHEN_LOGOUT":return Object(c.a)({},e,{tasks:t.tasks});case"LOAD_TAGS_WHEN_LOGIN":case"LOAD_TAGS_WHEN_LOGOUT":return Object(c.a)({},e,{allTags:t.tags});case"LOAD_TASKS_FROM_FIRESTORE":return Object(c.a)({},e,{tasks:t.tasks});case"LOAD_TAGS_FROM_FIRESTORE":return Object(c.a)({},e,{allTags:t.tags});case"CLEAR_CENTRAL_TASKS":return e;case"ADD_TASK":var a=t.task;a.id=t.taskId;var n=Object(p.a)(e.tasks).concat([a]);return Object(c.a)({},e,{tasks:n});case"ADD_TASK_ERROR":return e;case"DELETE_TASK":console.log("Task deleted");var r=Object(p.a)(e.tasks);return r=r.filter(function(e){return e.id!==t.taskId}),Object(c.a)({},e,{tasks:r});case"DELETE_TASK_ERROR":return console.log(t.err),e;case"UPDATE_TASK":console.log("update success");var s=Object(p.a)(e.tasks);return s[e.tasks.findIndex(function(e){return e.id===t.task.id})]=t.task,Object(c.a)({},e,{tasks:s});case"UPDATE_TASK_ERROR":return console.log(t.err),e;case"UPDATE_DEFAULT_TASK":var i=Object(p.a)(e.tasks),o=i.findIndex(function(e){return e.id===t.task.id});return i[o]=t.task,Object(c.a)({},e,{tasks:i});case"ADD_TAG":var l=!0,u=!0,d=!1,h=void 0;try{for(var f,g=e.allTags[Symbol.iterator]();!(u=(f=g.next()).done);u=!0){var m=f.value;t.tag===m&&(l=!1)}}catch(E){d=!0,h=E}finally{try{u||null==g.return||g.return()}finally{if(d)throw h}}var k=Object(p.a)(e.allTags);return l?(k.push(t.tag),console.log(k),Object(c.a)({},e,{allTags:k})):e;case"SET_CURRENT_TASK":return Object(c.a)({},e,{currentTask:t.task});case"CLEAR_CURRENT_TASK":return Object(c.a)({},e,{currentTask:null});default:return e}},ae={authError:null,userTasks:[],userTags:[]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(c.a)({},e,{authError:"Login failed :("});case"LOGIN_SUCCESS":return{authError:null,userTasks:t.data.userTasks,userTags:t.data.userTags};case"USER_DATA_LOADED":case"LOGOUT_SUCCESS":return e;case"SIGNUP_SUCCESS":return Object(c.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup failed"),Object(c.a)({},e,{authError:t.err.message});default:return e}},re=a(56),se=Object(E.c)({localStore:te,auth:ne,firestore:re.firestoreReducer,firebase:k.firebaseReducer}),ie=a(203),ce=a(82),oe=a.n(ce);a(397),a(402);oe.a.initializeApp({apiKey:"AIzaSyDolOZMc-UodjynPUfkjyrq9m95VO3Peck",authDomain:"task-picker-de255.firebaseapp.com",databaseURL:"https://task-picker-de255.firebaseio.com",projectId:"task-picker-de255",storageBucket:"task-picker-de255.appspot.com",messagingSenderId:"614294430544"}),oe.a.firestore().settings({timestampsInSnapshots:!0});var le=oe.a,ue=Object(E.e)(se,Object(E.d)(Object(E.a)(ie.a.withExtraArgument({getFirebase:k.getFirebase,getFirestore:re.getFirestore})),Object(re.reduxFirestore)(le),Object(k.reactReduxFirebase)(le,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));ue.firebaseAuthIsReady.then(function(){i.a.render(r.a.createElement(m.a,{store:ue},r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})},80:function(e,t,a){e.exports=a.p+"static/media/close.b98f9d73.svg"}},[[204,2,1]]]);
//# sourceMappingURL=main.883bfc9d.chunk.js.map