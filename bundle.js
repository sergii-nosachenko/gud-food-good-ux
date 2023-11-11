/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={916:t=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function e(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function r(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.selectors={image:"img.media-object",products:".product-row",productTitle:".media-heading",productPrice:".lead",productBuyButton:".buy",tabPane:".tab-pane",weekInfo:"#weekinfo",cart:"#cart",messages:"#messages",navBarRight:".navbar-right"}}var n,r,o;return n=t,(r=[{key:"$images",get:function(){return $(this.selectors.image)}},{key:"$products",get:function(){return $(this.selectors.products)}},{key:"$tabPanes",get:function(){return $(this.selectors.tabPane)}},{key:"$sidebar",get:function(){return this.$weekInfo.parent()}},{key:"$weekInfo",get:function(){return $(this.selectors.weekInfo)}},{key:"$cart",get:function(){return $(this.selectors.cart)}},{key:"$messages",get:function(){return $(this.selectors.messages)}},{key:"$navBarRight",get:function(){return $(this.selectors.navBarRight)}}])&&e(n.prototype,r),o&&e(n,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();t.exports=o},871:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){"use strict";o=function(){return n};var t,n={},e=Object.prototype,i=e.hasOwnProperty,a=Object.defineProperty||function(t,n,e){t[n]=e.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function p(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{p({},"")}catch(t){p=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof b?n:b,i=Object.create(o.prototype),s=new C(r||[]);return a(i,"_invoke",{value:L(t,e,s)}),i}function h(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var d="suspendedStart",y="suspendedYield",v="executing",g="completed",m={};function b(){}function w(){}function x(){}var k={};p(k,c,(function(){return this}));var $=Object.getPrototypeOf,P=$&&$($(I([])));P&&P!==e&&i.call(P,c)&&(k=P);var O=x.prototype=b.prototype=Object.create(k);function j(t){["next","throw","return"].forEach((function(n){p(t,n,(function(t){return this._invoke(n,t)}))}))}function S(t,n){function e(o,a,s,c){var u=h(t[o],t,a);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==r(p)&&i.call(p,"__await")?n.resolve(p.__await).then((function(t){e("next",t,s,c)}),(function(t){e("throw",t,s,c)})):n.resolve(p).then((function(t){l.value=t,s(l)}),(function(t){return e("throw",t,s,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(i,i):i()}})}function L(n,e,r){var o=d;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=E(s,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var u=h(n,e,r);if("normal"===u.type){if(o=r.done?g:y,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=g,r.method="throw",r.arg=u.arg)}}}function E(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,E(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=h(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function T(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function q(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function I(n){if(n||""===n){var e=n[c];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,a=function e(){for(;++o<n.length;)if(i.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(r(n)+" is not iterable")}return w.prototype=x,a(O,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:w,configurable:!0}),w.displayName=p(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===w||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,p(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},n.awrap=function(t){return{__await:t}},j(S.prototype),p(S.prototype,u,(function(){return this})),n.AsyncIterator=S,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new S(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(O),p(O,l,"Generator"),p(O,c,(function(){return this})),p(O,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=I,C.prototype={constructor:C,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(q),!n)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function r(r,o){return s.type="throw",s.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),m},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),q(e),m}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;q(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:I(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),m}},n}function i(t,n,e,r,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void e(u)}s.done?n(c):Promise.resolve(c).then(r,o)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function s(t){i(a,r,o,s,c,"next",t)}function c(t){i(a,r,o,s,c,"throw",t)}s(void 0)}))}}function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){u(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n,e){return(n=p(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function p(t){var n=function(t,n){if("object"!==r(t)||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,n||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===r(n)?n:String(n)}var f=e(916),h=function(){function t(){var n=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.page=new f,this.selectors={waitlist:"#waitlist",waitlistTotal:"#waitlist-total",quantityValue:".quantity .value",minus:".quantity .minus",plus:".quantity .plus",remove:".remove",toCart:".to-cart"},this.products=JSON.parse(localStorage.getItem("waitlistedProducts"))||[],this.$waitlist=this.addWaitlistPanel(),this.$total=$(this.selectors.waitlistTotal),this.products.forEach((function(t){n.addWaitListItem(t)})),this.changeTotal()}var n,e,r;return n=t,(e=[{key:"addProduct",value:function(t){var n=this.products.find((function(n){return n.pid===t.pid}));if(n)n.quantity+=1,this.$waitlist.find("tr:nth-child(".concat(this.products.indexOf(n)+1,")")).find(this.selectors.quantityValue).text(n.quantity);else{var e=c(c({},t),{},{quantity:1});this.products.push(e),this.addWaitListItem(e)}this.changeTotal(),this.store()}},{key:"removeProduct",value:function(t){var n=this.products.findIndex((function(n){return n.pid===t}));this.products.splice(n,1),this.store(),this.changeTotal()}},{key:"getProducts",value:function(){return this.products}},{key:"getTotal",value:function(){return this.products.reduce((function(t,n){return t+n.price*n.quantity}),0)||0}},{key:"store",value:function(){localStorage.setItem("waitlistedProducts",JSON.stringify(this.products))}},{key:"addWaitlistPanel",value:function(){var t=this.page.$sidebar;if(!t.length)return null;var n=t.find(this.selectors.waitlist);return n.length?n:(t.append('\n      <div class="panel panel-warning">\n        <div class="panel-heading">\n          <h3 class="panel-title">Waitlist</h3>\n        </div>\n  \n        <div class="panel-body">\n          <table class="table table-striped table-hover">\n            <thead>\n              <tr>\n                <th>Title</th>\n                <th>Quantity</th>\n                <th>Price</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n  \n            <tbody id="waitlist">\n            </tbody>\n  \n            <tfoot>\n              <tr>\n                <td colspan="4">\n                  Total:\n                  <span id="waitlist-total"></span>\n                  UAH\n                </td>\n              </tr>\n            </tfoot>\n        </div>\n      </div>\n    '),t.find(this.selectors.waitlist))}},{key:"addWaitListItem",value:function(t){var n=this,e=$("\n      <tr>\n        <td>".concat(t.title,'</td>\n        <td class="quantity">\n          <span class="glyphicon glyphicon-minus minus"></span>\n          <span class="value">').concat(t.quantity,'</span>\n          <span class="glyphicon glyphicon-plus plus"></span>\n        </td>\n        <td>').concat(t.price,'</td>\n        <td class="waitlist-actions">\n          <button class="btn btn-danger btn-xs remove">\n            <span \n              class="glyphicon glyphicon-trash"\n              title="Remove from waitlist"\n            ></span>\n          </button>\n  \n          <button class="btn btn-success btn-xs to-cart">\n            <span \n              class="glyphicon glyphicon-shopping-cart"\n              title="Add to cart"\n            ></span>\n          </button>\n        </td>\n      </tr>\n    '));this.$waitlist.append(e),e.find(this.selectors.minus).on("click",(function(){var r=n.products.find((function(n){return n.pid===t.pid}));r.quantity>1?(r.quantity-=1,e.find(n.selectors.quantityValue).text(r.quantity)):(n.removeProduct(t.pid),e.remove()),n.changeTotal()})),e.find(this.selectors.plus).on("click",(function(){var r=n.products.find((function(n){return n.pid===t.pid}));r.quantity+=1,e.find(n.selectors.quantityValue).text(r.quantity),n.changeTotal(),n.store()})),e.find(this.selectors.remove).on("click",(function(){n.removeProduct(t.pid),e.remove()})),e.find(this.selectors.toCart).on("click",a(o().mark((function r(){var i;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=0;case 1:if(!(i<t.quantity)){r.next=8;break}return $.get("/order/buy/pid/".concat(t.pid),(function(t){if("ok"===t.status&&(n.page.$cart.html(t.cart),n.page.$weekInfo.html(t.weekinfo)),"msg"in t){var e=$("<div/>").addClass("alert").addClass("alert-danger").addClass("alert-dismissible").html('\n                <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                  <span aria-hidden="true">&times;</span>\n                </button>\n                '.concat(t.msg,"\n              "));n.page.$messages.html(e)}}),"json"),r.next=5,new Promise((function(t){setTimeout(t,100)}));case 5:i+=1,r.next=1;break;case 8:n.removeProduct(t.pid),e.remove();case 10:case"end":return r.stop()}}),r)}))))}},{key:"changeTotal",value:function(){var t=this.getTotal();this.$total.text(t)}}])&&l(n.prototype,e),r&&l(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();t.exports=h},116:(t,n,e)=>{var r=e(916);t.exports=function(){var t=(new r).$images;t.length&&t.each((function(){var t=$(this),n=t.attr("src").replace("crop-64-64-",""),e=$("<a>").attr("href",n).attr("title","Open bigger image in new tab").attr("target","_blank");t.css("width","80px"),t.css("height","80px"),t.before(e),e.append(t)}))}},980:t=>{t.exports=function(){$("head").append("\n    <style type=\"text/css\">\n      @media (min-width: 1200px) {\n        .container {\n            width: 95%;\n            max-width: 1600px;\n        }\n      }\n      \n      .sorting-block {\n        margin-block: 20px 10px;\n      }\n      \n      .sorting-button {\n        display: inline-block;\n        font-weight: bold;\n        color: #777;\n      }\n      \n      .sorting-button:hover {\n        color: #333;\n        cursor: pointer;\n      }\n      \n      .sorting-button.asc::after {\n        content: '▼';\n      }\n      \n      .sorting-button.desc::after {\n        content: '▲';\n      }\n      \n      .stickySidebar {\n        position: sticky;\n        top: 70px;\n      }\n\n      .waitlist-actions {\n        display: flex;\n        gap: 4px;\n      }\n\n      .quantity .plus,\n      .quantity .minus {\n        color: #777;\n        cursor: pointer;\n      }\n\n      .quantity .plus:hover,\n      .quantity .minus:hover {\n        color: #333;\n      }\n    </style>\n  ")}},43:(t,n,e)=>{var r=e(916);t.exports=function(){var t=(new r).$navBarRight;if(t.length){var n=$("<a>").attr("href","/order").html('\n      <span class="glyphicon glyphicon-apple"></span>\n      Order food\n    '),e=$("<li>").append(n);t.prepend(e)}}},758:(t,n,e)=>{var r=e(916);function o(t,n,e){var o=new r,i=t.find(o.selectors.products);i.each((function(t){var n=$(this);n.data("index")||n.data("index",t+1)}));var a=i.toArray(),s=$(i[0]).parent();if(!e)return a.sort((function(t,n){return $(t).data("index")-$(n).data("index")})),void s.append(a);var c="asc"===e?1:-1;switch(n){case"title":a.sort((function(t,n){var e=$(t).find(o.selectors.productTitle).text(),r=$(n).find(o.selectors.productTitle).text();return e.localeCompare(r)*c}));break;case"price":a.sort((function(t,n){return(parseInt($(t).find(o.selectors.productPrice).text(),10)-parseInt($(n).find(o.selectors.productPrice).text(),10))*c}))}s.append(a)}t.exports=function(){(new r).$tabPanes.each((function(){var t=$(this);t.prepend('\n    <div class="col-md-120 sorting-block">\n      <div class="row">\n        <div class="col-md-7 col-md-offset-2">\n          <p class="sorting-button title">\n            Sort by title\n          </p>\n        </div>\n          \n        <div class="col-md-3">\n          <p class="sorting-button price">\n            Sort by price\n          </p>\n        </div>\n      </div>\n    </div>\n  '),t.find(".sorting-button").on("click",(function(){var n=$(this),e=n.hasClass("title")?"title":"price",r="title"===e?"price":"title";return n.closest(".sorting-block").find(".sorting-button.".concat(r)).removeClass("asc desc"),n.hasClass("asc")?(n.toggleClass("asc desc"),void o(t,e,"desc")):n.hasClass("desc")?(n.toggleClass("desc"),void o(t,e)):(n.toggleClass("asc"),void o(t,e,"asc"))}))}))}},257:(t,n,e)=>{var r=e(916);t.exports=function(){(new r).$sidebar.toggleClass("stickySidebar")}},148:(t,n,e)=>{var r=e(916),o=new(e(871));t.exports=function(){var t=new r,n=t.$products;n.length&&n.each((function(){var n=$(this),e=n.find(t.selectors.productTitle).text(),r=parseInt(n.find(t.selectors.productPrice).text(),10),i=n.find(t.selectors.productBuyButton),a=i.attr("href"),s=Number(a.split("/").pop()),c=$("<button>").addClass("btn btn-warning").html('<span class="glyphicon glyphicon-copy"></span>').attr("title","Add to waitlist").css("margin-left","5px").on("click",(function(){o.addProduct({pid:s,title:e,price:r})}));i.after(c)}))}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}(()=>{var t=e(980),n=e(116),r=e(758),o=e(257),i=e(148),a=e(43);$((function(){t(),a(),n(),r(),o(),i()}))})()})();