(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="164",ks={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yg=0,pu=1,Mg=2,Sd=1,Td=2,Li=3,rs=0,mn=1,Di=2,ns=0,po=1,mu=2,gu=3,_u=4,Sg=5,As=100,Tg=101,Eg=102,Ag=103,Ng=104,wg=200,bg=201,Rg=202,Cg=203,Zc=204,Jc=205,Lg=206,Pg=207,Ig=208,Dg=209,Ug=210,Og=211,Fg=212,Vg=213,zg=214,Bg=0,Hg=1,kg=2,sa=3,Gg=4,Wg=5,Xg=6,qg=7,Sa=0,Yg=1,jg=2,Xn=0,Ed=1,Ad=2,Nd=3,wd=4,$g=5,bd=6,Kg=7,Rd=300,Eo=301,Ao=302,Qc=303,el=304,Ta=306,wn=1e3,bs=1001,tl=1002,fn=1003,Zg=1004,wr=1005,ti=1006,Za=1007,Qi=1008,as=1009,Jg=1010,Qg=1011,Cd=1012,Ld=1013,No=1014,Ui=1015,pr=1016,Pd=1017,Id=1018,mr=1020,e_=35902,t_=1021,n_=1022,_i=1023,i_=1024,s_=1025,mo=1026,rr=1027,o_=1028,Dd=1029,r_=1030,Ud=1031,Od=1033,Ja=33776,Qa=33777,ec=33778,tc=33779,vu=35840,xu=35841,yu=35842,Mu=35843,Su=36196,Tu=37492,Eu=37496,Au=37808,Nu=37809,wu=37810,bu=37811,Ru=37812,Cu=37813,Lu=37814,Pu=37815,Iu=37816,Du=37817,Uu=37818,Ou=37819,Fu=37820,Vu=37821,nc=36492,zu=36494,Bu=36495,a_=36283,Hu=36284,ku=36285,Gu=36286,c_=3200,l_=3201,Cs=0,Fd=1,Ji="",hn="srgb",li="srgb-linear",Al="display-p3",Ea="display-p3-linear",oa="linear",At="srgb",ra="rec709",aa="p3",Ws=7680,Wu=519,u_=512,Vd=513,h_=514,zd=515,d_=516,f_=517,p_=518,m_=519,ca=35044,nl=35048,Xu="300 es",ii=2e3,wo=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qu=1234567;const tr=Math.PI/180,bo=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function Nl(i,e){return(i%e+e)%e}function g_(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function __(i,e,t){return i!==e?(t-i)/(e-i):0}function nr(i,e,t){return(1-t)*i+t*e}function v_(i,e,t,n){return nr(i,e,1-Math.exp(-t*n))}function x_(i,e=1){return e-Math.abs(Nl(i,e*2)-e)}function y_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function M_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function S_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function T_(i,e){return i+Math.random()*(e-i)}function E_(i){return i*(.5-Math.random())}function A_(i){i!==void 0&&(qu=i);let e=qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function N_(i){return i*tr}function w_(i){return i*bo}function b_(i){return(i&i-1)===0&&i!==0}function R_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function C_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function L_(i,e,t,n,s){const o=Math.cos,r=Math.sin,a=o(t/2),c=r(t/2),l=o((e+n)/2),u=r((e+n)/2),h=o((e-n)/2),d=r((e-n)/2),m=o((n-e)/2),g=r((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const wl={DEG2RAD:tr,RAD2DEG:bo,generateUUID:Oi,clamp:en,euclideanModulo:Nl,mapLinear:g_,inverseLerp:__,lerp:nr,damp:v_,pingpong:x_,smoothstep:y_,smootherstep:M_,randInt:S_,randFloat:T_,randFloatSpread:E_,seededRandom:A_,degToRad:N_,radToDeg:w_,isPowerOfTwo:b_,ceilPowerOfTwo:R_,floorPowerOfTwo:C_,setQuaternionFromProperEuler:L_,normalize:ft,denormalize:ni};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*s+e.x,this.y=o*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,s,o,r,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,c,l)}set(e,t,n,s,o,r,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=s[0],p=s[3],f=s[6],E=s[1],y=s[4],A=s[7],D=s[2],R=s[5],N=s[8];return o[0]=r*_+a*E+c*D,o[3]=r*p+a*y+c*R,o[6]=r*f+a*A+c*N,o[1]=l*_+u*E+h*D,o[4]=l*p+u*y+h*R,o[7]=l*f+u*A+h*N,o[2]=d*_+m*E+g*D,o[5]=d*p+m*y+g*R,o[8]=d*f+m*A+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*a*l-n*o*u+n*a*c+s*o*l-s*r*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*r-a*l,d=a*c-u*o,m=l*o-r*c,g=t*h+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*r)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*o-a*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(r*t-n*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+e,-s*l,s*c,-s*(-l*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ic.makeScale(e,t)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ic=new Xe;function Bd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function P_(){const i=ar("canvas");return i.style.display="block",i}const Yu={};function Hd(i){i in Yu||(Yu[i]=!0,console.warn(i))}const ju=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$u=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),br={[li]:{transfer:oa,primaries:ra,toReference:i=>i,fromReference:i=>i},[hn]:{transfer:At,primaries:ra,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ea]:{transfer:oa,primaries:aa,toReference:i=>i.applyMatrix3($u),fromReference:i=>i.applyMatrix3(ju)},[Al]:{transfer:At,primaries:aa,toReference:i=>i.convertSRGBToLinear().applyMatrix3($u),fromReference:i=>i.applyMatrix3(ju).convertLinearToSRGB()}},I_=new Set([li,Ea]),vt={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!I_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=br[e].toReference,s=br[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return br[i].primaries},getTransfer:function(i){return i===Ji?oa:br[i].transfer}};function go(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xs;class D_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=ar("canvas")),Xs.width=e.width,Xs.height=e.height;const n=Xs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=go(o[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(go(t[n]/255)*255):t[n]=go(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U_=0;class kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(oc(s[r].image)):o.push(oc(s[r]))}else o=oc(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function oc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?D_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let O_=0;class gn extends zi{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,n=bs,s=bs,o=ti,r=Qi,a=_i,c=as,l=gn.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Oi(),this.name="",this.source=new kd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case bs:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case bs:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Rd;gn.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,A=(m+1)/2,D=(f+1)/2,R=(u+d)/4,N=(h+_)/4,z=(g+p)/4;return y>A&&y>D?y<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(y),s=R/n,o=N/n):A>D?A<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(A),n=R/s,o=z/s):D<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(D),n=N/o,s=z/o),this.set(n,s,o,t),this}let E=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cs extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new gn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends cs{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bl extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class F_ extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,r,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=o[r+0],m=o[r+1],g=o[r+2],_=o[r+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==m||u!==g){let p=1-a;const f=c*d+l*m+u*g+h*_,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const D=Math.sqrt(y),R=Math.atan2(D,f*E);p=Math.sin(p*R)/D,a=Math.sin(a*R)/D}const A=a*E;if(c=c*p+d*A,l=l*p+m*A,u=u*p+g*A,h=h*p+_*A,p===1-a){const D=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=D,l*=D,u*=D,h*=D}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=o[r],d=o[r+1],m=o[r+2],g=o[r+3];return e[t]=a*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-a*m,e[t+2]=l*g+u*m+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(o/2),d=c(n/2),m=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],r=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(o-l)*m,this._z=(r-s)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(o+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(o-l)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(r-s)/m,this._x=(o+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,r=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-n*l,this._z=o*u+r*l+n*c-s*a,this._w=r*u-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+n*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,r=e.y,a=e.z,c=e.w,l=2*(r*s-a*n),u=2*(a*t-o*s),h=2*(o*n-r*t);return this.x=t+c*l+r*h-a*u,this.y=n+c*u+a*l-o*h,this.z=s+c*h+o*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,r=t.x,a=t.y,c=t.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rc.copy(this).projectOnVector(e),this.sub(rc)}reflect(e){return this.sub(rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rc=new P,Ku=new Ps;class gr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Zn):Zn.fromBufferAttribute(o,r),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Cr.subVectors(this.max,qo),qs.subVectors(e.a,qo),Ys.subVectors(e.b,qo),js.subVectors(e.c,qo),Xi.subVectors(Ys,qs),qi.subVectors(js,Ys),ms.subVectors(qs,js);let t=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-ms.z,ms.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,ms.z,0,-ms.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-ms.y,ms.x,0];return!ac(t,qs,Ys,js,Cr)||(t=[1,0,0,0,1,0,0,0,1],!ac(t,qs,Ys,js,Cr))?!1:(Lr.crossVectors(Xi,qi),t=[Lr.x,Lr.y,Lr.z],ac(t,qs,Ys,js,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new P,new P,new P,new P,new P,new P,new P,new P],Zn=new P,Rr=new gr,qs=new P,Ys=new P,js=new P,Xi=new P,qi=new P,ms=new P,qo=new P,Cr=new P,Lr=new P,gs=new P;function ac(i,e,t,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){gs.fromArray(i,o);const a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=e.dot(gs),l=t.dot(gs),u=n.dot(gs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const V_=new gr,Yo=new P,cc=new P;class Rl{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):V_.setFromPoints(e).getCenter(n);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const t=Yo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Yo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(cc)),this.expandByPoint(Yo.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new P,lc=new P,Pr=new P,Yi=new P,uc=new P,Ir=new P,hc=new P;class Gd{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){lc.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(lc);const o=e.distanceTo(t)*.5,r=-this.direction.dot(Pr),a=Yi.dot(this.direction),c=-Yi.dot(Pr),l=Yi.lengthSq(),u=Math.abs(1-r*r);let h,d,m,g;if(u>0)if(h=r*c-a,d=r*a-c,g=o*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+r*d+2*a)+d*(r*h+d+2*c)+l}else d=o,h=Math.max(0,-(r*d+a)),m=-h*h+d*(d+2*c)+l;else d=-o,h=Math.max(0,-(r*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-r*o+a)),d=h>0?-o:Math.min(Math.max(-o,-c),o),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-o,-c),o),m=d*(d+2*c)+l):(h=Math.max(0,-(r*o+a)),d=h>0?o:Math.min(Math.max(-o,-c),o),m=-h*h+d*(d+2*c)+l);else d=r>0?-o:o,h=Math.max(0,-(r*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(lc).addScaledVector(Pr,d),m}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const n=wi.dot(this.direction),s=wi.dot(wi)-n*n,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(o=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,s,o){uc.subVectors(t,e),Ir.subVectors(n,e),hc.crossVectors(uc,Ir);let r=this.direction.dot(hc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Yi.subVectors(this.origin,e);const c=a*this.direction.dot(Ir.crossVectors(Yi,Ir));if(c<0)return null;const l=a*this.direction.dot(uc.cross(Yi));if(l<0||c+l>r)return null;const u=-a*Yi.dot(hc);return u<0?null:this.at(u/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,n,s,o,r,a,c,l,u,h,d,m,g,_,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,c,l,u,h,d,m,g,_,p)}set(e,t,n,s,o,r,a,c,l,u,h,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=o,f[5]=r,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),o=1/$s.setFromMatrixColumn(e,1).length(),r=1/$s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=r*u,m=r*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=r*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-m,t[8]=r*l,t[1]=r*h,t[5]=r*u,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=r*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-r*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=r*u,t[9]=_-d*a,t[2]=-r*l,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const d=r*u,m=r*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const d=r*c,m=r*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+m,t[1]=h,t[5]=r*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=r*c,m=r*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=r*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z_,e,B_)}lookAt(e,t,n){const s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),ji.crossVectors(n,Cn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),ji.crossVectors(n,Cn)),ji.normalize(),Dr.crossVectors(Cn,ji),s[0]=ji.x,s[4]=Dr.x,s[8]=Cn.x,s[1]=ji.y,s[5]=Dr.y,s[9]=Cn.y,s[2]=ji.z,s[6]=Dr.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],E=n[3],y=n[7],A=n[11],D=n[15],R=s[0],N=s[4],z=s[8],S=s[12],x=s[1],H=s[5],j=s[9],L=s[13],Q=s[2],ee=s[6],re=s[10],ce=s[14],$=s[3],ue=s[7],le=s[11],we=s[15];return o[0]=r*R+a*x+c*Q+l*$,o[4]=r*N+a*H+c*ee+l*ue,o[8]=r*z+a*j+c*re+l*le,o[12]=r*S+a*L+c*ce+l*we,o[1]=u*R+h*x+d*Q+m*$,o[5]=u*N+h*H+d*ee+m*ue,o[9]=u*z+h*j+d*re+m*le,o[13]=u*S+h*L+d*ce+m*we,o[2]=g*R+_*x+p*Q+f*$,o[6]=g*N+_*H+p*ee+f*ue,o[10]=g*z+_*j+p*re+f*le,o[14]=g*S+_*L+p*ce+f*we,o[3]=E*R+y*x+A*Q+D*$,o[7]=E*N+y*H+A*ee+D*ue,o[11]=E*z+y*j+A*re+D*le,o[15]=E*S+y*L+A*ce+D*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],r=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+o*c*h-s*l*h-o*a*d+n*l*d+s*a*m-n*c*m)+_*(+t*c*m-t*l*d+o*r*d-s*r*m+s*l*u-o*c*u)+p*(+t*l*h-t*a*m-o*r*h+n*r*m+o*a*u-n*l*u)+f*(-s*a*u-t*c*h+t*a*d+s*r*h-n*r*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],E=h*p*l-_*d*l+_*c*m-a*p*m-h*c*f+a*d*f,y=g*d*l-u*p*l-g*c*m+r*p*m+u*c*f-r*d*f,A=u*_*l-g*h*l+g*a*m-r*_*m-u*a*f+r*h*f,D=g*h*c-u*_*c-g*a*d+r*_*d+u*a*p-r*h*p,R=t*E+n*y+s*A+o*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=E*N,e[1]=(_*d*o-h*p*o-_*s*m+n*p*m+h*s*f-n*d*f)*N,e[2]=(a*p*o-_*c*o+_*s*l-n*p*l-a*s*f+n*c*f)*N,e[3]=(h*c*o-a*d*o-h*s*l+n*d*l+a*s*m-n*c*m)*N,e[4]=y*N,e[5]=(u*p*o-g*d*o+g*s*m-t*p*m-u*s*f+t*d*f)*N,e[6]=(g*c*o-r*p*o-g*s*l+t*p*l+r*s*f-t*c*f)*N,e[7]=(r*d*o-u*c*o+u*s*l-t*d*l-r*s*m+t*c*m)*N,e[8]=A*N,e[9]=(g*h*o-u*_*o-g*n*m+t*_*m+u*n*f-t*h*f)*N,e[10]=(r*_*o-g*a*o+g*n*l-t*_*l-r*n*f+t*a*f)*N,e[11]=(u*a*o-r*h*o-u*n*l+t*h*l+r*n*m-t*a*m)*N,e[12]=D*N,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*p+t*h*p)*N,e[14]=(g*a*s-r*_*s-g*n*c+t*_*c+r*n*p-t*a*p)*N,e[15]=(r*h*s-u*a*s+u*n*c-t*h*c-r*n*d+t*a*d)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,r=e.x,a=e.y,c=e.z,l=o*r,u=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,r){return this.set(1,n,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,r=t._y,a=t._z,c=t._w,l=o+o,u=r+r,h=a+a,d=o*l,m=o*u,g=o*h,_=r*u,p=r*h,f=a*h,E=c*l,y=c*u,A=c*h,D=n.x,R=n.y,N=n.z;return s[0]=(1-(_+f))*D,s[1]=(m+A)*D,s[2]=(g-y)*D,s[3]=0,s[4]=(m-A)*R,s[5]=(1-(d+f))*R,s[6]=(p+E)*R,s[7]=0,s[8]=(g+y)*N,s[9]=(p-E)*N,s[10]=(1-(d+_))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=$s.set(s[0],s[1],s[2]).length();const r=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Jn.copy(this);const l=1/o,u=1/r,h=1/a;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,t.setFromRotationMatrix(Jn),n.x=o,n.y=r,n.z=a,this}makePerspective(e,t,n,s,o,r,a=ii){const c=this.elements,l=2*o/(t-e),u=2*o/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let m,g;if(a===ii)m=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===wo)m=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,o,r,a=ii){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(r-o),d=(t+e)*l,m=(n+s)*u;let g,_;if(a===ii)g=(r+o)*h,_=-2*h;else if(a===wo)g=o*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $s=new P,Jn=new Rt,z_=new P(0,0,0),B_=new P(1,1,1),ji=new P,Dr=new P,Cn=new P,Zu=new Rt,Ju=new Ps;class jn{constructor(e=0,t=0,n=0,s=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-en(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Wd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H_=0;const Qu=new P,Ks=new Ps,bi=new Rt,Ur=new P,jo=new P,k_=new P,G_=new Ps,eh=new P(1,0,0),th=new P(0,1,0),nh=new P(0,0,1),ih={type:"added"},W_={type:"removed"},Zs={type:"childadded",child:null},dc={type:"childremoved",child:null};class Yt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new P,t=new jn,n=new Ps,s=new P(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Xe}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(eh,e)}rotateY(e){return this.rotateOnAxis(th,e)}rotateZ(e){return this.rotateOnAxis(nh,e)}translateOnAxis(e,t){return Qu.copy(e).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eh,e)}translateY(e){return this.translateOnAxis(th,e)}translateZ(e){return this.translateOnAxis(nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ur.copy(e):Ur.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(jo,Ur,this.up):bi.lookAt(Ur,jo,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(bi),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ih),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(W_),dc.child=e,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ih),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,k_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,G_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++){const a=s[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(e.shapes,h)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),h=r(e.shapes),d=r(e.skeletons),m=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new P(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new P,Ri=new P,fc=new P,Ci=new P,Js=new P,Qs=new P,sh=new P,pc=new P,mc=new P,gc=new P;class gi{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Qn.subVectors(e,t),s.cross(Qn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Qn.subVectors(s,t),Ri.subVectors(n,t),fc.subVectors(e,t);const r=Qn.dot(Qn),a=Qn.dot(Ri),c=Qn.dot(fc),l=Ri.dot(Ri),u=Ri.dot(fc),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,m=(l*c-a*u)*d,g=(r*u-a*c)*d;return o.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,s,o,r,a,c){return this.getBarycoord(e,t,n,s,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ci.x),c.addScaledVector(r,Ci.y),c.addScaledVector(a,Ci.z),c)}static isFrontFacing(e,t,n,s){return Qn.subVectors(n,t),Ri.subVectors(e,t),Qn.cross(Ri).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Qn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return gi.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let r,a;Js.subVectors(s,n),Qs.subVectors(o,n),pc.subVectors(e,n);const c=Js.dot(pc),l=Qs.dot(pc);if(c<=0&&l<=0)return t.copy(n);mc.subVectors(e,s);const u=Js.dot(mc),h=Qs.dot(mc);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(n).addScaledVector(Js,r);gc.subVectors(e,o);const m=Js.dot(gc),g=Qs.dot(gc);if(g>=0&&m<=g)return t.copy(o);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Qs,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return sh.subVectors(o,s),a=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(sh,a);const f=1/(p+_+d);return r=_*f,a=d*f,t.copy(n).addScaledVector(Js,r).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Or={h:0,s:0,l:0};function _c(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=Nl(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=_c(r,o,e+1/3),this.g=_c(r,o,e),this.b=_c(r,o,e-1/3)}return vt.toWorkingColorSpace(this,s),this}setStyle(e,t=hn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=Xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}copyLinearToSRGB(e){return this.r=sc(e.r),this.g=sc(e.g),this.b=sc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return vt.fromWorkingColorSpace(un.copy(this),e),Math.round(en(un.r*255,0,255))*65536+Math.round(en(un.g*255,0,255))*256+Math.round(en(un.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(un.copy(this),t);const n=un.r,s=un.g,o=un.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case n:c=(s-o)/h+(s<o?6:0);break;case s:c=(o-n)/h+2;break;case o:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=hn){vt.fromWorkingColorSpace(un.copy(this),e);const t=un.r,n=un.g,s=un.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Or);const n=nr($i.h,Or.h,t),s=nr($i.s,Or.s,t),o=nr($i.l,Or.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Oe;Oe.NAMES=Xd;let X_=0;class Vn extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=po,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(n.blending=this.blending),this.side!==rs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Jc&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cl extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new P,Fr=new Se;class qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),o=ft(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ca&&(e.usage=this.usage),e}}class qd extends qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yd extends qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yn extends qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let q_=0;const kn=new Rt,vc=new Yt,eo=new P,Ln=new gr,$o=new gr,Zt=new P;class Bi extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bd(e)?Yd:qd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Xe().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Yn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Ln.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Ln.min,$o.min),Ln.expandByPoint(Zt),Zt.addVectors(Ln.max,$o.max),Ln.expandByPoint(Zt)):(Ln.expandByPoint($o.min),Ln.expandByPoint($o.max))}Ln.getCenter(n);let s=0;for(let o=0,r=e.count;o<r;o++)Zt.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Zt.fromBufferAttribute(a,l),c&&(eo.fromBufferAttribute(e,l),Zt.add(eo)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<n.count;z++)a[z]=new P,c[z]=new P;const l=new P,u=new P,h=new P,d=new Se,m=new Se,g=new Se,_=new P,p=new P;function f(z,S,x){l.fromBufferAttribute(n,z),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),d.fromBufferAttribute(o,z),m.fromBufferAttribute(o,S),g.fromBufferAttribute(o,x),u.sub(l),h.sub(l),m.sub(d),g.sub(d);const H=1/(m.x*g.y-g.x*m.y);isFinite(H)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(H),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(H),a[z].add(_),a[S].add(_),a[x].add(_),c[z].add(p),c[S].add(p),c[x].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let z=0,S=E.length;z<S;++z){const x=E[z],H=x.start,j=x.count;for(let L=H,Q=H+j;L<Q;L+=3)f(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new P,A=new P,D=new P,R=new P;function N(z){D.fromBufferAttribute(s,z),R.copy(D);const S=a[z];y.copy(S),y.sub(D.multiplyScalar(D.dot(S))).normalize(),A.crossVectors(R,S);const H=A.dot(c[z])<0?-1:1;r.setXYZW(z,y.x,y.y,y.z,H)}for(let z=0,S=E.length;z<S;++z){const x=E[z],H=x.start,j=x.count;for(let L=H,Q=H+j;L<Q;L+=3)N(e.getX(L+0)),N(e.getX(L+1)),N(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new P,o=new P,r=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[m++]}return new qn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bi,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const o=e.morphAttributes;for(const l in o){const u=[],h=o[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oh=new Rt,_s=new Gd,Vr=new Rl,rh=new P,to=new P,no=new P,io=new P,xc=new P,zr=new P,Br=new Se,Hr=new Se,kr=new Se,ah=new P,ch=new P,lh=new P,Gr=new P,Wr=new P;class pn extends Yt{constructor(e=new Bi,t=new Cl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){zr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(xc.fromBufferAttribute(h,e),r?zr.addScaledVector(xc,u):zr.addScaledVector(xc.sub(t),u))}t.add(zr)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(o),_s.copy(e.ray).recast(e.near),!(Vr.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Vr,rh)===null||_s.origin.distanceToSquared(rh)>(e.far-e.near)**2))&&(oh.copy(o).invert(),_s.copy(e.ray).applyMatrix4(oh),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=r[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let A=E,D=y;A<D;A+=3){const R=a.getX(A),N=a.getX(A+1),z=a.getX(A+2);s=Xr(this,f,e,n,l,u,h,R,N,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const E=a.getX(p),y=a.getX(p+1),A=a.getX(p+2);s=Xr(this,r,e,n,l,u,h,E,y,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=r[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=E,D=y;A<D;A+=3){const R=A,N=A+1,z=A+2;s=Xr(this,f,e,n,l,u,h,R,N,z),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const E=p,y=p+1,A=p+2;s=Xr(this,r,e,n,l,u,h,E,y,A),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Y_(i,e,t,n,s,o,r,a){let c;if(e.side===mn?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,e.side===rs,a),c===null)return null;Wr.copy(a),Wr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Wr);return l<t.near||l>t.far?null:{distance:l,point:Wr.clone(),object:i}}function Xr(i,e,t,n,s,o,r,a,c,l){i.getVertexPosition(a,to),i.getVertexPosition(c,no),i.getVertexPosition(l,io);const u=Y_(i,e,t,n,to,no,io,Gr);if(u){s&&(Br.fromBufferAttribute(s,a),Hr.fromBufferAttribute(s,c),kr.fromBufferAttribute(s,l),u.uv=gi.getInterpolation(Gr,to,no,io,Br,Hr,kr,new Se)),o&&(Br.fromBufferAttribute(o,a),Hr.fromBufferAttribute(o,c),kr.fromBufferAttribute(o,l),u.uv1=gi.getInterpolation(Gr,to,no,io,Br,Hr,kr,new Se)),r&&(ah.fromBufferAttribute(r,a),ch.fromBufferAttribute(r,c),lh.fromBufferAttribute(r,l),u.normal=gi.getInterpolation(Gr,to,no,io,ah,ch,lh,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new P,materialIndex:0};gi.getNormal(to,no,io,h.normal),u.face=h}return u}class fs extends Bi{constructor(e=1,t=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,r,o,0),g("z","y","x",1,-1,n,t,-e,r,o,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,o,4),g("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new Yn(l,3)),this.setAttribute("normal",new Yn(u,3)),this.setAttribute("uv",new Yn(h,2));function g(_,p,f,E,y,A,D,R,N,z,S){const x=A/N,H=D/z,j=A/2,L=D/2,Q=R/2,ee=N+1,re=z+1;let ce=0,$=0;const ue=new P;for(let le=0;le<re;le++){const we=le*H-L;for(let et=0;et<ee;et++){const dt=et*x-j;ue[_]=dt*E,ue[p]=we*y,ue[f]=Q,l.push(ue.x,ue.y,ue.z),ue[_]=0,ue[p]=0,ue[f]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(et/N),h.push(1-le/z),ce+=1}}for(let le=0;le<z;le++)for(let we=0;we<N;we++){const et=d+we+ee*le,dt=d+we+ee*(le+1),J=d+(we+1)+ee*(le+1),he=d+(we+1)+ee*le;c.push(et,dt,he),c.push(dt,J,he),$+=6}a.addGroup(m,$,S),m+=$,d+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ro(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function xn(i){const e={};for(let t=0;t<i.length;t++){const n=Ro(i[t]);for(const s in n)e[s]=n[s]}return e}function j_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const $d={clone:Ro,merge:xn};var $_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$_,this.fragmentShader=K_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=j_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kd extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new P,uh=new Se,hh=new Se;class En extends Kd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,uh,hh),t.subVectors(hh,uh)}setViewOffset(e,t,n,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,t-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,oo=1;class Z_ extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(so,oo,e,t);s.layers=this.layers,this.add(s);const o=new En(so,oo,e,t);o.layers=this.layers,this.add(o);const r=new En(so,oo,e,t);r.layers=this.layers,this.add(r);const a=new En(so,oo,e,t);a.layers=this.layers,this.add(a);const c=new En(so,oo,e,t);c.layers=this.layers,this.add(c);const l=new En(so,oo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,r,a,c]=t;for(const l of t)this.remove(l);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zd extends gn{constructor(e,t,n,s,o,r,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Eo,super(e,t,n,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class J_ extends Ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fs(5,5,5),o=new xi({name:"CubemapFromEquirect",uniforms:Ro(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ns});o.uniforms.tEquirect.value=t;const r=new pn(s,o),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=ti),new Z_(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(o)}}const yc=new P,Q_=new P,e0=new Xe;class Pi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=yc.subVectors(n,t).cross(Q_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||e0.getNormalMatrix(e),s=this.coplanarPoint(yc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Rl,qr=new P;class Ll{constructor(e=new Pi,t=new Pi,n=new Pi,s=new Pi,o=new Pi,r=new Pi){this.planes=[e,t,n,s,o,r]}set(e,t,n,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){const n=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],E=s[13],y=s[14],A=s[15];if(n[0].setComponents(c-o,d-l,p-m,A-f).normalize(),n[1].setComponents(c+o,d+l,p+m,A+f).normalize(),n[2].setComponents(c+r,d+u,p+g,A+E).normalize(),n[3].setComponents(c-r,d-u,p-g,A-E).normalize(),n[4].setComponents(c-a,d-h,p-_,A-y).normalize(),t===ii)n[5].setComponents(c+a,d+h,p+_,A+y).normalize();else if(t===wo)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(qr.x=s.normal.x>0?e.max.x:e.min.x,qr.y=s.normal.y>0?e.max.y:e.min.y,qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jd(){let i=null,e=!1,t=null,n=null;function s(o,r){t(o,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function t0(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),h.count===-1&&d.length===0&&i.bufferSubData(l,0,u),d.length!==0){for(let m=0,g=d.length;m<g;m++){const _=d[m];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function r(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class Io extends Bi{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const E=f*d-r;for(let y=0;y<l;y++){const A=y*h-o;g.push(A,-E,0),_.push(0,0,1),p.push(y/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){const y=E+l*f,A=E+l*(f+1),D=E+1+l*(f+1),R=E+1+l*f;m.push(y,A,R),m.push(A,D,R)}this.setIndex(m),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.widthSegments,e.heightSegments)}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,d0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,m0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,g0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,A0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,w0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,j0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ev=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ov=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,av=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_v=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,vv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ev=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$v=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ux=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ex=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ix=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:o0,alphatest_fragment:r0,alphatest_pars_fragment:a0,aomap_fragment:c0,aomap_pars_fragment:l0,batching_pars_vertex:u0,batching_vertex:h0,begin_vertex:d0,beginnormal_vertex:f0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:y0,color_fragment:M0,color_pars_fragment:S0,color_pars_vertex:T0,color_vertex:E0,common:A0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:w0,displacementmap_pars_vertex:b0,displacementmap_vertex:R0,emissivemap_fragment:C0,emissivemap_pars_fragment:L0,colorspace_fragment:P0,colorspace_pars_fragment:I0,envmap_fragment:D0,envmap_common_pars_fragment:U0,envmap_pars_fragment:O0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:j0,envmap_vertex:V0,fog_vertex:z0,fog_pars_vertex:B0,fog_fragment:H0,fog_pars_fragment:k0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:Y0,lights_toon_fragment:$0,lights_toon_pars_fragment:K0,lights_phong_fragment:Z0,lights_phong_pars_fragment:J0,lights_physical_fragment:Q0,lights_physical_pars_fragment:ev,lights_fragment_begin:tv,lights_fragment_maps:nv,lights_fragment_end:iv,logdepthbuf_fragment:sv,logdepthbuf_pars_fragment:ov,logdepthbuf_pars_vertex:rv,logdepthbuf_vertex:av,map_fragment:cv,map_pars_fragment:lv,map_particle_fragment:uv,map_particle_pars_fragment:hv,metalnessmap_fragment:dv,metalnessmap_pars_fragment:fv,morphinstance_vertex:pv,morphcolor_vertex:mv,morphnormal_vertex:gv,morphtarget_pars_vertex:_v,morphtarget_vertex:vv,normal_fragment_begin:xv,normal_fragment_maps:yv,normal_pars_fragment:Mv,normal_pars_vertex:Sv,normal_vertex:Tv,normalmap_pars_fragment:Ev,clearcoat_normal_fragment_begin:Av,clearcoat_normal_fragment_maps:Nv,clearcoat_pars_fragment:wv,iridescence_pars_fragment:bv,opaque_fragment:Rv,packing:Cv,premultiplied_alpha_fragment:Lv,project_vertex:Pv,dithering_fragment:Iv,dithering_pars_fragment:Dv,roughnessmap_fragment:Uv,roughnessmap_pars_fragment:Ov,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Vv,shadowmap_vertex:zv,shadowmask_pars_fragment:Bv,skinbase_vertex:Hv,skinning_pars_vertex:kv,skinning_vertex:Gv,skinnormal_vertex:Wv,specularmap_fragment:Xv,specularmap_pars_fragment:qv,tonemapping_fragment:Yv,tonemapping_pars_fragment:jv,transmission_fragment:$v,transmission_pars_fragment:Kv,uv_pars_fragment:Zv,uv_pars_vertex:Jv,uv_vertex:Qv,worldpos_vertex:ex,background_vert:tx,background_frag:nx,backgroundCube_vert:ix,backgroundCube_frag:sx,cube_vert:ox,cube_frag:rx,depth_vert:ax,depth_frag:cx,distanceRGBA_vert:lx,distanceRGBA_frag:ux,equirect_vert:hx,equirect_frag:dx,linedashed_vert:fx,linedashed_frag:px,meshbasic_vert:mx,meshbasic_frag:gx,meshlambert_vert:_x,meshlambert_frag:vx,meshmatcap_vert:xx,meshmatcap_frag:yx,meshnormal_vert:Mx,meshnormal_frag:Sx,meshphong_vert:Tx,meshphong_frag:Ex,meshphysical_vert:Ax,meshphysical_frag:Nx,meshtoon_vert:wx,meshtoon_frag:bx,points_vert:Rx,points_frag:Cx,shadow_vert:Lx,shadow_frag:Px,sprite_vert:Ix,sprite_frag:Dx},_e={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},di={basic:{uniforms:xn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:xn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Oe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:xn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:xn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:xn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Oe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:xn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:xn([_e.points,_e.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:xn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:xn([_e.common,_e.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:xn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:xn([_e.sprite,_e.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:xn([_e.common,_e.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:xn([_e.lights,_e.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};di.physical={uniforms:xn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Yr={r:0,b:0,g:0},xs=new jn,Ux=new Rt;function Ox(i,e,t,n,s,o,r){const a=new Oe(0);let c=o===!0?0:1,l,u,h=null,d=0,m=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1;const A=g(E);A===null?f(a,c):A&&A.isColor&&(f(A,1),y=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil)}function p(E,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===Ta)?(u===void 0&&(u=new pn(new fs(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Ro(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),xs.copy(y.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(xs)),u.material.toneMapped=vt.getTransfer(A.colorSpace)!==At,(h!==A||d!==A.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,m=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new pn(new Io(2,2),new xi({name:"BackgroundMaterial",uniforms:Ro(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=vt.getTransfer(A.colorSpace)!==At,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,m=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,y){E.getRGB(Yr,jd(i)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:_,addToRenderList:p}}function Fx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(x,H,j,L,Q){let ee=!1;const re=h(L,j,H);o!==re&&(o=re,l(o.object)),ee=m(x,L,j,Q),ee&&g(x,L,j,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(ee||r)&&(r=!1,A(x,H,j,L),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,H,j){const L=j.wireframe===!0;let Q=n[x.id];Q===void 0&&(Q={},n[x.id]=Q);let ee=Q[H.id];ee===void 0&&(ee={},Q[H.id]=ee);let re=ee[L];return re===void 0&&(re=d(c()),ee[L]=re),re}function d(x){const H=[],j=[],L=[];for(let Q=0;Q<t;Q++)H[Q]=0,j[Q]=0,L[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:L,object:x,attributes:{},index:null}}function m(x,H,j,L){const Q=o.attributes,ee=H.attributes;let re=0;const ce=j.getAttributes();for(const $ in ce)if(ce[$].location>=0){const le=Q[$];let we=ee[$];if(we===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(we=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(we=x.instanceColor)),le===void 0||le.attribute!==we||we&&le.data!==we.data)return!0;re++}return o.attributesNum!==re||o.index!==L}function g(x,H,j,L){const Q={},ee=H.attributes;let re=0;const ce=j.getAttributes();for(const $ in ce)if(ce[$].location>=0){let le=ee[$];le===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(le=x.instanceColor));const we={};we.attribute=le,le&&le.data&&(we.data=le.data),Q[$]=we,re++}o.attributes=Q,o.attributesNum=re,o.index=L}function _(){const x=o.newAttributes;for(let H=0,j=x.length;H<j;H++)x[H]=0}function p(x){f(x,0)}function f(x,H){const j=o.newAttributes,L=o.enabledAttributes,Q=o.attributeDivisors;j[x]=1,L[x]===0&&(i.enableVertexAttribArray(x),L[x]=1),Q[x]!==H&&(i.vertexAttribDivisor(x,H),Q[x]=H)}function E(){const x=o.newAttributes,H=o.enabledAttributes;for(let j=0,L=H.length;j<L;j++)H[j]!==x[j]&&(i.disableVertexAttribArray(j),H[j]=0)}function y(x,H,j,L,Q,ee,re){re===!0?i.vertexAttribIPointer(x,H,j,Q,ee):i.vertexAttribPointer(x,H,j,L,Q,ee)}function A(x,H,j,L){_();const Q=L.attributes,ee=j.getAttributes(),re=H.defaultAttributeValues;for(const ce in ee){const $=ee[ce];if($.location>=0){let ue=Q[ce];if(ue===void 0&&(ce==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),ce==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ue!==void 0){const le=ue.normalized,we=ue.itemSize,et=e.get(ue);if(et===void 0)continue;const dt=et.buffer,J=et.type,he=et.bytesPerElement,Te=J===i.INT||J===i.UNSIGNED_INT||ue.gpuType===Ld;if(ue.isInterleavedBufferAttribute){const ge=ue.data,tt=ge.stride,$e=ue.offset;if(ge.isInstancedInterleavedBuffer){for(let B=0;B<$.locationSize;B++)f($.location+B,ge.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let B=0;B<$.locationSize;B++)p($.location+B);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let B=0;B<$.locationSize;B++)y($.location+B,we/$.locationSize,J,le,tt*he,($e+we/$.locationSize*B)*he,Te)}else{if(ue.isInstancedBufferAttribute){for(let ge=0;ge<$.locationSize;ge++)f($.location+ge,ue.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<$.locationSize;ge++)p($.location+ge);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let ge=0;ge<$.locationSize;ge++)y($.location+ge,we/$.locationSize,J,le,we*he,we/$.locationSize*ge*he,Te)}}else if(re!==void 0){const le=re[ce];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv($.location,le);break;case 3:i.vertexAttrib3fv($.location,le);break;case 4:i.vertexAttrib4fv($.location,le);break;default:i.vertexAttrib1fv($.location,le)}}}}E()}function D(){z();for(const x in n){const H=n[x];for(const j in H){const L=H[j];for(const Q in L)u(L[Q].object),delete L[Q];delete H[j]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const H=n[x.id];for(const j in H){const L=H[j];for(const Q in L)u(L[Q].object),delete L[Q];delete H[j]}delete n[x.id]}function N(x){for(const H in n){const j=n[H];if(j[x.id]===void 0)continue;const L=j[x.id];for(const Q in L)u(L[Q].object),delete L[Q];delete j[x.id]}}function z(){S(),r=!0,o!==s&&(o=s,l(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function Vx(i,e,t){let n;function s(l){n=l}function o(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function r(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<h;m++)this.render(l[m],u[m]);else{d.multiDrawArraysWEBGL(n,l,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,n,1)}}function c(l,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)r(l[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function zx(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==_i&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==as&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ui&&!N)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:A,maxSamples:D}}function Bx(i){const e=this;let t=null,n=0,s=!1,o=!1;const r=new Pi,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||o&&!p)o?u(null):l();else{const E=o?0:n,y=E*4;let A=f.clippingState||null;c.value=A,A=u(g,d,y,m);for(let D=0;D!==y;++D)A[D]=t[D];f.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,A=m;y!==_;++y,A+=4)r.copy(h[y]).applyMatrix4(E,a),r.normal.toArray(p,A),p[A+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Hx(i){let e=new WeakMap;function t(r,a){return a===Qc?r.mapping=Eo:a===el&&(r.mapping=Ao),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Qc||a===el)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new J_(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Pl extends Kd{constructor(e=-1,t=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,r=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ao=4,dh=[.125,.215,.35,.446,.526,.582],Ns=20,Mc=new Pl,fh=new Oe;let Sc=null,Tc=0,Ec=0,Ac=!1;const Ts=(1+Math.sqrt(5))/2,ro=1/Ts,ph=[new P(-Ts,ro,0),new P(Ts,ro,0),new P(-ro,0,Ts),new P(ro,0,Ts),new P(0,Ts,-ro),new P(0,Ts,ro),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Sc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Tc,Ec),this._renderer.xr.enabled=Ac,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Eo||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:pr,format:_i,colorSpace:li,depthBuffer:!1},s=gh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kx(o)),this._blurMaterial=Gx(o,e,t)}return s}_compileMaterial(e){const t=new pn(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,n,s){const a=new En(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(fh),u.toneMapping=Xn,u.autoClear=!1;const m=new Cl({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new pn(new fs,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(fh),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const y=this._cubeSize;jr(s,E*y,f>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Eo||e.mapping===Ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new pn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;jr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Mc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ph[(s-o-1)%ph.length];this._blur(e,o-1,o,r,a)}t.autoClear=n}_blur(e,t,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",o),this._halfBlur(r,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new pn(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Ns-1),_=o/g,p=isFinite(o)?1+Math.floor(u*_):Ns;p>Ns&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ns}`);const f=[];let E=0;for(let N=0;N<Ns;++N){const z=N/_,S=Math.exp(-z*z/2);f.push(S),N===0?E+=S:N<p&&(E+=2*S)}for(let N=0;N<f.length;N++)f[N]=f[N]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const A=this._sizeLods[s],D=3*A*(s>y-ao?s-y+ao:0),R=4*(this._cubeSize-A);jr(t,D,R,3*A,2*A),c.setRenderTarget(t),c.render(h,Mc)}}function kx(i){const e=[],t=[],n=[];let s=i;const o=i-ao+1+dh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let c=1/a;r>i-ao?c=dh[r-i+ao-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,f=1,E=new Float32Array(_*g*m),y=new Float32Array(p*g*m),A=new Float32Array(f*g*m);for(let R=0;R<m;R++){const N=R%3*2/3-1,z=R>2?0:-1,S=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];E.set(S,_*g*R),y.set(d,p*g*R);const x=[R,R,R,R,R,R];A.set(x,f*g*R)}const D=new Bi;D.setAttribute("position",new qn(E,_)),D.setAttribute("uv",new qn(y,p)),D.setAttribute("faceIndex",new qn(A,f)),e.push(D),s>ao&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gh(i,e,t){const n=new Ls(i,e,t);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Gx(i,e,t){const n=new Float32Array(Ns),s=new P(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function _h(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function vh(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Il(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Qc||c===el,u=c===Eo||c===Ao;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new mh(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new mh(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Xx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qx(i,e,t,n){const s={},o=new WeakMap;function r(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",r),delete s[d.id];const m=o.get(d);m&&(e.remove(m),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let y=0,A=E.length;y<A;y+=3){const D=E[y+0],R=E[y+1],N=E[y+2];d.push(D,R,R,N,N,D)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,A=E.length/3-1;y<A;y+=3){const D=y+0,R=y+1,N=y+2;d.push(D,R,R,N,N,D)}}else return;const p=new(Bd(d)?Yd:qd)(d,1);p.version=_;const f=o.get(h);f&&e.remove(f),o.set(h,p)}function u(h){const d=o.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Yx(i,e,t){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,m){i.drawElements(n,m,o,d*r),t.update(m,n,1)}function l(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,o,d*r,g),t.update(m,n,g))}function u(d,m,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(d[p]/r,m[p]);else{_.multiDrawElementsWEBGL(n,m,0,o,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}}function h(d,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/r,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,o,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=m[E];for(let E=0;E<_.length;E++)t.update(f,n,_[E])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function jx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $x(i,e,t){const n=new WeakMap,s=new at;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let x=function(){z.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let A=0;g===!0&&(A=1),_===!0&&(A=2),p===!0&&(A=3);let D=a.attributes.position.count*A,R=1;D>e.maxTextureSize&&(R=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const N=new Float32Array(D*R*4*h),z=new bl(N,D,R,h);z.type=Ui,z.needsUpdate=!0;const S=A*4;for(let H=0;H<h;H++){const j=f[H],L=E[H],Q=y[H],ee=D*R*4*H;for(let re=0;re<j.count;re++){const ce=re*S;g===!0&&(s.fromBufferAttribute(j,re),N[ee+ce+0]=s.x,N[ee+ce+1]=s.y,N[ee+ce+2]=s.z,N[ee+ce+3]=0),_===!0&&(s.fromBufferAttribute(L,re),N[ee+ce+4]=s.x,N[ee+ce+5]=s.y,N[ee+ce+6]=s.z,N[ee+ce+7]=0),p===!0&&(s.fromBufferAttribute(Q,re),N[ee+ce+8]=s.x,N[ee+ce+9]=s.y,N[ee+ce+10]=s.z,N[ee+ce+11]=Q.itemSize===4?s.w:1)}}d={count:h,texture:z,size:new Se(D,R)},n.set(a,d),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function Kx(i,e,t,n){let s=new WeakMap;function o(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:r}}class _r extends gn{constructor(e,t,n,s,o,r,a,c,l,u){if(u=u!==void 0?u:mo,u!==mo&&u!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===mo&&(n=No),n===void 0&&u===rr&&(n=mr),super(null,s,o,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qd=new gn,ef=new _r(1,1);ef.compareFunction=zd;const tf=new bl,nf=new F_,sf=new Zd,xh=[],yh=[],Mh=new Float32Array(16),Sh=new Float32Array(9),Th=new Float32Array(4);function Do(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=xh[s];if(o===void 0&&(o=new Float32Array(s),xh[s]=o),e!==0){n.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,i[r].toArray(o,a)}return o}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Aa(i,e){let t=yh[e];t===void 0&&(t=new Int32Array(e),yh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function ty(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;Th.set(n),i.uniformMatrix2fv(this.addr,!1,Th),$t(t,n)}}function ny(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;Sh.set(n),i.uniformMatrix3fv(this.addr,!1,Sh),$t(t,n)}}function iy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(jt(t,n))return;Mh.set(n),i.uniformMatrix4fv(this.addr,!1,Mh),$t(t,n)}}function sy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function oy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function ry(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function ay(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function cy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ly(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function uy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function hy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function dy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const o=this.type===i.SAMPLER_2D_SHADOW?ef:Qd;t.setTexture2D(e||o,s)}function fy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nf,s)}function py(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||sf,s)}function my(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tf,s)}function gy(i){switch(i){case 5126:return Zx;case 35664:return Jx;case 35665:return Qx;case 35666:return ey;case 35674:return ty;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return oy;case 35668:case 35672:return ry;case 35669:case 35673:return ay;case 5125:return cy;case 36294:return ly;case 36295:return uy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}function _y(i,e){i.uniform1fv(this.addr,e)}function vy(i,e){const t=Do(e,this.size,2);i.uniform2fv(this.addr,t)}function xy(i,e){const t=Do(e,this.size,3);i.uniform3fv(this.addr,t)}function yy(i,e){const t=Do(e,this.size,4);i.uniform4fv(this.addr,t)}function My(i,e){const t=Do(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Sy(i,e){const t=Do(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ty(i,e){const t=Do(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ey(i,e){i.uniform1iv(this.addr,e)}function Ay(i,e){i.uniform2iv(this.addr,e)}function Ny(i,e){i.uniform3iv(this.addr,e)}function wy(i,e){i.uniform4iv(this.addr,e)}function by(i,e){i.uniform1uiv(this.addr,e)}function Ry(i,e){i.uniform2uiv(this.addr,e)}function Cy(i,e){i.uniform3uiv(this.addr,e)}function Ly(i,e){i.uniform4uiv(this.addr,e)}function Py(i,e,t){const n=this.cache,s=e.length,o=Aa(t,s);jt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Qd,o[r])}function Iy(i,e,t){const n=this.cache,s=e.length,o=Aa(t,s);jt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||nf,o[r])}function Dy(i,e,t){const n=this.cache,s=e.length,o=Aa(t,s);jt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||sf,o[r])}function Uy(i,e,t){const n=this.cache,s=e.length,o=Aa(t,s);jt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||tf,o[r])}function Oy(i){switch(i){case 5126:return _y;case 35664:return vy;case 35665:return xy;case 35666:return yy;case 35674:return My;case 35675:return Sy;case 35676:return Ty;case 5124:case 35670:return Ey;case 35667:case 35671:return Ay;case 35668:case 35672:return Ny;case 35669:case 35673:return wy;case 5125:return by;case 36294:return Ry;case 36295:return Cy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Uy}}class Fy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gy(t.type)}}class Vy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Oy(t.type)}}class zy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],n)}}}const Nc=/(\w+)(\])?(\[|\.)?/g;function Eh(i,e){i.seq.push(e),i.map[e.id]=e}function By(i,e,t){const n=i.name,s=n.length;for(Nc.lastIndex=0;;){const o=Nc.exec(n),r=Nc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Eh(t,l===void 0?new Fy(a,i,e):new Vy(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new zy(a),Eh(t,h)),t=h}}}class Qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);By(o,r,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Ah(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Hy=37297;let ky=0;function Gy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function Wy(i){const e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(i);let n;switch(e===t?n="":e===aa&&t===ra?n="LinearDisplayP3ToLinearSRGB":e===ra&&t===aa&&(n="LinearSRGBToLinearDisplayP3"),i){case li:case Ea:return[n,"LinearTransferOETF"];case hn:case Al:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Nh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Gy(i.getShaderSource(e),r)}else return s}function Xy(i,e){const t=Wy(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qy(i,e){let t;switch(e){case Ed:t="Linear";break;case Ad:t="Reinhard";break;case Nd:t="OptimizedCineon";break;case wd:t="ACESFilmic";break;case bd:t="AgX";break;case Kg:t="Neutral";break;case $g:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Yy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function jy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $y(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:i.getAttribLocation(e,r),locationSize:a}}return t}function er(i){return i!==""}function wh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ky=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(i){return i.replace(Ky,Jy)}const Zy=new Map;function Jy(i,e){let t=je[e];if(t===void 0){const n=Zy.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return il(t)}const Qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(i){return i.replace(Qy,eM)}function eM(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ch(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Td?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function nM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Eo:case Ao:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function sM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sa:e="ENVMAP_BLENDING_MULTIPLY";break;case Yg:e="ENVMAP_BLENDING_MIX";break;case jg:e="ENVMAP_BLENDING_ADD";break}return e}function oM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function rM(i,e,t,n){const s=i.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=tM(t),l=nM(t),u=iM(t),h=sM(t),d=oM(t),m=Yy(t),g=jy(o),_=s.createProgram();let p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),f.length>0&&(f+=`
`)):(p=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),f=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?je.tonemapping_pars_fragment:"",t.toneMapping!==Xn?qy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Xy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),r=il(r),r=wh(r,t),r=bh(r,t),a=il(a),a=wh(a,t),a=bh(a,t),r=Rh(r),a=Rh(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=E+p+r,A=E+f+a,D=Ah(s,s.VERTEX_SHADER,y),R=Ah(s,s.FRAGMENT_SHADER,A);s.attachShader(_,D),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function N(H){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(_).trim(),L=s.getShaderInfoLog(D).trim(),Q=s.getShaderInfoLog(R).trim();let ee=!0,re=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,R);else{const ce=Nh(s,D,"vertex"),$=Nh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+j+`
`+ce+`
`+$)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(L===""||Q==="")&&(re=!1);re&&(H.diagnostics={runnable:ee,programLog:j,vertexShader:{log:L,prefix:p},fragmentShader:{log:Q,prefix:f}})}s.deleteShader(D),s.deleteShader(R),z=new Qr(s,_),S=$y(s,_)}let z;this.getUniforms=function(){return z===void 0&&N(this),z};let S;this.getAttributes=function(){return S===void 0&&N(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Hy)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ky++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=R,this}let aM=0;class cM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lM(e),t.set(e,n)),n}}class lM{constructor(e){this.id=aM++,this.code=e,this.usedTimes=0}}function uM(i,e,t,n,s,o,r){const a=new Wd,c=new cM,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,x,H,j,L){const Q=j.fog,ee=L.geometry,re=S.isMeshStandardMaterial?j.environment:null,ce=(S.isMeshStandardMaterial?t:e).get(S.envMap||re),$=ce&&ce.mapping===Ta?ce.image.height:null,ue=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const le=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,we=le!==void 0?le.length:0;let et=0;ee.morphAttributes.position!==void 0&&(et=1),ee.morphAttributes.normal!==void 0&&(et=2),ee.morphAttributes.color!==void 0&&(et=3);let dt,J,he,Te;if(ue){const rt=di[ue];dt=rt.vertexShader,J=rt.fragmentShader}else dt=S.vertexShader,J=S.fragmentShader,c.update(S),he=c.getVertexShaderID(S),Te=c.getFragmentShaderID(S);const ge=i.getRenderTarget(),tt=L.isInstancedMesh===!0,$e=L.isBatchedMesh===!0,B=!!S.map,mt=!!S.matcap,Pe=!!ce,gt=!!S.aoMap,De=!!S.lightMap,nt=!!S.bumpMap,ke=!!S.normalMap,it=!!S.displacementMap,wt=!!S.emissiveMap,b=!!S.metalnessMap,M=!!S.roughnessMap,Y=S.anisotropy>0,ie=S.clearcoat>0,oe=S.dispersion>0,ae=S.iridescence>0,Le=S.sheen>0,xe=S.transmission>0,ve=Y&&!!S.anisotropyMap,Ve=ie&&!!S.clearcoatMap,fe=ie&&!!S.clearcoatNormalMap,Ce=ie&&!!S.clearcoatRoughnessMap,st=ae&&!!S.iridescenceMap,Ie=ae&&!!S.iridescenceThicknessMap,Me=Le&&!!S.sheenColorMap,Ge=Le&&!!S.sheenRoughnessMap,Ke=!!S.specularMap,_t=!!S.specularColorMap,qe=!!S.specularIntensityMap,v=xe&&!!S.transmissionMap,F=xe&&!!S.thicknessMap,k=!!S.gradientMap,se=!!S.alphaMap,de=S.alphaTest>0,We=!!S.alphaHash,Ze=!!S.extensions;let Lt=Xn;S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const Kt={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:dt,fragmentShader:J,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:Te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:$e,instancing:tt,instancingColor:tt&&L.instanceColor!==null,instancingMorph:tt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:li,alphaToCoverage:!!S.alphaToCoverage,map:B,matcap:mt,envMap:Pe,envMapMode:Pe&&ce.mapping,envMapCubeUVHeight:$,aoMap:gt,lightMap:De,bumpMap:nt,normalMap:ke,displacementMap:d&&it,emissiveMap:wt,normalMapObjectSpace:ke&&S.normalMapType===Fd,normalMapTangentSpace:ke&&S.normalMapType===Cs,metalnessMap:b,roughnessMap:M,anisotropy:Y,anisotropyMap:ve,clearcoat:ie,clearcoatMap:Ve,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ce,dispersion:oe,iridescence:ae,iridescenceMap:st,iridescenceThicknessMap:Ie,sheen:Le,sheenColorMap:Me,sheenRoughnessMap:Ge,specularMap:Ke,specularColorMap:_t,specularIntensityMap:qe,transmission:xe,transmissionMap:v,thicknessMap:F,gradientMap:k,opaque:S.transparent===!1&&S.blending===po&&S.alphaToCoverage===!1,alphaMap:se,alphaTest:de,alphaHash:We,combine:S.combine,mapUv:B&&_(S.map.channel),aoMapUv:gt&&_(S.aoMap.channel),lightMapUv:De&&_(S.lightMap.channel),bumpMapUv:nt&&_(S.bumpMap.channel),normalMapUv:ke&&_(S.normalMap.channel),displacementMapUv:it&&_(S.displacementMap.channel),emissiveMapUv:wt&&_(S.emissiveMap.channel),metalnessMapUv:b&&_(S.metalnessMap.channel),roughnessMapUv:M&&_(S.roughnessMap.channel),anisotropyMapUv:ve&&_(S.anisotropyMap.channel),clearcoatMapUv:Ve&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(S.sheenRoughnessMap.channel),specularMapUv:Ke&&_(S.specularMap.channel),specularColorMapUv:_t&&_(S.specularColorMap.channel),specularIntensityMapUv:qe&&_(S.specularIntensityMap.channel),transmissionMapUv:v&&_(S.transmissionMap.channel),thicknessMapUv:F&&_(S.thicknessMap.channel),alphaMapUv:se&&_(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(ke||Y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!ee.attributes.uv&&(B||se),fog:!!Q,useFog:S.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:et,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:B&&S.map.isVideoTexture===!0&&vt.getTransfer(S.map.colorSpace)===At,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Di,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ze&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ze&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function f(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)x.push(H),x.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(E(x,S),y(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function y(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),S.push(a.mask)}function A(S){const x=g[S.type];let H;if(x){const j=di[x];H=$d.clone(j.uniforms)}else H=S.uniforms;return H}function D(S,x){let H;for(let j=0,L=u.length;j<L;j++){const Q=u[j];if(Q.cacheKey===x){H=Q,++H.usedTimes;break}}return H===void 0&&(H=new rM(i,x,S,o),u.push(H)),H}function R(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function N(S){c.remove(S)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:A,acquireProgram:D,releaseProgram:R,releaseShaderCache:N,programs:u,dispose:z}}function hM(){let i=new WeakMap;function e(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function t(o){i.delete(o)}function n(o,r,a){i.get(o)[r]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function dM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ph(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function r(h,d,m,g,_,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=p),e++,f}function a(h,d,m,g,_,p){const f=r(h,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(h,d,m,g,_,p){const f=r(h,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||dM),n.length>1&&n.sort(d||Lh),s.length>1&&s.sort(d||Lh)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function fM(){let i=new WeakMap;function e(n,s){const o=i.get(n);let r;return o===void 0?(r=new Ph,i.set(n,[r])):s>=o.length?(r=new Ph,o.push(r)):r=o[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function pM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Oe};break;case"SpotLight":t={position:new P,direction:new P,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function mM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gM=0;function _M(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vM(i){const e=new pM,t=mM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,o=new Rt,r=new Rt;function a(l,u){let h=0,d=0,m=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let g=0,_=0,p=0,f=0,E=0,y=0,A=0,D=0,R=0,N=0,z=0;l.sort(_M);const S=u===!0?Math.PI:1;for(let H=0,j=l.length;H<j;H++){const L=l[H],Q=L.color,ee=L.intensity,re=L.distance,ce=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=Q.r*ee*S,d+=Q.g*ee*S,m+=Q.b*ee*S;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],ee);z++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const ue=L.shadow,le=t.get(L);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,n.directionalShadow[g]=le,n.directionalShadowMap[g]=ce,n.directionalShadowMatrix[g]=L.shadow.matrix,y++}n.directional[g]=$,g++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(Q).multiplyScalar(ee*S),$.distance=re,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[p]=$;const ue=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,ue.updateMatrices(L),L.castShadow&&N++),n.spotLightMatrix[p]=ue.matrix,L.castShadow){const le=t.get(L);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,n.spotShadow[p]=le,n.spotShadowMap[p]=ce,D++}p++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(Q).multiplyScalar(ee),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[f]=$,f++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*S),$.distance=L.distance,$.decay=L.decay,L.castShadow){const ue=L.shadow,le=t.get(L);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,le.shadowCameraNear=ue.camera.near,le.shadowCameraFar=ue.camera.far,n.pointShadow[_]=le,n.pointShadowMap[_]=ce,n.pointShadowMatrix[_]=L.shadow.matrix,A++}n.point[_]=$,_++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(ee*S),$.groundColor.copy(L.groundColor).multiplyScalar(ee*S),n.hemi[E]=$,E++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=m;const x=n.hash;(x.directionalLength!==g||x.pointLength!==_||x.spotLength!==p||x.rectAreaLength!==f||x.hemiLength!==E||x.numDirectionalShadows!==y||x.numPointShadows!==A||x.numSpotShadows!==D||x.numSpotMaps!==R||x.numLightProbes!==z)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=f,n.point.length=_,n.hemi.length=E,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=D+R-N,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=z,x.directionalLength=g,x.pointLength=_,x.spotLength=p,x.rectAreaLength=f,x.hemiLength=E,x.numDirectionalShadows=y,x.numPointShadows=A,x.numSpotShadows=D,x.numSpotMaps=R,x.numLightProbes=z,n.version=gM++)}function c(l,u){let h=0,d=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const y=l[f];if(y.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),h++}else if(y.isSpotLight){const A=n.spot[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const A=n.rectArea[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),r.identity(),o.copy(y.matrixWorld),o.premultiply(p),r.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(r),A.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const A=n.hemi[_];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Ih(i){const e=new vM(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function r(u){n.push(u)}function a(u){e.setup(t,u)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function xM(i){let e=new WeakMap;function t(s,o=0){const r=e.get(s);let a;return r===void 0?(a=new Ih(i),e.set(s,[a])):o>=r.length?(a=new Ih(i),r.push(a)):a=r[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class yM extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MM extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const SM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function EM(i,e,t){let n=new Ll;const s=new Se,o=new Se,r=new at,a=new yM({depthPacking:l_}),c=new MM,l={},u=t.maxTextureSize,h={[rs]:mn,[mn]:rs,[Di]:Di},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:SM,fragmentShader:TM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Bi;g.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sd;let f=this.type;this.render=function(R,N,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),j=i.state;j.setBlending(ns),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const L=f!==Li&&this.type===Li,Q=f===Li&&this.type!==Li;for(let ee=0,re=R.length;ee<re;ee++){const ce=R[ee],$=ce.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ue=$.getFrameExtents();if(s.multiply(ue),o.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/ue.x),s.x=o.x*ue.x,$.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/ue.y),s.y=o.y*ue.y,$.mapSize.y=o.y)),$.map===null||L===!0||Q===!0){const we=this.type!==Li?{minFilter:fn,magFilter:fn}:{};$.map!==null&&$.map.dispose(),$.map=new Ls(s.x,s.y,we),$.map.texture.name=ce.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const le=$.getViewportCount();for(let we=0;we<le;we++){const et=$.getViewport(we);r.set(o.x*et.x,o.y*et.y,o.x*et.z,o.y*et.w),j.viewport(r),$.updateMatrices(ce,we),n=$.getFrustum(),A(N,z,$.camera,ce,this.type)}$.isPointLightShadow!==!0&&this.type===Li&&E($,z),$.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(S,x,H)};function E(R,N){const z=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ls(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(N,null,z,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(N,null,z,m,_,null)}function y(R,N,z,S){let x=null;const H=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0)x=H;else if(x=z.isPointLight===!0?c:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const j=x.uuid,L=N.uuid;let Q=l[j];Q===void 0&&(Q={},l[j]=Q);let ee=Q[L];ee===void 0&&(ee=x.clone(),Q[L]=ee,N.addEventListener("dispose",D)),x=ee}if(x.visible=N.visible,x.wireframe=N.wireframe,S===Li?x.side=N.shadowSide!==null?N.shadowSide:N.side:x.side=N.shadowSide!==null?N.shadowSide:h[N.side],x.alphaMap=N.alphaMap,x.alphaTest=N.alphaTest,x.map=N.map,x.clipShadows=N.clipShadows,x.clippingPlanes=N.clippingPlanes,x.clipIntersection=N.clipIntersection,x.displacementMap=N.displacementMap,x.displacementScale=N.displacementScale,x.displacementBias=N.displacementBias,x.wireframeLinewidth=N.wireframeLinewidth,x.linewidth=N.linewidth,z.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const j=i.properties.get(x);j.light=z}return x}function A(R,N,z,S,x){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Li)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const L=e.update(R),Q=R.material;if(Array.isArray(Q)){const ee=L.groups;for(let re=0,ce=ee.length;re<ce;re++){const $=ee[re],ue=Q[$.materialIndex];if(ue&&ue.visible){const le=y(R,ue,S,x);R.onBeforeShadow(i,R,N,z,L,le,$),i.renderBufferDirect(z,null,L,le,R,$),R.onAfterShadow(i,R,N,z,L,le,$)}}}else if(Q.visible){const ee=y(R,Q,S,x);R.onBeforeShadow(i,R,N,z,L,ee,null),i.renderBufferDirect(z,null,L,ee,R,null),R.onAfterShadow(i,R,N,z,L,ee,null)}}const j=R.children;for(let L=0,Q=j.length;L<Q;L++)A(j[L],N,z,S,x)}function D(R){R.target.removeEventListener("dispose",D);for(const z in l){const S=l[z],x=R.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function AM(i){function e(){let v=!1;const F=new at;let k=null;const se=new at(0,0,0,0);return{setMask:function(de){k!==de&&!v&&(i.colorMask(de,de,de,de),k=de)},setLocked:function(de){v=de},setClear:function(de,We,Ze,Lt,Kt){Kt===!0&&(de*=Lt,We*=Lt,Ze*=Lt),F.set(de,We,Ze,Lt),se.equals(F)===!1&&(i.clearColor(de,We,Ze,Lt),se.copy(F))},reset:function(){v=!1,k=null,se.set(-1,0,0,0)}}}function t(){let v=!1,F=null,k=null,se=null;return{setTest:function(de){de?Te(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(de){F!==de&&!v&&(i.depthMask(de),F=de)},setFunc:function(de){if(k!==de){switch(de){case Bg:i.depthFunc(i.NEVER);break;case Hg:i.depthFunc(i.ALWAYS);break;case kg:i.depthFunc(i.LESS);break;case sa:i.depthFunc(i.LEQUAL);break;case Gg:i.depthFunc(i.EQUAL);break;case Wg:i.depthFunc(i.GEQUAL);break;case Xg:i.depthFunc(i.GREATER);break;case qg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=de}},setLocked:function(de){v=de},setClear:function(de){se!==de&&(i.clearDepth(de),se=de)},reset:function(){v=!1,F=null,k=null,se=null}}}function n(){let v=!1,F=null,k=null,se=null,de=null,We=null,Ze=null,Lt=null,Kt=null;return{setTest:function(rt){v||(rt?Te(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(rt){F!==rt&&!v&&(i.stencilMask(rt),F=rt)},setFunc:function(rt,zt,Et){(k!==rt||se!==zt||de!==Et)&&(i.stencilFunc(rt,zt,Et),k=rt,se=zt,de=Et)},setOp:function(rt,zt,Et){(We!==rt||Ze!==zt||Lt!==Et)&&(i.stencilOp(rt,zt,Et),We=rt,Ze=zt,Lt=Et)},setLocked:function(rt){v=rt},setClear:function(rt){Kt!==rt&&(i.clearStencil(rt),Kt=rt)},reset:function(){v=!1,F=null,k=null,se=null,de=null,We=null,Ze=null,Lt=null,Kt=null}}}const s=new e,o=new t,r=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,E=null,y=null,A=null,D=null,R=new Oe(0,0,0),N=0,z=!1,S=null,x=null,H=null,j=null,L=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,re=0;const ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ce)[1]),ee=re>=1):ce.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),ee=re>=2);let $=null,ue={};const le=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),et=new at().fromArray(le),dt=new at().fromArray(we);function J(v,F,k,se){const de=new Uint8Array(4),We=i.createTexture();i.bindTexture(v,We),i.texParameteri(v,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(v,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<k;Ze++)v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY?i.texImage3D(F,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(F+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return We}const he={};he[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),Te(i.DEPTH_TEST),o.setFunc(sa),nt(!1),ke(pu),Te(i.CULL_FACE),gt(ns);function Te(v){l[v]!==!0&&(i.enable(v),l[v]=!0)}function ge(v){l[v]!==!1&&(i.disable(v),l[v]=!1)}function tt(v,F){return u[v]!==F?(i.bindFramebuffer(v,F),u[v]=F,v===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=F),v===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=F),!0):!1}function $e(v,F){let k=d,se=!1;if(v){k=h.get(F),k===void 0&&(k=[],h.set(F,k));const de=v.textures;if(k.length!==de.length||k[0]!==i.COLOR_ATTACHMENT0){for(let We=0,Ze=de.length;We<Ze;We++)k[We]=i.COLOR_ATTACHMENT0+We;k.length=de.length,se=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,se=!0);se&&i.drawBuffers(k)}function B(v){return m!==v?(i.useProgram(v),m=v,!0):!1}const mt={[As]:i.FUNC_ADD,[Tg]:i.FUNC_SUBTRACT,[Eg]:i.FUNC_REVERSE_SUBTRACT};mt[Ag]=i.MIN,mt[Ng]=i.MAX;const Pe={[wg]:i.ZERO,[bg]:i.ONE,[Rg]:i.SRC_COLOR,[Zc]:i.SRC_ALPHA,[Ug]:i.SRC_ALPHA_SATURATE,[Ig]:i.DST_COLOR,[Lg]:i.DST_ALPHA,[Cg]:i.ONE_MINUS_SRC_COLOR,[Jc]:i.ONE_MINUS_SRC_ALPHA,[Dg]:i.ONE_MINUS_DST_COLOR,[Pg]:i.ONE_MINUS_DST_ALPHA,[Og]:i.CONSTANT_COLOR,[Fg]:i.ONE_MINUS_CONSTANT_COLOR,[Vg]:i.CONSTANT_ALPHA,[zg]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(v,F,k,se,de,We,Ze,Lt,Kt,rt){if(v===ns){g===!0&&(ge(i.BLEND),g=!1);return}if(g===!1&&(Te(i.BLEND),g=!0),v!==Sg){if(v!==_||rt!==z){if((p!==As||y!==As)&&(i.blendEquation(i.FUNC_ADD),p=As,y=As),rt)switch(v){case po:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mu:i.blendFunc(i.ONE,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _u:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _u:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}f=null,E=null,A=null,D=null,R.set(0,0,0),N=0,_=v,z=rt}return}de=de||F,We=We||k,Ze=Ze||se,(F!==p||de!==y)&&(i.blendEquationSeparate(mt[F],mt[de]),p=F,y=de),(k!==f||se!==E||We!==A||Ze!==D)&&(i.blendFuncSeparate(Pe[k],Pe[se],Pe[We],Pe[Ze]),f=k,E=se,A=We,D=Ze),(Lt.equals(R)===!1||Kt!==N)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Kt),R.copy(Lt),N=Kt),_=v,z=!1}function De(v,F){v.side===Di?ge(i.CULL_FACE):Te(i.CULL_FACE);let k=v.side===mn;F&&(k=!k),nt(k),v.blending===po&&v.transparent===!1?gt(ns):gt(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),o.setFunc(v.depthFunc),o.setTest(v.depthTest),o.setMask(v.depthWrite),s.setMask(v.colorWrite);const se=v.stencilWrite;r.setTest(se),se&&(r.setMask(v.stencilWriteMask),r.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),r.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),wt(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(v){S!==v&&(v?i.frontFace(i.CW):i.frontFace(i.CCW),S=v)}function ke(v){v!==yg?(Te(i.CULL_FACE),v!==x&&(v===pu?i.cullFace(i.BACK):v===Mg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),x=v}function it(v){v!==H&&(ee&&i.lineWidth(v),H=v)}function wt(v,F,k){v?(Te(i.POLYGON_OFFSET_FILL),(j!==F||L!==k)&&(i.polygonOffset(F,k),j=F,L=k)):ge(i.POLYGON_OFFSET_FILL)}function b(v){v?Te(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function M(v){v===void 0&&(v=i.TEXTURE0+Q-1),$!==v&&(i.activeTexture(v),$=v)}function Y(v,F,k){k===void 0&&($===null?k=i.TEXTURE0+Q-1:k=$);let se=ue[k];se===void 0&&(se={type:void 0,texture:void 0},ue[k]=se),(se.type!==v||se.texture!==F)&&($!==k&&(i.activeTexture(k),$=k),i.bindTexture(v,F||he[v]),se.type=v,se.texture=F)}function ie(){const v=ue[$];v!==void 0&&v.type!==void 0&&(i.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Le(){try{i.texSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function fe(){try{i.texStorage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ce(){try{i.texStorage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function st(){try{i.texImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Me(v){et.equals(v)===!1&&(i.scissor(v.x,v.y,v.z,v.w),et.copy(v))}function Ge(v){dt.equals(v)===!1&&(i.viewport(v.x,v.y,v.z,v.w),dt.copy(v))}function Ke(v,F){let k=c.get(F);k===void 0&&(k=new WeakMap,c.set(F,k));let se=k.get(v);se===void 0&&(se=i.getUniformBlockIndex(F,v.name),k.set(v,se))}function _t(v,F){const se=c.get(F).get(v);a.get(F)!==se&&(i.uniformBlockBinding(F,se,v.__bindingPointIndex),a.set(F,se))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},$=null,ue={},u={},h=new WeakMap,d=[],m=null,g=!1,_=null,p=null,f=null,E=null,y=null,A=null,D=null,R=new Oe(0,0,0),N=0,z=!1,S=null,x=null,H=null,j=null,L=null,et.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:Te,disable:ge,bindFramebuffer:tt,drawBuffers:$e,useProgram:B,setBlending:gt,setMaterial:De,setFlipSided:nt,setCullFace:ke,setLineWidth:it,setPolygonOffset:wt,setScissorTest:b,activeTexture:M,bindTexture:Y,unbindTexture:ie,compressedTexImage2D:oe,compressedTexImage3D:ae,texImage2D:st,texImage3D:Ie,updateUBOMapping:Ke,uniformBlockBinding:_t,texStorage2D:fe,texStorage3D:Ce,texSubImage2D:Le,texSubImage3D:xe,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ve,scissor:Me,viewport:Ge,reset:qe}}function NM(i,e,t,n,s,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return m?new OffscreenCanvas(b,M):ar("canvas")}function _(b,M,Y){let ie=1;const oe=wt(b);if((oe.width>Y||oe.height>Y)&&(ie=Y/Math.max(oe.width,oe.height)),ie<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ae=Math.floor(ie*oe.width),Le=Math.floor(ie*oe.height);h===void 0&&(h=g(ae,Le));const xe=M?g(ae,Le):h;return xe.width=ae,xe.height=Le,xe.getContext("2d").drawImage(b,0,0,ae,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ae+"x"+Le+")."),xe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==fn&&b.minFilter!==ti}function f(b){i.generateMipmap(b)}function E(b,M,Y,ie,oe=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ae=M;if(M===i.RED&&(Y===i.FLOAT&&(ae=i.R32F),Y===i.HALF_FLOAT&&(ae=i.R16F),Y===i.UNSIGNED_BYTE&&(ae=i.R8)),M===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.R8UI),Y===i.UNSIGNED_SHORT&&(ae=i.R16UI),Y===i.UNSIGNED_INT&&(ae=i.R32UI),Y===i.BYTE&&(ae=i.R8I),Y===i.SHORT&&(ae=i.R16I),Y===i.INT&&(ae=i.R32I)),M===i.RG&&(Y===i.FLOAT&&(ae=i.RG32F),Y===i.HALF_FLOAT&&(ae=i.RG16F),Y===i.UNSIGNED_BYTE&&(ae=i.RG8)),M===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ae=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ae=i.RG16UI),Y===i.UNSIGNED_INT&&(ae=i.RG32UI),Y===i.BYTE&&(ae=i.RG8I),Y===i.SHORT&&(ae=i.RG16I),Y===i.INT&&(ae=i.RG32I)),M===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),M===i.RGBA){const Le=oe?oa:vt.getTransfer(ie);Y===i.FLOAT&&(ae=i.RGBA32F),Y===i.HALF_FLOAT&&(ae=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ae=Le===At?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function y(b,M){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==fn&&b.minFilter!==ti?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function A(b){const M=b.target;M.removeEventListener("dispose",A),R(M),M.isVideoTexture&&u.delete(M)}function D(b){const M=b.target;M.removeEventListener("dispose",D),z(M)}function R(b){const M=n.get(b);if(M.__webglInit===void 0)return;const Y=b.source,ie=d.get(Y);if(ie){const oe=ie[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&N(b),Object.keys(ie).length===0&&d.delete(Y)}n.remove(b)}function N(b){const M=n.get(b);i.deleteTexture(M.__webglTexture);const Y=b.source,ie=d.get(Y);delete ie[M.__cacheKey],r.memory.textures--}function z(b){const M=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(M.__webglFramebuffer[ie]))for(let oe=0;oe<M.__webglFramebuffer[ie].length;oe++)i.deleteFramebuffer(M.__webglFramebuffer[ie][oe]);else i.deleteFramebuffer(M.__webglFramebuffer[ie]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ie])}else{if(Array.isArray(M.__webglFramebuffer))for(let ie=0;ie<M.__webglFramebuffer.length;ie++)i.deleteFramebuffer(M.__webglFramebuffer[ie]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ie=0;ie<M.__webglColorRenderbuffer.length;ie++)M.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ie]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=b.textures;for(let ie=0,oe=Y.length;ie<oe;ie++){const ae=n.get(Y[ie]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),r.memory.textures--),n.remove(Y[ie])}n.remove(b)}let S=0;function x(){S=0}function H(){const b=S;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),S+=1,b}function j(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function L(b,M){const Y=n.get(b);if(b.isVideoTexture&&ke(b),b.isRenderTargetTexture===!1&&b.version>0&&Y.__version!==b.version){const ie=b.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(Y,b,M);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+M)}function Q(b,M){const Y=n.get(b);if(b.version>0&&Y.__version!==b.version){et(Y,b,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+M)}function ee(b,M){const Y=n.get(b);if(b.version>0&&Y.__version!==b.version){et(Y,b,M);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+M)}function re(b,M){const Y=n.get(b);if(b.version>0&&Y.__version!==b.version){dt(Y,b,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+M)}const ce={[wn]:i.REPEAT,[bs]:i.CLAMP_TO_EDGE,[tl]:i.MIRRORED_REPEAT},$={[fn]:i.NEAREST,[Zg]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[Za]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},ue={[u_]:i.NEVER,[m_]:i.ALWAYS,[Vd]:i.LESS,[zd]:i.LEQUAL,[h_]:i.EQUAL,[p_]:i.GEQUAL,[d_]:i.GREATER,[f_]:i.NOTEQUAL};function le(b,M){if(M.type===Ui&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ti||M.magFilter===Za||M.magFilter===wr||M.magFilter===Qi||M.minFilter===ti||M.minFilter===Za||M.minFilter===wr||M.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ce[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ce[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ce[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,$[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fn||M.minFilter!==wr&&M.minFilter!==Qi||M.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function we(b,M){let Y=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",A));const ie=M.source;let oe=d.get(ie);oe===void 0&&(oe={},d.set(ie,oe));const ae=j(M);if(ae!==b.__cacheKey){oe[ae]===void 0&&(oe[ae]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,Y=!0),oe[ae].usedTimes++;const Le=oe[b.__cacheKey];Le!==void 0&&(oe[b.__cacheKey].usedTimes--,Le.usedTimes===0&&N(M)),b.__cacheKey=ae,b.__webglTexture=oe[ae].texture}return Y}function et(b,M,Y){let ie=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=i.TEXTURE_3D);const oe=we(b,M),ae=M.source;t.bindTexture(ie,b.__webglTexture,i.TEXTURE0+Y);const Le=n.get(ae);if(ae.version!==Le.__version||oe===!0){t.activeTexture(i.TEXTURE0+Y);const xe=vt.getPrimaries(vt.workingColorSpace),ve=M.colorSpace===Ji?null:vt.getPrimaries(M.colorSpace),Ve=M.colorSpace===Ji||xe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let fe=_(M.image,!1,s.maxTextureSize);fe=it(M,fe);const Ce=o.convert(M.format,M.colorSpace),st=o.convert(M.type);let Ie=E(M.internalFormat,Ce,st,M.colorSpace,M.isVideoTexture);le(ie,M);let Me;const Ge=M.mipmaps,Ke=M.isVideoTexture!==!0,_t=Le.__version===void 0||oe===!0,qe=ae.dataReady,v=y(M,fe);if(M.isDepthTexture)Ie=i.DEPTH_COMPONENT16,M.type===Ui?Ie=i.DEPTH_COMPONENT32F:M.type===No?Ie=i.DEPTH_COMPONENT24:M.type===mr&&(Ie=i.DEPTH24_STENCIL8),_t&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Ie,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ie,fe.width,fe.height,0,Ce,st,null));else if(M.isDataTexture)if(Ge.length>0){Ke&&_t&&t.texStorage2D(i.TEXTURE_2D,v,Ie,Ge[0].width,Ge[0].height);for(let F=0,k=Ge.length;F<k;F++)Me=Ge[F],Ke?qe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Me.width,Me.height,Ce,st,Me.data):t.texImage2D(i.TEXTURE_2D,F,Ie,Me.width,Me.height,0,Ce,st,Me.data);M.generateMipmaps=!1}else Ke?(_t&&t.texStorage2D(i.TEXTURE_2D,v,Ie,fe.width,fe.height),qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Ce,st,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,fe.width,fe.height,0,Ce,st,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,v,Ie,Ge[0].width,Ge[0].height,fe.depth);for(let F=0,k=Ge.length;F<k;F++)Me=Ge[F],M.format!==_i?Ce!==null?Ke?qe&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Me.width,Me.height,fe.depth,Ce,Me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,Ie,Me.width,Me.height,fe.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Me.width,Me.height,fe.depth,Ce,st,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,Ie,Me.width,Me.height,fe.depth,0,Ce,st,Me.data)}else{Ke&&_t&&t.texStorage2D(i.TEXTURE_2D,v,Ie,Ge[0].width,Ge[0].height);for(let F=0,k=Ge.length;F<k;F++)Me=Ge[F],M.format!==_i?Ce!==null?Ke?qe&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,Me.width,Me.height,Ce,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,F,Ie,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?qe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Me.width,Me.height,Ce,st,Me.data):t.texImage2D(i.TEXTURE_2D,F,Ie,Me.width,Me.height,0,Ce,st,Me.data)}else if(M.isDataArrayTexture)Ke?(_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,v,Ie,fe.width,fe.height,fe.depth),qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ce,st,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,fe.width,fe.height,fe.depth,0,Ce,st,fe.data);else if(M.isData3DTexture)Ke?(_t&&t.texStorage3D(i.TEXTURE_3D,v,Ie,fe.width,fe.height,fe.depth),qe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ce,st,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,fe.width,fe.height,fe.depth,0,Ce,st,fe.data);else if(M.isFramebufferTexture){if(_t)if(Ke)t.texStorage2D(i.TEXTURE_2D,v,Ie,fe.width,fe.height);else{let F=fe.width,k=fe.height;for(let se=0;se<v;se++)t.texImage2D(i.TEXTURE_2D,se,Ie,F,k,0,Ce,st,null),F>>=1,k>>=1}}else if(Ge.length>0){if(Ke&&_t){const F=wt(Ge[0]);t.texStorage2D(i.TEXTURE_2D,v,Ie,F.width,F.height)}for(let F=0,k=Ge.length;F<k;F++)Me=Ge[F],Ke?qe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Ce,st,Me):t.texImage2D(i.TEXTURE_2D,F,Ie,Ce,st,Me);M.generateMipmaps=!1}else if(Ke){if(_t){const F=wt(fe);t.texStorage2D(i.TEXTURE_2D,v,Ie,F.width,F.height)}qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,st,fe)}else t.texImage2D(i.TEXTURE_2D,0,Ie,Ce,st,fe);p(M)&&f(ie),Le.__version=ae.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function dt(b,M,Y){if(M.image.length!==6)return;const ie=we(b,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+Y);const ae=n.get(oe);if(oe.version!==ae.__version||ie===!0){t.activeTexture(i.TEXTURE0+Y);const Le=vt.getPrimaries(vt.workingColorSpace),xe=M.colorSpace===Ji?null:vt.getPrimaries(M.colorSpace),ve=M.colorSpace===Ji||Le===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ve=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,Ce=[];for(let k=0;k<6;k++)!Ve&&!fe?Ce[k]=_(M.image[k],!0,s.maxCubemapSize):Ce[k]=fe?M.image[k].image:M.image[k],Ce[k]=it(M,Ce[k]);const st=Ce[0],Ie=o.convert(M.format,M.colorSpace),Me=o.convert(M.type),Ge=E(M.internalFormat,Ie,Me,M.colorSpace),Ke=M.isVideoTexture!==!0,_t=ae.__version===void 0||ie===!0,qe=oe.dataReady;let v=y(M,st);le(i.TEXTURE_CUBE_MAP,M);let F;if(Ve){Ke&&_t&&t.texStorage2D(i.TEXTURE_CUBE_MAP,v,Ge,st.width,st.height);for(let k=0;k<6;k++){F=Ce[k].mipmaps;for(let se=0;se<F.length;se++){const de=F[se];M.format!==_i?Ie!==null?Ke?qe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,0,0,de.width,de.height,Ie,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,Ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,0,0,de.width,de.height,Ie,Me,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se,Ge,de.width,de.height,0,Ie,Me,de.data)}}}else{if(F=M.mipmaps,Ke&&_t){F.length>0&&v++;const k=wt(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,v,Ge,k.width,k.height)}for(let k=0;k<6;k++)if(fe){Ke?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Ce[k].width,Ce[k].height,Ie,Me,Ce[k].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ge,Ce[k].width,Ce[k].height,0,Ie,Me,Ce[k].data);for(let se=0;se<F.length;se++){const We=F[se].image[k].image;Ke?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,0,0,We.width,We.height,Ie,Me,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,Ge,We.width,We.height,0,Ie,Me,We.data)}}else{Ke?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Ie,Me,Ce[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ge,Ie,Me,Ce[k]);for(let se=0;se<F.length;se++){const de=F[se];Ke?qe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,0,0,Ie,Me,de.image[k]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se+1,Ge,Ie,Me,de.image[k])}}}p(M)&&f(i.TEXTURE_CUBE_MAP),ae.__version=oe.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function J(b,M,Y,ie,oe,ae){const Le=o.convert(Y.format,Y.colorSpace),xe=o.convert(Y.type),ve=E(Y.internalFormat,Le,xe,Y.colorSpace);if(!n.get(M).__hasExternalTextures){const fe=Math.max(1,M.width>>ae),Ce=Math.max(1,M.height>>ae);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ae,ve,fe,Ce,M.depth,0,Le,xe,null):t.texImage2D(oe,ae,ve,fe,Ce,0,Le,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),nt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,oe,n.get(Y).__webglTexture,0,De(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,oe,n.get(Y).__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(b,M,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let ie=i.DEPTH_COMPONENT24;if(Y||nt(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Ui?ie=i.DEPTH_COMPONENT32F:oe.type===No&&(ie=i.DEPTH_COMPONENT24));const ae=De(M);nt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,ie,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ie,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const ie=De(M);Y&&nt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,M.width,M.height):nt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const ie=M.textures;for(let oe=0;oe<ie.length;oe++){const ae=ie[oe],Le=o.convert(ae.format,ae.colorSpace),xe=o.convert(ae.type),ve=E(ae.internalFormat,Le,xe,ae.colorSpace),Ve=De(M);Y&&nt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,ve,M.width,M.height):nt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,ve,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ve,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),L(M.depthTexture,0);const ie=n.get(M.depthTexture).__webglTexture,oe=De(M);if(M.depthTexture.format===mo)nt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(M.depthTexture.format===rr)nt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ge(b){const M=n.get(b),Y=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Te(M.__webglFramebuffer,b)}else if(Y){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=i.createRenderbuffer(),he(M.__webglDepthbuffer[ie],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),he(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(b,M,Y){const ie=n.get(b);M!==void 0&&J(ie.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ge(b)}function $e(b){const M=b.texture,Y=n.get(b),ie=n.get(M);b.addEventListener("dispose",D);const oe=b.textures,ae=b.isWebGLCubeRenderTarget===!0,Le=oe.length>1;if(Le||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=M.version,r.memory.textures++),ae){Y.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[xe]=[];for(let ve=0;ve<M.mipmaps.length;ve++)Y.__webglFramebuffer[xe][ve]=i.createFramebuffer()}else Y.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)Y.__webglFramebuffer[xe]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Le)for(let xe=0,ve=oe.length;xe<ve;xe++){const Ve=n.get(oe[xe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),r.memory.textures++)}if(b.samples>0&&nt(b)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let xe=0;xe<oe.length;xe++){const ve=oe[xe];Y.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[xe]);const Ve=o.convert(ve.format,ve.colorSpace),fe=o.convert(ve.type),Ce=E(ve.internalFormat,Ve,fe,ve.colorSpace,b.isXRRenderTarget===!0),st=De(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Ce,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,Y.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),he(Y.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),le(i.TEXTURE_CUBE_MAP,M);for(let xe=0;xe<6;xe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)J(Y.__webglFramebuffer[xe][ve],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ve);else J(Y.__webglFramebuffer[xe],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);p(M)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let xe=0,ve=oe.length;xe<ve;xe++){const Ve=oe[xe],fe=n.get(Ve);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),le(i.TEXTURE_2D,Ve),J(Y.__webglFramebuffer,b,Ve,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),p(Ve)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(xe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,ie.__webglTexture),le(xe,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)J(Y.__webglFramebuffer[ve],b,M,i.COLOR_ATTACHMENT0,xe,ve);else J(Y.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,xe,0);p(M)&&f(xe),t.unbindTexture()}b.depthBuffer&&ge(b)}function B(b){const M=b.textures;for(let Y=0,ie=M.length;Y<ie;Y++){const oe=M[Y];if(p(oe)){const ae=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Le=n.get(oe).__webglTexture;t.bindTexture(ae,Le),f(ae),t.unbindTexture()}}}const mt=[],Pe=[];function gt(b){if(b.samples>0){if(nt(b)===!1){const M=b.textures,Y=b.width,ie=b.height;let oe=i.COLOR_BUFFER_BIT;const ae=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(b),xe=M.length>1;if(xe)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[ve]);const Ve=n.get(M[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,oe,i.NEAREST),c===!0&&(mt.length=0,Pe.length=0,mt.push(i.COLOR_ATTACHMENT0+ve),b.depthBuffer&&b.resolveDepthBuffer===!1&&(mt.push(ae),Pe.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Le.__webglColorRenderbuffer[ve]);const Ve=n.get(M[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const M=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function De(b){return Math.min(s.maxSamples,b.samples)}function nt(b){const M=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ke(b){const M=r.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function it(b,M){const Y=b.colorSpace,ie=b.format,oe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Y!==li&&Y!==Ji&&(vt.getTransfer(Y)===At?(ie!==_i||oe!==as)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function wt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=x,this.setTexture2D=L,this.setTexture2DArray=Q,this.setTexture3D=ee,this.setTextureCube=re,this.rebindTextures=tt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=J,this.useMultisampledRTT=nt}function wM(i,e){function t(n,s=Ji){let o;const r=vt.getTransfer(s);if(n===as)return i.UNSIGNED_BYTE;if(n===Pd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Id)return i.UNSIGNED_SHORT_5_5_5_1;if(n===e_)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jg)return i.BYTE;if(n===Qg)return i.SHORT;if(n===Cd)return i.UNSIGNED_SHORT;if(n===Ld)return i.INT;if(n===No)return i.UNSIGNED_INT;if(n===Ui)return i.FLOAT;if(n===pr)return i.HALF_FLOAT;if(n===t_)return i.ALPHA;if(n===n_)return i.RGB;if(n===_i)return i.RGBA;if(n===i_)return i.LUMINANCE;if(n===s_)return i.LUMINANCE_ALPHA;if(n===mo)return i.DEPTH_COMPONENT;if(n===rr)return i.DEPTH_STENCIL;if(n===o_)return i.RED;if(n===Dd)return i.RED_INTEGER;if(n===r_)return i.RG;if(n===Ud)return i.RG_INTEGER;if(n===Od)return i.RGBA_INTEGER;if(n===Ja||n===Qa||n===ec||n===tc)if(r===At)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ja)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ja)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ec)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vu||n===xu||n===yu||n===Mu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===vu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Su||n===Tu||n===Eu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Su||n===Tu)return r===At?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Eu)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Au||n===Nu||n===wu||n===bu||n===Ru||n===Cu||n===Lu||n===Pu||n===Iu||n===Du||n===Uu||n===Ou||n===Fu||n===Vu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Au)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nu)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wu)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bu)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ru)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cu)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lu)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pu)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Iu)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Du)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uu)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ou)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fu)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vu)return r===At?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===zu||n===Bu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===nc)return r===At?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===a_||n===Hu||n===ku||n===Gu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===nc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Hu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ku)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class bM extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class co extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new co;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const CM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new gn,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new xi({vertexShader:CM,fragmentShader:LM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pn(new Io(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class IM extends zi{constructor(e,t){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const _=new PM,p=t.getContextAttributes();let f=null,E=null;const y=[],A=[],D=new Se;let R=null;const N=new En;N.layers.enable(1),N.viewport=new at;const z=new En;z.layers.enable(2),z.viewport=new at;const S=[N,z],x=new bM;x.layers.enable(1),x.layers.enable(2);let H=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let he=y[J];return he===void 0&&(he=new wc,y[J]=he),he.getTargetRaySpace()},this.getControllerGrip=function(J){let he=y[J];return he===void 0&&(he=new wc,y[J]=he),he.getGripSpace()},this.getHand=function(J){let he=y[J];return he===void 0&&(he=new wc,y[J]=he),he.getHandSpace()};function L(J){const he=A.indexOf(J.inputSource);if(he===-1)return;const Te=y[he];Te!==void 0&&(Te.update(J.inputSource,J.frame,l||r),Te.dispatchEvent({type:J.type,data:J.inputSource}))}function Q(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ee);for(let J=0;J<y.length;J++){const he=A[J];he!==null&&(A[J]=null,y[J].disconnect(he))}H=null,j=null,_.reset(),e.setRenderTarget(f),m=null,d=null,h=null,s=null,E=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ee),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Ls(m.framebufferWidth,m.framebufferHeight,{format:_i,type:as,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,Te=null,ge=null;p.depth&&(ge=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?rr:mo,Te=p.stencil?mr:No);const tt={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:o};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Ls(d.textureWidth,d.textureHeight,{format:_i,type:as,depthTexture:new _r(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function ee(J){for(let he=0;he<J.removed.length;he++){const Te=J.removed[he],ge=A.indexOf(Te);ge>=0&&(A[ge]=null,y[ge].disconnect(Te))}for(let he=0;he<J.added.length;he++){const Te=J.added[he];let ge=A.indexOf(Te);if(ge===-1){for(let $e=0;$e<y.length;$e++)if($e>=A.length){A.push(Te),ge=$e;break}else if(A[$e]===null){A[$e]=Te,ge=$e;break}if(ge===-1)break}const tt=y[ge];tt&&tt.connect(Te)}}const re=new P,ce=new P;function $(J,he,Te){re.setFromMatrixPosition(he.matrixWorld),ce.setFromMatrixPosition(Te.matrixWorld);const ge=re.distanceTo(ce),tt=he.projectionMatrix.elements,$e=Te.projectionMatrix.elements,B=tt[14]/(tt[10]-1),mt=tt[14]/(tt[10]+1),Pe=(tt[9]+1)/tt[5],gt=(tt[9]-1)/tt[5],De=(tt[8]-1)/tt[0],nt=($e[8]+1)/$e[0],ke=B*De,it=B*nt,wt=ge/(-De+nt),b=wt*-De;he.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(b),J.translateZ(wt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const M=B+wt,Y=mt+wt,ie=ke-b,oe=it+(ge-b),ae=Pe*mt/Y*M,Le=gt*mt/Y*M;J.projectionMatrix.makePerspective(ie,oe,ae,Le,M,Y),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function ue(J,he){he===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(he.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;_.texture!==null&&(J.near=_.depthNear,J.far=_.depthFar),x.near=z.near=N.near=J.near,x.far=z.far=N.far=J.far,(H!==x.near||j!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),H=x.near,j=x.far,N.near=H,N.far=j,z.near=H,z.far=j,N.updateProjectionMatrix(),z.updateProjectionMatrix(),J.updateProjectionMatrix());const he=J.parent,Te=x.cameras;ue(x,he);for(let ge=0;ge<Te.length;ge++)ue(Te[ge],he);Te.length===2?$(x,N,z):x.projectionMatrix.copy(N.projectionMatrix),le(J,x,he)};function le(J,he,Te){Te===null?J.matrix.copy(he.matrixWorld):(J.matrix.copy(Te.matrixWorld),J.matrix.invert(),J.matrix.multiply(he.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=bo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null};let we=null;function et(J,he){if(u=he.getViewerPose(l||r),g=he,u!==null){const Te=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let ge=!1;Te.length!==x.cameras.length&&(x.cameras.length=0,ge=!0);for(let $e=0;$e<Te.length;$e++){const B=Te[$e];let mt=null;if(m!==null)mt=m.getViewport(B);else{const gt=h.getViewSubImage(d,B);mt=gt.viewport,$e===0&&(e.setRenderTargetTextures(E,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(E))}let Pe=S[$e];Pe===void 0&&(Pe=new En,Pe.layers.enable($e),Pe.viewport=new at,S[$e]=Pe),Pe.matrix.fromArray(B.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(B.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(mt.x,mt.y,mt.width,mt.height),$e===0&&(x.matrix.copy(Pe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ge===!0&&x.cameras.push(Pe)}const tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const $e=h.getDepthInformation(Te[0]);$e&&$e.isValid&&$e.texture&&_.init(e,$e,s.renderState)}}for(let Te=0;Te<y.length;Te++){const ge=A[Te],tt=y[Te];ge!==null&&tt!==void 0&&tt.update(ge,he,l||r)}_.render(e,x),we&&we(J,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}const dt=new Jd;dt.setAnimationLoop(et),this.setAnimationLoop=function(J){we=J},this.dispose=function(){}}}const ys=new jn,DM=new Rt;function UM(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,jd(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,y,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(p,f):f.isMeshToonMaterial?(o(p,f),h(p,f)):f.isMeshPhongMaterial?(o(p,f),u(p,f)):f.isMeshStandardMaterial?(o(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(o(p,f),g(p,f)):f.isMeshDepthMaterial?o(p,f):f.isMeshDistanceMaterial?(o(p,f),_(p,f)):f.isMeshNormalMaterial?o(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,E,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===mn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===mn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),y=E.envMap,A=E.envMapRotation;if(y&&(p.envMap.value=y,ys.copy(A),ys.x*=-1,ys.y*=-1,ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),p.envMapRotation.value.setFromMatrix4(DM.makeRotationFromEuler(ys)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const D=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*D,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function OM(i,e,t,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const A=y.program;n.uniformBlockBinding(E,A)}function l(E,y){let A=s[E.id];A===void 0&&(g(E),A=u(E),s[E.id]=A,E.addEventListener("dispose",p));const D=y.program;n.updateUBOMapping(E,D);const R=e.render.frame;o[E.id]!==R&&(d(E),o[E.id]=R)}function u(E){const y=h();E.__bindingPointIndex=y;const A=i.createBuffer(),D=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,D,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,A),A}function h(){for(let E=0;E<a;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=s[E.id],A=E.uniforms,D=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,N=A.length;R<N;R++){const z=Array.isArray(A[R])?A[R]:[A[R]];for(let S=0,x=z.length;S<x;S++){const H=z[S];if(m(H,R,S,D)===!0){const j=H.__offset,L=Array.isArray(H.value)?H.value:[H.value];let Q=0;for(let ee=0;ee<L.length;ee++){const re=L[ee],ce=_(re);typeof re=="number"||typeof re=="boolean"?(H.__data[0]=re,i.bufferSubData(i.UNIFORM_BUFFER,j+Q,H.__data)):re.isMatrix3?(H.__data[0]=re.elements[0],H.__data[1]=re.elements[1],H.__data[2]=re.elements[2],H.__data[3]=0,H.__data[4]=re.elements[3],H.__data[5]=re.elements[4],H.__data[6]=re.elements[5],H.__data[7]=0,H.__data[8]=re.elements[6],H.__data[9]=re.elements[7],H.__data[10]=re.elements[8],H.__data[11]=0):(re.toArray(H.__data,Q),Q+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,y,A,D){const R=E.value,N=y+"_"+A;if(D[N]===void 0)return typeof R=="number"||typeof R=="boolean"?D[N]=R:D[N]=R.clone(),!0;{const z=D[N];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return D[N]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function g(E){const y=E.uniforms;let A=0;const D=16;for(let N=0,z=y.length;N<z;N++){const S=Array.isArray(y[N])?y[N]:[y[N]];for(let x=0,H=S.length;x<H;x++){const j=S[x],L=Array.isArray(j.value)?j.value:[j.value];for(let Q=0,ee=L.length;Q<ee;Q++){const re=L[Q],ce=_(re),$=A%D;$!==0&&D-$<ce.boundary&&(A+=D-$),j.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=A,A+=ce.storage}}}const R=A%D;return R>0&&(A+=D-R),E.__size=A,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function p(E){const y=E.target;y.removeEventListener("dispose",p);const A=r.indexOf(y.__bindingPointIndex);r.splice(A,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);r=[],s={},o={}}return{bind:c,update:l,dispose:f}}class FM{constructor(e={}){const{canvas:t=P_(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this._useLegacyLights=!1,this.toneMapping=Xn,this.toneMappingExposure=1;const y=this;let A=!1,D=0,R=0,N=null,z=-1,S=null;const x=new at,H=new at;let j=null;const L=new Oe(0);let Q=0,ee=t.width,re=t.height,ce=1,$=null,ue=null;const le=new at(0,0,ee,re),we=new at(0,0,ee,re);let et=!1;const dt=new Ll;let J=!1,he=!1;const Te=new Rt,ge=new P,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return N===null?ce:1}let B=n;function mt(T,V){return t.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${El}`),t.addEventListener("webglcontextlost",v,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",k,!1),B===null){const V="webgl2";if(B=mt(V,T),B===null)throw mt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Pe,gt,De,nt,ke,it,wt,b,M,Y,ie,oe,ae,Le,xe,ve,Ve,fe,Ce,st,Ie,Me,Ge,Ke;function _t(){Pe=new Xx(B),Pe.init(),Me=new wM(B,Pe),gt=new zx(B,Pe,e,Me),De=new AM(B),nt=new jx(B),ke=new hM,it=new NM(B,Pe,De,ke,gt,Me,nt),wt=new Hx(y),b=new Wx(y),M=new t0(B),Ge=new Fx(B,M),Y=new qx(B,M,nt,Ge),ie=new Kx(B,Y,M,nt),Ce=new $x(B,gt,it),ve=new Bx(ke),oe=new uM(y,wt,b,Pe,gt,Ge,ve),ae=new UM(y,ke),Le=new fM,xe=new xM(Pe),fe=new Ox(y,wt,b,De,ie,d,c),Ve=new EM(y,ie,gt),Ke=new OM(B,nt,gt,De),st=new Vx(B,Pe,nt),Ie=new Yx(B,Pe,nt),nt.programs=oe.programs,y.capabilities=gt,y.extensions=Pe,y.properties=ke,y.renderLists=Le,y.shadowMap=Ve,y.state=De,y.info=nt}_t();const qe=new IM(y,B);this.xr=qe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(T){T!==void 0&&(ce=T,this.setSize(ee,re,!1))},this.getSize=function(T){return T.set(ee,re)},this.setSize=function(T,V,q=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=T,re=V,t.width=Math.floor(T*ce),t.height=Math.floor(V*ce),q===!0&&(t.style.width=T+"px",t.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(ee*ce,re*ce).floor()},this.setDrawingBufferSize=function(T,V,q){ee=T,re=V,ce=q,t.width=Math.floor(T*q),t.height=Math.floor(V*q),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(le)},this.setViewport=function(T,V,q,W){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,V,q,W),De.viewport(x.copy(le).multiplyScalar(ce).round())},this.getScissor=function(T){return T.copy(we)},this.setScissor=function(T,V,q,W){T.isVector4?we.set(T.x,T.y,T.z,T.w):we.set(T,V,q,W),De.scissor(H.copy(we).multiplyScalar(ce).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(T){De.setScissorTest(et=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){ue=T},this.getClearColor=function(T){return T.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(T=!0,V=!0,q=!0){let W=0;if(T){let X=!1;if(N!==null){const ye=N.texture.format;X=ye===Od||ye===Ud||ye===Dd}if(X){const ye=N.texture.type,Ne=ye===as||ye===No||ye===Cd||ye===mr||ye===Pd||ye===Id,be=fe.getClearColor(),Ue=fe.getClearAlpha(),ze=be.r,Ye=be.g,Je=be.b;Ne?(m[0]=ze,m[1]=Ye,m[2]=Je,m[3]=Ue,B.clearBufferuiv(B.COLOR,0,m)):(g[0]=ze,g[1]=Ye,g[2]=Je,g[3]=Ue,B.clearBufferiv(B.COLOR,0,g))}else W|=B.COLOR_BUFFER_BIT}V&&(W|=B.DEPTH_BUFFER_BIT),q&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",v,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",k,!1),Le.dispose(),xe.dispose(),ke.dispose(),wt.dispose(),b.dispose(),ie.dispose(),Ge.dispose(),Ke.dispose(),oe.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",rt),qe.removeEventListener("sessionend",zt),Et.stop()};function v(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=nt.autoReset,V=Ve.enabled,q=Ve.autoUpdate,W=Ve.needsUpdate,X=Ve.type;_t(),nt.autoReset=T,Ve.enabled=V,Ve.autoUpdate=q,Ve.needsUpdate=W,Ve.type=X}function k(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){const V=T.target;V.removeEventListener("dispose",se),de(V)}function de(T){We(T),ke.remove(T)}function We(T){const V=ke.get(T).programs;V!==void 0&&(V.forEach(function(q){oe.releaseProgram(q)}),T.isShaderMaterial&&oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,q,W,X,ye){V===null&&(V=tt);const Ne=X.isMesh&&X.matrixWorld.determinant()<0,be=gg(T,V,q,W,X);De.setMaterial(W,Ne);let Ue=q.index,ze=1;if(W.wireframe===!0){if(Ue=Y.getWireframeAttribute(q),Ue===void 0)return;ze=2}const Ye=q.drawRange,Je=q.attributes.position;let Bt=Ye.start*ze,an=(Ye.start+Ye.count)*ze;ye!==null&&(Bt=Math.max(Bt,ye.start*ze),an=Math.min(an,(ye.start+ye.count)*ze)),Ue!==null?(Bt=Math.max(Bt,0),an=Math.min(an,Ue.count)):Je!=null&&(Bt=Math.max(Bt,0),an=Math.min(an,Je.count));const Rn=an-Bt;if(Rn<0||Rn===1/0)return;Ge.setup(X,W,be,q,Ue);let Ai,lt=st;if(Ue!==null&&(Ai=M.get(Ue),lt=Ie,lt.setIndex(Ai)),X.isMesh)W.wireframe===!0?(De.setLineWidth(W.wireframeLinewidth*$e()),lt.setMode(B.LINES)):lt.setMode(B.TRIANGLES);else if(X.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),De.setLineWidth(Be*$e()),X.isLineSegments?lt.setMode(B.LINES):X.isLineLoop?lt.setMode(B.LINE_LOOP):lt.setMode(B.LINE_STRIP)}else X.isPoints?lt.setMode(B.POINTS):X.isSprite&&lt.setMode(B.TRIANGLES);if(X.isBatchedMesh)X._multiDrawInstances!==null?lt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances):lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)lt.renderInstances(Bt,Rn,X.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Wo=Math.min(q.instanceCount,Be);lt.renderInstances(Bt,Rn,Wo)}else lt.render(Bt,Rn)};function Ze(T,V,q){T.transparent===!0&&T.side===Di&&T.forceSinglePass===!1?(T.side=mn,T.needsUpdate=!0,Nr(T,V,q),T.side=rs,T.needsUpdate=!0,Nr(T,V,q),T.side=Di):Nr(T,V,q)}this.compile=function(T,V,q=null){q===null&&(q=T),p=xe.get(q),p.init(V),E.push(p),q.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),T!==q&&T.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(y._useLegacyLights);const W=new Set;return T.traverse(function(X){const ye=X.material;if(ye)if(Array.isArray(ye))for(let Ne=0;Ne<ye.length;Ne++){const be=ye[Ne];Ze(be,q,X),W.add(be)}else Ze(ye,q,X),W.add(ye)}),E.pop(),p=null,W},this.compileAsync=function(T,V,q=null){const W=this.compile(T,V,q);return new Promise(X=>{function ye(){if(W.forEach(function(Ne){ke.get(Ne).currentProgram.isReady()&&W.delete(Ne)}),W.size===0){X(T);return}setTimeout(ye,10)}Pe.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Lt=null;function Kt(T){Lt&&Lt(T)}function rt(){Et.stop()}function zt(){Et.start()}const Et=new Jd;Et.setAnimationLoop(Kt),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(T){Lt=T,qe.setAnimationLoop(T),T===null?Et.stop():Et.start()},qe.addEventListener("sessionstart",rt),qe.addEventListener("sessionend",zt),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(V),V=qe.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,V,N),p=xe.get(T,E.length),p.init(V),E.push(p),Te.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),dt.setFromProjectionMatrix(Te),he=this.localClippingEnabled,J=ve.init(this.clippingPlanes,he),_=Le.get(T,f.length),_.init(),f.push(_),ki(T,V,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort($,ue);const q=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1;q&&fe.addToRenderList(_,T),this.info.render.frame++,J===!0&&ve.beginShadows();const W=p.state.shadowsArray;Ve.render(W,T,V),J===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,ye=_.transmissive;if(p.setupLights(y._useLegacyLights),V.isArrayCamera){const Ne=V.cameras;if(ye.length>0)for(let be=0,Ue=Ne.length;be<Ue;be++){const ze=Ne[be];Gi(X,ye,T,ze)}q&&fe.render(T);for(let be=0,Ue=Ne.length;be<Ue;be++){const ze=Ne[be];Bn(_,T,ze,ze.viewport)}}else ye.length>0&&Gi(X,ye,T,V),q&&fe.render(T),Bn(_,T,V);N!==null&&(it.updateMultisampleRenderTarget(N),it.updateRenderTargetMipmap(N)),T.isScene===!0&&T.onAfterRender(y,T,V),Ge.resetDefaultState(),z=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],J===!0&&ve.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ki(T,V,q,W){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||dt.intersectsSprite(T)){W&&ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const Ne=ie.update(T),be=T.material;be.visible&&_.push(T,Ne,be,q,ge.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||dt.intersectsObject(T))){const Ne=ie.update(T),be=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ge.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ge.copy(Ne.boundingSphere.center)),ge.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(be)){const Ue=Ne.groups;for(let ze=0,Ye=Ue.length;ze<Ye;ze++){const Je=Ue[ze],Bt=be[Je.materialIndex];Bt&&Bt.visible&&_.push(T,Ne,Bt,q,ge.z,Je)}}else be.visible&&_.push(T,Ne,be,q,ge.z,null)}}const ye=T.children;for(let Ne=0,be=ye.length;Ne<be;Ne++)ki(ye[Ne],V,q,W)}function Bn(T,V,q,W){const X=T.opaque,ye=T.transmissive,Ne=T.transparent;p.setupLightsView(q),J===!0&&ve.setGlobalState(y.clippingPlanes,q),W&&De.viewport(x.copy(W)),X.length>0&&Ei(X,V,q),ye.length>0&&Ei(ye,V,q),Ne.length>0&&Ei(Ne,V,q),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Gi(T,V,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Ls(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float")?pr:as,minFilter:Qi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ye=p.state.transmissionRenderTarget[W.id],Ne=W.viewport||x;ye.setSize(Ne.z,Ne.w);const be=y.getRenderTarget();y.setRenderTarget(ye),y.getClearColor(L),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear();const Ue=y.toneMapping;y.toneMapping=Xn;const ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),J===!0&&ve.setGlobalState(y.clippingPlanes,W),Ei(T,q,W),it.updateMultisampleRenderTarget(ye),it.updateRenderTargetMipmap(ye),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Je=0,Bt=V.length;Je<Bt;Je++){const an=V[Je],Rn=an.object,Ai=an.geometry,lt=an.material,Be=an.group;if(lt.side===Di&&Rn.layers.test(W.layers)){const Wo=lt.side;lt.side=mn,lt.needsUpdate=!0,Go(Rn,q,W,Ai,lt,Be),lt.side=Wo,lt.needsUpdate=!0,Ye=!0}}Ye===!0&&(it.updateMultisampleRenderTarget(ye),it.updateRenderTargetMipmap(ye))}y.setRenderTarget(be),y.setClearColor(L,Q),ze!==void 0&&(W.viewport=ze),y.toneMapping=Ue}function Ei(T,V,q){const W=V.isScene===!0?V.overrideMaterial:null;for(let X=0,ye=T.length;X<ye;X++){const Ne=T[X],be=Ne.object,Ue=Ne.geometry,ze=W===null?Ne.material:W,Ye=Ne.group;be.layers.test(q.layers)&&Go(be,V,q,Ue,ze,Ye)}}function Go(T,V,q,W,X,ye){T.onBeforeRender(y,V,q,W,X,ye),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(y,V,q,W,T,ye),X.transparent===!0&&X.side===Di&&X.forceSinglePass===!1?(X.side=mn,X.needsUpdate=!0,y.renderBufferDirect(q,V,W,X,T,ye),X.side=rs,X.needsUpdate=!0,y.renderBufferDirect(q,V,W,X,T,ye),X.side=Di):y.renderBufferDirect(q,V,W,X,T,ye),T.onAfterRender(y,V,q,W,X,ye)}function Nr(T,V,q){V.isScene!==!0&&(V=tt);const W=ke.get(T),X=p.state.lights,ye=p.state.shadowsArray,Ne=X.state.version,be=oe.getParameters(T,X.state,ye,V,q),Ue=oe.getProgramCacheKey(be);let ze=W.programs;W.environment=T.isMeshStandardMaterial?V.environment:null,W.fog=V.fog,W.envMap=(T.isMeshStandardMaterial?b:wt).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",se),ze=new Map,W.programs=ze);let Ye=ze.get(Ue);if(Ye!==void 0){if(W.currentProgram===Ye&&W.lightsStateVersion===Ne)return hu(T,be),Ye}else be.uniforms=oe.getUniforms(T),T.onBuild(q,be,y),T.onBeforeCompile(be,y),Ye=oe.acquireProgram(be,Ue),ze.set(Ue,Ye),W.uniforms=be.uniforms;const Je=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Je.clippingPlanes=ve.uniform),hu(T,be),W.needsLights=vg(T),W.lightsStateVersion=Ne,W.needsLights&&(Je.ambientLightColor.value=X.state.ambient,Je.lightProbe.value=X.state.probe,Je.directionalLights.value=X.state.directional,Je.directionalLightShadows.value=X.state.directionalShadow,Je.spotLights.value=X.state.spot,Je.spotLightShadows.value=X.state.spotShadow,Je.rectAreaLights.value=X.state.rectArea,Je.ltc_1.value=X.state.rectAreaLTC1,Je.ltc_2.value=X.state.rectAreaLTC2,Je.pointLights.value=X.state.point,Je.pointLightShadows.value=X.state.pointShadow,Je.hemisphereLights.value=X.state.hemi,Je.directionalShadowMap.value=X.state.directionalShadowMap,Je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Je.spotShadowMap.value=X.state.spotShadowMap,Je.spotLightMatrix.value=X.state.spotLightMatrix,Je.spotLightMap.value=X.state.spotLightMap,Je.pointShadowMap.value=X.state.pointShadowMap,Je.pointShadowMatrix.value=X.state.pointShadowMatrix),W.currentProgram=Ye,W.uniformsList=null,Ye}function uu(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Qr.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function hu(T,V){const q=ke.get(T);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function gg(T,V,q,W,X){V.isScene!==!0&&(V=tt),it.resetTextureUnits();const ye=V.fog,Ne=W.isMeshStandardMaterial?V.environment:null,be=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:li,Ue=(W.isMeshStandardMaterial?b:wt).get(W.envMap||Ne),ze=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Je=!!q.morphAttributes.position,Bt=!!q.morphAttributes.normal,an=!!q.morphAttributes.color;let Rn=Xn;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Rn=y.toneMapping);const Ai=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=Ai!==void 0?Ai.length:0,Be=ke.get(W),Wo=p.state.lights;if(J===!0&&(he===!0||T!==S)){const Hn=T===S&&W.id===z;ve.setState(W,T,Hn)}let bt=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Wo.state.version||Be.outputColorSpace!==be||X.isBatchedMesh&&Be.batching===!1||!X.isBatchedMesh&&Be.batching===!0||X.isInstancedMesh&&Be.instancing===!1||!X.isInstancedMesh&&Be.instancing===!0||X.isSkinnedMesh&&Be.skinning===!1||!X.isSkinnedMesh&&Be.skinning===!0||X.isInstancedMesh&&Be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Be.instancingMorph===!1&&X.morphTexture!==null||Be.envMap!==Ue||W.fog===!0&&Be.fog!==ye||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ve.numPlanes||Be.numIntersection!==ve.numIntersection)||Be.vertexAlphas!==ze||Be.vertexTangents!==Ye||Be.morphTargets!==Je||Be.morphNormals!==Bt||Be.morphColors!==an||Be.toneMapping!==Rn||Be.morphTargetsCount!==lt)&&(bt=!0):(bt=!0,Be.__version=W.version);let ps=Be.currentProgram;bt===!0&&(ps=Nr(W,V,X));let du=!1,Xo=!1,ja=!1;const cn=ps.getUniforms(),Wi=Be.uniforms;if(De.useProgram(ps.program)&&(du=!0,Xo=!0,ja=!0),W.id!==z&&(z=W.id,Xo=!0),du||S!==T){cn.setValue(B,"projectionMatrix",T.projectionMatrix),cn.setValue(B,"viewMatrix",T.matrixWorldInverse);const Hn=cn.map.cameraPosition;Hn!==void 0&&Hn.setValue(B,ge.setFromMatrixPosition(T.matrixWorld)),gt.logarithmicDepthBuffer&&cn.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&cn.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Xo=!0,ja=!0)}if(X.isSkinnedMesh){cn.setOptional(B,X,"bindMatrix"),cn.setOptional(B,X,"bindMatrixInverse");const Hn=X.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),cn.setValue(B,"boneTexture",Hn.boneTexture,it))}X.isBatchedMesh&&(cn.setOptional(B,X,"batchingTexture"),cn.setValue(B,"batchingTexture",X._matricesTexture,it));const $a=q.morphAttributes;if(($a.position!==void 0||$a.normal!==void 0||$a.color!==void 0)&&Ce.update(X,q,ps),(Xo||Be.receiveShadow!==X.receiveShadow)&&(Be.receiveShadow=X.receiveShadow,cn.setValue(B,"receiveShadow",X.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Wi.envMap.value=Ue,Wi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&V.environment!==null&&(Wi.envMapIntensity.value=V.environmentIntensity),Xo&&(cn.setValue(B,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&_g(Wi,ja),ye&&W.fog===!0&&ae.refreshFogUniforms(Wi,ye),ae.refreshMaterialUniforms(Wi,W,ce,re,p.state.transmissionRenderTarget[T.id]),Qr.upload(B,uu(Be),Wi,it)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Qr.upload(B,uu(Be),Wi,it),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&cn.setValue(B,"center",X.center),cn.setValue(B,"modelViewMatrix",X.modelViewMatrix),cn.setValue(B,"normalMatrix",X.normalMatrix),cn.setValue(B,"modelMatrix",X.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Hn=W.uniformsGroups;for(let Ka=0,xg=Hn.length;Ka<xg;Ka++){const fu=Hn[Ka];Ke.update(fu,ps),Ke.bind(fu,ps)}}return ps}function _g(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function vg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,V,q){ke.get(T.texture).__webglTexture=V,ke.get(T.depthTexture).__webglTexture=q;const W=ke.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=q===void 0,W.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){const q=ke.get(T);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,q=0){N=T,D=V,R=q;let W=!0,X=null,ye=!1,Ne=!1;if(T){const Ue=ke.get(T);Ue.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):Ue.__webglFramebuffer===void 0?it.setupRenderTarget(T):Ue.__hasExternalTextures&&it.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ne=!0);const Ye=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ye[V])?X=Ye[V][q]:X=Ye[V],ye=!0):T.samples>0&&it.useMultisampledRTT(T)===!1?X=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(Ye)?X=Ye[q]:X=Ye,x.copy(T.viewport),H.copy(T.scissor),j=T.scissorTest}else x.copy(le).multiplyScalar(ce).floor(),H.copy(we).multiplyScalar(ce).floor(),j=et;if(De.bindFramebuffer(B.FRAMEBUFFER,X)&&W&&De.drawBuffers(T,X),De.viewport(x),De.scissor(H),De.setScissorTest(j),ye){const Ue=ke.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ue.__webglTexture,q)}else if(Ne){const Ue=ke.get(T.texture),ze=V||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.__webglTexture,q||0,ze)}z=-1},this.readRenderTargetPixels=function(T,V,q,W,X,ye,Ne){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(be=be[Ne]),be){De.bindFramebuffer(B.FRAMEBUFFER,be);try{const Ue=T.texture,ze=Ue.format,Ye=Ue.type;if(!gt.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-W&&q>=0&&q<=T.height-X&&B.readPixels(V,q,W,X,Me.convert(ze),Me.convert(Ye),ye)}finally{const Ue=N!==null?ke.get(N).__webglFramebuffer:null;De.bindFramebuffer(B.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(T,V,q=0){const W=Math.pow(2,-q),X=Math.floor(V.image.width*W),ye=Math.floor(V.image.height*W);it.setTexture2D(V,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,T.x,T.y,X,ye),De.unbindTexture()},this.copyTextureToTexture=function(T,V,q,W=0){const X=V.image.width,ye=V.image.height,Ne=Me.convert(q.format),be=Me.convert(q.type);it.setTexture2D(q,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment),V.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,T.x,T.y,X,ye,Ne,be,V.image.data):V.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,Ne,V.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,T.x,T.y,Ne,be,V.image),W===0&&q.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(T,V,q,W,X=0){const ye=T.max.x-T.min.x,Ne=T.max.y-T.min.y,be=T.max.z-T.min.z,Ue=Me.convert(W.format),ze=Me.convert(W.type);let Ye;if(W.isData3DTexture)it.setTexture3D(W,0),Ye=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)it.setTexture2DArray(W,0),Ye=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const Je=B.getParameter(B.UNPACK_ROW_LENGTH),Bt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),an=B.getParameter(B.UNPACK_SKIP_PIXELS),Rn=B.getParameter(B.UNPACK_SKIP_ROWS),Ai=B.getParameter(B.UNPACK_SKIP_IMAGES),lt=q.isCompressedTexture?q.mipmaps[X]:q.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,lt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,T.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,T.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,T.min.z),q.isDataTexture||q.isData3DTexture?B.texSubImage3D(Ye,X,V.x,V.y,V.z,ye,Ne,be,Ue,ze,lt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Ye,X,V.x,V.y,V.z,ye,Ne,be,Ue,lt.data):B.texSubImage3D(Ye,X,V.x,V.y,V.z,ye,Ne,be,Ue,ze,lt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Je),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Bt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,an),B.pixelStorei(B.UNPACK_SKIP_ROWS,Rn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ai),X===0&&W.generateMipmaps&&B.generateMipmap(Ye),De.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?it.setTextureCube(T,0):T.isData3DTexture?it.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?it.setTexture2DArray(T,0):it.setTexture2D(T,0),De.unbindTexture()},this.resetState=function(){D=0,R=0,N=null,De.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Al?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===Ea?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Dl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new Dl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class VM extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class of{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ca,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hd("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vn=new P;class Ul{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),o=ft(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new qn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ul(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zM extends Vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class BM extends qn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class rf extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class af extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class cf extends gn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=fn,this.minFilter=fn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Ol extends Bi{constructor(e=1,t=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const u=[],h=[],d=[],m=[];let g=0;const _=[],p=n/2;let f=0;E(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Yn(h,3)),this.setAttribute("normal",new Yn(d,3)),this.setAttribute("uv",new Yn(m,2));function E(){const A=new P,D=new P;let R=0;const N=(t-e)/n;for(let z=0;z<=o;z++){const S=[],x=z/o,H=x*(t-e)+e;for(let j=0;j<=s;j++){const L=j/s,Q=L*c+a,ee=Math.sin(Q),re=Math.cos(Q);D.x=H*ee,D.y=-x*n+p,D.z=H*re,h.push(D.x,D.y,D.z),A.set(ee,N,re).normalize(),d.push(A.x,A.y,A.z),m.push(L,1-x),S.push(g++)}_.push(S)}for(let z=0;z<s;z++)for(let S=0;S<o;S++){const x=_[S][z],H=_[S+1][z],j=_[S+1][z+1],L=_[S][z+1];u.push(x,H,L),u.push(H,j,L),R+=6}l.addGroup(f,R,0),f+=R}function y(A){const D=g,R=new Se,N=new P;let z=0;const S=A===!0?e:t,x=A===!0?1:-1;for(let j=1;j<=s;j++)h.push(0,p*x,0),d.push(0,x,0),m.push(.5,.5),g++;const H=g;for(let j=0;j<=s;j++){const Q=j/s*c+a,ee=Math.cos(Q),re=Math.sin(Q);N.x=S*re,N.y=p*x,N.z=S*ee,h.push(N.x,N.y,N.z),d.push(0,x,0),R.x=ee*.5+.5,R.y=re*.5*x+.5,m.push(R.x,R.y),g++}for(let j=0;j<s;j++){const L=D+j,Q=H+j;A===!0?u.push(Q,Q+1,L):u.push(Q+1,Q,L),z+=3}l.addGroup(f,z,A===!0?1:2),f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fl extends Ol{constructor(e=1,t=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,e,t,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(e){return new Fl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class HM extends Vn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Oe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Fs extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kM extends Fs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class GM extends Vn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Oe(16777215),this.specular=new Oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class WM extends Vn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class XM extends Vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lf extends rf{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Dh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qM{constructor(e,t,n){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const YM=new qM;class Vl{constructor(e){this.manager=e!==void 0?e:YM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vl.DEFAULT_MATERIAL_NAME="__DEFAULT";class jM extends Vl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,r=Dh.get(e);if(r!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(r),o.manager.itemEnd(e)},0),r;const a=ar("img");function c(){u(),Dh.add(e,this),t&&t(this),o.manager.itemEnd(e)}function l(h){u(),s&&s(h),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class $M extends Vl{constructor(e){super(e)}load(e,t,n,s){const o=new gn,r=new jM(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}class vr extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class KM extends vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bc=new Rt,Uh=new P,Oh=new P;class zl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ll,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uh),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ZM extends zl{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class uf extends vr{constructor(e,t,n=0,s=Math.PI/3,o=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new ZM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fh=new Rt,Ko=new P,Rc=new P;class JM extends zl{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ko.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ko),Rc.copy(n.position),Rc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rc),n.updateMatrixWorld(),s.makeTranslation(-Ko.x,-Ko.y,-Ko.z),Fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh)}}class xr extends vr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new JM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class QM extends zl{constructor(){super(new Pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hf extends vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new QM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class df extends vr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class eS extends of{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Vh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(en(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);const zh={type:"change"},Cc={type:"start"},Bh={type:"end"},$r=new Gd,Hh=new Pi,tS=Math.cos(70*wl.DEG2RAD);class nS extends zi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ks.ROTATE,MIDDLE:ks.DOLLY,RIGHT:ks.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",Ve),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ve),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(zh),n.update(),o=s.NONE},this.update=function(){const v=new P,F=new Ps().setFromUnitVectors(e.up,new P(0,1,0)),k=F.clone().invert(),se=new P,de=new Ps,We=new P,Ze=2*Math.PI;return function(Kt=null){const rt=n.object.position;v.copy(rt).sub(n.target),v.applyQuaternion(F),a.setFromVector3(v),n.autoRotate&&o===s.NONE&&j(x(Kt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let zt=n.minAzimuthAngle,Et=n.maxAzimuthAngle;isFinite(zt)&&isFinite(Et)&&(zt<-Math.PI?zt+=Ze:zt>Math.PI&&(zt-=Ze),Et<-Math.PI?Et+=Ze:Et>Math.PI&&(Et-=Ze),zt<=Et?a.theta=Math.max(zt,Math.min(Et,a.theta)):a.theta=a.theta>(zt+Et)/2?Math.max(zt,a.theta):Math.min(Et,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ki=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)a.radius=le(a.radius);else{const Bn=a.radius;a.radius=le(a.radius*l),ki=Bn!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(k),rt.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&R){let Bn=null;if(n.object.isPerspectiveCamera){const Gi=v.length();Bn=le(Gi*l);const Ei=Gi-Bn;n.object.position.addScaledVector(A,Ei),n.object.updateMatrixWorld(),ki=!!Ei}else if(n.object.isOrthographicCamera){const Gi=new P(D.x,D.y,0);Gi.unproject(n.object);const Ei=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ki=Ei!==n.object.zoom;const Go=new P(D.x,D.y,0);Go.unproject(n.object),n.object.position.sub(Go).add(Gi),n.object.updateMatrixWorld(),Bn=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Bn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Bn).add(n.object.position):($r.origin.copy(n.object.position),$r.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot($r.direction))<tS?e.lookAt(n.target):(Hh.setFromNormalAndCoplanarPoint(n.object.up,n.target),$r.intersectPlane(Hh,n.target))))}else if(n.object.isOrthographicCamera){const Bn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Bn!==n.object.zoom&&(n.object.updateProjectionMatrix(),ki=!0)}return l=1,R=!1,ki||se.distanceToSquared(n.object.position)>r||8*(1-de.dot(n.object.quaternion))>r||We.distanceToSquared(n.target)>r?(n.dispatchEvent(zh),se.copy(n.object.position),de.copy(n.object.quaternion),We.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",st),n.domElement.removeEventListener("pointerdown",b),n.domElement.removeEventListener("pointercancel",Y),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",Y),n.domElement.getRootNode().removeEventListener("keydown",xe,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ve),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const r=1e-6,a=new Vh,c=new Vh;let l=1;const u=new P,h=new Se,d=new Se,m=new Se,g=new Se,_=new Se,p=new Se,f=new Se,E=new Se,y=new Se,A=new P,D=new Se;let R=!1;const N=[],z={};let S=!1;function x(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function H(v){const F=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*F)}function j(v){c.theta-=v}function L(v){c.phi-=v}const Q=function(){const v=new P;return function(k,se){v.setFromMatrixColumn(se,0),v.multiplyScalar(-k),u.add(v)}}(),ee=function(){const v=new P;return function(k,se){n.screenSpacePanning===!0?v.setFromMatrixColumn(se,1):(v.setFromMatrixColumn(se,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(k),u.add(v)}}(),re=function(){const v=new P;return function(k,se){const de=n.domElement;if(n.object.isPerspectiveCamera){const We=n.object.position;v.copy(We).sub(n.target);let Ze=v.length();Ze*=Math.tan(n.object.fov/2*Math.PI/180),Q(2*k*Ze/de.clientHeight,n.object.matrix),ee(2*se*Ze/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Q(k*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),ee(se*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ce(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ue(v,F){if(!n.zoomToCursor)return;R=!0;const k=n.domElement.getBoundingClientRect(),se=v-k.left,de=F-k.top,We=k.width,Ze=k.height;D.x=se/We*2-1,D.y=-(de/Ze)*2+1,A.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function le(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function we(v){h.set(v.clientX,v.clientY)}function et(v){ue(v.clientX,v.clientX),f.set(v.clientX,v.clientY)}function dt(v){g.set(v.clientX,v.clientY)}function J(v){d.set(v.clientX,v.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;j(2*Math.PI*m.x/F.clientHeight),L(2*Math.PI*m.y/F.clientHeight),h.copy(d),n.update()}function he(v){E.set(v.clientX,v.clientY),y.subVectors(E,f),y.y>0?ce(H(y.y)):y.y<0&&$(H(y.y)),f.copy(E),n.update()}function Te(v){_.set(v.clientX,v.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),re(p.x,p.y),g.copy(_),n.update()}function ge(v){ue(v.clientX,v.clientY),v.deltaY<0?$(H(v.deltaY)):v.deltaY>0&&ce(H(v.deltaY)),n.update()}function tt(v){let F=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):re(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):re(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?j(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):re(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?j(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):re(-n.keyPanSpeed,0),F=!0;break}F&&(v.preventDefault(),n.update())}function $e(v){if(N.length===1)h.set(v.pageX,v.pageY);else{const F=_t(v),k=.5*(v.pageX+F.x),se=.5*(v.pageY+F.y);h.set(k,se)}}function B(v){if(N.length===1)g.set(v.pageX,v.pageY);else{const F=_t(v),k=.5*(v.pageX+F.x),se=.5*(v.pageY+F.y);g.set(k,se)}}function mt(v){const F=_t(v),k=v.pageX-F.x,se=v.pageY-F.y,de=Math.sqrt(k*k+se*se);f.set(0,de)}function Pe(v){n.enableZoom&&mt(v),n.enablePan&&B(v)}function gt(v){n.enableZoom&&mt(v),n.enableRotate&&$e(v)}function De(v){if(N.length==1)d.set(v.pageX,v.pageY);else{const k=_t(v),se=.5*(v.pageX+k.x),de=.5*(v.pageY+k.y);d.set(se,de)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const F=n.domElement;j(2*Math.PI*m.x/F.clientHeight),L(2*Math.PI*m.y/F.clientHeight),h.copy(d)}function nt(v){if(N.length===1)_.set(v.pageX,v.pageY);else{const F=_t(v),k=.5*(v.pageX+F.x),se=.5*(v.pageY+F.y);_.set(k,se)}p.subVectors(_,g).multiplyScalar(n.panSpeed),re(p.x,p.y),g.copy(_)}function ke(v){const F=_t(v),k=v.pageX-F.x,se=v.pageY-F.y,de=Math.sqrt(k*k+se*se);E.set(0,de),y.set(0,Math.pow(E.y/f.y,n.zoomSpeed)),ce(y.y),f.copy(E);const We=(v.pageX+F.x)*.5,Ze=(v.pageY+F.y)*.5;ue(We,Ze)}function it(v){n.enableZoom&&ke(v),n.enablePan&&nt(v)}function wt(v){n.enableZoom&&ke(v),n.enableRotate&&De(v)}function b(v){n.enabled!==!1&&(N.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",Y)),!Ge(v)&&(Ie(v),v.pointerType==="touch"?fe(v):ie(v)))}function M(v){n.enabled!==!1&&(v.pointerType==="touch"?Ce(v):oe(v))}function Y(v){switch(Me(v),N.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",Y),n.dispatchEvent(Bh),o=s.NONE;break;case 1:const F=N[0],k=z[F];fe({pointerId:F,pageX:k.x,pageY:k.y});break}}function ie(v){let F;switch(v.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case ks.DOLLY:if(n.enableZoom===!1)return;et(v),o=s.DOLLY;break;case ks.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;dt(v),o=s.PAN}else{if(n.enableRotate===!1)return;we(v),o=s.ROTATE}break;case ks.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;we(v),o=s.ROTATE}else{if(n.enablePan===!1)return;dt(v),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(Cc)}function oe(v){switch(o){case s.ROTATE:if(n.enableRotate===!1)return;J(v);break;case s.DOLLY:if(n.enableZoom===!1)return;he(v);break;case s.PAN:if(n.enablePan===!1)return;Te(v);break}}function ae(v){n.enabled===!1||n.enableZoom===!1||o!==s.NONE||(v.preventDefault(),n.dispatchEvent(Cc),ge(Le(v)),n.dispatchEvent(Bh))}function Le(v){const F=v.deltaMode,k={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(F){case 1:k.deltaY*=16;break;case 2:k.deltaY*=100;break}return v.ctrlKey&&!S&&(k.deltaY*=10),k}function xe(v){v.key==="Control"&&(S=!0,n.domElement.getRootNode().addEventListener("keyup",ve,{passive:!0,capture:!0}))}function ve(v){v.key==="Control"&&(S=!1,n.domElement.getRootNode().removeEventListener("keyup",ve,{passive:!0,capture:!0}))}function Ve(v){n.enabled===!1||n.enablePan===!1||tt(v)}function fe(v){switch(Ke(v),N.length){case 1:switch(n.touches.ONE){case Gs.ROTATE:if(n.enableRotate===!1)return;$e(v),o=s.TOUCH_ROTATE;break;case Gs.PAN:if(n.enablePan===!1)return;B(v),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(n.touches.TWO){case Gs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(v),o=s.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;gt(v),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(Cc)}function Ce(v){switch(Ke(v),o){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;De(v),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;nt(v),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(v),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;wt(v),n.update();break;default:o=s.NONE}}function st(v){n.enabled!==!1&&v.preventDefault()}function Ie(v){N.push(v.pointerId)}function Me(v){delete z[v.pointerId];for(let F=0;F<N.length;F++)if(N[F]==v.pointerId){N.splice(F,1);return}}function Ge(v){for(let F=0;F<N.length;F++)if(N[F]==v.pointerId)return!0;return!1}function Ke(v){let F=z[v.pointerId];F===void 0&&(F=new Se,z[v.pointerId]=F),F.set(v.pageX,v.pageY)}function _t(v){const F=v.pointerId===N[0]?N[1]:N[0];return z[F]}n.domElement.addEventListener("contextmenu",st),n.domElement.addEventListener("pointerdown",b),n.domElement.addEventListener("pointercancel",Y),n.domElement.addEventListener("wheel",ae,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",xe,{passive:!0,capture:!0}),this.update()}}class iS{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=Lc(),this._delta=0,this._elapsed=0,this._timescale=1,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=sS.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=Lc()-this._startTime,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}update(e){return this._usePageVisibilityAPI===!0&&document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:Lc())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Lc(){return(typeof performance>"u"?Date:performance).now()}function sS(){document.hidden===!1&&this.reset()}const kh={VERTEX:"vertex",FRAGMENT:"fragment"},yt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},Na=["x","y","z","w"];function ff(i,e=!1){let t="{";i.isNode===!0&&(t+=i.id);for(const{property:n,childNode:s}of la(i))t+=","+n.slice(0,-4)+":"+s.getCacheKey(e);return t+="}",t}function*la(i,e=!1){for(const t in i){if(t.startsWith("_")===!0)continue;const n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){const o=n[s];o&&(o.isNode===!0||e&&typeof o.toJSON=="function")&&(yield{property:t,index:s,childNode:o})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const s in n){const o=n[s];o&&(o.isNode===!0||e&&typeof o.toJSON=="function")&&(yield{property:t,index:s,childNode:o})}}}function es(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function pf(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new Oe(...e):t==="vec2"?new Se(...e):t==="vec3"?new P(...e):t==="vec4"?new at(...e):t==="mat3"?new Xe(...e):t==="mat4"?new Rt(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?gf(e[0]):null}function mf(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function gf(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}const Gh=new Map;let oS=0;class Re extends zi{constructor(e=null){super(),this.nodeType=e,this.updateType=yt.NONE,this.updateBeforeType=yt.NONE,this.uuid=wl.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.isNode=!0,Object.defineProperty(this,"id",{value:oS++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,yt.FRAME)}onRenderUpdate(e){return this.onUpdate(e,yt.RENDER)}onObjectUpdate(e){return this.onUpdate(e,yt.OBJECT)}onReference(e){return this.updateReference=e.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return!1}*getChildren(){for(const{childNode:e}of la(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=ff(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);for(const n of this.getChildren())t["_node"+n.id]=n;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null;const o=e.getBuildStage();if(o==="setup"){this.updateReference(e);const r=e.getNodeProperties(this);if(r.initialized!==!0||e.context.tempRead===!1){const a=e.stack.nodes.length;r.initialized=!0,r.outputNode=this.setup(e),r.outputNode!==null&&e.stack.nodes.length!==a&&(r.outputNode=e.stack);for(const c of Object.values(r))c&&c.isNode===!0&&c.build(e)}}else if(o==="analyze")this.analyze(e);else if(o==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);s=c.snippet,s===void 0&&(s=this.generate(e)||"",c.snippet=s),s=e.format(s,a,t)}else s=this.generate(e,t)||"";return e.removeChain(this),s}getSerializeChildren(){return la(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:o,childNode:r}of t)o!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(o)?[]:{}),n[s][o]=r.toJSON(e.meta).uuid):n[s]=r.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const o of e.inputNodes[n])s.push(t[o]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const o in e.inputNodes[n]){const r=e.inputNodes[n][o];s[o]=t[r]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let o=e.nodes[t];o===void 0&&(o={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[o.uuid]=o),this.serialize(o),delete o.meta);function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(s){const a=r(e.textures),c=r(e.images),l=r(e.nodes);a.length>0&&(o.textures=a),c.length>0&&(o.images=c),l.length>0&&(o.nodes=l)}return o}}function te(i,e){if(typeof e!="function"||!i)throw new Error(`Node class ${i} is not a class`);if(Gh.has(i)){console.warn(`Redefinition of node class ${i}`);return}Gh.set(i,e),e.type=i}class St extends Re{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),o=e.getDataFromNode(this);if(e.context.tempRead!==!1&&o.propertyName!==void 0)return e.format(o.propertyName,s,t);if(e.context.tempWrite!==!1&&s!=="void"&&t!=="void"&&this.hasDependencies(e)){const r=super.build(e,s),a=e.getVarFromNode(this,null,s),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${r}`),o.snippet=r,o.propertyName=c,e.format(o.propertyName,s,t)}}return super.build(e,t)}}te("TempNode",St);class Uo extends Re{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}te("ArrayElementNode",Uo);class Bl extends Re{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),o=n.build(e,s);return e.format(o,s,t)}}te("ConvertNode",Bl);class _f extends St{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=this.nodes,o=e.getComponentType(n),r=[];for(const c of s){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==o&&(l=e.format(l,u,o)),r.push(l)}const a=`${e.getType(n)}( ${r.join(", ")} )`;return e.format(a,n,t)}}te("JoinNode",_f);const rS=Na.join("");class sl extends Re{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(Na.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let o=null;if(s>1){let r=null;this.getVectorLength()>=s&&(r=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,r);this.components.length===s&&this.components===rS.slice(0,this.components.length)?o=e.format(c,r,t):o=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else o=n.build(e,t);return o}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}te("SplitNode",sl);class vf extends St{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,o=this.getNodeType(e),r=e.getTypeFromLength(n.length),a=s.build(e,r),c=t.build(e,o),l=e.getTypeLength(o),u=[];for(let h=0;h<l;h++){const d=Na[h];d===n[0]?(u.push(a),h+=n.length-1):u.push(c+"."+d)}return`${e.getType(o)}( ${u.join(", ")} )`}}te("SetNode",vf);class wa extends Re{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?es(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=es(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=mf(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?pf(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}te("InputNode",wa);class $n extends wa{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}te("ConstNode",$n);let Co=null;const lo=new Map;function O(i,e){if(lo.has(i)){console.warn(`Redefinition of node element ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);lo.set(i,e)}const Wh=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),xf={setup(i,e){const t=e.shift();return i(Ca(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(Co.assign(t,...n),t);if(lo.has(e)){const n=lo.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&lo.has(e.slice(0,e.length-6))){const n=lo.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=Wh(e),pe(new sl(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=Wh(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>pe(new vf(i,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),pe(new sl(i,e));if(/^\d+$/.test(e)===!0)return pe(new Uo(t,new $n(Number(e),"uint")))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},Pc=new WeakMap,Xh=new WeakMap,aS=function(i,e=null){const t=es(i);if(t==="node"){let n=Pc.get(i);return n===void 0&&(n=new Proxy(i,xf),Pc.set(i,n),Pc.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return pe(ol(i,e));if(t==="shader")return K(i)}return i},cS=function(i,e=null){for(const t in i)i[t]=pe(i[t],e);return i},lS=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=pe(i[n],e);return i},uS=function(i,e=null,t=null,n=null){const s=o=>pe(n!==null?Object.assign(o,n):o);return e===null?(...o)=>s(new i(..._o(o))):t!==null?(t=pe(t),(...o)=>s(new i(e,..._o(o),t))):(...o)=>s(new i(e,..._o(o)))},hS=function(i,...e){return pe(new i(..._o(e)))};class dS extends Re{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const{outputNode:t}=e.getNodeProperties(this);return t?t.getNodeType(e):super.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let r=Xh.get(e.constructor);r===void 0&&(r=new WeakMap,Xh.set(e.constructor,r));let a=r.get(t);return a===void 0&&(a=pe(e.buildFunctionNode(t)),r.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),pe(a.call(n))}const s=t.jsFunc,o=n!==null?s(n,e.stack,e):s(e.stack,e);return pe(o)}setup(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class fS extends Re{constructor(e){super(),this.jsFunc=e,this.layout=null}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return Ca(e),pe(new dS(this,e))}setup(){return this.call()}}const pS=[!1,!0],mS=[0,1,2,3],gS=[-1,-2],yf=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],Hl=new Map;for(const i of pS)Hl.set(i,new $n(i));const kl=new Map;for(const i of mS)kl.set(i,new $n(i,"uint"));const Gl=new Map([...kl].map(i=>new $n(i.value,"int")));for(const i of gS)Gl.set(i,new $n(i,"int"));const ba=new Map([...Gl].map(i=>new $n(i.value)));for(const i of yf)ba.set(i,new $n(i));for(const i of yf)ba.set(-i,new $n(-i));const Ra={bool:Hl,uint:kl,ints:Gl,float:ba},qh=new Map([...Hl,...ba]),ol=(i,e)=>qh.has(i)?qh.get(i):i.isNode===!0?i:new $n(i,e),_S=i=>{try{return i.getNodeType()}catch{return}},pt=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[pf(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return pe(e.get(t[0]));if(t.length===1){const s=ol(t[0],i);return _S(s)===i?pe(s):pe(new Bl(s,i))}const n=t.map(s=>ol(s));return pe(new _f(n,i))}},Yh=i=>i&&i.value,vS=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function ir(i){return new Proxy(new fS(i),xf)}const pe=(i,e=null)=>aS(i,e),Ca=(i,e=null)=>new cS(i,e),_o=(i,e=null)=>new lS(i,e),G=(...i)=>new uS(...i),ne=(...i)=>new hS(...i),K=i=>{const e=new ir(i),t=(...n)=>{let s;return Ca(n),n[0]&&n[0].isNode?s=[...n]:s=n[0],e.call(s)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};te("ShaderNode",ir);const jh=i=>{Co=i},xS=()=>Co,Qe=(...i)=>Co.if(...i);function yS(i){return Co&&Co.add(i),i}O("append",yS);const MS=new pt("color"),w=new pt("float",Ra.float),C=new pt("int",Ra.ints),me=new pt("uint",Ra.uint),Is=new pt("bool",Ra.bool),Ae=new pt("vec2"),Rs=new pt("ivec2"),SS=new pt("uvec2"),TS=new pt("bvec2"),U=new pt("vec3"),ES=new pt("ivec3"),yr=new pt("uvec3"),Mf=new pt("bvec3"),Ee=new pt("vec4"),AS=new pt("ivec4"),NS=new pt("uvec4"),wS=new pt("bvec4"),Wl=new pt("mat2"),bS=new pt("imat2"),RS=new pt("umat2"),CS=new pt("bmat2"),ri=new pt("mat3"),LS=new pt("imat3"),PS=new pt("umat3"),IS=new pt("bmat3"),vo=new pt("mat4"),DS=new pt("imat4"),US=new pt("umat4"),OS=new pt("bmat4"),FS=(i="")=>pe(new $n(i,"string")),VS=i=>pe(new $n(i,"ArrayBuffer"));O("color",MS);O("float",w);O("int",C);O("uint",me);O("bool",Is);O("vec2",Ae);O("ivec2",Rs);O("uvec2",SS);O("bvec2",TS);O("vec3",U);O("ivec3",ES);O("uvec3",yr);O("bvec3",Mf);O("vec4",Ee);O("ivec4",AS);O("uvec4",NS);O("bvec4",wS);O("mat2",Wl);O("imat2",bS);O("umat2",RS);O("bmat2",CS);O("mat3",ri);O("imat3",LS);O("umat3",PS);O("bmat3",IS);O("mat4",vo);O("imat4",DS);O("umat4",US);O("bmat4",OS);O("string",FS);O("arrayBuffer",VS);const zS=G(Uo),BS=(i,e)=>pe(new Bl(pe(i),e));O("element",zS);O("convert",BS);class Sf extends St{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return Na.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:s}=this,o=this.needsSplitAssign(e),r=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=s.build(e,r),l=s.getNodeType(e),u=e.getDataFromNode(this);let h;if(u.initialized===!0)t!=="void"&&(h=a);else if(o){const d=e.getVarFromNode(this,null,r),m=e.getPropertyName(d);e.addLineFlowCode(`${m} = ${c}`);const g=n.node.context({assign:!0}).build(e);for(let _=0;_<n.components.length;_++){const p=n.components[_];e.addLineFlowCode(`${g}.${p} = ${m}[ ${_} ]`)}t!=="void"&&(h=a)}else h=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(h),t!=="void"&&(h=a));return u.initialized=!0,e.format(h,r,t)}}const HS=G(Sf);te("AssignNode",Sf);O("assign",HS);class Tf extends Re{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{name:t,node:n}=this,s=this.getNodeType(e),o=e.getVaryingFromNode(this,t,s);o.needsInterpolation||(o.needsInterpolation=e.shaderStage==="fragment");const r=e.getPropertyName(o,kh.VERTEX);return e.flowNodeFromShaderStage(kh.VERTEX,n,s,r),e.getPropertyName(o)}}const Dt=G(Tf);O("varying",Dt);te("VaryingNode",Tf);class La extends Re{constructor(e,t=null){super(t),this._attributeName=e}isGlobal(){return!0}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const o=e.geometry.getAttribute(t),r=e.getTypeFromAttribute(o),a=e.getAttribute(t,r);return e.shaderStage==="vertex"?e.format(a.name,r,n):Dt(this).build(e,n)}else return console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`),e.generateConst(n)}}const dn=(i,e)=>pe(new La(i,e));te("AttributeNode",La);class Ef extends Re{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const Af=G(Ef);O("bypass",Af);te("BypassNode",Ef);let kS=0;class GS{constructor(){this.id=kS++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}class Nf extends Re{constructor(e,t=new GS){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),s=this.cache||e.globalCache;e.setCache(s);const o=this.node.build(e,...t);return e.setCache(n),o}}const ua=G(Nf),WS=i=>ua(i,null);O("cache",ua);O("globalCache",WS);te("CacheNode",Nf);class Xl extends Re{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const s=this.node.build(e,t);return e.setContext(n),s}}const Fi=G(Xl),XS=(i,e)=>Fi(i,{label:e});O("context",Fi);O("label",XS);te("ContextNode",Xl);class yi extends Re{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===yi.VERTEX)s=e.getVertexIndex();else if(n===yi.INSTANCE)s=e.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let o;return e.shaderStage==="vertex"||e.shaderStage==="compute"?o=s:o=Dt(this).build(e,t),o}}yi.VERTEX="vertex";yi.INSTANCE="instance";const qS=ne(yi,yi.VERTEX),wf=ne(yi,yi.INSTANCE);te("IndexNode",yi);class ql{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class bf extends Re{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVarNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,s=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),o=e.getPropertyName(s),r=t.build(e,s.type);return e.addLineFlowCode(`${o} = ${r}`),o}}const cr=G(bf);O("temp",cr);O("toVar",(...i)=>cr(...i).append());te("VarNode",bf);class ht extends Re{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const tn=(i,e)=>pe(new ht(i,e)),hi=(i,e)=>pe(new ht(i,e,!0)),Pt=ne(ht,"vec4","DiffuseColor"),ts=ne(ht,"float","Roughness"),ha=ne(ht,"float","Metalness"),rl=ne(ht,"float","Clearcoat"),da=ne(ht,"float","ClearcoatRoughness"),uo=ne(ht,"vec3","Sheen"),Yl=ne(ht,"float","SheenRoughness"),jl=ne(ht,"float","Iridescence"),Rf=ne(ht,"float","IridescenceIOR"),Cf=ne(ht,"float","IridescenceThickness"),al=ne(ht,"float","AlphaT"),Es=ne(ht,"float","Anisotropy"),ea=ne(ht,"vec3","AnisotropyT"),xo=ne(ht,"vec3","AnisotropyB"),ei=ne(ht,"color","SpecularColor"),fa=ne(ht,"float","SpecularF90"),cl=ne(ht,"float","Shininess"),YS=ne(ht,"vec4","Output"),yo=ne(ht,"float","dashSize"),pa=ne(ht,"float","gapSize");ne(ht,"float","pointWidth");const ta=ne(ht,"float","IOR"),ll=ne(ht,"float","Transmission"),Lf=ne(ht,"float","Thickness"),Pf=ne(ht,"float","AttenuationDistance"),If=ne(ht,"color","AttenuationColor");te("PropertyNode",ht);class jS extends ht{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}te("ParameterNode",jS);class $l extends Re{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const s of t)s.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}G($l);te("CodeNode",$l);class $S extends $l{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),s=n.name,o=n.type,r=e.getCodeFromNode(this,o);s!==""&&(r.name=s);const a=e.getPropertyName(r);let c=this.getNodeFunction(e).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),m=l[h].build(e,"property");c=c.replace(d,m)}return r.code=c+`
`,t==="property"?a:e.format(`${a}()`,o,t)}}te("FunctionNode",$S);class Kl extends Re{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const KS=i=>new Kl(i),Df=i=>new Kl(i,!0);Df("frame");Df("render");const ZS=KS("object");te("UniformGroupNode",Kl);class Vs extends wa{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.groupNode=ZS}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(s=>{const o=e(s,n);o!==void 0&&(this.value=o)},t)}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let o=e.getNodeFromHash(s);o===void 0&&(e.setHashNode(this,s),o=this);const r=o.getInputType(e),a=e.getUniformFromNode(o,r,e.shaderStage,e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const Mt=(i,e)=>{const t=vS(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return pe(new Vs(n,t))};te("UniformNode",Vs);class Uf extends La{constructor(e=0){super(null,"vec2"),this.isUVNode=!0,this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}const Si=(...i)=>pe(new Uf(...i));te("UVNode",Uf);class Of extends Re{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const Zl=G(Of);O("textureSize",Zl);te("TextureSizeNode",Of);class Ct extends St{constructor(e,t,n,...s){if(super(),this.op=e,s.length>0){let o=n;for(let r=0;r<s.length;r++)o=new Ct(e,o,s[r]);n=o}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,s=this.aNode,o=this.bNode,r=s.getNodeType(e),a=typeof o<"u"?o.getNodeType(e):null;if(r==="void"||a==="void")return"void";if(n==="%")return r;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(r);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(r),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return r==="float"&&e.isMatrix(a)?a:e.isMatrix(r)&&e.isVector(a)?e.getVectorFromMatrix(r):e.isVector(r)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(r)?a:r}generate(e,t){const n=this.op,s=this.aNode,o=this.bNode,r=this.getNodeType(e,t);let a=null,c=null;r!=="void"?(a=s.getNodeType(e),c=typeof o<"u"?o.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=r,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=r):a=c=r;const l=s.build(e,a),u=typeof o<"u"?o.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,r,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,r,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,r,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,r,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):d?e.format(`${d}( ${l}, ${u} )`,r,t):e.format(`( ${l} ${n} ${u} )`,r,t);if(a!=="void")return d?e.format(`${d}( ${l}, ${u} )`,r,t):e.format(`${l} ${n} ${u}`,r,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const On=G(Ct,"+"),Ft=G(Ct,"-"),ot=G(Ct,"*"),ls=G(Ct,"/"),JS=G(Ct,"%"),QS=G(Ct,"=="),eT=G(Ct,"!="),tT=G(Ct,"<"),Ff=G(Ct,">"),nT=G(Ct,"<="),iT=G(Ct,">="),sT=G(Ct,"&&"),oT=G(Ct,"||"),rT=G(Ct,"!"),aT=G(Ct,"^^"),cT=G(Ct,"&"),lT=G(Ct,"~"),uT=G(Ct,"|"),hT=G(Ct,"^"),dT=G(Ct,"<<"),fT=G(Ct,">>");O("add",On);O("sub",Ft);O("mul",ot);O("div",ls);O("remainder",JS);O("equal",QS);O("notEqual",eT);O("lessThan",tT);O("greaterThan",Ff);O("lessThanEqual",nT);O("greaterThanEqual",iT);O("and",sT);O("or",oT);O("not",rT);O("xor",aT);O("bitAnd",cT);O("bitNot",lT);O("bitOr",uT);O("bitXor",hT);O("shiftLeft",dT);O("shiftRight",fT);te("OperatorNode",Ct);class I extends St{constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,o=e.isMatrix(t)?0:e.getTypeLength(t),r=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(s)?0:e.getTypeLength(s);return o>r&&o>a?t:r>a?n:a>o?s:t}getNodeType(e){const t=this.method;return t===I.LENGTH||t===I.DISTANCE||t===I.DOT?"float":t===I.CROSS?"vec3":t===I.ALL?"bool":t===I.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===I.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,s=this.getNodeType(e),o=this.getInputType(e),r=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===I.TRANSFORM_DIRECTION){let u=r,h=a;e.isMatrix(u.getNodeType(e))?h=Ee(U(h),0):u=Ee(U(u),0);const d=ot(u,h).xyz;return yn(d).build(e,t)}else{if(n===I.NEGATE)return e.format("( - "+r.build(e,o)+" )",s,t);if(n===I.ONE_MINUS)return Ft(1,r).build(e,t);if(n===I.RECIPROCAL)return ls(1,r).build(e,t);if(n===I.DIFFERENCE)return kt(Ft(r,a)).build(e,t);{const u=[];return n===I.CROSS||n===I.MOD?u.push(r.build(e,s),a.build(e,s)):n===I.STEP?u.push(r.build(e,e.getTypeLength(r.getNodeType(e))===1?"float":o),a.build(e,o)):l&&(n===I.MIN||n===I.MAX)||n===I.MOD?u.push(r.build(e,o),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":o)):n===I.REFRACT?u.push(r.build(e,o),a.build(e,o),c.build(e,"float")):n===I.MIX?u.push(r.build(e,o),a.build(e,o),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":o)):(u.push(r.build(e,o)),a!==null&&u.push(a.build(e,o)),c!==null&&u.push(c.build(e,o))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}I.ALL="all";I.ANY="any";I.EQUALS="equals";I.RADIANS="radians";I.DEGREES="degrees";I.EXP="exp";I.EXP2="exp2";I.LOG="log";I.LOG2="log2";I.SQRT="sqrt";I.INVERSE_SQRT="inversesqrt";I.FLOOR="floor";I.CEIL="ceil";I.NORMALIZE="normalize";I.FRACT="fract";I.SIN="sin";I.COS="cos";I.TAN="tan";I.ASIN="asin";I.ACOS="acos";I.ATAN="atan";I.ABS="abs";I.SIGN="sign";I.LENGTH="length";I.NEGATE="negate";I.ONE_MINUS="oneMinus";I.DFDX="dFdx";I.DFDY="dFdy";I.ROUND="round";I.RECIPROCAL="reciprocal";I.TRUNC="trunc";I.FWIDTH="fwidth";I.BITCAST="bitcast";I.ATAN2="atan2";I.MIN="min";I.MAX="max";I.MOD="mod";I.STEP="step";I.REFLECT="reflect";I.DISTANCE="distance";I.DIFFERENCE="difference";I.DOT="dot";I.CROSS="cross";I.POW="pow";I.TRANSFORM_DIRECTION="transformDirection";I.MIX="mix";I.CLAMP="clamp";I.REFRACT="refract";I.SMOOTHSTEP="smoothstep";I.FACEFORWARD="faceforward";const Vf=w(1e-6);w(1e6);const $h=w(Math.PI);w(Math.PI*2);const zf=G(I,I.ALL),pT=G(I,I.ANY),mT=G(I,I.EQUALS),gT=G(I,I.RADIANS),_T=G(I,I.DEGREES),Bf=G(I,I.EXP),ul=G(I,I.EXP2),Hf=G(I,I.LOG),Pa=G(I,I.LOG2),zs=G(I,I.SQRT),vT=G(I,I.INVERSE_SQRT),Oo=G(I,I.FLOOR),kf=G(I,I.CEIL),yn=G(I,I.NORMALIZE),Ia=G(I,I.FRACT),Ii=G(I,I.SIN),Zi=G(I,I.COS),xT=G(I,I.TAN),yT=G(I,I.ASIN),MT=G(I,I.ACOS),ST=G(I,I.ATAN),kt=G(I,I.ABS),Jl=G(I,I.SIGN),sr=G(I,I.LENGTH),TT=G(I,I.NEGATE),ET=G(I,I.ONE_MINUS),AT=G(I,I.DFDX),NT=G(I,I.DFDY),wT=G(I,I.ROUND),bT=G(I,I.RECIPROCAL),Gf=G(I,I.TRUNC),RT=G(I,I.FWIDTH);G(I,I.BITCAST);const CT=G(I,I.ATAN2),Lo=G(I,I.MIN),Fn=G(I,I.MAX),LT=G(I,I.MOD),PT=G(I,I.STEP),IT=G(I,I.REFLECT),DT=G(I,I.DISTANCE),UT=G(I,I.DIFFERENCE),Fo=G(I,I.DOT),Wf=G(I,I.CROSS),vi=G(I,I.POW),Xf=G(I,I.POW,2),OT=G(I,I.POW,3),FT=G(I,I.POW,4),VT=G(I,I.TRANSFORM_DIRECTION),zT=i=>ot(Jl(i),vi(kt(i),1/3)),BT=i=>Fo(i,i),on=G(I,I.MIX),Po=(i,e=0,t=1)=>pe(new I(I.CLAMP,pe(i),pe(e),pe(t))),HT=i=>Po(i),qf=G(I,I.REFRACT),Vi=G(I,I.SMOOTHSTEP),kT=G(I,I.FACEFORWARD),GT=(i,e,t)=>on(e,t,i),WT=(i,e,t)=>Vi(e,t,i);O("all",zf);O("any",pT);O("equals",mT);O("radians",gT);O("degrees",_T);O("exp",Bf);O("exp2",ul);O("log",Hf);O("log2",Pa);O("sqrt",zs);O("inverseSqrt",vT);O("floor",Oo);O("ceil",kf);O("normalize",yn);O("fract",Ia);O("sin",Ii);O("cos",Zi);O("tan",xT);O("asin",yT);O("acos",MT);O("atan",ST);O("abs",kt);O("sign",Jl);O("length",sr);O("lengthSq",BT);O("negate",TT);O("oneMinus",ET);O("dFdx",AT);O("dFdy",NT);O("round",wT);O("reciprocal",bT);O("trunc",Gf);O("fwidth",RT);O("atan2",CT);O("min",Lo);O("max",Fn);O("mod",LT);O("step",PT);O("reflect",IT);O("distance",DT);O("dot",Fo);O("cross",Wf);O("pow",vi);O("pow2",Xf);O("pow3",OT);O("pow4",FT);O("transformDirection",VT);O("mix",GT);O("clamp",Po);O("refract",qf);O("smoothstep",WT);O("faceForward",kT);O("difference",UT);O("saturate",HT);O("cbrt",zT);te("MathNode",I);const XT=K(i=>{const{value:e}=i,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),s=t.mul(.0773993808),o=t.lessThanEqual(.04045),r=on(n,s,o);return Ee(r,e.a)}),qT=K(i=>{const{value:e}=i,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),s=t.mul(12.92),o=t.lessThanEqual(.0031308),r=on(n,s,o);return Ee(r,e.a)}),Kh=i=>{let e=null;return i===li?e="Linear":i===hn&&(e="sRGB"),e},Yf=(i,e)=>Kh(i)+"To"+Kh(e);class bn extends St{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===bn.LINEAR_TO_LINEAR?t:YT[e]({value:t})}}bn.LINEAR_TO_LINEAR="LinearToLinear";bn.LINEAR_TO_sRGB="LinearTosRGB";bn.sRGB_TO_LINEAR="sRGBToLinear";const YT={[bn.LINEAR_TO_sRGB]:qT,[bn.sRGB_TO_LINEAR]:XT},jT=(i,e)=>pe(new bn(Yf(li,e),pe(i))),jf=(i,e)=>pe(new bn(Yf(e,li),pe(i))),$T=G(bn,bn.LINEAR_TO_sRGB),KT=G(bn,bn.sRGB_TO_LINEAR);O("linearTosRGB",$T);O("sRGBToLinear",KT);O("linearToColorSpace",jT);O("colorSpaceToLinear",jf);te("ColorSpaceNode",bn);class $f extends Re{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s);else return e.format(`( ${s} )`,n,t)}}const Da=G($f);te("ExpressionNode",$f);class Kf extends Vs{constructor(e){super(0),this.textureNode=e,this.updateType=yt.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:o}=n;this.value=Math.log2(Math.max(s,o))}}}const ZT=G(Kf);te("MaxMipLevelNode",Kf);class Vo extends Vs{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=yt.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return Si(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return Mt(t.matrix).mul(U(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?yt.FRAME:yt.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let s=this.levelNode;s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=s,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,o,r,a){const c=this.value;let l;return s?l=e.generateTextureLevel(c,t,n,s,o):a?l=e.generateTextureGrad(c,t,n,a,o):r?l=e.generateTextureCompare(c,t,n,r,o):this.sampler===!1?l=e.generateTextureLoad(c,t,n,o):l=e.generateTexture(c,t,n,o),l}generate(e,t){const n=e.getNodeProperties(this),s=this.value;if(!s||s.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const o=super.generate(e,"property");if(t==="sampler")return o+"_sampler";if(e.isReference(t))return o;{const r=e.getDataFromNode(this);let a=r.propertyName;if(a===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:m,gradNode:g}=n,_=this.generateUV(e,u),p=h?h.build(e,"float"):null,f=m?m.build(e,"int"):null,E=d?d.build(e,"float"):null,y=g?[g[0].build(e,"vec2"),g[1].build(e,"vec2")]:null,A=e.getVarFromNode(this);a=e.getPropertyName(A);const D=this.generateSnippet(e,o,_,p,f,E,y);e.addLineFlowCode(`${a} = ${D}`),e.context.tempWrite!==!1&&(r.snippet=D,r.propertyName=a)}let c=a;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(s)&&(c=jf(Da(c,l),s.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,pe(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(ZT(t)),t.referenceNode=this,pe(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return Zl(this,e)}compare(e){const t=this.clone();return t.compareNode=pe(e),t.referenceNode=this,pe(t)}grad(e,t){const n=this.clone();return n.gradNode=[pe(e),pe(t)],n.referenceNode=this,pe(n)}depth(e){const t=this.clone();return t.depthNode=pe(e),t.referenceNode=this,pe(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const Un=G(Vo),ws=(...i)=>Un(...i).setSampler(!1);O("texture",Un);te("TextureNode",Vo);class Ua extends Vs{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getInputType(){return"buffer"}}const Ql=(i,e,t)=>pe(new Ua(i,e,t));te("BufferNode",Ua);class JT extends Uo{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class Zf extends Ua{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=yt.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),s=this.getElementType();if(n===1)for(let o=0;o<e.length;o++){const r=o*4;t[r]=e[o]}else if(s==="color")for(let o=0;o<e.length;o++){const r=o*4,a=e[o];t[r]=a.r,t[r+1]=a.g,t[r+2]=a.b||0}else for(let o=0;o<e.length;o++){const r=o*4,a=e[o];t[r]=a.x,t[r+1]=a.y,t[r+2]=a.z||0,t[r+3]=a.w||0}}setup(e){const t=this.array.length;return this._elementType=this.elementType===null?es(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType),this.value=new Float32Array(t*4),this.bufferCount=t,super.setup(e)}element(e){return pe(new JT(this,pe(e)))}}const hl=(i,e)=>pe(new Zf(i,e));te("UniformsNode",Zf);class QT extends Uo{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}}class zo extends Re{constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=yt.OBJECT}element(e){return pe(new QT(this,pe(e)))}setNodeType(e){let t=null;this.count!==null?t=Ql(null,e,this.count):Array.isArray(this.getValueFromReference())?t=hl(null,e):e==="texture"?t=Un(null):t=Mt(null,e),this.node=t}getNodeType(e){return this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const ai=(i,e,t)=>pe(new zo(i,e,t)),eE=(i,e,t,n)=>pe(new zo(i,e,n,t));te("ReferenceNode",zo);class Jf extends zo{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const Qf=(i,e,t)=>pe(new Jf(i,e,t));te("MaterialReferenceNode",Jf);class Fe extends Re{constructor(e=Fe.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=yt.OBJECT,this._uniformNode=new Vs(null)}getNodeType(){const e=this.scope;if(e===Fe.WORLD_MATRIX||e===Fe.VIEW_MATRIX)return"mat4";if(e===Fe.NORMAL_MATRIX)return"mat3";if(e===Fe.POSITION||e===Fe.VIEW_POSITION||e===Fe.DIRECTION||e===Fe.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,s=this.scope;if(s===Fe.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(s===Fe.NORMAL_MATRIX)n.value=t.normalMatrix;else if(s===Fe.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===Fe.POSITION)n.value=n.value||new P,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===Fe.SCALE)n.value=n.value||new P,n.value.setFromMatrixScale(t.matrixWorld);else if(s===Fe.DIRECTION)n.value=n.value||new P,t.getWorldDirection(n.value);else if(s===Fe.VIEW_POSITION){const o=e.camera;n.value=n.value||new P,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(o.matrixWorldInverse)}}generate(e){const t=this.scope;return t===Fe.WORLD_MATRIX||t===Fe.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===Fe.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===Fe.POSITION||t===Fe.VIEW_POSITION||t===Fe.DIRECTION||t===Fe.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Fe.VIEW_MATRIX="viewMatrix";Fe.NORMAL_MATRIX="normalMatrix";Fe.WORLD_MATRIX="worldMatrix";Fe.POSITION="position";Fe.SCALE="scale";Fe.VIEW_POSITION="viewPosition";Fe.DIRECTION="direction";G(Fe,Fe.DIRECTION);G(Fe,Fe.VIEW_MATRIX);G(Fe,Fe.NORMAL_MATRIX);G(Fe,Fe.WORLD_MATRIX);const dl=G(Fe,Fe.POSITION);G(Fe,Fe.SCALE);const ep=G(Fe,Fe.VIEW_POSITION);te("Object3DNode",Fe);class He extends Fe{constructor(e=He.POSITION){super(e),this.updateType=yt.RENDER}getNodeType(e){const t=this.scope;return t===He.PROJECTION_MATRIX||t===He.PROJECTION_MATRIX_INVERSE?"mat4":t===He.NEAR||t===He.FAR||t===He.LOG_DEPTH?"float":super.getNodeType(e)}update(e){const t=e.camera,n=this._uniformNode,s=this.scope;s===He.VIEW_MATRIX?n.value=t.matrixWorldInverse:s===He.PROJECTION_MATRIX?n.value=t.projectionMatrix:s===He.PROJECTION_MATRIX_INVERSE?n.value=t.projectionMatrixInverse:s===He.NEAR?n.value=t.near:s===He.FAR?n.value=t.far:s===He.LOG_DEPTH?n.value=2/(Math.log(t.far+1)/Math.LN2):(this.object3d=t,super.update(e))}generate(e){const t=this.scope;return t===He.PROJECTION_MATRIX||t===He.PROJECTION_MATRIX_INVERSE?this._uniformNode.nodeType="mat4":(t===He.NEAR||t===He.FAR||t===He.LOG_DEPTH)&&(this._uniformNode.nodeType="float"),super.generate(e)}}He.PROJECTION_MATRIX="projectionMatrix";He.PROJECTION_MATRIX_INVERSE="projectionMatrixInverse";He.NEAR="near";He.FAR="far";He.LOG_DEPTH="logDepth";const fi=ne(He,He.PROJECTION_MATRIX);ne(He,He.PROJECTION_MATRIX_INVERSE);const Ic=ne(He,He.NEAR),Dc=ne(He,He.FAR),tE=ne(He,He.LOG_DEPTH),Hi=ne(He,He.VIEW_MATRIX);ne(He,He.NORMAL_MATRIX);ne(He,He.WORLD_MATRIX);const nE=ne(He,He.POSITION);te("CameraNode",He);class rn extends Fe{constructor(e=rn.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}ne(rn,rn.DIRECTION);const Ds=ne(rn,rn.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),tp=ne(rn,rn.NORMAL_MATRIX),lr=ne(rn,rn.WORLD_MATRIX);ne(rn,rn.POSITION);ne(rn,rn.SCALE);ne(rn,rn.VIEW_POSITION);te("ModelNode",rn);class Wt extends Re{constructor(e=Wt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===Wt.GEOMETRY)e.hasGeometryAttribute("normal")===!1?n=U(0,1,0):n=dn("normal","vec3");else if(t===Wt.LOCAL)n=Dt(ma);else if(t===Wt.VIEW){const s=tp.mul(ci);n=yn(Dt(s))}else if(t===Wt.WORLD){const s=us.transformDirection(Hi);n=yn(Dt(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Wt.GEOMETRY="geometry";Wt.LOCAL="local";Wt.VIEW="view";Wt.WORLD="world";const ma=ne(Wt,Wt.GEOMETRY),ci=ne(Wt,Wt.LOCAL).temp("Normal"),us=ne(Wt,Wt.VIEW),np=ne(Wt,Wt.WORLD),Ut=tn("vec3","TransformedNormalView"),ip=Ut.transformDirection(Hi).normalize(),ho=tn("vec3","TransformedClearcoatNormalView");te("NormalNode",Wt);const Zh=new Map;class Z extends Re{constructor(e){super(),this.scope=e}getCache(e,t){let n=Zh.get(e);return n===void 0&&(n=Qf(e,t),Zh.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===Z.COLOR){const o=this.getColor(n);t.map&&t.map.isTexture===!0?s=o.mul(this.getTexture("map")):s=o}else if(n===Z.OPACITY){const o=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=o.mul(this.getTexture("alpha")):s=o}else if(n===Z.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture("specular").r:s=w(1);else if(n===Z.SPECULAR_INTENSITY){const o=this.getFloat(n);t.specularMap?s=o.mul(this.getTexture(n).a):s=o}else if(n===Z.SPECULAR_COLOR){const o=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?s=o.mul(this.getTexture(n).rgb):s=o}else if(n===Z.ROUGHNESS){const o=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=o.mul(this.getTexture(n).g):s=o}else if(n===Z.METALNESS){const o=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=o.mul(this.getTexture(n).b):s=o}else if(n===Z.EMISSIVE){const o=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=o.mul(this.getTexture(n)):s=o}else if(n===Z.NORMAL)t.normalMap?s=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?s=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):s=us;else if(n===Z.CLEARCOAT){const o=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=o.mul(this.getTexture(n).r):s=o}else if(n===Z.CLEARCOAT_ROUGHNESS){const o=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=o.mul(this.getTexture(n).r):s=o}else if(n===Z.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):s=us;else if(n===Z.SHEEN){const o=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=o.mul(this.getTexture("sheenColor").rgb):s=o}else if(n===Z.SHEEN_ROUGHNESS){const o=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=o.mul(this.getTexture(n).a):s=o,s=s.clamp(.07,1)}else if(n===Z.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){const o=this.getTexture(n);s=Wl(Zo.x,Zo.y,Zo.y.negate(),Zo.x).mul(o.rg.mul(2).sub(Ae(1)).normalize().mul(o.b))}else s=Zo;else if(n===Z.IRIDESCENCE_THICKNESS){const o=ai("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const r=ai("0","float",t.iridescenceThicknessRange);s=o.sub(r).mul(this.getTexture(n).g).add(r)}else s=o}else if(n===Z.TRANSMISSION){const o=this.getFloat(n);t.transmissionMap?s=o.mul(this.getTexture(n).r):s=o}else if(n===Z.THICKNESS){const o=this.getFloat(n);t.thicknessMap?s=o.mul(this.getTexture(n).g):s=o}else if(n===Z.IOR)s=this.getFloat(n);else{const o=this.getNodeType(e);s=this.getCache(n,o)}return s}}Z.ALPHA_TEST="alphaTest";Z.COLOR="color";Z.OPACITY="opacity";Z.SHININESS="shininess";Z.SPECULAR="specular";Z.SPECULAR_STRENGTH="specularStrength";Z.SPECULAR_INTENSITY="specularIntensity";Z.SPECULAR_COLOR="specularColor";Z.REFLECTIVITY="reflectivity";Z.ROUGHNESS="roughness";Z.METALNESS="metalness";Z.NORMAL="normal";Z.CLEARCOAT="clearcoat";Z.CLEARCOAT_ROUGHNESS="clearcoatRoughness";Z.CLEARCOAT_NORMAL="clearcoatNormal";Z.EMISSIVE="emissive";Z.ROTATION="rotation";Z.SHEEN="sheen";Z.SHEEN_ROUGHNESS="sheenRoughness";Z.ANISOTROPY="anisotropy";Z.IRIDESCENCE="iridescence";Z.IRIDESCENCE_IOR="iridescenceIOR";Z.IRIDESCENCE_THICKNESS="iridescenceThickness";Z.IOR="ior";Z.TRANSMISSION="transmission";Z.THICKNESS="thickness";Z.ATTENUATION_DISTANCE="attenuationDistance";Z.ATTENUATION_COLOR="attenuationColor";Z.LINE_SCALE="scale";Z.LINE_DASH_SIZE="dashSize";Z.LINE_GAP_SIZE="gapSize";Z.LINE_WIDTH="linewidth";Z.LINE_DASH_OFFSET="dashOffset";Z.POINT_WIDTH="pointWidth";const iE=ne(Z,Z.ALPHA_TEST),ur=ne(Z,Z.COLOR),sE=ne(Z,Z.SHININESS),oE=ne(Z,Z.EMISSIVE),sp=ne(Z,Z.OPACITY),rE=ne(Z,Z.SPECULAR),Jh=ne(Z,Z.SPECULAR_INTENSITY),aE=ne(Z,Z.SPECULAR_COLOR),cE=ne(Z,Z.SPECULAR_STRENGTH);ne(Z,Z.REFLECTIVITY);const lE=ne(Z,Z.ROUGHNESS),uE=ne(Z,Z.METALNESS),hE=ne(Z,Z.NORMAL),dE=ne(Z,Z.CLEARCOAT),fE=ne(Z,Z.CLEARCOAT_ROUGHNESS),pE=ne(Z,Z.CLEARCOAT_NORMAL),mE=ne(Z,Z.ROTATION),gE=ne(Z,Z.SHEEN),_E=ne(Z,Z.SHEEN_ROUGHNESS),vE=ne(Z,Z.ANISOTROPY),xE=ne(Z,Z.IRIDESCENCE),yE=ne(Z,Z.IRIDESCENCE_IOR),ME=ne(Z,Z.IRIDESCENCE_THICKNESS),SE=ne(Z,Z.TRANSMISSION),TE=ne(Z,Z.THICKNESS),EE=ne(Z,Z.IOR),AE=ne(Z,Z.ATTENUATION_DISTANCE),NE=ne(Z,Z.ATTENUATION_COLOR),fl=ne(Z,Z.LINE_SCALE),op=ne(Z,Z.LINE_DASH_SIZE),rp=ne(Z,Z.LINE_GAP_SIZE),Uc=ne(Z,Z.LINE_WIDTH),Qh=ne(Z,Z.LINE_DASH_OFFSET),wE=ne(Z,Z.POINT_WIDTH),Zo=Mt(new Se).onReference(function(i){return i.material}).onRenderUpdate(function({material:i}){this.value.set(i.anisotropy*Math.cos(i.anisotropyRotation),i.anisotropy*Math.sin(i.anisotropyRotation))});te("MaterialNode",Z);class xt extends Re{constructor(e=xt.LOCAL){super("vec3"),this.scope=e}isGlobal(){return!0}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let n=null;if(t===xt.GEOMETRY)n=dn("position","vec3");else if(t===xt.LOCAL)n=Dt(Sn);else if(t===xt.WORLD){const s=lr.mul(_n);n=Dt(s)}else if(t===xt.VIEW){const s=Ds.mul(_n);n=Dt(s)}else if(t===xt.VIEW_DIRECTION){const s=In.negate();n=yn(Dt(s))}else if(t===xt.WORLD_DIRECTION){const s=_n.transformDirection(lr);n=yn(Dt(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}xt.GEOMETRY="geometry";xt.LOCAL="local";xt.WORLD="world";xt.WORLD_DIRECTION="worldDirection";xt.VIEW="view";xt.VIEW_DIRECTION="viewDirection";const Sn=ne(xt,xt.GEOMETRY),_n=ne(xt,xt.LOCAL).temp("Position"),pl=ne(xt,xt.WORLD),bE=ne(xt,xt.WORLD_DIRECTION),In=ne(xt,xt.VIEW),It=ne(xt,xt.VIEW_DIRECTION);te("PositionNode",xt);class ap extends St{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return Dt(e.context.mvp);const t=this.positionNode||_n;return fi.mul(Ds).mul(t)}}const ed=G(ap);te("ModelViewProjectionNode",ap);class cp extends wa{constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=ca,this.instanced=!1,this.attribute=null,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),o=this.bufferStride||s,r=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new of(n,o),c=new Ul(a,s,r);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let o=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,o=s):o=Dt(this).build(e,t),o}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this}setInstanced(e){return this.instanced=e,this}}const Oa=(i,e,t,n)=>pe(new cp(i,e,t,n)),RE=(i,e,t,n)=>Oa(i,e,t,n).setUsage(nl),td=(i,e,t,n)=>Oa(i,e,t,n).setInstanced(!0),nd=(i,e,t,n)=>RE(i,e,t,n).setInstanced(!0);O("toAttribute",i=>Oa(i.value));te("BufferAttributeNode",cp);class lp extends Re{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const c=t.instanceMatrix,l=new eS(c.array,16,1),u=c.usage===nl?nd:td,h=[u(l,"vec4",16,0),u(l,"vec4",16,4),u(l,"vec4",16,8),u(l,"vec4",16,12)];e=vo(...h),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const c=new BM(n.array,3),l=n.usage===nl?nd:td;this.instanceColorNode=U(l(c,"vec3",3,0))}const s=e.mul(_n).xyz,o=ri(e[0].xyz,e[1].xyz,e[2].xyz),r=ci.div(U(o[0].dot(o[0]),o[1].dot(o[1]),o[2].dot(o[2]))),a=o.mul(r).xyz;_n.assign(s),ci.assign(a),this.instanceColorNode!==null&&hi("vec3","vInstanceColor").assign(this.instanceColorNode)}}const CE=G(lp);te("InstanceNode",lp);class Gt extends Re{constructor(e=Gt.LOCAL){super(),this.scope=e}getHash(){return`tangent-${this.scope}`}getNodeType(){return this.scope===Gt.GEOMETRY?"vec4":"vec3"}generate(e){const t=this.scope;let n=null;if(t===Gt.GEOMETRY)n=dn("tangent","vec4"),e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents();else if(t===Gt.LOCAL)n=Dt(ga.xyz);else if(t===Gt.VIEW){const s=Ds.mul(Ee(Fa,0)).xyz;n=yn(Dt(s))}else if(t===Gt.WORLD){const s=Va.transformDirection(Hi);n=yn(Dt(s))}return n.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Gt.GEOMETRY="geometry";Gt.LOCAL="local";Gt.VIEW="view";Gt.WORLD="world";const ga=ne(Gt,Gt.GEOMETRY),Fa=ne(Gt,Gt.LOCAL),Va=ne(Gt,Gt.VIEW),LE=ne(Gt,Gt.WORLD),up=cr(Va,"TransformedTangentView");yn(up.transformDirection(Hi));te("TangentNode",Gt);class hp extends Re{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(this.batchingIdNode=dn("batchId"));const t=this.batchMesh._matricesTexture,n=Zl(ws(t),0),s=w(C(this.batchingIdNode)).mul(4).toVar(),o=C(s.mod(n)),r=C(s).div(C(n)),a=vo(ws(t,Rs(o,r)),ws(t,Rs(o.add(1),r)),ws(t,Rs(o.add(2),r)),ws(t,Rs(o.add(3),r))),c=ri(a[0].xyz,a[1].xyz,a[2].xyz);_n.assign(a.mul(_n));const l=ci.div(U(c[0].dot(c[0]),c[1].dot(c[1]),c[2].dot(c[2]))),u=c.mul(l).xyz;ci.assign(u),e.hasGeometryAttribute("tangent")&&Fa.mulAssign(c)}}const PE=G(hp);te("batch",hp);class dp extends Re{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=yt.OBJECT,this.skinIndexNode=dn("skinIndex","uvec4"),this.skinWeightNode=dn("skinWeight","vec4");let n,s,o;t?(n=ai("bindMatrix","mat4"),s=ai("bindMatrixInverse","mat4"),o=eE("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=Mt(e.bindMatrix,"mat4"),s=Mt(e.bindMatrixInverse,"mat4"),o=Ql(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=s,this.boneMatricesNode=o}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:s,bindMatrixInverseNode:o,boneMatricesNode:r}=this,a=r.element(t.x),c=r.element(t.y),l=r.element(t.z),u=r.element(t.w),h=s.mul(_n),d=On(a.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),m=o.mul(d).xyz;let g=On(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));g=o.mul(g).mul(s);const _=g.transformDirection(ci).xyz;_n.assign(m),ci.assign(_),e.hasGeometryAttribute("tangent")&&Fa.assign(_)}generate(e,t){if(t!=="void")return _n.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const IE=i=>pe(new dp(i,!0));te("SkinningNode",dp);class fp extends Re{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let s=0,o=this.params.length-1;s<o;s++){const r=this.params[s],a=r.isNode!==!0&&r.name||this.getVarName(s),c=r.isNode!==!0&&r.type||"int";n[a]=Da(a,c)}return t.returnsNode=this.params[this.params.length-1](n,e.addStack(),e),t.stackNode=e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n={tempWrite:!1},s=this.params,o=t.stackNode;for(let c=0,l=s.length-1;c<l;c++){const u=s[c];let h=null,d=null,m=null,g=null,_=null,p=null;u.isNode?(g="int",m=this.getVarName(c),h="0",d=u.build(e,g),_="<"):(g=u.type||"int",m=u.name||this.getVarName(c),h=u.start,d=u.end,_=u.condition,p=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(e,g)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,g)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",_=">="):d!==void 0&&h===void 0&&(h="0",_="<"),_===void 0&&(Number(h)>Number(d)?_=">=":_="<"));const f={start:h,end:d,condition:_},E=f.start,y=f.end;let A="",D="",R="";p||(g==="int"||g==="uint"?_.includes("<")?p="++":p="--":_.includes("<")?p="+= 1.":p="-= 1."),A+=e.getVar(g,m)+" = "+E,D+=m+" "+_+" "+y,R+=m+" "+p;const N=`for ( ${A}; ${D}; ${R} )`;e.addFlowCode((c===0?`
`:"")+e.tab+N+` {

`).addFlowTab()}const r=Fi(o,n).build(e,"void"),a=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+r);for(let c=0,l=this.params.length-1;c<l;c++)e.addFlowCode((c===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),a}}const Tt=(...i)=>pe(new fp(_o(i,"int"))).append(),DE=()=>Da("break").append();O("loop",(i,...e)=>Af(i,Tt(...e)));te("LoopNode",fp);const Oc=new WeakMap,Pn=new at,id=K(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:o})=>{const r=C(qS).mul(t).add(o),a=r.div(n),c=r.sub(a.mul(n));return ws(i,Rs(c,a)).depth(s).mul(e)});function UE(i){const e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,o=s!==void 0?s.length:0;let r=Oc.get(i);if(r===void 0||r.count!==o){let E=function(){p.dispose(),Oc.delete(i),i.removeEventListener("dispose",E)};var a=E;r!==void 0&&r.texture.dispose();const c=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],u=i.morphAttributes.color||[];let h=0;e===!0&&(h=1),t===!0&&(h=2),n===!0&&(h=3);let d=i.attributes.position.count*h,m=1;const g=4096;d>g&&(m=Math.ceil(d/g),d=g);const _=new Float32Array(d*m*4*o),p=new bl(_,d,m,o);p.type=Ui,p.needsUpdate=!0;const f=h*4;for(let y=0;y<o;y++){const A=c[y],D=l[y],R=u[y],N=d*m*4*y;for(let z=0;z<A.count;z++){const S=z*f;e===!0&&(Pn.fromBufferAttribute(A,z),_[N+S+0]=Pn.x,_[N+S+1]=Pn.y,_[N+S+2]=Pn.z,_[N+S+3]=0),t===!0&&(Pn.fromBufferAttribute(D,z),_[N+S+4]=Pn.x,_[N+S+5]=Pn.y,_[N+S+6]=Pn.z,_[N+S+7]=0),n===!0&&(Pn.fromBufferAttribute(R,z),_[N+S+8]=Pn.x,_[N+S+9]=Pn.y,_[N+S+10]=Pn.z,_[N+S+11]=R.itemSize===4?Pn.w:1)}}r={count:o,texture:p,stride:h,size:new Se(d,m)},Oc.set(i,r),i.addEventListener("dispose",E)}return r}class pp extends Re{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=Mt(1),this.updateType=yt.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.morphAttributes.normal!==void 0,o=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,r=o!==void 0?o.length:0,{texture:a,stride:c,size:l}=UE(t);n===!0&&_n.mulAssign(this.morphBaseInfluence),s===!0&&ci.mulAssign(this.morphBaseInfluence);const u=C(l.width);Tt(r,({i:h})=>{const d=w(0).toVar();this.mesh.isInstancedMesh===!0&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?d.assign(ws(this.mesh.morphTexture,Rs(C(h).add(1),C(wf))).r):d.assign(ai("morphTargetInfluences","float").element(h).toVar()),n===!0&&_n.addAssign(id({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(0)})),s===!0&&ci.addAssign(id({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const OE=G(pp);te("MorphNode",pp);class mp extends Re{constructor(){super("vec3")}getHash(){return"reflectVector"}setup(){return It.negate().reflect(Ut).transformDirection(Hi)}}const FE=ne(mp);te("ReflectVectorNode",mp);class gp extends Vo{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return FE}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===wo||!n.isRenderTargetTexture?U(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const _p=G(gp);O("cubeTexture",_p);te("CubeTextureNode",gp);class Mr extends Re{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}te("LightingNode",Mr);let Jo=null;class Bs extends Mr{constructor(e=null){super(),this.updateType=yt.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.shadowMaskNode=null,this.color=new Oe,this._defaultColorNode=Mt(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){const{object:t}=e;if(t.receiveShadow===!1)return;let n=this.shadowNode;if(n===null){Jo===null&&(Jo=e.createNodeMaterial(),Jo.fragmentNode=Ee(0,0,0,1),Jo.isShadowNodeMaterial=!0);const s=this.light.shadow,o=e.createRenderTarget(s.mapSize.width,s.mapSize.height),r=new _r;r.minFilter=fn,r.magFilter=fn,r.image.width=s.mapSize.width,r.image.height=s.mapSize.height,r.compareFunction=Vd,o.depthTexture=r,s.camera.updateProjectionMatrix();const a=ai("bias","float",s),c=ai("normalBias","float",s),l=t.material.shadowPositionNode||pl;let u=Mt(s.matrix).mul(l.add(np.mul(c)));u=u.xyz.div(u.w);const h=u.x.greaterThanEqual(0).and(u.x.lessThanEqual(1)).and(u.y.greaterThanEqual(0)).and(u.y.lessThanEqual(1)).and(u.z.lessThanEqual(1));let d=u.z.add(a);e.renderer.coordinateSystem===wo&&(d=d.mul(2).sub(1)),u=U(u.x,u.y.oneMinus(),d),n=((p,f,E)=>Un(p,f).compare(E))(r,u.xy,u.z);const g=Un(o.texture,u),_=h.mix(1,n.mix(g.a.mix(1,g),1));this.rtt=o,this.colorNode=this.colorNode.mul(_),this.shadowNode=n,this.shadowMaskNode=_,this.updateBeforeType=yt.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:s,scene:o}=e,r=o.overrideMaterial;o.overrideMaterial=Jo,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n);const a=s.toneMapping,c=s.getRenderTarget(),l=s.getRenderObjectFunction();s.setRenderObjectFunction((u,...h)=>{u.castShadow===!0&&s.renderObject(u,...h)}),s.setRenderTarget(t),s.toneMapping=Xn,s.render(o,n.shadow.camera),s.setRenderTarget(c),s.setRenderObjectFunction(l),s.toneMapping=a,o.overrideMaterial=r}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.shadowMaskNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}te("AnalyticLightNode",Bs);const _a=new WeakMap,VE=i=>i.sort((e,t)=>e.id-t.id);class zE extends Re{constructor(e=[]){super("vec3"),this.totalDiffuseNode=U().temp("totalDiffuse"),this.totalSpecularNode=U().temp("totalSpecular"),this.outgoingLightNode=U().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}setup(e){const t=e.context,n=t.lightingModel;let s=this.outgoingLightNode;if(n){const{lightNodes:o,totalDiffuseNode:r,totalSpecularNode:a}=this;t.outgoingLight=s;const c=e.addStack();n.start(t,c,e);for(const p of o)p.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:l,backdropAlpha:u}=t,{directDiffuse:h,directSpecular:d,indirectDiffuse:m,indirectSpecular:g}=t.reflectedLight;let _=h.add(m);l!==null&&(u!==null?_=U(u.mix(_,l)):_=U(l),t.material.transparent=!0),r.assign(_),a.assign(d.add(g)),s.assign(r.add(a)),n.finish(t,c,e),s=s.bypass(e.removeStack())}return s}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=VE(e);for(const n of e){let s=this._getLightNodeById(n.id);if(s===null){const o=n.constructor,r=_a.has(o)?_a.get(o):Bs;s=pe(new r(n))}t.push(s)}return this.lightNodes=t,this._hash=null,this}}const BE=G(zE);function Bo(i,e){if(_a.has(i)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof i!="function")throw new Error(`Light ${i.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);_a.set(i,e)}class vp extends Mr{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}te("AONode",vp);class xp extends Xl{constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=U().temp("directDiffuse"),s=U().temp("directSpecular"),o=U().temp("indirectDiffuse"),r=U().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:s,indirectDiffuse:o,indirectSpecular:r};return{radiance:U().temp("radiance"),irradiance:U().temp("irradiance"),iblIrradiance:U().temp("iblIrradiance"),ambientOcclusion:w(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const yp=G(xp);O("lightingContext",yp);te("LightingContextNode",xp);class Xt extends Re{constructor(e=Xt.LOCAL){super("vec3"),this.scope=e}getHash(){return`bitangent-${this.scope}`}generate(e){const t=this.scope;let n;t===Xt.GEOMETRY?n=ma.cross(ga):t===Xt.LOCAL?n=ci.cross(Fa):t===Xt.VIEW?n=us.cross(Va):t===Xt.WORLD&&(n=np.cross(LE));const s=n.mul(ga.w).xyz;return yn(Dt(s)).build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Xt.GEOMETRY="geometry";Xt.LOCAL="local";Xt.VIEW="view";Xt.WORLD="world";ne(Xt,Xt.GEOMETRY);ne(Xt,Xt.LOCAL);const HE=ne(Xt,Xt.VIEW);ne(Xt,Xt.WORLD);const kE=yn(Ut.cross(up).mul(ga.w));yn(kE.transformDirection(Hi));te("BitangentNode",Xt);const fo=ri(Va,HE,us);It.mul(fo);const GE=(()=>{let i=xo.cross(It);return i=i.cross(xo).normalize(),i=on(i,Ut,Es.mul(ts.oneMinus()).oneMinus().pow2().pow2()).normalize(),i})();class eu extends Re{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e,t){const n=this.getNodeType(e),s={tempWrite:!1},o=e.getDataFromNode(this);if(o.nodeProperty!==void 0)return o.nodeProperty;const{ifNode:r,elseNode:a}=this,c=t!=="void",l=c?tn(n).build(e):"";o.nodeProperty=l;const u=Fi(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let h=Fi(r,s).build(e,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let d=Fi(a,s).build(e,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const Dn=G(eu);O("cond",Dn);te("CondNode",eu);const sd=w(1),ml=w(-2),Kr=w(.8),Fc=w(-1),Zr=w(.4),Vc=w(2),Jr=w(.305),zc=w(3),od=w(.21),WE=w(4),rd=w(4),XE=w(16),qE=K(([i])=>{const e=U(kt(i)).toVar(),t=w(-1).toVar();return Qe(e.x.greaterThan(e.z),()=>{Qe(e.x.greaterThan(e.y),()=>{t.assign(Dn(i.x.greaterThan(0),0,3))}).else(()=>{t.assign(Dn(i.y.greaterThan(0),1,4))})}).else(()=>{Qe(e.z.greaterThan(e.y),()=>{t.assign(Dn(i.z.greaterThan(0),2,5))}).else(()=>{t.assign(Dn(i.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),YE=K(([i,e])=>{const t=Ae().toVar();return Qe(e.equal(0),()=>{t.assign(Ae(i.z,i.y).div(kt(i.x)))}).elseif(e.equal(1),()=>{t.assign(Ae(i.x.negate(),i.z.negate()).div(kt(i.y)))}).elseif(e.equal(2),()=>{t.assign(Ae(i.x.negate(),i.y).div(kt(i.z)))}).elseif(e.equal(3),()=>{t.assign(Ae(i.z.negate(),i.y).div(kt(i.x)))}).elseif(e.equal(4),()=>{t.assign(Ae(i.x.negate(),i.z).div(kt(i.y)))}).else(()=>{t.assign(Ae(i.x,i.y).div(kt(i.z)))}),ot(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),jE=K(([i])=>{const e=w(0).toVar();return Qe(i.greaterThanEqual(Kr),()=>{e.assign(sd.sub(i).mul(Fc.sub(ml)).div(sd.sub(Kr)).add(ml))}).elseif(i.greaterThanEqual(Zr),()=>{e.assign(Kr.sub(i).mul(Vc.sub(Fc)).div(Kr.sub(Zr)).add(Fc))}).elseif(i.greaterThanEqual(Jr),()=>{e.assign(Zr.sub(i).mul(zc.sub(Vc)).div(Zr.sub(Jr)).add(Vc))}).elseif(i.greaterThanEqual(od),()=>{e.assign(Jr.sub(i).mul(WE.sub(zc)).div(Jr.sub(od)).add(zc))}).else(()=>{e.assign(w(-2).mul(Pa(ot(1.16,i))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});K(([i,e])=>{const t=i.toVar();t.assign(ot(2,t).sub(1));const n=U(t,1).toVar();return Qe(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const $E=K(([i,e,t,n,s,o])=>{const r=w(t),a=U(e),c=Po(jE(r),ml,o),l=Ia(c),u=Oo(c),h=U(gl(i,a,u,n,s,o)).toVar();return Qe(l.notEqual(0),()=>{const d=U(gl(i,a,u.add(1),n,s,o)).toVar();h.assign(on(h,d,l))}),h}),gl=K(([i,e,t,n,s,o])=>{const r=w(t).toVar(),a=U(e),c=w(qE(a)).toVar(),l=w(Fn(rd.sub(r),0)).toVar();r.assign(Fn(r,rd));const u=w(ul(r)).toVar(),h=Ae(YE(a,c).mul(u.sub(2)).add(1)).toVar();return Qe(c.greaterThan(2),()=>{h.y.addAssign(u),c.subAssign(3)}),h.x.addAssign(c.mul(u)),h.x.addAssign(l.mul(ot(3,XE))),h.y.addAssign(ot(4,ul(o).sub(u))),h.x.mulAssign(n),h.y.mulAssign(s),i.uv(h).grad(Ae(),Ae())}),Bc=K(({envMap:i,mipInt:e,outputDirection:t,theta:n,axis:s,CUBEUV_TEXEL_WIDTH:o,CUBEUV_TEXEL_HEIGHT:r,CUBEUV_MAX_MIP:a})=>{const c=Zi(n),l=t.mul(c).add(s.cross(t).mul(Ii(n))).add(s.mul(s.dot(t).mul(c.oneMinus())));return gl(i,l,e,o,r,a)});K(({n:i,latitudinal:e,poleAxis:t,outputDirection:n,weights:s,samples:o,dTheta:r,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})=>{const d=U(Dn(e,t,Wf(t,n))).toVar();Qe(zf(d.equals(U(0))),()=>{d.assign(U(n.z,0,n.x.negate()))}),d.assign(yn(d));const m=U().toVar();return m.addAssign(s.element(C(0)).mul(Bc({theta:0,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),Tt({start:C(1),end:i},({i:g})=>{Qe(g.greaterThanEqual(o),()=>{DE()});const _=w(r.mul(w(g))).toVar();m.addAssign(s.element(g).mul(Bc({theta:_.mul(-1),axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),m.addAssign(s.element(g).mul(Bc({theta:_,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})))}),Ee(m,1)});let va=null;const ad=new WeakMap;function KE(i){const e=Math.log2(i)-2,t=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function ZE(i){let e=ad.get(i);if((e!==void 0?e.pmremVersion:-1)!==i.pmremVersion){if(i.isCubeTexture){if(i.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=va.fromCubemap(i,e)}else{if(i.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=va.fromEquirectangular(i,e)}e.pmremVersion=i.pmremVersion,ad.set(i,e)}return e.texture}class Mp extends St{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=Un(null),this._width=Mt(0),this._height=Mt(0),this._maxMip=Mt(0),this.updateBeforeType=yt.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=KE(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=ZE(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){va===null&&(va=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===ii&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=U(t.x.negate(),t.yz));let s=this.levelNode;return s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),$E(this._texture,t,s,this._width,this._height,this._maxMip)}}const JE=G(Mp);te("PMREMNode",Mp);const cd=new WeakMap;class Sp extends Mr{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let d=cd.get(t.value);d===void 0&&(d=JE(t.value),cd.set(t.value,d)),t=d}const{material:n}=e,o=n.envMap?ai("envMapIntensity","float",e.material):ai("environmentIntensity","float",e.scene),a=n.useAnisotropy===!0||n.anisotropy>0?GE:Ut,c=Fi(t,ld(ts,a)).mul(o),l=Fi(t,QE(ip)).mul(Math.PI).mul(o),u=ua(c);e.context.radiance.addAssign(u),e.context.iblIrradiance.addAssign(l);const h=e.context.lightingModel.clearcoatRadiance;if(h){const d=Fi(t,ld(da,ho)).mul(o),m=ua(d);h.addAssign(m)}}}const ld=(i,e)=>{let t=null;return{getUV:()=>(t===null&&(t=It.negate().reflect(e),t=i.mul(i).mix(t,e).normalize(),t=t.transformDirection(Hi)),t),getTextureLevel:()=>i}},QE=i=>({getUV:()=>i,getTextureLevel:()=>w(1)});te("EnvironmentNode",Sp);class Tp extends Mr{constructor(e){super(),this.node=e}setup(e){e.context.irradiance.addAssign(this.node)}}te("IrradianceNode",Tp);let Hc,kc;class ct extends Re{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===ct.VIEWPORT?"vec4":this.scope===ct.COORDINATE?"vec3":"vec2"}getUpdateType(){let e=yt.NONE;return(this.scope===ct.RESOLUTION||this.scope===ct.VIEWPORT)&&(e=yt.FRAME),this.updateType=e,e}update({renderer:e}){this.scope===ct.VIEWPORT?e.getViewport(kc):e.getDrawingBufferSize(Hc)}setup(){const e=this.scope;let t=null;if(e===ct.RESOLUTION)t=Mt(Hc||(Hc=new Se));else if(e===ct.VIEWPORT)t=Mt(kc||(kc=new at));else{t=eA.div(_l);let n=t.x,s=t.y;/bottom/i.test(e)&&(s=s.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=Ae(n,s)}return t}generate(e){if(this.scope===ct.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(_l).outputNode.build(e);t=`${e.getType("vec3")}( ${t}.x, ${n}.y - ${t}.y, ${t}.z )`}return t}return super.generate(e)}}ct.COORDINATE="coordinate";ct.RESOLUTION="resolution";ct.VIEWPORT="viewport";ct.TOP_LEFT="topLeft";ct.BOTTOM_LEFT="bottomLeft";ct.TOP_RIGHT="topRight";ct.BOTTOM_RIGHT="bottomRight";const eA=ne(ct,ct.COORDINATE),_l=ne(ct,ct.RESOLUTION),Mo=ne(ct,ct.VIEWPORT),hr=ne(ct,ct.TOP_LEFT);ne(ct,ct.BOTTOM_LEFT);ne(ct,ct.TOP_RIGHT);ne(ct,ct.BOTTOM_RIGHT);te("ViewportNode",ct);const Qo=new Se;class Sr extends Vo{constructor(e=hr,t=null,n=null){n===null&&(n=new cf,n.minFilter=Qi),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=yt.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(Qo);const n=this.value;(n.image.width!==Qo.width||n.image.height!==Qo.height)&&(n.image.width=Qo.width,n.image.height=Qo.height,n.needsUpdate=!0);const s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){const e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}}const tA=G(Sr),Ep=G(Sr,null,null,{generateMipmaps:!0});O("viewportTexture",tA);O("viewportMipTexture",Ep);te("ViewportTextureNode",Sr);let Gc=null;class Ap extends Sr{constructor(e=hr,t=null){Gc===null&&(Gc=new _r),super(e,t,Gc)}}const Np=G(Ap);O("viewportDepthTexture",Np);te("ViewportDepthTextureNode",Ap);class nn extends Re{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===nn.DEPTH_PIXEL?e.getFragDepth():super.generate(e)}setup(){const{scope:e}=this;let t=null;if(e===nn.DEPTH)t=vl(In.z,Ic,Dc);else if(e===nn.DEPTH_TEXTURE){const n=this.valueNode||Np(),s=wp(n,Ic,Dc);t=vl(s,Ic,Dc)}else e===nn.DEPTH_PIXEL&&this.valueNode!==null&&(t=bp().assign(this.valueNode));return t}}const vl=(i,e,t)=>i.add(e).div(e.sub(t)),wp=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t));nn.DEPTH="depth";nn.DEPTH_TEXTURE="depthTexture";nn.DEPTH_PIXEL="depthPixel";const bp=G(nn,nn.DEPTH_PIXEL);ne(nn,nn.DEPTH);G(nn,nn.DEPTH_TEXTURE);const Rp=ne(nn,nn.DEPTH_PIXEL);Rp.assign=i=>bp(i);te("ViewportDepthNode",nn);class hs extends Re{constructor(e=hs.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:s,globalClippingCount:o}=t,r=o+s,a=n?r-s:r;return this.scope===hs.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,r,a):this.setupDefault(t.planes,r,a)}setupAlphaToCoverage(e,t,n){return K(()=>{const s=hl(e),o=tn("float","distanceToPlane"),r=tn("float","distanceToGradient"),a=tn("float","clipOpacity");a.assign(1);let c;if(Tt(n,({i:l})=>{c=s.element(l),o.assign(In.dot(c.xyz).negate().add(c.w)),r.assign(o.fwidth().div(2)),a.mulAssign(Vi(r.negate(),r,o)),a.equal(0).discard()}),n<t){const l=tn("float","unionclipOpacity");l.assign(1),Tt({start:n,end:t},({i:u})=>{c=s.element(u),o.assign(In.dot(c.xyz).negate().add(c.w)),r.assign(o.fwidth().div(2)),l.mulAssign(Vi(r.negate(),r,o).oneMinus())}),a.mulAssign(l.oneMinus())}Pt.a.mulAssign(a),Pt.a.equal(0).discard()})()}setupDefault(e,t,n){return K(()=>{const s=hl(e);let o;if(Tt(n,({i:r})=>{o=s.element(r),In.dot(o.xyz).greaterThan(o.w).discard()}),n<t){const r=tn("bool","clipped");r.assign(!0),Tt({start:n,end:t},({i:a})=>{o=s.element(a),r.assign(In.dot(o.xyz).greaterThan(o.w).and(r))}),r.discard()}})()}}hs.ALPHA_TO_COVERAGE="alphaToCoverage";hs.DEFAULT="default";const nA=()=>pe(new hs),iA=()=>pe(new hs(hs.ALPHA_TO_COVERAGE));class Cp extends Re{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){const{renderer:t,material:n}=e;return t.coordinateSystem===ii&&n.side===mn?"false":e.getFrontFacing()}}const sA=ne(Cp),xa=w(sA).mul(2).sub(1);te("FrontFacingNode",Cp);const xl=new Map;class zn extends xi{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.shadowPositionNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+ff(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.depthWrite===!0&&this.setupDepth(e),this.fragmentNode===null){this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const s=this.setupLighting(e);n!==null&&e.stack.add(n);const o=Ee(s,Pt.a).max(0);t=this.setupOutput(e,o),YS.assign(t),this.outputNode!==null&&(t=this.outputNode)}else{let s=this.fragmentNode;s.isOutputStructNode!==!0&&(s=Ee(s)),t=this.setupOutput(e,s)}e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){if(e.clippingContext===null)return null;const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let s=null;return(t||n)&&(this.alphaToCoverage?s=iA():e.stack.add(nA())),s}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=ed().w.add(1).log2().mul(tE).mul(.5)),n!==null&&Rp.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&OE(t).append(),t.isSkinnedMesh===!0&&IE(t).append(),t.isBatchedMesh&&PE(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&CE(t).append(),this.positionNode!==null&&_n.assign(this.positionNode);const s=ed();return e.context.vertex=e.removeStack(),e.context.mvp=s,s}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?Ee(this.colorNode):ur;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Ee(n.xyz.mul(dn("color","vec3")),n.a)),e.instanceColor&&(n=hi("vec3","vInstanceColor").mul(n)),Pt.assign(n);const s=this.opacityNode?w(this.opacityNode):sp;if(Pt.a.assign(Pt.a.mul(s)),this.alphaTestNode!==null||this.alphaTest>0){const o=this.alphaTestNode!==null?w(this.alphaTestNode):iE;Pt.a.lessThanEqual(o).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=In.dFdx().cross(In.dFdy()).normalize();Ut.assign(e.mul(xa))}else{const e=this.normalNode?U(this.normalNode):hE;Ut.assign(e.mul(xa))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?_p(this.envMap):Un(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];if(t&&n.push(new Sp(t)),e.material.lightMap&&n.push(new Tp(Qf("lightMap","texture"))),this.aoNode!==null||e.material.aoMap){const o=this.aoNode!==null?this.aoNode:Un(e.material.aoMap);n.push(new vp(o))}let s=this.lightsNode||e.lightsNode;return n.length>0&&(s=BE([...s.lightNodes,...n])),s}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:o}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=Pt.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(e);c=yp(a,l,n,s)}else n!==null&&(c=U(s!==null?on(c,n,s):n));return(o&&o.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(U(o||oE))),c}setupOutput(e,t){const n=e.fogNode;return n&&(t=Ee(n.mix(t.rgb,n.colorNode),t.a)),t}setDefaultValues(e){for(const n in e){const s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}Object.assign(this.defines,e.defines);const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=Vn.prototype.toJSON.call(this,e),s=la(this);n.inputNodes={};for(const{property:r,childNode:a}of s)n.inputNodes[r]=a.toJSON(e).uuid;function o(r){const a=[];for(const c in r){const l=r[c];delete l.metadata,a.push(l)}return a}if(t){const r=o(e.textures),a=o(e.images),c=o(e.nodes);r.length>0&&(n.textures=r),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.shadowPositionNode=e.shadowPositionNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=oA(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const s in e)n[s]=e[s];return n}}function Mn(i,e){if(typeof e!="function"||!i)throw new Error(`Node material ${i} is not a class`);if(xl.has(i)){console.warn(`Redefinition of node material ${i}`);return}xl.set(i,e),e.type=i}function oA(i){const e=xl.get(i);if(e!==void 0)return new e}Mn("NodeMaterial",zn);class Lp extends Re{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new ir(t);return this._currentCond=Dn(e,n),this.add(this._currentCond)}elseif(e,t){const n=new ir(t),s=Dn(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}else(e){return this._currentCond.elseNode=new ir(e),this}build(e,...t){const n=xS();jh(this);for(const s of this.nodes)s.build(e,"void");return jh(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}G(Lp);te("StackNode",Lp);class Pp extends St{constructor(e=bE){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return Ae(t,n)}}G(Pp);te("EquirectUVNode",Pp);class Ip extends Re{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}te("StructTypeNode",Ip);class Dp extends Re{constructor(...e){super(),this.members=e,this.isOutputStructNode=!0}setup(e){super.setup(e);const t=this.members,n=[];for(let s=0;s<t.length;s++)n.push(t[s].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new Ip(n)).name}generate(e,t){const n=e.getVarFromNode(this);n.isOutputStructVar=!0;const s=e.getPropertyName(n),o=this.members,r=s!==""?s+".":"";for(let a=0;a<o.length;a++){const c=o[a].build(e,t);e.addLineFlowCode(`${r}m${a} = ${c}`)}return s}}G(Dp);te("OutputStructNode",Dp);class Up extends Re{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.uint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).float().mul(1/2**32)}}const rA=G(Up);O("hash",rA);te("HashNode",Up);const yl=(i,e)=>vi(ot(4,i.mul(Ft(1,i))),e),aA=(i,e)=>i.lessThan(.5)?yl(i.mul(2),e).div(2):Ft(1,yl(ot(Ft(1,i),2),e).div(2)),cA=(i,e,t)=>vi(ls(vi(i,e),On(vi(i,e),vi(Ft(1,i),t))),1/e),lA=(i,e)=>Ii($h.mul(e.mul(i).sub(1))).div($h.mul(e.mul(i).sub(1)));O("parabola",yl);O("gain",aA);O("pcurve",cA);O("sinc",lA);const pi=K(([i])=>i.fract().sub(.5).abs()),Op=K(([i])=>U(pi(i.z.add(pi(i.y.mul(1)))),pi(i.z.add(pi(i.x.mul(1)))),pi(i.y.add(pi(i.x.mul(1)))))),uA=K(([i,e,t])=>{const n=U(i).toVar(),s=w(1.4).toVar(),o=w(0).toVar(),r=U(n).toVar();return Tt({start:w(0),end:w(3),type:"float",condition:"<="},()=>{const a=U(Op(r.mul(2))).toVar();n.addAssign(a.add(t.mul(w(.1).mul(e)))),r.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);const c=w(pi(n.z.add(pi(n.x.add(pi(n.y)))))).toVar();o.addAssign(c.div(s)),r.addAssign(.14)}),o});pi.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});Op.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});uA.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let Wc;class Fp extends eu{constructor(e){Wc=Wc||Da("discard"),super(e,Wc)}}const hA=G(Fp),dA=i=>hA(i).append();O("discard",dA);te("DiscardNode",Fp);class Vp extends Re{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let s=null,o=-1;for(const r of this.functionNodes){const c=r.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],m=l[h];d.getNodeType(e)===m.type?u++:u=0}u>o&&(s=r,o=u)}}this._candidateFnCall=n=s(...t)}return n}}const fA=G(Vp),Kn=i=>(...e)=>fA(i,...e);te("FunctionOverloadingNode",Vp);class zp extends St{constructor(){super("vec2")}setup(){const e=U(It.z,0,It.x.negate()).normalize(),t=It.cross(e);return Ae(e.dot(Ut),t.dot(Ut)).mul(.495).add(.5)}}ne(zp);te("MatcapUVNode",zp);class An extends Vs{constructor(e=An.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=yt.FRAME}update(e){const t=this.scope,n=this.scale;t===An.LOCAL?this.value+=e.deltaTime*n:t===An.DELTA?this.value=e.deltaTime*n:t===An.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}An.LOCAL="local";An.GLOBAL="global";An.DELTA="delta";An.FRAME="frame";const pA=(i,e=0)=>pe(new An(An.LOCAL,i,e));ne(An,An.FRAME).uint();te("TimerNode",An);class qt extends Re{constructor(e=qt.SINE,t=pA()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=pe(this.timeNode);let n=null;return e===qt.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===qt.SQUARE?n=t.fract().round():e===qt.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===qt.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}qt.SINE="sine";qt.SQUARE="square";qt.TRIANGLE="triangle";qt.SAWTOOTH="sawtooth";G(qt,qt.SINE);G(qt,qt.SQUARE);G(qt,qt.TRIANGLE);G(qt,qt.SAWTOOTH);te("OscNode",qt);class Mi extends St{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===Mi.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===Mi.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}Mi.DIRECTION_TO_COLOR="directionToColor";Mi.COLOR_TO_DIRECTION="colorToDirection";const Bp=G(Mi,Mi.DIRECTION_TO_COLOR),mA=G(Mi,Mi.COLOR_TO_DIRECTION);O("directionToColor",Bp);O("colorToDirection",mA);te("PackingNode",Mi);class tu extends Re{constructor(e,t,n,s=w(0),o=w(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=o,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:o,doClamp:r}=this;let a=e.sub(t).div(n.sub(t));return r===!0&&(a=a.clamp()),a.mul(o.sub(s)).add(s)}}const gA=G(tu,null,null,{doClamp:!1}),_A=G(tu);O("remap",gA);O("remapClamp",_A);te("RemapNode",tu);class Hp extends St{constructor(e,t,n=Ae(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const vA=G(Hp);O("rotateUV",vA);te("RotateUVNode",Hp);class kp extends St{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const o=t.cos(),r=t.sin();return Wl(o,r,r.negate(),o).mul(n)}else{const o=t,r=vo(Ee(1,0,0,0),Ee(0,Zi(o.x),Ii(o.x).negate(),0),Ee(0,Ii(o.x),Zi(o.x),0),Ee(0,0,0,1)),a=vo(Ee(Zi(o.y),0,Ii(o.y),0),Ee(0,1,0,0),Ee(Ii(o.y).negate(),0,Zi(o.y),0),Ee(0,0,0,1)),c=vo(Ee(Zi(o.z),Ii(o.z).negate(),0,0),Ee(Ii(o.z),Zi(o.z),0,0),Ee(0,0,1,0),Ee(0,0,0,1));return r.mul(a).mul(c).mul(Ee(n,1)).xyz}}}const xA=G(kp);O("rotate",xA);te("RotateNode",kp);class Gp extends Re{constructor(e,t=Si(),n=w(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:o}=n,r=e.mod(s.mul(o)).floor(),a=r.mod(s),c=o.sub(r.add(1).div(s).ceil()),l=n.reciprocal(),u=Ae(a,c);return t.add(u).mul(l)}}G(Gp);te("SpriteSheetUVNode",Gp);class Wp extends Uo{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const s=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:o}=this;!o.instanceIndex&&this.node.bufferObject===!0&&s!==!0?n=e.generatePBO(this):n=o.build(e)}else n=super.generate(e);if(s!==!0){const o=this.getNodeType(e);n=e.format(n,o,t)}return n}}const Xp=G(Wp);O("storageElement",Xp);te("StorageArrayElementNode",Wp);class qp extends Re{constructor(e,t=null,n=null,s=w(1),o=_n,r=ci){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=o,this.normalNode=r}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:o,normalNode:r}=this;let a=r.abs().normalize();a=a.div(a.dot(U(1)));const c=o.yz.mul(s),l=o.zx.mul(s),u=o.xy.mul(s),h=e.value,d=t!==null?t.value:h,m=n!==null?n.value:h,g=Un(h,c).mul(a.x),_=Un(d,l).mul(a.y),p=Un(m,u).mul(a.z);return On(g,_,p)}}const yA=G(qp),MA=(...i)=>yA(...i);O("triplanarTexture",MA);te("TriplanarTexturesNode",qp);new Pi;new P;new P;new P;new Rt;new P(0,0,-1);new at;new P;new P;new at;new Se;new cs;Ae(hr.x.oneMinus(),hr.y);class SA extends La{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new at(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}te("VertexColorNode",SA);class Yp extends zo{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const TA=(i,e,t)=>pe(new Yp(i,e,t));te("RendererReferenceNode",Yp);const za=1/6,jp=i=>ot(za,ot(i,ot(i,i.negate().add(3)).sub(3)).add(1)),Ml=i=>ot(za,ot(i,ot(i,ot(3,i).sub(6))).add(4)),$p=i=>ot(za,ot(i,ot(i,ot(-3,i).add(3)).add(3)).add(1)),Sl=i=>ot(za,vi(i,3)),ud=i=>jp(i).add(Ml(i)),hd=i=>$p(i).add(Sl(i)),dd=i=>On(-1,Ml(i).div(jp(i).add(Ml(i)))),fd=i=>On(1,Sl(i).div($p(i).add(Sl(i)))),pd=(i,e,t)=>{const n=i.uvNode,s=ot(n,e.zw).add(.5),o=Oo(s),r=Ia(s),a=ud(r.x),c=hd(r.x),l=dd(r.x),u=fd(r.x),h=dd(r.y),d=fd(r.y),m=Ae(o.x.add(l),o.y.add(h)).sub(.5).mul(e.xy),g=Ae(o.x.add(u),o.y.add(h)).sub(.5).mul(e.xy),_=Ae(o.x.add(l),o.y.add(d)).sub(.5).mul(e.xy),p=Ae(o.x.add(u),o.y.add(d)).sub(.5).mul(e.xy),f=ud(r.y).mul(On(a.mul(i.uv(m).level(t)),c.mul(i.uv(g).level(t)))),E=hd(r.y).mul(On(a.mul(i.uv(_).level(t)),c.mul(i.uv(p).level(t))));return f.add(E)},EA=(i,e)=>{const t=Ae(i.size(C(e))),n=Ae(i.size(C(e.add(1)))),s=ls(1,t),o=ls(1,n),r=pd(i,Ee(s,t),Oo(e)),a=pd(i,Ee(o,n),kf(e));return Ia(e).mix(r,a)};class Kp extends St{constructor(e,t=w(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return EA(this.textureNode,this.blurNode)}}const AA=G(Kp);O("bicubic",AA);te("TextureBicubicNode",Kp);class Zp extends Re{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}ne(Zp);te("PointUVNode",Zp);class si extends Re{constructor(e=si.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===si.BACKGROUND_BLURRINESS?s=ai("backgroundBlurriness","float",n):t===si.BACKGROUND_INTENSITY?s=ai("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),s}}si.BACKGROUND_BLURRINESS="backgroundBlurriness";si.BACKGROUND_INTENSITY="backgroundIntensity";ne(si,si.BACKGROUND_BLURRINESS);ne(si,si.BACKGROUND_INTENSITY);te("SceneNode",si);class NA extends Ua{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.bufferObject=!1,this._attribute=null,this._varying=null,e.isStorageBufferAttribute!==!0&&e.isStorageInstancedBufferAttribute!==!0&&(e.isInstancedBufferAttribute?e.isStorageInstancedBufferAttribute=!0:e.isStorageBufferAttribute=!0)}getInputType(){return"storageBuffer"}element(e){return Xp(this,e)}setBufferObject(e){return this.bufferObject=e,this}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=Oa(this.value),this._varying=Dt(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}te("StorageBufferNode",NA);class Jp extends Vo{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStoreTextureNode=!0}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,o=super.generate(e,"property"),r=n.build(e,"uvec2"),a=s.build(e,"vec4"),c=e.generateTextureStore(e,o,r,a);e.addLineFlowCode(c)}}G(Jp);te("TextureStoreNode",Jp);class wA extends zo{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}te("UserDataNode",wA);const bA=K(({base:i,blend:e})=>{const t=n=>e[n].lessThan(Vf).cond(e[n],i[n].oneMinus().div(e[n]).oneMinus().max(0));return U(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),RA=K(({base:i,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],i[n].div(e[n].oneMinus()).max(0));return U(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),CA=K(({base:i,blend:e})=>{const t=n=>i[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return U(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),LA=K(({base:i,blend:e})=>{const t=n=>i[n].lessThan(.5).cond(i[n].mul(e[n],2),i[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return U(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class Qt extends St{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,s={base:t,blend:n};let o=null;return e===Qt.BURN?o=bA(s):e===Qt.DODGE?o=RA(s):e===Qt.SCREEN?o=CA(s):e===Qt.OVERLAY&&(o=LA(s)),o}}Qt.BURN="burn";Qt.DODGE="dodge";Qt.SCREEN="screen";Qt.OVERLAY="overlay";const PA=G(Qt,Qt.BURN),IA=G(Qt,Qt.DODGE),DA=G(Qt,Qt.OVERLAY),UA=G(Qt,Qt.SCREEN);O("burn",PA);O("dodge",IA);O("overlay",DA);O("screen",UA);te("BlendModeNode",Qt);const OA=K(({textureNode:i,bumpScale:e})=>{const t=s=>i.cache().context({getUV:o=>s(o.uvNode||Si()),forceUVContext:!0}),n=w(t(s=>s));return Ae(w(t(s=>s.add(s.dFdx()))).sub(n),w(t(s=>s.add(s.dFdy()))).sub(n)).mul(e)}),FA=K(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),o=e.dFdy().normalize(),r=t,a=o.cross(r),c=r.cross(s),l=s.dot(a).mul(xa),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class Qp extends St{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=OA({textureNode:this.textureNode,bumpScale:e});return FA({surf_pos:In,surf_norm:us,dHdxy:t})}}const VA=G(Qp);O("bumpMap",VA);te("BumpMapNode",Qp);const zA=K(({color:i,adjustment:e})=>e.mix(em(i.rgb),i.rgb)),BA=K(({color:i,adjustment:e})=>{const t=On(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return on(i.rgb,n,s)}),HA=K(({color:i,adjustment:e})=>{const t=U(.57735,.57735,.57735),n=e.cos();return U(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(Fo(t,i.rgb).mul(n.oneMinus())))))});class Nn extends St{constructor(e,t,n=w(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,s={color:t,adjustment:n};let o=null;return e===Nn.SATURATION?o=zA(s):e===Nn.VIBRANCE?o=BA(s):e===Nn.HUE?o=HA(s):console.error(`${this.type}: Method "${this.method}" not supported!`),o}}Nn.SATURATION="saturation";Nn.VIBRANCE="vibrance";Nn.HUE="hue";const kA=G(Nn,Nn.SATURATION),GA=G(Nn,Nn.VIBRANCE),WA=G(Nn,Nn.HUE),XA=U(.2125,.7154,.0721),em=(i,e=XA)=>Fo(i,e),tm=(i,e)=>on(U(0),i,em(i).sub(e).max(0));O("saturation",kA);O("vibrance",GA);O("hue",WA);O("threshold",tm);te("ColorAdjustmentNode",Nn);const qA=K(i=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,o=e.dFdx(),r=e.dFdy(),a=s.dFdx(),c=s.dFdy(),l=t,u=r.cross(l),h=l.cross(o),d=u.mul(a.x).add(h.mul(c.x)),m=u.mul(a.y).add(h.mul(c.y)),g=d.dot(d).max(m.dot(m)),_=xa.mul(g.inverseSqrt());return On(d.mul(n.x,_),m.mul(n.y,_),l.mul(n.z)).normalize()});class nm extends St{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=Cs}setup(e){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);n!==null&&(s=U(s.xy.mul(n),s.z));let o=null;return t===Fd?o=tp.mul(s).normalize():t===Cs&&(e.hasGeometryAttribute("tangent")===!0?o=fo.mul(s).normalize():o=qA({eye_pos:In,surf_norm:us,mapN:s,uv:Si()})),o}}const YA=G(nm);O("normalMap",YA);te("NormalMapNode",nm);class im extends St{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const jA=G(im);O("posterize",jA);te("PosterizeNode",im);const $A=K(({color:i,exposure:e})=>i.mul(e).clamp()),KA=K(({color:i,exposure:e})=>(i=i.mul(e),i.div(i.add(1)).clamp())),ZA=K(({color:i,exposure:e})=>{i=i.mul(e),i=i.sub(.004).max(0);const t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),JA=K(({color:i})=>{const e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),QA=K(({color:i,exposure:e})=>{const t=ri(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=ri(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=JA({color:i}),i=n.mul(i),i.clamp()}),eN=ri(U(1.6605,-.1246,-.0182),U(-.5876,1.1329,-.1006),U(-.0728,-.0083,1.1187)),tN=ri(U(.6274,.0691,.0164),U(.3293,.9195,.088),U(.0433,.0113,.8956)),nN=K(([i])=>{const e=U(i).toVar(),t=U(e.mul(e)).toVar(),n=U(t.mul(t)).toVar();return w(15.5).mul(n.mul(t)).sub(ot(40.14,n.mul(e))).add(ot(31.96,n).sub(ot(6.868,t.mul(e))).add(ot(.4298,t).add(ot(.1191,e).sub(.00232))))}),iN=K(({color:i,exposure:e})=>{const t=U(i).toVar(),n=ri(U(.856627153315983,.137318972929847,.11189821299995),U(.0951212405381588,.761241990602591,.0767994186031903),U(.0482516061458583,.101439036467562,.811302368396859)),s=ri(U(1.1271005818144368,-.1413297634984383,-.14132976349843826),U(-.11060664309660323,1.157823702216272,-.11060664309660294),U(-.016493938717834573,-.016493938717834257,1.2519364065950405)),o=w(-12.47393),r=w(4.026069);return t.mulAssign(e),t.assign(tN.mul(t)),t.assign(n.mul(t)),t.assign(Fn(t,1e-10)),t.assign(Pa(t)),t.assign(t.sub(o).div(r.sub(o))),t.assign(Po(t,0,1)),t.assign(nN(t)),t.assign(s.mul(t)),t.assign(vi(Fn(U(0),t),U(2.2))),t.assign(eN.mul(t)),t.assign(Po(t,0,1)),t}),sN={[Ed]:$A,[Ad]:KA,[Nd]:ZA,[wd]:QA,[bd]:iN};class sm extends St{constructor(e=Xn,t=rN,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===Xn)return t;const s={exposure:this.exposureNode,color:t},o=sN[n];let r=null;return o?r=o(s):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),r=t),r}}const oN=(i,e,t)=>pe(new sm(i,pe(e),pe(t))),rN=TA("toneMappingExposure","float");O("toneMapping",(i,e,t)=>oN(e,t,i));te("ToneMappingNode",sm);let Xc=null;class om extends Sr{constructor(e=hr,t=null){Xc===null&&(Xc=new cf),super(e,t,Xc)}updateReference(){return this}}const aN=G(om);O("viewportSharedTexture",aN);te("ViewportSharedTextureNode",om);class Tl extends Vo{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class Tr extends St{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const s=new _r;s.isRenderTargetTexture=!0,s.name="PostProcessingDepth";const o=new cs(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pr});o.texture.name="PostProcessing",o.depthTexture=s,this.renderTarget=o,this.updateBeforeType=yt.FRAME,this._textureNode=pe(new Tl(this,o.texture)),this._depthTextureNode=pe(new Tl(this,s)),this._depthNode=null,this._viewZNode=null,this._cameraNear=Mt(0),this._cameraFar=Mt(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=wp(this._depthTextureNode,e,t)}return this._viewZNode}getDepthNode(){if(this._depthNode===null){const e=this._cameraNear,t=this._cameraFar;this._depthNode=vl(this.getViewZNode(),e,t)}return this._depthNode}setup(){return this.scope===Tr.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();const o=t.getSize(new Se);this.setSize(o.width,o.height);const r=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=s.near,this._cameraFar.value=s.far,t.toneMapping=Xn,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,s),t.toneMapping=r,t.toneMappingNode=a,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}Tr.COLOR="color";Tr.DEPTH="depth";const nu=(i,e)=>pe(new Tl(i,e));te("PassNode",Tr);const qc=new Pl(-1,1,1,-1,0,1);class cN extends Bi{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new Yn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yn(t,2))}}const lN=new cN;class Ba extends pn{constructor(e=null){super(lN,e),this.camera=qc}renderAsync(e){return e.renderAsync(this,qc)}render(e){e.render(this,qc)}}const md=new Ba,gd=new Ba;class uN extends St{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=Ae(1),this._invSize=Mt(new Se),this._passDirection=Mt(new Se),this._horizontalRT=new cs,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new cs,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=nu(this,this._verticalRT.texture),this.updateBeforeType=yt.RENDER,this.resolution=new Se(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,o=t.getRenderTarget(),r=n.value;md.material=this._material,gd.material=this._material,this.setSize(s.image.width,s.image.height);const a=s.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),md.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),gd.render(t),t.setRenderTarget(o),n.value=r}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Ee();const n=t.uvNode||Si(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),o=K(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=Ae(this.directionNode).mul(this._passDirection),d=w(l[0]).toVar(),m=Ee(s(n).mul(d)).toVar();for(let g=1;g<c;g++){const _=w(g),p=w(l[g]),f=Ae(h.mul(u.mul(_))).toVar(),E=Ee(s(n.add(f))),y=Ee(s(n.sub(f)));m.addAssign(E.add(y).mul(p)),d.addAssign(ot(2,p))}return m.div(d)}),r=this._material||(this._material=e.createNodeMaterial());r.fragmentNode=o();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const hN=(i,e)=>pe(new uN(pe(i),e));O("gaussianBlur",hN);const _d=new Ba;class dN extends St{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=Un(),this.damp=Mt(t),this._compRT=new cs,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new cs,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=nu(this,this._compRT.texture),this.updateBeforeType=yt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,o=s.type;this._compRT.texture.type=o,this._oldRT.texture.type=o;const r=t.getRenderTarget(),a=n.value;this.textureNodeOld.value=this._oldRT.texture,t.setRenderTarget(this._compRT),_d.render(t);const c=this._oldRT;this._oldRT=this._compRT,this._compRT=c,this.setSize(s.image.width,s.image.height),t.setRenderTarget(r),n.value=a}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Ee();const s=t.uvNode||Si();n.uvNode=s;const o=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),r=K(([u,h])=>{const d=w(h).toVar(),m=Ee(u).toVar();return Fn(Jl(m.sub(d)),0)}),a=K(()=>{const u=Ee(n),h=Ee(o(s));return u.mulAssign(this.damp.mul(r(u,.1))),Fn(h,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=a(),_d.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const fN=(i,e)=>pe(new dN(pe(i),e));O("afterImage",fN);const vd=new Ba;class pN extends St{constructor(e,t,n,s){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=U(.1,0,1),this.samples=s,this.resolution=new Se(1,1),this._renderTarget=new cs,this._renderTarget.texture.name="anamorphic",this._invSize=Mt(new Se),this._textureNode=nu(this,this._renderTarget.texture),this.updateBeforeType=yt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value;this._renderTarget.texture.type=s.type;const o=t.getRenderTarget(),r=n.value;vd.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),vd.render(t),t.setRenderTarget(o),n.value=r}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Ee();const n=t.uvNode||Si(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),o=K(()=>{const c=this.samples,l=Math.floor(c/2),u=U(0).toVar();return Tt({start:-l,end:l},({i:h})=>{const d=w(h).abs().div(l).oneMinus(),m=Ae(n.x.add(this._invSize.x.mul(h).mul(this.scaleNode)),n.y),g=s(m),_=tm(g,this.tresholdNode).mul(d);u.addAssign(_)}),u.mul(this.colorNode)}),r=this._material||(this._material=e.createNodeMaterial());r.fragmentNode=o();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const mN=(i,e=.9,t=3,n=32)=>pe(new pN(pe(i),pe(e),pe(t),n));O("anamorphic",mN);class rm extends St{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),o=this.parameters;if(Array.isArray(o))for(let a=0;a<o.length;a++){const c=s[a],l=o[a];t.push(l.build(e,c.type))}else for(const a of s){const c=o[a.name];if(c!==void 0)t.push(c.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const gN=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?_o(e):Ca(e[0]),pe(new rm(pe(i),e)));O("call",gN);te("FunctionCallNode",rm);class am extends Re{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new zi,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:w()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=mf(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=gf(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const na=G(am);O("scriptableValue",na);te("ScriptableValueNode",am);class cm extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const s=t(...n);return this.set(e,s),s}}}class _N{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const Yc=new cm;class lm extends Re{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new cm,this._output=na(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=na(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=na(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new _N(this),s=Yc.get("THREE"),o=Yc.get("TSL"),r=this.getMethod(this.codeNode),a=[n,this._local,Yc,e,t,s,o];this._object=r(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:w()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,o=`
return { ...output, `+n+" };",r=s+this.codeNode.code+o;return this._method=new Function(...e,r),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const vN=G(lm);O("scriptable",vN);te("ScriptableNode",lm);class Ha extends Re{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||In.z).negate()}setup(){return this.factorNode}}const xN=G(Ha);O("fog",xN);te("FogNode",Ha);class um extends Ha{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return Vi(this.nearNode,this.farNode,t)}}const yN=G(um);O("rangeFog",yN);te("FogRangeNode",um);class hm extends Ha{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const MN=G(hm);O("densityFog",MN);te("FogExp2Node",hm);let Ms=null,Ss=null;class dm extends Re{constructor(e=w(),t=w()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(es(this.minNode.value)),n=e.getTypeLength(es(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.isInstancedMesh===!0?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.isInstancedMesh===!0){const s=this.minNode.value,o=this.maxNode.value,r=e.getTypeLength(es(s)),a=e.getTypeLength(es(o));Ms=Ms||new at,Ss=Ss||new at,Ms.setScalar(0),Ss.setScalar(0),r===1?Ms.setScalar(s):s.isColor?Ms.set(s.r,s.g,s.b):Ms.set(s.x,s.y,s.z||0,s.w||0),a===1?Ss.setScalar(o):o.isColor?Ss.set(o.r,o.g,o.b):Ss.set(o.x,o.y,o.z||0,o.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const m=d%c,g=Ms.getComponent(m),_=Ss.getComponent(m);u[d]=wl.lerp(g,_,Math.random())}const h=this.getNodeType(e);n=Ql(u,"vec4",t.count).element(wf).convert(h)}else n=w(0);return n}}G(dm);te("RangeNode",dm);class fm extends Re{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=yt.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const SN=(i,e,t)=>pe(new fm(pe(i),e,t));O("compute",SN);te("ComputeNode",fm);class Us extends Re{constructor(e=Us.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===Us.TARGET_DIRECTION&&(n=Hi.transformDirection(dl(t).sub(dl(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Us.TARGET_DIRECTION="targetDirection";const pm=G(Us,Us.TARGET_DIRECTION);te("LightNode",Us);const mm=K(i=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)});class gm extends Bs{constructor(e=null){super(e),this.cutoffDistanceNode=Mt(0),this.decayExponentNode=Mt(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:s,light:o}=this,r=e.context.lightingModel,a=ep(o).sub(In),c=a.normalize(),l=a.length(),u=mm({lightDistance:l,cutoffDistance:n,decayExponent:s}),h=t.mul(u),d=e.context.reflectedLight;r.direct({lightDirection:c,lightColor:h,reflectedLight:d,shadowMask:this.shadowMaskNode},e.stack,e)}}te("PointLightNode",gm);Bo(xr,gm);class _m extends Bs{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,s=pm(this.light),o=e.context.reflectedLight;t.direct({lightDirection:s,lightColor:n,reflectedLight:o,shadowMask:this.shadowMaskNode},e.stack,e)}}te("DirectionalLightNode",_m);Bo(hf,_m);class iu extends Bs{constructor(e=null){super(e),this.coneCosNode=Mt(0),this.penumbraCosNode=Mt(0),this.cutoffDistanceNode=Mt(0),this.decayExponentNode=Mt(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return Vi(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:s,decayExponentNode:o,light:r}=this,a=ep(r).sub(In),c=a.normalize(),l=c.dot(pm(r)),u=this.getSpotAttenuation(l),h=a.length(),d=mm({lightDistance:h,cutoffDistance:s,decayExponent:o}),m=n.mul(u).mul(d),g=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:m,reflectedLight:g,shadowMask:this.shadowMaskNode},e.stack,e)}}te("SpotLightNode",iu);Bo(uf,iu);class TN extends uf{constructor(e,t,n,s,o,r){super(e,t,n,s,o,r),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}class vm extends iu{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const s=e.acos().mul(1/Math.PI);n=Un(t,Ae(s,0),0).r}else n=super.getSpotAttenuation(e);return n}}te("IESSpotLightNode",vm);Bo(TN,vm);class xm extends Bs{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}te("AmbientLightNode",xm);Bo(df,xm);class ym extends Bs{constructor(e=null){super(e),this.lightPositionNode=dl(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=Mt(new Oe)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:s}=this,r=us.dot(s).mul(.5).add(.5),a=on(n,t,r);e.context.irradiance.addAssign(a)}}te("HemisphereLightNode",ym);Bo(KM,ym);const EN=K(i=>{const e=i.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class Mm extends St{constructor(e=Si()){super("float"),this.uvNode=e}setup(){return EN({uv:this.uvNode})}}const AN=G(Mm);O("checker",AN);te("CheckerNode",Mm);const NN=new af;class wN extends zn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(NN),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=K(()=>{Dt(Ae(),"vUv").assign(Si());const n=dn("instancePosition"),s=tn("vec4","mvPos");s.assign(Ds.mul(Ee(n,1)));const o=Mo.z.div(Mo.w),r=fi.mul(s),a=tn("vec2","offset");return a.assign(Sn.xy),a.assign(a.mul(wE)),a.assign(a.div(Mo.z)),a.y.assign(a.y.mul(o)),a.assign(a.mul(r.w)),r.assign(r.add(Ee(a,0,0))),r})(),this.fragmentNode=K(()=>{const n=Dt(Ae(),"vUv"),s=tn("float","alpha");s.assign(1);const o=n.x,r=n.y,a=o.mul(o).add(r.mul(r));if(e){const l=tn("float","dlen");l.assign(a.fwidth()),s.assign(Vi(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=dn("instanceColor").mul(ur):c=ur,Ee(c,s)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Mn("InstancedPointsNodeMaterial",wN);const bN=new rf;class RN extends zn{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(bN),this.setValues(e)}}Mn("LineBasicNodeMaterial",RN);const CN=new lf;class LN extends zn{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(CN),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?w(this.dashScaleNode):fl,n=this.dashSizeNode?w(this.dashSizeNode):op,s=this.dashSizeNode?w(this.dashGapNode):rp;yo.assign(n),pa.assign(s);const o=Dt(dn("lineDistance").mul(t));(e?o.add(e):o).mod(yo.add(pa)).greaterThan(yo).discard()}}Mn("LineDashedNodeMaterial",LN);const PN=new lf;class IN extends zn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(PN),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setup(e){this.setupShaders(),super.setup(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,s=this.worldUnits,o=K(({start:a,end:c})=>{const l=fi.element(2).element(2),d=fi.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return Ee(on(a.xyz,c.xyz,d),c.w)});this.vertexNode=K(()=>{hi("vec2","vUv").assign(Si());const a=dn("instanceStart"),c=dn("instanceEnd"),l=tn("vec4","start"),u=tn("vec4","end");l.assign(Ds.mul(Ee(a,1))),u.assign(Ds.mul(Ee(c,1))),s&&(hi("vec3","worldStart").assign(l.xyz),hi("vec3","worldEnd").assign(u.xyz));const h=Mo.z.div(Mo.w),d=fi.element(2).element(3).equal(-1);Qe(d,()=>{Qe(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(o({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(o({start:u,end:l}))})});const m=fi.mul(l),g=fi.mul(u),_=m.xyz.div(m.w),p=g.xyz.div(g.w),f=p.xy.sub(_.xy).temp();f.x.assign(f.x.mul(h)),f.assign(f.normalize());const E=cr(Ee());if(s){const y=u.xyz.sub(l.xyz).normalize(),A=on(l.xyz,u.xyz,.5).normalize(),D=y.cross(A).normalize(),R=y.cross(D),N=hi("vec4","worldPos");N.assign(Sn.y.lessThan(.5).cond(l,u));const z=Uc.mul(.5);N.addAssign(Ee(Sn.x.lessThan(0).cond(D.mul(z),D.mul(z).negate()),0)),n||(N.addAssign(Ee(Sn.y.lessThan(.5).cond(y.mul(z).negate(),y.mul(z)),0)),N.addAssign(Ee(R.mul(z),0)),Qe(Sn.y.greaterThan(1).or(Sn.y.lessThan(0)),()=>{N.subAssign(Ee(R.mul(2).mul(z),0))})),E.assign(fi.mul(N));const S=cr(U());S.assign(Sn.y.lessThan(.5).cond(_,p)),E.z.assign(S.z.mul(E.w))}else{const y=tn("vec2","offset");y.assign(Ae(f.y,f.x.negate())),f.x.assign(f.x.div(h)),y.x.assign(y.x.div(h)),y.assign(Sn.x.lessThan(0).cond(y.negate(),y)),Qe(Sn.y.lessThan(0),()=>{y.assign(y.sub(f))}).elseif(Sn.y.greaterThan(1),()=>{y.assign(y.add(f))}),y.assign(y.mul(Uc)),y.assign(y.div(Mo.w)),E.assign(Sn.y.lessThan(.5).cond(m,g)),y.assign(y.mul(E.w)),E.assign(E.add(Ee(y,0,0)))}return E})();const r=K(({p1:a,p2:c,p3:l,p4:u})=>{const h=a.sub(l),d=u.sub(l),m=c.sub(a),g=h.dot(d),_=d.dot(m),p=h.dot(m),f=d.dot(d),y=m.dot(m).mul(f).sub(_.mul(_)),D=g.mul(_).sub(p.mul(f)).div(y).clamp(),R=g.add(_.mul(D)).div(f).clamp();return Ae(D,R)});this.fragmentNode=K(()=>{const a=hi("vec2","vUv");if(n){const u=this.offsetNode?w(this.offsetNodeNode):Qh,h=this.dashScaleNode?w(this.dashScaleNode):fl,d=this.dashSizeNode?w(this.dashSizeNode):op,m=this.dashSizeNode?w(this.dashGapNode):rp;yo.assign(d),pa.assign(m);const g=dn("instanceDistanceStart"),_=dn("instanceDistanceEnd"),p=Sn.y.lessThan(.5).cond(h.mul(g),fl.mul(_)),f=Dt(p.add(Qh)),E=u?f.add(u):f;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),E.mod(yo.add(pa)).greaterThan(yo).discard()}const c=tn("float","alpha");if(c.assign(1),s){const u=hi("vec3","worldStart"),h=hi("vec3","worldEnd"),d=hi("vec4","worldPos").xyz.normalize().mul(1e5),m=h.sub(u),g=r({p1:u,p2:h,p3:U(0,0,0),p4:d}),_=u.add(m.mul(g.x)),p=d.mul(g.y),y=_.sub(p).length().div(Uc);if(!n)if(e){const A=y.fwidth();c.assign(Vi(A.negate().add(.5),A.add(.5),y).oneMinus())}else y.greaterThan(.5).discard()}else if(e){const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),d=u.mul(u).add(h.mul(h)),m=tn("float","dlen");m.assign(d.fwidth()),Qe(a.y.abs().greaterThan(1),()=>{c.assign(Vi(m.oneMinus(),m.add(1),d).oneMinus())})}else Qe(a.y.abs().greaterThan(1),()=>{const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=dn("instanceColorStart"),h=dn("instanceColorEnd");l=Sn.y.lessThan(.5).cond(u,h).mul(ur)}else l=ur;return Ee(l,c)})()}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.needsUpdate=!0)}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.needsUpdate=!0)}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.needsUpdate=!0)}}Mn("Line2NodeMaterial",IN);const DN=new WM;class UN extends zn{constructor(e){super(),this.isMeshNormalNodeMaterial=!0,this.setDefaultValues(DN),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?w(this.opacityNode):sp;Pt.assign(Ee(Bp(Ut),e))}}Mn("MeshNormalNodeMaterial",UN);const ON=new Cl;class FN extends zn{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(ON),this.setValues(e)}}Mn("MeshBasicNodeMaterial",FN);const dr=K(({f0:i,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),ya=K(i=>i.diffuseColor.mul(1/Math.PI)),VN=()=>w(.25),zN=K(({dotNH:i})=>cl.mul(w(.5)).add(1).mul(w(1/Math.PI)).mul(i.pow(cl))),BN=K(({lightDirection:i})=>{const e=i.add(It).normalize(),t=Ut.dot(e).clamp(),n=It.dot(e).clamp(),s=dr({f0:ei,f90:1,dotVH:n}),o=VN(),r=zN({dotNH:t});return s.mul(o).mul(r)});class Sm extends ql{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const o=Ut.dot(e).clamp().mul(t);n.directDiffuse.addAssign(o.mul(ya({diffuseColor:Pt.rgb}))),this.specular===!0&&n.directSpecular.addAssign(o.mul(BN({lightDirection:e})).mul(cE))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(ya({diffuseColor:Pt})))}}const HN=new XM;class kN extends zn{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(HN),this.setValues(e)}setupLightingModel(){return new Sm(!1)}}Mn("MeshLambertNodeMaterial",kN);const GN=new GM;class WN extends zn{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(GN),this.setValues(e)}setupLightingModel(){return new Sm}setupVariants(){const e=(this.shininessNode?w(this.shininessNode):sE).max(1e-4);cl.assign(e);const t=this.specularNode||rE;ei.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}Mn("MeshPhongNodeMaterial",WN);const XN=K(()=>{const i=ma.dFdx().abs().max(ma.dFdy().abs());return i.x.max(i.y).max(i.z)}),qN=K(i=>{const{roughness:e}=i,t=XN();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),YN=K(({alpha:i,dotNL:e,dotNV:t})=>{const n=i.pow2(),s=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt()),o=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt());return ls(.5,s.add(o).max(Vf))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),jN=K(({alphaT:i,alphaB:e,dotTV:t,dotBV:n,dotTL:s,dotBL:o,dotNV:r,dotNL:a})=>{const c=a.mul(U(i.mul(t),e.mul(n),r).length()),l=r.mul(U(i.mul(s),e.mul(o),a).length());return ls(.5,c.add(l)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),$N=K(({alpha:i,dotNH:e})=>{const t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),KN=w(1/Math.PI),ZN=K(({alphaT:i,alphaB:e,dotNH:t,dotTH:n,dotBH:s})=>{const o=i.mul(e),r=U(e.mul(n),i.mul(s),o.mul(t)),a=r.dot(r),c=o.div(a);return KN.mul(o.mul(c.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),xd=K(i=>{const{lightDirection:e,f0:t,f90:n,roughness:s,f:o,USE_IRIDESCENCE:r,USE_ANISOTROPY:a}=i,c=i.normalView||Ut,l=s.pow2(),u=e.add(It).normalize(),h=c.dot(e).clamp(),d=c.dot(It).clamp(),m=c.dot(u).clamp(),g=It.dot(u).clamp();let _=dr({f0:t,f90:n,dotVH:g}),p,f;if(Yh(r)&&(_=jl.mix(_,o)),Yh(a)){const E=ea.dot(e),y=ea.dot(It),A=ea.dot(u),D=xo.dot(e),R=xo.dot(It),N=xo.dot(u);p=jN({alphaT:al,alphaB:l,dotTV:y,dotBV:R,dotTL:E,dotBL:D,dotNV:d,dotNL:h}),f=ZN({alphaT:al,alphaB:l,dotNH:m,dotTH:A,dotBH:N})}else p=YN({alpha:l,dotNL:h,dotNV:d}),f=$N({alpha:l,dotNH:m});return _.mul(p).mul(f)}),Tm=K(({roughness:i,dotNV:e})=>{const t=Ee(-1,-.0275,-.572,.022),n=Ee(1,.0425,1.04,-.04),s=i.mul(t).add(n),o=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return Ae(-1.04,1.04).mul(o).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),Em=K(i=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:s}=i,o=Tm({dotNV:e,roughness:s});return t.mul(o.x).add(n.mul(o.y))}),JN=K(({f:i,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),s=n.mul(n),o=n.mul(s,s).clamp(0,.9999);return i.sub(U(e).mul(o)).div(o.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),QN=K(({roughness:i,dotNH:e})=>{const t=i.pow2(),n=w(1).div(t),o=e.pow2().oneMinus().max(.0078125);return w(2).add(n).mul(o.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),ew=K(({dotNV:i,dotNL:e})=>w(1).div(w(4).mul(e.add(i).sub(e.mul(i))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),tw=K(({lightDirection:i})=>{const e=i.add(It).normalize(),t=Ut.dot(i).clamp(),n=Ut.dot(It).clamp(),s=Ut.dot(e).clamp(),o=QN({roughness:Yl,dotNH:s}),r=ew({dotNV:n,dotNL:t});return uo.mul(o).mul(r)}),nw=K(([i,e,t,n,s])=>{const o=U(qf(e.negate(),yn(i),ls(1,n))),r=U(sr(s[0].xyz),sr(s[1].xyz),sr(s[2].xyz));return yn(o).mul(t.mul(r))}).setLayout({name:"getVolumeTransmissionRay",type:"vec3",inputs:[{name:"n",type:"vec3"},{name:"v",type:"vec3"},{name:"thickness",type:"float"},{name:"ior",type:"float"},{name:"modelMatrix",type:"mat4"}]}),iw=K(([i,e])=>i.mul(Po(e.mul(2).sub(2),0,1))).setLayout({name:"applyIorToRoughness",type:"float",inputs:[{name:"roughness",type:"float"},{name:"ior",type:"float"}]}),sw=Ep(),ow=K(([i,e,t])=>{const n=sw.uv(i),s=Pa(w(_l.x)).mul(iw(e,t));return n.bicubic(s)}),rw=K(([i,e,t])=>(Qe(t.notEqual(0),()=>{const n=Hf(e).negate().div(t);return Bf(n.negate().mul(i))}),U(1))).setLayout({name:"volumeAttenuation",type:"vec3",inputs:[{name:"transmissionDistance",type:"float"},{name:"attenuationColor",type:"vec3"},{name:"attenuationDistance",type:"float"}]}),aw=K(([i,e,t,n,s,o,r,a,c,l,u,h,d,m])=>{const g=nw(i,e,h,u,a),_=r.add(g),p=l.mul(c.mul(Ee(_,1))),f=Ae(p.xy.div(p.w)).toVar();f.addAssign(1),f.divAssign(2),f.assign(Ae(f.x,f.y.oneMinus()));const E=ow(f,t,u),y=n.mul(rw(sr(g),d,m)),A=y.rgb.mul(E.rgb),D=i.dot(e).clamp(),R=U(Em({dotNV:D,specularColor:s,specularF90:o,roughness:t})),N=y.r.add(y.g,y.b).div(3);return Ee(R.oneMinus().mul(A),E.a.oneMinus().mul(N).oneMinus())}),cw=ri(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),lw=i=>{const e=i.sqrt();return U(1).add(e).div(U(1).sub(e))},yd=(i,e)=>i.sub(e).div(i.add(e)).pow2(),uw=(i,e)=>{const t=i.mul(2*Math.PI*1e-9),n=U(54856e-17,44201e-17,52481e-17),s=U(1681e3,1795300,2208400),o=U(43278e5,93046e5,66121e5),r=w(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(o.mul(2*Math.PI).sqrt()).mul(s.mul(t).add(e).cos()).mul(t.pow2().negate().mul(o).exp());return a=U(a.x.add(r),a.y,a.z).div(10685e-11),cw.mul(a)},hw=K(({outsideIOR:i,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:s})=>{const o=on(i,e,Vi(0,.03,n)),r=i.div(o).pow2().mul(w(1).sub(t.pow2())),c=w(1).sub(r).sqrt(),l=yd(o,i),u=dr({f0:l,f90:1,dotVH:t}),h=u.oneMinus(),d=o.lessThan(i).cond(Math.PI,0),m=w(Math.PI).sub(d),g=lw(s.clamp(0,.9999)),_=yd(g,o.vec3()),p=dr({f0:_,f90:1,dotVH:c}),f=U(g.x.lessThan(o).cond(Math.PI,0),g.y.lessThan(o).cond(Math.PI,0),g.z.lessThan(o).cond(Math.PI,0)),E=o.mul(n,c,2),y=U(m).add(f),A=u.mul(p).clamp(1e-5,.9999),D=A.sqrt(),R=h.pow2().mul(p).div(U(1).sub(A));let z=u.add(R),S=R.sub(h);for(let x=1;x<=2;++x){S=S.mul(D);const H=uw(w(x).mul(E),w(x).mul(y)).mul(2);z=z.add(S.mul(H))}return z.max(U(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),dw=K(({normal:i,viewDir:e,roughness:t})=>{const n=i.dot(e).saturate(),s=t.pow2(),o=Dn(t.lessThan(.25),w(-339.2).mul(s).add(w(161.4).mul(t)).sub(25.9),w(-8.48).mul(s).add(w(14.3).mul(t)).sub(9.95)),r=Dn(t.lessThan(.25),w(44).mul(s).sub(w(23.7).mul(t)).add(3.26),w(1.97).mul(s).sub(w(3.27).mul(t)).add(.72));return Dn(t.lessThan(.25),0,w(.1).mul(t).sub(.025)).add(o.mul(n).add(r).exp()).mul(1/Math.PI).saturate()}),jc=U(.04),$c=U(1);class su extends ql{constructor(e=!1,t=!1,n=!1,s=!1,o=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.anisotropy=s,this.transmission=o,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(e){if(this.clearcoat===!0&&(this.clearcoatRadiance=U().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=U().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=U().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=U().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=U().temp("sheenSpecularIndirect")),this.iridescence===!0){const t=Ut.dot(It).clamp();this.iridescenceFresnel=hw({outsideIOR:w(1),eta2:Rf,cosTheta1:t,thinFilmThickness:Cf,baseF0:ei}),this.iridescenceF0=JN({f:this.iridescenceFresnel,f90:1,dotVH:t})}if(this.transmission===!0){const t=pl,n=nE.sub(pl).normalize(),s=ip;e.backdrop=aw(s,n,ts,Pt,ei,fa,t,lr,Hi,fi,ta,Lf,If,Pf),e.backdropAlpha=ll,Pt.a.mulAssign(on(1,e.backdrop.a,ll))}}computeMultiscattering(e,t,n){const s=Ut.dot(It).clamp(),o=Tm({roughness:ts,dotNV:s}),a=(this.iridescenceF0?jl.mix(ei,this.iridescenceF0):ei).mul(o.x).add(n.mul(o.y)),l=o.x.add(o.y).oneMinus(),u=ei.add(ei.oneMinus().mul(.047619)),h=a.mul(u).div(l.mul(u).oneMinus());e.addAssign(a),t.addAssign(h.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const o=Ut.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(o.mul(tw({lightDirection:e}))),this.clearcoat===!0){const a=ho.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(xd({lightDirection:e,f0:jc,f90:$c,roughness:da,normalView:ho})))}n.directDiffuse.addAssign(o.mul(ya({diffuseColor:Pt.rgb}))),n.directSpecular.addAssign(o.mul(xd({lightDirection:e,f0:ei,f90:1,roughness:ts,iridescence:this.iridescence,f:this.iridescenceFresnel,USE_IRIDESCENCE:this.iridescence,USE_ANISOTROPY:this.anisotropy})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(ya({diffuseColor:Pt})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(uo,dw({normal:Ut,viewDir:It,roughness:Yl}))),this.clearcoat===!0){const l=ho.dot(It).clamp(),u=Em({dotNV:l,specularColor:jc,specularF90:$c,roughness:da});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const s=U().temp("singleScattering"),o=U().temp("multiScattering"),r=t.mul(1/Math.PI);this.computeMultiscattering(s,o,fa);const a=s.add(o),c=Pt.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(s)),n.indirectSpecular.addAssign(o.mul(r)),n.indirectDiffuse.addAssign(c.mul(r))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const s=Ut.dot(It).clamp().add(e),o=ts.mul(-16).oneMinus().negate().exp2(),r=e.sub(s.pow(o).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(r)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=ho.dot(It).clamp(),s=dr({dotVH:n,f0:jc,f90:$c}),o=t.mul(rl.mul(s).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(rl));t.assign(o)}if(this.sheen===!0){const n=uo.r.max(uo.g).max(uo.b).mul(.157).oneMinus(),s=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(s)}}}const fw=new Fs;class Am extends zn{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(fw),this.setValues(e)}setupLightingModel(){return new su}setupSpecular(){const e=on(U(.04),Pt.rgb,ha);ei.assign(e),fa.assign(1)}setupVariants(){const e=this.metalnessNode?w(this.metalnessNode):uE;ha.assign(e);let t=this.roughnessNode?w(this.roughnessNode):lE;t=qN({roughness:t}),ts.assign(t),this.setupSpecular(),Pt.assign(Ee(Pt.rgb.mul(e.oneMinus()),Pt.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}Mn("MeshStandardNodeMaterial",Am);const pw=new kM;class Nm extends Am{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.iorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.anisotropyNode=null,this.setDefaultValues(pw),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}get useAnisotropy(){return this.anisotropy>0||this.anisotropyNode!==null}get useTransmission(){return this.transmission>0||this.transmissionNode!==null}setupSpecular(){const e=this.iorNode?w(this.iorNode):EE;ta.assign(e),ei.assign(on(Lo(Xf(ta.sub(1).div(ta.add(1))).mul(aE),U(1)).mul(Jh),Pt.rgb,ha)),fa.assign(on(Jh,1,ha))}setupLightingModel(){return new su(this.useClearcoat,this.useSheen,this.useIridescence,this.useAnisotropy,this.useTransmission)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?w(this.clearcoatNode):dE,n=this.clearcoatRoughnessNode?w(this.clearcoatRoughnessNode):fE;rl.assign(t),da.assign(n)}if(this.useSheen){const t=this.sheenNode?U(this.sheenNode):gE,n=this.sheenRoughnessNode?w(this.sheenRoughnessNode):_E;uo.assign(t),Yl.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?w(this.iridescenceNode):xE,n=this.iridescenceIORNode?w(this.iridescenceIORNode):yE,s=this.iridescenceThicknessNode?w(this.iridescenceThicknessNode):ME;jl.assign(t),Rf.assign(n),Cf.assign(s)}if(this.useAnisotropy){const t=(this.anisotropyNode?Ae(this.anisotropyNode):vE).toVar();Es.assign(t.length()),Qe(Es.equal(0),()=>{t.assign(Ae(1,0))}).else(()=>{t.divAssign(Es),Es.assign(Es.saturate())}),al.assign(Es.pow2().mix(ts.pow2(),1)),ea.assign(fo[0].mul(t.x).add(fo[1].mul(t.y))),xo.assign(fo[1].mul(t.x).sub(fo[0].mul(t.y)))}if(this.useTransmission){const t=this.transmissionNode?w(this.transmissionNode):SE,n=this.thicknessNode?w(this.thicknessNode):TE,s=this.attenuationDistanceNode?w(this.attenuationDistanceNode):AE,o=this.attenuationColorNode?U(this.attenuationColorNode):NE;ll.assign(t),Lf.assign(n),Pf.assign(s),If.assign(o)}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?U(this.clearcoatNormalNode):pE;ho.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,this.anisotropyNode=e.anisotropyNode,super.copy(e)}}Mn("MeshPhysicalNodeMaterial",Nm);class mw extends su{constructor(e,t,n,s){super(e,t,n),this.useSSS=s}direct({lightDirection:e,lightColor:t,reflectedLight:n},s,o){if(this.useSSS===!0){const r=o.material,{thicknessColorNode:a,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:h,thicknessScaleNode:d}=r,m=e.add(Ut.mul(c)).normalize(),g=w(It.dot(m.negate()).saturate().pow(h).mul(d)),_=U(g.add(l).mul(a));n.directDiffuse.addAssign(_.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},s,o)}}class gw extends Nm{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=w(.1),this.thicknessAmbientNode=w(0),this.thicknessAttenuationNode=w(.1),this.thicknessPowerNode=w(2),this.thicknessScaleNode=w(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new mw(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}Mn("MeshSSSNodeMaterial",gw);const _w=new af;class vw extends zn{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(_w),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}Mn("PointsNodeMaterial",vw);const xw=new zM;class yw extends zn{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(xw),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:s,scaleNode:o}=this,r=_n;let a=Ds.mul(U(n||0)),c=Ae(lr[0].xyz.length(),lr[1].xyz.length());o!==null&&(c=c.mul(o));let l=r.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(Mt(e.center).sub(.5))),l=l.mul(c);const u=w(s||mE),h=l.rotate(u);a=Ee(a.xy.add(h),a.zw);const d=fi.mul(a);return t.vertex=r,d}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}Mn("SpriteNodeMaterial",yw);class Mw extends ql{constructor(){super(),this.shadowNode=w(1).toVar("shadowMask")}direct({shadowMask:e}){this.shadowNode.mulAssign(e)}finish(e){Pt.a.mulAssign(this.shadowNode.oneMinus()),e.outgoingLight.rgb.assign(Pt.rgb)}}const Sw=new HM;class Tw extends zn{constructor(e){super(),this.isShadowNodeMaterial=!0,this.lights=!0,this.setDefaultValues(Sw),this.setValues(e)}setupLightingModel(){return new Mw}}Mn("ShadowNodeMaterial",Tw);const So=K(([i,e,t])=>{const n=w(t).toVar(),s=w(e).toVar(),o=Is(i).toVar();return Dn(o,s,n)}),fr=K(([i,e])=>{const t=Is(e).toVar(),n=w(i).toVar();return Dn(t,n.negate(),n)}),Ot=K(([i])=>{const e=w(i).toVar();return C(Oo(e))}),Nt=K(([i,e])=>{const t=w(i).toVar();return e.assign(Ot(t)),t.sub(w(e))}),wm=K(([i,e,t,n,s,o])=>{const r=w(o).toVar(),a=w(s).toVar(),c=w(n).toVar(),l=w(t).toVar(),u=w(e).toVar(),h=w(i).toVar(),d=w(Ft(1,a)).toVar();return Ft(1,r).mul(h.mul(d).add(u.mul(a))).add(r.mul(l.mul(d).add(c.mul(a))))}),bm=K(([i,e,t,n,s,o])=>{const r=w(o).toVar(),a=w(s).toVar(),c=U(n).toVar(),l=U(t).toVar(),u=U(e).toVar(),h=U(i).toVar(),d=w(Ft(1,a)).toVar();return Ft(1,r).mul(h.mul(d).add(u.mul(a))).add(r.mul(l.mul(d).add(c.mul(a))))}),Rm=Kn([wm,bm]),Cm=K(([i,e,t,n,s,o,r,a,c,l,u])=>{const h=w(u).toVar(),d=w(l).toVar(),m=w(c).toVar(),g=w(a).toVar(),_=w(r).toVar(),p=w(o).toVar(),f=w(s).toVar(),E=w(n).toVar(),y=w(t).toVar(),A=w(e).toVar(),D=w(i).toVar(),R=w(Ft(1,m)).toVar(),N=w(Ft(1,d)).toVar();return w(Ft(1,h)).toVar().mul(N.mul(D.mul(R).add(A.mul(m))).add(d.mul(y.mul(R).add(E.mul(m))))).add(h.mul(N.mul(f.mul(R).add(p.mul(m))).add(d.mul(_.mul(R).add(g.mul(m))))))}),Lm=K(([i,e,t,n,s,o,r,a,c,l,u])=>{const h=w(u).toVar(),d=w(l).toVar(),m=w(c).toVar(),g=U(a).toVar(),_=U(r).toVar(),p=U(o).toVar(),f=U(s).toVar(),E=U(n).toVar(),y=U(t).toVar(),A=U(e).toVar(),D=U(i).toVar(),R=w(Ft(1,m)).toVar(),N=w(Ft(1,d)).toVar();return w(Ft(1,h)).toVar().mul(N.mul(D.mul(R).add(A.mul(m))).add(d.mul(y.mul(R).add(E.mul(m))))).add(h.mul(N.mul(f.mul(R).add(p.mul(m))).add(d.mul(_.mul(R).add(g.mul(m))))))}),Pm=Kn([Cm,Lm]),Im=K(([i,e,t])=>{const n=w(t).toVar(),s=w(e).toVar(),o=me(i).toVar(),r=me(o.bitAnd(me(7))).toVar(),a=w(So(r.lessThan(me(4)),s,n)).toVar(),c=w(ot(2,So(r.lessThan(me(4)),n,s))).toVar();return fr(a,Is(r.bitAnd(me(1)))).add(fr(c,Is(r.bitAnd(me(2)))))}),Dm=K(([i,e,t,n])=>{const s=w(n).toVar(),o=w(t).toVar(),r=w(e).toVar(),a=me(i).toVar(),c=me(a.bitAnd(me(15))).toVar(),l=w(So(c.lessThan(me(8)),r,o)).toVar(),u=w(So(c.lessThan(me(4)),o,So(c.equal(me(12)).or(c.equal(me(14))),r,s))).toVar();return fr(l,Is(c.bitAnd(me(1)))).add(fr(u,Is(c.bitAnd(me(2)))))}),Jt=Kn([Im,Dm]),Um=K(([i,e,t])=>{const n=w(t).toVar(),s=w(e).toVar(),o=yr(i).toVar();return U(Jt(o.x,s,n),Jt(o.y,s,n),Jt(o.z,s,n))}),Om=K(([i,e,t,n])=>{const s=w(n).toVar(),o=w(t).toVar(),r=w(e).toVar(),a=yr(i).toVar();return U(Jt(a.x,r,o,s),Jt(a.y,r,o,s),Jt(a.z,r,o,s))}),Gn=Kn([Um,Om]),Fm=K(([i])=>{const e=w(i).toVar();return ot(.6616,e)}),Vm=K(([i])=>{const e=w(i).toVar();return ot(.982,e)}),zm=K(([i])=>{const e=U(i).toVar();return ot(.6616,e)}),Bm=Kn([Fm,zm]),Hm=K(([i])=>{const e=U(i).toVar();return ot(.982,e)}),km=Kn([Vm,Hm]),Tn=K(([i,e])=>{const t=C(e).toVar(),n=me(i).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(C(32).sub(t)))}),Gm=K(([i,e,t])=>{i.subAssign(t),i.bitXorAssign(Tn(t,C(4))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(Tn(i,C(6))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(Tn(e,C(8))),e.addAssign(i),i.subAssign(t),i.bitXorAssign(Tn(t,C(16))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(Tn(i,C(19))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(Tn(e,C(4))),e.addAssign(i)}),Ho=K(([i,e,t])=>{const n=me(t).toVar(),s=me(e).toVar(),o=me(i).toVar();return n.bitXorAssign(s),n.subAssign(Tn(s,C(14))),o.bitXorAssign(n),o.subAssign(Tn(n,C(11))),s.bitXorAssign(o),s.subAssign(Tn(o,C(25))),n.bitXorAssign(s),n.subAssign(Tn(s,C(16))),o.bitXorAssign(n),o.subAssign(Tn(n,C(4))),s.bitXorAssign(o),s.subAssign(Tn(o,C(14))),n.bitXorAssign(s),n.subAssign(Tn(s,C(24))),n}),sn=K(([i])=>{const e=me(i).toVar();return w(e).div(w(me(C(4294967295))))}),oi=K(([i])=>{const e=w(i).toVar();return e.mul(e.mul(e.mul(e.mul(e.mul(6).sub(15)).add(10))))}),Wm=K(([i])=>{const e=C(i).toVar(),t=me(me(1)).toVar(),n=me(me(C(3735928559)).add(t.shiftLeft(me(2)).add(me(13)))).toVar();return Ho(n.add(me(e)),n,n)}),Xm=K(([i,e])=>{const t=C(e).toVar(),n=C(i).toVar(),s=me(me(2)).toVar(),o=me().toVar(),r=me().toVar(),a=me().toVar();return o.assign(r.assign(a.assign(me(C(3735928559)).add(s.shiftLeft(me(2)).add(me(13)))))),o.addAssign(me(n)),r.addAssign(me(t)),Ho(o,r,a)}),qm=K(([i,e,t])=>{const n=C(t).toVar(),s=C(e).toVar(),o=C(i).toVar(),r=me(me(3)).toVar(),a=me().toVar(),c=me().toVar(),l=me().toVar();return a.assign(c.assign(l.assign(me(C(3735928559)).add(r.shiftLeft(me(2)).add(me(13)))))),a.addAssign(me(o)),c.addAssign(me(s)),l.addAssign(me(n)),Ho(a,c,l)}),Ym=K(([i,e,t,n])=>{const s=C(n).toVar(),o=C(t).toVar(),r=C(e).toVar(),a=C(i).toVar(),c=me(me(4)).toVar(),l=me().toVar(),u=me().toVar(),h=me().toVar();return l.assign(u.assign(h.assign(me(C(3735928559)).add(c.shiftLeft(me(2)).add(me(13)))))),l.addAssign(me(a)),u.addAssign(me(r)),h.addAssign(me(o)),Gm(l,u,h),l.addAssign(me(s)),Ho(l,u,h)}),jm=K(([i,e,t,n,s])=>{const o=C(s).toVar(),r=C(n).toVar(),a=C(t).toVar(),c=C(e).toVar(),l=C(i).toVar(),u=me(me(5)).toVar(),h=me().toVar(),d=me().toVar(),m=me().toVar();return h.assign(d.assign(m.assign(me(C(3735928559)).add(u.shiftLeft(me(2)).add(me(13)))))),h.addAssign(me(l)),d.addAssign(me(c)),m.addAssign(me(a)),Gm(h,d,m),h.addAssign(me(r)),d.addAssign(me(o)),Ho(h,d,m)}),ut=Kn([Wm,Xm,qm,Ym,jm]),$m=K(([i,e])=>{const t=C(e).toVar(),n=C(i).toVar(),s=me(ut(n,t)).toVar(),o=yr().toVar();return o.x.assign(s.bitAnd(C(255))),o.y.assign(s.shiftRight(C(8)).bitAnd(C(255))),o.z.assign(s.shiftRight(C(16)).bitAnd(C(255))),o}),Km=K(([i,e,t])=>{const n=C(t).toVar(),s=C(e).toVar(),o=C(i).toVar(),r=me(ut(o,s,n)).toVar(),a=yr().toVar();return a.x.assign(r.bitAnd(C(255))),a.y.assign(r.shiftRight(C(8)).bitAnd(C(255))),a.z.assign(r.shiftRight(C(16)).bitAnd(C(255))),a}),Wn=Kn([$m,Km]),Zm=K(([i])=>{const e=Ae(i).toVar(),t=C().toVar(),n=C().toVar(),s=w(Nt(e.x,t)).toVar(),o=w(Nt(e.y,n)).toVar(),r=w(oi(s)).toVar(),a=w(oi(o)).toVar(),c=w(Rm(Jt(ut(t,n),s,o),Jt(ut(t.add(C(1)),n),s.sub(1),o),Jt(ut(t,n.add(C(1))),s,o.sub(1)),Jt(ut(t.add(C(1)),n.add(C(1))),s.sub(1),o.sub(1)),r,a)).toVar();return Bm(c)}),Jm=K(([i])=>{const e=U(i).toVar(),t=C().toVar(),n=C().toVar(),s=C().toVar(),o=w(Nt(e.x,t)).toVar(),r=w(Nt(e.y,n)).toVar(),a=w(Nt(e.z,s)).toVar(),c=w(oi(o)).toVar(),l=w(oi(r)).toVar(),u=w(oi(a)).toVar(),h=w(Pm(Jt(ut(t,n,s),o,r,a),Jt(ut(t.add(C(1)),n,s),o.sub(1),r,a),Jt(ut(t,n.add(C(1)),s),o,r.sub(1),a),Jt(ut(t.add(C(1)),n.add(C(1)),s),o.sub(1),r.sub(1),a),Jt(ut(t,n,s.add(C(1))),o,r,a.sub(1)),Jt(ut(t.add(C(1)),n,s.add(C(1))),o.sub(1),r,a.sub(1)),Jt(ut(t,n.add(C(1)),s.add(C(1))),o,r.sub(1),a.sub(1)),Jt(ut(t.add(C(1)),n.add(C(1)),s.add(C(1))),o.sub(1),r.sub(1),a.sub(1)),c,l,u)).toVar();return km(h)}),Ew=Kn([Zm,Jm]),Qm=K(([i])=>{const e=Ae(i).toVar(),t=C().toVar(),n=C().toVar(),s=w(Nt(e.x,t)).toVar(),o=w(Nt(e.y,n)).toVar(),r=w(oi(s)).toVar(),a=w(oi(o)).toVar(),c=U(Rm(Gn(Wn(t,n),s,o),Gn(Wn(t.add(C(1)),n),s.sub(1),o),Gn(Wn(t,n.add(C(1))),s,o.sub(1)),Gn(Wn(t.add(C(1)),n.add(C(1))),s.sub(1),o.sub(1)),r,a)).toVar();return Bm(c)}),eg=K(([i])=>{const e=U(i).toVar(),t=C().toVar(),n=C().toVar(),s=C().toVar(),o=w(Nt(e.x,t)).toVar(),r=w(Nt(e.y,n)).toVar(),a=w(Nt(e.z,s)).toVar(),c=w(oi(o)).toVar(),l=w(oi(r)).toVar(),u=w(oi(a)).toVar(),h=U(Pm(Gn(Wn(t,n,s),o,r,a),Gn(Wn(t.add(C(1)),n,s),o.sub(1),r,a),Gn(Wn(t,n.add(C(1)),s),o,r.sub(1),a),Gn(Wn(t.add(C(1)),n.add(C(1)),s),o.sub(1),r.sub(1),a),Gn(Wn(t,n,s.add(C(1))),o,r,a.sub(1)),Gn(Wn(t.add(C(1)),n,s.add(C(1))),o.sub(1),r,a.sub(1)),Gn(Wn(t,n.add(C(1)),s.add(C(1))),o,r.sub(1),a.sub(1)),Gn(Wn(t.add(C(1)),n.add(C(1)),s.add(C(1))),o.sub(1),r.sub(1),a.sub(1)),c,l,u)).toVar();return km(h)}),Aw=Kn([Qm,eg]),Nw=K(([i])=>{const e=w(i).toVar(),t=C(Ot(e)).toVar();return sn(ut(t))}),ww=K(([i])=>{const e=Ae(i).toVar(),t=C(Ot(e.x)).toVar(),n=C(Ot(e.y)).toVar();return sn(ut(t,n))}),bw=K(([i])=>{const e=U(i).toVar(),t=C(Ot(e.x)).toVar(),n=C(Ot(e.y)).toVar(),s=C(Ot(e.z)).toVar();return sn(ut(t,n,s))}),Rw=K(([i])=>{const e=Ee(i).toVar(),t=C(Ot(e.x)).toVar(),n=C(Ot(e.y)).toVar(),s=C(Ot(e.z)).toVar(),o=C(Ot(e.w)).toVar();return sn(ut(t,n,s,o))}),tg=K(([i])=>{const e=w(i).toVar(),t=C(Ot(e)).toVar();return U(sn(ut(t,C(0))),sn(ut(t,C(1))),sn(ut(t,C(2))))}),ng=K(([i])=>{const e=Ae(i).toVar(),t=C(Ot(e.x)).toVar(),n=C(Ot(e.y)).toVar();return U(sn(ut(t,n,C(0))),sn(ut(t,n,C(1))),sn(ut(t,n,C(2))))}),ig=K(([i])=>{const e=U(i).toVar(),t=C(Ot(e.x)).toVar(),n=C(Ot(e.y)).toVar(),s=C(Ot(e.z)).toVar();return U(sn(ut(t,n,s,C(0))),sn(ut(t,n,s,C(1))),sn(ut(t,n,s,C(2))))}),sg=K(([i])=>{const e=Ee(i).toVar(),t=C(Ot(e.x)).toVar(),n=C(Ot(e.y)).toVar(),s=C(Ot(e.z)).toVar(),o=C(Ot(e.w)).toVar();return U(sn(ut(t,n,s,o,C(0))),sn(ut(t,n,s,o,C(1))),sn(ut(t,n,s,o,C(2))))}),og=Kn([tg,ng,ig,sg]),Ma=K(([i,e,t,n])=>{const s=w(n).toVar(),o=w(t).toVar(),r=C(e).toVar(),a=U(i).toVar(),c=w(0).toVar(),l=w(1).toVar();return Tt({start:C(0),end:r},({i:u})=>{c.addAssign(l.mul(Ew(a))),l.mulAssign(s),a.mulAssign(o)}),c}),rg=K(([i,e,t,n])=>{const s=w(n).toVar(),o=w(t).toVar(),r=C(e).toVar(),a=U(i).toVar(),c=U(0).toVar(),l=w(1).toVar();return Tt({start:C(0),end:r},({i:u})=>{c.addAssign(l.mul(Aw(a))),l.mulAssign(s),a.mulAssign(o)}),c}),Cw=K(([i,e,t,n])=>{const s=w(n).toVar(),o=w(t).toVar(),r=C(e).toVar(),a=U(i).toVar();return Ae(Ma(a,r,o,s),Ma(a.add(U(C(19),C(193),C(17))),r,o,s))}),Lw=K(([i,e,t,n])=>{const s=w(n).toVar(),o=w(t).toVar(),r=C(e).toVar(),a=U(i).toVar(),c=U(rg(a,r,o,s)).toVar(),l=w(Ma(a.add(U(C(19),C(193),C(17))),r,o,s)).toVar();return Ee(c,l)}),ag=K(([i,e,t,n,s,o,r])=>{const a=C(r).toVar(),c=w(o).toVar(),l=C(s).toVar(),u=C(n).toVar(),h=C(t).toVar(),d=C(e).toVar(),m=Ae(i).toVar(),g=U(og(Ae(d.add(u),h.add(l)))).toVar(),_=Ae(g.x,g.y).toVar();_.subAssign(.5),_.mulAssign(c),_.addAssign(.5);const p=Ae(Ae(w(d),w(h)).add(_)).toVar(),f=Ae(p.sub(m)).toVar();return Qe(a.equal(C(2)),()=>kt(f.x).add(kt(f.y))),Qe(a.equal(C(3)),()=>Fn(kt(f.x),kt(f.y))),Fo(f,f)}),cg=K(([i,e,t,n,s,o,r,a,c])=>{const l=C(c).toVar(),u=w(a).toVar(),h=C(r).toVar(),d=C(o).toVar(),m=C(s).toVar(),g=C(n).toVar(),_=C(t).toVar(),p=C(e).toVar(),f=U(i).toVar(),E=U(og(U(p.add(m),_.add(d),g.add(h)))).toVar();E.subAssign(.5),E.mulAssign(u),E.addAssign(.5);const y=U(U(w(p),w(_),w(g)).add(E)).toVar(),A=U(y.sub(f)).toVar();return Qe(l.equal(C(2)),()=>kt(A.x).add(kt(A.y).add(kt(A.z)))),Qe(l.equal(C(3)),()=>Fn(Fn(kt(A.x),kt(A.y)),kt(A.z))),Fo(A,A)}),ko=Kn([ag,cg]),Pw=K(([i,e,t])=>{const n=C(t).toVar(),s=w(e).toVar(),o=Ae(i).toVar(),r=C().toVar(),a=C().toVar(),c=Ae(Nt(o.x,r),Nt(o.y,a)).toVar(),l=w(1e6).toVar();return Tt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Tt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=w(ko(c,u,h,r,a,s,n)).toVar();l.assign(Lo(l,d))})}),Qe(n.equal(C(0)),()=>{l.assign(zs(l))}),l}),Iw=K(([i,e,t])=>{const n=C(t).toVar(),s=w(e).toVar(),o=Ae(i).toVar(),r=C().toVar(),a=C().toVar(),c=Ae(Nt(o.x,r),Nt(o.y,a)).toVar(),l=Ae(1e6,1e6).toVar();return Tt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Tt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=w(ko(c,u,h,r,a,s,n)).toVar();Qe(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),Qe(n.equal(C(0)),()=>{l.assign(zs(l))}),l}),Dw=K(([i,e,t])=>{const n=C(t).toVar(),s=w(e).toVar(),o=Ae(i).toVar(),r=C().toVar(),a=C().toVar(),c=Ae(Nt(o.x,r),Nt(o.y,a)).toVar(),l=U(1e6,1e6,1e6).toVar();return Tt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{Tt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=w(ko(c,u,h,r,a,s,n)).toVar();Qe(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),Qe(n.equal(C(0)),()=>{l.assign(zs(l))}),l}),Uw=K(([i,e,t])=>{const n=C(t).toVar(),s=w(e).toVar(),o=U(i).toVar(),r=C().toVar(),a=C().toVar(),c=C().toVar(),l=U(Nt(o.x,r),Nt(o.y,a),Nt(o.z,c)).toVar(),u=w(1e6).toVar();return Tt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Tt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Tt({start:-1,end:C(1),name:"z",condition:"<="},({z:m})=>{const g=w(ko(l,h,d,m,r,a,c,s,n)).toVar();u.assign(Lo(u,g))})})}),Qe(n.equal(C(0)),()=>{u.assign(zs(u))}),u}),Ow=K(([i,e,t])=>{const n=C(t).toVar(),s=w(e).toVar(),o=U(i).toVar(),r=C().toVar(),a=C().toVar(),c=C().toVar(),l=U(Nt(o.x,r),Nt(o.y,a),Nt(o.z,c)).toVar(),u=Ae(1e6,1e6).toVar();return Tt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Tt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Tt({start:-1,end:C(1),name:"z",condition:"<="},({z:m})=>{const g=w(ko(l,h,d,m,r,a,c,s,n)).toVar();Qe(g.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.y.assign(g)})})})}),Qe(n.equal(C(0)),()=>{u.assign(zs(u))}),u}),Fw=K(([i,e,t])=>{const n=C(t).toVar(),s=w(e).toVar(),o=U(i).toVar(),r=C().toVar(),a=C().toVar(),c=C().toVar(),l=U(Nt(o.x,r),Nt(o.y,a),Nt(o.z,c)).toVar(),u=U(1e6,1e6,1e6).toVar();return Tt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{Tt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{Tt({start:-1,end:C(1),name:"z",condition:"<="},({z:m})=>{const g=w(ko(l,h,d,m,r,a,c,s,n)).toVar();Qe(g.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(g)}).elseif(g.lessThan(u.z),()=>{u.z.assign(g)})})})}),Qe(n.equal(C(0)),()=>{u.assign(zs(u))}),u});So.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});fr.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});Ot.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});wm.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});bm.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});Cm.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Lm.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Im.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});Dm.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});Um.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});Om.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});Fm.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});Vm.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});zm.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});Hm.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});Tn.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});Ho.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});sn.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});oi.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});Wm.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});Xm.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});qm.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});Ym.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});jm.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});$m.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});Km.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});Zm.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});Jm.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});Qm.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});eg.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});Nw.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});ww.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});bw.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});Rw.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});tg.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});ng.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});ig.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});sg.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});Ma.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});rg.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Cw.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Lw.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});ag.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});cg.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Pw.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Iw.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Dw.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Uw.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Ow.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Fw.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const Vw=K(([i])=>{const e=U(i).toVar(),t=w(e.x).toVar(),n=w(e.y).toVar(),s=w(e.z).toVar();Qe(n.lessThan(1e-4),()=>U(s,s,s)).else(()=>{t.assign(ot(6,t.sub(Oo(t))));const o=C(Gf(t)).toVar(),r=w(t.sub(w(o))).toVar(),a=w(s.mul(Ft(1,n))).toVar(),c=w(s.mul(Ft(1,n.mul(r)))).toVar(),l=w(s.mul(Ft(1,n.mul(Ft(1,r))))).toVar();return Qe(o.equal(C(0)),()=>U(s,l,a)).elseif(o.equal(C(1)),()=>U(c,s,a)).elseif(o.equal(C(2)),()=>U(a,s,l)).elseif(o.equal(C(3)),()=>U(a,c,s)).elseif(o.equal(C(4)),()=>U(l,a,s)),U(s,a,c)})}),zw=K(([i])=>{const e=U(i).toVar(),t=w(e.x).toVar(),n=w(e.y).toVar(),s=w(e.z).toVar(),o=w(Lo(t,Lo(n,s))).toVar(),r=w(Fn(t,Fn(n,s))).toVar(),a=w(r.sub(o)).toVar(),c=w().toVar(),l=w().toVar(),u=w().toVar();return u.assign(r),Qe(r.greaterThan(0),()=>{l.assign(a.div(r))}).else(()=>{l.assign(0)}),Qe(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{Qe(t.greaterThanEqual(r),()=>{c.assign(n.sub(s).div(a))}).elseif(n.greaterThanEqual(r),()=>{c.assign(On(2,s.sub(t).div(a)))}).else(()=>{c.assign(On(4,t.sub(n).div(a)))}),c.mulAssign(1/6),Qe(c.lessThan(0),()=>{c.addAssign(1)})}),U(c,l,u)});Vw.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});zw.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const Bw=K(([i])=>{const e=U(i).toVar(),t=Mf(Ff(e,U(.04045))).toVar(),n=U(e.div(12.92)).toVar(),s=U(vi(Fn(e.add(U(.055)),U(0)).div(1.055),U(2.4))).toVar();return on(n,s,t)});Bw.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});class ka extends pn{constructor(){const e=ka.SkyShader,t=new xi({name:e.name,uniforms:$d.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:mn,depthWrite:!1});super(new fs(1,1,1),t),this.isSky=!0}}ka.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Vt=new $M,Hw=Vt.load("./floor/alpha.jpg"),Er=Vt.load("./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_diff_1k.jpg"),To=Vt.load("./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_arm_1k.jpg"),Ga=Vt.load("./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_nor_gl_1k.jpg"),Wa=Vt.load("./floor/coast_sand_rocks_02_1k/coast_sand_rocks_02_disp_1k.jpg");Er.colorSpace=hn;Er.repeat.set(8,8);To.repeat.set(8,8);Ga.repeat.set(8,8);Wa.repeat.set(8,8);Er.wrapS=wn;To.wrapS=wn;Ga.wrapS=wn;Wa.wrapS=wn;Er.wrapT=wn;To.wrapT=wn;Ga.wrapT=wn;Wa.wrapT=wn;const lg=Vt.load("./wall/castle_brick_broken_06_1k/castle_brick_broken_06_diff_1k.jpg"),Kc=Vt.load("./wall/castle_brick_broken_06_1k/castle_brick_broken_06_arm_1k.jpg"),kw=Vt.load("./wall/castle_brick_broken_06_1k/castle_brick_broken_06_nor_gl_1k.jpg");lg.colorSpace=hn;const Xa=Vt.load("./roof/roof_slates_02_1k/roof_slates_02_diff_1k.jpg"),or=Vt.load("./roof/roof_slates_02_1k/roof_slates_02_arm_1k.jpg"),ou=Vt.load("./roof/roof_slates_02_1k/roof_slates_02_nor_gl_1k.jpg");Xa.colorSpace=hn;Xa.repeat.set(3,1);or.repeat.set(3,1);ou.repeat.set(3,1);Xa.wrapS=wn;or.wrapS=wn;ou.wrapS=wn;const ru=Vt.load("./grave/plastered_stone_wall_1k/plastered_stone_wall_diff_1k.jpg"),ia=Vt.load("./grave/plastered_stone_wall_1k/plastered_stone_wall_arm_1k.jpg"),ug=Vt.load("./grave/plastered_stone_wall_1k/plastered_stone_wall_nor_gl_1k.jpg");ru.colorSpace=hn;ru.repeat.set(.3,.4);ia.repeat.set(.3,.4);ug.repeat.set(.3,.4);const hg=Vt.load("./door/color.jpg"),Gw=Vt.load("./door/alpha.jpg"),Ww=Vt.load("./door/ambientOcclusion.jpg"),Xw=Vt.load("./door/height.jpg"),qw=Vt.load("./door/normal.jpg"),Yw=Vt.load("./door/metalness.jpg"),jw=Vt.load("./door/roughness.jpg");hg.colorSpace=hn;const dg=document.querySelector("canvas.webgl"),Ti=new VM,au=new pn(new Io(20,20,80,80),new Fs({alphaMap:Hw,transparent:!0,map:Er,aoMap:To,roughnessMap:To,metalnessMap:To,normalMap:Ga,displacementMap:Wa,displacementScale:.3,displacementBias:-.23}));au.rotation.x=-Math.PI*.5;Ti.add(au);const Ar=new co;Ti.add(Ar);const qa=new pn(new fs(4,2.5,4),new Fs({map:lg,aoMap:Kc,roughnessMap:Kc,metalnessMap:Kc,normalMap:kw}));qa.position.y+=1.25;Ar.add(qa);const Ya=new pn(new Fl(3.5,1.5,4),new Fs({map:Xa,aoMap:or,roughnessMap:or,metalnessMap:or,normalMap:ou}));Ya.rotation.y=Math.PI*.25;Ya.position.y+=3.25;Ar.add(Ya);const cu=new pn(new Io(2.2,2.2),new Fs({map:hg,transparent:!0,alphaMap:Gw,aoMap:Ww,displacementMap:Xw,normalMap:qw,metalnessMap:Yw,roughnessMap:jw}));cu.position.y=1;cu.position.z=2.01;Ar.add(cu);const $w=new fs(.6,.8,.2),Kw=new Fs({map:ru,aoMap:ia,roughnessMap:ia,metalnessMap:ia,normalMap:ug}),lu=new co;Ti.add(lu);for(let i=0;i<30;i++){const e=new pn($w,Kw),t=Math.random()*Math.PI*2,n=3+Math.random()*4,s=Math.sin(t),o=Math.cos(t);e.position.x=s*n,e.position.z=o*n,e.position.y=Math.random()*.4,e.rotation.x=(Math.random()-.5)*.4,e.rotation.y=(Math.random()-.5)*.4,e.rotation.z=(Math.random()-.5)*.4,lu.add(e)}const Zw=new df("#86cdff",.275);Ti.add(Zw);const ui=new hf("#86cdff",1);ui.position.set(3,2,-8);Ti.add(ui);const fg=new xr("#ff7d46");fg.position.set(0,2.2,2.5);Ar.add(fg);const is=new xr("#8800ff",6),ss=new xr("#ff0088",6),os=new xr("#ff0000",6);Ti.add(is,ss,os);const mi={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{mi.width=window.innerWidth,mi.height=window.innerHeight,ds.aspect=mi.width/mi.height,ds.updateProjectionMatrix(),Os.setSize(mi.width,mi.height),Os.setPixelRatio(Math.min(window.devicePixelRatio,2))});const ds=new En(75,mi.width/mi.height,.1,100);ds.position.x=4;ds.position.y=2;ds.position.z=5;Ti.add(ds);const pg=new nS(ds,dg);pg.enableDamping=!0;const Os=new FM({canvas:dg});Os.setSize(mi.width,mi.height);Os.setPixelRatio(Math.min(window.devicePixelRatio,2));Os.shadowMap.enabled=!0;Os.shadowMap.type=Td;ui.castShadow=!0;is.castShadow=!0;ss.castShadow=!0;os.castShadow=!0;qa.castShadow=!0;qa.receiveShadow=!0;Ya.castShadow=!0;au.receiveShadow=!0;for(const i of lu.children)i.castShadow=!0,i.receiveShadow=!0;ui.shadow.mapSize.width=256;ui.shadow.mapSize.height=256;ui.shadow.camera.top=8;ui.shadow.camera.right=8;ui.shadow.camera.left=-8;ui.shadow.camera.bottom=-8;ui.shadow.camera.near=1;ui.shadow.camera.far=30;is.shadow.mapSize.width=256;is.shadow.mapSize.height=256;is.shadow.camera.far=10;ss.shadow.mapSize.width=256;ss.shadow.mapSize.height=256;ss.shadow.camera.far=10;os.shadow.mapSize.width=256;os.shadow.mapSize.height=256;os.shadow.camera.far=10;const Hs=new ka;Hs.scale.set(100,100,100);Ti.add(Hs);Hs.material.uniforms.turbidity.value=10;Hs.material.uniforms.rayleigh.value=3;Hs.material.uniforms.mieCoefficient.value=.1;Hs.material.uniforms.mieDirectionalG.value=.95;Hs.material.uniforms.sunPosition.value.set(.3,-.038,-.95);Ti.fog=new Dl("#04343f",.1);const Md=new iS,mg=()=>{Md.update();const i=Md.getElapsed(),e=i*.5;is.position.x=Math.cos(e)*4,is.position.z=Math.sin(e)*4,is.position.y=Math.sin(e)*Math.sin(e*2.34)*Math.sin(e*2.45);const t=-i*.38;ss.position.x=Math.cos(t)*5,ss.position.z=Math.sin(t)*5,ss.position.y=Math.sin(t)*Math.sin(t*2.34)*Math.sin(t*2.45);const n=i*.23;os.position.x=Math.cos(n)*6.5,os.position.z=Math.sin(n)*6.5,os.position.y=Math.sin(n)*Math.sin(n*2.34)*Math.sin(n*2.45),pg.update(),Os.render(Ti,ds),window.requestAnimationFrame(mg)};mg();
//# sourceMappingURL=index-BydxpeEa.js.map
