import{u as n,j as e,r as i}from"./index-4dd42b0f.js";import{q as m,W as o}from"./index.module-6f04d8ea.js";const s={},c=()=>{const a=n(),l=r=>{r.preventDefault();const t=r.currentTarget;a(i({name:t.elements.name.value,email:t.elements.email.value,password:t.elements.password.value})),t.reset()};return e.jsxs("form",{className:s.registerForm,onSubmit:l,autoComplete:"off",children:[e.jsxs("label",{className:s.registerLabel,children:["Username",e.jsx("input",{className:s.registerInput,type:"text",name:"name"})]}),e.jsxs("label",{className:s.registerLabel,children:["Email",e.jsx("input",{className:s.registerInput,type:"email",name:"email"})]}),e.jsxs("label",{className:s.registerLabel,children:["Password",e.jsx("input",{className:s.registerInput,type:"password",name:"password"})]}),e.jsx("button",{type:"submit",children:"Register"})]})},d=()=>e.jsxs(m,{children:[e.jsx(o,{children:e.jsx("title",{children:"Registration"})}),e.jsx(c,{})]});export{d as default};
