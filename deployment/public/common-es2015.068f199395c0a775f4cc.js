(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"5rUV":function(n,l,t){"use strict";t.d(l,"a",function(){return u});class u{constructor(){}ngOnInit(){}}},"9GI3":function(n,l,t){"use strict";t.d(l,"a",function(){return i});var u=t("8Y7J"),e=t("s7LF");class i{constructor(n){this.formBuilder=n,this.itemsList=[],this.arrayList=new u.m}ngOnInit(){this.initializeForm()}initializeForm(){this.addListForm=this.formBuilder.group({element:["",e.o.compose([e.o.required])]})}addElementToList(){const n=this.addListForm.get("element").value;this.itemsList.push(n),this.addListForm.get("element").setValue("")}deleteFromList(n){this.itemsList.splice(n,1)}submitArray(){this.arrayList.emit(this.itemsList)}}},kh7C:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=t("8Y7J");const e=(()=>{class n{constructor(){this.keys=[]}getCountOfEachLetterInArray(n,l=!0){const t={};let u=n.join();u=l?u:u.toLowerCase();const e=[];for(let i=0;i<u.length;i++)-1===e.indexOf(u[i])&&(t[u[i]]=(u.match(new RegExp(u[i],"g"))||[]).length);return t.hasOwnProperty(",")&&(t[","]-(n.length-1)==0?delete t[","]:t[","]=t[","]-(n.length-1)),t}getArrayWithoutDuplication(n,l=!0){return n.filter((n,t,u)=>(n=l?n:n.toLowerCase(),u.indexOf(n)===t))}getJsonKeys(n){return console.log(n),this.getAllKeys(n),console.log(this.keys),this.keys}getAllKeys(n){for(const l in n)"object"==typeof n[l]?(this.keys.push(l),this.getAllKeys(n[l])):this.keys.push(l)}parseStringObject(n){return JSON.parse(n)}getReverseWordsOfString(n){let l="",t="";for(let u=n.length-1;u>=0;u--)0===u&&(t=l+n[u]+t,l="")," "===n[u]?(t=" "+l+t,l=""):l+=n[u];return console.log(t),t}getReverseWordsOfStringBuiltIn(n){return n.split(" ").map((n,l,t)=>n.split("").reverse().join("")).join(" ")}}return n.ngInjectableDef=u.Fb({factory:function(){return new n},token:n,providedIn:"root"}),n})()},lj7S:function(n,l,t){"use strict";var u=t("8Y7J"),e=t("SVse");t("wS0E"),t.d(l,"a",function(){return i}),t.d(l,"b",function(){return o});var i=u.lb({encapsulation:0,styles:[[".output[_ngcontent-%COMP%]{margin-right:20px;margin-top:10px;margin-left:15px}.output[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{background-color:#d3d3d35c}"]],data:{}});function s(n){return u.Db(0,[(n()(),u.nb(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),u.nb(1,0,null,null,1,"label",[["class","ml-3"]],null,null,null,null,null)),(n()(),u.Bb(-1,null,["Output"])),(n()(),u.nb(3,0,null,null,1,"div",[["class","d-flex output"]],null,null,null,null,null)),(n()(),u.nb(4,0,null,null,0,"textarea",[["class","col-12"],["placeholder","Output comes here"],["readonly",""],["rows","5"]],[[8,"value",0]],null,null,null,null))],null,function(n,l){n(l,4,0,l.component.outputInfo)})}function o(n){return u.Db(0,[(n()(),u.cb(16777216,null,null,1,null,s)),u.mb(1,16384,null,0,e.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.component.outputInfo)},null)}},wGZ9:function(n,l,t){"use strict";var u=t("8Y7J"),e=t("s7LF"),i=t("SVse");t("9GI3"),t.d(l,"a",function(){return s}),t.d(l,"b",function(){return r});var s=u.lb({encapsulation:0,styles:[[".item[_ngcontent-%COMP%]{padding:15px;background-color:#a9a9a97a;border-radius:10px}.fa-trash[_ngcontent-%COMP%]{color:#cd0505;cursor:pointer;font-size:20px}.width-100[_ngcontent-%COMP%]{width:100px}"]],data:{}});function o(n){return u.Db(0,[(n()(),u.nb(0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),u.nb(1,0,null,null,4,"div",[["class","d-flex item col-md-10 ml-3 mt-2"]],null,null,null,null,null)),(n()(),u.nb(2,0,null,null,1,"div",[["class","col-md-10"]],null,null,null,null,null)),(n()(),u.Bb(3,null,[" "," "])),(n()(),u.nb(4,0,null,null,1,"div",[["class","text-right col-md-2"]],null,null,null,null,null)),(n()(),u.nb(5,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-trash"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.deleteFromList(n.context.index)&&u),u},null,null))],null,function(n,l){n(l,3,0,l.context.$implicit)})}function r(n){return u.Db(0,[(n()(),u.nb(0,0,null,null,22,"div",[],null,null,null,null,null)),(n()(),u.nb(1,0,null,null,21,"div",[["class","mt-5"]],null,null,null,null,null)),(n()(),u.nb(2,0,null,null,14,"form",[["class",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var e=!0,i=n.component;return"submit"===l&&(e=!1!==u.vb(n,4).onSubmit(t)&&e),"reset"===l&&(e=!1!==u.vb(n,4).onReset()&&e),"ngSubmit"===l&&(e=!1!==i.addElementToList()&&e),e},null,null)),u.mb(3,16384,null,0,e.s,[],null,null),u.mb(4,540672,null,0,e.g,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u.yb(2048,null,e.c,null,[e.g]),u.mb(6,16384,null,0,e.l,[[4,e.c]],null,null),(n()(),u.nb(7,0,null,null,9,"div",[["class","form-group col-md-12 d-flex justify-content-center"]],null,null,null,null,null)),(n()(),u.nb(8,0,null,null,5,"input",[["class","form-control"],["formControlName","element"],["id","listField"],["placeholder","Enter Items into List"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0;return"input"===l&&(e=!1!==u.vb(n,9)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==u.vb(n,9).onTouched()&&e),"compositionstart"===l&&(e=!1!==u.vb(n,9)._compositionStart()&&e),"compositionend"===l&&(e=!1!==u.vb(n,9)._compositionEnd(t.target.value)&&e),e},null,null)),u.mb(9,16384,null,0,e.d,[u.B,u.k,[2,e.a]],null,null),u.yb(1024,null,e.i,function(n){return[n]},[e.d]),u.mb(11,671744,null,0,e.f,[[3,e.c],[8,null],[8,null],[6,e.i],[2,e.r]],{name:[0,"name"]},null),u.yb(2048,null,e.j,null,[e.f]),u.mb(13,16384,null,0,e.k,[[4,e.j]],null,null),(n()(),u.nb(14,0,null,null,2,"button",[["class","btn btn-primary btn-sm width-100"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),u.nb(15,0,null,null,0,"i",[["class","fa fa-plus"]],null,null,null,null,null)),(n()(),u.Bb(-1,null,["\xa0Add "])),(n()(),u.nb(17,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),u.cb(16777216,null,null,1,null,o)),u.mb(19,278528,null,0,i.i,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(n()(),u.nb(20,0,null,null,2,"div",[["class","d-flex justify-content-end col-md-12 mt-2"]],null,null,null,null,null)),(n()(),u.nb(21,0,null,null,1,"button",[["class","btn btn-primary"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.submitArray()&&u),u},null,null)),(n()(),u.Bb(-1,null,["Submit Array"]))],function(n,l){var t=l.component;n(l,4,0,t.addListForm),n(l,11,0,"element"),n(l,19,0,t.itemsList)},function(n,l){var t=l.component;n(l,2,0,u.vb(l,6).ngClassUntouched,u.vb(l,6).ngClassTouched,u.vb(l,6).ngClassPristine,u.vb(l,6).ngClassDirty,u.vb(l,6).ngClassValid,u.vb(l,6).ngClassInvalid,u.vb(l,6).ngClassPending),n(l,8,0,u.vb(l,13).ngClassUntouched,u.vb(l,13).ngClassTouched,u.vb(l,13).ngClassPristine,u.vb(l,13).ngClassDirty,u.vb(l,13).ngClassValid,u.vb(l,13).ngClassInvalid,u.vb(l,13).ngClassPending),n(l,14,0,t.addListForm.invalid),n(l,21,0,t.itemsList.length<=0)})}},wS0E:function(n,l,t){"use strict";t.d(l,"a",function(){return u});class u{constructor(){}ngOnInit(){}}},yZ9D:function(n,l,t){"use strict";var u=t("8Y7J");t("5rUV"),t.d(l,"a",function(){return e}),t.d(l,"b",function(){return i});var e=u.lb({encapsulation:0,styles:[[".question-container[_ngcontent-%COMP%]{border:1px solid #d3d3d3;padding:12px;border-radius:10px;font-size:20px}"]],data:{}});function i(n){return u.Db(0,[(n()(),u.nb(0,0,null,null,1,"div",[["class","question-container mt-3"]],null,null,null,null,null)),(n()(),u.Bb(1,null,[" ","\n"]))],null,function(n,l){n(l,1,0,l.component.questionText)})}}}]);