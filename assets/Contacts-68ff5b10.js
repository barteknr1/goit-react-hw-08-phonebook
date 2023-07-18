import{u as d,j as t,a as u,s as x,b as o,d as j,c as _,f as C}from"./index-86abc9c9.js";import{q as N,W as g}from"./index.module-d8fcfdf3.js";const f="_contactForm_l1we0_1",b="_inputName_l1we0_13",F="_input_l1we0_13",L="_add_l1we0_47",a={contactForm:f,inputName:b,input:F,add:L},w=()=>{const e=d(),c=n=>{n.preventDefault();const s=n.target,r=s.elements.name.value,l=s.elements.number.value;e(u({name:r,number:l})),s.reset()};return t.jsxs("form",{className:a.contactForm,onSubmit:c,children:[t.jsxs("label",{children:[t.jsx("p",{className:a.inputName,children:"Name"}),t.jsx("input",{className:a.input,type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),t.jsxs("label",{children:[t.jsx("p",{className:a.inputName,children:"Number"}),t.jsx("input",{className:a.input,type:"tel",name:"number",title:"Phone number must consist of digits and may include spaces, dashes and parentheses. It can start with a plus symbol (+)",required:!0})]}),t.jsx("button",{className:a.add,type:"submit",children:"Add contact"})]})},y="_inputName_k0tbq_1",v="_input_k0tbq_1",p={inputName:y,input:v},E=()=>{const e=d(),c=n=>{const s=n.target.value;e(x(s))};return t.jsxs("label",{children:[t.jsx("p",{className:p.inputName,children:"Find contacts by name"}),t.jsx("input",{className:p.input,onChange:c,type:"text",name:"filter"})]})},m=e=>e.contacts.items,h=e=>e.filter,$=e=>e.contacts.error,k=e=>e.contacts.isLoading,q=e=>{const c=m(e),n=h(e);return c.filter(s=>s.name.toLowerCase().includes(n.toLowerCase()))},S=e=>q(e).sort((n,s)=>n.name.localeCompare(s.name)),W="_progressWrapper_177ed_1",A={progressWrapper:W},D=()=>{const e=o(m),c=o(h),n=e.filter(r=>r.name.toLowerCase().includes(c.toLowerCase())),s=e.length>0;return t.jsx(t.Fragment,{children:s&&c&&t.jsxs("div",{className:A.progressWrapper,children:[t.jsxs("h3",{children:["Found ",n.length," of ",e.length," contacts"]}),t.jsx("progress",{value:n.length,max:e.length})]})})},P="_contactList_1hmw3_1",B="_contactElement_1hmw3_17",I="_noContacts_1hmw3_73",i={contactList:P,contactElement:B,delete:"_delete_1hmw3_45",noContacts:I},z=()=>{const e=o(S),c=d(),n=s=>c(j(s));return t.jsx(t.Fragment,{children:e.map(({id:s,name:r,number:l})=>t.jsxs("li",{className:i.contactElement,children:[t.jsxs("p",{children:[r,":"]}),t.jsx("a",{href:"tel:"+{number:l},children:l}),t.jsx("button",{className:i.delete,onClick:()=>n(s),id:s,type:"button",children:"Delete"})]},s))})},J=()=>{const e=o(m);return t.jsx(t.Fragment,{children:e.length>0?t.jsx("ul",{className:i.contactList,children:t.jsx(z,{})}):t.jsx("p",{className:i.noContacts,children:"No saved contacts"})})},M="_contacts_1irxh_1",R={contacts:M},K=()=>{const e=d(),c=o(k),n=o($);return _.useEffect(()=>{e(C())},[e]),t.jsxs("div",{className:R.contacts,children:[t.jsx(N,{children:t.jsx(g,{children:t.jsx("title",{children:"Phonebook"})})}),t.jsx("h1",{children:"Phonebook"}),t.jsx(w,{}),t.jsx("h2",{children:"Contacts"}),t.jsx(E,{}),t.jsx(D,{}),c&&!n?t.jsx("p",{children:"Loading contacts..."}):t.jsx(J,{})]})};export{K as default};