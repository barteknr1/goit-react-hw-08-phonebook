import{g as k,t as O,c as W}from"./index-4dd42b0f.js";var te={exports:{}},ae="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",se=ae,ce=se;function re(){}function ne(){}ne.resetWarningCache=re;var ue=function(){function e(t,o,i,s,a,c){if(c!==ce){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function r(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:ne,resetWarningCache:re};return n.PropTypes=n,n};te.exports=ue();var le=te.exports;const f=k(le);var fe=typeof Element<"u",pe=typeof Map=="function",he=typeof Set=="function",de=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function j(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,t,o;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(t=n;t--!==0;)if(!j(e[t],r[t]))return!1;return!0}var i;if(pe&&e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(i=e.entries();!(t=i.next()).done;)if(!r.has(t.value[0]))return!1;for(i=e.entries();!(t=i.next()).done;)if(!j(t.value[1],r.get(t.value[0])))return!1;return!0}if(he&&e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(i=e.entries();!(t=i.next()).done;)if(!r.has(t.value[0]))return!1;return!0}if(de&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(n=e.length,n!=r.length)return!1;for(t=n;t--!==0;)if(e[t]!==r[t])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof r.valueOf=="function")return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof r.toString=="function")return e.toString()===r.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(r).length)return!1;for(t=n;t--!==0;)if(!Object.prototype.hasOwnProperty.call(r,o[t]))return!1;if(fe&&e instanceof Element)return!1;for(t=n;t--!==0;)if(!((o[t]==="_owner"||o[t]==="__v"||o[t]==="__o")&&e.$$typeof)&&!j(e[o[t]],r[o[t]]))return!1;return!0}return e!==e&&r!==r}var ye=function(r,n){try{return j(r,n)}catch(t){if((t.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw t}};const me=k(ye);var Te=function(e,r,n,t,o,i,s,a){if(!e){var c;if(r===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,t,o,i,s,a],d=0;c=new Error(r.replace(/%s/g,function(){return l[d++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},ge=Te;const G=k(ge);var ve=function(r,n,t,o){var i=t?t.call(o,r,n):void 0;if(i!==void 0)return!!i;if(r===n)return!0;if(typeof r!="object"||!r||typeof n!="object"||!n)return!1;var s=Object.keys(r),a=Object.keys(n);if(s.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),l=0;l<s.length;l++){var d=s[l];if(!c(d))return!1;var h=r[d],p=n[d];if(i=t?t.call(o,h,p,d):void 0,i===!1||i===void 0&&h!==p)return!1}return!0};const be=k(ve);function y(){return y=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},y.apply(this,arguments)}function V(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,z(e,r)}function z(e,r){return z=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},z(e,r)}function $(e,r){if(e==null)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r.indexOf(n=i[t])>=0||(o[n]=e[n]);return o}var u={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},Oe={rel:["amphtml","canonical","alternate"]},Ae={type:["application/ld+json"]},Ce={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},J=Object.keys(u).map(function(e){return u[e]}),M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Se=Object.keys(M).reduce(function(e,r){return e[M[r]]=r,e},{}),S=function(e,r){for(var n=e.length-1;n>=0;n-=1){var t=e[n];if(Object.prototype.hasOwnProperty.call(t,r))return t[r]}return null},Ee=function(e){var r=S(e,u.TITLE),n=S(e,"titleTemplate");if(Array.isArray(r)&&(r=r.join("")),n&&r)return n.replace(/%s/g,function(){return r});var t=S(e,"defaultTitle");return r||t||void 0},we=function(e){return S(e,"onChangeClientState")||function(){}},_=function(e,r){return r.filter(function(n){return n[e]!==void 0}).map(function(n){return n[e]}).reduce(function(n,t){return y({},n,t)},{})},Pe=function(e,r){return r.filter(function(n){return n[u.BASE]!==void 0}).map(function(n){return n[u.BASE]}).reverse().reduce(function(n,t){if(!n.length)for(var o=Object.keys(t),i=0;i<o.length;i+=1){var s=o[i].toLowerCase();if(e.indexOf(s)!==-1&&t[s])return n.concat(t)}return n},[])},w=function(e,r,n){var t={};return n.filter(function(o){return!!Array.isArray(o[e])||(o[e]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof o[e]+'"'),!1)}).map(function(o){return o[e]}).reverse().reduce(function(o,i){var s={};i.filter(function(h){for(var p,g=Object.keys(h),T=0;T<g.length;T+=1){var m=g[T],b=m.toLowerCase();r.indexOf(b)===-1||p==="rel"&&h[p].toLowerCase()==="canonical"||b==="rel"&&h[b].toLowerCase()==="stylesheet"||(p=b),r.indexOf(m)===-1||m!=="innerHTML"&&m!=="cssText"&&m!=="itemprop"||(p=m)}if(!p||!h[p])return!1;var A=h[p].toLowerCase();return t[p]||(t[p]={}),s[p]||(s[p]={}),!t[p][A]&&(s[p][A]=!0,!0)}).reverse().forEach(function(h){return o.push(h)});for(var a=Object.keys(s),c=0;c<a.length;c+=1){var l=a[c],d=y({},t[l],s[l]);t[l]=d}return o},[]).reverse()},xe=function(e,r){if(Array.isArray(e)&&e.length){for(var n=0;n<e.length;n+=1)if(e[n][r])return!0}return!1},oe=function(e){return Array.isArray(e)?e.join(""):e},q=function(e,r){return Array.isArray(e)?e.reduce(function(n,t){return function(o,i){for(var s=Object.keys(o),a=0;a<s.length;a+=1)if(i[s[a]]&&i[s[a]].includes(o[s[a]]))return!0;return!1}(t,r)?n.priority.push(t):n.default.push(t),n},{priority:[],default:[]}):{default:e}},Q=function(e,r){var n;return y({},e,((n={})[r]=void 0,n))},Ie=[u.NOSCRIPT,u.SCRIPT,u.STYLE],U=function(e,r){return r===void 0&&(r=!0),r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){return Object.keys(e).reduce(function(r,n){var t=e[n]!==void 0?n+'="'+e[n]+'"':""+n;return r?r+" "+t:t},"")},Z=function(e,r){return r===void 0&&(r={}),Object.keys(e).reduce(function(n,t){return n[M[t]||t]=e[t],n},r)},L=function(e,r){return r.map(function(n,t){var o,i=((o={key:t})["data-rh"]=!0,o);return Object.keys(n).forEach(function(s){var a=M[s]||s;a==="innerHTML"||a==="cssText"?i.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:i[a]=n[s]}),O.createElement(e,i)})},v=function(e,r,n){switch(e){case u.TITLE:return{toComponent:function(){return o=r.titleAttributes,(i={key:t=r.title})["data-rh"]=!0,s=Z(o,i),[O.createElement(u.TITLE,s,t)];var t,o,i,s},toString:function(){return function(t,o,i,s){var a=X(i),c=oe(o);return a?"<"+t+' data-rh="true" '+a+">"+U(c,s)+"</"+t+">":"<"+t+' data-rh="true">'+U(c,s)+"</"+t+">"}(e,r.title,r.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return Z(r)},toString:function(){return X(r)}};default:return{toComponent:function(){return L(e,r)},toString:function(){return function(t,o,i){return o.reduce(function(s,a){var c=Object.keys(a).filter(function(h){return!(h==="innerHTML"||h==="cssText")}).reduce(function(h,p){var g=a[p]===void 0?p:p+'="'+U(a[p],i)+'"';return h?h+" "+g:g},""),l=a.innerHTML||a.cssText||"",d=Ie.indexOf(t)===-1;return s+"<"+t+' data-rh="true" '+c+(d?"/>":">"+l+"</"+t+">")},"")}(e,r,n)}}}},B=function(e){var r=e.baseTag,n=e.bodyAttributes,t=e.encode,o=e.htmlAttributes,i=e.noscriptTags,s=e.styleTags,a=e.title,c=a===void 0?"":a,l=e.titleAttributes,d=e.linkTags,h=e.metaTags,p=e.scriptTags,g={toComponent:function(){},toString:function(){return""}};if(e.prioritizeSeoTags){var T=function(m){var b=m.linkTags,A=m.scriptTags,E=m.encode,N=q(m.metaTags,Ce),H=q(b,Oe),D=q(A,Ae);return{priorityMethods:{toComponent:function(){return[].concat(L(u.META,N.priority),L(u.LINK,H.priority),L(u.SCRIPT,D.priority))},toString:function(){return v(u.META,N.priority,E)+" "+v(u.LINK,H.priority,E)+" "+v(u.SCRIPT,D.priority,E)}},metaTags:N.default,linkTags:H.default,scriptTags:D.default}}(e);g=T.priorityMethods,d=T.linkTags,h=T.metaTags,p=T.scriptTags}return{priority:g,base:v(u.BASE,r,t),bodyAttributes:v("bodyAttributes",n,t),htmlAttributes:v("htmlAttributes",o,t),link:v(u.LINK,d,t),meta:v(u.META,h,t),noscript:v(u.NOSCRIPT,i,t),script:v(u.SCRIPT,p,t),style:v(u.STYLE,s,t),title:v(u.TITLE,{title:c,titleAttributes:l},t)}},I=[],K=function(e,r){var n=this;r===void 0&&(r=typeof document<"u"),this.instances=[],this.value={setHelmet:function(t){n.context.helmet=t},helmetInstances:{get:function(){return n.canUseDOM?I:n.instances},add:function(t){(n.canUseDOM?I:n.instances).push(t)},remove:function(t){var o=(n.canUseDOM?I:n.instances).indexOf(t);(n.canUseDOM?I:n.instances).splice(o,1)}}},this.context=e,this.canUseDOM=r,r||(e.helmet=B({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},ie=O.createContext({}),je=f.shape({setHelmet:f.func,helmetInstances:f.shape({get:f.func,add:f.func,remove:f.func})}),Le=typeof document<"u",x=function(e){function r(n){var t;return(t=e.call(this,n)||this).helmetData=new K(t.props.context,r.canUseDOM),t}return V(r,e),r.prototype.render=function(){return O.createElement(ie.Provider,{value:this.helmetData.value},this.props.children)},r}(W.Component);x.canUseDOM=Le,x.propTypes={context:f.shape({helmet:f.shape()}),children:f.node.isRequired},x.defaultProps={context:{}},x.displayName="HelmetProvider";var C=function(e,r){var n,t=document.head||document.querySelector(u.HEAD),o=t.querySelectorAll(e+"[data-rh]"),i=[].slice.call(o),s=[];return r&&r.length&&r.forEach(function(a){var c=document.createElement(e);for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(l==="innerHTML"?c.innerHTML=a.innerHTML:l==="cssText"?c.styleSheet?c.styleSheet.cssText=a.cssText:c.appendChild(document.createTextNode(a.cssText)):c.setAttribute(l,a[l]===void 0?"":a[l]));c.setAttribute("data-rh","true"),i.some(function(d,h){return n=h,c.isEqualNode(d)})?i.splice(n,1):s.push(c)}),i.forEach(function(a){return a.parentNode.removeChild(a)}),s.forEach(function(a){return t.appendChild(a)}),{oldTags:i,newTags:s}},Y=function(e,r){var n=document.getElementsByTagName(e)[0];if(n){for(var t=n.getAttribute("data-rh"),o=t?t.split(","):[],i=[].concat(o),s=Object.keys(r),a=0;a<s.length;a+=1){var c=s[a],l=r[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var d=i.indexOf(c);d!==-1&&i.splice(d,1)}for(var h=i.length-1;h>=0;h-=1)n.removeAttribute(i[h]);o.length===i.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==s.join(",")&&n.setAttribute("data-rh",s.join(","))}},ee=function(e,r){var n=e.baseTag,t=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,a=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,d=e.title,h=e.titleAttributes;Y(u.BODY,e.bodyAttributes),Y(u.HTML,t),function(m,b){m!==void 0&&document.title!==m&&(document.title=oe(m)),Y(u.TITLE,b)}(d,h);var p={baseTag:C(u.BASE,n),linkTags:C(u.LINK,o),metaTags:C(u.META,i),noscriptTags:C(u.NOSCRIPT,s),scriptTags:C(u.SCRIPT,c),styleTags:C(u.STYLE,l)},g={},T={};Object.keys(p).forEach(function(m){var b=p[m],A=b.newTags,E=b.oldTags;A.length&&(g[m]=A),E.length&&(T[m]=p[m].oldTags)}),r&&r(),a(e,g,T)},P=null,R=function(e){function r(){for(var t,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))||this).rendered=!1,t}V(r,e);var n=r.prototype;return n.shouldComponentUpdate=function(t){return!be(t,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var t,o,i=this.props.context,s=i.setHelmet,a=null,c=(t=i.helmetInstances.get().map(function(l){var d=y({},l.props);return delete d.context,d}),{baseTag:Pe(["href"],t),bodyAttributes:_("bodyAttributes",t),defer:S(t,"defer"),encode:S(t,"encodeSpecialCharacters"),htmlAttributes:_("htmlAttributes",t),linkTags:w(u.LINK,["rel","href"],t),metaTags:w(u.META,["name","charset","http-equiv","property","itemprop"],t),noscriptTags:w(u.NOSCRIPT,["innerHTML"],t),onChangeClientState:we(t),scriptTags:w(u.SCRIPT,["src","innerHTML"],t),styleTags:w(u.STYLE,["cssText"],t),title:Ee(t),titleAttributes:_("titleAttributes",t),prioritizeSeoTags:xe(t,"prioritizeSeoTags")});x.canUseDOM?(o=c,P&&cancelAnimationFrame(P),o.defer?P=requestAnimationFrame(function(){ee(o,function(){P=null})}):(ee(o),P=null)):B&&(a=B(c)),s(a)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},r}(W.Component);R.propTypes={context:je.isRequired},R.displayName="HelmetDispatcher";var Me=["children"],Re=["children"],F=function(e){function r(){return e.apply(this,arguments)||this}V(r,e);var n=r.prototype;return n.shouldComponentUpdate=function(t){return!me(Q(this.props,"helmetData"),Q(t,"helmetData"))},n.mapNestedChildrenToProps=function(t,o){if(!o)return null;switch(t.type){case u.SCRIPT:case u.NOSCRIPT:return{innerHTML:o};case u.STYLE:return{cssText:o};default:throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(t){var o,i=t.child,s=t.arrayTypeChildren;return y({},s,((o={})[i.type]=[].concat(s[i.type]||[],[y({},t.newChildProps,this.mapNestedChildrenToProps(i,t.nestedChildren))]),o))},n.mapObjectTypeChildren=function(t){var o,i,s=t.child,a=t.newProps,c=t.newChildProps,l=t.nestedChildren;switch(s.type){case u.TITLE:return y({},a,((o={})[s.type]=l,o.titleAttributes=y({},c),o));case u.BODY:return y({},a,{bodyAttributes:y({},c)});case u.HTML:return y({},a,{htmlAttributes:y({},c)});default:return y({},a,((i={})[s.type]=y({},c),i))}},n.mapArrayTypeChildrenToProps=function(t,o){var i=y({},o);return Object.keys(t).forEach(function(s){var a;i=y({},i,((a={})[s]=t[s],a))}),i},n.warnOnInvalidChildren=function(t,o){return G(J.some(function(i){return t.type===i}),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+J.join(", ")+" are allowed. Helmet does not support rendering <"+t.type+"> elements. Refer to our API for more information."),G(!o||typeof o=="string"||Array.isArray(o)&&!o.some(function(i){return typeof i!="string"}),"Helmet expects a string as a child of <"+t.type+">. Did you forget to wrap your children in braces? ( <"+t.type+">{``}</"+t.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(t,o){var i=this,s={};return O.Children.forEach(t,function(a){if(a&&a.props){var c=a.props,l=c.children,d=$(c,Me),h=Object.keys(d).reduce(function(g,T){return g[Se[T]||T]=d[T],g},{}),p=a.type;switch(typeof p=="symbol"?p=p.toString():i.warnOnInvalidChildren(a,l),p){case u.FRAGMENT:o=i.mapChildrenToProps(l,o);break;case u.LINK:case u.META:case u.NOSCRIPT:case u.SCRIPT:case u.STYLE:s=i.flattenArrayTypeChildren({child:a,arrayTypeChildren:s,newChildProps:h,nestedChildren:l});break;default:o=i.mapObjectTypeChildren({child:a,newProps:o,newChildProps:h,nestedChildren:l})}}}),this.mapArrayTypeChildrenToProps(s,o)},n.render=function(){var t=this.props,o=t.children,i=$(t,Re),s=y({},i),a=i.helmetData;return o&&(s=this.mapChildrenToProps(o,s)),!a||a instanceof K||(a=new K(a.context,a.instances)),a?O.createElement(R,y({},s,{context:a.value,helmetData:void 0})):O.createElement(ie.Consumer,null,function(c){return O.createElement(R,y({},s,{context:c}))})},r}(W.Component);F.propTypes={base:f.object,bodyAttributes:f.object,children:f.oneOfType([f.arrayOf(f.node),f.node]),defaultTitle:f.string,defer:f.bool,encodeSpecialCharacters:f.bool,htmlAttributes:f.object,link:f.arrayOf(f.object),meta:f.arrayOf(f.object),noscript:f.arrayOf(f.object),onChangeClientState:f.func,script:f.arrayOf(f.object),style:f.arrayOf(f.object),title:f.string,titleAttributes:f.object,titleTemplate:f.string,prioritizeSeoTags:f.bool,helmetData:f.object},F.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},F.displayName="Helmet";export{F as W,x as q};
