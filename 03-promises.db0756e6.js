!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire5686;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequire5686=r);var u=r("iU1Pc");function i(e){var n=e.position,t=e.delays;return new Promise((function(e,o){var r=Math.random()>.3;setInterval((function(){r?e({position:n,delays:t}):o({position:n,delays:t})}),t)}))}({form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),btnSubmit:document.querySelector('button[type="submit"]')}).form.addEventListener("submit",(function(n){n.preventDefault();var t=function(e){var n={};return e.forEach((function(e,t){n[t]=e})),n}(new FormData(n.currentTarget));!function(n){for(var t=n.delay,o=n.amount,r=n.step,a=Number(t),c=Number(o),l=Number(r),s=1;s<=c;s+=1)i({position:s,delays:a}).then((function(n){var t=n.position,o=n.delays;return e(u).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o," ms"))})).catch((function(n){var t=n.position,o=n.delays;return e(u).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o," ms"))})),a+=l}({delay:t.delay,amount:t.amount,step:t.step})}))}();
//# sourceMappingURL=03-promises.db0756e6.js.map