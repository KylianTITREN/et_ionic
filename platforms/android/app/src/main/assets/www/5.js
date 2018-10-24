(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/input-shims.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/input-shims.js ***!
  \********************************************************************/
/*! exports provided: startInputShims */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startInputShims", function() { return startInputShims; });
/* harmony import */ var _chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-e7816c0b.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-e7816c0b.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var RELOCATED_KEY="$ionRelocated";function relocateInput(e,t,n,o){void 0===o&&(o=0),e[RELOCATED_KEY]!==n&&(n?(cloneInputComponent(e,t),t.style.transform="translate3d("+("rtl"===e.ownerDocument.dir?9999:-9999)+"px,"+o+"px,0)"):removeClone(e,t),e[RELOCATED_KEY]=n)}function isFocused(e){return e===e.ownerDocument.activeElement}function removeClone(e,t){e&&e.parentElement&&(Array.from(e.parentElement.querySelectorAll(".cloned-input")).forEach(function(e){return e.remove()}),e.style.pointerEvents=""),t.style.transform="",t.style.opacity=""}function cloneInputComponent(e,t){var n,o,r=e.parentElement,i=e.ownerDocument;if(e&&r){var a=e.offsetTop,l=e.offsetLeft,s=e.offsetWidth,c=e.offsetHeight,u=i.createElement("div"),d=u.style;(n=u.classList).add.apply(n,Array.from(e.classList)),u.classList.add("cloned-input"),u.setAttribute("aria-hidden","true"),d.pointerEvents="none",d.position="absolute",d.top=a+"px",d.left=l+"px",d.width=s+"px",d.height=c+"px";var f=i.createElement("input");(o=f.classList).add.apply(o,Array.from(t.classList)),f.value=t.value,f.type=t.type,f.placeholder=t.placeholder,f.tabIndex=-1,u.appendChild(f),r.appendChild(u),e.style.pointerEvents="none"}t.style.transform="scale(0)"}function enableHideCaretOnScroll(e,t,n){if(!n||!t)return function(){};var o=function(n){isFocused(t)&&relocateInput(e,t,n)},r=function(){return relocateInput(e,t,!1)},i=function(){return o(!0)},a=function(){return o(!1)};return n.addEventListener("ionScrollStart",i),n.addEventListener("ionScrollEnd",a),t.addEventListener("blur",r),function(){n.removeEventListener("ionScrollStart",i),n.removeEventListener("ionScrollEnd",a),t.addEventListener("ionBlur",r)}}var SKIP_SELECTOR="input, textarea, [no-blur]";function enableInputBlurring(e){var t=!0,n=!1;function o(){n=!0}function r(){t=!0}function i(o){if(n)n=!1;else{var r=e.activeElement;if(r&&!r.matches(SKIP_SELECTOR)){var i=o.target;i!==r&&(i.matches(SKIP_SELECTOR)||i.closest(SKIP_SELECTOR)||i.classList.contains("input-cover")||(t=!1,setTimeout(function(){t||r.blur()},50)))}}}return e.addEventListener("ionScrollStart",o),e.addEventListener("focusin",r,!0),e.addEventListener("touchend",i,!1),function(){e.removeEventListener("ionScrollStart",o,!0),e.removeEventListener("focusin",r,!0),e.removeEventListener("touchend",i,!1)}}var SCROLL_ASSIST_SPEED=.3;function getScrollData(e,t,n){return calcScrollData((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,window.innerHeight)}function calcScrollData(e,t,n,o){var r=e.top,i=e.bottom,a=t.top+10,l=Math.min(t.bottom,o-n)/2-i,s=a-r,c=Math.round(l<0?-l:s>0?-s:0),u=Math.abs(c);return{scrollAmount:c,scrollDuration:Math.min(400,Math.max(150,u/SCROLL_ASSIST_SPEED)),scrollPadding:n,inputSafeY:4-(r-a)}}function enableScrollAssist(e,t,n,o){var r,i=function(e){r=Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__["l"])(e)},a=function(i){if(r){var a=Object(_chunk_e7816c0b_js__WEBPACK_IMPORTED_MODULE_0__["l"])(i);hasPointerMoved(6,r,a)||isFocused(t)||(i.preventDefault(),i.stopPropagation(),jsSetFocus(e,t,n,o))}};return e.addEventListener("touchstart",i,!0),e.addEventListener("touchend",a,!0),function(){e.removeEventListener("touchstart",i,!0),e.removeEventListener("touchend",a,!0)}}function jsSetFocus(e,t,n,o){var r=getScrollData(e,n,o);Math.abs(r.scrollAmount)<4?t.focus():(relocateInput(e,t,!0,r.inputSafeY),t.focus(),n.scrollByPoint(0,r.scrollAmount,r.scrollDuration).then(function(){relocateInput(e,t,!1,r.inputSafeY),t.focus()}))}function hasPointerMoved(e,t,n){if(t&&n){var o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1}var PADDING_TIMER_KEY="$ionPaddingTimer";function enableScrollPadding(e,t){function n(e){setScrollPadding(e.target,t)}function o(e){setScrollPadding(e.target,0)}return e.addEventListener("focusin",n),e.addEventListener("focusout",o),function(){e.removeEventListener("focusin",n),e.removeEventListener("focusout",o)}}function setScrollPadding(e,t){if("INPUT"===e.tagName&&(!e.parentElement||"ION-INPUT"!==e.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var o=n[PADDING_TIMER_KEY];o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",t+"px"):n[PADDING_TIMER_KEY]=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}}var INPUT_BLURRING=!0,SCROLL_PADDING=!0;function startInputShims(e,t){var n=t.getNumber("keyboardHeight",290),o=t.getBoolean("scrollAssist",!0),r=t.getBoolean("hideCaretOnScroll",!0),i=t.getBoolean("inputBlurring",!0),a=t.getBoolean("scrollPadding",!0),l=new WeakMap,s=new WeakMap;function c(e){var t=(e.shadowRoot||e).querySelector("input"),i=e.closest("ion-content");if(t){if(i&&r&&!l.has(e)){var a=enableHideCaretOnScroll(e,t,i);l.set(e,a)}i&&o&&!s.has(e)&&(a=enableScrollAssist(e,t,i,n),s.set(e,a))}}i&&INPUT_BLURRING&&enableInputBlurring(e),a&&SCROLL_PADDING&&enableScrollPadding(e,n);for(var u=0,d=Array.from(e.querySelectorAll("ion-input"));u<d.length;u++)c(d[u]);e.body.addEventListener("ionInputDidLoad",function(e){c(e.target)}),e.body.addEventListener("ionInputDidUnload",function(e){var t,n;t=e.target,r&&((n=l.get(t))&&n(),l.delete(t)),o&&((n=s.get(t))&&n(),s.delete(t))})}

/***/ })

}]);
//# sourceMappingURL=5.js.map