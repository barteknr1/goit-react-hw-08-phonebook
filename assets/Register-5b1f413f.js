import{u as n,j as e,r as i}from"./index-423903c1.js";import{H as m}from"./Helmet-9f3cdc9c.js";const s={},o=()=>{const a=n(),l=r=>{r.preventDefault();const t=r.currentTarget;a(i({name:t.elements.name.value,email:t.elements.email.value,password:t.elements.password.value})),t.reset()};return e.jsxs("form",{className:s.registerForm,onSubmit:l,autoComplete:"off",children:[e.jsxs("label",{className:s.registerLabel,children:["Username",e.jsx("input",{className:s.registerInput,type:"text",name:"name"})]}),e.jsxs("label",{className:s.registerLabel,children:["Email",e.jsx("input",{className:s.registerInput,type:"text",name:"mail"})]}),e.jsxs("label",{className:s.registerLabel,children:["Password",e.jsx("input",{className:s.registerInput,type:"password",name:"password"})]}),e.jsx("button",{type:"submit",children:"Register"})]})},u=()=>e.jsxs("div",{children:[e.jsx(m,{children:e.jsx("title",{children:"Registration"})}),e.jsx(o,{})]});export{u as default};