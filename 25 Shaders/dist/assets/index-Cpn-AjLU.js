(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ec="166",Ss={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vm=0,gu=1,xm=2,od=1,ym=2,gi=3,Xi=0,dn=1,xi=2,Wi=0,hs=1,_u=2,vu=3,xu=4,Mm=5,ls=100,Sm=101,Tm=102,Em=103,Am=104,Nm=200,bm=201,wm=202,Rm=203,El=204,Al=205,Cm=206,Lm=207,Pm=208,Im=209,Dm=210,Um=211,Om=212,Fm=213,zm=214,Bm=0,Vm=1,km=2,Vo=3,Hm=4,Gm=5,Wm=6,Xm=7,na=0,$m=1,qm=2,bn=0,ad=1,ld=2,cd=3,ud=4,Ym=5,hd=6,dd=7,fd=300,er=301,tr=302,Nl=303,bl=304,ia=306,wl=1e3,us=1001,Rl=1002,tn=1003,jm=1004,Jr=1005,kn=1006,wa=1007,Hi=1008,Ni=1009,pd=1010,md=1011,Ir=1012,sa=1013,$i=1014,si=1015,ur=1016,Ac=1017,Nc=1018,nr=1020,gd=35902,_d=1021,vd=1022,Gn=1023,xd=1024,yd=1025,$s=1026,ir=1027,Md=1028,bc=1029,Sd=1030,wc=1031,Rc=1033,Ro=33776,Co=33777,Lo=33778,Po=33779,Cl=35840,Ll=35841,Pl=35842,Il=35843,Dl=36196,Ul=37492,Ol=37496,Fl=37808,zl=37809,Bl=37810,Vl=37811,kl=37812,Hl=37813,Gl=37814,Wl=37815,Xl=37816,$l=37817,ql=37818,Yl=37819,jl=37820,Kl=37821,Io=36492,Zl=36494,Jl=36495,Td=36283,Ql=36284,ec=36285,tc=36286,Km=3200,Zm=3201,bi=0,Ed=1,Vi="",Vn="srgb",jn="srgb-linear",Cc="display-p3",ra="display-p3-linear",ko="linear",xt="srgb",Ho="rec709",Go="p3",Es=7680,yu=519,Jm=512,Ad=513,Qm=514,Nd=515,eg=516,tg=517,ng=518,ig=519,Wo=35044,br=35048,Mu="300 es",Wn=2e3,sr=2001;class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Su=1234567;const Rr=Math.PI/180,rr=180/Math.PI;function Ei(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Yt(i,e,t){return Math.max(e,Math.min(t,i))}function Lc(i,e){return(i%e+e)%e}function sg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rg(i,e,t){return i!==e?(t-i)/(e-i):0}function Cr(i,e,t){return(1-t)*i+t*e}function og(i,e,t,n){return Cr(i,e,1-Math.exp(-t*n))}function ag(i,e=1){return e-Math.abs(Lc(i,e*2)-e)}function lg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ug(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hg(i,e){return i+Math.random()*(e-i)}function dg(i){return i*(.5-Math.random())}function fg(i){i!==void 0&&(Su=i);let e=Su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pg(i){return i*Rr}function mg(i){return i*rr}function gg(i){return(i&i-1)===0&&i!==0}function _g(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xg(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Pc={DEG2RAD:Rr,RAD2DEG:rr,generateUUID:Ei,clamp:Yt,euclideanModulo:Lc,mapLinear:sg,inverseLerp:rg,lerp:Cr,damp:og,pingpong:ag,smoothstep:lg,smootherstep:cg,randInt:ug,randFloat:hg,randFloatSpread:dg,seededRandom:fg,degToRad:pg,radToDeg:mg,isPowerOfTwo:gg,ceilPowerOfTwo:_g,floorPowerOfTwo:vg,setQuaternionFromProperEuler:xg,normalize:ft,denormalize:Hn};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,s,r,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],_=s[0],p=s[3],f=s[6],T=s[1],x=s[4],N=s[7],F=s[2],R=s[5],A=s[8];return r[0]=o*_+a*T+l*F,r[3]=o*p+a*x+l*R,r[6]=o*f+a*N+l*A,r[1]=c*_+u*T+d*F,r[4]=c*p+u*x+d*R,r[7]=c*f+u*N+d*A,r[2]=h*_+m*T+g*F,r[5]=h*p+m*x+g*R,r[8]=h*f+m*N+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,m=c*r-o*l,g=t*d+n*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new je;function bd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yg(){const i=Dr("canvas");return i.style.display="block",i}const Tu={};function Ic(i){i in Tu||(Tu[i]=!0,console.warn(i))}function Mg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Eu=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Au=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qr={[jn]:{transfer:ko,primaries:Ho,toReference:i=>i,fromReference:i=>i},[Vn]:{transfer:xt,primaries:Ho,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ra]:{transfer:ko,primaries:Go,toReference:i=>i.applyMatrix3(Au),fromReference:i=>i.applyMatrix3(Eu)},[Cc]:{transfer:xt,primaries:Go,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Au),fromReference:i=>i.applyMatrix3(Eu).convertLinearToSRGB()}},Sg=new Set([jn,ra]),pt={enabled:!0,_workingColorSpace:jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Sg.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Qr[e].toReference,s=Qr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Qr[i].primaries},getTransfer:function(i){return i===Vi?ko:Qr[i].transfer}};function qs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let As;class Tg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Dr("canvas")),As.width=e.width,As.height=e.height;const n=As.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qs(t[n]/255)*255):t[n]=qs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eg=0;class wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(La(s[o].image)):r.push(La(s[o]))}else r=La(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function La(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ag=0;class sn extends Li{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=us,s=us,r=kn,o=Hi,a=Gn,l=Ni,c=sn.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Ei(),this.name="",this.source=new wd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wl:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case Rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wl:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case Rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=fd;sn.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,s=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,N=(m+1)/2,F=(f+1)/2,R=(u+h)/4,A=(d+_)/4,U=(g+p)/4;return x>N&&x>F?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=A/n):N>F?N<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(N),n=R/s,r=U/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=A/r,s=U/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(d-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wi extends Li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends wi{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Dc extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ng extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==m||u!==g){let p=1-a;const f=l*h+c*m+u*g+d*_,T=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const F=Math.sqrt(x),R=Math.atan2(F,f*T);p=Math.sin(p*R)/F,a=Math.sin(a*R)/F}const N=a*T;if(l=l*p+h*N,c=c*p+m*N,u=u*p+g*N,d=d*p+_*N,p===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=F,c*=F,u*=F,d*=F}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-a*m,e[t+2]=c*g+u*m+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pa.copy(this).projectOnVector(e),this.sub(Pa)}reflect(e){return this.sub(Pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new L,Nu=new fs;class Hr{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),to.subVectors(this.max,_r),Ns.subVectors(e.a,_r),bs.subVectors(e.b,_r),ws.subVectors(e.c,_r),Di.subVectors(bs,Ns),Ui.subVectors(ws,bs),Ji.subVectors(Ns,ws);let t=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-Ji.z,Ji.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,Ji.z,0,-Ji.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-Ji.y,Ji.x,0];return!Ia(t,Ns,bs,ws,to)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,Ns,bs,ws,to))?!1:(no.crossVectors(Di,Ui),t=[no.x,no.y,no.z],Ia(t,Ns,bs,ws,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new L,new L,new L,new L,new L,new L,new L,new L],On=new L,eo=new Hr,Ns=new L,bs=new L,ws=new L,Di=new L,Ui=new L,Ji=new L,_r=new L,to=new L,no=new L,Qi=new L;function Ia(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bg=new Hr,vr=new L,Da=new L;class Uc{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(Da)),this.expandByPoint(vr.copy(e.center).sub(Da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new L,Ua=new L,io=new L,Oi=new L,Oa=new L,so=new L,Fa=new L;class Rd{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ua.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Ua);const r=e.distanceTo(t)*.5,o=-this.direction.dot(io),a=Oi.dot(this.direction),l=-Oi.dot(io),c=Oi.lengthSq(),u=Math.abs(1-o*o);let d,h,m,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ua).addScaledVector(io,h),m}intersectSphere(e,t){di.subVectors(e.center,this.origin);const n=di.dot(this.direction),s=di.dot(di)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,s,r){Oa.subVectors(t,e),so.subVectors(n,e),Fa.crossVectors(Oa,so);let o=this.direction.dot(Fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(so.crossVectors(Oi,so));if(l<0)return null;const c=a*this.direction.dot(Oa.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(Fa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,n,s,r,o,a,l,c,u,d,h,m,g,_,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,h,m,g,_,p)}set(e,t,n,s,r,o,a,l,c,u,d,h,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),o=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=c*u,_=c*d;t[0]=h+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wg,e,Rg)}lookAt(e,t,n){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Fi.crossVectors(n,Sn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Fi.crossVectors(n,Sn)),Fi.normalize(),ro.crossVectors(Sn,Fi),s[0]=Fi.x,s[4]=ro.x,s[8]=Sn.x,s[1]=Fi.y,s[5]=ro.y,s[9]=Sn.y,s[2]=Fi.z,s[6]=ro.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],T=n[3],x=n[7],N=n[11],F=n[15],R=s[0],A=s[4],U=s[8],E=s[12],S=s[1],C=s[5],Y=s[9],X=s[13],te=s[2],ee=s[6],Z=s[10],ne=s[14],j=s[3],ye=s[7],Ee=s[11],be=s[15];return r[0]=o*R+a*S+l*te+c*j,r[4]=o*A+a*C+l*ee+c*ye,r[8]=o*U+a*Y+l*Z+c*Ee,r[12]=o*E+a*X+l*ne+c*be,r[1]=u*R+d*S+h*te+m*j,r[5]=u*A+d*C+h*ee+m*ye,r[9]=u*U+d*Y+h*Z+m*Ee,r[13]=u*E+d*X+h*ne+m*be,r[2]=g*R+_*S+p*te+f*j,r[6]=g*A+_*C+p*ee+f*ye,r[10]=g*U+_*Y+p*Z+f*Ee,r[14]=g*E+_*X+p*ne+f*be,r[3]=T*R+x*S+N*te+F*j,r[7]=T*A+x*C+N*ee+F*ye,r[11]=T*U+x*Y+N*Z+F*Ee,r[15]=T*E+x*X+N*ne+F*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*a*h+n*c*h+s*a*m-n*l*m)+_*(+t*l*m-t*c*h+r*o*h-s*o*m+s*c*u-r*l*u)+p*(+t*c*d-t*a*m-r*o*d+n*o*m+r*a*u-n*c*u)+f*(-s*a*u-t*l*d+t*a*h+s*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],T=d*p*c-_*h*c+_*l*m-a*p*m-d*l*f+a*h*f,x=g*h*c-u*p*c-g*l*m+o*p*m+u*l*f-o*h*f,N=u*_*c-g*d*c+g*a*m-o*_*m-u*a*f+o*d*f,F=g*d*l-u*_*l-g*a*h+o*_*h+u*a*p-o*d*p,R=t*T+n*x+s*N+r*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=T*A,e[1]=(_*h*r-d*p*r-_*s*m+n*p*m+d*s*f-n*h*f)*A,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*f+n*l*f)*A,e[3]=(d*l*r-a*h*r-d*s*c+n*h*c+a*s*m-n*l*m)*A,e[4]=x*A,e[5]=(u*p*r-g*h*r+g*s*m-t*p*m-u*s*f+t*h*f)*A,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*f-t*l*f)*A,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*m+t*l*m)*A,e[8]=N*A,e[9]=(g*d*r-u*_*r-g*n*m+t*_*m+u*n*f-t*d*f)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*A,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*m-t*a*m)*A,e[12]=F*A,e[13]=(u*_*s-g*d*s+g*n*h-t*_*h-u*n*p+t*d*p)*A,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*A,e[15]=(o*d*s-u*a*s+u*n*l-t*d*l-o*n*h+t*a*h)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,m=r*u,g=r*d,_=o*u,p=o*d,f=a*d,T=l*c,x=l*u,N=l*d,F=n.x,R=n.y,A=n.z;return s[0]=(1-(_+f))*F,s[1]=(m+N)*F,s[2]=(g-x)*F,s[3]=0,s[4]=(m-N)*R,s[5]=(1-(h+f))*R,s[6]=(p+T)*R,s[7]=0,s[8]=(g+x)*A,s[9]=(p-T)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Fn.copy(this);const c=1/r,u=1/o,d=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,t.setFromRotationMatrix(Fn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Wn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s);let m,g;if(a===Wn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===sr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Wn){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(o-r),h=(t+e)*c,m=(n+s)*u;let g,_;if(a===Wn)g=(o+r)*d,_=-2*d;else if(a===sr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rs=new L,Fn=new _t,wg=new L(0,0,0),Rg=new L(1,1,1),Fi=new L,ro=new L,Sn=new L,bu=new _t,wu=new fs;class Dn{constructor(e=0,t=0,n=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Cd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cg=0;const Ru=new L,Cs=new fs,fi=new _t,oo=new L,xr=new L,Lg=new L,Pg=new fs,Cu=new L(1,0,0),Lu=new L(0,1,0),Pu=new L(0,0,1),Iu={type:"added"},Ig={type:"removed"},Ls={type:"childadded",child:null},za={type:"childremoved",child:null};class Vt extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new L,t=new Dn,n=new fs,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new je}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Cu,e)}rotateY(e){return this.rotateOnAxis(Lu,e)}rotateZ(e){return this.rotateOnAxis(Pu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cu,e)}translateY(e){return this.translateOnAxis(Lu,e)}translateZ(e){return this.translateOnAxis(Pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(xr,oo,this.up):fi.lookAt(oo,xr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(fi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Iu),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ig),za.child=e,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Iu),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,Lg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Pg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Vt.DEFAULT_UP=new L(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new L,pi=new L,Ba=new L,mi=new L,Ps=new L,Is=new L,Du=new L,Va=new L,ka=new L,Ha=new L;class ii{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),pi.subVectors(n,t),Ba.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(pi),l=zn.dot(Ba),c=pi.dot(pi),u=pi.dot(Ba),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),pi.subVectors(e,t),zn.cross(pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),zn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ii.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ps.subVectors(s,n),Is.subVectors(r,n),Va.subVectors(e,n);const l=Ps.dot(Va),c=Is.dot(Va);if(l<=0&&c<=0)return t.copy(n);ka.subVectors(e,s);const u=Ps.dot(ka),d=Is.dot(ka);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ps,o);Ha.subVectors(e,r);const m=Ps.dot(Ha),g=Is.dot(Ha);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Is,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Du.subVectors(r,s),a=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(Du,a);const f=1/(p+_+h);return o=_*f,a=h*f,t.copy(n).addScaledVector(Ps,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Ga(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=Lc(e,1),t=Yt(t,0,1),n=Yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ga(o,r,e+1/3),this.g=Ga(o,r,e),this.b=Ga(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=Vn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vn){const n=Ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return pt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Yt(Qt.r*255,0,255))*65536+Math.round(Yt(Qt.g*255,0,255))*256+Math.round(Yt(Qt.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Vn){pt.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,s=Qt.b;return e!==Vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(ao);const n=Cr(zi.h,ao.h,t),s=Cr(zi.s,ao.s,t),r=Cr(zi.l,ao.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Ie;Ie.NAMES=Ld;let Dg=0;class rn extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=hs,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=Al,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==El&&(n.blendSrc=this.blendSrc),this.blendDst!==Al&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Oc extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new L,lo=new xe;class wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ic("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wo&&(e.usage=this.usage),e}}class Pd extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Id extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ai extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ug=0;const Ln=new _t,Wa=new Vt,Ds=new L,Tn=new Hr,yr=new Hr,Gt=new L;class ji extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bd(e)?Id:Pd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Wa.lookAt(e),Wa.updateMatrix(),this.applyMatrix4(Wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ai(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Tn.min,yr.min),Tn.expandByPoint(Gt),Gt.addVectors(Tn.max,yr.max),Tn.expandByPoint(Gt)):(Tn.expandByPoint(yr.min),Tn.expandByPoint(yr.max))}Tn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),Gt.add(Ds)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new L,l[U]=new L;const c=new L,u=new L,d=new L,h=new xe,m=new xe,g=new xe,_=new L,p=new L;function f(U,E,S){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,S),h.fromBufferAttribute(r,U),m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),u.sub(c),d.sub(c),m.sub(h),g.sub(h);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(C),a[U].add(_),a[E].add(_),a[S].add(_),l[U].add(p),l[E].add(p),l[S].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,E=T.length;U<E;++U){const S=T[U],C=S.start,Y=S.count;for(let X=C,te=C+Y;X<te;X+=3)f(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const x=new L,N=new L,F=new L,R=new L;function A(U){F.fromBufferAttribute(s,U),R.copy(F);const E=a[U];x.copy(E),x.sub(F.multiplyScalar(F.dot(E))).normalize(),N.crossVectors(R,E);const C=N.dot(l[U])<0?-1:1;o.setXYZW(U,x.x,x.y,x.z,C)}for(let U=0,E=T.length;U<E;++U){const S=T[U],C=S.start,Y=S.count;for(let X=C,te=C+Y;X<te;X+=3)A(e.getX(X+0)),A(e.getX(X+1)),A(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let f=0;f<u;f++)h[g++]=c[m++]}return new wn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ji,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uu=new _t,es=new Rd,co=new Uc,Ou=new L,Us=new L,Os=new L,Fs=new L,Xa=new L,uo=new L,ho=new xe,fo=new xe,po=new xe,Fu=new L,zu=new L,Bu=new L,mo=new L,go=new L;class Xn extends Vt{constructor(e=new ji,t=new Oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Xa.fromBufferAttribute(d,e),o?uo.addScaledVector(Xa,u):uo.addScaledVector(Xa.sub(t),u))}t.add(uo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(co.containsPoint(es.origin)===!1&&(es.intersectSphere(co,Ou)===null||es.origin.distanceToSquared(Ou)>(e.far-e.near)**2))&&(Uu.copy(r).invert(),es.copy(e.ray).applyMatrix4(Uu),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=o[p.materialIndex],T=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let N=T,F=x;N<F;N+=3){const R=a.getX(N),A=a.getX(N+1),U=a.getX(N+2);s=_o(this,f,e,n,c,u,d,R,A,U),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const T=a.getX(p),x=a.getX(p+1),N=a.getX(p+2);s=_o(this,o,e,n,c,u,d,T,x,N),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],f=o[p.materialIndex],T=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let N=T,F=x;N<F;N+=3){const R=N,A=N+1,U=N+2;s=_o(this,f,e,n,c,u,d,R,A,U),s&&(s.faceIndex=Math.floor(N/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const T=p,x=p+1,N=p+2;s=_o(this,o,e,n,c,u,d,T,x,N),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Og(i,e,t,n,s,r,o,a){let l;if(e.side===dn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Xi,a),l===null)return null;go.copy(a),go.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(go);return c<t.near||c>t.far?null:{distance:c,point:go.clone(),object:i}}function _o(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Us),i.getVertexPosition(l,Os),i.getVertexPosition(c,Fs);const u=Og(i,e,t,n,Us,Os,Fs,mo);if(u){s&&(ho.fromBufferAttribute(s,a),fo.fromBufferAttribute(s,l),po.fromBufferAttribute(s,c),u.uv=ii.getInterpolation(mo,Us,Os,Fs,ho,fo,po,new xe)),r&&(ho.fromBufferAttribute(r,a),fo.fromBufferAttribute(r,l),po.fromBufferAttribute(r,c),u.uv1=ii.getInterpolation(mo,Us,Os,Fs,ho,fo,po,new xe)),o&&(Fu.fromBufferAttribute(o,a),zu.fromBufferAttribute(o,l),Bu.fromBufferAttribute(o,c),u.normal=ii.getInterpolation(mo,Us,Os,Fs,Fu,zu,Bu,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};ii.getNormal(Us,Os,Fs,d.normal),u.face=d}return u}class Gr extends ji{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ai(c,3)),this.setAttribute("normal",new Ai(u,3)),this.setAttribute("uv",new Ai(d,2));function g(_,p,f,T,x,N,F,R,A,U,E){const S=N/A,C=F/U,Y=N/2,X=F/2,te=R/2,ee=A+1,Z=U+1;let ne=0,j=0;const ye=new L;for(let Ee=0;Ee<Z;Ee++){const be=Ee*C-X;for(let Je=0;Je<ee;Je++){const st=Je*S-Y;ye[_]=st*T,ye[p]=be*x,ye[f]=te,c.push(ye.x,ye.y,ye.z),ye[_]=0,ye[p]=0,ye[f]=R>0?1:-1,u.push(ye.x,ye.y,ye.z),d.push(Je/A),d.push(1-Ee/U),ne+=1}}for(let Ee=0;Ee<U;Ee++)for(let be=0;be<A;be++){const Je=h+be+ee*Ee,st=h+be+ee*(Ee+1),J=h+(be+1)+ee*(Ee+1),ce=h+(be+1)+ee*Ee;l.push(Je,st,ce),l.push(st,J,ce),j+=6}a.addGroup(m,j,E),m+=j,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function cn(i){const e={};for(let t=0;t<i.length;t++){const n=or(i[t]);for(const s in n)e[s]=n[s]}return e}function Fg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const zg={clone:or,merge:cn};var Bg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ud extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new L,Vu=new xe,ku=new xe;class fn extends Ud{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Vu,ku),t.subVectors(ku,Vu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Bs=1;class kg extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(zs,Bs,e,t);s.layers=this.layers,this.add(s);const r=new fn(zs,Bs,e,t);r.layers=this.layers,this.add(r);const o=new fn(zs,Bs,e,t);o.layers=this.layers,this.add(o);const a=new fn(zs,Bs,e,t);a.layers=this.layers,this.add(a);const l=new fn(zs,Bs,e,t);l.layers=this.layers,this.add(l);const c=new fn(zs,Bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Od extends sn{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hg extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Od(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gr(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Wi});r.uniforms.tEquirect.value=t;const o=new Xn(s,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=kn),new kg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const $a=new L,Gg=new L,Wg=new je;class vi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=$a.subVectors(n,t).cross(Gg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wg.getNormalMatrix(e),s=this.coplanarPoint($a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Uc,vo=new L;class Fc{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,o=new vi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],T=s[13],x=s[14],N=s[15];if(n[0].setComponents(l-r,h-c,p-m,N-f).normalize(),n[1].setComponents(l+r,h+c,p+m,N+f).normalize(),n[2].setComponents(l+o,h+u,p+g,N+T).normalize(),n[3].setComponents(l-o,h-u,p-g,N-T).normalize(),n[4].setComponents(l-a,h-d,p-_,N-x).normalize(),t===Wn)n[5].setComponents(l+a,h+d,p+_,N+x).normalize();else if(t===sr)n[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(vo.x=s.normal.x>0?e.max.x:e.min.x,vo.y=s.normal.y>0?e.max.y:e.min.y,vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xg(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(i.bindBuffer(c,a),d.count===-1&&h.length===0&&i.bufferSubData(c,0,u),h.length!==0){for(let m=0,g=h.length;m<g;m++){const _=h[m];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Wr extends ji{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const T=f*h-o;for(let x=0;x<c;x++){const N=x*d-r;g.push(N,-T,0),_.push(0,0,1),p.push(x/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){const x=T+c*f,N=T+c*(f+1),F=T+1+c*(f+1),R=T+1+c*f;m.push(x,N,R),m.push(N,F,R)}this.setIndex(m),this.setAttribute("position",new Ai(g,3)),this.setAttribute("normal",new Ai(_,3)),this.setAttribute("uv",new Ai(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}var $g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qg=`#ifdef USE_ALPHAHASH
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
#endif`,Yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jg=`#ifdef USE_AOMAP
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
#endif`,Qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,t_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,r_=`#ifdef USE_IRIDESCENCE
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
#endif`,o_=`#ifdef USE_BUMPMAP
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
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,m_=`#define PI 3.141592653589793
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
} // validated`,g_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,__=`vec3 transformedNormal = objectNormal;
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
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S_="gl_FragColor = linearToOutputTexel( gl_FragColor );",T_=`
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
}`,E_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
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
#endif`,R_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,C_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I_=`#ifdef USE_GRADIENTMAP
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
}`,D_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F_=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,z_=`#ifdef USE_ENVMAP
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
#endif`,B_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G_=`PhysicalMaterial material;
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
#endif`,W_=`struct PhysicalMaterial {
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
}`,X_=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,$_=`#if defined( RE_IndirectDiffuse )
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
#endif`,q_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t0=`#if defined( USE_POINTS_UV )
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
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,l0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
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
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,Q0=`#define DISTANCE
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
}`,ev=`#define DISTANCE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`uniform float scale;
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
}`,sv=`uniform vec3 diffuse;
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
}`,rv=`#include <common>
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
}`,ov=`uniform vec3 diffuse;
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
}`,av=`#define LAMBERT
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
}`,lv=`#define LAMBERT
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
}`,cv=`#define MATCAP
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
}`,uv=`#define MATCAP
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
}`,hv=`#define NORMAL
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
}`,dv=`#define NORMAL
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
}`,fv=`#define PHONG
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
}`,pv=`#define PHONG
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
}`,mv=`#define STANDARD
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
}`,gv=`#define STANDARD
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
}`,_v=`#define TOON
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
}`,vv=`#define TOON
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
}`,xv=`uniform float size;
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
}`,yv=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,Sv=`uniform vec3 color;
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
}`,Tv=`uniform float rotation;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:$g,alphahash_pars_fragment:qg,alphamap_fragment:Yg,alphamap_pars_fragment:jg,alphatest_fragment:Kg,alphatest_pars_fragment:Zg,aomap_fragment:Jg,aomap_pars_fragment:Qg,batching_pars_vertex:e_,batching_vertex:t_,begin_vertex:n_,beginnormal_vertex:i_,bsdfs:s_,iridescence_fragment:r_,bumpmap_pars_fragment:o_,clipping_planes_fragment:a_,clipping_planes_pars_fragment:l_,clipping_planes_pars_vertex:c_,clipping_planes_vertex:u_,color_fragment:h_,color_pars_fragment:d_,color_pars_vertex:f_,color_vertex:p_,common:m_,cube_uv_reflection_fragment:g_,defaultnormal_vertex:__,displacementmap_pars_vertex:v_,displacementmap_vertex:x_,emissivemap_fragment:y_,emissivemap_pars_fragment:M_,colorspace_fragment:S_,colorspace_pars_fragment:T_,envmap_fragment:E_,envmap_common_pars_fragment:A_,envmap_pars_fragment:N_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:z_,envmap_vertex:w_,fog_vertex:R_,fog_pars_vertex:C_,fog_fragment:L_,fog_pars_fragment:P_,gradientmap_pars_fragment:I_,lightmap_pars_fragment:D_,lights_lambert_fragment:U_,lights_lambert_pars_fragment:O_,lights_pars_begin:F_,lights_toon_fragment:B_,lights_toon_pars_fragment:V_,lights_phong_fragment:k_,lights_phong_pars_fragment:H_,lights_physical_fragment:G_,lights_physical_pars_fragment:W_,lights_fragment_begin:X_,lights_fragment_maps:$_,lights_fragment_end:q_,logdepthbuf_fragment:Y_,logdepthbuf_pars_fragment:j_,logdepthbuf_pars_vertex:K_,logdepthbuf_vertex:Z_,map_fragment:J_,map_pars_fragment:Q_,map_particle_fragment:e0,map_particle_pars_fragment:t0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:s0,morphcolor_vertex:r0,morphnormal_vertex:o0,morphtarget_pars_vertex:a0,morphtarget_vertex:l0,normal_fragment_begin:c0,normal_fragment_maps:u0,normal_pars_fragment:h0,normal_pars_vertex:d0,normal_vertex:f0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:v0,opaque_fragment:x0,packing:y0,premultiplied_alpha_fragment:M0,project_vertex:S0,dithering_fragment:T0,dithering_pars_fragment:E0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:N0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:w0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:L0,skinning_pars_vertex:P0,skinning_vertex:I0,skinnormal_vertex:D0,specularmap_fragment:U0,specularmap_pars_fragment:O0,tonemapping_fragment:F0,tonemapping_pars_fragment:z0,transmission_fragment:B0,transmission_pars_fragment:V0,uv_pars_fragment:k0,uv_pars_vertex:H0,uv_vertex:G0,worldpos_vertex:W0,background_vert:X0,background_frag:$0,backgroundCube_vert:q0,backgroundCube_frag:Y0,cube_vert:j0,cube_frag:K0,depth_vert:Z0,depth_frag:J0,distanceRGBA_vert:Q0,distanceRGBA_frag:ev,equirect_vert:tv,equirect_frag:nv,linedashed_vert:iv,linedashed_frag:sv,meshbasic_vert:rv,meshbasic_frag:ov,meshlambert_vert:av,meshlambert_frag:lv,meshmatcap_vert:cv,meshmatcap_frag:uv,meshnormal_vert:hv,meshnormal_frag:dv,meshphong_vert:fv,meshphong_frag:pv,meshphysical_vert:mv,meshphysical_frag:gv,meshtoon_vert:_v,meshtoon_frag:vv,points_vert:xv,points_frag:yv,shadow_vert:Mv,shadow_frag:Sv,sprite_vert:Tv,sprite_frag:Ev},pe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Zn={basic:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:cn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:cn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:cn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:cn([pe.points,pe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:cn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:cn([pe.common,pe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:cn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:cn([pe.sprite,pe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:cn([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:cn([pe.lights,pe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Zn.physical={uniforms:cn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const xo={r:0,b:0,g:0},ns=new Dn,Av=new _t;function Nv(i,e,t,n,s,r,o){const a=new Ie(0);let l=r===!0?0:1,c,u,d=null,h=0,m=null;function g(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?t:e).get(x)),x}function _(T){let x=!1;const N=g(T);N===null?f(a,l):N&&N.isColor&&(f(N,1),x=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,x){const N=g(x);N&&(N.isCubeTexture||N.mapping===ia)?(u===void 0&&(u=new Xn(new Gr(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:or(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ns.copy(x.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Av.makeRotationFromEuler(ns)),u.material.toneMapped=pt.getTransfer(N.colorSpace)!==xt,(d!==N||h!==N.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=N,h=N.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new Xn(new Wr(2,2),new Ri({name:"BackgroundMaterial",uniforms:or(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=pt.getTransfer(N.colorSpace)!==xt,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(d!==N||h!==N.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=N,h=N.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,x){T.getRGB(xo,Dd(i)),n.buffers.color.setClear(xo.r,xo.g,xo.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(T,x=1){a.set(T),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(a,l)},render:_,addToRenderList:p}}function bv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(S,C,Y,X,te){let ee=!1;const Z=d(X,Y,C);r!==Z&&(r=Z,c(r.object)),ee=m(S,X,Y,te),ee&&g(S,X,Y,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,N(S,C,Y,X),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,C,Y){const X=Y.wireframe===!0;let te=n[S.id];te===void 0&&(te={},n[S.id]=te);let ee=te[C.id];ee===void 0&&(ee={},te[C.id]=ee);let Z=ee[X];return Z===void 0&&(Z=h(l()),ee[X]=Z),Z}function h(S){const C=[],Y=[],X=[];for(let te=0;te<t;te++)C[te]=0,Y[te]=0,X[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:Y,attributeDivisors:X,object:S,attributes:{},index:null}}function m(S,C,Y,X){const te=r.attributes,ee=C.attributes;let Z=0;const ne=Y.getAttributes();for(const j in ne)if(ne[j].location>=0){const Ee=te[j];let be=ee[j];if(be===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(be=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(be=S.instanceColor)),Ee===void 0||Ee.attribute!==be||be&&Ee.data!==be.data)return!0;Z++}return r.attributesNum!==Z||r.index!==X}function g(S,C,Y,X){const te={},ee=C.attributes;let Z=0;const ne=Y.getAttributes();for(const j in ne)if(ne[j].location>=0){let Ee=ee[j];Ee===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor));const be={};be.attribute=Ee,Ee&&Ee.data&&(be.data=Ee.data),te[j]=be,Z++}r.attributes=te,r.attributesNum=Z,r.index=X}function _(){const S=r.newAttributes;for(let C=0,Y=S.length;C<Y;C++)S[C]=0}function p(S){f(S,0)}function f(S,C){const Y=r.newAttributes,X=r.enabledAttributes,te=r.attributeDivisors;Y[S]=1,X[S]===0&&(i.enableVertexAttribArray(S),X[S]=1),te[S]!==C&&(i.vertexAttribDivisor(S,C),te[S]=C)}function T(){const S=r.newAttributes,C=r.enabledAttributes;for(let Y=0,X=C.length;Y<X;Y++)C[Y]!==S[Y]&&(i.disableVertexAttribArray(Y),C[Y]=0)}function x(S,C,Y,X,te,ee,Z){Z===!0?i.vertexAttribIPointer(S,C,Y,te,ee):i.vertexAttribPointer(S,C,Y,X,te,ee)}function N(S,C,Y,X){_();const te=X.attributes,ee=Y.getAttributes(),Z=C.defaultAttributeValues;for(const ne in ee){const j=ee[ne];if(j.location>=0){let ye=te[ne];if(ye===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),ye!==void 0){const Ee=ye.normalized,be=ye.itemSize,Je=e.get(ye);if(Je===void 0)continue;const st=Je.buffer,J=Je.type,ce=Je.bytesPerElement,Ae=J===i.INT||J===i.UNSIGNED_INT||ye.gpuType===sa;if(ye.isInterleavedBufferAttribute){const Se=ye.data,$e=Se.stride,Ye=ye.offset;if(Se.isInstancedInterleavedBuffer){for(let Ze=0;Ze<j.locationSize;Ze++)f(j.location+Ze,Se.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ze=0;Ze<j.locationSize;Ze++)p(j.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Ze=0;Ze<j.locationSize;Ze++)x(j.location+Ze,be/j.locationSize,J,Ee,$e*ce,(Ye+be/j.locationSize*Ze)*ce,Ae)}else{if(ye.isInstancedBufferAttribute){for(let Se=0;Se<j.locationSize;Se++)f(j.location+Se,ye.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Se=0;Se<j.locationSize;Se++)p(j.location+Se);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Se=0;Se<j.locationSize;Se++)x(j.location+Se,be/j.locationSize,J,Ee,be*ce,be/j.locationSize*Se*ce,Ae)}}else if(Z!==void 0){const Ee=Z[ne];if(Ee!==void 0)switch(Ee.length){case 2:i.vertexAttrib2fv(j.location,Ee);break;case 3:i.vertexAttrib3fv(j.location,Ee);break;case 4:i.vertexAttrib4fv(j.location,Ee);break;default:i.vertexAttrib1fv(j.location,Ee)}}}}T()}function F(){U();for(const S in n){const C=n[S];for(const Y in C){const X=C[Y];for(const te in X)u(X[te].object),delete X[te];delete C[Y]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const Y in C){const X=C[Y];for(const te in X)u(X[te].object),delete X[te];delete C[Y]}delete n[S.id]}function A(S){for(const C in n){const Y=n[C];if(Y[S.id]===void 0)continue;const X=Y[S.id];for(const te in X)u(X[te].object),delete X[te];delete Y[S.id]}}function U(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function wv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,n,1)}function l(c,u,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)t.update(g,n,h[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Gn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const A=R===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ni&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==si&&!A)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=m>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:N,maxSamples:F}}function Cv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new vi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||n!==0||s;return s=h,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const T=r?0:n,x=T*4;let N=f.clippingState||null;l.value=N,N=u(g,h,x,m);for(let F=0;F!==x;++F)N[F]=t[F];f.clippingState=N,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,N=m;x!==_;++x,N+=4)o.copy(d[x]).applyMatrix4(T,a),o.normal.toArray(p,N),p[N+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Lv(i){let e=new WeakMap;function t(o,a){return a===Nl?o.mapping=er:a===bl&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nl||a===bl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hg(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class zc extends Ud{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ks=4,Hu=[.125,.215,.35,.446,.526,.582],cs=20,qa=new zc,Gu=new Ie;let Ya=null,ja=0,Ka=0,Za=!1;const os=(1+Math.sqrt(5))/2,Vs=1/os,Wu=[new L(-os,Vs,0),new L(os,Vs,0),new L(-Vs,0,os),new L(Vs,0,os),new L(0,os,-Vs),new L(0,os,Vs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ya=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,ja,Ka),this._renderer.xr.enabled=Za,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ur,format:Gn,colorSpace:jn,depthBuffer:!1},s=$u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pv(r)),this._blurMaterial=Iv(r,e,t)}return s}_compileMaterial(e){const t=new Xn(this._lodPlanes[0],e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,n,s){const a=new fn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Gu),u.toneMapping=bn,u.autoClear=!1;const m=new Oc({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new Xn(new Gr,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Gu),_=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):T===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;yo(s,T*x,f>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===er||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;yo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,qa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wu[(s-r-1)%Wu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Xn(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*cs-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):cs;p>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${cs}`);const f=[];let T=0;for(let A=0;A<cs;++A){const U=A/_,E=Math.exp(-U*U/2);f.push(E),A===0?T+=E:A<p&&(T+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/T;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const N=this._sizeLods[s],F=3*N*(s>x-ks?s-x+ks:0),R=4*(this._cubeSize-N);yo(t,F,R,3*N,2*N),l.setRenderTarget(t),l.render(d,qa)}}function Pv(i){const e=[],t=[],n=[];let s=i;const r=i-ks+1+Hu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ks?l=Hu[o-i+ks-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,f=1,T=new Float32Array(_*g*m),x=new Float32Array(p*g*m),N=new Float32Array(f*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,U=R>2?0:-1,E=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];T.set(E,_*g*R),x.set(h,p*g*R);const S=[R,R,R,R,R,R];N.set(S,f*g*R)}const F=new ji;F.setAttribute("position",new wn(T,_)),F.setAttribute("uv",new wn(x,p)),F.setAttribute("faceIndex",new wn(N,f)),e.push(F),s>ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $u(i,e,t){const n=new ds(i,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Iv(i,e,t){const n=new Float32Array(cs),s=new L(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function qu(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Yu(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Bc(){return`

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
	`}function Dv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nl||l===bl,u=l===er||l===tr;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Xu(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Xu(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Uv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ic("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ov(i,e,t,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let x=0,N=T.length;x<N;x+=3){const F=T[x+0],R=T[x+1],A=T[x+2];h.push(F,R,R,A,A,F)}}else if(g!==void 0){const T=g.array;_=g.version;for(let x=0,N=T.length/3-1;x<N;x+=3){const F=x+0,R=x+1,A=x+2;h.push(F,R,R,A,A,F)}}else return;const p=new(bd(h)?Id:Pd)(h,1);p.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,p)}function u(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Fv(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,m){i.drawElements(n,m,r,h*o),t.update(m,n,1)}function c(h,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,h*o,g),t.update(m,n,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,h,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}function d(h,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/o,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,h,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=m[T];for(let T=0;T<_.length;T++)t.update(f,n,_[T])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function zv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bv(i,e,t){const n=new WeakMap,s=new tt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let S=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var m=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let N=0;g===!0&&(N=1),_===!0&&(N=2),p===!0&&(N=3);let F=a.attributes.position.count*N,R=1;F>e.maxTextureSize&&(R=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const A=new Float32Array(F*R*4*d),U=new Dc(A,F,R,d);U.type=si,U.needsUpdate=!0;const E=N*4;for(let C=0;C<d;C++){const Y=f[C],X=T[C],te=x[C],ee=F*R*4*C;for(let Z=0;Z<Y.count;Z++){const ne=Z*E;g===!0&&(s.fromBufferAttribute(Y,Z),A[ee+ne+0]=s.x,A[ee+ne+1]=s.y,A[ee+ne+2]=s.z,A[ee+ne+3]=0),_===!0&&(s.fromBufferAttribute(X,Z),A[ee+ne+4]=s.x,A[ee+ne+5]=s.y,A[ee+ne+6]=s.z,A[ee+ne+7]=0),p===!0&&(s.fromBufferAttribute(te,Z),A[ee+ne+8]=s.x,A[ee+ne+9]=s.y,A[ee+ne+10]=s.z,A[ee+ne+11]=te.itemSize===4?s.w:1)}}h={count:d,texture:U,size:new xe(F,R)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Vv(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Xr extends sn{constructor(e,t,n,s,r,o,a,l,c,u=$s){if(u!==$s&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$s&&(n=$i),n===void 0&&u===ir&&(n=nr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zd=new sn,ju=new Xr(1,1),Bd=new Dc,Vd=new Ng,kd=new Od,Ku=[],Zu=[],Ju=new Float32Array(16),Qu=new Float32Array(9),eh=new Float32Array(4);function hr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ku[s];if(r===void 0&&(r=new Float32Array(s),Ku[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oa(i,e){let t=Zu[e];t===void 0&&(t=new Int32Array(e),Zu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function Wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function Xv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;eh.set(n),i.uniformMatrix2fv(this.addr,!1,eh),Ht(t,n)}}function $v(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Qu.set(n),i.uniformMatrix3fv(this.addr,!1,Qu),Ht(t,n)}}function qv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;Ju.set(n),i.uniformMatrix4fv(this.addr,!1,Ju),Ht(t,n)}}function Yv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function Kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function Zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function Jv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function nx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ju.compareFunction=Nd,r=ju):r=zd,t.setTexture2D(e||r,s)}function ix(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vd,s)}function sx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kd,s)}function rx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bd,s)}function ox(i){switch(i){case 5126:return kv;case 35664:return Hv;case 35665:return Gv;case 35666:return Wv;case 35674:return Xv;case 35675:return $v;case 35676:return qv;case 5124:case 35670:return Yv;case 35667:case 35671:return jv;case 35668:case 35672:return Kv;case 35669:case 35673:return Zv;case 5125:return Jv;case 36294:return Qv;case 36295:return ex;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}function ax(i,e){i.uniform1fv(this.addr,e)}function lx(i,e){const t=hr(e,this.size,2);i.uniform2fv(this.addr,t)}function cx(i,e){const t=hr(e,this.size,3);i.uniform3fv(this.addr,t)}function ux(i,e){const t=hr(e,this.size,4);i.uniform4fv(this.addr,t)}function hx(i,e){const t=hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dx(i,e){const t=hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fx(i,e){const t=hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function px(i,e){i.uniform1iv(this.addr,e)}function mx(i,e){i.uniform2iv(this.addr,e)}function gx(i,e){i.uniform3iv(this.addr,e)}function _x(i,e){i.uniform4iv(this.addr,e)}function vx(i,e){i.uniform1uiv(this.addr,e)}function xx(i,e){i.uniform2uiv(this.addr,e)}function yx(i,e){i.uniform3uiv(this.addr,e)}function Mx(i,e){i.uniform4uiv(this.addr,e)}function Sx(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||zd,r[o])}function Tx(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vd,r[o])}function Ex(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||kd,r[o])}function Ax(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bd,r[o])}function Nx(i){switch(i){case 5126:return ax;case 35664:return lx;case 35665:return cx;case 35666:return ux;case 35674:return hx;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return _x;case 5125:return vx;case 36294:return xx;case 36295:return yx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Ax}}class bx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ox(t.type)}}class wx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nx(t.type)}}class Rx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ja=/(\w+)(\])?(\[|\.)?/g;function th(i,e){i.seq.push(e),i.map[e.id]=e}function Cx(i,e,t){const n=i.name,s=n.length;for(Ja.lastIndex=0;;){const r=Ja.exec(n),o=Ja.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){th(t,c===void 0?new bx(a,i,e):new wx(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Rx(a),th(t,d)),t=d}}}class Do{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Cx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function nh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Lx=37297;let Px=0;function Ix(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Dx(i){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(i);let n;switch(e===t?n="":e===Go&&t===Ho?n="LinearDisplayP3ToLinearSRGB":e===Ho&&t===Go&&(n="LinearSRGBToLinearDisplayP3"),i){case jn:case ra:return[n,"LinearTransferOETF"];case Vn:case Cc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ih(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ix(i.getShaderSource(e),o)}else return s}function Ux(i,e){const t=Dx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ox(i,e){let t;switch(e){case ad:t="Linear";break;case ld:t="Reinhard";break;case cd:t="OptimizedCineon";break;case ud:t="ACESFilmic";break;case hd:t="AgX";break;case dd:t="Neutral";break;case Ym:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function zx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wr(i){return i!==""}function sh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(i){return i.replace(Vx,Hx)}const kx=new Map;function Hx(i,e){let t=Ke[e];if(t===void 0){const n=kx.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nc(t)}const Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(i){return i.replace(Gx,Wx)}function Wx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Xx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===od?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ym?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function $x(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function Yx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case na:e="ENVMAP_BLENDING_MULTIPLY";break;case $m:e="ENVMAP_BLENDING_MIX";break;case qm:e="ENVMAP_BLENDING_ADD";break}return e}function jx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Kx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xx(t),c=$x(t),u=qx(t),d=Yx(t),h=jx(t),m=Fx(t),g=zx(r),_=s.createProgram();let p,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wr).join(`
`),f.length>0&&(f+=`
`)):(p=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),f=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==bn?Ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Ux("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=nc(o),o=sh(o,t),o=rh(o,t),a=nc(a),a=sh(a,t),a=rh(a,t),o=oh(o),a=oh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=T+p+o,N=T+f+a,F=nh(s,s.VERTEX_SHADER,x),R=nh(s,s.FRAGMENT_SHADER,N);s.attachShader(_,F),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const Y=s.getProgramInfoLog(_).trim(),X=s.getShaderInfoLog(F).trim(),te=s.getShaderInfoLog(R).trim();let ee=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,F,R);else{const ne=ih(s,F,"vertex"),j=ih(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+Y+`
`+ne+`
`+j)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||te==="")&&(Z=!1);Z&&(C.diagnostics={runnable:ee,programLog:Y,vertexShader:{log:X,prefix:p},fragmentShader:{log:te,prefix:f}})}s.deleteShader(F),s.deleteShader(R),U=new Do(s,_),E=Bx(s,_)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Lx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Px++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=R,this}let Zx=0;class Jx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qx(e),t.set(e,n)),n}}class Qx{constructor(e){this.id=Zx++,this.code=e,this.usedTimes=0}}function ey(i,e,t,n,s,r,o){const a=new Cd,l=new Jx,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,S,C,Y,X){const te=Y.fog,ee=X.geometry,Z=E.isMeshStandardMaterial?Y.environment:null,ne=(E.isMeshStandardMaterial?t:e).get(E.envMap||Z),j=ne&&ne.mapping===ia?ne.image.height:null,ye=g[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const Ee=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,be=Ee!==void 0?Ee.length:0;let Je=0;ee.morphAttributes.position!==void 0&&(Je=1),ee.morphAttributes.normal!==void 0&&(Je=2),ee.morphAttributes.color!==void 0&&(Je=3);let st,J,ce,Ae;if(ye){const et=Zn[ye];st=et.vertexShader,J=et.fragmentShader}else st=E.vertexShader,J=E.fragmentShader,l.update(E),ce=l.getVertexShaderID(E),Ae=l.getFragmentShaderID(E);const Se=i.getRenderTarget(),$e=X.isInstancedMesh===!0,Ye=X.isBatchedMesh===!0,Ze=!!E.map,vt=!!E.matcap,w=!!ne,Et=!!E.aoMap,nt=!!E.lightMap,rt=!!E.bumpMap,Re=!!E.normalMap,At=!!E.displacementMap,Ge=!!E.emissiveMap,Xe=!!E.metalnessMap,b=!!E.roughnessMap,y=E.anisotropy>0,G=E.clearcoat>0,re=E.dispersion>0,ae=E.iridescence>0,ie=E.sheen>0,Pe=E.transmission>0,me=y&&!!E.anisotropyMap,_e=G&&!!E.clearcoatMap,qe=G&&!!E.clearcoatNormalMap,ue=G&&!!E.clearcoatRoughnessMap,ve=ae&&!!E.iridescenceMap,Qe=ae&&!!E.iridescenceThicknessMap,Oe=ie&&!!E.sheenColorMap,Te=ie&&!!E.sheenRoughnessMap,Be=!!E.specularMap,We=!!E.specularColorMap,Mt=!!E.specularIntensityMap,v=Pe&&!!E.transmissionMap,z=Pe&&!!E.thicknessMap,V=!!E.gradientMap,$=!!E.alphaMap,oe=E.alphaTest>0,Ce=!!E.alphaHash,Ve=!!E.extensions;let Rt=bn;E.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Rt=i.toneMapping);const Ot={shaderID:ye,shaderType:E.type,shaderName:E.name,vertexShader:st,fragmentShader:J,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:Ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ye,batchingColor:Ye&&X._colorsTexture!==null,instancing:$e,instancingColor:$e&&X.instanceColor!==null,instancingMorph:$e&&X.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:jn,alphaToCoverage:!!E.alphaToCoverage,map:Ze,matcap:vt,envMap:w,envMapMode:w&&ne.mapping,envMapCubeUVHeight:j,aoMap:Et,lightMap:nt,bumpMap:rt,normalMap:Re,displacementMap:h&&At,emissiveMap:Ge,normalMapObjectSpace:Re&&E.normalMapType===Ed,normalMapTangentSpace:Re&&E.normalMapType===bi,metalnessMap:Xe,roughnessMap:b,anisotropy:y,anisotropyMap:me,clearcoat:G,clearcoatMap:_e,clearcoatNormalMap:qe,clearcoatRoughnessMap:ue,dispersion:re,iridescence:ae,iridescenceMap:ve,iridescenceThicknessMap:Qe,sheen:ie,sheenColorMap:Oe,sheenRoughnessMap:Te,specularMap:Be,specularColorMap:We,specularIntensityMap:Mt,transmission:Pe,transmissionMap:v,thicknessMap:z,gradientMap:V,opaque:E.transparent===!1&&E.blending===hs&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:oe,alphaHash:Ce,combine:E.combine,mapUv:Ze&&_(E.map.channel),aoMapUv:Et&&_(E.aoMap.channel),lightMapUv:nt&&_(E.lightMap.channel),bumpMapUv:rt&&_(E.bumpMap.channel),normalMapUv:Re&&_(E.normalMap.channel),displacementMapUv:At&&_(E.displacementMap.channel),emissiveMapUv:Ge&&_(E.emissiveMap.channel),metalnessMapUv:Xe&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:me&&_(E.anisotropyMap.channel),clearcoatMapUv:_e&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:qe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(E.sheenRoughnessMap.channel),specularMapUv:Be&&_(E.specularMap.channel),specularColorMapUv:We&&_(E.specularColorMap.channel),specularIntensityMapUv:Mt&&_(E.specularIntensityMap.channel),transmissionMapUv:v&&_(E.transmissionMap.channel),thicknessMapUv:z&&_(E.thicknessMap.channel),alphaMapUv:$&&_(E.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Re||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ee.attributes.uv&&(Ze||$),fog:!!te,useFog:E.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:X.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Je,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Ze&&E.map.isVideoTexture===!0&&pt.getTransfer(E.map.colorSpace)===xt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===xi,flipSided:E.side===dn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ve&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&E.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function f(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)S.push(C),S.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(T(S,E),x(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function T(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function N(E){const S=g[E.type];let C;if(S){const Y=Zn[S];C=zg.clone(Y.uniforms)}else C=E.uniforms;return C}function F(E,S){let C;for(let Y=0,X=u.length;Y<X;Y++){const te=u[Y];if(te.cacheKey===S){C=te,++C.usedTimes;break}}return C===void 0&&(C=new Kx(i,S,E,r),u.push(C)),C}function R(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:N,acquireProgram:F,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:U}}function ty(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function ny(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ch(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,h,m,g,_,p){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),e++,f}function a(d,h,m,g,_,p){const f=o(d,h,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(d,h,m,g,_,p){const f=o(d,h,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||ny),n.length>1&&n.sort(h||lh),s.length>1&&s.sort(h||lh)}function u(){for(let d=e,h=i.length;d<h;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function iy(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new ch,i.set(n,[o])):s>=r.length?(o=new ch,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function sy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ie};break;case"SpotLight":t={position:new L,direction:new L,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function ry(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let oy=0;function ay(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ly(i){const e=new sy,t=ry(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new _t,o=new _t;function a(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,T=0,x=0,N=0,F=0,R=0,A=0;c.sort(ay);for(let E=0,S=c.length;E<S;E++){const C=c[E],Y=C.color,X=C.intensity,te=C.distance,ee=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=Y.r*X,d+=Y.g*X,h+=Y.b*X;else if(C.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(C.sh.coefficients[Z],X);A++}else if(C.isDirectionalLight){const Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ne=C.shadow,j=t.get(C);j.shadowIntensity=ne.intensity,j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=C.shadow.matrix,T++}n.directional[m]=Z,m++}else if(C.isSpotLight){const Z=e.get(C);Z.position.setFromMatrixPosition(C.matrixWorld),Z.color.copy(Y).multiplyScalar(X),Z.distance=te,Z.coneCos=Math.cos(C.angle),Z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Z.decay=C.decay,n.spot[_]=Z;const ne=C.shadow;if(C.map&&(n.spotLightMap[F]=C.map,F++,ne.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[_]=ne.matrix,C.castShadow){const j=t.get(C);j.shadowIntensity=ne.intensity,j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=ee,N++}_++}else if(C.isRectAreaLight){const Z=e.get(C);Z.color.copy(Y).multiplyScalar(X),Z.halfWidth.set(C.width*.5,0,0),Z.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=Z,p++}else if(C.isPointLight){const Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity),Z.distance=C.distance,Z.decay=C.decay,C.castShadow){const ne=C.shadow,j=t.get(C);j.shadowIntensity=ne.intensity,j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,j.shadowCameraNear=ne.camera.near,j.shadowCameraFar=ne.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=C.shadow.matrix,x++}n.point[g]=Z,g++}else if(C.isHemisphereLight){const Z=e.get(C);Z.skyColor.copy(C.color).multiplyScalar(X),Z.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[f]=Z,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const U=n.hash;(U.directionalLength!==m||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==p||U.hemiLength!==f||U.numDirectionalShadows!==T||U.numPointShadows!==x||U.numSpotShadows!==N||U.numSpotMaps!==F||U.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=N+F-R,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,U.directionalLength=m,U.pointLength=g,U.spotLength=_,U.rectAreaLength=p,U.hemiLength=f,U.numDirectionalShadows=T,U.numPointShadows=x,U.numSpotShadows=N,U.numSpotMaps=F,U.numLightProbes=A,n.version=oy++)}function l(c,u){let d=0,h=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const x=c[f];if(x.isDirectionalLight){const N=n.directional[d];N.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(p),d++}else if(x.isSpotLight){const N=n.spot[m];N.position.setFromMatrixPosition(x.matrixWorld),N.position.applyMatrix4(p),N.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const N=n.rectArea[g];N.position.setFromMatrixPosition(x.matrixWorld),N.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),N.halfWidth.set(x.width*.5,0,0),N.halfHeight.set(0,x.height*.5,0),N.halfWidth.applyMatrix4(o),N.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const N=n.point[h];N.position.setFromMatrixPosition(x.matrixWorld),N.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const N=n.hemi[_];N.direction.setFromMatrixPosition(x.matrixWorld),N.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function uh(i){const e=new ly(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function cy(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new uh(i),e.set(s,[a])):r>=o.length?(a=new uh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class uy extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Km,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hy extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fy=`uniform sampler2D shadow_pass;
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
}`;function py(i,e,t){let n=new Fc;const s=new xe,r=new xe,o=new tt,a=new uy({depthPacking:Zm}),l=new hy,c={},u=t.maxTextureSize,d={[Xi]:dn,[dn]:Xi,[xi]:xi},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:dy,fragmentShader:fy}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new ji;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=od;let f=this.type;this.render=function(R,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Wi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const X=f!==gi&&this.type===gi,te=f===gi&&this.type!==gi;for(let ee=0,Z=R.length;ee<Z;ee++){const ne=R[ee],j=ne.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const ye=j.getFrameExtents();if(s.multiply(ye),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ye.x),s.x=r.x*ye.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ye.y),s.y=r.y*ye.y,j.mapSize.y=r.y)),j.map===null||X===!0||te===!0){const be=this.type!==gi?{minFilter:tn,magFilter:tn}:{};j.map!==null&&j.map.dispose(),j.map=new ds(s.x,s.y,be),j.map.texture.name=ne.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const Ee=j.getViewportCount();for(let be=0;be<Ee;be++){const Je=j.getViewport(be);o.set(r.x*Je.x,r.y*Je.y,r.x*Je.z,r.y*Je.w),Y.viewport(o),j.updateMatrices(ne,be),n=j.getFrustum(),N(A,U,j.camera,ne,this.type)}j.isPointLightShadow!==!0&&this.type===gi&&T(j,U),j.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(E,S,C)};function T(R,A){const U=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ds(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,U,h,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,U,m,_,null)}function x(R,A,U,E){let S=null;const C=U.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)S=C;else if(S=U.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Y=S.uuid,X=A.uuid;let te=c[Y];te===void 0&&(te={},c[Y]=te);let ee=te[X];ee===void 0&&(ee=S.clone(),te[X]=ee,A.addEventListener("dispose",F)),S=ee}if(S.visible=A.visible,S.wireframe=A.wireframe,E===gi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Y=i.properties.get(S);Y.light=U}return S}function N(R,A,U,E,S){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===gi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,R.matrixWorld);const X=e.update(R),te=R.material;if(Array.isArray(te)){const ee=X.groups;for(let Z=0,ne=ee.length;Z<ne;Z++){const j=ee[Z],ye=te[j.materialIndex];if(ye&&ye.visible){const Ee=x(R,ye,E,S);R.onBeforeShadow(i,R,A,U,X,Ee,j),i.renderBufferDirect(U,null,X,Ee,R,j),R.onAfterShadow(i,R,A,U,X,Ee,j)}}}else if(te.visible){const ee=x(R,te,E,S);R.onBeforeShadow(i,R,A,U,X,ee,null),i.renderBufferDirect(U,null,X,ee,R,null),R.onAfterShadow(i,R,A,U,X,ee,null)}}const Y=R.children;for(let X=0,te=Y.length;X<te;X++)N(Y[X],A,U,E,S)}function F(R){R.target.removeEventListener("dispose",F);for(const U in c){const E=c[U],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function my(i){function e(){let v=!1;const z=new tt;let V=null;const $=new tt(0,0,0,0);return{setMask:function(oe){V!==oe&&!v&&(i.colorMask(oe,oe,oe,oe),V=oe)},setLocked:function(oe){v=oe},setClear:function(oe,Ce,Ve,Rt,Ot){Ot===!0&&(oe*=Rt,Ce*=Rt,Ve*=Rt),z.set(oe,Ce,Ve,Rt),$.equals(z)===!1&&(i.clearColor(oe,Ce,Ve,Rt),$.copy(z))},reset:function(){v=!1,V=null,$.set(-1,0,0,0)}}}function t(){let v=!1,z=null,V=null,$=null;return{setTest:function(oe){oe?Ae(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(oe){z!==oe&&!v&&(i.depthMask(oe),z=oe)},setFunc:function(oe){if(V!==oe){switch(oe){case Bm:i.depthFunc(i.NEVER);break;case Vm:i.depthFunc(i.ALWAYS);break;case km:i.depthFunc(i.LESS);break;case Vo:i.depthFunc(i.LEQUAL);break;case Hm:i.depthFunc(i.EQUAL);break;case Gm:i.depthFunc(i.GEQUAL);break;case Wm:i.depthFunc(i.GREATER);break;case Xm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}V=oe}},setLocked:function(oe){v=oe},setClear:function(oe){$!==oe&&(i.clearDepth(oe),$=oe)},reset:function(){v=!1,z=null,V=null,$=null}}}function n(){let v=!1,z=null,V=null,$=null,oe=null,Ce=null,Ve=null,Rt=null,Ot=null;return{setTest:function(et){v||(et?Ae(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(et){z!==et&&!v&&(i.stencilMask(et),z=et)},setFunc:function(et,Ft,Lt){(V!==et||$!==Ft||oe!==Lt)&&(i.stencilFunc(et,Ft,Lt),V=et,$=Ft,oe=Lt)},setOp:function(et,Ft,Lt){(Ce!==et||Ve!==Ft||Rt!==Lt)&&(i.stencilOp(et,Ft,Lt),Ce=et,Ve=Ft,Rt=Lt)},setLocked:function(et){v=et},setClear:function(et){Ot!==et&&(i.clearStencil(et),Ot=et)},reset:function(){v=!1,z=null,V=null,$=null,oe=null,Ce=null,Ve=null,Rt=null,Ot=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],m=null,g=!1,_=null,p=null,f=null,T=null,x=null,N=null,F=null,R=new Ie(0,0,0),A=0,U=!1,E=null,S=null,C=null,Y=null,X=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Z=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=Z>=1):ne.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=Z>=2);let j=null,ye={};const Ee=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),Je=new tt().fromArray(Ee),st=new tt().fromArray(be);function J(v,z,V,$){const oe=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(v,Ce),i.texParameteri(v,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(v,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<V;Ve++)v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY?i.texImage3D(z,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(z+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return Ce}const ce={};ce[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Ae(i.DEPTH_TEST),r.setFunc(Vo),rt(!1),Re(gu),Ae(i.CULL_FACE),Et(Wi);function Ae(v){c[v]!==!0&&(i.enable(v),c[v]=!0)}function Se(v){c[v]!==!1&&(i.disable(v),c[v]=!1)}function $e(v,z){return u[v]!==z?(i.bindFramebuffer(v,z),u[v]=z,v===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=z),v===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=z),!0):!1}function Ye(v,z){let V=h,$=!1;if(v){V=d.get(z),V===void 0&&(V=[],d.set(z,V));const oe=v.textures;if(V.length!==oe.length||V[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,Ve=oe.length;Ce<Ve;Ce++)V[Ce]=i.COLOR_ATTACHMENT0+Ce;V.length=oe.length,$=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,$=!0);$&&i.drawBuffers(V)}function Ze(v){return m!==v?(i.useProgram(v),m=v,!0):!1}const vt={[ls]:i.FUNC_ADD,[Sm]:i.FUNC_SUBTRACT,[Tm]:i.FUNC_REVERSE_SUBTRACT};vt[Em]=i.MIN,vt[Am]=i.MAX;const w={[Nm]:i.ZERO,[bm]:i.ONE,[wm]:i.SRC_COLOR,[El]:i.SRC_ALPHA,[Dm]:i.SRC_ALPHA_SATURATE,[Pm]:i.DST_COLOR,[Cm]:i.DST_ALPHA,[Rm]:i.ONE_MINUS_SRC_COLOR,[Al]:i.ONE_MINUS_SRC_ALPHA,[Im]:i.ONE_MINUS_DST_COLOR,[Lm]:i.ONE_MINUS_DST_ALPHA,[Um]:i.CONSTANT_COLOR,[Om]:i.ONE_MINUS_CONSTANT_COLOR,[Fm]:i.CONSTANT_ALPHA,[zm]:i.ONE_MINUS_CONSTANT_ALPHA};function Et(v,z,V,$,oe,Ce,Ve,Rt,Ot,et){if(v===Wi){g===!0&&(Se(i.BLEND),g=!1);return}if(g===!1&&(Ae(i.BLEND),g=!0),v!==Mm){if(v!==_||et!==U){if((p!==ls||x!==ls)&&(i.blendEquation(i.FUNC_ADD),p=ls,x=ls),et)switch(v){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _u:i.blendFunc(i.ONE,i.ONE);break;case vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _u:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}f=null,T=null,N=null,F=null,R.set(0,0,0),A=0,_=v,U=et}return}oe=oe||z,Ce=Ce||V,Ve=Ve||$,(z!==p||oe!==x)&&(i.blendEquationSeparate(vt[z],vt[oe]),p=z,x=oe),(V!==f||$!==T||Ce!==N||Ve!==F)&&(i.blendFuncSeparate(w[V],w[$],w[Ce],w[Ve]),f=V,T=$,N=Ce,F=Ve),(Rt.equals(R)===!1||Ot!==A)&&(i.blendColor(Rt.r,Rt.g,Rt.b,Ot),R.copy(Rt),A=Ot),_=v,U=!1}function nt(v,z){v.side===xi?Se(i.CULL_FACE):Ae(i.CULL_FACE);let V=v.side===dn;z&&(V=!V),rt(V),v.blending===hs&&v.transparent===!1?Et(Wi):Et(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),r.setFunc(v.depthFunc),r.setTest(v.depthTest),r.setMask(v.depthWrite),s.setMask(v.colorWrite);const $=v.stencilWrite;o.setTest($),$&&(o.setMask(v.stencilWriteMask),o.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),o.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),Ge(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?Ae(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(v){E!==v&&(v?i.frontFace(i.CW):i.frontFace(i.CCW),E=v)}function Re(v){v!==vm?(Ae(i.CULL_FACE),v!==S&&(v===gu?i.cullFace(i.BACK):v===xm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),S=v}function At(v){v!==C&&(ee&&i.lineWidth(v),C=v)}function Ge(v,z,V){v?(Ae(i.POLYGON_OFFSET_FILL),(Y!==z||X!==V)&&(i.polygonOffset(z,V),Y=z,X=V)):Se(i.POLYGON_OFFSET_FILL)}function Xe(v){v?Ae(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function b(v){v===void 0&&(v=i.TEXTURE0+te-1),j!==v&&(i.activeTexture(v),j=v)}function y(v,z,V){V===void 0&&(j===null?V=i.TEXTURE0+te-1:V=j);let $=ye[V];$===void 0&&($={type:void 0,texture:void 0},ye[V]=$),($.type!==v||$.texture!==z)&&(j!==V&&(i.activeTexture(V),j=V),i.bindTexture(v,z||ce[v]),$.type=v,$.texture=z)}function G(){const v=ye[j];v!==void 0&&v.type!==void 0&&(i.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Qe(){try{i.texImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Oe(v){Je.equals(v)===!1&&(i.scissor(v.x,v.y,v.z,v.w),Je.copy(v))}function Te(v){st.equals(v)===!1&&(i.viewport(v.x,v.y,v.z,v.w),st.copy(v))}function Be(v,z){let V=l.get(z);V===void 0&&(V=new WeakMap,l.set(z,V));let $=V.get(v);$===void 0&&($=i.getUniformBlockIndex(z,v.name),V.set(v,$))}function We(v,z){const $=l.get(z).get(v);a.get(z)!==$&&(i.uniformBlockBinding(z,$,v.__bindingPointIndex),a.set(z,$))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},j=null,ye={},u={},d=new WeakMap,h=[],m=null,g=!1,_=null,p=null,f=null,T=null,x=null,N=null,F=null,R=new Ie(0,0,0),A=0,U=!1,E=null,S=null,C=null,Y=null,X=null,Je.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Ae,disable:Se,bindFramebuffer:$e,drawBuffers:Ye,useProgram:Ze,setBlending:Et,setMaterial:nt,setFlipSided:rt,setCullFace:Re,setLineWidth:At,setPolygonOffset:Ge,setScissorTest:Xe,activeTexture:b,bindTexture:y,unbindTexture:G,compressedTexImage2D:re,compressedTexImage3D:ae,texImage2D:ve,texImage3D:Qe,updateUBOMapping:Be,uniformBlockBinding:We,texStorage2D:qe,texStorage3D:ue,texSubImage2D:ie,texSubImage3D:Pe,compressedTexSubImage2D:me,compressedTexSubImage3D:_e,scissor:Oe,viewport:Te,reset:Mt}}function hh(i,e,t,n){const s=gy(n);switch(t){case _d:return i*e;case xd:return i*e;case yd:return i*e*2;case Md:return i*e/s.components*s.byteLength;case bc:return i*e/s.components*s.byteLength;case Sd:return i*e*2/s.components*s.byteLength;case wc:return i*e*2/s.components*s.byteLength;case vd:return i*e*3/s.components*s.byteLength;case Gn:return i*e*4/s.components*s.byteLength;case Rc:return i*e*4/s.components*s.byteLength;case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Il:return Math.max(i,16)*Math.max(e,8)/4;case Cl:case Pl:return Math.max(i,8)*Math.max(e,8)/2;case Dl:case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Io:case Zl:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Td:case Ql:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ec:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gy(i){switch(i){case Ni:case pd:return{byteLength:1,components:1};case Ir:case md:case ur:return{byteLength:2,components:1};case Ac:case Nc:return{byteLength:2,components:4};case $i:case sa:case si:return{byteLength:4,components:1};case gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _y(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return m?new OffscreenCanvas(b,y):Dr("canvas")}function _(b,y,G){let re=1;const ae=Xe(b);if((ae.width>G||ae.height>G)&&(re=G/Math.max(ae.width,ae.height)),re<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ie=Math.floor(re*ae.width),Pe=Math.floor(re*ae.height);d===void 0&&(d=g(ie,Pe));const me=y?g(ie,Pe):d;return me.width=ie,me.height=Pe,me.getContext("2d").drawImage(b,0,0,ie,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ie+"x"+Pe+")."),me}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==tn&&b.minFilter!==kn}function f(b){i.generateMipmap(b)}function T(b,y,G,re,ae=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=y;if(y===i.RED&&(G===i.FLOAT&&(ie=i.R32F),G===i.HALF_FLOAT&&(ie=i.R16F),G===i.UNSIGNED_BYTE&&(ie=i.R8)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ie=i.R8UI),G===i.UNSIGNED_SHORT&&(ie=i.R16UI),G===i.UNSIGNED_INT&&(ie=i.R32UI),G===i.BYTE&&(ie=i.R8I),G===i.SHORT&&(ie=i.R16I),G===i.INT&&(ie=i.R32I)),y===i.RG&&(G===i.FLOAT&&(ie=i.RG32F),G===i.HALF_FLOAT&&(ie=i.RG16F),G===i.UNSIGNED_BYTE&&(ie=i.RG8)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ie=i.RG8UI),G===i.UNSIGNED_SHORT&&(ie=i.RG16UI),G===i.UNSIGNED_INT&&(ie=i.RG32UI),G===i.BYTE&&(ie=i.RG8I),G===i.SHORT&&(ie=i.RG16I),G===i.INT&&(ie=i.RG32I)),y===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),y===i.RGBA){const Pe=ae?ko:pt.getTransfer(re);G===i.FLOAT&&(ie=i.RGBA32F),G===i.HALF_FLOAT&&(ie=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ie=Pe===xt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(b,y){let G;return b?y===null||y===$i||y===nr?G=i.DEPTH24_STENCIL8:y===si?G=i.DEPTH32F_STENCIL8:y===Ir&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===$i||y===nr?G=i.DEPTH_COMPONENT24:y===si?G=i.DEPTH_COMPONENT32F:y===Ir&&(G=i.DEPTH_COMPONENT16),G}function N(b,y){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==tn&&b.minFilter!==kn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function F(b){const y=b.target;y.removeEventListener("dispose",F),A(y),y.isVideoTexture&&u.delete(y)}function R(b){const y=b.target;y.removeEventListener("dispose",R),E(y)}function A(b){const y=n.get(b);if(y.__webglInit===void 0)return;const G=b.source,re=h.get(G);if(re){const ae=re[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&U(b),Object.keys(re).length===0&&h.delete(G)}n.remove(b)}function U(b){const y=n.get(b);i.deleteTexture(y.__webglTexture);const G=b.source,re=h.get(G);delete re[y.__cacheKey],o.memory.textures--}function E(b){const y=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(y.__webglFramebuffer[re]))for(let ae=0;ae<y.__webglFramebuffer[re].length;ae++)i.deleteFramebuffer(y.__webglFramebuffer[re][ae]);else i.deleteFramebuffer(y.__webglFramebuffer[re]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[re])}else{if(Array.isArray(y.__webglFramebuffer))for(let re=0;re<y.__webglFramebuffer.length;re++)i.deleteFramebuffer(y.__webglFramebuffer[re]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let re=0;re<y.__webglColorRenderbuffer.length;re++)y.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[re]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=b.textures;for(let re=0,ae=G.length;re<ae;re++){const ie=n.get(G[re]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(G[re])}n.remove(b)}let S=0;function C(){S=0}function Y(){const b=S;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),S+=1,b}function X(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function te(b,y){const G=n.get(b);if(b.isVideoTexture&&At(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const re=b.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(G,b,y);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function ee(b,y){const G=n.get(b);if(b.version>0&&G.__version!==b.version){st(G,b,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function Z(b,y){const G=n.get(b);if(b.version>0&&G.__version!==b.version){st(G,b,y);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function ne(b,y){const G=n.get(b);if(b.version>0&&G.__version!==b.version){J(G,b,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}const j={[wl]:i.REPEAT,[us]:i.CLAMP_TO_EDGE,[Rl]:i.MIRRORED_REPEAT},ye={[tn]:i.NEAREST,[jm]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},Ee={[Jm]:i.NEVER,[ig]:i.ALWAYS,[Ad]:i.LESS,[Nd]:i.LEQUAL,[Qm]:i.EQUAL,[ng]:i.GEQUAL,[eg]:i.GREATER,[tg]:i.NOTEQUAL};function be(b,y){if(y.type===si&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===kn||y.magFilter===wa||y.magFilter===Jr||y.magFilter===Hi||y.minFilter===kn||y.minFilter===wa||y.minFilter===Jr||y.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,j[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,j[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,j[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ye[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ye[y.minFilter]),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===tn||y.minFilter!==Jr&&y.minFilter!==Hi||y.type===si&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Je(b,y){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",F));const re=y.source;let ae=h.get(re);ae===void 0&&(ae={},h.set(re,ae));const ie=X(y);if(ie!==b.__cacheKey){ae[ie]===void 0&&(ae[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ae[ie].usedTimes++;const Pe=ae[b.__cacheKey];Pe!==void 0&&(ae[b.__cacheKey].usedTimes--,Pe.usedTimes===0&&U(y)),b.__cacheKey=ie,b.__webglTexture=ae[ie].texture}return G}function st(b,y,G){let re=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(re=i.TEXTURE_3D);const ae=Je(b,y),ie=y.source;t.bindTexture(re,b.__webglTexture,i.TEXTURE0+G);const Pe=n.get(ie);if(ie.version!==Pe.__version||ae===!0){t.activeTexture(i.TEXTURE0+G);const me=pt.getPrimaries(pt.workingColorSpace),_e=y.colorSpace===Vi?null:pt.getPrimaries(y.colorSpace),qe=y.colorSpace===Vi||me===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ue=_(y.image,!1,s.maxTextureSize);ue=Ge(y,ue);const ve=r.convert(y.format,y.colorSpace),Qe=r.convert(y.type);let Oe=T(y.internalFormat,ve,Qe,y.colorSpace,y.isVideoTexture);be(re,y);let Te;const Be=y.mipmaps,We=y.isVideoTexture!==!0,Mt=Pe.__version===void 0||ae===!0,v=ie.dataReady,z=N(y,ue);if(y.isDepthTexture)Oe=x(y.format===ir,y.type),Mt&&(We?t.texStorage2D(i.TEXTURE_2D,1,Oe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Oe,ue.width,ue.height,0,ve,Qe,null));else if(y.isDataTexture)if(Be.length>0){We&&Mt&&t.texStorage2D(i.TEXTURE_2D,z,Oe,Be[0].width,Be[0].height);for(let V=0,$=Be.length;V<$;V++)Te=Be[V],We?v&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Te.width,Te.height,ve,Qe,Te.data):t.texImage2D(i.TEXTURE_2D,V,Oe,Te.width,Te.height,0,ve,Qe,Te.data);y.generateMipmaps=!1}else We?(Mt&&t.texStorage2D(i.TEXTURE_2D,z,Oe,ue.width,ue.height),v&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,ve,Qe,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,ue.width,ue.height,0,ve,Qe,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,z,Oe,Be[0].width,Be[0].height,ue.depth);for(let V=0,$=Be.length;V<$;V++)if(Te=Be[V],y.format!==Gn)if(ve!==null)if(We){if(v)if(y.layerUpdates.size>0){const oe=hh(Te.width,Te.height,y.format,y.type);for(const Ce of y.layerUpdates){const Ve=Te.data.subarray(Ce*oe/Te.data.BYTES_PER_ELEMENT,(Ce+1)*oe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,Ce,Te.width,Te.height,1,ve,Ve,0,0)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Te.width,Te.height,ue.depth,ve,Te.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Oe,Te.width,Te.height,ue.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?v&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Te.width,Te.height,ue.depth,ve,Qe,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Oe,Te.width,Te.height,ue.depth,0,ve,Qe,Te.data)}else{We&&Mt&&t.texStorage2D(i.TEXTURE_2D,z,Oe,Be[0].width,Be[0].height);for(let V=0,$=Be.length;V<$;V++)Te=Be[V],y.format!==Gn?ve!==null?We?v&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,Te.width,Te.height,ve,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?v&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,Te.width,Te.height,ve,Qe,Te.data):t.texImage2D(i.TEXTURE_2D,V,Oe,Te.width,Te.height,0,ve,Qe,Te.data)}else if(y.isDataArrayTexture)if(We){if(Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,z,Oe,ue.width,ue.height,ue.depth),v)if(y.layerUpdates.size>0){const V=hh(ue.width,ue.height,y.format,y.type);for(const $ of y.layerUpdates){const oe=ue.data.subarray($*V/ue.data.BYTES_PER_ELEMENT,($+1)*V/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ue.width,ue.height,1,ve,Qe,oe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Qe,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,ue.width,ue.height,ue.depth,0,ve,Qe,ue.data);else if(y.isData3DTexture)We?(Mt&&t.texStorage3D(i.TEXTURE_3D,z,Oe,ue.width,ue.height,ue.depth),v&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Qe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,ue.width,ue.height,ue.depth,0,ve,Qe,ue.data);else if(y.isFramebufferTexture){if(Mt)if(We)t.texStorage2D(i.TEXTURE_2D,z,Oe,ue.width,ue.height);else{let V=ue.width,$=ue.height;for(let oe=0;oe<z;oe++)t.texImage2D(i.TEXTURE_2D,oe,Oe,V,$,0,ve,Qe,null),V>>=1,$>>=1}}else if(Be.length>0){if(We&&Mt){const V=Xe(Be[0]);t.texStorage2D(i.TEXTURE_2D,z,Oe,V.width,V.height)}for(let V=0,$=Be.length;V<$;V++)Te=Be[V],We?v&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ve,Qe,Te):t.texImage2D(i.TEXTURE_2D,V,Oe,ve,Qe,Te);y.generateMipmaps=!1}else if(We){if(Mt){const V=Xe(ue);t.texStorage2D(i.TEXTURE_2D,z,Oe,V.width,V.height)}v&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Qe,ue)}else t.texImage2D(i.TEXTURE_2D,0,Oe,ve,Qe,ue);p(y)&&f(re),Pe.__version=ie.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function J(b,y,G){if(y.image.length!==6)return;const re=Je(b,y),ae=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+G);const ie=n.get(ae);if(ae.version!==ie.__version||re===!0){t.activeTexture(i.TEXTURE0+G);const Pe=pt.getPrimaries(pt.workingColorSpace),me=y.colorSpace===Vi?null:pt.getPrimaries(y.colorSpace),_e=y.colorSpace===Vi||Pe===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const qe=y.isCompressedTexture||y.image[0].isCompressedTexture,ue=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let $=0;$<6;$++)!qe&&!ue?ve[$]=_(y.image[$],!0,s.maxCubemapSize):ve[$]=ue?y.image[$].image:y.image[$],ve[$]=Ge(y,ve[$]);const Qe=ve[0],Oe=r.convert(y.format,y.colorSpace),Te=r.convert(y.type),Be=T(y.internalFormat,Oe,Te,y.colorSpace),We=y.isVideoTexture!==!0,Mt=ie.__version===void 0||re===!0,v=ae.dataReady;let z=N(y,Qe);be(i.TEXTURE_CUBE_MAP,y);let V;if(qe){We&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,z,Be,Qe.width,Qe.height);for(let $=0;$<6;$++){V=ve[$].mipmaps;for(let oe=0;oe<V.length;oe++){const Ce=V[oe];y.format!==Gn?Oe!==null?We?v&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,0,0,Ce.width,Ce.height,Oe,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,0,0,Ce.width,Ce.height,Oe,Te,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe,Be,Ce.width,Ce.height,0,Oe,Te,Ce.data)}}}else{if(V=y.mipmaps,We&&Mt){V.length>0&&z++;const $=Xe(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,z,Be,$.width,$.height)}for(let $=0;$<6;$++)if(ue){We?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ve[$].width,ve[$].height,Oe,Te,ve[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,ve[$].width,ve[$].height,0,Oe,Te,ve[$].data);for(let oe=0;oe<V.length;oe++){const Ve=V[oe].image[$].image;We?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,0,0,Ve.width,Ve.height,Oe,Te,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,Be,Ve.width,Ve.height,0,Oe,Te,Ve.data)}}else{We?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Oe,Te,ve[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,Oe,Te,ve[$]);for(let oe=0;oe<V.length;oe++){const Ce=V[oe];We?v&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,0,0,Oe,Te,Ce.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,oe+1,Be,Oe,Te,Ce.image[$])}}}p(y)&&f(i.TEXTURE_CUBE_MAP),ie.__version=ae.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ce(b,y,G,re,ae,ie){const Pe=r.convert(G.format,G.colorSpace),me=r.convert(G.type),_e=T(G.internalFormat,Pe,me,G.colorSpace);if(!n.get(y).__hasExternalTextures){const ue=Math.max(1,y.width>>ie),ve=Math.max(1,y.height>>ie);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ie,_e,ue,ve,y.depth,0,Pe,me,null):t.texImage2D(ae,ie,_e,ue,ve,0,Pe,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Re(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ae,n.get(G).__webglTexture,0,rt(y)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ae,n.get(G).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(b,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer){const re=y.depthTexture,ae=re&&re.isDepthTexture?re.type:null,ie=x(y.stencilBuffer,ae),Pe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=rt(y);Re(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,ie,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ie,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ie,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,b)}else{const re=y.textures;for(let ae=0;ae<re.length;ae++){const ie=re[ae],Pe=r.convert(ie.format,ie.colorSpace),me=r.convert(ie.type),_e=T(ie.internalFormat,Pe,me,ie.colorSpace),qe=rt(y);G&&Re(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,_e,y.width,y.height):Re(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,_e,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_e,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),te(y.depthTexture,0);const re=n.get(y.depthTexture).__webglTexture,ae=rt(y);if(y.depthTexture.format===$s)Re(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(y.depthTexture.format===ir)Re(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function $e(b){const y=n.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Se(y.__webglFramebuffer,b)}else if(G){y.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[re]),y.__webglDepthbuffer[re]=i.createRenderbuffer(),Ae(y.__webglDepthbuffer[re],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Ae(y.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(b,y,G){const re=n.get(b);y!==void 0&&ce(re.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&$e(b)}function Ze(b){const y=b.texture,G=n.get(b),re=n.get(y);b.addEventListener("dispose",R);const ae=b.textures,ie=b.isWebGLCubeRenderTarget===!0,Pe=ae.length>1;if(Pe||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=y.version,o.memory.textures++),ie){G.__webglFramebuffer=[];for(let me=0;me<6;me++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[me]=[];for(let _e=0;_e<y.mipmaps.length;_e++)G.__webglFramebuffer[me][_e]=i.createFramebuffer()}else G.__webglFramebuffer[me]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let me=0;me<y.mipmaps.length;me++)G.__webglFramebuffer[me]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let me=0,_e=ae.length;me<_e;me++){const qe=n.get(ae[me]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&Re(b)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<ae.length;me++){const _e=ae[me];G.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const qe=r.convert(_e.format,_e.colorSpace),ue=r.convert(_e.type),ve=T(_e.internalFormat,qe,ue,_e.colorSpace,b.isXRRenderTarget===!0),Qe=rt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,ve,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,G.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(G.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),be(i.TEXTURE_CUBE_MAP,y);for(let me=0;me<6;me++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)ce(G.__webglFramebuffer[me][_e],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else ce(G.__webglFramebuffer[me],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(y)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let me=0,_e=ae.length;me<_e;me++){const qe=ae[me],ue=n.get(qe);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),be(i.TEXTURE_2D,qe),ce(G.__webglFramebuffer,b,qe,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),p(qe)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(me=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,re.__webglTexture),be(me,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)ce(G.__webglFramebuffer[_e],b,y,i.COLOR_ATTACHMENT0,me,_e);else ce(G.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,me,0);p(y)&&f(me),t.unbindTexture()}b.depthBuffer&&$e(b)}function vt(b){const y=b.textures;for(let G=0,re=y.length;G<re;G++){const ae=y[G];if(p(ae)){const ie=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(ae).__webglTexture;t.bindTexture(ie,Pe),f(ie),t.unbindTexture()}}}const w=[],Et=[];function nt(b){if(b.samples>0){if(Re(b)===!1){const y=b.textures,G=b.width,re=b.height;let ae=i.COLOR_BUFFER_BIT;const ie=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(b),me=y.length>1;if(me)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[_e]);const qe=n.get(y[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,G,re,0,0,G,re,ae,i.NEAREST),l===!0&&(w.length=0,Et.length=0,w.push(i.COLOR_ATTACHMENT0+_e),b.depthBuffer&&b.resolveDepthBuffer===!1&&(w.push(ie),Et.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[_e]);const qe=n.get(y[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function rt(b){return Math.min(s.maxSamples,b.samples)}function Re(b){const y=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function At(b){const y=o.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function Ge(b,y){const G=b.colorSpace,re=b.format,ae=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||G!==jn&&G!==Vi&&(pt.getTransfer(G)===xt?(re!==Gn||ae!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function Xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=C,this.setTexture2D=te,this.setTexture2DArray=ee,this.setTexture3D=Z,this.setTextureCube=ne,this.rebindTextures=Ye,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Re}function vy(i,e){function t(n,s=Vi){let r;const o=pt.getTransfer(s);if(n===Ni)return i.UNSIGNED_BYTE;if(n===Ac)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pd)return i.BYTE;if(n===md)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===sa)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===ur)return i.HALF_FLOAT;if(n===_d)return i.ALPHA;if(n===vd)return i.RGB;if(n===Gn)return i.RGBA;if(n===xd)return i.LUMINANCE;if(n===yd)return i.LUMINANCE_ALPHA;if(n===$s)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===Md)return i.RED;if(n===bc)return i.RED_INTEGER;if(n===Sd)return i.RG;if(n===wc)return i.RG_INTEGER;if(n===Rc)return i.RGBA_INTEGER;if(n===Ro||n===Co||n===Lo||n===Po)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Ll||n===Pl||n===Il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Ul||n===Ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dl||n===Ul)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ol)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fl||n===zl||n===Bl||n===Vl||n===kl||n===Hl||n===Gl||n===Wl||n===Xl||n===$l||n===ql||n===Yl||n===jl||n===Kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ql)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kl)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Zl||n===Jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Io)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Td||n===Ql||n===ec||n===tc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class xy extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mo extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yy={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const My=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sy=`
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

}`;class Ty{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new sn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:My,fragmentShader:Sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xn(new Wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ey extends Li{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null;const _=new Ty,p=t.getContextAttributes();let f=null,T=null;const x=[],N=[],F=new xe;let R=null;const A=new fn;A.layers.enable(1),A.viewport=new tt;const U=new fn;U.layers.enable(2),U.viewport=new tt;const E=[A,U],S=new xy;S.layers.enable(1),S.layers.enable(2);let C=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=x[J];return ce===void 0&&(ce=new Qa,x[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=x[J];return ce===void 0&&(ce=new Qa,x[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=x[J];return ce===void 0&&(ce=new Qa,x[J]=ce),ce.getHandSpace()};function X(J){const ce=N.indexOf(J.inputSource);if(ce===-1)return;const Ae=x[ce];Ae!==void 0&&(Ae.update(J.inputSource,J.frame,c||o),Ae.dispatchEvent({type:J.type,data:J.inputSource}))}function te(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",ee);for(let J=0;J<x.length;J++){const ce=N[J];ce!==null&&(N[J]=null,x[J].disconnect(ce))}C=null,Y=null,_.reset(),e.setRenderTarget(f),m=null,h=null,d=null,s=null,T=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",te),s.addEventListener("inputsourceschange",ee),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(F),s.renderState.layers===void 0){const ce={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new ds(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ce=null,Ae=null,Se=null;p.depth&&(Se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=p.stencil?ir:$s,Ae=p.stencil?nr:$i);const $e={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer($e),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new ds(h.textureWidth,h.textureHeight,{format:Gn,type:Ni,depthTexture:new Xr(h.textureWidth,h.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(J){for(let ce=0;ce<J.removed.length;ce++){const Ae=J.removed[ce],Se=N.indexOf(Ae);Se>=0&&(N[Se]=null,x[Se].disconnect(Ae))}for(let ce=0;ce<J.added.length;ce++){const Ae=J.added[ce];let Se=N.indexOf(Ae);if(Se===-1){for(let Ye=0;Ye<x.length;Ye++)if(Ye>=N.length){N.push(Ae),Se=Ye;break}else if(N[Ye]===null){N[Ye]=Ae,Se=Ye;break}if(Se===-1)break}const $e=x[Se];$e&&$e.connect(Ae)}}const Z=new L,ne=new L;function j(J,ce,Ae){Z.setFromMatrixPosition(ce.matrixWorld),ne.setFromMatrixPosition(Ae.matrixWorld);const Se=Z.distanceTo(ne),$e=ce.projectionMatrix.elements,Ye=Ae.projectionMatrix.elements,Ze=$e[14]/($e[10]-1),vt=$e[14]/($e[10]+1),w=($e[9]+1)/$e[5],Et=($e[9]-1)/$e[5],nt=($e[8]-1)/$e[0],rt=(Ye[8]+1)/Ye[0],Re=Ze*nt,At=Ze*rt,Ge=Se/(-nt+rt),Xe=Ge*-nt;ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Xe),J.translateZ(Ge),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const b=Ze+Ge,y=vt+Ge,G=Re-Xe,re=At+(Se-Xe),ae=w*vt/y*b,ie=Et*vt/y*b;J.projectionMatrix.makePerspective(G,re,ae,ie,b,y),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function ye(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;_.texture!==null&&(J.near=_.depthNear,J.far=_.depthFar),S.near=U.near=A.near=J.near,S.far=U.far=A.far=J.far,(C!==S.near||Y!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,Y=S.far,A.near=C,A.far=Y,U.near=C,U.far=Y,A.updateProjectionMatrix(),U.updateProjectionMatrix(),J.updateProjectionMatrix());const ce=J.parent,Ae=S.cameras;ye(S,ce);for(let Se=0;Se<Ae.length;Se++)ye(Ae[Se],ce);Ae.length===2?j(S,A,U):S.projectionMatrix.copy(A.projectionMatrix),Ee(J,S,ce)};function Ee(J,ce,Ae){Ae===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(Ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=rr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let be=null;function Je(J,ce){if(u=ce.getViewerPose(c||o),g=ce,u!==null){const Ae=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let Se=!1;Ae.length!==S.cameras.length&&(S.cameras.length=0,Se=!0);for(let Ye=0;Ye<Ae.length;Ye++){const Ze=Ae[Ye];let vt=null;if(m!==null)vt=m.getViewport(Ze);else{const Et=d.getViewSubImage(h,Ze);vt=Et.viewport,Ye===0&&(e.setRenderTargetTextures(T,Et.colorTexture,h.ignoreDepthValues?void 0:Et.depthStencilTexture),e.setRenderTarget(T))}let w=E[Ye];w===void 0&&(w=new fn,w.layers.enable(Ye),w.viewport=new tt,E[Ye]=w),w.matrix.fromArray(Ze.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ze.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(vt.x,vt.y,vt.width,vt.height),Ye===0&&(S.matrix.copy(w.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Se===!0&&S.cameras.push(w)}const $e=s.enabledFeatures;if($e&&$e.includes("depth-sensing")){const Ye=d.getDepthInformation(Ae[0]);Ye&&Ye.isValid&&Ye.texture&&_.init(e,Ye,s.renderState)}}for(let Ae=0;Ae<x.length;Ae++){const Se=N[Ae],$e=x[Ae];Se!==null&&$e!==void 0&&$e.update(Se,ce,c||o)}be&&be(J,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}const st=new Fd;st.setAnimationLoop(Je),this.setAnimationLoop=function(J){be=J},this.dispose=function(){}}}const is=new Dn,Ay=new _t;function Ny(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Dd(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,T,x,N){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,N)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,T,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===dn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===dn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const T=e.get(f),x=T.envMap,N=T.envMapRotation;x&&(p.envMap.value=x,is.copy(N),is.x*=-1,is.y*=-1,is.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),p.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(is)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,T,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*T,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,T){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===dn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const T=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function by(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){const N=x.program;n.uniformBlockBinding(T,N)}function c(T,x){let N=s[T.id];N===void 0&&(g(T),N=u(T),s[T.id]=N,T.addEventListener("dispose",p));const F=x.program;n.updateUBOMapping(T,F);const R=e.render.frame;r[T.id]!==R&&(h(T),r[T.id]=R)}function u(T){const x=d();T.__bindingPointIndex=x;const N=i.createBuffer(),F=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,F,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,N),N}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const x=s[T.id],N=T.uniforms,F=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let R=0,A=N.length;R<A;R++){const U=Array.isArray(N[R])?N[R]:[N[R]];for(let E=0,S=U.length;E<S;E++){const C=U[E];if(m(C,R,E,F)===!0){const Y=C.__offset,X=Array.isArray(C.value)?C.value:[C.value];let te=0;for(let ee=0;ee<X.length;ee++){const Z=X[ee],ne=_(Z);typeof Z=="number"||typeof Z=="boolean"?(C.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,Y+te,C.__data)):Z.isMatrix3?(C.__data[0]=Z.elements[0],C.__data[1]=Z.elements[1],C.__data[2]=Z.elements[2],C.__data[3]=0,C.__data[4]=Z.elements[3],C.__data[5]=Z.elements[4],C.__data[6]=Z.elements[5],C.__data[7]=0,C.__data[8]=Z.elements[6],C.__data[9]=Z.elements[7],C.__data[10]=Z.elements[8],C.__data[11]=0):(Z.toArray(C.__data,te),te+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,x,N,F){const R=T.value,A=x+"_"+N;if(F[A]===void 0)return typeof R=="number"||typeof R=="boolean"?F[A]=R:F[A]=R.clone(),!0;{const U=F[A];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return F[A]=R,!0}else if(U.equals(R)===!1)return U.copy(R),!0}return!1}function g(T){const x=T.uniforms;let N=0;const F=16;for(let A=0,U=x.length;A<U;A++){const E=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,C=E.length;S<C;S++){const Y=E[S],X=Array.isArray(Y.value)?Y.value:[Y.value];for(let te=0,ee=X.length;te<ee;te++){const Z=X[te],ne=_(Z),j=N%F;j!==0&&F-j<ne.boundary&&(N+=F-j),Y.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=N,N+=ne.storage}}}const R=N%F;return R>0&&(N+=F-R),T.__size=N,T.__cache={},this}function _(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function p(T){const x=T.target;x.removeEventListener("dispose",p);const N=o.indexOf(x.__bindingPointIndex);o.splice(N,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class wy{constructor(e={}){const{canvas:t=yg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this.toneMapping=bn,this.toneMappingExposure=1;const x=this;let N=!1,F=0,R=0,A=null,U=-1,E=null;const S=new tt,C=new tt;let Y=null;const X=new Ie(0);let te=0,ee=t.width,Z=t.height,ne=1,j=null,ye=null;const Ee=new tt(0,0,ee,Z),be=new tt(0,0,ee,Z);let Je=!1;const st=new Fc;let J=!1,ce=!1;const Ae=new _t,Se=new L,$e=new tt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function vt(){return A===null?ne:1}let w=n;function Et(M,I){return t.getContext(M,I)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ec}`),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",oe,!1),w===null){const I="webgl2";if(w=Et(I,M),w===null)throw Et(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let nt,rt,Re,At,Ge,Xe,b,y,G,re,ae,ie,Pe,me,_e,qe,ue,ve,Qe,Oe,Te,Be,We,Mt;function v(){nt=new Uv(w),nt.init(),Be=new vy(w,nt),rt=new Rv(w,nt,e,Be),Re=new my(w),At=new zv(w),Ge=new ty,Xe=new _y(w,nt,Re,Ge,rt,Be,At),b=new Lv(x),y=new Dv(x),G=new Xg(w),We=new bv(w,G),re=new Ov(w,G,At,We),ae=new Vv(w,re,G,At),Qe=new Bv(w,rt,Xe),qe=new Cv(Ge),ie=new ey(x,b,y,nt,rt,We,qe),Pe=new Ny(x,Ge),me=new iy,_e=new cy(nt),ve=new Nv(x,b,y,Re,ae,h,l),ue=new py(x,ae,rt),Mt=new by(w,At,rt,Re),Oe=new wv(w,nt,At),Te=new Fv(w,nt,At),At.programs=ie.programs,x.capabilities=rt,x.extensions=nt,x.properties=Ge,x.renderLists=me,x.shadowMap=ue,x.state=Re,x.info=At}v();const z=new Ey(x,w);this.xr=z,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(M){M!==void 0&&(ne=M,this.setSize(ee,Z,!1))},this.getSize=function(M){return M.set(ee,Z)},this.setSize=function(M,I,k=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=M,Z=I,t.width=Math.floor(M*ne),t.height=Math.floor(I*ne),k===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(ee*ne,Z*ne).floor()},this.setDrawingBufferSize=function(M,I,k){ee=M,Z=I,ne=k,t.width=Math.floor(M*k),t.height=Math.floor(I*k),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,I,k,H){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,I,k,H),Re.viewport(S.copy(Ee).multiplyScalar(ne).round())},this.getScissor=function(M){return M.copy(be)},this.setScissor=function(M,I,k,H){M.isVector4?be.set(M.x,M.y,M.z,M.w):be.set(M,I,k,H),Re.scissor(C.copy(be).multiplyScalar(ne).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(M){Re.setScissorTest(Je=M)},this.setOpaqueSort=function(M){j=M},this.setTransparentSort=function(M){ye=M},this.getClearColor=function(M){return M.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(M=!0,I=!0,k=!0){let H=0;if(M){let O=!1;if(A!==null){const fe=A.texture.format;O=fe===Rc||fe===wc||fe===bc}if(O){const fe=A.texture.type,ge=fe===Ni||fe===$i||fe===Ir||fe===nr||fe===Ac||fe===Nc,Ne=ve.getClearColor(),we=ve.getClearAlpha(),Fe=Ne.r,ke=Ne.g,Ue=Ne.b;ge?(m[0]=Fe,m[1]=ke,m[2]=Ue,m[3]=we,w.clearBufferuiv(w.COLOR,0,m)):(g[0]=Fe,g[1]=ke,g[2]=Ue,g[3]=we,w.clearBufferiv(w.COLOR,0,g))}else H|=w.COLOR_BUFFER_BIT}I&&(H|=w.DEPTH_BUFFER_BIT),k&&(H|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),me.dispose(),_e.dispose(),Ge.dispose(),b.dispose(),y.dispose(),ae.dispose(),We.dispose(),Mt.dispose(),ie.dispose(),z.dispose(),z.removeEventListener("sessionstart",Lt),z.removeEventListener("sessionend",Pi),$t.stop()};function V(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const M=At.autoReset,I=ue.enabled,k=ue.autoUpdate,H=ue.needsUpdate,O=ue.type;v(),At.autoReset=M,ue.enabled=I,ue.autoUpdate=k,ue.needsUpdate=H,ue.type=O}function oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ce(M){const I=M.target;I.removeEventListener("dispose",Ce),Ve(I)}function Ve(M){Rt(M),Ge.remove(M)}function Rt(M){const I=Ge.get(M).programs;I!==void 0&&(I.forEach(function(k){ie.releaseProgram(k)}),M.isShaderMaterial&&ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,k,H,O,fe){I===null&&(I=Ye);const ge=O.isMesh&&O.matrixWorld.determinant()<0,Ne=pm(M,I,k,H,O);Re.setMaterial(H,ge);let we=k.index,Fe=1;if(H.wireframe===!0){if(we=re.getWireframeAttribute(k),we===void 0)return;Fe=2}const ke=k.drawRange,Ue=k.attributes.position;let ct=ke.start*Fe,Nt=(ke.start+ke.count)*Fe;fe!==null&&(ct=Math.max(ct,fe.start*Fe),Nt=Math.min(Nt,(fe.start+fe.count)*Fe)),we!==null?(ct=Math.max(ct,0),Nt=Math.min(Nt,we.count)):Ue!=null&&(ct=Math.max(ct,0),Nt=Math.min(Nt,Ue.count));const bt=Nt-ct;if(bt<0||bt===1/0)return;We.setup(O,H,Ne,k,we);let yn,ut=Oe;if(we!==null&&(yn=G.get(we),ut=Te,ut.setIndex(yn)),O.isMesh)H.wireframe===!0?(Re.setLineWidth(H.wireframeLinewidth*vt()),ut.setMode(w.LINES)):ut.setMode(w.TRIANGLES);else if(O.isLine){let Le=H.linewidth;Le===void 0&&(Le=1),Re.setLineWidth(Le*vt()),O.isLineSegments?ut.setMode(w.LINES):O.isLineLoop?ut.setMode(w.LINE_LOOP):ut.setMode(w.LINE_STRIP)}else O.isPoints?ut.setMode(w.POINTS):O.isSprite&&ut.setMode(w.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ut.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ut.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Le=O._multiDrawStarts,qt=O._multiDrawCounts,ht=O._multiDrawCount,Un=we?G.get(we).bytesPerElement:1,Ms=Ge.get(H).currentProgram.getUniforms();for(let Mn=0;Mn<ht;Mn++)Ms.setValue(w,"_gl_DrawID",Mn),ut.render(Le[Mn]/Un,qt[Mn])}else if(O.isInstancedMesh)ut.renderInstances(ct,bt,O.count);else if(k.isInstancedBufferGeometry){const Le=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,qt=Math.min(k.instanceCount,Le);ut.renderInstances(ct,bt,qt)}else ut.render(ct,bt)};function Ot(M,I,k){M.transparent===!0&&M.side===xi&&M.forceSinglePass===!1?(M.side=dn,M.needsUpdate=!0,Zr(M,I,k),M.side=Xi,M.needsUpdate=!0,Zr(M,I,k),M.side=xi):Zr(M,I,k)}this.compile=function(M,I,k=null){k===null&&(k=M),p=_e.get(k),p.init(I),T.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==k&&M.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return M.traverse(function(O){const fe=O.material;if(fe)if(Array.isArray(fe))for(let ge=0;ge<fe.length;ge++){const Ne=fe[ge];Ot(Ne,k,O),H.add(Ne)}else Ot(fe,k,O),H.add(fe)}),T.pop(),p=null,H},this.compileAsync=function(M,I,k=null){const H=this.compile(M,I,k);return new Promise(O=>{function fe(){if(H.forEach(function(ge){Ge.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){O(M);return}setTimeout(fe,10)}nt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let et=null;function Ft(M){et&&et(M)}function Lt(){$t.stop()}function Pi(){$t.start()}const $t=new Fd;$t.setAnimationLoop(Ft),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(M){et=M,z.setAnimationLoop(M),M===null?$t.stop():$t.start()},z.addEventListener("sessionstart",Lt),z.addEventListener("sessionend",Pi),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(I),I=z.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,I,A),p=_e.get(M,T.length),p.init(I),T.push(p),Ae.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),st.setFromProjectionMatrix(Ae),ce=this.localClippingEnabled,J=qe.init(this.clippingPlanes,ce),_=me.get(M,f.length),_.init(),f.push(_),z.enabled===!0&&z.isPresenting===!0){const fe=x.xr.getDepthSensingMesh();fe!==null&&ui(fe,I,-1/0,x.sortObjects)}ui(M,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(j,ye),Ze=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Ze&&ve.addToRenderList(_,M),this.info.render.frame++,J===!0&&qe.beginShadows();const k=p.state.shadowsArray;ue.render(k,M,I),J===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,O=_.transmissive;if(p.setupLights(),I.isArrayCamera){const fe=I.cameras;if(O.length>0)for(let ge=0,Ne=fe.length;ge<Ne;ge++){const we=fe[ge];gr(H,O,M,we)}Ze&&ve.render(M);for(let ge=0,Ne=fe.length;ge<Ne;ge++){const we=fe[ge];Zi(_,M,we,we.viewport)}}else O.length>0&&gr(H,O,M,I),Ze&&ve.render(M),Zi(_,M,I);A!==null&&(Xe.updateMultisampleRenderTarget(A),Xe.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(x,M,I),We.resetDefaultState(),U=-1,E=null,T.pop(),T.length>0?(p=T[T.length-1],J===!0&&qe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ui(M,I,k,H){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||st.intersectsSprite(M)){H&&$e.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ae);const ge=ae.update(M),Ne=M.material;Ne.visible&&_.push(M,ge,Ne,k,$e.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||st.intersectsObject(M))){const ge=ae.update(M),Ne=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),$e.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),$e.copy(ge.boundingSphere.center)),$e.applyMatrix4(M.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ne)){const we=ge.groups;for(let Fe=0,ke=we.length;Fe<ke;Fe++){const Ue=we[Fe],ct=Ne[Ue.materialIndex];ct&&ct.visible&&_.push(M,ge,ct,k,$e.z,Ue)}}else Ne.visible&&_.push(M,ge,Ne,k,$e.z,null)}}const fe=M.children;for(let ge=0,Ne=fe.length;ge<Ne;ge++)ui(fe[ge],I,k,H)}function Zi(M,I,k,H){const O=M.opaque,fe=M.transmissive,ge=M.transparent;p.setupLightsView(k),J===!0&&qe.setGlobalState(x.clippingPlanes,k),H&&Re.viewport(S.copy(H)),O.length>0&&Kr(O,I,k),fe.length>0&&Kr(fe,I,k),ge.length>0&&Kr(ge,I,k),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function gr(M,I,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ds(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ur:Ni,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const fe=p.state.transmissionRenderTarget[H.id],ge=H.viewport||S;fe.setSize(ge.z,ge.w);const Ne=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(X),te=x.getClearAlpha(),te<1&&x.setClearColor(16777215,.5),Ze?ve.render(k):x.clear();const we=x.toneMapping;x.toneMapping=bn;const Fe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),J===!0&&qe.setGlobalState(x.clippingPlanes,H),Kr(M,k,H),Xe.updateMultisampleRenderTarget(fe),Xe.updateRenderTargetMipmap(fe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ue=0,ct=I.length;Ue<ct;Ue++){const Nt=I[Ue],bt=Nt.object,yn=Nt.geometry,ut=Nt.material,Le=Nt.group;if(ut.side===xi&&bt.layers.test(H.layers)){const qt=ut.side;ut.side=dn,ut.needsUpdate=!0,du(bt,k,H,yn,ut,Le),ut.side=qt,ut.needsUpdate=!0,ke=!0}}ke===!0&&(Xe.updateMultisampleRenderTarget(fe),Xe.updateRenderTargetMipmap(fe))}x.setRenderTarget(Ne),x.setClearColor(X,te),Fe!==void 0&&(H.viewport=Fe),x.toneMapping=we}function Kr(M,I,k){const H=I.isScene===!0?I.overrideMaterial:null;for(let O=0,fe=M.length;O<fe;O++){const ge=M[O],Ne=ge.object,we=ge.geometry,Fe=H===null?ge.material:H,ke=ge.group;Ne.layers.test(k.layers)&&du(Ne,I,k,we,Fe,ke)}}function du(M,I,k,H,O,fe){M.onBeforeRender(x,I,k,H,O,fe),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.transparent===!0&&O.side===xi&&O.forceSinglePass===!1?(O.side=dn,O.needsUpdate=!0,x.renderBufferDirect(k,I,H,O,M,fe),O.side=Xi,O.needsUpdate=!0,x.renderBufferDirect(k,I,H,O,M,fe),O.side=xi):x.renderBufferDirect(k,I,H,O,M,fe),M.onAfterRender(x,I,k,H,O,fe)}function Zr(M,I,k){I.isScene!==!0&&(I=Ye);const H=Ge.get(M),O=p.state.lights,fe=p.state.shadowsArray,ge=O.state.version,Ne=ie.getParameters(M,O.state,fe,I,k),we=ie.getProgramCacheKey(Ne);let Fe=H.programs;H.environment=M.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(M.isMeshStandardMaterial?y:b).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",Ce),Fe=new Map,H.programs=Fe);let ke=Fe.get(we);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===ge)return pu(M,Ne),ke}else Ne.uniforms=ie.getUniforms(M),M.onBeforeCompile(Ne,x),ke=ie.acquireProgram(Ne,we),Fe.set(we,ke),H.uniforms=Ne.uniforms;const Ue=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=qe.uniform),pu(M,Ne),H.needsLights=gm(M),H.lightsStateVersion=ge,H.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=ke,H.uniformsList=null,ke}function fu(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Do.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function pu(M,I){const k=Ge.get(M);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function pm(M,I,k,H,O){I.isScene!==!0&&(I=Ye),Xe.resetTextureUnits();const fe=I.fog,ge=H.isMeshStandardMaterial?I.environment:null,Ne=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:jn,we=(H.isMeshStandardMaterial?y:b).get(H.envMap||ge),Fe=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ke=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!k.morphAttributes.position,ct=!!k.morphAttributes.normal,Nt=!!k.morphAttributes.color;let bt=bn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(bt=x.toneMapping);const yn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ut=yn!==void 0?yn.length:0,Le=Ge.get(H),qt=p.state.lights;if(J===!0&&(ce===!0||M!==E)){const Cn=M===E&&H.id===U;qe.setState(H,M,Cn)}let ht=!1;H.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==qt.state.version||Le.outputColorSpace!==Ne||O.isBatchedMesh&&Le.batching===!1||!O.isBatchedMesh&&Le.batching===!0||O.isBatchedMesh&&Le.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Le.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Le.instancing===!1||!O.isInstancedMesh&&Le.instancing===!0||O.isSkinnedMesh&&Le.skinning===!1||!O.isSkinnedMesh&&Le.skinning===!0||O.isInstancedMesh&&Le.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Le.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Le.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Le.instancingMorph===!1&&O.morphTexture!==null||Le.envMap!==we||H.fog===!0&&Le.fog!==fe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==qe.numPlanes||Le.numIntersection!==qe.numIntersection)||Le.vertexAlphas!==Fe||Le.vertexTangents!==ke||Le.morphTargets!==Ue||Le.morphNormals!==ct||Le.morphColors!==Nt||Le.toneMapping!==bt||Le.morphTargetsCount!==ut)&&(ht=!0):(ht=!0,Le.__version=H.version);let Un=Le.currentProgram;ht===!0&&(Un=Zr(H,I,O));let Ms=!1,Mn=!1,Aa=!1;const Pt=Un.getUniforms(),Ii=Le.uniforms;if(Re.useProgram(Un.program)&&(Ms=!0,Mn=!0,Aa=!0),H.id!==U&&(U=H.id,Mn=!0),Ms||E!==M){Pt.setValue(w,"projectionMatrix",M.projectionMatrix),Pt.setValue(w,"viewMatrix",M.matrixWorldInverse);const Cn=Pt.map.cameraPosition;Cn!==void 0&&Cn.setValue(w,Se.setFromMatrixPosition(M.matrixWorld)),rt.logarithmicDepthBuffer&&Pt.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Pt.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Mn=!0,Aa=!0)}if(O.isSkinnedMesh){Pt.setOptional(w,O,"bindMatrix"),Pt.setOptional(w,O,"bindMatrixInverse");const Cn=O.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Pt.setValue(w,"boneTexture",Cn.boneTexture,Xe))}O.isBatchedMesh&&(Pt.setOptional(w,O,"batchingTexture"),Pt.setValue(w,"batchingTexture",O._matricesTexture,Xe),Pt.setOptional(w,O,"batchingIdTexture"),Pt.setValue(w,"batchingIdTexture",O._indirectTexture,Xe),Pt.setOptional(w,O,"batchingColorTexture"),O._colorsTexture!==null&&Pt.setValue(w,"batchingColorTexture",O._colorsTexture,Xe));const Na=k.morphAttributes;if((Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0)&&Qe.update(O,k,Un),(Mn||Le.receiveShadow!==O.receiveShadow)&&(Le.receiveShadow=O.receiveShadow,Pt.setValue(w,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ii.envMap.value=we,Ii.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Ii.envMapIntensity.value=I.environmentIntensity),Mn&&(Pt.setValue(w,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&mm(Ii,Aa),fe&&H.fog===!0&&Pe.refreshFogUniforms(Ii,fe),Pe.refreshMaterialUniforms(Ii,H,ne,Z,p.state.transmissionRenderTarget[M.id]),Do.upload(w,fu(Le),Ii,Xe)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Do.upload(w,fu(Le),Ii,Xe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Pt.setValue(w,"center",O.center),Pt.setValue(w,"modelViewMatrix",O.modelViewMatrix),Pt.setValue(w,"normalMatrix",O.normalMatrix),Pt.setValue(w,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Cn=H.uniformsGroups;for(let ba=0,_m=Cn.length;ba<_m;ba++){const mu=Cn[ba];Mt.update(mu,Un),Mt.bind(mu,Un)}}return Un}function mm(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function gm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,I,k){Ge.get(M.texture).__webglTexture=I,Ge.get(M.depthTexture).__webglTexture=k;const H=Ge.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const k=Ge.get(M);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,k=0){A=M,F=I,R=k;let H=!0,O=null,fe=!1,ge=!1;if(M){const we=Ge.get(M);we.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(w.FRAMEBUFFER,null),H=!1):we.__webglFramebuffer===void 0?Xe.setupRenderTarget(M):we.__hasExternalTextures&&Xe.rebindTextures(M,Ge.get(M.texture).__webglTexture,Ge.get(M.depthTexture).__webglTexture);const Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ge=!0);const ke=Ge.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ke[I])?O=ke[I][k]:O=ke[I],fe=!0):M.samples>0&&Xe.useMultisampledRTT(M)===!1?O=Ge.get(M).__webglMultisampledFramebuffer:Array.isArray(ke)?O=ke[k]:O=ke,S.copy(M.viewport),C.copy(M.scissor),Y=M.scissorTest}else S.copy(Ee).multiplyScalar(ne).floor(),C.copy(be).multiplyScalar(ne).floor(),Y=Je;if(Re.bindFramebuffer(w.FRAMEBUFFER,O)&&H&&Re.drawBuffers(M,O),Re.viewport(S),Re.scissor(C),Re.setScissorTest(Y),fe){const we=Ge.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,we.__webglTexture,k)}else if(ge){const we=Ge.get(M.texture),Fe=I||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,we.__webglTexture,k||0,Fe)}U=-1},this.readRenderTargetPixels=function(M,I,k,H,O,fe,ge){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(Ne=Ne[ge]),Ne){Re.bindFramebuffer(w.FRAMEBUFFER,Ne);try{const we=M.texture,Fe=we.format,ke=we.type;if(!rt.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-H&&k>=0&&k<=M.height-O&&w.readPixels(I,k,H,O,Be.convert(Fe),Be.convert(ke),fe)}finally{const we=A!==null?Ge.get(A).__webglFramebuffer:null;Re.bindFramebuffer(w.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,I,k,H,O,fe,ge){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(Ne=Ne[ge]),Ne){Re.bindFramebuffer(w.FRAMEBUFFER,Ne);try{const we=M.texture,Fe=we.format,ke=we.type;if(!rt.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-H&&k>=0&&k<=M.height-O){const Ue=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ue),w.bufferData(w.PIXEL_PACK_BUFFER,fe.byteLength,w.STREAM_READ),w.readPixels(I,k,H,O,Be.convert(Fe),Be.convert(ke),0),w.flush();const ct=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await Mg(w,ct,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,Ue),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,fe)}finally{w.deleteBuffer(Ue),w.deleteSync(ct)}return fe}}finally{const we=A!==null?Ge.get(A).__webglFramebuffer:null;Re.bindFramebuffer(w.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(M,I=null,k=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const H=Math.pow(2,-k),O=Math.floor(M.image.width*H),fe=Math.floor(M.image.height*H),ge=I!==null?I.x:0,Ne=I!==null?I.y:0;Xe.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,k,0,0,ge,Ne,O,fe),Re.unbindTexture()},this.copyTextureToTexture=function(M,I,k=null,H=null,O=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],I=arguments[2],O=arguments[3]||0,k=null);let fe,ge,Ne,we,Fe,ke;k!==null?(fe=k.max.x-k.min.x,ge=k.max.y-k.min.y,Ne=k.min.x,we=k.min.y):(fe=M.image.width,ge=M.image.height,Ne=0,we=0),H!==null?(Fe=H.x,ke=H.y):(Fe=0,ke=0);const Ue=Be.convert(I.format),ct=Be.convert(I.type);Xe.setTexture2D(I,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const Nt=w.getParameter(w.UNPACK_ROW_LENGTH),bt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),yn=w.getParameter(w.UNPACK_SKIP_PIXELS),ut=w.getParameter(w.UNPACK_SKIP_ROWS),Le=w.getParameter(w.UNPACK_SKIP_IMAGES),qt=M.isCompressedTexture?M.mipmaps[O]:M.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,qt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,qt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ne),w.pixelStorei(w.UNPACK_SKIP_ROWS,we),M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,O,Fe,ke,fe,ge,Ue,ct,qt.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,O,Fe,ke,qt.width,qt.height,Ue,qt.data):w.texSubImage2D(w.TEXTURE_2D,O,Fe,ke,fe,ge,Ue,ct,qt),w.pixelStorei(w.UNPACK_ROW_LENGTH,Nt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,bt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,yn),w.pixelStorei(w.UNPACK_SKIP_ROWS,ut),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Le),O===0&&I.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(M,I,k=null,H=null,O=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,M=arguments[2],I=arguments[3],O=arguments[4]||0);let fe,ge,Ne,we,Fe,ke,Ue,ct,Nt;const bt=M.isCompressedTexture?M.mipmaps[O]:M.image;k!==null?(fe=k.max.x-k.min.x,ge=k.max.y-k.min.y,Ne=k.max.z-k.min.z,we=k.min.x,Fe=k.min.y,ke=k.min.z):(fe=bt.width,ge=bt.height,Ne=bt.depth,we=0,Fe=0,ke=0),H!==null?(Ue=H.x,ct=H.y,Nt=H.z):(Ue=0,ct=0,Nt=0);const yn=Be.convert(I.format),ut=Be.convert(I.type);let Le;if(I.isData3DTexture)Xe.setTexture3D(I,0),Le=w.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)Xe.setTexture2DArray(I,0),Le=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const qt=w.getParameter(w.UNPACK_ROW_LENGTH),ht=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Un=w.getParameter(w.UNPACK_SKIP_PIXELS),Ms=w.getParameter(w.UNPACK_SKIP_ROWS),Mn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,bt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,bt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,we),w.pixelStorei(w.UNPACK_SKIP_ROWS,Fe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ke),M.isDataTexture||M.isData3DTexture?w.texSubImage3D(Le,O,Ue,ct,Nt,fe,ge,Ne,yn,ut,bt.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(Le,O,Ue,ct,Nt,fe,ge,Ne,yn,bt.data):w.texSubImage3D(Le,O,Ue,ct,Nt,fe,ge,Ne,yn,ut,bt),w.pixelStorei(w.UNPACK_ROW_LENGTH,qt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ht),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Un),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ms),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Mn),O===0&&I.generateMipmaps&&w.generateMipmap(Le),Re.unbindTexture()},this.initRenderTarget=function(M){Ge.get(M).__webglFramebuffer===void 0&&Xe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Xe.setTextureCube(M,0):M.isData3DTexture?Xe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Xe.setTexture2DArray(M,0):Xe.setTexture2D(M,0),Re.unbindTexture()},this.resetState=function(){F=0,R=0,A=null,Re.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Cc?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===ra?"display-p3":"srgb"}}class Ry extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ic("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new L;class Vc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Vc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cy extends rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Gd extends wn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Wd extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class Xd extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class $d extends sn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=tn,this.minFilter=tn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Ly extends rn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ie(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Py extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qd extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bi,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Iy extends qd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Dy extends rn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bi,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uy extends rn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bi,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Oy extends rn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bi,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Fy extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bi,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=na,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zy extends rn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ie(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bi,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yd extends Wd{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const dh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class By{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Vy=new By;class kc{constructor(e){this.manager=e!==void 0?e:Vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}kc.DEFAULT_MATERIAL_NAME="__DEFAULT";class ky extends kc{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=dh.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Dr("img");function l(){u(),dh.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Hy extends kc{constructor(e){super(e)}load(e,t,n,s){const r=new sn,o=new ky(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class dr extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Gy extends dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const el=new _t,fh=new L,ph=new L;class Hc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fc,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(fh),ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ph),t.updateMatrixWorld(),el.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(el),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(el)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wy extends Hc{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=rr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jd extends dr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const mh=new _t,Mr=new L,tl=new L;class Xy extends Hc{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mr),tl.copy(n.position),tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(tl),n.updateMatrixWorld(),s.makeTranslation(-Mr.x,-Mr.y,-Mr.z),mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh)}}class $y extends dr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qy extends Hc{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yy extends dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new qy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jy extends dr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ky extends dr{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Zy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gh(){return(typeof performance>"u"?Date:performance).now()}class Jy extends Hd{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class _h{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);const vh={type:"change"},nl={type:"start"},xh={type:"end"},So=new Rd,yh=new vi,Qy=Math.cos(70*Pc.DEG2RAD);class eM extends Li{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ss.ROTATE,MIDDLE:Ss.DOLLY,RIGHT:Ss.PAN},this.touches={ONE:Ts.ROTATE,TWO:Ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",_e),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vh),n.update(),r=s.NONE},this.update=function(){const v=new L,z=new fs().setFromUnitVectors(e.up,new L(0,1,0)),V=z.clone().invert(),$=new L,oe=new fs,Ce=new L,Ve=2*Math.PI;return function(Ot=null){const et=n.object.position;v.copy(et).sub(n.target),v.applyQuaternion(z),a.setFromVector3(v),n.autoRotate&&r===s.NONE&&Y(S(Ot)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ft=n.minAzimuthAngle,Lt=n.maxAzimuthAngle;isFinite(Ft)&&isFinite(Lt)&&(Ft<-Math.PI?Ft+=Ve:Ft>Math.PI&&(Ft-=Ve),Lt<-Math.PI?Lt+=Ve:Lt>Math.PI&&(Lt-=Ve),Ft<=Lt?a.theta=Math.max(Ft,Math.min(Lt,a.theta)):a.theta=a.theta>(Ft+Lt)/2?Math.max(Ft,a.theta):Math.min(Lt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Pi=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)a.radius=Ee(a.radius);else{const $t=a.radius;a.radius=Ee(a.radius*c),Pi=$t!=a.radius}if(v.setFromSpherical(a),v.applyQuaternion(V),et.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&R){let $t=null;if(n.object.isPerspectiveCamera){const ui=v.length();$t=Ee(ui*c);const Zi=ui-$t;n.object.position.addScaledVector(N,Zi),n.object.updateMatrixWorld(),Pi=!!Zi}else if(n.object.isOrthographicCamera){const ui=new L(F.x,F.y,0);ui.unproject(n.object);const Zi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Pi=Zi!==n.object.zoom;const gr=new L(F.x,F.y,0);gr.unproject(n.object),n.object.position.sub(gr).add(ui),n.object.updateMatrixWorld(),$t=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;$t!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar($t).add(n.object.position):(So.origin.copy(n.object.position),So.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(So.direction))<Qy?e.lookAt(n.target):(yh.setFromNormalAndCoplanarPoint(n.object.up,n.target),So.intersectPlane(yh,n.target))))}else if(n.object.isOrthographicCamera){const $t=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),$t!==n.object.zoom&&(n.object.updateProjectionMatrix(),Pi=!0)}return c=1,R=!1,Pi||$.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o||Ce.distanceToSquared(n.target)>o?(n.dispatchEvent(vh),$.copy(n.object.position),oe.copy(n.object.quaternion),Ce.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ve),n.domElement.removeEventListener("pointerdown",Xe),n.domElement.removeEventListener("pointercancel",y),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",y),n.domElement.getRootNode().removeEventListener("keydown",Pe,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_e),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new _h,l=new _h;let c=1;const u=new L,d=new xe,h=new xe,m=new xe,g=new xe,_=new xe,p=new xe,f=new xe,T=new xe,x=new xe,N=new L,F=new xe;let R=!1;const A=[],U={};let E=!1;function S(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function C(v){const z=Math.abs(v*.01);return Math.pow(.95,n.zoomSpeed*z)}function Y(v){l.theta-=v}function X(v){l.phi-=v}const te=function(){const v=new L;return function(V,$){v.setFromMatrixColumn($,0),v.multiplyScalar(-V),u.add(v)}}(),ee=function(){const v=new L;return function(V,$){n.screenSpacePanning===!0?v.setFromMatrixColumn($,1):(v.setFromMatrixColumn($,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(V),u.add(v)}}(),Z=function(){const v=new L;return function(V,$){const oe=n.domElement;if(n.object.isPerspectiveCamera){const Ce=n.object.position;v.copy(Ce).sub(n.target);let Ve=v.length();Ve*=Math.tan(n.object.fov/2*Math.PI/180),te(2*V*Ve/oe.clientHeight,n.object.matrix),ee(2*$*Ve/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(te(V*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),ee($*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ne(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ye(v,z){if(!n.zoomToCursor)return;R=!0;const V=n.domElement.getBoundingClientRect(),$=v-V.left,oe=z-V.top,Ce=V.width,Ve=V.height;F.x=$/Ce*2-1,F.y=-(oe/Ve)*2+1,N.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function Ee(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function be(v){d.set(v.clientX,v.clientY)}function Je(v){ye(v.clientX,v.clientX),f.set(v.clientX,v.clientY)}function st(v){g.set(v.clientX,v.clientY)}function J(v){h.set(v.clientX,v.clientY),m.subVectors(h,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;Y(2*Math.PI*m.x/z.clientHeight),X(2*Math.PI*m.y/z.clientHeight),d.copy(h),n.update()}function ce(v){T.set(v.clientX,v.clientY),x.subVectors(T,f),x.y>0?ne(C(x.y)):x.y<0&&j(C(x.y)),f.copy(T),n.update()}function Ae(v){_.set(v.clientX,v.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),Z(p.x,p.y),g.copy(_),n.update()}function Se(v){ye(v.clientX,v.clientY),v.deltaY<0?j(C(v.deltaY)):v.deltaY>0&&ne(C(v.deltaY)),n.update()}function $e(v){let z=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(-n.keyPanSpeed,0),z=!0;break}z&&(v.preventDefault(),n.update())}function Ye(v){if(A.length===1)d.set(v.pageX,v.pageY);else{const z=We(v),V=.5*(v.pageX+z.x),$=.5*(v.pageY+z.y);d.set(V,$)}}function Ze(v){if(A.length===1)g.set(v.pageX,v.pageY);else{const z=We(v),V=.5*(v.pageX+z.x),$=.5*(v.pageY+z.y);g.set(V,$)}}function vt(v){const z=We(v),V=v.pageX-z.x,$=v.pageY-z.y,oe=Math.sqrt(V*V+$*$);f.set(0,oe)}function w(v){n.enableZoom&&vt(v),n.enablePan&&Ze(v)}function Et(v){n.enableZoom&&vt(v),n.enableRotate&&Ye(v)}function nt(v){if(A.length==1)h.set(v.pageX,v.pageY);else{const V=We(v),$=.5*(v.pageX+V.x),oe=.5*(v.pageY+V.y);h.set($,oe)}m.subVectors(h,d).multiplyScalar(n.rotateSpeed);const z=n.domElement;Y(2*Math.PI*m.x/z.clientHeight),X(2*Math.PI*m.y/z.clientHeight),d.copy(h)}function rt(v){if(A.length===1)_.set(v.pageX,v.pageY);else{const z=We(v),V=.5*(v.pageX+z.x),$=.5*(v.pageY+z.y);_.set(V,$)}p.subVectors(_,g).multiplyScalar(n.panSpeed),Z(p.x,p.y),g.copy(_)}function Re(v){const z=We(v),V=v.pageX-z.x,$=v.pageY-z.y,oe=Math.sqrt(V*V+$*$);T.set(0,oe),x.set(0,Math.pow(T.y/f.y,n.zoomSpeed)),ne(x.y),f.copy(T);const Ce=(v.pageX+z.x)*.5,Ve=(v.pageY+z.y)*.5;ye(Ce,Ve)}function At(v){n.enableZoom&&Re(v),n.enablePan&&rt(v)}function Ge(v){n.enableZoom&&Re(v),n.enableRotate&&nt(v)}function Xe(v){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",y)),!Te(v)&&(Qe(v),v.pointerType==="touch"?qe(v):G(v)))}function b(v){n.enabled!==!1&&(v.pointerType==="touch"?ue(v):re(v))}function y(v){switch(Oe(v),A.length){case 0:n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",y),n.dispatchEvent(xh),r=s.NONE;break;case 1:const z=A[0],V=U[z];qe({pointerId:z,pageX:V.x,pageY:V.y});break}}function G(v){let z;switch(v.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case Ss.DOLLY:if(n.enableZoom===!1)return;Je(v),r=s.DOLLY;break;case Ss.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;st(v),r=s.PAN}else{if(n.enableRotate===!1)return;be(v),r=s.ROTATE}break;case Ss.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;be(v),r=s.ROTATE}else{if(n.enablePan===!1)return;st(v),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(nl)}function re(v){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;J(v);break;case s.DOLLY:if(n.enableZoom===!1)return;ce(v);break;case s.PAN:if(n.enablePan===!1)return;Ae(v);break}}function ae(v){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(v.preventDefault(),n.dispatchEvent(nl),Se(ie(v)),n.dispatchEvent(xh))}function ie(v){const z=v.deltaMode,V={clientX:v.clientX,clientY:v.clientY,deltaY:v.deltaY};switch(z){case 1:V.deltaY*=16;break;case 2:V.deltaY*=100;break}return v.ctrlKey&&!E&&(V.deltaY*=10),V}function Pe(v){v.key==="Control"&&(E=!0,n.domElement.getRootNode().addEventListener("keyup",me,{passive:!0,capture:!0}))}function me(v){v.key==="Control"&&(E=!1,n.domElement.getRootNode().removeEventListener("keyup",me,{passive:!0,capture:!0}))}function _e(v){n.enabled===!1||n.enablePan===!1||$e(v)}function qe(v){switch(Be(v),A.length){case 1:switch(n.touches.ONE){case Ts.ROTATE:if(n.enableRotate===!1)return;Ye(v),r=s.TOUCH_ROTATE;break;case Ts.PAN:if(n.enablePan===!1)return;Ze(v),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Ts.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;w(v),r=s.TOUCH_DOLLY_PAN;break;case Ts.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Et(v),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(nl)}function ue(v){switch(Be(v),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;nt(v),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;rt(v),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;At(v),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ge(v),n.update();break;default:r=s.NONE}}function ve(v){n.enabled!==!1&&v.preventDefault()}function Qe(v){A.push(v.pointerId)}function Oe(v){delete U[v.pointerId];for(let z=0;z<A.length;z++)if(A[z]==v.pointerId){A.splice(z,1);return}}function Te(v){for(let z=0;z<A.length;z++)if(A[z]==v.pointerId)return!0;return!1}function Be(v){let z=U[v.pointerId];z===void 0&&(z=new xe,U[v.pointerId]=z),z.set(v.pageX,v.pageY)}function We(v){const z=v.pointerId===A[0]?A[1]:A[0];return U[z]}n.domElement.addEventListener("contextmenu",ve),n.domElement.addEventListener("pointerdown",Xe),n.domElement.addEventListener("pointercancel",y),n.domElement.addEventListener("wheel",ae,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Pe,{passive:!0,capture:!0}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class ri{constructor(e,t,n,s,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),ri.nextNameID=ri.nextNameID||0,this.$name.id=`lil-gui-name-${++ri.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class tM extends ri{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ic(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const nM={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:ic,toHexString:ic},Ur={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},iM={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,e,t=1){const n=Ur.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([i,e,t],n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return Ur.toHexString(s)}},sM={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Ur.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:i,g:e,b:t},n=1){n=255/n;const s=i*n<<16^e*n<<8^t*n<<0;return Ur.toHexString(s)}},rM=[nM,Ur,iM,sM];function oM(i){return rM.find(e=>e.match(i))}class aM extends ri{constructor(e,t,n,s){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=oM(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=ic(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class il extends ri{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class lM extends ri{constructor(e,t,n,s,r,o){super(e,t,n,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let T=parseFloat(this.$input.value);isNaN(T)||(this._stepExplicit&&(T=this._snap(T)),this.setValue(this._clamp(T)))},n=T=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+T),this.$input.value=this.getValue())},s=T=>{T.key==="Enter"&&this.$input.blur(),T.code==="ArrowUp"&&(T.preventDefault(),n(this._step*this._arrowKeyMultiplier(T))),T.code==="ArrowDown"&&(T.preventDefault(),n(this._step*this._arrowKeyMultiplier(T)*-1))},r=T=>{this._inputFocused&&(T.preventDefault(),n(this._step*this._normalizeMouseWheel(T)))};let o=!1,a,l,c,u,d;const h=5,m=T=>{a=T.clientX,l=c=T.clientY,o=!0,u=this.getValue(),d=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=T=>{if(o){const x=T.clientX-a,N=T.clientY-l;Math.abs(N)>h?(T.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>h&&_()}if(!o){const x=T.clientY-c;d-=x*this._step*this._arrowKeyMultiplier(T),u+d>this._max?d=this._max-u:u+d<this._min&&(d=this._min-u),this._snapClampSetValue(u+d)}c=T.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},p=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,T,x,N,F)=>(f-T)/(x-T)*(F-N)+N,t=f=>{const T=this.$slider.getBoundingClientRect();let x=e(f,T.left,T.right,this._min,this._max);this._snapClampSetValue(x)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=f=>{t(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),o=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,l=f.touches[0].clientY,o=!0):c(f),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",h))},d=f=>{if(o){const T=f.touches[0].clientX-a,x=f.touches[0].clientY-l;Math.abs(T)>Math.abs(x)?c(f):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h))}else f.preventDefault(),t(f.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",h)},m=this._callOnFinishChange.bind(this),g=400;let _;const p=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const x=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(m,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class cM extends ri{constructor(e,t,n,s){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class uM extends ri{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const hM=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function dM(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Mh=!1;class Gc{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Mh&&a&&(dM(hM),Mh=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,n,s,r){if(Object(n)===n)return new cM(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new lM(this,e,t,n,s,r);case"boolean":return new tM(this,e,t);case"string":return new uM(this,e,t);case"function":return new il(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new aM(this,e,t,n)}addFolder(e){const t=new Gc({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof il||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof il)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class fM extends jd{constructor(e,t,n,s,r,o){super(e,t,n,s,r,o),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}var pM=`uniform mat4 projectionMatrix;\r
uniform mat4 viewMatrix;\r
uniform mat4 modelMatrix;\r
uniform vec2 uFrequency;\r
uniform float uTime;

attribute vec2 uv; 

attribute vec3 position;

varying vec2 vUv;\r
varying float vElevation;\r
void main()\r
{\r
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\r
    modelPosition.z += sin(modelPosition.x * uFrequency.x - uTime) * 0.1 ;\r
    modelPosition.z += sin(modelPosition.y * uFrequency.y - uTime) * 0.1 ;

    float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;\r
    elevation += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;\r
    \r
    modelPosition.z += elevation;\r

    vec4 viewPosition = viewMatrix * modelPosition;\r
    vec4 projectedPosition = projectionMatrix * viewPosition;\r
    \r
    gl_Position = projectedPosition;

    vUv = uv;\r
    vElevation = elevation;\r
  
}`,mM=`precision mediump float;

uniform sampler2D uTexture;\r
uniform vec3 uColor;

varying vec2 vUv;

varying float vElevation;

void main (){

    vec4 textureColor = texture2D(uTexture, vUv );\r
    textureColor.rgb *= vElevation * 3.0 + 1.0;\r
    gl_FragColor = textureColor;\r
}`;const Sh={VERTEX:"vertex",FRAGMENT:"fragment"},it={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},aa=["x","y","z","w"];function Kd(i,e=!1){let t="{";i.isNode===!0&&(t+=i.id);for(const{property:n,childNode:s}of Xo(i))t+=","+n.slice(0,-4)+":"+s.getCacheKey(e);return t+="}",t}function*Xo(i,e=!1){for(const t in i){if(t.startsWith("_")===!0)continue;const n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const s in n){const r=n[s];r&&(r.isNode===!0||e&&typeof r.toJSON=="function")&&(yield{property:t,index:s,childNode:r})}}}function Gi(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function Zd(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new Ie(...e):t==="vec2"?new xe(...e):t==="vec3"?new L(...e):t==="vec4"?new tt(...e):t==="mat3"?new je(...e):t==="mat4"?new _t(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?Qd(e[0]):null}function Jd(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function Qd(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}const Th=new Map;let gM=0;class De extends Li{constructor(e=null){super(),this.nodeType=e,this.updateType=it.NONE,this.updateBeforeType=it.NONE,this.updateAfterType=it.NONE,this.uuid=Pc.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.global=!1,this.isNode=!0,Object.defineProperty(this,"id",{value:gM++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,it.FRAME)}onRenderUpdate(e){return this.onUpdate(e,it.RENDER)}onObjectUpdate(e){return this.onUpdate(e,it.OBJECT)}onReference(e){return this.updateReference=e.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return this.global}*getChildren(){for(const{childNode:e}of Xo(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=Kd(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getUpdateAfterType(){return this.updateAfterType}getElementType(e){const t=this.getNodeType(e);return e.getElementType(t)}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);let n=0;for(const s of this.getChildren())t["node"+n++]=s;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}updateAfter(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null;const r=e.getBuildStage();if(r==="setup"){this.updateReference(e);const o=e.getNodeProperties(this);if(o.initialized!==!0){const a=e.stack.nodes.length;o.initialized=!0,o.outputNode=this.setup(e),o.outputNode!==null&&e.stack.nodes.length!==a&&(o.outputNode=e.stack);for(const l of Object.values(o))l&&l.isNode===!0&&l.build(e)}}else if(r==="analyze")this.analyze(e);else if(r==="generate")if(this.generate.length===1){const a=this.getNodeType(e),l=e.getDataFromNode(this);s=l.snippet,s===void 0&&(s=this.generate(e)||"",l.snippet=s),s=e.format(s,a,t)}else s=this.generate(e,t)||"";return e.removeChain(this),s}getSerializeChildren(){return Xo(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:r,childNode:o}of t)r!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(r)?[]:{}),n[s][r]=o.toJSON(e.meta).uuid):n[s]=o.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const r of e.inputNodes[n])s.push(t[r]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const r in e.inputNodes[n]){const o=e.inputNodes[n][r];s[r]=t[o]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let r=e.nodes[t];r===void 0&&(r={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[r.uuid]=r),this.serialize(r),delete r.meta);function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}if(s){const a=o(e.textures),l=o(e.images),c=o(e.nodes);a.length>0&&(r.textures=a),l.length>0&&(r.images=l),c.length>0&&(r.nodes=c)}return r}}function Q(i,e){if(typeof e!="function"||!i)throw new Error(`Node class ${i} is not a class`);if(Th.has(i)){console.warn(`Redefinition of node class ${i}`);return}Th.set(i,e),e.type=i}class at extends De{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),r=e.getDataFromNode(this);if(r.propertyName!==void 0)return e.format(r.propertyName,s,t);if(s!=="void"&&t!=="void"&&this.hasDependencies(e)){const o=super.build(e,s),a=e.getVarFromNode(this,null,s),l=e.getPropertyName(a);return e.addLineFlowCode(`${l} = ${o}`),r.snippet=o,r.propertyName=l,e.format(r.propertyName,s,t)}}return super.build(e,t)}}Q("TempNode",at);class fr extends De{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}Q("ArrayElementNode",fr);class Wc extends De{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),r=n.build(e,s);return e.format(r,s,t)}}Q("ConvertNode",Wc);class ef extends at{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=this.nodes,r=e.getComponentType(n),o=[];for(const l of s){let c=l.build(e);const u=e.getComponentType(l.getNodeType(e));u!==r&&(c=e.format(c,u,r)),o.push(c)}const a=`${e.getType(n)}( ${o.join(", ")} )`;return e.format(a,n,t)}}Q("JoinNode",ef);const _M=aa.join("");class sc extends De{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(aa.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let r=null;if(s>1){let o=null;this.getVectorLength()>=s&&(o=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const l=n.build(e,o);this.components.length===s&&this.components===_M.slice(0,this.components.length)?r=e.format(l,o,t):r=e.format(`${l}.${this.components}`,this.getNodeType(e),t)}else r=n.build(e,t);return r}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}Q("SplitNode",sc);class tf extends at{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,r=this.getNodeType(e),o=e.getTypeFromLength(n.length),a=s.build(e,o),l=t.build(e,r),c=e.getTypeLength(r),u=[];for(let d=0;d<c;d++){const h=aa[d];h===n[0]?(u.push(a),d+=n.length-1):u.push(l+"."+h)}return`${e.getType(r)}( ${u.join(", ")} )`}}Q("SetNode",tf);class la extends De{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?Gi(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=Gi(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=Jd(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?Zd(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}Q("InputNode",la);class ci extends la{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}Q("ConstNode",ci);let ar=null;const Hs=new Map;function D(i,e){if(Hs.has(i)){console.warn(`Redefinition of node element ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);Hs.set(i,e)}const Eh=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),nf={setup(i,e){const t=e.shift();return i(ha(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(ar.assign(t,...n),t);if(Hs.has(e)){const n=Hs.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&Hs.has(e.slice(0,e.length-6))){const n=Hs.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=Eh(e),le(new sc(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=Eh(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>le(new tf(i,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),le(new sc(i,e));if(/^\d+$/.test(e)===!0)return le(new fr(t,new ci(Number(e),"uint")))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},sl=new WeakMap,Ah=new WeakMap,vM=function(i,e=null){const t=Gi(i);if(t==="node"){let n=sl.get(i);return n===void 0&&(n=new Proxy(i,nf),sl.set(i,n),sl.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return le(rc(i,e));if(t==="shader")return he(i)}return i},xM=function(i,e=null){for(const t in i)i[t]=le(i[t],e);return i},yM=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=le(i[n],e);return i},MM=function(i,e=null,t=null,n=null){const s=r=>le(n!==null?Object.assign(r,n):r);return e===null?(...r)=>s(new i(...Ys(r))):t!==null?(t=le(t),(...r)=>s(new i(e,...Ys(r),t))):(...r)=>s(new i(e,...Ys(r)))},SM=function(i,...e){return le(new i(...Ys(e)))};class TM extends De{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode===null&&(t.outputNode=this.setupOutput(e)),t.outputNode.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let o=Ah.get(e.constructor);o===void 0&&(o=new WeakMap,Ah.set(e.constructor,o));let a=o.get(t);return a===void 0&&(a=le(e.buildFunctionNode(t)),o.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),le(a.call(n))}const s=t.jsFunc,r=n!==null?s(n,e.stack,e):s(e.stack,e);return le(r)}setup(e){const{outputNode:t}=e.getNodeProperties(this);return t||this.setupOutput(e)}setupOutput(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class EM extends De{constructor(e){super(),this.jsFunc=e,this.layout=null,this.global=!0}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return ha(e),le(new TM(this,e))}setup(){return this.call()}}const AM=[!1,!0],NM=[0,1,2,3],bM=[-1,-2],sf=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],Xc=new Map;for(const i of AM)Xc.set(i,new ci(i));const $c=new Map;for(const i of NM)$c.set(i,new ci(i,"uint"));const qc=new Map([...$c].map(i=>new ci(i.value,"int")));for(const i of bM)qc.set(i,new ci(i,"int"));const ca=new Map([...qc].map(i=>new ci(i.value)));for(const i of sf)ca.set(i,new ci(i));for(const i of sf)ca.set(-i,new ci(-i));const ua={bool:Xc,uint:$c,ints:qc,float:ca},Nh=new Map([...Xc,...ca]),rc=(i,e)=>Nh.has(i)?Nh.get(i):i.isNode===!0?i:new ci(i,e),wM=i=>{try{return i.getNodeType()}catch{return}},mt=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[Zd(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return le(e.get(t[0]));if(t.length===1){const s=rc(t[0],i);return wM(s)===i?le(s):le(new Wc(s,i))}const n=t.map(s=>rc(s));return le(new ef(n,i))}},bh=i=>i&&i.value,RM=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function Lr(i){return new Proxy(new EM(i),nf)}const le=(i,e=null)=>vM(i,e),ha=(i,e=null)=>new xM(i,e),Ys=(i,e=null)=>new yM(i,e),B=(...i)=>new MM(...i),de=(...i)=>new SM(...i),he=i=>{const e=new Lr(i),t=(...n)=>{let s;return ha(n),n[0]&&n[0].isNode?s=[...n]:s=n[0],e.call(s)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};Q("ShaderNode",Lr);D("toGlobal",i=>(i.global=!0,i));const wh=i=>{ar=i},CM=()=>ar,Ct=(...i)=>ar.if(...i);function LM(i){return ar&&ar.add(i),i}D("append",LM);const PM=new mt("color"),K=new mt("float",ua.float),zt=new mt("int",ua.ints),IM=new mt("uint",ua.uint),DM=new mt("bool",ua.bool),se=new mt("vec2"),ki=new mt("ivec2"),UM=new mt("uvec2"),OM=new mt("bvec2"),W=new mt("vec3"),FM=new mt("ivec3"),zM=new mt("uvec3"),BM=new mt("bvec3"),Me=new mt("vec4"),VM=new mt("ivec4"),kM=new mt("uvec4"),HM=new mt("bvec4"),Yc=new mt("mat2"),GM=new mt("imat2"),WM=new mt("umat2"),XM=new mt("bmat2"),on=new mt("mat3"),$M=new mt("imat3"),qM=new mt("umat3"),YM=new mt("bmat3"),js=new mt("mat4"),jM=new mt("imat4"),KM=new mt("umat4"),ZM=new mt("bmat4");D("toColor",PM);D("toFloat",K);D("toInt",zt);D("toUint",IM);D("toBool",DM);D("toVec2",se);D("toIvec2",ki);D("toUvec2",UM);D("toBvec2",OM);D("toVec3",W);D("toIvec3",FM);D("toUvec3",zM);D("toBvec3",BM);D("toVec4",Me);D("toIvec4",VM);D("toUvec4",kM);D("toBvec4",HM);D("toMat2",Yc);D("toImat2",GM);D("toUmat2",WM);D("toBmat2",XM);D("toMat3",on);D("toImat3",$M);D("toUmat3",qM);D("toBmat3",YM);D("toMat4",js);D("toImat4",jM);D("toUmat4",KM);D("toBmat4",ZM);const JM=B(fr),QM=(i,e)=>le(new Wc(le(i),e));D("element",JM);D("convert",QM);class rf extends at{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return aa.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:s}=this,r=this.needsSplitAssign(e),o=n.getNodeType(e),a=n.context({assign:!0}).build(e),l=s.build(e,o),c=s.getNodeType(e),u=e.getDataFromNode(this);let d;if(u.initialized===!0)t!=="void"&&(d=a);else if(r){const h=e.getVarFromNode(this,null,o),m=e.getPropertyName(h);e.addLineFlowCode(`${m} = ${l}`);const g=n.node.context({assign:!0}).build(e);for(let _=0;_<n.components.length;_++){const p=n.components[_];e.addLineFlowCode(`${g}.${p} = ${m}[ ${_} ]`)}t!=="void"&&(d=a)}else d=`${a} = ${l}`,(t==="void"||c==="void")&&(e.addLineFlowCode(d),t!=="void"&&(d=a));return u.initialized=!0,e.format(d,o,t)}}const eS=B(rf);Q("AssignNode",rf);D("assign",eS);class of extends De{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}setupVarying(e){const t=e.getNodeProperties(this);let n=t.varying;if(n===void 0){const s=this.name,r=this.getNodeType(e);t.varying=n=e.getVaryingFromNode(this,s,r),t.node=this.node}return n.needsInterpolation||(n.needsInterpolation=e.shaderStage==="fragment"),n}setup(e){this.setupVarying(e)}analyze(e){return this.setupVarying(e),this.node.analyze(e)}generate(e){const t=e.getNodeProperties(this),n=this.setupVarying(e);if(t.propertyName===void 0){const s=this.getNodeType(e),r=e.getPropertyName(n,Sh.VERTEX);e.flowNodeFromShaderStage(Sh.VERTEX,this.node,s,r),t.propertyName=r}return e.getPropertyName(n)}}const Dt=B(of);D("varying",Dt);Q("VaryingNode",of);class jc extends De{constructor(e,t=null,n=null){super(t),this.defaultNode=n,this.global=!0,this._attributeName=e}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const r=e.geometry.getAttribute(t),o=e.getTypeFromAttribute(r),a=e.getAttribute(t,o);return e.shaderStage==="vertex"?e.format(a.name,o,n):Dt(this).build(e,n)}else{console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`);const{defaultNode:r}=this;return r!==null?r.build(e,n):e.generateConst(n)}}}const en=(i,e,t)=>le(new jc(i,e,le(t)));Q("AttributeNode",jc);class af extends De{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const lf=B(af);D("bypass",lf);Q("BypassNode",af);class cf extends De{constructor(e,t=!0){super(),this.node=e,this.parent=t,this.isCacheNode=!0}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),s=e.getCacheFromNode(this,parent);e.setCache(s);const r=this.node.build(e,...t);return e.setCache(n),r}}const Uo=(i,...e)=>le(new cf(le(i),...e));D("cache",Uo);Q("CacheNode",cf);class Kc extends De{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}analyze(e){this.node.build(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const s=this.node.build(e,t);return e.setContext(n),s}}const Pr=B(Kc),tS=(i,e)=>Pr(i,{label:e});D("context",Pr);D("label",tS);Q("ContextNode",Kc);class mn extends De{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===mn.VERTEX)s=e.getVertexIndex();else if(n===mn.INSTANCE)s=e.getInstanceIndex();else if(n===mn.DRAW)s=e.getDrawIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let r;return e.shaderStage==="vertex"||e.shaderStage==="compute"?r=s:r=Dt(this).build(e,t),r}}mn.VERTEX="vertex";mn.INSTANCE="instance";mn.DRAW="draw";const nS=de(mn,mn.VERTEX),Zc=de(mn,mn.INSTANCE),iS=de(mn,mn.DRAW);Q("IndexNode",mn);class da{start(){}finish(){}direct(){}directRectArea(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class uf extends De{constructor(e,t=null){super(),this.node=e,this.name=t,this.global=!0,this.isVarNode=!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,s=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),r=e.getPropertyName(s),o=t.build(e,s.type);return e.addLineFlowCode(`${r} = ${o}`),r}}const $o=B(uf);D("temp",$o);D("toVar",(...i)=>$o(...i).append());Q("VarNode",uf);class lt extends De{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const Tt=(i,e)=>le(new lt(i,e)),Kn=(i,e)=>le(new lt(i,e,!0)),gt=de(lt,"vec4","DiffuseColor"),yi=de(lt,"float","Roughness"),qo=de(lt,"float","Metalness"),oc=de(lt,"float","Clearcoat"),Yo=de(lt,"float","ClearcoatRoughness"),Gs=de(lt,"vec3","Sheen"),Jc=de(lt,"float","SheenRoughness"),Qc=de(lt,"float","Iridescence"),hf=de(lt,"float","IridescenceIOR"),df=de(lt,"float","IridescenceThickness"),ac=de(lt,"float","AlphaT"),as=de(lt,"float","Anisotropy"),Oo=de(lt,"vec3","AnisotropyT"),Ks=de(lt,"vec3","AnisotropyB"),An=de(lt,"color","SpecularColor"),jo=de(lt,"float","SpecularF90"),lc=de(lt,"float","Shininess"),sS=de(lt,"vec4","Output"),Zs=de(lt,"float","dashSize"),Ko=de(lt,"float","gapSize");de(lt,"float","pointWidth");const Fo=de(lt,"float","IOR"),cc=de(lt,"float","Transmission"),ff=de(lt,"float","Thickness"),pf=de(lt,"float","AttenuationDistance"),mf=de(lt,"color","AttenuationColor"),gf=de(lt,"float","Dispersion");Q("PropertyNode",lt);class rS extends lt{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}Q("ParameterNode",rS);class eu extends De{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const s of t)s.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}B(eu);Q("CodeNode",eu);class oS extends eu{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),s=n.name,r=n.type,o=e.getCodeFromNode(this,r);s!==""&&(o.name=s);const a=e.getPropertyName(o);let l=this.getNodeFunction(e).getCode(a);const c=this.keywords,u=Object.keys(c);if(u.length>0)for(const d of u){const h=new RegExp(`\\b${d}\\b`,"g"),m=c[d].build(e,"property");l=l.replace(h,m)}return o.code=l+`
`,t==="property"?a:e.format(`${a}()`,r,t)}}Q("FunctionNode",oS);class tu extends De{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const aS=i=>new tu(i),nu=i=>new tu(i,!0);nu("frame");nu("render");const lS=aS("object");Q("UniformGroupNode",tu);class _s extends la{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.name="",this.groupNode=lS}label(e){return this.name=e,this}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(s=>{const r=e(s,n);r!==void 0&&(this.value=r)},t)}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let r=e.getNodeFromHash(s);r===void 0&&(e.setHashNode(this,s),r=this);const o=r.getInputType(e),a=e.getUniformFromNode(r,o,e.shaderStage,this.name||e.context.label),l=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(l,n,t)}}const ze=(i,e)=>{const t=RM(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return le(new _s(n,t))};Q("UniformNode",_s);const xn=i=>en("uv"+(i>0?i:""),"vec2");class _f extends De{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const Zo=B(_f);D("textureSize",Zo);Q("TextureSizeNode",_f);class yt extends at{constructor(e,t,n,...s){if(super(),s.length>0){let r=new yt(e,t,n);for(let o=0;o<s.length-1;o++)r=new yt(e,r,s[o]);t=r,n=s[s.length-1]}this.op=e,this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=s.getNodeType(e),a=typeof r<"u"?r.getNodeType(e):null;if(o==="void"||a==="void")return"void";if(n==="%")return o;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(o);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const l=t?e.getTypeLength(t):Math.max(e.getTypeLength(o),e.getTypeLength(a));return l>1?`bvec${l}`:"bool"}else return o==="float"&&e.isMatrix(a)?a:e.isMatrix(o)&&e.isVector(a)?e.getVectorFromMatrix(o):e.isVector(o)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(o)?a:o}generate(e,t){const n=this.op,s=this.aNode,r=this.bNode,o=this.getNodeType(e,t);let a=null,l=null;o!=="void"?(a=s.getNodeType(e),l=typeof r<"u"?r.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?l=a:a=l="float":n===">>"||n==="<<"?(a=o,l=e.changeComponentType(l,"uint")):e.isMatrix(a)&&e.isVector(l)?l=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(l)?a=e.getVectorFromMatrix(l):a=l=o):a=l=o;const c=s.build(e,a),u=typeof r<"u"?r.build(e,l):null,d=e.getTypeLength(t),h=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&d>1?e.format(`${e.getMethod("lessThan")}( ${c}, ${u} )`,o,t):n==="<="&&d>1?e.format(`${e.getMethod("lessThanEqual")}( ${c}, ${u} )`,o,t):n===">"&&d>1?e.format(`${e.getMethod("greaterThan")}( ${c}, ${u} )`,o,t):n===">="&&d>1?e.format(`${e.getMethod("greaterThanEqual")}( ${c}, ${u} )`,o,t):n==="!"||n==="~"?e.format(`(${n}${c})`,a,t):h?e.format(`${h}( ${c}, ${u} )`,o,t):e.format(`( ${c} ${n} ${u} )`,o,t);if(a!=="void")return h?e.format(`${h}( ${c}, ${u} )`,o,t):e.format(`${c} ${n} ${u}`,o,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const _n=B(yt,"+"),oi=B(yt,"-"),dt=B(yt,"*"),Ci=B(yt,"/"),cS=B(yt,"%"),uS=B(yt,"=="),hS=B(yt,"!="),dS=B(yt,"<"),fS=B(yt,">"),pS=B(yt,"<="),mS=B(yt,">="),gS=B(yt,"&&"),_S=B(yt,"||"),vS=B(yt,"!"),xS=B(yt,"^^"),yS=B(yt,"&"),MS=B(yt,"~"),SS=B(yt,"|"),TS=B(yt,"^"),ES=B(yt,"<<"),AS=B(yt,">>");D("add",_n);D("sub",oi);D("mul",dt);D("div",Ci);D("remainder",cS);D("equal",uS);D("notEqual",hS);D("lessThan",dS);D("greaterThan",fS);D("lessThanEqual",pS);D("greaterThanEqual",mS);D("and",gS);D("or",_S);D("not",vS);D("xor",xS);D("bitAnd",yS);D("bitNot",MS);D("bitOr",SS);D("bitXor",TS);D("shiftLeft",ES);D("shiftRight",AS);Q("OperatorNode",yt);class P extends at{constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,r=e.isMatrix(t)?0:e.getTypeLength(t),o=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(s)?0:e.getTypeLength(s);return r>o&&r>a?t:o>a?n:a>r?s:t}getNodeType(e){const t=this.method;return t===P.LENGTH||t===P.DISTANCE||t===P.DOT?"float":t===P.CROSS?"vec3":t===P.ALL?"bool":t===P.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===P.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,s=this.getNodeType(e),r=this.getInputType(e),o=this.aNode,a=this.bNode,l=this.cNode,c=e.renderer.isWebGLRenderer===!0;if(n===P.TRANSFORM_DIRECTION){let u=o,d=a;e.isMatrix(u.getNodeType(e))?d=Me(W(d),0):u=Me(W(u),0);const h=dt(u,d).xyz;return Or(h).build(e,t)}else{if(n===P.NEGATE)return e.format("( - "+o.build(e,r)+" )",s,t);if(n===P.ONE_MINUS)return oi(1,o).build(e,t);if(n===P.RECIPROCAL)return Ci(1,o).build(e,t);if(n===P.DIFFERENCE)return Qn(oi(o,a)).build(e,t);{const u=[];return n===P.CROSS||n===P.MOD?u.push(o.build(e,s),a.build(e,s)):n===P.STEP?u.push(o.build(e,e.getTypeLength(o.getNodeType(e))===1?"float":r),a.build(e,r)):c&&(n===P.MIN||n===P.MAX)||n===P.MOD?u.push(o.build(e,r),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":r)):n===P.REFRACT?u.push(o.build(e,r),a.build(e,r),l.build(e,"float")):n===P.MIX?u.push(o.build(e,r),a.build(e,r),l.build(e,e.getTypeLength(l.getNodeType(e))===1?"float":r)):(u.push(o.build(e,r)),a!==null&&u.push(a.build(e,r)),l!==null&&u.push(l.build(e,r))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}P.ALL="all";P.ANY="any";P.EQUALS="equals";P.RADIANS="radians";P.DEGREES="degrees";P.EXP="exp";P.EXP2="exp2";P.LOG="log";P.LOG2="log2";P.SQRT="sqrt";P.INVERSE_SQRT="inversesqrt";P.FLOOR="floor";P.CEIL="ceil";P.NORMALIZE="normalize";P.FRACT="fract";P.SIN="sin";P.COS="cos";P.TAN="tan";P.ASIN="asin";P.ACOS="acos";P.ATAN="atan";P.ABS="abs";P.SIGN="sign";P.LENGTH="length";P.NEGATE="negate";P.ONE_MINUS="oneMinus";P.DFDX="dFdx";P.DFDY="dFdy";P.ROUND="round";P.RECIPROCAL="reciprocal";P.TRUNC="trunc";P.FWIDTH="fwidth";P.BITCAST="bitcast";P.TRANSPOSE="transpose";P.ATAN2="atan2";P.MIN="min";P.MAX="max";P.MOD="mod";P.STEP="step";P.REFLECT="reflect";P.DISTANCE="distance";P.DIFFERENCE="difference";P.DOT="dot";P.CROSS="cross";P.POW="pow";P.TRANSFORM_DIRECTION="transformDirection";P.MIX="mix";P.CLAMP="clamp";P.REFRACT="refract";P.SMOOTHSTEP="smoothstep";P.FACEFORWARD="faceforward";const vf=K(1e-6);K(1e6);const Rh=K(Math.PI);K(Math.PI*2);const xf=B(P,P.ALL),NS=B(P,P.ANY),bS=B(P,P.EQUALS),wS=B(P,P.RADIANS),RS=B(P,P.DEGREES),yf=B(P,P.EXP),uc=B(P,P.EXP2),Mf=B(P,P.LOG),fa=B(P,P.LOG2),CS=B(P,P.SQRT),LS=B(P,P.INVERSE_SQRT),pa=B(P,P.FLOOR),Sf=B(P,P.CEIL),Or=B(P,P.NORMALIZE),ma=B(P,P.FRACT),Nn=B(P,P.SIN),Jn=B(P,P.COS),PS=B(P,P.TAN),IS=B(P,P.ASIN),DS=B(P,P.ACOS),US=B(P,P.ATAN),Qn=B(P,P.ABS),iu=B(P,P.SIGN),Js=B(P,P.LENGTH),OS=B(P,P.NEGATE),FS=B(P,P.ONE_MINUS),zS=B(P,P.DFDX),BS=B(P,P.DFDY),VS=B(P,P.ROUND),kS=B(P,P.RECIPROCAL),HS=B(P,P.TRUNC),GS=B(P,P.FWIDTH);B(P,P.BITCAST);const WS=B(P,P.TRANSPOSE),XS=B(P,P.ATAN2),Mi=B(P,P.MIN),hn=B(P,P.MAX),$S=B(P,P.MOD),qS=B(P,P.STEP),YS=B(P,P.REFLECT),jS=B(P,P.DISTANCE),KS=B(P,P.DIFFERENCE),ga=B(P,P.DOT),Tf=B(P,P.CROSS),Si=B(P,P.POW),Ef=B(P,P.POW,2),ZS=B(P,P.POW,3),JS=B(P,P.POW,4),QS=B(P,P.TRANSFORM_DIRECTION),eT=i=>dt(iu(i),Si(Qn(i),1/3)),tT=i=>ga(i,i),Ut=B(P,P.MIX),ps=(i,e=0,t=1)=>le(new P(P.CLAMP,le(i),le(e),le(t))),nT=i=>ps(i),Af=B(P,P.REFRACT),ai=B(P,P.SMOOTHSTEP),iT=B(P,P.FACEFORWARD),sT=(i,e,t)=>Ut(e,t,i),rT=(i,e,t)=>ai(e,t,i);D("all",xf);D("any",NS);D("equals",bS);D("radians",wS);D("degrees",RS);D("exp",yf);D("exp2",uc);D("log",Mf);D("log2",fa);D("sqrt",CS);D("inverseSqrt",LS);D("floor",pa);D("ceil",Sf);D("normalize",Or);D("fract",ma);D("sin",Nn);D("cos",Jn);D("tan",PS);D("asin",IS);D("acos",DS);D("atan",US);D("abs",Qn);D("sign",iu);D("length",Js);D("lengthSq",tT);D("negate",OS);D("oneMinus",FS);D("dFdx",zS);D("dFdy",BS);D("round",VS);D("reciprocal",kS);D("trunc",HS);D("fwidth",GS);D("atan2",XS);D("min",Mi);D("max",hn);D("mod",$S);D("step",qS);D("reflect",YS);D("distance",jS);D("dot",ga);D("cross",Tf);D("pow",Si);D("pow2",Ef);D("pow3",ZS);D("pow4",JS);D("transformDirection",QS);D("mix",sT);D("clamp",ps);D("refract",Af);D("smoothstep",rT);D("faceForward",iT);D("difference",KS);D("saturate",nT);D("cbrt",eT);D("transpose",WS);Q("MathNode",P);const oT=he(i=>{const{value:e}=i,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),s=t.mul(.0773993808),r=t.lessThanEqual(.04045),o=Ut(n,s,r);return Me(o,e.a)}),aT=he(i=>{const{value:e}=i,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),s=t.mul(12.92),r=t.lessThanEqual(.0031308),o=Ut(n,s,r);return Me(o,e.a)}),Ch=i=>{let e=null;return i===jn?e="Linear":i===Vn&&(e="sRGB"),e},Nf=(i,e)=>Ch(i)+"To"+Ch(e);class vn extends at{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===vn.LINEAR_TO_LINEAR?t:lT[e]({value:t})}}vn.LINEAR_TO_LINEAR="LinearToLinear";vn.LINEAR_TO_sRGB="LinearTosRGB";vn.sRGB_TO_LINEAR="sRGBToLinear";const lT={[vn.LINEAR_TO_sRGB]:aT,[vn.sRGB_TO_LINEAR]:oT},cT=(i,e)=>le(new vn(Nf(jn,e),le(i))),bf=(i,e)=>le(new vn(Nf(e,jn),le(i))),uT=B(vn,vn.LINEAR_TO_sRGB),hT=B(vn,vn.sRGB_TO_LINEAR);D("linearTosRGB",uT);D("sRGBToLinear",hT);D("linearToColorSpace",cT);D("colorSpaceToLinear",bf);Q("ColorSpaceNode",vn);class wf extends De{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s);else return e.format(`( ${s} )`,n,t)}}const _a=B(wf);Q("ExpressionNode",wf);class Rf extends _s{constructor(e){super(0),this.textureNode=e,this.updateType=it.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:r}=n;this.value=Math.log2(Math.max(s,r))}}}const dT=B(Rf);Q("MaxMipLevelNode",Rf);class vs extends _s{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=it.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":this.value.type===$i?"uvec4":this.value.type===sa?"ivec4":"vec4"}getInputType(){return"texture"}getDefaultUV(){return xn(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return ze(t.matrix).mul(W(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?it.FRAME:it.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let s=this.levelNode;s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=s,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,r,o,a){const l=this.value;let c;return s?c=e.generateTextureLevel(l,t,n,s,r):a?c=e.generateTextureGrad(l,t,n,a,r):o?c=e.generateTextureCompare(l,t,n,o,r):this.sampler===!1?c=e.generateTextureLoad(l,t,n,r):c=e.generateTexture(l,t,n,r),c}generate(e,t){const n=e.getNodeProperties(this),s=this.value;if(!s||s.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const r=super.generate(e,"property");if(t==="sampler")return r+"_sampler";if(e.isReference(t))return r;{const o=e.getDataFromNode(this);let a=o.propertyName;if(a===void 0){const{uvNode:u,levelNode:d,compareNode:h,depthNode:m,gradNode:g}=n,_=this.generateUV(e,u),p=d?d.build(e,"float"):null,f=m?m.build(e,"int"):null,T=h?h.build(e,"float"):null,x=g?[g[0].build(e,"vec2"),g[1].build(e,"vec2")]:null,N=e.getVarFromNode(this);a=e.getPropertyName(N);const F=this.generateSnippet(e,r,_,p,f,T,x);e.addLineFlowCode(`${a} = ${F}`),o.snippet=F,o.propertyName=a}let l=a;const c=this.getNodeType(e);return e.needsColorSpaceToLinear(s)&&(l=bf(_a(l,c),s.colorSpace).setup(e).build(e,c)),e.format(l,c,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,le(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(dT(t)),t.referenceNode=this,le(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return Zo(this,e)}compare(e){const t=this.clone();return t.compareNode=le(e),t.referenceNode=this,le(t)}grad(e,t){const n=this.clone();return n.gradNode=[le(e),le(t)],n.referenceNode=this,le(n)}depth(e){const t=this.clone();return t.depthNode=le(e),t.referenceNode=this,le(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const jt=B(vs),_i=(...i)=>jt(...i).setSampler(!1);D("texture",jt);Q("TextureNode",vs);class va extends _s{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getElementType(e){return this.getNodeType(e)}getInputType(){return"buffer"}}const su=(i,e,t)=>le(new va(i,e,t));Q("BufferNode",va);class fT extends fr{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class Cf extends va{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=it.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),s=this.getElementType();if(n===1)for(let r=0;r<e.length;r++){const o=r*4;t[o]=e[r]}else if(s==="color")for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.r,t[o+1]=a.g,t[o+2]=a.b||0}else for(let r=0;r<e.length;r++){const o=r*4,a=e[r];t[o]=a.x,t[o+1]=a.y,t[o+2]=a.z||0,t[o+3]=a.w||0}}setup(e){const t=this.array.length;this._elementType=this.elementType===null?Gi(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType);let n=Float32Array;return this._elementType.charAt(0)==="i"?n=Int32Array:this._elementType.charAt(0)==="u"&&(n=Uint32Array),this.value=new n(t*4),this.bufferCount=t,this.bufferType=e.changeComponentType("vec4",e.getComponentType(this._elementType)),super.setup(e)}element(e){return le(new fT(this,le(e)))}}const hc=(i,e)=>le(new Cf(i,e));Q("UniformsNode",Cf);class pT extends fr{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}}class pr extends De{constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=it.OBJECT}element(e){return le(new pT(this,le(e)))}setNodeType(e){let t=null;this.count!==null?t=su(null,e,this.count):Array.isArray(this.getValueFromReference())?t=hc(null,e):e==="texture"?t=jt(null):t=ze(null,e),this.node=t}getNodeType(e){return this.node===null&&this.updateValue(),this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const In=(i,e,t)=>le(new pr(i,e,t)),mT=(i,e,t,n)=>le(new pr(i,e,n,t));Q("ReferenceNode",pr);class Lf extends pr{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const Ti=(i,e,t)=>le(new Lf(i,e,t));Q("MaterialReferenceNode",Lf);const xs=nu("camera").onRenderUpdate(()=>{xs.needsUpdate=!0}),Sr=ze("float").label("cameraNear").setGroup(xs).onRenderUpdate(({camera:i})=>i.near),Tr=ze("float").label("cameraFar").setGroup(xs).onRenderUpdate(({camera:i})=>i.far),gT=ze("float").label("cameraLogDepth").setGroup(xs).onRenderUpdate(({camera:i})=>2/(Math.log(i.far+1)/Math.LN2)),ei=ze("mat4").label("cameraProjectionMatrix").setGroup(xs).onRenderUpdate(({camera:i})=>i.projectionMatrix),mr=ze("mat4").label("cameraViewMatrix").setGroup(xs).onRenderUpdate(({camera:i})=>i.matrixWorldInverse),Pf=ze(new L).label("cameraPosition").setGroup(xs).onRenderUpdate(({camera:i},e)=>e.value.setFromMatrixPosition(i.matrixWorld));class He extends De{constructor(e=He.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=it.OBJECT,this._uniformNode=new _s(null)}getNodeType(){const e=this.scope;if(e===He.WORLD_MATRIX||e===He.VIEW_MATRIX)return"mat4";if(e===He.NORMAL_MATRIX)return"mat3";if(e===He.POSITION||e===He.VIEW_POSITION||e===He.DIRECTION||e===He.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,s=this.scope;if(s===He.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(s===He.NORMAL_MATRIX)n.value=t.normalMatrix;else if(s===He.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===He.POSITION)n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===He.SCALE)n.value=n.value||new L,n.value.setFromMatrixScale(t.matrixWorld);else if(s===He.DIRECTION)n.value=n.value||new L,t.getWorldDirection(n.value);else if(s===He.VIEW_POSITION){const r=e.camera;n.value=n.value||new L,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(r.matrixWorldInverse)}}generate(e){const t=this.scope;return t===He.WORLD_MATRIX||t===He.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===He.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===He.POSITION||t===He.VIEW_POSITION||t===He.DIRECTION||t===He.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}He.VIEW_MATRIX="viewMatrix";He.NORMAL_MATRIX="normalMatrix";He.WORLD_MATRIX="worldMatrix";He.POSITION="position";He.SCALE="scale";He.VIEW_POSITION="viewPosition";He.DIRECTION="direction";B(He,He.DIRECTION);B(He,He.VIEW_MATRIX);B(He,He.NORMAL_MATRIX);B(He,He.WORLD_MATRIX);const dc=B(He,He.POSITION);B(He,He.SCALE);const ru=B(He,He.VIEW_POSITION);Q("Object3DNode",He);class Zt extends He{constructor(e=Zt.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}de(Zt,Zt.DIRECTION);const ms=de(Zt,Zt.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),If=de(Zt,Zt.NORMAL_MATRIX),Fr=de(Zt,Zt.WORLD_MATRIX);de(Zt,Zt.POSITION);de(Zt,Zt.SCALE);de(Zt,Zt.VIEW_POSITION);const _T=ze(new _t).onObjectUpdate(({object:i},e)=>e.value.copy(i.matrixWorld).invert());Q("ModelNode",Zt);const Jo=en("normal","vec3",W(0,1,0)),Yn=Jo.toVar("normalLocal"),qi=Dt(If.mul(Yn),"v_normalView").normalize().toVar("normalView"),vT=Dt(qi.transformDirection(mr),"v_normalWorld").normalize().toVar("transformedNormalWorld"),wt=Tt("vec3","transformedNormalView"),Df=wt.transformDirection(mr).normalize().toVar("transformedNormalWorld"),Ws=Tt("vec3","transformedClearcoatNormalView"),Lh=new Map;class q extends De{constructor(e){super(),this.scope=e}getCache(e,t){let n=Lh.get(e);return n===void 0&&(n=Ti(e,t),Lh.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===q.COLOR){const r=this.getColor(n);t.map&&t.map.isTexture===!0?s=r.mul(this.getTexture("map")):s=r}else if(n===q.OPACITY){const r=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=r.mul(this.getTexture("alpha")):s=r}else if(n===q.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture("specular").r:s=K(1);else if(n===q.SPECULAR_INTENSITY){const r=this.getFloat(n);t.specularMap?s=r.mul(this.getTexture(n).a):s=r}else if(n===q.SPECULAR_COLOR){const r=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?s=r.mul(this.getTexture(n).rgb):s=r}else if(n===q.ROUGHNESS){const r=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).g):s=r}else if(n===q.METALNESS){const r=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=r.mul(this.getTexture(n).b):s=r}else if(n===q.EMISSIVE){const r=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=r.mul(this.getTexture(n)):s=r}else if(n===q.NORMAL)t.normalMap?s=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?s=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):s=qi;else if(n===q.CLEARCOAT){const r=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===q.CLEARCOAT_ROUGHNESS){const r=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).r):s=r}else if(n===q.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):s=qi;else if(n===q.SHEEN){const r=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=r.mul(this.getTexture("sheenColor").rgb):s=r}else if(n===q.SHEEN_ROUGHNESS){const r=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=r.mul(this.getTexture(n).a):s=r,s=s.clamp(.07,1)}else if(n===q.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){const r=this.getTexture(n);s=Yc(Er.x,Er.y,Er.y.negate(),Er.x).mul(r.rg.mul(2).sub(se(1)).normalize().mul(r.b))}else s=Er;else if(n===q.IRIDESCENCE_THICKNESS){const r=In("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const o=In("0","float",t.iridescenceThicknessRange);s=r.sub(o).mul(this.getTexture(n).g).add(o)}else s=r}else if(n===q.TRANSMISSION){const r=this.getFloat(n);t.transmissionMap?s=r.mul(this.getTexture(n).r):s=r}else if(n===q.THICKNESS){const r=this.getFloat(n);t.thicknessMap?s=r.mul(this.getTexture(n).g):s=r}else if(n===q.IOR)s=this.getFloat(n);else{const r=this.getNodeType(e);s=this.getCache(n,r)}return s}}q.ALPHA_TEST="alphaTest";q.COLOR="color";q.OPACITY="opacity";q.SHININESS="shininess";q.SPECULAR="specular";q.SPECULAR_STRENGTH="specularStrength";q.SPECULAR_INTENSITY="specularIntensity";q.SPECULAR_COLOR="specularColor";q.REFLECTIVITY="reflectivity";q.ROUGHNESS="roughness";q.METALNESS="metalness";q.NORMAL="normal";q.CLEARCOAT="clearcoat";q.CLEARCOAT_ROUGHNESS="clearcoatRoughness";q.CLEARCOAT_NORMAL="clearcoatNormal";q.EMISSIVE="emissive";q.ROTATION="rotation";q.SHEEN="sheen";q.SHEEN_ROUGHNESS="sheenRoughness";q.ANISOTROPY="anisotropy";q.IRIDESCENCE="iridescence";q.IRIDESCENCE_IOR="iridescenceIOR";q.IRIDESCENCE_THICKNESS="iridescenceThickness";q.IOR="ior";q.TRANSMISSION="transmission";q.THICKNESS="thickness";q.ATTENUATION_DISTANCE="attenuationDistance";q.ATTENUATION_COLOR="attenuationColor";q.LINE_SCALE="scale";q.LINE_DASH_SIZE="dashSize";q.LINE_GAP_SIZE="gapSize";q.LINE_WIDTH="linewidth";q.LINE_DASH_OFFSET="dashOffset";q.POINT_WIDTH="pointWidth";q.DISPERSION="dispersion";const xT=de(q,q.ALPHA_TEST),zr=de(q,q.COLOR),yT=de(q,q.SHININESS),MT=de(q,q.EMISSIVE),Uf=de(q,q.OPACITY),ST=de(q,q.SPECULAR),Ph=de(q,q.SPECULAR_INTENSITY),TT=de(q,q.SPECULAR_COLOR),ET=de(q,q.SPECULAR_STRENGTH);de(q,q.REFLECTIVITY);const AT=de(q,q.ROUGHNESS),NT=de(q,q.METALNESS),bT=de(q,q.NORMAL),wT=de(q,q.CLEARCOAT),RT=de(q,q.CLEARCOAT_ROUGHNESS),CT=de(q,q.CLEARCOAT_NORMAL),LT=de(q,q.ROTATION),PT=de(q,q.SHEEN),IT=de(q,q.SHEEN_ROUGHNESS),DT=de(q,q.ANISOTROPY),UT=de(q,q.IRIDESCENCE),OT=de(q,q.IRIDESCENCE_IOR),FT=de(q,q.IRIDESCENCE_THICKNESS),zT=de(q,q.TRANSMISSION),BT=de(q,q.THICKNESS),VT=de(q,q.IOR),kT=de(q,q.ATTENUATION_DISTANCE),HT=de(q,q.ATTENUATION_COLOR),fc=de(q,q.LINE_SCALE),Of=de(q,q.LINE_DASH_SIZE),Ff=de(q,q.LINE_GAP_SIZE),rl=de(q,q.LINE_WIDTH),Ih=de(q,q.LINE_DASH_OFFSET),GT=de(q,q.POINT_WIDTH),WT=de(q,q.DISPERSION),Er=ze(new xe).onReference(function(i){return i.material}).onRenderUpdate(function({material:i}){this.value.set(i.anisotropy*Math.cos(i.anisotropyRotation),i.anisotropy*Math.sin(i.anisotropyRotation))});Q("MaterialNode",q);const un=en("position","vec3"),Kt=un.toVar("positionLocal"),pc=Dt(Fr.mul(Kt).xyz,"v_positionWorld"),XT=Dt(Kt.transformDirection(Fr),"v_positionWorldDirection").normalize().toVar("positionWorldDirection"),nn=Dt(ms.mul(Kt).xyz,"v_positionView"),St=Dt(nn.negate(),"v_positionViewDirection").normalize().toVar("positionViewDirection");class zf extends at{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return Dt(e.context.mvp);const t=this.positionNode||Kt;return ei.mul(ms).mul(t)}}const Dh=B(zf);Q("ModelViewProjectionNode",zf);class Bf extends la{constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=Wo,this.instanced=!1,this.attribute=null,this.global=!0,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getHash(e){if(this.bufferStride===0&&this.bufferOffset===0){let t=e.globalCache.getData(this.value);return t===void 0&&(t={node:this},e.globalCache.setData(this.value,t)),t.node.uuid}return this.uuid}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),r=this.bufferStride||s,o=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new Hd(n,r),l=new Vc(a,s,o);a.setUsage(this.usage),this.attribute=l,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let r=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,r=s):r=Dt(this).build(e,t),r}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this.attribute&&this.attribute.isBufferAttribute===!0&&(this.attribute.usage=e),this}setInstanced(e){return this.instanced=e,this}}const xa=(i,e,t,n)=>le(new Bf(i,e,t,n)),$T=(i,e,t,n)=>xa(i,e,t,n).setUsage(br),mc=(i,e,t,n)=>xa(i,e,t,n).setInstanced(!0),Uh=(i,e,t,n)=>$T(i,e,t,n).setInstanced(!0);D("toAttribute",i=>xa(i.value));Q("BufferAttributeNode",Bf);class Vf extends De{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null,this.updateType=it.FRAME,this.buffer=null,this.bufferColor=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const l=t.instanceMatrix,c=new Jy(l.array,16,1);this.buffer=c;const u=l.usage===br?Uh:mc,d=[u(c,"vec4",16,0),u(c,"vec4",16,4),u(c,"vec4",16,8),u(c,"vec4",16,12)];e=js(...d),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const l=new Gd(n.array,3),c=n.usage===br?Uh:mc;this.bufferColor=l,this.instanceColorNode=W(c(l,"vec3",3,0))}const s=e.mul(Kt).xyz,r=on(e[0].xyz,e[1].xyz,e[2].xyz),o=Yn.div(W(r[0].dot(r[0]),r[1].dot(r[1]),r[2].dot(r[2]))),a=r.mul(o).xyz;Kt.assign(s),Yn.assign(a),this.instanceColorNode!==null&&Kn("vec3","vInstanceColor").assign(this.instanceColorNode)}update(){this.instanceMesh.instanceMatrix.usage!==br&&this.instanceMesh.instanceMatrix.version!==this.buffer.version&&(this.buffer.version=this.instanceMesh.instanceMatrix.version),this.instanceMesh.instanceColor&&this.instanceMesh.instanceColor.usage!==br&&this.instanceMesh.instanceColor.version!==this.bufferColor.version&&(this.bufferColor.version=this.instanceMesh.instanceColor.version)}}const qT=B(Vf);Q("InstanceNode",Vf);const kf=he((i,e)=>(e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents(),en("tangent","vec4")))(),ou=kf.xyz.toVar("tangentLocal"),Hf=Dt(ms.mul(Me(ou,0)).xyz,"v_tangentView").normalize().toVar("tangentView");class Gf extends De{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(e.getDrawIndex()===null?this.batchingIdNode=Zc:this.batchingIdNode=iS);const t=he(([h])=>{const m=Zo(_i(this.batchMesh._indirectTexture),0),g=zt(h).remainder(zt(m)),_=zt(h).div(zt(m));return _i(this.batchMesh._indirectTexture,ki(g,_),null,"uvec4").x}).setLayout({name:"getIndirectIndex",type:"uint",inputs:[{name:"id",type:"int"}]}),n=this.batchMesh._matricesTexture,s=Zo(_i(n),0),r=K(t(zt(this.batchingIdNode))).mul(4).toVar(),o=zt(r.mod(s)),a=zt(r).div(zt(s)),l=js(_i(n,ki(o,a)),_i(n,ki(o.add(1),a)),_i(n,ki(o.add(2),a)),_i(n,ki(o.add(3),a))),c=on(l[0].xyz,l[1].xyz,l[2].xyz);Kt.assign(l.mul(Kt));const u=Yn.div(W(c[0].dot(c[0]),c[1].dot(c[1]),c[2].dot(c[2]))),d=c.mul(u).xyz;Yn.assign(d),e.hasGeometryAttribute("tangent")&&ou.mulAssign(c)}}const YT=B(Gf);Q("batch",Gf);class Wf extends De{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=it.OBJECT,this.skinIndexNode=en("skinIndex","uvec4"),this.skinWeightNode=en("skinWeight","vec4");let n,s,r;t?(n=In("bindMatrix","mat4"),s=In("bindMatrixInverse","mat4"),r=mT("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=ze(e.bindMatrix,"mat4"),s=ze(e.bindMatrixInverse,"mat4"),r=su(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=s,this.boneMatricesNode=r}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:s,bindMatrixInverseNode:r,boneMatricesNode:o}=this,a=o.element(t.x),l=o.element(t.y),c=o.element(t.z),u=o.element(t.w),d=s.mul(Kt),h=_n(a.mul(n.x).mul(d),l.mul(n.y).mul(d),c.mul(n.z).mul(d),u.mul(n.w).mul(d)),m=r.mul(h).xyz;let g=_n(n.x.mul(a),n.y.mul(l),n.z.mul(c),n.w.mul(u));g=r.mul(g).mul(s);const _=g.transformDirection(Yn).xyz;Kt.assign(m),Yn.assign(_),e.hasGeometryAttribute("tangent")&&ou.assign(_)}generate(e,t){if(t!=="void")return Kt.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const jT=i=>le(new Wf(i,!0));Q("SkinningNode",Wf);class Xf extends De{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let r=0,o=this.params.length-1;r<o;r++){const a=this.params[r],l=a.isNode!==!0&&a.name||this.getVarName(r),c=a.isNode!==!0&&a.type||"int";n[l]=_a(l,c)}const s=e.addStack();return t.returnsNode=this.params[this.params.length-1](n,s,e),t.stackNode=s,e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n=this.params,s=t.stackNode;for(let a=0,l=n.length-1;a<l;a++){const c=n[a];let u=null,d=null,h=null,m=null,g=null,_=null;c.isNode?(m="int",h=this.getVarName(a),u="0",d=c.build(e,m),g="<"):(m=c.type||"int",h=c.name||this.getVarName(a),u=c.start,d=c.end,g=c.condition,_=c.update,typeof u=="number"?u=u.toString():u&&u.isNode&&(u=u.build(e,m)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,m)),u!==void 0&&d===void 0?(u=u+" - 1",d="0",g=">="):d!==void 0&&u===void 0&&(u="0",g="<"),g===void 0&&(Number(u)>Number(d)?g=">=":g="<"));const p={start:u,end:d,condition:g},f=p.start,T=p.end;let x="",N="",F="";_||(m==="int"||m==="uint"?g.includes("<")?_="++":_="--":g.includes("<")?_="+= 1.":_="-= 1."),x+=e.getVar(m,h)+" = "+f,N+=h+" "+g+" "+T,F+=h+" "+_;const R=`for ( ${x}; ${N}; ${F} )`;e.addFlowCode((a===0?`
`:"")+e.tab+R+` {

`).addFlowTab()}const r=s.build(e,"void"),o=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+r);for(let a=0,l=this.params.length-1;a<l;a++)e.addFlowCode((a===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),o}}const $n=(...i)=>le(new Xf(Ys(i,"int"))).append(),$f=()=>_a("break").append();D("loop",(i,...e)=>lf(i,$n(...e)));Q("LoopNode",Xf);const ol=new WeakMap,En=new tt,Oh=he(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:r})=>{const o=zt(nS).mul(t).add(r),a=o.div(n),l=o.sub(a.mul(n));return _i(i,ki(l,a)).depth(s).mul(e)});function KT(i){const e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,r=s!==void 0?s.length:0;let o=ol.get(i);if(o===void 0||o.count!==r){let T=function(){p.dispose(),ol.delete(i),i.removeEventListener("dispose",T)};var a=T;o!==void 0&&o.texture.dispose();const l=i.morphAttributes.position||[],c=i.morphAttributes.normal||[],u=i.morphAttributes.color||[];let d=0;e===!0&&(d=1),t===!0&&(d=2),n===!0&&(d=3);let h=i.attributes.position.count*d,m=1;const g=4096;h>g&&(m=Math.ceil(h/g),h=g);const _=new Float32Array(h*m*4*r),p=new Dc(_,h,m,r);p.type=si,p.needsUpdate=!0;const f=d*4;for(let x=0;x<r;x++){const N=l[x],F=c[x],R=u[x],A=h*m*4*x;for(let U=0;U<N.count;U++){const E=U*f;e===!0&&(En.fromBufferAttribute(N,U),_[A+E+0]=En.x,_[A+E+1]=En.y,_[A+E+2]=En.z,_[A+E+3]=0),t===!0&&(En.fromBufferAttribute(F,U),_[A+E+4]=En.x,_[A+E+5]=En.y,_[A+E+6]=En.z,_[A+E+7]=0),n===!0&&(En.fromBufferAttribute(R,U),_[A+E+8]=En.x,_[A+E+9]=En.y,_[A+E+10]=En.z,_[A+E+11]=R.itemSize===4?En.w:1)}}o={count:r,texture:p,stride:d,size:new xe(h,m)},ol.set(i,o),i.addEventListener("dispose",T)}return o}class qf extends De{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=ze(1),this.updateType=it.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.morphAttributes.normal!==void 0,r=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,o=r!==void 0?r.length:0,{texture:a,stride:l,size:c}=KT(t);n===!0&&Kt.mulAssign(this.morphBaseInfluence),s===!0&&Yn.mulAssign(this.morphBaseInfluence);const u=zt(c.width);$n(o,({i:d})=>{const h=K(0).toVar();this.mesh.count>1&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?h.assign(_i(this.mesh.morphTexture,ki(zt(d).add(1),zt(Zc))).r):h.assign(In("morphTargetInfluences","float").element(d).toVar()),n===!0&&Kt.addAssign(Oh({bufferMap:a,influence:h,stride:l,width:u,depth:d,offset:zt(0)})),s===!0&&Yn.addAssign(Oh({bufferMap:a,influence:h,stride:l,width:u,depth:d,offset:zt(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const ZT=B(qf);Q("MorphNode",qf);const JT=St.negate().reflect(wt),QT=JT.transformDirection(mr).toVar("reflectVector");class Yf extends vs{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return QT}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===sr||!n.isRenderTargetTexture?W(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const jf=B(Yf);D("cubeTexture",jf);Q("CubeTextureNode",Yf);class $r extends De{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}Q("LightingNode",$r);let Ar=null;class Ki extends $r{constructor(e=null){super(),this.updateType=it.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.shadowMaskNode=null,this.color=new Ie,this._defaultColorNode=ze(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){const{object:t}=e;if(t.receiveShadow===!1)return;let n=this.shadowNode;if(n===null){Ar===null&&(Ar=e.createNodeMaterial(),Ar.fragmentNode=Me(0,0,0,1),Ar.isShadowNodeMaterial=!0);const s=this.light.shadow,r=e.createRenderTarget(s.mapSize.width,s.mapSize.height),o=new Xr;o.minFilter=tn,o.magFilter=tn,o.image.width=s.mapSize.width,o.image.height=s.mapSize.height,o.compareFunction=Ad,r.depthTexture=o,s.camera.updateProjectionMatrix();const a=In("intensity","float",s),l=In("bias","float",s),c=In("normalBias","float",s),u=t.material.shadowPositionNode||pc;let d=ze(s.matrix).mul(u.add(vT.mul(c)));d=d.xyz.div(d.w);const h=d.x.greaterThanEqual(0).and(d.x.lessThanEqual(1)).and(d.y.greaterThanEqual(0)).and(d.y.lessThanEqual(1)).and(d.z.lessThanEqual(1));let m=d.z.add(l);e.renderer.coordinateSystem===sr&&(m=m.mul(2).sub(1)),d=W(d.x,d.y.oneMinus(),m),n=((f,T,x)=>jt(f,T).compare(x))(o,d.xy,d.z);const _=jt(r.texture,d),p=h.mix(1,n.mix(_.a.mix(1,_),1));this.rtt=r,this.colorNode=this.colorNode.mul(Ut(1,p,a)),this.shadowNode=n,this.shadowMaskNode=p,this.updateBeforeType=it.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:s,scene:r,camera:o}=e,a=r.overrideMaterial;r.overrideMaterial=Ar,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n),n.shadow.camera.layers.mask=o.layers.mask;const l=s.toneMapping,c=s.getRenderTarget(),u=s.getRenderObjectFunction();s.setRenderObjectFunction((d,...h)=>{d.castShadow===!0&&s.renderObject(d,...h)}),s.setRenderTarget(t),s.toneMapping=bn,s.render(r,n.shadow.camera),s.setRenderTarget(c),s.setRenderObjectFunction(u),s.toneMapping=l,r.overrideMaterial=a}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.shadowMaskNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}Q("AnalyticLightNode",Ki);const Qo=new WeakMap,eE=i=>i.sort((e,t)=>e.id-t.id);class tE extends De{constructor(e=[]){super("vec3"),this.totalDiffuseNode=W().temp("totalDiffuse"),this.totalSpecularNode=W().temp("totalSpecular"),this.outgoingLightNode=W().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}analyze(e){const t=e.getDataFromNode(this);for(const n of t.nodes)n.build(e)}setup(e){const t=e.context,n=t.lightingModel;let s=this.outgoingLightNode;if(n){const{lightNodes:r,totalDiffuseNode:o,totalSpecularNode:a}=this;t.outgoingLight=s;const l=e.addStack(),c=e.getDataFromNode(this);c.nodes=l.nodes,n.start(t,l,e);for(const f of r)f.build(e);n.indirectDiffuse(t,l,e),n.indirectSpecular(t,l,e),n.ambientOcclusion(t,l,e);const{backdrop:u,backdropAlpha:d}=t,{directDiffuse:h,directSpecular:m,indirectDiffuse:g,indirectSpecular:_}=t.reflectedLight;let p=h.add(g);u!==null&&(d!==null?p=W(d.mix(p,u)):p=W(u),t.material.transparent=!0),o.assign(p),a.assign(m.add(_)),s.assign(o.add(a)),n.finish(t,l,e),s=s.bypass(e.removeStack())}return s}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=eE(e);for(const n of e){let s=this._getLightNodeById(n.id);if(s===null){const r=n.constructor,o=Qo.has(r)?Qo.get(r):Ki;s=le(new o(n))}t.push(s)}return this.lightNodes=t,this._hash=null,this}}const nE=B(tE);function ys(i,e){if(Qo.has(i)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof i!="function")throw new Error(`Light ${i.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);Qo.set(i,e)}class Kf extends $r{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}Q("AONode",Kf);class Zf extends Kc{constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=W().temp("directDiffuse"),s=W().temp("directSpecular"),r=W().temp("indirectDiffuse"),o=W().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:s,indirectDiffuse:r,indirectSpecular:o};return{radiance:W().temp("radiance"),irradiance:W().temp("irradiance"),iblIrradiance:W().temp("iblIrradiance"),ambientOcclusion:K(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const Jf=B(Zf);D("lightingContext",Jf);Q("LightingContextNode",Zf);const iE=i=>i.mul(kf.w).xyz,sE=Dt(iE(qi.cross(Hf)),"v_bitangentView").normalize().toVar("bitangentView"),Xs=on(Hf,sE,qi);St.mul(Xs);const rE=(()=>{let i=Ks.cross(St);return i=i.cross(Ks).normalize(),i=Ut(i,wt,as.mul(yi.oneMinus()).oneMinus().pow2().pow2()).normalize(),i})();class au extends De{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}setup(e){const t=e.getNodeProperties(this);t.condNode=this.condNode.cache(),t.ifNode=this.ifNode.cache(),t.elseNode=this.elseNode?this.elseNode.cache():null}generate(e,t){const n=this.getNodeType(e),s=e.getDataFromNode(this);if(s.nodeProperty!==void 0)return s.nodeProperty;const{condNode:r,ifNode:o,elseNode:a}=e.getNodeProperties(this),l=t!=="void",c=l?Tt(n).build(e):"";s.nodeProperty=c;const u=r.build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let d=o.build(e,n);if(d&&(l?d=c+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let h=a.build(e,n);h&&(l?h=c+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(c,n,t)}}const Pn=B(au);D("cond",Pn);Q("CondNode",au);const Fh=K(1),gc=K(-2),To=K(.8),al=K(-1),Eo=K(.4),ll=K(2),Ao=K(.305),cl=K(3),zh=K(.21),oE=K(4),Bh=K(4),aE=K(16),lE=he(([i])=>{const e=W(Qn(i)).toVar(),t=K(-1).toVar();return Ct(e.x.greaterThan(e.z),()=>{Ct(e.x.greaterThan(e.y),()=>{t.assign(Pn(i.x.greaterThan(0),0,3))}).else(()=>{t.assign(Pn(i.y.greaterThan(0),1,4))})}).else(()=>{Ct(e.z.greaterThan(e.y),()=>{t.assign(Pn(i.z.greaterThan(0),2,5))}).else(()=>{t.assign(Pn(i.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),cE=he(([i,e])=>{const t=se().toVar();return Ct(e.equal(0),()=>{t.assign(se(i.z,i.y).div(Qn(i.x)))}).elseif(e.equal(1),()=>{t.assign(se(i.x.negate(),i.z.negate()).div(Qn(i.y)))}).elseif(e.equal(2),()=>{t.assign(se(i.x.negate(),i.y).div(Qn(i.z)))}).elseif(e.equal(3),()=>{t.assign(se(i.z.negate(),i.y).div(Qn(i.x)))}).elseif(e.equal(4),()=>{t.assign(se(i.x.negate(),i.z).div(Qn(i.y)))}).else(()=>{t.assign(se(i.x,i.y).div(Qn(i.z)))}),dt(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),uE=he(([i])=>{const e=K(0).toVar();return Ct(i.greaterThanEqual(To),()=>{e.assign(Fh.sub(i).mul(al.sub(gc)).div(Fh.sub(To)).add(gc))}).elseif(i.greaterThanEqual(Eo),()=>{e.assign(To.sub(i).mul(ll.sub(al)).div(To.sub(Eo)).add(al))}).elseif(i.greaterThanEqual(Ao),()=>{e.assign(Eo.sub(i).mul(cl.sub(ll)).div(Eo.sub(Ao)).add(ll))}).elseif(i.greaterThanEqual(zh),()=>{e.assign(Ao.sub(i).mul(oE.sub(cl)).div(Ao.sub(zh)).add(cl))}).else(()=>{e.assign(K(-2).mul(fa(dt(1.16,i))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});he(([i,e])=>{const t=i.toVar();t.assign(dt(2,t).sub(1));const n=W(t,1).toVar();return Ct(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const hE=he(([i,e,t,n,s,r])=>{const o=K(t),a=W(e),l=ps(uE(o),gc,r),c=ma(l),u=pa(l),d=W(_c(i,a,u,n,s,r)).toVar();return Ct(c.notEqual(0),()=>{const h=W(_c(i,a,u.add(1),n,s,r)).toVar();d.assign(Ut(d,h,c))}),d}),_c=he(([i,e,t,n,s,r])=>{const o=K(t).toVar(),a=W(e),l=K(lE(a)).toVar(),c=K(hn(Bh.sub(o),0)).toVar();o.assign(hn(o,Bh));const u=K(uc(o)).toVar(),d=se(cE(a,l).mul(u.sub(2)).add(1)).toVar();return Ct(l.greaterThan(2),()=>{d.y.addAssign(u),l.subAssign(3)}),d.x.addAssign(l.mul(u)),d.x.addAssign(c.mul(dt(3,aE))),d.y.addAssign(dt(4,uc(r).sub(u))),d.x.mulAssign(n),d.y.mulAssign(s),i.uv(d).grad(se(),se())}),ul=he(({envMap:i,mipInt:e,outputDirection:t,theta:n,axis:s,CUBEUV_TEXEL_WIDTH:r,CUBEUV_TEXEL_HEIGHT:o,CUBEUV_MAX_MIP:a})=>{const l=Jn(n),c=t.mul(l).add(s.cross(t).mul(Nn(n))).add(s.mul(s.dot(t).mul(l.oneMinus())));return _c(i,c,e,r,o,a)});he(({n:i,latitudinal:e,poleAxis:t,outputDirection:n,weights:s,samples:r,dTheta:o,mipInt:a,envMap:l,CUBEUV_TEXEL_WIDTH:c,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d})=>{const h=W(Pn(e,t,Tf(t,n))).toVar();Ct(xf(h.equals(W(0))),()=>{h.assign(W(n.z,0,n.x.negate()))}),h.assign(Or(h));const m=W().toVar();return m.addAssign(s.element(zt(0)).mul(ul({theta:0,axis:h,outputDirection:n,mipInt:a,envMap:l,CUBEUV_TEXEL_WIDTH:c,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d}))),$n({start:zt(1),end:i},({i:g})=>{Ct(g.greaterThanEqual(r),()=>{$f()});const _=K(o.mul(K(g))).toVar();m.addAssign(s.element(g).mul(ul({theta:_.mul(-1),axis:h,outputDirection:n,mipInt:a,envMap:l,CUBEUV_TEXEL_WIDTH:c,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d}))),m.addAssign(s.element(g).mul(ul({theta:_,axis:h,outputDirection:n,mipInt:a,envMap:l,CUBEUV_TEXEL_WIDTH:c,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:d})))}),Me(m,1)});let ea=null;const Vh=new WeakMap;function dE(i){const e=Math.log2(i)-2,t=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function fE(i){let e=Vh.get(i);if((e!==void 0?e.pmremVersion:-1)!==i.pmremVersion){if(i.isCubeTexture){if(i.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=ea.fromCubemap(i,e)}else{if(i.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=ea.fromEquirectangular(i,e)}e.pmremVersion=i.pmremVersion,Vh.set(i,e)}return e.texture}class Qf extends at{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=jt(null),this._width=ze(0),this._height=ze(0),this._maxMip=ze(0),this.updateBeforeType=it.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=dE(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=fE(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){ea===null&&(ea=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===Wn&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=W(t.x.negate(),t.yz));let s=this.levelNode;return s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),hE(this._texture,t,s,this._width,this._height,this._maxMip)}}const pE=B(Qf);Q("PMREMNode",Qf);const kh=new WeakMap;class ep extends $r{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let m=kh.get(t.value);m===void 0&&(m=pE(t.value),kh.set(t.value,m)),t=m}const{material:n}=e,r=n.envMap?In("envMapIntensity","float",e.material):In("environmentIntensity","float",e.scene),a=n.useAnisotropy===!0||n.anisotropy>0?rE:wt,l=Pr(t,Hh(yi,a)).mul(r),c=Pr(t,mE(Df)).mul(Math.PI).mul(r),u=Uo(l),d=Uo(c);e.context.radiance.addAssign(u),e.context.iblIrradiance.addAssign(d);const h=e.context.lightingModel.clearcoatRadiance;if(h){const m=Pr(t,Hh(Yo,Ws)).mul(r),g=Uo(m);h.addAssign(g)}}}const Hh=(i,e)=>{let t=null;return{getUV:()=>(t===null&&(t=St.negate().reflect(e),t=i.mul(i).mix(t,e).normalize(),t=t.transformDirection(mr)),t),getTextureLevel:()=>i}},mE=i=>({getUV:()=>i,getTextureLevel:()=>K(1)});Q("EnvironmentNode",ep);class tp extends $r{constructor(e){super(),this.node=e}setup(e){e.context.irradiance.addAssign(this.node)}}Q("IrradianceNode",tp);let hl,dl;class ot extends De{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===ot.VIEWPORT?"vec4":this.scope===ot.COORDINATE?"vec3":"vec2"}getUpdateType(){let e=it.NONE;return(this.scope===ot.RESOLUTION||this.scope===ot.VIEWPORT)&&(e=it.RENDER),this.updateType=e,e}update({renderer:e}){this.scope===ot.VIEWPORT?e.getViewport(dl):e.getDrawingBufferSize(hl)}setup(){const e=this.scope;let t=null;if(e===ot.RESOLUTION)t=ze(hl||(hl=new xe));else if(e===ot.VIEWPORT)t=ze(dl||(dl=new tt));else{t=gE.div(vc);let n=t.x,s=t.y;/bottom/i.test(e)&&(s=s.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=se(n,s)}return t}generate(e){if(this.scope===ot.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(vc).outputNode.build(e);t=`${e.getType("vec3")}( ${t}.x, ${n}.y - ${t}.y, ${t}.z )`}return t}return super.generate(e)}}ot.COORDINATE="coordinate";ot.RESOLUTION="resolution";ot.VIEWPORT="viewport";ot.TOP_LEFT="topLeft";ot.BOTTOM_LEFT="bottomLeft";ot.TOP_RIGHT="topRight";ot.BOTTOM_RIGHT="bottomRight";const gE=de(ot,ot.COORDINATE),vc=de(ot,ot.RESOLUTION),Qs=de(ot,ot.VIEWPORT),Br=de(ot,ot.TOP_LEFT);de(ot,ot.BOTTOM_LEFT);de(ot,ot.TOP_RIGHT);de(ot,ot.BOTTOM_RIGHT);Q("ViewportNode",ot);const Nr=new xe;class qr extends vs{constructor(e=Br,t=null,n=null){n===null&&(n=new $d,n.minFilter=Hi),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=it.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(Nr);const n=this.value;(n.image.width!==Nr.width||n.image.height!==Nr.height)&&(n.image.width=Nr.width,n.image.height=Nr.height,n.needsUpdate=!0);const s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){const e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}}const _E=B(qr),np=B(qr,null,null,{generateMipmaps:!0});D("viewportTexture",_E);D("viewportMipTexture",np);Q("ViewportTextureNode",qr);let fl=null;class ip extends qr{constructor(e=Br,t=null){fl===null&&(fl=new Xr),super(e,t,fl)}}const sp=B(ip);D("viewportDepthTexture",sp);Q("ViewportDepthTextureNode",ip);class Rn extends De{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===Rn.DEPTH?e.getFragDepth():super.generate(e)}setup({camera:e}){const{scope:t}=this,n=this.valueNode;let s=null;if(t===Rn.DEPTH)n!==null?s=op().assign(n):e.isPerspectiveCamera?s=vE(nn.z,Sr,Tr):s=zo(nn.z,Sr,Tr);else if(t===Rn.LINEAR_DEPTH)if(n!==null)if(e.isPerspectiveCamera){const r=rp(n,Sr,Tr);s=zo(r,Sr,Tr)}else s=n;else s=zo(nn.z,Sr,Tr);return s}}const zo=(i,e,t)=>i.add(e).div(e.sub(t)),vE=(i,e,t)=>e.add(i).mul(t).div(t.sub(e).mul(i)),rp=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t));Rn.DEPTH="depth";Rn.LINEAR_DEPTH="linearDepth";const op=B(Rn,Rn.DEPTH),ap=de(Rn,Rn.DEPTH),xE=B(Rn,Rn.LINEAR_DEPTH);xE(sp());ap.assign=i=>op(i);Q("ViewportDepthNode",Rn);class Yi extends De{constructor(e=Yi.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:s,globalClippingCount:r}=t,o=r+s,a=n?o-s:o;return this.scope===Yi.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,o,a):this.setupDefault(t.planes,o,a)}setupAlphaToCoverage(e,t,n){return he(()=>{const s=hc(e),r=Tt("float","distanceToPlane"),o=Tt("float","distanceToGradient"),a=Tt("float","clipOpacity");a.assign(1);let l;if($n(n,({i:c})=>{l=s.element(c),r.assign(nn.dot(l.xyz).negate().add(l.w)),o.assign(r.fwidth().div(2)),a.mulAssign(ai(o.negate(),o,r)),a.equal(0).discard()}),n<t){const c=Tt("float","unionclipOpacity");c.assign(1),$n({start:n,end:t},({i:u})=>{l=s.element(u),r.assign(nn.dot(l.xyz).negate().add(l.w)),o.assign(r.fwidth().div(2)),c.mulAssign(ai(o.negate(),o,r).oneMinus())}),a.mulAssign(c.oneMinus())}gt.a.mulAssign(a),gt.a.equal(0).discard()})()}setupDefault(e,t,n){return he(()=>{const s=hc(e);let r;if($n(n,({i:o})=>{r=s.element(o),nn.dot(r.xyz).greaterThan(r.w).discard()}),n<t){const o=Tt("bool","clipped");o.assign(!0),$n({start:n,end:t},({i:a})=>{r=s.element(a),o.assign(nn.dot(r.xyz).greaterThan(r.w).and(o))}),o.discard()}})()}}Yi.ALPHA_TO_COVERAGE="alphaToCoverage";Yi.DEFAULT="default";const yE=()=>le(new Yi),ME=()=>le(new Yi(Yi.ALPHA_TO_COVERAGE));class lp extends De{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){const{renderer:t,material:n}=e;return t.coordinateSystem===Wn&&n.side===dn?"false":e.getFrontFacing()}}const SE=de(lp),ta=K(SE).mul(2).sub(1);Q("FrontFacingNode",lp);const xc=new Map;class an extends rn{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.shadowPositionNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+Kd(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.depthWrite===!0&&this.setupDepth(e),this.fragmentNode===null){this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const s=this.setupLighting(e);n!==null&&e.stack.add(n);const r=Me(s,gt.a).max(0);t=this.setupOutput(e,r),sS.assign(t),this.outputNode!==null&&(t=this.outputNode)}else{let s=this.fragmentNode;s.isOutputStructNode!==!0&&(s=Me(s)),t=this.setupOutput(e,s)}e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){if(e.clippingContext===null)return null;const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let s=null;return(t||n)&&(this.alphaToCoverage?s=ME():e.stack.add(yE())),s}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=Dh().w.add(1).log2().mul(gT).mul(.5)),n!==null&&ap.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;if(e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&ZT(t).append(),t.isSkinnedMesh===!0&&jT(t).append(),this.displacementMap){const r=Ti("displacementMap","texture"),o=Ti("displacementScale","float"),a=Ti("displacementBias","float");Kt.addAssign(Yn.normalize().mul(r.x.mul(o).add(a)))}t.isBatchedMesh&&YT(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&qT(t).append(),this.positionNode!==null&&Kt.assign(this.positionNode);const s=Dh();return e.context.vertex=e.removeStack(),e.context.mvp=s,s}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?Me(this.colorNode):zr;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Me(n.xyz.mul(en("color","vec3")),n.a)),e.instanceColor&&(n=Kn("vec3","vInstanceColor").mul(n)),gt.assign(n);const s=this.opacityNode?K(this.opacityNode):Uf;if(gt.a.assign(gt.a.mul(s)),this.alphaTestNode!==null||this.alphaTest>0){const r=this.alphaTestNode!==null?K(this.alphaTestNode):xT;gt.a.lessThanEqual(r).discard()}this.transparent===!1&&this.blending===hs&&this.alphaToCoverage===!1&&gt.a.assign(1)}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=nn.dFdx().cross(nn.dFdy()).normalize();wt.assign(e.mul(ta))}else{const e=this.normalNode?W(this.normalNode):bT;wt.assign(e.mul(ta))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?jf(this.envMap):jt(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];if(t&&n.push(new ep(t)),e.material.lightMap&&n.push(new tp(Ti("lightMap","texture"))),this.aoNode!==null||e.material.aoMap){const r=this.aoNode!==null?this.aoNode:jt(e.material.aoMap);n.push(new Kf(r))}let s=this.lightsNode||e.lightsNode;return n.length>0&&(s=nE([...s.lightNodes,...n])),s}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:r}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let l=gt.rgb;if(a&&a.hasLight!==!1){const c=this.setupLightingModel(e);l=Jf(a,c,n,s)}else n!==null&&(l=W(s!==null?Ut(l,n,s):n));return(r&&r.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(l=l.add(W(r||MT))),l}setupOutput(e,t){if(this.fog===!0){const n=e.fogNode;n&&(t=Me(n.mix(t.rgb,n.colorNode),t.a))}return t}setDefaultValues(e){for(const n in e){const s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=rn.prototype.toJSON.call(this,e),s=Xo(this);n.inputNodes={};for(const{property:o,childNode:a}of s)n.inputNodes[o]=a.toJSON(e).uuid;function r(o){const a=[];for(const l in o){const c=o[l];delete c.metadata,a.push(c)}return a}if(t){const o=r(e.textures),a=r(e.images),l=r(e.nodes);o.length>0&&(n.textures=o),a.length>0&&(n.images=a),l.length>0&&(n.nodes=l)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.shadowPositionNode=e.shadowPositionNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=TE(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const s in e)n[s]=e[s];return n}}function Xt(i,e){if(typeof e!="function"||!i)throw new Error(`Node material ${i} is not a class`);if(xc.has(i)){console.warn(`Redefinition of node material ${i}`);return}xc.set(i,e),e.type=i}function TE(i){const e=xc.get(i);if(e!==void 0)return new e}Xt("NodeMaterial",an);class cp extends De{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new Lr(t);return this._currentCond=Pn(e,n),this.add(this._currentCond)}elseif(e,t){const n=new Lr(t),s=Pn(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}else(e){return this._currentCond.elseNode=new Lr(e),this}build(e,...t){const n=CM();wh(this);for(const s of this.nodes)s.build(e,"void");return wh(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}B(cp);Q("StackNode",cp);class up extends at{constructor(e=XT){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return se(t,n)}}B(up);Q("EquirectUVNode",up);class hp extends De{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}Q("StructTypeNode",hp);class dp extends De{constructor(...e){super(),this.members=e,this.isOutputStructNode=!0}setup(e){super.setup(e);const t=this.members,n=[];for(let s=0;s<t.length;s++)n.push(t[s].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new hp(n)).name}generate(e,t){const n=e.getOutputStructName(),s=this.members,r=n!==""?n+".":"";for(let o=0;o<s.length;o++){const a=s[o].build(e,t);e.addLineFlowCode(`${r}m${o} = ${a}`)}return n}}B(dp);Q("OutputStructNode",dp);class fp extends De{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.toUint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).toFloat().mul(1/2**32)}}const EE=B(fp);D("hash",EE);Q("HashNode",fp);const yc=(i,e)=>Si(dt(4,i.mul(oi(1,i))),e),AE=(i,e)=>i.lessThan(.5)?yc(i.mul(2),e).div(2):oi(1,yc(dt(oi(1,i),2),e).div(2)),NE=(i,e,t)=>Si(Ci(Si(i,e),_n(Si(i,e),Si(oi(1,i),t))),1/e),bE=(i,e)=>Nn(Rh.mul(e.mul(i).sub(1))).div(Rh.mul(e.mul(i).sub(1)));D("parabola",yc);D("gain",AE);D("pcurve",NE);D("sinc",bE);const ti=he(([i])=>i.fract().sub(.5).abs()),pp=he(([i])=>W(ti(i.z.add(ti(i.y.mul(1)))),ti(i.z.add(ti(i.x.mul(1)))),ti(i.y.add(ti(i.x.mul(1)))))),wE=he(([i,e,t])=>{const n=W(i).toVar(),s=K(1.4).toVar(),r=K(0).toVar(),o=W(n).toVar();return $n({start:K(0),end:K(3),type:"float",condition:"<="},()=>{const a=W(pp(o.mul(2))).toVar();n.addAssign(a.add(t.mul(K(.1).mul(e)))),o.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);const l=K(ti(n.z.add(ti(n.x.add(ti(n.y)))))).toVar();r.addAssign(l.div(s)),o.addAssign(.14)}),r});ti.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});pp.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});wE.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let pl;class mp extends au{constructor(e){pl=pl||_a("discard"),super(e,pl)}}const RE=B(mp),CE=i=>RE(i).append();D("discard",CE);Q("DiscardNode",mp);class gp extends De{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null,this.global=!0}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let s=null,r=-1;for(const o of this.functionNodes){const l=o.shaderNode.layout;if(l===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const c=l.inputs;if(t.length===c.length){let u=0;for(let d=0;d<t.length;d++){const h=t[d],m=c[d];h.getNodeType(e)===m.type?u++:u=0}u>r&&(s=o,r=u)}}this._candidateFnCall=n=s(...t)}return n}}B(gp);Q("FunctionOverloadingNode",gp);class _p extends at{constructor(){super("vec2")}setup(){const e=W(St.z,0,St.x.negate()).normalize(),t=St.cross(e);return se(e.dot(wt),t.dot(wt)).mul(.495).add(.5)}}const LE=de(_p);Q("MatcapUVNode",_p);class pn extends _s{constructor(e=pn.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=it.FRAME}update(e){const t=this.scope,n=this.scale;t===pn.LOCAL?this.value+=e.deltaTime*n:t===pn.DELTA?this.value=e.deltaTime*n:t===pn.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}pn.LOCAL="local";pn.GLOBAL="global";pn.DELTA="delta";pn.FRAME="frame";const PE=(i,e=0)=>le(new pn(pn.LOCAL,i,e));de(pn,pn.FRAME).toUint();Q("TimerNode",pn);class Bt extends De{constructor(e=Bt.SINE,t=PE()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=le(this.timeNode);let n=null;return e===Bt.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===Bt.SQUARE?n=t.fract().round():e===Bt.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===Bt.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}Bt.SINE="sine";Bt.SQUARE="square";Bt.TRIANGLE="triangle";Bt.SAWTOOTH="sawtooth";B(Bt,Bt.SINE);B(Bt,Bt.SQUARE);B(Bt,Bt.TRIANGLE);B(Bt,Bt.SAWTOOTH);Q("OscNode",Bt);class li extends at{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===li.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===li.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}li.DIRECTION_TO_COLOR="directionToColor";li.COLOR_TO_DIRECTION="colorToDirection";const vp=B(li,li.DIRECTION_TO_COLOR),IE=B(li,li.COLOR_TO_DIRECTION);D("directionToColor",vp);D("colorToDirection",IE);Q("PackingNode",li);class lu extends De{constructor(e,t,n,s=K(0),r=K(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=r,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:r,doClamp:o}=this;let a=e.sub(t).div(n.sub(t));return o===!0&&(a=a.clamp()),a.mul(r.sub(s)).add(s)}}const DE=B(lu,null,null,{doClamp:!1}),UE=B(lu);D("remap",DE);D("remapClamp",UE);Q("RemapNode",lu);class xp extends at{constructor(e,t,n=se(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const OE=B(xp);D("rotateUV",OE);Q("RotateUVNode",xp);class yp extends at{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const r=t.cos(),o=t.sin();return Yc(r,o,o.negate(),r).mul(n)}else{const r=t,o=js(Me(1,0,0,0),Me(0,Jn(r.x),Nn(r.x).negate(),0),Me(0,Nn(r.x),Jn(r.x),0),Me(0,0,0,1)),a=js(Me(Jn(r.y),0,Nn(r.y),0),Me(0,1,0,0),Me(Nn(r.y).negate(),0,Jn(r.y),0),Me(0,0,0,1)),l=js(Me(Jn(r.z),Nn(r.z).negate(),0,0),Me(Nn(r.z),Jn(r.z),0,0),Me(0,0,1,0),Me(0,0,0,1));return o.mul(a).mul(l).mul(Me(n,1)).xyz}}}const FE=B(yp);D("rotate",FE);Q("RotateNode",yp);class Mp extends De{constructor(e,t=xn(),n=K(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:r}=n,o=e.mod(s.mul(r)).floor(),a=o.mod(s),l=r.sub(o.add(1).div(s).ceil()),c=n.reciprocal(),u=se(a,l);return t.add(u).mul(c)}}B(Mp);Q("SpriteSheetUVNode",Mp);class Sp extends fr{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const s=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:r}=this;!r.instanceIndex&&this.node.bufferObject===!0&&s!==!0?n=e.generatePBO(this):n=r.build(e)}else n=super.generate(e);if(s!==!0){const r=this.getNodeType(e);n=e.format(n,r,t)}return n}}const Tp=B(Sp);D("storageElement",Tp);Q("StorageArrayElementNode",Sp);class Ep extends De{constructor(e,t=null,n=null,s=K(1),r=Kt,o=Yn){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=r,this.normalNode=o}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:r,normalNode:o}=this;let a=o.abs().normalize();a=a.div(a.dot(W(1)));const l=r.yz.mul(s),c=r.zx.mul(s),u=r.xy.mul(s),d=e.value,h=t!==null?t.value:d,m=n!==null?n.value:d,g=jt(d,l).mul(a.x),_=jt(h,c).mul(a.y),p=jt(m,u).mul(a.z);return _n(g,_,p)}}const zE=B(Ep),BE=(...i)=>zE(...i);D("triplanarTexture",BE);Q("TriplanarTexturesNode",Ep);new vi;new L;new L;new L;new _t;new L(0,0,-1);new tt;new L;new L;new tt;new xe;new wi;se(Br.x.oneMinus(),Br.y);class VE extends jc{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new tt(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}Q("VertexColorNode",VE);class Ap extends pr{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const kE=(i,e,t)=>le(new Ap(i,e,t));Q("RendererReferenceNode",Ap);const ya=1/6,Np=i=>dt(ya,dt(i,dt(i,i.negate().add(3)).sub(3)).add(1)),Mc=i=>dt(ya,dt(i,dt(i,dt(3,i).sub(6))).add(4)),bp=i=>dt(ya,dt(i,dt(i,dt(-3,i).add(3)).add(3)).add(1)),Sc=i=>dt(ya,Si(i,3)),Gh=i=>Np(i).add(Mc(i)),Wh=i=>bp(i).add(Sc(i)),Xh=i=>_n(-1,Mc(i).div(Np(i).add(Mc(i)))),$h=i=>_n(1,Sc(i).div(bp(i).add(Sc(i)))),qh=(i,e,t)=>{const n=i.uvNode,s=dt(n,e.zw).add(.5),r=pa(s),o=ma(s),a=Gh(o.x),l=Wh(o.x),c=Xh(o.x),u=$h(o.x),d=Xh(o.y),h=$h(o.y),m=se(r.x.add(c),r.y.add(d)).sub(.5).mul(e.xy),g=se(r.x.add(u),r.y.add(d)).sub(.5).mul(e.xy),_=se(r.x.add(c),r.y.add(h)).sub(.5).mul(e.xy),p=se(r.x.add(u),r.y.add(h)).sub(.5).mul(e.xy),f=Gh(o.y).mul(_n(a.mul(i.uv(m).level(t)),l.mul(i.uv(g).level(t)))),T=Wh(o.y).mul(_n(a.mul(i.uv(_).level(t)),l.mul(i.uv(p).level(t))));return f.add(T)},HE=(i,e)=>{const t=se(i.size(zt(e))),n=se(i.size(zt(e.add(1)))),s=Ci(1,t),r=Ci(1,n),o=qh(i,Me(s,t),pa(e)),a=qh(i,Me(r,n),Sf(e));return ma(e).mix(o,a)};class wp extends at{constructor(e,t=K(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return HE(this.textureNode,this.blurNode)}}const GE=B(wp);D("bicubic",GE);Q("TextureBicubicNode",wp);class Rp extends De{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}de(Rp);Q("PointUVNode",Rp);class qn extends De{constructor(e=qn.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===qn.BACKGROUND_BLURRINESS?s=In("backgroundBlurriness","float",n):t===qn.BACKGROUND_INTENSITY?s=In("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),s}}qn.BACKGROUND_BLURRINESS="backgroundBlurriness";qn.BACKGROUND_INTENSITY="backgroundIntensity";de(qn,qn.BACKGROUND_BLURRINESS);de(qn,qn.BACKGROUND_INTENSITY);Q("SceneNode",qn);const Yh={Uniform:"uniform",Storage:"storage",ReadOnlyStorage:"read-only-storage"},ml={WriteOnly:"write-only",ReadOnly:"read-only",ReadWrite:"read-write"};class WE extends va{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.access=Yh.Storage,this.bufferObject=!1,this.bufferCount=n,this._attribute=null,this._varying=null,this.global=!0,e.isStorageBufferAttribute!==!0&&e.isStorageInstancedBufferAttribute!==!0&&(e.isInstancedBufferAttribute?e.isStorageInstancedBufferAttribute=!0:e.isStorageBufferAttribute=!0)}getHash(e){if(this.bufferCount===0){let t=e.globalCache.getData(this.value);return t===void 0&&(t={node:this},e.globalCache.setData(this.value,t)),t.node.uuid}return this.uuid}getInputType(){return"storageBuffer"}element(e){return Tp(this,e)}setBufferObject(e){return this.bufferObject=e,this}setAccess(e){return this.access=e,this}toReadOnly(){return this.setAccess(Yh.ReadOnlyStorage)}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=xa(this.value),this._varying=Dt(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}Q("StorageBufferNode",WE);class Cp extends vs{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStorageTextureNode=!0,this.access=ml.WriteOnly}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}setAccess(e){return this.access=e,this}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}toReadOnly(){return this.setAccess(ml.ReadOnly)}toWriteOnly(){return this.setAccess(ml.WriteOnly)}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,r=super.generate(e,"property"),o=n.build(e,"uvec2"),a=s.build(e,"vec4"),l=e.generateTextureStore(e,r,o,a);e.addLineFlowCode(l)}}B(Cp);Q("StorageTextureNode",Cp);const XE=he(({texture:i,uv:e})=>{const n=W().temp();return Ct(e.x.lessThan(1e-4),()=>{n.assign(W(1,0,0))}).elseif(e.y.lessThan(1e-4),()=>{n.assign(W(0,1,0))}).elseif(e.z.lessThan(1e-4),()=>{n.assign(W(0,0,1))}).elseif(e.x.greaterThan(1-1e-4),()=>{n.assign(W(-1,0,0))}).elseif(e.y.greaterThan(1-1e-4),()=>{n.assign(W(0,-1,0))}).elseif(e.z.greaterThan(1-1e-4),()=>{n.assign(W(0,0,-1))}).else(()=>{const r=i.uv(e.add(W(-.01,0,0))).r.sub(i.uv(e.add(W(.01,0,0))).r),o=i.uv(e.add(W(0,-.01,0))).r.sub(i.uv(e.add(W(0,.01,0))).r),a=i.uv(e.add(W(0,0,-.01))).r.sub(i.uv(e.add(W(0,0,.01))).r);n.assign(W(r,o,a))}),n.normalize()});class Lp extends vs{constructor(e,t=null,n=null){super(e,t,n),this.isTexture3DNode=!0}getInputType(){return"texture3D"}getDefaultUV(){return W(.5,.5,.5)}setUpdateMatrix(){}setupUV(e,t){return t}generateUV(e,t){return t.build(e,"vec3")}normal(e){return XE({texture:this,uv:e})}}const $E=B(Lp);Q("Texture3DNode",Lp);class qE extends pr{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}Q("UserDataNode",qE);const YE=he(({base:i,blend:e})=>{const t=n=>e[n].lessThan(vf).cond(e[n],i[n].oneMinus().div(e[n]).oneMinus().max(0));return W(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),jE=he(({base:i,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],i[n].div(e[n].oneMinus()).max(0));return W(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),KE=he(({base:i,blend:e})=>{const t=n=>i[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return W(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),ZE=he(({base:i,blend:e})=>{const t=n=>i[n].lessThan(.5).cond(i[n].mul(e[n],2),i[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return W(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class Wt extends at{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,s={base:t,blend:n};let r=null;return e===Wt.BURN?r=YE(s):e===Wt.DODGE?r=jE(s):e===Wt.SCREEN?r=KE(s):e===Wt.OVERLAY&&(r=ZE(s)),r}}Wt.BURN="burn";Wt.DODGE="dodge";Wt.SCREEN="screen";Wt.OVERLAY="overlay";const JE=B(Wt,Wt.BURN),QE=B(Wt,Wt.DODGE),eA=B(Wt,Wt.OVERLAY),tA=B(Wt,Wt.SCREEN);D("burn",JE);D("dodge",QE);D("overlay",eA);D("screen",tA);Q("BlendModeNode",Wt);const nA=he(({textureNode:i,bumpScale:e})=>{const t=s=>i.cache().context({getUV:r=>s(r.uvNode||xn()),forceUVContext:!0}),n=K(t(s=>s));return se(K(t(s=>s.add(s.dFdx()))).sub(n),K(t(s=>s.add(s.dFdy()))).sub(n)).mul(e)}),iA=he(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),r=e.dFdy().normalize(),o=t,a=r.cross(o),l=o.cross(s),c=s.dot(a).mul(ta),u=c.sign().mul(n.x.mul(a).add(n.y.mul(l)));return c.abs().mul(t).sub(u).normalize()});class Pp extends at{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=nA({textureNode:this.textureNode,bumpScale:e});return iA({surf_pos:nn,surf_norm:qi,dHdxy:t})}}const sA=B(Pp);D("bumpMap",sA);Q("BumpMapNode",Pp);const rA=he(({color:i,adjustment:e})=>e.mix(Bn(i.rgb),i.rgb)),oA=he(({color:i,adjustment:e})=>{const t=_n(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return Ut(i.rgb,n,s)}),aA=he(({color:i,adjustment:e})=>{const t=W(.57735,.57735,.57735),n=e.cos();return W(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(ga(t,i.rgb).mul(n.oneMinus())))))});class gn extends at{constructor(e,t,n=K(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,s={color:t,adjustment:n};let r=null;return e===gn.SATURATION?r=rA(s):e===gn.VIBRANCE?r=oA(s):e===gn.HUE?r=aA(s):console.error(`${this.type}: Method "${this.method}" not supported!`),r}}gn.SATURATION="saturation";gn.VIBRANCE="vibrance";gn.HUE="hue";const lA=B(gn,gn.SATURATION),cA=B(gn,gn.VIBRANCE),uA=B(gn,gn.HUE),hA=W(.2125,.7154,.0721),Bn=(i,e=hA)=>ga(i,e),Ip=(i,e)=>Ut(W(0),i,Bn(i).sub(e).max(0));D("saturation",lA);D("vibrance",cA);D("hue",uA);D("threshold",Ip);Q("ColorAdjustmentNode",gn);const dA=he(i=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,r=e.dFdx(),o=e.dFdy(),a=s.dFdx(),l=s.dFdy(),c=t,u=o.cross(c),d=c.cross(r),h=u.mul(a.x).add(d.mul(l.x)),m=u.mul(a.y).add(d.mul(l.y)),g=h.dot(h).max(m.dot(m)),_=ta.mul(g.inverseSqrt());return _n(h.mul(n.x,_),m.mul(n.y,_),c.mul(n.z)).normalize()});class Dp extends at{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=bi}setup(e){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);n!==null&&(s=W(s.xy.mul(n),s.z));let r=null;return t===Ed?r=If.mul(s).normalize():t===bi&&(e.hasGeometryAttribute("tangent")===!0?r=Xs.mul(s).normalize():r=dA({eye_pos:nn,surf_norm:qi,mapN:s,uv:xn()})),r}}const fA=B(Dp);D("normalMap",fA);Q("NormalMapNode",Dp);class Up extends at{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const pA=B(Up);D("posterize",pA);Q("PosterizeNode",Up);const mA=he(({color:i,exposure:e})=>i.mul(e).clamp()),gA=he(({color:i,exposure:e})=>(i=i.mul(e),i.div(i.add(1)).clamp())),_A=he(({color:i,exposure:e})=>{i=i.mul(e),i=i.sub(.004).max(0);const t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),vA=he(({color:i})=>{const e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),xA=he(({color:i,exposure:e})=>{const t=on(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=on(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=vA({color:i}),i=n.mul(i),i.clamp()}),yA=on(W(1.6605,-.1246,-.0182),W(-.5876,1.1329,-.1006),W(-.0728,-.0083,1.1187)),MA=on(W(.6274,.0691,.0164),W(.3293,.9195,.088),W(.0433,.0113,.8956)),SA=he(([i])=>{const e=W(i).toVar(),t=W(e.mul(e)).toVar(),n=W(t.mul(t)).toVar();return K(15.5).mul(n.mul(t)).sub(dt(40.14,n.mul(e))).add(dt(31.96,n).sub(dt(6.868,t.mul(e))).add(dt(.4298,t).add(dt(.1191,e).sub(.00232))))}),TA=he(({color:i,exposure:e})=>{const t=W(i).toVar(),n=on(W(.856627153315983,.137318972929847,.11189821299995),W(.0951212405381588,.761241990602591,.0767994186031903),W(.0482516061458583,.101439036467562,.811302368396859)),s=on(W(1.1271005818144368,-.1413297634984383,-.14132976349843826),W(-.11060664309660323,1.157823702216272,-.11060664309660294),W(-.016493938717834573,-.016493938717834257,1.2519364065950405)),r=K(-12.47393),o=K(4.026069);return t.mulAssign(e),t.assign(MA.mul(t)),t.assign(n.mul(t)),t.assign(hn(t,1e-10)),t.assign(fa(t)),t.assign(t.sub(r).div(o.sub(r))),t.assign(ps(t,0,1)),t.assign(SA(t)),t.assign(s.mul(t)),t.assign(Si(hn(W(0),t),W(2.2))),t.assign(yA.mul(t)),t.assign(ps(t,0,1)),t}),EA=he(({color:i,exposure:e})=>{const t=K(.76),n=K(.15);i=i.mul(e);const s=Mi(i.r,Mi(i.g,i.b)),r=Pn(s.lessThan(.08),s.sub(dt(6.25,s.mul(s))),.04);i.subAssign(r);const o=hn(i.r,hn(i.g,i.b));Ct(o.lessThan(t),()=>i);const a=oi(1,t),l=oi(1,a.mul(a).div(o.add(a.sub(t))));i.mulAssign(l.div(o));const c=oi(1,Ci(1,n.mul(o.sub(l)).add(1)));return Ut(i,W(l),c)}).setLayout({name:"NeutralToneMapping",type:"vec3",inputs:[{name:"color",type:"vec3"},{name:"exposure",type:"float"}]}),AA={[ad]:mA,[ld]:gA,[cd]:_A,[ud]:xA,[hd]:TA,[dd]:EA};class Op extends at{constructor(e=bn,t=bA,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===bn)return t;const s={exposure:this.exposureNode,color:t},r=AA[n];let o=null;return r?o=r(s):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),o=t),o}}const NA=(i,e,t)=>le(new Op(i,le(e),le(t))),bA=kE("toneMappingExposure","float");D("toneMapping",(i,e,t)=>NA(e,t,i));Q("ToneMappingNode",Op);let gl=null;class Fp extends qr{constructor(e=Br,t=null){gl===null&&(gl=new $d),super(e,t,gl)}updateReference(){return this}}const wA=B(Fp);D("viewportSharedTexture",wA);Q("ViewportSharedTextureNode",Fp);const RA=new xe;class Tc extends vs{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class Yr extends at{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const s=new Xr;s.isRenderTargetTexture=!0,s.name="PostProcessingDepth";const r=new wi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ur});r.texture.name="PostProcessing",r.depthTexture=s,this.renderTarget=r,this.updateBeforeType=it.FRAME,this._textureNode=le(new Tc(this,r.texture)),this._depthTextureNode=le(new Tc(this,s)),this._linearDepthNode=null,this._viewZNode=null,this._cameraNear=ze(0),this._cameraFar=ze(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=rp(this._depthTextureNode,e,t)}return this._viewZNode}getLinearDepthNode(){if(this._linearDepthNode===null){const e=this._cameraNear,t=this._cameraFar;this._linearDepthNode=zo(this.getViewZNode(),e,t)}return this._linearDepthNode}setup(){return this.scope===Yr.COLOR?this.getTextureNode():this.getLinearDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();const r=t.getSize(RA);this.setSize(r.width,r.height);const o=t.toneMapping,a=t.toneMappingNode,l=t.getRenderTarget();this._cameraNear.value=s.near,this._cameraFar.value=s.far,t.toneMapping=bn,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,s),t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(l)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}Yr.COLOR="color";Yr.DEPTH="depth";const Ma=(i,e)=>le(new Tc(i,e));Q("PassNode",Yr);const _l=new zc(-1,1,1,-1,0,1);class CA extends ji{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new Ai([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ai(t,2))}}const LA=new CA;class jr extends Xn{constructor(e=null){super(LA,e),this.camera=_l}renderAsync(e){return e.renderAsync(this,_l)}render(e){e.render(this,_l)}}const jh=new jr,Kh=new jr;class PA extends at{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=se(1),this._invSize=ze(new xe),this._passDirection=ze(new xe),this._horizontalRT=new wi,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new wi,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=Ma(this,this._verticalRT.texture),this.updateBeforeType=it.RENDER,this.resolution=new xe(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,r=t.getRenderTarget(),o=n.value;jh.material=this._material,Kh.material=this._material,this.setSize(s.image.width,s.image.height);const a=s.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),jh.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),Kh.render(t),t.setRenderTarget(r),n.value=o}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Me();const n=t.uvNode||xn(),s=l=>t.cache().context({getUV:()=>l,forceUVContext:!0}),r=he(()=>{const l=3+2*this.sigma,c=this._getCoefficients(l),u=this._invSize,d=se(this.directionNode).mul(this._passDirection),h=K(c[0]).toVar(),m=Me(s(n).mul(h)).toVar();for(let g=1;g<l;g++){const _=K(g),p=K(c[g]),f=se(d.mul(u.mul(_))).toVar(),T=Me(s(n.add(f))),x=Me(s(n.sub(f)));m.addAssign(T.add(x).mul(p)),h.addAssign(dt(2,p))}return m.div(h)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const IA=(i,e)=>le(new PA(le(i),e));D("gaussianBlur",IA);const vl=new xe,Zh=new jr;class DA extends at{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=jt(),this.damp=ze(t),this._compRT=new wi,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new wi,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=Ma(this,this._compRT.texture),this.updateBeforeType=it.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,r=n.value.type;this._compRT.texture.type=r,this._oldRT.texture.type=r,t.getDrawingBufferSize(vl),this.setSize(vl.x,vl.y);const o=t.toneMapping,a=t.toneMappingNode,l=t.getRenderTarget(),c=n.value;this.textureNodeOld.value=this._oldRT.texture,t.toneMapping=bn,t.toneMappingNode=null,t.setRenderTarget(this._compRT),Zh.render(t);const u=this._oldRT;this._oldRT=this._compRT,this._compRT=u,t.toneMapping=o,t.toneMappingNode=a,t.setRenderTarget(l),n.value=c}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Me();const s=t.uvNode||xn();n.uvNode=s;const r=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),o=he(([u,d])=>{const h=K(d).toVar(),m=Me(u).toVar();return hn(iu(m.sub(h)),0)}),a=he(()=>{const u=Me(n),d=Me(r(s));return u.mulAssign(this.damp.mul(o(u,.1))),hn(d,u)}),l=this._materialComposed||(this._materialComposed=e.createNodeMaterial());l.fragmentNode=a(),Zh.material=l;const c=e.getNodeProperties(this);return c.textureNode=t,this._textureNode}}const UA=(i,e)=>le(new DA(le(i),e));D("afterImage",UA);const Jh=new jr;class OA extends at{constructor(e,t,n,s){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=W(.1,0,1),this.samples=s,this.resolution=new xe(1,1),this._renderTarget=new wi,this._renderTarget.texture.name="anamorphic",this._invSize=ze(new xe),this._textureNode=Ma(this,this._renderTarget.texture),this.updateBeforeType=it.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value;this._renderTarget.texture.type=s.type;const r=t.getRenderTarget(),o=n.value;Jh.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),Jh.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Me();const n=t.uvNode||xn(),s=l=>t.cache().context({getUV:()=>l,forceUVContext:!0}),r=he(()=>{const l=this.samples,c=Math.floor(l/2),u=W(0).toVar();return $n({start:-c,end:c},({i:d})=>{const h=K(d).abs().div(c).oneMinus(),m=se(n.x.add(this._invSize.x.mul(d).mul(this.scaleNode)),n.y),g=s(m),_=Ip(g,this.tresholdNode).mul(h);u.addAssign(_)}),u.mul(this.colorNode)}),o=this._material||(this._material=e.createNodeMaterial());o.fragmentNode=r();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const FA=(i,e=.9,t=3,n=32)=>le(new OA(le(i),le(e),le(t),n));D("anamorphic",FA);class zA extends at{constructor(e){super(),this.textureNode=e,this.updateBeforeType=it.RENDER,this._invSize=ze(new xe)}updateBefore(){const e=this.textureNode.value;this._invSize.value.set(1/e.image.width,1/e.image.height)}setup(){const{textureNode:e}=this,t=e.uvNode||xn(),n=o=>this.textureNode.cache().context({getUV:()=>o,forceUVContext:!0});return he(()=>{const o=this._invSize,a=on(-1,-2,-1,0,0,0,1,2,1),l=on(-1,0,1,-2,0,2,-1,0,1),c=Bn(n(t.add(o.mul(se(-1,-1)))).xyz),u=Bn(n(t.add(o.mul(se(-1,0)))).xyz),d=Bn(n(t.add(o.mul(se(-1,1)))).xyz),h=Bn(n(t.add(o.mul(se(0,-1)))).xyz),m=Bn(n(t.add(o.mul(se(0,0)))).xyz),g=Bn(n(t.add(o.mul(se(0,1)))).xyz),_=Bn(n(t.add(o.mul(se(1,-1)))).xyz),p=Bn(n(t.add(o.mul(se(1,0)))).xyz),f=Bn(n(t.add(o.mul(se(1,1)))).xyz),T=_n(a[0][0].mul(c),a[1][0].mul(h),a[2][0].mul(_),a[0][1].mul(u),a[1][1].mul(m),a[2][1].mul(p),a[0][2].mul(d),a[1][2].mul(g),a[2][2].mul(f)),x=_n(l[0][0].mul(c),l[1][0].mul(h),l[2][0].mul(_),l[0][1].mul(u),l[1][1].mul(m),l[2][1].mul(p),l[0][2].mul(d),l[1][2].mul(g),l[2][2].mul(f)),N=T.mul(T).add(x.mul(x)).sqrt();return Me(W(N),1)})()}}const BA=i=>le(new zA(le(i)));D("sobel",BA);class VA extends at{constructor(e,t,n=1,s=.025,r=1){super(),this.textureNode=e,this.viewZNode=t,this.focus=ze(n),this.aperture=ze(s),this.maxblur=ze(r),this._aspect=ze(0),this.updateBeforeType=it.RENDER}updateBefore(){const e=this.textureNode.value;this._aspect.value=e.image.width/e.image.height}setup(){const{textureNode:e}=this,t=e.uvNode||xn(),n=o=>this.textureNode.uv(o);return he(()=>{const o=se(1,this._aspect),a=this.focus.add(this.viewZNode),l=se(ps(a.mul(this.aperture),this.maxblur.negate(),this.maxblur)),c=l.mul(.9),u=l.mul(.7),d=l.mul(.4);let h=Me(0);return h=h.add(n(t)),h=h.add(n(t.add(se(0,.4).mul(o).mul(l)))),h=h.add(n(t.add(se(.15,.37).mul(o).mul(l)))),h=h.add(n(t.add(se(.29,.29).mul(o).mul(l)))),h=h.add(n(t.add(se(-.37,.15).mul(o).mul(l)))),h=h.add(n(t.add(se(.4,0).mul(o).mul(l)))),h=h.add(n(t.add(se(.37,-.15).mul(o).mul(l)))),h=h.add(n(t.add(se(.29,-.29).mul(o).mul(l)))),h=h.add(n(t.add(se(-.15,-.37).mul(o).mul(l)))),h=h.add(n(t.add(se(0,-.4).mul(o).mul(l)))),h=h.add(n(t.add(se(-.15,.37).mul(o).mul(l)))),h=h.add(n(t.add(se(-.29,.29).mul(o).mul(l)))),h=h.add(n(t.add(se(.37,.15).mul(o).mul(l)))),h=h.add(n(t.add(se(-.4,0).mul(o).mul(l)))),h=h.add(n(t.add(se(-.37,-.15).mul(o).mul(l)))),h=h.add(n(t.add(se(-.29,-.29).mul(o).mul(l)))),h=h.add(n(t.add(se(.15,-.37).mul(o).mul(l)))),h=h.add(n(t.add(se(.15,.37).mul(o).mul(c)))),h=h.add(n(t.add(se(-.37,.15).mul(o).mul(c)))),h=h.add(n(t.add(se(.37,-.15).mul(o).mul(c)))),h=h.add(n(t.add(se(-.15,-.37).mul(o).mul(c)))),h=h.add(n(t.add(se(-.15,.37).mul(o).mul(c)))),h=h.add(n(t.add(se(.37,.15).mul(o).mul(c)))),h=h.add(n(t.add(se(-.37,-.15).mul(o).mul(c)))),h=h.add(n(t.add(se(.15,-.37).mul(o).mul(c)))),h=h.add(n(t.add(se(.29,.29).mul(o).mul(u)))),h=h.add(n(t.add(se(.4,0).mul(o).mul(u)))),h=h.add(n(t.add(se(.29,-.29).mul(o).mul(u)))),h=h.add(n(t.add(se(0,-.4).mul(o).mul(u)))),h=h.add(n(t.add(se(-.29,.29).mul(o).mul(u)))),h=h.add(n(t.add(se(-.4,0).mul(o).mul(u)))),h=h.add(n(t.add(se(-.29,-.29).mul(o).mul(u)))),h=h.add(n(t.add(se(0,.4).mul(o).mul(u)))),h=h.add(n(t.add(se(.29,.29).mul(o).mul(d)))),h=h.add(n(t.add(se(.4,0).mul(o).mul(d)))),h=h.add(n(t.add(se(.29,-.29).mul(o).mul(d)))),h=h.add(n(t.add(se(0,-.4).mul(o).mul(d)))),h=h.add(n(t.add(se(-.29,.29).mul(o).mul(d)))),h=h.add(n(t.add(se(-.4,0).mul(o).mul(d)))),h=h.add(n(t.add(se(-.29,-.29).mul(o).mul(d)))),h=h.add(n(t.add(se(0,.4).mul(o).mul(d)))),h=h.div(41),h.a=1,Me(h)})()}}const kA=(i,e,t,n,s)=>le(new VA(le(i),le(e),t,n,s));D("dof",kA);const Qh=new jr;class HA extends at{constructor(e,t=new xe(.5,.5),n=1.57,s=1){super("vec4"),this.colorNode=e,this.center=ze(t),this.angle=ze(n),this.scale=ze(s),this._renderTarget=new wi,this._renderTarget.texture.name="dotScreen",this._size=ze(new xe),this._textureNode=Ma(this,this._renderTarget.texture),this.updateBeforeType=it.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._size.value.set(e,t),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.colorNode,s=n.value;this._renderTarget.texture.type=s.type;const r=t.getRenderTarget(),o=n.value;Qh.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),Qh.render(t),t.setRenderTarget(r),n.value=o}setup(e){const t=this.colorNode,n=he(()=>{const a=Nn(this.angle),l=Jn(this.angle),c=xn().mul(this._size).sub(this.center),u=se(l.mul(c.x).sub(a.mul(c.y)),a.mul(c.x).add(l.mul(c.y))).mul(this.scale);return Nn(u.x).mul(Nn(u.y)).mul(4)}),s=he(()=>{const a=t,l=_n(a.r,a.g,a.b).div(3);return Me(W(l.mul(10).sub(5).add(n())),a.a)}),r=this._material||(this._material=e.createNodeMaterial());r.fragmentNode=s();const o=e.getNodeProperties(this);return o.textureNode=t,this._textureNode}}const GA=(i,e,t,n)=>le(new HA(le(i),e,t,n));D("dotScreen",GA);class WA extends at{constructor(e,t=.005,n=0){super("vec4"),this.textureNode=e,this.amount=ze(t),this.angle=ze(n),this.updateBeforeType=it.RENDER}updateBefore(){}setup(){const{textureNode:e}=this,t=e.uvNode||xn(),n=r=>this.textureNode.uv(r);return he(()=>{const r=se(Jn(this.angle),Nn(this.angle)).mul(this.amount),o=n(t.add(r)),a=n(t),l=n(t.sub(r));return Me(o.r,a.g,l.b,a.a)})()}}const XA=(i,e,t)=>le(new WA(le(i),e,t));D("rgbShift",XA);class zp extends at{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),r=this.parameters;if(Array.isArray(r))for(let a=0;a<r.length;a++){const l=s[a],c=r[a];t.push(c.build(e,l.type))}else for(const a of s){const l=r[a.name];if(l!==void 0)t.push(l.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const $A=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?Ys(e):ha(e[0]),le(new zp(le(i),e)));D("call",$A);Q("FunctionCallNode",zp);class Bp extends De{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new Li,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:K()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=Jd(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=Qd(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const Bo=B(Bp);D("scriptableValue",Bo);Q("ScriptableValueNode",Bp);class Vp extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const s=t(...n);return this.set(e,s),s}}}class qA{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const xl=new Vp;class kp extends De{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new Vp,this._output=Bo(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=Bo(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=Bo(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(c,u)=>this.setOutput(c,u),n=new qA(this),s=xl.get("THREE"),r=xl.get("TSL"),o=this.getMethod(this.codeNode),a=[n,this._local,xl,e,t,s,r];this._object=o(...a);const l=this._object.layout;if(l&&(l.cache===!1&&this._local.clear(),this._output.outputType=l.outputType||null,Array.isArray(l.elements)))for(const c of l.elements){const u=c.id||c.name;c.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=c.inputType),c.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=c.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:K()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,r=`
return { ...output, `+n+" };",o=s+this.codeNode.code+r;return this._method=new Function(...e,o),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const YA=B(kp);D("scriptable",YA);Q("ScriptableNode",kp);class Sa extends De{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||nn.z).negate()}setup(){return this.factorNode}}const jA=B(Sa);D("fog",jA);Q("FogNode",Sa);class Hp extends Sa{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return ai(this.nearNode,this.farNode,t)}}const KA=B(Hp);D("rangeFog",KA);Q("FogRangeNode",Hp);class Gp extends Sa{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const ZA=B(Gp);D("densityFog",ZA);Q("FogExp2Node",Gp);let ss=null,rs=null;class Wp extends De{constructor(e=K(),t=K()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(Gi(this.minNode.value)),n=e.getTypeLength(Gi(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.count>1?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.count>1){const s=this.minNode.value,r=this.maxNode.value,o=e.getTypeLength(Gi(s)),a=e.getTypeLength(Gi(r));ss=ss||new tt,rs=rs||new tt,ss.setScalar(0),rs.setScalar(0),o===1?ss.setScalar(s):s.isColor?ss.set(s.r,s.g,s.b):ss.set(s.x,s.y,s.z||0,s.w||0),a===1?rs.setScalar(r):r.isColor?rs.set(r.r,r.g,r.b):rs.set(r.x,r.y,r.z||0,r.w||0);const l=4,c=l*t.count,u=new Float32Array(c);for(let h=0;h<c;h++){const m=h%l,g=ss.getComponent(m),_=rs.getComponent(m);u[h]=Pc.lerp(g,_,Math.random())}const d=this.getNodeType(e);if(t.count<=4096)n=su(u,"vec4",t.count).element(Zc).convert(d);else{const h=new Gd(u,4);e.geometry.setAttribute("__range"+this.id,h),n=mc(h).convert(d)}}else n=K(0);return n}}B(Wp);Q("RangeNode",Wp);class Xp extends De{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=it.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const JA=(i,e,t)=>le(new Xp(le(i),e,t));D("compute",JA);Q("ComputeNode",Xp);class gs extends De{constructor(e=gs.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===gs.TARGET_DIRECTION&&(n=mr.transformDirection(dc(t).sub(dc(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}gs.TARGET_DIRECTION="targetDirection";const $p=B(gs,gs.TARGET_DIRECTION);Q("LightNode",gs);const qp=he(i=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)});class Yp extends Ki{constructor(e=null){super(e),this.cutoffDistanceNode=ze(0),this.decayExponentNode=ze(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:s,light:r}=this,o=e.context.lightingModel,a=ru(r).sub(nn),l=a.normalize(),c=a.length(),u=qp({lightDistance:c,cutoffDistance:n,decayExponent:s}),d=t.mul(u),h=e.context.reflectedLight;o.direct({lightDirection:l,lightColor:d,reflectedLight:h,shadowMask:this.shadowMaskNode},e.stack,e)}}Q("PointLightNode",Yp);ys($y,Yp);class jp extends Ki{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,s=$p(this.light),r=e.context.reflectedLight;t.direct({lightDirection:s,lightColor:n,reflectedLight:r,shadowMask:this.shadowMaskNode},e.stack,e)}}Q("DirectionalLightNode",jp);ys(Yy,jp);const yl=new _t,No=new _t;let bo,Ml;class Kp extends Ki{constructor(e=null){super(e),this.halfHeight=ze(new L),this.halfWidth=ze(new L)}update(e){super.update(e);const{light:t}=this,n=e.camera.matrixWorldInverse;No.identity(),yl.copy(t.matrixWorld),yl.premultiply(n),No.extractRotation(yl),this.halfWidth.value.set(t.width*.5,0,0),this.halfHeight.value.set(0,t.height*.5,0),this.halfWidth.value.applyMatrix4(No),this.halfHeight.value.applyMatrix4(No)}setup(e){super.setup(e),bo===void 0&&(e.isAvailable("float32Filterable")?(bo=jt(pe.LTC_FLOAT_1),Ml=jt(pe.LTC_FLOAT_2)):(bo=jt(pe.LTC_HALF_1),Ml=jt(pe.LTC_HALF_2)));const{colorNode:t,light:n}=this,s=e.context.lightingModel,r=ru(n),o=e.context.reflectedLight;s.directRectArea({lightColor:t,lightPosition:r,halfWidth:this.halfWidth,halfHeight:this.halfHeight,reflectedLight:o,ltc_1:bo,ltc_2:Ml},e.stack,e)}}Q("RectAreaLightNode",Kp);ys(Ky,Kp);class cu extends Ki{constructor(e=null){super(e),this.coneCosNode=ze(0),this.penumbraCosNode=ze(0),this.cutoffDistanceNode=ze(0),this.decayExponentNode=ze(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return ai(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:s,decayExponentNode:r,light:o}=this,a=ru(o).sub(nn),l=a.normalize(),c=l.dot($p(o)),u=this.getSpotAttenuation(c),d=a.length(),h=qp({lightDistance:d,cutoffDistance:s,decayExponent:r}),m=n.mul(u).mul(h),g=e.context.reflectedLight;t.direct({lightDirection:l,lightColor:m,reflectedLight:g,shadowMask:this.shadowMaskNode},e.stack,e)}}Q("SpotLightNode",cu);ys(jd,cu);class Zp extends cu{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const s=e.acos().mul(1/Math.PI);n=jt(t,se(s,0),0).r}else n=super.getSpotAttenuation(e);return n}}Q("IESSpotLightNode",Zp);ys(fM,Zp);class Jp extends Ki{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}Q("AmbientLightNode",Jp);ys(jy,Jp);class Qp extends Ki{constructor(e=null){super(e),this.lightPositionNode=dc(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=ze(new Ie)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:s}=this,o=qi.dot(s).mul(.5).add(.5),a=Ut(n,t,o);e.context.irradiance.addAssign(a)}}Q("HemisphereLightNode",Qp);ys(Gy,Qp);const QA=he(i=>{const e=i.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class em extends at{constructor(e=xn()){super("float"),this.uvNode=e}setup(){return QA({uv:this.uvNode})}}const eN=B(em);D("checker",eN);Q("CheckerNode",em);const tN=new Xd;class nN extends an{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(tN),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=he(()=>{Dt(se(),"vUv").assign(xn());const n=en("instancePosition"),s=Tt("vec4","mvPos");s.assign(ms.mul(Me(n,1)));const r=Qs.z.div(Qs.w),o=ei.mul(s),a=Tt("vec2","offset");return a.assign(un.xy),a.assign(a.mul(GT)),a.assign(a.div(Qs.z)),a.y.assign(a.y.mul(r)),a.assign(a.mul(o.w)),o.assign(o.add(Me(a,0,0))),o})(),this.fragmentNode=he(()=>{const n=Dt(se(),"vUv"),s=Tt("float","alpha");s.assign(1);const r=n.x,o=n.y,a=r.mul(r).add(o.mul(o));if(e){const c=Tt("float","dlen");c.assign(a.fwidth()),s.assign(ai(c.oneMinus(),c.add(1),a).oneMinus())}else a.greaterThan(1).discard();let l;return this.pointColorNode?l=this.pointColorNode:t?l=en("instanceColor").mul(zr):l=zr,Me(l,s)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}Xt("InstancedPointsNodeMaterial",nN);const iN=new Wd;class sN extends an{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(iN),this.setValues(e)}}Xt("LineBasicNodeMaterial",sN);const rN=new Yd;class oN extends an{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(rN),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?K(this.dashScaleNode):fc,n=this.dashSizeNode?K(this.dashSizeNode):Of,s=this.dashSizeNode?K(this.dashGapNode):Ff;Zs.assign(n),Ko.assign(s);const r=Dt(en("lineDistance").mul(t));(e?r.add(e):r).mod(Zs.add(Ko)).greaterThan(Zs).discard()}}Xt("LineDashedNodeMaterial",oN);const aN=new Yd;class lN extends an{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(aN),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setup(e){this.setupShaders(),super.setup(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,s=this.worldUnits,r=he(({start:a,end:l})=>{const c=ei.element(2).element(2),h=ei.element(3).element(2).mul(-.5).div(c).sub(a.z).div(l.z.sub(a.z));return Me(Ut(a.xyz,l.xyz,h),l.w)});this.vertexNode=he(()=>{Kn("vec2","vUv").assign(xn());const a=en("instanceStart"),l=en("instanceEnd"),c=Tt("vec4","start"),u=Tt("vec4","end");c.assign(ms.mul(Me(a,1))),u.assign(ms.mul(Me(l,1))),s&&(Kn("vec3","worldStart").assign(c.xyz),Kn("vec3","worldEnd").assign(u.xyz));const d=Qs.z.div(Qs.w),h=ei.element(2).element(3).equal(-1);Ct(h,()=>{Ct(c.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(r({start:c,end:u}))}).elseif(u.z.lessThan(0).and(c.z.greaterThanEqual(0)),()=>{c.assign(r({start:u,end:c}))})});const m=ei.mul(c),g=ei.mul(u),_=m.xyz.div(m.w),p=g.xyz.div(g.w),f=p.xy.sub(_.xy).temp();f.x.assign(f.x.mul(d)),f.assign(f.normalize());const T=$o(Me());if(s){const x=u.xyz.sub(c.xyz).normalize(),N=Ut(c.xyz,u.xyz,.5).normalize(),F=x.cross(N).normalize(),R=x.cross(F),A=Kn("vec4","worldPos");A.assign(un.y.lessThan(.5).cond(c,u));const U=rl.mul(.5);A.addAssign(Me(un.x.lessThan(0).cond(F.mul(U),F.mul(U).negate()),0)),n||(A.addAssign(Me(un.y.lessThan(.5).cond(x.mul(U).negate(),x.mul(U)),0)),A.addAssign(Me(R.mul(U),0)),Ct(un.y.greaterThan(1).or(un.y.lessThan(0)),()=>{A.subAssign(Me(R.mul(2).mul(U),0))})),T.assign(ei.mul(A));const E=$o(W());E.assign(un.y.lessThan(.5).cond(_,p)),T.z.assign(E.z.mul(T.w))}else{const x=Tt("vec2","offset");x.assign(se(f.y,f.x.negate())),f.x.assign(f.x.div(d)),x.x.assign(x.x.div(d)),x.assign(un.x.lessThan(0).cond(x.negate(),x)),Ct(un.y.lessThan(0),()=>{x.assign(x.sub(f))}).elseif(un.y.greaterThan(1),()=>{x.assign(x.add(f))}),x.assign(x.mul(rl)),x.assign(x.div(Qs.w)),T.assign(un.y.lessThan(.5).cond(m,g)),x.assign(x.mul(T.w)),T.assign(T.add(Me(x,0,0)))}return T})();const o=he(({p1:a,p2:l,p3:c,p4:u})=>{const d=a.sub(c),h=u.sub(c),m=l.sub(a),g=d.dot(h),_=h.dot(m),p=d.dot(m),f=h.dot(h),x=m.dot(m).mul(f).sub(_.mul(_)),F=g.mul(_).sub(p.mul(f)).div(x).clamp(),R=g.add(_.mul(F)).div(f).clamp();return se(F,R)});this.fragmentNode=he(()=>{const a=Kn("vec2","vUv");if(n){const u=this.offsetNode?K(this.offsetNodeNode):Ih,d=this.dashScaleNode?K(this.dashScaleNode):fc,h=this.dashSizeNode?K(this.dashSizeNode):Of,m=this.dashSizeNode?K(this.dashGapNode):Ff;Zs.assign(h),Ko.assign(m);const g=en("instanceDistanceStart"),_=en("instanceDistanceEnd"),p=un.y.lessThan(.5).cond(d.mul(g),fc.mul(_)),f=Dt(p.add(Ih)),T=u?f.add(u):f;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),T.mod(Zs.add(Ko)).greaterThan(Zs).discard()}const l=Tt("float","alpha");if(l.assign(1),s){const u=Kn("vec3","worldStart"),d=Kn("vec3","worldEnd"),h=Kn("vec4","worldPos").xyz.normalize().mul(1e5),m=d.sub(u),g=o({p1:u,p2:d,p3:W(0,0,0),p4:h}),_=u.add(m.mul(g.x)),p=h.mul(g.y),x=_.sub(p).length().div(rl);if(!n)if(e){const N=x.fwidth();l.assign(ai(N.negate().add(.5),N.add(.5),x).oneMinus())}else x.greaterThan(.5).discard()}else if(e){const u=a.x,d=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),h=u.mul(u).add(d.mul(d)),m=Tt("float","dlen");m.assign(h.fwidth()),Ct(a.y.abs().greaterThan(1),()=>{l.assign(ai(m.oneMinus(),m.add(1),h).oneMinus())})}else Ct(a.y.abs().greaterThan(1),()=>{const u=a.x,d=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(d.mul(d)).greaterThan(1).discard()});let c;if(this.lineColorNode)c=this.lineColorNode;else if(t){const u=en("instanceColorStart"),d=en("instanceColorEnd");c=un.y.lessThan(.5).cond(u,d).mul(zr)}else c=zr;return Me(c,l)})()}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.needsUpdate=!0)}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.needsUpdate=!0)}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.needsUpdate=!0)}}Xt("Line2NodeMaterial",lN);const cN=new Oy;class uN extends an{constructor(e){super(),this.lights=!1,this.isMeshNormalNodeMaterial=!0,this.setDefaultValues(cN),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?K(this.opacityNode):Uf;gt.assign(Me(vp(wt),e))}}Xt("MeshNormalNodeMaterial",uN);const hN=new Oc;class dN extends an{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(hN),this.setValues(e)}}Xt("MeshBasicNodeMaterial",dN);const Vr=he(({f0:i,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),lr=he(i=>i.diffuseColor.mul(1/Math.PI)),fN=()=>K(.25),pN=he(({dotNH:i})=>lc.mul(K(.5)).add(1).mul(K(1/Math.PI)).mul(i.pow(lc))),mN=he(({lightDirection:i})=>{const e=i.add(St).normalize(),t=wt.dot(e).clamp(),n=St.dot(e).clamp(),s=Vr({f0:An,f90:1,dotVH:n}),r=fN(),o=pN({dotNH:t});return s.mul(r).mul(o)});class tm extends da{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=wt.dot(e).clamp().mul(t);n.directDiffuse.addAssign(r.mul(lr({diffuseColor:gt.rgb}))),this.specular===!0&&n.directSpecular.addAssign(r.mul(mN({lightDirection:e})).mul(ET))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(lr({diffuseColor:gt})))}}const gN=new Fy;class _N extends an{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(gN),this.setValues(e)}setupLightingModel(){return new tm(!1)}}Xt("MeshLambertNodeMaterial",_N);const vN=new Dy;class xN extends an{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(vN),this.setValues(e)}setupLightingModel(){return new tm}setupVariants(){const e=(this.shininessNode?K(this.shininessNode):yT).max(1e-4);lc.assign(e);const t=this.specularNode||ST;An.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}Xt("MeshPhongNodeMaterial",xN);const yN=he(()=>{const i=Jo.dFdx().abs().max(Jo.dFdy().abs());return i.x.max(i.y).max(i.z)}),nm=he(i=>{const{roughness:e}=i,t=yN();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),MN=he(({alpha:i,dotNL:e,dotNV:t})=>{const n=i.pow2(),s=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt()),r=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt());return Ci(.5,s.add(r).max(vf))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),SN=he(({alphaT:i,alphaB:e,dotTV:t,dotBV:n,dotTL:s,dotBL:r,dotNV:o,dotNL:a})=>{const l=a.mul(W(i.mul(t),e.mul(n),o).length()),c=o.mul(W(i.mul(s),e.mul(r),a).length());return Ci(.5,l.add(c)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),TN=he(({alpha:i,dotNH:e})=>{const t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),EN=K(1/Math.PI),AN=he(({alphaT:i,alphaB:e,dotNH:t,dotTH:n,dotBH:s})=>{const r=i.mul(e),o=W(e.mul(n),i.mul(s),r.mul(t)),a=o.dot(o),l=r.div(a);return EN.mul(r.mul(l.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),ed=he(i=>{const{lightDirection:e,f0:t,f90:n,roughness:s,f:r,USE_IRIDESCENCE:o,USE_ANISOTROPY:a}=i,l=i.normalView||wt,c=s.pow2(),u=e.add(St).normalize(),d=l.dot(e).clamp(),h=l.dot(St).clamp(),m=l.dot(u).clamp(),g=St.dot(u).clamp();let _=Vr({f0:t,f90:n,dotVH:g}),p,f;if(bh(o)&&(_=Qc.mix(_,r)),bh(a)){const T=Oo.dot(e),x=Oo.dot(St),N=Oo.dot(u),F=Ks.dot(e),R=Ks.dot(St),A=Ks.dot(u);p=SN({alphaT:ac,alphaB:c,dotTV:x,dotBV:R,dotTL:T,dotBL:F,dotNV:h,dotNL:d}),f=AN({alphaT:ac,alphaB:c,dotNH:m,dotTH:N,dotBH:A})}else p=MN({alpha:c,dotNL:d,dotNV:h}),f=TN({alpha:c,dotNH:m});return _.mul(p).mul(f)}),im=he(({roughness:i,dotNV:e})=>{const t=Me(-1,-.0275,-.572,.022),n=Me(1,.0425,1.04,-.04),s=i.mul(t).add(n),r=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return se(-1.04,1.04).mul(r).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),sm=he(i=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:s}=i,r=im({dotNV:e,roughness:s});return t.mul(r.x).add(n.mul(r.y))}),NN=he(({f:i,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),s=n.mul(n),r=n.mul(s,s).clamp(0,.9999);return i.sub(W(e).mul(r)).div(r.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),bN=he(({roughness:i,dotNH:e})=>{const t=i.pow2(),n=K(1).div(t),r=e.pow2().oneMinus().max(.0078125);return K(2).add(n).mul(r.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),wN=he(({dotNV:i,dotNL:e})=>K(1).div(K(4).mul(e.add(i).sub(e.mul(i))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),RN=he(({lightDirection:i})=>{const e=i.add(St).normalize(),t=wt.dot(i).clamp(),n=wt.dot(St).clamp(),s=wt.dot(e).clamp(),r=bN({roughness:Jc,dotNH:s}),o=wN({dotNV:n,dotNL:t});return Gs.mul(r).mul(o)}),CN=he(({N:i,V:e,roughness:t})=>{const r=.0078125,o=i.dot(e).saturate(),a=se(t,o.oneMinus().sqrt());return a.assign(a.mul(.984375).add(r)),a}).setLayout({name:"LTC_Uv",type:"vec2",inputs:[{name:"N",type:"vec3"},{name:"V",type:"vec3"},{name:"roughness",type:"float"}]}),LN=he(({f:i})=>{const e=i.length();return hn(e.mul(e).add(i.z).div(e.add(1)),0)}).setLayout({name:"LTC_ClippedSphereFormFactor",type:"float",inputs:[{name:"f",type:"vec3"}]}),wo=he(({v1:i,v2:e})=>{const t=i.dot(e),n=t.abs().toVar(),s=n.mul(.0145206).add(.4965155).mul(n).add(.8543985).toVar(),r=n.add(4.1616724).mul(n).add(3.417594).toVar(),o=s.div(r),a=t.greaterThan(0).cond(o,hn(t.mul(t).oneMinus(),1e-7).inverseSqrt().mul(.5).sub(o));return i.cross(e).mul(a)}).setLayout({name:"LTC_EdgeVectorFormFactor",type:"vec3",inputs:[{name:"v1",type:"vec3"},{name:"v2",type:"vec3"}]}),td=he(({N:i,V:e,P:t,mInv:n,p0:s,p1:r,p2:o,p3:a})=>{const l=r.sub(s).toVar(),c=a.sub(s).toVar(),u=l.cross(c),d=W().toVar();return Ct(u.dot(t.sub(s)).greaterThanEqual(0),()=>{const h=e.sub(i.mul(e.dot(i))).normalize(),m=i.cross(h).negate(),g=n.mul(on(h,m,i).transpose()).toVar(),_=g.mul(s.sub(t)).normalize().toVar(),p=g.mul(r.sub(t)).normalize().toVar(),f=g.mul(o.sub(t)).normalize().toVar(),T=g.mul(a.sub(t)).normalize().toVar(),x=W(0).toVar();x.addAssign(wo({v1:_,v2:p})),x.addAssign(wo({v1:p,v2:f})),x.addAssign(wo({v1:f,v2:T})),x.addAssign(wo({v1:T,v2:_})),d.assign(W(LN({f:x})))}),d}).setLayout({name:"LTC_Evaluate",type:"vec3",inputs:[{name:"N",type:"vec3"},{name:"V",type:"vec3"},{name:"P",type:"vec3"},{name:"mInv",type:"mat3"},{name:"p0",type:"vec3"},{name:"p1",type:"vec3"},{name:"p2",type:"vec3"},{name:"p3",type:"vec3"}]}),nd=he(([i,e,t,n,s])=>{const r=W(Af(e.negate(),Or(i),Ci(1,n))),o=W(Js(s[0].xyz),Js(s[1].xyz),Js(s[2].xyz));return Or(r).mul(t.mul(o))}).setLayout({name:"getVolumeTransmissionRay",type:"vec3",inputs:[{name:"n",type:"vec3"},{name:"v",type:"vec3"},{name:"thickness",type:"float"},{name:"ior",type:"float"},{name:"modelMatrix",type:"mat4"}]}),PN=he(([i,e])=>i.mul(ps(e.mul(2).sub(2),0,1))).setLayout({name:"applyIorToRoughness",type:"float",inputs:[{name:"roughness",type:"float"},{name:"ior",type:"float"}]}),IN=np(),id=he(([i,e,t])=>{const n=IN.uv(i),s=fa(K(vc.x)).mul(PN(e,t));return n.bicubic(s)}),sd=he(([i,e,t])=>(Ct(t.notEqual(0),()=>{const n=Mf(e).negate().div(t);return yf(n.negate().mul(i))}),W(1))).setLayout({name:"volumeAttenuation",type:"vec3",inputs:[{name:"transmissionDistance",type:"float"},{name:"attenuationColor",type:"vec3"},{name:"attenuationDistance",type:"float"}]}),DN=he(([i,e,t,n,s,r,o,a,l,c,u,d,h,m,g])=>{let _,p;if(g){_=Me().toVar(),p=W().toVar();const F=u.sub(1).mul(g.mul(.025)),R=W(u.sub(F),u,u.add(F));$n({start:0,end:3},({i:A})=>{const U=R.element(A),E=nd(i,e,d,U,a),S=o.add(E),C=c.mul(l.mul(Me(S,1))),Y=se(C.xy.div(C.w)).toVar();Y.addAssign(1),Y.divAssign(2),Y.assign(se(Y.x,Y.y.oneMinus()));const X=id(Y,t,U);_.element(A).assign(X.element(A)),_.a.addAssign(X.a),p.element(A).assign(n.element(A).mul(sd(Js(E),h,m).element(A)))}),_.a.divAssign(3)}else{const F=nd(i,e,d,u,a),R=o.add(F),A=c.mul(l.mul(Me(R,1))),U=se(A.xy.div(A.w)).toVar();U.addAssign(1),U.divAssign(2),U.assign(se(U.x,U.y.oneMinus())),_=id(U,t,u),p=n.mul(sd(Js(F),h,m))}const f=p.rgb.mul(_.rgb),T=i.dot(e).clamp(),x=W(sm({dotNV:T,specularColor:s,specularF90:r,roughness:t})),N=p.r.add(p.g,p.b).div(3);return Me(x.oneMinus().mul(f),_.a.oneMinus().mul(N).oneMinus())}),UN=on(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),ON=i=>{const e=i.sqrt();return W(1).add(e).div(W(1).sub(e))},rd=(i,e)=>i.sub(e).div(i.add(e)).pow2(),FN=(i,e)=>{const t=i.mul(2*Math.PI*1e-9),n=W(54856e-17,44201e-17,52481e-17),s=W(1681e3,1795300,2208400),r=W(43278e5,93046e5,66121e5),o=K(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(r.mul(2*Math.PI).sqrt()).mul(s.mul(t).add(e).cos()).mul(t.pow2().negate().mul(r).exp());return a=W(a.x.add(o),a.y,a.z).div(10685e-11),UN.mul(a)},zN=he(({outsideIOR:i,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:s})=>{const r=Ut(i,e,ai(0,.03,n)),o=i.div(r).pow2().mul(K(1).sub(t.pow2())),l=K(1).sub(o).sqrt(),c=rd(r,i),u=Vr({f0:c,f90:1,dotVH:t}),d=u.oneMinus(),h=r.lessThan(i).cond(Math.PI,0),m=K(Math.PI).sub(h),g=ON(s.clamp(0,.9999)),_=rd(g,r.toVec3()),p=Vr({f0:_,f90:1,dotVH:l}),f=W(g.x.lessThan(r).cond(Math.PI,0),g.y.lessThan(r).cond(Math.PI,0),g.z.lessThan(r).cond(Math.PI,0)),T=r.mul(n,l,2),x=W(m).add(f),N=u.mul(p).clamp(1e-5,.9999),F=N.sqrt(),R=d.pow2().mul(p).div(W(1).sub(N));let U=u.add(R),E=R.sub(d);for(let S=1;S<=2;++S){E=E.mul(F);const C=FN(K(S).mul(T),K(S).mul(x)).mul(2);U=U.add(E.mul(C))}return U.max(W(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),BN=he(({normal:i,viewDir:e,roughness:t})=>{const n=i.dot(e).saturate(),s=t.pow2(),r=Pn(t.lessThan(.25),K(-339.2).mul(s).add(K(161.4).mul(t)).sub(25.9),K(-8.48).mul(s).add(K(14.3).mul(t)).sub(9.95)),o=Pn(t.lessThan(.25),K(44).mul(s).sub(K(23.7).mul(t)).add(3.26),K(1.97).mul(s).sub(K(3.27).mul(t)).add(.72));return Pn(t.lessThan(.25),0,K(.1).mul(t).sub(.025)).add(r.mul(n).add(o).exp()).mul(1/Math.PI).saturate()}),Sl=W(.04),Tl=K(1);class uu extends da{constructor(e=!1,t=!1,n=!1,s=!1,r=!1,o=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.anisotropy=s,this.transmission=r,this.dispersion=o,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(e){if(this.clearcoat===!0&&(this.clearcoatRadiance=W().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=W().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=W().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=W().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=W().temp("sheenSpecularIndirect")),this.iridescence===!0){const t=wt.dot(St).clamp();this.iridescenceFresnel=zN({outsideIOR:K(1),eta2:hf,cosTheta1:t,thinFilmThickness:df,baseF0:An}),this.iridescenceF0=NN({f:this.iridescenceFresnel,f90:1,dotVH:t})}if(this.transmission===!0){const t=pc,n=Pf.sub(pc).normalize(),s=Df;e.backdrop=DN(s,n,yi,gt,An,jo,t,Fr,mr,ei,Fo,ff,mf,pf,this.dispersion?gf:null),e.backdropAlpha=cc,gt.a.mulAssign(Ut(1,e.backdrop.a,cc))}}computeMultiscattering(e,t,n){const s=wt.dot(St).clamp(),r=im({roughness:yi,dotNV:s}),a=(this.iridescenceF0?Qc.mix(An,this.iridescenceF0):An).mul(r.x).add(n.mul(r.y)),c=r.x.add(r.y).oneMinus(),u=An.add(An.oneMinus().mul(.047619)),d=a.mul(u).div(c.mul(u).oneMinus());e.addAssign(a),t.addAssign(d.mul(c))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const r=wt.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(r.mul(RN({lightDirection:e}))),this.clearcoat===!0){const a=Ws.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(ed({lightDirection:e,f0:Sl,f90:Tl,roughness:Yo,normalView:Ws})))}n.directDiffuse.addAssign(r.mul(lr({diffuseColor:gt.rgb}))),n.directSpecular.addAssign(r.mul(ed({lightDirection:e,f0:An,f90:1,roughness:yi,iridescence:this.iridescence,f:this.iridescenceFresnel,USE_IRIDESCENCE:this.iridescence,USE_ANISOTROPY:this.anisotropy})))}directRectArea({lightColor:e,lightPosition:t,halfWidth:n,halfHeight:s,reflectedLight:r,ltc_1:o,ltc_2:a}){const l=t.add(n).sub(s),c=t.sub(n).sub(s),u=t.sub(n).add(s),d=t.add(n).add(s),h=wt,m=St,g=nn.toVar(),_=CN({N:h,V:m,roughness:yi}),p=o.uv(_).toVar(),f=a.uv(_).toVar(),T=on(W(p.x,0,p.y),W(0,1,0),W(p.z,0,p.w)).toVar(),x=An.mul(f.x).add(An.oneMinus().mul(f.y)).toVar();r.directSpecular.addAssign(e.mul(x).mul(td({N:h,V:m,P:g,mInv:T,p0:l,p1:c,p2:u,p3:d}))),r.directDiffuse.addAssign(e.mul(gt).mul(td({N:h,V:m,P:g,mInv:on(1,0,0,0,1,0,0,0,1),p0:l,p1:c,p2:u,p3:d})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(lr({diffuseColor:gt})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(Gs,BN({normal:wt,viewDir:St,roughness:Jc}))),this.clearcoat===!0){const c=Ws.dot(St).clamp(),u=sm({dotNV:c,specularColor:Sl,specularF90:Tl,roughness:Yo});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const s=W().temp("singleScattering"),r=W().temp("multiScattering"),o=t.mul(1/Math.PI);this.computeMultiscattering(s,r,jo);const a=s.add(r),l=gt.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(s)),n.indirectSpecular.addAssign(r.mul(o)),n.indirectDiffuse.addAssign(l.mul(o))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const s=wt.dot(St).clamp().add(e),r=yi.mul(-16).oneMinus().negate().exp2(),o=e.sub(s.pow(r).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(o)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=Ws.dot(St).clamp(),s=Vr({dotVH:n,f0:Sl,f90:Tl}),r=t.mul(oc.mul(s).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(oc));t.assign(r)}if(this.sheen===!0){const n=Gs.r.max(Gs.g).max(Gs.b).mul(.157).oneMinus(),s=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(s)}}}const VN=new qd;class rm extends an{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(VN),this.setValues(e)}setupLightingModel(){return new uu}setupSpecular(){const e=Ut(W(.04),gt.rgb,qo);An.assign(e),jo.assign(1)}setupVariants(){const e=this.metalnessNode?K(this.metalnessNode):NT;qo.assign(e);let t=this.roughnessNode?K(this.roughnessNode):AT;t=nm({roughness:t}),yi.assign(t),this.setupSpecular(),gt.assign(Me(gt.rgb.mul(e.oneMinus()),gt.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}Xt("MeshStandardNodeMaterial",rm);const kN=new Iy;class om extends rm{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.iorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.dispersionNode=null,this.anisotropyNode=null,this.setDefaultValues(kN),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}get useAnisotropy(){return this.anisotropy>0||this.anisotropyNode!==null}get useTransmission(){return this.transmission>0||this.transmissionNode!==null}get useDispersion(){return this.dispersion>0||this.dispersionNode!==null}setupSpecular(){const e=this.iorNode?K(this.iorNode):VT;Fo.assign(e),An.assign(Ut(Mi(Ef(Fo.sub(1).div(Fo.add(1))).mul(TT),W(1)).mul(Ph),gt.rgb,qo)),jo.assign(Ut(Ph,1,qo))}setupLightingModel(){return new uu(this.useClearcoat,this.useSheen,this.useIridescence,this.useAnisotropy,this.useTransmission,this.useDispersion)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?K(this.clearcoatNode):wT,n=this.clearcoatRoughnessNode?K(this.clearcoatRoughnessNode):RT;oc.assign(t),Yo.assign(nm({roughness:n}))}if(this.useSheen){const t=this.sheenNode?W(this.sheenNode):PT,n=this.sheenRoughnessNode?K(this.sheenRoughnessNode):IT;Gs.assign(t),Jc.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?K(this.iridescenceNode):UT,n=this.iridescenceIORNode?K(this.iridescenceIORNode):OT,s=this.iridescenceThicknessNode?K(this.iridescenceThicknessNode):FT;Qc.assign(t),hf.assign(n),df.assign(s)}if(this.useAnisotropy){const t=(this.anisotropyNode?se(this.anisotropyNode):DT).toVar();as.assign(t.length()),Ct(as.equal(0),()=>{t.assign(se(1,0))}).else(()=>{t.divAssign(se(as)),as.assign(as.saturate())}),ac.assign(as.pow2().mix(yi.pow2(),1)),Oo.assign(Xs[0].mul(t.x).add(Xs[1].mul(t.y))),Ks.assign(Xs[1].mul(t.x).sub(Xs[0].mul(t.y)))}if(this.useTransmission){const t=this.transmissionNode?K(this.transmissionNode):zT,n=this.thicknessNode?K(this.thicknessNode):BT,s=this.attenuationDistanceNode?K(this.attenuationDistanceNode):kT,r=this.attenuationColorNode?W(this.attenuationColorNode):HT;if(cc.assign(t),ff.assign(n),pf.assign(s),mf.assign(r),this.useDispersion){const o=this.dispersionNode?K(this.dispersionNode):WT;gf.assign(o)}}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?W(this.clearcoatNormalNode):CT;Ws.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,this.dispersionNode=e.dispersionNode,this.anisotropyNode=e.anisotropyNode,super.copy(e)}}Xt("MeshPhysicalNodeMaterial",om);class HN extends uu{constructor(e,t,n,s){super(e,t,n),this.useSSS=s}direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r){if(this.useSSS===!0){const o=r.material,{thicknessColorNode:a,thicknessDistortionNode:l,thicknessAmbientNode:c,thicknessAttenuationNode:u,thicknessPowerNode:d,thicknessScaleNode:h}=o,m=e.add(wt.mul(l)).normalize(),g=K(St.dot(m.negate()).saturate().pow(d).mul(h)),_=W(g.add(c).mul(a));n.directDiffuse.addAssign(_.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r)}}class GN extends om{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=K(.1),this.thicknessAmbientNode=K(0),this.thicknessAttenuationNode=K(.1),this.thicknessPowerNode=K(2),this.thicknessScaleNode=K(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new HN(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}Xt("MeshSSSNodeMaterial",GN);const WN=he(({normal:i,lightDirection:e,builder:t})=>{const n=i.dot(e),s=se(n.mul(.5).add(.5),0);if(t.material.gradientMap){const r=Ti("gradientMap","texture").context({getUV:()=>s});return W(r.r)}else{const r=s.fwidth().mul(.5);return Ut(W(.7),W(1),ai(K(.7).sub(r.x),K(.7).add(r.x),s.x))}});class XN extends da{direct({lightDirection:e,lightColor:t,reflectedLight:n},s,r){const o=WN({normal:Jo,lightDirection:e,builder:r}).mul(t);n.directDiffuse.addAssign(o.mul(lr({diffuseColor:gt.rgb})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(lr({diffuseColor:gt})))}}const $N=new Uy;class qN extends an{constructor(e){super(),this.isMeshToonNodeMaterial=!0,this.lights=!0,this.setDefaultValues($N),this.setValues(e)}setupLightingModel(){return new XN}}Xt("MeshToonNodeMaterial",qN);const YN=new zy;class jN extends an{constructor(e){super(),this.lights=!1,this.isMeshMatcapNodeMaterial=!0,this.setDefaultValues(YN),this.setValues(e)}setupVariants(e){const t=LE;let n;e.material.matcap?n=Ti("matcap","texture").context({getUV:()=>t}):n=W(Ut(.2,.8,t.y)),gt.rgb.mulAssign(n.rgb)}}Xt("MeshMatcapNodeMaterial",jN);const KN=new Xd;class ZN extends an{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(KN),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}Xt("PointsNodeMaterial",ZN);const JN=new Cy;class QN extends an{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(JN),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:s,scaleNode:r}=this,o=Kt;let a=ms.mul(W(n||0)),l=se(Fr[0].xyz.length(),Fr[1].xyz.length());r!==null&&(l=l.mul(r));let c=o.xy;e.center&&e.center.isVector2===!0&&(c=c.sub(ze(e.center).sub(.5))),c=c.mul(l);const u=K(s||LT),d=c.rotate(u);a=Me(a.xy.add(d),a.zw);const h=ei.mul(a);return t.vertex=o,h}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}Xt("SpriteNodeMaterial",QN);class eb extends da{constructor(){super(),this.shadowNode=K(1).toVar("shadowMask")}direct({shadowMask:e}){this.shadowNode.mulAssign(e)}finish(e){gt.a.mulAssign(this.shadowNode.oneMinus()),e.outgoingLight.rgb.assign(gt.rgb)}}const tb=new Ly;class nb extends an{constructor(e){super(),this.isShadowNodeMaterial=!0,this.lights=!0,this.setDefaultValues(tb),this.setValues(e)}setupLightingModel(){return new eb}}Xt("ShadowNodeMaterial",nb);class ib extends an{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.isVolumeNodeMaterial=!0,this.testNode=null,this.setValues(e)}setup(e){const t=$E(this.map,null,0),n=he(({orig:s,dir:r})=>{const o=W(-.5),a=W(.5),l=r.reciprocal(),c=o.sub(s).mul(l),u=a.sub(s).mul(l),d=Mi(c,u),h=hn(c,u),m=hn(d.x,hn(d.y,d.z)),g=Mi(h.x,Mi(h.y,h.z));return se(m,g)});this.fragmentNode=he(()=>{const s=Dt(W(_T.mul(Me(Pf,1)))),o=Dt(un.sub(s)).normalize(),a=Tt("vec2","bounds").assign(n({orig:s,dir:o}));a.x.greaterThan(a.y).discard(),a.assign(se(hn(a.x,0),a.y));const l=Tt("vec3","p").assign(s.add(a.x.mul(o))),c=Tt("vec3","inc").assign(W(o.abs().reciprocal())),u=Tt("float","delta").assign(Mi(c.x,Mi(c.y,c.z)));u.divAssign(Ti("steps","float"));const d=Tt("vec4","ac").assign(Me(Ti("base","color"),0));return $n({type:"float",start:a.x,end:a.y,update:"+= delta"},()=>{const h=Tt("float","d").assign(t.uv(l.add(.5)).r);this.testNode!==null?this.testNode({map:t,mapValue:h,probe:l,finalColor:d}).append():(d.a.assign(1),$f()),l.addAssign(o.mul(u))}),d.a.equal(0).discard(),Me(d)})(),super.setup(e)}}Xt("VolumeNodeMaterial",ib);const am=new Gc,lm=document.querySelector("canvas.webgl"),hu=new Ry,sb=new Hy,rb=sb.load("./textures/The_Finals_logo_(current).jpg"),Ta=new Wr(1,1,32,32),cm=Ta.attributes.position.count,um=new Float32Array(cm);for(let i=0;i<cm;i++)um[i]=Math.random();Ta.setAttribute("aRandom",new wn(um,1));console.log(Ta);const Ea=new Py({vertexShader:pM,fragmentShader:mM,uniforms:{uFrequency:{value:new xe(5,2)},uTime:{value:0},uColor:{value:new Ie("orange")},uTexture:{value:rb}}});am.add(Ea.uniforms.uFrequency.value,"x").min(0).max(20).step(.01).name("frequencyx");am.add(Ea.uniforms.uFrequency.value,"y").min(0).max(20).step(.01).name("frequencyy");const hm=new Xn(Ta,Ea);hm.scale.y=2/3;hu.add(hm);const ni={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{ni.width=window.innerWidth,ni.height=window.innerHeight,cr.aspect=ni.width/ni.height,cr.updateProjectionMatrix(),kr.setSize(ni.width,ni.height),kr.setPixelRatio(Math.min(window.devicePixelRatio,2))});const cr=new fn(75,ni.width/ni.height,.1,100);cr.position.set(.25,-.25,1);hu.add(cr);const dm=new eM(cr,lm);dm.enableDamping=!0;const kr=new wy({canvas:lm});kr.setSize(ni.width,ni.height);kr.setPixelRatio(Math.min(window.devicePixelRatio,2));const ob=new Zy,fm=()=>{const i=ob.getElapsedTime();Ea.uniforms.uTime.value=i,dm.update(),kr.render(hu,cr),window.requestAnimationFrame(fm)};fm();
//# sourceMappingURL=index-Cpn-AjLU.js.map
