import{u as r}from"./DmfvTtO6.js";import{s as t}from"./C4R9J9JA.js";import{T as a,c as s,o as n,r as p,B as c}from"./DglXAjIJ.js";import"./BsZujVG9.js";var i=`
.p-checkbox-group {
    display: inline-flex;
}
`,u={root:"p-checkbox-group p-component"},m=a.extend({name:"checkboxgroup",style:i,classes:u}),l={name:"BaseCheckboxGroup",extends:t,style:m,provide:function(){return{$pcCheckboxGroup:this,$parentInstance:this}}},d={name:"CheckboxGroup",extends:l,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("checkbox-group-")}},mounted:function(){this.groupName=this.groupName||r("checkbox-group-")}};function h(e,o,x,f,k,g){return n(),s("div",c({class:e.cx("root")},e.ptmi("root")),[p(e.$slots,"default")],16)}d.render=h;export{d as default};
