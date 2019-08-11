(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{rh4I:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),s=u("lj7S"),r=u("wS0E"),o=u("yZ9D"),a=u("5rUV"),b=u("s7LF"),c=u("SVse"),d=u("kh7C");class v{constructor(l,n){this.formBuilder=l,this.utilsService=n,this.builtInOutput="",this.customStringOutput="",this.questionText="4.Write a function to reverse every word of a string.(a) Using split and reverse. (b) Without using split and reverse and in O(1) space(since strings are immutable, assume that the input is a character array)."}ngOnInit(){this.initiateForm()}initiateForm(){this.reversedStringForm=this.formBuilder.group({stringToBeReversed:["",b.o.compose([b.o.required])]})}clearText(){this.reversedStringForm.get("stringToBeReversed").setValue(""),this.customStringOutput="",this.builtInOutput=""}reverseWordsOfString(){const l=this.reversedStringForm.get("stringToBeReversed").value;this.customStringOutput=this.utilsService.getReverseWordsOfString(l),this.builtInOutput=this.utilsService.getReverseWordsOfStringBuiltIn(l)}}var g=t.lb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Db(0,[(l()(),t.nb(0,0,null,null,10,"div",[["class","d-flex justify-content-between mt-3"]],null,null,null,null,null)),(l()(),t.nb(1,0,null,null,4,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.nb(2,0,null,null,1,"p",[["class","ml-3"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Without inbuild methods"])),(l()(),t.nb(4,0,null,null,1,"app-output",[],null,null,null,s.b,s.a)),t.mb(5,114688,[["custom",4]],0,r.a,[],{outputInfo:[0,"outputInfo"]},null),(l()(),t.nb(6,0,null,null,4,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.nb(7,0,null,null,1,"p",[["class","ml-3"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["With inbuild methods"])),(l()(),t.nb(9,0,null,null,1,"app-output",[],null,null,null,s.b,s.a)),t.mb(10,114688,[["builtIn",4]],0,r.a,[],{outputInfo:[0,"outputInfo"]},null)],function(l,n){var u=n.component;l(n,5,0,u.customStringOutput),l(n,10,0,u.builtInOutput)},null)}function m(l){return t.Db(0,[(l()(),t.nb(0,0,null,null,24,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.nb(1,0,null,null,1,"app-question",[],null,null,null,o.b,o.a)),t.mb(2,114688,null,0,a.a,[],{questionText:[0,"questionText"]},null),(l()(),t.nb(3,0,null,null,1,"div",[["class","text-center mt-3 test-here-label"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Test Here."])),(l()(),t.nb(5,0,null,null,17,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.vb(l,7).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.vb(l,7).onReset()&&e),e},null,null)),t.mb(6,16384,null,0,b.s,[],null,null),t.mb(7,540672,null,0,b.g,[[8,null],[8,null]],{form:[0,"form"]},null),t.yb(2048,null,b.c,null,[b.g]),t.mb(9,16384,null,0,b.l,[[4,b.c]],null,null),(l()(),t.nb(10,0,null,null,7,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.nb(11,0,null,null,0,"label",[["for","fieldToReverse"]],null,null,null,null,null)),(l()(),t.nb(12,0,null,null,5,"textarea",[["class","form-control"],["formControlName","stringToBeReversed"],["id","fieldToReverse"],["placeholder","Enter the string"],["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.vb(l,13)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.vb(l,13).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.vb(l,13)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.vb(l,13)._compositionEnd(u.target.value)&&e),e},null,null)),t.mb(13,16384,null,0,b.d,[t.B,t.k,[2,b.a]],null,null),t.yb(1024,null,b.i,function(l){return[l]},[b.d]),t.mb(15,671744,null,0,b.f,[[3,b.c],[8,null],[8,null],[6,b.i],[2,b.r]],{name:[0,"name"]},null),t.yb(2048,null,b.j,null,[b.f]),t.mb(17,16384,null,0,b.k,[[4,b.j]],null,null),(l()(),t.nb(18,0,null,null,4,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(l()(),t.nb(19,0,null,null,1,"button",[["class","btn btn-primary"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.reverseWordsOfString()&&t),t},null,null)),(l()(),t.Bb(-1,null,["Submit"])),(l()(),t.nb(21,0,null,null,1,"button",[["class","btn btn-danger ml-3"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.clearText()&&t),t},null,null)),(l()(),t.Bb(-1,null,["Clear"])),(l()(),t.cb(16777216,null,null,1,null,p)),t.mb(24,16384,null,0,c.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.questionText),l(n,7,0,u.reversedStringForm),l(n,15,0,"stringToBeReversed"),l(n,24,0,u.customStringOutput&&""!==u.customStringOutput||u.builtInOutput&&""!==u.builtInOutput)},function(l,n){var u=n.component;l(n,5,0,t.vb(n,9).ngClassUntouched,t.vb(n,9).ngClassTouched,t.vb(n,9).ngClassPristine,t.vb(n,9).ngClassDirty,t.vb(n,9).ngClassValid,t.vb(n,9).ngClassInvalid,t.vb(n,9).ngClassPending),l(n,12,0,t.vb(n,17).ngClassUntouched,t.vb(n,17).ngClassTouched,t.vb(n,17).ngClassPristine,t.vb(n,17).ngClassDirty,t.vb(n,17).ngClassValid,t.vb(n,17).ngClassInvalid,t.vb(n,17).ngClassPending),l(n,19,0,u.reversedStringForm.invalid)})}function f(l){return t.Db(0,[(l()(),t.nb(0,0,null,null,1,"app-question-four",[],null,null,null,m,g)),t.mb(1,114688,null,0,v,[b.e,d.a],null,null)],function(l,n){l(n,1,0)},null)}var h=t.jb("app-question-four",v,f,{},{},[]),S=u("iInd");class I{}var C=u("PCNd");u.d(n,"QuestionFourModuleNgFactory",function(){return O});var O=t.kb(e,[],function(l){return t.tb([t.ub(512,t.j,t.X,[[8,[i.a,h]],[3,t.j],t.v]),t.ub(4608,c.l,c.k,[t.s,[2,c.r]]),t.ub(4608,b.e,b.e,[]),t.ub(4608,b.q,b.q,[]),t.ub(1073742336,c.b,c.b,[]),t.ub(1073742336,S.o,S.o,[[2,S.t],[2,S.k]]),t.ub(1073742336,I,I,[]),t.ub(1073742336,b.p,b.p,[]),t.ub(1073742336,b.n,b.n,[]),t.ub(1073742336,b.h,b.h,[]),t.ub(1073742336,C.a,C.a,[]),t.ub(1073742336,e,e,[]),t.ub(1024,S.i,function(){return[[{path:"",children:[{path:"",component:v}]}]]},[])])})}}]);