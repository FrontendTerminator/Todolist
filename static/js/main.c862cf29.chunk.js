(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{103:function(t,e,a){},127:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(8),l=a.n(i);a(103),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r,c,s=a(77),d=a.n(s),u=a(171),f=a(172),m=a(173),p=a(129),b=a(167),g=a(174),k=a(175),v=a(17),E=a(26),h=a(79),C=a.n(h).a.create(Object(E.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"e68751ec-99e4-4ba5-aeca-d3d2975884b0"}})),j=function(){return C.get("todo-lists")},y=function(t){return C.post("todo-lists",{title:t})},O=function(t){return C.delete("todo-lists/".concat(t))},T=function(t,e){return C.put("todo-lists/".concat(t),{title:e})},I=function(t){return C.get("todo-lists/".concat(t,"/tasks"))},A=function(t,e){return C.delete("todo-lists/".concat(t,"/tasks/").concat(e))},w=function(t,e){return C.post("todo-lists/".concat(t,"/tasks"),{title:e})},S=function(t,e,a){return C.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},x=function(t){return C.post("auth/login",t)},F=function(){return C.delete("auth/login")},L=function(){return C.get("auth/me")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var P=function(t,e){t.messages.length?e(U({error:t.messages[0]})):e(U({error:"Some error occurred"})),e(_({status:"failed"}))},B=function(t,e){e(U({error:t.message?t.message:"Some error occurred"})),e(_({status:"failed"}))},z=a(27),N=Object(z.b)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}}}),D=N.reducer,M=N.actions.setIsLoggedInAC,H=Object(z.b)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error},setAppInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),q=H.reducer,R=H.actions,U=R.setAppErrorAC,_=R.setAppStatusAC,J=R.setAppInitializedAC,K=Object(z.b)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)},addTodolistAC:function(t,e){t.unshift(Object(E.a)(Object(E.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.status},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(E.a)(Object(E.a)({},t),{},{filter:"all",entityStatus:"idle"})}))}}}),V=K.reducer,W=K.actions,Y=W.removeTodolistAC,$=W.addTodolistAC,G=W.changeTodolistTitleAC,Q=W.changeTodolistFilterAC,X=W.changeTodolistEntityStatusAC,Z=W.setTodolistsAC,tt=Object(z.b)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&a.splice(n,1)},addTaskAC:function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)},updateTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(E.a)(Object(E.a)({},a[n]),e.payload.model))},setTasksAC:function(t,e){t[e.payload.todolistId]=e.payload.tasks}},extraReducers:function(t){t.addCase($,(function(t,e){t[e.payload.todolist.id]=[]})),t.addCase(Y,(function(t,e){delete t[e.payload.id]})),t.addCase(Z,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))}))}}),et=tt.actions,at=et.removeTaskAC,nt=et.addTaskAC,ot=et.updateTaskAC,it=et.setTasksAC,lt=tt.reducer,rt=function(t,e,a){return function(n,o){var i=o().tasks[a].find((function(e){return e.id===t}));if(i){var l=Object(E.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);S(a,t,l).then((function(o){if(0===o.data.resultCode){var i=ot({taskId:t,model:e,todolistId:a});n(i)}else P(o.data,n)})).catch((function(t){B(t,n)}))}else console.warn("task not found in the state")}},ct=a(168),st=a(128),dt=a(43),ut=a(176),ft=a(164),mt=a(165),pt=o.a.memo((function(t){var e=t.addItem,a=t.disabled,i=void 0!==a&&a;console.log("AddItemForm called");var l=Object(n.useState)(""),r=Object(dt.a)(l,2),c=r[0],s=r[1],d=Object(n.useState)(null),u=Object(dt.a)(d,2),f=u[0],m=u[1],p=function(){""!==c.trim()?(e(c),s("")):m("Title is required")};return o.a.createElement("div",null,o.a.createElement(ut.a,{variant:"outlined",disabled:i,error:!!f,value:c,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==f&&m(null),13===t.charCode&&p()},label:"Title",helperText:f}),o.a.createElement(ft.a,{color:"primary",onClick:p,disabled:i},o.a.createElement(mt.a,null)))})),bt=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(n.useState)(!1),a=Object(dt.a)(e,2),i=a[0],l=a[1],r=Object(n.useState)(t.value),c=Object(dt.a)(r,2),s=c[0],d=c[1];return i?o.a.createElement(ut.a,{value:s,onChange:function(t){d(t.currentTarget.value)},autoFocus:!0,onBlur:function(){l(!1),t.onChange(s)}}):o.a.createElement("span",{onDoubleClick:function(){l(!0),d(t.value)}},t.value)})),gt=a(166),kt=a(178),vt=o.a.memo((function(t){var e=Object(n.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(n.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?r.Completed:r.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return o.a.createElement("div",{key:t.task.id,className:t.task.status===r.Completed?"is-done":""},o.a.createElement(kt.a,{checked:t.task.status===r.Completed,color:"primary",onChange:a}),o.a.createElement(bt,{value:t.task.title,onChange:i}),o.a.createElement(ft.a,{onClick:e},o.a.createElement(gt.a,null)))})),Et=o.a.memo((function(t){var e=Object(v.b)();Object(n.useEffect)((function(){var a,n=(a=t.todolist.id,function(t){t(_({status:"loading"})),I(a).then((function(e){var n=e.data.items;t(it({tasks:n,todolistId:a})),t(_({status:"succeeded"}))}))});e(n)}),[]);var a=Object(n.useCallback)((function(e){t.addTask(e,t.todolist.id)}),[t.addTask,t.todolist.id]),i=Object(n.useCallback)((function(e){t.changeTodolistTitle(t.todolist.id,e)}),[t.todolist.id,t.changeTodolistTitle]),l=Object(n.useCallback)((function(){return t.changeFilter("all",t.todolist.id)}),[t.todolist.id,t.changeFilter]),c=Object(n.useCallback)((function(){return t.changeFilter("active",t.todolist.id)}),[t.todolist.id,t.changeFilter]),s=Object(n.useCallback)((function(){return t.changeFilter("completed",t.todolist.id)}),[t.todolist.id,t.changeFilter]),d=t.tasks;return"active"===t.todolist.filter&&(d=t.tasks.filter((function(t){return t.status===r.New}))),"completed"===t.todolist.filter&&(d=t.tasks.filter((function(t){return t.status===r.Completed}))),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement(bt,{value:t.todolist.title,onChange:i}),o.a.createElement(ft.a,{onClick:function(){t.removeTodolist(t.todolist.id)},disabled:"loading"===t.todolist.entityStatus},o.a.createElement(gt.a,null))),o.a.createElement(pt,{addItem:a,disabled:"loading"===t.todolist.entityStatus}),o.a.createElement("div",null,d.map((function(e){return o.a.createElement(vt,{key:e.id,task:e,todolistId:t.todolist.id,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus})}))),o.a.createElement("div",{style:{paddingTop:"10px"}},o.a.createElement(b.a,{variant:"all"===t.todolist.filter?"outlined":"text",onClick:l,color:"default"},"All"),o.a.createElement(b.a,{variant:"active"===t.todolist.filter?"outlined":"text",onClick:c,color:"primary"},"Active"),o.a.createElement(b.a,{variant:"completed"===t.todolist.filter?"outlined":"text",onClick:s,color:"secondary"},"Completed")))})),ht=a(13),Ct=function(){var t=Object(v.c)((function(t){return t.todolists})),e=Object(v.c)((function(t){return t.tasks})),a=Object(v.c)((function(t){return t.auth.isLoggedIn})),i=Object(v.b)();Object(n.useEffect)((function(){var t=function(t){t(_({status:"loading"})),j().then((function(e){t(Z({todolists:e.data})),t(_({status:"succeeded"}))})).catch((function(e){B(e,t)}))};i(t)}),[]);var l=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){A(e,t).then((function(n){var o=at({taskId:t,todolistId:e});a(o)}))}}(t,e);i(a)}),[]),r=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){a(_({status:"loading"})),w(e,t).then((function(t){if(0===t.data.resultCode){var e=t.data.data.item,n=nt({task:e});a(n),a(_({status:"succeeded"}))}else P(t.data,a)})).catch((function(t){B(t,a)}))}}(t,e);i(a)}),[]),c=Object(n.useCallback)((function(t,e,a){var n=rt(t,{status:e},a);i(n)}),[]),s=Object(n.useCallback)((function(t,e,a){var n=rt(t,{title:e},a);i(n)}),[]),d=Object(n.useCallback)((function(t,e){var a=Q({id:e,filter:t});i(a)}),[]),u=Object(n.useCallback)((function(t){var e,a=(e=t,function(t){t(_({status:"loading"})),t(X({id:e,status:"loading"})),O(e).then((function(a){t(Y({id:e})),t(_({status:"succeeded"}))}))});i(a)}),[]),f=Object(n.useCallback)((function(t,e){var a=function(t,e){return function(a){T(t,e).then((function(n){a(G({id:t,title:e}))}))}}(t,e);i(a)}),[]),m=Object(n.useCallback)((function(t){var e=function(t){return function(e){e(_({status:"loading"})),y(t).then((function(t){e($({todolist:t.data.data.item})),e(_({status:"succeeded"}))}))}}(t);i(e)}),[i]);return a?o.a.createElement(o.a.Fragment,null,o.a.createElement(ct.a,{container:!0,style:{padding:"20px"}},o.a.createElement(pt,{addItem:m})),o.a.createElement(ct.a,{container:!0,spacing:3},t.map((function(t){var a=e[t.id];return o.a.createElement(ct.a,{item:!0,key:t.id},o.a.createElement(st.a,{style:{padding:"10px"}},o.a.createElement(Et,{todolist:t,tasks:a,removeTask:l,changeFilter:d,addTask:r,changeTaskStatus:c,removeTodolist:u,changeTaskTitle:s,changeTodolistTitle:f})))})))):o.a.createElement(ht.a,{to:"/login"})},jt=a(180),yt=a(177);function Ot(t){return o.a.createElement(yt.a,Object.assign({elevation:6,variant:"filled"},t))}function Tt(){var t=Object(v.c)((function(t){return t.app.error})),e=Object(v.b)(),a=function(t,a){"clickaway"!==a&&e(U({error:null}))},n=null!==t;return o.a.createElement(jt.a,{open:n,autoHideDuration:6e3,onClose:a},o.a.createElement(Ot,{onClose:a,severity:"error"},t))}var It=a(51),At=a(181),wt=a(163),St=a(169),xt=a(170),Ft=a(86),Lt=function(){var t=Object(v.b)(),e=Object(v.c)((function(t){return t.auth.isLoggedIn})),a=Object(Ft.a)({validate:function(t){return t.email?t.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e){var a;t((a=e,function(t){t(_({status:"loading"})),x(a).then((function(e){0===e.data.resultCode?(t(M({value:!0})),t(_({status:"succeeded"}))):P(e.data,t)})).catch((function(e){B(e,t)}))}))}});return e?o.a.createElement(ht.a,{to:"/"}):o.a.createElement(ct.a,{container:!0,justify:"center"},o.a.createElement(ct.a,{item:!0,xs:4},o.a.createElement("form",{onSubmit:a.handleSubmit},o.a.createElement(At.a,null,o.a.createElement(wt.a,null,o.a.createElement("p",{style:{color:"#2E3B55"}},"You can use test account credentials"),o.a.createElement("p",null,o.a.createElement("span",{style:{color:"#2E3B55"}}," Email: "),"free@samuraijs.com"),o.a.createElement("p",null,o.a.createElement("span",{style:{color:"#2E3B55"}},"Password: "),"free")),o.a.createElement(St.a,null,o.a.createElement(ut.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?o.a.createElement("div",null,a.errors.email):null,o.a.createElement(ut.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?o.a.createElement("div",null,a.errors.password):null,o.a.createElement(xt.a,{label:"Remember me",control:o.a.createElement(kt.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),o.a.createElement(b.a,{type:"submit",variant:"contained",style:{background:"#2E3B55",color:"#fff"}},"Login"))))))};var Pt=function(){var t=Object(v.c)((function(t){return t.app.status})),e=Object(v.c)((function(t){return t.app.isInitialized})),a=Object(v.c)((function(t){return t.auth.isLoggedIn})),i=Object(v.b)();Object(n.useEffect)((function(){i((function(t){L().then((function(e){0===e.data.resultCode&&t(M({value:!0})),t(J({isInitialized:!0}))}))}))}),[]);var l=Object(n.useCallback)((function(){i((function(t){t(_({status:"loading"})),F().then((function(e){0===e.data.resultCode?(t(M({value:!1})),t(_({status:"succeeded"}))):P(e.data,t)})).catch((function(e){B(e,t)}))}))}),[]);return e?o.a.createElement(It.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(Tt,null),o.a.createElement(f.a,{position:"static",style:{background:"#2E3B55"}},o.a.createElement(m.a,{className:d.a.toolbar},o.a.createElement(p.a,{variant:"h6"},"Todolist"),a&&o.a.createElement(b.a,{color:"inherit",onClick:l},"Log out")),"loading"===t&&o.a.createElement(g.a,null)),o.a.createElement(k.a,{fixed:!0},o.a.createElement(ht.b,{exact:!0,path:"/",render:function(){return o.a.createElement(Ct,null)}}),o.a.createElement(ht.b,{path:"/login",render:function(){return o.a.createElement(Lt,null)}})))):o.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},o.a.createElement(u.a,null))},Bt=a(22),zt=a(45),Nt=Object(Bt.c)({tasks:lt,todolists:V,app:q,auth:D}),Dt=Object(z.a)({reducer:Nt,middleware:function(t){return t().prepend(zt.a)}});window.store=Dt,l.a.render(o.a.createElement(v.a,{store:Dt},o.a.createElement(Pt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},77:function(t,e,a){t.exports={toolbar:"App_toolbar__1kVHw"}},98:function(t,e,a){t.exports=a(127)}},[[98,1,2]]]);
//# sourceMappingURL=main.c862cf29.chunk.js.map