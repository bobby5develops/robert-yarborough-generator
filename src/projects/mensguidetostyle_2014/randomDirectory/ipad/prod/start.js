/* ../projects/mensguidetostyle_2014-10-14//randomDirectory/ipad/js/lib/Class.js */
/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

  // The base Class implementation (does nothing)
  this.Class = function(){};

  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;

    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;

            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];

            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);
            this._super = tmp;

            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }

    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }

    // Populate our constructed prototype object
    Class.prototype = prototype;

    // Enforce the constructor to be what we expect
    Class.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;

    return Class;
  };
})();


/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/TAFFY.js */
var TAFFY;(function(){if(!TAFFY){var i="2.3.7",m=1,a="000000",n=1000,c={};var k=function(p){if(TAFFY.isArray(p)||TAFFY.isObject(p)){return p}else{return JSON.parse(p)}};var l=function(s,q,t){if(s.length==1){q(s[0],0)}else{for(var w,v,p=0,s=(f.isArray(s))?s:[s],z=s.length;p<z;p++){var v=s[p];if(!f.isUndefined(v)||(t||false)){w=q(v,p);if(w===f.EXIT){break}}}}};var b=function(u,q){var p=0,t;for(var s in u){if(u.hasOwnProperty(s)){t=q(u[s],s,p++)}if(t===f.EXIT){break}}};c.extend=function(p,q){c[p]=function(){return q.apply(this,arguments)}};var h=function(q){if(f.isString(q)&&/[t][0-9]*[r][0-9]*/i.test(q)){return true}if(f.isObject(q)&&q.___id&&q.___s){return true}if(f.isArray(q)){var p=true;l(q,function(s){if(!h(s)){p=false;return TAFFY.EXIT}});return p}return false};var e=function(q){var p=[];if(f.isString(q)&&/[t][0-9]*[r][0-9]*/i.test(q)){q={___id:q}}if(f.isArray(q)){l(q,function(s){p.push(e(s))});var q=function(){var s=this;var r=false;l(p,function(t){if(g(s,t)){r=true}});return r};return q}if(f.isObject(q)){if(f.isObject(q)&&q.___id&&q.___s){q={___id:q.___id}}b(q,function(r,s){if(!f.isObject(r)){r={is:r}}b(r,function(t,u){var w=[];var v=(u==="hasAll")?function(x,y){y(x)}:l;v(t,function(y){var x=true,z=false;var A=function(){var C=this[s];if((u.indexOf("!")===0)){x=false;u=u.substring(1,u.length)}var B=((u==="regex")?(y.test(C)):(u==="lt")?(C<y):(u==="gt")?(C>y):(u==="lte")?(C<=y):(u==="gte")?(C>=y):(u==="left")?(C.indexOf(y)===0):(u==="leftnocase")?(C.toLowerCase().indexOf(y.toLowerCase())===0):(u==="right")?(C.substring((C.length-y.length))===y):(u==="rightnocase")?(C.toLowerCase().substring((C.length-y.length))===y.toLowerCase()):(u==="like")?(C.indexOf(y)>=0):(u==="likenocase")?(C.toLowerCase().indexOf(y.toLowerCase())>=0):(u==="is")?(C===y):(u==="isnocase")?(C.toLowerCase()===y.toLowerCase()):(u==="has")?(f.has(C,y)):(u==="hasall")?(f.hasAll(C,y)):(u.indexOf("is")===-1&&!TAFFY.isNull(C)&&!TAFFY.isUndefined(C)&&!TAFFY.isObject(y)&&!TAFFY.isArray(y))?(y===C[u]):(f[u]&&f.isFunction(f[u])&&u.indexOf("is")===0)?f[u](C)===y:(f[u]&&f.isFunction(f[u]))?f[u](C,y):(x===z));B=(B&&!x)?false:(!B&&!x)?true:B;return B};w.push(A)});if(w.length===1){p.push(w[0])}else{p.push(function(){var y=this;var x=false;l(w,function(z){if(z.apply(y)){x=true}});return x})}})});var q=function(){var s=this;var r=true;r=(p.length==1&&!p[0].apply(s))?false:(p.length==2&&(!p[0].apply(s)||!p[1].apply(s)))?false:(p.length==3&&(!p[0].apply(s)||!p[1].apply(s)||!p[2].apply(s)))?false:(p.length==4&&(!p[0].apply(s)||!p[1].apply(s)||!p[2].apply(s)||!p[3].apply(s)))?false:true;if(p.length>4){l(p,function(t){if(!g(s,t)){r=false}})}return r};return q}if(f.isFunction(q)){return q}};var j=function(p,q){var r=function(t,s){var u=0;f.each(q,function(x){var z=x.split(" ");var w=z[0];var v=(z.length===1)?"logical":z[1];if(v==="logical"){var A=o(t[w]),y=o(s[w]);f.each((A.length<=y.length)?A:y,function(B,C){if(A[C]<y[C]){u=-1;return TAFFY.EXIT}else{if(A[C]>y[C]){u=1;return TAFFY.EXIT}}})}else{if(v==="logicaldesc"){var A=o(t[w]),y=o(s[w]);f.each((A.length<=y.length)?A:y,function(B,C){if(A[C]>y[C]){u=-1;return TAFFY.EXIT}else{if(A[C]<y[C]){u=1;return TAFFY.EXIT}}})}else{if(v==="asec"&&t[w]<s[w]){u=-1;return f.EXIT}else{if(v==="asec"&&t[w]>s[w]){u=1;return f.EXIT}else{if(v==="desc"&&t[w]>s[w]){u=-1;return f.EXIT}else{if(v==="desc"&&t[w]<s[w]){u=1;return f.EXIT}}}}}}if(u===0&&v==="logical"&&A.length<y.length){u=-1}else{if(u===0&&v==="logical"&&A.length>y.length){u=1}else{if(u===0&&v==="logicaldesc"&&A.length>y.length){u=-1}else{if(u===0&&v==="logicaldesc"&&A.length<y.length){u=1}}}}if(u!=0){return f.EXIT}});return u};return p.sort(r)};var o=null;(function(){var p={};var q=0;o=function(r){if(q>n){p={};q=0}return p["_"+r]||(function(){var v=String(r),u=[],z="_",t="";for(var s=0,w=v.length;s<w;s++){var y=v.charCodeAt(s);if((y>=48&&y<=57)||y===46||y===45){if(t!="n"){t="n";u.push(z.toLowerCase());z=""}z=z+v.charAt(s)}else{if(t!="s"){t="s";u.push(parseFloat(z));z=""}z=z+v.charAt(s)}}u.push((t==="n")?parseFloat(z):z.toLowerCase());u.shift();p["_"+r]=u;q++;return u})()}})();var d=function(){this.context({results:this.getDBI().query(this.context())})};c.extend("filter",function(){var q=TAFFY.mergeObj(this.context(),{run:null});var p=[];l(q.q,function(r){p.push(r)});q.q=p;l(arguments,function(r){q.q.push(e(r));q.filterRaw.push(r)});return this.getroot(q)});c.extend("order",function(q){var q=q.split(",");var p=[];l(q,function(s){p.push(s.replace(/^\s*/,"").replace(/\s*$/,""))});var r=TAFFY.mergeObj(this.context(),{sort:null});r.order=p;return this.getroot(r)});c.extend("limit",function(r){var q=TAFFY.mergeObj(this.context(),{});q.limit=r;if(q.run&&q.sort){var p=[];l(q.results,function(t,s){if((s+1)>r){return TAFFY.EXIT}p.push(t)});q.results=p}return this.getroot(q)});c.extend("start",function(r){var q=TAFFY.mergeObj(this.context(),{});q.start=r;if(q.run&&q.sort&&!q.limit){var p=[];l(q.results,function(t,s){if((s+1)>r){p.push(t)}});q.results=p}else{q=TAFFY.mergeObj(this.context(),{run:null,start:r})}return this.getroot(q)});c.extend("update",function(r,p){var q=this;d.call(this);l(this.context().results,function(s){var t=r;if(f.isFunction(t)){t=t(TAFFY.mergeObj(s,{}))}q.getDBI().update(s.___id,t,p)});if(this.context().results.length){this.context({run:null})}return this});c.extend("remove",function(p){var q=this;var r=0;d.call(this);l(this.context().results,function(s){q.getDBI().remove(s.___id);r++});if(this.context().results.length){this.context({run:null});q.getDBI().removeCommit(p)}return r});c.extend("count",function(){d.call(this);return this.context().results.length});c.extend("callback",function(r,p){if(r){var q=this;setTimeout(function(){d.call(q);r.call(q.getroot(q.context()))},(p)?p:0)}return null});c.extend("get",function(){d.call(this);return this.context().results});c.extend("stringify",function(){return JSON.stringify(this.get())});c.extend("first",function(){d.call(this);return this.context().results[0]||false});c.extend("last",function(){d.call(this);return this.context().results[this.context().results.length-1]||false});c.extend("sum",function(){var q=0;d.call(this);var p=this;l(arguments,function(r){l(p.context().results,function(s){q=q+s[r]})});return q});c.extend("min",function(q){var p=null;d.call(this);l(this.context().results,function(s){if(p===null||s[q]<p){p=s[q]}});return p});c.extend("max",function(q){var p=null;d.call(this);l(this.context().results,function(s){if(p===null||s[q]>p){p=s[q]}});return p});c.extend("select",function(){var q=[];var p=arguments;d.call(this);if(arguments.length===1){l(this.context().results,function(s){q.push(s[p[0]])})}else{l(this.context().results,function(s){var t=[];l(p,function(r){t.push(s[r])});q.push(t)})}return q});c.extend("distinct",function(){var q=[];var p=arguments;d.call(this);if(arguments.length===1){l(this.context().results,function(t){var s=t[p[0]];var u=false;l(q,function(r){if(s===r){u=true;return TAFFY.EXIT}});if(!u){q.push(s)}})}else{l(this.context().results,function(s){var u=[];l(p,function(r){u.push(s[r])});var t=false;l(q,function(v){var r=true;l(p,function(x,w){if(u[w]!=v[w]){r=false;return TAFFY.EXIT}});if(r){t=true;return TAFFY.EXIT}});if(!t){q.push(u)}})}return q});c.extend("supplant",function(q,p){var r=[];d.call(this);l(this.context().results,function(s){r.push(q.replace(/{([^{}]*)}/g,function(u,t){var w=s[t];return typeof w==="string"||typeof w==="number"?w:u}))});return(!p)?r.join(""):r});c.extend("each",function(p){d.call(this);l(this.context().results,p);return this});c.extend("map",function(p){var q=[];d.call(this);l(this.context().results,function(s){q.push(p(s))});return q});var g=function(s,q){var p=true;l(q,function(r){switch(f.typeOf(r)){case"function":if(!r.apply(s)){p=false;return TAFFY.EXIT}break;case"array":p=(r.length==1)?(g(s,r[0])):(r.length==2)?(g(s,r[0])||g(s,r[1])):(r.length==3)?(g(s,r[0])||g(s,r[1])||g(s,r[2])):(r.length==4)?(g(s,r[0])||g(s,r[1])||g(s,r[2])||g(s,r[3])):false;if(r.length>4){l(r,function(t){if(g(s,t)){p=true}})}break}});return p};var f=function(x){var u=[],y={},v=1,r={template:false,onInsert:false,onUpdate:false,onRemove:false,onDBChange:false,storageName:false,forcePropertyCase:null,cacheSize:100},t=new Date(),s=0,q=0,A={};var p=function(D){if(D.length==0){return u}var C=[];var B=false;l(D,function(E){if(f.isString(E)&&/[t][0-9]*[r][0-9]*/i.test(E)&&u[y[E]]){C.push(u[y[E]]);B=true}if(f.isObject(E)&&E.___id&&E.___s&&u[y[E.___id]]){C.push(u[y[E.___id]]);B=true}if(f.isArray(E)){l(E,function(F){l(p(F),function(G){C.push(G)})})}});if(B&&C.length>1){C=[]}return C};var w={dm:function(B){if(B){t=B;A={};s=0;q=0}if(r.onDBChange){setTimeout(function(){r.onDBChange.call(u)},0)}if(r.storageName){setTimeout(function(){localStorage.setItem("taffy_"+r.storageName,JSON.stringify(u))})}return t},insert:function(D,E){var C=[];var B=[];l(k(D),function(G,H){if(f.isArray(G)&&H===0){l(G,function(J){C.push((r.forcePropertyCase==="lower")?J.toLowerCase():(r.forcePropertyCase==="upper")?J.toUpperCase():J)});return true}else{if(f.isArray(G)){var F={};l(G,function(K,J){F[C[J]]=K});G=F}else{if(f.isObject(G)&&r.forcePropertyCase){var I={};b(G,function(K,J){I[(r.forcePropertyCase==="lower")?J.toLowerCase():(r.forcePropertyCase==="upper")?J.toUpperCase():J]=G[J]});G=I}}}m++;v++;G.___id="T"+String(a+m).slice(-6)+"R"+String(a+v).slice(-6);G.___s=true;B.push(G.___id);if(r.template){G=f.mergeObj(r.template,G)}u.push(G);y[G.___id]=u.length-1;if(r.onInsert&&(E||TAFFY.isUndefined(E))){r.onInsert.call(G)}w.dm(new Date())});return z(B)},sort:function(B){u=j(u,B.split(","));y={};l(u,function(D,C){y[D.___id]=C});w.dm(new Date());return true},update:function(H,D,C){var G={};if(r.forcePropertyCase){b(D,function(I,J){G[(r.forcePropertyCase==="lower")?J.toLowerCase():(r.forcePropertyCase==="upper")?J.toUpperCase():J]=I});D=G}var F=u[y[H]];var E=f.mergeObj(F,D);var B={};b(E,function(I,J){if(TAFFY.isUndefined(F[J])||F[J]!=I){B[J]=I}});if(r.onUpdate&&(C||TAFFY.isUndefined(C))){r.onUpdate.call(E,u[y[H]],B)}u[y[H]]=E;w.dm(new Date())},remove:function(B){u[y[B]].___s=false},removeCommit:function(C){for(var B=u.length-1;B>-1;B--){if(!u[B].___s){if(r.onRemove&&(C||TAFFY.isUndefined(C))){r.onRemove.call(u[B])}y[u[B].___id]=undefined;u.splice(B,1)}}y={};l(u,function(E,D){y[E.___id]=D});w.dm(new Date())},query:function(C){var F;if(r.cacheSize){var G="";l(C.filterRaw,function(H){if(f.isFunction(H)){G="nocache";return TAFFY.EXIT}});if(G==""){G=JSON.stringify(f.mergeObj(C,{q:false,run:false,sort:false}))}}if(!C.results||!C.run||(C.run&&w.dm()>C.run)){var B=[];if(r.cacheSize&&A[G]){A[G].i=s++;return A[G].results}else{if(C.q.length==0&&C.index.length==0){l(u,function(H){B.push(H)});F=B}else{var E=p(C.index);l(E,function(H){if(C.q.length==0||g(H,C.q)){B.push(H)}});F=B}}}else{F=C.results}if(C.order.length>0&&(!C.run||!C.sort)){F=j(F,C.order)}if(F.length&&((C.limit&&C.limit<F.length)||C.start)){var D=[];l(F,function(J,I){if(!C.start||(C.start&&(I+1)>=C.start)){if(C.limit){var H=(C.start)?(I+1)-C.start:I;if(H<C.limit){D.push(J)}else{if(H>C.limit){return TAFFY.EXIT}}}else{D.push(J)}}});F=D}if(r.cacheSize&&G!="nocache"){q++;setTimeout(function(){if(q>=r.cacheSize*2){q=0;var H=s-r.cacheSize;var I={};b(function(K,J){if(K.i>=H){I[J]=K}});A=I}},0);A[G]={i:s++,results:F}}return F}};var z=function(){var C=TAFFY.mergeObj(TAFFY.mergeObj(c,{insert:undefined}),{getDBI:function(){return w},getroot:function(D){return z.call(D)},context:function(D){if(D){B=TAFFY.mergeObj(B,("results" in D)?TAFFY.mergeObj(D,{run:new Date(),sort:new Date()}):D)}return B},extend:undefined});var B=(this&&this.q)?this:{limit:false,start:false,q:[],filterRaw:[],index:[],order:[],results:false,run:null,sort:null};l(arguments,function(D){if(h(D)){B.index.push(D)}else{B.q.push(e(D))}B.filterRaw.push(D)});return C};if(x){w.insert(x)}z.insert=w.insert;z.TAFFY=true;z.sort=w.sort;z.settings=function(B){if(B){r=TAFFY.mergeObj(r,B);if(B.template){z().update(B.template)}}return r};z.store=function(D){var C=false;if(localStorage){if(D){var B=localStorage.getItem("taffy_"+D);if(B&&B.length>0){z.insert(B);C=true}if(u.length>0){setTimeout(function(){localStorage.setItem("taffy_"+r.storageName,JSON.stringify(u))})}}z.settings({storageName:D})}return C};return z};TAFFY=f;f.each=l;f.eachin=b;f.extend=c.extend;TAFFY.EXIT="TAFFYEXIT";TAFFY.mergeObj=function(r,p){var q={};b(r,function(s,t){q[t]=r[t]});b(p,function(s,t){q[t]=p[t]});return q};TAFFY.has=function(r,q){var p=true;if((r.TAFFY)){p=r(q);if(p.length>0){return true}else{return false}}else{switch(f.typeOf(r)){case"object":if(f.isObject(q)){b(q,function(t,u){if(p===true&&!f.isUndefined(r[u])&&r.hasOwnProperty(u)){p=f.has(r[u],q[u])}else{p=false;return TAFFY.EXIT}})}else{if(f.isArray(q)){l(q,function(t,u){p=f.has(r,q[u]);if(p){return TAFFY.EXIT}})}else{if(f.isString(q)){if(!TAFFY.isUndefined(r[q])){return true}else{return false}}}}return p;break;case"array":if(f.isObject(q)){l(r,function(t,u){p=f.has(r[u],q);if(p===true){return TAFFY.EXIT}})}else{if(f.isArray(q)){l(q,function(u,t){l(r,function(w,v){p=f.has(r[v],q[t]);if(p===true){return TAFFY.EXIT}});if(p===true){return TAFFY.EXIT}})}else{if(f.isString(q)||f.isNumber(q)){for(var s=0;s<r.length;s++){p=f.has(r[s],q);if(p){return true}}}}}return p;break;case"string":if(f.isString(q)&&q===r){return true}break;default:if(f.typeOf(r)===f.typeOf(q)&&r===q){return true}break}}return false};TAFFY.hasAll=function(s,r){var q=TAFFY;if(q.isArray(r)){var p=true;l(r,function(t){p=q.has(s,t);if(p===false){return TAFFY.EXIT}});return p}else{return q.has(s,r)}};TAFFY.typeOf=function(p){var q=typeof p;if(q==="object"){if(p){if(typeof p.length==="number"&&!(p.propertyIsEnumerable("length"))){q="array"}}else{q="null"}}return q};TAFFY.getObjectKeys=function(p){var q=[];b(p,function(r){q.push(r)});q.sort();return q};TAFFY.isSameArray=function(q,p){return(TAFFY.isArray(q)&&TAFFY.isArray(p)&&q.join(",")===p.join(","))?true:false};TAFFY.isSameObject=function(s,q){var p=TAFFY,r=true;if(p.isObject(s)&&p.isObject(q)){if(p.isSameArray(p.getObjectKeys(s),p.getObjectKeys(q))){b(s,function(t,u){if((p.isObject(s[u])&&p.isObject(q[u])&&p.isSameObject(s[u],q[u]))||(p.isArray(s[u])&&p.isArray(q[u])&&p.isSameArray(s[u],q[u]))||(s[u]===q[u])){}else{r=false;return TAFFY.EXIT}})}else{r=false}}else{r=false}return r};(function(p){for(var q=0;q<p.length;q++){(function(r){TAFFY["is"+r]=function(s){return TAFFY.typeOf(s)===r.toLowerCase()?true:false}}(p[q]))}}(["String","Number","Object","Array","Boolean","Null","Function","Undefined"]))}})();if(typeof(exports)==="object"){exports.taffy=TAFFY}var JSON;if(!JSON){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/TimelineLite.min.js */
/*!
 * VERSION: beta 1.9.0
 * DATE: 2013-02-27
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;for(var d,f,c=e.length;--c>-1;)if(f=this.vars[e[c]])for(d=f.length;--d>-1;)"{self}"===f[d]&&(f=this.vars[e[c]]=f.concat(),f[d]=this);this.vars.tweens instanceof Array&&this.add(this.vars.tweens,0,this.vars.align,this.vars.stagger)},e=["onStartParams","onUpdateParams","onCompleteParams","onReverseCompleteParams","onRepeatParams"],f=[],g=function(a){var c,b={};for(c in a)b[c]=a[c];return b},h=d.prototype=new b;return d.version="1.9.0",h.constructor=d,h.kill()._gc=!1,h.to=function(a,b,d,e){return this.add(new c(a,b,d),e)},h.from=function(a,b,d,e){return this.add(c.from(a,b,d),e)},h.fromTo=function(a,b,d,e,f){return this.add(c.fromTo(a,b,d,e),f)},h.staggerTo=function(a,b,e,f,h,i,j,k){var m,n,l=new d({onComplete:i,onCompleteParams:j,onCompleteScope:k});for("string"==typeof a&&(a=c.selector(a)||a),!(a instanceof Array)&&"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style&&(n=[],a.each(function(){n.push(this)}),a=n),f=f||0,m=0;a.length>m;m++)null!=e.startAt&&(e.startAt=g(e.startAt)),l.add(new c(a[m],b,g(e)),m*f);return this.add(l,h)},h.staggerFrom=function(a,b,c,d,e,f,g,h){return null==c.immediateRender&&(c.immediateRender=!0),c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},h.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},h.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},h.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var g,h,e=new d(a),f=e._timeline;for(null==b&&(b=!0),f._remove(e,!0),e._startTime=0,e._rawPrevTime=e._time=e._totalTime=f._time,g=f._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||e.add(g,g._startTime-g._delay),g=h;return f.add(e,0),e},h.add=function(e,f,g,h){var i,j,k,l,m;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array){for(g=g||"normal",h=h||0,i=f,j=e.length,k=0;j>k;k++)(l=e[k])instanceof Array&&(l=new d({tweens:l})),this.add(l,i),"string"!=typeof l&&"function"!=typeof l&&("sequence"===g?i=l._startTime+l.totalDuration()/l._timeScale:"start"===g&&(l._startTime-=l.delay())),i+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the TimelineLite/Max: it is neither a tween, timeline, function, nor a String.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),this._gc&&!this._paused&&this._time===this._duration&&this._time<this.duration())for(m=this;m._gc&&m._timeline;)m._timeline.smoothChildTiming?m.totalTime(m._totalTime,!0):m._enabled(!0,!1),m=m._timeline;return this},h.remove=function(b){if(b instanceof a)return this._remove(b,!1);if(b instanceof Array){for(var c=b.length;--c>-1;)this.remove(b[c]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},h.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},h.insert=h.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},h.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},h.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},h.removeLabel=function(a){return delete this._labels[a],this},h.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},h._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e instanceof Array)for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},h.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},h.stop=function(){return this.paused(!0)},h.gotoAndPlay=function(a,c){return b.prototype.play.call(this,a,c)},h.gotoAndStop=function(a,b){return this.pause(a,b)},h.render=function(a,b,c){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var j,k,l,m,d=this._dirty?this.totalDuration():this._totalDuration,e=this._time,g=this._startTime,h=this._timeScale,i=this._paused;if(a>=d?(this._totalTime=this._time=d,this._reversed||this._hasPausedChild()||(k=!0,m="onComplete",0===this._duration&&(0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0)),this._rawPrevTime=a,a=d+1e-6):0>=a?(this._totalTime=this._time=0,(0!==e||0===this._duration&&this._rawPrevTime>0)&&(m="onReverseComplete",k=this._reversed),0>a?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&(c=!0)):this._initted||(c=!0),this._rawPrevTime=a,a=-1e-6):this._totalTime=this._time=this._rawPrevTime=a,this._time!==e||c){if(this._initted||(this._initted=!0),0===e&&this.vars.onStart&&0!==this._time&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||f)),this._time>e)for(j=this._first;j&&(l=j._next,!this._paused||i);)(j._active||j._startTime<=this._time&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,c):j.render((a-j._startTime)*j._timeScale,b,c)),j=l;else for(j=this._last;j&&(l=j._prev,!this._paused||i);)(j._active||e>=j._startTime&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,c):j.render((a-j._startTime)*j._timeScale,b,c)),j=l;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||f)),m&&(this._gc||(g===this._startTime||h!==this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(k&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[m]&&this.vars[m].apply(this.vars[m+"Scope"]||this,this.vars[m+"Params"]||f)))}},h._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},h.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)e>g._startTime||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},h.getTweensOf=function(a,b){for(var d=c.getTweensOf(a),e=d.length,f=[],g=0;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(f[g++]=d[e]);return f},h._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},h.shiftChildren=function(a,b,c){c=c||0;for(var e,d=this._first;d;)d._startTime>=c&&(d._startTime+=a),d=d._next;if(b)for(e in this._labels)this._labels[e]>=c&&(this._labels[e]+=a);return this._uncache(!0)},h._kill=function(a,b){if(null==a&&null==b)return this._enabled(!1,!1);for(var c=null==b?this.getChildren(!0,!0,!1):this.getTweensOf(b),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},h.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},h.invalidate=function(){for(var a=this._first;a;)a.invalidate(),a=a._next;return this},h._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},h.progress=function(a){return arguments.length?this.totalTime(this.duration()*a,!1):this._time/this.duration()},h.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},h.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var e,f,b=0,c=this._last,d=999999999999;c;)e=c._prev,c._dirty&&c.totalDuration(),c._startTime>d&&this._sortChildren&&!c._paused?this.add(c,c._startTime-c._delay):d=c._startTime,0>c._startTime&&!c._paused&&(b-=c._startTime,this._timeline.smoothChildTiming&&(this._startTime+=c._startTime/this._timeScale),this.shiftChildren(-c._startTime,!1,-9999999999),d=0),f=c._startTime+c._totalDuration/c._timeScale,f>b&&(b=f),c=e;this._duration=this._totalDuration=b,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==a&&this.timeScale(this._totalDuration/a),this},h.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},h.rawTime=function(){return this._paused||0!==this._totalTime&&this._totalTime!==this._totalDuration?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0)}),window._gsDefine&&window._gsQueue.pop()();

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/TimelineMax.min.js */
/*!
 * VERSION: beta 1.9.0
 * DATE: 2013-02-27
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(window._gsQueue||(window._gsQueue=[])).push(function(){window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=[],f=new c(null,null,1,0),g=function(a){for(;a;){if(a._paused)return!0;a=a._timeline}return!1},h=d.prototype=new a;return h.constructor=d,h.kill()._gc=!1,d.version="1.9.0",h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},h.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},h.removeCallback=function(a,b){if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},h.tweenTo=function(a,c){c=c||{};var g,h,d={ease:f,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1};for(g in c)d[g]=c[g];return d.time=this._parseTimeOrLabel(a),h=new b(this,Math.abs(Number(d.time)-this._time)/this._timeScale||.001,d),d.onStart=function(){h.target.paused(!0),h.vars.time!==h.target.time()&&h.duration(Math.abs(h.vars.time-h.target.time())/h.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||h,c.onStartParams||e)},h},h.tweenFromTo=function(a,b,c){c=c||{},c.startAt={time:this._parseTimeOrLabel(a)};var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-d.vars.startAt.time)/this._timeScale||.001)},h.render=function(a,b,c){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var m,n,o,q,d=this._dirty?this.totalDuration():this._totalDuration,f=this._time,g=this._totalTime,h=this._startTime,i=this._timeScale,j=this._rawPrevTime,k=this._paused,l=this._cycle;if(a>=d)this._locked||(this._totalTime=d,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,q="onComplete",0===this._duration&&(0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0)),this._rawPrevTime=a,this._yoyo&&0!==(1&this._cycle)?(this._time=0,a=-1e-6):(this._time=this._duration,a=this._duration+1e-6);else if(0>=a)this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==f||0===this._duration&&this._rawPrevTime>0&&!this._locked)&&(q="onReverseComplete",n=this._reversed),0>a?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&(c=!0)):this._initted||(c=!0),this._rawPrevTime=a,a=0===this._duration?0:-1e-6;else if(this._time=this._rawPrevTime=a,!this._locked&&(this._totalTime=a,0!==this._repeat)){var r=this._duration+this._repeatDelay;this._cycle=this._totalTime/r>>0,0!==this._cycle&&this._cycle===this._totalTime/r&&this._cycle--,this._time=this._totalTime-this._cycle*r,this._yoyo&&0!==(1&this._cycle)&&(this._time=this._duration-this._time),this._time>this._duration?(this._time=this._duration,a=this._duration+1e-6):0>this._time?this._time=a=0:a=this._time}if(this._cycle!==l&&!this._locked){var s=this._yoyo&&0!==(1&l),t=s===(this._yoyo&&0!==(1&this._cycle)),u=this._totalTime,v=this._cycle,w=this._rawPrevTime,x=this._time;this._totalTime=l*this._duration,l>this._cycle?s=!s:this._totalTime+=this._duration,this._time=f,this._rawPrevTime=0===this._duration?j-1e-5:j,this._cycle=l,this._locked=!0,f=s?0:this._duration,this.render(f,b,0===this._duration),b||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||e),t&&(f=s?this._duration+1e-6:-1e-6,this.render(f,!0,!1)),this._time=x,this._totalTime=u,this._cycle=v,this._rawPrevTime=w,this._locked=!1}if(this._time===f&&!c)return g!==this._totalTime&&this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||e)),void 0;if(this._initted||(this._initted=!0),0===g&&this.vars.onStart&&0!==this._totalTime&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||e)),this._time>f)for(m=this._first;m&&(o=m._next,!this._paused||k);)(m._active||m._startTime<=this._time&&!m._paused&&!m._gc)&&(m._reversed?m.render((m._dirty?m.totalDuration():m._totalDuration)-(a-m._startTime)*m._timeScale,b,c):m.render((a-m._startTime)*m._timeScale,b,c)),m=o;else for(m=this._last;m&&(o=m._prev,!this._paused||k);)(m._active||f>=m._startTime&&!m._paused&&!m._gc)&&(m._reversed?m.render((m._dirty?m.totalDuration():m._totalDuration)-(a-m._startTime)*m._timeScale,b,c):m.render((a-m._startTime)*m._timeScale,b,c)),m=o;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||e)),q&&(this._locked||this._gc||(h===this._startTime||i!==this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[q]&&this.vars[q].apply(this.vars[q+"Scope"]||this,this.vars[q+"Params"]||e)))},h.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var i,j,d=[],e=this.getChildren(a,b,c),f=0,h=e.length;for(i=0;h>i;i++)j=e[i],j._paused||j._timeline._time>=j._startTime&&j._timeline._time<j._startTime+j._totalDuration/j._timeScale&&(g(j._timeline)||(d[f++]=j));return d},h.getLabelAfter=function(a){a||0!==a&&(a=this._time);var d,b=this.getLabelsArray(),c=b.length;for(d=0;c>d;d++)if(b[d].time>a)return b[d].name;return null},h.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(a>b[c].time)return b[c].name;return null},h.getLabelsArray=function(){var c,a=[],b=0;for(c in this._labels)a[b++]={time:this._labels[c],name:c};return a.sort(function(a,b){return a.time-b.time}),a},h.progress=function(a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},h.totalProgress=function(a){return arguments.length?this.totalTime(this.totalDuration()*a,!1):this._totalTime/this.totalDuration()},h.totalDuration=function(b){return arguments.length?-1===this._repeat?this:this.duration((b-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},h.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},h.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},h.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},h.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;for(var d,f,c=e.length;--c>-1;)if(f=this.vars[e[c]])for(d=f.length;--d>-1;)"{self}"===f[d]&&(f=this.vars[e[c]]=f.concat(),f[d]=this);this.vars.tweens instanceof Array&&this.add(this.vars.tweens,0,this.vars.align,this.vars.stagger)},e=["onStartParams","onUpdateParams","onCompleteParams","onReverseCompleteParams","onRepeatParams"],f=[],g=function(a){var c,b={};for(c in a)b[c]=a[c];return b},h=d.prototype=new b;return d.version="1.9.0",h.constructor=d,h.kill()._gc=!1,h.to=function(a,b,d,e){return this.add(new c(a,b,d),e)},h.from=function(a,b,d,e){return this.add(c.from(a,b,d),e)},h.fromTo=function(a,b,d,e,f){return this.add(c.fromTo(a,b,d,e),f)},h.staggerTo=function(a,b,e,f,h,i,j,k){var m,n,l=new d({onComplete:i,onCompleteParams:j,onCompleteScope:k});for("string"==typeof a&&(a=c.selector(a)||a),!(a instanceof Array)&&"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style&&(n=[],a.each(function(){n.push(this)}),a=n),f=f||0,m=0;a.length>m;m++)null!=e.startAt&&(e.startAt=g(e.startAt)),l.add(new c(a[m],b,g(e)),m*f);return this.add(l,h)},h.staggerFrom=function(a,b,c,d,e,f,g,h){return null==c.immediateRender&&(c.immediateRender=!0),c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},h.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},h.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},h.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var g,h,e=new d(a),f=e._timeline;for(null==b&&(b=!0),f._remove(e,!0),e._startTime=0,e._rawPrevTime=e._time=e._totalTime=f._time,g=f._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||e.add(g,g._startTime-g._delay),g=h;return f.add(e,0),e},h.add=function(e,f,g,h){var i,j,k,l,m;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array){for(g=g||"normal",h=h||0,i=f,j=e.length,k=0;j>k;k++)(l=e[k])instanceof Array&&(l=new d({tweens:l})),this.add(l,i),"string"!=typeof l&&"function"!=typeof l&&("sequence"===g?i=l._startTime+l.totalDuration()/l._timeScale:"start"===g&&(l._startTime-=l.delay())),i+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the TimelineLite/Max: it is neither a tween, timeline, function, nor a String.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),this._gc&&!this._paused&&this._time===this._duration&&this._time<this.duration())for(m=this;m._gc&&m._timeline;)m._timeline.smoothChildTiming?m.totalTime(m._totalTime,!0):m._enabled(!0,!1),m=m._timeline;return this},h.remove=function(b){if(b instanceof a)return this._remove(b,!1);if(b instanceof Array){for(var c=b.length;--c>-1;)this.remove(b[c]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},h.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},h.insert=h.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},h.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},h.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},h.removeLabel=function(a){return delete this._labels[a],this},h.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},h._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e instanceof Array)for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},h.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},h.stop=function(){return this.paused(!0)},h.gotoAndPlay=function(a,c){return b.prototype.play.call(this,a,c)},h.gotoAndStop=function(a,b){return this.pause(a,b)},h.render=function(a,b,c){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var j,k,l,m,d=this._dirty?this.totalDuration():this._totalDuration,e=this._time,g=this._startTime,h=this._timeScale,i=this._paused;if(a>=d?(this._totalTime=this._time=d,this._reversed||this._hasPausedChild()||(k=!0,m="onComplete",0===this._duration&&(0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0)),this._rawPrevTime=a,a=d+1e-6):0>=a?(this._totalTime=this._time=0,(0!==e||0===this._duration&&this._rawPrevTime>0)&&(m="onReverseComplete",k=this._reversed),0>a?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&(c=!0)):this._initted||(c=!0),this._rawPrevTime=a,a=-1e-6):this._totalTime=this._time=this._rawPrevTime=a,this._time!==e||c){if(this._initted||(this._initted=!0),0===e&&this.vars.onStart&&0!==this._time&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||f)),this._time>e)for(j=this._first;j&&(l=j._next,!this._paused||i);)(j._active||j._startTime<=this._time&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,c):j.render((a-j._startTime)*j._timeScale,b,c)),j=l;else for(j=this._last;j&&(l=j._prev,!this._paused||i);)(j._active||e>=j._startTime&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,c):j.render((a-j._startTime)*j._timeScale,b,c)),j=l;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||f)),m&&(this._gc||(g===this._startTime||h!==this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(k&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[m]&&this.vars[m].apply(this.vars[m+"Scope"]||this,this.vars[m+"Params"]||f)))}},h._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},h.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)e>g._startTime||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},h.getTweensOf=function(a,b){for(var d=c.getTweensOf(a),e=d.length,f=[],g=0;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(f[g++]=d[e]);return f},h._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},h.shiftChildren=function(a,b,c){c=c||0;for(var e,d=this._first;d;)d._startTime>=c&&(d._startTime+=a),d=d._next;if(b)for(e in this._labels)this._labels[e]>=c&&(this._labels[e]+=a);return this._uncache(!0)},h._kill=function(a,b){if(null==a&&null==b)return this._enabled(!1,!1);for(var c=null==b?this.getChildren(!0,!0,!1):this.getTweensOf(b),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},h.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},h.invalidate=function(){for(var a=this._first;a;)a.invalidate(),a=a._next;return this},h._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},h.progress=function(a){return arguments.length?this.totalTime(this.duration()*a,!1):this._time/this.duration()},h.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},h.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var e,f,b=0,c=this._last,d=999999999999;c;)e=c._prev,c._dirty&&c.totalDuration(),c._startTime>d&&this._sortChildren&&!c._paused?this.add(c,c._startTime-c._delay):d=c._startTime,0>c._startTime&&!c._paused&&(b-=c._startTime,this._timeline.smoothChildTiming&&(this._startTime+=c._startTime/this._timeScale),this.shiftChildren(-c._startTime,!1,-9999999999),d=0),f=c._startTime+c._totalDuration/c._timeScale,f>b&&(b=f),c=e;this._duration=this._totalDuration=b,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==a&&this.timeScale(this._totalDuration/a),this},h.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},h.rawTime=function(){return this._paused||0!==this._totalTime&&this._totalTime!==this._totalDuration?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0)}),window._gsDefine&&window._gsQueue.pop()();

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/TweenLite.min.js */
/*!
 * VERSION: beta 1.9.0
 * DATE: 2013-02-28
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
(function(a){"use strict";var e,f,g,h,b=a.GreenSockGlobals||a,c=function(a){var e,c=a.split("."),d=b;for(e=0;c.length>e;e++)d[c[e]]=d=d[c[e]]||{};return d},d=c("com.greensock"),i={},j=function(d,e,f,g){this.sc=i[d]?i[d].sc:[],i[d]=this,this.gsClass=null,this.func=f;var h=[];this.check=function(k){for(var n,o,p,q,l=e.length,m=l;--l>-1;)(n=i[e[l]]||new j(e[l],[])).gsClass?(h[l]=n.gsClass,m--):k&&n.sc.push(this);if(0===m&&f)for(o=("com.greensock."+d).split("."),p=o.pop(),q=c(o.join("."))[p]=this.gsClass=f.apply(f,h),g&&(b[p]=q,"function"==typeof define&&define.amd?define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").join("/"),[],function(){return q}):"undefined"!=typeof module&&module.exports&&(module.exports=q)),l=0;this.sc.length>l;l++)this.sc[l].check()},this.check(!0)},k=a._gsDefine=function(a,b,c,d){return new j(a,b,c,d)},l=d._class=function(a,b,c){return b=b||function(){},k(a,[],function(){return b},c),b};k.globals=b;var m=[0,0,1,1],n=[],o=l("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?m.concat(b):m},!0),p=o.map={},q=o.register=function(a,b,c,e){for(var i,j,k,m,f=b.split(","),g=f.length,h=(c||"easeIn,easeOut,easeInOut").split(",");--g>-1;)for(j=f[g],i=e?l("easing."+j,null,!0):d.easing[j]||{},k=h.length;--k>-1;)m=h[k],p[j+"."+m]=p[m+j]=i[m]=a.getRatio?a:a[m]||new a};for(g=o.prototype,g._calcEnd=!1,g.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},e=["Linear","Quad","Cubic","Quart","Quint,Strong"],f=e.length;--f>-1;)g=e[f]+",Power"+f,q(new o(null,null,1,f),g,"easeOut",!0),q(new o(null,null,2,f),g,"easeIn"+(0===f?",easeNone":"")),q(new o(null,null,3,f),g,"easeInOut");p.linear=d.easing.Linear.easeIn,p.swing=d.easing.Quad.easeInOut;var r=l("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});g=r.prototype,g.addEventListener=function(a,b,c,d,e){e=e||0;var h,i,f=this._listeners[a],g=0;for(null==f&&(this._listeners[a]=f=[]),i=f.length;--i>-1;)h=f[i],h.c===b?f.splice(i,1):0===g&&e>h.pr&&(g=i+1);f.splice(g,0,{c:b,s:c,up:d,pr:e})},g.removeEventListener=function(a,b){var d,c=this._listeners[a];if(c)for(d=c.length;--d>-1;)if(c[d].c===b)return c.splice(d,1),void 0},g.dispatchEvent=function(a){var b=this._listeners[a];if(b)for(var e,c=b.length,d=this._eventTarget;--c>-1;)e=b[c],e.up?e.c.call(e.s||d,{type:a,target:d}):e.c.call(e.s||d)};var s=a.requestAnimationFrame,t=a.cancelAnimationFrame,u=Date.now||function(){return(new Date).getTime()};for(e=["ms","moz","webkit","o"],f=e.length;--f>-1&&!s;)s=a[e[f]+"RequestAnimationFrame"],t=a[e[f]+"CancelAnimationFrame"]||a[e[f]+"CancelRequestAnimationFrame"];l("Ticker",function(b,c){var g,h,i,j,k,d=this,e=u(),f=c!==!1&&s,l=function(){null!=i&&(f&&t?t(i):a.clearTimeout(i),i=null)},m=function(a){d.time=(u()-e)/1e3,(!g||d.time>=k||a===!0)&&(d.frame++,k=d.time>k?d.time+j-(d.time-k):d.time+j-.001,d.time+.001>k&&(k=d.time+.001),d.dispatchEvent("tick")),a!==!0&&(i=h(m))};r.call(d),this.time=this.frame=0,this.tick=function(){m(!0)},this.fps=function(a){return arguments.length?(g=a,j=1/(g||60),k=this.time+j,h=0===g?function(){}:f&&s?s:function(a){return setTimeout(a,1e3*(k-d.time)+1>>0||1)},l(),i=h(m),void 0):g},this.useRAF=function(a){return arguments.length?(l(),f=a,d.fps(g),void 0):f},d.fps(b),setTimeout(function(){f&&!i&&d.useRAF(!1)},1e3)}),g=d.Ticker.prototype=new d.events.EventDispatcher,g.constructor=d.Ticker;var v=l("core.Animation",function(a,b){if(this.vars=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(this.vars.delay)||0,this._timeScale=1,this._active=this.vars.immediateRender===!0,this.data=this.vars.data,this._reversed=this.vars.reversed===!0,I){h||(w.tick(),h=!0);var c=this.vars.useFrames?H:I;c.add(this,c._time),this.vars.paused&&this.paused(!0)}}),w=v.ticker=new d.Ticker;g=v.prototype,g._dirty=g._gc=g._initted=g._paused=!1,g._totalTime=g._time=0,g._rawPrevTime=-1,g._next=g._last=g._onUpdate=g._timeline=g.timeline=null,g._paused=!1,g.play=function(a,b){return arguments.length&&this.seek(a,b),this.reversed(!1),this.paused(!1)},g.pause=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!0)},g.resume=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!1)},g.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},g.restart=function(a,b){return this.reversed(!1),this.paused(!1),this.totalTime(a?-this._delay:0,b!==!1)},g.reverse=function(a,b){return arguments.length&&this.seek(a||this.totalDuration(),b),this.reversed(!0),this.paused(!1)},g.render=function(){},g.invalidate=function(){return this},g._enabled=function(a,b){return this._gc=!a,this._active=a&&!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration,b!==!0&&(a&&null==this.timeline?this._timeline.add(this,this._startTime-this._delay):a||null==this.timeline||this._timeline._remove(this,!0)),!1},g._kill=function(){return this._enabled(!1,!1)},g.kill=function(a,b){return this._kill(a,b),this},g._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},g.eventCallback=function(a,b,c,d){if(null==a)return null;if("on"===a.substr(0,2)){if(1===arguments.length)return this.vars[a];if(null==b)delete this.vars[a];else if(this.vars[a]=b,this.vars[a+"Params"]=c,this.vars[a+"Scope"]=d,c)for(var e=c.length;--e>-1;)"{self}"===c[e]&&(c=this.vars[a+"Params"]=c.concat(),c[e]=this);"onUpdate"===a&&(this._onUpdate=b)}return this},g.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},g.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},g.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},g.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this.totalTime(a,b)):this._time},g.totalTime=function(a,b){if(!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&(a+=this.totalDuration()),this._timeline.smoothChildTiming&&(this._dirty&&this.totalDuration(),a>this._totalDuration&&(a=this._totalDuration),this._startTime=(this._paused?this._pauseTime:this._timeline._time)-(this._reversed?this._totalDuration-a:a)/this._timeScale,this._timeline._dirty||this._uncache(!1),!this._timeline._active))for(var c=this._timeline;c._timeline;)c.totalTime(c._totalTime,!0),c=c._timeline;this._gc&&this._enabled(!0,!1),this._totalTime!==a&&this.render(a,b,!1)}return this},g.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},g.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||1e-6,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime||0===this._pauseTime?this._pauseTime:this._timeline._totalTime;this._startTime=b-(b-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},g.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._totalTime,!0)),this):this._reversed},g.paused=function(a){return arguments.length?(a!=this._paused&&this._timeline&&(!a&&this._timeline.smoothChildTiming&&(this._startTime+=this._timeline.rawTime()-this._pauseTime,this._uncache(!1)),this._pauseTime=a?this._timeline.rawTime():null,this._paused=a,this._active=!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration),this._gc&&(a||this._enabled(!0,!1)),this):this._paused};var x=l("core.SimpleTimeline",function(a){v.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});g=x.prototype=new v,g.constructor=x,g.kill()._gc=!1,g._first=g._last=null,g._sortChildren=!1,g.add=function(a,b){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._timeline&&this._uncache(!0),this},g.insert=g.add,g._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a.timeline=null,a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),this._timeline&&this._uncache(!0)),this},g.render=function(a,b,c){var e,d=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;d;)e=d._next,(d._active||a>=d._startTime&&!d._paused)&&(d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=e},g.rawTime=function(){return this._totalTime};var y=l("TweenLite",function(a,b,c){if(v.call(this,b,c),null==a)throw"Cannot tween an undefined reference.";this.target=a="string"!=typeof a?a:y.selector(a)||a,this._overwrite=null==this.vars.overwrite?G[y.defaultOverwrite]:"number"==typeof this.vars.overwrite?this.vars.overwrite>>0:G[this.vars.overwrite];var e,f,d=a.jquery||"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style;if((d||a instanceof Array)&&"number"!=typeof a[0])for(this._targets=d&&!a.slice?A(a):a.slice(0),this._propLookup=[],this._siblings=[],e=0;this._targets.length>e;e++)f=this._targets[e],f?"string"!=typeof f?"function"==typeof f.each&&f[0]&&f[0].nodeType&&f[0].style?(this._targets.splice(e--,1),this._targets=this._targets.concat(A(f))):(this._siblings[e]=J(f,this,!1),1===this._overwrite&&this._siblings[e].length>1&&K(f,this,null,1,this._siblings[e])):(f=this._targets[e--]=y.selector(f),"string"==typeof f&&this._targets.splice(e+1,1)):this._targets.splice(e--,1);else this._propLookup={},this._siblings=J(a,this,!1),1===this._overwrite&&this._siblings.length>1&&K(a,this,null,1,this._siblings);(this.vars.immediateRender||0===b&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),z=function(a){return"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style},A=function(a){var b=[];return a.each(function(){b.push(this)}),b},B=function(a,b){var d,c={};for(d in a)F[d]||d in b&&"x"!==d&&"y"!==d&&"width"!==d&&"height"!==d&&"className"!==d||!(!C[d]||C[d]&&C[d]._autoCSS)||(c[d]=a[d],delete a[d]);a.css=c};g=y.prototype=new v,g.constructor=y,g.kill()._gc=!1,g.ratio=0,g._firstPT=g._targets=g._overwrittenProps=g._startAt=null,g._notifyPluginsOfEnabled=!1,y.version="1.9.0",y.defaultEase=g._ease=new o(null,null,1,1),y.defaultOverwrite="auto",y.ticker=w,y.selector=a.$||a.jQuery||function(b){return a.$?(y.selector=a.$,a.$(b)):a.document?a.document.getElementById("#"===b.charAt(0)?b.substr(1):b):b};var C=y._plugins={},D=y._tweenLookup={},E=0,F={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,orientToBezier:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},G={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},H=v._rootFramesTimeline=new x,I=v._rootTimeline=new x;I._startTime=w.time,H._startTime=w.frame,I._active=H._active=!0,v._updateRoot=function(){if(I.render((w.time-I._startTime)*I._timeScale,!1,!1),H.render((w.frame-H._startTime)*H._timeScale,!1,!1),!(w.frame%120)){var a,b,c;for(c in D){for(b=D[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete D[c]}}},w.addEventListener("tick",v._updateRoot);var J=function(a,b,c){var e,f,d=a._gsTweenID;if(D[d||(a._gsTweenID=d="t"+E++)]||(D[d]={target:a,tweens:[]}),b&&(e=D[d].tweens,e[f=e.length]=b,c))for(;--f>-1;)e[f]===b&&e.splice(f,1);return D[d].tweens},K=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._enabled(!1,!1)&&(g=!0);else if(5===d)break;return g}var n,j=b._startTime+1e-10,k=[],l=0,m=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(n=n||L(b,0,m),0===L(h,n,m)&&(k[l++]=h)):j>=h._startTime&&h._startTime+h.totalDuration()/h._timeScale+1e-10>j&&((m||!h._initted)&&2e-10>=j-h._startTime||(k[l++]=h)));for(f=l;--f>-1;)h=k[f],2===d&&h._kill(c,a)&&(g=!0),(2!==d||!h._firstPT&&h._initted)&&h._enabled(!1,!1)&&(g=!0);return g},L=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2e-10>f-b?1e-10:(f+=a.totalDuration()/a._timeScale/e)>b?0:f-b-1e-10};g._init=function(){var c,d,e,a=this.vars,b=a.ease;if(a.startAt&&(a.startAt.overwrite=0,a.startAt.immediateRender=!0,this._startAt=new y(this.target,0,a.startAt),a.immediateRender&&(this._startAt=null)),this._ease=b?b instanceof o?a.easeParams instanceof Array?b.config.apply(b,a.easeParams):b:"function"==typeof b?new o(b,a.easeParams):p[b]||y.defaultEase:y.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(c=this._targets.length;--c>-1;)this._initProps(this._targets[c],this._propLookup[c]={},this._siblings[c],this._overwrittenProps?this._overwrittenProps[c]:null)&&(d=!0);else d=this._initProps(this.target,this._propLookup,this._siblings,this._overwrittenProps);if(d&&y._onPluginEvent("_onInitAllProps",this),this._overwrittenProps&&null==this._firstPT&&"function"!=typeof this.target&&this._enabled(!1,!1),a.runBackwards)for(e=this._firstPT;e;)e.s+=e.c,e.c=-e.c,e=e._next;this._onUpdate=a.onUpdate,this._initted=!0},g._initProps=function(a,b,c,d){var e,f,g,h,i,j,k;if(null==a)return!1;this.vars.css||a.style&&a.nodeType&&C.css&&this.vars.autoCSS!==!1&&B(this.vars,a);for(e in this.vars){if(F[e]){if(("onStartParams"===e||"onUpdateParams"===e||"onCompleteParams"===e||"onReverseCompleteParams"===e||"onRepeatParams"===e)&&(i=this.vars[e]))for(f=i.length;--f>-1;)"{self}"===i[f]&&(i=this.vars[e]=i.concat(),i[f]=this)}else if(C[e]&&(h=new C[e])._onInitTween(a,this.vars[e],this)){for(this._firstPT=j={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:e,pg:!0,pr:h._priority},f=h._overwriteProps.length;--f>-1;)b[h._overwriteProps[f]]=this._firstPT;(h._priority||h._onInitAllProps)&&(g=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=b[e]=j={_next:this._firstPT,t:a,p:e,f:"function"==typeof a[e],n:e,pg:!1,pr:0},j.s=j.f?a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]():parseFloat(a[e]),k=this.vars[e],j.c="string"==typeof k&&"="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*Number(k.substr(2)):Number(k)-j.s||0;j&&j._next&&(j._next._prev=j)}return d&&this._kill(d,a)?this._initProps(a,b,c,d):this._overwrite>1&&this._firstPT&&c.length>1&&K(a,this,b,this._overwrite,c)?(this._kill(b,a),this._initProps(a,b,c,d)):g},g.render=function(a,b,c){var e,f,g,d=this._time;if(a>=this._duration)this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(e=!0,f="onComplete"),0===this._duration&&((0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0),this._rawPrevTime=a);else if(0>=a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===this._duration&&this._rawPrevTime>0)&&(f="onReverseComplete",e=this._reversed),0>a?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(c=!0),this._rawPrevTime=a)):this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var h=a/this._duration,i=this._easeType,j=this._easePower;(1===i||3===i&&h>=.5)&&(h=1-h),3===i&&(h*=2),1===j?h*=h:2===j?h*=h*h:3===j?h*=h*h*h:4===j&&(h*=h*h*h*h),this.ratio=1===i?1-h:2===i?h:.5>a/this._duration?h/2:1-h/2}else this.ratio=this._ease.getRatio(a/this._duration);if(this._time!==d||c){for(this._initted||(this._init(),!e&&this._time&&(this.ratio=this._ease.getRatio(this._time/this._duration))),this._active||this._paused||(this._active=!0),0===d&&(this._startAt&&this._startAt.render(a,b,c),this.vars.onStart&&(0!==this._time||0===this._duration)&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n))),g=this._firstPT;g;)g.f?g.t[g.p](g.c*this.ratio+g.s):g.t[g.p]=g.c*this.ratio+g.s,g=g._next;this._onUpdate&&(0>a&&this._startAt&&this._startAt.render(a,b,c),b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),f&&(this._gc||(0>a&&this._startAt&&(this._onUpdate||this._startAt.render(a,b,c)),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[f]&&this.vars[f].apply(this.vars[f+"Scope"]||this,this.vars[f+"Params"]||n)))}},g._kill=function(a,b){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:y.selector(b)||b;var c,d,e,f,g,h,i,j;if((b instanceof Array||z(b))&&"number"!=typeof b[0])for(c=b.length;--c>-1;)this._kill(a,b[c])&&(h=!0);else{if(this._targets){for(c=this._targets.length;--c>-1;)if(b===this._targets[c]){g=this._propLookup[c]||{},this._overwrittenProps=this._overwrittenProps||[],d=this._overwrittenProps[c]=a?this._overwrittenProps[c]||{}:"all";break}}else{if(b!==this.target)return!1;g=this._propLookup,d=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(g){i=a||g,j=a!==d&&"all"!==d&&a!==g&&(null==a||a._tempKill!==!0);for(e in i)(f=g[e])&&(f.pg&&f.t._kill(i)&&(h=!0),f.pg&&0!==f.t._overwriteProps.length||(f._prev?f._prev._next=f._next:f===this._firstPT&&(this._firstPT=f._next),f._next&&(f._next._prev=f._prev),f._next=f._prev=null),delete g[e]),j&&(d[e]=1)}}return h},g.invalidate=function(){return this._notifyPluginsOfEnabled&&y._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},g._enabled=function(a,b){if(a&&this._gc)if(this._targets)for(var c=this._targets.length;--c>-1;)this._siblings[c]=J(this._targets[c],this,!0);else this._siblings=J(this.target,this,!0);return v.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?y._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},y.to=function(a,b,c){return new y(a,b,c)},y.from=function(a,b,c){return c.runBackwards=!0,0!=c.immediateRender&&(c.immediateRender=!0),new y(a,b,c)},y.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new y(a,b,d)},y.delayedCall=function(a,b,c,d,e){return new y(b,0,{delay:a,onComplete:b,onCompleteParams:c,onCompleteScope:d,onReverseComplete:b,onReverseCompleteParams:c,onReverseCompleteScope:d,immediateRender:!1,useFrames:e,overwrite:0})},y.set=function(a,b){return new y(a,0,b)},y.killTweensOf=y.killDelayedCallsTo=function(a,b){for(var c=y.getTweensOf(a),d=c.length;--d>-1;)c[d]._kill(b,a)},y.getTweensOf=function(a){if(null!=a){a="string"!=typeof a?a:y.selector(a)||a;var b,c,d,e;if((a instanceof Array||z(a))&&"number"!=typeof a[0]){for(b=a.length,c=[];--b>-1;)c=c.concat(y.getTweensOf(a[b]));for(b=c.length;--b>-1;)for(e=c[b],d=b;--d>-1;)e===c[d]&&c.splice(b,1)}else for(c=J(a).concat(),b=c.length;--b>-1;)c[b]._gc&&c.splice(b,1);return c}};var M=l("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=M.prototype},!0);if(g=M.prototype,M.version=12,M.API=2,g._firstPT=null,g._addTween=function(a,b,c,d,e,f){var g,h;null!=d&&(g="number"==typeof d||"="!==d.charAt(1)?Number(d)-c:parseInt(d.charAt(0)+"1",10)*Number(d.substr(2)))&&(this._firstPT=h={_next:this._firstPT,t:a,p:b,s:c,c:g,f:"function"==typeof a[b],n:e||b,r:f},h._next&&(h._next._prev=h))},g.setRatio=function(a){for(var d,b=this._firstPT,c=1e-6;b;)d=b.c*a+b.s,b.r?d=d+(d>0?.5:-.5)>>0:c>d&&d>-c&&(d=0),b.f?b.t[b.p](d):b.t[b.p]=d,b=b._next},g._kill=function(a){var d,b=this._overwriteProps,c=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(d=b.length;--d>-1;)null!=a[b[d]]&&b.splice(d,1);for(;c;)null!=a[c.n]&&(c._next&&(c._next._prev=c._prev),c._prev?(c._prev._next=c._next,c._prev=null):this._firstPT===c&&(this._firstPT=c._next)),c=c._next;return!1},g._roundProps=function(a,b){for(var c=this._firstPT;c;)(a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")])&&(c.r=b),c=c._next},y._onPluginEvent=function(a,b){var d,e,f,g,h,c=b._firstPT;if("_onInitAllProps"===a){for(;c;){for(h=c._next,e=f;e&&e.pr>c.pr;)e=e._next;(c._prev=e?e._prev:g)?c._prev._next=c:f=c,(c._next=e)?e._prev=c:g=c,c=h}c=b._firstPT=f}for(;c;)c.pg&&"function"==typeof c.t[a]&&c.t[a]()&&(d=!0),c=c._next;return d},M.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===M.API&&(y._plugins[(new a[b])._propName]=a[b]);return!0},k.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var h,b=a.propName,c=a.priority||0,d=a.overwriteProps,e={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},f=l("plugins."+b.charAt(0).toUpperCase()+b.substr(1)+"Plugin",function(){M.call(this,b,c),this._overwriteProps=d||[]},a.global===!0),g=f.prototype=new M(b);g.constructor=f,f.API=a.API;for(h in e)"function"==typeof a[h]&&(g[e[h]]=a[h]);return f.version=a.version,M.activate([f]),f},e=a._gsQueue){for(f=0;e.length>f;f++)e[f]();for(g in i)i[g].func||a.console.log("GSAP encountered missing dependency: com.greensock."+g)}h=!1})(window);

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/TweenMax.min.js */
/*!
 * VERSION: beta 1.9.0
 * DATE: 2013-03-01
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, easing.EasePack, plugins.CSSPlugin, plugins.RoundPropsPlugin, plugins.BezierPlugin
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0},e=function(a){return a.jquery||"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style},f=function(a){var b=[];return a.each(function(){b.push(this)}),b},g=d.prototype=c.to({},.1,{}),h=[];d.version="1.9.0",g.constructor=d,g.kill()._gc=!1,d.killTweensOf=d.killDelayedCallsTo=c.killTweensOf,d.getTweensOf=c.getTweensOf,d.ticker=c.ticker,g.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),c.prototype.invalidate.call(this)},g.updateTo=function(a,b){var e,d=this.ratio;b&&null!=this.timeline&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(e in a)this.vars[e]=a[e];if(this._initted)if(b)this._initted=!1;else if(this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var f=this._time;this.render(0,!0,!1),this._initted=!1,this.render(f,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var i,g=1/(1-d),h=this._firstPT;h;)i=h.s+h.c,h.c*=g,h.s=i-h.c,h=h._next}return this},g.render=function(a,b,c){var i,j,k,d=this._dirty?this.totalDuration():this._totalDuration,e=this._time,f=this._totalTime,g=this._cycle;if(a>=d)this._totalTime=d,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(i=!0,j="onComplete"),0===this._duration&&((0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0),this._rawPrevTime=a);else if(0>=a)this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==f||0===this._duration&&this._rawPrevTime>0)&&(j="onReverseComplete",i=this._reversed),0>a?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(c=!0),this._rawPrevTime=a)):this._initted||(c=!0);else{if(this._totalTime=this._time=a,0!==this._repeat){var l=this._duration+this._repeatDelay;this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=this._duration-this._time),this._time>this._duration?this._time=this._duration:0>this._time&&(this._time=0)}if(this._easeType){var m=this._time/this._duration,n=this._easeType,o=this._easePower;(1===n||3===n&&m>=.5)&&(m=1-m),3===n&&(m*=2),1===o?m*=m:2===o?m*=m*m:3===o?m*=m*m*m:4===o&&(m*=m*m*m*m),this.ratio=1===n?1-m:2===n?m:.5>this._time/this._duration?m/2:1-m/2}else this.ratio=this._ease.getRatio(this._time/this._duration)}if(e===this._time&&!c)return f!==this._totalTime&&this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||h)),void 0;for(this._initted||(this._init(),!i&&this._time&&(this.ratio=this._ease.getRatio(this._time/this._duration))),this._active||this._paused||(this._active=!0),0===f&&(this._startAt&&this._startAt.render(a,b,c),this.vars.onStart&&(0!==this._totalTime||0===this._duration)&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||h))),k=this._firstPT;k;)k.f?k.t[k.p](k.c*this.ratio+k.s):k.t[k.p]=k.c*this.ratio+k.s,k=k._next;this._onUpdate&&(0>a&&this._startAt&&this._startAt.render(a,b,c),b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||h)),this._cycle!==g&&(b||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||h)),j&&(this._gc||(0>a&&this._startAt&&(this._onUpdate||this._startAt.render(a,b,c)),i&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[j]&&this.vars[j].apply(this.vars[j+"Scope"]||this,this.vars[j+"Params"]||h)))},d.to=function(a,b,c){return new d(a,b,c)},d.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender!==!1&&(c.immediateRender=!0),new d(a,b,c)},d.fromTo=function(a,b,c,e){return e.startAt=c,e.immediateRender=0!=e.immediateRender&&0!=c.immediateRender,new d(a,b,e)},d.staggerTo=d.allTo=function(a,b,g,h,i,j,k){h=h||0;var n,o,p,q,l=g.delay||0,m=[];for(a instanceof Array||("string"==typeof a&&(a=c.selector(a)||a),e(a)&&(a=f(a))),n=a.length,p=0;n>p;p++){o={};for(q in g)o[q]=g[q];o.delay=l,p===n-1&&i&&(o.onComplete=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope,g.onCompleteParams),i.apply(k,j)}),m[p]=new d(a[p],b,o),l+=h}return m},d.staggerFrom=d.allFrom=function(a,b,c,e,f,g,h){return c.runBackwards=!0,0!=c.immediateRender&&(c.immediateRender=!0),d.staggerTo(a,b,c,e,f,g,h)},d.staggerFromTo=d.allFromTo=function(a,b,c,e,f,g,h,i){return e.startAt=c,e.immediateRender=0!=e.immediateRender&&0!=c.immediateRender,d.staggerTo(a,b,e,f,g,h,i)},d.delayedCall=function(a,b,c,e,f){return new d(b,0,{delay:a,onComplete:b,onCompleteParams:c,onCompleteScope:e,onReverseComplete:b,onReverseCompleteParams:c,onReverseCompleteScope:e,immediateRender:!1,useFrames:f,overwrite:0})},d.set=function(a,b){return new d(a,0,b)},d.isTweening=function(a){for(var e,b=c.getTweensOf(a),d=b.length;--d>-1;)if((e=b[d])._active||e._startTime===e.timeline._time&&e.timeline._active)return!0;return!1};var i=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(i(f,b)),e=d.length),f=f._next;return d},j=d.getAllTweens=function(b){var c=i(a._rootTimeline,b);return c.concat(i(a._rootFramesTimeline,b))};d.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var i,k,l,f=j(0!=e),g=f.length,h=c&&d&&e;for(l=0;g>l;l++)k=f[l],(h||k instanceof b||(i=k.target===k.vars.onComplete)&&d||c&&!i)&&(a?k.totalTime(k.totalDuration()):k._enabled(!1,!1))},d.killChildTweensOf=function(a,b){if(null!=a){var h,i,j,k,l,g=c._tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),e(a)&&(a=f(a)),a instanceof Array)for(k=a.length;--k>-1;)d.killChildTweensOf(a[k],b);else{h=[];for(j in g)for(i=g[j].target.parentNode;i;)i===a&&(h=h.concat(g[j].tweens)),i=i.parentNode;for(l=h.length,k=0;l>k;k++)b&&h[k].totalTime(h[k].totalDuration()),h[k]._enabled(!1,!1)}}};var k=function(a,c,d,e){void 0===c&&(c=!0),void 0===d&&(d=!0);for(var i,k,f=j(e),g=c&&d&&e,h=f.length;--h>-1;)k=f[h],(g||k instanceof b||(i=k.target===k.vars.onComplete)&&d||c&&!i)&&k.paused(a)};return d.pauseAll=function(a,b,c){k(!0,a,b,c)},d.resumeAll=function(a,b,c){k(!1,a,b,c)},g.progress=function(a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},g.totalProgress=function(a){return arguments.length?this.totalTime(this.totalDuration()*a,!1):this._totalTime/this.totalDuration()},g.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},g.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},g.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},g.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},g.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},g.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},d},!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;for(var d,f,c=e.length;--c>-1;)if(f=this.vars[e[c]])for(d=f.length;--d>-1;)"{self}"===f[d]&&(f=this.vars[e[c]]=f.concat(),f[d]=this);this.vars.tweens instanceof Array&&this.add(this.vars.tweens,0,this.vars.align,this.vars.stagger)},e=["onStartParams","onUpdateParams","onCompleteParams","onReverseCompleteParams","onRepeatParams"],f=[],g=function(a){var c,b={};for(c in a)b[c]=a[c];return b},h=d.prototype=new b;return d.version="1.9.0",h.constructor=d,h.kill()._gc=!1,h.to=function(a,b,d,e){return this.add(new c(a,b,d),e)},h.from=function(a,b,d,e){return this.add(c.from(a,b,d),e)},h.fromTo=function(a,b,d,e,f){return this.add(c.fromTo(a,b,d,e),f)},h.staggerTo=function(a,b,e,f,h,i,j,k){var m,n,l=new d({onComplete:i,onCompleteParams:j,onCompleteScope:k});for("string"==typeof a&&(a=c.selector(a)||a),!(a instanceof Array)&&"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style&&(n=[],a.each(function(){n.push(this)}),a=n),f=f||0,m=0;a.length>m;m++)null!=e.startAt&&(e.startAt=g(e.startAt)),l.add(new c(a[m],b,g(e)),m*f);return this.add(l,h)},h.staggerFrom=function(a,b,c,d,e,f,g,h){return null==c.immediateRender&&(c.immediateRender=!0),c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},h.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},h.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},h.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var g,h,e=new d(a),f=e._timeline;for(null==b&&(b=!0),f._remove(e,!0),e._startTime=0,e._rawPrevTime=e._time=e._totalTime=f._time,g=f._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||e.add(g,g._startTime-g._delay),g=h;return f.add(e,0),e},h.add=function(e,f,g,h){var i,j,k,l,m;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array){for(g=g||"normal",h=h||0,i=f,j=e.length,k=0;j>k;k++)(l=e[k])instanceof Array&&(l=new d({tweens:l})),this.add(l,i),"string"!=typeof l&&"function"!=typeof l&&("sequence"===g?i=l._startTime+l.totalDuration()/l._timeScale:"start"===g&&(l._startTime-=l.delay())),i+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the TimelineLite/Max: it is neither a tween, timeline, function, nor a String.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),this._gc&&!this._paused&&this._time===this._duration&&this._time<this.duration())for(m=this;m._gc&&m._timeline;)m._timeline.smoothChildTiming?m.totalTime(m._totalTime,!0):m._enabled(!0,!1),m=m._timeline;return this},h.remove=function(b){if(b instanceof a)return this._remove(b,!1);if(b instanceof Array){for(var c=b.length;--c>-1;)this.remove(b[c]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},h.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},h.insert=h.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},h.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},h.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},h.removeLabel=function(a){return delete this._labels[a],this},h.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},h._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e instanceof Array)for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},h.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},h.stop=function(){return this.paused(!0)},h.gotoAndPlay=function(a,c){return b.prototype.play.call(this,a,c)},h.gotoAndStop=function(a,b){return this.pause(a,b)},h.render=function(a,b,c){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var j,k,l,m,d=this._dirty?this.totalDuration():this._totalDuration,e=this._time,g=this._startTime,h=this._timeScale,i=this._paused;if(a>=d?(this._totalTime=this._time=d,this._reversed||this._hasPausedChild()||(k=!0,m="onComplete",0===this._duration&&(0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0)),this._rawPrevTime=a,a=d+1e-6):0>=a?(this._totalTime=this._time=0,(0!==e||0===this._duration&&this._rawPrevTime>0)&&(m="onReverseComplete",k=this._reversed),0>a?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&(c=!0)):this._initted||(c=!0),this._rawPrevTime=a,a=-1e-6):this._totalTime=this._time=this._rawPrevTime=a,this._time!==e||c){if(this._initted||(this._initted=!0),0===e&&this.vars.onStart&&0!==this._time&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||f)),this._time>e)for(j=this._first;j&&(l=j._next,!this._paused||i);)(j._active||j._startTime<=this._time&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,c):j.render((a-j._startTime)*j._timeScale,b,c)),j=l;else for(j=this._last;j&&(l=j._prev,!this._paused||i);)(j._active||e>=j._startTime&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,c):j.render((a-j._startTime)*j._timeScale,b,c)),j=l;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||f)),m&&(this._gc||(g===this._startTime||h!==this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(k&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[m]&&this.vars[m].apply(this.vars[m+"Scope"]||this,this.vars[m+"Params"]||f)))}},h._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},h.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)e>g._startTime||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},h.getTweensOf=function(a,b){for(var d=c.getTweensOf(a),e=d.length,f=[],g=0;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(f[g++]=d[e]);return f},h._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},h.shiftChildren=function(a,b,c){c=c||0;for(var e,d=this._first;d;)d._startTime>=c&&(d._startTime+=a),d=d._next;if(b)for(e in this._labels)this._labels[e]>=c&&(this._labels[e]+=a);return this._uncache(!0)},h._kill=function(a,b){if(null==a&&null==b)return this._enabled(!1,!1);for(var c=null==b?this.getChildren(!0,!0,!1):this.getTweensOf(b),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},h.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},h.invalidate=function(){for(var a=this._first;a;)a.invalidate(),a=a._next;return this},h._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},h.progress=function(a){return arguments.length?this.totalTime(this.duration()*a,!1):this._time/this.duration()},h.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},h.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var e,f,b=0,c=this._last,d=999999999999;c;)e=c._prev,c._dirty&&c.totalDuration(),c._startTime>d&&this._sortChildren&&!c._paused?this.add(c,c._startTime-c._delay):d=c._startTime,0>c._startTime&&!c._paused&&(b-=c._startTime,this._timeline.smoothChildTiming&&(this._startTime+=c._startTime/this._timeScale),this.shiftChildren(-c._startTime,!1,-9999999999),d=0),f=c._startTime+c._totalDuration/c._timeScale,f>b&&(b=f),c=e;this._duration=this._totalDuration=b,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==a&&this.timeScale(this._totalDuration/a),this},h.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},h.rawTime=function(){return this._paused||0!==this._totalTime&&this._totalTime!==this._totalDuration?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0),window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=[],f=new c(null,null,1,0),g=function(a){for(;a;){if(a._paused)return!0;a=a._timeline}return!1},h=d.prototype=new a;return h.constructor=d,h.kill()._gc=!1,d.version="1.9.0",h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},h.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},h.removeCallback=function(a,b){if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},h.tweenTo=function(a,c){c=c||{};var g,h,d={ease:f,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1};for(g in c)d[g]=c[g];return d.time=this._parseTimeOrLabel(a),h=new b(this,Math.abs(Number(d.time)-this._time)/this._timeScale||.001,d),d.onStart=function(){h.target.paused(!0),h.vars.time!==h.target.time()&&h.duration(Math.abs(h.vars.time-h.target.time())/h.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||h,c.onStartParams||e)},h},h.tweenFromTo=function(a,b,c){c=c||{},c.startAt={time:this._parseTimeOrLabel(a)};var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-d.vars.startAt.time)/this._timeScale||.001)},h.render=function(a,b,c){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var m,n,o,q,d=this._dirty?this.totalDuration():this._totalDuration,f=this._time,g=this._totalTime,h=this._startTime,i=this._timeScale,j=this._rawPrevTime,k=this._paused,l=this._cycle;if(a>=d)this._locked||(this._totalTime=d,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,q="onComplete",0===this._duration&&(0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0)),this._rawPrevTime=a,this._yoyo&&0!==(1&this._cycle)?(this._time=0,a=-1e-6):(this._time=this._duration,a=this._duration+1e-6);else if(0>=a)this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==f||0===this._duration&&this._rawPrevTime>0&&!this._locked)&&(q="onReverseComplete",n=this._reversed),0>a?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&(c=!0)):this._initted||(c=!0),this._rawPrevTime=a,a=0===this._duration?0:-1e-6;else if(this._time=this._rawPrevTime=a,!this._locked&&(this._totalTime=a,0!==this._repeat)){var r=this._duration+this._repeatDelay;this._cycle=this._totalTime/r>>0,0!==this._cycle&&this._cycle===this._totalTime/r&&this._cycle--,this._time=this._totalTime-this._cycle*r,this._yoyo&&0!==(1&this._cycle)&&(this._time=this._duration-this._time),this._time>this._duration?(this._time=this._duration,a=this._duration+1e-6):0>this._time?this._time=a=0:a=this._time}if(this._cycle!==l&&!this._locked){var s=this._yoyo&&0!==(1&l),t=s===(this._yoyo&&0!==(1&this._cycle)),u=this._totalTime,v=this._cycle,w=this._rawPrevTime,x=this._time;this._totalTime=l*this._duration,l>this._cycle?s=!s:this._totalTime+=this._duration,this._time=f,this._rawPrevTime=0===this._duration?j-1e-5:j,this._cycle=l,this._locked=!0,f=s?0:this._duration,this.render(f,b,0===this._duration),b||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||e),t&&(f=s?this._duration+1e-6:-1e-6,this.render(f,!0,!1)),this._time=x,this._totalTime=u,this._cycle=v,this._rawPrevTime=w,this._locked=!1}if(this._time===f&&!c)return g!==this._totalTime&&this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||e)),void 0;if(this._initted||(this._initted=!0),0===g&&this.vars.onStart&&0!==this._totalTime&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||e)),this._time>f)for(m=this._first;m&&(o=m._next,!this._paused||k);)(m._active||m._startTime<=this._time&&!m._paused&&!m._gc)&&(m._reversed?m.render((m._dirty?m.totalDuration():m._totalDuration)-(a-m._startTime)*m._timeScale,b,c):m.render((a-m._startTime)*m._timeScale,b,c)),m=o;else for(m=this._last;m&&(o=m._prev,!this._paused||k);)(m._active||f>=m._startTime&&!m._paused&&!m._gc)&&(m._reversed?m.render((m._dirty?m.totalDuration():m._totalDuration)-(a-m._startTime)*m._timeScale,b,c):m.render((a-m._startTime)*m._timeScale,b,c)),m=o;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||e)),q&&(this._locked||this._gc||(h===this._startTime||i!==this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[q]&&this.vars[q].apply(this.vars[q+"Scope"]||this,this.vars[q+"Params"]||e)))},h.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var i,j,d=[],e=this.getChildren(a,b,c),f=0,h=e.length;for(i=0;h>i;i++)j=e[i],j._paused||j._timeline._time>=j._startTime&&j._timeline._time<j._startTime+j._totalDuration/j._timeScale&&(g(j._timeline)||(d[f++]=j));return d},h.getLabelAfter=function(a){a||0!==a&&(a=this._time);var d,b=this.getLabelsArray(),c=b.length;for(d=0;c>d;d++)if(b[d].time>a)return b[d].name;return null},h.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(a>b[c].time)return b[c].name;return null},h.getLabelsArray=function(){var c,a=[],b=0;for(c in this._labels)a[b++]={time:this._labels[c],name:c};return a.sort(function(a,b){return a.time-b.time}),a},h.progress=function(a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},h.totalProgress=function(a){return arguments.length?this.totalTime(this.totalDuration()*a,!1):this._totalTime/this.totalDuration()},h.totalDuration=function(b){return arguments.length?-1===this._repeat?this:this.duration((b-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},h.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},h.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},h.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},h.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=Math.PI/180,c=[],d=[],e=[],f={},g=function(a,b,c,d){this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,b,f,g,h){var m,n,o,p,q,r,s,t,u,v,w,x,y,j=a.length-1,k=0,l=a[0].a;for(m=0;j>m;m++)q=a[k],n=q.a,o=q.d,p=a[k+1].d,h?(w=c[m],x=d[m],y=.25*(x+w)*b/(g?.5:e[m]||.5),r=o-(o-n)*(g?.5*b:y/w),s=o+(p-o)*(g?.5*b:y/x),t=o-(r+(s-r)*(3*w/(w+x)+.5)/4)):(r=o-.5*(o-n)*b,s=o+.5*(p-o)*b,t=o-(r+s)/2),r+=t,s+=t,q.c=u=r,q.b=0!==m?l:l=q.a+.6*(q.c-q.a),q.da=o-n,q.ca=u-n,q.ba=l-n,f?(v=i(n,l,u,o),a.splice(k,1,v[0],v[1],v[2],v[3]),k+=4):k++,l=s;q=a[k],q.b=l,q.c=l+.4*(q.d-l),q.da=q.d-q.a,q.ca=q.c-q.a,q.ba=l-q.a,f&&(v=i(q.a,l,q.c,q.d),a.splice(k,1,v[0],v[1],v[2],v[3]))},k=function(a,b,e,f){var i,j,k,l,m,n,h=[];if(f)for(a=[f].concat(a),j=a.length;--j>-1;)"string"==typeof(n=a[j][b])&&"="===n.charAt(1)&&(a[j][b]=f[b]+Number(n.charAt(0)+n.substr(2)));if(i=a.length-2,0>i)return h[0]=new g(a[0][b],0,0,a[-1>i?0:1][b]),h;for(j=0;i>j;j++)k=a[j][b],l=a[j+1][b],h[j]=new g(k,0,0,l),e&&(m=a[j+2][b],c[j]=(c[j]||0)+(l-k)*(l-k),d[j]=(d[j]||0)+(m-l)*(m-l));return h[j]=new g(a[j][b],0,0,a[j+1][b]),h},l=function(a,b,g,i,l,m){var q,r,s,t,u,v,w,x,n={},o=[],p=m||a[0];l="string"==typeof l?","+l+",":h,null==b&&(b=1);for(r in a[0])o.push(r);if(a.length>1){for(x=a[a.length-1],w=!0,q=o.length;--q>-1;)if(r=o[q],Math.abs(p[r]-x[r])>.05){w=!1;break}w&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(c.length=d.length=e.length=0,q=o.length;--q>-1;)r=o[q],f[r]=-1!==l.indexOf(","+r+","),n[r]=k(a,r,f[r],m);for(q=c.length;--q>-1;)c[q]=Math.sqrt(c[q]),d[q]=Math.sqrt(d[q]);if(!i){for(q=o.length;--q>-1;)if(f[r])for(s=n[o[q]],v=s.length-1,t=0;v>t;t++)u=s[t+1].da/d[t]+s[t].da/c[t],e[t]=(e[t]||0)+u*u;for(q=e.length;--q>-1;)e[q]=Math.sqrt(e[q])}for(q=o.length,t=g?4:1;--q>-1;)r=o[q],s=n[r],j(s,b,g,i,f[r]),w&&(s.splice(0,t),s.splice(s.length-t,t));return n},m=function(a,b,c){b=b||"soft";var i,j,k,l,m,n,o,p,q,r,s,d={},e="cubic"===b?3:2,f="soft"===b,h=[];if(f&&c&&(a=[c].concat(a)),null==a||e+1>a.length)throw"invalid Bezier data";for(q in a[0])h.push(q);for(n=h.length;--n>-1;){for(q=h[n],d[q]=m=[],r=0,p=a.length,o=0;p>o;o++)i=null==c?a[o][q]:"string"==typeof(s=a[o][q])&&"="===s.charAt(1)?c[q]+Number(s.charAt(0)+s.substr(2)):Number(s),f&&o>1&&p-1>o&&(m[r++]=(i+m[r-2])/2),m[r++]=i;for(p=r-e+1,r=0,o=0;p>o;o+=e)i=m[o],j=m[o+1],k=m[o+2],l=2===e?0:m[o+3],m[r++]=s=3===e?new g(i,j,k,l):new g(i,(2*j+i)/3,(2*j+k)/3,k);m.length=r}return d},n=function(a,b,c){for(var f,g,h,i,j,k,l,m,n,o,p,d=1/c,e=a.length;--e>-1;)for(o=a[e],h=o.a,i=o.d-h,j=o.c-h,k=o.b-h,f=g=0,m=1;c>=m;m++)l=d*m,n=1-l,f=g-(g=(l*l*i+3*n*(l*j+n*k))*l),p=e*c+m-1,b[p]=(b[p]||0)+f*f},o=function(a,b){b=b>>0||6;var j,k,l,m,c=[],d=[],e=0,f=0,g=b-1,h=[],i=[];for(j in a)n(a[j],c,b);for(l=c.length,k=0;l>k;k++)e+=Math.sqrt(c[k]),m=k%b,i[m]=e,m===g&&(f+=e,m=k/b>>0,h[m]=i,d[m]=f,e=0,i=[]);return{length:f,lengths:d,segments:h}},p=window._gsDefine.plugin({propName:"bezier",priority:-1,API:2,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._round={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var h,i,j,k,n,d=b.values||[],e={},f=d[0],g=b.autoRotate||c.vars.orientToBezier;this._autoRotate=g?g instanceof Array?g:[["x","y","rotation",g===!0?0:Number(g)||0]]:null;for(h in f)this._props.push(h);for(j=this._props.length;--j>-1;)h=this._props[j],this._overwriteProps.push(h),i=this._func[h]="function"==typeof a[h],e[h]=i?a[h.indexOf("set")||"function"!=typeof a["get"+h.substr(3)]?h:"get"+h.substr(3)]():parseFloat(a[h]),n||e[h]!==d[0][h]&&(n=e);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(d,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,n):m(d,b.type,e),this._segCount=this._beziers[h].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(g=this._autoRotate)for(g[0]instanceof Array||(this._autoRotate=g=[g]),j=g.length;--j>-1;)for(k=0;3>k;k++)h=g[j][k],this._func[h]="function"==typeof a[h]?a[h.indexOf("set")||"function"!=typeof a["get"+h.substr(3)]?h:"get"+h.substr(3)]:!1;return!0},set:function(b){var f,g,h,i,j,k,l,m,n,o,c=this._segCount,d=this._func,e=this._target;if(this._timeRes){if(n=this._lengths,o=this._curSeg,b*=this._length,h=this._li,b>this._l2&&c-1>h){for(m=c-1;m>h&&b>=(this._l2=n[++h]););this._l1=n[h-1],this._li=h,this._curSeg=o=this._segments[h],this._s2=o[this._s1=this._si=0]}else if(this._l1>b&&h>0){for(;h>0&&(this._l1=n[--h])>=b;);0===h&&this._l1>b?this._l1=0:h++,this._l2=n[h],this._li=h,this._curSeg=o=this._segments[h],this._s1=o[(this._si=o.length-1)-1]||0,this._s2=o[this._si]}if(f=h,b-=this._l1,h=this._si,b>this._s2&&o.length-1>h){for(m=o.length-1;m>h&&b>=(this._s2=o[++h]););this._s1=o[h-1],this._si=h}else if(this._s1>b&&h>0){for(;h>0&&(this._s1=o[--h])>=b;);0===h&&this._s1>b?this._s1=0:h++,this._s2=o[h],this._si=h}k=(h+(b-this._s1)/(this._s2-this._s1))*this._prec}else f=0>b?0:b>=1?c-1:c*b>>0,k=(b-f*(1/c))*c;for(g=1-k,h=this._props.length;--h>-1;)i=this._props[h],j=this._beziers[i][f],l=(k*k*j.da+3*g*(k*j.ca+g*j.ba))*k+j.a,this._round[i]&&(l=l+(l>0?.5:-.5)>>0),d[i]?e[i](l):e[i]=l;if(this._autoRotate){var q,r,s,t,u,v,w,p=this._autoRotate;for(h=p.length;--h>-1;)i=p[h][2],v=p[h][3]||0,w=p[h][4]===!0?1:a,j=this._beziers[p[h][0]][f],q=this._beziers[p[h][1]][f],r=j.a+(j.b-j.a)*k,t=j.b+(j.c-j.b)*k,r+=(t-r)*k,t+=(j.c+(j.d-j.c)*k-t)*k,s=q.a+(q.b-q.a)*k,u=q.b+(q.c-q.b)*k,s+=(u-s)*k,u+=(q.c+(q.d-q.c)*k-u)*k,l=Math.atan2(u-s,t-r)*w+v,d[i]?d[i].call(e,l):e[i]=l}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=window._gsDefine.globals.CSSPlugin;if(a){var c=a._internals,d=c._parseToProxy,e=c._setPluginRatio,f=c.CSSPropTween;c._registerComplexSpecialProp("bezier",null,function(a,c,g,h,i,j){c instanceof Array&&(c={values:c}),j=new p;var o,q,r,k=c.values,l=k.length-1,m=[],n={};if(0>l)return i;for(o=0;l>=o;o++)r=d(a,k[o],h,i,j,l!==o),m[o]=r.end;for(q in c)n[q]=c[q];return n.values=m,i=new f(a,"bezier",0,0,r.pt,2),i.data=r,i.plugin=j,i.setRatio=e,0===n.autoRotate&&(n.autoRotate=!0),!n.autoRotate||n.autoRotate instanceof Array||(o=n.autoRotate===!0?0:Number(n.autoRotate)*b,n.autoRotate=null!=r.end.left?[["left","top","rotation",o,!0]]:null!=r.end.x?[["x","y","rotation",o,!0]]:!1),n.autoRotate&&(h._transform||h._enableTransforms(!1),r.autoRotate=h._target._gsTransform),j._onInitTween(r.proxy,n,h._tween),i})}},q._roundProps=function(a,b){for(var c=this._overwriteProps,d=c.length;--d>-1;)(a[c[d]]||a.bezier||a.bezierThrough)&&(this._round[c[d]]=b)},q._kill=function(a){var c,d,b=this._props;for(c in this._beziers)if(c in a)for(delete this._beziers[c],delete this._func[c],d=b.length;--d>-1;)b[d]===c&&b.splice(d,1);return this._super._kill.call(this,a)}}(),window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a){var d,e,f,g,c=function(){a.call(this,"css"),this._overwriteProps.length=0},h={},i=c.prototype=new a("css");i.constructor=c,c.version="1.9.0",c.API=2,c.defaultTransformPerspective=0,i="px",c.suffixMap={top:i,right:i,bottom:i,left:i,width:i,height:i,fontSize:i,padding:i,margin:i,perspective:i};
var G,H,I,J,K,L,j=/(?:\d|\-\d|\.\d|\-\.\d)+/g,k=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,l=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,m=/[^\d\-\.]/g,n=/(?:\d|\-|\+|=|#|\.)*/g,o=/opacity *= *([^)]*)/,p=/opacity:([^;]*)/,q=/alpha\(opacity *=.+?\)/i,r=/([A-Z])/g,s=/-([a-z])/gi,t=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,u=function(a,b){return b.toUpperCase()},v=/(?:Left|Right|Width)/i,w=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,x=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,y=Math.PI/180,z=180/Math.PI,A={},B=document,C=B.createElement("div"),D=B.createElement("img"),E=c._internals={_specialProps:h},F=navigator.userAgent,M=function(){var c,a=F.indexOf("Android"),b=B.createElement("div");return I=-1!==F.indexOf("Safari")&&-1===F.indexOf("Chrome")&&(-1===a||Number(F.substr(a+8,1))>3),K=I&&6>Number(F.substr(F.indexOf("Version/")+8,1)),J=-1!==F.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F),L=parseFloat(RegExp.$1),b.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",c=b.getElementsByTagName("a")[0],c?/^0.55/.test(c.style.opacity):!1}(),N=function(a){return o.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},O=function(a){window.console&&console.log(a)},P="",Q="",R=function(a,b){b=b||C;var d,e,c=b.style;if(void 0!==c[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),d=["O","Moz","ms","Ms","Webkit"],e=5;--e>-1&&void 0===c[d[e]+a];);return e>=0?(Q=3===e?"ms":d[e],P="-"+Q.toLowerCase()+"-",Q+a):null},S=B.defaultView?B.defaultView.getComputedStyle:function(){},T=c.getStyle=function(a,b,c,d,e){var f;return M||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||S(a,null))?(a=c.getPropertyValue(b.replace(r,"-$1").toLowerCase()),f=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,f=c[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):N(a)},U=function(a,b,c){var f,g,d={},e=a._gsOverwrittenClassNamePT;if(e&&!c){for(;e;)e.setRatio(0),e=e._next;a._gsOverwrittenClassNamePT=null}if(b=b||S(a,null))if(f=b.length)for(;--f>-1;)d[b[f].replace(s,u)]=b.getPropertyValue(b[f]);else for(f in b)d[f]=b[f];else if(b=a.currentStyle||a.style)for(f in b)d[f.replace(s,u)]=b[f];return M||(d.opacity=N(a)),g=wb(a,b,!1),d.rotation=g.rotation*z,d.skewX=g.skewX*z,d.scaleX=g.scaleX,d.scaleY=g.scaleY,d.x=g.x,d.y=g.y,vb&&(d.z=g.z,d.rotationX=g.rotationX*z,d.rotationY=g.rotationY*z,d.scaleZ=g.scaleZ),d.filters&&delete d.filters,d},V=function(a,b,c,d){var g,h,i,e={},f=a.style;for(h in c)"cssText"!==h&&"length"!==h&&isNaN(h)&&b[h]!==(g=c[h])&&-1===h.indexOf("Origin")&&("number"==typeof g||"string"==typeof g)&&(e[h]=""!==g&&"auto"!==g&&"none"!==g||"string"!=typeof b[h]||""===b[h].replace(m,"")?g:0,void 0!==f[h]&&(i=new jb(f,h,f[h],i)));if(d)for(h in d)"className"!==h&&(e[h]=d[h]);return{difs:e,firstMPT:i}},W={width:["Left","Right"],height:["Top","Bottom"]},X=["marginLeft","marginRight","marginTop","marginBottom"],Y=function(a,b,c){var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=W[b],f=e.length;for(c=c||S(a,null);--f>-1;)d-=parseFloat(T(a,"padding"+e[f],c,!0))||0,d-=parseFloat(T(a,"border"+e[f]+"Width",c,!0))||0;return d},Z=function(a,b,c,d,e){if("px"===d||!d)return c;if("auto"===d||!c)return 0;var j,f=v.test(b),g=a,h=C.style,i=0>c;return i&&(c=-c),"%"===d&&-1!==b.indexOf("border")?j=c/100*(f?a.clientWidth:a.clientHeight):(h.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;","%"!==d&&g.appendChild?h[f?"borderLeftWidth":"borderTopWidth"]=c+d:(g=a.parentNode||B.body,h[f?"width":"height"]=c+d),g.appendChild(C),j=parseFloat(C[f?"offsetWidth":"offsetHeight"]),g.removeChild(C),0!==j||e||(j=Z(a,b,c,d,!0))),i?-j:j},$=function(a,b){(null==a||""===a||"auto"===a||"auto auto"===a)&&(a="0 0");var c=a.split(" "),d=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":c[0],e=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":c[1];return null==e?e="0":"center"===e&&(e="50%"),("center"===d||isNaN(parseFloat(d)))&&(d="50%"),b&&(b.oxp=-1!==d.indexOf("%"),b.oyp=-1!==e.indexOf("%"),b.oxr="="===d.charAt(1),b.oyr="="===e.charAt(1),b.ox=parseFloat(d.replace(m,"")),b.oy=parseFloat(e.replace(m,""))),d+" "+e+(c.length>2?" "+c[2]:"")},_=function(a,b){return"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)},ab=function(a,b){return null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*Number(a.substr(2))+b:parseFloat(a)},bb=function(a,b){var d,e,f,g,h,c=1e-6;return null==a?h=b:"number"==typeof a?h=a*y:(d=2*Math.PI,e=a.split("_"),f=Number(e[0].replace(m,""))*(-1===a.indexOf("rad")?y:1)-("="===a.charAt(1)?0:b),g=e[1],"short"===g?(f%=d,f!==f%(d/2)&&(f=0>f?f+d:f-d)):"cw"===g&&0>f?f=(f+9999999999*d)%d-(0|f/d)*d:"ccw"===g&&f>0&&(f=(f-9999999999*d)%d-(0|f/d)*d),h=b+f),c>h&&h>-c&&(h=0),h},cb={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},db=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,0|255*(1>6*a?b+6*(c-b)*a:.5>a?c:2>3*a?b+6*(c-b)*(2/3-a):b)+.5},eb=function(a){var b,c,d,e,f,g;return a&&""!==a?cb[a]?cb[a]:"number"==typeof a?[a>>16,255&a>>8,255&a]:"#"===a.charAt(0)?(4===a.length&&(b=a.charAt(1),c=a.charAt(2),d=a.charAt(3),a="#"+b+b+c+c+d+d),a=parseInt(a.substr(1),16),[a>>16,255&a>>8,255&a]):"hsl"===a.substr(0,3)?(a=a.match(j),e=Number(a[0])%360/360,f=Number(a[1])/100,g=Number(a[2])/100,c=.5>=g?g*(f+1):g+f-g*f,b=2*g-c,a.length>3&&(a[3]=Number(a[3])),a[0]=db(e+1/3,b,c),a[1]=db(e,b,c),a[2]=db(e-1/3,b,c),a):(a=a.match(j)||cb.transparent,a[0]=Number(a[0]),a[1]=Number(a[1]),a[2]=Number(a[2]),a.length>3&&(a[3]=Number(a[3])),a):cb.black},fb="(?:\\b(?:(?:rgb|rgba)\\(.+?\\))|\\B#.+?\\b";for(i in cb)fb+="|"+i+"\\b";fb=RegExp(fb+")","gi");var gb=function(a,b,c){if(null==a)return function(a){return a};var d=b?(a.match(fb)||[""])[0]:"",e=a.split(d).join("").match(l)||[],f=a.substr(0,a.indexOf(e[0])),g=")"===a.charAt(a.length-1)?")":"",h=-1!==a.indexOf(" ")?" ":",",i=e.length,k=i>0?e[0].replace(j,""):"";return i?b?function(a){"number"==typeof a&&(a+=k);var b=(a.match(fb)||[d])[0],j=a.split(b).join("").match(l)||[],m=j.length;if(i>m--)for(;i>++m;)j[m]=c?j[(m-1)/2>>0]:e[m];return f+j.join(h)+h+b+g}:function(a){"number"==typeof a&&(a+=k);var b=a.match(l)||[],d=b.length;if(i>d--)for(;i>++d;)b[d]=c?b[(d-1)/2>>0]:e[d];return f+b.join(h)+g}:function(a){return a}},hb=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var j,i=(c+"").split(" ");for(h={},j=0;4>j;j++)h[a[j]]=i[j]=i[j]||i[(j-1)/2>>0];return e.parse(b,h,f,g)}},jb=(E._setPluginRatio=function(a){this.plugin.setRatio(a);for(var f,g,h,i,b=this.data,c=b.proxy,d=b.firstMPT,e=1e-6;d;)f=c[d.v],d.r?f=f>0?f+.5>>0:f-.5>>0:e>f&&f>-e&&(f=0),d.t[d.p]=f,d=d._next;if(b.autoRotate&&(b.autoRotate.rotation=c.rotation),1===a)for(d=b.firstMPT;d;){if(g=d.t,g.type){if(1===g.type){for(i=g.xs0+g.s+g.xs1,h=1;g.l>h;h++)i+=g["xn"+h]+g["xs"+(h+1)];g.e=i}}else g.e=g.s+g.xs0;d=d._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),lb=(E._parseToProxy=function(a,b,c,d,e,f){var l,m,n,o,p,g=d,h={},i={},j=c._transform,k=A;for(c._transform=null,A=b,d=p=c.parse(a,b,d,e),A=k,f&&(c._transform=j,g&&(g._prev=null,g._prev&&(g._prev._next=null)));d&&d!==g;){if(1>=d.type&&(m=d.p,i[m]=d.s+d.c,h[m]=d.s,f||(o=new jb(d,"s",m,o,d.r),d.c=0),1===d.type))for(l=d.l;--l>0;)n="xn"+l,m=d.p+"_"+n,i[m]=d.data[n],h[m]=d[n],f||(o=new jb(d,n,m,o,d.rxp[n]));d=d._next}return{proxy:h,end:i,firstMPT:o,pt:p}},E.CSSPropTween=function(a,b,c,e,f,h,i,j,k,l,m){this.t=a,this.p=b,this.s=c,this.c=e,this.n=i||"css_"+b,a instanceof lb||g.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,d=!0),this.b=void 0===l?c:l,this.e=void 0===m?c+e:m,f&&(this._next=f,f._prev=this)}),mb=c.parseComplex=function(a,b,c,d,e,f,g,h,i,l){g=new lb(a,b,0,0,g,l?2:1,null,!1,h,c,d);var q,r,s,t,u,v,w,x,y,z,A,B,m=c.split(", ").join(",").split(" "),n=(d+"").split(", ").join(",").split(" "),o=m.length,p=G!==!1;for(o!==n.length&&(m=(f||"").split(" "),o=m.length),g.plugin=i,g.setRatio=l,q=0;o>q;q++)if(t=m[q],u=n[q],x=parseFloat(t),x||0===x)g.appendXtra("",x,_(u,x),u.replace(k,""),p&&-1!==u.indexOf("px"),!0);else if(e&&("#"===t.charAt(0)||0===t.indexOf("rgb")||cb[t]))t=eb(t),u=eb(u),y=t.length+u.length>6,y&&!M&&0===u[3]?(g["xs"+g.l]+=g.l?" transparent":"transparent",g.e=g.e.split(n[q]).join("transparent")):(M||(y=!1),g.appendXtra(y?"rgba(":"rgb(",t[0],u[0]-t[0],",",!0,!0).appendXtra("",t[1],u[1]-t[1],",",!0).appendXtra("",t[2],u[2]-t[2],y?",":")",!0),y&&(t=4>t.length?1:t[3],g.appendXtra("",t,(4>u.length?1:u[3])-t,")",!1)));else if(v=t.match(j)){if(w=u.match(k),!w||w.length!==v.length)return g;for(s=0,r=0;v.length>r;r++)A=v[r],z=t.indexOf(A,s),g.appendXtra(t.substr(s,z-s),Number(A),_(w[r],A),"",p&&"px"===t.substr(z+A.length,2),0===r),s=z+A.length;g["xs"+g.l]+=t.substr(s)}else g["xs"+g.l]+=g.l?" "+t:t;if(-1!==d.indexOf("=")&&g.data){for(B=g.xs0+g.data.s,q=1;g.l>q;q++)B+=g["xs"+q]+g.data["xn"+q];g.e=B+g["xs"+q]}return g.l||(g.type=-1,g.xs0=g.e),g.xfirst||g},nb=9;for(i=lb.prototype,i.l=i.pr=0;--nb>0;)i["xn"+nb]=0,i["xs"+nb]="";i.xs0="",i._next=i._prev=i.xfirst=i.data=i.plugin=i.setRatio=i.rxp=null,i.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&h?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new lb(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var ob=function(a,b,c,d,e,f,g){this.p=d?R(a)||a:a,h[a]=h[this.p]=this,this.format=f||gb(b,e),c&&(this.parse=c),this.clrs=e,this.dflt=b,this.pr=g||0},pb=E._registerComplexSpecialProp=function(a,b,c,d,e,f,g){for(var k,h=a.split(","),i=b instanceof Array?b:[b],j=h.length;--j>-1;)k=new ob(h[j],i[j],c,d&&0===j,e,f,g)},qb=function(a){if(!h[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";pb(a,null,function(a,c,d,e,f,g,i){var j=(window.GreenSockGlobals||window).com.greensock.plugins[b];return j?(j._cssRegister(),h[d].parse(a,c,d,e,f,g,i)):(O("Error: "+b+" js file not loaded."),f)})}};i=ob.prototype,i.parseComplex=function(a,b,c,d,e,f){return mb(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},i.parse=function(a,b,c,d,e,g){return this.parseComplex(a.style,this.format(T(a,this.p,f,!1,this.dflt)),this.format(b),e,g)},c.registerSpecialProp=function(a,b,c){pb(a,null,function(a,d,e,f,g,h){var j=new lb(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},!1,!1,null,c)};var rb=["scaleX","scaleY","scaleZ","x","y","z","skewX","rotation","rotationX","rotationY","perspective"],sb=R("transform"),tb=P+"transform",ub=R("transformOrigin"),vb=null!==R("perspective"),wb=function(a,b,d){var l,m,n,o,p,q,r,s,t,u,v,x,y,e=d?a._gsTransform||{skewY:0}:{skewY:0},f=0>e.scaleX,g=2e-5,h=1e5,i=-Math.PI+1e-4,j=Math.PI-1e-4,k=vb?parseFloat(T(a,ub,b,!1,"0 0 0").split(" ")[2])||e.zOrigin||0:0;for(sb?l=T(a,tb,b,!0):a.currentStyle&&(l=a.currentStyle.filter.match(w),l=l&&4===l.length?l[0].substr(4)+","+Number(l[2].substr(4))+","+Number(l[1].substr(4))+","+l[3].substr(4)+","+(e?e.x:0)+","+(e?e.y:0):null),m=(l||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],n=m.length;--n>-1;)o=Number(m[n]),m[n]=(p=o-(o|=0))?(0|p*h+(0>p?-.5:.5))/h+o:o;if(16===m.length){var z=m[8],A=m[9],B=m[10],C=m[12],D=m[13],E=m[14];if(e.zOrigin&&(E=-e.zOrigin,C=z*E-m[12],D=A*E-m[13],E=B*E+e.zOrigin-m[14]),!d||C!==e.x||D!==e.y||E!==e.z){var Q,R,S,U,V,W,X,Y,F=m[0],G=m[1],H=m[2],I=m[3],J=m[4],K=m[5],L=m[6],M=m[7],N=m[11],O=e.rotationX=Math.atan2(L,B),P=i>O||O>j;O&&(V=Math.cos(-O),W=Math.sin(-O),Q=J*V+z*W,R=K*V+A*W,S=L*V+B*W,U=M*V+N*W,z=J*-W+z*V,A=K*-W+A*V,B=L*-W+B*V,N=M*-W+N*V,J=Q,K=R,L=S),O=e.rotationY=Math.atan2(z,F),O&&(X=i>O||O>j,V=Math.cos(-O),W=Math.sin(-O),Q=F*V-z*W,R=G*V-A*W,S=H*V-B*W,U=I*V-N*W,A=G*W+A*V,B=H*W+B*V,N=I*W+N*V,F=Q,G=R,H=S),O=e.rotation=Math.atan2(G,K),O&&(Y=i>O||O>j,V=Math.cos(-O),W=Math.sin(-O),F=F*V+J*W,R=G*V+K*W,K=G*-W+K*V,L=H*-W+L*V,G=R),Y&&P?e.rotation=e.rotationX=0:Y&&X?e.rotation=e.rotationY=0:X&&P&&(e.rotationY=e.rotationX=0),e.scaleX=(Math.sqrt(F*F+G*G)*h+.5>>0)/h,e.scaleY=(Math.sqrt(K*K+A*A)*h+.5>>0)/h,e.scaleZ=(Math.sqrt(L*L+B*B)*h+.5>>0)/h,e.skewX=0,e.perspective=N?1/(0>N?-N:N):0,e.x=C,e.y=D,e.z=E}}else if(!vb||0===m.length||e.x!==m[4]||e.y!==m[5]||!e.rotationX&&!e.rotationY){var Z=m.length>=6,$=Z?m[0]:1,_=m[1]||0,ab=m[2]||0,bb=Z?m[3]:1;e.x=m[4]||0,e.y=m[5]||0,q=Math.sqrt($*$+_*_),r=Math.sqrt(bb*bb+ab*ab),s=$||_?Math.atan2(_,$):e.rotation||0,t=ab||bb?Math.atan2(ab,bb)+s:e.skewX||0,u=q-Math.abs(e.scaleX||0),v=r-Math.abs(e.scaleY||0),Math.abs(t)>Math.PI/2&&Math.abs(t)<1.5*Math.PI&&(f?(q*=-1,t+=0>=s?Math.PI:-Math.PI,s+=0>=s?Math.PI:-Math.PI):(r*=-1,t+=0>=t?Math.PI:-Math.PI)),x=(s-e.rotation)%Math.PI,y=(t-e.skewX)%Math.PI,(void 0===e.skewX||u>g||-g>u||v>g||-g>v||x>i&&j>x&&0!==x*h>>0||y>i&&j>y&&0!==y*h>>0)&&(e.scaleX=q,e.scaleY=r,e.rotation=s,e.skewX=t),vb&&(e.rotationX=e.rotationY=e.z=0,e.perspective=parseFloat(c.defaultTransformPerspective)||0,e.scaleZ=1)}e.zOrigin=k;for(n in e)g>e[n]&&e[n]>-g&&(e[n]=0);return d&&(a._gsTransform=e),e},xb=function(a){var l,m,b=this.data,c=-b.rotation,d=c+b.skewX,e=1e5,f=(Math.cos(c)*b.scaleX*e>>0)/e,g=(Math.sin(c)*b.scaleX*e>>0)/e,h=(Math.sin(d)*-b.scaleY*e>>0)/e,i=(Math.cos(d)*b.scaleY*e>>0)/e,j=this.t.style,k=this.t.currentStyle;if(k){m=g,g=-h,h=-m,l=k.filter,j.filter="";var v,w,p=this.t.offsetWidth,q=this.t.offsetHeight,r="absolute"!==k.position,s="progid:DXImageTransform.Microsoft.Matrix(M11="+f+", M12="+g+", M21="+h+", M22="+i,t=b.x,u=b.y;if(null!=b.ox&&(v=(b.oxp?.01*p*b.ox:b.ox)-p/2,w=(b.oyp?.01*q*b.oy:b.oy)-q/2,t+=v-(v*f+w*g),u+=w-(v*h+w*i)),r)v=p/2,w=q/2,s+=", Dx="+(v-(v*f+w*g)+t)+", Dy="+(w-(v*h+w*i)+u)+")";else{var z,A,B,y=8>L?1:-1;for(v=b.ieOffsetX||0,w=b.ieOffsetY||0,b.ieOffsetX=Math.round((p-((0>f?-f:f)*p+(0>g?-g:g)*q))/2+t),b.ieOffsetY=Math.round((q-((0>i?-i:i)*q+(0>h?-h:h)*p))/2+u),nb=0;4>nb;nb++)A=X[nb],z=k[A],m=-1!==z.indexOf("px")?parseFloat(z):Z(this.t,A,parseFloat(z),z.replace(n,""))||0,B=m!==b[A]?2>nb?-b.ieOffsetX:-b.ieOffsetY:2>nb?v-b.ieOffsetX:w-b.ieOffsetY,j[A]=(b[A]=Math.round(m-B*(0===nb||2===nb?1:y)))+"px";s+=", sizingMethod='auto expand')"}j.filter=-1!==l.indexOf("DXImageTransform.Microsoft.Matrix(")?l.replace(x,s):s+" "+l,(0===a||1===a)&&1===f&&0===g&&0===h&&1===i&&(r&&-1===s.indexOf("Dx=0, Dy=0")||o.test(l)&&100!==parseFloat(RegExp.$1)||-1===l.indexOf("gradient(")&&j.removeAttribute("filter"))}},yb=function(){var x,y,z,A,B,C,D,E,F,b=this.data,c=this.t.style,d=b.perspective,e=b.scaleX,f=0,g=0,h=0,i=0,j=b.scaleY,k=0,l=0,m=0,n=0,o=b.scaleZ,p=0,q=0,r=0,s=d?-1/d:0,t=b.rotation,u=b.zOrigin,v=",",w=1e5;J&&(D=T(this.t,"top",null,!1,"0"),E=parseFloat(D)||0,F=D.substr((E+"").length),b._ffFix=!b._ffFix,c.top=(b._ffFix?E+.05:E-.05)+(""===F?"px":F)),(t||b.skewX)&&(z=e*Math.cos(t),A=j*Math.sin(t),t-=b.skewX,f=e*-Math.sin(t),j*=Math.cos(t),e=z,i=A),t=b.rotationY,t&&(x=Math.cos(t),y=Math.sin(t),z=e*x,A=i*x,B=o*-y,C=s*-y,g=e*y,k=i*y,o*=x,s*=x,e=z,i=A,m=B,q=C),t=b.rotationX,t&&(x=Math.cos(t),y=Math.sin(t),z=f*x+g*y,A=j*x+k*y,B=n*x+o*y,C=r*x+s*y,g=f*-y+g*x,k=j*-y+k*x,o=n*-y+o*x,s=r*-y+s*x,f=z,j=A,n=B,r=C),u&&(p-=u,h=g*p,l=k*p,p=o*p+u),h=(z=(h+=b.x)-(h|=0))?(0|z*w+(0>z?-.5:.5))/w+h:h,l=(z=(l+=b.y)-(l|=0))?(0|z*w+(0>z?-.5:.5))/w+l:l,p=(z=(p+=b.z)-(p|=0))?(0|z*w+(0>z?-.5:.5))/w+p:p,c[sb]="matrix3d("+(e*w>>0)/w+v+(i*w>>0)/w+v+(m*w>>0)/w+v+(q*w>>0)/w+v+(f*w>>0)/w+v+(j*w>>0)/w+v+(n*w>>0)/w+v+(r*w>>0)/w+v+(g*w>>0)/w+v+(k*w>>0)/w+v+(o*w>>0)/w+v+(s*w>>0)/w+v+h+v+l+v+p+v+(d?1+-p/d:1)+")"},zb=function(){var d,e,f,g,h,i,j,k,b=this.data,c=this.t;J&&(d=T(c,"top",null,!1,"0"),e=parseFloat(d)||0,f=d.substr((e+"").length),b._ffFix=!b._ffFix,c.style.top=(b._ffFix?e+.05:e-.05)+(""===f?"px":f)),b.rotation||b.skewX?(g=b.rotation,h=g-b.skewX,i=1e5,j=b.scaleX*i,k=b.scaleY*i,c.style[sb]="matrix("+(Math.cos(g)*j>>0)/i+","+(Math.sin(g)*j>>0)/i+","+(Math.sin(h)*-k>>0)/i+","+(Math.cos(h)*k>>0)/i+","+b.x+","+b.y+")"):c.style[sb]="matrix("+b.scaleX+",0,0,"+b.scaleY+","+b.x+","+b.y+")"};pb("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation",null,function(a,b,c,d,e,g,h){if(d._transform)return e;var n,o,p,q,r,s,t,i=d._transform=wb(a,f,!0),j=a.style,k=1e-6,l=rb.length,m=h;if("string"==typeof m.transform&&sb)p=j.cssText,j[sb]=m.transform,j.display="block",n=wb(a,null,!1),j.cssText=p;else if("object"==typeof m){if(n={scaleX:ab(null!=m.scaleX?m.scaleX:m.scale,i.scaleX),scaleY:ab(null!=m.scaleY?m.scaleY:m.scale,i.scaleY),scaleZ:ab(null!=m.scaleZ?m.scaleZ:m.scale,i.scaleZ),x:ab(m.x,i.x),y:ab(m.y,i.y),z:ab(m.z,i.z),perspective:ab(m.transformPerspective,i.perspective)},t=m.directionalRotation,null!=t)if("object"==typeof t)for(p in t)m[p]=t[p];else m.rotation=t;n.rotation=bb("rotation"in m?m.rotation:"shortRotation"in m?m.shortRotation+"_short":"rotationZ"in m?m.rotationZ:i.rotation*z,i.rotation),vb&&(n.rotationX=bb("rotationX"in m?m.rotationX:"shortRotationX"in m?m.shortRotationX+"_short":i.rotationX*z||0,i.rotationX),n.rotationY=bb("rotationY"in m?m.rotationY:"shortRotationY"in m?m.shortRotationY+"_short":i.rotationY*z||0,i.rotationY)),n.skewX=null==m.skewX?i.skewX:bb(m.skewX,i.skewX),n.skewY=null==m.skewY?i.skewY:bb(m.skewY,i.skewY),(o=n.skewY-i.skewY)&&(n.skewX+=o,n.rotation+=o)}for(r=i.z||i.rotationX||i.rotationY||n.z||n.rotationX||n.rotationY||n.perspective,r||null==m.scale||(n.scaleZ=1);--l>-1;)c=rb[l],q=n[c]-i[c],(q>k||-k>q||null!=A[c])&&(s=!0,e=new lb(i,c,i[c],q,e),e.xs0=0,e.plugin=g,d._overwriteProps.push(e.n));return q=m.transformOrigin,(q||vb&&r&&i.zOrigin)&&(sb?(s=!0,q=(q||T(a,c,f,!1,"50% 50%"))+"",c=ub,e=new lb(j,c,0,0,e,-1,"css_transformOrigin"),e.b=j[c],e.plugin=g,vb?(p=i.zOrigin,q=q.split(" "),i.zOrigin=(q.length>2?parseFloat(q[2]):p)||0,e.xs0=e.e=j[c]=q[0]+" "+(q[1]||"50%")+" 0px",e=new lb(i,"zOrigin",0,0,e,-1,e.n),e.b=p,e.xs0=e.e=i.zOrigin):e.xs0=e.e=j[c]=q):$(q+"",i)),s&&(d._transformType=r||3===this._transformType?3:2),e},!0),pb("boxShadow","0px 0px 0px 0px #999",function(a,b,c,d,e,g){var h=-1!==(b+"").indexOf("inset")?" inset":"";return this.parseComplex(a.style,this.format(T(a,this.p,f,!1,this.dflt))+h,this.format(b)+h,e,g)},!0,!0),pb("borderRadius","0px",function(a,b,c,d,g){b=this.format(b);var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,i=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],j=a.style;for(s=parseFloat(a.offsetWidth),t=parseFloat(a.offsetHeight),k=b.split(" "),l=0;i.length>l;l++)this.p.indexOf("border")&&(i[l]=R(i[l])),o=n=T(a,i[l],f,!1,"0px"),-1!==o.indexOf(" ")&&(n=o.split(" "),o=n[0],n=n[1]),p=m=k[l],q=parseFloat(o),v=o.substr((q+"").length),w="="===p.charAt(1),w?(r=parseInt(p.charAt(0)+"1",10),p=p.substr(2),r*=parseFloat(p),u=p.substr((r+"").length-(0>r?1:0))||""):(r=parseFloat(p),u=p.substr((r+"").length)),""===u&&(u=e[c]||v),u!==v&&(x=Z(a,"borderLeft",q,v),y=Z(a,"borderTop",q,v),"%"===u?(o=100*(x/s)+"%",n=100*(y/t)+"%"):"em"===u?(z=Z(a,"borderLeft",1,"em"),o=x/z+"em",n=y/z+"em"):(o=x+"px",n=y+"px"),w&&(p=parseFloat(o)+r+u,m=parseFloat(n)+r+u)),g=mb(j,i[l],o+" "+n,p+" "+m,!1,"0px",g);return g},!0,!1,gb("0px 0px 0px 0px",!1,!0)),pb("backgroundPosition","0 0",function(a,b,c,d,e,g){var l,m,n,o,p,q,h="background-position",i=f||S(a,null),j=this.format((i?L?i.getPropertyValue(h+"-x")+" "+i.getPropertyValue(h+"-y"):i.getPropertyValue(h):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),k=this.format(b);if(-1!==j.indexOf("%")!=(-1!==k.indexOf("%"))&&(q=T(a,"backgroundImage").replace(t,""),q&&"none"!==q)){for(l=j.split(" "),m=k.split(" "),D.setAttribute("src",q),n=2;--n>-1;)j=l[n],o=-1!==j.indexOf("%"),o!==(-1!==m[n].indexOf("%"))&&(p=0===n?a.offsetWidth-D.width:a.offsetHeight-D.height,l[n]=o?parseFloat(j)/100*p+"px":100*(parseFloat(j)/p)+"%");j=l.join(" ")}return this.parseComplex(a.style,j,k,e,g)},!1,!1,$),pb("backgroundSize","0 0",null,!1,!1,$),pb("perspective","0px",null,!0),pb("perspectiveOrigin","50% 50%",null,!0),pb("transformStyle",null,null,!0),pb("backfaceVisibility",null,null,!0),pb("margin",null,hb("marginTop,marginRight,marginBottom,marginLeft")),pb("padding",null,hb("paddingTop,paddingRight,paddingBottom,paddingLeft")),pb("clip","rect(0px,0px,0px,0px)"),pb("textShadow","0px 0px 0px #999",null,!1,!0),pb("autoRound,strictUnits",null,function(a,b,c,d,e){return e}),pb("border","0px solid #000",function(a,b,c,d,e,g){return this.parseComplex(a.style,this.format(T(a,"borderTopWidth",f,!1,"0px")+" "+T(a,"borderTopStyle",f,!1,"solid")+" "+T(a,"borderTopColor",f,!1,"#000")),this.format(b),e,g)},!1,!0,function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(fb)||["#000"])[0]}),pb("float,cssFloat,styleFloat",null,function(a,b,c,d,e){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new lb(g,h,0,0,e,-1,c,!1,0,g[h],b)});var Ab=function(a){var e,b=this.t,c=b.filter,d=this.s+this.c*a>>0;100===d&&(-1===c.indexOf("atrix(")&&-1===c.indexOf("radient(")?(b.removeAttribute("filter"),e=!T(this.data,"filter")):(b.filter=c.replace(q,""),e=!0)),e||(this.xn1&&(b.filter=c=c||"alpha(opacity=100)"),-1===c.indexOf("opacity")?b.filter+=" alpha(opacity="+d+")":b.filter=c.replace(o,"opacity="+d))};pb("opacity,alpha,autoAlpha","1",function(a,b,c,d,e,g){var j,h=parseFloat(T(a,"opacity",f,!1,"1")),i=a.style;return b=parseFloat(b),"autoAlpha"===c&&(j=T(a,"visibility",f),1===h&&"hidden"===j&&0!==b&&(h=0),e=new lb(i,"visibility",0,0,e,-1,null,!1,0,0!==h?"visible":"hidden",0===b?"hidden":"visible"),e.xs0="visible",d._overwriteProps.push(e.n)),M?e=new lb(i,"opacity",h,b-h,e):(e=new lb(i,"opacity",100*h,100*(b-h),e),e.xn1="autoAlpha"===c?1:0,i.zoom=1,e.type=2,e.b="alpha(opacity="+e.s+")",e.e="alpha(opacity="+(e.s+e.c)+")",e.data=a,e.plugin=g,e.setRatio=Ab),e});var Bb=function(a){if(1===a||0===a){this.t.className=1===a?this.e:this.b;for(var b=this.data,c=this.t.style,d=c.removeProperty?"removeProperty":"removeAttribute";b;)b.v?c[b.p]=b.v:c[d](b.p.replace(r,"-$1").toLowerCase()),b=b._next}else this.t.className!==this.b&&(this.t.className=this.b)};pb("className",null,function(a,b,c,e,g,h,i){var l,m,j=a.className,k=a.style.cssText;return g=e._classNamePT=new lb(a,c,0,0,g,2),g.setRatio=Bb,g.pr=-11,d=!0,g.b=j,g.e="="!==b.charAt(1)?b:"+"===b.charAt(0)?j+" "+b.substr(2):j.split(b.substr(2)).join(""),e._tween._duration&&(m=U(a,f,!0),a.className=g.e,l=V(a,m,U(a),i),a.className=j,g.data=l.firstMPT,a.style.cssText=k,g=g.xfirst=e.parse(a,l.difs,g,h)),g});var Cb=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration)for(var i,b="all"===this.e,c=this.t.style,d=b?c.cssText.split(";"):this.e.split(","),e=c.removeProperty?"removeProperty":"removeAttribute",f=d.length,g=h.transform.parse;--f>-1;)i=d[f],b&&(i=i.substr(0,i.indexOf(":")).split(" ").join("")),h[i]&&(i=h[i].parse===g?sb:h[i].p),i&&c[e](i.replace(r,"-$1").toLowerCase())};for(pb("clearProps",null,function(a,b,c,e,f){return f=new lb(a,c,0,0,f,2),f.setRatio=Cb,f.e=b,f.pr=-10,f.data=e._tween,d=!0,f}),i="bezier,throwProps,physicsProps,physics2D".split(","),nb=i.length;nb--;)qb(i[nb]);return i=c.prototype,i._firstPT=null,i._onInitTween=function(a,b,h){if(!a.nodeType)return!1;this._target=a,this._tween=h,this._vars=b,G=b.autoRound,d=!1,e=b.suffixMap||c.suffixMap,f=S(a,""),g=this._overwriteProps;var j,k,l,m,n,o,q,r,s,i=a.style;if(H&&""===i.zIndex&&(j=T(a,"zIndex",f),("auto"===j||""===j)&&(i.zIndex=0)),"string"==typeof b&&(m=i.cssText,j=U(a,f),i.cssText=m+";"+b,j=V(a,j,U(a)).difs,!M&&p.test(b)&&(j.opacity=parseFloat(RegExp.$1)),b=j,i.cssText=m),this._firstPT=k=this.parse(a,b,null),this._transformType){for(s=3===this._transformType,sb?I&&(H=!0,""===i.zIndex&&(q=T(a,"zIndex",f),("auto"===q||""===q)&&(i.zIndex=0)),K&&(i.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(s?"visible":"hidden"))):i.zoom=1,l=k;l&&l._next;)l=l._next;r=new lb(a,"transform",0,0,null,2),this._linkCSSP(r,null,l),r.setRatio=s&&vb?yb:sb?zb:xb,r.data=this._transform||wb(a,f,!0),g.pop()}if(d){for(;k;){for(o=k._next,l=m;l&&l.pr>k.pr;)l=l._next;(k._prev=l?l._prev:n)?k._prev._next=k:m=k,(k._next=l)?l._prev=k:n=k,k=o}this._firstPT=m}return!0},i.parse=function(a,b,c,d){var i,j,k,l,m,o,p,q,r,s,g=a.style;for(i in b)o=b[i],j=h[i],j?c=j.parse(a,o,i,this,c,d,b):(m=T(a,i,f)+"",r="string"==typeof o,"color"===i||"fill"===i||"stroke"===i||-1!==i.indexOf("Color")||r&&!o.indexOf("rgb")?(r||(o=eb(o),o=(o.length>3?"rgba(":"rgb(")+o.join(",")+")"),c=mb(g,i,m,o,!0,"transparent",c,0,d)):!r||-1===o.indexOf(" ")&&-1===o.indexOf(",")?(k=parseFloat(m),p=k||0===k?m.substr((k+"").length):"",(""===m||"auto"===m)&&("width"===i||"height"===i?(k=Y(a,i,f),p="px"):(k="opacity"!==i?0:1,p="")),s=r&&"="===o.charAt(1),s?(l=parseInt(o.charAt(0)+"1",10),o=o.substr(2),l*=parseFloat(o),q=o.replace(n,"")):(l=parseFloat(o),q=r?o.substr((l+"").length)||"":""),""===q&&(q=e[i]||p),o=l||0===l?(s?l+k:l)+q:b[i],p!==q&&""!==q&&(l||0===l)&&(k||0===k)&&(k=Z(a,i,k,p),"%"===q?(k/=Z(a,i,100,"%")/100,k>100&&(k=100),b.strictUnits!==!0&&(m=k+"%")):"em"===q?k/=Z(a,i,1,"em"):(l=Z(a,i,l,q),q="px"),s&&(l||0===l)&&(o=l+k+q)),s&&(l+=k),!k&&0!==k||!l&&0!==l?o||"NaN"!=o+""&&null!=o?(c=new lb(g,i,l||k||0,0,c,-1,"css_"+i,!1,0,m,o),c.xs0="display"===i&&"none"===o?m:o):O("invalid "+i+" tween value. "):(c=new lb(g,i,k,l-k,c,0,"css_"+i,G!==!1&&("px"===q||"zIndex"===i),0,m,o),c.xs0=q)):c=mb(g,i,m,o,!0,null,c,0,d)),d&&c&&!c.plugin&&(c.plugin=d);return c},i.setRatio=function(a){var d,e,f,b=this._firstPT,c=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;b;){if(d=b.c*a+b.s,b.r?d=d>0?d+.5>>0:d-.5>>0:c>d&&d>-c&&(d=0),b.type)if(1===b.type)if(f=b.l,2===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2;else if(3===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3;else if(4===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3+b.xn3+b.xs4;else if(5===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3+b.xn3+b.xs4+b.xn4+b.xs5;else{for(e=b.xs0+d+b.xs1,f=1;b.l>f;f++)e+=b["xn"+f]+b["xs"+(f+1)];b.t[b.p]=e}else-1===b.type?b.t[b.p]=b.xs0:b.setRatio&&b.setRatio(a);else b.t[b.p]=d+b.xs0;b=b._next}else for(;b;)2!==b.type?b.t[b.p]=b.b:b.setRatio(a),b=b._next;else for(;b;)2!==b.type?b.t[b.p]=b.e:b.setRatio(a),b=b._next},i._enableTransforms=function(a){this._transformType=a||3===this._transformType?3:2},i._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next),a._next=b,a._prev=c),a},i._kill=function(b){var e,f,g,c=b,d=!1;if(b.css_autoAlpha||b.css_alpha){c={};for(f in b)c[f]=b[f];c.css_opacity=1,c.css_autoAlpha&&(c.css_visibility=1)}return b.css_className&&(e=this._classNamePT)&&(g=e.xfirst,g&&g._prev?this._linkCSSP(g._prev,e._next,g._prev._prev):g===this._firstPT&&(this._firstPT=null),e._next&&this._linkCSSP(e._next,e._next._next,g._prev),this._target._gsOverwrittenClassNamePT=this._linkCSSP(e,this._target._gsOverwrittenClassNamePT),this._classNamePT=null,d=!0),a.prototype._kill.call(this,c)||d},a.activate([c]),c},!0),function(){var a=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=a.prototype;b._onInitAllProps=function(){for(var f,g,h,a=this._tween,b=a.vars.roundProps instanceof Array?a.vars.roundProps:a.vars.roundProps.split(","),c=b.length,d={},e=a._propLookup.roundProps;--c>-1;)d[b[c]]=1;for(c=b.length;--c>-1;)for(f=b[c],g=a._firstPT;g;)h=g._next,g.pg?g.t._roundProps(d,!0):g.n===f&&(this._add(g.t,f,g.s,g.c),h&&(h._prev=g._prev),g._prev?g._prev._next=h:a._firstPT===g&&(a._firstPT=h),g._next=g._prev=null,a._propLookup[f]=e),g=h;return!1},b._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,!0),this._overwriteProps.push(b)}}(),window._gsDefine.plugin({propName:"attr",API:2,init:function(a,b){var d;if("function"!=typeof a.setAttribute)return!1;this._target=a,this._proxy={};for(d in b)this._addTween(this._proxy,d,parseFloat(a.getAttribute(d)),b[d],d),this._overwriteProps.push(d);return!0},set:function(a){this._super.setRatio.call(this,a);for(var d,b=this._overwriteProps,c=b.length;--c>-1;)d=b[c],this._target.setAttribute(d,this._proxy[d]+"")}}),window._gsDefine.plugin({propName:"directionalRotation",API:2,init:function(a,b,c){"object"!=typeof b&&(b={rotation:b}),this.finals={},this._tween=c;var e,f,g,h,i,j,k,d=b.useRadians===!0?2*Math.PI:360;for(e in b)"useRadians"!==e&&(j=(b[e]+"").split("_"),f=j[0],k=j[1],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,"short"===k?(i%=d,i!==i%(d/2)&&(i=0>i?i+d:i-d)):"cw"===k&&0>i?i=(i+9999999999*d)%d-(0|i/d)*d:"ccw"===k&&i>0&&(i=(i-9999999999*d)%d-(0|i/d)*d),this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,window._gsDefine("easing.Back",["easing.Ease"],function(a){var n,o,b=window.GreenSockGlobals||window,c=b.com.greensock,d=2*Math.PI,e=Math.PI/2,f=c._class,g=function(b,c){var d=f("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},h=a.register||function(){},i=function(a,b,c,d){var g=f("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return h(g,a),g},j=function(b,c){var d=f("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},k=i("Back",j("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),j("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),j("BackInOut",function(a){return 1>(a*=2)?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),l=f("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),m=l.prototype=new a;return m.constructor=l,m.getRatio=function(a){var b=a+(.5-a)*this._p;return this._p1>a?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},l.ease=new l(.7,.7),m.config=l.config=function(a,b,c){return new l(a,b,c)},n=f("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),m=n.prototype=new a,m.constructor=n,m.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},m.config=n.config=function(a){return new n(a)},i("Bounce",g("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),g("BounceIn",function(a){return 1/2.75>(a=1-a)?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),g("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),i("Circ",g("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),g("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),g("CircInOut",function(a){return 1>(a*=2)?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),o=function(b,c,e){var g=f("easing."+b,function(a,b){this._p1=a||1,this._p2=b||e,this._p3=this._p2/d*(Math.asin(1/this._p1)||0)
},!0),h=g.prototype=new a;return h.constructor=g,h.getRatio=c,h.config=function(a,b){return new g(a,b)},g},i("Elastic",o("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*d/this._p2)+1},.3),o("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2))},.3),o("ElasticInOut",function(a){return 1>(a*=2)?-.5*this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2):.5*this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*d/this._p2)+1},.45)),i("Expo",g("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),g("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),g("ExpoInOut",function(a){return 1>(a*=2)?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),i("Sine",g("SineOut",function(a){return Math.sin(a*e)}),g("SineIn",function(a){return-Math.cos(a*e)+1}),g("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),f("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),h(b.SlowMo,"SlowMo","ease,"),h(n,"SteppedEase","ease,"),k},!0)}),function(a){"use strict";var e,f,g,h,b=a.GreenSockGlobals||a,c=function(a){var e,c=a.split("."),d=b;for(e=0;c.length>e;e++)d[c[e]]=d=d[c[e]]||{};return d},d=c("com.greensock"),i={},j=function(d,e,f,g){this.sc=i[d]?i[d].sc:[],i[d]=this,this.gsClass=null,this.func=f;var h=[];this.check=function(k){for(var n,o,p,q,l=e.length,m=l;--l>-1;)(n=i[e[l]]||new j(e[l],[])).gsClass?(h[l]=n.gsClass,m--):k&&n.sc.push(this);if(0===m&&f)for(o=("com.greensock."+d).split("."),p=o.pop(),q=c(o.join("."))[p]=this.gsClass=f.apply(f,h),g&&(b[p]=q,"function"==typeof define&&define.amd?define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").join("/"),[],function(){return q}):"undefined"!=typeof module&&module.exports&&(module.exports=q)),l=0;this.sc.length>l;l++)this.sc[l].check()},this.check(!0)},k=a._gsDefine=function(a,b,c,d){return new j(a,b,c,d)},l=d._class=function(a,b,c){return b=b||function(){},k(a,[],function(){return b},c),b};k.globals=b;var m=[0,0,1,1],n=[],o=l("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?m.concat(b):m},!0),p=o.map={},q=o.register=function(a,b,c,e){for(var i,j,k,m,f=b.split(","),g=f.length,h=(c||"easeIn,easeOut,easeInOut").split(",");--g>-1;)for(j=f[g],i=e?l("easing."+j,null,!0):d.easing[j]||{},k=h.length;--k>-1;)m=h[k],p[j+"."+m]=p[m+j]=i[m]=a.getRatio?a:a[m]||new a};for(g=o.prototype,g._calcEnd=!1,g.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},e=["Linear","Quad","Cubic","Quart","Quint,Strong"],f=e.length;--f>-1;)g=e[f]+",Power"+f,q(new o(null,null,1,f),g,"easeOut",!0),q(new o(null,null,2,f),g,"easeIn"+(0===f?",easeNone":"")),q(new o(null,null,3,f),g,"easeInOut");p.linear=d.easing.Linear.easeIn,p.swing=d.easing.Quad.easeInOut;var r=l("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});g=r.prototype,g.addEventListener=function(a,b,c,d,e){e=e||0;var h,i,f=this._listeners[a],g=0;for(null==f&&(this._listeners[a]=f=[]),i=f.length;--i>-1;)h=f[i],h.c===b?f.splice(i,1):0===g&&e>h.pr&&(g=i+1);f.splice(g,0,{c:b,s:c,up:d,pr:e})},g.removeEventListener=function(a,b){var d,c=this._listeners[a];if(c)for(d=c.length;--d>-1;)if(c[d].c===b)return c.splice(d,1),void 0},g.dispatchEvent=function(a){var b=this._listeners[a];if(b)for(var e,c=b.length,d=this._eventTarget;--c>-1;)e=b[c],e.up?e.c.call(e.s||d,{type:a,target:d}):e.c.call(e.s||d)};var s=a.requestAnimationFrame,t=a.cancelAnimationFrame,u=Date.now||function(){return(new Date).getTime()};for(e=["ms","moz","webkit","o"],f=e.length;--f>-1&&!s;)s=a[e[f]+"RequestAnimationFrame"],t=a[e[f]+"CancelAnimationFrame"]||a[e[f]+"CancelRequestAnimationFrame"];l("Ticker",function(b,c){var g,h,i,j,k,d=this,e=u(),f=c!==!1&&s,l=function(){null!=i&&(f&&t?t(i):a.clearTimeout(i),i=null)},m=function(a){d.time=(u()-e)/1e3,(!g||d.time>=k||a===!0)&&(d.frame++,k=d.time>k?d.time+j-(d.time-k):d.time+j-.001,d.time+.001>k&&(k=d.time+.001),d.dispatchEvent("tick")),a!==!0&&(i=h(m))};r.call(d),this.time=this.frame=0,this.tick=function(){m(!0)},this.fps=function(a){return arguments.length?(g=a,j=1/(g||60),k=this.time+j,h=0===g?function(){}:f&&s?s:function(a){return setTimeout(a,1e3*(k-d.time)+1>>0||1)},l(),i=h(m),void 0):g},this.useRAF=function(a){return arguments.length?(l(),f=a,d.fps(g),void 0):f},d.fps(b),setTimeout(function(){f&&!i&&d.useRAF(!1)},1e3)}),g=d.Ticker.prototype=new d.events.EventDispatcher,g.constructor=d.Ticker;var v=l("core.Animation",function(a,b){if(this.vars=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(this.vars.delay)||0,this._timeScale=1,this._active=this.vars.immediateRender===!0,this.data=this.vars.data,this._reversed=this.vars.reversed===!0,I){h||(w.tick(),h=!0);var c=this.vars.useFrames?H:I;c.add(this,c._time),this.vars.paused&&this.paused(!0)}}),w=v.ticker=new d.Ticker;g=v.prototype,g._dirty=g._gc=g._initted=g._paused=!1,g._totalTime=g._time=0,g._rawPrevTime=-1,g._next=g._last=g._onUpdate=g._timeline=g.timeline=null,g._paused=!1,g.play=function(a,b){return arguments.length&&this.seek(a,b),this.reversed(!1),this.paused(!1)},g.pause=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!0)},g.resume=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!1)},g.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},g.restart=function(a,b){return this.reversed(!1),this.paused(!1),this.totalTime(a?-this._delay:0,b!==!1)},g.reverse=function(a,b){return arguments.length&&this.seek(a||this.totalDuration(),b),this.reversed(!0),this.paused(!1)},g.render=function(){},g.invalidate=function(){return this},g._enabled=function(a,b){return this._gc=!a,this._active=a&&!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration,b!==!0&&(a&&null==this.timeline?this._timeline.add(this,this._startTime-this._delay):a||null==this.timeline||this._timeline._remove(this,!0)),!1},g._kill=function(){return this._enabled(!1,!1)},g.kill=function(a,b){return this._kill(a,b),this},g._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},g.eventCallback=function(a,b,c,d){if(null==a)return null;if("on"===a.substr(0,2)){if(1===arguments.length)return this.vars[a];if(null==b)delete this.vars[a];else if(this.vars[a]=b,this.vars[a+"Params"]=c,this.vars[a+"Scope"]=d,c)for(var e=c.length;--e>-1;)"{self}"===c[e]&&(c=this.vars[a+"Params"]=c.concat(),c[e]=this);"onUpdate"===a&&(this._onUpdate=b)}return this},g.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},g.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},g.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},g.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this.totalTime(a,b)):this._time},g.totalTime=function(a,b){if(!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&(a+=this.totalDuration()),this._timeline.smoothChildTiming&&(this._dirty&&this.totalDuration(),a>this._totalDuration&&(a=this._totalDuration),this._startTime=(this._paused?this._pauseTime:this._timeline._time)-(this._reversed?this._totalDuration-a:a)/this._timeScale,this._timeline._dirty||this._uncache(!1),!this._timeline._active))for(var c=this._timeline;c._timeline;)c.totalTime(c._totalTime,!0),c=c._timeline;this._gc&&this._enabled(!0,!1),this._totalTime!==a&&this.render(a,b,!1)}return this},g.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},g.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||1e-6,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime||0===this._pauseTime?this._pauseTime:this._timeline._totalTime;this._startTime=b-(b-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},g.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._totalTime,!0)),this):this._reversed},g.paused=function(a){return arguments.length?(a!=this._paused&&this._timeline&&(!a&&this._timeline.smoothChildTiming&&(this._startTime+=this._timeline.rawTime()-this._pauseTime,this._uncache(!1)),this._pauseTime=a?this._timeline.rawTime():null,this._paused=a,this._active=!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration),this._gc&&(a||this._enabled(!0,!1)),this):this._paused};var x=l("core.SimpleTimeline",function(a){v.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});g=x.prototype=new v,g.constructor=x,g.kill()._gc=!1,g._first=g._last=null,g._sortChildren=!1,g.add=function(a,b){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._timeline&&this._uncache(!0),this},g.insert=g.add,g._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a.timeline=null,a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),this._timeline&&this._uncache(!0)),this},g.render=function(a,b,c){var e,d=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;d;)e=d._next,(d._active||a>=d._startTime&&!d._paused)&&(d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=e},g.rawTime=function(){return this._totalTime};var y=l("TweenLite",function(a,b,c){if(v.call(this,b,c),null==a)throw"Cannot tween an undefined reference.";this.target=a="string"!=typeof a?a:y.selector(a)||a,this._overwrite=null==this.vars.overwrite?G[y.defaultOverwrite]:"number"==typeof this.vars.overwrite?this.vars.overwrite>>0:G[this.vars.overwrite];var e,f,d=a.jquery||"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style;if((d||a instanceof Array)&&"number"!=typeof a[0])for(this._targets=d&&!a.slice?A(a):a.slice(0),this._propLookup=[],this._siblings=[],e=0;this._targets.length>e;e++)f=this._targets[e],f?"string"!=typeof f?"function"==typeof f.each&&f[0]&&f[0].nodeType&&f[0].style?(this._targets.splice(e--,1),this._targets=this._targets.concat(A(f))):(this._siblings[e]=J(f,this,!1),1===this._overwrite&&this._siblings[e].length>1&&K(f,this,null,1,this._siblings[e])):(f=this._targets[e--]=y.selector(f),"string"==typeof f&&this._targets.splice(e+1,1)):this._targets.splice(e--,1);else this._propLookup={},this._siblings=J(a,this,!1),1===this._overwrite&&this._siblings.length>1&&K(a,this,null,1,this._siblings);(this.vars.immediateRender||0===b&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),z=function(a){return"function"==typeof a.each&&a[0]&&a[0].nodeType&&a[0].style},A=function(a){var b=[];return a.each(function(){b.push(this)}),b},B=function(a,b){var d,c={};for(d in a)F[d]||d in b&&"x"!==d&&"y"!==d&&"width"!==d&&"height"!==d&&"className"!==d||!(!C[d]||C[d]&&C[d]._autoCSS)||(c[d]=a[d],delete a[d]);a.css=c};g=y.prototype=new v,g.constructor=y,g.kill()._gc=!1,g.ratio=0,g._firstPT=g._targets=g._overwrittenProps=g._startAt=null,g._notifyPluginsOfEnabled=!1,y.version="1.9.0",y.defaultEase=g._ease=new o(null,null,1,1),y.defaultOverwrite="auto",y.ticker=w,y.selector=a.$||a.jQuery||function(b){return a.$?(y.selector=a.$,a.$(b)):a.document?a.document.getElementById("#"===b.charAt(0)?b.substr(1):b):b};var C=y._plugins={},D=y._tweenLookup={},E=0,F={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,orientToBezier:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},G={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},H=v._rootFramesTimeline=new x,I=v._rootTimeline=new x;I._startTime=w.time,H._startTime=w.frame,I._active=H._active=!0,v._updateRoot=function(){if(I.render((w.time-I._startTime)*I._timeScale,!1,!1),H.render((w.frame-H._startTime)*H._timeScale,!1,!1),!(w.frame%120)){var a,b,c;for(c in D){for(b=D[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete D[c]}}},w.addEventListener("tick",v._updateRoot);var J=function(a,b,c){var e,f,d=a._gsTweenID;if(D[d||(a._gsTweenID=d="t"+E++)]||(D[d]={target:a,tweens:[]}),b&&(e=D[d].tweens,e[f=e.length]=b,c))for(;--f>-1;)e[f]===b&&e.splice(f,1);return D[d].tweens},K=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._enabled(!1,!1)&&(g=!0);else if(5===d)break;return g}var n,j=b._startTime+1e-10,k=[],l=0,m=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(n=n||L(b,0,m),0===L(h,n,m)&&(k[l++]=h)):j>=h._startTime&&h._startTime+h.totalDuration()/h._timeScale+1e-10>j&&((m||!h._initted)&&2e-10>=j-h._startTime||(k[l++]=h)));for(f=l;--f>-1;)h=k[f],2===d&&h._kill(c,a)&&(g=!0),(2!==d||!h._firstPT&&h._initted)&&h._enabled(!1,!1)&&(g=!0);return g},L=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2e-10>f-b?1e-10:(f+=a.totalDuration()/a._timeScale/e)>b?0:f-b-1e-10};g._init=function(){var c,d,e,a=this.vars,b=a.ease;if(a.startAt&&(a.startAt.overwrite=0,a.startAt.immediateRender=!0,this._startAt=new y(this.target,0,a.startAt),a.immediateRender&&(this._startAt=null)),this._ease=b?b instanceof o?a.easeParams instanceof Array?b.config.apply(b,a.easeParams):b:"function"==typeof b?new o(b,a.easeParams):p[b]||y.defaultEase:y.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(c=this._targets.length;--c>-1;)this._initProps(this._targets[c],this._propLookup[c]={},this._siblings[c],this._overwrittenProps?this._overwrittenProps[c]:null)&&(d=!0);else d=this._initProps(this.target,this._propLookup,this._siblings,this._overwrittenProps);if(d&&y._onPluginEvent("_onInitAllProps",this),this._overwrittenProps&&null==this._firstPT&&"function"!=typeof this.target&&this._enabled(!1,!1),a.runBackwards)for(e=this._firstPT;e;)e.s+=e.c,e.c=-e.c,e=e._next;this._onUpdate=a.onUpdate,this._initted=!0},g._initProps=function(a,b,c,d){var e,f,g,h,i,j,k;if(null==a)return!1;this.vars.css||a.style&&a.nodeType&&C.css&&this.vars.autoCSS!==!1&&B(this.vars,a);for(e in this.vars){if(F[e]){if(("onStartParams"===e||"onUpdateParams"===e||"onCompleteParams"===e||"onReverseCompleteParams"===e||"onRepeatParams"===e)&&(i=this.vars[e]))for(f=i.length;--f>-1;)"{self}"===i[f]&&(i=this.vars[e]=i.concat(),i[f]=this)}else if(C[e]&&(h=new C[e])._onInitTween(a,this.vars[e],this)){for(this._firstPT=j={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:e,pg:!0,pr:h._priority},f=h._overwriteProps.length;--f>-1;)b[h._overwriteProps[f]]=this._firstPT;(h._priority||h._onInitAllProps)&&(g=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=b[e]=j={_next:this._firstPT,t:a,p:e,f:"function"==typeof a[e],n:e,pg:!1,pr:0},j.s=j.f?a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]():parseFloat(a[e]),k=this.vars[e],j.c="string"==typeof k&&"="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*Number(k.substr(2)):Number(k)-j.s||0;j&&j._next&&(j._next._prev=j)}return d&&this._kill(d,a)?this._initProps(a,b,c,d):this._overwrite>1&&this._firstPT&&c.length>1&&K(a,this,b,this._overwrite,c)?(this._kill(b,a),this._initProps(a,b,c,d)):g},g.render=function(a,b,c){var e,f,g,d=this._time;if(a>=this._duration)this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(e=!0,f="onComplete"),0===this._duration&&((0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0),this._rawPrevTime=a);else if(0>=a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===this._duration&&this._rawPrevTime>0)&&(f="onReverseComplete",e=this._reversed),0>a?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(c=!0),this._rawPrevTime=a)):this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var h=a/this._duration,i=this._easeType,j=this._easePower;(1===i||3===i&&h>=.5)&&(h=1-h),3===i&&(h*=2),1===j?h*=h:2===j?h*=h*h:3===j?h*=h*h*h:4===j&&(h*=h*h*h*h),this.ratio=1===i?1-h:2===i?h:.5>a/this._duration?h/2:1-h/2}else this.ratio=this._ease.getRatio(a/this._duration);if(this._time!==d||c){for(this._initted||(this._init(),!e&&this._time&&(this.ratio=this._ease.getRatio(this._time/this._duration))),this._active||this._paused||(this._active=!0),0===d&&(this._startAt&&this._startAt.render(a,b,c),this.vars.onStart&&(0!==this._time||0===this._duration)&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n))),g=this._firstPT;g;)g.f?g.t[g.p](g.c*this.ratio+g.s):g.t[g.p]=g.c*this.ratio+g.s,g=g._next;this._onUpdate&&(0>a&&this._startAt&&this._startAt.render(a,b,c),b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),f&&(this._gc||(0>a&&this._startAt&&(this._onUpdate||this._startAt.render(a,b,c)),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[f]&&this.vars[f].apply(this.vars[f+"Scope"]||this,this.vars[f+"Params"]||n)))}},g._kill=function(a,b){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:y.selector(b)||b;var c,d,e,f,g,h,i,j;if((b instanceof Array||z(b))&&"number"!=typeof b[0])for(c=b.length;--c>-1;)this._kill(a,b[c])&&(h=!0);else{if(this._targets){for(c=this._targets.length;--c>-1;)if(b===this._targets[c]){g=this._propLookup[c]||{},this._overwrittenProps=this._overwrittenProps||[],d=this._overwrittenProps[c]=a?this._overwrittenProps[c]||{}:"all";break}}else{if(b!==this.target)return!1;g=this._propLookup,d=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(g){i=a||g,j=a!==d&&"all"!==d&&a!==g&&(null==a||a._tempKill!==!0);for(e in i)(f=g[e])&&(f.pg&&f.t._kill(i)&&(h=!0),f.pg&&0!==f.t._overwriteProps.length||(f._prev?f._prev._next=f._next:f===this._firstPT&&(this._firstPT=f._next),f._next&&(f._next._prev=f._prev),f._next=f._prev=null),delete g[e]),j&&(d[e]=1)}}return h},g.invalidate=function(){return this._notifyPluginsOfEnabled&&y._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},g._enabled=function(a,b){if(a&&this._gc)if(this._targets)for(var c=this._targets.length;--c>-1;)this._siblings[c]=J(this._targets[c],this,!0);else this._siblings=J(this.target,this,!0);return v.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?y._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},y.to=function(a,b,c){return new y(a,b,c)},y.from=function(a,b,c){return c.runBackwards=!0,0!=c.immediateRender&&(c.immediateRender=!0),new y(a,b,c)},y.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new y(a,b,d)},y.delayedCall=function(a,b,c,d,e){return new y(b,0,{delay:a,onComplete:b,onCompleteParams:c,onCompleteScope:d,onReverseComplete:b,onReverseCompleteParams:c,onReverseCompleteScope:d,immediateRender:!1,useFrames:e,overwrite:0})},y.set=function(a,b){return new y(a,0,b)},y.killTweensOf=y.killDelayedCallsTo=function(a,b){for(var c=y.getTweensOf(a),d=c.length;--d>-1;)c[d]._kill(b,a)},y.getTweensOf=function(a){if(null!=a){a="string"!=typeof a?a:y.selector(a)||a;var b,c,d,e;if((a instanceof Array||z(a))&&"number"!=typeof a[0]){for(b=a.length,c=[];--b>-1;)c=c.concat(y.getTweensOf(a[b]));for(b=c.length;--b>-1;)for(e=c[b],d=b;--d>-1;)e===c[d]&&c.splice(b,1)}else for(c=J(a).concat(),b=c.length;--b>-1;)c[b]._gc&&c.splice(b,1);return c}};var M=l("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=M.prototype},!0);if(g=M.prototype,M.version=12,M.API=2,g._firstPT=null,g._addTween=function(a,b,c,d,e,f){var g,h;null!=d&&(g="number"==typeof d||"="!==d.charAt(1)?Number(d)-c:parseInt(d.charAt(0)+"1",10)*Number(d.substr(2)))&&(this._firstPT=h={_next:this._firstPT,t:a,p:b,s:c,c:g,f:"function"==typeof a[b],n:e||b,r:f},h._next&&(h._next._prev=h))},g.setRatio=function(a){for(var d,b=this._firstPT,c=1e-6;b;)d=b.c*a+b.s,b.r?d=d+(d>0?.5:-.5)>>0:c>d&&d>-c&&(d=0),b.f?b.t[b.p](d):b.t[b.p]=d,b=b._next},g._kill=function(a){var d,b=this._overwriteProps,c=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(d=b.length;--d>-1;)null!=a[b[d]]&&b.splice(d,1);for(;c;)null!=a[c.n]&&(c._next&&(c._next._prev=c._prev),c._prev?(c._prev._next=c._next,c._prev=null):this._firstPT===c&&(this._firstPT=c._next)),c=c._next;return!1},g._roundProps=function(a,b){for(var c=this._firstPT;c;)(a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")])&&(c.r=b),c=c._next},y._onPluginEvent=function(a,b){var d,e,f,g,h,c=b._firstPT;if("_onInitAllProps"===a){for(;c;){for(h=c._next,e=f;e&&e.pr>c.pr;)e=e._next;(c._prev=e?e._prev:g)?c._prev._next=c:f=c,(c._next=e)?e._prev=c:g=c,c=h}c=b._firstPT=f}for(;c;)c.pg&&"function"==typeof c.t[a]&&c.t[a]()&&(d=!0),c=c._next;return d},M.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===M.API&&(y._plugins[(new a[b])._propName]=a[b]);return!0},k.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var h,b=a.propName,c=a.priority||0,d=a.overwriteProps,e={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},f=l("plugins."+b.charAt(0).toUpperCase()+b.substr(1)+"Plugin",function(){M.call(this,b,c),this._overwriteProps=d||[]},a.global===!0),g=f.prototype=new M(b);g.constructor=f,f.API=a.API;for(h in e)"function"==typeof a[h]&&(g[e[h]]=a[h]);return f.version=a.version,M.activate([f]),f},e=a._gsQueue){for(f=0;e.length>f;f++)e[f]();for(g in i)i[g].func||a.console.log("GSAP encountered missing dependency: com.greensock."+g)}h=!1}(window);

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/jQuery.templates.js */
/*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function( jQuery, undefined ){
	var oldManip = jQuery.fn.domManip, tmplItmAtt = "_tmplitem", htmlExpr = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
		newTmplItems = {}, wrappedItems = {}, appendToTmplItems, topTmplItem = { key: 0, data: {} }, itemKey = 0, cloneIndex = 0, stack = [];

	function newTmplItem( options, parentItem, fn, data ) {
		// Returns a template item data structure for a new rendered instance of a template (a 'template item').
		// The content field is a hierarchical array of strings and nested items (to be
		// removed and replaced by nodes field of dom elements, once inserted in DOM).
		var newItem = {
			data: data || (parentItem ? parentItem.data : {}),
			_wrap: parentItem ? parentItem._wrap : null,
			tmpl: null,
			parent: parentItem || null,
			nodes: [],
			calls: tiCalls,
			nest: tiNest,
			wrap: tiWrap,
			html: tiHtml,
			update: tiUpdate
		};
		if ( options ) {
			jQuery.extend( newItem, options, { nodes: [], parent: parentItem });
		}
		if ( fn ) {
			// Build the hierarchical content to be used during insertion into DOM
			newItem.tmpl = fn;
			newItem._ctnt = newItem._ctnt || newItem.tmpl( jQuery, newItem );
			newItem.key = ++itemKey;
			// Keep track of new template item, until it is stored as jQuery Data on DOM element
			(stack.length ? wrappedItems : newTmplItems)[itemKey] = newItem;
		}
		return newItem;
	}

	// Override appendTo etc., in order to provide support for targeting multiple elements. (This code would disappear if integrated in jquery core).
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var ret = [], insert = jQuery( selector ), elems, i, l, tmplItems,
				parent = this.length === 1 && this[0].parentNode;

			appendToTmplItems = newTmplItems || {};
			if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
				insert[ original ]( this[0] );
				ret = this;
			} else {
				for ( i = 0, l = insert.length; i < l; i++ ) {
					cloneIndex = i;
					elems = (i > 0 ? this.clone(true) : this).get();
					jQuery( insert[i] )[ original ]( elems );
					ret = ret.concat( elems );
				}
				cloneIndex = 0;
				ret = this.pushStack( ret, name, insert.selector );
			}
			tmplItems = appendToTmplItems;
			appendToTmplItems = null;
			jQuery.tmpl.complete( tmplItems );
			return ret;
		};
	});

	jQuery.fn.extend({
		// Use first wrapped element as template markup.
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl: function( data, options, parentItem ) {
			return jQuery.tmpl( this[0], data, options, parentItem );
		},

		// Find which rendered template item the first wrapped DOM element belongs to
		tmplItem: function() {
			return jQuery.tmplItem( this[0] );
		},

		// Consider the first wrapped element as a template declaration, and get the compiled template or store it as a named template.
		template: function( name ) {
			return jQuery.template( name, this[0] );
		},

		domManip: function( args, table, callback, options ) {
			if ( args[0] && jQuery.isArray( args[0] )) {
				var dmArgs = jQuery.makeArray( arguments ), elems = args[0], elemsLength = elems.length, i = 0, tmplItem;
				while ( i < elemsLength && !(tmplItem = jQuery.data( elems[i++], "tmplItem" ))) {}
				if ( tmplItem && cloneIndex ) {
					dmArgs[2] = function( fragClone ) {
						// Handler called by oldManip when rendered template has been inserted into DOM.
						jQuery.tmpl.afterManip( this, fragClone, callback );
					};
				}
				oldManip.apply( this, dmArgs );
			} else {
				oldManip.apply( this, arguments );
			}
			cloneIndex = 0;
			if ( !appendToTmplItems ) {
				jQuery.tmpl.complete( newTmplItems );
			}
			return this;
		}
	});

	jQuery.extend({
		// Return wrapped set of template items, obtained by rendering template against data.
		tmpl: function( tmpl, data, options, parentItem ) {
			var ret, topLevel = !parentItem;
			if ( topLevel ) {
				// This is a top-level tmpl call (not from a nested template using {{tmpl}})
				parentItem = topTmplItem;
				tmpl = jQuery.template[tmpl] || jQuery.template( null, tmpl );
				wrappedItems = {}; // Any wrapped items will be rebuilt, since this is top level
			} else if ( !tmpl ) {
				// The template item is already associated with DOM - this is a refresh.
				// Re-evaluate rendered template for the parentItem
				tmpl = parentItem.tmpl;
				newTmplItems[parentItem.key] = parentItem;
				parentItem.nodes = [];
				if ( parentItem.wrapped ) {
					updateWrapped( parentItem, parentItem.wrapped );
				}
				// Rebuild, without creating a new template item
				return jQuery( build( parentItem, null, parentItem.tmpl( jQuery, parentItem ) ));
			}
			if ( !tmpl ) {
				return []; // Could throw...
			}
			if ( typeof data === "function" ) {
				data = data.call( parentItem || {} );
			}
			if ( options && options.wrapped ) {
				updateWrapped( options, options.wrapped );
			}
			ret = jQuery.isArray( data ) ?
				jQuery.map( data, function( dataItem ) {
					return dataItem ? newTmplItem( options, parentItem, tmpl, dataItem ) : null;
				}) :
				[ newTmplItem( options, parentItem, tmpl, data ) ];
			return topLevel ? jQuery( build( parentItem, null, ret ) ) : ret;
		},

		// Return rendered template item for an element.
		tmplItem: function( elem ) {
			var tmplItem;
			if ( elem instanceof jQuery ) {
				elem = elem[0];
			}
			while ( elem && elem.nodeType === 1 && !(tmplItem = jQuery.data( elem, "tmplItem" )) && (elem = elem.parentNode) ) {}
			return tmplItem || topTmplItem;
		},

		// Set:
		// Use $.template( name, tmpl ) to cache a named template,
		// where tmpl is a template string, a script element or a jQuery instance wrapping a script element, etc.
		// Use $( "selector" ).template( name ) to provide access by name to a script block template declaration.

		// Get:
		// Use $.template( name ) to access a cached template.
		// Also $( selectorToScriptBlock ).template(), or $.template( null, templateString )
		// will return the compiled template, without adding a name reference.
		// If templateString includes at least one HTML tag, $.template( templateString ) is equivalent
		// to $.template( null, templateString )
		template: function( name, tmpl ) {
			if (tmpl) {
				// Compile template and associate with name
				if ( typeof tmpl === "string" ) {
					// This is an HTML string being passed directly in.
					tmpl = buildTmplFn( tmpl )
				} else if ( tmpl instanceof jQuery ) {
					tmpl = tmpl[0] || {};
				}
				if ( tmpl.nodeType ) {
					// If this is a template block, use cached copy, or generate tmpl function and cache.
					tmpl = jQuery.data( tmpl, "tmpl" ) || jQuery.data( tmpl, "tmpl", buildTmplFn( tmpl.innerHTML ));
					// Issue: In IE, if the container element is not a script block, the innerHTML will remove quotes from attribute values whenever the value does not include white space.
					// This means that foo="${x}" will not work if the value of x includes white space: foo="${x}" -> foo=value of x.
					// To correct this, include space in tag: foo="${ x }" -> foo="value of x"
				}
				return typeof name === "string" ? (jQuery.template[name] = tmpl) : tmpl;
			}
			// Return named compiled template
			return name ? (typeof name !== "string" ? jQuery.template( null, name ):
				(jQuery.template[name] ||
					// If not in map, treat as a selector. (If integrated with core, use quickExpr.exec)
					jQuery.template( null, htmlExpr.test( name ) ? name : jQuery( name )))) : null;
		},

		encode: function( text ) {
			// Do HTML encoding replacing < > & and ' and " by corresponding entities.
			return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
		}
	});

	jQuery.extend( jQuery.tmpl, {
		tag: {
			"tmpl": {
				_default: { $2: "null" },
				open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
				// tmpl target parameter can be of type function, so use $1, not $1a (so not auto detection of functions)
				// This means that {{tmpl foo}} treats foo as a template (which IS a function).
				// Explicit parens can be used if foo is a function that returns a template: {{tmpl foo()}}.
			},
			"wrap": {
				_default: { $2: "null" },
				open: "$item.calls(_,$1,$2);_=[];",
				close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
			},
			"each": {
				_default: { $2: "$index, $value" },
				open: "if($notnull_1){$.each($1a,function($2){with(this){",
				close: "}});}"
			},
			"if": {
				open: "if(($notnull_1) && $1a){",
				close: "}"
			},
			"else": {
				_default: { $1: "true" },
				open: "}else if(($notnull_1) && $1a){"
			},
			"html": {
				// Unecoded expression evaluation.
				open: "if($notnull_1){_.push($1a);}"
			},
			"=": {
				// Encoded expression evaluation. Abbreviated form is ${}.
				_default: { $1: "$data" },
				open: "if($notnull_1){_.push($.encode($1a));}"
			},
			"!": {
				// Comment tag. Skipped by parser
				open: ""
			}
		},

		// This stub can be overridden, e.g. in jquery.tmplPlus for providing rendered events
		complete: function( items ) {
			newTmplItems = {};
		},

		// Call this from code which overrides domManip, or equivalent
		// Manage cloning/storing template items etc.
		afterManip: function afterManip( elem, fragClone, callback ) {
			// Provides cloned fragment ready for fixup prior to and after insertion into DOM
			var content = fragClone.nodeType === 11 ?
				jQuery.makeArray(fragClone.childNodes) :
				fragClone.nodeType === 1 ? [fragClone] : [];

			// Return fragment to original caller (e.g. append) for DOM insertion
			callback.call( elem, fragClone );

			// Fragment has been inserted:- Add inserted nodes to tmplItem data structure. Replace inserted element annotations by jQuery.data.
			storeTmplItems( content );
			cloneIndex++;
		}
	});

	//========================== Private helper functions, used by code above ==========================

	function build( tmplItem, nested, content ) {
		// Convert hierarchical content into flat string array
		// and finally return array of fragments ready for DOM insertion
		var frag, ret = content ? jQuery.map( content, function( item ) {
			return (typeof item === "string") ?
				// Insert template item annotations, to be converted to jQuery.data( "tmplItem" ) when elems are inserted into DOM.
				(tmplItem.key ? item.replace( /(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + tmplItmAtt + "=\"" + tmplItem.key + "\" $2" ) : item) :
				// This is a child template item. Build nested template.
				build( item, tmplItem, item._ctnt );
		}) :
		// If content is not defined, insert tmplItem directly. Not a template item. May be a string, or a string array, e.g. from {{html $item.html()}}.
		tmplItem;
		if ( nested ) {
			return ret;
		}

		// top-level template
		ret = ret.join("");

		// Support templates which have initial or final text nodes, or consist only of text
		// Also support HTML entities within the HTML markup.
		ret.replace( /^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function( all, before, middle, after) {
			frag = jQuery( middle ).get();

			storeTmplItems( frag );
			if ( before ) {
				frag = unencode( before ).concat(frag);
			}
			if ( after ) {
				frag = frag.concat(unencode( after ));
			}
		});
		return frag ? frag : unencode( ret );
	}

	function unencode( text ) {
		// Use createElement, since createTextNode will not render HTML entities correctly
		var el = document.createElement( "div" );
		el.innerHTML = text;
		return jQuery.makeArray(el.childNodes);
	}

	// Generate a reusable function that will serve to render a template against data
	function buildTmplFn( markup ) {
		return new Function("jQuery","$item",
			"var $=jQuery,call,_=[],$data=$item.data;" +

			// Introduce the data as local variables using with(){}
			"with($data){_.push('" +

			// Convert the template into pure JavaScript
			jQuery.trim(markup)
				.replace( /([\\'])/g, "\\$1" )
				.replace( /[\r\t\n]/g, " " )
				.replace( /\$\{([^\}]*)\}/g, "{{= $1}}" )
				.replace( /\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
				function( all, slash, type, fnargs, target, parens, args ) {
					var tag = jQuery.tmpl.tag[ type ], def, expr, exprAutoFnDetect;
					if ( !tag ) {
						throw "Template command not found: " + type;
					}
					def = tag._default || [];
					if ( parens && !/\w$/.test(target)) {
						target += parens;
						parens = "";
					}
					if ( target ) {
						target = unescape( target );
						args = args ? ("," + unescape( args ) + ")") : (parens ? ")" : "");
						// Support for target being things like a.toLowerCase();
						// In that case don't call with template item as 'this' pointer. Just evaluate...
						expr = parens ? (target.indexOf(".") > -1 ? target + unescape( parens ) : ("(" + target + ").call($item" + args)) : target;
						exprAutoFnDetect = parens ? expr : "(typeof(" + target + ")==='function'?(" + target + ").call($item):(" + target + "))";
					} else {
						exprAutoFnDetect = expr = def.$1 || "null";
					}
					fnargs = unescape( fnargs );
					return "');" +
						tag[ slash ? "close" : "open" ]
							.split( "$notnull_1" ).join( target ? "typeof(" + target + ")!=='undefined' && (" + target + ")!=null" : "true" )
							.split( "$1a" ).join( exprAutoFnDetect )
							.split( "$1" ).join( expr )
							.split( "$2" ).join( fnargs || def.$2 || "" ) +
						"_.push('";
				}) +
			"');}return _;"
		);
	}
	function updateWrapped( options, wrapped ) {
		// Build the wrapped content.
		options._wrap = build( options, true,
			// Suport imperative scenario in which options.wrapped can be set to a selector or an HTML string.
			jQuery.isArray( wrapped ) ? wrapped : [htmlExpr.test( wrapped ) ? wrapped : jQuery( wrapped ).html()]
		).join("");
	}

	function unescape( args ) {
		return args ? args.replace( /\\'/g, "'").replace(/\\\\/g, "\\" ) : null;
	}
	function outerHtml( elem ) {
		var div = document.createElement("div");
		div.appendChild( elem.cloneNode(true) );
		return div.innerHTML;
	}

	// Store template items in jQuery.data(), ensuring a unique tmplItem data data structure for each rendered template instance.
	function storeTmplItems( content ) {
		var keySuffix = "_" + cloneIndex, elem, elems, newClonedItems = {}, i, l, m;
		for ( i = 0, l = content.length; i < l; i++ ) {
			if ( (elem = content[i]).nodeType !== 1 ) {
				continue;
			}
			elems = elem.getElementsByTagName("*");
			for ( m = elems.length - 1; m >= 0; m-- ) {
				processItemKey( elems[m] );
			}
			processItemKey( elem );
		}
		function processItemKey( el ) {
			var pntKey, pntNode = el, pntItem, tmplItem, key;
			// Ensure that each rendered template inserted into the DOM has its own template item,
			if ( (key = el.getAttribute( tmplItmAtt ))) {
				while ( pntNode.parentNode && (pntNode = pntNode.parentNode).nodeType === 1 && !(pntKey = pntNode.getAttribute( tmplItmAtt ))) { }
				if ( pntKey !== key ) {
					// The next ancestor with a _tmplitem expando is on a different key than this one.
					// So this is a top-level element within this template item
					// Set pntNode to the key of the parentNode, or to 0 if pntNode.parentNode is null, or pntNode is a fragment.
					pntNode = pntNode.parentNode ? (pntNode.nodeType === 11 ? 0 : (pntNode.getAttribute( tmplItmAtt ) || 0)) : 0;
					if ( !(tmplItem = newTmplItems[key]) ) {
						// The item is for wrapped content, and was copied from the temporary parent wrappedItem.
						tmplItem = wrappedItems[key];
						tmplItem = newTmplItem( tmplItem, newTmplItems[pntNode]||wrappedItems[pntNode] );
						tmplItem.key = ++itemKey;
						newTmplItems[itemKey] = tmplItem;
					}
					if ( cloneIndex ) {
						cloneTmplItem( key );
					}
				}
				el.removeAttribute( tmplItmAtt );
			} else if ( cloneIndex && (tmplItem = jQuery.data( el, "tmplItem" )) ) {
				// This was a rendered element, cloned during append or appendTo etc.
				// TmplItem stored in jQuery data has already been cloned in cloneCopyEvent. We must replace it with a fresh cloned tmplItem.
				cloneTmplItem( tmplItem.key );
				newTmplItems[tmplItem.key] = tmplItem;
				pntNode = jQuery.data( el.parentNode, "tmplItem" );
				pntNode = pntNode ? pntNode.key : 0;
			}
			if ( tmplItem ) {
				pntItem = tmplItem;
				// Find the template item of the parent element.
				// (Using !=, not !==, since pntItem.key is number, and pntNode may be a string)
				while ( pntItem && pntItem.key != pntNode ) {
					// Add this element as a top-level node for this rendered template item, as well as for any
					// ancestor items between this item and the item of its parent element
					pntItem.nodes.push( el );
					pntItem = pntItem.parent;
				}
				// Delete content built during rendering - reduce API surface area and memory use, and avoid exposing of stale data after rendering...
				delete tmplItem._ctnt;
				delete tmplItem._wrap;
				// Store template item as jQuery data on the element
				jQuery.data( el, "tmplItem", tmplItem );
			}
			function cloneTmplItem( key ) {
				key = key + keySuffix;
				tmplItem = newClonedItems[key] =
					(newClonedItems[key] || newTmplItem( tmplItem, newTmplItems[tmplItem.parent.key + keySuffix] || tmplItem.parent ));
			}
		}
	}

	//---- Helper functions for template item ----

	function tiCalls( content, tmpl, data, options ) {
		if ( !content ) {
			return stack.pop();
		}
		stack.push({ _: content, tmpl: tmpl, item:this, data: data, options: options });
	}

	function tiNest( tmpl, data, options ) {
		// nested template, using {{tmpl}} tag
		return jQuery.tmpl( jQuery.template( tmpl ), data, options, this );
	}

	function tiWrap( call, wrapped ) {
		// nested template, using {{wrap}} tag
		var options = call.options || {};
		options.wrapped = wrapped;
		// Apply the template, which may incorporate wrapped content,
		return jQuery.tmpl( jQuery.template( call.tmpl ), call.data, options, call.item );
	}

	function tiHtml( filter, textOnly ) {
		var wrapped = this._wrap;
		return jQuery.map(
			jQuery( jQuery.isArray( wrapped ) ? wrapped.join("") : wrapped ).filter( filter || "*" ),
			function(e) {
				return textOnly ?
					e.innerText || e.textContent :
					e.outerHTML || outerHtml(e);
			});
	}

	function tiUpdate() {
		var coll = this.nodes;
		jQuery.tmpl( null, null, null, this).insertBefore( coll[0] );
		jQuery( coll ).remove();
	}
})( jQuery );


/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/jquery.easing.js */

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	linear: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

jQuery.extend( jQuery.easing,
{
	easeIn: function (x, t, b, c, d) {
		return jQuery.easing.easeInQuad(x, t, b, c, d);
	},
	"ease-in": function (x, t, b, c, d) {
		return jQuery.easing.easeInQuad(x, t, b, c, d);
	},
	easeOut: function (x, t, b, c, d) {
		return jQuery.easing.easeOutQuad(x, t, b, c, d);
	},
	"ease-out": function (x, t, b, c, d) {
		return jQuery.easing.easeOutQuad(x, t, b, c, d);
	},
	easeInOut: function (x, t, b, c, d) {
		return jQuery.easing.easeInOutQuad(x, t, b, c, d);
	},
	"ease-in-out": function (x, t, b, c, d) {
		return jQuery.easing.easeInOutQuad(x, t, b, c, d);
	},
	expoin: function(x, t, b, c, d) {
		return jQuery.easing.easeInExpo(x, t, b, c, d);
	},
	expoout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutExpo(x, t, b, c, d);
	},
	expoinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutExpo(x, t, b, c, d);
	},
	bouncein: function(x, t, b, c, d) {
		return jQuery.easing.easeInBounce(x, t, b, c, d);
	},
	bounceout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBounce(x, t, b, c, d);
	},
	bounceinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBounce(x, t, b, c, d);
	},
	elasin: function(x, t, b, c, d) {
		return jQuery.easing.easeInElastic(x, t, b, c, d);
	},
	elasout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutElastic(x, t, b, c, d);
	},
	elasinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutElastic(x, t, b, c, d);
	},
	backin: function(x, t, b, c, d) {
		return jQuery.easing.easeInBack(x, t, b, c, d);
	},
	backout: function(x, t, b, c, d) {
		return jQuery.easing.easeOutBack(x, t, b, c, d);
	},
	backinout: function(x, t, b, c, d) {
		return jQuery.easing.easeInOutBack(x, t, b, c, d);
	}
});

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/jquery.history.min.js */
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery hashchange event
//
// *Version: 1.3, Last updated: 7/21/2010*
//
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)
//
// About: License
//
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
//
// About: Examples
//
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
//
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/
//
// About: Support and Testing
//
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
//
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
//
// About: Known issues
//
// While this jQuery hashchange event implementation is quite stable and
// robust, there are a few unfortunate browser bugs surrounding expected
// hashchange event-based behaviors, independent of any JavaScript
// window.onhashchange abstraction. See the following examples for more
// information:
//
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
//
// Also note that should a browser natively support the window.onhashchange
// event, but not report that it does, the fallback polling loop will be used.
//
// About: Release History
//
// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more
//         "removable" for mobile-only development. Added IE6/7 document.title
//         support. Attempted to make Iframe as hidden as possible by using
//         techniques from http://www.paciellogroup.com/blog/?p=604. Added
//         support for the "shortcut" format $(window).hashchange( fn ) and
//         $(window).hashchange() like jQuery provides for built-in events.
//         Renamed jQuery.hashchangeDelay to <jQuery.fn.hashchange.delay> and
//         lowered its default value to 50. Added <jQuery.fn.hashchange.domain>
//         and <jQuery.fn.hashchange.src> properties plus document-domain.html
//         file to address access denied issues when setting document.domain in
//         IE6/7.
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.

(function($,window,undefined){
  '$:nomunge'; // Used by YUI compressor.

  // Reused string.
  var str_hashchange = 'hashchange',

    // Method / object references.
    doc = document,
    fake_onhashchange,
    special = $.event.special,

    // Does the browser support window.onhashchange? Note that IE8 running in
    // IE7 compatibility mode reports true for 'onhashchange' in window, even
    // though the event isn't supported, so also test document.documentMode.
    doc_mode = doc.documentMode,
    supports_onhashchange = 'on' + str_hashchange in window && ( doc_mode === undefined || doc_mode > 7 );

  // Get location.hash (or what you'd expect location.hash to be) sans any
  // leading #. Thanks for making this necessary, Firefox!
  function get_fragment( url ) {
    url = url || location.href;
    return '#' + url.replace( /^[^#]*#?(.*)$/, '$1' );
  };

  // Method: jQuery.fn.hashchange
  //
  // Bind a handler to the window.onhashchange event or trigger all bound
  // window.onhashchange event handlers. This behavior is consistent with
  // jQuery's built-in event handlers.
  //
  // Usage:
  //
  // > jQuery(window).hashchange( [ handler ] );
  //
  // Arguments:
  //
  //  handler - (Function) Optional handler to be bound to the hashchange
  //    event. This is a "shortcut" for the more verbose form:
  //    jQuery(window).bind( 'hashchange', handler ). If handler is omitted,
  //    all bound window.onhashchange event handlers will be triggered. This
  //    is a shortcut for the more verbose
  //    jQuery(window).trigger( 'hashchange' ). These forms are described in
  //    the <hashchange event> section.
  //
  // Returns:
  //
  //  (jQuery) The initial jQuery collection of elements.

  // Allow the "shortcut" format $(elem).hashchange( fn ) for binding and
  // $(elem).hashchange() for triggering, like jQuery does for built-in events.
  $.fn[ str_hashchange ] = function( fn ) {
    return fn ? this.bind( str_hashchange, fn ) : this.trigger( str_hashchange );
  };

  // Property: jQuery.fn.hashchange.delay
  //
  // The numeric interval (in milliseconds) at which the <hashchange event>
  // polling loop executes. Defaults to 50.

  // Property: jQuery.fn.hashchange.domain
  //
  // If you're setting document.domain in your JavaScript, and you want hash
  // history to work in IE6/7, not only must this property be set, but you must
  // also set document.domain BEFORE jQuery is loaded into the page. This
  // property is only applicable if you are supporting IE6/7 (or IE8 operating
  // in "IE7 compatibility" mode).
  //
  // In addition, the <jQuery.fn.hashchange.src> property must be set to the
  // path of the included "document-domain.html" file, which can be renamed or
  // modified if necessary (note that the document.domain specified must be the
  // same in both your main JavaScript as well as in this file).
  //
  // Usage:
  //
  // jQuery.fn.hashchange.domain = document.domain;

  // Property: jQuery.fn.hashchange.src
  //
  // If, for some reason, you need to specify an Iframe src file (for example,
  // when setting document.domain as in <jQuery.fn.hashchange.domain>), you can
  // do so using this property. Note that when using this property, history
  // won't be recorded in IE6/7 until the Iframe src file loads. This property
  // is only applicable if you are supporting IE6/7 (or IE8 operating in "IE7
  // compatibility" mode).
  //
  // Usage:
  //
  // jQuery.fn.hashchange.src = 'path/to/file.html';

  $.fn[ str_hashchange ].delay = 50;
  /*
  $.fn[ str_hashchange ].domain = null;
  $.fn[ str_hashchange ].src = null;
  */

  // Event: hashchange event
  //
  // Fired when location.hash changes. In browsers that support it, the native
  // HTML5 window.onhashchange event is used, otherwise a polling loop is
  // initialized, running every <jQuery.fn.hashchange.delay> milliseconds to
  // see if the hash has changed. In IE6/7 (and IE8 operating in "IE7
  // compatibility" mode), a hidden Iframe is created to allow the back button
  // and hash-based history to work.
  //
  // Usage as described in <jQuery.fn.hashchange>:
  //
  // > // Bind an event handler.
  // > jQuery(window).hashchange( function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // >
  // > // Manually trigger the event handler.
  // > jQuery(window).hashchange();
  //
  // A more verbose usage that allows for event namespacing:
  //
  // > // Bind an event handler.
  // > jQuery(window).bind( 'hashchange', function(e) {
  // >   var hash = location.hash;
  // >   ...
  // > });
  // >
  // > // Manually trigger the event handler.
  // > jQuery(window).trigger( 'hashchange' );
  //
  // Additional Notes:
  //
  // * The polling loop and Iframe are not created until at least one handler
  //   is actually bound to the 'hashchange' event.
  // * If you need the bound handler(s) to execute immediately, in cases where
  //   a location.hash exists on page load, via bookmark or page refresh for
  //   example, use jQuery(window).hashchange() or the more verbose
  //   jQuery(window).trigger( 'hashchange' ).
  // * The event can be bound before DOM ready, but since it won't be usable
  //   before then in IE6/7 (due to the necessary Iframe), recommended usage is
  //   to bind it inside a DOM ready handler.

  // Override existing $.event.special.hashchange methods (allowing this plugin
  // to be defined after jQuery BBQ in BBQ's source code).
  special[ str_hashchange ] = $.extend( special[ str_hashchange ], {

    // Called only when the first 'hashchange' event is bound to window.
    setup: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }

      // Otherwise, we need to create our own. And we don't want to call this
      // until the user binds to the event, just in case they never do, since it
      // will create a polling loop and possibly even a hidden Iframe.
      $( fake_onhashchange.start );
    },

    // Called only when the last 'hashchange' event is unbound from window.
    teardown: function() {
      // If window.onhashchange is supported natively, there's nothing to do..
      if ( supports_onhashchange ) { return false; }

      // Otherwise, we need to stop ours (if possible).
      $( fake_onhashchange.stop );
    }

  });

  // fake_onhashchange does all the work of triggering the window.onhashchange
  // event for browsers that don't natively support it, including creating a
  // polling loop to watch for hash changes and in IE 6/7 creating a hidden
  // Iframe to enable back and forward.
  fake_onhashchange = (function(){
    var self = {},
      timeout_id,

      // Remember the initial hash so it doesn't get triggered immediately.
      last_hash = get_fragment(),

      fn_retval = function(val){ return val; },
      history_set = fn_retval,
      history_get = fn_retval;

    // Start the polling loop.
    self.start = function() {
      timeout_id || poll();
    };

    // Stop the polling loop.
    self.stop = function() {
      timeout_id && clearTimeout( timeout_id );
      timeout_id = undefined;
    };

    // This polling loop checks every $.fn.hashchange.delay milliseconds to see
    // if location.hash has changed, and triggers the 'hashchange' event on
    // window when necessary.
    function poll() {
      var hash = get_fragment(),
        history_hash = history_get( last_hash );

      if ( hash !== last_hash ) {
        history_set( last_hash = hash, history_hash );

        $(window).trigger( str_hashchange );

      } else if ( history_hash !== last_hash ) {
        location.href = location.href.replace( /#.*/, '' ) + history_hash;
      }

      timeout_id = setTimeout( poll, $.fn[ str_hashchange ].delay );
    };

    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvv REMOVE IF NOT SUPPORTING IE6/7/8 vvvvvvvvvvvvvvvvvvv
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    $.browser.msie && !supports_onhashchange && (function(){
      // Not only do IE6/7 need the "magical" Iframe treatment, but so does IE8
      // when running in "IE7 compatibility" mode.

      var iframe,
        iframe_src;

      // When the event is bound and polling starts in IE 6/7, create a hidden
      // Iframe for history handling.
      self.start = function(){
        if ( !iframe ) {
          iframe_src = $.fn[ str_hashchange ].src;
          iframe_src = iframe_src && iframe_src + get_fragment();

          // Create hidden Iframe. Attempt to make Iframe as hidden as possible
          // by using techniques from http://www.paciellogroup.com/blog/?p=604.
          iframe = $('<iframe tabindex="-1" title="empty"/>').hide()

            // When Iframe has completely loaded, initialize the history and
            // start polling.
            .one( 'load', function(){
              iframe_src || history_set( get_fragment() );
              poll();
            })

            // Load Iframe src if specified, otherwise nothing.
            .attr( 'src', iframe_src || 'javascript:0' )

            // Append Iframe after the end of the body to prevent unnecessary
            // initial page scrolling (yes, this works).
            .insertAfter( 'body' )[0].contentWindow;

          // Whenever `document.title` changes, update the Iframe's title to
          // prettify the back/next history menu entries. Since IE sometimes
          // errors with "Unspecified error" the very first time this is set
          // (yes, very useful) wrap this with a try/catch block.
          doc.onpropertychange = function(){
            try {
              if ( event.propertyName === 'title' ) {
                iframe.document.title = doc.title;
              }
            } catch(e) {}
          };

        }
      };

      // Override the "stop" method since an IE6/7 Iframe was created. Even
      // if there are no longer any bound event handlers, the polling loop
      // is still necessary for back/next to work at all!
      self.stop = fn_retval;

      // Get history by looking at the hidden Iframe's location.hash.
      history_get = function() {
        return get_fragment( iframe.location.href );
      };

      // Set a new history item by opening and then closing the Iframe
      // document, *then* setting its location.hash. If document.domain has
      // been set, update that as well.
      history_set = function( hash, history_hash ) {
        var iframe_doc = iframe.document,
          domain = $.fn[ str_hashchange ].domain;

        if ( hash !== history_hash ) {
          // Update Iframe with any initial `document.title` that might be set.
          iframe_doc.title = doc.title;

          // Opening the Iframe's document after it has been closed is what
          // actually adds a history entry.
          iframe_doc.open();

          // Set document.domain for the Iframe document as well, if necessary.
          domain && iframe_doc.write( '<script>document.domain="' + domain + '"</script>' );

          iframe_doc.close();

          // Update the Iframe's hash, for great justice.
          iframe.location.hash = hash;
        }
      };

    })();
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^ REMOVE IF NOT SUPPORTING IE6/7/8 ^^^^^^^^^^^^^^^^^^^
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    return self;
  })();

})(jQuery,this);

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/jquery.mousewheel.min.js */
/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 *
 * Requires: 1.2.2+
 */
(function(c){var a=["DOMMouseScroll","mousewheel"];c.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var d=a.length;d;){this.addEventListener(a[--d],b,false)}}else{this.onmousewheel=b}},teardown:function(){if(this.removeEventListener){for(var d=a.length;d;){this.removeEventListener(a[--d],b,false)}}else{this.onmousewheel=null}}};c.fn.extend({mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")},unmousewheel:function(d){return this.unbind("mousewheel",d)}});function b(i){var g=i||window.event,f=[].slice.call(arguments,1),j=0,h=true,e=0,d=0;i=c.event.fix(g);i.type="mousewheel";if(i.wheelDelta){j=i.wheelDelta/120}if(i.detail){j=-i.detail/3}d=j;if(g.axis!==undefined&&g.axis===g.HORIZONTAL_AXIS){d=0;e=-1*j}if(g.wheelDeltaY!==undefined){d=g.wheelDeltaY/120}if(g.wheelDeltaX!==undefined){e=-1*g.wheelDeltaX/120}f.unshift(i,j,e,d);return c.event.handle.apply(this,f)}})(jQuery);

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/jquery.tools.min.js */
/*
 * jQuery Tools 1.2.5 - The missing UI library for the Web
 *
 * [tooltip, tooltip.slide]
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/
 *
 * File generated: Mon Feb 07 12:42:06 GMT 2011
 */
(function(f){function p(a,b,c){var h=c.relative?a.position().top:a.offset().top,d=c.relative?a.position().left:a.offset().left,i=c.position[0];h-=b.outerHeight()-c.offset[0];d+=a.outerWidth()+c.offset[1];if(/iPad/i.test(navigator.userAgent))h-=f(window).scrollTop();var j=b.outerHeight()+a.outerHeight();if(i=="center")h+=j/2;if(i=="bottom")h+=j;i=c.position[1];a=b.outerWidth()+a.outerWidth();if(i=="center")d-=a/2;if(i=="left")d-=a;return{top:h,left:d}}function u(a,b){var c=this,h=a.add(c),d,i=0,j=
0,m=a.attr("title"),q=a.attr("data-tooltip"),r=o[b.effect],l,s=a.is(":input"),v=s&&a.is(":checkbox, :radio, select, :button, :submit"),t=a.attr("type"),k=b.events[t]||b.events[s?v?"widget":"input":"def"];if(!r)throw'Nonexistent effect "'+b.effect+'"';k=k.split(/,\s*/);if(k.length!=2)throw"Tooltip: bad events configuration for "+t;a.bind(k[0],function(e){clearTimeout(i);if(b.predelay)j=setTimeout(function(){c.show(e)},b.predelay);else c.show(e)}).bind(k[1],function(e){clearTimeout(j);if(b.delay)i=
setTimeout(function(){c.hide(e)},b.delay);else c.hide(e)});if(m&&b.cancelDefault){a.removeAttr("title");a.data("title",m)}f.extend(c,{show:function(e){if(!d){if(q)d=f(q);else if(b.tip)d=f(b.tip).eq(0);else if(m)d=f(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(m);else{d=a.next();d.length||(d=a.parent().next())}if(!d.length)throw"Cannot find tooltip for "+a;}if(c.isShown())return c;d.stop(true,true);var g=p(a,d,b);b.tip&&d.html(a.data("title"));e=e||f.Event();e.type="onBeforeShow";
h.trigger(e,[g]);if(e.isDefaultPrevented())return c;g=p(a,d,b);d.css({position:"absolute",top:g.top,left:g.left});l=true;r[0].call(c,function(){e.type="onShow";l="full";h.trigger(e)});g=b.events.tooltip.split(/,\s*/);if(!d.data("__set")){d.bind(g[0],function(){clearTimeout(i);clearTimeout(j)});g[1]&&!a.is("input:not(:checkbox, :radio), textarea")&&d.bind(g[1],function(n){n.relatedTarget!=a[0]&&a.trigger(k[1].split(" ")[0])});d.data("__set",true)}return c},hide:function(e){if(!d||!c.isShown())return c;
e=e||f.Event();e.type="onBeforeHide";h.trigger(e);if(!e.isDefaultPrevented()){l=false;o[b.effect][1].call(c,function(){e.type="onHide";h.trigger(e)});return c}},isShown:function(e){return e?l=="full":l},getConf:function(){return b},getTip:function(){return d},getTrigger:function(){return a}});f.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(e,g){f.isFunction(b[g])&&f(c).bind(g,b[g]);c[g]=function(n){n&&f(c).bind(g,n);return c}})}f.tools=f.tools||{version:"1.2.5"};f.tools.tooltip=
{conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,b,c){o[a]=[b,c]}};var o={toggle:[function(a){var b=this.getConf(),c=this.getTip();b=b.opacity;b<1&&c.css({opacity:b});c.show();a.call()},function(a){this.getTip().hide();
a.call()}],fade:[function(a){var b=this.getConf();this.getTip().fadeTo(b.fadeInSpeed,b.opacity,a)},function(a){this.getTip().fadeOut(this.getConf().fadeOutSpeed,a)}]};f.fn.tooltip=function(a){var b=this.data("tooltip");if(b)return b;a=f.extend(true,{},f.tools.tooltip.conf,a);if(typeof a.position=="string")a.position=a.position.split(/,?\s/);this.each(function(){b=new u(f(this),a);f(this).data("tooltip",b)});return a.api?b:this}})(jQuery);
(function(d){var i=d.tools.tooltip;d.extend(i.conf,{direction:"up",bounce:false,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!d.browser.msie});var e={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};i.addEffect("slide",function(g){var a=this.getConf(),f=this.getTip(),b=a.slideFade?{opacity:a.opacity}:{},c=e[a.direction]||e.up;b[c[1]]=c[0]+"="+a.slideOffset;a.slideFade&&f.css({opacity:0});f.show().animate(b,a.slideInSpeed,g)},function(g){var a=this.getConf(),f=a.slideOffset,
b=a.slideFade?{opacity:0}:{},c=e[a.direction]||e.up,h=""+c[0];if(a.bounce)h=h=="+"?"-":"+";b[c[1]]=h+"="+f;this.getTip().animate(b,a.slideOutSpeed,function(){d(this).hide();g.call()})})})(jQuery);


/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/jquery.touchswipe.js */
/*
 * touchSwipe - jQuery Plugin
 * http://plugins.jquery.com/project/touchSwipe
 * http://labs.skinkers.com/touchSwipe/
 *
 * Copyright (c) 2010 Matt Bryson (www.skinkers.com)
 * Licensed under the GNU GPL license
 *
 * $version: 1.2.2
 *
 * Changelog
 * $Date: 2010-12-12 (Wed, 12 Dec 2010) $
 * $version: 1.0.0
 * $version: 1.0.1 - removed multibyte comments
 *
 * $Date: 2011-21-02 (Mon, 21 Feb 2011) $
 * $version: 1.1.0 	- added allowPageScroll property to allow swiping and scrolling of page
 *					- changed handler signatures so one handler can be used for multiple events
 * $Date: 2011-23-02 (Wed, 23 Feb 2011) $
 * $version: 1.2.0 	- added click handler. This is fired if the user simply clicks and does not swipe. The event object and click target are passed to handler.
 *					- If you use the http://code.google.com/p/jquery-ui-for-ipad-and-iphone/ plugin, you can also assign jQuery mouse events to children of a touchSwipe object.
 * $version: 1.2.1 	- removed console log!
 *
 * $version: 1.2.2 	- Fixed bug where scope was not preserved in callback methods.
 *
 * A jQuery plugin to capture left, right, up and down swipes on touch devices.
 * You can capture 2 finger or 1 finger swipes, set the threshold and define either a catch all handler, or individual direction handlers.
 * Options:
 * 		swipe 		Function 	A catch all handler that is triggered for all swipe directions. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeLeft	Function 	A handler that is triggered for "left" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeRight	Function 	A handler that is triggered for "right" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeUp		Function 	A handler that is triggered for "up" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 * 		swipeDown	Function 	A handler that is triggered for "down" swipes. Handler is passed 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
 *		swipeStatus Function 	A handler triggered for every phase of the swipe. Handler is passed 4 arguments: event : The original event object, phase:The current swipe face, either "start�, "move�, "end� or "cancel�. direction : The swipe direction, either "up�, "down�, "left " or "right�.distance : The distance of the swipe.
 *		click		Function	A handler triggered when a user just clicks on the item, rather than swipes it. If they do not move, click is triggered, if they do move, it is not.
 *
 * 		fingers 	int 		Default 1. 	The number of fingers to trigger the swipe, 1 or 2.
 * 		threshold 	int  		Default 75.	The number of pixels that the user must move their finger by before it is considered a swipe.
 *		triggerOnTouchEnd Boolean Default true If true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
 *		allowPageScroll String Default "auto". How the browser handles page scrolls when the user is swiping on a touchSwipe object.
 *										"auto" : all undefined swipes will cause the page to scroll in that direction.
 *										"none" : the page will not scroll when user swipes.
 *										"horizontal" : will force page to scroll on horizontal swipes.
 *										"vertical" : will force page to scroll on vertical swipes.
 *
 * This jQuery plugin will only run on devices running Mobile Webkit based browsers (iOS 2.0+, android 2.2+)
 */
(function($)
{
	$.fn.swipe = function(options)
	{
		if (!this) return false;

		// Default thresholds & swipe functions
		var defaults = {

			fingers 		: 1,								// int - The number of fingers to trigger the swipe, 1 or 2. Default is 1.
			threshold 		: 75,								// int - The number of pixels that the user must move their finger by before it is considered a swipe. Default is 75.

			swipe 			: null,		// Function - A catch all handler that is triggered for all swipe directions. Accepts 2 arguments, the original event object and the direction of the swipe : "left", "right", "up", "down".
			swipeLeft		: null,		// Function - A handler that is triggered for "left" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeRight		: null,		// Function - A handler that is triggered for "right" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeUp			: null,		// Function - A handler that is triggered for "up" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeDown		: null,		// Function - A handler that is triggered for "down" swipes. Accepts 3 arguments, the original event object, the direction of the swipe : "left", "right", "up", "down" and the distance of the swipe.
			swipeStatus		: null,		// Function - A handler triggered for every phase of the swipe. Handler is passed 4 arguments: event : The original event object, phase:The current swipe face, either "start�, "move�, "end� or "cancel�. direction : The swipe direction, either "up�, "down�, "left " or "right�.distance : The distance of the swipe.
			click			: null,		// Function	- A handler triggered when a user just clicks on the item, rather than swipes it. If they do not move, click is triggered, if they do move, it is not.

			triggerOnTouchEnd : true,	// Boolean, if true, the swipe events are triggered when the touch end event is received (user releases finger).  If false, it will be triggered on reaching the threshold, and then cancel the touch event automatically.
			allowPageScroll : "auto" 	/* How the browser handles page scrolls when the user is swiping on a touchSwipe object.
											"auto" : all undefined swipes will cause the page to scroll in that direction.
 											"none" : the page will not scroll when user swipes.
 											"horizontal" : will force page to scroll on horizontal swipes.
 											"vertical" : will force page to scroll on vertical swipes.
										*/
		};


		//Constants
		var LEFT = "left";
		var RIGHT = "right";
		var UP = "up";
		var DOWN = "down";
		var NONE = "none";
		var HORIZONTAL = "horizontal";
		var VERTICAL = "vertical";
		var AUTO = "auto";

		var PHASE_START="start";
		var PHASE_MOVE="move";
		var PHASE_END="end";
		var PHASE_CANCEL="cancel";



		var phase="start";

		if (options.allowPageScroll==undefined && (options.swipe!=undefined || options.swipeStatus!=undefined))
			options.allowPageScroll=NONE;

		if (options)
			$.extend(defaults, options);


		/**
		 * Setup each object to detect swipe gestures
		 */
		return this.each(function()
		{
			var $this = $(this);

			var triggerElementID = null; 	// this variable is used to identity the triggering element
			var fingerCount = 0;			// the current number of fingers being used.

			//track mouse points / delta
			var start={x:0, y:0};
			var end={x:0, y:0};
			var delta={x:0, y:0};


			/**
			* Event handler for a touch start event.
			* Stops the default click event from triggering and stores where we touched
			*/
			function touchStart(event)
			{
				phase = PHASE_START;

				// get the total number of fingers touching the screen
				fingerCount = event.touches.length;

				//clear vars..
				distance=0;
				direction=null;

				// check the number of fingers is what we are looking for
				if ( fingerCount == defaults.fingers )
				{
					// get the coordinates of the touch
					start.x = end.x = event.touches[0].pageX;
					start.y = end.y = event.touches[0].pageY;

					if (defaults.swipeStatus)
						triggerHandler(event, phase);
				}
				else
				{
					//touch with more/less than the fingers we are looking for
					touchCancel(event);
				}
			}

			/**
			* Event handler for a touch move event.
			* If we change fingers during move, then cancel the event
			*/
			function touchMove(event)
			{
				if (phase == PHASE_END || phase == PHASE_CANCEL)
					return;

				end.x = event.touches[0].pageX;
				end.y = event.touches[0].pageY;

				direction = caluculateDirection();
				fingerCount = event.touches.length;

				phase = PHASE_MOVE

				//Check if we need to prevent default evnet (page scroll) or not
				validateDefaultEvent(event, direction);

				if ( fingerCount == defaults.fingers )
				{
					distance = caluculateDistance();

					if (defaults.swipeStatus)
						triggerHandler(event, phase, direction, distance);

					//If we trigger whilst dragging, not on touch end, then calculate now...
					if (!defaults.triggerOnTouchEnd)
					{
						// if the user swiped more than the minimum length, perform the appropriate action
						if ( distance >= defaults.threshold )
						{
							phase = PHASE_END;
							triggerHandler(event, phase);
							touchCancel(event); // reset the variables
						}
					}
				}
				else
				{
					phase = PHASE_CANCEL;
					triggerHandler(event, phase);
					touchCancel(event);
				}
			}

			/**
			* Event handler for a touch end event.
			* Calculate the direction and trigger events
			*/
			function touchEnd(event)
			{
				event.preventDefault();

				distance = caluculateDistance();
				direction = caluculateDirection();

				if (defaults.triggerOnTouchEnd)
				{
					phase = PHASE_END;
					// check to see if more than one finger was used and that there is an ending coordinate
					if ( fingerCount == defaults.fingers && end.x != 0 )
					{
						// if the user swiped more than the minimum length, perform the appropriate action
						if ( distance >= defaults.threshold )
						{
							triggerHandler(event, phase);
							touchCancel(event); // reset the variables
						}
						else
						{
							phase = PHASE_CANCEL;
							triggerHandler(event, phase);
							touchCancel(event);
						}
					}
					else
					{
						phase = PHASE_CANCEL;
						triggerHandler(event, phase);
						touchCancel(event);
					}
				}
				else if (phase == PHASE_MOVE)
				{
					phase = PHASE_CANCEL;
					triggerHandler(event, phase);
					touchCancel(event);
				}
			}

			/**
			* Event handler for a touch cancel event.
			* Clears current vars
			*/
			function touchCancel(event)
			{
				// reset the variables back to default values
				fingerCount = 0;

				start.x = 0;
				start.y = 0;
				end.x = 0;
				end.y = 0;
				delta.x = 0;
				delta.y = 0;
			}


			/**
			* Trigger the relevant event handler
			* The handlers are passed the original event, the element that was swiped, and in the case of the catch all handler, the direction that was swiped, "left", "right", "up", or "down"
			*/
			function triggerHandler(event, phase)
			{
				//update status
				if (defaults.swipeStatus)
					defaults.swipeStatus.call($this,event, phase, direction || null, distance || 0);


				if (phase == PHASE_CANCEL)
				{
					if (defaults.click && fingerCount==1 && (isNaN(distance) || distance==0))
						defaults.click.call($this,event, event.target);
				}

				if (phase == PHASE_END)
				{
					//trigger catch all event handler
					if (defaults.swipe)
				{

						defaults.swipe.call($this,event, direction, distance);

				}
					//trigger direction specific event handlers
					switch(direction)
					{
						case LEFT :
							if (defaults.swipeLeft)
								defaults.swipeLeft.call($this,event, direction, distance);
							break;

						case RIGHT :
							if (defaults.swipeRight)
								defaults.swipeRight.call($this,event, direction, distance);
							break;

						case UP :
							if (defaults.swipeUp)
								defaults.swipeUp.call($this,event, direction, distance);
							break;

						case DOWN :
							if (defaults.swipeDown)
								defaults.swipeDown.call($this,event, direction, distance);
							break;
					}
				}
			}


			/**
			 * Checks direction of the swipe and the value allowPageScroll to see if we should allow or prevent the default behaviour from occurring.
			 * This will essentially allow page scrolling or not when the user is swiping on a touchSwipe object.
			 */
			function validateDefaultEvent(event, direction)
			{
				if( defaults.allowPageScroll==NONE )
				{
					event.preventDefault();
				}
				else
				{
					var auto=defaults.allowPageScroll==AUTO;

					switch(direction)
					{
						case LEFT :
							if ( (defaults.swipeLeft && auto) || (!auto && defaults.allowPageScroll!=HORIZONTAL))
								event.preventDefault();
							break;

						case RIGHT :
							if ( (defaults.swipeRight && auto) || (!auto && defaults.allowPageScroll!=HORIZONTAL))
								event.preventDefault();
							break;

						case UP :
							if ( (defaults.swipeUp && auto) || (!auto && defaults.allowPageScroll!=VERTICAL))
								event.preventDefault();
							break;

						case DOWN :
							if ( (defaults.swipeDown && auto) || (!auto && defaults.allowPageScroll!=VERTICAL))
								event.preventDefault();
							break;
					}
				}

			}



			/**
			* Calcualte the length / distance of the swipe
			*/
			function caluculateDistance()
			{
				return Math.round(Math.sqrt(Math.pow(end.x - start.x,2) + Math.pow(end.y - start.y,2)));
			}

			/**
			* Calcualte the angle of the swipe
			*/
			function caluculateAngle()
			{
				var X = start.x-end.x;
				var Y = end.y-start.y;
				var r = Math.atan2(Y,X); //radians
				var angle = Math.round(r*180/Math.PI); //degrees

				//ensure value is positive
				if (angle < 0)
					angle = 360 - Math.abs(angle);

				return angle;
			}

			/**
			* Calcualte the direction of the swipe
			* This will also call caluculateAngle to get the latest angle of swipe
			*/
			function caluculateDirection()
			{
				var angle = caluculateAngle();

				if ( (angle <= 45) && (angle >= 0) )
					return LEFT;

				else if ( (angle <= 360) && (angle >= 315) )
					return LEFT;

				else if ( (angle >= 135) && (angle <= 225) )
					return RIGHT;

				else if ( (angle > 45) && (angle < 135) )
					return DOWN;

				else
					return UP;
			}







			// Add gestures to all swipable areas
			this.addEventListener("touchstart", touchStart, false);
			this.addEventListener("touchmove", touchMove, false);
			this.addEventListener("touchend", touchEnd, false);
			this.addEventListener("touchcancel", touchCancel, false);


		});
	};




})(jQuery);

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/jscrollpane.js */
/*!
 * jScrollPane - v2.0.0beta11 - 2011-07-04
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */

// Script: jScrollPane - cross browser customisable scrollbars
//
// *Version: 2.0.0beta11, Last updated: 2011-07-04*
//
// Project Home - http://jscrollpane.kelvinluck.com/
// GitHub       - http://github.com/vitch/jScrollPane
// Source       - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.js
// (Minified)   - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.min.js
//
// About: License
//
// Copyright (c) 2011 Kelvin Luck
// Dual licensed under the MIT or GPL Version 2 licenses.
// http://jscrollpane.kelvinluck.com/MIT-LICENSE.txt
// http://jscrollpane.kelvinluck.com/GPL-LICENSE.txt
//
// About: Examples
//
// All examples and demos are available through the jScrollPane example site at:
// http://jscrollpane.kelvinluck.com/
//
// About: Support and Testing
//
// This plugin is tested on the browsers below and has been found to work reliably on them. If you run
// into a problem on one of the supported browsers then please visit the support section on the jScrollPane
// website (http://jscrollpane.kelvinluck.com/) for more information on getting support. You are also
// welcome to fork the project on GitHub if you can contribute a fix for a given issue.
//
// jQuery Versions - tested in 1.4.2+ - reported to work in 1.3.x
// Browsers Tested - Firefox 3.6.8, Safari 5, Opera 10.6, Chrome 5.0, IE 6, 7, 8
//
// About: Release History
//
// 2.0.0beta11 - (in progress)
// 2.0.0beta10 - (2011-04-17) cleaner required size calculation, improved keyboard support, stickToBottom/Left, other small fixes
// 2.0.0beta9 - (2011-01-31) new API methods, bug fixes and correct keyboard support for FF/OSX
// 2.0.0beta8 - (2011-01-29) touchscreen support, improved keyboard support
// 2.0.0beta7 - (2011-01-23) scroll speed consistent (thanks Aivo Paas)
// 2.0.0beta6 - (2010-12-07) scrollToElement horizontal support
// 2.0.0beta5 - (2010-10-18) jQuery 1.4.3 support, various bug fixes
// 2.0.0beta4 - (2010-09-17) clickOnTrack support, bug fixes
// 2.0.0beta3 - (2010-08-27) Horizontal mousewheel, mwheelIntent, keyboard support, bug fixes
// 2.0.0beta2 - (2010-08-21) Bug fixes
// 2.0.0beta1 - (2010-08-17) Rewrite to follow modern best practices and enable horizontal scrolling, initially hidden
//							 elements and dynamically sized elements.
// 1.x - (2006-12-31 - 2010-07-31) Initial version, hosted at googlecode, deprecated

(function($,window,undefined){

	$.fn.jScrollPane = function(settings)
	{
		// JScrollPane "class" - public methods are available through $('selector').data('jsp')
		function JScrollPane(elem, s)
		{
			var settings, jsp = this, pane, paneWidth, paneHeight, container, contentWidth, contentHeight,
				percentInViewH, percentInViewV, isScrollableV, isScrollableH, verticalDrag, dragMaxY,
				verticalDragPosition, horizontalDrag, dragMaxX, horizontalDragPosition,
				verticalBar, verticalTrack, scrollbarWidth, verticalTrackHeight, verticalDragHeight, arrowUp, arrowDown,
				horizontalBar, horizontalTrack, horizontalTrackWidth, horizontalDragWidth, arrowLeft, arrowRight,
				reinitialiseInterval, originalPadding, originalPaddingTotalWidth, previousContentWidth,
				wasAtTop = true, wasAtLeft = true, wasAtBottom = false, wasAtRight = false,
				originalElement = elem.clone(false, false).empty(),
				mwEvent = $.fn.mwheelIntent ? 'mwheelIntent.jsp' : 'mousewheel.jsp';

			originalPadding = elem.css('paddingTop') + ' ' +
								elem.css('paddingRight') + ' ' +
								elem.css('paddingBottom') + ' ' +
								elem.css('paddingLeft');
			originalPaddingTotalWidth = (parseInt(elem.css('paddingLeft'), 10) || 0) +
										(parseInt(elem.css('paddingRight'), 10) || 0);

			function initialise(s)
			{

				var /*firstChild, lastChild, */isMaintainingPositon, lastContentX, lastContentY,
						hasContainingSpaceChanged, originalScrollTop, originalScrollLeft,
						maintainAtBottom = false, maintainAtRight = false;

				settings = s;

				if (pane === undefined) {
					originalScrollTop = elem.scrollTop();
					originalScrollLeft = elem.scrollLeft();

					elem.css(
						{
							overflow: 'hidden',
							padding: 0
						}
					);
					// TODO: Deal with where width/ height is 0 as it probably means the element is hidden and we should
					// come back to it later and check once it is unhidden...
					paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
					paneHeight = elem.innerHeight();

					elem.width(paneWidth);

					pane = $('<div class="jspPane" />').css('padding', originalPadding).append(elem.children());
					container = $('<div class="jspContainer" />')
						.css({
							'width': paneWidth + 'px',
							'height': paneHeight + 'px'
						}
					).append(pane).appendTo(elem);

					/*
					// Move any margins from the first and last children up to the container so they can still
					// collapse with neighbouring elements as they would before jScrollPane
					firstChild = pane.find(':first-child');
					lastChild = pane.find(':last-child');
					elem.css(
						{
							'margin-top': firstChild.css('margin-top'),
							'margin-bottom': lastChild.css('margin-bottom')
						}
					);
					firstChild.css('margin-top', 0);
					lastChild.css('margin-bottom', 0);
					*/
				} else {
					elem.css('width', '');

					maintainAtBottom = settings.stickToBottom && isCloseToBottom();
					maintainAtRight  = settings.stickToRight  && isCloseToRight();

					hasContainingSpaceChanged = elem.innerWidth() + originalPaddingTotalWidth != paneWidth || elem.outerHeight() != paneHeight;

					if (hasContainingSpaceChanged) {
						paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
						paneHeight = elem.innerHeight();
						container.css({
							width: paneWidth + 'px',
							height: paneHeight + 'px'
						});
					}

					// If nothing changed since last check...
					if (!hasContainingSpaceChanged && previousContentWidth == contentWidth && pane.outerHeight() == contentHeight) {
						elem.width(paneWidth);
						return;
					}
					previousContentWidth = contentWidth;

					pane.css('width', '');
					elem.width(paneWidth);

					container.find('>.jspVerticalBar,>.jspHorizontalBar').remove().end();
				}

				pane.css('overflow', 'auto');
				if (s.contentWidth) {
					contentWidth = s.contentWidth;
				} else {
					contentWidth = pane[0].scrollWidth;
				}
				contentHeight = pane[0].scrollHeight;
				pane.css('overflow', '');

				percentInViewH = contentWidth / paneWidth;
				percentInViewV = contentHeight / paneHeight;
				isScrollableV = percentInViewV > 1;

				isScrollableH = percentInViewH > 1;

				//console.log(paneWidth, paneHeight, contentWidth, contentHeight, percentInViewH, percentInViewV, isScrollableH, isScrollableV);

				if (!(isScrollableH || isScrollableV)) {
					elem.removeClass('jspScrollable');
					pane.css({
						top: 0,
						width: container.width() - originalPaddingTotalWidth
					});
					removeMousewheel();
					removeFocusHandler();
					removeKeyboardNav();
					removeClickOnTrack();
					unhijackInternalLinks();
				} else {
					elem.addClass('jspScrollable');

					isMaintainingPositon = settings.maintainPosition && (verticalDragPosition || horizontalDragPosition);
					if (isMaintainingPositon) {
						lastContentX = contentPositionX();
						lastContentY = contentPositionY();
					}

					initialiseVerticalScroll();
					initialiseHorizontalScroll();
					resizeScrollbars();

					if (isMaintainingPositon) {
						scrollToX(maintainAtRight  ? (contentWidth  - paneWidth ) : lastContentX, false);
						scrollToY(maintainAtBottom ? (contentHeight - paneHeight) : lastContentY, false);
					}

					initFocusHandler();
					initMousewheel();
					initTouch();

					if (settings.enableKeyboardNavigation) {
						initKeyboardNav();
					}
					if (settings.clickOnTrack) {
						initClickOnTrack();
					}

					observeHash();
					if (settings.hijackInternalLinks) {
						hijackInternalLinks();
					}
				}

				if (settings.autoReinitialise && !reinitialiseInterval) {
					reinitialiseInterval = setInterval(
						function()
						{
							initialise(settings);
						},
						settings.autoReinitialiseDelay
					);
				} else if (!settings.autoReinitialise && reinitialiseInterval) {
					clearInterval(reinitialiseInterval);
				}

				originalScrollTop && elem.scrollTop(0) && scrollToY(originalScrollTop, false);
				originalScrollLeft && elem.scrollLeft(0) && scrollToX(originalScrollLeft, false);

				elem.trigger('jsp-initialised', [isScrollableH || isScrollableV]);
			}

			function initialiseVerticalScroll()
			{
				if (isScrollableV) {

					container.append(
						$('<div class="jspVerticalBar" />').append(
							$('<div class="jspCap jspCapTop" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragTop" />'),
									$('<div class="jspDragBottom" />')
								)
							),
							$('<div class="jspCap jspCapBottom" />')
						)
					);

					verticalBar = container.find('>.jspVerticalBar');
					verticalTrack = verticalBar.find('>.jspTrack');
					verticalDrag = verticalTrack.find('>.jspDrag');

					if (settings.showArrows) {
						arrowUp = $('<a class="jspArrow jspArrowUp" />').bind(
							'mousedown.jsp', getArrowScroll(0, -1)
						).bind('click.jsp', nil);
						arrowDown = $('<a class="jspArrow jspArrowDown" />').bind(
							'mousedown.jsp', getArrowScroll(0, 1)
						).bind('click.jsp', nil);
						if (settings.arrowScrollOnHover) {
							arrowUp.bind('mouseover.jsp', getArrowScroll(0, -1, arrowUp));
							arrowDown.bind('mouseover.jsp', getArrowScroll(0, 1, arrowDown));
						}

						appendArrows(verticalTrack, settings.verticalArrowPositions, arrowUp, arrowDown);
					}

					verticalTrackHeight = paneHeight;
					container.find('>.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow').each(
						function()
						{
							verticalTrackHeight -= $(this).outerHeight();
						}
					);


					verticalDrag.hover(
						function()
						{
							verticalDrag.addClass('jspHover');
						},
						function()
						{
							verticalDrag.removeClass('jspHover');
						}
					).bind(
						'mousedown.jsp',
						function(e)
						{
							// Stop IE from allowing text selection
							$('html').bind('dragstart.jsp selectstart.jsp', nil);

							verticalDrag.addClass('jspActive');

							var startY = e.pageY - verticalDrag.position().top;

							$('html').bind(
								'mousemove.jsp',
								function(e)
								{
									positionDragY(e.pageY - startY, false);
								}
							).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
							return false;
						}
					);
					sizeVerticalScrollbar();
				}
			}

			function sizeVerticalScrollbar()
			{
				verticalTrack.height(verticalTrackHeight + 'px');
				verticalDragPosition = 0;
				scrollbarWidth = settings.verticalGutter + verticalTrack.outerWidth();

				// Make the pane thinner to allow for the vertical scrollbar
				pane.width(paneWidth - scrollbarWidth - originalPaddingTotalWidth);

				// Add margin to the left of the pane if scrollbars are on that side (to position
				// the scrollbar on the left or right set it's left or right property in CSS)
				try {
					if (verticalBar.position().left === 0) {
						pane.css('margin-left', scrollbarWidth + 'px');
					}
				} catch (err) {
				}
			}

			function initialiseHorizontalScroll()
			{
				if (isScrollableH) {

					container.append(
						$('<div class="jspHorizontalBar" />').append(
							$('<div class="jspCap jspCapLeft" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragLeft" />'),
									$('<div class="jspDragRight" />')
								)
							),
							$('<div class="jspCap jspCapRight" />')
						)
					);

					horizontalBar = container.find('>.jspHorizontalBar');
					horizontalTrack = horizontalBar.find('>.jspTrack');
					horizontalDrag = horizontalTrack.find('>.jspDrag');

					if (settings.showArrows) {
						arrowLeft = $('<a class="jspArrow jspArrowLeft" />').bind(
							'mousedown.jsp', getArrowScroll(-1, 0)
						).bind('click.jsp', nil);
						arrowRight = $('<a class="jspArrow jspArrowRight" />').bind(
							'mousedown.jsp', getArrowScroll(1, 0)
						).bind('click.jsp', nil);
						if (settings.arrowScrollOnHover) {
							arrowLeft.bind('mouseover.jsp', getArrowScroll(-1, 0, arrowLeft));
							arrowRight.bind('mouseover.jsp', getArrowScroll(1, 0, arrowRight));
						}
						appendArrows(horizontalTrack, settings.horizontalArrowPositions, arrowLeft, arrowRight);
					}

					horizontalDrag.hover(
						function()
						{
							horizontalDrag.addClass('jspHover');
						},
						function()
						{
							horizontalDrag.removeClass('jspHover');
						}
					).bind(
						'mousedown.jsp',
						function(e)
						{
							// Stop IE from allowing text selection
							$('html').bind('dragstart.jsp selectstart.jsp', nil);

							horizontalDrag.addClass('jspActive');

							var startX = e.pageX - horizontalDrag.position().left;

							$('html').bind(
								'mousemove.jsp',
								function(e)
								{
									positionDragX(e.pageX - startX, false);
								}
							).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
							return false;
						}
					);
					horizontalTrackWidth = container.innerWidth();
					sizeHorizontalScrollbar();
				}
			}

			function sizeHorizontalScrollbar()
			{
				container.find('>.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow').each(
					function()
					{
						horizontalTrackWidth -= $(this).outerWidth();
					}
				);

				horizontalTrack.width(horizontalTrackWidth + 'px');
				horizontalDragPosition = 0;
			}

			function resizeScrollbars()
			{
				if (isScrollableH && isScrollableV) {
					var horizontalTrackHeight = horizontalTrack.outerHeight(),
						verticalTrackWidth = verticalTrack.outerWidth();
					verticalTrackHeight -= horizontalTrackHeight;
					$(horizontalBar).find('>.jspCap:visible,>.jspArrow').each(
						function()
						{
							horizontalTrackWidth += $(this).outerWidth();
						}
					);
					horizontalTrackWidth -= verticalTrackWidth;
					paneHeight -= verticalTrackWidth;
					paneWidth -= horizontalTrackHeight;
					horizontalTrack.parent().append(
						$('<div class="jspCorner" />').css('width', horizontalTrackHeight + 'px')
					);
					sizeVerticalScrollbar();
					sizeHorizontalScrollbar();
				}
				// reflow content
				if (isScrollableH) {
					pane.width((container.outerWidth() - originalPaddingTotalWidth) + 'px');
				}
				contentHeight = pane.outerHeight();
				percentInViewV = contentHeight / paneHeight;

				if (isScrollableH) {
					horizontalDragWidth = Math.ceil(1 / percentInViewH * horizontalTrackWidth);
					if (horizontalDragWidth > settings.horizontalDragMaxWidth) {
						horizontalDragWidth = settings.horizontalDragMaxWidth;
					} else if (horizontalDragWidth < settings.horizontalDragMinWidth) {
						horizontalDragWidth = settings.horizontalDragMinWidth;
					}
					horizontalDrag.width(horizontalDragWidth + 'px');
					dragMaxX = horizontalTrackWidth - horizontalDragWidth;
					_positionDragX(horizontalDragPosition); // To update the state for the arrow buttons
				}
				if (isScrollableV) {
					verticalDragHeight = Math.ceil(1 / percentInViewV * verticalTrackHeight);
					if (verticalDragHeight > settings.verticalDragMaxHeight) {
						verticalDragHeight = settings.verticalDragMaxHeight;
					} else if (verticalDragHeight < settings.verticalDragMinHeight) {
						verticalDragHeight = settings.verticalDragMinHeight;
					}
					verticalDragHeight = 44;
					verticalDrag.height(verticalDragHeight + 'px');
					dragMaxY = verticalTrackHeight - verticalDragHeight;
					_positionDragY(verticalDragPosition); // To update the state for the arrow buttons
				}
			}

			function appendArrows(ele, p, a1, a2)
			{
				var p1 = "before", p2 = "after", aTemp;

				// Sniff for mac... Is there a better way to determine whether the arrows would naturally appear
				// at the top or the bottom of the bar?
				if (p == "os") {
					p = /Mac/.test(navigator.platform) ? "after" : "split";
				}
				if (p == p1) {
					p2 = p;
				} else if (p == p2) {
					p1 = p;
					aTemp = a1;
					a1 = a2;
					a2 = aTemp;
				}

				ele[p1](a1)[p2](a2);
			}

			function getArrowScroll(dirX, dirY, ele)
			{
				return function()
				{
					arrowScroll(dirX, dirY, this, ele);
					this.blur();
					return false;
				};
			}

			function arrowScroll(dirX, dirY, arrow, ele)
			{
				arrow = $(arrow).addClass('jspActive');

				var eve,
					scrollTimeout,
					isFirst = true,
					doScroll = function()
					{
						if (dirX !== 0) {
							jsp.scrollByX(dirX * settings.arrowButtonSpeed);
						}
						if (dirY !== 0) {
							jsp.scrollByY(dirY * settings.arrowButtonSpeed);
						}
						scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.arrowRepeatFreq);
						isFirst = false;
					};

				doScroll();

				eve = ele ? 'mouseout.jsp' : 'mouseup.jsp';
				ele = ele || $('html');
				ele.bind(
					eve,
					function()
					{
						arrow.removeClass('jspActive');
						scrollTimeout && clearTimeout(scrollTimeout);
						scrollTimeout = null;
						ele.unbind(eve);
					}
				);
			}

			function initClickOnTrack()
			{
				removeClickOnTrack();
				if (isScrollableV) {
					verticalTrack.bind(
						'mousedown.jsp',
						function(e)
						{
							if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
								var clickedTrack = $(this),
									offset = clickedTrack.offset(),
									direction = e.pageY - offset.top - verticalDragPosition,
									scrollTimeout,
									isFirst = true,
									doScroll = function()
									{
										var offset = clickedTrack.offset(),
											pos = e.pageY - offset.top - verticalDragHeight / 2,
											contentDragY = paneHeight * settings.scrollPagePercent,
											dragY = dragMaxY * contentDragY / (contentHeight - paneHeight);
										if (direction < 0) {
											if (verticalDragPosition - dragY > pos) {
												jsp.scrollByY(-contentDragY);
											} else {
												positionDragY(pos);
											}
										} else if (direction > 0) {
											if (verticalDragPosition + dragY < pos) {
												jsp.scrollByY(contentDragY);
											} else {
												positionDragY(pos);
											}
										} else {
											cancelClick();
											return;
										}
										scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
										isFirst = false;
									},
									cancelClick = function()
									{
										scrollTimeout && clearTimeout(scrollTimeout);
										scrollTimeout = null;
										$(document).unbind('mouseup.jsp', cancelClick);
									};
								doScroll();
								$(document).bind('mouseup.jsp', cancelClick);
								return false;
							}
						}
					);
				}

				if (isScrollableH) {
					horizontalTrack.bind(
						'mousedown.jsp',
						function(e)
						{
							if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
								var clickedTrack = $(this),
									offset = clickedTrack.offset(),
									direction = e.pageX - offset.left - horizontalDragPosition,
									scrollTimeout,
									isFirst = true,
									doScroll = function()
									{
										var offset = clickedTrack.offset(),
											pos = e.pageX - offset.left - horizontalDragWidth / 2,
											contentDragX = paneWidth * settings.scrollPagePercent,
											dragX = dragMaxX * contentDragX / (contentWidth - paneWidth);
										if (direction < 0) {
											if (horizontalDragPosition - dragX > pos) {
												jsp.scrollByX(-contentDragX);
											} else {
												positionDragX(pos);
											}
										} else if (direction > 0) {
											if (horizontalDragPosition + dragX < pos) {
												jsp.scrollByX(contentDragX);
											} else {
												positionDragX(pos);
											}
										} else {
											cancelClick();
											return;
										}
										scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
										isFirst = false;
									},
									cancelClick = function()
									{
										scrollTimeout && clearTimeout(scrollTimeout);
										scrollTimeout = null;
										$(document).unbind('mouseup.jsp', cancelClick);
									};
								doScroll();
								$(document).bind('mouseup.jsp', cancelClick);
								return false;
							}
						}
					);
				}
			}

			function removeClickOnTrack()
			{
				if (horizontalTrack) {
					horizontalTrack.unbind('mousedown.jsp');
				}
				if (verticalTrack) {
					verticalTrack.unbind('mousedown.jsp');
				}
			}

			function cancelDrag()
			{
				$('html').unbind('dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp');

				if (verticalDrag) {
					verticalDrag.removeClass('jspActive');
				}
				if (horizontalDrag) {
					horizontalDrag.removeClass('jspActive');
				}
			}

			function positionDragY(destY, animate)
			{
				if (!isScrollableV) {
					return;
				}
				if (destY < 0) {
					destY = 0;
				} else if (destY > dragMaxY) {
					destY = dragMaxY;
				}

				// can't just check if(animate) because false is a valid value that could be passed in...
				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(verticalDrag, 'top', destY,	_positionDragY);
				} else {
					verticalDrag.css('top', destY);
					_positionDragY(destY);
				}

			}

			function _positionDragY(destY)
			{
				if (destY === undefined) {
					destY = verticalDrag.position().top;
				}

				container.scrollTop(0);
				verticalDragPosition = destY;

				var isAtTop = verticalDragPosition === 0,
					isAtBottom = verticalDragPosition == dragMaxY,
					percentScrolled = destY/ dragMaxY,
					destTop = -percentScrolled * (contentHeight - paneHeight);

				if (wasAtTop != isAtTop || wasAtBottom != isAtBottom) {
					wasAtTop = isAtTop;
					wasAtBottom = isAtBottom;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}

				updateVerticalArrows(isAtTop, isAtBottom);
				pane.css('top', destTop);
				elem.trigger('jsp-scroll-y', [-destTop, isAtTop, isAtBottom]).trigger('scroll');
			}

			function positionDragX(destX, animate)
			{
				if (!isScrollableH) {
					return;
				}
				if (destX < 0) {
					destX = 0;
				} else if (destX > dragMaxX) {
					destX = dragMaxX;
				}

				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(horizontalDrag, 'left', destX,	_positionDragX);
				} else {
					horizontalDrag.css('left', destX);
					_positionDragX(destX);
				}
			}

			function _positionDragX(destX)
			{
				if (destX === undefined) {
					destX = horizontalDrag.position().left;
				}

				container.scrollTop(0);
				horizontalDragPosition = destX;

				var isAtLeft = horizontalDragPosition === 0,
					isAtRight = horizontalDragPosition == dragMaxX,
					percentScrolled = destX / dragMaxX,
					destLeft = -percentScrolled * (contentWidth - paneWidth);

				if (wasAtLeft != isAtLeft || wasAtRight != isAtRight) {
					wasAtLeft = isAtLeft;
					wasAtRight = isAtRight;
					elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
				}

				updateHorizontalArrows(isAtLeft, isAtRight);
				pane.css('left', destLeft);
				elem.trigger('jsp-scroll-x', [-destLeft, isAtLeft, isAtRight]).trigger('scroll');
			}

			function updateVerticalArrows(isAtTop, isAtBottom)
			{
				if (settings.showArrows) {
					arrowUp[isAtTop ? 'addClass' : 'removeClass']('jspDisabled');
					arrowDown[isAtBottom ? 'addClass' : 'removeClass']('jspDisabled');
				}
			}

			function updateHorizontalArrows(isAtLeft, isAtRight)
			{
				if (settings.showArrows) {
					arrowLeft[isAtLeft ? 'addClass' : 'removeClass']('jspDisabled');
					arrowRight[isAtRight ? 'addClass' : 'removeClass']('jspDisabled');
				}
			}

			function scrollToY(destY, animate)
			{
				var percentScrolled = destY / (contentHeight - paneHeight);
				positionDragY(percentScrolled * dragMaxY, animate);
			}

			function scrollToX(destX, animate)
			{
				var percentScrolled = destX / (contentWidth - paneWidth);
				positionDragX(percentScrolled * dragMaxX, animate);
			}

			function scrollToElement(ele, stickToTop, animate)
			{
				var e, eleHeight, eleWidth, eleTop = 0, eleLeft = 0, viewportTop, viewportLeft, maxVisibleEleTop, maxVisibleEleLeft, destY, destX;

				// Legal hash values aren't necessarily legal jQuery selectors so we need to catch any
				// errors from the lookup...
				try {
					e = $(ele);
				} catch (err) {
					return;
				}
				eleHeight = e.outerHeight();
				eleWidth= e.outerWidth();

				container.scrollTop(0);
				container.scrollLeft(0);

				// loop through parents adding the offset top of any elements that are relatively positioned between
				// the focused element and the jspPane so we can get the true distance from the top
				// of the focused element to the top of the scrollpane...
				while (!e.is('.jspPane')) {
					eleTop += e.position().top;
					eleLeft += e.position().left;
					e = e.offsetParent();
					if (/^body|html$/i.test(e[0].nodeName)) {
						// we ended up too high in the document structure. Quit!
						return;
					}
				}

				viewportTop = contentPositionY();
				maxVisibleEleTop = viewportTop + paneHeight;
				if (eleTop < viewportTop || stickToTop) { // element is above viewport
					destY = eleTop - settings.verticalGutter;
				} else if (eleTop + eleHeight > maxVisibleEleTop) { // element is below viewport
					destY = eleTop - paneHeight + eleHeight + settings.verticalGutter;
				}
				if (destY) {
					scrollToY(destY, animate);
				}

				viewportLeft = contentPositionX();
	            maxVisibleEleLeft = viewportLeft + paneWidth;
	            if (eleLeft < viewportLeft || stickToTop) { // element is to the left of viewport
	                destX = eleLeft - settings.horizontalGutter;
	            } else if (eleLeft + eleWidth > maxVisibleEleLeft) { // element is to the right viewport
	                destX = eleLeft - paneWidth + eleWidth + settings.horizontalGutter;
	            }
	            if (destX) {
	                scrollToX(destX, animate);
	            }

			}

			function contentPositionX()
			{
				return -pane.position().left;
			}

			function contentPositionY()
			{
				return -pane.position().top;
			}

			function isCloseToBottom()
			{
				var scrollableHeight = contentHeight - paneHeight;
				return (scrollableHeight > 20) && (scrollableHeight - contentPositionY() < 10);
			}

			function isCloseToRight()
			{
				var scrollableWidth = contentWidth - paneWidth;
				return (scrollableWidth > 20) && (scrollableWidth - contentPositionX() < 10);
			}

			function initMousewheel()
			{
				container.unbind(mwEvent).bind(
					mwEvent,
					function (event, delta, deltaX, deltaY) {
						var dX = horizontalDragPosition, dY = verticalDragPosition;
						jsp.scrollBy(deltaX * settings.mouseWheelSpeed, -deltaY * settings.mouseWheelSpeed, false);
						// return true if there was no movement so rest of screen can scroll
						return dX == horizontalDragPosition && dY == verticalDragPosition;
					}
				);
			}

			function removeMousewheel()
			{
				container.unbind(mwEvent);
			}

			function nil()
			{
				return false;
			}

			function initFocusHandler()
			{
				pane.find(':input,a').unbind('focus.jsp').bind(
					'focus.jsp',
					function(e)
					{
						scrollToElement(e.target, false);
					}
				);
			}

			function removeFocusHandler()
			{
				pane.find(':input,a').unbind('focus.jsp');
			}

			function initKeyboardNav()
			{
				var keyDown, elementHasScrolled, validParents = [];
				isScrollableH && validParents.push(horizontalBar[0]);
				isScrollableV && validParents.push(verticalBar[0]);

				// IE also focuses elements that don't have tabindex set.
				pane.focus(
					function()
					{
						elem.focus();
					}
				);

				elem.attr('tabindex', 0)
					.unbind('keydown.jsp keypress.jsp')
					.bind(
						'keydown.jsp',
						function(e)
						{
							if (e.target !== this && !(validParents.length && $(e.target).closest(validParents).length)){
								return;
							}
							var dX = horizontalDragPosition, dY = verticalDragPosition;
							switch(e.keyCode) {
								case 40: // down
								case 38: // up
								case 34: // page down
								case 32: // space
								case 33: // page up
								case 39: // right
								case 37: // left
									keyDown = e.keyCode;
									keyDownHandler();
									break;
								case 35: // end
									scrollToY(contentHeight - paneHeight);
									keyDown = null;
									break;
								case 36: // home
									scrollToY(0);
									keyDown = null;
									break;
							}

							elementHasScrolled = e.keyCode == keyDown && dX != horizontalDragPosition || dY != verticalDragPosition;
							return !elementHasScrolled;
						}
					).bind(
						'keypress.jsp', // For FF/ OSX so that we can cancel the repeat key presses if the JSP scrolls...
						function(e)
						{
							if (e.keyCode == keyDown) {
								keyDownHandler();
							}
							return !elementHasScrolled;
						}
					);

				if (settings.hideFocus) {
					elem.css('outline', 'none');
					if ('hideFocus' in container[0]){
						elem.attr('hideFocus', true);
					}
				} else {
					elem.css('outline', '');
					if ('hideFocus' in container[0]){
						elem.attr('hideFocus', false);
					}
				}

				function keyDownHandler()
				{
					var dX = horizontalDragPosition, dY = verticalDragPosition;
					switch(keyDown) {
						case 40: // down
							jsp.scrollByY(settings.keyboardSpeed, false);
							break;
						case 38: // up
							jsp.scrollByY(-settings.keyboardSpeed, false);
							break;
						case 34: // page down
						case 32: // space
							jsp.scrollByY(paneHeight * settings.scrollPagePercent, false);
							break;
						case 33: // page up
							jsp.scrollByY(-paneHeight * settings.scrollPagePercent, false);
							break;
						case 39: // right
							jsp.scrollByX(settings.keyboardSpeed, false);
							break;
						case 37: // left
							jsp.scrollByX(-settings.keyboardSpeed, false);
							break;
					}

					elementHasScrolled = dX != horizontalDragPosition || dY != verticalDragPosition;
					return elementHasScrolled;
				}
			}

			function removeKeyboardNav()
			{
				elem.attr('tabindex', '-1')
					.removeAttr('tabindex')
					.unbind('keydown.jsp keypress.jsp');
			}

			function observeHash()
			{
				if (location.hash && location.hash.length > 1) {
					var e,
						retryInt,
						hash = escape(location.hash) // hash must be escaped to prevent XSS
						;
					try {
						e = $(hash);
					} catch (err) {
						return;
					}

					if (e.length && pane.find(hash)) {
						// nasty workaround but it appears to take a little while before the hash has done its thing
						// to the rendered page so we just wait until the container's scrollTop has been messed up.
						if (container.scrollTop() === 0) {
							retryInt = setInterval(
								function()
								{
									if (container.scrollTop() > 0) {
										scrollToElement(hash, true);
										$(document).scrollTop(container.position().top);
										clearInterval(retryInt);
									}
								},
								50
							);
						} else {
							scrollToElement(hash, true);
							$(document).scrollTop(container.position().top);
						}
					}
				}
			}

			function unhijackInternalLinks()
			{
				$('a.jspHijack').unbind('click.jsp-hijack').removeClass('jspHijack');
			}

			function hijackInternalLinks()
			{
				unhijackInternalLinks();
				$('a[href^=#]').addClass('jspHijack').bind(
					'click.jsp-hijack',
					function()
					{
						var uriParts = this.href.split('#'), hash;
						if (uriParts.length > 1) {
							hash = uriParts[1];
							if (hash.length > 0 && pane.find('#' + hash).length > 0) {
								scrollToElement('#' + hash, true);
								// Need to return false otherwise things mess up... Would be nice to maybe also scroll
								// the window to the top of the scrollpane?
								return false;
							}
						}
					}
				);
			}

			// Init touch on iPad, iPhone, iPod, Android
			function initTouch()
			{
				var startX,
					startY,
					touchStartX,
					touchStartY,
					moved,
					moving = false;

				container.unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind(
					'touchstart.jsp',
					function(e)
					{
						var touch = e.originalEvent.touches[0];
						startX = contentPositionX();
						startY = contentPositionY();
						touchStartX = touch.pageX;
						touchStartY = touch.pageY;
						moved = false;
						moving = true;
					}
				).bind(
					'touchmove.jsp',
					function(ev)
					{
						if(!moving) {
							return;
						}

						var touchPos = ev.originalEvent.touches[0],
							dX = horizontalDragPosition, dY = verticalDragPosition;

						jsp.scrollTo(startX + touchStartX - touchPos.pageX, startY + touchStartY - touchPos.pageY);

						moved = moved || Math.abs(touchStartX - touchPos.pageX) > 5 || Math.abs(touchStartY - touchPos.pageY) > 5;

						// return true if there was no movement so rest of screen can scroll
						return dX == horizontalDragPosition && dY == verticalDragPosition;
					}
				).bind(
					'touchend.jsp',
					function(e)
					{
						moving = false;
						/*if(moved) {
							return false;
						}*/
					}
				).bind(
					'click.jsp-touchclick',
					function(e)
					{
						if(moved) {
							moved = false;
							return false;
						}
					}
				);
			}

			function destroy(){
				var currentY = contentPositionY(),
					currentX = contentPositionX();
				elem.removeClass('jspScrollable').unbind('.jsp');
				elem.replaceWith(originalElement.append(pane.children()));
				originalElement.scrollTop(currentY);
				originalElement.scrollLeft(currentX);
			}

			// Public API
			$.extend(
				jsp,
				{
					// Reinitialises the scroll pane (if it's internal dimensions have changed since the last time it
					// was initialised). The settings object which is passed in will override any settings from the
					// previous time it was initialised - if you don't pass any settings then the ones from the previous
					// initialisation will be used.
					reinitialise: function(s)
					{
						s = $.extend({}, settings, s);
						initialise(s);
					},
					// Scrolls the specified element (a jQuery object, DOM node or jQuery selector string) into view so
					// that it can be seen within the viewport. If stickToTop is true then the element will appear at
					// the top of the viewport, if it is false then the viewport will scroll as little as possible to
					// show the element. You can also specify if you want animation to occur. If you don't provide this
					// argument then the animateScroll value from the settings object is used instead.
					scrollToElement: function(ele, stickToTop, animate)
					{
						scrollToElement(ele, stickToTop, animate);
					},
					// Scrolls the pane so that the specified co-ordinates within the content are at the top left
					// of the viewport. animate is optional and if not passed then the value of animateScroll from
					// the settings object this jScrollPane was initialised with is used.
					scrollTo: function(destX, destY, animate)
					{
						scrollToX(destX, animate);
						scrollToY(destY, animate);
					},
					// Scrolls the pane so that the specified co-ordinate within the content is at the left of the
					// viewport. animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					scrollToX: function(destX, animate)
					{
						scrollToX(destX, animate);
					},
					// Scrolls the pane so that the specified co-ordinate within the content is at the top of the
					// viewport. animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					scrollToY: function(destY, animate)
					{
						scrollToY(destY, animate);
					},
					// Scrolls the pane to the specified percentage of its maximum horizontal scroll position. animate
					// is optional and if not passed then the value of animateScroll from the settings object this
					// jScrollPane was initialised with is used.
					scrollToPercentX: function(destPercentX, animate)
					{
						scrollToX(destPercentX * (contentWidth - paneWidth), animate);
					},
					// Scrolls the pane to the specified percentage of its maximum vertical scroll position. animate
					// is optional and if not passed then the value of animateScroll from the settings object this
					// jScrollPane was initialised with is used.
					scrollToPercentY: function(destPercentY, animate)
					{
						scrollToY(destPercentY * (contentHeight - paneHeight), animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollBy: function(deltaX, deltaY, animate)
					{
						jsp.scrollByX(deltaX, animate);
						jsp.scrollByY(deltaY, animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollByX: function(deltaX, animate)
					{
						var destX = contentPositionX() + Math[deltaX<0 ? 'floor' : 'ceil'](deltaX),
							percentScrolled = destX / (contentWidth - paneWidth);
						positionDragX(percentScrolled * dragMaxX, animate);
					},
					// Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
					// the value of animateScroll from the settings object this jScrollPane was initialised with is used.
					scrollByY: function(deltaY, animate)
					{
						var destY = contentPositionY() + Math[deltaY<0 ? 'floor' : 'ceil'](deltaY),
							percentScrolled = destY / (contentHeight - paneHeight);
						positionDragY(percentScrolled * dragMaxY, animate);
					},
					// Positions the horizontal drag at the specified x position (and updates the viewport to reflect
					// this). animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					positionDragX: function(x, animate)
					{
						positionDragX(x, animate);
					},
					// Positions the vertical drag at the specified y position (and updates the viewport to reflect
					// this). animate is optional and if not passed then the value of animateScroll from the settings
					// object this jScrollPane was initialised with is used.
					positionDragY: function(y, animate)
					{
						positionDragY(y, animate);
					},
					// This method is called when jScrollPane is trying to animate to a new position. You can override
					// it if you want to provide advanced animation functionality. It is passed the following arguments:
					//  * ele          - the element whose position is being animated
					//  * prop         - the property that is being animated
					//  * value        - the value it's being animated to
					//  * stepCallback - a function that you must execute each time you update the value of the property
					// You can use the default implementation (below) as a starting point for your own implementation.
					animate: function(ele, prop, value, stepCallback)
					{
						var params = {};
						params[prop] = value;
						ele.animate(
							params,
							{
								'duration'	: settings.animateDuration,
								'easing'	: settings.animateEase,
								'queue'		: false,
								'step'		: stepCallback
							}
						);
					},
					// Returns the current x position of the viewport with regards to the content pane.
					getContentPositionX: function()
					{
						return contentPositionX();
					},
					// Returns the current y position of the viewport with regards to the content pane.
					getContentPositionY: function()
					{
						return contentPositionY();
					},
					// Returns the width of the content within the scroll pane.
					getContentWidth: function()
					{
						return contentWidth;
					},
					// Returns the height of the content within the scroll pane.
					getContentHeight: function()
					{
						return contentHeight;
					},
					// Returns the horizontal position of the viewport within the pane content.
					getPercentScrolledX: function()
					{
						return contentPositionX() / (contentWidth - paneWidth);
					},
					// Returns the vertical position of the viewport within the pane content.
					getPercentScrolledY: function()
					{
						return contentPositionY() / (contentHeight - paneHeight);
					},
					// Returns whether or not this scrollpane has a horizontal scrollbar.
					getIsScrollableH: function()
					{
						return isScrollableH;
					},
					// Returns whether or not this scrollpane has a vertical scrollbar.
					getIsScrollableV: function()
					{
						return isScrollableV;
					},
					// Gets a reference to the content pane. It is important that you use this method if you want to
					// edit the content of your jScrollPane as if you access the element directly then you may have some
					// problems (as your original element has had additional elements for the scrollbars etc added into
					// it).
					getContentPane: function()
					{
						return pane;
					},
					// Scrolls this jScrollPane down as far as it can currently scroll. If animate isn't passed then the
					// animateScroll value from settings is used instead.
					scrollToBottom: function(animate)
					{
						positionDragY(dragMaxY, animate);
					},
					// Hijacks the links on the page which link to content inside the scrollpane. If you have changed
					// the content of your page (e.g. via AJAX) and want to make sure any new anchor links to the
					// contents of your scroll pane will work then call this function.
					hijackInternalLinks: function()
					{
						hijackInternalLinks();
					},
					// Removes the jScrollPane and returns the page to the state it was in before jScrollPane was
					// initialised.
					destroy: function()
					{
							destroy();
					}
				}
			);

			initialise(s);
		}

		// Pluginifying code...
		settings = $.extend({}, $.fn.jScrollPane.defaults, settings);

		// Apply default speed
		$.each(['mouseWheelSpeed', 'arrowButtonSpeed', 'trackClickSpeed', 'keyboardSpeed'], function() {
			settings[this] = settings[this] || settings.speed;
		});

		return this.each(
			function()
			{
				var elem = $(this), jspApi = elem.data('jsp');
				if (jspApi) {
					jspApi.reinitialise(settings);
				} else {
					jspApi = new JScrollPane(elem, settings);
					elem.data('jsp', jspApi);
				}
			}
		);
	};

	$.fn.jScrollPane.defaults = {
		showArrows					: false,
		maintainPosition			: true,
		stickToBottom				: false,
		stickToRight				: false,
		clickOnTrack				: true,
		autoReinitialise			: false,
		autoReinitialiseDelay		: 500,
		verticalDragMinHeight		: 0,
		verticalDragMaxHeight		: 99999,
		horizontalDragMinWidth		: 0,
		horizontalDragMaxWidth		: 99999,
		contentWidth				: undefined,
		animateScroll				: false,
		animateDuration				: 300,
		animateEase					: 'linear',
		hijackInternalLinks			: false,
		verticalGutter				: 4,
		horizontalGutter			: 4,
		mouseWheelSpeed				: 0,
		arrowButtonSpeed			: 0,
		arrowRepeatFreq				: 50,
		arrowScrollOnHover			: false,
		trackClickSpeed				: 0,
		trackClickRepeatFreq		: 70,
		verticalArrowPositions		: 'split',
		horizontalArrowPositions	: 'split',
		enableKeyboardNavigation	: true,
		hideFocus					: false,
		keyboardSpeed				: 0,
		initialDelay                : 300,        // Delay before starting repeating
		speed						: 30,		// Default speed when others falsey
		scrollPagePercent			: .8		// Percent of visible area scrolled when pageUp/Down or track area pressed
	};

})(jQuery,this);


/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/modrenizer.js */
// Modernizr v1.7  www.modernizr.com
window.Modernizr=function(a,b,c){function G(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=!!(a[b]in l);return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return a.getContext&&a.getContext("2d")},r.canvastext=function(){return e.canvas&&C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return"ontouchstart"in a||w("@media ("+o.join("touch-enabled),(")+"modernizr)")},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;){var d=p[b].toLowerCase();if(a[d+"_indexedDB"]||a[d+"IndexedDB"])return!0}return!1},r.hashchange=function(){return x("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return !!(a.history&&history.pushState)},r.draganddrop=function(){return x("dragstart")&&x("drop")},r.websockets=function(){return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(//:),url(//:),red url(//:)");return(new RegExp("(url\\s*\\(.*?){3}")).test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius","",function(a){return D(a,"orderRadius")})},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=w("@media ("+o.join("transform-3d),(")+"modernizr)"));return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){var a,c,d=h||g,e=b.createElement("style"),f=b.implementation||{hasFeature:function(){return!1}};e.type="text/css",d.insertBefore(e,d.firstChild),a=e.sheet||e.styleSheet;var i=f.hasFeature("CSS2","")?function(b){if(!a||!b)return!1;var c=!1;try{a.insertRule(b,0),c=/src/i.test(a.cssRules[0].cssText),a.deleteRule(a.cssRules.length-1)}catch(d){}return c}:function(b){if(!a||!b)return!1;a.cssText=b;return a.cssText.length!==0&&/src/i.test(a.cssText)&&a.cssText.replace(/\r+|\n+/g,"").indexOf(b.split(" ")[0])===0};c=i('@font-face { font-family: "font"; src: url(data:,); }'),d.removeChild(e);return c},r.video=function(){var a=b.createElement("video"),c=!!a.canPlayType;if(c){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}return c},r.audio=function(){var a=b.createElement("audio"),c=!!a.canPlayType;c&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;"));return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webWorkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,f&&a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function p(a,b){var c=-1,d=a.length,e,f=[];while(++c<d)e=a[c],(b=e.media||b)!="screen"&&f.push(p(e.imports,b),e.cssText);return f.join("")}function o(a){var b=-1;while(++b<e)a.createElement(d[b])}var c="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",d=c.split("|"),e=d.length,f=new RegExp("(^|\\s)("+c+")","gi"),g=new RegExp("<(/*)("+c+")","gi"),h=new RegExp("(^|[^\\n]*?\\s)("+c+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),i=b.createDocumentFragment(),j=b.documentElement,k=j.firstChild,l=b.createElement("body"),m=b.createElement("style"),n;o(b),o(i),k.insertBefore(m,k.firstChild),m.media="print",a.attachEvent("onbeforeprint",function(){var a=-1,c=p(b.styleSheets,"all"),k=[],o;n=n||b.body;while((o=h.exec(c))!=null)k.push((o[1]+o[2]+o[3]).replace(f,"$1.iepp_$2")+o[4]);m.styleSheet.cssText=k.join("\n");while(++a<e){var q=b.getElementsByTagName(d[a]),r=q.length,s=-1;while(++s<r)q[s].className.indexOf("iepp_")<0&&(q[s].className+=" iepp_"+d[a])}i.appendChild(n),j.appendChild(l),l.className=n.className,l.innerHTML=n.innerHTML.replace(g,"<$1font")}),a.attachEvent("onafterprint",function(){l.innerHTML="",j.removeChild(l),j.appendChild(n),m.styleSheet.cssText=""})}(a,b),e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document)

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/lib/touchscroll.min.js */
/**
	@license

	Copyright (c) 2010 uxebu Consulting Ltd. & Co. KG
	Copyright (c) 2010 David Aurelio
	All rights reserved.

	Redistribution and use in source and binary forms, with or without
	modification, are permitted provided that the following conditions are met:

	1. Redistributions of source code must retain the above copyright
	   notice, this list of conditions and the following disclaimer.
	2. Redistributions in binary form must reproduce the above copyright
	   notice, this list of conditions and the following disclaimer in the
	   documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
	LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	POSSIBILITY OF SUCH DAMAGE.
*/
var TouchScroll = (function(){

	//
	//	SCROLLER CONFIGURATION
	//
	var config = {
		// the minimum move distance to trigger scrolling (in pixels)
		threshold: 5,

		// minimum scroll handle size
		scrollHandleMinSize: 25,

		// flicking detection and configuration
		flicking: {
			// longest duration between last touchmove and the touchend event to trigger flicking
			triggerThreshold: 150,

			// the friction factor (per milisecond).
			// This factor is used to precalculate the flick length. Lower numbers
			// make flicks decelerate earlier.
			friction: 0.998,

			// minimum speed needed before the animation stop (px/ms)
			// This value is used to precalculate the flick length. Larger numbers
			// lead to shorter flicking lengths and durations
			minSpeed: 0.15,

			// the timing function for flicking animinations (control points for a cubic bezier curve)
			timingFunc: [0, 0.3, 0.6, 1]
		},

		// bouncing configuration
		elasticity: {
			// factor for the bounce length while dragging
			factorDrag: 0.5,

			// factor for the bounce length while flicking
			factorFlick: 0.2,

			// maximum bounce (in px) when flicking
			max: 100
		},

		// snap back configuration
		snapBack: {
			// the timing function for snap back animations (control points for a cubic bezier curve)
			// when bouncing out before, the first control point is overwritten to achieve a smooth
			// transition between bounce and snapback.
			timingFunc: [0.4, 0, 1, 1],

			// default snap back time
			defaultTime: 400,

			// whether the snap back effect always uses the default time or
			// uses the bounce out time.
			alwaysDefaultTime: true
		}
	};

	//
	//	FEATURE DETECTION
	//
	/* Determine touch events support */
	var hasTouchSupport = (function(){
		if("createTouch" in document){ // True on the iPhone
			return true;
		}
		try{
			var event = document.createEvent("TouchEvent"); // Should throw an error if not supported
			return !!event.initTouchEvent; // Check for existance of initialization method
		}catch(error){
			return false;
		}
	}());

	/*
		In some older versions of Android, WebKitCSSMatrix is broken and does
		not parse a "matrix" directive properly.
	*/
	var parsesMatrixCorrectly = (function(){
		try {
			var m = new WebKitCSSMatrix("matrix(1, 0, 0, 1, -20, -30)");
			return m.e == -20 && m.f == -30;
		} catch(e) {
			return false;
		}
	}());

	//
	// FEATURE BASED CODE BRANCHING
	//

	/* Define event names */
	var events;
	if(hasTouchSupport){
		events = {
			start: "touchstart",
			move: "touchmove",
			end: "touchend",
			cancel: "touchcancel"
		};
	}else{
		events = {
			start: "mousedown",
			move: "mousemove",
			end: "mouseup",
			cancel: "touchcancel" // unnecessary here
		};
	}

	var getMatrixFromNode;
	parsesMatrixCorrectly = false;
	if(parsesMatrixCorrectly){
		getMatrixFromNode = function(/*HTMLElement*/node){ /*WebKitCSSMatrix*/
			var doc = node.ownerDocument,
				transform = window.getComputedStyle(node).webkitTransform;

			return new WebKitCSSMatrix(transform);
		}
	}else{
		var reMatrix = /matrix\(\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*,\s*-?\d+(?:\.\d+)?\s*\,\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\)/;
		getMatrixFromNode = function(/*HTMLElement*/node){ /*WebKitCSSMatrix*/
			var doc = node.ownerDocument,
				transform = window.getComputedStyle(node).webkitTransform,
				matrix = new WebKitCSSMatrix(),
				match = reMatrix.exec(transform);

			if(match){
				matrix.e = match[1];
				matrix.f = match[2];
			}

			return matrix;
		}
	}

	//
	// UTILITY FUNCTIONS
	//
	function setTransitionProperty(/*HTMLElement*/node){
		node.style.webkitTransformStyle = "preserve-3d";
		node.style.webkitTransitionProperty = "-webkit-transform";
	};

	function applyMatrixToNode(/*HTMLElement*/node,
	                           /*WebKitCSSMatrix*/matrix,
	                           /*String?*/duration,
	                           /*String?*/timingFunc){
		var s = node.style;
		if(duration != null){
			s.webkitTransitionDuration = duration + "";
		}
		if(timingFunc != null){
			s.webkitTransitionTimingFunction = timingFunc + "";
		}

		// This is twice as fast as than directly assigning the matrix
		// to the style property (maybe because no function call is involved?).
		node.style.webkitTransform = "translate(" + matrix.e + "px, " + matrix.f + "px)";
	}

	function getMatrixFromEvent(event){ /*WebKitCSSMatrix*/
		if(event.touches && event.touches.length){
			event = event.touches[0];
		}

		var matrix = new WebKitCSSMatrix;
		matrix.e = event.pageX;
		matrix.f = event.pageY;

		return matrix;
	};

	function roundMatrix(/*WebKitCSSMatrix*/matrix){ /*WebKitCSSMatrix*/
		matrix.e = Math.round(matrix.e);
		matrix.f = Math.round(matrix.f);
		return matrix;
	}

	// A DOM node to clone for scrollbars
	var scrollbarsTemplate = document.createElement("div");
	scrollbarsTemplate.innerHTML = [
		'<div class="touchScrollTrack touchScrollTrackX">',
			'<div class="touchScrollHandle"></div>',
		'</div>',
		'<div class="touchScrollTrack touchScrollTrackY">',
			'<div class="touchScrollHandle"></div>',
		'</div>'
	].join("");

/*
	=== TOUCH CONTROLLER ======================================================
	Does the actual work.

	The event handling is divided into two parts:
	The scroller constructor tracks "move", "end", and "cancel" events and
	delegates them to the currently active scroller, if any.

	Every single scroller only listens for the "start" event on its outer node,
	and sets itself as the currently active scroller.
*/

/*
	Every object with a "handleEvent" method can be registered as DOM Level 2
	event listener. On event, the method is called on the registered object.
*/
TouchScroll.handleEvent = function handleEvent(event){
	var currentScroller = TouchScroll.prototype.currentScroller;
	if(currentScroller){
		currentScroller.handleEvent(event);
	}else if(event.type === events.move){ // always cancel move events at this point
		//event.preventDefault();
	}
};

/*
	Listening to end, move, and cancel event.
	Event listening takesplace during bubbling, so other scripts can cancel
	scrolling by simply stopping event propagation.
*/
try {
	document.addEventListener(events.move, TouchScroll.handleEvent, false);
	document.addEventListener(events.end, TouchScroll.handleEvent, false);
	document.addEventListener(events.cancel, TouchScroll.handleEvent, false);
} catch (e) {
	// adding events not supported...
}

/**
	Constructor for scrollers.

	@constructor
	@param {HTMLElement} scrollElement The node to make scrollable
	@param {Object} [options] Options for the scroller- Known options are
		elastic {Boolean} whether the scroller bounces
*/
function TouchScroll(/*HTMLElement*/scrollElement, /*Object*/options){
	options = options || {};
	this.elastic = !!options.elastic,
	this.snapToGrid = !!options.snapToGrid;

	this.containerSize = null;
	this.maxSegments = {e: 1, f: 1};
	this.currentSegment = {e: 0, f: 0};

	// references to scroll div elements
	this.scrollers = {
		container: scrollElement,
		outer: /*HTMLElement*/null,
		inner: /*HTMLElement*/null,
		e: /*HTMLElement*/null,
		f: /*HTMLElement*/null
	};

	// Whether the scroller scrolls
	this._scrolls = {e: false, f: false};

	// The minimal scroll values (fully scrolled to the bottom/right)
	// Object with attributes "e" and "f"
	this._scrollMin = {e: false, f: false};

	// References DOM nodes for scrollbar tracks and handles.
	// Gets set up by "_initDom"
	//	{
	//		container: HTMLElement,
	//		handles:{e: HTMLElement, f: HTMLElement},
	//		maxOffsets: {e: Number, f: Number}, -> maximum offsets for the handles
	//		offsetRatios: {e: Number, f: Number}, -> Ratio of scroller offset to handle offset
	//		sizes: {e: Number, f: Number}, -> handle sizes
	//		tracks: {e: HTMLElement, f: HTMLElement},
	//	}
	this._scrollbars = null,


	/* ---- SCROLLER STATE ---- */

	this._isScrolling = false;

	this._startEvent = null;

	// the current scroller offset
	this._currentOffset = new WebKitCSSMatrix();

	// Events tracked during a move action
	// [ {timeStamp: Number, matrix: WebKitCSSMatrix} ]
	// The last two events get tracked.
	this._trackedEvents = /*Array*/null;

	// Keeps track whether flicking is active
	this._flicking = {e: false, f: false};

	// Queued bounces
	this._bounces = {e: null, f: null};

	// Animation timeouts
	// This implementation uses timeouts for combined animations,
	// because the webkitTransitionEnd event fires late on iPhone 3G
	this._animationTimeouts = {e: [], f: []};

	this._initDom();
	this.setupScroller();
}

TouchScroll.prototype = {
	// references the currently active scroller
	// static property!
	currentScroller: null,

	// Maps event types to method names.
	handlerNames: {
		resize: "setupScroller",
		orientationchange: "setupScroller",
		webkitTransitionEnd: "onTransitionEnd",
		DOMSubtreeModified: "setupScroller",

		touchstart: "onTouchStart",
		mousedown: "onTouchStart",
		touchmove: "onTouchMove",
		mousemove: "onTouchMove",
		touchend: "onTouchEnd",
		mouseup: "onTouchEnd",
		touchcancel: "onTouchEnd"
	},

	// Does DOM initialization needed for the scroller
	_initDom: function initDom(){
		// wrap the scroller contents with two additional <div> elements
		var innerScroller = document.createElement("div"),
			outerScroller = innerScroller.cloneNode(false),
			parentNode = this.scrollers.container;

		var topFade = document.createElement("div");
		var bottomFade = document.createElement("div");
		topFade.className = "touchScrollTopFade";
		bottomFade.className = "touchScrollBottomFade";
		topFade.style.display = "none";
		bottomFade.style.display = "none";
		this.topFade = topFade;
		this.bottomFade = bottomFade;

		innerScroller.className = "touchScrollInner";
		parentNode.className += " touchScroll";

		for(var i = 0, iMax = parentNode.childNodes.length; i < iMax; i++){
			innerScroller.appendChild(parentNode.firstChild);
		}

		outerScroller.appendChild(innerScroller);
		parentNode.appendChild(outerScroller);
		parentNode.appendChild(topFade);
		parentNode.appendChild(bottomFade);

		this.scrollers.outer = this.scrollers.f = outerScroller;
		this.scrollers.inner = this.scrollers.e = innerScroller;

		// init scroll layers for transitions
		setTransitionProperty(outerScroller);
		setTransitionProperty(innerScroller);

		innerScroller.style.display = "inline-block";
		innerScroller.style.minWidth = "100%";
		innerScroller.style.webkitBoxSizing = "border-box";

		// add scrollbars
		var scrollbarsNode = scrollbarsTemplate.cloneNode(true),
			trackE = scrollbarsNode.querySelector(".touchScrollTrackX"),
			trackF = scrollbarsNode.querySelector(".touchScrollTrackY"),
			handleE = trackE.firstElementChild,
			handleF = trackF.firstElementChild;


		var style = scrollbarsNode.style;
		style.pointerEvents = "none"; // make clicks/touches on scrollbars "fall through"
		style.webkitTransitionProperty = "opacity";
		style.webkitTransitionDuration = "250ms";
		style.opacity = "0";

		var scrollbars = this._scrollbars = {
			container: scrollbarsNode,
			tracks: {
				e: trackE,
				f: trackF
			},
			handles: {
				e: handleE,
				f: handleF
			},
			sizes : {e: 0, f: 0}
		}

		setTransitionProperty(handleE);
		setTransitionProperty(handleF);

		parentNode.insertBefore(scrollbarsNode, outerScroller);

		/*
			Apply relative positioning to the scrolling container.
			This is needed to enable scrollbar positioning.
		*/
		if(window.getComputedStyle(parentNode).position == "static"){
			parentNode.style.position = "relative";
		}

		this.setupScroller();

		// initialize event listeners
		parentNode.addEventListener(events.start, this, false);
		outerScroller.addEventListener("webkitTransitionEnd", this, false);
		outerScroller.addEventListener("DOMSubtreeModified", this, true);
		window.addEventListener("orientationchange", this, false);
		window.addEventListener("resize", this, false);
	},

	setupScroller: function setupScroller(debug){

		console.log(debug);

		var scrollContainer = this.scrollers.outer.parentNode,
			containerSize = {
				e: scrollContainer.offsetWidth,
				f: scrollContainer.offsetHeight
			},
			innerScroller = this.scrollers.inner,
			scrollerSize = {
				e: innerScroller.offsetWidth,
				f: innerScroller.offsetHeight
			},
			scrollbars = this._scrollbars,
			scrollMin = {
				e: Math.min(containerSize.e - scrollerSize.e, 0),
				f: Math.min(containerSize.f - scrollerSize.f, 0)
			};

		this.containerSize = containerSize;
		this.maxSegments = {
			e: Math.ceil(-scrollMin.e / containerSize.e),
			f: Math.ceil(-scrollMin.f / containerSize.f)
		};

		scrollbars.container.style.height = containerSize.f + "px";

		// Minimum scroll offsets
		this._scrollMin = scrollMin;
		var scrolls = this._scrolls = {
			e: scrollMin.e < 0,
			f: scrollMin.f < 0
		};

		this._doScroll = scrolls.e || scrolls.f;

		// scrollbar container class name changes if both scrollbars are visible
		scrollbars.container.className = "touchScrollBars";
		if(scrolls.e && scrolls.f){
			scrollbars.container.className += " touchScrollBarsBoth";
		}

		// hide/show scrollbars
		scrollbars.tracks.e.style.display = scrolls.e ? "" : "none";
		scrollbars.tracks.f.style.display = scrolls.f ? "" : "none";

		var scrollbarTrackSizes = {
				e: scrollbars.tracks.e.offsetWidth,
				f: scrollbars.tracks.f.offsetHeight
			};

		// calculate and apply scroll bar handle sizes
		scrollbars.sizes = {
			e: Math.round(Math.max(
				scrollbarTrackSizes.e * containerSize.e / scrollerSize.e,
				config.scrollHandleMinSize
			)),
			f: Math.round(Math.max(
				scrollbarTrackSizes.f * containerSize.f / scrollerSize.f,
				config.scrollHandleMinSize
			))
		};
		scrollbars.handles.e.style.width = scrollbars.sizes.e + "px";
		scrollbars.handles.f.style.height = scrollbars.sizes.f + "px";

		// maximum scrollbar offsets
		scrollbars.maxOffsets = {
			e: scrollbarTrackSizes.e - scrollbars.handles.e.offsetWidth,
			f: scrollbarTrackSizes.f - scrollbars.handles.f.offsetHeight
		};

		// calculate offset ratios
		// (scroller.offset * offsetratio = scrollhandle.offset)
		scrollbars.offsetRatios = {
			e: scrolls.e ? (scrollbarTrackSizes.e - scrollbars.handles.e.offsetWidth) / scrollMin.e : 0,
			f: scrolls.f ? (scrollbarTrackSizes.f - scrollbars.handles.f.offsetHeight) / scrollMin.f : 0
		};

		this.hideScrollbars();
		this.checkFades();
	},

	// Standard DOM Level 2 event handler
	handleEvent: function handleEvent(event){
		var handlerName = this.handlerNames[event.type];
		if(handlerName){
			this[handlerName](event);
		}
	},

	// Handles touch start events on the scroller
	onTouchStart: function onTouchStart(event){
		if(!this._doScroll){
			return;
		}
		this.__proto__.currentScroller = this;
		this._isScrolling = false;
		this._trackedEvents = [];
		this._determineOffset();
		this._trackEvent(event);
		this._startEventTarget = event.target; // We track this to work around a bug in android, see below
		var wasAnimating = this._stopAnimations();
		this._snapBack(null, 0);
		this._startEvent = event;

		event.stopPropagation();

		/*
			If the scroller was animating, prevent the default action of the event.
			This prevents clickable elements to be activated accidentally.

			Also, we need to cancel the touchstart event to prevent android from
			queuing up move events and fire them only when the touch ends.
		*/
		//if(wasAnimating){
			event.preventDefault();
		//}

	},

	// Handles touch move events on the scroller
	onTouchMove: function onTouchMove(event){
		if(!this._doScroll){
			return;
		}

		// must be present, because touchstart fired before
		var lastEventOffset = this._trackedEvents[1].matrix,
			scrollOffset = getMatrixFromEvent(event).translate(
				-lastEventOffset.e,
				-lastEventOffset.f,
				0
			),
			isScrolling = this._isScrolling,
			doScroll = isScrolling;

		event.stopPropagation();
		event.preventDefault();

		if(!doScroll){
			var threshold = config.threshold,
			doScroll = scrollOffset.e <= -threshold || scrollOffset.e >= threshold ||
			           scrollOffset.f <= -threshold || scrollOffset.f >= threshold;
		}

		if(doScroll){
			if(!isScrolling){
				this._isScrolling = true;
				this.showScrollbars();
			}

			this._scrollBy(scrollOffset);
			this._trackEvent(event);
		}

		this.checkFades();
	},

	onTouchEnd: function onTouchEnd(event){
		var startTarget = this._startEventTarget;

		if(!this._isScrolling && startTarget == event.target){
		/*
			If no scroll has been made, the touchend event should trigger
			a focus and a click (if occurring on the same node as the
			touchstart event).
			Unfortunately, we've canceled the touchstart event to work around
			a bug in android -- so we need to dispatch our own focus and
			click events.
		*/


			var node = event.target;
			while(node.nodeType != 1){
				node = node.parentNode;
			}
			var focusEvent = document.createEvent("HTMLEvents");
			focusEvent.initEvent("focus", false, false);
			node.dispatchEvent(focusEvent);
			//node.focus();

			var clickEvent = document.createEvent("MouseEvent");
			clickEvent.initMouseEvent(
				"click", //type
				true, //canBubble
				true, //cancelable
				event.view,
				1, //detail (number of clicks for mouse events)
				event.screenX,
				event.screenY,
				event.clientX,
				event.clientY,
				event.ctrlKey,
				event.altKey,
				event.shiftKey,
				event.metaKey,
				event.button,
				null// relatedTarget
			);
			node.dispatchEvent(clickEvent);
			this.hideScrollbars();
		}else if(this._isScrolling){
			var moveSpec = this._getLastMove();
			if(moveSpec.duration <= config.flicking.triggerThreshold && moveSpec.length){
			/*
				If the time between the touchend event and the last tracked
				event is below threshold, we are triggering a flick.
			*/
				var flickDuration = this._getFlickingDuration(moveSpec.speed),
					flickLength = this._getFlickingLength(moveSpec.speed, flickDuration),
					flickVector = moveSpec.matrix,
					factor = flickLength / moveSpec.length;

				flickVector.e *= factor;
				flickVector.f *= factor;

				this.startFlick(flickVector, flickDuration);
			}
		}

		if(!(this.isAnimating())){
			if(this.snapToGrid){
				this._snapBackToGrid();
			}else{
				var snappingBack = this._snapBack();
				if(!snappingBack){
					this.hideScrollbars();
				}
			}
		}
		delete this._startEventTarget;
		this._isScrolling = false;
		this.__proto__.currentScroller = null;
	},

	onTransitionEnd: function onTransitionEnd(event){
		["e", "f"].forEach(function(axis){
			if(event.target === this.scrollers[axis]){
				this._flicking[axis] = false;
			}
		}, this);

		if(!this.isAnimating()){
			this.hideScrollbars();
		}
	},

	isAnimating: function isAnimating(){
		var timeouts = this._animationTimeouts;
		var hasTimeouts = timeouts.e.length > 0 || timeouts.f.length > 0;
		var isFlicking = this._flicking.e || this._flicking.f;
		return hasTimeouts || isFlicking;
	},

	scrollBy: function scrollBy(/*Number*/x, /*Number*/y){
		this._stopAnimations();

		var matrix = new WebKitCSSMatrix();
		matrix.e = -x;
		matrix.f = -y;
		return this._scrollBy(matrix);
	},

	scrollTo: function scrollTo(x, y){
		this._stopAnimations();

		var scrollMin = this._scrollMin;
		var m = new WebKitCSSMatrix();
		m.e = Math.min(0, Math.max(scrollMin.e, -x));
		m.f = Math.min(0, Math.max(scrollMin.f, -y));

		var currentOffset = this._currentOffset;
		m.e -= currentOffset.e;
		m.f -= currentOffset.f;

		var ret = this._scrollBy(m);
		this.checkFades();
		return ret;
	},

	center: function center(){
		var x = -Math.round(this._scrollMin.e/2);
		var y = -Math.round(this._scrollMin.f/2);
		return this.scrollTo(x, y);
	},

	// Scrolls the layer by applying a transform matrix to it.
	//
	// As this method is called for every touchmove event, the code is rolled
	// out for both axes (leading to redundancies) to get maximum performance.
	_scrollBy: function _scrollBy(/*WebKitCSSMatrix*/matrix){
		var scrolls = this._scrolls;
		if(!scrolls.e){
			matrix.e = 0;
		}
		if(!scrolls.f){
			matrix.f = 0;
		}

		var scrollMin = this._scrollMin,
			currentOffset = this._currentOffset,
			newOffset = currentOffset.multiply(matrix),
			isOutOfBounds = {e: false, f: false}, // whether the new position is out of the scroller bounds
			scrollbarSizeSubstract = {e: 0, f: 0};

		if(this.elastic){
			var factor = config.elasticity.factorDrag,
				wasOutOfBounds = { // whether the scroller was already beyond scroll bounds
					e: currentOffset.e < scrollMin.e || currentOffset.e > 0,
					f: currentOffset.f < scrollMin.f || currentOffset.f > 0
				};

			if(wasOutOfBounds.e){
				// if out of scroll bounds, apply the elasticity factor
				newOffset.e -= matrix.e * (1 - factor);
			}
			if(wasOutOfBounds.f){
				newOffset.f -= matrix.f * (1 - factor);
			}

			if(newOffset.e < scrollMin.e || newOffset.e > 0){
				isOutOfBounds.e = true;
				scrollbarSizeSubstract.e = newOffset.e >= 0 ?
				                           newOffset.e : scrollMin.e - newOffset.e;
			}
			if(newOffset.f < scrollMin.f || newOffset.f > 0){
				isOutOfBounds.f = true;
				scrollbarSizeSubstract.f = newOffset.f >= 0 ?
				                           newOffset.f : scrollMin.f - newOffset.f;
			}

			var crossingBounds = { // whether the drag/scroll action went across scroller bounds
					e: (!wasOutOfBounds.e || !isOutOfBounds.e) && (isOutOfBounds.e || isOutOfBounds.e),
					f: (!wasOutOfBounds.f || !isOutOfBounds.f) && (isOutOfBounds.f || isOutOfBounds.f)
				};


			if(crossingBounds.e){
				/*
					If the drag went across scroll bounds, we need to apply a
					"mixed strategy": The part of the drag outside the bounds
					is mutliplicated by the elasticity factor.
				*/
				if(currentOffset.e > 0){
					newOffset.e /= factor;
				}else if(newOffset.e > 0){
					newOffset.e *= factor;
				}else if(currentOffset.e < scrollMin.e){
					newOffset.e += (scrollMin.e - currentOffset.e) / factor;
				}else if(newOffset.e < scrollMin.e){
					newOffset.e -= (scrollMin.e - newOffset.e) * factor;
				}
			}

			if(crossingBounds.f){
				if(currentOffset.f > 0){
					newOffset.f /= factor;
				}else if(newOffset.f > 0){
					newOffset.f *= factor;
				}else if(currentOffset.f < scrollMin.f){
					newOffset.f += (scrollMin.f - currentOffset.f) / factor;
				}else if(newOffset.f < scrollMin.f){
					newOffset.f -= (scrollMin.f - newOffset.f) * factor;
				}
			}
		}else{
			// Constrain scrolling to scroller bounds
			if(newOffset.e < scrollMin.e){
				newOffset.e = scrollMin.e;
			}else if(newOffset.e > 0){
				newOffset.e = 0;
			}

			if(newOffset.f < scrollMin.f){
				newOffset.f = scrollMin.f;
			}else if(newOffset.f > 0){
				newOffset.f = 0;
			}
		}

		this._currentOffset = newOffset;
		this._pageOffset = newOffset;


		var offsetX = newOffset.translate(0, 0, 0),
			offsetY = newOffset.translate(0, 0, 0);

		offsetX.f = offsetY.e = 0;

		applyMatrixToNode(this.scrollers.e, offsetX);
		applyMatrixToNode(this.scrollers.f, offsetY);

		// scrollbar position
		var ratios = this._scrollbars.offsetRatios;
		offsetX.e *= ratios.e;
		offsetY.f *= ratios.f;

		if(isOutOfBounds.e){
			this._squeezeScrollbar("e", scrollbarSizeSubstract.e, newOffset.e < 0);
		}else{
			applyMatrixToNode(this._scrollbars.handles.e, offsetX);
		}
		if(isOutOfBounds.f){
			this._squeezeScrollbar("f", scrollbarSizeSubstract.f, newOffset.f < 0);
		}else{
			applyMatrixToNode(this._scrollbars.handles.f, offsetY);
		}

	},

	// Tracks all properties needed for scrolling
	// We're tracking only the last two events for the moment
	_trackEvent: function _trackEvent(event){
		var trackedEvents = this._trackedEvents;
		trackedEvents[0] = trackedEvents[1];
		trackedEvents[1] = {
			matrix: getMatrixFromEvent(event),
			timeStamp: event.timeStamp
		};
	},

	showScrollbars: function showScrollbars(){
		if(this.snapToGrid){
			return;
		}
		var style = this._scrollbars.container.style;
		style.webkitTransitionDuration = "";
		style.opacity = "1";
	},

	hideScrollbars: function hideScrollbars(){
		var style = this._scrollbars.container.style;
		style.webkitTransitionDuration = "250ms";
		style.opacity = ".15";

		this.checkFades();
	},

	checkFades: function() {
		var myoffset = getMatrixFromNode(this.scrollers.f);
		if (myoffset.f <= this._scrollMin.f) {
			//at bottom..
			this.bottomFade.style.display = 'none';
		} else {
			this.bottomFade.style.display = '';
		}
		if (myoffset.f >= 0) {
			//at top..
			this.topFade.style.display = 'none';
		} else {
			this.topFade.style.display = '';
		}
	},

	_squeezeScrollbar: function _squeezeScrollbar(axis, substract, squeezeAtEnd, duration, timingFunc){
		var scrollbars = this._scrollbars;
		var handleStyle = scrollbars.handles[axis].style;

		var defaultSize = scrollbars.sizes[axis];
		var size = Math.max(defaultSize - substract, 1);

		var matrix = new WebKitCSSMatrix();
		matrix[axis] = squeezeAtEnd ? scrollbars.maxOffsets[axis] : 0;
		matrix[axis == "f" ? "d" : "a"] = size / defaultSize;

		handleStyle.webkitTransformOrigin = squeezeAtEnd ? "100% 100%" : "0 0";
		handleStyle.webkitTransitionProperty = "-webkit-transform";
		handleStyle.webkitTransform = matrix;

		if(duration){
			handleStyle.webkitTransitionDuration = duration + "ms";
			handleStyle.webkitTransitionTimingFunction = timingFunc;
			this._animationTimeouts[axis].push(setTimeout(function(){
				handleStyle.webkitTransitionDuration = "";
			}, duration));
		}else{
			handleStyle.webkitTransitionDuration = "";
		}
	},

	_determineOffset: function _determineOffset(round){
		var offsetX = getMatrixFromNode(this.scrollers.e),
			offsetY = getMatrixFromNode(this.scrollers.f),
			currentOffset = offsetX.multiply(offsetY);

		if(round){
			roundMatrix(currentOffset);
		}

		this._currentOffset = currentOffset;
	},

	_stopAnimations: function _stopAnimations(){ /*Boolean*/
		var isAnimating = false;
		var scrollbars = this._scrollbars;
		["e", "f"].forEach(function(axis){
			this.scrollers[axis].style.webkitTransitionDuration = "";
			var handle = scrollbars.handles[axis];
			handle.style.webkitTransitionDuration = "";
			setTransitionProperty(handle);
			scrollbars.tracks[axis].style.webkitBoxPack = "";


			var timeouts = this._animationTimeouts[axis];
			isAnimating = isAnimating || timeouts.length;
			timeouts.forEach(function(timeoutId){
				clearTimeout(timeoutId);
			});
			timeouts.length = 0;
		}, this);

		// if animating, we stop animations by determining the current
		// offset (rounding its values) and then setting those values
		// to the scroller by calling "scrollBy"
		this._determineOffset(true);
		this._scrollBy(new WebKitCSSMatrix());

		// deleting queued bounces
		this._bounces.e = this._bounces.f = null;

		// resetting state
		var isFlicking = this._flicking;
		isFlicking.e = isFlicking.f = false;

		return isAnimating;
	},

	_getLastMove: function _getLastMove(){
		var trackedEvents = this._trackedEvents,
			event0 = trackedEvents[0],
			event1 = trackedEvents[1];

		if(!event0){
			return {duration: 0, matrix: new WebKitCSSMatrix(), length: 0, speed: 0};
		}

		var duration = event1.timeStamp - event0.timeStamp,
			matrix = event1.matrix.multiply(event0.matrix.inverse());

		var scrolls = this._scrolls;
		if (!scrolls.e) {
			matrix.e = 0;
		}
		if (!scrolls.f) {
			matrix.f = 0;
		}
		var length = Math.sqrt(matrix.e * matrix.e + matrix.f * matrix.f);

		return {
			duration: duration, // move duration in miliseconds
			matrix: matrix, // matrix of the move
			length: length, // length of the move in pixels
			speed: length / duration // speed of the move in miliseconds
		}
	},

	// returns flicking duration in miliseconds for a given speed
	_getFlickingDuration: function _getFlickingDuration(pixelsPerMilisecond){
		/*
			The duration is computed as follows:

			variables:
				m = minimum speed before stopping = config.flicking.minSpeed
				d = duration
				s = speed = pixelsPerMilisecond
				f = friction per milisecond = config.flicking.friction

			The minimum speed is computed as follows:
					m = s * f ^ d

				// as the minimum speed is given and we need the duration we
				// can solve the equation for d:
			<=> 	d = log(m/s) / log(f)
		*/
		var duration =	Math.log(
							config.flicking.minSpeed /
							pixelsPerMilisecond
						) /
						Math.log(config.flicking.friction);

		return duration > 0 ? Math.round(duration) : 0;
	},

	_getFlickingLength: function _getFlickingLength(initialSpeed, flickDuration){
		/*
			The amount of pixels to flick is the sum of the distance covered every
			milisecond of the flicking duration.

			Because the distance is decelerated by the friction factor, the speed
			at a given time t is:

				pixelsPerMilisecond * friction^t

			and the distance covered is:

				d = distance
				s = initial speed = pixelsPerMilisecond
				t = time = duration
				f = friction per milisecond = config.flicking.friction

				d = sum of s * f^n for n between 0 and t
			<=>	d = s * (sum of f^n for n between 0 and t)

			which is a geometric series and thus can be simplified to:
				d = s *  (1 - f^(d+1)) / (1 - f)
		*/
		var factor = (1 - Math.pow(config.flicking.friction, flickDuration + 1)) / (1 - config.flicking.friction);
		return initialSpeed * factor;
	},

	startFlick: function startFlick(matrix, duration){
		if(!(duration || this.snapToGrid)){
			this._snapBack();
			return;
		}
		duration = duration || config.snapBack.defaultTime;

		var epsilon = 1 / duration, // precision for bezier computations
			points = config.flicking.timingFunc, // control points for the animation function
			timingFunc = new CubicBezier(points[0], points[1], points[2], points[3]),
			min = this._scrollMin,
			currentOffset = this._currentOffset,
			scrollbars = this._scrollbars;

		roundMatrix(matrix);
		var scrollTarget = this._currentOffset.multiply(matrix);
		var scrolls = this._scrolls;

		if(this.snapToGrid){
			var maxSegments = this.maxSegments;
			var currentSegments = this.currentSegment;
		}

		var animating = {e: true, f: true};
		["e", "f"].forEach(function(axis){
			if(!scrolls[axis]){
				animating[axis] = false;
				return;
			}
			var distance = matrix[axis],
				target = scrollTarget[axis],
				segmentFraction = 1; // the fraction of the flick distance until crossing scroller bounds

			// compute distance fraction where flicking crosses scroller bounds
			var minOffset = min[axis];
			var maxOffset = 0;
			if(this.snapToGrid){
				var containerLength = this.containerSize[axis];
				var increment = distance > 0 ? -1 : 1;
				var maxSegment = maxSegments[axis];
				var currentSegment = currentSegments[axis];
				var flickToSegment = currentSegment + increment;
				if(flickToSegment < 0){
					flickToSegment = 0;
				}else if(maxSegment < flickToSegment){
					flickToSegment = maxSegment;
				}
				this.currentSegment[axis] = flickToSegment;

				if(flickToSegment == currentSegment || !distance){
					return this._snapBack(axis, null, -currentSegment * containerLength);
				}

				maxOffset = minOffset = -flickToSegment * containerLength;
			}

			var segmentFraction, flick, bounce;
			if(this.snapToGrid){
				flick = (distance < 0 ? minOffset : maxOffset) - currentOffset[axis];
				bounce = 0;
				segmentFraction = flick / distance;
			}else{
				if(target < minOffset){
					segmentFraction = 1 - Math.max(Math.min((target - minOffset) / matrix[axis], 1), 0);
				}else if(target > maxOffset){
					segmentFraction = 1 - Math.max(Math.min((target - maxOffset) / matrix[axis], 1), 0);
				}

				flick = segmentFraction * distance;
				bounce = distance - flick;
			}

			if(!(flick || bounce)){
				animating[axis] = this._snapBack(axis);
				return;
			}

			var t = timingFunc.getTforY(segmentFraction, epsilon);
			if (t > 1) { t = 1; } else if (t < 0) { t = 0 }

			var timeFraction = timingFunc.getPointForT(t).x,
				bezierCurves = timingFunc.divideAtT(t);

			var flickTransform =  new WebKitCSSMatrix();
			flickTransform[axis] = currentOffset[axis];

			var flickDuration = timeFraction * duration;

			if(flick && timeFraction){
				this._flicking[axis] = true;

				// animate scroller
				flickTransform[axis] += flick;
				applyMatrixToNode(this.scrollers[axis], flickTransform,
				                  flickDuration + "ms", bezierCurves[0]);

				// animate scrollbars
				var scrollbarTransform = flickTransform.translate(0, 0, 0);
				scrollbarTransform[axis] *= scrollbars.offsetRatios[axis];
				applyMatrixToNode(scrollbars.handles[axis], scrollbarTransform,
				                  flickDuration + "ms", bezierCurves[0]);

			}

			if(this.elastic && bounce){
				var bounceTransform = flickTransform.translate(0, 0, 0),
					bounceTiming = bezierCurves[1];

				// Creating a smooth transition from bounce out to snap back
				bounceTiming._p2 = {
					x: 1 - config.snapBack.timingFunc[0],
					y: 1 - config.snapBack.timingFunc[1]
				};

				// limit the bounce to the configured maximum
				var bounceFactor = Math.min(
					config.elasticity.factorFlick,
					config.elasticity.max / Math.abs(bounce)
				);

				bounceTransform[axis] += bounce * bounceFactor;
				var bounceDuration = (1 - timeFraction) * duration * bounceFactor;
				this._bounces[axis] = {
					timingFunc: bounceTiming,
					duration: bounceDuration + "ms",
					matrix: bounceTransform,
					bounceLength: Math.abs(bounce * bounceFactor)
				};

				// play queued animations with timeouts, because
				// the webkitTransitionEnd event fires late on iPhone 3G
				var that = this;
				var timeouts = this._animationTimeouts[axis];
				var handle = this._sc

				timeouts.push(setTimeout(function(){
					that._playQueuedBounce(axis);
				}, flickDuration));

				timeouts.push(setTimeout(function(){
					var duration = config.snapBack.alwaysDefaultTime ? null : bounceDuration;
					that._snapBack(axis, duration);
					timeouts.length = 0; // clear timeouts
				}, flickDuration + bounceDuration));
			}
		}, this);

		if(!(animating.e || animating.f)){
			this.hideScrollbars();
		}
	},

	_playQueuedBounce: function _playQueuedBounce(axis){
		var bounce = this._bounces[axis];

		if(bounce){
			var scroller = this.scrollers[axis],
				that = this,
				matrix = bounce.matrix,
				duration = bounce.duration,
				timingFunc = bounce.timingFunc;

			applyMatrixToNode(scroller, matrix, duration, timingFunc);

			// bounce scrollbar handle
			this._squeezeScrollbar(axis, bounce.bounceLength, matrix[axis] < 0, duration, timingFunc);

			this._bounces[axis] = null;
			return true;
		}

		return false;
	},

	_snapBack: function _snapBack(/*String?*/axis, /*Number?*/duration, /*Number?*/target){ /*Boolean*/
		duration = duration != null ? duration : config.snapBack.defaultTime;
		if(axis == null){
			var snapBackE = this._snapBack("e", duration);
			var snapBackF = this._snapBack("f", duration);
			var snappingBack = snapBackE || snapBackF;
			if(!snappingBack){
				this.hideScrollbars();
			}else{
				var scroller = this;
				this._animationTimeouts.f.push(setTimeout(function(){
					scroller.hideScrollbars();
				}, duration));
			}
			return snappingBack;
		}

		var scroller = this.scrollers[axis],
			offset = getMatrixFromNode(scroller),
			cp = config.snapBack.timingFunc, // control points
			timingFunc = new CubicBezier(cp[0], cp[1], cp[2], cp[3]);

		if(target != null || offset[axis] < this._scrollMin[axis] || offset[axis] > 0){
			offset[axis] = target != null ? target : Math.max(Math.min(offset[axis], 0), this._scrollMin[axis]);
			this._squeezeScrollbar(axis, 0, offset[axis] < 0, duration, timingFunc);
			applyMatrixToNode(scroller, offset, duration + "ms", timingFunc);

			return Boolean(duration);
		}

		return false;
	},

	_snapBackToGrid: function snapBackToGrid(){
		var currentOffset = this._currentOffset;
		var containerSize = this.containerSize;
		["e", "f"].forEach(function(axis){
			var axisOffset = currentOffset[axis];
			var containerLength = containerSize[axis];
			var currentSegment = -Math.floor((axisOffset + 0.5 * containerLength )/containerLength);
			var maxSegment = this.maxSegments[axis];
			if(currentSegment < 0){
				currentSegment = 0;
			}else if(maxSegment < currentSegment){
				currentSegment = maxSegment;
			}
			this.currentSegment[axis] = currentSegment;
			return this._snapBack(axis, null, -currentSegment * containerLength);
		}, this);
	}
};

return TouchScroll;
}());

/**
 * @license
 *
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
 * Copyright (C) 2010 David Aurelio. All Rights Reserved.
 * Copyright (C) 2010 uxebu Consulting Ltd. & Co. KG. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC., DAVID AURELIO, AND UXEBU
 * CONSULTING LTD. & CO. KG ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 * IN NO EVENT SHALL APPLE INC. OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Represents a two-dimensional cubic bezier curve with the starting
 * point (0, 0) and the end point (1, 1). The two control points p1 and p2
 * have x and y coordinates between 0 and 1.
 *
 * This type of bezier curves can be used as CSS transform timing functions.
 */
function CubicBezier(p1x, p1y, p2x, p2y){
    if (!(p1x >= 0 && p1x <= 1)) {
        throw new RangeError("'p1x' must be a number between 0 and 1. "
                               + "Got " + p1x + "instead.");
    }
    if (!(p1y >= 0 && p1y <= 1)) {
        throw new RangeError("'p1y' must be a number between 0 and 1. "
                               + "Got " + p1y + "instead.");
    }
    if (!(p2x >= 0 && p2x <= 1)) {
        throw new RangeError("'p2x' must be a number between 0 and 1. "
                               + "Got " + p2x + "instead.");
    }
    if (!(p2y >= 0 && p2y <= 1)) {
        throw new RangeError("'p2y' must be a number between 0 and 1. "
                               + "Got " + p2y + "instead.");
    }

    // Control points
    this._p1 = { x: p1x, y: p1y };
    this._p2 = { x: p2x, y: p2y };
}

CubicBezier.prototype._getCoordinateForT = function(t, p1, p2){
    var c = 3 * p1,
        b = 3 * (p2 - p1) - c,
        a = 1 - c - b;

    return ((a * t + b) * t + c) * t;
};

CubicBezier.prototype._getCoordinateDerivateForT = function(t, p1, p2){
    var c = 3 * p1,
        b = 3 * (p2 - p1) - c,
        a = 1 - c - b;

    return (3 * a * t + 2 * b) * t + c;
};

CubicBezier.prototype._getTForCoordinate = function(c, p1, p2, epsilon){
    if (!isFinite(epsilon) || epsilon <= 0) {
        throw new RangeError("'epsilon' must be a number greater than 0.");
    }

    // First try a few iterations of Newton's method -- normally very fast.
    for (var t2 = c, i = 0, c2, d2; i < 8; i++) {
        c2 = this._getCoordinateForT(t2, p1, p2) - c;
        if (Math.abs(c2) < epsilon){
            return t2;
        }
        d2 = this._getCoordinateDerivateForT(t2, p1, p2);
        if (Math.abs(d2) < 1e-6){
            break;
        }
        t2 = t2 - c2 / d2;
    }

    // Fall back to the bisection method for reliability.
    t2 = c;
    var t0 = 0,
        t1 = 1,
        c2;

    if (t2 < t0){
        return t0;
    }
    if (t2 > t1){
        return t1;
    }

    while (t0 < t1) {
        c2 = this._getCoordinateForT(t2, p1, p2);
        if (Math.abs(c2 - c) < epsilon){
            return t2;
        }
        if (c > c2){
            t0 = t2;
        }
        else{
            t1 = t2;
        }
        t2 = (t1 - t0) * .5 + t0;
    }

    // Failure.
    return t2;
};

/**
 * Computes the point for a given t value.
 *
 * @param {number} t
 * @returns {Object} Returns an object with x and y properties
 */
CubicBezier.prototype.getPointForT = function(t) {
    // Special cases: starting and ending points
    if (t == 0 || t == 1) {
        return { x: t, y: t };
    }
    // check for correct t value (must be between 0 and 1)
    else if (!(t > 0) || !(t < 1)) {
        throw new RangeError("'t' must be a number between 0 and 1"
                             + "Got " + t + " instead.");
    }

    return {
        x: this._getCoordinateForT(t, this._p1.x, this._p2.x),
        y: this._getCoordinateForT(t, this._p1.y, this._p2.y)
    }
};

CubicBezier.prototype.getTforX = function(x, epsilon){
    return this._getTForCoordinate(x, this._p1.x, this._p2.x, epsilon);
};

CubicBezier.prototype.getTforY = function(y, epsilon){
    return this._getTForCoordinate(y, this._p1.y, this._p2.y, epsilon);
};

/**
 * Computes auxiliary points using De Casteljau's algorithm.
 *
 * @param {number} t must be greater than 0 and lower than 1.
 * @returns {Object} with members i0, i1, i2 (first iteration),
 *     j1, j2 (second iteration) and k (the exact point for t)
 */
CubicBezier.prototype._getAuxPoints = function(t){
    if (!(t > 0) || !(t < 1)) {
        throw new RangeError("'t' must be greater than 0 and lower than 1");
    }

    // First series of auxiliary points
    var i0 = { // first control point of the left curve
            x: t * this._p1.x,
            y: t * this._p1.y
        },
        i1 = {
            x: this._p1.x + t*(this._p2.x - this._p1.x),
            y: this._p1.y + t*(this._p2.y - this._p1.y)
        },
        i2  = { // second control point of the right curve
            x: this._p2.x + t*(1 - this._p2.x),
            y: this._p2.y + t*(1 - this._p2.y)
        };

    // Second series of auxiliary points
    var j0 = { // second control point of the left curve
            x: i0.x + t*(i1.x - i0.x),
            y: i0.y + t*(i1.y - i0.y)
        },
        j1 = { // first control point of the right curve
            x: i1.x + t*(i2.x - i1.x),
            y: i1.y + t*(i2.y - i1.y)
        };

    // The division point (ending point of left curve, starting point of right curve)
    var k = {
            x: j0.x + t*(j1.x - j0.x),
            y: j0.y + t*(j1.y - j0.y)
        };

    return {
        i0: i0,
        i1: i1,
        i2: i2,
        j0: j0,
        j1: j1,
        k: k
    }
};

/**
 * Divides the bezier curve into two bezier functions.
 *
 * De Casteljau's algorithm is used to compute the new starting, ending, and
 * control points.
 *
 * @param {number} t must be greater than 0 and lower than 1.
 *     t == 1 or t == 0 are the starting/ending points of the curve, so no
 *     division is needed.
 *
 * @returns {CubicBezier[]} Returns an array containing two bezier curves
 *     to the left and the right of t.
 */
CubicBezier.prototype.divideAtT = function(t){
    if (t < 0 || t > 1) {
        throw new RangeError("'t' must be a number between 0 and 1. "
                             + "Got " + t + " instead.");
    }

    // Special cases t = 0, t = 1: Curve can be cloned for one side, the other
    // side is a linear curve (with duration 0)
    if (t === 0 || t === 1){
        var curves = [];
        curves[t] = CubicBezier.linear();
        curves[1-t] = this.clone();
        return curves;
    }

    var left = {},
        right = {},
        points = this._getAuxPoints(t);

    var i0 = points.i0,
        i1 = points.i1,
        i2 = points.i2,
        j0 = points.j0,
        j1 = points.j1,
        k = points.k;

    // Normalize derived points, so that the new curves starting/ending point
    // coordinates are (0, 0) respectively (1, 1)
    var factorX = k.x,
        factorY = k.y;

    left.p1 = {
        x: i0.x / factorX,
        y: i0.y / factorY
    };
    left.p2 = {
        x: j0.x / factorX,
        y: j0.y / factorY
    };

    right.p1 = {
        x: (j1.x - factorX) / (1 - factorX),
        y: (j1.y - factorY) / (1 - factorY)
    };

    right.p2 = {
        x: (i2.x - factorX) / (1 - factorX),
        y: (i2.y - factorY) / (1 - factorY)
    };

    return [
        new CubicBezier(left.p1.x, left.p1.y, left.p2.x, left.p2.y),
        new CubicBezier(right.p1.x, right.p1.y, right.p2.x, right.p2.y)
    ];
};

CubicBezier.prototype.divideAtX = function(x, epsilon) {
    if (x < 0 || x > 1) {
        throw new RangeError("'x' must be a number between 0 and 1. "
                             + "Got " + x + " instead.");
    }

    var t = this.getTforX(x, epsilon);
    return this.divideAtT(t);
};

CubicBezier.prototype.divideAtY = function(y, epsilon) {
    if (y < 0 || y > 1) {
        throw new RangeError("'y' must be a number between 0 and 1. "
                             + "Got " + y + " instead.");
    }

    var t = this.getTforY(y, epsilon);
    return this.divideAtT(t);
};

CubicBezier.prototype.clone = function() {
    return new CubicBezier(this._p1.x, this._p1.y, this._p2.x, this._p2.y);
};

CubicBezier.prototype.toString = function(){
    return "cubic-bezier(" + [
        this._p1.x,
        this._p1.y,
        this._p2.x,
        this._p2.y
    ].join(", ") + ")";
};

CubicBezier.linear = function(){
    return new CubicBezier
};

CubicBezier.ease = function(){
    return new CubicBezier(0.25, 0.1, 0.25, 1.0);
};
CubicBezier.linear = function(){
    return new CubicBezier(0.0, 0.0, 1.0, 1.0);
};
CubicBezier.easeIn = function(){
    return new CubicBezier(0.42, 0, 1.0, 1.0);
};
CubicBezier.easeOut = function(){
    return new CubicBezier(0, 0, 0.58, 1.0);
};
CubicBezier.easeInOut = function(){
    return new CubicBezier(0.42, 0, 0.58, 1.0);
};

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/AnimationQueue.js */
// JavaScript Document

var AnimationQueue = Class.extend({
  init: function() {

		this.queuedItems = [];
		this.dequeue = jQuery.proxy(this.realDequeue, this);
	}
});

AnimationQueue.prototype.queue = function(fn) {
	this.queuedItems.push(fn);
}

AnimationQueue.prototype.realDequeue = function() {
	var fn = this.queuedItems.shift();

	if (!fn)
		return;

	fn.call();

}


/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/FinderPage.js */
// JavaScript Document
/*
	Finder Page
	*/

var FinderPage = Class.extend({
  init: function(params) {

		this.doTransition = true;
		this.params = {};

		this.title = params.title;
		this.url = params.url;
		this.navId = params.navId;

		if (params.transitionIn)
			this.transitionIn = params.transitionIn;

		if (params.transitionOut)
			this.transitionOut = params.transitionOut;

		this.pageLoaded = false;
		this.imagesLoaded = false;

		this.preLoad = params.preLoad;

		if (!params.navHighlight)
			this.navHighlight = params.navId;
		else
			this.navHighlight = params.navHighlight;

		if (!this.preLoad)
			this.preLoad = [];

		this.preloadHandler = new PreloadHandler(jQuery.proxy(this.allImagesLoaded, this), this.preLoad);

		this.transitionOutDelay = 500;

	},
	load: function(vars){

		this.params = this.parseQueryString(vars);
		if (this.params.argc) {
			this.params.argc = this.params.argc.split("/");
		}

		if (!this.pageLoaded) {
			// get the contents...
			finder.loadingDisplay.start("page load");
			this.processPageLoad(finder.getTemplate(this.navId));

		}
		else {
			this.allImagesLoaded();
		}

	},

	doTransitions: function(bool) {
		this.doTransition = bool;
	},

	processParams: function() {
		// override me..
        this.parentDiv.trigger({type: "pageUrlChanged", page:this});
	},

	bringToFront: function(){
		console.log(".finderPage#" + this.navId);
		console.log(jQuery(".finderPage#" + this.navId, "#pageContainer").show().css({'visibility': 'visible', 'z-index': 150}));

		jQuery("#finderContainer").trigger("pageLoaded");
		jQuery("#finderContainer").trigger("dataChanged");

	},

	sendToBack: function() {

		jQuery(".finderPage#" + this.navId, "#pageContainer").css({'visibility': 'hidden', 'z-index': 1}).hide();

	},

	transitionIn: function() {
		this.bringToFront();
	},

	transitionOut: function() {
		var self = this;
		setTimeout(function() {
			self.prepareForNextLoad();
			self.sendToBack();
			}, self.transitionOutDelay);
	},

	prepareForNextLoad: function() {

	},

	setup: function() {

	},

	unload: function(){
		var self = this;
		this.transitionOut();

		setTimeout(jQuery.proxy(this.removePage, this), self.transitionOutDelay);

	}
});



FinderPage.prototype.setParent = function (parent)
{
	this.parent = parent;
}

FinderPage.prototype.allImagesLoaded = function() {

	this.processParams();

	if (this.doTransition) {
		this.transitionIn();
	} else {
		this.bringToFront();
	}
}

FinderPage.prototype.processPageLoad = function(data, status, xhr) {
	data = data.replace(/randomDirectory\//g, finder.getConfig().assetsDirectory);
	this.pageLoaded = true;
	jQuery("#pageContainer").append(data);
	this.setup();
	this.preloadHandler.start();
	finder.loadingDisplay.end("page load");
}


FinderPage.prototype.removePage = function() {

	this.pageLoaded = false;
	jQuery("#" + this.navId + ".finderPage", "#pageContainer").remove();

}

FinderPage.prototype.parseQueryString = function (q) {

	var urlParams = {};

    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); }

    while (e = r.exec(q))
       urlParams[d(e[1])] = d(e[2]);

	return urlParams;
}







/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/LoadingDisplay.js */
var LoadingDisplay = Class.extend({
  init: function() {

		this.div = jQuery("#bodyContainer>DIV.loading");
		this.counter = 0;

	}
});

LoadingDisplay.prototype.getDiv = function() {
	return jQuery("#bodyContainer>DIV.loading");
}

LoadingDisplay.prototype.start = function(desc) {
	this.counter++;
	this.div.stop().show();
	console.log("start: " + desc);
}

LoadingDisplay.prototype.end = function (desc) {
	this.counter--;

	if (this.counter <= 0)
	{

		this.counter = 0;
		this.div.fadeOut();
	}
	console.log("end: " + desc);
}


LoadingDisplay.prototype.reset = function() {
	this.counter = 0;
}

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/MacysFinder.js */

var MacysFinder = Class.extend({
  init: function() {
		this.pages = {};
		this.currentPage = false;

		this.loadingDisplay = new LoadingDisplay();
		this.poolCache = new PoolCache();

		this.setupURLHandling();

		jQuery.ajaxSetup( {
			cache: false
		});

		this.templates = {};

		this.skava = new SkavaInterop();
	},

	setTemplates: function(templates) {
		this.templates = templates;
	},

	getTemplate: function(id) {
		return this.templates[id];
	},

	isTablet: function() {
		return Modernizr.touch || navigator.userAgent.match(/iPad/i) != null;
	},

	shouldResizeAndScroll: function() {

	/*
		// change change the document.domain if we are using an iframe for history management.


	    // Does the browser support window.onhashchange? Note that IE8 running in
	    // IE7 compatibility mode reports true for 'onhashchange' in window, even
	    // though the event isn't supported, so also test document.documentMode.
	    var doc_mode = document.documentMode,
	    supports_onhashchange = 'on' + str_hashchange in window && ( doc_mode === undefined || doc_mode > 7 );

		console.log("Native History Support", supports_onhashchange);

		return supports_onhashchange;
	*/

        return Modernizr.hashchange;

	},

	resizePage: function() {
        console.log(' attempting resizePage() ');
		if (!this.shouldResizeAndScroll()) {
            console.log('cannot resizePage()');
			return;
        }

        var height = 0;

        if(null != jQuery("#footerContainer #poolResults").height()) {
            height = jQuery("#finderContainer").height() + jQuery("#footerContainer #poolResults").height();
        }else{
            height = jQuery("#finderContainer").height();
        }
        //console.log('height   ', height);
		try {
			//var currentDomain = document.domain;

			if (window.location.host.indexOf("atfingertips.com") > -1)
				document.domain = "atfingertips.com";
			else
				document.domain = "macys.com";

			$(parent.document.getElementById("social")).css({'height': height + "px"});
			console.log("resized to", height);
			//document.domain = currentDomain;
		} catch (e) {
			console.error("Could not resize page", e);
		}
	},

	scrollPage: function(whereTo) {

		if (!this.shouldResizeAndScroll())
			return;

		var top = 131; //macys header..

		switch (whereTo) {
			case "top":
				top += 0;
				break;

			case "pool":
				var adder = jQuery(".poolHeaderRow", finder.getCurrentPage().parentDiv).offset().top;
				top += adder;
				break;
		}

		try {
			if (window.location.host.indexOf("atfingertips.com") > -1)
				document.domain = "atfingertips.com";
			else
				document.domain = "macys.com";

			//parent.window.scroll(0, top);
			jQuery("HTML,BODY", jQuery(parent.window.document)).animate({scrollTop: top});
			console.log("page scrolled to", top, whereTo, parent, parent.window);
		} catch(e) {
			console.log("Could not scroll page");
		}

	},

	loadPage: function(pageId, query) {

		// see if this is the current page...
		if (this.currentPage && pageId == this.currentPage.navId)
		{

			this.currentPage.load(query);
			finder.pageChanged(this.currentPage);
			return;
		}

		var self = this;


		if (this.currentPage)
			this.currentPage.unload();



		this.loadingDisplay.reset();

		if (!query)
			query = "";



		if (!this.currentPage) {
			this.currentPage = {}
		}



		if (!this.currentPage.transitionOutDelay) {
			this.currentPage.transitionOutDelay = 500;
		}


		jQuery("A.selected").removeClass("selected");

		// is this an alias?
		if (finder.getConfig().aliases[pageId]) {
			var alias = pageId = finder.getConfig().aliases[pageId];
			pageId = alias.page;
			query = "argc=" + alias.query;
		}

		page = this.pages[pageId];
		setTimeout(function(){
            page.load(query);
            finder.pageChanged(page);
        }, this.currentPage.transitionOutDelay + 100);

		//jQuery("A[finderPage=" + page.navHighlight+"]").addClass("selected");


		this.currentPage = page;

	}
});

MacysFinder.prototype.getPoolCache = function() {
	return this.poolCache;
}

MacysFinder.prototype.setupURLHandling = function(){

	var self = this;
	$(window).hashchange( function() {
		self.manageState(location.hash.substring(1));
	})
}

MacysFinder.prototype.manageState = function(state) {
	// parse state...

	console.log(state);

	//console.log(state);

	try {
		closeSharePopup(null, 0);
	} catch(e) { }

	try {
		closePopup();
	} catch(e) { }




	if (state == "")
		state = "/" + this.defaultPage;

	var saveState = state;

	if (state.substring(0,1) == "/")
		state = state.substring(1);

	if (state.indexOf("?") > 0)
	{
		state = state.split("?");
		this.loadPage(state[0], state[1]);
	} else {

		if (state.lastIndexOf("/") > 0)
		{
			state = state.split("/");
			var page = state.shift();;
			var params = "argc=" + state.join("/");
			this.loadPage(page, params);
			return;
		}

		this.loadPage(state);
	}
}


MacysFinder.prototype.startFinder = function()
{
	// parse the url..


	if (window.location.hash == "")
	{
		finder.loadPage(this.defaultPage);
	} else {
		finder.manageState(location.hash.substring(1));
	}

}

MacysFinder.prototype.pageChanged = function() {

}

MacysFinder.prototype.getCurrentPage = function() {
	return this.currentPage;
}

MacysFinder.prototype.addPage = function (page) {
	page.setParent(this);
	this.pages[page.navId] = (page);
}



// JavaScript Document
// PreloadHandler

var PreloadImage = Class.extend({
  init: function(parent, imgsrc) {

		this.handler = parent;
		this.loaded = false;
		this.imgsrc = imgsrc;

		if (this.imgsrc.substring(0,7) != "http://")
			this.imgsrc = finder.getConfig().assetsDirectory + this.imgsrc;

		var pImage = this;

		this.img = new Image();


		jQuery(this.img).bind('load', function(){
			pImage.itemLoaded();
		});

		console.log("preloadimage: " + this.imgsrc);

		this.img.src = this.imgsrc;
	}
});


PreloadImage.prototype.itemLoaded = function() {
	this.loaded = true;
	this.handler.itemLoaded();
}

var PreloadHandler = Class.extend({
  init: function(callback, images) {

		this.callback = callback;
		this.images = images;
		this.preloadItems = [];
		this.isDone = false;
	}
});

PreloadHandler.prototype.start = function()
{
	if (!this.images || this.images.length == 0)
	{
		this.callback();
		return;
	}
	finder.loadingDisplay.start("image preload");
	var myself = this;
	for (var i = 0; i < this.images.length; i++)
	{
		this.preloadItems.push(new PreloadImage(this, this.images[i]));
	}

	this.images = null;
}

PreloadHandler.prototype.itemLoaded = function() {
	if (!this.isDone && this.checkForFullLoad())
	{
		//try {
			finder.loadingDisplay.end("image preload");
			this.isDone = true;
			this.callback();
		//} catch(e) { alert("itemLoaded: " + e.message);}
	} else {

	}

}


PreloadHandler.prototype.checkForFullLoad = function() {
	for (var i = 0; i < this.preloadItems.length; i++)
	{
		if (!this.preloadItems[i].loaded)
			return false;
	}
	return true;
}


var LoadingDisplay = Class.extend({
  init: function() {

		this.div = jQuery("#bodyContainer>DIV.loading");
		this.counter = 0;

	}
});

LoadingDisplay.prototype.getDiv = function() {
	return jQuery("#bodyContainer>DIV.loading");
}

LoadingDisplay.prototype.start = function(desc) {
	this.counter++;
	this.div = jQuery("#bodyContainer>DIV.loading");
	this.div.stop().show();
	console.log("start: " + desc);
}

LoadingDisplay.prototype.end = function (desc) {
	this.counter--;

	if (this.counter <= 0)
	{

		this.counter = 0;
		this.div.fadeOut();
	}
	console.log("end: " + desc);
}


LoadingDisplay.prototype.reset = function() {
	this.counter = 0;
}



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/PinchZoomable.js */
function PinchZoomable(n1){
    var n = jQuery(n1);

    n.each(function(){

		var n3 = jQuery(this);

        if (!n3.attr("rotation") || n3.attr("rotation") == "")
            n3.attr("rotation", "0");

        if (!n3.attr("scale") || n3.attr("scale") == "")
            n3.attr("scale", "1");

        if (!n3.attr("translate") || n3.attr("translate") == "")
            n3.attr("translate", " ");

        if (!n3.attr("deltaX") || n3.attr("deltaX") == "")
            n3.attr("deltaX", 0);

        if (!n3.attr("deltaY") || n3.attr("deltaY") == "")
            n3.attr("deltaY", 0);

        n3.addClass("pinchZoomable");
    })



    n.bind("touchstart", function(e){
        e.preventDefault();

        if (e.originalEvent.touches.length != 1)
            return;

        var node = jQuery(this);

        var nodePosition = node.offset();

        var touch = e.originalEvent.touches[0];

        var xChange = touch.pageX - 1 * node.attr("deltaX");
        var yChange = touch.pageY - 1 * node.attr("deltaY");

        node.attr("offX", xChange);
        node.attr("offY", yChange);

		node.css({
			"-webkit-transform-origin": "50% 50%"
		});

        node.trigger("interactionStart");
    });


    n.bind("touchend", function(e){
        var node = jQuery(this);
        node.trigger("interactionEnd");
    });

    n.bind("touchmove", function(e){

        if (e.originalEvent.touches.length != 1)
            return;

        e.preventDefault();

        var node = jQuery(this);

        var touch = e.originalEvent.touches[0];

        var newX = touch.pageX - node.attr("offX");
        var newY = touch.pageY - node.attr("offY");



        node.attr("deltaX", newX).attr("deltaY", newY);

        newX += "px";
        newY += "px";

        var rotation = parseInt(node.attr("rotation"));
        var scale = node.attr("scale");
        var translate = "translate3d(" + newX + ", " + newY + ", 0px)";
        node.attr("translate", translate);

        //console.log(translate + " rotation(" + rotation + "deg) scale(" + scale + ")");
        node.css({
            "-webkit-transform": translate + " rotate(" + rotation + "deg) scale(" + scale + ")"
        })
    });

    n.bind("gesturestart", function(){

        var node = jQuery(this);

        if (!node.attr("rotation") || node.attr("rotation") == "")
            node.attr("rotation", "0");

        if (!node.attr("scale") || node.attr("scale") == "")
            node.attr("scale", "1");


        node.trigger("interactionStart");
    });

    n.bind("gestureend", function(){

        var node = jQuery(this);
        node.trigger("interactionEnd");
        node.removeClass("interaction");
        node.attr("rotation", node.attr("xrotation"));
        node.attr("scale", node.attr("xscale"));
        console.log("end");


    });

    n.bind("gesturechange", function(f){
        f.preventDefault();
        e = f.originalEvent;
        try {
            var node = jQuery(this);

            var currentRotation = parseInt(node.attr("rotation"));
            var currentScale = 1 * node.attr("scale");


            var newRotation = (currentRotation + e.rotation) % 360;
            var newScale = currentScale * e.scale;
            newScale = newScale.toFixed(2);

            var translate = node.attr("translate");

            // scale and rotation are relative values,
            // so we wait to change our variables until the gesture ends
            //node.style.width = (width * e.scale) + "px";
            //node.style.height = (height * e.scale) + "px";
            node.css("-webkit-transform", translate + " rotate(" + ((newRotation) % 360) + "deg) scale(" + newScale + ")");

            node.attr("xrotation", newRotation);
            node.attr("xscale", newScale);
        }
        catch (e) {

        }
    });

    n.bind("interactionStart", function(e){
        jQuery(this).addClass("interaction");

        var maxZindex = 1;
        var children = jQuery(this).parent().children('.pinchZoomable');
        children.each(function(){
            maxZindex = Math.max(maxZindex, 1 * jQuery(this).css("z-index"));
        });

        jQuery(this).css("z-index", ++maxZindex);
    });

    n.bind("interactionEnd", function(e){
        jQuery(this).removeClass("interaction");
    });
}


/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/PoolBoy.js */

/// JavaScript Document

var PoolBoy = Class.extend({
  init: function(parent) {

		if (!parent)
			parent = false;


		this.proxy = false;
		this.parent = parent;
		this.lastPool = "";
		this.loaded = false;
		this.lastDocument = "";
	}
});

PoolBoy.prototype.loadPool = function(pool, callback, type) {

	if (!type)
		type = "simple";

	this.callback = callback;



	if (this.lastPool == pool && this.loaded)
	{
		this.callback();
		return;
	}

	// see if its in the cache..
	var cachePool = finder.getPoolCache().getPool(pool);

	if (cachePool) {
		if (cachePool != "") {
			// in load from cache..

			this.processPoolResults(jQuery.parseXML(cachePool));
			return;
		}
	}

	this.lastPool = pool;
	this.loaded = false;

	var url= "";

	url = pool;
	//url = "pool.xml";

	this.proxy = false;
	if (this.proxy)
		url = "proxy.php?url=" + escape(url);

	/*try {
		var poolBoyObj = this;
		skavaPoolLoadCallback = function(entries)
		{
			poolBoyObj.processPoolResultsJSON(entries);
		}
		url = url + "&callback=skavaPoolLoadCallback";
		getDataFromServer('id_blackfriday_pool', url) ;

	}
	catch (e) {
		console.log("getDataFromServer Error", "using jQuery ajax instead")
	*/
		jQuery.ajax({
			type: "GET",
			url: url,
			dataType: "jsonp",
			//jsonpCallback: "skavaPoolLoadCallback",
			success: jQuery.proxy(this.processPoolResultsJSON, this)
		});
	/*
	}
	*/

}

PoolBoy.prototype.processPoolResults = function(document, status, xhr) {
	this.loaded = true;
	this.lastDocument = document;
	this.db = new TAFFY([]);
	this.parseDocument(document);

	// save this pool into the cache..
	try {
		xhr.responseText;
		finder.getPoolCache().updateCache(this.lastPool, xhr.responseText);
	} catch (e) { }

	try {
		this.callback();
	} catch(e) {  };
}

PoolBoy.prototype.processPoolResultsJSON = function(document, status, xhr) {
	this.loaded = true;
	this.lastDocument = document;
	this.db = new TAFFY([]);

	this.parseDocumentJSON(document);

	// save this pool into the cache..
	try {
		xhr.responseText;
		finder.getPoolCache().updateCache(this.lastPool, xhr.responseText);
	} catch (e) { }

	try {
		if (this.parent) {
			this.parent.poolContainer.trigger("poolDataLoaded");
		}
	} catch (e) {

	}

	try {
		this.callback();
	} catch(e) {  };
}

PoolBoy.prototype.parseDocumentJSON = function (document) {
	var db = this.db;
	var counter = 0;



	if (!document.entries) {
		document.entries = [];
		document.entryStat = [];
	}

	var helper = new PoolHelper();

	for (var i =0; i < document.entries.length; i++) {

		me = document.entries[i];

		var entry=me.properties;

		entry.entryid = me.entryId;
		entry.label = me.title;
		entry.description = me.comment;
		entry.image_fullImage = me.fileUrl;
		entry.itemUrl = me.itemUrlyeah;
		//entry.voteCount = me.find("votecount").text();
		//entry.ranking = me.find("rankingd").text();

		// get the votes..
		try {
			entry.votes = 0;
			entry.votes = document.entryStats[i].numLikes;
		} catch (e) {
			// do nothing...
		}

		entry.pfeed_priceforfilters = 1 * entry.pfeed_priceforfilters;


		entry.swatches = [];
		try {
			var colors = jQuery.parseJSON(entry.pfeed_colorimage);
			for (j in colors) {
				if (colors[j][0] != "") {
					var swatch = {};
					swatch.title = j;
					swatch.swatchImage = colors[j][0];
					if (colors[j][1])
						swatch.productImage = colors[j][1].replace(/wid=(.*?)&/gi, "wid=%width%&").replace(/hei=(.*?)&/gi, "&");
					else
						swatch.productImage = "";
					entry.swatches.push(swatch);
				}
			}

		} catch(e) {

		}

		entry.promotions = [];
		try {
			entry.promotions = jQuery.parseJSON(entry.pfeed_promotions);
			entry.promotionsText = entry.promotions.join(", ");
			entry.hasPromotions = entry.promotions.length > 0;
		} catch(e) {

		}

		if (entry.pfeed_shopcategory && !(entry.pfeed_shopcategory instanceof Array))
			entry.pfeed_shopcategory = entry.pfeed_shopcategory.split(",");

		if (entry.pfeed_productgroup && !(entry.pfeed_productgroup instanceof Array))
			entry.pfeed_productgroup = entry.pfeed_productgroup.split(",");

		helper.parseEntry(entry);



		entry.pool_insert_id = counter;
		db.insert(entry);

		counter++;

	}
}


PoolBoy.prototype.parseDocument = function (document) {
	var db = this.db;
	var counter = 0;
	jQuery(document).find("entry").each(function() {
		var entry = {};
		me = jQuery(this);

		entry.entryid = me.find("entryid").text();
		entry.label = me.find("label").text();
		entry.description = me.find("description").text();
		entry.image_fullImage = me.find("imageurl").text();
		entry.itemUrl = me.find("itemUrl").text();
		entry.voteCount = me.find("votecount").text();
		entry.ranking = me.find("rankingd").text();

		me.find("prop").each (function() {
			var name = jQuery(this).attr("name");
			var value = jQuery(this).text();
			switch (name) {
				case "pfeed_availability":
				case "pfeed_brand":
				case "pfeed_bvavgrating":
				case "pfeed_bvnumreviews":
				case "pfeed_bvtoprated":
				case "pfeed_id":
				case "pfeed_imageurl":
				case "pfeed_longdescription":
				case "pfeed_name":
				case "pfeed_price1":
				case "pfeed_price2":
				case "pfeed_price3":
				case "pfeed_priceforfilters":
				case "pfeed_saleprice":
				case "pfeed_retailprice":
				case "pfeed_shortdescription":
				case "pfeed_bvavgrating":
				case "pfeed_newarrival":
				case "promogroup":
				case "pfeed_look":
				case "pfeed_customtitle":
				case "pfeed_customdescription1":
				case "pfeed_display":
					entry[name] = value;
					break;

				case "pfeed_bvcomments":
				case "pfeed_bvcommentstitle":
					entry[name] = value.split("%,%").reverse();
					try {
						if (entry[name][0].trim == "")
							array_shift(entry[name]);
					} catch(e) { }
					break;

				default:
					entry[name] = value.split(",");
					break;
			}
		})

		entry.pfeed_priceforfilters = 1 * entry.pfeed_priceforfilters;

		entry.pool_insert_id = counter;
		db.insert(entry);

		counter++;

	});
}

PoolBoy.prototype.showFilteredResults = function (divToUpdate, templateName, filter)
{
	var items = false;


		for (i = 0; i < filter.length; i++) {

			if (!items) {
				if (filter[i].length == 0)
					items = this.db();
				else
					items = this.db(filter[i]);

			}
			else {
				if (filter[i].length > 0)
					items = items.filter(filter[i]);
			}
		}

		if (filter.length > 0)
			items = items.get();
		else
			items = this.db().get();


	try {
		jQuery(templateName).tmpl(items).appendTo(divToUpdate);
		jQuery(divToUpdate).append("<div style='clear: both;'></div>");


		jQuery("#finderContainer").trigger("poolLoaded");
		jQuery(finder.getCurrentPage().parentDiv).trigger("poolLoaded");
		jQuery("#finderContainer").trigger("dataChanged");
	}
	catch (e) {

	}
	return items;
}

PoolBoy.prototype.getFilteredResults = function (filter)
{
	var items = false;


		for (i = 0; i < filter.length; i++) {

			if (!items) {
				if (filter[i].length == 0)
					items = this.db();
				else
					items = this.db(filter[i]);

			}
			else {
				if (filter[i].length > 0)
					items = items.filter(filter[i]);
			}
		}

		if (filter.length > 0)
			items = items;
		else
			items = this.db();


	return items;
}

PoolBoy.prototype.sort = function (filter) {

	this.db.sort(filter);
}



var PoolCache = Class.extend({
  init: function() {

		this.available = true;
		if (!shouldCache || !window['localStorage']) {
			this.available = false;
			return;
		}

		this.storage = window['localStorage'];

		this.cacheLength = 10; //minutes;

	},

	updateCache: function(name, pool) {
		if (!this.available)
			return false;


		this.storage.setItem("TIMESTAMP_" + name, new Date().getTime());


		this.storage.setItem("POOL_" + name, pool);
	},

	getPool: function(name) {


		if (!this.available)
			return false;

		var timestamp = this.storage.getItem("TIMESTAMP_" + name);



		if (!timestamp)
			return false;



		timestamp = timestamp * 1;



		if (timestamp < (new Date().getTime()) - this.cacheLength * 60 * 60 * 1000) {
			// too old..
			// try to remove this pool from the cache..
			this.storage.removeItem("POOL_" + pool);
			this.storage.removeItem("TIMESTAMP_" + pool);
			return false;
		}



		var pool = this.storage.getItem("POOL_" + name);
		if (pool != null) {
			console.log("pool found");
			return pool;
		} else {
			console.log("pool was null");
			return false;
		}
	}
});




/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/SkavaInterop.js */

function sharePopupCloseCallback() {
	jQuery("#finderContainer").trigger("popupsClosed");
}

var SkavaInterop = Class.extend({



    init: function(){

		var self = this;

		this.votedItems = [];
    	this.wishList = new SkavaInteropWishList();
		this.internationalPricing = new SkavaInteropInternationalPricing();


		this.initializeWidgets("BODY");


		// setup event listeners...
		jQuery('[role="skavaInteropShare"]').live({
			click: function(event) {
				event.preventDefault();
				self.share(finder.getConfig().sharing[jQuery(this).attr("config")]);
			}
		});

		jQuery('[role="skavaInteropComment"]').live({
			click: function(event) {
				event.preventDefault();
				self.comment({});
			}
		});

		jQuery('[role="skavaInteropQuickView"]').live({
			click: function(event) {
				event.preventDefault();
				self.quickView({
					productId: jQuery(this).attr("productId")
				});

			}
		});

		jQuery("#finderContainer").bind("deeplinkChanged", function() {

			// on change...
			// look to track...


		});

        jQuery('[role="skavaInteropFitJeansBootcut"]').live({
            //added by shubhra
            click: function(event){
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.101.fitguide.jeans.bootcut", catid:"ca-so-gentlemans.101.fitguide.jeans"});
            }
        });
        jQuery('[role="skavaInteropFitJeansStraight"]').live({
            //added by shubhra
            click: function(event){
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.101.fitguide.jeans.straight", catid:"ca-so-gentlemans.101.fitguide.jeans"});
            }
        });
        jQuery('[role="skavaInteropFitJeansRelaxed"]').live({
            //added by shubhra
            click: function(event){
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.101.fitguide.jeans.relaxed", catid:"ca-so-gentlemans.101.fitguide.jeans"});
            }
        });
        jQuery('[role="skavaInteropFitJeansSlim"]').live({
            //added by shubhra
            click: function(event){
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.101.fitguide.jeans.slim", catid:"ca-so-gentlemans.101.fitguide.jeans"});
            }
        });
        jQuery('[role="skavaInteropFitJeansSkinny"]').live({
            //added by shubhra
            click: function(event){
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.101.fitguide.jeans.skinny", catid:"ca-so-gentlemans.101.fitguide.jeans"});
            }
        });


		jQuery('[role="skavaInteropShareFacebook"]').live({
			click: function(event) {
				event.preventDefault();

				var $this = $(event.currentTarget);
				var $parent = $this.parent();
				var imageUrl = $parent.attr("data-share-image");

                //added by shubhra
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.share.facebook", catid:"ca-so-gentlemans-guide-share"});

                var sharedData = jQuery.extend({}, finder.getConfig().sharing[jQuery(this).attr("config")]);

                if (imageUrl) {
					sharedData.icon = imageUrl;
                }

                sharedData.url = finder.returnUrl();
                console.log(sharedData, " sharedData *************************");

				self.shareFacebook( sharedData );
			}
		});

		jQuery('[role="skavaInteropSharePinterest"]').live({
			click: function(event) {
				event.preventDefault();
				self.sharePinterest(finder.getConfig().sharing[jQuery(this).attr("config")]);
			}
		});

        jQuery('[role="skavaInteropBookaDate"]').live({
            click: function(event) {
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.macysbyappointment", catid:"ca-so-gentlemans-guide"});

            }
        });

		jQuery('[role="skavaInteropShareTwitter"]').live({
			click: function(event) {
				event.preventDefault();
                self.handleTracking(finder.getCurrentPage(), {pageid:"ca-so-gentlemans.share.twitter", catid:"ca-so-gentlemans-guide-share"});

                var sharedData = jQuery.extend({}, finder.getConfig().sharing[jQuery(this).attr("config")]);
                sharedData.url = finder.returnUrl();

                console.log(sharedData, " sharedData *************************");

                self.shareTwitter( sharedData );
			}
		});

		jQuery('[role="skavaInteropShareEmail"]').live({
			click: function(event) {
				event.preventDefault();
				self.shareEmail(finder.getConfig().sharing[jQuery(this).attr("config")]);
			}
		});

		jQuery('[role="skavaInteropSendToMyPhone"]').live({
			click: function(event) {
				event.preventDefault();
				self.sendToMyPhone(finder.getConfig().sharing[jQuery(this).attr("config")]);
			}
		});

		jQuery('[role="skavaInteropPageTracking"]').live({
			click: function(event) {
				var tracking = jQuery(this).attr("tracking");
				tracking = tracking.split(",");
				var obj = {
					pageid: tracking[0],
					catid: tracking[1]
				}

				self.handleTracking(finder.getCurrentPage(), obj);
			}
		})



		jQuery('[role="skavaInteropVote"]').live({
			click: function(event) {
				event.preventDefault();
				event.stopPropagation();
				var item = jQuery(this).parents("[entryId]");

				if (item.hasClass("voted") || finder.skava.beenVotedOn(item.attr("entryId")))
					return;
				else
					item.addClass("voted");

                var params = {

                    entryId: item.attr("entryId"),
                    onSuccess: function(retval1, retval2, code, message){
                        console.log("voting success", retval1, retval2, code, message)

						var newMessage;

						var numVotes = 1 * retval1;

						if (numVotes == 1) {
							newMessage = "1 LOVES THIS &middot;";
						} else {
							newMessage = numVotes + " LOVE THIS &middot;";
						}

						try {
							var db = finder.getCurrentPage().productPool.poolWorker.db({entryid: 1 * item.attr("entryId")});
							console.log("vote update", db, retval1, item.attr("entryId"));
							db.update({
								'votes': 1 * retval1,
								'voteCount': 1 * retval1
							});
							console.log("vote updated", db, retval1,  1 * item.attr("entryId"));
						} catch(e) {
							console.log("Couldn't update vote count in DB");
						}

						jQuery(".voteCount", item).html(newMessage);
						item.addClass("voted");

						finder.getCurrentPage().parentDiv.trigger({type: "skavaVote", votes: numVotes, entryId: item.attr("entryId"), productId: item.attr("productId")});

                    },
                    onCancel: function(){
                    },
					onFailure: function(){
                    }

                }

				self.vote(params);

			}
		})

		this.nullObject = {
	        onOpCancelled: function() { },
	        onOpCompleted: function() { },
	        onSuccess: function() { },
	        onFailure: function() { },
	        PercentLoaded : function() {return 100;}
	    }


    },

	beenVotedOn: function(entryId) {
		return jQuery.inArray(entryId, this.votedItems) > -1;
	},

	initializeWidgets: function(container) {

		var self = this;
		jQuery('[role="skavaInteropLike"]', container).each(function() {
			self.showFBLikeFrame( {
				containerId: jQuery(this).attr("id"),
				url: finder.getConfig().webRoot + jQuery(this).attr("url")
			});
		});

		jQuery('[role="skavaInteropWallWidget"]', container).each(function() {

			self.showFBWallWidget( {
				containerId: jQuery(this).attr("id"),
				url: jQuery(this).attr("url")
			});
		});

		jQuery('[role="skavaInteropWallFeed"]', container).each(function() {
			showWallFeed('wallfeed', 0, 0, 0, 0, 10, jQuery(this)[0])
		});

		jQuery('[role="skavaInteropFBTopRatedHorizontal"]', container).each(function() {
			try {
				showFbTopList(jQuery(this).attr("id"));
			} catch(e) {

			}
		});

		jQuery('[role="skavaInteropFBTopRatedVertical"]', container).each(function() {
			try {
				showFbTopList(jQuery(this).attr("id"), true);
			} catch(e) {

			}
		});
	},

	handleTracking: function(page, vars) {

		try {
			(function() {

				var pageid = vars.pageid;
				var catid = vars.catid;

				if (finder.isTablet()) {
					pageid = vars.pageid.replace("ca-so", "ca-so-ipad")
					catid = vars.catid.replace("ca-so", "ca-so-ipad")
				}


				console.warn("Tracking: ", pageid, catid);
				registerPageViewEx(pageid, catid);

			})();
		} catch(e) {
			console.log(e.message);
		}

	},

	handleTrackingElement: function(page, vars) {

		try {
			(function() {
				console.warn("Element Tracking: ", vars.elementid);
				registerPageViewEx(vars.pageid, vars.catid);

			})();
		} catch(e) {
			console.log(e.message);
		}

	},


    share: function(params){

        var defaultParams = {
            mailerIds: {
                staging: 123,
                production: 123
            },
            url: "http://www.macys.com",
            icon: "http://www.macys.com/logo.jpg",
            facebook: {
                title: "This is the facebook Title",
                description: "This is the facebook description"
            },
            twitter: "this is the tweet",
			pinterest: {
				image: assetsDirectory + "images/fb_share_icon.JPG",
				desc: "this is the pinterest Description"
			},
			position: finder.getConfig().sharing.popupPosition
        };

        jQuery.extend(true, defaultParams, params);

        console.log(defaultParams);
        var mailerId = defaultParams.mailerIds.staging;
        if (isProduction)
            mailerId = defaultParams.mailerIds.production;

        try {
            showSharePopup(null, defaultParams.facebook.title, defaultParams.facebook.description, defaultParams.icon, defaultParams.url, mailerId, null, null, 180, null, defaultParams.twitter, defaultParams.position)
			jQuery("#finderContainer").trigger("popupsOpened");
        }
        catch (e) {
            console.log("Site share not available", defaultParams);

        }

		jQuery("#finderContainer").trigger("popupsOpened");


    },

    comment: function(params){

        var defaultParams = {
            num: 5,
			commentId: 0
        }

        jQuery.extend(true, defaultParams, params);

        try {
            //showFBComment(true, defaultParams.num, finder.getConfig().comment.position[0], finder.getConfig().comment.position[1])
			fgs.showFBCommentFrameEx('fbcomments', 0, defaultParams.num, finder.getConfig().comment.position[0], finder.getConfig().comment.position[1], 800, null, 800);
			jQuery("#finderContainer").trigger("popupsOpened");
        }
        catch (e) {
            console.log("Couldn't show the comment box", e);
        }

		jQuery("#finderContainer").trigger("popupsOpened");

    },

    sendToMyPhone: function(params){
        var defaultParams = {
			phone: {
				title: "SMS Title",
				message: "SMS MESSAGE",
				mailerIds: {
					staging: 407,
					production: 378
				}
			}
        };

        jQuery.extend(true, defaultParams, params);

		var mailerId = defaultParams.phone.mailerIds.staging;
        if (isProduction)
            mailerId = defaultParams.phone.mailerIds.production;

        try {
            sendMessage(this.nullObject, defaultParams.phone.title, defaultParams.phone.message, defaultParams.icon, defaultParams.url, 0, true)
			jQuery("#finderContainer").trigger("popupsOpened");
        }
        catch (e) {
            console.log("phone share not available", defaultParams);
        }

		jQuery("#finderContainer").trigger("popupsOpened");
    },

	shareFacebook: function(params){
        var defaultParams = {
			facebook: {
                title: "facebook title",
                description: "facebook description"
            }
        };

        jQuery.extend(true, defaultParams, params);

        try {
            shareFb(this.nullObject, defaultParams.facebook.title, defaultParams.facebook.description, defaultParams.icon, defaultParams.url)
			jQuery("#finderContainer").trigger("popupsOpened");
        }
        catch (e) {
            console.log("facebook share not available", defaultParams);
        }

		jQuery("#finderContainer").trigger("popupsOpened");
    },

	sharePinterest: function(params){
        var defaultParams = {
			pinterest: {
				image: "",
				desc: ""
			}
        };

        jQuery.extend(true, defaultParams, params);

        try {
            sharePinIt(defaultParams.url, defaultParams.pinterest.image, defaultParams.pinterest.desc)
			jQuery("#finderContainer").trigger("popupsOpened");
        }
        catch (e) {
            console.log("pinterest share not available", defaultParams);
        }

		jQuery("#finderContainer").trigger("popupsOpened");
    },

	shareTwitter: function(params){
        var defaultParams = {
			twitter: "twitter message",
			url: "http://www.macys.com"
        };

        jQuery.extend(true, defaultParams, params);

        try {
            shareTwitterV2(this.nullObject, defaultParams.twitter, "", defaultParams.icon, defaultParams.url)
			jQuery("#finderContainer").trigger("popupsOpened");
        }
        catch (e) {
            console.log("twitter share not available", defaultParams);
        }

		jQuery("#finderContainer").trigger("popupsOpened");
    },

	shareEmail: function(params) {
        var defaultParams = {
			mailerIds: {
				staging: 388,
				production: 388
			}
        };

        defaultParams = jQuery.extend({}, defaultParams, params);

		var mailerId = defaultParams.mailerIds.staging;
        if (isProduction)
            mailerId = defaultParams.mailerIds.production;

        try {
            showEmailPopup(this.nullObject, "", "", defaultParams.icon, defaultParams.url, mailerId);
			jQuery("#finderContainer").trigger("popupsOpened");
        }
        catch (e) {
            console.log("email share not available", defaultParams);
        }

		jQuery("#finderContainer").trigger("popupsOpened");
    },
    quickView: function(params){

        var defaultParams = {
            productId: ""
        }

        jQuery.extend(true, defaultParams, params);

		console.log("quickview called", defaultParams);

        showAddToBag(null, 6, null, 0, defaultParams.productId, finder.getConfig().quickView.bgColor, finder.getConfig().quickView.catId, false, finder.getConfig().quickView.position, null, null, null)
		jQuery("#finderContainer").trigger("popupsOpened");
    },

    showFBLikeFrame: function(params){

        var defaultParams = {
            containerId: "",
            url: "http://www.macys.com"
        }

        jQuery.extend(true, defaultParams, params);

        try {
            fgs.showFBLikeFrame("blankFrmeId", false, defaultParams.url, 0, 0, "top", "left", null, defaultParams.containerId, {
                position: "relative"
            });
        }
        catch (e) {
            console.log("Could not show FB Like Frame", e);
        }
    },

    showFBWallWidget: function(params){

        var defaultParams = {
            containerId: "",
            url: "http://www.macys.com"
        }

        jQuery.extend(true, defaultParams, params);

        try {
        	console.log(defaultParams.url);
        	fgs.showFBLikeBox("blankFrmeId", false, defaultParams.url, 255, 566, 255, 566, true, true, false, 7, 11, 'left', 'top', 400, defaultParams.containerId)

            /*fgs.showFBLikeFrame("blankFrmeId", true, defaultParams.url, 0, 0, "top", "left", null, defaultParams.containerId, {
                position: "relative"
            });
            */
        }
        catch (e) {
            console.log("Could not show FB Like Frame", e);
        }
    },

    //fgs.showFBLikeBox(idFrame, useXFBMLLike, urlToLike, lbcWidth, lbcHeight, lbWidth, lbHeight, show_faces, stream, header, xoffset, yoffset, xanchor, yanchor, zPos, containerEl)

	closePopups: function() {
		try {
			closePopup();
			jQuery("#finderContainer").trigger("popupsClosed");
		} catch (e) {
			console.log("Could not call closePopup");
		}
	},

	vote: function(params) {

		var defaultParams = {

			entryId: "",
			onSuccess: function(retval1, retval2, code, message) {console.warn("callback not specified from voting")},
			onCancel: function() {}

		}

		jQuery.extend(true, defaultParams, params);


		if (finder.skava.beenVotedOn(1 * defaultParams.entryId))
			return;
		finder.skava.votedItems.push(1 * defaultParams.entryId);

		var voteCallback = function(respcode, respmsg, opcode, retval1, retval2) {
			console.log("in callback", respcode, respmsg, opcode, retval1, retval2);
			if (respmsg == "Success") {
				defaultParams.onSuccess(retval1, retval2, respcode, respmsg);
			} else {
				defaultParams.onFailure(respcode, respmsg, opcode);
			}

			try {
				jQuery("OBJECT", finder.getCurrentPage().parentDiv).each(function() {

					console.warn(retval1, retval2, respcode, respmsg);
					this.sendVotingData([{label: "",entryid:defaultParams.entryId, votes:retval1}]);
					});
			} catch (e) {
				console.log("Tried forwarding the vote callback into flash...", e);
			}
		}

		var swfVoteFor =
		{
		    onOpCancelled: defaultParams.onCancel,
		    onOpCompleted: voteCallback,
		    PercentLoaded : function() {return 100;}
		};

		try {
			voteForEx(swfVoteFor, defaultParams.entryId, "Macy's");
		} catch(e) {
			console.log("Couldn't call the voting function", e, defaultParams, swfVoteFor);
		}


	}

});



var SkavaInteropInternationalPricing = Class.extend({



	init: function() {

		var self = this;
		this.isInternational = false;

		var obj = {
			onInitializeInternational: function(available, response) {
				console.log("international pricing is available", available);
				if (available) {
					self.isInternational = true;
				} else {
					self.isInternational = false;
				}
			},
			onUpdateInternational: function(response) {
				console.log(response, "response from international");

				for (i in response.internationaldetail) {
					var item = jQuery(".productListing[productId='" + i + "']");
					if (response.internationaldetail[i].shippingavailability == "N") {
						jQuery(".price1", item).html("Not available for shipping");
						jQuery(".price2", item).html("");
						jQuery(".price3", item).html("");
					}
					else {
						jQuery(".price1", item).html(response.internationaldetail[i].pfeed_price1);
						jQuery(".price2", item).html(response.internationaldetail[i].pfeed_price2);
						jQuery(".price3", item).html(response.internationaldetail[i].pfeed_price3);
					}
				}

			}
		}


        setTimeout(function(){
            try {
                initializeInternational(obj);
            }
            catch (e) {
                console.log("Could not initialize the international pricing...", e);
            }
        }, 2000);



		jQuery("#finderContainer").bind("poolPageChanged", function() {

			// don't process this if we are not international...
			if (!self.isInternational) {
				return;
			}

			var productIds = [];

			jQuery(".productListing[productId]:visible").each(function() {
				productIds.push(jQuery(this).attr("productId"));
			});

			if (productIds.length == 0)
				return;

			try {
				getInternationalDetails(productIds.join(","));
			} catch (e) {
				console.log("Couldn't get international procing details", e);
			}

		});



	}
});


var SkavaInteropWishList = Class.extend({

	init: function() {},

	initialize: function(callback) {

		var self = this;

		self.items = [];

		var myCallback;
		if (!callback)
			myCallback = function(name, num, items, fbImage) {}
		else
			myCallback = callback;

		var callbackObj = {
			onOpCompleted: function(code, msg, opcode, retval1, retval2) {},
			onUpdateWishList: function(name, num, items, fbImage) {

				console.log("in wishlist callback", name, num, items, fbImage);
				self.items = items;
				self.name = name;
				self.fbImage = fbImage;

				jQuery("[role='skavaInteropWishListCount']").html(num);

				self.checkProducts();

				myCallback(name, num, items, fbImage);
			}
		}

		jQuery("#finderContainer").bind('poolPageChanged', function() {
			self.checkProducts();
		});

		try {
			(function() { initializeWishList(callbackObj, 211, 200, null, true); })();
		} catch (e) {
			console.log("Wish list - initialization error", e);
		}
		console.log("Wish list initialized");

		// attach event handlers...

		jQuery('[role="skavaInteropWishListSignIn"]').click(function(event) {
			console.log("in login");
			self.showLogin();

			event.preventDefault();
			event.stopPropagation();
		});

		jQuery('[role="skavaInteropWishListSignOut"]').live ("click", function(event) {
			console.log("in logout");
			self.doLogout();

			event.preventDefault();
			event.stopPropagation();
		});

		jQuery('[role="skavaInteropWishListLauncher"]').live("click", function(event) {
			console.log("in open wishlist");
			self.show();

			event.preventDefault();
			event.stopPropagation();
		});

		jQuery('[role="skavaInteropWishListAdder"]').live("click", function(event) {

			console.log("in add to wishlist");

			var product = jQuery(this).parents(".productListing");
			self.add(product.attr("productId"));

			event.preventDefault();
			event.stopPropagation();
		});


	},

	checkProducts: function() {
		jQuery(".productListing").removeClass("inWishlist");
		for (i = 0; i < this.items.length; i++)
		{
			jQuery(".productListing[productId='" + this.items[i] + "']").addClass("inWishlist");
		}
	},

	add: function(productId) {
		try {
			addToWishList(productId);
		} catch (e) {
			console.log("Wish List - Could not add to wish list", productId, e);
		}
	},

	inWishlist: function(productId) {
		return jQuery.inArray(productId, this.items) > -1;
	},

	show: function() {
		try {
			showWishList(49, 27);
		} catch (e) {
			console.log("Wish List - Could not show wish list", e);
		}
	},

	getCount: function() {
		try {
			getWishListCount();
		} catch (e) {
			console.log("Wish List - Could not get wish list count", e);
		}
	},

	showLogin: function() {
		try {
			showLogin();
		} catch (e) {
			console.log("Wish List - Could not show login", e);
		}
	},

	doLogout: function() {
		try {
			doLogout();
		} catch (e) {
			console.log("Wish List - Could not show logout", e);
		}
	},

	showInfo: function() {
		try {
			showWishlistInfoOverlay(1);
		} catch(e) {
			console.log("Tried to call the wishlist info overlay");
		}
	}



});




/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/SkavaInteropBridal.js */

var SkavaInteropBridal = Class.extend({

	init: function() {

		this.products = false;
		this.user = false;

		var self = this;

		jQuery('[role="skavaInteropBridalSignIn"]').click(function(event) {
			console.log("in login");
			self.showLogin();

			event.preventDefault();
			event.stopPropagation();
		});

		jQuery('[role="skavaInteropBridalSignOut"]').live ("click", function(event) {
			console.log("in logout");
			self.doLogout();

			event.preventDefault();
			event.stopPropagation();
		});

		jQuery('[role="skavaInteropBridalLauncher"]').live("click", function(event) {
			console.log("in open bridal");
			self.show();

			event.preventDefault();
			event.stopPropagation();
		});

		jQuery('[role="skavaInteropBridalAdder"]').live("click", function(event) {

			console.log("in add to wishlist");

			var product = jQuery(this).parents(".productListing");
			self.add(product.attr("productId"));

			event.preventDefault();
			event.stopPropagation();
		});


		this.callbacks = {

			onOpCompleted: function(code, msg, opcode, retval1, retval2) {},
			afterProcess: function(actionName, response) {

				console.log("in brial response", actionName, response);
				finder.skava.bridal.lastResponse = response;
				response = JSON.parse(response);
				if (actionName == "signin" || actionName == "getsignedinuser") {
					finder.skava.bridal.user = response.user;
					jQuery("#finderContainer").trigger("bridalSignInStateChanged");
				}

				if (actionName == "addtomylist") {
					finder.skava.bridal.products = [];
					finder.skava.bridal.user.numitems = response.entries.size;
					jQuery("#finderContainer").trigger("bridalProductsUpdated");
				}


			}
		}

		this.isSignedIn();

	},

	isSignedIn: function() {

		try {
			WEDDINGSHOP.isSignedIn(this.callbacks)
		} catch(e) {
			console.log("Couldn't check signin");
		}

	},

	checkProducts: function() {
		jQuery(".productListing").removeClass("inWishlist");
		for (i = 0; i < this.items.length; i++)
		{
			jQuery(".productListing[productId='" + this.items[i] + "']").addClass("inWishlist");
		}
	},

	add: function(productId) {
		try {
			WEDDINGSHOP.addItemsToList(this.callbacks, productId)
		} catch (e) {
			console.log("bridal - Could not add to bridal", productId, e);
		}
	},

	inWishlist: function(productId) {
		return jQuery.inArray(productId, this.items) > -1;
	},

	show: function() {
		try {

			var obj = {
				onOpCompleted: function() {},
				onOpCanceled: function() {}
			}

			wedshopShowBridalPartyOverlay(obj, 0, 0)
		} catch (e) {
			console.log("Bridal Party - Could not show Bridal Party", e);
		}
	},

	getCount: function() {

		if (this.user) {
			return this.user.numitems;
		}

		return 0;
	},

	showLogin: function() {
		try {
			WEDDINGSHOP.showSignIn(null, null, null, this.callbacks)
		} catch (e) {
			console.log("Bridal - Could not show login", e);
		}
	},

	doLogout: function() {
		try {
			wedshopSignout();
			this.user = false;
			jQuery("#finderContainer").trigger("bridalSignInStateChanged");
		} catch (e) {
			console.log("Bridal - Could not show logout", e);
		}
	}





});


/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/TrendBrowser.js */

var TrendBrowser = Class.extend({



    init: function(container, config){

		this.container = container;
		this.config = config.config;
		this.videoUrl = config.videoUrl;

		this.container.addClass("TrendBrowser");

		var self = this;

		// create elements...
		this.bigImageContainer = jQuery("<div class='trendImageContainer'></div>").appendTo(this.container);
		this.thumbContainer = jQuery("<div class='trendThumbContainer'></div>").appendTo(this.container);
		this.copyContainer = jQuery("<div class='trendCopyContainer'></div>").attr("role", "skavaInteropQuickView").appendTo(this.container);

		this.videoContainer = jQuery("<div class='trendVideoContainer'></div>").appendTo(this.container);

		jQuery("<img src='" + config.videoImage + "' border='0'>").appendTo(this.videoContainer);
		jQuery("<img src='" + finder.getConfig().assetsDirectory + "images/playvideo.png' class='playVideoButton' border='0'>").appendTo(this.videoContainer);

		this.videoContainer.hover (function() {
			jQuery(this).addClass('hover');
		}, function() {
			jQuery(this).removeClass('hover');
		}).click(function() {
			finder.getCurrentPage().showVideo(self.videoUrl);
		})

		this.copyContainer.hover(function() {
			jQuery(this).addClass("hover");
		}, function() {
			jQuery(this).removeClass("hover");
		}).click(function() {
			// do tracking..
			finder.getCurrentPage().trackBuyNow();
		})


		// do the image preloading...
		// preload all the thumbs... and the first look image...
		var images = [];
		for (i in this.config)
		{
			images.push(this.config[i].thumbUrl);
		}
		for (i in this.config)
		{
			images.push(this.config[i].imageUrl);
			break;
		}

		this.preloader = new PreloadHandler(function() {
			self.fillThumbs();
		}, images);
		this.preloader.start();

    },

	fillThumbs: function() {

		for (i in this.config) {
			var look = this.config[i];
			var img = new Image();
			jQuery(img).attr("look_id", i).css("opacity", "0").appendTo(this.thumbContainer);
			img.src = look.thumbUrl;
		}

		var pageBuild = new AnimationEngine();

		var before = {
			opacity: 0,
			x: 50
		}

		var after = {
			opacity: 1,
			x: 00
		}

		pageBuild.animate(jQuery("IMG", this.thumbContainer), before, after, {easing: 'easeOutQuint', duration: 1000});

		var self = this;
		jQuery("IMG", this.thumbContainer).click(function() {
			if (jQuery(this).hasClass("selected"))
				return;
			self.showLook(jQuery(this).attr("look_id"));
		})

		setTimeout(function() {
		jQuery(jQuery("IMG", self.thumbContainer)[0]).trigger("click");
		}, 2000);

	},

	showLook: function(look) {
		jQuery("IMG", this.thumbContainer).removeClass("selected");
		jQuery("IMG[look_id='" + look + "']", this.thumbContainer).addClass("selected");

		var thisLook = look;
		var self = this;

		// start preloading the image...
		var img = new Image();
		img.onload = function() {
			self.lookImageLoaded(look, this);
		}
		img.src = this.config[look].imageUrl;
	},

	lookImageLoaded: function (look_id, img) {

		this.manageImage(look_id, img);
		this.manageCopy(look_id);

	},

	manageCopy: function(look_id) {

		var config = this.config[look_id];

		var products = []
		var productIds = [];
		for (i in config.products) {

			productIds.push(config.products[i].productId);

			if (!config.products[i].display)
				continue;

			if (!config.products[i].description)
				config.products[i].description = [];

			config.products[i].formattedPrice = "$" + config.products[i].price.toFixed(2);
			config.products[i].formattedDescription = config.products[i].description.join("<BR>");

			products.push(config.products[i]);
		}

		console.log(products, config);

		var productsHtml = jQuery("#trendBrowserTemplate").tmpl(products);

		var styleAlert = jQuery("<div class='product styleAlert'></div>");
		jQuery("<div class='alertTitle'>Style Alert:</div>").appendTo(styleAlert);
		jQuery("<div class='alert'>" + config.styleAlert + "</div>").appendTo(styleAlert);

		var button = jQuery("<div class='product buyButton'><img src='" + finder.getConfig().assetsDirectory + "images/trends/buyNowYellow.png'></div>");

		jQuery("DIV.product", productsHtml).css("opacity", "0");



		// get the existing items in this container..
		var existingHtml = jQuery("DIV.product", this.copyContainer);


		var pageBuild = new AnimationEngine();

		var scrollOutBefore = {
			opacity: 1,
			y: 0
		}

		var scrollOutAfter = {
			opacity: 0,
			y: -100
		}

		var scrollInBefore = {
			opacity: 0,
			y: 100
		}

		var scrollInAfter = {
			opacity: 1,
			y: 0
		}

		pageBuild.animate(existingHtml, scrollOutBefore, scrollOutAfter, {easing: "easeOutQuint", duration: 750});

		var self = this;
		setTimeout(function() {
			self.copyContainer.attr("productId", productIds.join(","));
			jQuery("DIV.product", self.copyContainer).remove();
			productsHtml.appendTo(self.copyContainer);

			styleAlert.appendTo(self.copyContainer);
			button.appendTo(self.copyContainer);
			pageBuild.animate(jQuery("DIV.product", self.copyContainer), scrollInBefore, scrollInAfter, {easing: "easeOutQuint", duration: 1500});
		}, 750);


	},

	manageImage: function(look_id, img) {
		var image = jQuery(img);
		image.attr("look_id", look_id);
		image.css ( {
			"-webkit-transform-origin": "0% 0%",
			"-webkit-transform": "rotate3d(0,1,0, 90deg)"
		})

		// get any existing images in this container..
		var existingImages = jQuery("IMG", this.bigImageContainer);

		this.bigImageContainer.append(image);

		var pageBuild = new AnimationEngine();

		// rotate the existing ones out...
		// and the new on in...

		var rotateOutBefore = {
			rotateY: 00
		}

		var rotateOutAfter = {
			rotateY: -90
		}

		var rotateInBefore = {
			rotateY: 90,
			opacity: 0
		}

		var rotateInAfter = {
			rotateY: 0,
			opacity: 1
		}

		existingImages.css("z-index", 100);
		image.css("z-index", 190);

		pageBuild.animate(existingImages, rotateOutBefore, rotateOutAfter, {easing: "easeOutQuint", duration: 2000});
		pageBuild.animate(image, rotateInBefore, rotateInAfter, {easing: "easeOutQuint", duration: 2000});

		var self = this;

		setTimeout(function() {
			// remove all images that are not the currently selected ones...
			// get selected image..
			var look_id = jQuery("IMG.selected", self.thumbContainer).attr("look_id");
			jQuery("IMG[look_id!='" + look_id + "']", self.bigImageContainer).remove();
		}, 2000);


	}




});


/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/animation.js */
var cssTimingFunctions = {

	easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
	easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
	easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
	easeInCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
	easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
	easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
	easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
	easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
	easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
	easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
	easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
	easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
	easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
	easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
	easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
	easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
	easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
	easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
	easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
	easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
	easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)"

}


var AnimationEngine = Class.extend ( {


	init: function() {

	},

	removeAnimations: function(elem) {
		elem.css({
			"-webkit-transition": "none",
			"-moz-transition": "none",
			"-o-transition": "none",
			"-ms-transition": "none"
		});

		elem.css({
			"-webkit-transition-duration": "0s",
			"-webkit-transition-delay": "0s",
			"-moz-transition-duration": "0s",
			"-moz-transition-delay": "0s",
			"-o-transition-duration": "0s",
			"-o-transition-delay": "0s",
			"-ms-transition-duration": "0s",
			"-ms-transition-delay": "0s"
		});
	},

	animate: function(item, from, to, params) {

		var self = this;

		item = jQuery(item);

		var defaultParams = {
			easing: "ease-in",
			delay: 0,
			delayEach: 100,
			duration: 500,
			forceJQuery: false
		};

		params = jQuery.extend({}, defaultParams, params);

		var useJQuery = true;
		if (Modernizr.csstransitions && !params.forceJQuery)
		{
			useJQuery = false;
		}

		if (!useJQuery) {
			switch (params.easing) {
				case "ease-in":
				case "easein":
				case "ease-out":
				case "easeout":
				case "linear":
				case "ease-in-out":
				case "easeinout":
					// do nothing..
					break;

				default:
					if (params.easing.indexOf("cubic-bezier") == -1) {
						if (!cssTimingFunctions[params.easing])
							params.forceJQuery = true;
						else
							params.easing = cssTimingFunctions[params.easing];
					}
			}
		}

		// idea behind animations is to clone the object..
		// position it above the original object...
		// hide the original...
		// then animate the clone..
		// after animation.. hide the clone.. and make the orignial visible..
		// this should be the jQuery method.  For CSS transitions...
		// no cloning.. just transform the original..



		var normalizedExpressions = this.prepare(item, from, to, useJQuery);

		if (useJQuery)
		{
			// wrap all elements into a div...
			this.addWrappers(item);
			(function() {
				item.each(function(i) {
					console.log("jQuery");
					jQuery(this).stop()
								.css(normalizedExpressions.from)
								.delay(params.delay + (params.delayEach * i))
								.animate(normalizedExpressions.to, params.duration, params.easing);

				});
			})();
		} else {
			(function() {

				item.each(function(i) {
					self.cssTransform(	this,
										normalizedExpressions.from,
										normalizedExpressions.to,
										params.duration,
										params.delay + (params.delayEach * i),
										params.easing
									);
				});

			})();
		}



	},

	cssTransform: function(elem, before, after, timing, delay, easing) {

		var elem = jQuery(elem);

		if (!easing)
			easing = "ease-in-out";

		if (!timing)
			timing = ".5s"

		if (!delay)
			delay = "0s"

		// reset all animation attributes..
		elem.css({
			"-webkit-transition-duration": "0s",
			"-webkit-transition-delay": "0s",
			"-moz-transition-duration": "0s",
			"-moz-transition-delay": "0s",
			"-o-transition-duration": "0s",
			"-o-transition-delay": "0s",
			"-ms-transition-duration": "0s",
			"-ms-transition-delay": "0s"
		});

		// apply before items...
		elem.css(before);

		setTimeout(function() {
			elem.css({
				"-webkit-transition-duration": timing+"ms",
				"-webkit-transition-delay": delay+"ms",
				"-webkit-transition-timing-function": easing,

				"-moz-transition-duration": timing+"ms",
				"-moz-transition-delay": delay+"ms",
				"-moz-transition-timing-function": easing,

				"-o-transition-duration": timing+"ms",
				"-o-transition-delay": delay+"ms",
				"-o-transition-timing-function": easing,

				"-ms-transition-duration": timing+"ms",
				"-ms-transition-delay": delay+"ms",
				"-ms-transition-timing-function": easing
			});
			elem.css(after);
		}, 10);

	},

	prepareItems: function(items) {
		this.addWrappers(items)
	},

	addWrappers: function(item) {

		var data = [];

		item.each(function() {
				var thisItem = jQuery(this);

				if (thisItem.hasClass("hasWrapper"))
					return;

				var size = thisItem.size();
				var position = thisItem.position();

				data.push({'size': size, 'position': position});
			});

		item.each(function() {
			var thisItem = jQuery(this);
			if (thisItem.hasClass("hasWrapper"))
				return;

			var dataPiece = data.shift();


			thisItem.css({
				position: 'relative',
				top: '0px',
				left: '0px',
				bottom: '0px',
				right: '0px'
			})
			.wrap("<div class='animationWrapper' style='position: absolute; top:" + dataPiece.position.top + "px; left: " + dataPiece.position.left + "px;'>")
			.addClass("hasWrapper");
		})
	},

	prepare: function (item, from, to, useJQuery) {

		var defaultFrom = {
			x: 0,
			y: 0,
			z: 0,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			scale: 1
		}

		from = jQuery.extend({}, defaultFrom, from);
		to = jQuery.extend({}, from, to);

		// what type of animation are we going to do...
		if (!useJQuery)
		{
			// this will be a css transition..
			var fromTranslate = "";
			var toTranslate = "";
			var fromRotate = "";
			var toRotate = "";


			// do we have 3d transforms?
			if (Modernizr.csstransforms3d)
			{
				// translates
				fromTranslate += "translate3d(" + from.x + "px, " + from.y + "px, " + from.z + "px)";
				toTranslate += "translate3d(" + to.x + "px, " + to.y + "px, " + to.z + "px)";
				fromTranslate += " rotateX(" + from.rotateX + "deg) rotateY(" + from.rotateY + "deg) rotate(" + from.rotateZ + "deg)";
				toTranslate += " rotateX(" + to.rotateX + "deg) rotateY(" + to.rotateY + "deg) rotate(" + to.rotateZ + "deg)";

			} else {
				fromTranslate += "translateX(" + from.x + "px) translateY(" + from.y + "px)";
				toTranslate += "translateX(" + to.x + "px) translateY(" + to.y + "px)";
				fromTranslate += " rotate(" + from.rotateZ + "deg)";
				toTranslate += " rotate(" + to.rotateZ + "deg)";
			}

			// add in scales...
			fromTranslate += " scale(" + from.scale + ")";
			toTranslate += " scale(" + to.scale + ")";


			from['-webkit-transform'] = fromTranslate;
			from['-moz-transform'] = fromTranslate;
			from['-o-transform'] = fromTranslate;
			from['-ms-transform'] = fromTranslate;

			to['-webkit-transform'] = toTranslate;
			to['-moz-transform'] = toTranslate;
			to['-o-transform'] = toTranslate;
			to['-ms-transform'] = toTranslate;

		} else {
			// this will be a jQuery transition...

			from['left'] = from.x + "px";
			from['top'] = from.y + "px";

			to['left'] = to.x + "px";
			to['top'] = to.y + "px";

		}

		from = this.removeUnwantedExpressions(from);
		to = this.removeUnwantedExpressions(to);

		return {"from": from, "to": to};
	},

	removeUnwantedExpressions: function (expression) {
		var returner = {};
		for (i in expression)
		{
			switch (i.toLowerCase())
			{
				case "x":
				case "y":
				case "z":
				case "rotatex":
				case "rotatey":
				case "rotatez":
				case "scale":
					// do nothing..
					break;

				default:
					returner[i] = expression[i];
					break;
			}
		}
		return returner;
	}








});

var Animation = Class.extend({
	init: function() {
		this.queue = "";

		// create a div to hold our clones...
		if (jQuery("#cloneHolder").length == 0) {
			jQuery("<div id='cloneHolder'></div>").css({width:"1px", height: "1px", display: 'none'}).appendTo(document.body);
		}
	},

	getClone: function (elem) {
		var clone = jQuery("#" + elem.attr("id"), "#cloneHolder");
		if (clone.length == 0) {
			clone = elem.clone();
		} else {
			clone.remove();
		}
		return clone;
	},

	animateIn: function (items, initialState, timing, delay, forceJQuery)
	{
		if (!timing)
			timing = 500;

		if (!delay)
			delay = 100;

		if (!forceJQuery)
			forceJQuery = false;

		var self = this;
		jQuery(items).each (function(i) {
			elem = this;
			var elem = jQuery(elem);
			elem.attr("oldVisibility", elem.css("visibility"));
			var position = elem.position();

			// clone the original object... and then hide it..
			var clone = self.getClone(elem);
			elem.css({visibility: "hidden"});
			clone.css({visibility: 'visible'});

			elem.addClass("being_animated");

			// prepare the clone for animation...
			var defaults = {}
			for (var j in initialState)
			{
				switch (j) {
					case "top":
						defaults['top'] = position.top;
						if (!initialState['left'])
							defaults['left'] = position.left;
						break;

					case "left":
						defaults['left'] = position.left;
						if (!initialState['top'])
							defaults['top'] = position.top;
						break;

					default:
						defaults[j] = elem.css(j);
						break;
				}
			}
			defaults.position = "absolute";
			defaults.opacity = elem.css("opacity");

			var callback = function(){
				elem.css({
					visibility: "inherit"
				});
				elem.removeClass("being_animated");
				jQuery(this).remove();
				if (!Modernizr.csstransitions)
					jQuery(this).appendTo("#cloneHolder");
			}

			if (Modernizr.csstransitions && !forceJQuery)
			{
				self.animateWithCss(elem, clone, initialState, defaults, timing * 1.5, (delay * (i + 1)) * 1.5, callback);
				self.addNavBlock((timing * 1.5) + ((delay * (i + 1)) * 1.5));
			} else {
				self.animateWithJQuery(elem, clone, initialState, defaults, 1000, delay, callback);
				self.addNavBlock(1000 + delay);
			}
		});

	},

	addNavBlock: function(delay) {
		finder.addNavBlock(delay)
	},

	animateOut: function(items, finalState, timing, delay, forceJQuery) {
		if (!timing)
			timing = 500;

		if (!delay)
			delay = 100;

		if (!forceJQuery)
			forceJQuery = false;

		var self = this;
		jQuery(items).each (function(i) {

			var elem = jQuery(this);
			var position = elem.position();

			// clone the original object... and then hide it..
			var clone = self.getClone(elem);
			elem.css({visibility: "hidden"});

			elem.addClass("being_animated");

			// prepare the clone for animation...
			var startState = {};
			for (var i in finalState)
			{
				switch (i) {
					case "top":
						startState['top'] = position.top;
						if (!finalState['left'])
							startState['left'] = position.left;
						break;

					case "left":
						startState['left'] = position.left;
						if (!finalState['top'])
							startState['top'] = position.top;
						break;

					default:
						startState[i] = elem.css(i);
						break;
				}
			}
			startState.position = "absolute";
			startState.opacity = elem.css("opacity");

			var callback = function() {
				jQuery(this).remove();
				elem.removeClass("being_animated");
			}

			if (Modernizr.csstransitions && !forceJQuery)
			{
				self.animateWithCss(elem, clone, startState, finalState, timing, delay * (i + 1), callback);
				self.addNavBlock(timing + (delay * (i + 1)));
			} else {
				self.animateWithJQuery(elem, clone, startState, finalState, timing, delay, callback);
				self.addNavBlock(1000 + delay);
			}
		});
	},

	cleanInitialState: function(initialState, elem, pos)
	{
		// check of += and -= type things..
		var initial = jQuery.extend({}, initialState);
		if (initial.top)
			initial.top = this.processIncrementalCssItem(initial.top, pos.top);

		if (initial.left)
			initial.left = this.processIncrementalCssItem(initial.left, pos.left);
		return initial;
	},

	processIncrementalCssItem: function(change, original)
	{
		change = "" + change;
		change.replace("px", "");

		if (change.substring(1,2) == "=")
		{

			var operator = change.substring(0, 1);
			change = change.substring(2);

			switch (operator)
			{
				case "+":
					change = (1 * change) + original;
					break;

				case "-":
					change = original - (1 * change);
					break;
			}
		}

		return change;
	},

	animateWithCss: function(elem, clone, initialState, defaults, timing, delay, callback)
	{
		var self = this;
		var position = jQuery(elem).position();
		defaults = self.cleanInitialState(defaults, elem, position);
		var initials = self.cleanInitialState(initialState, elem, position);
		initialState = jQuery.extend({}, defaults, initials);

		// use translate instead of top and left..
		if (!initialState.top && !initialState.left) {

		}
		else {


			if (isNaN(defaults.top))
				defaults.top = initialState.top;

			if (isNaN(defaults.left))
				defaults.left = initialState.left;


			var topDiff = defaults.top - initialState.top;
			var leftDiff = defaults.left - initialState.left;

			initialState.top += "px";
			initialState.left += "px";

			defaults.top = initialState.top;
			defaults.left = initialState.left;
			defaults["-webkit-transform"] = "translate3d(" + leftDiff + "px, " + topDiff + "px, 0px)";

		}
		clone.css(initialState);
		clone.css ({
			"-webkit-transition": "all " + timing + "ms ease-in-out"
		});

		clone.appendTo(elem.parent());

		clone[0].addEventListener("webkitTransitionEnd", callback, true);

		setTimeout(function() {clone.css(defaults);}, delay);


	},

	animateWithJQuery: function (elem, clone, initialState, defaults, timing, delay, callback)
	{
		var position = jQuery(elem).position();
		var initials = this.cleanInitialState(initialState, elem, position);
		initialState = jQuery.extend({}, defaults, initials);
		initialState.top += "px";
		initialState.left += "px";

		defaults.top += "px";
		defaults.left += "px";


		var uniques = this.parseUniques(initialState, defaults);

		clone.appendTo(elem.parent());
		clone.css(uniques.initialState)



		setTimeout(function(){
			clone.animate(uniques.defaults, timing, "swing", callback);
		}, delay);


	},

	parseUniques: function (initial, def) {
		var i = {};
		var d = {};
		for (j in def)
		{
			try {
				if (initial[j] != def[j] && initial[j] + "px" != def[j] && initial[j] != def[j] + "px")
				{
					i[j] = initial[j];
					d[j] = def[j];
				}
			} catch(e) { }
		}
		return {initialState: i, defaults: d};
	}

});




/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/carousel.js */
var Carousel = function(div, itemClass) {

	this.itemClass = "." + itemClass;
	this.content = jQuery(div);
	this.wrapper = jQuery(div.parent());
	this.wrapperWidth = this.wrapper.width();
	this.contentWidth = this.content.width();

	this.contentWrapper = jQuery("<div></div>").css({width: this.contentWidth + "px", height: this.wrapper.height() + "px", position: "absolute", top: "0px", "left": "30px"});

	this.content.css("-webkit-transition",  "all 400ms ease-in");

	this.leftArrow = jQuery("<div class='carouselLeftArrow' style='position: absolute; top: 0px; left: 0px; width: 20px; height: " + this.wrapper.height() + "px'></div>");
	this.rightArrow = jQuery("<div class='carouselRightArrow' style='position: absolute; top: 0px; right: 0px; width: 20px; height: " + this.wrapper.height() + "px'></div>");

	this.contentWrapper.appendTo(this.wrapper);
	this.leftArrow.appendTo(this.wrapper);
	this.rightArrow.appendTo(this.wrapper);

	this.content.remove();
	this.contentWrapper.html(this.content);

	this.content.css({
		position: "absolute",
		top: "0px",
		left: "0px"
	});
	this.wrapper.css({overflow: "hidden"});

	this.currentPanel = 0;
	this.numPanels = jQuery(this.itemClass, this.content).length;

	var self = this;

	this.checkIfMaxPanelReached = function() {
		return self.currentX + self.wrapperWidth - 40 >= this.contentWidth;
	}

	this.leftArrow.click(function() {
		self.currentPanel = Math.max(0, --self.currentPanel);
		self.showPanel(self.currentPanel);
	});

	this.rightArrow.click(function() {
		self.currentPanel = Math.min(self.numPanels - 1, ++self.currentPanel);
		self.showPanel(self.currentPanel);
	});

	this.showPanel = function(panel) {

		var pos = jQuery(this.content.children()[panel]).position();

		if (Modernizr.csstransitions) {
			self.content.css("-webkit-transform", "translate3d(-" + (pos.left + 1) + "px, 0px, 0px)");
		}
		else {
			self.content.animate({
				"left": "-" + (pos.left + 1) + "px"
			});
		}
	}
}


/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/facet.js */


var Facet = Class.extend({

	init: function(id, label, filter, display) {
		this.filter = filter;
		this.id=id;
		this.label = label;
		this.display = display;
		this.parent = null;
		this.selected = false;
	},


	getFilter: function() {
		return filter;
	},

	isOn: function() {
		return this.selected;
	},

	setParent: function(parent) {
		this.parent = parent;
	},

	toggle: function() {

		this.selected = !this.selected;

		try {
			this.checkbox[0].checked = this.selected;
		} catch(e) { }

		this.checkbox.removeClass("selected");

		if (this.selected)
			this.checkbox.addClass("selected");

		this.parent.facetChanged();

	},

	setCheckBox: function(check) {
		this.checkbox = check;
		jQuery(check).click(jQuery.proxy(this.toggle, this));
	}

});

var FacetSorter = Class.extend( {
	init: function() {
		this.options = {};
	},

	addOption: function (label, filter) {
		this.options[label] = filter;
	},

	draw: function() {

		var self = this;

		var div = jQuery("<div class='facetSorter'>Sort By </div>");

		var select = "<select name=facterSorter>";
		for(i in this.options) {
			select += "<option value='" + i + "'>" + i + "</option>";
		}
		select += "</select>";

		select = jQuery(select)

		select.change(function() {
			self.changed();
		});

		div.append(select);
		this.select = select;
		return div;
	},

	changed: function() {
		console.log("sorting changed");
		this.parent.sortChanged();
	},

	getSortFilter: function() {
		return this.options[jQuery(this.select).val()];
	},

	setParent: function(parent) {
		this.parent = parent;
	}
})


var FacetCategory = Class.extend( {

	init: function(id, label, display) {
		this.id = id;
		this.label = label;
		this.display = display;
		this.facets = []
	},


	addFacet: function(facet) {

		facet.setParent(this);
		this.facets.push(facet);
	},

	setParent: function(parent) {
		this.parent = parent;
	},

	draw: function() {

		var div = jQuery("<div class='facetContainer'></div>");
		var h2 = jQuery("<h2 class='facetTitle'>" + this.label + "</h2>");
		var ul =  jQuery("<ul class='facetCategory' id='" + this.id + "'></ul>");
		for (i = 0; i < this.facets.length; i++)
		{
			var facet = this.facets[i];
			var li = jQuery("<li class='facet'></li>");
			var input = jQuery("<input type='checkbox' class='facetCheckbox' id='facet_" + facet.id + "'>");
			var label = "<label for='facet_" + facet.id + "'>" + facet.label + "</label>";

			facet.setCheckBox(input);

			li.append(input);
			li.append(label);
			ul.append(li);
		}

		div.append(h2);
		div.append(ul);

		return div;
	},

	facetChanged: function() {
		this.parent.categoryChanged();
	}

});

var FacettedResults = Class.extend ( {
	init: function(db, containers ) {
		this.facetContainer = containers.facetContainer;
		this.resultsContainer = containers.resultsContainer;
		this.paginationContainer = containers.paginationContainer;
		this.sortingContainer = containers.sortingContainer;

		this.db = db;
		this.facetCategories=[];
		this.setupFacets();

		this.setupListeners();
	},

	categoryChanged: function() {
		this.filter();
	},

	sortChanged: function() {
		this.db.sort(this.sorter.getSortFilter());
		this.filter();
	},

	setupListeners: function() {
		self = this
		jQuery(this.paginationContainer + " .pageNumbers A[pageNum]").live("click", function() {
			self.showResultsPage(jQuery(this).attr("pageNum"));
		});
	},

	setupFacets: function() {

	},

	addFacetCategory: function(facetCategory) {
		facetCategory.parent = this;
		this.facetCategories.push(facetCategory);
	},

	mergeFilters: function ()
	{
		var filters = {};
		for (var i = 0; i < this.facetCategories.length; i++)
		{
			for (var j = 0; j < this.facetCategories[i].facets.length; j++)
			{

				if (this.facetCategories[i].facets[j].isOn())
					this.merge(filters, this.facetCategories[i].facets[j].filter);
			}
		}

		return filters;

	},

	merge: function(one, two) {
		for (var i in two)
		{
			if (!one[i])
			{
				one[i] = two[i];
			} else {
				for (var j in two[i])
				{
					if (!one[i][j])
					{
						one[i][j] = two[i][j];
					} else {
						jQuery.merge(one[i][j], two[i][j]);
					}
				}
			}
		}
	},

	filter: function() {
		var filters = this.mergeFilters();

		console.log(filters);

		jQuery(this.resultsContainer).html("");
		this.db.showFilteredResults(this.resultsContainer, "#productListing", filters);

		this.itemsFiltered();
	},

	itemsFiltered: function() {

		// build page numbers...
		// build paginated list...
		var items = jQuery(this.resultsContainer + " .productListing");

		jQuery(this.paginationContainer + " .itemsFound").html(items.length + " items found");

		var numPages = Math.ceil(items.length / this.itemsPerPage);
		jQuery(this.paginationContainer + " .pageNumbers").html("");
		if (numPages > 1) {
			for (i = 0; i < numPages; i++) {
				jQuery(this.paginationContainer + " .pageNumbers").append("<a href='javascript:void(0);' pageNum='" + i + "'>" + (i + 1) + "</a> ");
			}
		}
		this.showResultsPage(0);

	},

	showResultsPage: function(pageNum) {

		jQuery(this.paginationContainer + " .pageNumbers A").removeClass("selected");
		jQuery(this.paginationContainer + " .pageNumbers A[pageNum=" + pageNum+ "]").addClass("selected");

		jQuery(this.resultsContainer + " .productListing:visible").hide();
		jQuery(this.resultsContainer + " .productListing").slice(pageNum * this.itemsPerPage, pageNum * this.itemsPerPage + this.itemsPerPage).fadeIn();

	},

	display: function () {
		jQuery(this.facetContainer).html("");
		for (j = 0; j < this.facetCategories.length; j++)
		{
			var display = this.facetCategories[j].draw();
			jQuery(this.facetContainer).append(display);
		}

		jQuery(this.sortingContainer).html("").append(this.sorter.draw());
	},

	setSorter: function(sorter) {
		sorter.setParent(this);
		this.sorter = sorter;
	}

});

var SofaFacettedResults = FacettedResults.extend({
	setupFacets: function() {

		this._super();

		// setup sorting...
		var sorter = new FacetSorter();
		sorter.addOption("price: low to high", [{pfeed_priceforfilters: 'logicalasc'}]);
		sorter.addOption("price: high to low", [{pfeed_priceforfilters: 'logicaldesc'}]);
		this.setSorter(sorter);


		var materialCat = new FacetCategory("material", "Material", "list");

		materialCat.addFacet(new Facet("material_leather", "Leather", {pfeed_productgroup:{has:['ondemand_leather']}}));
		materialCat.addFacet(new Facet("material_fabric", "Fabric", {pfeed_productgroup:{has:['Fabric']}}));
		materialCat.addFacet(new Facet("material_microfiber", "Microfiber", {pfeed_productgroup:{has:['Microfiber']}}));

		this.addFacetCategory(materialCat);

		var featuresCat = new FacetCategory("features", "Features", "list");

		featuresCat.addFacet(new Facet("features_sleeper", "Sleepers", {pfeed_productgroup:{has:['Sleeper']}}));
		featuresCat.addFacet(new Facet("features_modular", "Modular", {pfeed_productgroup:{has:['Modular']}}));
		featuresCat.addFacet(new Facet("features_reclining", "Reclining", {pfeed_productgroup:{has:['Reclining']}}));

		this.addFacetCategory(featuresCat);


		this.itemsPerPage=24;


	}
})














/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/hotSpot.js */
/*

This ended up not being a class... but just a way to instantiate the tooltips..

There are two ways... using HTML and using a JSON object.

You decide when to use what.  If each tooltip is very custom as far as whats inside...
then probably HTML is best.  If they follow a template.. you can use the DATA method
with a custom draw function.  Up to you.

Note that X and Y below.  These should correspond to the center point of your plus icon.
openDirection can be: northEast, northWest, southEast, southWest

HTML Method.

	HTML:
	<div class="hotspot" x="100" y="200" openDirection="northEast">
		hotspot 1 asdf
	</div>


	<div class="hotspot" x="500" y="300" openDirection="northWest">
		hotspot 2 asdf
	</div>

	JS:
	new HotSpot(".hotspot");

DATA Method:

	JS:
	var hotspots = [
		{
			x: 450,
			y: 123,m14
			openDirection:"northEast",
			title: "first title",
			content: "first hotspot"
		},
		{
			x: 850,
			y: 123,
			title: "second title",
			openDirection:"southWest",
			content: "second hotspot"
		}
	]

	var drawFunction = function(item) {
		return "<B>" + item.title + "</B> + "<BR>" + item.content;
	}

	new HotSpot("DATA", hotspots, jQuery("#container", this.parentDiv, drawFunction);


CSS is your friend. Style the tool tips.. and the "plus".  Put a background image on the ".plus" class for your image.
put a background.. border.. font styles on the ".tooltip" class.

The ".plus" is 30px by 30px.. but your image can be any size.  Just make it a PNG.  It will be centered in there.  30px by 30px
so that the hit area is big enough for tablet.

*/








var HotSpot = Class.extend({

	init: function(type, items, container, drawFunction, colorSpot) {


		if (colorSpot == undefined) {
            colorSpot = '';
		}
		if (type == "DOM") {
			this.createFromDOM(items);
		}

		if (type == "DATA") {
			this.createFromData(items, container, drawFunction, colorSpot);
		}

	},

	createFromData: function(items, container, drawFunction, colorSpot) {

		if (!drawFunction) {
			drawFunction = this.drawItem;
		}

		for (i = 0; i < items.length; i++) {
			var item = items[i];
            var hotSpotClass= 'hotspot '+colorSpot
			var hotspot = jQuery("<div class='"+hotSpotClass+"'><div class='plus'></div><div class='tooltip' style='display: none;'>" + drawFunction(item) + "</div></div>").appendTo(container);
			hotspot.css({
				top: item.y + "px",
				left: item.x + "px"
			});
			hotspot.addClass(item.openDirection);

			this.addEvents(hotspot);
		}

	},

	createFromDOM: function(items) {
		var self = this;

		this.items = jQuery(items);

		// lets turn them into hotspots...
		this.items.each(function() {

			var item = jQuery(this);

			item.addClass("hotspot");

			// wrap the content into a div that will become the tip..
			item.html("<div class='tooltip'>" + item.html() + "</div>");
			var toolTip = jQuery(".tooltip", item).hide();

			// put the hotspot icon into the mix..
			var icon = jQuery("<div class='plus'></div>");
			icon.insertBefore(toolTip);

			item.css({
				top: (item.attr("y") - 15) + "px",
				left: (item.attr("x") - 15) + "px"
			})

			item.addClass(item.attr("openDirection"));


			self.addEvents(item);

		});
	},

	drawItem: function(item) {
		console.log(item);
		return item.content;
	},

	addEvents: function(item) {

		var self = this;

		if (!finder.isTablet()) {
			item.hover(function(){
				self.open(this);
                ///tracking open panel if there is tracking in the config and published to html in hopNow
                var catid = $(this).find(".shopNow").attr('catid');
                var pageid = $(this).find(".shopNow").attr('pageid');
               if(pageid!=undefined){
                    finder.skava.handleTracking(finder.getCurrentPage(),{pageid:pageid,catid:catid});
                }

			}, function(){

				self.close(this);

			});
		}
		else {
			item.click(function(){
				var me = jQuery(this);

				if (jQuery(".tooltip", me).is(":visible")) {
					self.close(this);
				}
				else {
					self.open(this);
				}

			})
		}


	},

	open: function(item) {

		item = jQuery(item);

		item.siblings().children(".tooltip:visible").slideUp('fast');
		jQuery(".tooltip", item).stop(true, true).slideDown('fast');

	},

	close: function(item) {

		jQuery(".tooltip", item).stop(true, true).slideUp('fast');

	}



});

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/productPool.js */

var ProductPool = Class.extend({

	init: function(params) {

		this.poolScrollable = true;
		this.itemsPerPage = 20;
		this.loaded = false;
		this.showMoreOnHover = false;

		if (params) {
			this.poolScrollable = params.scrollable;

			if (params.itemsPerPage)
				this.itemsPerPage = params.itemsPerPage;

			if (params.container)
				this.setupPool(params.container);

			if (params.template)
				this.template = params.template;
			else
				this.template = "productListing";

			if (params.showMoreOnHover)
				this.showMoreOnHover = params.showMoreOnHover;
		}

		this.facets = {};
		this.poolWorker = new PoolBoy(this);
		this.setLiveEvents();

	},

	setLiveEvents: function() {
		if (this.poolContainer.is("[liveEventsSet]"))
			return;

		var self = this;

		this.poolContainer.attr("liveEventsSet", "yes");


		this.poolContainer.bind("poolPageChanged", function() {
			jQuery(".stars_off", self.poolContainer).each(function() {
				var self = jQuery(this);
				var num = self.html();
				if (num == "")
				{
					self.parent().remove();
					return;
				}
				num = num * 1;
				var width = num * 13;
				self.html("<div class='stars_on' style='width: " + width + "px'><div>");
				jQuery("<div class='ratingLabel'>" + num.toFixed(1) + " out of 5</div>").insertAfter(self);

			});
		});

		this.poolContainer.delegate(".productListing .quickview A", "mousedown", function(){
			jQuery(this).addClass("clicked");
		});

		this.poolContainer.delegate(".productListing .quickview A", "mouseup", function(){
            jQuery(this).removeClass("clicked");
        })

		this.poolContainer.delegate(".touch .productListing .bonusOffers", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			jQuery(this).toggleClass("active");
		});

		this.poolContainer.delegate(".productListing .quickview", "mouseenter", function(){
			jQuery(this).addClass("hover");
		});

		this.poolContainer.delegate(".productListing .quickview", "mouseleave", function(){
            jQuery(this).removeClass("hover");
        })

		this.poolContainer.delegate(".productListing", "mouseenter", function(){
			jQuery(this).addClass("hover");
		});

		this.poolContainer.delegate(".productListing", "mouseleave", function(){
            jQuery(this).removeClass("hover");
        })

		if (!finder.isTablet()) {
			if (this.showMoreOnHover) {
				this.poolContainer.delegate(".productListing", "mouseenter", function(event){
					self.productListingOver(event);
				});

				this.poolContainer.delegate(".productListing", "mouseleave", function(event){
					self.productListingOut(event);
				})
			}
		}

		var swatchEvent = "mouseenter";
		if (finder.isTablet()) {
			swatchEvent = "click";
		}
		this.poolContainer.delegate(".productListing .swatch", swatchEvent, function() {
			var item = jQuery(this);
			if (item.attr("productImage") == "")
				return;

			jQuery(".productImage", item.parents(".productListing")).attr("src", item.attr("productImage"));
		});

		this.poolContainer.delegate(".compareBox", "click", function(event) {
				var product = jQuery(this).parents(".productListing");
				var entryId = product.attr("entryId");

				if (this.checked) {

					// allow 3 max..
					if (self.compareItems.length >= 3) {
						jQuery("<div class='compareError'>Sorry, you can only compare three items at a time.</div>").appendTo(product).delay(3000).slideUp("slow", function() { jQuery(this).remove()});
						event.preventDefault();
						return false;
					}

					self.compareItems.push(entryId);
				} else {
					// we need to remove this item;
					var newArray = [];
					for (var i = 0; i < self.compareItems.length; i++) {
						console.log(self.compareItems[i],entryId);
						if (1 * self.compareItems[i] != 1 * entryId) {
							newArray.push(self.compareItems[i]);
						}
					}
					self.compareItems = newArray;
				}
		});

		this.poolContainer.bind("poolPageChanged", function() {
			for (var i = 0; i < self.compareItems.length; i++) {
				jQuery(".productListing[productId='" + self.compareItems[i] + "'] .compareBox").attr("checked", 1);
			}
		})

		this.poolContainer.delegate(".doCompareNow", "click", function() {

			if (self.compareItems.length < 2) {
				jQuery(".nothingSelected", this.poolContainer).slideDown().delay(3000).slideUp();
				return;
			}

			try {
				showCompare(self.compareItems[0], self.compareItems[1], self.compareItems[2], 'Check out these amazing sofas!', 'I just found great seating using Macy\'s Sofa Finder and need your opinion! So, what do you think?', finder.getConfig().webRoot + "/home/" + self.compareItems.join(","));
			} catch(e) {
				console.log("Error calling showCompare", e);
			}
			console.log(self.compareItems);
		});

		this.poolContainer.delegate(".doCompareClear", "click", function() {
			self.compareItems = [];
			jQuery(".compareBox:checked").removeAttr("checked");
		});











	},

	setResultsDisplay: function() {

	},

	getResultsDisplay: function() {

	},

	addFacet: function(facet) {

		facet.setParent(this);
		this.facets[facet.name] = facet;


		var container = jQuery("<DIV></DIV>").attr("forFacet", facet.name).addClass("facet").addClass(facet.name).append(facet.display());

		this.facetsContainer.append(container);
	},

	getFacet: function(name) {
		return this.facets[name];
	},

	setupPool: function(container) {


		var self = this;
		this.poolContainer = jQuery(container);

		this.poolHeader = jQuery("<div id='poolHeader'></div>").appendTo(this.poolContainer);

		this.facetsContainer = jQuery("<div id='facetsContainer'></div>").appendTo(this.poolContainer);
		jQuery("<div id='poolPaginationTop' class='poolPagination'></div>").appendTo(this.poolHeader);

		this.poolResults = jQuery("<div id='poolResults'></div>").appendTo(this.poolContainer);


		this.poolPagination = jQuery(".poolPagination", this.poolContainer);

		jQuery("<div class='itemsFound'></div>").appendTo(this.poolPagination);
		jQuery("<div class='pageNumbers'></div>").appendTo(this.poolPagination);

		this.itemsFound = jQuery(".itemsFound", this.poolContainer);
		this.pageNumbers = jQuery(".pageNumbers", this.poolContainer);

		this.poolPagination.append("<div style='clear:both;'></div>");


		this.noResults = jQuery("<div id='noResults'></div>");
		this.noResults.html("We're sorry, at this time we do not have any items in our collection that match your preferences. We often add new styles to our site, so check back soon; or, make new preference selections now.");

		this.compareItems =[];
		this.compareDiv = jQuery("<div id='compareControls'></div>");
		this.compareDiv.html("choose 3 items &nbsp; <a href='javascript:void(0)' class='doCompareNow'>compare now</a> &nbsp;&nbsp; <a href='javascript:void(0)' class='doCompareClear'>clear</a><div class='nothingSelected'>Please select at least two items to compare.</div>").appendTo(this.poolHeader);

		this.poolContainer.bind("poolDataLoaded", function() {
			self.poolDataLoaded();
		});

		this.poolContainer.bind("filterFacetChanged", function() {
			self.runFilters();
		});

		this.poolContainer.bind("sortFacetChanged", function() {
			self.sortChanged();
		});

		this.poolContainer.bind("resetFacets", function() {
			self.resetFacets();
		});

		this.pageNumbers.delegate("A[pageNum]", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			self.showPage(jQuery(this).attr("pageNum"));
		})

		this.pageNumbers.delegate("A.prevPage", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			var currentPage = jQuery("A[pageNum].selected", self.pageNumbers).attr("pageNum") * 1;
			self.showPage(currentPage - 1);
		})

		this.pageNumbers.delegate("A.nextPage", "click", function(event) {
			event.preventDefault();
			event.stopPropagation();
			var currentPage = jQuery("A[pageNum].selected", self.pageNumbers).attr("pageNum") * 1;
			self.showPage(currentPage + 1);
		})
	},

	reset: function() {
		this.poolContainer.html("");
		this.facets = {};
		this.scroller = false;
		this.setupPool(this.poolContainer);
	},

	poolDataLoaded: function() {
		// get all the items...
		var items = this.poolWorker.db().get();

		// let the facets reorder themselves using this data...
		for (i in this.facets) {
			this.facets[i].handlePoolData(items);
		}
	},

	setupCategoryFilter: function(filters) {
		this.staticFilter = filters;
	},

	loadPool: function(pool, filter) {
		console.log('==========> loading pool', pool);
		if (filter) {
			this.staticFilter = filter;
		} else {
			this.staticFilter = {}
		}

		this.comparePool = [];

		// load the right pool...
		finder.loadingDisplay.start("pool load");
		var self = this;
		setTimeout(function() {
			self.poolWorker.loadPool(pool, jQuery.proxy(self.poolLoaded, self));
		}, 10);

	},

	poolLoaded: function() {

		this.runFilters();

		this.loaded = true;
		finder.loadingDisplay.end("pool load");

		//jQuery("#finderContainer").trigger("poolLoaded");
		//jQuery(finder.getCurrentPage().parentDiv).trigger("poolLoaded");
		this.poolContainer.trigger({
			type: "poolLoaded",
			productPool: this
		});

	},

	setPoolScrollable: function(bool) {
		this.poolScrollable = bool;
	},

	setItemsPerPage: function(num) {
		this.itemsPerPage = num;
	},

	filter: function(categoryFilter) {
		this.categoryFilter = categoryFilter;
		this.runFilters();
	},

	itemsFiltered: function(myfilter) {

		if (!myfilter)
			myfilter = [];

		try {
			myfilter = jQuery.merge(myfilter, [this.staticFilter]);
		} catch(e) { }

		console.log("filter", myfilter);
		console.log("filter", this.staticFilter);

		if (myfilter.length == 0)
			myfilter = {};

		var contentPane = this.poolResults;
		if (this.poolScrollable && this.scroller && !finder.isTablet()) {
			contentPane = jQuery(this.scroller.getContentPane());
		}

		contentPane.html("");
		//var items = this.poolWorker.showFilteredResults(contentPane, "#productListing", myfilter);

		this.items = this.poolWorker.getFilteredResults(myfilter);


		var items = this.items;

		console.log("items length", items.count());

		items.length = items.count();


		// build pagination results...

		var pluralItems = (items.length == 1) ? "item" : "items";
		this.itemsFound.html(items.length + " " + pluralItems + " found");

		var numPages = Math.ceil(items.length / this.itemsPerPage);

		this.pageNumbers.attr("numPages", numPages);

		if (numPages > 1) {
			this.updatePagination(0);
			this.pageNumbers.show();
		} else {
			this.pageNumbers.hide();
		}

		if (items.count() == 0) {
			contentPane.append(this.noResults);
			return;
		}


		this.showPage(0);




	},

	updatePagination: function(current) {

		var numPages = (this.pageNumbers.attr("numPages") * 1);

		current = current * 1  + 1;

		if (isNaN(current) || current > numPages)
			current = numPages;

		var numPagesToShow = 2;

		this.pageNumbers.html("<a href='javascript:void(0)' class='prevPage'><img src='" + assetsDirectory + "images/leftarrow.gif' border='0'> Prev</a>");

		var startPage = 1;
		var endPage = numPages;

		if (numPages <= numPagesToShow) {
			endPage = numPages;
		} else {
			startPage = current - Math.floor(numPagesToShow / 2);
			if (startPage < 1)
				startPage = 1;

			endPage = startPage + numPagesToShow;
			if (endPage > numPages) {
				endPage = numPages;
				startPage = endPage - numPagesToShow;
			}

		}

		for (i = startPage; i <= endPage; i++) {
			this.pageNumbers.append("<a href='javascript:void(0);' pageNum='" + (i - 1) + "'>" + (i) + "</a> ");
		}
		this.pageNumbers.append("<a href='javascript:void(0)' class='nextPage'>Next <img src='" + assetsDirectory + "images/rightarrow.gif' border='0'></a>");
	},

	showPage: function(pageNum) {

		pageNum = pageNum * 1;

		var numPages = this.pageNumbers.attr("numPages") * 1;
		this.updatePagination(pageNum);

		if (pageNum <= 0)
			jQuery("A.prevPage", this.pageNumbers).css("visibility", "hidden");
		else
			jQuery("A.prevPage", this.pageNumbers).css("visibility", "visible");

		if (pageNum >= numPages - 1)
			jQuery("A.nextPage", this.pageNumbers).css("visibility", "hidden");
		else
			jQuery("A.nextPage", this.pageNumbers).css("visibility", "visible");

		this.pageNumbers.attr("currentPage", pageNum);


		jQuery("A", this.pageNumbers).removeClass("selected");
		jQuery("A[pageNum=" + pageNum+ "]", this.pageNumbers).addClass("selected");


		var contentPane = this.poolResults;
		if (this.poolScrollable && this.scroller && !finder.isTablet()) {
			contentPane = jQuery(this.scroller.getContentPane());
		}
		//jQuery(".productListing:visible", this.poolResults).hide();
		//jQuery(".productListing", this.poolResults).slice(pageNum * this.itemsPerPage, pageNum * this.itemsPerPage + this.itemsPerPage).fadeIn();

		contentPane.html("");
		jQuery("#" + this.template).tmpl(this.items.get().slice(pageNum * this.itemsPerPage, pageNum * this.itemsPerPage + this.itemsPerPage)).appendTo(contentPane);
		jQuery(contentPane).append("<div style='clear: both; margin-bottom: 20px;'></div>");





		if (this.poolScrollable) {
			try {
				this.scroller.reinitialise();
				this.scroller.scrollTo(0,0);
			} catch(e) {
				this.scroller = new Scroller(contentPane);
			}

				this.scrollerInited = true;


		}


		this.poolContainer.trigger("dataChanged");
		this.poolContainer.trigger({
			type: "poolPageChanged",
			productPool: this
		});
	},


	runFilters: function() {

		var filter = [];

		for (i in this.facets) {

				//filter = jQuery.merge(filter, this.facets[i].getSelectedFilter());
			if (this.facets[i].getType() == "FILTER") {
				filter.push(this.facets[i].getSelectedFilter());
			}
		}



		this.itemsFiltered(filter);
	},

	sortChanged: function() {
		var filter = [];

		for (i in this.facets) {
			if (this.facets[i].getType() == "SORT") {
				filter = this.facets[i].getSelectedFilter();
			} else {

			}
		}

		if (!filter[0]) {
			filter = ["pool_insert_id"];
		}


		this.poolWorker.sort(filter[0]);
		this.runFilters();

	},

	resetFacets: function() {

		for (i in this.facets) {
			this.facets[i].reset();
		}

		this.sortChanged();

	},


	productListingOver: function(event) {

		var item = jQuery(event.currentTarget);

		var container = item.parent();



		if (!item.hasClass("productListing") || item.hasClass("isClone") || item.attr("productId") == jQuery(".productListingHover", container).attr("productId"))
			return;



		// see if there is already a hovered item...
		// and remove it..
		jQuery(".productListingHover", container).remove();

		// create a clone and add it to the container..
		var clone = item.clone().addClass("isClone").wrap("<div class='productListingHover'></div>");
		clone = clone.parent();


		var itemPosition = item.position();

		clone.css({
			top: itemPosition.top +3  + "px",
			left: itemPosition.left + 3 + "px"
		}).mouseout(function() {
			if (jQuery(event.currentTarget).hasClass(".productListingHover"))
				jQuery(this).remove();
		})

		container.append(clone);

		jQuery(".moreInfo", clone).slideDown("fast");

	},

	productListingOut: function(event) {

	}







})

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/productPoolAbstractFacets.js */
var ProductPoolFacet = Class.extend({

	init: function(name, type, filters) {
		this.name = name;
		this.type = type; // either "FILTER" or "SORT"
		this.filters = filters;
		this.parent = parent;

		this.displayHandler = this.setupDisplay();
	},

	setupDisplay: function() {
		return new SelectFieldDisplayHandler("Shop By", this);
	},

	display: function() {
		return this.displayHandler.display();
	},

	getSelectedFilter: function() {
		var values = this.displayHandler.getSelectedValues();

		var filter = [];
		for (i = 0; i < values.length; i++) {
			filter = jQuery.merge(filter, this.filters[values[i]].filter);
		}

		return filter;
	},

	getFilters: function() {
		return this.filters;
	},

	getSelected: function() {
		var values = this.displayHandler.getSelectedValues();

		var filter = [];
		for (i = 0; i < values.length; i++) {
			filter.push(this.filters[values[i]]);
		}


		return filter;
	},

	setSelected: function(val) {
		for (var i in this.filters) {
			if (i == val) {
				this.filters[i].selected = true;
			} else {
				this.filters[i].selected = false;
			}
		}
		this.displayHandler.display();
		this.facetChanged();
	},

	facetChanged: function() {
		this.parent.poolContainer.trigger({
			type: "filterFacetChanged",
			changedFacet: this
		});
	},

	setParent: function(parent) {
		this.parent = parent;
	},

	handlePoolData: function(items) {

	},

	getType: function() {
		return this.type;
	},

	reset: function() {
		this.displayHandler.reset();
	}
});

var ProductPoolFacetDisplayHandler = Class.extend({

	init: function(defaultText, par) {
		this.defaultText = defaultText;
		this.parent = par;

		this.setup();
	},

	setup: function() {

	},

	display: function() {

	},

	displayChanged: function() {
		this.parent.facetChanged();
	},

	getSelectedValues: function() {
		return [];
	},

	reset: function() {

	}

})



var SelectFieldDisplayHandler = ProductPoolFacetDisplayHandler.extend({

	setup: function() {
		this._super();
		this.field = jQuery("<select><option value='-1'>" + this.defaultText + "</option>");

		var self = this;
		this.field.change(function() {
			self.displayChanged();
		})
	},

	display: function() {
		this._super();
		var values = "<option value='-1'>" + this.defaultText + "</option>";


		var filters = this.parent.getFilters();
		for (i in filters) {
			values += "<option value='" + i + "'>" + filters[i].label + "</option>";
		}

		this.field.html(values);
		return this.field;
	},

	getSelectedValues: function() {
		if (this.field.val() == "-1")
			return [];

		return [this.field.val()];
	},

	reset: function() {
		this._super();
		this.field.val("-1");
	}

});
var ToggleTabsDisplayHandler = ProductPoolFacetDisplayHandler.extend({

	setup: function() {
		this._super();
		this.field = jQuery("<div><span class='facetTitle'>" + this.defaultText + "</span><ul class='facetTabsContainer'></ul></div>");

		var self = this;
		jQuery("UL", this.field).delegate("LI", "click", function() {

			var item = jQuery(this);

			if (item.hasClass("toggled")) {
				if (!self.isToggle()) {
					// see how many items are checked... if only one.. don't remove the class..
					if (item.siblings(".toggled").length > 0) {
						item.removeClass("toggled");
					}
				} else {
					item.removeClass("toggled");
				}

			} else {
				if (!self.isToggle()) {
					item.siblings("LI").removeClass("toggled").children("INPUT").removeAttr("checked");
				}
				item.addClass("toggled");
			}

			if (item.hasClass("toggled")) {
				jQuery("INPUT", item).attr("checked", "1");
			} else {
				jQuery("INPUT", item).removeAttr("checked");
			}
			self.displayChanged();
		})


	},

	isToggle: function() {
		return true;
	},

	display: function() {
		this._super();

		var values = "";
		var filters = this.parent.getFilters();
		for (i in filters) {
			var checked = filters[i].selected ? "checked" : "";
			var toggled = filters[i].selected ? "class='toggled'" : "";
			values += "<li pfeed='" + i + "' " + toggled + "><input type='checkbox' " + checked + "> " + filters[i].label + "</li>";
		}

		jQuery("UL", this.field).html(values).css({padding: "0px", margin: "0px", 'list-style': "none", "-webkit-padding-start": "0px"});

		jQuery("LI", this.field).css({'list-style': "none", "cursor": "pointer"})

		return this.field;
	},

	getSelectedValues: function() {
		var items = [];
		jQuery("LI.toggled", this.field).each(function() {
			items.push(jQuery(this).attr("pfeed"));
		})


		return items;
	},

	reset: function() {
		this._super();
		jQuery(".toggled", this.field).removeClass("toggled");
		jQuery("[checked]", this.field).removeAttr("checked");
	}

});

var TabsDisplayHandler = ToggleTabsDisplayHandler.extend({

	isToggle: function() {
		return false;
	}

});



var ToggleButtonDisplayHandler = ProductPoolFacetDisplayHandler.extend({

	setup: function() {
		this._super();
		this.field = jQuery("<input type='button' value='" + this.defaultText + "'>");

		var self = this;
		this.field.click(function() {
			self.field.toggleClass("toggled");
			self.displayChanged();
		})
	},

	display: function() {
		this._super();
		return this.field;
	},

	getSelectedValues: function() {
		if (this.field.hasClass("toggled")) {
			// return the first filter..
			var filters = this.parent.getFilters();
			for (i in filters) {
				return [i];
				break;
			}
		}
		else {
			return [];
		}
	},

	reset: function() {
		this._super();
		this.field.removeClass("toggled");
	}

});

var ButtonDisplayHandler = ProductPoolFacetDisplayHandler.extend({

	setup: function() {
		this._super();
		this.field = jQuery("<input type='button' value='" + this.defaultText + "'>");

		var self = this;
		this.field.click(function() {
			self.displayChanged();
		})
	},

	display: function() {
		this._super();
		return this.field;
	}

});


var CategoryFilterFacet = ProductPoolFacet.extend({

	handlePoolData: function(items) {

		// use these items to build my filters list...
		var category = {};
		for (var i = 0; i < items.length; i++)
		{

			if (items[i][this.category] instanceof Array) {
				for (j = 0; j < items[i][this.category].length; j++) {
					if (category[items[i][this.category][j]])
						category[items[i][this.category][j]]++;
					else
						category[items[i][this.category][j]] = 1;
				}
			} else {
				if (category[items[i][this.category]])
					category[items[i][this.category]]++;
				else
					category[items[i][this.category]] = 1;
			}




		}
		var bArray = [];
		for (var i in category)
		{
			if(i==""){
				continue;
			}
			bArray.push(i);
		}
		bArray = bArray.sort();

		this.filters = {}

		for (var i = 0; i < bArray.length; i++)
		{
			var myfilter = {
				label: bArray[i],
				filter: []
			}
			var filter2 = {}
			filter2[this.category] = {
				has: [bArray[i]]
			};
			myfilter.filter.push(filter2);
			this.filters[bArray[i]] = myfilter;

		}
		this.display();
	}

})




/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/productPoolDisplay.js */

var ProductPoolDisplay = Class.extend({





});


var GridPoolDisplay = ProductPoolDisplay.extend({

	display: function(items) {

	}

})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/productPoolFacets.js */
/*
 * Available Facet Abstract Types:
 * 1.	CategoryFilterFacet - specify a pfeed_xxx property.. and it builds the item automatically...
 * 2.	ProductPoolFacet - specify your filters manually....
 *
 * Available Display Handlers:
 * 1.	ButtonDisplayHandler
 * 2.	ToggleButtonDisplayHandler
 * 3.	SelectFieldDisplayHandler
 * 4.	ToggleTabsDisplayHandler
 * 5.	TabsDisplayHandler
 *
 */

var ProductTabFacet = ProductPoolFacet.extend( {
	init: function(filters) {
		this._super("productTabs", "FILTER", filters);
	},
	setupDisplay: function() {
		// The dropdown title is here.
		return new TabsDisplayHandler("Shop All", this);

	}
})

var GenericCheckboxFacet = ProductPoolFacet.extend( {
	init: function(filters, id, title) {
		this.facetId = id;
		this.facetTitle = title;
		this._super(id, "FILTER", filters);
	},
	setupDisplay: function() {
		// The dropdown title is here.
		return new TabsDisplayHandler(this.facetTitle, this);

	}
})


var ProductGroupFacet = ProductPoolFacet.extend({

	init: function(filters) {
		this._super("productGroup", "FILTER", filters);
	},

	setupDisplay: function() {
		// The dropdown title is here.
		return new SelectFieldDisplayHandler("Shop", this);

	}
})

var SpecialSizesFacet = ProductPoolFacet.extend({

	init: function(filters) {
		this._super("specialSizes", "FILTER", filters);
	},

	setupDisplay: function() {
		// The dropdown title is here.
		return new TabsDisplayHandler("Shop All", this);

	}
})


var TabFilterFacet = ProductPoolFacet.extend({

	init: function(filters){

		this._super("tabFilterFacet", "FILTER", filters);
	},

	setupDisplay: function() {
		handler = new TabsDisplayHandler("Category", this);
		return handler;
	}
})

var LinksFilterFacet = TabFilterFacet.extend({

	facetChanged: function() {
		var values = this.displayHandler.getSelectedValues();

		if (values.length > 0) {
			var myValue = values.pop();

			var url = this.getFilters()[myValue].url;
			window.location = url;
		}
	}

})


var ColorSelectFacet = CategoryFilterFacet.extend({

	init: function() {
		this.category = "pfeed_color";
		this._super("colorSelecter", "FILTER", {});
	},

	setupDisplay: function() {
		return new TabsDisplayHandler("Shop By Color", this);
	}
})



var MostGiftableFacet = ProductPoolFacet.extend({

	init: function(){
		var filters = {
			"cashmere": {
				label: "Cashemre",
				filter: [{
					pfeed_fabric: "Cashmere"
				}]
			},
			"wool": {
				label: "Wool",
				filter: [{
					pfeed_fabric: "Wool"
				}]
			}
		}


		this._super("giftableFacet", "FILTER", filters);
	},

	setupDisplay: function() {
		return new ToggleButtonDisplayHandler("Most Giftable", this);
	}
})


var BrandSelectFacet = CategoryFilterFacet.extend({

	init: function() {
		this.category = "pfeed_brand";
		this._super("brandSelect", "FILTER", {});
	},

	setupDisplay: function() {
		return new SelectFieldDisplayHandler("Shop By Brand", this);
	}
})





var SortingFacet = ProductPoolFacet.extend({

	init: function() {

		var filters = {
			"pricehightolow": {
				label: "price: high to low",
				filter: ["pfeed_priceforfilters logicaldesc"]
			},
			"pricelowtohigh": {
				label: "price: low to high",
				filter: ["pfeed_priceforfilters logical"]
			},
			"toploved": {
				label: "top loved",
				filter: ["votes logicaldesc"]
			}
		}


		this._super("sortSelect", "SORT", filters);
	},

	setupDisplay: function() {
		return new SelectFieldDisplayHandler("Sort By", this);
	},

	facetChanged: function() {
		this.parent.poolContainer.trigger("sortFacetChanged");
	}
})



var ResetFacet = ProductPoolFacet.extend({

	init: function(){
		this._super("resetFacet", "FILTER", {});
	},

	setupDisplay: function() {
		return new ButtonDisplayHandler("Reset", this);
	},

	facetChanged: function() {
		this.parent.poolContainer.trigger("resetFacets");
	}
})











/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/scroller.js */

	var Scroller = function(elem) {

		elem = jQuery(elem);

		if (finder.isTablet()) {
            return new TouchScroll(elem[0], {
                elastic: true
            });
        } else {

			elem.jScrollPane({autoReinitialise: true, autoReinitialiseDelay: 1000});
			return elem.data('jsp');
		}


		this.scrollbarWidth = 13;
		this.dragGive = 100;
		this.scrollbarPadding = 10;

		elem = jQuery(elem);
		elem.append("<div style='clear:both; padding-top: 20px;'></div>");

		var newWidth = elem.width() - this.scrollbarWidth - 10;

		elem.wrapInner("<div class='innerWrapper'></div>");


		elem = jQuery(".innerWrapper", elem)



		// take the content and put it inside of a container...
		this.contentContainer = elem.parent();
		this.contentContainer.css("overflow", "hidden");
		this.content = elem;

		this.content.addClass("scrollingContent");
		this.content.attr("alt", 0);


		// make the content div narrower for the scrollbar...
		this.content.css("width", this.contentContainer.width()-this.scrollbarWidth - this.scrollbarPadding + "px");

		this.content.css("-webkit-transform", "translate3d(0px, 0px, 0px)");

		// create a container to hold the scrollbar...
		this.scrollbar = jQuery("<div class='scrollerScrollbar' style='position: absolute; top: 0px; right: 0px;'></div>");
		this.scrollbarContainer = jQuery("<div class='scrollerBarContainer'></div>");
		this.scrollbarContainer.append(this.scrollbar);
		this.scrollbarContainer.css({position: "absolute", width: this.scrollbarWidth + "px", height: this.contentContainer.height()+"px", top: "0px", right: "0px"});
		this.contentContainer.append(this.scrollbarContainer);

		// create faders...
		this.topFade = jQuery("<div class='scrollerTopFade' style='width: "+this.content.width()+"px;'></div>");
		this.bottomFade = jQuery("<div class='scrollerBottomFade' style='width: "+this.content.width()+"px;'></div>");
		this.contentContainer.append(this.topFade);
		this.contentContainer.append(this.bottomFade);

		this.containerHeight = this.contentContainer.height();
		this.scrollbarHeight = this.scrollbar.height();
		this.contentHeight = this.content.height();
		var self = this;

		this.updateHeights = function() {

			this.contentHeight = this.content.height();


			if (this.contentHeight < this.containerHeight)
			{
				this.scrollbarContainer.hide();
			} else {
				this.scrollbarContainer.show();
			}
		}




		this.positionChanged = function() {
			var percent = self.scrollbar.css("top").replace("px", "") / (self.containerHeight - self.scrollbarHeight);
			var offset = Math.floor((this.contentHeight - this.containerHeight) * percent);
			//this.content.css("margin-top", "-"+offset+"px");
			self.moveContent("-" + offset);
			this.checkFade();
		}

		this.checkFade = function() {
			offset = Math.abs(this.content.attr("alt"));
			var ch = this.contentHeight - this.containerHeight;


			if (offset <= 0)
				this.topFade.hide();
			else
				this.topFade.show();

			if (offset >= ch)
				this.bottomFade.hide();
			else
				this.bottomFade.show();
		}

		this.checkDragPosition = function() {
			var offset = this.content.attr("alt");
			var scrollHeight = this.contentHeight - this.containerHeight;

			if (offset > 0)
			{
				this.content.addClass("scrollerTransition");
				//this.content.css("margin-top", "0px");
				this.moveContent(0);
			}

			if (Math.abs(offset) > scrollHeight)
			{
				this.content.addClass("scrollerTransition");
				this.moveContent("-" + scrollHeight);
				//this.content.css("margin-top", "-" + scrollHeight + "px");
			}

		},

		this.scrollTo = function(top, left) {
			this.moveContent(top);
		}

		this.moveContent = function(newtop) {
			this.content.attr("alt", newtop);
			console.log(newtop);
			if (Modernizr.csstransitions) {
				this.content.css({
						"-webkit-transform": "translate3d(0px, " + newtop + "px, 0px)",
						"-moz-transform": "translateY(" + newtop + "px)",
						"-o-transform": "translateY(" + newtop + "px)",
						"-ms-transform": "translateY(" + newtop + "px)"
						});
			} else {
				this.content.css("margin-top", newtop + "px");
			}
		}

		this.content.bind("contentChanged", function() {

			self.updateHeights();
			self.scrollbar.css("top", "0px");
			self.positionChanged();
		});

		this.normalizeNewtop = function(newtop) {
			var give = this.dragGive;

			var dragMin = (this.contentHeight - this.containerHeight) * -1 - give;

			var dragMax = give;

			if (newtop < dragMin)
				newtop = dragMin;

			if (newtop > dragMax)
				newtop = dragMax;

			return newtop;

		}

		this.contentContainer.mousewheel(function(event, delta) {

			event.preventDefault();

			self.updateHeights();

			var minMove=20;
			var totalMove = minMove*delta;
			var newtop = self.content.attr("alt") * 1 + totalMove;

			newtop = self.normalizeNewtop(newtop)

			self.content.addClass("scrollerTransition");
			self.moveContent(newtop);
			self.positionScrollbar();

			if (Modernizr.csstransitions) {
				clearTimeout(self.checkTimeout);
				self.checkTimeout = setTimeout(function(){
					self.checkDragPosition();
				}, 100);
			} else {
				self.checkDragPosition();
			}


		});

		this.checkFlick = function(pixels, time) {
			console.log(pixels + " " + time);
			return false;
		}

		this.content.bind("touchstart", function(event) {

			event.preventDefault();

			self.updateHeights();

			self.contentTouchY = event.originalEvent.touches[0].pageY;
			self.contentTouchMarginY = self.content.attr("alt");
			self.movementNoticed = false;


			if (isNaN(self.contentTouchMarginY))
			{
				self.content.attr("alt", "0");
				self.contentTouchMarginY = 0
			}


			jQuery(document).bind("touchend", function () {
				jQuery(document).unbind("touchmove");
				jQuery(document).unbind("touchend");


				/*
				console.log(event.originalEvent.touches[0].pageY + " - " + self.moveTouchY);

				var flick = self.checkFlick(event.originalEvent.touches[0].pageY - self.moveTouchY, event.timestamp - self.moveTouchTime);

				if (!flick) {
					try {
						self.checkDragPosition();
					}
					catch (e) {

					}
				}
				*/

				// see if this is a click...
				if (!self.movementNoticed) {
					// issue a click event..
					console.log("click");
					var clickEvent = document.createEvent("MouseEvent");
					clickEvent.initMouseEvent(
						"click", //type
						true, //canBubble
						true, //cancelable
						event.originalEvent.view,
						1, //detail (number of clicks for mouse events)
						event.originalEvent.screenX,
						event.originalEvent.screenY,
						event.originalEvent.clientX,
						event.originalEvent.clientY,
						event.originalEvent.ctrlKey,
						event.originalEvent.altKey,
						event.originalEvent.shiftKey,
						event.originalEvent.metaKey,
						event.originalEvent.button,
						null// relatedTarget
					);
					event.target.dispatchEvent(clickEvent);
				}

				self.checkDragPosition();
			});

			jQuery(document).bind('touchmove', function(event) {
				event.preventDefault();

				self.moveTouchY = event.originalEvent.touches[0].pageY;
				self.moveTouchTime = event.timestamp;

				// check for movement...
				if (Math.abs (self.contentTouchY - event.originalEvent.touches[0].pageY) > 5) {
					self.movementNoticed = true;
				}

				var newtop = self.contentTouchMarginY - (self.contentTouchY - event.originalEvent.touches[0].pageY);
				newtop = Math.min(0 + self.dragGive, newtop);

				newtop = Math.max(newtop, (self.contentHeight - self.containerHeight + self.dragGive) * -1);

				self.moveContent(newtop);
				//self.content.css("margin-top", newtop + "px");

				self.checkFade();


				self.positionScrollbar();



			});

		});

		this.positionScrollbar = function() {
			// position scrollbar...
			var percent = (self.content.attr("alt") * -1) / (self.contentHeight - self.containerHeight);
			var offset = Math.floor((self.containerHeight - self.scrollbarHeight) * percent);

			offset = Math.max(offset, 0);
			offset = Math.min(offset, self.containerHeight - self.scrollbarHeight);

			self.scrollbar.css("top", offset + "px");
		}


		this.scrollbar.bind("mousedown touchstart", function(event) {
			event.preventDefault();

			self.updateHeights();

			try {
				event.originalEvent.touches[0].pageY;
				event.pageY = event.originalEvent.touches[0].pageY;
			} catch(e) { };
			self.dragStartY = event.pageY;
			self.scrollbarTop = self.scrollbar.css("top").replace("px", "") * 1;

			// bind mouseup and mousemove events...
			var elem = jQuery(this);
			jQuery(document).bind("mouseup touchend", function() {
				jQuery(document).unbind("mousemove");
				jQuery(document).unbind("touchmove");
				jQuery(document).unbind("touchend");
				jQuery(document).unbind("mouseup");
			});

			jQuery(document).bind("mousemove touchmove", function(event) {
				event.preventDefault();
				try {
					event.originalEvent.touches[0].pageY;
					event.pageY = event.originalEvent.touches[0].pageY;
				} catch(e) { };
				try {
					var newtop = self.scrollbarTop + (event.pageY - self.dragStartY);
					newtop = Math.max(newtop, 0);
					newtop = Math.min(newtop, self.containerHeight - self.scrollbarHeight);
					self.scrollbar.css("top", newtop + "px");
					self.positionChanged();
				} catch(e) {  }
			});

		});

		try {
			this.content[0].addEventListener("webkitTransitionEnd", function() {
				jQuery(this).removeClass("scrollerTransition");
				self.checkFade();
			}, true);
		} catch(e) {
			// do nothing..
		}
		try {
			this.content[0].addEventListener("transitionend", function() {
				jQuery(this).removeClass("scrollerTransition");
				self.checkFade();
			}, true);
		} catch(e) {
			// do nothing..
		}
		try {
			this.content[0].addEventListener("OTransitionEnd", function() {
				jQuery(this).removeClass("scrollerTransition");
				self.checkFade();
			}, true);
		} catch(e) {
			// do nothing..
		}

		this.updateHeights();

	}

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/slider.js */
var Slider = function(wrapper) {
		this.wrapper = jQuery(wrapper);
		this.wrapperWidth = this.wrapper.width();
		this.wrapperHeight = this.wrapper.height();

		var self = this;

		//setup the slides..
		this.slides = jQuery(".mcom_slide", this.wrapper).each(function(i) {
			jQuery(this).css({
					width: self.wrapperWidth+"px",
					height: self.wrapperHeight+"px",
					//'-webkit-transform': "translate3d(0px, 0px, 0px)",
					'position': 'absolute',
					top: "0px",
					left: i * self.wrapperWidth + "px"
			}).attr("slideNum", i);
		});

		this.slideContainer = jQuery(".mcom_slideContainer", this.wrapper).css ({
			position: "absolute",
			width: self.slides.length * self.wrapperWidth,
			top: "0px",
			left: "0px",
			//'-webkit-transform': "translate3d(0px, 0px, 0px)",
			'-webkit-transition-property': '-webkit-transform',
			'-webkit-transition-duration': '.5s',
			'-webkit-transition-timing-function': 'ease-in'
		});

		this.currentSlide=0;
		this.maxSlides = this.slides.length;
		this.speed=500;

		this.swipeStatus = function(event, phase, direction, distance)
			{
				//If we are moving before swipe, and we are going Lor R in X mode, or U or D in Y mode then drag.
				if( phase=="move" && (direction=="left" || direction=="right") )
				{
					var duration=0;

					if (direction == "left")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) + distance, duration);

					else if (direction == "right")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) - distance, duration);

				}

				else if ( phase == "cancel")
				{
					self.scrollSlides(self.wrapperWidth * self.currentSlide, self.speed);
				}

				else if ( phase =="end" )
				{
					if (direction == "right")
						self.previousSlide()
					else if (direction == "left")
						self.nextSlide();
				}
			}

		this.previousSlide = function()
		{
			this.currentSlide = Math.max(this.currentSlide-1, 0);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}

		this.nextSlide = function()
		{
			this.currentSlide = Math.min(this.currentSlide+1, this.maxSlides-1);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}

		this.showSlide = function(num) {
			if (isNaN(num))
			{
				// try to find this slide..
				var items = jQuery(num, this.slideContainer);
				if (items.length == 0)
					return;
				num = items.attr("slideNum");
			}


			var slidesApart = Math.abs(num - this.currentSlide);
			this.currentSlide = num;

			self.scrollSlides( self.wrapperWidth * this.currentSlide, this.speed + (Math.max(slidesApart-2, 0) * 300));
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}

		/**
		* Manuallt update the position of the imgs on drag
		*/
		this.scrollSlides = function(distance, duration)
		{
			this.slideContainer.css("-webkit-transition-duration", (duration/1000).toFixed(1) + "s");

			//inverse the number we set in the css
			var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();

			if (finder.isTablet()) {
				this.slideContainer.css("-webkit-transform", "translate3d(" + value + "px,0px,0px)");
			} else {
				this.slideContainer.animate({
					"left": value + "px"
				}, 1000, "easeOutQuint");
			}
		}

		var swipeOptions = {
			triggerOnTouchEnd : true,
			swipeStatus : self.swipeStatus,
			threshold:200,
			allowPageScroll:"auto"
		}

		//if (Modernizr.touch)
			//this.slideContainer.swipe(swipeOptions);
	}

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/slider2.js */
var Slider2 = function(wrapper) {
		this.wrapper = jQuery(wrapper);
		this.wrapperWidth = this.wrapper.width();
		this.wrapperHeight = this.wrapper.height();

		var self = this;

		//setup the slides..
		this.slides = jQuery(".mcom_slide", this.wrapper).each(function(i) {
			jQuery(this).css({
					width: self.wrapperWidth+"px",
					height: self.wrapperHeight+"px",
					//'-webkit-transform': "translate3d(0px, 0px, 0px)",
					'position': 'absolute',
					top: "0px",
					left: "0px",
					border: "1px solid black",
					opacity: .5
			}).attr("slideNum", i);
		});

		this.currentSlide=0;
		this.maxSlides = this.slides.length;
		this.speed=500;

		this.eachAngle = 360 / this.maxSlides;

		this.slides.each(function(i) {
			jQuery(this).css({
				"-webkit-transform": "translate3d(0px, 0px, " + 400 + "px) rotateY(" + (self.eachAngle * i) + "deg)"
			})
		});

		this.slideContainer = jQuery(".mcom_slideContainer", this.wrapper).css ({
			position: "absolute",
			width: self.slides.length * self.wrapperWidth,
			top: "0px",
			left: "0px",
			//'-webkit-transform': "translate3d(0px, 0px, 0px)",
			'-webkit-transition-property': '-webkit-transform',
			'-webkit-transition-duration': '.5s',
			'-webkit-transition-timing-function': 'ease-in',
			'-webkit-prespective': "1000px"
		});



		this.swipeStatus = function(event, phase, direction, distance)
			{
				//If we are moving before swipe, and we are going Lor R in X mode, or U or D in Y mode then drag.
				if( phase=="move" && (direction=="left" || direction=="right") )
				{
					var duration=0;

					if (direction == "left")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) + distance, duration);

					else if (direction == "right")
						self.scrollSlides((self.wrapperWidth * self.currentSlide) - distance, duration);

				}

				else if ( phase == "cancel")
				{
					self.scrollSlides(self.wrapperWidth * self.currentSlide, self.speed);
				}

				else if ( phase =="end" )
				{
					if (direction == "right")
						self.previousSlide()
					else if (direction == "left")
						self.nextSlide();
				}
			}

		this.previousSlide = function()
		{
			this.currentSlide = Math.max(this.currentSlide-1, 0);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}

		this.nextSlide = function()
		{
			this.currentSlide = Math.min(this.currentSlide+1, this.maxSlides-1);
			self.scrollSlides( this.wrapperWidth * this.currentSlide, self.speed);
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}

		this.showSlide = function(num) {
			if (isNaN(num))
			{
				// try to find this slide..
				var items = jQuery(num, this.slideContainer);
				if (items.length == 0)
					return;
				num = items.attr("slideNum");
			}


			var slidesApart = Math.abs(num - this.currentSlide);
			this.currentSlide = num;

			self.scrollSlides( self.wrapperWidth * this.currentSlide, this.speed + (Math.max(slidesApart-2, 0) * 300));
			this.wrapper.trigger('slideChanged', [this.currentSlide, this.maxSlides]);
		}

		/**
		* Manuallt update the position of the imgs on drag
		*/
		this.scrollSlides = function(distance, duration)
		{
			this.slideContainer.css("-webkit-transition-duration", (duration/1000).toFixed(1) + "s");

			//inverse the number we set in the css
			var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();

			this.slideContainer.css("-webkit-transform", "rotateY(" + value + "deg)" /*"translate3d("+value +"px,0px,0px)"*/);
		}

		var swipeOptions = {
			triggerOnTouchEnd : true,
			swipeStatus : self.swipeStatus,
			threshold:200,
			allowPageScroll:"auto"
		}

		if (Modernizr.touch)
			this.slideContainer.swipe(swipeOptions);
	}

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/base/widgets.js */

var Widgets = Class.extend({



    init: function(){



    },


	initializeWidgets: function(parent) {

		var self = this;

		// find all spotlight callouts..
		jQuery("[role='spotlightCallout']", parent).each(function() {
			var item = jQuery(this);

			self.initializeSpotlightCallout(item);
			item.attr("originalWidth", item.width());

		}).append("<div style='clear:both'></div>").hover( function() {
			var item = jQuery(this);
			item.addClass("hover");

			if (Modernizr.csstransitions)
				return;

			var background = jQuery(".background IMG", item);
			background.stop().animate({width: (1*item.attr("originalWidth") + 10) + "px"});


		}, function() {
			var item = jQuery(this);

			item.removeClass("hover");

			if (Modernizr.csstransitions)
				return;

			var background = jQuery(".background IMG", item);
			background.stop().animate({width: (1*item.attr("originalWidth")) + "px"});

		});


		// initialize the carousel...
		jQuery("[role='carousel']", parent).each(function() {

			self.initiateCarousel(jQuery(this));




		}).hover(function() {
			var item = jQuery(this);
			item.addClass("hover");
		}, function() {
			var item = jQuery(this);
			item.removeClass("hover");
		})

		jQuery("DIV[href]").click(function() {
			var link = jQuery(this).attr("href");

			if (link.toLowerCase().substring(0,4) == "http")
				platformOpenNewWindow(link, "_blank", false);
			else
				window.location = link;
		})


	},

	initializeSpotlightCallout: function(container) {

		var id = container.attr("id");

		var templateHTML = jQuery(".template#spotlightCallout").html();
		templateHTML = templateHTML.replace(/\$\{id\}/g, id);
		templateHTML = templateHTML.replace(/\$\{assetsDirectory\}\//g, finder.getConfig().assetsDirectory);
		var callout = jQuery(templateHTML).appendTo(container);

		var img = jQuery("<img src='" + finder.getConfig().assetsDirectory + "images/spotlights/" + id + "/background.jpg'>");

		img.bind("load", function() {
			var self = jQuery(this);

			self.parent().css({
				width: self.width() + "px",
				height: self.height() + "px"
			})
		})

		jQuery(img).appendTo(jQuery(".background", callout));



	},

	initiateCarousel: function(container) {

		// update the html...

		var carouselId = container.attr("id");
		var href = container.attr("link");

		container.wrapInner("<div class='rotatingAds'></div>");

		container.addClass("carouselWidget");



		var rotatingAds = jQuery(".rotatingAds", container);

		rotatingAds.wrap("<div class='rotatingWrapper'></div>");

		rotatingAds.css("height", (container.height() - 34) + "px");


		var myHeight = rotatingAds.height();
		var eachWidth = container.width();

		// there are divs inside here... grab them and work on them...
		var items = rotatingAds.children();

		rotatingAds.css("width", container.width() * (items.length + 1));

		// do some tricky.. take hte first item.. clone it.. and add it in at the end..
		jQuery(items[0]).clone().appendTo(rotatingAds);

		items = rotatingAds.children();

		items.each(function() {
			var item = jQuery(this);
			var id = item.attr("id");
			item.html("<img class='button' src='" + finder.getConfig().assetsDirectory + "images/spotlights/rotatingAds/" + id + "/buttonimage.png'>");
			item.css("background", "url('" + finder.getConfig().assetsDirectory + "images/spotlights/rotatingAds/" + id + "/background_image.jpg')");
			//item.css("height", myHeight + "px");
			item.css("width", eachWidth + "px");
		})

		jQuery("<div class='heading'></div>").insertBefore(rotatingAds.parent());
		var header = jQuery(".heading", container);

		jQuery("<img src='" + finder.getConfig().assetsDirectory + "images/spotlights/rotatingAds/" + carouselId + "_header.png'>").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			window.location = href;
		}).appendTo(header);

		jQuery("<div class='dotContainer'></div>").css("width", "50%").appendTo(header);
		var dotContainer = jQuery(".dotContainer", header);

		for (i = 0; i < items.length - 1; i++)
		{
			jQuery("<div class='dot'></div>").appendTo(dotContainer);
		}

		jQuery(dotContainer.children()[0]).addClass("on");

		rotatingAds.attr("selected", "0");
		rotatingAds.attr("paused", "");





		var intervalFunc = function() {

			// get selected..
			var selected = 1 * rotatingAds.attr("selected");
			var children = rotatingAds.children();

			selected = (selected + 1) % children.length;
			rotatingAds.attr("selected", selected);


			if (!finder.isTablet()) {
				rotatingAds.animate({
					"margin-left": (-1 * eachWidth * selected) + "px"
				}, 2000, "easeInOutQuint", function(){
					var me = jQuery(this);
					var meSelected = 1 * me.attr("selected");



					if (meSelected == 0)
						me.css("margin-left", "0px");

				});
			} else {
				rotatingAds.css("-webkit-transition", "all 2000ms ease-in-out");
				rotatingAds.css({
					"-webkit-transform": "translate3d(" + (-1 * eachWidth * selected) + "px, 0, 0)"
				});
				var meSelected = 1 * rotatingAds.attr("selected");
				if (meSelected == 0)
					rotatingAds.css("-webkit-transform", "translate3d(0px, 0px, 0px)");
			}

			if (selected == children.length - 1)
			{
				//last one..
				selected = 0;
			}

			rotatingAds.attr("selected", selected);

			setTimeout(function() {
				jQuery(".dot", dotContainer).removeClass("on")
				jQuery(".dot:nth-child(" + (selected + 1) + ")", dotContainer).addClass("on")
			}, 1000);

		}

		var interval = setInterval(intervalFunc, 5000);

		rotatingAds.hover(function() {
			clearInterval(interval);
		}, function() {
			if (rotatingAds.attr("paused") == "")
				interval = setInterval(intervalFunc, 5000);
		})

		jQuery(".dot", dotContainer).click(function() {
			var dot = jQuery(this);
			rotatingAds.attr("paused", "true");

			var dotNumber = dot.index();

			clearInterval(interval);

			rotatingAds.attr("selected", dotNumber - 1);
			intervalFunc.call();


		})


	}




});

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/MenGuideStyleFinder.js */

var MenGuideStyleFinder = MacysFinder.extend({


    setup: function(){

    	this.defaultPage = this.getConfig().defaultPage;

		/* GLOBAL EVENT HANDLERS GO HERE */

       finder.autotracker = new AutoTracker();

        // handle vote tracking..
        jQuery("#finderContainer").bind("skavaVote", function(event) {
            finder.skava.handleTracking(finder.getCurrentPage(), finder.getConfig().tracking.vote);
        })


		jQuery("DIV[href]").live("click", function() {
			window.location = jQuery(this).attr("href");
		})


        /////// open subnav after time done

        finder.skava.initializeWidgets("BODY");
		/* END GLOBAL EVENT HANDLERS */



		// browser detection flags
        finder.simpleAnime=false;

        if ( $.browser.msie ) {

            var fc = $('#finderContainer').addClass('msie');

            if ($.browser.version.indexOf('7')>=0) {
                fc.addClass('ie7');
                finder.simpleAnime=true;
            }

            else if ($.browser.version.indexOf('8')>=0) {
                fc.addClass('ie8');
                finder.simpleAnime=true;
            }

        }

        this.startFinder();
        IS_IPAD = navigator.userAgent.match(/iPad/i) !== null;
        IS_IPHONE = (navigator.userAgent.match(/iPhone/i) !== null) || (navigator.userAgent.match(/iPod/i) !== null);

        if (IS_IPAD || IS_IPHONE) {
            //alert("yo");
            $("#navBar ul li a").bind("click touchend" , function( event ) {
                event.preventDefault();
                console.log("CLICK");
                var $target = $(event.target);
                var href = $target.attr("href");
                window.location = href;
                //console.log( $target , " TARGET% **********************");
                //var href = $(event.target).attr("href");
                //alert( href );
            });
            /*
            $('a').on('click touchend', function() {
                var link = $(this).attr('href');
                window.open(link,'_blank'); // opens in new window as requested

                return false; // prevent anchor click
            });*/
        }

    },


    pageChanged: function(page){

        this.highlightSelected(page);

        if(page.navHighlight == "home"){
            $("#finderContainer #navContainer").show();
           // $("#BODY").css("height: 700px;")
        }else{
            $("#finderContainer #navContainer").show();
            //$("#BODY").css("height: 560px;")
        }
        if(page.navHighlight != "shirtTieMixer"){
            $("#id_stMixerPopup").hide();
        }


        ////hide/clear footer pool if page is not in how to wear it

        if( page.navHighlight == "htwhotspot" || page.navHighlight == "htwproducts"){
        }else{

            $('#footerContainer #products').html(' ');
        }

    },

    returnUrl: function() {
        var url = webRoot + "/#/" + finder.currentPage.navId;
        if (finder.currentPage.params.argc) {
            if (finder.currentPage.params.argc.length > 0) {
                 url += "/" + finder.currentPage.params.argc.join("/");
            }
        }
        return url;
    },

    highlightSelected: function(page){

        //  main nav hi lights
        jQuery(".highlighted", "#navContainer").removeClass("highlighted");
        jQuery("#"+page.navHighlight, "#navContainer ").addClass("highlighted");

        // subnav high lites

        var subnav = $('#navContainer').find('#subnav');
        subnav.find('li').removeClass('highlighted');
        subnav.find('.'+page.navHighlight).addClass('highlighted').parent().parent().addClass('highlighted');



        // set footer
        if (page.showFooterCTA){
            $('#footer').hide();
            $('#subfooter').show();
        }
        else {
            $('#footer').show()
            $('#subfooter').hide();
        }

    },

	getConfig: function() {
		return SiteConfig;
    },

    fitguideimagemaptracking: function( $obj ) {
        var extrastring = '.' + $obj.attr('addingtrack');
        var $page=finder.getCurrentPage();
        try {
            var tracking = $.extend(true, {}, finder.getConfig().tracking[$page.navId]);
            tracking.pageid+=extrastring;
            //console.log('################===>  ', tracking);
            finder.skava.handleTracking(this, tracking);
        } catch(e) {
            // we don't have tracking for this page...
        }
    }

});


var PoolHelper = Class.extend({

	parseEntry: function(entry) {

		/*
		if (entry.pfeed_specialsizes && !(entry.pfeed_specialsizes instanceof Array))
			entry.pfeed_specialsizes = entry.pfeed_specialsizes.split(",");

		if (entry.pfeed_color && !(entry.pfeed_color instanceof Array))
			entry.pfeed_color = entry.pfeed_color.split(",");
		*/

        if (entry.pfeed_classicstyle && !(entry.pfeed_classicstyle instanceof Array))
            entry.pfeed_classicstyle = entry.pfeed_classicstyle.split(",");


        if (entry.pfeed_modernstyle && !(entry.pfeed_modernstyle instanceof Array))
            entry.pfeed_modernstyle = entry.pfeed_modernstyle.split(",");

        if (entry.pfeed_contemporarystyle && !(entry.pfeed_contemporarystyle instanceof Array))
            entry.pfeed_contemporarystyle = entry.pfeed_contemporarystyle.split(",");
	}

});



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/MenGuideStyleHTMLPages.js */
var MenGuideStyleHTMLPages = {"dressing101":"<div id=\"dressing101\" class=\"finderPage fitbackground\">\n\n    <div id=\"main\">\n       <img src=\"randomDirectory\/images\/dressing101\/h1_title.png\" id=\"title\" alt=\"Dressing 101\">\n        <img src=\"randomDirectory\/images\/dressing101\/sub.png\" id=\"sub\"\n             alt=\"make the cut with tools, tips and techniques every well-dressed guy needs\">\n        <a href=\"#\/fitsuit\" track=\"fitsuit\"><img src=\"randomDirectory\/images\/dressing101\/main-1.png\" class=\"click chowto\" alt=\"HOW TO TIE THE PERFECT KNOT\"><\/a>\n        <a href=\"#\/fitsuit\" class=\"main-link\" track=\"fitsuit\"><img src=\"randomDirectory\/images\/dressing101\/main1_link.png\" class=\"click chowto\" alt=\"HOW TO TIE THE PERFECT KNOT\"><\/a>\n\n        <a href=\"#\/fitshirt\" track=\"fitsuit\"><img src=\"randomDirectory\/images\/dressing101\/main-2.png\" class=\"click ccheckList\" alt=\"THE CHECKLIST\"><\/a>\n        <a href=\"#\/fitshirt\" class=\"main-link\" track=\"fitsuit\"><img src=\"randomDirectory\/images\/dressing101\/main2_link.png\" class=\"click ccheckList\" alt=\"THE CHECKLIST\"><\/a>\n\n        <a href=\"#\/fitjeans\" track=\"fitsuit\"><img src=\"randomDirectory\/images\/dressing101\/main-3.png\" class=\"click cfitGuide\" alt=\"FIT GUIDE\"><\/a>\n        <a href=\"#\/fitjeans\" class=\"main-link\" track=\"fitsuit\"><img src=\"randomDirectory\/images\/dressing101\/main3_link.png\" class=\"click cfitGuide\" alt=\"FIT GUIDE\"><\/a>\n\n    <\/div>\n\n\n\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitsuit\" track=\"fitsuit\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"\" border=\"0\" track=\"next\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/shirtTieMixer\" track=\"fitsuit\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"\" border=\"0\" track=\"prev\">\n        <\/a>\n    <\/div>\n\n\n\n<\/div>","fitjeans":"<div id=\"fitjeans\" class=\"finderPage\">\n\n\n    <div id=\"jeans\">\n        <img src=\"randomDirectory\/images\/fitjeans\/jeans.jpg\" border=\"0\" width=\"898\" height=\"616\" usemap=\"#jeans-map\">\n    <\/div>\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitknots\" track=\"fitknots\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitshirtclassic\" track=\"fitshirt\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n<\/div>\n\n<map name=\"jeans-map\">\n    <area id=\"bootcut\" shape=\"rect\" coords=\"43,133,193,579\" alt=\"bootcut\" title=\"bootcut\"  role=\"skavaInteropFitJeansBootcut\" target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-jeans?id=11221&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-clothing-shirts-dress-shirts-_-11221_Jeans#!fn=DENIM_FIT%3DBootcut%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\" track=\"bootcut\"    \/>\n    <area id=\"straight\" shape=\"rect\" coords=\"194,134,369,579\" alt=\"straight\" title=\"straight\" role=\"skavaInteropFitJeansStraight\" target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-jeans?id=11221&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-clothing-shirts-dress-shirts-_-11221_Jeans#!fn=DENIM_FIT%3DStraight%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\" track=\"straight\"    \/>\n    <area id=\"relaxed\" shape=\"rect\" coords=\"369,132,529,579\" alt=\"relaxed\" title=\"relaxed\" role=\"skavaInteropFitJeansRelaxed\" target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-jeans?id=11221&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-clothing-shirts-dress-shirts-_-11221_Jeans#!fn=DENIM_FIT%3DRelaxed%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\" track=\"relaxed\"    \/>\n    <area id=\"slim\" shape=\"rect\" coords=\"539,132,699,579\" alt=\"slim\" title=\"slim\" role=\"skavaInteropFitJeansSlim\" target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-jeans?id=11221&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-clothing-shirts-dress-shirts-_-11221_Jeans#!fn=DENIM_FIT%3DSlim%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\" track=\"slim\"    \/>\n    <area id=\"skinny\" shape=\"rect\" coords=\"704,133,854,579\" alt=\"skinny\" title=\"skinny\" role=\"skavaInteropFitJeansSkinny\" target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-jeans?id=11221&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-clothing-shirts-dress-shirts-_-11221_Jeans#!fn=DENIM_FIT%3DSkinny%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\" track=\"skinny\" \/>\n<\/map>\n","fitknots":"<div id=\"fitknots\" class=\"finderPage\">\n\n\n    <img class=\"mainimage\" usemap=\"#knotsMap\" src=\"randomDirectory\/images\/fitknots\/windsor.jpg\">\n\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitknots2\" track=\"fitknots2\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitjeans\" track=\"fitjeans\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n\n<\/div>\n\n<map name=\"knotsMap\" id=\"knotsMap\">\n    <area class=\"nav1\" shape=\"rect\" coords=\"342,37,433,66\" href=\"#\/fitknots\" track=\"fitknots\" \/>\n    <area class=\"nav2\" shape=\"rect\" coords=\"443,37,554,66\" href=\"#\/fitknots2\" track=\"fitknots2\" \/>\n    <area class=\"nav3\" shape=\"rect\" coords=\"563,37,655,66\" href=\"#\/fitknots3\" track=\"fitknots3\" \/>\n    <area class=\"nav4\" shape=\"rect\" coords=\"662,36,753,65\" href=\"#\/fitknots4\" track=\"fitknots4\" \/>\n<\/map>","fitknots2":"<div id=\"fitknots2\" class=\"finderPage\">\n\n    <img class=\"mainimage\" usemap=\"#knotsMap\" src=\"randomDirectory\/images\/fitknots\/half_windsor.jpg\">\n\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitknots3\" track=\"fitknots3\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitknots\" track=\"fitknots\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n\n\n\n<\/div>\n\n<map name=\"knotsMap\" id=\"knotsMap\">\n    <area class=\"nav1\" shape=\"rect\" coords=\"342,37,433,66\" href=\"#\/fitknots\" track=\"fitknots\" \/>\n    <area class=\"nav2\" shape=\"rect\" coords=\"443,37,554,66\" href=\"#\/fitknots2\" track=\"fitknots2\" \/>\n    <area class=\"nav3\" shape=\"rect\" coords=\"563,37,655,66\" href=\"#\/fitknots3\" track=\"fitknots3\" \/>\n    <area class=\"nav4\" shape=\"rect\" coords=\"662,36,753,65\" href=\"#\/fitknots4\" track=\"fitknots4\" \/>\n<\/map>","fitknots3":"<div id=\"fitknots3\" class=\"finderPage\">\n\n    <img class=\"mainimage\" usemap=\"#knotsMap\" src=\"randomDirectory\/images\/fitknots\/classic.jpg\">\n\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitknots4\" track=\"fitknots4\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitknots2\" track=\"fitknots2\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n\n\n<\/div>\n\n<map name=\"knotsMap\" id=\"knotsMap\">\n    <area class=\"nav1\" shape=\"rect\" coords=\"342,37,433,66\" href=\"#\/fitknots\" track=\"fitknots\" \/>\n    <area class=\"nav2\" shape=\"rect\" coords=\"443,37,554,66\" href=\"#\/fitknots2\" track=\"fitknots2\" \/>\n    <area class=\"nav3\" shape=\"rect\" coords=\"563,37,655,66\" href=\"#\/fitknots3\" track=\"fitknots3\" \/>\n    <area class=\"nav4\" shape=\"rect\" coords=\"662,36,753,65\" href=\"#\/fitknots4\" track=\"fitknots4\" \/>\n<\/map>","fitknots4":"<div id=\"fitknots4\" class=\"finderPage\">\n\n\n\n    <img class=\"mainimage\" usemap=\"#knotsMap\" src=\"randomDirectory\/images\/fitknots\/bowtie.jpg\">\n\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitknots3\" track=\"fitknots3\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n     <div class=\"nextNavButton\">\n        <a href=\"#\/home\" track=\"home\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"\" border=\"0\">\n        <\/a>\n        <\/a>\n    <\/div>\n\n\n<\/div>\n\n<map name=\"knotsMap\" id=\"knotsMap\">\n    <area class=\"nav1\" shape=\"rect\" coords=\"342,37,433,66\" href=\"#\/fitknots\" track=\"fitknots\" \/>\n    <area class=\"nav2\" shape=\"rect\" coords=\"443,37,554,66\" href=\"#\/fitknots2\" track=\"fitknots2\" \/>\n    <area class=\"nav3\" shape=\"rect\" coords=\"563,37,655,66\" href=\"#\/fitknots3\" track=\"fitknots3\" \/>\n    <area class=\"nav4\" shape=\"rect\" coords=\"662,36,753,65\" href=\"#\/fitknots4\" track=\"fitknots4\" \/>\n<\/map>","fitshirt":"<div id=\"fitshirt\" class=\"finderPage\">\n\n    <img usemap=\"#shirtMap\" class=\"mainimage\" src=\"randomDirectory\/images\/fitshirt\/fgShirt_main.jpg\">\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitshirtextraslim\" track=\"fitshirtextraslim\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitsize\" track=\"fitsize\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>\n\n<map name=\"shirtMap\" id=\"shirtMap\">\n    <area shape=\"rect\" coords=\"44,177,243,543\" href=\"#\/fitshirtextraslim\" track=\"fitshirt\"extraslim\/>\n    <area shape=\"rect\" coords=\"242,178,449,542\" href=\"#\/fitshirtslim\" track=\"fitshirtslim\"\/>\n    <area shape=\"rect\" coords=\"447,176,653,543\" href=\"#\/fitshirtfitted\" track=\"fitshirtfitted\" \/>\n    <area shape=\"rect\" coords=\"651,177,856,543\" href=\"#\/fitshirtclassic\" track=\"fitshirtclassic\" \/>\n<\/map>\n","fitshirtclassic":"<div id=\"fitshirtclassic\" class=\"finderPage\">\n\n    <img usemap=\"#fitshirtclassicMap\" class=\"mainimage\" src=\"randomDirectory\/images\/fitshirtclassic\/mainshirt_c.jpg\">\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitjeans\" track=\"fitjeans\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitshirtfitted\" track=\"fitshirtfitted\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>\n<map name=\"fitshirtclassicMap\" id=\"fitshirtclassicMap\">\n\n\n    <area shape=\"rect\" coords=\"589,135,639,157\" track=\"shop\" alt=\"Alfani\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DAlfani%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\" track=\"fitshirt\"\/>\n    <area shape=\"rect\" coords=\"639,135,723,157\" track=\"shop\" alt=\"Calvin Klein\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DCalvin%20Klein%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"721,135,805,157\" track=\"shop\" alt=\"Club Room\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DClub%20Room%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"480,154,526,175\" track=\"shop\" alt=\"Eagle\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DEagle%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"525,155,631,173\" track=\"shop\" alt=\"Geoffrey Beene\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DGeoffrey%20Beene%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"629,157,788,173\" track=\"shop\" alt=\"Hugo Boss\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DHugo%20Boss%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"481,173,627,192\" track=\"shop\" alt=\"Ralph Lauren\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DLauren%20Ralph%20Lauren%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"620,172,776,191\" track=\"shop\" alt=\"Michael Kors\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DMichael%20Kors%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"773,171,835,191\" track=\"shop\" alt=\"Nautica\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DNautica%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"481,191,638,208\" track=\"shop\" alt=\"Kenneth Cole\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DKenneth%20Cole%20Reaction%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"637,190,716,207\" track=\"shop\" alt=\"Sean John\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DSean%20John%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"715,190,793,206\" track=\"shop\" alt=\"Tasso Elba\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DTasso%20Elba%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"480,206,589,226\" track=\"shop\" alt=\"Tommy Hilfiger\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DTommy%20Hilfiger%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"588,206,695,225\" track=\"shop\" alt=\"Donald Trump\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DDonald%20J.%20Trump%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"692,205,783,226\" track=\"shop\" alt=\"Van Heusen\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DVan%20Heusen%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"479,224,660,246\" track=\"shop\" alt=\"Vince Caumto\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DVince%20Camuto%26SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"471,503,684,545\" track=\"shop\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=SHIRT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"692,505,823,541\" track=\"viewallfits\"\n    href=\"#\/fitshirt\"\/>\n\n<\/map>","fitshirtextraslim":"<div id=\"fitshirtextraslim\" class=\"finderPage\">\n\n    <img usemap=\"#fitshirtextraslimMap\" class=\"mainimage\" src=\"randomDirectory\/images\/fitshirtextraslim\/mainshirt_es.jpg\">\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitshirtslim\" track=\"fitshirtsslim\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitshirt\" track=\"fitshirt\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>\n<map name=\"fitshirtextraslimMap\" id=\"fitshirtextraslimMap\">\n    <area shape=\"rect\" coords=\"596,139,696,159\" track=\"shop\" alt=\"Calvin Klein X\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-clothing-suits-%26-suit-separates-_-20635_Dress-Shirts#!fn=BRAND%3DCalvin%2520Klein%26SHIRT_FIT%3DExtra%2520Slim%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"694,140,839,157\" track=\"shop\" alt=\"Hugo Boss\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-clothing-suits-%26-suit-separates-_-20635_Dress-Shirts#!fn=BRAND%3DHugo%2520Boss%26SHIRT_FIT%3DExtra%2520Slim%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"472,510,709,546\" track=\"shop\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=SHIRT_FIT%3DExtra%20Slim%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"717,509,848,545\" track=\"viewallfits\"\n    href=\"#\/fitshirt\"\/>\n<\/map>","fitshirtfitted":"<div id=\"fitshirtfitted\" class=\"finderPage\">\n\n    <img usemap=\"#fitshirtfittedMap\" class=\"mainimage\" src=\"randomDirectory\/images\/fitshirtfitted\/mainshirt_f.jpg\">\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitshirtclassic\" track=\"fitshirtclassic\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitshirtslim\" track=\"fitshirtslim\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>\n<map name=\"fitshirtfittedMap\" id=\"fitshirtfittedMap\">\n    <area shape=\"rect\" coords=\"593,126,665,146\" track=\"shop\" alt=\"Alfani Red\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DAlfani%26SHIRT_FIT%3DFitted%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"663,125,776,147\" track=\"shop\" alt=\"Geoffrey Beene\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DGeoffrey%20Beene%26SHIRT_FIT%3DFitted%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"474,145,561,170\" track=\"shop\" alt=\"Van Heusen\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DVan%20Heusen%26SHIRT_FIT%3DFitted%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"561,145,645,169\" track=\"shop\" alt=\"Hugo Boss\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DHugo%20Boss%26SHIRT_FIT%3DFitted%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"458,505,647,541\" track=\"shop\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=SHIRT_FIT%3DFitted%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"653,504,784,540\" track=\"viewallfits\"\n    href=\"#\/fitshirt\"\/>\n<\/map>","fitshirtslim":"<div id=\"fitshirtslim\" class=\"finderPage\">\n\n    <img usemap=\"#fitshirtslimMap\" class=\"mainimage\" src=\"randomDirectory\/images\/fitshirtslim\/mainshirt_s.jpg\">\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitshirtfitted\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" track=\"fitshirtfitted\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitshirtextraslim\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" track=\"fitshirtextraslim\" alt=\"previous\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>\n<map name=\"fitshirtslimMap\" id=\"fitshirtslimMap\">\n\n\n    <area shape=\"rect\" coords=\"593,121,707,144\" track=\"shop\" alt=\"Alfani Spectrum\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DAlfani%26SHIRT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"704,123,748,144\" track=\"shop\" alt=\"Bar iii\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DBar%20III%26SHIRT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"746,121,833,146\" track=\"shop\" alt=\"Calvin Klein\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-clothing-suits-%26-suit-separates-_-20635_Dress-Shirts#!fn=BRAND%3DCalvin%2520Klein%26SHIRT_FIT%3DSlim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"483,147,519,163\" track=\"shop\" alt=\"Calvin Klein\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-clothing-suits-%26-suit-separates-_-20635_Dress-Shirts#!fn=BRAND%3DCalvin%2520Klein%26SHIRT_FIT%3DSlim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"515,147,558,163\" track=\"shop\" alt=\"DKNY\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DDKNY%26SHIRT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"556,148,633,164\" track=\"shop\" alt=\"Hugo Boss\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DHugo%20Boss%26SHIRT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"634,148,792,162\" track=\"shop\" alt=\"Ralph Lauren\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DLauren%20Ralph%20Lauren%26SHIRT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"482,165,641,181\" track=\"shop\" alt=\"Kenneth Cole\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DKenneth%20Cole%20Reaction%26SHIRT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"637,165,746,180\" track=\"shop\" alt=\"Tommy Hilfiger\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DTommy%20Hilfiger%26SHIRT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"743,166,847,180\" track=\"shop\" alt=\"Vince Camuto\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DVince%20Camuto%26SHIRT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"483,180,579,198\" track=\"shop\" alt=\"Tallia orange\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=BRAND%3DTallia%26SHIRT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"579,182,630,198\" track=\"shop\" alt=\"Eagle\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-clothing-suits-%26-suit-separates-_-20635_Dress-Shirts#!fn=BRAND%3DEagle%26SHIRT_FIT%3DSlim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"470,503,659,539\" track=\"shop\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-dress-shirts?id=20635&edge=hybrid#!fn=SHIRT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"668,504,799,540\" track=\"viewallfits\"\n    href=\"#\/fitshirt\"\/>\n\n\n\n<\/map>","fitsize":"<div id=\"fitsize\" class=\"finderPage\">\n\n\n    <img class=\"mainimage\" usemap=\"#sizeMap\" src=\"randomDirectory\/images\/fitsize\/size.jpg\">\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitshirt\" track=\"fitshirt\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitsuitclassic\" track=\"fitsuitclassic\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>\n\n\n<map name=\"sizeMap\" id=\"sizeMap\">\n    <area shape=\"rect\" coords=\"263,481,479,509\" href=\"#\/fitsuit\" alt=\"fitsuit\" track=\"fitsuit\"\/>\n<\/map>","fitsuit":"<div id=\"fitsuit\" class=\"finderPage\">\n\n    <img class=\"mainimage\" usemap=\"#fitsuitMap\" src=\"randomDirectory\/images\/fitsuit\/suit2.jpg\">\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitsuitextraslim\" track=\"fitsuitextraslim\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/dressing101\" track=\"dressing101\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>\n<map name=\"fitsuitMap\" id=\"fitsuitMap\">\n    <area shape=\"rect\" coords=\"44,177,243,543\" href=\"#\/fitsuitextraslim\" track=\"fitsuitextraslim\" \/>\n    <area shape=\"rect\" coords=\"242,178,449,542\" href=\"#\/fitsuitslim\" track=\"fitsuitslim\"\/>\n    <area shape=\"rect\" coords=\"447,176,653,543\" href=\"#\/fitsuittrim\" track=\"fitsuittrim\" \/>\n    <area shape=\"rect\" coords=\"651,177,856,543\" href=\"#\/fitsuitclassic\" track=\"fitsuitclassic\" \/>\n<\/map>","fitsuitclassic":"<div id=\"fitsuitclassic\" class=\"finderPage\">\n\n    <img class=\"mainimage\" usemap=\"#fitsuitclassicMap\" src=\"randomDirectory\/images\/fitsuitclassic\/main_c.jpg\">\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitsize\" track=\"fitsize\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitsuittrim\" track=\"fitsuittrim\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>\n<map name=\"fitsuitclassicMap\" id=\"fitsuitclassicMap\">\n    <area shape=\"rect\" coords=\"605,139,689,159\" track=\"shop\" alt=\"Tasso Elba\"\n    target=\"_blank\" href=\"\thttp:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DTasso%20Elba%26SUIT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"690,139,799,158\" track=\"shop\" alt=\"Alfani Black\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DAlfani%26SUIT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"485,160,658,176\" track=\"shop\" alt=\"Ralph Lauren\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DLauren%20Ralph%20Lauren%26SUIT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"656,160,800,178\" track=\"shop\" alt=\"Hugo Boss\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid&cm_sp=us_hdr-_-men-shoes-%26-accessories-wallets-%26-accessories-_-17788_Suits-%26-Suit-Separates#!fn=BRAND%3DHugo%20Boss%26SUIT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"484,175,564,195\" track=\"shop\" alt=\"Perry Ellis\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DPerry%20Ellis%26SUIT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"565,175,735,196\" track=\"shop\" alt=\"Michael Kors\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DMichael%20Kors%26SUIT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"729,175,819,195\" track=\"shop\" alt=\"Sean John\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DSean%20John%26SUIT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"480,192,519,212\" track=\"shop\" alt=\"Izod\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DIZOD%26SUIT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"517,193,636,211\" track=\"shop\" alt=\"Tommy Hilfiger\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-brands-nautica-_-17788_Suits-%26-Suit-Separates#!fn=BRAND%3DTommy%2520Hilfiger%26SUIT_FIT%3DClassic%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"633,194,758,212\" track=\"shop\" alt=\"Jones New York\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-brands-nautica-_-17788_Suits-%26-Suit-Separates#!fn=BRAND%3DJones%2520New%2520York%26SUIT_FIT%3DClassic%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"482,211,700,230\" track=\"shop\" alt=\"Shaquille O'Neal Collection\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-brands-nautica-_-17788_Suits-%26-Suit-Separates#!fn=BRAND%3DShaquille%2520O%2527Neal%2520Collection%26SUIT_FIT%3DClassic%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"471,380,665,414\" track=\"shop\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=SUIT_FIT%3DClassic%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"473,415,624,452\" href=\"#\/fitsuit\" role=\"skavaInteropPageTracking\" tracking=\"ca-so-gentlemans.101.fitguide.suits.classicfit.viewallfits,ca-so-gentlemans-guide-fitguide-suits-classicfit\" \/>\n    <area shape=\"rect\" coords=\"474,451,655,485\" track=\"viewallfits\"\n    href=\"#\/fitsize\"\/>\n<\/map>","fitsuitextraslim":"<div id=\"fitsuitextraslim\" class=\"finderPage\">\n\n    <img class=\"mainimage\" usemap=\"#fitsuitextraslimMap\" src=\"randomDirectory\/images\/fitsuitextraslim\/main_es.jpg\">\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitsuitslim\" track=\"fitsuitslim\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitsuit\" track=\"fitsuit\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>\n<map name=\"fitsuitextraslimMap\" id=\"fitsuitextraslimMap\">\n    <area shape=\"rect\" coords=\"608,136,651,155\" track=\"shop\" alt=\"Bar iii\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DBar%2520III%26SUIT_FIT%3DExtra%2520Slim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"653,140,695,155\" track=\"shop\" alt=\"DKNY\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DDKNY%26SUIT_FIT%3DExtra%2520Slim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"694,138,763,157\" track=\"shop\" alt=\"Hugoby\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DHugo%2520Boss%26SUIT_FIT%3DExtra%2520Slim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"477,156,567,172\" track=\"shop\" alt=\"HugoBoss\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DHugo%2520Boss%26SUIT_FIT%3DExtra%2520Slim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"570,156,672,172\" track=\"shop\" alt=\"Calvin Klein X\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DCalvin%2520Klein%26SUIT_FIT%3DExtra%2520Slim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\" \/>\n    <area shape=\"rect\" coords=\"676,156,780,172\" track=\"shop\" alt=\"Andrew Marc\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DAndrew%2520Marc%26SUIT_FIT%3DExtra%2520Slim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"475,383,698,411\" track=\"shop\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=SUIT_FIT%3DExtra%2520Slim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"474,412,625,449\" role=\"skavaInteropPageTracking\" tracking=\"ca-so-gentlemans.101.fitguide.suits.extraslimfit.viewallfits,ca-so-gentlemans-guide-fitguide-suits-extraslimfit\" href=\"#\/fitsuit\" \/>\n    <area shape=\"rect\" coords=\"474,451,655,485\" track=\"viewallfits\"\n    href=\"#\/fitsize\"\/>\n<\/map>","fitsuitslim":"<div id=\"fitsuitslim\" class=\"finderPage\">\n\n    <img class=\"mainimage\" usemap=\"#fitsuitslimMap\" src=\"randomDirectory\/images\/fitsuitslim\/main_s.jpg\">\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitsuittrim\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitsuitextraslim\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>\n<map name=\"fitsuitslimMap\" id=\"fitsuitslimMap\">\n    <area shape=\"rect\" coords=\"606,141,685,157\" track=\"shop\" alt=\"Alfani Red\"\n    target=\"_blank\" href=\"\thttp:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DAlfani%26SUIT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"684,140,737,158\" track=\"shop\" alt=\"Bar iii\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DBar%2520III%26SUIT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"482,157,577,176\" track=\"shop\" alt=\"Calvin Klein\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DCalvin%20Klein%26SUIT_FIT%3DSlim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"577,158,712,174\" track=\"shop\" alt=\"Perry Ellis\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DPerry%2520Ellis%26SUIT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"711,158,818,174\" track=\"shop\" alt=\"Andrew Fezza\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=BRAND%3DAndrew%20Fezza%26SUIT_FIT%3DSlim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"482,176,593,191\" track=\"shop\" alt=\"Tallia Orange\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid&cm_sp=us_hdr-_-men-shoes-%26-accessories-wallets-%26-accessories-_-17788_Suits-%26-Suit-Separates#!fn=BRAND%3DTallia%26SUIT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"589,175,770,191\" track=\"shop\" alt=\"Kenneth Cole Reaction\"\n          target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-brands-nautica-_-17788_Suits-%26-Suit-Separates#!fn=BRAND%3DKenneth%2520Cole%2520Reaction%26SUIT_FIT%3DSlim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"479,191,716,211\" track=\"shop\" alt=\"Lauren by Ralph Lauren slim fit\"\n          target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-brands-nautica-_-17788_Suits-%26-Suit-Separates#!fn=BRAND%3DLauren%2520Ralph%2520Lauren%26SUIT_FIT%3DSlim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"475,383,698,411\" track=\"shop\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid#!fn=SUIT_FIT%3DSlim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"474,412,625,449\" href=\"#\/fitsuit\" role=\"skavaInteropPageTracking\" tracking=\"ca-so-gentlemans.101.fitguide.suits.slimfit.viewallfits,ca-so-gentlemans-guide-fitguide-suits-slimfit\" \/>\n    <area shape=\"rect\" coords=\"474,451,655,485\" track=\"viewallfits\"\n    href=\"#\/fitsize\"\/>\n<\/map>","fitsuittrim":"<div id=\"fitsuittrim\" class=\"finderPage\">\n\n    <img class=\"mainimage\" usemap=\"#fitsuittrimMap\" src=\"randomDirectory\/images\/fitsuittrim\/main_t.jpg\">\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/fitsuitclassic\" track=\"fitsuitclassic\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/fitsuitslim\" track=\"sitsuitslim\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>\n<map name=\"fitsuittrimMap\" id=\"fitsuittrimMap\">\n    <area shape=\"rect\" coords=\"608,146,783,162\" track=\"shop\" alt=\"Kenneth Cole New York\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid&cm_sp=us_hdr-_-homepage-_-17788_Suits-%26-Suit-Separates#!fn=BRAND%3DKenneth%2520Cole%26SUIT_FIT%3DTrim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"484,163,604,180\" track=\"shop\" alt=\"Donald J. Trump\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid&cm_sp=us_hdr-_-homepage-_-17788_Suits-%26-Suit-Separates#!fn=BRAND%3DDonald%2520J.%2520Trump%26SUIT_FIT%3DTrim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"599,163,714,179\" track=\"shop\" alt=\"Vince Camuto\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-brands-nautica-_-17788_Suits-%26-Suit-Separates#!fn=BRAND%3DVince%2520Camuto%26SUIT_FIT%3DTrim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"724,163,780,179\" track=\"shop\" alt=\"Perry Ellis Modern Fit\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-brands-nautica-_-17788_Suits-%26-Suit-Separates#!fn=BRAND%3DPerry%2520Ellis%26SUIT_FIT%3DTrim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n     <area shape=\"rect\" coords=\"484,180,564,196\" track=\"shop\" alt=\"Perry Ellis Modern Fit\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid&cm_sp=us_hdr-_-men-men%27s-brands-nautica-_-17788_Suits-%26-Suit-Separates#!fn=BRAND%3DPerry%2520Ellis%26SUIT_FIT%3DTrim%2520Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"471,381,665,415\" track=\"shop\"\n    target=\"_blank\" href=\"http:\/\/www1.macys.com\/shop\/mens-clothing\/mens-suits?id=17788&edge=hybrid&cm_sp=us_hdr-_-homepage-_-17788_Suits-%26-Suit-Separates#!fn=SUIT_FIT%3DTrim%20Fit%26sortBy%3DORIGINAL%26productsPerPage%3D40&!qvp=iqvp\"\/>\n    <area shape=\"rect\" coords=\"473,415,624,452\" href=\"#\/fitsuit\" role=\"skavaInteropPageTracking\" tracking=\"ca-so-gentlemans.101.fitguide.suits.trimfit.viewallfits,ca-so-gentlemans-guide-fitguide-suits-trimfit\" \/>\n    <area shape=\"rect\" coords=\"474,451,655,485\" track=\"viewallfits\"\n    href=\"#\/fitsize\"\/>\n<\/map>","home":"<div id=\"home\" class=\"finderPage\">\n\n    <div id=\"photo\">\n      <!--  <img src=\"randomdDirectory\/images\/hero.png\" id=\"hero_home\" border=\"0\"> -->\n        <img src=\"randomDirectory\/images\/home\/main_photo.jpg\" id=\"BW\" border=\"0\">\n\n        <img src=\"randomDirectory\/images\/home\/man1.jpg\" id=\"man1\" class=\"man\" border=\"0\">\n        <img src=\"randomDirectory\/images\/home\/man2.jpg\" id=\"man2\" class=\"man\" border=\"0\">\n        <img src=\"randomDirectory\/images\/home\/man3.jpg\" id=\"man3\" class=\"man\" border=\"0\">\n\n    <\/div>\n\n    <div id=\"Smenu\">\n\n\n        <div class=\"menuBotton\" id=\"quiz\">\n            <a href=\"#\/howtowearit\"><img src=\"randomDirectory\/images\/home\/menu1_btn.png\" track=\"menuhowtowearit\"\/><\/a>\n            <a href=\"#\/suitQuiz\"><img src=\"randomDirectory\/images\/home\/menu2_btn.png\" track=\"menusuitQuiz\"\/><\/a>\n            <a href=\"#\/shirtTieMixer\"><img src=\"randomDirectory\/images\/home\/menu3_btn.png\" track=\"menushirtTieMixer\"\/><\/a>\n            <a href=\"#\/dressing101\"><img src=\"randomDirectory\/images\/home\/menu4_btn.png\" track=\"menudressing101\"\/><\/a>\n        <\/div>\n\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/howtowearit\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"next\" border=\"0\" track=\"next\">\n        <\/a>\n    <\/div>\n    <div id=\"white\"><\/div>\n<\/div>","hotList":"<div id=\"hotList\" class=\"finderPage\">\n\n    <div id=\"menu\">\n        <div class=\"item item1\" config=\"item1\" poolname=\"acc_perfect_match\" alt=\"PERFECT MATCH\"><a href=\"#\"><img src=\"randomDirectory\/images\/hotList\/suit.png\"><p><\/p><\/a><\/div>\n        <div class=\"item item2\" config=\"item2\" poolname=\"acc_shades\" alt=\"SHADES OF COOL\"><a href=\"#\"><img src=\"randomDirectory\/images\/hotList\/glasses.png\"><p><\/p><\/a><\/div>\n        <div class=\"item item3\" config=\"item3\" poolname=\"acc_goingplaces\" alt=\"GOING PLACES\"><a href=\"#\"><img src=\"randomDirectory\/images\/hotList\/bags.png\"><p><\/p><\/a><\/div>\n        <div class=\"item item4\" config=\"item4\" poolname=\"acc_tiedup\" alt=\"ALL TIED UP\"><a href=\"#\"><img src=\"randomDirectory\/images\/hotList\/ties.png\"><p><\/br><\/p><\/a><\/div>\n        <div class=\"item item5\" config=\"item5\" poolname=\"acc_leather\" alt=\"LEATHER OR NOT\"><a href=\"#\"><img src=\"randomDirectory\/images\/hotList\/wallets.png\"><p><\/p><\/a><\/div>\n        <div class=\"item item6\" config=\"item6\" poolname=\"acc_watch_learn\" alt=\"WATCH AND LEARN\"><a href=\"#\"><img src=\"randomDirectory\/images\/hotList\/watches.png\"><p><\/p><\/a><\/div>\n    <\/div>\n\n    <div class=\"shopall\" config=\"shopall\" poolname=\"acc_shopall_0304\" alt=\"SHOP ALL\">\n        <img src=\"randomDirectory\/images\/hotList\/title.png\" alt=\"Hot List\"\/>\n        <a href=\"javascript:void(0);\"><\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/wearshoeslp\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/suitQuiz\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div id=\"poolBackground\">\n        <div id=\"poolBox\">\n            <div id=\"poolTitle\">\n                <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n                <div id=\"h1\">SLIM BOW TIES<\/div>\n            <\/div>\n            <div id=\"classic_poolContainer\"><\/div>\n        <\/div>\n    <\/div>\n\n    <div id=\"closesubNav\"><\/div>\n    <div id=\"subNav\">\n        <div class=\"imgholder\">\n            <img src=\"randomDirectory\/images\/howtowearit\/subNav.png\" alt=\"\" usemap=\"#subnavMap\" border=\"0\">\n        <\/div>\n    <\/div>\n<\/div>","howtowearit":"<div id=\"howtowearit\" class=\"finderPage\">\n\n\n    <div id=\"hero\">\n        <img src=\"randomDirectory\/images\/howtowearit\/htw_bg.jpg\" border=\"0\">\n    <\/div>\n\n    <div class=\"title first\">\n        <img src=\"randomDirectory\/images\/howtowearit\/h1_title.png\" border=\"0\">\n    <\/div>\n    <div class=\"title second\">\n        <img src=\"randomDirectory\/images\/howtowearit\/h2_title.png\" border=\"0\">\n    <\/div>\n\n    <div class=\"linkClick blue\">\n        <a href=\"#\/htwhotspot\/blue\" track=\"blue\">\n            <img src=\"randomDirectory\/images\/howtowearit\/thumb1_blue.png\" border=\"0\">\n            <div class=\"hoverborder\"><\/div>\n        <\/a>\n    <\/div>\n    <div class=\"linkClick gray\">\n        <a href=\"#\/htwhotspot\/gray\"  track=\"gray\">\n          <img src=\"randomDirectory\/images\/howtowearit\/thumb2_gray.png\" border=\"0\">\n            <div class=\"hoverborder\"><\/div>\n        <\/a>\n    <\/div>\n    <div class=\"linkClick rustic\"  track=\"rustic\">\n        <a href=\"#\/htwhotspot\/rustic\">\n          <img src=\"randomDirectory\/images\/howtowearit\/thumb3_rustic.png\" border=\"0\">\n            <div class=\"hoverborder\"><\/div>\n        <\/a>\n    <\/div>\n    <div class=\"linkClick street\"  track=\"street\">\n        <a href=\"#\/htwhotspot\/street\">\n        <img src=\"randomDirectory\/images\/howtowearit\/thumb4_street.png\" border=\"0\">\n            <div class=\"hoverborder\"><\/div>\n        <\/a>\n    <\/div>\n    <div class=\"linkClick tan\"  track=\"tan\">\n        <a href=\"#\/htwproducts\/tan\">\n          <img src=\"randomDirectory\/images\/howtowearit\/thumb5_tan.png\" border=\"0\">\n            <div class=\"hoverborder\"><\/div>\n        <\/a>\n    <\/div>\n\n    <div class=\"nextNavButton\"  track=\"next\">\n        <a href=\"#\/htwhotspot\/blue\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n    <div class=\"prevNavButton\">\n        <a href=\"#\/home\"  track=\"previous\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>","htwhotspot":"<div id=\"htwhotspot\" class=\"finderPage\">\n\n    <div id=\"animewrapper\">\n\n    <div class=\"animebucket blue\">\n        <img class=\"redbackground\" src=\"randomDirectory\/images\/htwhotspot\/blue\/blue_landing_bg.jpg\">\n        <div class=\"childrenabsolute\">\n            <img class=\"h1_title\" anime=\"bottom\" src=\"randomDirectory\/images\/htwhotspot\/blue\/h1_title.png\" track=\"trendsetter\"\/>\n            <img class=\"h2_title pcopy\" src=\"randomDirectory\/images\/htwhotspot\/blue\/h2_title.png\" track=\"fitness\"\/>\n            <img class=\"man_left\" src=\"randomDirectory\/images\/htwhotspot\/blue\/man_left.png\" track=\"fitness\"\/>\n\n        <\/div>\n\n        <div class=\"nextNavButton\"  track=\"next\">\n            <a href=\"#\/htwproducts\/blue\">\n                <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n            <\/a>\n        <\/div>\n        <div class=\"prevNavButton\"  track=\"previous\">\n            <a href=\"#\/howtowearit\">\n                <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n            <\/a>\n        <\/div>\n    <\/div>\n\n\n        <!--GRAY PAGE-->\n\n    <div class=\"animebucket gray\">\n        <img class=\"redbackground\" src=\"randomDirectory\/images\/htwhotspot\/gray\/gray_bg.jpg\">\n        <div class=\"childrenabsolute\">\n\n            <img class=\"h1_title\" anime=\"bottom\" src=\"randomDirectory\/images\/htwhotspot\/gray\/h1_title.png\" track=\"trendsetter\"\/>\n            <img class=\"h2_title pcopy\" src=\"randomDirectory\/images\/htwhotspot\/gray\/h2_title.png\" track=\"fitness\"\/>\n\n\n        <\/div>\n        <div class=\"nextNavButton\"  track=\"next\">\n            <a href=\"#\/htwproducts\/gray\">\n                <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n            <\/a>\n        <\/div>\n        <div class=\"prevNavButton\"  track=\"previous\">\n            <a href=\"#\/htwproducts\/blue\">\n                <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n            <\/a>\n        <\/div>\n    <\/div>\n\n        <!--RUSTIC PAGE-->\n\n    <div class=\"animebucket rustic\">\n        <img class=\"redbackground\" src=\"randomDirectory\/images\/htwhotspot\/rustic\/rustic_landing_bg.jpg\">\n        <div class=\"childrenabsolute\">\n            <img class=\"h1_title\" anime=\"bottom\" src=\"randomDirectory\/images\/htwhotspot\/rustic\/h1_title.png\" track=\"trendsetter\"\/>\n            <img class=\"h2_title pcopy\" src=\"randomDirectory\/images\/htwhotspot\/rustic\/h2_title.png\" track=\"fitness\"\/>\n        <\/div>\n\n        <div class=\"nextNavButton\"  track=\"next\">\n            <a href=\"#\/htwproducts\/rustic\">\n                <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n            <\/a>\n        <\/div>\n        <div class=\"prevNavButton\"  track=\"previous\">\n            <a href=\"#\/htwproducts\/gray\">\n                <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n            <\/a>\n        <\/div>\n    <\/div>\n\n\n        <!--STREET PAGE-->\n\n    <div class=\"animebucket street\">\n        <img class=\"redbackground\" src=\"randomDirectory\/images\/htwhotspot\/street\/street_landing_bg.jpg\">\n        <div class=\"childrenabsolute\">\n            <img class=\"h1_title\" anime=\"bottom\" src=\"randomDirectory\/images\/htwhotspot\/street\/h1_title.png\" track=\"trendsetter\"\/>\n            <img class=\"h2_title pcopy\" src=\"randomDirectory\/images\/htwhotspot\/street\/h2_title.png\" track=\"fitness\"\/>\n        <\/div>\n\n        <div class=\"nextNavButton\"  track=\"next\">\n            <a href=\"#\/htwproducts\/street\">\n                <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n            <\/a>\n        <\/div>\n        <div class=\"prevNavButton\"  track=\"previous\">\n            <a href=\"#\/htwproducts\/rustic\">\n                <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n            <\/a>\n        <\/div>\n    <\/div>\n\n\n\n    <\/div>\n<\/div>","htwproducts":"<div id=\"htwproducts\" class=\"finderPage\">\n\n    <div id=\"animewrapper\">\n\n        <div class=\"animebucket blue\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/htwproducts\/blue\/products_bg.jpg\">\n\n            <div class=\"childrenabsolute\">\n                <img class=\"h2_title\" src=\"randomDirectory\/images\/htwproducts\/blue\/h2_title.png\">\n                <img class=\"blazer\" anime=\"left\" src=\"randomDirectory\/images\/htwproducts\/blue\/blazer.jpg\" track=\"trendsetter\">\n                <img class=\"watch\" anime=\"left\" src=\"randomDirectory\/images\/htwproducts\/blue\/watch.jpg\" track=\"fitness\"\/>\n                <img class=\"vneck\" anime=\"right\" src=\"randomDirectory\/images\/htwproducts\/blue\/vneck.jpg\"  track=\"fitness\"\/>\n                <img class=\"glasses\" anime=\"right\" src=\"randomDirectory\/images\/htwproducts\/blue\/glasses.jpg\" track=\"fitness\">\n                <img class=\"jacket\" anime=\"right\" src=\"randomDirectory\/images\/htwproducts\/blue\/jacket.png\" track=\"fitness\"\/>\n                <img class=\"shirt\" anime=\"left\" src=\"randomDirectory\/images\/htwproducts\/blue\/shirt.png\" track=\"fitness\"\/>\n                <img class=\"shoes\" anime=\"left\" src=\"randomDirectory\/images\/htwproducts\/blue\/shoes.jpg\" track=\"trendsetter\"\/>\n\n                <img class=\"strong_suit ptitle\" src=\"randomDirectory\/images\/htwproducts\/blue\/strong_suit.png\"  track=\"fitness\"\/>\n                <img class=\"how_timely ptitle\" src=\"randomDirectory\/images\/htwproducts\/blue\/how_timely.png\"  track=\"fitness\"\/>\n                <img class=\"get_framed ptitle\" src=\"randomDirectory\/images\/htwproducts\/blue\/get_framed.png\"  track=\"fitness\"\/>\n                <img class=\"ahoy ptitle\" src=\"randomDirectory\/images\/htwproducts\/blue\/ahoy.png\" track=\"fitness\"\/>\n                <img class=\"hit ptitle\" src=\"randomDirectory\/images\/htwproducts\/blue\/hit.png\" track=\"fitness\"\/>\n                <img class=\"check_mate ptitle\" src=\"randomDirectory\/images\/htwproducts\/blue\/check_mate.png\" track=\"fitness\"\/>\n                <img class=\"walk ptitle\" src=\"randomDirectory\/images\/htwproducts\/blue\/walk.png\" track=\"trendsetter\"\/>\n\n           <\/div>\n\n            <div class=\"nextNavButton\"  track=\"next\">\n                <a href=\"#\/htwhotspot\/gray\">\n                    <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n                <\/a>\n            <\/div>\n            <div class=\"prevNavButton\"  track=\"previous\">\n                <a href=\"#\/htwhotspot\/blue\">\n                    <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n                <\/a>\n            <\/div>\n        <\/div>\n\n        <div class=\"animebucket gray\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/htwproducts\/gray\/gray_prod_bg.jpg\">\n            <div class=\"childrenabsolute\">\n                <img class=\"h2_title\" src=\"randomDirectory\/images\/htwproducts\/gray\/h2_title.png\">\n                <img class=\"jacket\" anime=\"left\" src=\"randomDirectory\/images\/htwproducts\/gray\/jacket.jpg\" track=\"trendsetter\"\/>\n                <img class=\"belt\" anime=\"left\" src=\"randomDirectory\/images\/htwproducts\/gray\/belt.jpg\" track=\"trendsetter\"\/>\n                <img class=\"shirts\" anime=\"right\" src=\"randomDirectory\/images\/htwproducts\/gray\/shirts.jpg\"  track=\"fitness\"\/>\n                <img class=\"cufflinks\" anime=\"left\" src=\"randomDirectory\/images\/htwproducts\/gray\/cufflinks.jpg\" track=\"trendsetter\"\/>\n                <img class=\"sweater\" anime=\"top\" src=\"randomDirectory\/images\/htwproducts\/gray\/sweater.jpg\" track=\"trendsetter\"\/>\n                <img class=\"bag\" anime=\"right\" src=\"randomDirectory\/images\/htwproducts\/gray\/bag.jpg\"  track=\"fitness\"\/>\n\n                <img class=\"mad ptitle\" src=\"randomDirectory\/images\/htwproducts\/gray\/mad.png\" track=\"trendsetter\"\/>\n                <img class=\"basic ptitle\" src=\"randomDirectory\/images\/htwproducts\/gray\/basic.png\" track=\"trendsetter\"\/>\n                <img class=\"buttoned ptitle\" src=\"randomDirectory\/images\/htwproducts\/gray\/buttoned.png\" track=\"trendsetter\"\/>\n                <img class=\"mixed ptitle\" src=\"randomDirectory\/images\/htwproducts\/gray\/mixed.png\" track=\"trendsetter\"\/>\n                <img class=\"knit ptitle\" src=\"randomDirectory\/images\/htwproducts\/gray\/knit.png\" track=\"trendsetter\"\/>\n                <img class=\"carry ptitle\"  src=\"randomDirectory\/images\/htwproducts\/gray\/carry.png\" track=\"trendsetter\"\/>\n\n\n\n            <\/div>\n\n\n            <div class=\"nextNavButton\"  track=\"next\">\n                <a href=\"#\/htwhotspot\/rustic\">\n                    <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"\" border=\"0\">\n                <\/a>\n            <\/div>\n            <div class=\"prevNavButton\"  track=\"previous\">\n                <a href=\"#\/htwhotspot\/gray\">\n                    <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n                <\/a>\n            <\/div>\n        <\/div>\n\n        <div class=\"animebucket rustic\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/htwproducts\/rustic\/rustic_prod_bg.jpg\">\n            <div class=\"childrenabsolute\">\n                <img class=\"h2_title\" src=\"randomDirectory\/images\/htwproducts\/rustic\/h2_title.png\">\n                <img class=\"jacket\" anime=\"left\" src=\"randomDirectory\/images\/htwproducts\/rustic\/jacket.jpg\" track=\"trendsetter\"\/>\n                <img class=\"pants\" anime=\"top\" src=\"randomDirectory\/images\/htwproducts\/rustic\/pants.jpg\" track=\"trendsetter\"\/>\n                <img class=\"briefcase\" anime=\"right\"src=\"randomDirectory\/images\/htwproducts\/rustic\/briefcase.jpg\" track=\"trendsetter\"\/>\n                <img class=\"shoe\" anime=\"bottom\" src=\"randomDirectory\/images\/htwproducts\/rustic\/shoe.png\" track=\"trendsetter\"\/>\n                <img class=\"shirt\" anime=\"right\" src=\"randomDirectory\/images\/htwproducts\/rustic\/shirt.jpg\" track=\"trendsetter\"\/>\n\n                <img class=\"cold ptitle\" src=\"randomDirectory\/images\/htwproducts\/rustic\/cold.png\" track=\"trendsetter\"\/>\n                <img class=\"basic ptitle\" src=\"randomDirectory\/images\/htwproducts\/rustic\/basic.png\" track=\"trendsetter\"\/>\n                <img class=\"rad ptitle\" src=\"randomDirectory\/images\/htwproducts\/rustic\/rad.png\" track=\"trendsetter\"\/>\n                <img class=\"loyal ptitle\" src=\"randomDirectory\/images\/htwproducts\/rustic\/loyal.png\" track=\"trendsetter\"\/>\n                <img class=\"mighty ptitle\" src=\"randomDirectory\/images\/htwproducts\/rustic\/mighty.png\" track=\"trendsetter\"\/>\n\n            <\/div>\n\n            <div class=\"nextNavButton\"  track=\"next\">\n                <a href=\"#\/htwhotspot\/street\">\n                    <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n                <\/a>\n            <\/div>\n            <div class=\"prevNavButton\"  track=\"previous\">\n                <a href=\"#\/htwhotspot\/rustic\">\n                    <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n                <\/a>\n            <\/div>\n        <\/div>\n\n        <div class=\"animebucket street\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/htwproducts\/street\/street_prod_bg.jpg\">\n            <div class=\"childrenabsolute\">\n                <img class=\"h2_title\" src=\"randomDirectory\/images\/htwproducts\/street\/h2_title.png\">\n                <img class=\"pants\" anime=\"left\" src=\"randomDirectory\/images\/htwproducts\/street\/pants.jpg\" track=\"trendsetter\"\/>\n                <img class=\"sweatjacket\" anime=\"left\" src=\"randomDirectory\/images\/htwproducts\/street\/sweatjacket.png\"  track=\"fitness\"\/>\n                <img class=\"sweatpants\" anime=\"right\" src=\"randomDirectory\/images\/htwproducts\/street\/sweatpants.png\" track=\"trendsetter\"\/>\n                <img class=\"caps\" anime=\"top\" src=\"randomDirectory\/images\/htwproducts\/street\/caps.png\"  track=\"fitness\"\/>\n                <img class=\"backpack\" anime=\"left\" src=\"randomDirectory\/images\/htwproducts\/street\/backpack.jpg\"  track=\"fitness\"\/>\n\n                <img class=\"line ptitle\" src=\"randomDirectory\/images\/htwproducts\/street\/line.png\" track=\"trendsetter\"\/>\n                <img class=\"jacked ptitle\" src=\"randomDirectory\/images\/htwproducts\/street\/jacked.png\" track=\"trendsetter\"\/>\n                <img class=\"jonesing ptitle\" src=\"randomDirectory\/images\/htwproducts\/street\/jonesing.png\" track=\"trendsetter\"\/>\n                <img class=\"capped ptitle\" src=\"randomDirectory\/images\/htwproducts\/street\/capped.png\" track=\"trendsetter\"\/>\n                <img class=\"bag ptitle\" src=\"randomDirectory\/images\/htwproducts\/street\/bag.png\" track=\"trendsetter\"\/>\n\n            <\/div>\n\n            <div class=\"nextNavButton\" track=\"next\">\n                <a href=\"#\/htwproducts\/tan\">\n                    <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n                <\/a>\n            <\/div>\n            <div class=\"prevNavButton\" track=\"previous\">\n                <a href=\"#\/htwhotspot\/street\">\n                    <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n                <\/a>\n            <\/div>\n        <\/div>\n\n\n        <div class=\"animebucket tan\">\n            <img class=\"redbackground\" src=\"randomDirectory\/images\/htwproducts\/tan\/tan_prod_bg.jpg\">\n            <div class=\"childrenabsolute\">\n                <img class=\"h2_title\" src=\"randomDirectory\/images\/htwproducts\/tan\/h2_title.png\">\n                <img class=\"belt\" anime=\"right\" src=\"randomDirectory\/images\/htwproducts\/tan\/belt.jpg\" track=\"trendsetter\"\/>\n                <img class=\"shoes\" anime=\"right\" src=\"randomDirectory\/images\/htwproducts\/tan\/shoes.jpg\" track=\"trendsetter\"\/>\n                <img class=\"specs\" anime=\"top\" src=\"randomDirectory\/images\/htwproducts\/tan\/specs.jpg\"  track=\"fitness\"\/>\n                <img class=\"saddle_bag\" anime=\"left\" src=\"randomDirectory\/images\/htwproducts\/tan\/saddle_bag.png\"  track=\"fitness\"\/>\n                <img class=\"bottle\" anime=\"left\" src=\"randomDirectory\/images\/htwproducts\/tan\/bottle.jpg\"  track=\"fitness\"\/>\n\n\n                <img class=\"saddle ptitle\" src=\"randomDirectory\/images\/htwproducts\/tan\/saddle.png\" track=\"fitness\"\/>\n                <img class=\"terra ptitle\" src=\"randomDirectory\/images\/htwproducts\/tan\/terra.png\" track=\"fitness\"\/>\n                <img class=\"brass ptitle\" src=\"randomDirectory\/images\/htwproducts\/tan\/brass.png\" track=\"fitness\"\/>\n                <img class=\"scent ptitle\" src=\"randomDirectory\/images\/htwproducts\/tan\/scent.png\" track=\"fitness\"\/>\n                <img class=\"good ptitle\" src=\"randomDirectory\/images\/htwproducts\/tan\/good.png\" track=\"fitness\"\/>\n\n            <\/div>\n\n            <div class=\"nextNavButton\" track=\"next\">\n                <a href=\"#\/suitQuiz\">\n                    <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n                <\/a>\n            <\/div>\n            <div class=\"prevNavButton\" track=\"previous\">\n                <a href=\"#\/htwproducts\/street\">\n                    <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n                <\/a>\n            <\/div>\n        <\/div>\n\n\n    <\/div>\n\n<\/div>","shirtTieMixer":"<div id=\"shirtTieMixer\" class=\"finderPage\">\n\n\n    <!--<div id=\"titles\">\n        <img src=\"randomDirectory\/images\/shirtTieMixer\/h1_title.png\" id=\"title\">\n        <img src=\"randomDirectory\/images\/shirtTieMixer\/h2_title.png\" id=\"sub\">\n    <\/div>-->\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/dressing101\" track=\"\"next\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/suitQuiz\" track=\"previous\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"previous\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>","structure":"<div id=\"navContainer\">\n<!--\n    <div id=\"shipping\"><a href=\"http:\/\/www.macys.com\/m\/campaign\/free-shipping\/free-shipping-everyday\" target=\"_blank\"><img src=\"randomDirectory\/images\/nav\/shipping2.png\" border=\"0\" alt=\"FREE SHIPPING EVERY DAY detailes\"><\/a><\/div><br>\n-->\n    <!--<div id=\"navBack\"><\/div>-->\n    <ul id=\"navBar\">\n        <li id=\"home\"><a href=\"#\/home\" track=\"home\"><\/a><\/li>\n        <li id=\"howtowearit\"><a href=\"#\/howtowearit\" track=\"howtowearit\"><\/a>\n            <ul id=\"subnav\">\n                <li class=\"blue\"><a href=\"#\/htwhotspot\/blue\" track=\"blue\">link<\/a><\/li>\n                <li class=\"gray\"><a href=\"#\/htwhotspot\/gray\" track=\"fitshirt\">link<\/a><\/li>\n                <li class=\"rustic\"><a href=\"#\/htwhotspot\/rustic\" track=\"fitjeans\">link<\/a><\/li>\n                <li class=\"street\"><a href=\"#\/htwhotspot\/street\" track=\"fitsize\">link<\/a><\/li>\n                <li class=\"tan\"><a href=\"#\/htwproducts\/tan\" track=\"fitknots\">link<\/a><\/li>\n                <li class=\"arrowdown\"><\/li>\n            <\/ul>\n        <\/li>\n        <li id=\"suitQuiz\"><a href=\"#\/suitQuiz\" track=\"suitQuiz\"><\/a><\/li>\n        <li id=\"shirtTieMixer\"><a href=\"#\/shirtTieMixer\" track=\"shirtTieMixer\"><\/a><\/li>\n        <li id=\"dressing101\"><a href=\"#\/dressing101\" track=\"dressing101\"><\/a>\n            <ul id=\"subnav\">\n                <li class=\"fitsuit\"><a href=\"#\/fitsuit\" track=\"fitsuit\">link<\/a><\/li>\n                <li class=\"fitshirt\"><a href=\"#\/fitshirt\" track=\"fitshirt\">link<\/a><\/li>\n                <li class=\"fitjeans\"><a href=\"#\/fitjeans\" track=\"fitjeans\">link<\/a><\/li>\n                <li class=\"fitsize\"><a href=\"#\/fitsize\" track=\"fitsize\">link<\/a><\/li>\n                <li class=\"fitknots\"><a href=\"#\/fitknots\" track=\"fitknots\">link<\/a><\/li>\n                <li class=\"arrowdown\"><\/li>\n            <\/ul>\n        <\/li>\n    <\/ul>\n\n<\/div>\n\n<div id=\"bodyContainer\">\n    <div class=\"loading\" style=\"display: none;\">\n        <div id=\"overlay\"><\/div>\n        <div id=\"loadingMessage\"><img src=\"randomDirectory\/images\/loading_anim.gif\" border=\"0\"><\/div>\n    <\/div>\n    <div id=\"pageContainer\">\n\n    <\/div>\n\n<\/div>\n<div id=\"footerContainer\">\n    <div id=\"footer\">\n        <a class=\"bookadate\" role=\"skavaInteropBookaDate\" config=\"site\" href=\"http:\/\/www.macys.com\/store\/service\/mba.jsp\" target=\"_blank\" track=\"bookadate\"><\/a>\n        <div class=\"facebook\" role=\"skavaInteropShareFacebook\" config=\"site\"><\/div>\n        <div class=\"twitter\" role=\"skavaInteropShareTwitter\" config=\"site\"><\/div>\n    <\/div>\n    <div id=\"products\">\n\n    <\/div>\n<\/div>\n\n<script id=\"productListing\" type=\"text\/html\">\n    <div class=\"productListing {{if hasPromotions}}hasPromotions{{\/if}} {{if finder.skava.beenVotedOn(pfeed_id)}}voted{{\/if}}\"\n         brand=\"${pfeed_brand}\" productId=\"${pfeed_id}\" entryId=\"${entryid}\">\n        <div class=\"quickview\">\n            <a href=\"javascript:void(0)\" entryId=\"${entryid}\" productId=\"${pfeed_id}\" role=\"skavaInteropQuickView\">Quick\n                View<\/a>\n        <\/div>\n        <div class=\"image\">\n            <a href=\"${pfeed_url}\" target=\"_blank\"><img src=\"${image_fullImage}\" class=\"productImage\" border=\"0\"><\/a>\n        <\/div>\n\n        <div class=\"label\">\n            <a href=\"${pfeed_url}\" target=\"_blank\">\n                ${label}\n            <\/a>\n        <\/div>\n\n        <div class=\"price1\">${pfeed_price1}<\/div>\n        {{if pfeed_price2 != \"\"}}\n        <div class=\"price2\">${pfeed_price2}<\/div>\n        {{\/if}}\n        {{if pfeed_price3 != \"\"}}\n        <div class=\"price3\">${pfeed_price3}<\/div>\n        {{\/if}}\n\n        <div class=\"votingRow\" role=\"skavaInteropVote\">\n            <img src=\"randomDirectory\/images\/heart.png\" border=\"0\"> <span class=\"lovethis\">\n\t\t\t\t<span class=\"button\">love it <img src=\"randomDirectory\/images\/rightarrow.gif\" border=\"0\"><\/span>\n\t\t\t\t<span class=\"voteCount\">\n\t\t\t\t\t{{if votes == \"1\"}}\n\t\t\t\t\t\t1 LOVES THIS\n\t\t\t\t\t{{\/if}}\n\t\t\t\t\t{{if votes > 1}}\n\t\t\t\t\t\t${votes} LOVE THIS\n\t\t\t\t\t{{\/if}}\n\n\t\t\t\t<\/span>\n\t\t\t<\/span>\n        <\/div>\n\n        <div class=\"giftListRow\" role=\"skavaInteropWishListAdder\">\n            <img src=\"randomDirectory\/images\/pool\/addtogiftlist.png\" border=\"0\" class='addToGiftList'\n                 entryId=\"${entryid}\" productId=\"${pfeed_id}\">\n        <\/div>\n        <div class=\"giftListRow2\">\n            <img src=\"randomDirectory\/images\/pool\/checkmark.png\" border=\"0\" align=\"absmiddle\"> on my gift list\n        <\/div>\n\n        <img src='randomDirectory\/images\/pool\/addToBridalParty.png' border='0' class=\"addToBridalParty\"\n             role=\"skavaInteropBridalAdder\">\n\n        <div class=\"moreInfo\">\n            <div class=\"colorSwatches\">\n                {{each swatches}}\n                <img src=\"${this.swatchImage.replace('wid=57', 'wid=20')}\"\n                     productImage=\"${this.productImage.replace('%width%', '137')}\" class=\"swatch\">\n                {{\/each}}\n            <\/div>\n\n\n        <\/div>\n        <div style=\"clear: both;\"><\/div>\n    <\/div>\n<\/script>\n\n<script id=\"horizontalproductListing\" type=\"text\/html\">\n    <div class=\"productListing {{if hasPromotions}}hasPromotions{{\/if}} {{if finder.skava.beenVotedOn(pfeed_id)}}voted{{\/if}}\"\n         brand=\"${pfeed_brand}\" productId=\"${pfeed_id}\" entryId=\"${entryid}\">\n        <div class=\"quickview\">\n            <a href=\"javascript:void(0)\" entryId=\"${entryid}\" productId=\"${pfeed_id}\" role=\"skavaInteropQuickView\">Quick\n                View<\/a>\n        <\/div>\n        <div class=\"image\">\n            <a href=\"${pfeed_url}\" target=\"_blank\"><img src=\"${image_fullImage}\" class=\"productImage\" border=\"0\"\/><\/a>\n        <\/div>\n\n        <div class=\"textWrapper\">\n\n            <a href=\"${pfeed_url}\" target=\"_blank\">\n                ${label}\n            <\/a>\n\n\n            <div class=\"price1\">${pfeed_price1}<\/div>\n            {{if pfeed_price2 != \"\"}}\n            <div class=\"price2\">${pfeed_price2}<\/div>\n            {{\/if}}\n            {{if pfeed_price3 != \"\"}}\n            <div class=\"price3\">${pfeed_price3}<\/div>\n            {{\/if}}\n        <\/div>\n        <div class=\"label\">\n\n        <\/div>\n        <div style=\"clear: both;\"><\/div>\n    <\/div>\n<\/script>\n\n<script id=\"mixerPoolShirt\" type=\"text\/html\">\n    <div class=\"productListing \" brand=\"${pfeed_brand}\" productId=\"${pfeed_id}\" entryId=\"${entryid}\">\n        <div class=\"image\">\n            <img src=\"${image_fullImage}\" class=\"productImage shirt\" id=\"${pfeed_id}\" border=\"0\">\n        <\/div>\n    <\/div>\n<\/script>\n\n<script id=\"mixerPoolTie\" type=\"text\/html\">\n    <div class=\"productListing \" brand=\"${pfeed_brand}\" productId=\"${pfeed_id}\" entryId=\"${entryid}\">\n        <div class=\"image\">\n            <img src=\"${image_fullImage}\" class=\"productImage ${pfeed_class}\" id=\"${pfeed_id}\" border=\"0\">\n        <\/div>\n    <\/div>\n<\/script>\n\n<script id=\"poolFilters\" type=\"text\/html\">\n    <div class=\"filter\" data-pool=\"${pool}\">${label}<\/div>\n<\/script>\n","suitQuiz":"<div id=\"suitQuiz\" class=\"finderPage\">\n    <div id=\"models\">\n        <div class=\"model left\"><img src=\"randomDirectory\/images\/suitQuiz\/suits_landing.jpg\" border=\"0\"><\/div>\n        <!--<div class=\"model right\"><img src=\"randomDirectory\/images\/suitQuiz\/modelRight.jpg\" border=\"0\"><\/div>-->\n    <\/div>\n    <div id=\"quiz\">\n        <div class=\"item\" id=\"header\">\n            <div class=\"title\"><img src=\"randomDirectory\/images\/suitQuiz\/h1_title.png\" border=\"0\"><\/div>\n            <!--<div class=\"checkall\"><img src=\"randomDirectory\/images\/suitQuiz\/checkall.jpg\" width=\"374\" height=\"18\" border=\"0\"><\/div>-->\n        <\/div>\n        <div class=\"section\" id=\"top\">\n            <div id=\"answers_0\" class=\"item headline\"><img src=\"randomDirectory\/images\/suitQuiz\/fit_h2.png\" align=\"\" border=\"0\"><\/div>\n            <div class=\"menuBotton item\" id=\"regular\">\n                <input  type=\"radio\" class=\"checkbox styled\" Name=\"answer0\" Value=\"qs00\" \/>\n                <label>EXTRA SLIM <span class=\"smaller\">(Super-slim and narrow sleeves)<\/span><\/label>\n            <\/div>\n            <div class=\"menuBotton item\" id=\"athletic\">\n                <input type=\"radio\" Name=\"answer0\" Value=\"qs01\" \/>\n                <label>SLIM <span class=\"smaller\">(Narrow in the shoulders, waist and legs)<\/span><\/label>\n            <\/div>\n            <div class=\"menuBotton item\" id=\"slim\">\n                <input type=\"radio\" Name=\"answer0\" Value=\"qs02\" \/>\n                <label>TRIM <span class=\"smaller\">(Structured shoulders and slimmer lapel)<\/span><\/label>\n            <\/div>\n            <div class=\"menuBotton item\" id=\"classic\">\n                <input type=\"radio\" Name=\"answer0\" Value=\"qs03\" \/>\n                <label>CLASSIC <span class=\"smaller\">(Built with standard shoulder and waist proportions)<\/span><\/label>\n            <\/div>\n            <div class=\"menuBotton item\" id=\"bigandtall\">\n                <input type=\"radio\" Name=\"answer0\" Value=\"qs04\" \/>\n                <label>BIG & TALL <span class=\"smaller\">(A build with broad shoulders or long legs)<\/span><\/label>\n            <\/div>\n        <\/div>\n\n        <div class=\"section\" id=\"middle\">\n            <div id=\"sub2title\" class=\"item headline\"><img src=\"randomDirectory\/images\/suitQuiz\/style_h2.png\" align=\"\" border=\"0\"><\/div>\n            <div class=\"menuBotton pop answer1 item\" id=\"qs10\">\n                <input type=\"radio\" Name=\"answer1\" Value=\"qs10\" >\n                <label>TRADITIONAL<\/label>\n            <\/div>\n            <div class=\"menuBotton pop answer1 item\" id=\"qs11\">\n                <input type=\"radio\" Name=\"answer1\" Value=\"qs11\">\n                <label>MODERN<\/label>\n            <\/div>\n        <\/div>\n        <div class=\"section\" id=\"bottom\">\n            <div id=\"sub3title\" class=\"item headline\"><img src=\"randomDirectory\/images\/suitQuiz\/for_h2.png\" align=\"\" border=\"0\"><\/div>\n            <div class=\"menuBotton pop answer2 item\" id=\"qs20\">\n                <input type=\"radio\" Name=\"answer2\" Value=\"qs20\" >\n                <label>WORK<\/label>\n            <\/div>\n            <div class=\"menuBotton pop answer2 item\" id=\"qs21\">\n                <input type=\"radio\" Name=\"answer2\" Value=\"qs21\">\n                <label>SOCIAL EVENT<\/label>\n            <\/div>\n            <div class=\"menuBotton pop answer2 item\" id=\"qs22\">\n                <input type=\"radio\" Name=\"answer2\" Value=\"qs22\">\n                <label>FORMAL EVENT<\/label>\n            <\/div>\n        <\/div>\n        <div id=\"submit\" class=\"item\">FIND YOUR SUIT<img src=\"randomDirectory\/images\/suitQuiz\/arrow.png\" class=\"padding\" \/><\/div>\n    <\/div>\n    <div id=\"popImage\">\n        <img src=\"randomDirectory\/images\/suitQuiz\/bubble-formalEventClassic.png\" id=\"q22q10\" border=\"0\">\n        <img src=\"randomDirectory\/images\/suitQuiz\/bubble-modern.png\" id=\"~q11\" border=\"0\">\n        <img src=\"randomDirectory\/images\/suitQuiz\/bubble-socialEventClassic.png\" id=\"q21q10\" border=\"0\">\n        <img src=\"randomDirectory\/images\/suitQuiz\/bubble-socialEventModern.png\" id=\"q21q11\" border=\"0\">\n        <img src=\"randomDirectory\/images\/suitQuiz\/bubble-workForClassic.png\" id=\"q20q10\" border=\"0\">\n        <img src=\"randomDirectory\/images\/suitQuiz\/bubble-workForModern.png\" id=\"q20q11\" border=\"0\">\n        <img src=\"randomDirectory\/images\/suitQuiz\/bubble-formalEventModern.png\" id=\"q22q11\" border=\"0\">\n    <\/div>\n    <div id=\"copy\">\n        <div id=\"menu\">\n\n            <br>\n\n        <\/div>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/htwproducts\/tan\">\n            <img src=\"randomDirectory\/images\/prev_blk.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/shirtTieMixer\" track=\"suitQuizPool\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"previous\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>","suitQuizPool":"<div id=\"suitQuizPool\" class=\"finderPage\">\n\n\n    <div id=\"sidebarImage\">\n        <img src=\"randomDirectory\/images\/suitQuizPool\/photo_left.jpg\" id=\"slide1\" >\n    <\/div>\n    <!-- 557x48 -->\n    <div id=\"headerImage\">\n    <\/div>\n\n    <!-- quiz again button -->\n    <a href=\"#\/suitQuiz\" class=\"quizAgain\" role=\"skavaInteropPageTracking\" track=\"ca-so-gentlemans.quiz.findsuit.takequizagain,ca-so-gentl emans-guide-quiz\"><img src=\"randomDirectory\/images\/suitQuizPool\/again_btn.png\" \/><\/a>\n\n    <div id=\"quiz_poolBackground\">\n    <\/div>\n    <!--\n     <div id=\"facetsContainerX\">\n     <\/div>\n     -->\n    <div id=\"quiz_poolContainer\">\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/shirtTieMixer\" track=\"shirtTieMixer\">\n            <img src=\"randomDirectory\/images\/next_blk.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n\n<\/div>","suitsLauren":"<div id=\"suitsLauren\" class=\"finderPage\">\n\n       <img src=\"randomDirectory\/images\/suitsLauren\/main.jpg\" id=\"BW\" border=\"0\">\n    <div id=\"shopall\"><\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/suitsCK\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/home\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n\n    <div id=\"closesubNav\"><\/div>\n\n<\/div>\n\n","suitsMK":"<div id=\"suitsMK\" class=\"finderPage\">\n\n       <img src=\"randomDirectory\/images\/suitsMK\/main.jpg\" id=\"BW\" border=\"0\">\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/boldbuds\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/suitsCK\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n\n    <div id=\"closesubNav\"><\/div>\n<\/div>\n\n","wearcasualshirt":"<div id=\"wearcasualshirt\" class=\"finderPage\" xmlns=\"http:\/\/www.w3.org\/1999\/html\">\n    <div>\n        <div id=\"panelHolder\">\n            <div class=\"panel p1\">\n                <img src=\"randomDirectory\/images\/wearcasualshirt\/1.png\">\n            <\/div>\n            <div class=\"panel p2\">\n                <img src=\"randomDirectory\/images\/wearcasualshirt\/2.png\">\n            <\/div>\n            <div class=\"panel p3\">\n                <img src=\"randomDirectory\/images\/wearcasualshirt\/3.jpg\">\n            <\/div>\n        <\/div>\n    <\/div>\n    <div id=\"title\">\n        <img src=\"randomDirectory\/images\/wearcasualshirt\/title.png\" alt=\"\">\n        <div id=\"shopall\"><\/div>\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/wearpants\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/wearcasualshirtlp\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n\n    <div id=\"closesubNav\"><\/div>\n    <!--<div id=\"subNav\">\n        <div class=\"imgholder\">\n            <img src=\"randomDirectory\/images\/wearcasualshirt\/subnav.png\" alt=\"\" usemap=\"#subnavMap\" border=\"0\">\n        <\/div>\n    <\/div>-->\n<\/div>","wearcasualshirtlp":"<div id=\"wearcasualshirtlp\" class=\"finderPage\">\n\n\n\n    <div>\n        <div id=\"panelHolder\">\n            <div class=\"panel p2\">\n                <img src=\"randomDirectory\/images\/wearcasualshirtlp\/2.png\">\n            <\/div>\n            <div class=\"panel p3\">\n                <img src=\"randomDirectory\/images\/wearcasualshirtlp\/3.jpg\">\n            <\/div>\n            <!--<div class=\"panel p4\">\n                <img src=\"randomDirectory\/images\/wearcasualshirtlp\/4.jpg\">\n            <\/div>-->\n        <\/div>\n    <\/div>\n    <div id=\"title\">\n        <img src=\"randomDirectory\/images\/wearcasualshirtlp\/title.png\" alt=\"\">\n        <div id=\"shopall\"><\/div>\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/wearcasualshirt\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/wearsuit\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n\n    <div id=\"closesubNav\"><\/div>\n    <!--<div id=\"subNav\">\n        <div class=\"imgholder\">\n            <img src=\"randomDirectory\/images\/wearcasualshirtlp\/subnav.png\" alt=\"\" usemap=\"#subnavMap\" border=\"0\">\n        <\/div>\n    <\/div>-->\n\n\n<\/div>","weargear":"<div id=\"weargear\" class=\"finderPage\">\n    <div>\n    <div id=\"panelHolder\">\n        <div id=\"1\" class=\"panel p1\">\n            <img src=\"randomDirectory\/images\/weargear\/1.png\">\n        <\/div>\n        <div id=\"2\" class=\"panel p2\">\n            <img src=\"randomDirectory\/images\/weargear\/2.png\">\n        <\/div>\n        <div id=\"4\" class=\"panel p4\">\n            <img src=\"randomDirectory\/images\/weargear\/4.jpg\">\n        <\/div>\n    <\/div><\/div>\n    <div id=\"title\">\n        <img src=\"randomDirectory\/images\/weargear\/title.png\" alt=\"\">\n        <div id=\"shopall\"><\/div>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/wearpants\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"prev.\" border=\"0\" >\n        <\/a>\n    <\/div>\n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/wearpoloslp\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"next\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n    <div id=\"poolBackground\" class=\"poolBack\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\" border=\"0\">\n    <\/div>\n\n    <div id=\"closesubNav\"><\/div>\n    <div id=\"subNav\">\n        <div class=\"imgholder\">\n            <img src=\"randomDirectory\/images\/weargear\/subnav.png\" alt=\"\" usemap=\"#subnavMap\" border=\"0\">\n        <\/div>\n    <\/div>\n<\/div>","wearjacket":"<div id=\"wearjacket\" class=\"finderPage\">\n\n\n    <div>\n        <div id=\"panelHolder\">\n            <div class=\"panel p1\">\n                <img src=\"randomDirectory\/images\/wearjacket\/1.png\">\n            <\/div>\n            <div class=\"panel p2\">\n                <img src=\"randomDirectory\/images\/wearjacket\/2.png\">\n            <\/div>\n            <div class=\"panel p3\">\n                <img src=\"randomDirectory\/images\/wearjacket\/3.jpg\">\n            <\/div>\n            <!--<div class=\"panel p4\">\n                <img src=\"randomDirectory\/images\/wearjacket\/4.jpg\">\n            <\/div>-->\n        <\/div>\n    <\/div>\n    <div id=\"title\">\n        <img src=\"randomDirectory\/images\/wearjacket\/title.png\" alt=\"\">\n        <div id=\"shopall\"><\/div>\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/weargear\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/wearjacketlp\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n\n    <div id=\"closesubNav\"><\/div>\n    <div id=\"subNav\">\n        <div class=\"imgholder\">\n            <img src=\"randomDirectory\/images\/wearjacket\/subnav.png\" alt=\"\" usemap=\"#subnavMap\" border=\"0\">\n        <\/div>\n    <\/div>\n\n\n<\/div>","wearjacketlp":"<div id=\"wearjacketlp\" class=\"finderPage\">\n\n\n    <div>\n        <div id=\"panelHolder\">\n            <div class=\"panel p1\">\n                <img src=\"randomDirectory\/images\/wearjacketlp\/1.png\">\n            <\/div>\n            <div class=\"panel p2\">\n                <img src=\"randomDirectory\/images\/wearjacketlp\/2.png\">\n            <\/div>\n            <div class=\"panel p3\">\n                <img src=\"randomDirectory\/images\/wearjacketlp\/3.jpg\">\n            <\/div>\n            <!--<div class=\"panel p4\">\n                <img src=\"randomDirectory\/images\/wearjacketlp\/4.jpg\">\n            <\/div>-->\n        <\/div>\n    <\/div>\n    <div id=\"title\">\n        <img src=\"randomDirectory\/images\/wearjacketlp\/title.png\" alt=\"\">\n        <div id=\"shopall\"><\/div>\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/wearjacket\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/wearpants\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n\n    <div id=\"closesubNav\"><\/div>\n    <div id=\"subNav\">\n        <div class=\"imgholder\">\n            <img src=\"randomDirectory\/images\/wearjacketlp\/subnav.png\" alt=\"\" usemap=\"#subnavMap\" border=\"0\">\n        <\/div>\n    <\/div>\n\n\n<\/div>","wearpants":"<div id=\"wearpants\" class=\"finderPage\">\n<div>\n    <div id=\"panelHolder\">\n        <div id=\"1\" class=\"panel p1\">\n            <img src=\"randomDirectory\/images\/wearpants\/1.png\">\n        <\/div>\n        <div id=\"2\" class=\"panel p2\">\n            <img src=\"randomDirectory\/images\/wearpants\/2.png\">\n        <\/div>\n        <div id=\"3\" class=\"panel p3\">\n            <img src=\"randomDirectory\/images\/wearpants\/3.png\">\n        <\/div>\n        <div id=\"4\" class=\"panel p4\">\n            <img src=\"randomDirectory\/images\/wearpants\/4.png\">\n        <\/div>\n        <div id=\"5\" class=\"panel p5\">\n            <img src=\"randomDirectory\/images\/wearpants\/5.jpg\">\n        <\/div>\n    <\/div><\/div>\n    <div id=\"title\">\n        <img src=\"randomDirectory\/images\/wearpants\/title.png\" alt=\"\">\n        <div id=\"shopall\"><\/div>\n    <\/div>\n\n        <div class=\"prevNavButton\">\n            <a href=\"#\/wearcasualshirt\">\n                <img src=\"randomDirectory\/images\/prev.png\" alt=\"prev.\" border=\"0\">\n            <\/a>\n        <\/div>\n\n\n        <div class=\"nextNavButton\">\n            <a href=\"#\/weargear\">\n                <img src=\"randomDirectory\/images\/next-button.png\" alt=\"next\" border=\"0\">\n            <\/a>\n        <\/div>\n\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n\n    <div id=\"closesubNav\"><\/div>\n    <div id=\"subNav\">\n        <div class=\"imgholder\">\n            <img src=\"randomDirectory\/images\/wearpants\/subnav.png\" alt=\"\" usemap=\"#subnavMap\" border=\"0\">\n        <\/div>\n    <\/div>\n<\/div>","wearpolos":"<div id=\"wearpolos\" class=\"finderPage\">\n\n\n    <div>\n        <div id=\"panelHolder\">\n            <div class=\"panel p1\">\n                <img src=\"randomDirectory\/images\/wearpolos\/1.png\">\n            <\/div>\n            <div class=\"panel p2\">\n                <img src=\"randomDirectory\/images\/wearpolos\/2.png\">\n            <\/div>\n            <div class=\"panel p3\">\n                <img src=\"randomDirectory\/images\/wearpolos\/3.jpg\">\n            <\/div>\n            <!--<div class=\"panel p4\">\n                <img src=\"randomDirectory\/images\/wearpolos\/4.jpg\">\n            <\/div>-->\n        <\/div>\n    <\/div>\n    <div id=\"title\">\n        <img src=\"randomDirectory\/images\/wearpolos\/title.png\" alt=\"\">\n        <div id=\"shopall\"><\/div>\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/wearshoes\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/wearpoloslp\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n\n  <!--  <div id=\"closesubNav\"><\/div>\n    <div id=\"subNav\">\n        <div class=\"imgholder\">\n            <img src=\"randomDirectory\/images\/wearpolos\/subnav.png\" alt=\"\" usemap=\"#subnavMap\" border=\"0\">\n        <\/div>\n    <\/div>\n-->\n\n<\/div>","wearpoloslp":"<div id=\"wearpoloslp\" class=\"finderPage\">\n\n\n    <div>\n        <div id=\"panelHolder\">\n            <div class=\"panel p2\">\n                <img src=\"randomDirectory\/images\/wearpoloslp\/2.png\">\n            <\/div>\n            <div class=\"panel p3\">\n                <img src=\"randomDirectory\/images\/wearpoloslp\/3.jpg\">\n            <\/div>\n            <!--<div class=\"panel p4\">\n                <img src=\"randomDirectory\/images\/wearpoloslp\/4.jpg\">\n            <\/div>-->\n        <\/div>\n    <\/div>\n    <div id=\"title\">\n        <img src=\"randomDirectory\/images\/wearpoloslp\/title.png\" alt=\"\">\n        <div id=\"shopall\"><\/div>\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/wearpolos\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/weargear\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n\n    <!--<div id=\"closesubNav\"><\/div>\n    <div id=\"subNav\">\n        <div class=\"imgholder\">\n            <img src=\"randomDirectory\/images\/wearpoloslp\/subnav.png\" alt=\"\" usemap=\"#subnavMap\" border=\"0\">\n        <\/div>\n    <\/div>\n-->\n\n<\/div>","wearshoes":"<div id=\"wearshoes\" class=\"finderPage\" xmlns=\"http:\/\/www.w3.org\/1999\/html\">\n        <div id=top>\n            <div id=\"left\">\n                <div id=\"title\" class=\"title\">\n                    <img src=\"randomDirectory\/images\/wearshoes\/title.png\" border=\"0\" \/>\n                    <div id=\"shopall\"><\/div>\n                <\/div>\n                <div id=\"menuLinks\">\n                    <div id=\"t1\" class=\"linkClick\" class=\"tr td\">\n                            <img src=\"randomDirectory\/images\/wearshoes\/1.jpg\" border=\"0\">\n                            <!--<p class=\"linktxt\">the suit<br>& jacket<\/p>-->\n                    <\/div>\n                <\/div>\n            <\/div>\n            <div id=\"right\">\n                <div id=\"hero\">\n                    <div id=\"it0\" class=\"heroimg\"><\/div>\n                <\/div>\n            <\/div>\n        <\/div><!--end div top -->\n    <div class=\"nextNavButton\">\n        <a href=\"#\/wearshoeslp\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/wearpolos\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n<\/div>","wearshoeslp":"<div id=\"wearshoeslp\" class=\"finderPage\" xmlns=\"http:\/\/www.w3.org\/1999\/html\">\n        <div id=top>\n            <div id=\"left\">\n                <div id=\"title\" class=\"title\">\n                    <img src=\"randomDirectory\/images\/wearshoeslp\/title.png\" border=\"0\" \/>\n                    <div id=\"shopall\"><\/div>\n                <\/div>\n                <div id=\"menuLinks\">\n                    <div id=\"t1\" class=\"linkClick\" class=\"tr td\">\n                            <img src=\"randomDirectory\/images\/wearshoeslp\/1.jpg\" border=\"0\">\n                            <!--<p class=\"linktxt\">the suit<br>& jacket<\/p>-->\n                    <\/div>\n                <\/div>\n            <\/div>\n            <div id=\"right\">\n                <div id=\"hero\">\n                    <div id=\"it0\" class=\"heroimg\"><\/div>\n                <\/div>\n            <\/div>\n        <\/div><!--end div top -->\n    \n\n    <div class=\"nextNavButton\">\n        <a href=\"#\/hotList\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/wearshoes\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n<\/div>","wearsuit":"<div id=\"wearsuit\" class=\"finderPage\" xmlns=\"http:\/\/www.w3.org\/1999\/html\">\n<div>\n    <div id=\"panelHolder\">\n        <div class=\"panel p1\">\n            <img src=\"randomDirectory\/images\/wearsuit\/1.png\">\n        <\/div>\n        <div class=\"panel p2\">\n            <img src=\"randomDirectory\/images\/wearsuit\/2.png\">\n        <\/div>\n        <div class=\"panel p3\">\n            <img src=\"randomDirectory\/images\/wearsuit\/3.jpg\">\n        <\/div>\n    <\/div>\n<\/div>\n    <div id=\"title\">\n        <img src=\"randomDirectory\/images\/wearsuit\/title.png\" alt=\"\">\n        <div id=\"shopall\"><\/div>\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/wearcasualshirtlp\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/wearsuitlp\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n\n    <div id=\"closesubNav\"><\/div>\n    <div id=\"subNav\">\n        <div class=\"imgholder\">\n            <img src=\"randomDirectory\/images\/wearsuit\/subnav.png\" alt=\"\" usemap=\"#subnavMap\" border=\"0\">\n        <\/div>\n    <\/div>\n<\/div>","wearsuitlp":"<div id=\"wearsuitlp\" class=\"finderPage\">\n\n\n    <div>\n        <div id=\"panelHolder\">\n            <div class=\"panel p1\">\n                <img src=\"randomDirectory\/images\/wearsuitlp\/1.png\">\n            <\/div>\n            <div class=\"panel p2\">\n                <img src=\"randomDirectory\/images\/wearsuitlp\/2.png\">\n            <\/div>\n            <div class=\"panel p3\">\n                <img src=\"randomDirectory\/images\/wearsuitlp\/3.jpg\">\n            <\/div>\n            <!--<div class=\"panel p4\">\n                <img src=\"randomDirectory\/images\/wearsuitlp\/4.jpg\">\n            <\/div>-->\n        <\/div>\n    <\/div>\n    <div id=\"title\">\n        <img src=\"randomDirectory\/images\/wearsuitlp\/title.png\" alt=\"\">\n        <div id=\"shopall\"><\/div>\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/wearsuit\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/howtowearit\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n\n    <div id=\"closesubNav\"><\/div>\n    <!--<div id=\"subNav\">\n        <div class=\"imgholder\">\n            <img src=\"randomDirectory\/images\/wearsuitlp\/subnav.png\" alt=\"\" usemap=\"#subnavMap\" border=\"0\">\n        <\/div>\n    <\/div>-->\n\n\n\n<\/div>","wearsweater":"<div id=\"wearsweater\" class=\"finderPage\">\n\n    <div>\n        <div id=\"panelHolder\">\n            <div class=\"panel p1\">\n                <img src=\"randomDirectory\/images\/wearsweater\/1.png\">\n            <\/div>\n            <div class=\"panel p2\">\n                <img src=\"randomDirectory\/images\/wearsweater\/2.jpg\">\n            <\/div>\n            <!--<div class=\"panel p3\">\n                <img src=\"randomDirectory\/images\/wearsweater\/3.jpg\">\n            <\/div>\n            <div class=\"panel p4\">\n                <img src=\"randomDirectory\/images\/wearsweater\/4.jpg\">\n            <\/div>-->\n        <\/div>\n    <\/div>\n    <div id=\"title\">\n        <img src=\"randomDirectory\/images\/wearsweater\/title.png\" alt=\"\">\n        <div id=\"shopall\"><\/div>\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/wearcasualshirtlp\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/wearsweaterlp\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n\n    <div id=\"closesubNav\"><\/div>\n    <!--<div id=\"subNav\">\n        <div class=\"imgholder\">\n            <img src=\"randomDirectory\/images\/wearsweater\/subnav.png\" alt=\"\" usemap=\"#subnavMap\" border=\"0\">\n        <\/div>\n    <\/div>-->\n\n\n<\/div>","wearsweaterlp":"<div id=\"wearsweaterlp\" class=\"finderPage\">\n\n\n    <div>\n        <div id=\"panelHolder\">\n            <div class=\"panel p1\">\n                <img src=\"randomDirectory\/images\/wearsweaterlp\/1.png\">\n            <\/div>\n            <div class=\"panel p2\">\n                <img src=\"randomDirectory\/images\/wearsweaterlp\/2.png\">\n            <\/div>\n            <div class=\"panel p3\">\n                <img src=\"randomDirectory\/images\/wearsweaterlp\/3.jpg\">\n            <\/div>\n        <\/div>\n    <\/div>\n    <div id=\"title\">\n        <img src=\"randomDirectory\/images\/wearsweaterlp\/title.png\" alt=\"\">\n        <div id=\"shopall\"><\/div>\n    <\/div>\n    <div class=\"nextNavButton\">\n        <a href=\"#\/wearsweater\">\n            <img src=\"randomDirectory\/images\/next-button.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div class=\"prevNavButton\">\n        <a href=\"#\/wearsuit\">\n            <img src=\"randomDirectory\/images\/prev.png\" alt=\"\" border=\"0\">\n        <\/a>\n    <\/div>\n\n    <div id=\"poolBackground\">\n        <div id=\"classic_poolContainer\"><\/div>\n        <img src=\"randomDirectory\/images\/close.png\" id=\"close\" alt=\"close\">\n    <\/div>\n\n    <div id=\"closesubNav\"><\/div>\n\n\n<\/div>","pages":{},"misc":{}};

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/MenGuideStylePage.js */
var MenGuideStylePage = FinderPage.extend({

	getHighlight: function() {
		return "homepage";
	},

	setup: function() {
		this._super();

		this.parentDiv = jQuery(".finderPage#" + this.navId, "#pageContainer");




        // for fitguide pages there are maps with area elements that have the addingtrack attribute
        $('[addingtrack]').click(function(){
            finder.fitguideimagemaptracking( $(this) );
        });




    },

	processParams: function() {
		this._super();
		this.handleTracking();
	},

	handleTracking: function() {
	    //console.log('handleTracking()');
        // see if there is tracking specified for this url...
        try {
            var tracking = finder.getConfig().tracking[this.navId];
            finder.skava.handleTracking(this, tracking);
        } catch(e) {
            // we don't have tracking for this page...
        }
	},

    /* Transition your page in */
    transitionIn: function() {
        this._super();

        var pageBuild = new AnimationEngine();

        //TRANSITION IN NAVIGATION
        if (!finder.simpleAnime) {
            pageBuild.animate($(".prevNavButton, .nextNavButton", this.parentDiv), {opacity:0}, {opacity:1}, {
                easing:"easeOutQuint",
                duration:2500,
                delay:1000,
                delayEach:0
            });
        }

        // fix the iFrame
        finder.resizePage();
        var t = setTimeout(function(){
            clearTimeout(t);
            finder.resizePage();
        } , 2000);

    },

    clickTracking: function(trackingval) {
        //console.log('clickTracking()');
        try {
            var tracking = finder.getConfig().tracking[trackingval];
            //console.log(">>>>>>>>>>>>>>>>>>>>>>>> tracking "+tracking)
            finder.skava.handleTracking(this, tracking);
        } catch(e) {
            // we don't have tracking for this page...
        }
    },

    createHotSpotV2:function (configListName, container) {
        var hotSpotDataFromConfig = finder.getConfig().hotspots[configListName];
        console.log( 'HOTSPOT!!!!!!', hotSpotDataFromConfig );

        var shareImage = "";
        if (hotSpotDataFromConfig[0].shareimage) {

            shareImage = hotSpotDataFromConfig[0].shareimage;
        }

        var drawFunction = function (item) {
            console.log(item.description)
            var text = "<div id='"+item.openDirection+"'><p><span class='title'>" + item.title + '</p>'+ item.description + "<div class='shopNow' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"' role='skavaInteropQuickView'  track='QuickView'><img src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopthislook.png'></div><div class='sharing' data-share-image='" + shareImage + "'><div class='share' role='skavaInteropShareFacebook'  track='fb' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/fb.png'></div><div class='share' role='skavaInteropShareTwitter' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/twitter.png' track='twitter'></div></div><div class='minus'></div></div>";

            switch(configListName){
                case 'suitsCK':
                    var text = "<div id='"+item.openDirection+"'><p><span class='title'>" + item.title + '</p>'+ item.description + "<div class='shopNow' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"' role='skavaInteropQuickView' track='QuickView'><img src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopthislook.png'></div><div class='shopNow'  style='padding-top:5px;' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"  role='skavaInteropQuickView'><img id='shopall' src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopsuits.png'></div><div class='sharing' data-share-image='" + shareImage + "'><div class='share'  track='fb' track='fb' role='skavaInteropShareFacebook' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/fb.png' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.fbid + "',catid:'" + item.catid + "'})\"></div><div class='share' role='skavaInteropShareTwitter' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/twitter.png' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.twitterid + "',catid:'" + item.catid + "'})\"></div></div><div class='minus'></div></div>";
                    break;
                case 'suitsMK':
                var text = "<div id='"+item.openDirection+"'><p><span class='title'>" + item.title + '</p>'+ item.description + "<div class='shopNow' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"'  role='skavaInteropQuickView' track='QuickView'><img src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopthislook.png'></div><div class='shopNow' style='padding-top:5px;' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"'><img id='shopdress' src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopdress.png'></div><div class='sharing' data-share-image='" + shareImage + " ><div class='share' track='fb' role='skavaInteropShareFacebook' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/fb.png'  track='fb' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.fbid + "',catid:'" + item.catid + "'})\"></div><div class='share' role='skavaInteropShareTwitter' track='Twitter' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/twitter.png' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.twitterid + "',catid:'" + item.catid + "'})\"></div></div><div class='minus'></div></div>";
                    break;
                case 'boldbuds':
                    var text = "<div id='"+item.openDirection+"'><p><span class='title'>" + item.title + '</p>'+ item.description + "<div class='shopNow' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"'  role='skavaInteropQuickView' track='QuickView'><img src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopthislook.png'></div><div class='shopNow' style='padding-top:5px;' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"'><img id='shopall' src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopsuits.png'></div><div class='sharing' data-share-image='" + shareImage + "'><div class='share'  track='fb' role='skavaInteropShareFacebook' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/fb.png'  track='fb' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.fbid + "',catid:'" + item.catid + "'})\"></div><div class='share' role='skavaInteropShareTwitter' track='Twitter' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/twitter.png' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.twitterid + "',catid:'" + item.catid + "'})\"></div></div><div class='minus'></div></div>";
                    break;
                default:
                    var text = "<div id='"+item.openDirection+"'><p><span class='title'>" + item.title + '</p>'+ item.description + "<div class='shopNow' track='shopnow' productId='"+item.productId+"' pageid='"+item.pageid +"' catid='"+item.catid+"' role='skavaInteropQuickView' track='QuickView'><img src='" + finder.getConfig().assetsDirectory + "images/wearsuit/shopthislook.png'></div><div class='sharing' data-share-image='" + shareImage + "'><div class='share' role='skavaInteropShareFacebook' config='site' ><img src='" + finder.getConfig().assetsDirectory + "images/fb.png' track='fb' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.fbid + "',catid:'" + item.catid + "'})\"></div><div class='share' role='skavaInteropShareTwitter' config='site'><img src='" + finder.getConfig().assetsDirectory + "images/twitter.png'  track='twitter' onclick=\"finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'" + item.twitterid + "',catid:'" + item.catid + "'})\"></div></div><div class='minus'></div></div>";
            }
            return text;
        };
        //new HotSpot("DATA", hotSpotDataFromConfig, container, drawFunction, "blackHotspot");

        // share
        container.find('.hotspot').find('.shareThis').click(
            function(){
                finder.skava.share(finder.getConfig().sharing.site);
            }
        );

    }


});



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/SiteConfig.js */
//var isProduction = false;

//FILES_ROOT = VERSION_DIR;
//VERSION_DIR = "http://d3pnveezgteiph.cloudfront.net/impulse/v201106081412/";


var DOC_ROOT = "";

try {
    FILES_ROOT;
    DOC_ROOT = FILES_ROOT;
} catch (e) {
    DOC_ROOT = VERSION_DIR;
}


var assetsDirectory = DOC_ROOT + 'ipad/';
var webRoot = DEEPLINK_DIR;
var popupPosition = [256, 150, 126, 80];
var quickViewPosition = [null, 10, 658, 603];
var shouldCache = false;
var shouldProxy = false;


var SiteConfig = {

    defaultPage:'home',
    'assetsDirectory':assetsDirectory,
    webRoot:DEEPLINK_DIR,

    aliases:{},

    sharing:{

        /* SHARING ITEMS - Don't touch this comment :-) */

        site:{
            mailerIds:{
                staging:215,
                production:203
            },
            url:webRoot,
            icon:assetsDirectory + "images/share/0909_MGTS_share_icon_01.jpg",
            facebook:{
                title:"Check out the Men's Guide to Style!",
                description:"I just got the inside scoop with Macy's Men's Guide to Style. Check out tips and tricks now."
            },
            twitter:"Get the inside scoop on a whole new look with tips & tricks from Macy's Men's Guide to Style."
        }

    },

    quickView:{
        catId:"this is the cat id",
        position:[null, 10, 658, 603],
        bgColor:"#000000"
    },

    comment:{
        position:[150, 70]
    },

    tracking:{
        home:{pageid:"ca-so-gentlemans.hp", catid:"ca-so-gentlemans-guide"},
        suitQuiz:{pageid:"ca-so-gentlemans.quiz", catid:"ca-so-gentlemans-guide-quiz"},
        suitQuizPool:{pageid:"ca-so-gentlemans.quiz.findsuit", catid:"ca-so-gentlemans-guide-quiz"},
        suitQuizPoolquizAgain:{pageid:"ca-so-gentlemans.quiz.findsuit.takequizagain", catid:"ca-so-gentlemans-guide-quiz"},
        suitQuizPoolquizSorting:{pageid:"ca-so-gentlemans.quiz.findsuit.sort", catid:"ca-so-gentlemans-guide-quiz"},
        suitQuizPoolquizReset:{pageid:"ca-so-gentlemans.quiz.findsuit.reset", catid:"ca-so-gentlemans-guide-quiz"},
        shirtTieMixer:{pageid:"ca-so-gentlemans.match", catid:"ca-so-gentlemans-guide-matchmaker"},

        suitsLauren:{pageid:"ca-so-gentlemans.wearit.slide1", catid:"ca-so-gentlemans-guide-wearit-slide1"},
        suitsCK:{pageid:"ca-so-gentlemans.wearit.slide2", catid:"ca-so-gentlemans-guide-wearit-slide2"},
        suitsMK:{pageid:"ca-so-gentlemans.wearit.slide3", catid:"ca-so-gentlemans-guide-wearit-slide3"},



        dressing101:{pageid:"ca-so-gentlemans.101.fitguide", catid:"ca-so-gentlemans-guide-fitguide"},

        fitsuit:{pageid:"ca-so-gentlemans.101.fitguide.suits", catid:"ca-so-gentlemans-guide-fitguide-suits"},
        fitsuitextraslim:{pageid:"ca-so-gentlemans.101.fitguide.suits.extraslimfit", catid:"ca-so-gentlemans-guide-fitguide-suits-extraslimfit"},
        fitsuitslim:{pageid:"ca-so-gentlemans.101.fitguide.suits.slimfit", catid:"ca-so-gentlemans-guide-fitguide-suits-slimfit"},
        fitsuittrim:{pageid:"ca-so-gentlemans.101.fitguide.suits.trimfit", catid:"ca-so-gentlemans-guide-fitguide-suits-trimfit"},
        fitsuitclassic:{pageid:"ca-so-gentlemans.101.fitguide.suits.classicfit", catid:"ca-so-gentlemans-guide-fitguide-suits-classicfit"},
        fitsize:{pageid:"ca-so-gentlemans.101.fitguide.suits.sizesuit", catid:"ca-so-gentlemans-guide-fitguide-suits"},
        fitshirt:{pageid:"ca-so-gentlemans.101.fitguide.shirts", catid:"ca-so-gentlemans-guide-fitguide-shirts"},
        fitshirtextraslim:{pageid:"ca-so-gentlemans.101.fitguide.shirts.extraslimfit", catid:"ca-so-gentlemans-guide-fitguide-shirts-extraslim"},
        fitshirtslim:{pageid:"ca-so-gentlemans.101.fitguide.shirts.slimfit", catid:"ca-so-gentlemans-guide-fitguide-shirts-slimfit"},
        fitshirtfitted:{pageid:"ca-so-gentlemans.101.fitguide.shirts.fitted", catid:"ca-so-gentlemans-guide-fitguide-shirts-fitted"},
        fitshirtclassic:{pageid:"ca-so-gentlemans.101.fitguide.shirts.classicfit", catid:"ca-so-gentlemans-guide-fitguide-shirts-classicfit"},
        fitjeans:{pageid:"ca-so-gentlemans.101.fitguide.jeans", catid:"ca-so-gentlemans-guide-fitguide-jeans"},

        fitknots:{pageid:"ca-so-gentlemans.101.ties.windsor", catid:"ca-so-gentlemans-guide-fitguide-ties"},
        fitknots2:{pageid:"ca-so-gentlemans.101.ties.halfwindsor", catid:"ca-so-gentlemans-guide-fitguide-ties"},
        fitknots3:{pageid:"ca-so-gentlemans.101.ties.classic", catid:"ca-so-gentlemans-guide-fitguide-ties"},
        fitknots4:{pageid:"ca-so-gentlemans.101.ties.bow", catid:"ca-so-gentlemans-guide-fitguide-ties"},


        casualStyle:{pageid:"ca-so-gentlemans.101.casual.style.lp", catid:"ca-so-gentlemans-guide-casual-style"},
        casualClassicPool:{pageid:"ca-so-gentlemans.101.casual.style.classic", catid:"ca-so-gentlemans-guide-casual-style-classic"},
        ClassicShopAll:{pageid:"ca-so-gentlemans.101.casual.style.classic.shop", catid:"ca-so-gentlemans-guide-casual-style-classic"},
        classicontheclock:{pageid:"ca-so-gentlemans.101.casual.style.classic.ontheclock", catid:"ca-so-gentlemans-guide-casual-style-classic"},
        classicnightout:{pageid:"ca-so-gentlemans.101.casual.style.classic.nightout", catid:"ca-so-gentlemans-guide-casual-style-classic"},
        classicweekend:{pageid:"ca-so-gentlemans.101.casual.style.classic.weekend", catid:"ca-so-gentlemans-guide-casual-style-classic"},
        classicgameon:{pageid:"ca-so-gentlemans.101.casual.style.classic.gameon", catid:"ca-so-gentlemans-guide-casual-style-classic"},
        casualModernPool:{pageid:"ca-so-gentlemans.101.casual.style.modern", catid:"ca-so-gentlemans-guide-casual-style-modern"},
        modernShopAll:{pageid:"ca-so-gentlemans.101.casual.style.modern.shop", catid:"ca-so-gentlemans-guide-casual-style-modern"},
        moderneclock:{pageid:"ca-so-gentlemans.101.casual.style.modern.ontheclock", catid:"ca-so-gentlemans-guide-casual-style-modern"},
        modernnightout:{pageid:"ca-so-gentlemans.101.casual.style.modern.nightout", catid:"ca-so-gentlemans-guide-casual-style-modern"},
        modernweekend:{pageid:"ca-so-gentlemans.101.casual.style.modern.weekend", catid:"ca-so-gentlemans-guide-casual-style-modern"},
        moderngameon:{pageid:"ca-so-gentlemans.101.casual.style.modern.gameon", catid:"ca-so-gentlemans-guide-casual-style-modern"},
        casualcontemporaryPool:{pageid:"ca-so-gentlemans.101.casual.style.contemporary", catid:"ca-so-gentlemans-guide-casual-style-contemporary"},
        contempShopAll:{pageid:"ca-so-gentlemans.101.casual.style.contemporary.shop", catid:"ca-so-gentlemans-guide-casual-style-contemporary"},
        contempweekend:{pageid:"ca-so-gentlemans.101.casual.style.contemporary.weekend", catid:"ca-so-gentlemans-guide-casual-style-contemporary"},
        contempnightout:{pageid:"ca-so-gentlemans.101.casual.style.contemporary.nightout", catid:"ca-so-gentlemans-guide-casual-style-contemporary"},
        contempclock:{pageid:"ca-so-gentlemans.101.casual.style.contemporary.ontheclock", catid:"ca-so-gentlemans-guide-casual-style-contemporary"},
        contempgameon:{pageid:"ca-so-gentlemans.101.casual.style.contemporary.gameon", catid:"ca-so-gentlemans-guide-casual-style-contemporary"},
        matchmakerbuy:{pageid:"ca-so-gentlemans.match.buy", catid:"ca-so-gentlemans-guide-matchmaker"},
        'howtowearit': {
        pageid: "ca-so-gentlemans.wearit",
        catid: "ca-so-gentlemans-guide-wearit"
        },

        wearsuitlp:{pageid:"ca-so-gentlemans.wearit.suitandjacket", catid:"ca-so-gentlemans-guide-wearit-suitandjacket"},
        wearsuit:{pageid:"ca-so-gentlemans.wearit.suitandjacket", catid:"ca-so-gentlemans-guide-wearit-suitandjacket"},
        wearsweaterlp:{pageid:"ca-so-gentlemans.wearit.sweater", catid:"ca-so-gentlemans-guide-wearit-sweater"},
        wearsweater:{pageid:"ca-so-gentlemans.wearit.sweater", catid:"ca-so-gentlemans-guide-wearit-sweater"},
        wearcasualshirtlp:{pageid:"ca-so-gentlemans.wearit.casualshirt", catid:"ca-so-gentlemans-guide-wearit-casualshirt"},
        wearcasualshirt:{pageid:"ca-so-gentlemans.wearit.casualshirt", catid:"ca-so-gentlemans-guide-wearit-casualshirt"},
        wearpants:{pageid:"ca-so-gentlemans.wearit.jeanspants", catid:"ca-so-gentlemans-guide-wearit-jeanspants"},
        wearpoloslp:{pageid:"ca-so-gentlemans.wearit.polo", catid:"ca-so-gentlemans-guide-wearit-polo"},
        wearpolos  :{pageid:"ca-so-gentlemans.wearit.polo", catid:"ca-so-gentlemans-guide-wearit-polo"},
        weargear:{pageid:"ca-so-gentlemans.wearit.gear", catid:"ca-so-gentlemans-guide-wearit-gear"},
        wearshoes:{pageid:"ca-so-gentlemans.wearit.shoes", catid:"ca-so-gentlemans-guide-wearit-shoes"},

        /* jhoes comment */

        hotList:{
        	pageid:"ca-so-gentlemans.wearit.accessories",
        	catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_shopall:{
        	pageid:"ca-so-gentlemans.wearit.accessories.shop",
        	catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_item1:{   // top left going clockwise around the page
        	pageid:"ca-so-gentlemans.wearit.accessories.perfectmatch.shop",
        	catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_item2:{
            pageid:"ca-so-gentlemans.wearit.accessories.shadesofcool.shop",
            catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_item3:{
            pageid:"ca-so-gentlemans.wearit.accessories.goingplaces.shop",
            catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_item4:{
            pageid:"ca-so-gentlemans.wearit.accessories.alltiedup.shop",
            catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_item5:{
            pageid:"ca-so-gentlemans.wearit.accessories.leatherornot.shop",
            catid:"ca-so-gentlemans-guide-wearit-accessories"
        },
        hotList_item6:{
            pageid:"ca-so-gentlemans.wearit.accessories.watchandlearn.shop",
            catid:"ca-so-gentlemans-guide-wearit-accessories"
        }
    },

    shop:{
        classic:{
            classicontheclock:"640483,648721,640466,520919,221171",
            classicnightout:"653826,655465,592345,623108,536709",
            classicweekend:"656189,653458,627266,447715",
            classicgameon:"652479,654142,658505"
        },
        modern:{
            moderneclock:"539861,647367,664764,639550",
            modernnightout:"640193,662917,563794,536681",
            modernweekend:"647376,647379",
            moderngameon:"649172,454732,617755,645550"
        },
        contemp:{
            contempweekend:"643538,649229,648247",
            contempnightout:"654995,659766,608662,595666",
            contempclock:"648909,635026,643530,617241",
            contempgameon:"640215,640713,640717,649582"
        }
    },
    pool:{
        blue:{
          pool:"htw_blueperiod"
        },
        gray:{
          pool:"htw_greymatters"
        },
        rustic:{
          pool:"htw_rusticretreat"
        },
        active:{
          pool:"htw_streetactive"
        },
        street:{
          pool:"htw_suit_jacket"
        },
        tan:{
          pool:"htw_perfecttan"
        },
        quiz:{
            url:webRoot,
            navHighlight:"suitQuiz",
            subnavHighlight:"",
            sidebar:assetsDirectory + "images/suitQuizPool/suitQuizPool_image.gif",
            header:assetsDirectory + "images/suitQuizPool/quiz_title.png"
        },
        /*
        suite:{
            navHighlight:"swimStyle",
            subnavHighlight:"onepiece",
            url:poolRoot + "howto_suit",
            header:assetsDirectory + "images/pool/style_pool_header_one_piece.png",
            shopby:{
                "all":{label:"VIEW ALL", filter:[], selected:true},
                "modern":{label:"MODERN", filter:[
                    {pfeed_shopcategory:{has:"suit_modern"}}
                ]},
                "classic":{label:"CLASSIC", filter:[
                    {pfeed_shopcategory:{has:"suit_classic"}}
                ]},
                "contemporary":{label:"CONTEMPORARY", filter:[
                    {pfeed_shopcategory:{has:"suit_contemporary"}}
                ]}
            }
        },
        */
        gear:{
        /*
            navHighlight:"swimStyle",
            subnavHighlight:"onepiece",
            url:poolRoot + "howto_suit",
            header:assetsDirectory + "images/pool/style_pool_header_one_piece.png",
            */
            //View All Pants Shorts T-Shirts Sneakers

            pools: [
                {
                    label: "View All",
                    pool: "htw_gear"
                },
                {
                    label: "Pants",
                    pool: "htw_pants"
                },
                {
                    label: "Shorts",
                    pool: "htw_shorts"
                },
                {
                    label: "T-Shirts",
                    pool: "htw_tshirts"
                },
                {
                    label: "Sneakers",
                    pool: "htw_sneakers"
                }
            ],


            shopby:{
                "View All":{label:"View All", filter:[], selected:true},
                "Pants":{label:"Pants", filter:[
                    {pfeed_shopcategory:{has:"htw_pants"}}
                ]},
                "Shorts":{label:"Shorts", filter:[
                    {pfeed_shopcategory:{has:"htw_shorts"}}
                ]},
                "T-Shirts":{label:"T-Shirts", filter:[
                    {pfeed_shopcategory:{has:"htw_tshirts"}}
                ]},
                "Sneakers":{label:"Sneakers", filter:[
                    {pfeed_shopcategory:{has:"htw_sneakers"}}
                ]}
            }
        },
        /*View All Casual Shoes Fashion Sneakers Boots Dress Shoes Laceups Oxford Slipon Loafers*/
        shoes:{

            pools: [
                {
                    label: "View All",
                    pool: "htw_shoe_all"
                },
                {
                    label: "Casual Shoes",
                    pool: "casual_shoes"
                },
                {
                    label: "Fashion Sneakers",
                    pool: "fashion_sneakers"
                },
                {
                    label: "Boots",
                    pool: "boots"
                },
                {
                    label: "Dress Shoes",
                    pool: "dress_shoes"
                },
                {
                    label: "Laceups Oxford",
                    pool: "laceups_oxfords"
                },
                {
                    label: "Slipon Loafers",
                    pool: "slipon_loafers"
                }
            ],
        /*
            navHighlight:"swimStyle",
            subnavHighlight:"onepiece",
            url:poolRoot + "howto_suit",
            header:assetsDirectory + "images/pool/style_pool_header_one_piece.png",
            */
            shopby:{
                "View All":{label:"View All", filter:[], selected:true},
                "Casual Shoes":{label:"Casual Shoes", filter:[
                    {pfeed_shopcategory:{has:"casual_shoes"}}
                ]},
                "Fashion Sneakers":{label:"Fashion Sneakers", filter:[
                    {pfeed_shopcategory:{has:"fashion_sneakers"}}
                ]},
                "Boots":{label:"Boots", filter:[
                    {pfeed_shopcategory:{has:"boots"}}
                ]},
                "Dress Shoes":{label:"Dress Shoes", filter:[
                    {pfeed_shopcategory:{has:"dress_shoes"}}
                ]},
                "Laceups Oxford":{label:"Laceups Oxford", filter:[
                    {pfeed_shopcategory:{has:"laceups_oxfords"}}
                ]},
                "Slipon Loafers":{label:"Slipon Loafers", filter:[
                    {pfeed_shopcategory:{has:"slipon_loafers"}}
                ]}
            }
        },

        shoessummer:{

            pools: [
                {
                    label: "View All",
                    pool: "htw_shoe_all"
                },
                {
                    label: "Sandals and Flip Flops",
                    pool: "sandals_flipflops"
                },
                {
                    label: "Boat Shoes",
                    pool: "boat_shoes"
                }
            ],
        /*
            navHighlight:"swimStyle",
            subnavHighlight:"onepiece",
            url:poolRoot + "howto_suit",
            header:assetsDirectory + "images/pool/style_pool_header_one_piece.png",
            */
            shopby:{
                "View All":{label:"View All", filter:[], selected:true},
                "Casual Shoes":{label:"Casual Shoes", filter:[
                    {pfeed_shopcategory:{has:"casual_shoes"}}
                ]},
                "Fashion Sneakers":{label:"Fashion Sneakers", filter:[
                    {pfeed_shopcategory:{has:"fashion_sneakers"}}
                ]},
                "Boots":{label:"Boots", filter:[
                    {pfeed_shopcategory:{has:"boots"}}
                ]},
                "Dress Shoes":{label:"Dress Shoes", filter:[
                    {pfeed_shopcategory:{has:"dress_shoes"}}
                ]},
                "Laceups Oxford":{label:"Laceups Oxford", filter:[
                    {pfeed_shopcategory:{has:"laceups_oxfords"}}
                ]},
                "Slipon Loafers":{label:"Slipon Loafers", filter:[
                    {pfeed_shopcategory:{has:"slipon_loafers"}}
                ]}
            }
        },

        pants:{
            /*
            navHighlight:"swimStyle",
            subnavHighlight:"onepiece",
            url:poolRoot + "howto_pants",
            header:assetsDirectory + "images/pool/style_pool_header_one_piece.png",
            */
            pools: [
                {
                    label: "View All",
                    pool: "htw_jeanpant_all"
                },
                {
                    label: "Jeans",
                    pool: "htw_jean"
                },
                {
                    label: "Pants",
                    pool: "htw_pant"
                }
            ],

            shopby:{
                "View All":{label:"View All", filter:[], selected:true},
                "Jeans":{label:"Jeans", filter:[
                    {pfeed_shopcategory:{has:"htw_jean"}}
                ]},
                "Pants":{label:"Pants", filter:[
                    {pfeed_shopcategory:{has:"htw_pant"}}
                ]}
            }
        }
    }



};


/*  *********************************************************************  */
/*  *********************************************************************  */
/*  *********************************************************************  */


SiteConfig.hotspots = {
    blue : [
        {
            "x":"340",
            "y":"155",
            "openDirection":"southEast",
            "title":"INTO THE BLUE",
            "description":"TAKE A DEEP DIVE INTO SMART LAYERS &#38; CRISP KHAKIS FOR EASY POLISH.",
            "productId":"1606336,1656264,1476702",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"640",
            "y":"95",
            "openDirection":"southWest",
            "title":"the new navy",
            "description":"a rugged bomber meets sleek jeans—feeling blue never looked so stylish.",
            "productId":"1719710,1719410,1606829",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    blueprod : [
        {
            "x":"225",
            "y":"464",
            "openDirection":"northEast",
            "title":"strong suit",
            "description":"a tailored jacket<br>instantly upgrades<br>your man-about-town<br>look.",
            "productId":"1592789,1132938",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"372",
            "y":"256",
            "openDirection":"southWest",
            "title":"how timely",
            "description":"arm yourself with a bold timepiece that adds a dose of edge.",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },

        {
            "x":"496",
            "y":"297",
            "openDirection":"southWest",
            "title":"ahoy sailor",
            "description":"wave hello to this nautical-themed necessity.",
            "productId":"1506382",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },

        {
            "x":"725",
            "y":"225",
            "openDirection":"southWest",
            "title":"get framed",
            "description":"grab some shade with a look-at-me pair.",
            "productId":"1611675",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"114",
            "y":"533",
            "openDirection":"northEast",
            "title":"walk this way",
            "description":"a classic style to step<br>into now & later.",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"494",
            "y":"582",
            "openDirection":"northEast",
            "title":"check mate",
            "description":"dynamic prints for a surefire style win. your move.",
            "productId":"1593636,1639576",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },

        {
            "x":"644",
            "y":"582",
            "openDirection":"northWest",
            "title":"hit the blue note",
            "description":"classic. essential. pitch-perfect denim is here.",
            "productId":"1666176",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    gray : [
        {
            "x":"270",
            "y":"109",
            "openDirection":"southEast",
            "title":"the new modern",
            "description":"swear off traditional accents for neat patterns & versatile knits.",
            "productId":"1570077,1636949",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"615",
            "y":"82",
            "openDirection":"southWest",
            "title":"well in-vested",
            "description":"boost your sartorial cred with crisp three-piece suiting.",
            "productId":"1574182,1649798,1719977",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    grayprod : [
        {
            "x":"237",
            "y":"487",
            "openDirection":"northEast",
            "title":"mad for plaid",
            "description":"master sophisticated suiting with this time-honored pattern.",
            "productId":"1719707",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"368",
            "y":"274",
            "openDirection":"southWest",
            "title":"basic bets",
            "description":"define understated style with simple leather accessories.",
            "productId":"1631051,1631040",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"585",
            "y":"292",
            "openDirection":"southWest",
            "title":"buttoned up",
            "description":"pick from a bevy of solids & patterns in a modern silhouette.",
            "productId":"1592788,1592797",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"256",
            "y":"582",
            "openDirection":"northEast",
            "title":"mixed metals",
            "description":"fine-tune smart tailoring with polished finishing touches.",
            "productId":"1418632,1393658",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"519",
            "y":"582",
            "openDirection":"northEast",
            "title":"knit value",
            "description":"cozy up to sweater weather in a<br>shawl-collar style.",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"648",
            "y":"583",
            "openDirection":"northWest",
            "title":"carry on",
            "description":"conquer rush-hour commutes with a travel-friendly messenger.",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    rustic : [
        {
            "x":"329",
            "y":"108",
            "openDirection":"southEast",
            "title":"rugged rascal",
            "description":"hunt down an outdoorsy look with a bold puffer vest offset by a timeless cable-knit sweater.",
            "productId":"1719932,1693846,1693891",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"600",
            "y":"100",
            "openDirection":"southWest",
            "title":"mixed-media mogul",
            "description":"Broadcast your style with classic quilting, faithful fabrics and autumnal hues.",
            "productId":"1719930,1693842,449783,1719931",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    rusticprod : [
        {
            "x":"275",
            "y":"473",
            "openDirection":"northEast",
            "title":"cold conquerer",
            "description":"no storm can stop you with a resilient puffer jacket on your side.",
            "productId":"1530134",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"435",
            "y":"468",
            "openDirection":"northWest",
            "title":"basic training",
            "description":"designed in this season’s must-have colors, these simple pants have a solid sense of style.",
            "productId":"1719501,586004,1719508",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"570",
            "y":"267",
            "openDirection":"southWest",
            "title":"mighty messenger",
            "description":"tote like a man with masculine messenger bag.",
            "productId":"1665048",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"282",
            "y":"547",
            "openDirection":"northEast",
            "title":"loyal leather",
            "description":"stand out when you step out in classic leather boots.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"593",
            "y":"588",
            "openDirection":"northWest",
            "title":"rad in plaid",
            "description":"add a dose of vintage charm to your layered look with classic plaid.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        }
    ],
    street : [
        {
            "x":"348",
            "y":"152",
            "openDirection":"southEast",
            "title":"no sweat",
            "description":"chill out in a relaxed look with layered sweats.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"581",
            "y":"37",
            "openDirection":"southWest",
            "title":"urban legend",
            "description":"it’s more than a myth: the jogger pant is about to make fashion history. ",
            "productId":"1668393",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    streetprod : [
        {
            "x":"253",
            "y":"337",
            "openDirection":"southEast",
            "title":"line drive",
            "description":"live in the fast lane with striped gym pants—effortless, casual, cool.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"510",
            "y":"153",
            "openDirection":"southEast",
            "title":"capped off",
            "description":"underground style lands on top with the bold look of a snapback hat.",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"260",
            "y":"582",
            "openDirection":"northEast",
            "title":"bag a winner",
            "description":"get pumped up for a gym-bag trade-in: the backpack.",
            "productId":"1650094",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"349",
            "y":"577",
            "openDirection":"northWest",
            "title":"the jacked-up jacket",
            "description":"quilting is big, but it’s all about the edge: nylon or leather trim is in.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"701",
            "y":"515",
            "openDirection":"northWest",
            "title":"jonesing for joggers",
            "description":"the jogger pant is<br>the latest trend for<br>men&#8212;active & attractive.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        }
    ],
    tanprod : [
        {
            "x":"214",
            "y":"584",
            "openDirection":"northEast",
            "title":"saddle up",
            "description":"the gentleman’s carryall-done in a sleek, polished silhouette.",
            "productId":"1721595,1721594",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"405",
            "y":"189",
            "openDirection":"southWest",
            "title":"terra firma",
            "description":"from sand to soil, terrain meets its tonal match with shoes in shades of tan. ",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        },
        {
            "x":"390",
            "y":"382",
            "openDirection":"northWest",
            "title":"brass band",
            "description":"a strapping leather belt is instrumental in the completion of your ensemble.",
            "productId":"1631209",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"342",
            "y":"582",
            "openDirection":"northWest",
            "title":"good seeing you, chap",
            "description":"See how the world looks in a pair of swank shades.",
            "productId":"1611953",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"675",
            "y":"583",
            "openDirection":"northWest",
            "title":"it makes scents",
            "description":"What every memorable look requires: a dose of spice.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        }
    ],




    boldbuds : [
        {
            "x":"307",
            "y":"90",
            "openDirection":"southEast",
            "title":"From caf&#201; to corner office-add or subtract suit separates as the occasion calls.",
            "productId":"1622659,1559095",
            "pageid":"ca-so-gentlemans.wearit.slide4",
             "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot1.twitter"
        },
        {
            "x":"470",
            "y":"355",
            "openDirection":"southWest",
            "title":"as the weather cools, the floral trend is staying in full bloom.",
            "productId":"1570077,1532334,1107725",
            "pageid":"ca-so-gentlemans.wearit.slide4",
            "catid":"ca-so-gentlemans-wearit-slide4",
            "fbid":"ca-so-gentlemans.wearit.slide4.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide4.hotspot2.twitter"
        }
    ],
    suitsMK : [
        {
            "x":"265",
            "y":"160",
            "openDirection":"southEast",
            "title":"Play up pattern with a plaid dress shirt;pair with polished accents.",
            "productId":"1558820",
            "pageid":"ca-so-gentlemans.wearit.slide3",
            "catid":"ca-so-gentlemans-wearit-slide3",
            "fbid":"ca-so-gentlemans.wearit.slide3.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide3.hotspot1.twitter"
        },
        {
            "x":"610",
            "y":"75",
            "openDirection":"southWest",
            "title":"for a new take on tradition; enter the windowpane suit-mixed with prints.",
            "productId":"1635064,1623857",
            "pageid":"ca-so-gentlemans.wearit.slide3",
            "catid":"ca-so-gentlemans-wearit-slide3",
            "fbid":"ca-so-gentlemans.wearit.slide3.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide3.hotspot2.twitter"
        }
    ],
    suitsCK : [
        {
            "x":"305",
            "y":"315",
            "openDirection":"southEast",
            "title":"Timelessness is the look of today with a sleek suit in clean, classic lines.",
            "productId":"827045,1623854",
             "pageid":"ca-so-gentlemans.wearit.slide2",
             "catid":"ca-so-gentlemans-guide-wearit-slide2",
            "fbid":"ca-so-gentlemans.wearit.slide2.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide2.hotspot1.twitter"
        },
        {
            "x":"500",
            "y":"450",
            "openDirection":"northWest",
            "title":"Smooth Moves; Non iron, slim fit, check print-all low-maintenance modern musts.",
            "productId":"1591123,1653513",
             "pageid":"ca-so-gentlemans.wearit.slide2",
             "catid":"ca-so-gentlemans-guide-wearit-slide2",
            "fbid":"ca-so-gentlemans.wearit.slide2.hotspot2.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide2.hotspot2.twitter"
        }
    ],
    suitsLauren : [
        {
            "x":"480",
            "y":"145",
            "openDirection":"southWest",
            "title":"Place your bet on the trifecta: Three-piece suiting in a debonair fabric.",
            "productId":"1622129",
            "pageid":"ca-so-gentlemans.wearit.slide1",
            "catid":"ca-so-gentlemans-guide-wearit-slide1",
            "fbid":"ca-so-gentlemans.wearit.slide1.hotspot1.facebook",
            "twitterid":"ca-so-gentlemans.wearit.slide1.hotspot1.twitter"
        }
    ],
    howtoSuit_lp : [
        {
            "x":"168",
            "y":"332",
            "openDirection":"southEast",
            "title":"<b>WHITEOUT</b>you’ll polish up nicely in pristine white three-piece suiting.",
            "productId": "652999,653000,653001,653002,1326351,1234341,1213504",
            "pageid":"ca-so-gentlemans.wearit.suitandjacket.whiteout",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_02.jpg"
        },
        {
            "x":"640",
            "y":"120",
            "openDirection":"southEast",
            "title":"<b>PLAID LAD</b>take a gentlemanly jaunt in plaid patchwork.",
            "productId":"1285137,1376333,694147,1482809",
            "pageid": "ca-so-gentlemans.wearit.suitandjacket.plaidlad",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_02.jpg"
        },
        {
            "x":"685",
            "y":"95",
            "openDirection":"southWest",
            "title":"<b>MR. DEBONAIRE</b>a dapper bow tie finishes a suit with strapping style.",
            "productId":"786303,1089623,786301,786302,1053905,769642,1449319",
            "pageid": "ca-so-gentlemans.wearit.suitandjacket.mrdebonaire",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_02.jpg"
        }
    ],

    howtoSuit : [
        {
            "x":"320",
            "y":"90",
            "openDirection":"southEast",
             "title":"<b>FINE & DANDY</b> polish off a slim-fit suit with pitch-perfect accessories.",
            "productId": "801115,801113,801114,598475,1290266,553037,1330934,682216",
            "pageid":"ca-so-gentlemans.wearit.suitandjacket.finedandy",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_03.jpg"
        },
        {
            "x":"395",
            "y":"145",
            "openDirection":"southWest",
            "title":"<b>PRINCE OF PLAID</b>pair a plaid blazer with dark pants for a modern twist.",
            "productId":"1285139,848711,1063211",
            "pageid": "ca-so-gentlemans.wearit.suitandjacket.princeplaid",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_03.jpg"
        },
        {
            "x":"670",
            "y":"105",
            "openDirection":"southWest",
            "title":"<b>SHIMMER DOWN</b>conquer day-to-night and beyond in new metallic suiting.",
            "productId":"1285080,520910,1449296,682216",
            "pageid": "ca-so-gentlemans.wearit.suitandjacket.shimmerdown",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_03.jpg"
        }
    ],

    howtoSweater_lp : [
        {
            "x":"243",
            "y":"80",
            "openDirection":"southEast",
            "title":"<b>EXTRA SEASONING</b> add this fall's color trend to your mix",
            "productId": "1045225",
            "pageid":"ca-so-gentlemans.wearit.sweater.extraseasoning",
            "catid":"ca-so-gentlemans-guide-wearit-sweater"
        },
        {
            "x":"558",
            "y":"123",
            "openDirection":"southEast",
            "title":"<b>ALL SHAWL</b>play up a shawl collar by layering a plaid shirt underneath.",
            "productId": "1064169,1093824,961488",
            "pageid":"ca-so-gentlemans.wearit.sweater.allshawl",
            "catid":"ca-so-gentlemans-guide-wearit-sweater"
        },
        {
            "x":"695",
            "y":"85",
            "openDirection":"southWest",
            "title":"<b>DETAIL ORIENTED</b> elbow patches and modern knits shift your focus",
            "productId":"1058057",
            "pageid":"ca-so-gentlemans.wearit.sweater.detailoriented",
            "catid":"ca-so-gentlemans-guide-wearit-sweater"
        }
    ],

    howtoSweater : [
        {
            "x":"162",
            "y":"242",
            "openDirection":"southWest",
            "title":"<b>GET TONED</b> keep your look together with variations of the same color",
            "productId":"1007450",
            "pageid":"ca-so-gentlemans.wearit.sweater.gettoned",
            "catid":"ca-so-gentlemans-guide-wearit-sweater"
        },
        {
            "x":"609",
            "y":"135",
            "openDirection":"southWest",
            "title":"<b>COLOR ROCKING</b> a two-tone seater amps up any pairing",
            "productId":"1007450",
            "pageid":"ca-so-gentlemans.wearit.sweater.colorrocking",
            "catid":"ca-so-gentlemans-guide-wearit-sweater"
        }
    ],


    howtoCasualShirt_lp : [
        {
            "x":"170",
            "y":"350",
            "openDirection":"southEast",
            "title":"<b>STRIPED TO <br />THE MAX </b>make a bee-line for this season’s standout style: the allover print.",
            "productId": "1211531,1163913,1489638,1319346",
            "pageid":"ca-so-gentlemans.wearit.casualshirt.stripedmax",
            "catid":"ca-so-gentlemans-guide-wearit-casualshirt",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_04.jpg"
        },
       /* {
            "x":"351",
            "y":"129",
            "openDirection":"southEast",
            "title":"<b>ONE TOUGH OMBRE</b> the print of the season is your new go to",
            "productId": "932610,1004544",
            "pageid":"ca-so-gentlemans.wearit.casualshirt.onetouchombre",
            "catid":"ca-so-gentlemans-guide-wearit-casualshirt"
        },*/
        {
            "x":"398",
            "y":"356",
            "openDirection":"southWest",
            "title":"<b>LAYER PLAYER</b>break the rules by layering patterns, fabrics & pops of color.",
            "productId":"1345684,1272315,1272401",
            "pageid": "ca-so-gentlemans.wearit.casualshirt.layerplayer",
            "catid":"ca-so-gentlemans-guide-wearit-casualshirt",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_04.jpg"
        },
        {
            "x":"680",
            "y":"90",
            "openDirection":"southWest",
            "title":"<b>PREPPY THAT POPS</b>step up your casual style with a smashing bow tie.",
            "productId":"1266842,1117307,1219834",
            "pageid": "ca-so-gentlemans.wearit.casualshirt.preppypops",
            "catid":"ca-so-gentlemans-guide-wearit-suitandjacket",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_04.jpg"

        }
    ],

    howtoCasualShirt : [
        {
            "x":"345",
            "y":"105",
            "openDirection":"southEast",
            "title":"<b>WALK THE LINE</b>thin lines and slim fits create a slick look.",
            "productId": "1283525,1324702,1439187",
            "pageid":"ca-so-gentlemans.wearit.casualshirt.walktheline",
            "catid":"ca-so-gentlemans-guide-wearit-casualshirt",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_05.jpg"
        },
        {
            "x":"608",
            "y":"130",
            "openDirection":"southEast",
            "title":"<b>KINDA BLUE</b>hit the right style notes with a blue button-down and blue jeans.",
            "productId":"1308551,1471165,1083481",
            "pageid": "ca-so-gentlemans.wearit.casualshirt.kindablue",
            "catid":"ca-so-gentlemans-guide-wearit-casualshirt",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_05.jpg"
        },
        {
            "x":"685",
            "y":"85",
            "openDirection":"southWest",
            "title":"<b>OPEN BOOK</b>put yourself out there with an unbuttoned button-front.",
            "productId":"1471160,1326477,307269",
            "pageid": "ca-so-gentlemans.wearit.casualshirt.openbook",
            "catid":"ca-so-gentlemans-guide-wearit-casualshirt",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_05.jpg"
        }
    ],
    howtoJeansPants : [
        {
            "x":"176",
            "y":"370",
            "openDirection":"southEast",
            "title":"<b>DENIM DONE RIGHT</b>offset classic dark-rinse jeans with wear-forever basics.",
            "productId": "1163913,1246671,632307",
            "pageid":"ca-so-gentlemans.wearit.jeanspants.denimdoneright",
            "catid":"ca-so-gentlemans-guide-wearit-jeanspants",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_06.jpg"
        },
        {
            "x":"353",
            "y":"370",
            "openDirection":"southEast",
            "title":"<b>THE MULTITASKER</b>go from sand to surf with the versatility of hybrid shorts.",
            "productId":"1249945,1249959,1269601",
            "pageid": "ca-so-gentlemans.wearit.jeanspants.multitasker",
            "catid":"ca-so-gentlemans-guide-wearit-jeanspants",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_06.jpg"
        },
        {
            "x":"500",
            "y":"375",
            "openDirection":"southEast",
            "title":"<b>IN THE GREEN</b>punch up your palette with a dose of vibrant-colored denim.",
            "productId":"1231493,1272401,465901",
            "pageid": "ca-so-gentlemans.wearit.jeanspants.inthegreen",
            "catid":"ca-so-gentlemans-guide-wearit-jeanspants",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_06.jpg"
        },
        {
            "x":"542",
            "y":"375",
            "openDirection":"southWest",
            "title":"<b>SHORT STORY</b>paint a vivid picture with richly hued shorts.",
            "productId": "1224728,1329173,1285453",
            "pageid":"ca-so-gentlemans.wearit.jeanspants.shortstory",
            "catid":"ca-so-gentlemans-guide-wearit-jeanspants",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_06.jpg"
        },
        {
            "x":"710",
            "y":"375",
            "openDirection":"southWest",
            "title":"<b>CUFF STUFF</b>reveal a hint of contrast for off-the-cuff casual cool.",
            "productId":"753134,1266599,1181860",
            "pageid": "ca-so-gentlemans.wearit.jeanspants.cuffstuff",
            "catid":"ca-so-gentlemans-guide-wearit-jeanspants",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_06.jpg"
        }
    ],

    howtoPolo_lp : [
        {
            "x":"210",
            "y":"330",
            "openDirection":"southEast",
            "title":"<b>TIP OFF</b>a tipped polo adds a dash of dapper to everyday wear.",
            "productId": "1318172,1219834,1260164",
            "pageid":"ca-so-gentlemans.wearit.polo.tipoff",
            "catid":"ca-so-gentlemans-guide-wearit-polo",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_08.jpg"
        },
        {
            "x":"395",
            "y":"324",
            "openDirection":"southWest",
            "title":"<b>NO WALLFLOWERS</b>stand out from the norm with a bright polo and forward floral shorts.",
            "productId": "1234162,1234163,1332638",
            "pageid":"ca-so-gentlemans.wearit.polo.nowallflowers",
            "catid":"ca-so-gentlemans-guide-wearit-polo",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_08.jpg"
        },
        {
            "x":"685",
            "y":"95",
            "openDirection":"southWest",
            "title":"<b>STRIPE IT BIG</b>a style standout this season: a boldly striped polo.",
            "productId": "1270904,1147490,1071546",
            "pageid":"ca-so-gentlemans.wearit.polo.stripeitbig",
            "catid":"ca-so-gentlemans-guide-wearit-polo",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_08.jpg"
        }
    ],

    howtoPolo : [
        {
            "x":"325",
            "y":"114",
            "openDirection":"southEast",
            "title":"<b>DECKED OUT</b>rig up a nautical look with sea-inspired shades & shoes.",
            "productId":"1266819,1324702,1266836",
            "pageid": "ca-so-gentlemans.wearit.polo.deckedout",
            "catid":"ca-so-gentlemans-guide-wearit-polo",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_09.jpg"
        },
        {
            "x":"360",
            "y":"150",
            "openDirection":"southWest",
            "title":"<b>CROSS THE LINE</b>enter a new world of polo prints with the wide stripe.",
            "productId": "1326529,1394180,1211531",
            "pageid":"ca-so-gentlemans.wearit.polo.crosstheline",
            "catid":"ca-so-gentlemans-guide-wearit-polo",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_09.jpg"
        },
        {
            "x":"680",
            "y":"95",
            "openDirection":"southWest",
            "title":"<b>GO DEEP</b>a rich blue shade is a smart choice for a classic look.",
            "productId": "1260147,1247079,1377448",
            "pageid":"ca-so-gentlemans.wearit.polo.godeep",
            "catid":"ca-so-gentlemans-guide-wearit-polo",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_09.jpg"
        }
    ],

    howtoGear : [
        {
            "x":"185",
            "y":"145",
            "openDirection":"southEast",
            "title":"<b>POWER PLAY</b>show off your super-strength in a superhero tee, sporty shorts and sneakers.",
            "productId": "1038232,785557,488271",
            "pageid":"ca-so-gentlemans.wearit.gear.powerplay",
            "catid":"ca-so-gentlemans-guide-wearit-gear",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_07.jpg"
        },
        {
            "x":"432",
            "y":"160",
            "openDirection":"southEast",
            "title":"<b>ALWAYS ON COURSE</b>contrast the green with standout golf gear.",
            "productId": "1311337,804339,1055703",
            "pageid":"ca-so-gentlemans.wearit.gear.alwaysoncourse",
            "catid":"ca-so-gentlemans-guide-wearit-gear",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_07.jpg"
        },
        {
            "x":"585",
            "y":"160",
            "openDirection":"southEast",
            "title":"<b>SOCCER SMARTS</b>shock them on the pitch with a white-hot ensemble and lightning-fast moves.",
            "productId":"1382442,1042999,1056489",
            "pageid": "ca-so-gentlemans.wearit.gear.soccersmarts",
            "catid":"ca-so-gentlemans-guide-wearit-gear",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_07.jpg"
        },
        {
            "x":"690",
            "y":"165",
            "openDirection":"southWest",
            "title":"<b>RUN WITH IT</b>tone up your tank assortment with cool color.",
            "productId":"1382488,954016,1400424,1466018",
            "pageid": "ca-so-gentlemans.wearit.gear.runwithit",
            "catid":"ca-so-gentlemans-guide-wearit-gear",
            "shareimage": assetsDirectory + "images/share/0304_MGTS_share_icon_07.jpg"
        }
    ],

    "fitsize":[
        {
            "x":"210",
            "y":"130",
            "openDirection":"northEast",
            "title":"<b>OVER ARM:</b> With arms at your sides, have someone measure around the broadest part of your shoulders and upper arms."
        },
        {
            "x":"168",
            "y":"161",
            "openDirection":"southEast",
            "title":"<b>CHEST:</b> With arms at your sides, measure around your upper body, under your armpits and over the fullest part of your chest and shoulder blades."
        },
        {
            "x":"164",
            "y":"258",
            "openDirection":"southEast",
            "title":"<b>WAIST:</B> Bend to one side to find the natural crease of your waist. Measure at this point, keeping the tape comfortably loose around your waist."
        },
        {
            "x":"163",
            "y":"380",
            "openDirection":"southEast",
            "title":"<b>INSEAM:</b> Measure from the crotch seam to the hem."
        }
    ],

    "fitguideshirt":[
        {
            "x":"199",
            "y":"125",
            "openDirection":"northEast",
            "title":"a small-collar dress shirt is best paired with a slim suit, skinny tie and tie bar."
        },
        {
            "x":"72",
            "y":"217",
            "openDirection":"southEast",
            "title":"Higher armholes and a nipped-in waist create a sleek look."
        },
        /*
        {
            "x":"184",
            "y":"283",
            "openDirection":"southEast",
            "title":"Placket should lay flat. if it puckers you need one size larger."
        },
        */
        {
            "x":"673",
            "y":"120",
            "openDirection":"southWest",
            "title":"If there’s room for one finger in between your neck and fully buttoned collar, you know it’s the right size."
        },
        {
            "x":"786",
            "y":"335",
            "openDirection":"northWest",
            "title":"Classic shirts have a fuller cut and look best under suit jackets."
        },
        {
            "x":"554",
            "y":"445",
            "openDirection":"northEast",
            "title":"Whether you choose barrel or French cuffs, make sure the cuff hits the top of your wrist."
        }
    ]



};

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/components/AutoTracker.js */
//cms
function AutoTracker(settings){
	var self = this;
	this.logging = true;
	this.log = [];

	self.settings = {prefix:'ca-so-', defaultPage:'home', site:'gentlemans', ignoreKeys:[], ignoreNumbers:true};
	$.extend(self.settings,settings);

	this.init = function(){
		$.each(self.settings.ignoreKeys, function(i,e){self.settings.ignoreKeys[i] = self.settings.ignoreKeys[i].toLowerCase()});
		self.parent = $('#finderContainer');
		self.parent.on('click','[track]',self.handleClickTracker);
		self.parent.on('change','select[track]',self.handleClickTracker);
		self.parent.on('click','a:not([track])',self.handleClickLink);
		self.parent.on('pageUrlChanged',self.handlePageChanged);
		self.tracker_base = finder.getConfig().tracking.base;
	}

	this.track = function(pageid, catid){
		pageid = self.replaceConstants(pageid);
		catid = self.replaceConstants(catid);
		pageid = pageid.replace('..','.');
		catid = catid.replace('..','.');
		while(pageid.slice(-1)=='.') pageid=pageid.slice(0,-1);
		while(catid.slice(-1)=='.') catid=catid.slice(0,-1);
		catid = catid.replace(/\./g,'-');

		self.insertLog(pageid, catid);

		try {
			registerPageViewEx(pageid, catid);
		} catch (err) {
			console.log('AutoTracker.track("'+pageid+'","'+catid+'")');
		}
	}

	this.pageBase = function(){
		var p = location.hash.slice(1);
		p = p.split('?')[0];
		var keys = p.replace(/^\/|\/$/g, '').split('/');
		if(keys.length>0){
			var path = [];
			for(var i=0; i<keys.length; i++){
				if($.inArray(keys[i],self.ignoreKeys)==-1){// && (self.settings.ignoreNumbers && isNaN(keys[i]))){
					path.push(keys[i]);
				}
			}
			var result = self.filterIgnored(path).join('.').toLowerCase();
			return result=='' ? self.settings.defaultPage : result;
		}
		return 'hp';
	}

	this.siteBase = function(){
		return self.settings.prefix+self.settings.site;
	}

	this.replaceConstants = function(str,eventType){
		var tags = [];
		var keys = str.split('.');
		for(var i=0; i<keys.length; i++){
			switch(keys[i]){
				case '%PAGE%' :
					tags.push(self.pageBase());
					break;
				case '%SITE%' :
					tags.push(self.siteBase());
					if(eventType=='click'){
						tags.push('click');
					}
					break;
				default :
					tags.push(keys[i]);
			}
		}
		return tags.join('.');
	}

	this.handleClickLink = function(evt){
		var href = $(this).attr('href');
		if(href.indexOf('http')==0){
			href = href.split('//')[1];
			var folders = href.split('/');
			var parts = folders[0].split('.');
			var path = [];
			path.push(parts[1] ? parts[1] : parts[0]);
			path.push(folders[1] ? folders[1] : '');
			$(this).attr('track',path.join(''));
			self.handleClickTrackerProxy(this);
			//self.trigger('click');
		}
	}

	this.handleClickTrackerProxy = function(_this){
		//console.log('handleClickTracker',evt.target);
		var tags = [];

		$(_this).parents('[trackKey]').each(function(i,e){
			if($.inArray($(e).attr('trackKey'),tags)==-1){
				tags.push($(e).attr('trackKey'));
			}
		});
		tags = self.filterIgnored(tags);

		var tracker_tag = $(_this).attr('track');
		var pageid = self.siteBase() + '.click.' + self.pageBase() + '.' + tags.join('.') + '.' + tracker_tag;
		var catid = self.siteBase() + '.click.' + self.pageBase() + '.' + tags.join('.');

		if(tracker_tag.indexOf('{')>-1){
			// this is json data
			try {
				var d = $.parseJSON(tracker_tag);

				if(d.pageid){
					pageid = self.replaceConstants(d.pageid,'click');
				}
				if(d.catid){
					catid = self.replaceConstants(d.catid,'click');
				}
			} catch(err) {
				console.error("Can't process JSON auto tracker:",tracker_tag);
			}
		}
		self.track(pageid,catid);
	}

	this.handleClickTracker = function(evt){
		//evt.stopPropagation();
		self.handleClickTrackerProxy(this);
	}

	this.handlePageChanged = function(){
		var cms_page = finder.getCurrentPage()//CMSTools.getCurrentCMSPage();
//		if(cms_page && cms_page.tracking){
//			//
//			// use tracker specified in CMS page if found
//			//
//			var tracker_tag = cms_page.tracking;
//			if(tracker_tag.indexOf('{')>-1){
//				try {
//					var d = $.parseJSON(tracker_tag);
//
//					if(d.pageid){
//						pageid = self.replaceConstants(d.pageid,'click');
//					}
//					if(d.catid){
//						catid = self.replaceConstants(d.catid,'click');
//					}
//					self.track(pageid,catid);
//				} catch(err) {
//					console.error("Can't process JSON auto tracker:",tracker_tag);
//				}
//			}
//		} else {
			//
			// contruct tracker based on hash
			//
			var tracker_page = '';
			var p = finder.getCurrentPage();
			if(p.params.argc){
				var tracker_page = self.filterIgnored(p.params.argc).join('.').toLowerCase();
			}
			var pagebase = self.pageBase();
			var pageid = self.siteBase() + '.page.' + pagebase + (pagebase.indexOf('.')==-1 ? '.lp' : '');
			var catid = pageid.split('.').slice(0,-1).join('.');
			self.track(pageid,catid);
//		}
	}

	this.filterIgnored = function(arr){
		var result = [];
		for(var i=0; i<arr.length; i++){
			if($.inArray(arr[i].toLowerCase(),self.settings.ignoreKeys)==-1){
				result.push(arr[i].toLowerCase());
			}
		}
		return result;
	}
	//
	// LOGGING CLICKS FOR EXPORT
	//
	this.startLog = function(){
		self.logging = true;
		self.log = [];
	}
	this.insertLog = function(pageid, catid){
		if(self.logging){
			self.log.push('siteid,'+catid+',description,'+pageid);
			/*
			var b = self.siteBase();
			var p = pageid.split('.');
			var c = catid.split('.');
			var pi = p.length;
			var ci = c.length;

			while(pi>0 && ci>0){
				var cs = c.slice(0,ci).join('.');
				var ps = p.slice(0,pi).join('.');
				var str = 'siteid,'+cs+',description,'+ps;
				if($.inArray(str,self.log)==-1){
					self.log.push(str);
				}
				ci--;
				pi--;
			}
			*/
		}
	}
	this.printLog = function(){
		self.log.sort();
		console.log(self.log.join('\n'));
	}

	this.init();
}

/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/Dressing101Page.js */
var Dressing101Page = MenGuideStylePage.extend({


    /* Initialize any variables that will be needed */
    init:function (params) {

        var params = {
            title:"dressing101",
            url:"html/dressing101.html",
            navId:"dressing101",
            preLoad:[
                "images/dressing101/bowite.jpg",
                "images/dressing101/checklist.jpg",
                "images/dressing101/classic.jpg",
                "images/dressing101/dressing101.png",
                "images/dressing101/halfWindsor.jpg",
                "images/dressing101/main-1.jpg",
                "images/dressing101/main-2.jpg",
                "images/dressing101/main-3.jpg",
                "images/dressing101/shirt.png",
                "images/dressing101/sub.png",
                "images/dressing101/suit.png",
                "images/dressing101/tile.png",
                "images/dressing101/transparentGrey.png",
                "images/dressing101/windsor.jpg"
            ]
        }

        this._super(params);

    },

    /* Setup your event handlers */
    setup:function () {
        this._super();
        var pageBuild = new AnimationEngine();
        var self = this;
        new HotSpot(".hotspot");


        /////// intro animation
        if (!finder.simpleAnime) {
            var pageBuild = new AnimationEngine();

            pageBuild.animate($("#main img", this.parentDiv), {opacity:0, y:300, scale:1.15}, {opacity:1, y:0, scale:1}, {
                easing:"easeOutQuint",
                duration:1250,
                delay:0,
                delayEach:250});
        }


    },


    /* Handle Deeplinking */
    processParams:function () {
        this._super();
    },

    /* Transition your page in */
    transitionIn:function () {
        this._super();

    },

    /* Transition your page Out */
    transitionOut:function () {
        this._super();

    },

    /* Handle tracking for this page */
    handleTracking:function () {
        this._super();
    }


});



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/FitjeansPage.js */


var FitjeansPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitjeans",
					url: "html/fitjeans.html",
					navId: "fitjeans",
					preLoad: [

							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/Fitknots2Page.js */


var Fitknots2Page = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitknots2",
					url: "html/fitknots2.html",
					navId: "fitknots2",
					navHighlight: 'fitknots',
					preLoad: [

							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

        this.specialNavHighlight = 'fitknots';

	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/Fitknots3Page.js */


var Fitknots3Page = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitknots3",
					url: "html/fitknots3.html",
					navId: "fitknots3",
                    navHighlight: 'fitknots',
					preLoad: [

							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
        this.specialNavHighlight = 'fitknots';

	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/Fitknots4Page.js */


var Fitknots4Page = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitknots4",
					url: "html/fitknots4.html",
					navId: "fitknots4",
                    navHighlight: 'fitknots',
					preLoad: [

							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
        this.specialNavHighlight = 'fitknots';

	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/FitknotsPage.js */


var FitknotsPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitknots",
					url: "html/fitknots.html",
					navId: "fitknots",
					preLoad: [

							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/FitshirtPage.js */


var FitshirtPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitshirt",
					url: "html/fitshirt.html",
					navId: "fitshirt",
					navHighlight:"fitshirt",
					preLoad: [
                        'images/fitshirt/shirt.jpg'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();



    },

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/FitshirtclassicPage.js */


var FitshirtclassicPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitshirtclassic",
					url: "html/fitshirtclassic.html",
					navId: "fitshirtclassic",
            		navHighlight:"fitshirt",
					preLoad: [
                        'images/fitshirtclassic/mainshirt_c.jpg'
                    ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/FitshirtextraslimPage.js */


var FitshirtextraslimPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitshirtextraslim",
					url: "html/fitshirtextraslim.html",
					navId: "fitshirtextraslim",
            		navHighlight:"fitshirt",
					preLoad: [
                        'images/fitshirtextraslim/mainshirt_es.jpg'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/FitshirtfittedPage.js */


var FitshirtfittedPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitshirtfitted",
					url: "html/fitshirtfitted.html",
					navId: "fitshirtfitted",
            		navHighlight:"fitshirt",
					preLoad: [
                        'images/fitshirtfitted/mainshirt_f.jpg'
                    ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/FitshirtslimPage.js */


var FitshirtslimPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitshirtslim",
					url: "html/fitshirtslim.html",
					navId: "fitshirtslim",
            		navHighlight:"fitshirt",
					preLoad: [
                        'images/fitshirtslim/mainshirt_s.jpg'
                    ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/FitsizePage.js */


var FitsizePage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitsize",
					url: "html/fitsize.html",
					navId: "fitsize",
					preLoad: [
                        'images/fitsize/size.jpg'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();

		this.specialNavHighlight = 'fitsuit';



        var hotSpots = finder.getConfig().hotspots.fitsize;
        var drawFunction = function (item) {
            return item.title;
        };
        new HotSpot("DATA", hotSpots, this.parentDiv, drawFunction);




	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/FitsuitPage.js */


var FitsuitPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitsuit",
					url: "html/fitsuit.html",
					navId: "fitsuit",
					preLoad: [
                        'images/fitsuit/suit.jpg'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


	},


	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


});



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/FitsuitclassicPage.js */


var FitsuitclassicPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitsuitclassic",
					url: "html/fitsuitclassic.html",
					navId: "fitsuitclassic",
            navHighlight:"fitsuit",
					preLoad: [
                        'images/fitsuitclassic/main_c.jpg'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/FitsuitextraslimPage.js */


var FitsuitextraslimPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitsuitextraslim",
					url: "html/fitsuitextraslim.html",
					navId: "fitsuitextraslim",
                    navHighlight:"fitsuit",
					preLoad: [
					    'images/fitsuitextraslim/main_es.jpg'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/FitsuitslimPage.js */


var FitsuitslimPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitsuitslim",
					url: "html/fitsuitslim.html",
					navId: "fitsuitslim",
                    navHighlight:"fitsuit",
					preLoad: [
                        'images/fitsuitslim/main_s.jpg'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/FitsuittrimPage.js */


var FitsuittrimPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "fitsuittrim",
					url: "html/fitsuittrim.html",
					navId: "fitsuittrim",
                       navHighlight:"fitsuit",
					preLoad: [
                        'images/fitsuittrim/main_t.jpg'
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/HomePage.js */
var HomePage = MenGuideStylePage.extend({


    /* Initialize any variables that will be needed */
    init:function (params) {

        var params = {
            title:"Home Page",
            url:"html/home.html",
            navId:"home",
            preLoad:[
                "images/home/main_photo.jpg",
                "images/home/man1.jpg",
                "images/home/man2.jpg",
                "images/home/man3.jpg"
            ]
        }

        this._super(params);

    },

    /* Setup your event handlers */
    setup:function () {
        this._super();


    },

    /* Handle Deeplinking */
    processParams:function () {
        this._super();


    },

    /* Transition your page in */
    transitionIn:function () {


        // query the dom
        var mainitem = $("#BW", this.parentDiv);
        var sideItems = $('.menuBotton a', this.parentDiv);

        TweenMax.fromTo(mainitem, .7, {css:{opacity:0, left:-100}, ease:Power3.easeOut}, {css:{opacity:1, left:0}});

        TweenMax.staggerFrom(sideItems, 0.6, {css:{opacity:0, left:"+=100"}, ease:Power3.easeOut}, 0.2);

////        // avoiding timing params in greensock because of iOS6
//        var t1 = setTimeout(function(){
//            TweenMax.from(titleItem, .7, {css:{opacity:0, top:-150}, ease:Power3.easeOut});
//            clearTimeout(t1);
//        } , 200);


        $("#white").hide();

        this._super();

    },

    /* Transition your page Out */
    transitionOut:function () {
        this._super();

    },

    /* Handle tracking for this page */
    handleTracking:function () {
        this._super();
    }


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/HotListPage.js */
var HotListPage = MenGuideStylePage.extend({


    /* Initialize any variables that will be needed */
    init:function (params) {

        var params = {
            title:"hotList",
            url:"html/hotList.html",
            navId:"hotList",
            navHighlight:"howtowearit",
            preLoad:[
                "images/hotList/bags.png",
                "images/hotList/wallets.png",
                "images/hotList/glasses.png",
                "images/hotList/suit.png",
                "images/hotList/ties.png",
                "images/hotList/watches.png",
                "images/hotList/title.png"
            ]
        };

        this._super(params);

    },

    /* Setup your event handlers */
    setup:function () {
        this._super();

        var self = this;
        var pageBuild = new AnimationEngine();


        pageBuild.animate($(".item", this.parentDiv), {scale:0}, {scale:1}, {
            easing:"easeOutQuint",
            duration:1500,
            delay:0,
            delayEach:250});

        pageBuild.animate($(".shopall", this.parentDiv), {scale:0}, {scale:1}, {
            easing:"easeOutQuint",
            duration:1500,
            delay:1500,
            delayEach:250});

        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

        jQuery(".item a, #.shopall a", this.parentDiv).click(function (event) {
            event.preventDefault();
            self.loadPoolCOntent( $(this).closest('div') );
            $("#poolBackground").show();
        });

        /// show pool only after itmes are loaded
        this.poolContainer.bind('poolPageChanged', function(){

        });

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });


    },

    loadPoolCOntent:function ( $obj ) {
        var poolname = $obj.attr('poolname');
        var headline = $obj.attr('alt');
        var config = $obj.attr('config');

        // change title on top box
        $("#h1").html(headline);
        // load pool
        var quiz_pool_path = poolRootVotes + poolname;
        console.log("----->>>>> quiz_pool_path: " + quiz_pool_path);
        this.productPool.loadPool(quiz_pool_path);
        //// fire tracking
        var trackingValue = "hotList_" + config;
        console.log(">>>>>>>>>> "+trackingValue);
        this.clickTracking(trackingValue);
    },

    /* Handle Deeplinking */
    processParams:function () {
        this._super();

    },

    /* Transition your page in */
    transitionIn:function () {
        this._super();

    },

    /* Transition your page Out */
    transitionOut:function () {
        this._super();

    },

    /* Handle tracking for this page */
    handleTracking:function () {
        this._super();
    }


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/HowtowearitPage.js */


var HowtowearitPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
			title: "howtowearit",
			url: "html/howtowearit.html",
			navId: "howtowearit",
			preLoad: [
                "images/howtowearit/fall_trend_bg.jpg"
			]
		};

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


		if (!finder.simpleAnime) {

        var pageBuild = new AnimationEngine();

			pageBuild.animate($("#hero", this.parentDiv), {x:300}, {x:0}, {
				easing:"easeOutQuint",
				duration:1500,
				delay:0,
				delayEach:250
			});

			pageBuild.animate($(".title", this.parentDiv), {opacity:0, x:-300, scale:1}, {opacity:1, x:15, scale:1}, {
				easing:"easeOutQuint",
				duration:1500,
				delay:0,
				delayEach:250
			});

			pageBuild.animate($(".linkClick", this.parentDiv), {y:500, opacity:0, scale:0}, {y:0, opacity:1, scale:1}, {
				easing:"easeOutQuint",
				duration:1500,
				delay:0,
				delayEach:250
			});


			pageBuild.animate($(".subcopy", this.parentDiv), {y:500, opacity:0, scale:0}, {y:0, opacity:1, scale:1}, {
				easing:"easeOutQuint",
				duration:1500,
				delay:1500,
				delayEach:250
			});
		}

        ////////  fix delay in the fade in out of over
        setInterval(function(){jQuery(".linkClick").css({"-webkit-transition": "none", "-moz-transition": "none", "-o-transition":"none", "-ms-transition":"none"});},3000);

	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();

	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

    },

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/HtwhotspotPage.js */


var HtwhotspotPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "htwhotspot",
					url: "html/htwhotspot.html",
					navId: "htwhotspot",
					preLoad: [

							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();


    },

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();

        var self = this;

        ///remove existing hotspots
        $('.hotspot').remove();
        /// add hot spots
        self.createHotSpotV2(this.params.argc[0], self.parentDiv);
        $(".blackHotspot .plus").delay(2000).fadeIn('slow');




        ////////  setup pool
        this.poolContainer = jQuery("#footerContainer #products");
        this.productPool = new ProductPool({
            container:this.poolContainer,
            template:"productListing"
        });


        finder.currentPage.productPool.reset()

        /// get pool path from config
        var dataPool = finder.getConfig().pool[this.params.argc[0]].pool;


        /// load pool
        self.productPool.loadPool(poolRootVotes + dataPool);
        ////// resize page after loading pool complete.
        $("#products").bind("poolLoaded",function(){finder.resizePage();});


        // SHOW AND HIDE THE CORRECT BUCKET

        // determine the $chosen anime bucket based on the hashtag and url
        var chosen = this.params.argc[0];
        // the topgifts landing uses the next arg so concat.  example 'topgifts' becomes 'topgifts-him'
        if (this.params.argc[1]) chosen+= '-'+this.params.argc[1];
        var $chosen = $('#animewrapper').find('.animebucket.' + chosen);
        // show the $chosen and hide the others
        $chosen.show().siblings().hide();

        //  ANIMATION

        // within $chosen, animate anything designated as left
        var leftStartDelay = 0;
        var leftArea = 0;
        $chosen.find('[anime="left"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0,'left':'-100', 'top':(leftArea)}, delay: leftStartDelay });
            leftStartDelay += .1;
            leftArea += 75;
        });

        // within $chosen, animate anything designated as right
        var leftStartDelay = 0;
        var leftArea = 0;
        $chosen.find('[anime="right"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0,'left':'900', 'top':(leftArea)}, delay: leftStartDelay });
            leftStartDelay += .1;
            leftArea += 75;
        });

        // within $chosen, animate anything designated as top
        var topStartDelay = 0;
        $chosen.find('[anime="top"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0, 'top':-100}, delay: topStartDelay });
            topStartDelay += .1;
        });

        // within $chosen, animate anything designated as bottom
        var bottomStartDelay = 0.6;
        var bottomHeight = $('#pageContainer').height();
        $chosen.find('[anime="bottom"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0, 'top': bottomHeight+100}, delay: bottomStartDelay });
            bottomStartDelay += .1;
        });

        /* Page copy animation  */
        var mainitem = $(".pcopy", this.parentDiv);
        var currentAnim = TweenMax.fromTo(mainitem, 2, {css:{opacity:0}, ease:Power3.easeOut}, {css:{opacity:1}});
        currentAnim.delay(1);

    },

    	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/HtwproductsPage.js */


var HtwproductsPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "htwproducts",
					url: "html/htwproducts.html",
					navId: "htwproducts",
					preLoad: [

							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();



    },

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



        self = this;

        ///remove existing hotspots
        $('.hotspot').remove();

        /// add hot spots
        self.createHotSpotV2(this.params.argc[0]+'prod', self.parentDiv);
        $(".blackHotspot .plus").delay(2000).fadeIn('slow');


        var self = this;

        ////////  setup pool
        this.poolContainer = jQuery("#footerContainer #products");
        this.productPool = new ProductPool({
            container:this.poolContainer,
            template:"productListing"
        });


        finder.currentPage.productPool.reset()

        /// get pool path from config
        var dataPool = finder.getConfig().pool[this.params.argc[0]].pool;
        /// load pool
        self.productPool.loadPool(poolRootVotes + dataPool);
        ////// resize page after loading pool complete.
        $("#products").bind("poolLoaded",function(){finder.resizePage();});





        // SHOW AND HIDE THE CORRECT BUCKET

        // determine the $chosen anime bucket based on the hashtag and url
        var chosen = this.params.argc[0];
        // the topgifts landing uses the next arg so concat.  example 'topgifts' becomes 'topgifts-him'
        if (this.params.argc[1]) chosen+= '-'+this.params.argc[1];
        var $chosen = $('#animewrapper').find('.animebucket.' + chosen);
        // show the $chosen and hide the others
        $chosen.show().siblings().hide();






        //  ANIMATION

        // within $chosen, animate anything designated as left
        var leftStartDelay = 0;
        var leftArea = 0;
        $chosen.find('[anime="left"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0,'left':'-100', 'top':(leftArea)}, delay: leftStartDelay });
            leftStartDelay += .1;
            leftArea += 75;
        });

        // within $chosen, animate anything designated as right
        var leftStartDelay = 0;
        var leftArea = 0;
        $chosen.find('[anime="right"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0,'left':'900', 'top':(leftArea)}, delay: leftStartDelay });
            leftStartDelay += .1;
            leftArea += 75;
        });

        // within $chosen, animate anything designated as top
        var topStartDelay = 0;
        $chosen.find('[anime="top"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0, 'top':-100}, delay: topStartDelay });
            topStartDelay += .1;
        });

        // within $chosen, animate anything designated as bottom
        var bottomStartDelay = 0.6;
        var bottomHeight = $('#pageContainer').height();
        $chosen.find('[anime="bottom"]').each(function(e){
            TweenMax.from($(this), .6, {css:{'opacity':0, 'top': bottomHeight+100}, delay: bottomStartDelay });
            bottomStartDelay += .1;
        });

        /* Product title animation  */
        var mainitem = $(".ptitle", this.parentDiv);
        var currentAnim = TweenMax.fromTo(mainitem, .75, {css:{opacity:0}, ease:Power3.easeOut}, {css:{opacity:1}});
        currentAnim.delay(.7);

    },

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/ShirtTieMixerPage.js */
var ShirtTieMixerPage = MenGuideStylePage.extend({


    /* Initialize any variables that will be needed */
    init:function (params) {

        var params = {
            title:"shirtTieMixer",
            url:"html/shirtTieMixer.html",
            navId:"shirtTieMixer",
            preLoad:[
                /*"images/shirtTieMixer/sub.png",
                "images/shirtTieMixer/buy.png",
                "images/shirtTieMixer/ties.png",
                "images/shirtTieMixer/tiesOn.png",
                "images/shirtTieMixer/slim.png",
                "images/shirtTieMixer/slimOn.png",
                "images/shirtTieMixer/classicOn.png",
                "images/shirtTieMixer/classic.png"*/

            ]
        };

        this._super(params);

    },

    /* Setup your event handlers */
    setup:function () {
        this._super();
        var self = this;

        var pageBuild = new AnimationEngine();
        var self = this;

        /*  if (finder.isTablet() == true) {

         pageBuild.animate($("#title", this.parentDiv), {opacity:0, x:-300, scale:1.15}, {opacity:1, x:0, scale:1}, {
         easing:"easeOutQuint",
         duration:1500,
         delay:0,
         delayEach:250});

         pageBuild.animate($("#sub", this.parentDiv), {opacity:0, x:300, scale:1.15}, {opacity:1, x:0, scale:1}, {
         easing:"easeOutQuint",
         duration:1500,
         delay:0,
         delayEach:250});


         ////////  setup pool classic
         this.poolContainer = jQuery("#classicpool", this.parentDiv);
         this.productPool = new ProductPool({
         container:this.poolContainer,
         scrollable:true,
         itemsPerPage:24,
         template:"mixerPoolShirt"
         });
         ////////  setup pool slim shirt
         this.poolContainer2 = jQuery("#slimpool", this.parentDiv);
         this.productPool2 = new ProductPool({
         container:this.poolContainer2,
         scrollable:true,
         itemsPerPage:24,
         template:"mixerPoolShirt"
         });
         ////////  setup pool ties
         this.poolContainer3 = jQuery("#tiespool", this.parentDiv);
         this.productPool3 = new ProductPool({
         container:this.poolContainer3,
         scrollable:true,
         itemsPerPage:24,
         template:"mixerPoolTie"
         });


         // load pool classic
         var poolKey = "classic_shirts";
         var quiz_pool_path = poolRootVotes + poolKey;
         this.productPool.loadPool(quiz_pool_path);
         // load pool classic
         var poolKey2 = "fitted_shirts";
         var quiz_pool_path2 = poolRootVotes + poolKey2;
         this.productPool2.loadPool(quiz_pool_path2);
         // load pool classic
         var poolKey3 = "ties";
         var quiz_pool_path3 = poolRootVotes + poolKey3;
         this.productPool3.loadPool(quiz_pool_path3);

         this.poolContainer.bind("poolLoaded", function () {
         var shoppingArray = [];
         ///////// get attr from image place on stage and make it pinchZoomable

         jQuery("#classicpool img, #slimpool img, #tiespool img").click(function () {
         var imagePath = $(this).attr("src");
         var codeSrc;
         if ($(this).hasClass("shirt")) {
         codeSrc = "<img class='actor shirt' src='" + imagePath + "'>";
         }
         ;
         if ($(this).hasClass("BOWTIE")) {
         codeSrc = "<img class='actor BOWTIE' src='" + imagePath + "'>";
         }
         ;
         if ($(this).hasClass("Regular")) {
         codeSrc = "<img class='actor Regular' src='" + imagePath + "'>";
         }
         ;
         $("#stage").append(codeSrc);
         new PinchZoomable("#stage .actor");
         ///// ad to shopping array
         shoppingArray.push(this.id);
         //alert($(this.parentDiv.parentDiv))
         });


         jQuery("#buyit", this.parentDiv).click(function () {
         self.clickTracking("matchmakerbuy");
         if (shoppingArray.length == 0) {
         alert("Shoppin cart is empty, drag products to frame");
         } else {
         var shoppingString = shoppingArray.join(",");
         finder.skava.quickView({productId:shoppingString});
         }
         ;
         });

         jQuery("#restart", this.parentDiv).click(function () {
         shoppingArray = [];
         $("#stage").html("");
         });

         })
         }
         else {
         */
        try {
            showOverlay();
        } catch (e) {
            console.log("Show overlay not available");
        }
        //}

    },

    /* Handle Deeplinking */
    processParams:function () {
        this._super();
    },

    /* Transition your page in */
    transitionIn:function () {
        this._super();

    },

    /* Transition your page Out */
    transitionOut:function () {
        try {
            closeOverlay()
        } catch (e) {
            console.log("close overlay not available");
        }
        this._super();


    },

    /* Handle tracking for this page */
    handleTracking:function () {
        this._super();
    }


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/SuitQuizPage.js */
var SuitQuizPage = MenGuideStylePage.extend({


    /* Initialize any variables that will be needed */
    init:function (params) {

        var params = {
            title:"suitQuiz",
            url:"html/suitQuiz.html",
            navId:"suitQuiz",

            preLoad:[
                "images/suitQuiz/q1.jpg",
                "images/suitQuiz/modelLeft.jpg",
                "images/suitQuiz/modelRight.jpg",
                "images/suitQuiz/title.png",
                "images/suitQuiz/line.png",
                "images/suitQuiz/q4.png",
                "images/suitQuiz/q5.png",
                "images/suitQuiz/q6.png",
                "images/suitQuiz/q7.png",
                "images/suitQuiz/q8.png",
                "images/suitQuiz/q9.png",
                "images/suitQuiz/q10.png",
                "images/suitQuiz/q11.png",
                "images/suitQuiz/q12.png",
                "images/suitQuiz/checkall.jpg"
            ]
        }

        this._super(params);
    },

    /* Setup your event handlers */
    setup:function () {
        this._super();

        var self = this;
        //var answer0;
        //var answer1;
        //var answer2;

        this.ieCrappy = false;
        if (($.browser.msie) && (jQuery.browser.version == 7.0 || jQuery.browser.version == 8.0)) {
            this.ieCrappy = true;
        }

        jQuery(".menuBotton", this.parentDiv).click(function (event) {
            //alert(this.id);

            var $this = $( event.currentTarget );
            $('input[type=radio]', this).attr("checked", true);

            if (self.ieCrappy === true) {
                $this.siblings(".menuBotton").removeClass("selected");
                $this.addClass("selected");
            }

            //$('label', this).addClass("erc");
            //self.showOverImage();
        });

        jQuery("#submit", this.parentDiv).click(function () {
            self.checkFormSubmission();

        });

        $('#submit', this.parentDiv).mouseover(function () {
            $(this).css('cursor', 'pointer');
        });


        /*$('.pop', this.parentDiv).mouseover(function () {
            var offset = $(this).offset();
            //alert(offset.top);
            $("#popImage").css({ position:'absolute', left:245, top:offset.top - 210 })
            self.showOverImage();
            $("#popImage").show();
        })
        $('.pop', this.parentDiv).mouseout(function (e) {
            $("#popImage").hide();
        }) */

        if (!finder.simpleAnime) {
            var pageBuild = new AnimationEngine();

            $("#popImage").hide();

            pageBuild.animate($(".model", this.parentDiv), {opacity:0, x:-900}, {opacity:1,x:0},{
                easing: "easeOutQuint",
                duration: 1500,
                delay:0,
                delayEach:500});

            pageBuild.animate($(".item", this.parentDiv), {opacity:0, x:500}, {opacity:1,x:0},{
                easing: "easeOutQuint",
                duration: 1200,
                delay:1000,
                delayEach:200});
        }

    },

    /* Handle Deeplinking */
    processParams:function () {
        this._super();

/*
        var self = this;
        var answer0;
        var answer1;
        var answer2;

        jQuery(".menuBotton", this.parentDiv).click(function () {
            //alert(this.id);
            $('input[type=radio]', this).attr("checked", true);
            //$('label', this).addClass("erc");
            //self.showOverImage();
        })
*/


    },

    /* Transition your page in */
    transitionIn:function () {
        this._super();
        /*
        self.answer0 = jQuery("input[name=answer0]:checked").val();
        self.answer1 = jQuery("input[name=answer1]:checked").val();
        self.answer2 = jQuery("input[name=answer2]:checked").val();
*/

    },

/*
    showOverImage:function () {
        $('#popImage img').hide();
        self.answer0 = jQuery("input[name=answer0]:checked").val();
        self.answer1 = jQuery("input[name=answer1]:checked").val();
        self.answer2 = jQuery("input[name=answer2]:checked").val();

        var who = '#' + self.answer2 + self.answer1;
        console.log(who);
        $(who).show();

    },
*/

    checkFormSubmission:function () {
        var answer0 = jQuery("input[name=answer0]:checked").val();
        if (answer0 == undefined) answer0 = "";

        var answer1 = jQuery("input[name=answer1]:checked").val();
        if (answer1 == undefined) answer1 = "";

        var answer2 = jQuery("input[name=answer2]:checked").val();
        if (answer2 == undefined) answer2 = "";

        if (answer0 == "" || answer1 == "" || answer2 == "") {
            alert("Please select an answer for each question.");
        } else {
            window.location = "#/suitQuizPool/" + answer0 + "/" + answer1 + "/" + answer2;
        }
    },


    /* Transition your page Out */
    transitionOut:function () {
        this._super();

    },

    /* Handle tracking for this page */
    handleTracking:function () {
        this._super();
    }


});



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/SuitQuizPoolPage.js */
var SuitQuizPoolPage = MenGuideStylePage.extend({


    /* Initialize any variables that will be needed */
    init:function (params) {

        var params = {
            title:"suitQuizPool",
            url:"html/suitQuizPool.html",
            navId:"suitQuizPool",
            navHighlight:"suitQuiz",
            preLoad:[
                "images/suitQuizPool/quiz_title.png",
                "images/suitQuizPool/suitQuizPool_image.gif",
                "images/transparent.png",
                "images/suitQuizPool/model1.jpg",
                "images/suitQuizPool/model2.jpg"
            ]
        }

        this._super(params);

    },

    /* Setup your event handlers */
    setup:function () {
        this._super();

        var self = this;

        this.poolContainer = jQuery("#quiz_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing",
            showMoreOnHover:false
        });

        this.poolContainer.bind("sortFacetChanged", function() {
            self.clickTracking("suitQuizPoolquizSorting");
        });

        this.poolContainer.bind("resetFacets", function() {
            self.clickTracking("suitQuizPoolquizReset");
        });

        //this.sidebar = jQuery("#sidebarImage", this.parentDiv);
        this.header = jQuery("#headerImage", this.parentDiv);

        $('#quiz_quizAgain', this.parentDiv).click(function () {
            // track for a click on quiz again
            self.clickTracking("suitQuizPoolquizAgain");
        });

        /* var mainOn = false;
        function slideShow() {
            if(!mainOn){
                jQuery("#slide1").fadeOut(2000);
                mainOn = true
            }else{
                jQuery("#slide1").fadeIn(2000);
                mainOn = false
            }
        }
        setInterval(slideShow,7000); */
    },

    /* Handle Deeplinking */
    processParams:function () {
        this._super();
        var data = finder.getConfig().pool["quiz"];
        //var quiz_result = finder.getConfig().tracking.swimQuiz["results"];
        //alert(quiz_result);
        //$("<img src='" + data.sidebar + "'>").hide().appendTo(this.sidebar.empty()).load(function () {
        //    $(this).fadeIn()
        //});
        $("<img src='" + data.header + "'>").hide().appendTo(this.header.empty()).load(function () {
            $(this).fadeIn()
        });


        // init facets
        var facet1 = new SortingFacet();
        this.productPool.addFacet(facet1);

        if (data.hasOwnProperty("shopby")) {
            var facet2 = new GenericDropDownFacet(data.shopby, "all", "shop by");
            this.productPool.addFacet(facet2);
        }

        var facet3 = new ResetFacet();
        this.productPool.addFacet(facet3);


        // load pool
        var poolKey = this.params.argc.join("~");
        //if (poolKey) poolKey = 'q00~q10~q20';
        console.log('this.params.argc', this.params.argc);
        console.log('poolKey', poolKey);
        var quiz_pool_path = poolRootQuiz + poolKey;
        console.log("----->>>>> quiz_pool_path: " + quiz_pool_path);
        this.productPool.loadPool(quiz_pool_path);
    },

    /* Transition your page in */
    transitionIn:function () {
        this._super();

    },

    /* Transition your page Out */
    transitionOut:function () {
        this._super();

    },

    /* Handle tracking for this page */
    handleTracking:function () {
        this._super();
    }


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/SuitsLauren.js */


var SuitsLauren = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "suitsLauren",
					url: "html/suitsLauren.html",
					navId: "suitsLauren",
					preLoad: [

							  ]
				 }
        this.showFooterCTA = true;
		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
        var self = this;

        /// add hot spots
        self.createHotSpotV2("suitsLauren", self.parentDiv);
        $(".blackHotspot .plus").delay(2000).fadeIn('slow');


        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

        /*
         console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
         this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
         */
        this.poolContainer.prepend('<div class="facetTitle">SUITS &amp; SUIT SEPARATES</div>');

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });


        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_suit_jacket");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid :'ca-so-gentlemans.wearit.slide1.shopsuitssuitseparates',
                catid:'ca-so-gentlemans-guide-wearit-slide1'
            });
        });
        jQuery("#close", this.parentDiv).first().click();

	},

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
        // query the dom
        var mainitem = $("#BW");
        mainitem.fadeIn("3000");
      	this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/SuitsMK.js */


var SuitsMK = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "suitsMK",
					url: "html/suitsMK.html",
					navId: "suitsMK",
					preLoad: [

							  ]
				 }
        this.showFooterCTA = true;
		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
        var self = this;

        /// add hot spots
        self.createHotSpotV2("suitsMK", self.parentDiv);
        $(".blackHotspot .plus").delay(2000).fadeIn('slow');
        $("#southWest > .shopNow").eq(1).children("img").attr({"src":"randomDirectory/ipad/images/wearsuit/shopsuits.png", "id":"shopall"});

        //setup Pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        $poolContainer = this.poolContainer;
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

        /*
         console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
         this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
         */

        $poolContainer.prepend('<div class="faceTitle"></div>');
        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });


        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_suit_jacket");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid :'ca-so-gentlemans.wearit.slide2.shopsuitssuitseparates',
                catid:'ca-so-gentlemans-guide-wearit-slide2'
            });
            $poolContainer.children('.faceTitle').html('SUITS &amp; SUIT SEPARATES');

        });

        jQuery("#shopdress", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_ties");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid :'ca-so-gentlemans.wearit.slide2.shopdressshirtties',
                catid:'ca-so-gentlemans-guide-wearit-slide2'
            });
            $poolContainer.children('.faceTitle').html('DRESS SHIRTS &amp; TIES');

        });
        jQuery("#close", this.parentDiv).first().click();
    },

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
        // query the dom
        var mainitem = $("#BW");
        mainitem.fadeIn("3000");
      	this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WearcasualshirtPage.js */


var WearcasualshirtPage = MenGuideStylePage.extend({


    /* Initialize any variables that will be needed */
    init: function(params) {

        var params = {
            title: "The Suit",
            url: "html/wearcasualshirt.html",
            navId: "wearcasualshirt",
            navHighlight:"wearcasualshirtlp",
            preLoad: [
                "images/wearcasualshirt/title.png",
                "images/wearcasualshirt/1.png",
                "images/wearcasualshirt/2.png",
                "images/wearcasualshirt/3.jpg"
            ]
        };

        this.showFooterCTA = true; // flag for footer call to action for How To Section

        this._super(params);

    },

    /* Setup your event handlers */
    setup: function() {
        this._super();
        var self = this;

        if (!finder.simpleAnime) {
            var pageBuild = new AnimationEngine();

            //TRANSITION IN TITLE
            pageBuild.animate($("#title", this.parentDiv), {opacity:0, y:-200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:1400,
                delayEach:250});

            //TRANSITION IN MODELS
            pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});
        }

        /// add hot spots
        self.createHotSpotV2("howtoCasualShirt", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');



        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });
        /*
         console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
         this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
         */
        this.poolContainer.prepend('<div class="facetTitle">CASUAL &amp; SHIRTS</div>');

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            });
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_casual_shirt");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.casualshirt.shop',
                catid:'ca-so-gentlemans-guide-wearit-casualshirt'
            });
        });
        jQuery("#close", this.parentDiv).first().click();

    },

    /* Handle Deeplinking */
    processParams: function()
    {
        this._super();

    },

    /* Transition your page in */
    transitionIn: function() {
        this._super();

    },

    /* Transition your page Out */
    transitionOut: function() {
        this._super();

    },

    /* Unload the page */
    unload: function() {

        // clear timers
        // unset events on items outside of this page.
        // unset LIVE events

        this._super();
    },

    /* Handle tracking for this page */
    handleTracking: function() {
        this._super();
    }


});



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WearcasualshirtlpPage.js */


var WearcasualshirtlpPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
            title: "wearcasualshirtlp",
            url: "html/wearcasualshirtlp.html",
            navId: "wearcasualshirtlp",
            preLoad: [
                "images/wearcasualshirtlp/title.png",
                //"images/wearcasualshirtlp/1.png",
                "images/wearcasualshirtlp/2.png",
                "images/wearcasualshirtlp/3.jpg",
                //"images/close.png",
                //"images/howtowearit/subNav.jpg",
                //"images/howtowearit/mark.png",
                //"images/minus.png",
                //"images/plus.png"
                //"images/wearcasualshirtlp/subnav.png"
                //"images/wearcasualshirtlp/title.jpg"
            ]
        };

        this.showFooterCTA = true; // flag for footer call to action for How To Section

		this._super(params);

	},

    /* Setup your event handlers */
    setup: function() {
        this._super();
        var self = this;


        if (!finder.simpleAnime) {
            var pageBuild = new AnimationEngine();

            //TRANSITION IN TITLE
            pageBuild.animate($("#title", this.parentDiv), {opacity:0, y:1200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:1400,
                delayEach:250});

            //TRANSITION IN MODELS
            pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:750,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});
        }


        /// add hot spots
        self.createHotSpotV2("howtoCasualShirt_lp", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');

        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

/*
        console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
        this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
*/
        this.poolContainer.prepend('<div class="facetTitle">THE CASUAL SHIRT</div>');

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            })
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_casual_shirt");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid :'ca-so-gentlemans.wearit.casualshirt.shop',
                catid:'ca-so-gentlemans-guide-wearit-casualshirt'
            });
        });
        jQuery("#close", this.parentDiv).first().click();

    },

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WeargearPage.js */


var WeargearPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
            title: "weargearPage",
            url: "html/weargear.html",
            navId: "weargear",
            navHighlight:"weargear",
            preLoad: [
                "images/weargear/1.png",
                "images/weargear/2.png",
                "images/weargear/3.png",
                "images/weargear/4.jpg",
                "images/weargear/title.png"
            ]
        };

        this.showFooterCTA = true; // flag for footer call to action for How To Section

		this._super(params);

	},

    /* Setup your event handlers */
    setup: function() {
        this._super();
        var self = this;


        if (!finder.simpleAnime) {

            var pageBuild = new AnimationEngine();

            //TRANSITION IN TITLE

            pageBuild.animate($("#title", this.parentDiv), {opacity:0, x:1300}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:0,
                delayEach:250});

            //TRANSITION IN MODELS

            pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, y:200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, y:200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});

        }



        /// add hot spots
        self.createHotSpotV2("howtoGear", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');





        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

        //this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.gear.shopby, "tabsOnTop", "GEAR"));

/*
        ///// tracking the filters in the pool
        $(".facetTabsContainer [pfeed='all']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.suits.shop',catid:'ca-so-gentlemans-guide-wearit-suits'});
        });
        $(".facetTabsContainer [pfeed='modern']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.suits.modern.shop',catid:'ca-so-gentlemans-guide-wearit-suits'});
        });
        $(".facetTabsContainer [pfeed='classic']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.suits.classic.shop',catid:'ca-so-gentlemans-guide-wearit-suits'});
        });
        $(".facetTabsContainer [pfeed='contemporary']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.suits.contemporary.shop',catid:'ca-so-gentlemans-guide-wearit-suits'});
        });
        */

        // KEITH
        // new pools calls in place
        this.poolContainer.prepend('<div class="facetTitle">GEAR<div class="facetTabsContainer"></div></div>');
        this.$facetTabsContainer = $(".facetTabsContainer");

        var data = finder.getConfig().pool.gear.pools;

        $("#poolFilters").tmpl(data).appendTo( this.$facetTabsContainer );

        this.$filters = this.$facetTabsContainer.find(".filter");


        this.$filters.bind("click", function(event) {
            var $this = $(event.currentTarget);
            var pool = $this.attr("data-pool");

            self.$filters.removeClass('active');
            $this.addClass('active');

            self.loadPool(poolRootVotes + pool);
        });
        // end new pool calls


        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });
        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId')
            finder.skava.quickView({
                productId: prodId
            })
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.gear.shop',
                catid:'ca-so-gentlemans-guide-wearit-gear'
            });
            self.productPool.loadPool(poolRootVotes + "htw_gear");
            self.$filters.removeClass('active');
            self.$filters.eq(0).addClass("active");
            $("#poolBackground").show();
        });
        jQuery("#close", this.parentDiv).first().click();


    },

    loadPool: function( url ) {
        this.productPool.loadPool( url );
    },



    /* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

    /* Transition your page in */
    transitionIn: function() {
        this._super();

    },

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WearjacketPage.js */


var WearjacketPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "wearjacket",
					url: "html/wearjacket.html",
					navId: "wearjacket",
					navHighlight: 'wearjacketlp',
					preLoad: [
                        "images/wearjacket/title.png",
                        "images/wearjacket/1.png",
                        "images/wearjacket/2.png",
                        "images/wearjacket/3.jpg",
                        //"images/wearsweaterlp/4.jpg",
                        "images/close.png",
                        //"images/howtowearit/subNav.jpg",
                        "images/howtowearit/mark.png",
                        "images/minus.png",
                        "images/plus.png"
							  ]
				 }

        this.showFooterCTA = true; // flag for footer call to action for How To Section

		this._super(params);

	},

    /* Setup your event handlers */
    setup: function() {
        this._super();
        var self = this;

        if (!finder.simpleAnime) {

            var pageBuild = new AnimationEngine();

            //TRANSITION IN TITLE
            pageBuild.animate($("#title", this.parentDiv), {opacity:0, y:-200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:1400,
                delayEach:250});

            //TRANSITION IN MODELS
            pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});

        }


        /// add hot spots
        self.createHotSpotV2("howtoJacket", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');



        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

/*
        console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
        this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
*/
        this.poolContainer.prepend('<div class="facetTitle">THE JACKET</div>');

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            })
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_suit_jacket");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.jacket.shop',
                catid:'ca-so-gentlemans-guide-wearit-jacket'
            });
        });
        jQuery("#close", this.parentDiv).first().click();

    },



	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WearjacketlpPage.js */


var WearjacketlpPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "wearjacket",
					url: "html/wearjacketlp.html",
					navId: "wearjacketlp",
					preLoad: [
                        "images/wearjacketlp/title.png",
                        "images/wearjacketlp/1.png",
                        "images/wearjacketlp/2.png",
                        "images/wearjacketlp/3.jpg",
                        //"images/wearsweaterlp/4.jpg",
                        "images/close.png",
                        //"images/howtowearit/subNav.jpg",
                        "images/howtowearit/mark.png",
                        "images/minus.png",
                        "images/plus.png"
							  ]
				 }

        this.showFooterCTA = true; // flag for footer call to action for How To Section

		this._super(params);

	},

    /* Setup your event handlers */
    setup: function() {
        this._super();
        var self = this;

        if (!finder.simpleAnime) {

            var pageBuild = new AnimationEngine();

            //TRANSITION IN TITLE
            pageBuild.animate($("#title", this.parentDiv), {opacity:0, y:-200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:1400,
                delayEach:250});

            //TRANSITION IN MODELS
            pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});

        }



        /// add hot spots
        self.createHotSpotV2("howtoJacket_lp", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');





        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

/*
        console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
        this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
*/
        this.poolContainer.prepend('<div class="facetTitle">THE JACKET</div>');

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            })
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_suit_jacket");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.jacket.shop',
                catid:'ca-so-gentlemans-guide-wearit-jacket'
            });
        });
        jQuery("#close", this.parentDiv).first().click();

    },


	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WearpantsPage.js */


var WearpantsPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
            title: "THE PANTS",
            url: "html/wearpants.html",
            navId: "wearpants",
            navHighlight:"wearpants",
            preLoad: [
                "images/wearpants/title.png",
                "images/wearpants/1.png",
                "images/wearpants/2.png",
                "images/wearpants/3.png",
                "images/wearpants/4.png",
                "images/wearpants/5.jpg"
            ]
        };

        this.showFooterCTA = true; // flag for footer call to action for How To Section

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
        var self = this;


        if (!finder.simpleAnime) {

            var pageBuild = new AnimationEngine();

            //TRANSITION IN TITLE

            pageBuild.animate($("#title", this.parentDiv), {opacity:0, x:1300}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:0,
                delayEach:250});

            //TRANSITION IN MODELS
            pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, y:200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, y:200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});

            pageBuild.animate($(".panel.p3", this.parentDiv), {opacity:0, y:200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:450,
                delayEach:250});

            pageBuild.animate($(".panel.p4", this.parentDiv), {opacity:0, y:200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});
        }


        /// add hot spots
        self.createHotSpotV2("howtoJeansPants", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');




        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });


        //this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.pants.shopby, "tabsOnTop", "SHORTS & PANTS"));

        /**  need to add in correct filter **/
        ///// tracking the filters in the pool
        $(".facetTabsContainer [pfeed='all']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.pants.shop',catid:'ca-so-gentlemans-guide-wearit-pants'});
        });
        $(".facetTabsContainer [pfeed='modern']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.pants.modern.shop',catid:'ca-so-gentlemans-guide-wearit-pants'});
        });
        $(".facetTabsContainer [pfeed='classic']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.pants.classic.shop',catid:'ca-so-gentlemans-guide-wearit-pants'});
        });
        $(".facetTabsContainer [pfeed='contemporary']").click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.pants.contemporary.shop',catid:'ca-so-gentlemans-guide-wearit-pants'});
        });

        // KEITH
        // new pools calls in place
        this.poolContainer.prepend('<div class="facetTitle">JEANS & PANTS<div class="facetTabsContainer"></div></div>');
        this.$facetTabsContainer = $(".facetTabsContainer");

        var data = finder.getConfig().pool.pants.pools;

        $("#poolFilters").tmpl(data).appendTo( this.$facetTabsContainer );

        this.$filters = this.$facetTabsContainer.find(".filter");


        this.$filters.bind("click", function(event) {
            var $this = $(event.currentTarget);
            var pool = $this.attr("data-pool");

            self.$filters.removeClass('active');
            $this.addClass('active');

            self.loadPool(poolRootVotes + pool);
        });
        // end new pool calls


        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId')
            finder.skava.quickView({
                productId: prodId
            })
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.jeanspants.shop',
                catid:'ca-so-gentlemans-guide-wearit-jeanspants'
            });
            // load pool
            self.productPool.loadPool(poolRootVotes + "htw_jeanpant_all");
            self.$filters.removeClass('active');
            self.$filters.eq(0).addClass("active");
            $("#poolBackground").show();
            //$("#facetsContainer [pfeed='all']").click();
        });
        jQuery("#close", this.parentDiv).first().click();

	},

    loadPool: function( url ) {
        this.productPool.loadPool( url );
    },

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

    /* Transition your page in */

    transitionIn: function() {
        this._super();

    },


	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WearpolosPage.js */


var WearpolosPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

        var params = {
            title: "wearpolos",
            url: "html/wearpolos.html",
            navId: "wearpolos",
            navHighlight: 'wearpolos',
            preLoad: [
                "images/wearpolos/title.png",
                "images/wearpolos/1.png",
                "images/wearpolos/2.png",
                "images/wearpolos/3.jpg"
            ]
        };

        this.showFooterCTA = true; // flag for footer call to action for How To Section

		this._super(params);

	},

    /* Setup your event handlers */
    setup: function() {
        this._super();
        var self = this;

        if (!finder.simpleAnime) {

            var pageBuild = new AnimationEngine();

            //TRANSITION IN TITLE
            pageBuild.animate($("#title", this.parentDiv), {opacity:0, y:-200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:1400,
                delayEach:250});

            //TRANSITION IN MODELS
            pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});

        }


        /// add hot spots
        self.createHotSpotV2("howtoPolo", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');



        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

/*
        console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
        this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
*/
        this.poolContainer.prepend('<div class="facetTitle">POLOS</div>');

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            });
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_polo_all");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.polo.shop',
                catid:'ca-so-gentlemans-guide-wearit-polo'
            });
        });
        jQuery("#close", this.parentDiv).first().click();

    },



	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


});



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WearpoloslpPage.js */


var WearpoloslpPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

        var params = {
            title: "wearpolos",
            url: "html/wearpoloslp.html",
            navId: "wearpoloslp",
            navHighlight: 'wearpolos',
            preLoad: [
                "images/wearpoloslp/title.png",
                "images/wearpoloslp/1.png",
                "images/wearpoloslp/2.png",
                "images/wearpoloslp/3.jpg"
            ]
        };

        this.showFooterCTA = true; // flag for footer call to action for How To Section

		this._super(params);

	},

    /* Setup your event handlers */
    setup: function() {
        this._super();
        var self = this;

        if (!finder.simpleAnime) {

            var pageBuild = new AnimationEngine();

            //TRANSITION IN TITLE
            pageBuild.animate($("#title", this.parentDiv), {opacity:0, y:-200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:1400,
                delayEach:250});

            //TRANSITION IN MODELS
            pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});

        }



        /// add hot spots
        self.createHotSpotV2("howtoPolo_lp", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');





        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

/*
        console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
        this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
*/
        this.poolContainer.prepend('<div class="facetTitle">POLOS</div>');

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            })
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_polo_all");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.polo.shop',
                catid:'ca-so-gentlemans-guide-wearit-polo'
            });
        });
        jQuery("#close", this.parentDiv).first().click();

    },


	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WearshoesPage.js */


var WearshoesPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "wearshoes",
					url: "html/wearshoes.html",
					navId: "wearshoes",
                    navHighlight: 'wearshoes',
					preLoad: [
                        "images/wearshoes/title.png",
                        "images/wearshoes/1.jpg",
                        "images/wearshoes/bg.jpg"
							  ]
				 }

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
        var self = this;
		this._super();

        var pageBuild = new AnimationEngine();

        pageBuild.animate($(".title", this.parentDiv), {opacity:0, x:-300, scale:1}, {opacity:1, x:15, scale:1}, {
            easing:"easeOutQuint",
            duration:1500,
            delay:0,
            delayEach:250});
        pageBuild.animate($(".linkClick", this.parentDiv), {y:500, opacity:0, scale:0}, {y:0, opacity:1, scale:1}, {
            easing:"easeOutQuint",
            duration:1500,
            delay:0,
            delayEach:250});
        ////////  fix delay in the fade in out of over
        setInterval(function(){jQuery(".linkClick", this.parentDiv).css({"-webkit-transition": "none", "-moz-transition": "none", "-o-transition":"none", "-ms-transition":"none"});},3000);



        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });
        /*
         console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
         this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
         */

        //this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.shoes.shopby, "tabsOnTop", "SHOES"));
        // KEITH
        // new pools calls in place
        this.poolContainer.prepend('<div class="facetTitle">SHOES<div class="facetTabsContainer"></div></div>');
        this.$facetTabsContainer = $(".facetTabsContainer");

        var data = finder.getConfig().pool.shoes.pools;

        $("#poolFilters").tmpl(data).appendTo( this.$facetTabsContainer );

        this.$filters = this.$facetTabsContainer.find(".filter");


        this.$filters.bind("click", function(event) {
            var $this = $(event.currentTarget);
            var pool = $this.attr("data-pool");

            self.$filters.removeClass('active');
            $this.addClass('active');

            self.loadPool(poolRootVotes + pool);
        });
        // end new pool calls

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            });
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_shoe_all");
            self.$filters.removeClass('active');
            self.$filters.eq(0).addClass("active");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.shoes.shop',
                catid:'ca-so-gentlemans-guide-wearit-shoes'
            });
        });
        jQuery("#close", this.parentDiv).first().click();



/*


        HOVER FUNCTIONALITY FOR MAIN HERO IMAGE TEMPORARILY REMOVED FOR THIS UPDATE


        $("#menuLinks DIV").hover(function() {
            if(this.id!=""){
                $("#hero .heroimg").hide();
                var who = "#hero #i"+this.id
                $(who).fadeIn('fast');
            }},
            function() {
                $("#hero #it0").fadeIn('fast');


            });
*/
	},

    loadPool: function( url ) {
        this.productPool.loadPool( url );
    },

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();

	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

    },

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WearshoeslpPage.js */


var WearshoeslpPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

        var params = {
            title: "wearshoeslp",
            url: "html/wearshoeslp.html",
            navId: "wearshoeslp",
            navHighlight: 'wearshoes',
            preLoad: [
                "images/wearshoeslp/title.png",
                "images/wearshoeslp/1.jpg",
                "images/wearshoeslp/bg.jpg"
            ]
        };

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
        var self = this;
		this._super();

        var pageBuild = new AnimationEngine();

        pageBuild.animate($(".title", this.parentDiv), {opacity:0, x:-300, scale:1}, {opacity:1, x:15, scale:1}, {
            easing:"easeOutQuint",
            duration:1500,
            delay:0,
            delayEach:250});
        pageBuild.animate($(".linkClick", this.parentDiv), {y:500, opacity:0, scale:0}, {y:0, opacity:1, scale:1}, {
            easing:"easeOutQuint",
            duration:1500,
            delay:0,
            delayEach:250});
        ////////  fix delay in the fade in out of over
        //setInterval(function(){jQuery(".linkClick", this.parentDiv).css({"-webkit-transition": "none", "-moz-transition": "none", "-o-transition":"none", "-ms-transition":"none"});},3000);



        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });
        /*
         console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
         this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
         */

        //this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.shoes.shopby, "tabsOnTop", "SHOES"));
        // KEITH
        // new pools calls in place
        this.poolContainer.prepend('<div class="facetTitle">SHOES<div class="facetTabsContainer"></div></div>');
        this.$facetTabsContainer = $(".facetTabsContainer");

        var data = finder.getConfig().pool.shoessummer.pools;

        $("#poolFilters").tmpl(data).appendTo( this.$facetTabsContainer );

        this.$filters = this.$facetTabsContainer.find(".filter");


        this.$filters.bind("click", function(event) {
            var $this = $(event.currentTarget);
            var pool = $this.attr("data-pool");

            self.$filters.removeClass('active');
            $this.addClass('active');

            self.loadPool(poolRootVotes + pool);
        });
        // end new pool calls

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            });
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_shoe_all");
            self.$filters.removeClass('active');
            self.$filters.eq(0).addClass("active");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.shoes.shop',
                catid:'ca-so-gentlemans-guide-wearit-shoes'
            });
        });
        jQuery("#close", this.parentDiv).first().click();



/*


        HOVER FUNCTIONALITY FOR MAIN HERO IMAGE TEMPORARILY REMOVED FOR THIS UPDATE


        $("#menuLinks DIV").hover(function() {
            if(this.id!=""){
                $("#hero .heroimg").hide();
                var who = "#hero #i"+this.id
                $(who).fadeIn('fast');
            }},
            function() {
                $("#hero #it0").fadeIn('fast');


            });
*/
	},

    loadPool: function( url ) {
        this.productPool.loadPool( url );
    },

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();

	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

    },

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WearsuitPage.js */


var WearsuitPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
            title: "The Suit",
            url: "html/wearsuit.html",
            navId: "wearsuit",
            navHighlight:"wearsuitlp",
            preLoad: [
                "images/wearsuit/title.png",
                "images/wearsuit/1.png",
                "images/wearsuit/2.png",
                "images/wearsuit/3.jpg",
            ]
        };

        this.showFooterCTA = true; // flag for footer call to action for How To Section

		this._super(params);

	},

	/* Setup your event handlers */
	setup: function() {
		this._super();
        var self = this;

        if (!finder.simpleAnime) {
            var pageBuild = new AnimationEngine();

            //TRANSITION IN TITLE
            pageBuild.animate($("#title", this.parentDiv), {opacity:0, y:-200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:1400,
                delayEach:250});

            //TRANSITION IN MODELS
            pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});
        }

        /// add hot spots
        self.createHotSpotV2("howtoSuit", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');



        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });
/*
        console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
        this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
*/
        this.poolContainer.prepend('<div class="facetTitle">SUITS &amp; JACKETS</div>');

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            });
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_suit_jacket");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.suitandjacket.shop',
                catid:'ca-so-gentlemans-guide-wearit-suitandjacket'
            });
        });
        jQuery("#close", this.parentDiv).first().click();

    },

	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();

	},

	/* Transition your page in */
	transitionIn: function() {
        this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WearsuitlpPage.js */


var WearsuitlpPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
            title: "wearsuitlp",
            url: "html/wearsuitlp.html",
            navId: "wearsuitlp",
            preLoad: [
                "images/wearsuitlp/title.png",
                "images/wearsuitlp/1.png",
                "images/wearsuitlp/2.png",
                "images/wearsuitlp/3.jpg"
                //"images/wearsuitlp/4.jpg",
                //"images/close.png",
                //"images/howtowearit/subNav.jpg",
                //"images/howtowearit/mark.png",
                //"images/minus.png",
                //"images/plus.png"
                //"images/wearsuitlp/subnav.png"
                //"images/wearsuitlp/title.jpg"
            ]
        };

        this.showFooterCTA = true; // flag for footer call to action for How To Section

		this._super(params);

	},

    /* Setup your event handlers */
    setup: function() {
        this._super();
        var self = this;


    if (!finder.simpleAnime) {
        var pageBuild = new AnimationEngine();

        //TRANSITION IN TITLE
        pageBuild.animate($("#title", this.parentDiv), {opacity:0, y:1200}, {opacity:1, y:0}, {
            easing:"easeOutQuint",
            duration:1500,
            delay:1400,
            delayEach:250});

        //TRANSITION IN MODELS
        pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
            easing:"easeOutQuint",
            duration:1500,
            delay:650,
            delayEach:250});

        pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
            easing:"easeOutQuint",
            duration:1500,
            delay:550,
            delayEach:250});
    }


        /// add hot spots
        self.createHotSpotV2("howtoSuit_lp", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');





        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });
/*
        console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
        this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
*/
        this.poolContainer.prepend('<div class="facetTitle">SUITS &amp; JACKETS</div>');

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            })
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "htw_suit_jacket");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.suitandjacket.shop',
                catid:'ca-so-gentlemans-guide-wearit-suitandjacket'
            });
        });
        jQuery("#close", this.parentDiv).first().click();

    },




	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WearsweaterPage.js */


var WearsweaterPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "wearsweater",
					url: "html/wearsweater.html",
					navId: "wearsweater",
					navHighlight: 'wearsweaterlp',
					preLoad: [
                        "images/wearsweater/title.png",
                        "images/wearsweater/1.png",
                        "images/wearsweater/2.jpg",
                        "images/close.png",
                        //"images/howtowearit/subNav.jpg",
                        "images/howtowearit/mark.png",
                        "images/minus.png",
                        "images/plus.png"
							  ]
				 }

        this.showFooterCTA = true; // flag for footer call to action for How To Section

		this._super(params);

	},

    /* Setup your event handlers */
    setup: function() {
        this._super();
        var self = this;


        if (!finder.simpleAnime) {

            var pageBuild = new AnimationEngine();

            //TRANSITION IN TITLE
            pageBuild.animate($("#title", this.parentDiv), {opacity:0, y:-200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:1400,
                delayEach:250});

            //TRANSITION IN MODELS
            pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, x:0}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});
        }

        /// add hot spots
        self.createHotSpotV2("howtoSweater", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');



        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

/*
        console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
        this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "THIS IS A TEST"));
*/
        this.poolContainer.prepend('<div class="facetTitle">THE SWEATER</div>');

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            });
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "hwt_sweater");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:'ca-so-gentlemans.wearit.sweater.shop',catid:'ca-so-gentlemans-guide-wearit-sweater'});
        });
        jQuery("#close", this.parentDiv).first().click();

    },



	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/pages/WearsweaterlpPage.js */


var WearsweaterlpPage = MenGuideStylePage.extend({


	/* Initialize any variables that will be needed */
	init: function(params) {

		var params = {
				 	title: "wearsweaterlp",
					url: "html/wearsweaterlp.html",
					navId: "wearsweaterlp",
					preLoad: [
                        "images/wearsweaterlp/title.png",
                        "images/wearsweaterlp/1.png",
                        "images/wearsweaterlp/2.png",
                        "images/wearsweaterlp/3.jpg",
                        "images/close.png",
                        "images/howtowearit/mark.png",
                        "images/minus.png",
                        "images/plus.png"
							  ]
				 }

        this.showFooterCTA = true; // flag for footer call to action for How To Section

		this._super(params);

	},

    /* Setup your event handlers */
    setup: function() {
        this._super();
        var self = this;

        if (!finder.simpleAnime) {

            var pageBuild = new AnimationEngine();

            //TRANSITION IN TITLE
            pageBuild.animate($("#title", this.parentDiv), {opacity:0, y:-200}, {opacity:1, y:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:1400,
                delayEach:250});

            //TRANSITION IN MODELS
            pageBuild.animate($(".panel.p1", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:650,
                delayEach:250});

            pageBuild.animate($(".panel.p2", this.parentDiv), {opacity:0, x:-900}, {opacity:1, x:0}, {
                easing:"easeOutQuint",
                duration:1500,
                delay:550,
                delayEach:250});
        }


        /// add hot spots
        self.createHotSpotV2("howtoSweater_lp", self.parentDiv);
        $(".blackHotspot .plus").delay(2500).fadeIn('slow');


        ////////  setup pool
        this.poolContainer = jQuery("#classic_poolContainer", this.parentDiv);
        this.productPool = new ProductPool({
            container:this.poolContainer,
            scrollable:true,
            itemsPerPage:24,
            template:"productListing"
        });

/*
        console.log('====> FILTERS ',finder.getConfig().pool.suite.shopby);
        this.productPool.addFacet(new GenericCheckboxFacet(finder.getConfig().pool.suite.shopby, "tabsOnTop", "SUITS & JACKETS"));
*/
        this.poolContainer.prepend('<div class="facetTitle">THE SWEATER</div>');

        ////// hide pool
        jQuery("#close", this.parentDiv).click(function () {
            $("#poolBackground").hide();
        });

        ////// add to bag
        jQuery(".shopNow", this.parentDiv).click(function () {
            finder.skava.handleTracking(finder.getCurrentPage(),{pageid:$(this).attr('pageid')+".shop",catid:$(this).attr('catid')});
            var prodId = $(this).attr('productId');
            finder.skava.quickView({
                productId: prodId
            })
        });
        ////// show pool
        jQuery("#shopall", this.parentDiv).click(function () {
            self.productPool.loadPool(poolRootVotes + "hwt_sweater");
            $("#poolBackground").show();
            finder.skava.handleTracking(finder.getCurrentPage(),{
                pageid:'ca-so-gentlemans.wearit.sweater.shop',
                catid:'ca-so-gentlemans-guide-wearit-sweater'
            });
        });
        jQuery("#close", this.parentDiv).first().click();

    },


	/* Handle Deeplinking */
	processParams: function()
	{
		this._super();



	},

	/* Transition your page in */
	transitionIn: function() {
		this._super();

	},

	/* Transition your page Out */
	transitionOut: function() {
		this._super();

	},

	/* Unload the page */
	unload: function() {

		// clear timers
		// unset events on items outside of this page.
		// unset LIVE events

		this._super();
	},

	/* Handle tracking for this page */
	handleTracking: function() {
		this._super();
	}


})



/* ../projects/mensguidetostyle_2014//randomDirectory/ipad/js/FinderStarter.js */
try {
    console.log("console exists");
}
catch (e) {
    window.console = {};
    window.console.log = function (txt) {

    }
    window.console.warn = function (txt) {

    }
    window.console.error = function (txt) {

    }
}

000
var finder;
jQuery(document.body).ready(function () {

    finder = new MenGuideStyleFinder();
    finder.setTemplates(MenGuideStyleHTMLPages);

    var data = finder.getTemplate("structure");
    jQuery("#finderContainer").html(data.replace(/randomDirectory\//g, finder.getConfig().assetsDirectory));
///test

    /* ADD PAGES START */
finder.addPage(new Dressing101Page());
finder.addPage(new FitjeansPage());
finder.addPage(new Fitknots2Page());
finder.addPage(new Fitknots3Page());
finder.addPage(new Fitknots4Page());
finder.addPage(new FitknotsPage());
finder.addPage(new FitshirtPage());
finder.addPage(new FitshirtclassicPage());
finder.addPage(new FitshirtextraslimPage());
finder.addPage(new FitshirtfittedPage());
finder.addPage(new FitshirtslimPage());
finder.addPage(new FitsizePage());
finder.addPage(new FitsuitPage());
finder.addPage(new FitsuitclassicPage());
finder.addPage(new FitsuitextraslimPage());
finder.addPage(new FitsuitslimPage());
finder.addPage(new FitsuittrimPage());
finder.addPage(new HomePage());
finder.addPage(new HotListPage());
finder.addPage(new HowtowearitPage());
finder.addPage(new HtwhotspotPage());
finder.addPage(new HtwproductsPage());
finder.addPage(new ShirtTieMixerPage());
finder.addPage(new SuitQuizPage());
finder.addPage(new SuitQuizPoolPage());
finder.addPage(new SuitsLauren());
finder.addPage(new SuitsMK());
finder.addPage(new WearcasualshirtPage());
finder.addPage(new WearcasualshirtlpPage());
finder.addPage(new WeargearPage());
finder.addPage(new WearjacketPage());
finder.addPage(new WearjacketlpPage());
finder.addPage(new WearpantsPage());
finder.addPage(new WearpolosPage());
finder.addPage(new WearpoloslpPage());
finder.addPage(new WearshoesPage());
finder.addPage(new WearshoeslpPage());
finder.addPage(new WearsuitPage());
finder.addPage(new WearsuitlpPage());
finder.addPage(new WearsweaterPage());
finder.addPage(new WearsweaterlpPage());
/* ADD PAGES END */


    finder.setup();

});
