/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	var $ = __webpack_require__(13);
	var LightGallery = __webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	
	angular.module('ngLightgallery', []).directive('lightGallery', lightGallery).factory('$lightGallery', lightGalleryService);
	
	lightGallery.$inject = ['$lightGallery'];
	
	function lightGallery($lightGallery) {
	  return {
	    restrict: 'EA',
	    link: link,
	    scope: {
	      lightGalleryConfig: '@'
	    }
	  };
	
	  function link(scope, element, attrs, ctrl) {
	    $lightGallery.LightGallery(element[0], attrs.lightGalleryConfig || $lightGallery.defaultConfig);
	  }
	}
	
	lightGalleryService.$inject = [];
	
	function lightGalleryService() {
	  return {
	    preview: preview,
	    LightGallery: LightGallery,
	    trigger: trigger,
	    defaultConfig: {
	      download: false,
	      mousewheel: true,
	      share: false
	    }
	  };
	
	  function trigger(el, event) {
	    if (document.createEvent) {
	      var evObj = document.createEvent('MouseEvents');
	      evObj.initEvent(event, true, false);
	      el.dispatchEvent(evObj);
	    } else if (document.createEventObject) {
	      el.fireEvent('on' + event);
	    }
	  }
	
	  function preview(images) {
	    if (!images) {
	      console.warn('请传入图片链接');
	      return;
	    }
	    if (typeof images === 'string') {
	      images = [images];
	    }
	
	    var div = $('<div></div>');
	    div.css({
	      width: 0,
	      height: 0,
	      overflow: 'hidden',
	      margin: 0,
	      padding: 0
	    });
	
	    $('body').append(div);
	
	    images.forEach(function (d) {
	      div.append('<div data-src="' + d + '"></div>');
	    });
	
	    this.LightGallery(div[0], this.defaultConfig);
	    this.trigger(div.find('div').eq(0).get(0), 'click');
	
	    div.bind('onBeforeClose', function (e) {
	      div.remove();
	    });
	  }
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!./lightgallery.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!./lightgallery.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\r\n  font-family: 'lg';\r\n  src: url(" + __webpack_require__(4) + ");\r\n  src: url(" + __webpack_require__(4) + ") format(\"embedded-opentype\"), url(" + __webpack_require__(5) + ") format(\"woff\"), url(" + __webpack_require__(6) + ") format(\"truetype\"), url(" + __webpack_require__(7) + ") format(\"svg\");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.lg-icon {\r\n  font-family: 'lg';\r\n  speak: none;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n  /* Better Font Rendering =========== */\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.lg-actions .lg-next, .lg-actions .lg-prev {\r\n  background-color: rgba(0, 0, 0, 0.45);\r\n  border-radius: 2px;\r\n  color: #999;\r\n  cursor: pointer;\r\n  display: block;\r\n  font-size: 22px;\r\n  margin-top: -10px;\r\n  padding: 8px 10px 9px;\r\n  position: absolute;\r\n  top: 50%;\r\n  z-index: 1080;\r\n}\r\n.lg-actions .lg-next.disabled, .lg-actions .lg-prev.disabled {\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n.lg-actions .lg-next:hover, .lg-actions .lg-prev:hover {\r\n  color: #FFF;\r\n}\r\n.lg-actions .lg-next {\r\n  right: 20px;\r\n}\r\n.lg-actions .lg-next:before {\r\n  content: \"\\E095\";\r\n}\r\n.lg-actions .lg-prev {\r\n  left: 20px;\r\n}\r\n.lg-actions .lg-prev:after {\r\n  content: \"\\E094\";\r\n}\r\n@keyframes lg-right-end {\r\n  0% {\r\n    left: 0;\r\n  }\r\n  50% {\r\n    left: -30px;\r\n  }\r\n  100% {\r\n    left: 0;\r\n  }\r\n}\r\n@keyframes lg-left-end {\r\n  0% {\r\n    left: 0;\r\n  }\r\n  50% {\r\n    left: 30px;\r\n  }\r\n  100% {\r\n    left: 0;\r\n  }\r\n}\r\n.lg-outer.lg-right-end .lg-object {\r\n  animation: lg-right-end 0.3s;\r\n  position: relative;\r\n}\r\n.lg-outer.lg-left-end .lg-object {\r\n  animation: lg-left-end 0.3s;\r\n  position: relative;\r\n}\r\n\r\n.lg-toolbar {\r\n  z-index: 1082;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.45);\r\n}\r\n.lg-toolbar .lg-icon {\r\n  color: #999;\r\n  cursor: pointer;\r\n  float: right;\r\n  font-size: 24px;\r\n  height: 47px;\r\n  line-height: 27px;\r\n  padding: 10px 0;\r\n  text-align: center;\r\n  width: 50px;\r\n  text-decoration: none !important;\r\n  outline: medium none;\r\n  transition: color 0.2s linear;\r\n}\r\n.lg-toolbar .lg-icon:hover {\r\n  color: #FFF;\r\n}\r\n.lg-toolbar .lg-close:after {\r\n  content: \"\\E070\";\r\n}\r\n.lg-toolbar .lg-download:after {\r\n  content: \"\\E0F2\";\r\n}\r\n\r\n.lg-sub-html {\r\n  background-color: rgba(0, 0, 0, 0.45);\r\n  bottom: 0;\r\n  color: #EEE;\r\n  font-size: 16px;\r\n  left: 0;\r\n  padding: 10px 40px;\r\n  position: fixed;\r\n  right: 0;\r\n  text-align: center;\r\n  z-index: 1080;\r\n}\r\n.lg-sub-html h4 {\r\n  margin: 0;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n}\r\n.lg-sub-html p {\r\n  font-size: 12px;\r\n  margin: 5px 0 0;\r\n}\r\n\r\n#lg-counter {\r\n  color: #999;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  padding-left: 20px;\r\n  padding-top: 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.lg-toolbar, .lg-prev, .lg-next {\r\n  opacity: 1;\r\n  transition: transform 0.35s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.35s cubic-bezier(0, 0, 0.25, 1) 0s, color 0.2s linear;\r\n}\r\n\r\n.lg-hide-items .lg-prev {\r\n  opacity: 0;\r\n  transform: translate3d(-10px, 0, 0);\r\n}\r\n.lg-hide-items .lg-next {\r\n  opacity: 0;\r\n  transform: translate3d(10px, 0, 0);\r\n}\r\n.lg-hide-items .lg-toolbar {\r\n  opacity: 0;\r\n  transform: translate3d(0, -10px, 0);\r\n}\r\n\r\nbody:not(.lg-from-hash) .lg-outer.lg-start-zoom .lg-object {\r\n  transform: scale3d(0.5, 0.5, 0.5);\r\n  opacity: 0;\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.25, 1) 0s, opacity 250ms cubic-bezier(0, 0, 0.25, 1) !important;\r\n  transform-origin: 50% 50%;\r\n}\r\nbody:not(.lg-from-hash) .lg-outer.lg-start-zoom .lg-item.lg-complete .lg-object {\r\n  transform: scale3d(1, 1, 1);\r\n  opacity: 1;\r\n}\r\n\r\n.lg-outer .lg-thumb-outer {\r\n  background-color: #0D0A0A;\r\n  bottom: 0;\r\n  position: absolute;\r\n  width: 100%;\r\n  z-index: 1080;\r\n  max-height: 350px;\r\n  transform: translate3d(0, 100%, 0);\r\n  transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1) 0s;\r\n}\r\n.lg-outer .lg-thumb-outer.lg-grab .lg-thumb-item {\r\n  cursor: -webkit-grab;\r\n  cursor: -o-grab;\r\n  cursor: -ms-grab;\r\n  cursor: grab;\r\n}\r\n.lg-outer .lg-thumb-outer.lg-grabbing .lg-thumb-item {\r\n  cursor: move;\r\n  cursor: -webkit-grabbing;\r\n  cursor: -o-grabbing;\r\n  cursor: -ms-grabbing;\r\n  cursor: grabbing;\r\n}\r\n.lg-outer .lg-thumb-outer.lg-dragging .lg-thumb {\r\n  transition-duration: 0s !important;\r\n}\r\n.lg-outer.lg-thumb-open .lg-thumb-outer {\r\n  transform: translate3d(0, 0%, 0);\r\n}\r\n.lg-outer .lg-thumb {\r\n  padding: 10px 0;\r\n  height: 100%;\r\n  margin-bottom: -5px;\r\n}\r\n.lg-outer .lg-thumb-item {\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  float: left;\r\n  overflow: hidden;\r\n  height: 100%;\r\n  border: 2px solid #FFF;\r\n  border-radius: 4px;\r\n  margin-bottom: 5px;\r\n}\r\n@media (min-width: 1025px) {\r\n  .lg-outer .lg-thumb-item {\r\n    transition: border-color 0.25s ease;\r\n  }\r\n}\r\n.lg-outer .lg-thumb-item.active, .lg-outer .lg-thumb-item:hover {\r\n  border-color: #a90707;\r\n}\r\n.lg-outer .lg-thumb-item img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n.lg-outer.lg-has-thumb .lg-item {\r\n  padding-bottom: 120px;\r\n}\r\n.lg-outer.lg-can-toggle .lg-item {\r\n  padding-bottom: 0;\r\n}\r\n.lg-outer.lg-pull-caption-up .lg-sub-html {\r\n  transition: bottom 0.25s ease;\r\n}\r\n.lg-outer.lg-pull-caption-up.lg-thumb-open .lg-sub-html {\r\n  bottom: 100px;\r\n}\r\n.lg-outer .lg-toggle-thumb {\r\n  background-color: #0D0A0A;\r\n  border-radius: 2px 2px 0 0;\r\n  color: #999;\r\n  cursor: pointer;\r\n  font-size: 24px;\r\n  height: 39px;\r\n  line-height: 27px;\r\n  padding: 5px 0;\r\n  position: absolute;\r\n  right: 20px;\r\n  text-align: center;\r\n  top: -39px;\r\n  width: 50px;\r\n}\r\n.lg-outer .lg-toggle-thumb:after {\r\n  content: \"\\E1FF\";\r\n}\r\n.lg-outer .lg-toggle-thumb:hover {\r\n  color: #FFF;\r\n}\r\n\r\n.lg-outer .lg-video-cont {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  max-width: 1140px;\r\n  max-height: 100%;\r\n  width: 100%;\r\n  padding: 0 5px;\r\n}\r\n.lg-outer .lg-video {\r\n  width: 100%;\r\n  height: 0;\r\n  padding-bottom: 56.25%;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.lg-outer .lg-video .lg-object {\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n}\r\n.lg-outer .lg-video .lg-video-play {\r\n  width: 84px;\r\n  height: 59px;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-left: -42px;\r\n  margin-top: -30px;\r\n  z-index: 1080;\r\n  cursor: pointer;\r\n}\r\n.lg-outer .lg-has-vimeo .lg-video-play {\r\n  background: url(" + __webpack_require__(8) + ") no-repeat scroll 0 0 transparent;\r\n}\r\n.lg-outer .lg-has-vimeo:hover .lg-video-play {\r\n  background: url(" + __webpack_require__(8) + ") no-repeat scroll 0 -58px transparent;\r\n}\r\n.lg-outer .lg-has-html5 .lg-video-play {\r\n  background: transparent url(" + __webpack_require__(9) + ") no-repeat scroll 0 0;\r\n  height: 64px;\r\n  margin-left: -32px;\r\n  margin-top: -32px;\r\n  width: 64px;\r\n  opacity: 0.8;\r\n}\r\n.lg-outer .lg-has-html5:hover .lg-video-play {\r\n  opacity: 1;\r\n}\r\n.lg-outer .lg-has-youtube .lg-video-play {\r\n  background: url(" + __webpack_require__(10) + ") no-repeat scroll 0 0 transparent;\r\n}\r\n.lg-outer .lg-has-youtube:hover .lg-video-play {\r\n  background: url(" + __webpack_require__(10) + ") no-repeat scroll 0 -60px transparent;\r\n}\r\n.lg-outer .lg-video-object {\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.lg-outer .lg-has-video .lg-video-object {\r\n  visibility: hidden;\r\n}\r\n.lg-outer .lg-has-video.lg-video-playing .lg-object, .lg-outer .lg-has-video.lg-video-playing .lg-video-play {\r\n  display: none;\r\n}\r\n.lg-outer .lg-has-video.lg-video-playing .lg-video-object {\r\n  visibility: visible;\r\n}\r\n\r\n.lg-progress-bar {\r\n  background-color: #333;\r\n  height: 5px;\r\n  left: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1083;\r\n  opacity: 0;\r\n  transition: opacity 0.08s ease 0s;\r\n}\r\n.lg-progress-bar .lg-progress {\r\n  background-color: #a90707;\r\n  height: 5px;\r\n  width: 0;\r\n}\r\n.lg-progress-bar.lg-start .lg-progress {\r\n  width: 100%;\r\n}\r\n.lg-show-autoplay .lg-progress-bar {\r\n  opacity: 1;\r\n}\r\n\r\n.lg-autoplay-button:after {\r\n  content: \"\\E01D\";\r\n}\r\n.lg-show-autoplay .lg-autoplay-button:after {\r\n  content: \"\\E01A\";\r\n}\r\n\r\n.lg-outer.lg-css3.lg-zoom-dragging .lg-item.lg-complete.lg-zoomable .lg-img-wrap, .lg-outer.lg-css3.lg-zoom-dragging .lg-item.lg-complete.lg-zoomable .lg-image {\r\n  transition-duration: 0s;\r\n}\r\n.lg-outer.lg-use-transition-for-zoom .lg-item.lg-complete.lg-zoomable .lg-img-wrap {\r\n  transition: transform 0.3s cubic-bezier(0, 0, 0.25, 1) 0s;\r\n}\r\n.lg-outer.lg-use-left-for-zoom .lg-item.lg-complete.lg-zoomable .lg-img-wrap {\r\n  transition: left 0.3s cubic-bezier(0, 0, 0.25, 1) 0s, top 0.3s cubic-bezier(0, 0, 0.25, 1) 0s;\r\n}\r\n.lg-outer .lg-item.lg-complete.lg-zoomable .lg-img-wrap {\r\n  transform: translate3d(0, 0, 0);\r\n /* -webkit-backface-visibility: hidden;\r\n  -moz-backface-visibility: hidden;\r\n  backface-visibility: hidden;*/\r\n}\r\n.lg-outer .lg-item.lg-complete.lg-zoomable .lg-image {\r\n  transform: scale3d(1, 1, 1);\r\n  transition: transform 0.3s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.15s !important;\r\n  transform-origin: 0 0;\r\n /* -webkit-backface-visibility: hidden;\r\n  -moz-backface-visibility: hidden;\r\n  backface-visibility: hidden;*/\r\n}\r\n\r\n#lg-zoom-in:after {\r\n  content: \"\\E311\";\r\n}\r\n\r\n#lg-actual-size {\r\n  font-size: 20px;\r\n}\r\n#lg-actual-size:after {\r\n  content: \"\\E033\";\r\n}\r\n\r\n#lg-zoom-out {\r\n  opacity: 0.5;\r\n  pointer-events: none;\r\n}\r\n#lg-zoom-out:after {\r\n  content: \"\\E312\";\r\n}\r\n.lg-zoomed #lg-zoom-out {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.lg-outer .lg-pager-outer {\r\n  bottom: 60px;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  text-align: center;\r\n  z-index: 1080;\r\n  height: 10px;\r\n}\r\n.lg-outer .lg-pager-outer.lg-pager-hover .lg-pager-cont {\r\n  overflow: visible;\r\n}\r\n.lg-outer .lg-pager-cont {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  position: relative;\r\n  vertical-align: top;\r\n  margin: 0 5px;\r\n}\r\n.lg-outer .lg-pager-cont:hover .lg-pager-thumb-cont {\r\n  opacity: 1;\r\n  transform: translate3d(0, 0, 0);\r\n}\r\n.lg-outer .lg-pager-cont.lg-pager-active .lg-pager {\r\n  box-shadow: 0 0 0 2px white inset;\r\n}\r\n.lg-outer .lg-pager-thumb-cont {\r\n  background-color: #fff;\r\n  color: #FFF;\r\n  bottom: 100%;\r\n  height: 83px;\r\n  left: 0;\r\n  margin-bottom: 20px;\r\n  margin-left: -60px;\r\n  opacity: 0;\r\n  padding: 5px;\r\n  position: absolute;\r\n  width: 120px;\r\n  border-radius: 3px;\r\n  transition: opacity 0.15s ease 0s, transform 0.15s ease 0s;\r\n  transform: translate3d(0, 5px, 0);\r\n}\r\n.lg-outer .lg-pager-thumb-cont img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.lg-outer .lg-pager {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.7) inset;\r\n  display: block;\r\n  height: 12px;\r\n  transition: box-shadow 0.3s ease 0s;\r\n  width: 12px;\r\n}\r\n.lg-outer .lg-pager:hover, .lg-outer .lg-pager:focus {\r\n  box-shadow: 0 0 0 8px white inset;\r\n}\r\n.lg-outer .lg-caret {\r\n  border-left: 10px solid transparent;\r\n  border-right: 10px solid transparent;\r\n  border-top: 10px dashed;\r\n  bottom: -10px;\r\n  display: inline-block;\r\n  height: 0;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  position: absolute;\r\n  vertical-align: middle;\r\n  width: 0;\r\n}\r\n\r\n.lg-fullscreen:after {\r\n  content: \"\\E20C\";\r\n}\r\n.lg-fullscreen-on .lg-fullscreen:after {\r\n  content: \"\\E20D\";\r\n}\r\n\r\n.lg-outer #lg-dropdown-overlay {\r\n  background-color: rgba(0, 0, 0, 0.25);\r\n  bottom: 0;\r\n  cursor: default;\r\n  left: 0;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: 1081;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transition: visibility 0s linear 0.18s, opacity 0.18s linear 0s;\r\n}\r\n.lg-outer.lg-dropdown-active .lg-dropdown, .lg-outer.lg-dropdown-active #lg-dropdown-overlay {\r\n  transition-delay: 0s;\r\n  transform: translate3d(0, 0px, 0);\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n.lg-outer.lg-dropdown-active #lg-share {\r\n  color: #FFF;\r\n}\r\n.lg-outer .lg-dropdown {\r\n  background-color: #fff;\r\n  border-radius: 2px;\r\n  font-size: 14px;\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 10px 0;\r\n  position: absolute;\r\n  right: 0;\r\n  text-align: left;\r\n  top: 50px;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translate3d(0, 5px, 0);\r\n  transition: transform 0.18s linear 0s, visibility 0s linear 0.5s, opacity 0.18s linear 0s;\r\n}\r\n.lg-outer .lg-dropdown:after {\r\n  content: \"\";\r\n  display: block;\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  border: 8px solid transparent;\r\n  border-bottom-color: #FFF;\r\n  right: 16px;\r\n  top: -16px;\r\n}\r\n.lg-outer .lg-dropdown > li:last-child {\r\n  margin-bottom: 0px;\r\n}\r\n.lg-outer .lg-dropdown > li:hover a, .lg-outer .lg-dropdown > li:hover .lg-icon {\r\n  color: #333;\r\n}\r\n.lg-outer .lg-dropdown a {\r\n  color: #333;\r\n  display: block;\r\n  white-space: pre;\r\n  padding: 4px 12px;\r\n  font-family: \"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n  font-size: 12px;\r\n}\r\n.lg-outer .lg-dropdown a:hover {\r\n  background-color: rgba(0, 0, 0, 0.07);\r\n}\r\n.lg-outer .lg-dropdown .lg-dropdown-text {\r\n  display: inline-block;\r\n  line-height: 1;\r\n  margin-top: -3px;\r\n  vertical-align: middle;\r\n}\r\n.lg-outer .lg-dropdown .lg-icon {\r\n  color: #333;\r\n  display: inline-block;\r\n  float: none;\r\n  font-size: 20px;\r\n  height: auto;\r\n  line-height: 1;\r\n  margin-right: 8px;\r\n  padding: 0;\r\n  vertical-align: middle;\r\n  width: auto;\r\n}\r\n.lg-outer #lg-share {\r\n  position: relative;\r\n}\r\n.lg-outer #lg-share:after {\r\n  content: \"\\E80D\";\r\n}\r\n.lg-outer #lg-share-facebook .lg-icon {\r\n  color: #3b5998;\r\n}\r\n.lg-outer #lg-share-facebook .lg-icon:after {\r\n  content: \"\\E901\";\r\n}\r\n.lg-outer #lg-share-twitter .lg-icon {\r\n  color: #00aced;\r\n}\r\n.lg-outer #lg-share-twitter .lg-icon:after {\r\n  content: \"\\E904\";\r\n}\r\n.lg-outer #lg-share-googleplus .lg-icon {\r\n  color: #dd4b39;\r\n}\r\n.lg-outer #lg-share-googleplus .lg-icon:after {\r\n  content: \"\\E902\";\r\n}\r\n.lg-outer #lg-share-pinterest .lg-icon {\r\n  color: #cb2027;\r\n}\r\n.lg-outer #lg-share-pinterest .lg-icon:after {\r\n  content: \"\\E903\";\r\n}\r\n\r\n.group {\r\n  *zoom: 1;\r\n}\r\n\r\n.group:before, .group:after {\r\n  display: table;\r\n  content: \"\";\r\n  line-height: 0;\r\n}\r\n\r\n.group:after {\r\n  clear: both;\r\n}\r\n\r\n.lg-outer {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1150;\r\n  opacity: 0;\r\n  transition: opacity 0.15s ease 0s;\r\n}\r\n.lg-outer * {\r\n  box-sizing: border-box;\r\n}\r\n.lg-outer.lg-visible {\r\n  opacity: 1;\r\n}\r\n.lg-outer.lg-css3 .lg-item.lg-prev-slide, .lg-outer.lg-css3 .lg-item.lg-next-slide, .lg-outer.lg-css3 .lg-item.lg-current {\r\n  transition-duration: inherit !important;\r\n  transition-timing-function: inherit !important;\r\n}\r\n.lg-outer.lg-css3.lg-dragging .lg-item.lg-prev-slide, .lg-outer.lg-css3.lg-dragging .lg-item.lg-next-slide, .lg-outer.lg-css3.lg-dragging .lg-item.lg-current {\r\n  transition-duration: 0s !important;\r\n  opacity: 1;\r\n}\r\n.lg-outer.lg-grab img.lg-object {\r\n  cursor: -webkit-grab;\r\n  cursor: -o-grab;\r\n  cursor: -ms-grab;\r\n  cursor: grab;\r\n}\r\n.lg-outer.lg-grabbing img.lg-object {\r\n  cursor: move;\r\n  cursor: -webkit-grabbing;\r\n  cursor: -o-grabbing;\r\n  cursor: -ms-grabbing;\r\n  cursor: grabbing;\r\n}\r\n.lg-outer .lg {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n.lg-outer .lg-inner {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  white-space: nowrap;\r\n}\r\n.lg-outer .lg-item {\r\n  background: url(" + __webpack_require__(11) + ") no-repeat scroll center center transparent;\r\n  display: none !important;\r\n}\r\n.lg-outer.lg-css3 .lg-prev-slide, .lg-outer.lg-css3 .lg-current, .lg-outer.lg-css3 .lg-next-slide {\r\n  display: inline-block !important;\r\n}\r\n.lg-outer.lg-css .lg-current {\r\n  display: inline-block !important;\r\n}\r\n.lg-outer .lg-item, .lg-outer .lg-img-wrap {\r\n  display: inline-block;\r\n  text-align: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.lg-outer .lg-item:before, .lg-outer .lg-img-wrap:before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  height: 50%;\r\n  width: 1px;\r\n  margin-right: -1px;\r\n}\r\n.lg-outer .lg-img-wrap {\r\n  position: absolute;\r\n  padding: 0 5px;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n}\r\n.lg-outer .lg-item.lg-complete {\r\n  background-image: none;\r\n}\r\n.lg-outer .lg-item.lg-current {\r\n  z-index: 1060;\r\n}\r\n.lg-outer .lg-image {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  width: auto !important;\r\n  height: auto !important;\r\n}\r\n.lg-outer.lg-show-after-load .lg-item .lg-object, .lg-outer.lg-show-after-load .lg-item .lg-video-play {\r\n  opacity: 0;\r\n  transition: opacity 0.15s ease 0s;\r\n}\r\n.lg-outer.lg-show-after-load .lg-item.lg-complete .lg-object, .lg-outer.lg-show-after-load .lg-item.lg-complete .lg-video-play {\r\n  opacity: 1;\r\n}\r\n.lg-outer .lg-empty-html {\r\n  display: none;\r\n}\r\n.lg-outer.lg-hide-download #lg-download {\r\n  display: none;\r\n}\r\n\r\n.lg-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 1140;\r\n  background-color: #000;\r\n  opacity: 0;\r\n  transition: opacity 0.15s ease 0s;\r\n}\r\n.lg-backdrop.in {\r\n  opacity: 1;\r\n}\r\n\r\n.lg-css3.lg-no-trans .lg-prev-slide, .lg-css3.lg-no-trans .lg-next-slide, .lg-css3.lg-no-trans .lg-current {\r\n  transition: none 0s ease 0s !important;\r\n}\r\n/*.lg-css3.lg-use-css3 .lg-item {\r\n  -webkit-backface-visibility: hidden;\r\n  -moz-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n.lg-css3.lg-use-left .lg-item {\r\n  -webkit-backface-visibility: hidden;\r\n  -moz-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}*/\r\n.lg-css3.lg-fade .lg-item {\r\n  opacity: 0;\r\n}\r\n.lg-css3.lg-fade .lg-item.lg-current {\r\n  opacity: 1;\r\n}\r\n.lg-css3.lg-fade .lg-item.lg-prev-slide, .lg-css3.lg-fade .lg-item.lg-next-slide, .lg-css3.lg-fade .lg-item.lg-current {\r\n  transition: opacity 0.1s ease 0s;\r\n}\r\n.lg-css3.lg-slide.lg-use-css3 .lg-item {\r\n  opacity: 0;\r\n}\r\n.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-prev-slide {\r\n  transform: translate3d(-100%, 0, 0);\r\n}\r\n.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-next-slide {\r\n  transform: translate3d(100%, 0, 0);\r\n}\r\n.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-current {\r\n  transform: translate3d(0, 0, 0);\r\n  opacity: 1;\r\n}\r\n.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-prev-slide, .lg-css3.lg-slide.lg-use-css3 .lg-item.lg-next-slide, .lg-css3.lg-slide.lg-use-css3 .lg-item.lg-current {\r\n  transition: transform 1s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.1s ease 0s;\r\n}\r\n.lg-css3.lg-slide.lg-use-left .lg-item {\r\n  opacity: 0;\r\n  position: absolute;\r\n  left: 0;\r\n}\r\n.lg-css3.lg-slide.lg-use-left .lg-item.lg-prev-slide {\r\n  left: -100%;\r\n}\r\n.lg-css3.lg-slide.lg-use-left .lg-item.lg-next-slide {\r\n  left: 100%;\r\n}\r\n.lg-css3.lg-slide.lg-use-left .lg-item.lg-current {\r\n  left: 0;\r\n  opacity: 1;\r\n}\r\n.lg-css3.lg-slide.lg-use-left .lg-item.lg-prev-slide, .lg-css3.lg-slide.lg-use-left .lg-item.lg-next-slide, .lg-css3.lg-slide.lg-use-left .lg-item.lg-current {\r\n  transition: left 1s cubic-bezier(0, 0, 0.25, 1) 0s, opacity 0.1s ease 0s;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,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"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIiA+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8bWV0YWRhdGE+DQo8anNvbj4NCjwhW0NEQVRBWw0Kew0KCSJmb250RmFtaWx5IjogImxnIiwNCgkibWFqb3JWZXJzaW9uIjogMSwNCgkibWlub3JWZXJzaW9uIjogMCwNCgkiZm9udFVSTCI6ICJodHRwczovL2dpdGh1Yi5jb20vc2FjaGluY2hvb2x1ci9saWdodGdhbGxlcnkuanMiLA0KCSJjb3B5cmlnaHQiOiAic2FjaGluIiwNCgkibGljZW5zZSI6ICJNTFQiLA0KCSJsaWNlbnNlVVJMIjogImh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQiLA0KCSJ2ZXJzaW9uIjogIlZlcnNpb24gMS4wIiwNCgkiZm9udElkIjogImxnIiwNCgkicHNOYW1lIjogImxnIiwNCgkic3ViRmFtaWx5IjogIlJlZ3VsYXIiLA0KCSJmdWxsTmFtZSI6ICJsZyIsDQoJImRlc2NyaXB0aW9uIjogIkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uIg0KfQ0KXV0+DQo8L2pzb24+DQo8L21ldGFkYXRhPg0KPGRlZnM+DQo8Zm9udCBpZD0ibGciIGhvcml6LWFkdi14PSIxMDI0Ij4NCjxmb250LWZhY2UgdW5pdHMtcGVyLWVtPSIxMDI0IiBhc2NlbnQ9Ijk2MCIgZGVzY2VudD0iLTY0IiAvPg0KPG1pc3NpbmctZ2x5cGggaG9yaXotYWR2LXg9IjEwMjQiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4MjA7IiBob3Jpei1hZHYteD0iNTEyIiBkPSIiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTAxYTsiIGdseXBoLW5hbWU9InBhdXNlX2NpcmNsZV9vdXRsaW5lIiBkYXRhLXRhZ3M9InBhdXNlX2NpcmNsZV9vdXRsaW5lIiBkPSJNNTU0IDI1Ni42Njd2MzQwaDg2di0zNDBoLTg2ek01MTIgODQuNjY3cTE0MCAwIDI0MSAxMDF0MTAxIDI0MS0xMDEgMjQxLTI0MSAxMDEtMjQxLTEwMS0xMDEtMjQxIDEwMS0yNDEgMjQxLTEwMXpNNTEyIDg1Mi42NjdxMTc2IDAgMzAxLTEyNXQxMjUtMzAxLTEyNS0zMDEtMzAxLTEyNS0zMDEgMTI1LTEyNSAzMDEgMTI1IDMwMSAzMDEgMTI1ek0zODQgMjU2LjY2N3YzNDBoODZ2LTM0MGgtODZ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGUwMWQ7IiBnbHlwaC1uYW1lPSJwbGF5X2NpcmNsZV9vdXRsaW5lIiBkYXRhLXRhZ3M9InBsYXlfY2lyY2xlX291dGxpbmUiIGQ9Ik01MTIgODQuNjY3cTE0MCAwIDI0MSAxMDF0MTAxIDI0MS0xMDEgMjQxLTI0MSAxMDEtMjQxLTEwMS0xMDEtMjQxIDEwMS0yNDEgMjQxLTEwMXpNNTEyIDg1Mi42NjdxMTc2IDAgMzAxLTEyNXQxMjUtMzAxLTEyNS0zMDEtMzAxLTEyNS0zMDEgMTI1LTEyNSAzMDEgMTI1IDMwMSAzMDEgMTI1ek00MjYgMjM0LjY2N3YzODRsMjU2LTE5MnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTAzMzsiIGdseXBoLW5hbWU9InN0YWNrLTIiIGRhdGEtdGFncz0ic3RhY2stMiIgZD0iTTM4NCA4NTMuMzM0aDQyNi42NjdxNTMgMCA5MC41LTM3LjV0MzcuNS05MC41di00MjYuNjY3cTAtNTMtMzcuNS05MC41dC05MC41LTM3LjVoLTQyNi42NjdxLTUzIDAtOTAuNSAzNy41dC0zNy41IDkwLjV2NDI2LjY2N3EwIDUzIDM3LjUgOTAuNXQ5MC41IDM3LjV6TTE3MC42NjcgNjc1LjMzNHYtNTQ3LjMzM3EwLTE3LjY2NyAxMi41LTMwLjE2N3QzMC4xNjctMTIuNWg1NDcuMzMzcS0xMy4zMzMtMzcuNjY3LTQ2LjMzMy02MS41dC03NC4zMzMtMjMuODMzaC00MjYuNjY3cS01MyAwLTkwLjUgMzcuNXQtMzcuNSA5MC41djQyNi42NjdxMCA0MS4zMzMgMjMuODMzIDc0LjMzM3Q2MS41IDQ2LjMzM3pNODEwLjY2NyA3NjhoLTQyNi42NjdxLTE3LjY2NyAwLTMwLjE2Ny0xMi41dC0xMi41LTMwLjE2N3YtNDI2LjY2N3EwLTE3LjY2NyAxMi41LTMwLjE2N3QzMC4xNjctMTIuNWg0MjYuNjY3cTE3LjY2NyAwIDMwLjE2NyAxMi41dDEyLjUgMzAuMTY3djQyNi42NjdxMCAxNy42NjctMTIuNSAzMC4xNjd0LTMwLjE2NyAxMi41eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlMDcwOyIgZ2x5cGgtbmFtZT0iY2xlYXIiIGRhdGEtdGFncz0iY2xlYXIiIGQ9Ik04MTAgNjY0LjY2N2wtMjM4LTIzOCAyMzgtMjM4LTYwLTYwLTIzOCAyMzgtMjM4LTIzOC02MCA2MCAyMzggMjM4LTIzOCAyMzggNjAgNjAgMjM4LTIzOCAyMzggMjM4eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlMDk0OyIgZ2x5cGgtbmFtZT0iYXJyb3ctbGVmdCIgZGF0YS10YWdzPSJhcnJvdy1sZWZ0IiBkPSJNNDI2LjY2NyA3NjhxMTcuNjY3IDAgMzAuMTY3LTEyLjV0MTIuNS0zMC4xNjdxMC0xOC0xMi42NjctMzAuMzMzbC0yMjUuNjY3LTIyNS42NjdoNjY1cTE3LjY2NyAwIDMwLjE2Ny0xMi41dDEyLjUtMzAuMTY3LTEyLjUtMzAuMTY3LTMwLjE2Ny0xMi41aC02NjVsMjI1LjY2Ny0yMjUuNjY3cTEyLjY2Ny0xMi4zMzMgMTIuNjY3LTMwLjMzMyAwLTE3LjY2Ny0xMi41LTMwLjE2N3QtMzAuMTY3LTEyLjVxLTE4IDAtMzAuMzMzIDEyLjMzM2wtMjk4LjY2NyAyOTguNjY3cS0xMi4zMzMgMTMtMTIuMzMzIDMwLjMzM3QxMi4zMzMgMzAuMzMzbDI5OC42NjcgMjk4LjY2N3ExMi42NjcgMTIuMzMzIDMwLjMzMyAxMi4zMzN6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGUwOTU7IiBnbHlwaC1uYW1lPSJhcnJvdy1yaWdodCIgZGF0YS10YWdzPSJhcnJvdy1yaWdodCIgZD0iTTU5Ny4zMzMgNzY4cTE4IDAgMzAuMzMzLTEyLjMzM2wyOTguNjY3LTI5OC42NjdxMTIuMzMzLTEyLjMzMyAxMi4zMzMtMzAuMzMzdC0xMi4zMzMtMzAuMzMzbC0yOTguNjY3LTI5OC42NjdxLTEyLjMzMy0xMi4zMzMtMzAuMzMzLTEyLjMzMy0xOC4zMzMgMC0zMC41IDEyLjE2N3QtMTIuMTY3IDMwLjVxMCAxOCAxMi4zMzMgMzAuMzMzbDIyNiAyMjUuNjY3aC02NjVxLTE3LjY2NyAwLTMwLjE2NyAxMi41dC0xMi41IDMwLjE2NyAxMi41IDMwLjE2NyAzMC4xNjcgMTIuNWg2NjVsLTIyNiAyMjUuNjY3cS0xMi4zMzMgMTIuMzMzLTEyLjMzMyAzMC4zMzMgMCAxOC4zMzMgMTIuMTY3IDMwLjV0MzAuNSAxMi4xNjd6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGUwZjI7IiBnbHlwaC1uYW1lPSJ2ZXJ0aWNhbF9hbGlnbl9ib3R0b20iIGRhdGEtdGFncz0idmVydGljYWxfYWxpZ25fYm90dG9tIiBkPSJNMTcwIDEyOC42NjdoNjg0di04NmgtNjg0djg2ek02ODIgMzg0LjY2N2wtMTcwLTE3Mi0xNzAgMTcyaDEyOHY0MjZoODR2LTQyNmgxMjh6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGUxZmY7IiBnbHlwaC1uYW1lPSJhcHBzIiBkYXRhLXRhZ3M9ImFwcHMiIGQ9Ik02ODIgODQuNjY3djE3MmgxNzJ2LTE3MmgtMTcyek02ODIgMzQwLjY2N3YxNzJoMTcydi0xNzJoLTE3MnpNNDI2IDU5Ni42Njd2MTcyaDE3MnYtMTcyaC0xNzJ6TTY4MiA3NjguNjY3aDE3MnYtMTcyaC0xNzJ2MTcyek00MjYgMzQwLjY2N3YxNzJoMTcydi0xNzJoLTE3MnpNMTcwIDM0MC42Njd2MTcyaDE3MnYtMTcyaC0xNzJ6TTE3MCA4NC42Njd2MTcyaDE3MnYtMTcyaC0xNzJ6TTQyNiA4NC42Njd2MTcyaDE3MnYtMTcyaC0xNzJ6TTE3MCA1OTYuNjY3djE3MmgxNzJ2LTE3MmgtMTcyeiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlMjBjOyIgZ2x5cGgtbmFtZT0iZnVsbHNjcmVlbiIgZGF0YS10YWdzPSJmdWxsc2NyZWVuIiBkPSJNNTk4IDcyNC42NjdoMjEydi0yMTJoLTg0djEyOGgtMTI4djg0ek03MjYgMjEyLjY2N3YxMjhoODR2LTIxMmgtMjEydjg0aDEyOHpNMjE0IDUxMi42Njd2MjEyaDIxMnYtODRoLTEyOHYtMTI4aC04NHpNMjk4IDM0MC42Njd2LTEyOGgxMjh2LTg0aC0yMTJ2MjEyaDg0eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlMjBkOyIgZ2x5cGgtbmFtZT0iZnVsbHNjcmVlbl9leGl0IiBkYXRhLXRhZ3M9ImZ1bGxzY3JlZW5fZXhpdCIgZD0iTTY4MiA1OTYuNjY3aDEyOHYtODRoLTIxMnYyMTJoODR2LTEyOHpNNTk4IDEyOC42Njd2MjEyaDIxMnYtODRoLTEyOHYtMTI4aC04NHpNMzQyIDU5Ni42Njd2MTI4aDg0di0yMTJoLTIxMnY4NGgxMjh6TTIxNCAyNTYuNjY3djg0aDIxMnYtMjEyaC04NHYxMjhoLTEyOHoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTMxMTsiIGdseXBoLW5hbWU9Inpvb21faW4iIGRhdGEtdGFncz0iem9vbV9pbiIgZD0iTTUxMiA1MTIuNjY3aC04NnYtODZoLTQydjg2aC04NnY0Mmg4NnY4Nmg0MnYtODZoODZ2LTQyek00MDYgMzQwLjY2N3E4MCAwIDEzNiA1NnQ1NiAxMzYtNTYgMTM2LTEzNiA1Ni0xMzYtNTYtNTYtMTM2IDU2LTEzNiAxMzYtNTZ6TTY2MiAzNDAuNjY3bDIxMi0yMTItNjQtNjQtMjEyIDIxMnYzNGwtMTIgMTJxLTc2LTY2LTE4MC02Ni0xMTYgMC0xOTcgODB0LTgxIDE5NiA4MSAxOTcgMTk3IDgxIDE5Ni04MSA4MC0xOTdxMC0xMDQtNjYtMTgwbDEyLTEyaDM0eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlMzEyOyIgZ2x5cGgtbmFtZT0iem9vbV9vdXQiIGRhdGEtdGFncz0iem9vbV9vdXQiIGQ9Ik0yOTggNTU0LjY2N2gyMTR2LTQyaC0yMTR2NDJ6TTQwNiAzNDAuNjY3cTgwIDAgMTM2IDU2dDU2IDEzNi01NiAxMzYtMTM2IDU2LTEzNi01Ni01Ni0xMzYgNTYtMTM2IDEzNi01NnpNNjYyIDM0MC42NjdsMjEyLTIxMi02NC02NC0yMTIgMjEydjM0bC0xMiAxMnEtNzYtNjYtMTgwLTY2LTExNiAwLTE5NyA4MHQtODEgMTk2IDgxIDE5NyAxOTcgODEgMTk2LTgxIDgwLTE5N3EwLTEwNC02Ni0xODBsMTItMTJoMzR6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU4MGQ7IiBnbHlwaC1uYW1lPSJzaGFyZSIgZGF0YS10YWdzPSJzaGFyZSIgZD0iTTc2OCAyNTIuNjY3YzY4IDAgMTI0LTU2IDEyNC0xMjRzLTU2LTEyNi0xMjQtMTI2LTEyNCA1OC0xMjQgMTI2YzAgMTAgMCAyMCAyIDI4bC0zMDIgMTc2Yy0yNC0yMi01NC0zNC04OC0zNC03MCAwLTEyOCA1OC0xMjggMTI4czU4IDEyOCAxMjggMTI4YzM0IDAgNjQtMTIgODgtMzRsMzAwIDE3NGMtMiAxMC00IDIwLTQgMzAgMCA3MCA1OCAxMjggMTI4IDEyOHMxMjgtNTggMTI4LTEyOC01OC0xMjgtMTI4LTEyOGMtMzQgMC02NCAxNC04OCAzNmwtMzAwLTE3NmMyLTEwIDQtMjAgNC0zMHMtMi0yMC00LTMwbDMwNC0xNzZjMjIgMjAgNTIgMzIgODQgMzJ6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDE7IiBnbHlwaC1uYW1lPSJmYWNlYm9vay13aXRoLWNpcmNsZSIgZGF0YS10YWdzPSJmYWNlYm9vay13aXRoLWNpcmNsZSIgZD0iTTUxMiA5NTIuMzJjLTI3MS40NjIgMC00OTEuNTItMjIwLjA1OC00OTEuNTItNDkxLjUyczIyMC4wNTgtNDkxLjUyIDQ5MS41Mi00OTEuNTIgNDkxLjUyIDIyMC4wNTggNDkxLjUyIDQ5MS41Mi0yMjAuMDU4IDQ5MS41Mi00OTEuNTIgNDkxLjUyek02MjguNDI5IDYxMi42NTloLTczLjg4MmMtOC43NTUgMC0xOC40ODMtMTEuNTItMTguNDgzLTI2LjgyOXYtNTMuMzVoOTIuNDE2bC0xMy45NzgtNzYuMDgzaC03OC40Mzh2LTIyOC40MDNoLTg3LjE5NHYyMjguNDAzaC03OS4xMDR2NzYuMDgzaDc5LjEwNHY0NC43NDljMCA2NC4yMDUgNDQuNTQ0IDExNi4zNzggMTA1LjY3NyAxMTYuMzc4aDczLjg4MnYtODAuOTQ3eiIgLz4NCjxnbHlwaCB1bmljb2RlPSImI3hlOTAyOyIgZ2x5cGgtbmFtZT0iZ29vZ2xlLXdpdGgtY2lyY2xlIiBkYXRhLXRhZ3M9Imdvb2dsZSstd2l0aC1jaXJjbGUiIGQ9Ik01MTIgOTUyLjMyYy0yNzEuNDYyIDAtNDkxLjUyLTIyMC4wNTgtNDkxLjUyLTQ5MS41MnMyMjAuMDU4LTQ5MS41MiA0OTEuNTItNDkxLjUyIDQ5MS41MiAyMjAuMDU4IDQ5MS41MiA0OTEuNTItMjIwLjA1OCA0OTEuNTItNDkxLjUyIDQ5MS41MnpNNDgzLjY4NiAyNDkuODA1Yy0zMC44NzQtMTUuMDAyLTY0LjEwMi0xNi41ODktNzYuOTU0LTE2LjU4OS0yLjQ1OCAwLTMuODQgMC0zLjg0IDBzLTEuMTc4IDAtMi43NjUgMGMtMjAuMDcwIDAtMTE5Ljk2MiA0LjYwOC0xMTkuOTYyIDk1LjU5IDAgODkuMzk1IDEwOC44IDk2LjQxIDE0Mi4xMzEgOTYuNDFoMC44N2MtMTkuMjUxIDI1LjcwMi0xNS4yNTggNTEuNjEtMTUuMjU4IDUxLjYxLTEuNjktMC4xMDItNC4xNDctMC4yMDUtNy4xNjgtMC4yMDUtMTIuNTQ0IDAtMzYuNzYyIDEuOTk3LTU3LjU0OSAxNS40MTEtMjUuNDk4IDE2LjM4NC0zOC40IDQ0LjI4OC0zOC40IDgyLjg5MyAwIDEwOS4xMDcgMTE5LjE0MiAxMTMuNTEgMTIwLjMyIDExMy42MTNoMTE4Ljk4OXYtMi42MTFjMC0xMy4zMTItMjMuOTEtMTUuOTIzLTQwLjE5Mi0xOC4xMjUtNS41My0wLjgxOS0xNi42NC0xLjg5NC0xOS43NjMtMy40ODIgMzAuMTU3LTE2LjEyOCAzNS4wMjEtNDEuNDIxIDM1LjAyMS03OS4xMDQgMC00Mi45MDYtMTYuNzk0LTY1LjU4Ny0zNC42MTEtODEuNTEtMTEuMDU5LTkuODgyLTE5LjcxMi0xNy42MTMtMTkuNzEyLTI4LjAwNiAwLTEwLjE4OSAxMS44NzgtMjAuNTgyIDI1LjcwMi0zMi43MTcgMjIuNTc5LTE5LjkxNyA1My41NTUtNDcuMDAyIDUzLjU1NS05Mi43MjMgMC00Ny4yNTgtMjAuMzI2LTgxLjA1MC02MC40MTYtMTAwLjQ1NHpNNzQyLjQgNDYwLjhoLTc2Ljh2LTc2LjhoLTUxLjJ2NzYuOGgtNzYuOHY1MS4yaDc2Ljh2NzYuOGg1MS4ydi03Ni44aDc2Ljh2LTUxLjJ6TTQyMS4wMTggNDAxLjkyYy0yLjY2MiAwLTUuMzI1LTAuMTAyLTguMDM4LTAuMzA3LTIyLjczMy0xLjY5LTQzLjcyNS0xMC4xODktNTguODgtMjQuMDEzLTE1LjA1My0xMy42MTktMjIuNzMzLTMwLjgyMi0yMS42NTgtNDguMTc5IDIuMzA0LTM2LjQwMyA0MS4zNy01Ny43MDIgODguODMyLTU0LjMyMyA0Ni42OTQgMy4zNzkgNzcuODI0IDMwLjMxIDc1LjU3MSA2Ni43MTQtMi4xNSAzNC4yMDItMzEuODk4IDYwLjEwOS03NS44MjcgNjAuMTA5ek00NjUuNzY2IDU5OS44MDhjLTEyLjM5IDQzLjUyLTMyLjM1OCA1Ni40MjItNjMuMzg2IDU2LjQyMi0zLjMyOCAwLTYuNzA3LTAuNTEyLTkuOTMzLTEuMzgyLTEzLjQ2Ni0zLjg0LTI0LjE2Ni0xNS4wNTMtMzAuMTA2LTMxLjc0NC02LjA5My0xNi44OTYtNi40NTEtMzQuNTA5LTEuMjI5LTU0LjU3OSA5LjQ3Mi0zNS44OTEgMzQuOTctNjEuOTAxIDYwLjY3Mi02MS45MDEgMy4zNzkgMCA2Ljc1OCAwLjQxIDkuOTMzIDEuMzgyIDI4LjEwOSA3Ljg4NSA0NS43MjIgNTAuNzkgMzQuMDQ4IDkxLjgwMnoiIC8+DQo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMzsiIGdseXBoLW5hbWU9InBpbnRlcmVzdC13aXRoLWNpcmNsZSIgZGF0YS10YWdzPSJwaW50ZXJlc3Qtd2l0aC1jaXJjbGUiIGQ9Ik01MTIgOTUyLjMyYy0yNzEuNDYyIDAtNDkxLjUyLTIyMC4wNTgtNDkxLjUyLTQ5MS41MnMyMjAuMDU4LTQ5MS41MiA0OTEuNTItNDkxLjUyIDQ5MS41MiAyMjAuMDU4IDQ5MS41MiA0OTEuNTItMjIwLjA1OCA0OTEuNTItNDkxLjUyIDQ5MS41MnpNNTQ1LjYzOCAzNDQuMzJjLTMxLjUzOSAyLjQwNi00NC43NDkgMTguMDIyLTY5LjQyNyAzMi45NzMtMTMuNTY4LTcxLjIxOS0zMC4xNTctMTM5LjUyLTc5LjMwOS0xNzUuMjA2LTE1LjIwNiAxMDcuNzI1IDIyLjIyMSAxODguNTE4IDM5LjYyOSAyNzQuMzgxLTI5LjY0NSA0OS45MiAzLjUzMyAxNTAuMzIzIDY2LjA5OSAxMjUuNjQ1IDc2Ljk1NC0zMC41MTUtNjYuNjYyLTE4NS42IDI5Ljc0Ny0yMDUuMDA1IDEwMC42NTktMjAuMTczIDE0MS43NzMgMTc0LjY5NCA3OS4zNiAyMzcuOTc4LTkwLjIxNCA5MS40OTQtMjYyLjUwMiAyLjA5OS0yNDEuMzA2LTEyOC44NyA1LjEyLTMyIDM4LjI0Ni00MS43MjggMTMuMjEtODUuOTE0LTU3LjcwMiAxMi44LTc0Ljk1NyA1OC4zMTctNzIuNzA0IDExOC45ODkgMy41MzMgOTkuMzI4IDg5LjI0MiAxNjguOTA5IDE3NS4xNTUgMTc4LjQ4MyAxMDguNjk4IDEyLjA4MyAyMTAuNjg4LTM5Ljg4NSAyMjQuODE5LTE0Mi4xODIgMTUuODIxLTExNS40MDUtNDkuMTAxLTI0MC4yODItMTY1LjI3NC0yMzEuMjd6IiAvPg0KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDQ7IiBnbHlwaC1uYW1lPSJ0d2l0dGVyLXdpdGgtY2lyY2xlIiBkYXRhLXRhZ3M9InR3aXR0ZXItd2l0aC1jaXJjbGUiIGQ9Ik01MTIgOTUyLjMyYy0yNzEuNDYyIDAtNDkxLjUyLTIyMC4wNTgtNDkxLjUyLTQ5MS41MnMyMjAuMDU4LTQ5MS41MiA0OTEuNTItNDkxLjUyIDQ5MS41MiAyMjAuMDU4IDQ5MS41MiA0OTEuNTItMjIwLjA1OCA0OTEuNTItNDkxLjUyIDQ5MS41MnpNNzExLjkzNiA1NDkuNjgzYzAuMjA1LTQuMTk4IDAuMjU2LTguMzk3IDAuMjU2LTEyLjQ5MyAwLTEyOC05Ny4zMzEtMjc1LjUwNy0yNzUuNDA1LTI3NS41MDctNTQuNjgyIDAtMTA1LjU3NCAxNS45NzQtMTQ4LjM3OCA0My41MiA3LjUyNi0wLjkyMiAxNS4yNTgtMS4yOCAyMy4wOTEtMS4yOCA0NS4zNjMgMCA4Ny4wOTEgMTUuNDExIDEyMC4yMTggNDEuNDIxLTQyLjM0MiAwLjgxOS03OC4wODAgMjguNzc0LTkwLjQxOSA2Ny4xNzQgNS44ODgtMS4wNzUgMTEuOTMtMS42OSAxOC4xNzYtMS42OSA4LjgwNiAwIDE3LjQwOCAxLjE3OCAyNS40OTggMy4zNzktNDQuMjg4IDguOTA5LTc3LjY3IDQ4LjAyNi03Ny42NyA5NC45MjV2MS4xNzhjMTMuMDU2LTcuMjE5IDI4LjAwNi0xMS42MjIgNDMuODc4LTEyLjEzNC0yNi4wMTAgMTcuNDA4LTQzLjA1OSA0Ny4wMDItNDMuMDU5IDgwLjY0IDAgMTcuNzE1IDQuNzYyIDM0LjQwNiAxMy4xMDcgNDguNjkxIDQ3Ljc3LTU4LjU3MyAxMTkuMDQwLTk3LjA3NSAxOTkuNTI2LTEwMS4yMjItMS42OSA3LjExNy0yLjUwOSAxNC40OS0yLjUwOSAyMi4xMTggMCA1My40MDIgNDMuMzE1IDk2LjgxOSA5Ni44MTkgOTYuODE5IDI3LjgwMiAwIDUyLjk5Mi0xMS43NzYgNzAuNjU2LTMwLjYxOCAyMi4wNjcgNC40MDMgNDIuNzUyIDEyLjM5IDYxLjQ0IDIzLjUwMS03LjIxOS0yMi41NzktMjIuNTI4LTQxLjU3NC00Mi41NDctNTMuNjA2IDE5LjYxIDIuNDA2IDM4LjI0NiA3LjU3OCA1NS42MDMgMTUuMzA5LTEyLjk1NC0xOS40MDUtMjkuMzg5LTM2LjUwNi00OC4yODItNTAuMTI1eiIgLz4NCjwvZm9udD48L2RlZnM+PC9zdmc+"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAB2CAYAAABWD7T8AAAFkUlEQVR4Ae3cA3BdeR/G8bqNk9dcu26zGdRee7e2YtcZ1A3WHHVHtY04tcNFbffGt3tx8uwzSOYEE5z/6US/Z+azKIJvfA/ayBpnHuRH4ymGYim+BUugWIqh8eRH7qQ8L4qgdLITWikbpVEYeZKhvUO5BFFJNr1BDVokOQmiRnYKo3otnDSCqJVGIVTr3pCYDeKgYbV9AcoiNIg4Sx5UbYEEQ8QsqjRXSiIYIg6QC1WsJxUSDBEW6kYVe5cglLxFFfMnNJZOnTq1hKAzqGJRhMbStWtXrF+/Hj179mzOQcOpYtGExvLaa69B0zRYLBZERESgY8eOzTFoRJMJ+uqrr6KgoADlS0xMRN++fSWoStDCwkLoV1JSgoULF8LDw0OCKgfVLS0tDf3795egykF1s1qtWLJkCby9vSWoclDdjh8/juHDh0tQ5aC6lZaWIi4uDj4+PhJUNah+2dnZeOuttySoalD9bDYbvvvuO/z973+XoKpB9Tt//jw+/PBDCaoYtNpWr16Np59+WoLqgirv8uXLGD9+PNq2bStBzdzatWvx0ksvSVAzd+fOHcyaNUuCmrVr165h9OjRElR1mqbhxx9/xH/+8x/5kFddbm6uyjf8ElT/I+kXX3xhxgMoEvTkyZMYNmyY6sshQfl3sHTpUri5uam+DBI0PT0dAwYMUH3eErS4uBgLFiww49CIBD148CB8fX1Vn58ELT+87OLiovq8JOjOnTvB4/aqz0OC3r59G/7+/mjXrp3q05egGzZsUH2kSIJqmoZLly5h8uTJ5b8uQVVOFvv+++/xwgsvmPH0JGj79u2r/ZoEFRHmnh8qws09g1nMkHPsn+A59j2ogGCIeERdqWKulEgwROynLsTJ51EzzKRq86RMQoOIM+RONW4EOQiiXuw0lGpdCGmEWgknBVK9FlbrPUaEjYKpQXujxuvnRSaNIENzpxBKISuhlbJSMgWROynPjXxpNM2nFRTbwq2g+TSafMmNZE1y7bdlepAfjacYiqX4FiyBYimGxpMfuVObutT1B7wogtLJTmilbJRGYeRpNOg7lEuoRGTTGw0NGklOQo2EncLqGzScNEKthEYhdQV9o0ExhYOGUY1BvSiL0CDiLHnUFDSQYIiYVTWoKyURDBEHyEUftCcVEgwRFuqmD/ouQYl4Sx/Un9BYXHZktYSgM/RBowiNpXvSb9hwMx+9U35vzkHD9UGjGzuoVgZY7E5EZd9Cl+b5HhvRZIJ2Y9ACxixf0v0ivJ6q9N4qQQsdTuhX4tQQk3cb3ruyJahqUP3SHxRjYMYFCaoaVD+rU8PS3+7ir7tzJKhqUP1OWEox8vAlCaoaVL9Sp4b48/fwN/X3VgmqX07hY7xz9LIEVQ2qn00rw/eXHuBfe3MlqGpQ/c4X/4GPj1+RoIpBq+3na4/w3IFfJKg+qOoul9ow8fQ1dJCgTpi5dTfy8WrirxLUzN157ID/uRsS1Kxds9ow9uRVCao6rQz46fJD/H9fnnzIqy6vSO0bfgmq+5H0y4v3zXgARYKespRixOGLqi+HBOXfwTI+rOe5U/lBaAma8bAEg9QfeJagxQ4Ni8w5NCJBE+8VwS/1vOrzk6Dlh5fd1T9XStBddwrB4/aqz0OC3n5sR2DmDXTcrvz0JejGm8qPFElQrQy4VGLD1DPXVZ+eBO3OoD9cfoCXD5ryXilBO22vfnKYBBUR5p4fKsLNPYNZzHiC59jLOfY9qIBgiHhEXatep5RIMETspy76oGqfR8XMmi5N9KRMQoOIM+SuD6o3ghyEehF2GlrX9fIhpBFqJZwUWN87OoTVeo8RYaPght5z5I0ar58XmTTC6F1x3CmEUshKaKWslExB5K5ym6FybuRLo2k+raDYFm4FzafR5EtuBu7bpEiYHVT8CRH1mIv9VAvpAAAAAElFTkSuQmCC"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC+klEQVR4Ad3YAUcEeRjH8RktYLdDsdli3b2GkqreQrRXB4QiAZWoSlS2KiW9hRDhSkFVHEsApHC62w7QZnWh7ZKg7Z77SpZMXdXOzPOf+fEBoH6e3+7sWD6kFl1YwA5OkccDnl48II8TbGMenUggkGnCKs4hZcpiBY0wOpUYdv7TrspiCDEYkx+Qxj8QnxQwrV2EjT5cQ5RcoRc2fM2POIIYIoMkfMkvuIMY5hYpr09+EWK4WS8mEcEGJCDWEXHzn9+GBMyWGyXY2IAE1Hq5c1iEBNxcOZ/2EhIpfCk/4Q4SErdIfmX3R5CQycDGh+mDhFTPZ37YXENC6goxvJs0xG2JREJs2zalhCm8mUqvftL29/fL4eGhVFdXm1BAATE4MgzxqgAhl5eX0tbWZkIJg3DkL68LEFIsFmViYkJ7En/gVZogPhRQigGTaEApq34XYMAkllHKuUIB2pM4w3NqISoF6E8iDqtLrQD9SaRgLSgX4JjE+Pi4X5NIw9rRL8CZg4MDPyaxCetUrQD9SRzDyqsVoD+JHKwHtQL0J3EP68ngAhyTaG1tdfNvKwaqgFwu53oBgZnA/v6+ZxPIm1zA4+OjjI2NefoheGJqAZy8tLS0eP41uG1iAXt7e1JVVeXLg9C8bgHOkx8dHfX1UbhToQClk3fogJVQKEDp5B3ieE5WoQCFk3/ld5SyolHAxcWFNDc3a70SW0IpjX4XsLu7Wzp5JfV4lawfBXDyMjIyov1a/AyODHlYgPLJOwzAkRgKXhWgf/IlN4jizUxD3FZTU+M4eUWTeDeV+BsSUnlE8b/phYRUNz6MjQwkZH7Dp5PELSQkblCHLyUFCYF/0Y5vZRYScDP4dmysQwJqDWUngi1IwPyKCriSSMAuYQ0VcDU25gLwgTcDT/OzoV+RN2iHL0kiY9hDTh18jY0eXCk/23dDNTFMoeDzuU8iCmMSwyD+9PhNzgCiMDoNWMaZS29vl1CPQCaOFNLYxDFyuEfxxT1yOMYm0uhAHJ7mP8ZCuxmI6VJBAAAAAElFTkSuQmCC"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "data:image/gif;base64,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"

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.1
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-22T19:11Z
	 */
	
	(function( global, factory ) {
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];
	
	var document = window.document;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		version = "2.2.1",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},
	
		isPlainObject: function( obj ) {
	
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
	
			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;
	
			code = jQuery.trim( code );
	
			if ( code ) {
	
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
	
					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval
	
					indirect( code );
				}
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
	
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
	
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add( function() {
	
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}
	
			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	} );
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
	
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );
	
			} else {
	
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};
	
	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		register: function( owner, initial ) {
			var value = initial || {};
	
			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;
	
			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {
	
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				stored = this.get( owner, key );
	
				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key === undefined ) {
				this.register( owner );
	
			} else {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
	
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
	
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}
	
				i = name.length;
	
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
	
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data, camelKey;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||
	
						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );
	
					if ( data !== undefined ) {
						return data;
					}
	
					camelKey = jQuery.camelCase( key );
	
					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {
	
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );
	
					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );
	
					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
	
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([\w:-]+)/ );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}
	
			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	
		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
	
		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,
	
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	
	
	var iframe,
		elemdisplay = {
	
			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			display = jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	var documentElement = document.documentElement;
	
	
	
	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =
	
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
		}
	
		jQuery.extend( support, {
			pixelPosition: function() {
	
				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
	
				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
	
				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {
	
				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );
	
				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
	
					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );
	
				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );
	
				documentElement.removeChild( container );
				div.removeChild( marginDiv );
	
				return ret;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;
	
		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}
	
		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
			// If we already have the right measurement, avoid augmentation
			4 :
	
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {
	
			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
	
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
	
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}
	
			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;
	
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		window.clearInterval( timerId );
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
	
						// Set corresponding property to false
						elem[ propName ] = false;
					}
	
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
	
						// Handle most common string cases
						ret.replace( rreturn, "" ) :
	
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					// Support: IE<11
					// option.value not trimmed (#14858)
					return jQuery.trim( elem.value );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
								jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
	
					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);
	
			jQuery.event.trigger( e, null, elem );
	
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// The jqXHR state
				state = 0,
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
	
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
	
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}
	
			if ( this[ 0 ] ) {
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );
	
	
	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {
	
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};
	
	
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
	
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8+
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		context = context || ( support.createHTMLDocument ?
			document.implementation.createHTMLDocument( "" ) :
			document );
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( self, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	return jQuery;
	}));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**!
	 * lightgallery.js | 1.0.1 | December 22nd 2016
	 * http://sachinchoolur.github.io/lightgallery.js/
	 * Copyright (c) 2016 Sachin N; 
	 * @license GPLv3 
	 */(function (f) {
	    if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
	        module.exports = f();
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        var g;if (typeof window !== "undefined") {
	            g = window;
	        } else if (typeof global !== "undefined") {
	            g = global;
	        } else if (typeof self !== "undefined") {
	            g = self;
	        } else {
	            g = this;
	        }g.Lightgallery = f();
	    }
	})(function () {
	    var define, module, exports;return function e(t, n, r) {
	        function s(o, u) {
	            if (!n[o]) {
	                if (!t[o]) {
	                    var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
	                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
	                    var n = t[o][1][e];return s(n ? n : e);
	                }, l, l.exports, e, t, n, r);
	            }return n[o].exports;
	        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
	            s(r[o]);
	        }return s;
	    }({ 1: [function (require, module, exports) {
	            (function (global, factory) {
	                if (typeof define === "function" && define.amd) {
	                    define(['exports'], factory);
	                } else if (typeof exports !== "undefined") {
	                    factory(exports);
	                } else {
	                    var mod = {
	                        exports: {}
	                    };
	                    factory(mod.exports);
	                    global.lgUtils = mod.exports;
	                }
	            })(this, function (exports) {
	                'use strict';
	
	                Object.defineProperty(exports, "__esModule", {
	                    value: true
	                });
	
	                /*
	                 *@todo remove function from window and document. Update on and off functions
	                 */
	                window.getAttribute = function (label) {
	                    return window[label];
	                };
	
	                window.setAttribute = function (label, value) {
	                    window[label] = value;
	                };
	
	                document.getAttribute = function (label) {
	                    return document[label];
	                };
	
	                document.setAttribute = function (label, value) {
	                    document[label] = value;
	                };
	
	                var utils = {
	                    wrap: function wrap(el, className) {
	                        if (!el) {
	                            return;
	                        }
	
	                        var wrapper = document.createElement('div');
	                        wrapper.className = className;
	                        el.parentNode.insertBefore(wrapper, el);
	                        el.parentNode.removeChild(el);
	                        wrapper.appendChild(el);
	                    },
	
	                    addClass: function addClass(el, className) {
	                        if (!el) {
	                            return;
	                        }
	
	                        if (el.classList) {
	                            el.classList.add(className);
	                        } else {
	                            el.className += ' ' + className;
	                        }
	                    },
	
	                    removeClass: function removeClass(el, className) {
	                        if (!el) {
	                            return;
	                        }
	
	                        if (el.classList) {
	                            el.classList.remove(className);
	                        } else {
	                            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	                        }
	                    },
	
	                    hasClass: function hasClass(el, className) {
	                        if (el.classList) {
	                            return el.classList.contains(className);
	                        } else {
	                            return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	                        }
	
	                        return false;
	                    },
	
	                    // ex Transform
	                    // ex TransitionTimingFunction
	                    setVendor: function setVendor(el, property, value) {
	                        if (!el) {
	                            return;
	                        }
	
	                        el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
	                        el.style['webkit' + property] = value;
	                        el.style['moz' + property] = value;
	                        el.style['ms' + property] = value;
	                        el.style['o' + property] = value;
	                    },
	
	                    trigger: function trigger(el, event) {
	                        var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	                        if (!el) {
	                            return;
	                        }
	
	                        var customEvent = new CustomEvent(event, {
	                            detail: detail
	                        });
	                        el.dispatchEvent(customEvent);
	                    },
	
	                    Listener: {
	                        uid: 0
	                    },
	                    on: function on(el, events, fn) {
	                        if (!el) {
	                            return;
	                        }
	
	                        events.split(' ').forEach(function (event) {
	                            var _id = el.getAttribute('lg-event-uid') || '';
	                            utils.Listener.uid++;
	                            _id += '&' + utils.Listener.uid;
	                            el.setAttribute('lg-event-uid', _id);
	                            utils.Listener[event + utils.Listener.uid] = fn;
	                            el.addEventListener(event.split('.')[0], fn, false);
	                        });
	                    },
	
	                    off: function off(el, event) {
	                        if (!el) {
	                            return;
	                        }
	
	                        var _id = el.getAttribute('lg-event-uid');
	                        if (_id) {
	                            _id = _id.split('&');
	                            for (var i = 0; i < _id.length; i++) {
	                                if (_id[i]) {
	                                    var _event = event + _id[i];
	                                    if (_event.substring(0, 1) === '.') {
	                                        for (var key in utils.Listener) {
	                                            if (utils.Listener.hasOwnProperty(key)) {
	                                                if (key.split('.').indexOf(_event.split('.')[1]) > -1) {
	                                                    el.removeEventListener(key.split('.')[0], utils.Listener[key]);
	                                                    el.setAttribute('lg-event-uid', el.getAttribute('lg-event-uid').replace('&' + _id[i], ''));
	                                                    delete utils.Listener[key];
	                                                }
	                                            }
	                                        }
	                                    } else {
	                                        el.removeEventListener(_event.split('.')[0], utils.Listener[_event]);
	                                        el.setAttribute('lg-event-uid', el.getAttribute('lg-event-uid').replace('&' + _id[i], ''));
	                                        delete utils.Listener[_event];
	                                    }
	                                }
	                            }
	                        }
	                    },
	
	                    param: function param(obj) {
	                        return Object.keys(obj).map(function (k) {
	                            return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
	                        }).join('&');
	                    }
	                };
	
	                exports.default = utils;
	            });
	        }, {}], 2: [function (require, module, exports) {
	            (function (global, factory) {
	                if (typeof define === "function" && define.amd) {
	                    define(['./lg-utils'], factory);
	                } else if (typeof exports !== "undefined") {
	                    factory(require('./lg-utils'));
	                } else {
	                    var mod = {
	                        exports: {}
	                    };
	                    factory(global.lgUtils);
	                    global.lightgallery = mod.exports;
	                }
	            })(this, function (_lgUtils) {
	                'use strict';
	
	                var _lgUtils2 = _interopRequireDefault(_lgUtils);
	
	                function _interopRequireDefault(obj) {
	                    return obj && obj.__esModule ? obj : {
	                        default: obj
	                    };
	                }
	
	                var _extends = Object.assign || function (target) {
	                    for (var i = 1; i < arguments.length; i++) {
	                        var source = arguments[i];
	
	                        for (var key in source) {
	                            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                                target[key] = source[key];
	                            }
	                        }
	                    }
	
	                    return target;
	                };
	
	                /** Polyfill the CustomEvent() constructor functionality in Internet Explorer 9 and higher */
	                (function () {
	
	                    if (typeof window.CustomEvent === 'function') {
	                        return false;
	                    }
	
	                    function CustomEvent(event, params) {
	                        params = params || {
	                            bubbles: false,
	                            cancelable: false,
	                            detail: undefined
	                        };
	                        var evt = document.createEvent('CustomEvent');
	                        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	                        return evt;
	                    }
	
	                    CustomEvent.prototype = window.Event.prototype;
	
	                    window.CustomEvent = CustomEvent;
	                })();
	
	                window.utils = _lgUtils2.default;
	                window.lgData = {
	                    uid: 0
	                };
	
	                window.lgModules = {};
	                var defaults = {
	
	                    mode: 'lg-slide',
	
	                    // Ex : 'ease'
	                    cssEasing: 'ease',
	
	                    //'for jquery animation'
	                    easing: 'linear',
	                    speed: 600,
	                    height: '100%',
	                    width: '100%',
	                    addClass: '',
	                    startClass: 'lg-start-zoom',
	                    backdropDuration: 150,
	                    hideBarsDelay: 6000,
	
	                    useLeft: false,
	
	                    closable: true,
	                    loop: true,
	                    escKey: true,
	                    keyPress: true,
	                    controls: true,
	                    slideEndAnimatoin: true,
	                    hideControlOnEnd: false,
	                    mousewheel: false,
	
	                    getCaptionFromTitleOrAlt: true,
	
	                    // .lg-item || '.lg-sub-html'
	                    appendSubHtmlTo: '.lg-sub-html',
	
	                    subHtmlSelectorRelative: false,
	
	                    /**
	                     * @desc number of preload slides
	                     * will exicute only after the current slide is fully loaded.
	                     *
	                     * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
	                     * slide will be loaded in the background after the 4th slide is fully loaded..
	                     * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
	                     *
	                     */
	                    preload: 1,
	                    showAfterLoad: true,
	                    selector: '',
	                    selectWithin: '',
	                    nextHtml: '',
	                    prevHtml: '',
	
	                    // 0, 1
	                    index: false,
	
	                    iframeMaxWidth: '100%',
	
	                    download: true,
	                    counter: true,
	                    appendCounterTo: '.lg-toolbar',
	
	                    swipeThreshold: 50,
	                    enableSwipe: true,
	                    enableDrag: true,
	
	                    dynamic: false,
	                    dynamicEl: [],
	                    galleryId: 1
	                };
	
	                function Plugin(element, options) {
	
	                    // Current lightGallery element
	                    this.el = element;
	
	                    // lightGallery settings
	                    this.s = _extends({}, defaults, options);
	
	                    // When using dynamic mode, ensure dynamicEl is an array
	                    if (this.s.dynamic && this.s.dynamicEl !== 'undefined' && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
	                        throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
	                    }
	
	                    // lightGallery modules
	                    this.modules = {};
	
	                    // false when lightgallery complete first slide;
	                    this.lGalleryOn = false;
	
	                    this.lgBusy = false;
	
	                    // Timeout function for hiding controls;
	                    this.hideBartimeout = false;
	
	                    // To determine browser supports for touch events;
	                    this.isTouch = 'ontouchstart' in document.documentElement;
	
	                    // Disable hideControlOnEnd if sildeEndAnimation is true
	                    if (this.s.slideEndAnimatoin) {
	                        this.s.hideControlOnEnd = false;
	                    }
	
	                    this.items = [];
	
	                    // Gallery items
	                    if (this.s.dynamic) {
	                        this.items = this.s.dynamicEl;
	                    } else {
	                        if (this.s.selector === 'this') {
	                            this.items.push(this.el);
	                        } else if (this.s.selector !== '') {
	                            if (this.s.selectWithin) {
	                                this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector);
	                            } else {
	                                this.items = this.el.querySelectorAll(this.s.selector);
	                            }
	                        } else {
	                            this.items = this.el.children;
	                        }
	                    }
	
	                    // .lg-item
	
	                    this.___slide = '';
	
	                    // .lg-outer
	                    this.outer = '';
	
	                    this.init();
	
	                    return this;
	                }
	
	                Plugin.prototype.init = function () {
	
	                    var _this = this;
	
	                    // s.preload should not be more than $item.length
	                    if (_this.s.preload > _this.items.length) {
	                        _this.s.preload = _this.items.length;
	                    }
	
	                    // if dynamic option is enabled execute immediately
	                    var _hash = window.location.hash;
	                    if (_hash.indexOf('lg=' + this.s.galleryId) > 0) {
	
	                        _this.index = parseInt(_hash.split('&slide=')[1], 10);
	
	                        _lgUtils2.default.addClass(document.body, 'lg-from-hash');
	                        if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
	                            _lgUtils2.default.addClass(document.body, 'lg-on');
	                            setTimeout(function () {
	                                _this.build(_this.index);
	                            });
	                        }
	                    }
	
	                    if (_this.s.dynamic) {
	
	                        _lgUtils2.default.trigger(this.el, 'onBeforeOpen');
	
	                        _this.index = _this.s.index || 0;
	
	                        // prevent accidental double execution
	                        if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
	                            _lgUtils2.default.addClass(document.body, 'lg-on');
	                            setTimeout(function () {
	                                _this.build(_this.index);
	                            });
	                        }
	                    } else {
	
	                        for (var i = 0; i < _this.items.length; i++) {
	
	                            /*jshint loopfunc: true */
	                            (function (index) {
	
	                                // Using different namespace for click because click event should not unbind if selector is same object('this')
	                                _lgUtils2.default.on(_this.items[index], 'click.lgcustom', function (e) {
	
	                                    e.preventDefault();
	
	                                    _lgUtils2.default.trigger(_this.el, 'onBeforeOpen');
	
	                                    _this.index = _this.s.index || index;
	
	                                    if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
	                                        _this.build(_this.index);
	                                        _lgUtils2.default.addClass(document.body, 'lg-on');
	                                    }
	                                });
	                            })(i);
	                        }
	                    }
	                };
	
	                Plugin.prototype.build = function (index) {
	
	                    var _this = this;
	
	                    _this.structure();
	
	                    for (var key in window.lgModules) {
	                        _this.modules[key] = new window.lgModules[key](_this.el);
	                    }
	
	                    // initiate slide function
	                    _this.slide(index, false, false);
	
	                    if (_this.s.keyPress) {
	                        _this.keyPress();
	                    }
	
	                    if (_this.items.length > 1) {
	
	                        _this.arrow();
	
	                        setTimeout(function () {
	                            _this.enableDrag();
	                            _this.enableSwipe();
	                        }, 50);
	
	                        if (_this.s.mousewheel) {
	                            _this.mousewheel();
	                        }
	                    }
	
	                    _this.counter();
	
	                    _this.closeGallery();
	
	                    _lgUtils2.default.trigger(_this.el, 'onAfterOpen');
	
	                    // Hide controllers if mouse doesn't move for some period
	                    _lgUtils2.default.on(_this.outer, 'mousemove.lg click.lg touchstart.lg', function () {
	
	                        _lgUtils2.default.removeClass(_this.outer, 'lg-hide-items');
	
	                        clearTimeout(_this.hideBartimeout);
	
	                        // Timeout will be cleared on each slide movement also
	                        _this.hideBartimeout = setTimeout(function () {
	                            _lgUtils2.default.addClass(_this.outer, 'lg-hide-items');
	                        }, _this.s.hideBarsDelay);
	                    });
	                };
	
	                Plugin.prototype.structure = function () {
	                    var list = '';
	                    var controls = '';
	                    var i = 0;
	                    var subHtmlCont = '';
	                    var template;
	                    var _this = this;
	
	                    document.body.insertAdjacentHTML('beforeend', '<div class="lg-backdrop"></div>');
	                    _lgUtils2.default.setVendor(document.querySelector('.lg-backdrop'), 'TransitionDuration', this.s.backdropDuration + 'ms');
	
	                    // Create gallery items
	                    for (i = 0; i < this.items.length; i++) {
	                        list += '<div class="lg-item"></div>';
	                    }
	
	                    // Create controlls
	                    if (this.s.controls && this.items.length > 1) {
	                        controls = '<div class="lg-actions">' + '<div class="lg-prev lg-icon">' + this.s.prevHtml + '</div>' + '<div class="lg-next lg-icon">' + this.s.nextHtml + '</div>' + '</div>';
	                    }
	
	                    if (this.s.appendSubHtmlTo === '.lg-sub-html') {
	                        subHtmlCont = '<div class="lg-sub-html"></div>';
	                    }
	
	                    template = '<div class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' + '<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' + '<div class="lg-inner">' + list + '</div>' + '<div class="lg-toolbar group">' + '<span class="lg-close lg-icon"></span>' + '</div>' + controls + subHtmlCont + '</div>' + '</div>';
	
	                    document.body.insertAdjacentHTML('beforeend', template);
	                    this.outer = document.querySelector('.lg-outer');
	                    this.___slide = this.outer.querySelectorAll('.lg-item');
	
	                    if (this.s.useLeft) {
	                        _lgUtils2.default.addClass(this.outer, 'lg-use-left');
	
	                        // Set mode lg-slide if use left is true;
	                        this.s.mode = 'lg-slide';
	                    } else {
	                        _lgUtils2.default.addClass(this.outer, 'lg-use-css3');
	                    }
	
	                    // For fixed height gallery
	                    _this.setTop();
	                    _lgUtils2.default.on(window, 'resize.lg orientationchange.lg', function () {
	                        setTimeout(function () {
	                            _this.setTop();
	                        }, 100);
	                    });
	
	                    // add class lg-current to remove initial transition
	                    _lgUtils2.default.addClass(this.___slide[this.index], 'lg-current');
	
	                    // add Class for css support and transition mode
	                    if (this.doCss()) {
	                        _lgUtils2.default.addClass(this.outer, 'lg-css3');
	                    } else {
	                        _lgUtils2.default.addClass(this.outer, 'lg-css');
	
	                        // Set speed 0 because no animation will happen if browser doesn't support css3
	                        this.s.speed = 0;
	                    }
	
	                    _lgUtils2.default.addClass(this.outer, this.s.mode);
	
	                    if (this.s.enableDrag && this.items.length > 1) {
	                        _lgUtils2.default.addClass(this.outer, 'lg-grab');
	                    }
	
	                    if (this.s.showAfterLoad) {
	                        _lgUtils2.default.addClass(this.outer, 'lg-show-after-load');
	                    }
	
	                    if (this.doCss()) {
	                        var inner = this.outer.querySelector('.lg-inner');
	                        _lgUtils2.default.setVendor(inner, 'TransitionTimingFunction', this.s.cssEasing);
	                        _lgUtils2.default.setVendor(inner, 'TransitionDuration', this.s.speed + 'ms');
	                    }
	
	                    setTimeout(function () {
	                        _lgUtils2.default.addClass(document.querySelector('.lg-backdrop'), 'in');
	                    });
	
	                    setTimeout(function () {
	                        _lgUtils2.default.addClass(_this.outer, 'lg-visible');
	                    }, this.s.backdropDuration);
	
	                    if (this.s.download) {
	                        this.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>');
	                    }
	
	                    // Store the current scroll top value to scroll back after closing the gallery..
	                    this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	                };
	
	                // For fixed height gallery
	                Plugin.prototype.setTop = function () {
	                    if (this.s.height !== '100%') {
	                        var wH = window.innerHeight;
	                        var top = (wH - parseInt(this.s.height, 10)) / 2;
	                        var lGallery = this.outer.querySelector('.lg');
	                        if (wH >= parseInt(this.s.height, 10)) {
	                            lGallery.style.top = top + 'px';
	                        } else {
	                            lGallery.style.top = '0px';
	                        }
	                    }
	                };
	
	                // Find css3 support
	                Plugin.prototype.doCss = function () {
	                    // check for css animation support
	                    var support = function support() {
	                        var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
	                        var root = document.documentElement;
	                        var i = 0;
	                        for (i = 0; i < transition.length; i++) {
	                            if (transition[i] in root.style) {
	                                return true;
	                            }
	                        }
	                    };
	
	                    if (support()) {
	                        return true;
	                    }
	
	                    return false;
	                };
	
	                /**
	                 *  @desc Check the given src is video
	                 *  @param {String} src
	                 *  @return {Object} video type
	                 *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
	                 */
	                Plugin.prototype.isVideo = function (src, index) {
	
	                    if (!src) {
	                        throw new Error("Make sure that slide " + index + " has an image/video src");
	                    }
	
	                    var html;
	                    if (this.s.dynamic) {
	                        html = this.s.dynamicEl[index].html;
	                    } else {
	                        html = this.items[index].getAttribute('data-html');
	                    }
	
	                    if (!src && html) {
	                        return {
	                            html5: true
	                        };
	                    }
	
	                    var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
	                    var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
	                    var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
	                    var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
	
	                    if (youtube) {
	                        return {
	                            youtube: youtube
	                        };
	                    } else if (vimeo) {
	                        return {
	                            vimeo: vimeo
	                        };
	                    } else if (dailymotion) {
	                        return {
	                            dailymotion: dailymotion
	                        };
	                    } else if (vk) {
	                        return {
	                            vk: vk
	                        };
	                    }
	                };
	
	                /**
	                 *  @desc Create image counter
	                 *  Ex: 1/10
	                 */
	                Plugin.prototype.counter = function () {
	                    if (this.s.counter) {
	                        this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML('beforeend', '<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + '</span></div>');
	                    }
	                };
	
	                /**
	                 *  @desc add sub-html into the slide
	                 *  @param {Number} index - index of the slide
	                 */
	                Plugin.prototype.addHtml = function (index) {
	                    var subHtml = null;
	                    var currentEle;
	                    if (this.s.dynamic) {
	                        subHtml = this.s.dynamicEl[index].subHtml;
	                    } else {
	                        currentEle = this.items[index];
	                        subHtml = currentEle.getAttribute('data-sub-html');
	                        if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
	                            subHtml = currentEle.getAttribute('title');
	                            if (subHtml && currentEle.querySelector('img')) {
	                                subHtml = currentEle.querySelector('img').getAttribute('alt');
	                            }
	                        }
	                    }
	
	                    if (typeof subHtml !== 'undefined' && subHtml !== null) {
	
	                        // get first letter of subhtml
	                        // if first letter starts with . or # get the html form the jQuery object
	                        var fL = subHtml.substring(0, 1);
	                        if (fL === '.' || fL === '#') {
	                            if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
	                                subHtml = currentEle.querySelector(subHtml).innerHTML;
	                            } else {
	                                subHtml = document.querySelector(subHtml).innerHTML;
	                            }
	                        }
	                    } else {
	                        subHtml = '';
	                    }
	
	                    if (this.s.appendSubHtmlTo === '.lg-sub-html') {
	                        this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = subHtml;
	                    } else {
	                        this.___slide[index].insertAdjacentHTML('beforeend', subHtml);
	                    }
	
	                    // Add lg-empty-html class if title doesn't exist
	                    if (typeof subHtml !== 'undefined' && subHtml !== null) {
	                        if (subHtml === '') {
	                            _lgUtils2.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), 'lg-empty-html');
	                        } else {
	                            _lgUtils2.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), 'lg-empty-html');
	                        }
	                    }
	
	                    _lgUtils2.default.trigger(this.el, 'onAfterAppendSubHtml', {
	                        index: index
	                    });
	                };
	
	                /**
	                 *  @desc Preload slides
	                 *  @param {Number} index - index of the slide
	                 */
	                Plugin.prototype.preload = function (index) {
	                    var i = 1;
	                    var j = 1;
	                    for (i = 1; i <= this.s.preload; i++) {
	                        if (i >= this.items.length - index) {
	                            break;
	                        }
	
	                        this.loadContent(index + i, false, 0);
	                    }
	
	                    for (j = 1; j <= this.s.preload; j++) {
	                        if (index - j < 0) {
	                            break;
	                        }
	
	                        this.loadContent(index - j, false, 0);
	                    }
	                };
	
	                /**
	                 *  @desc Load slide content into slide.
	                 *  @param {Number} index - index of the slide.
	                 *  @param {Boolean} rec - if true call loadcontent() function again.
	                 *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
	                 */
	                Plugin.prototype.loadContent = function (index, rec, delay) {
	
	                    var _this = this;
	                    var _hasPoster = false;
	                    var _img;
	                    var _src;
	                    var _poster;
	                    var _srcset;
	                    var _sizes;
	                    var _html;
	                    var getResponsiveSrc = function getResponsiveSrc(srcItms) {
	                        var rsWidth = [];
	                        var rsSrc = [];
	                        for (var i = 0; i < srcItms.length; i++) {
	                            var __src = srcItms[i].split(' ');
	
	                            // Manage empty space
	                            if (__src[0] === '') {
	                                __src.splice(0, 1);
	                            }
	
	                            rsSrc.push(__src[0]);
	                            rsWidth.push(__src[1]);
	                        }
	
	                        var wWidth = window.innerWidth;
	                        for (var j = 0; j < rsWidth.length; j++) {
	                            if (parseInt(rsWidth[j], 10) > wWidth) {
	                                _src = rsSrc[j];
	                                break;
	                            }
	                        }
	                    };
	
	                    if (_this.s.dynamic) {
	
	                        if (_this.s.dynamicEl[index].poster) {
	                            _hasPoster = true;
	                            _poster = _this.s.dynamicEl[index].poster;
	                        }
	
	                        _html = _this.s.dynamicEl[index].html;
	                        _src = _this.s.dynamicEl[index].src;
	
	                        if (_this.s.dynamicEl[index].responsive) {
	                            var srcDyItms = _this.s.dynamicEl[index].responsive.split(',');
	                            getResponsiveSrc(srcDyItms);
	                        }
	
	                        _srcset = _this.s.dynamicEl[index].srcset;
	                        _sizes = _this.s.dynamicEl[index].sizes;
	                    } else {
	
	                        if (_this.items[index].getAttribute('data-poster')) {
	                            _hasPoster = true;
	                            _poster = _this.items[index].getAttribute('data-poster');
	                        }
	
	                        _html = _this.items[index].getAttribute('data-html');
	                        _src = _this.items[index].getAttribute('href') || _this.items[index].getAttribute('data-src');
	
	                        if (_this.items[index].getAttribute('data-responsive')) {
	                            var srcItms = _this.items[index].getAttribute('data-responsive').split(',');
	                            getResponsiveSrc(srcItms);
	                        }
	
	                        _srcset = _this.items[index].getAttribute('data-srcset');
	                        _sizes = _this.items[index].getAttribute('data-sizes');
	                    }
	
	                    //if (_src || _srcset || _sizes || _poster) {
	
	                    var iframe = false;
	                    if (_this.s.dynamic) {
	                        if (_this.s.dynamicEl[index].iframe) {
	                            iframe = true;
	                        }
	                    } else {
	                        if (_this.items[index].getAttribute('data-iframe') === 'true') {
	                            iframe = true;
	                        }
	                    }
	
	                    var _isVideo = _this.isVideo(_src, index);
	                    if (!_lgUtils2.default.hasClass(_this.___slide[index], 'lg-loaded')) {
	                        if (iframe) {
	                            _this.___slide[index].insertAdjacentHTML('afterbegin', '<div class="lg-video-cont" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
	                        } else if (_hasPoster) {
	                            var videoClass = '';
	                            if (_isVideo && _isVideo.youtube) {
	                                videoClass = 'lg-has-youtube';
	                            } else if (_isVideo && _isVideo.vimeo) {
	                                videoClass = 'lg-has-vimeo';
	                            } else {
	                                videoClass = 'lg-has-html5';
	                            }
	
	                            _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');
	                        } else if (_isVideo) {
	                            _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-video-cont "><div class="lg-video"></div></div>');
	                            _lgUtils2.default.trigger(_this.el, 'hasVideo', {
	                                index: index,
	                                src: _src,
	                                html: _html
	                            });
	                        } else {
	                            _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + _src + '" /></div>');
	                        }
	
	                        _lgUtils2.default.trigger(_this.el, 'onAferAppendSlide', {
	                            index: index
	                        });
	
	                        _img = _this.___slide[index].querySelector('.lg-object');
	                        if (_sizes) {
	                            _img.setAttribute('sizes', _sizes);
	                        }
	
	                        if (_srcset) {
	                            _img.setAttribute('srcset', _srcset);
	                            try {
	                                picturefill({
	                                    elements: [_img[0]]
	                                });
	                            } catch (e) {
	                                console.error('Make sure you have included Picturefill version 2');
	                            }
	                        }
	
	                        if (this.s.appendSubHtmlTo !== '.lg-sub-html') {
	                            _this.addHtml(index);
	                        }
	
	                        _lgUtils2.default.addClass(_this.___slide[index], 'lg-loaded');
	                    }
	
	                    _lgUtils2.default.on(_this.___slide[index].querySelector('.lg-object'), 'load.lg error.lg', function () {
	
	                        // For first time add some delay for displaying the start animation.
	                        var _speed = 0;
	
	                        // Do not change the delay value because it is required for zoom plugin.
	                        // If gallery opened from direct url (hash) speed value should be 0
	                        if (delay && !_lgUtils2.default.hasClass(document.body, 'lg-from-hash')) {
	                            _speed = delay;
	                        }
	
	                        setTimeout(function () {
	                            _lgUtils2.default.addClass(_this.___slide[index], 'lg-complete');
	
	                            _lgUtils2.default.trigger(_this.el, 'onSlideItemLoad', {
	                                index: index,
	                                delay: delay || 0
	                            });
	                        }, _speed);
	                    });
	
	                    // @todo check load state for html5 videos
	                    if (_isVideo && _isVideo.html5 && !_hasPoster) {
	                        _lgUtils2.default.addClass(_this.___slide[index], 'lg-complete');
	                    }
	
	                    if (rec === true) {
	                        if (!_lgUtils2.default.hasClass(_this.___slide[index], 'lg-complete')) {
	                            _lgUtils2.default.on(_this.___slide[index].querySelector('.lg-object'), 'load.lg error.lg', function () {
	                                _this.preload(index);
	                            });
	                        } else {
	                            _this.preload(index);
	                        }
	                    }
	
	                    //}
	                };
	
	                /**
	                *   @desc slide function for lightgallery
	                    ** Slide() gets call on start
	                    ** ** Set lg.on true once slide() function gets called.
	                    ** Call loadContent() on slide() function inside setTimeout
	                    ** ** On first slide we do not want any animation like slide of fade
	                    ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
	                    ** ** Else loadContent() should wait for the transition to complete.
	                    ** ** So set timeout s.speed + 50
	                <=> ** loadContent() will load slide content in to the particular slide
	                    ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
	                    ** ** preload will execute only when the previous slide is fully loaded (images iframe)
	                    ** ** avoid simultaneous image load
	                <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
	                    ** loadContent()  <====> Preload();
	                
	                *   @param {Number} index - index of the slide
	                *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
	                *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
	                */
	                Plugin.prototype.slide = function (index, fromTouch, fromThumb) {
	
	                    var _prevIndex = 0;
	                    for (var i = 0; i < this.___slide.length; i++) {
	                        if (_lgUtils2.default.hasClass(this.___slide[i], 'lg-current')) {
	                            _prevIndex = i;
	                            break;
	                        }
	                    }
	
	                    var _this = this;
	
	                    // Prevent if multiple call
	                    // Required for hsh plugin
	                    if (_this.lGalleryOn && _prevIndex === index) {
	                        return;
	                    }
	
	                    var _length = this.___slide.length;
	                    var _time = _this.lGalleryOn ? this.s.speed : 0;
	                    var _next = false;
	                    var _prev = false;
	
	                    if (!_this.lgBusy) {
	
	                        if (this.s.download) {
	                            var _src;
	                            if (_this.s.dynamic) {
	                                _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
	                            } else {
	                                _src = _this.items[index].getAttribute('data-download-url') !== 'false' && (_this.items[index].getAttribute('data-download-url') || _this.items[index].getAttribute('href') || _this.items[index].getAttribute('data-src'));
	                            }
	
	                            if (_src) {
	                                document.getElementById('lg-download').setAttribute('href', _src);
	                                _lgUtils2.default.removeClass(_this.outer, 'lg-hide-download');
	                            } else {
	                                _lgUtils2.default.addClass(_this.outer, 'lg-hide-download');
	                            }
	                        }
	
	                        _lgUtils2.default.trigger(_this.el, 'onBeforeSlide', {
	                            prevIndex: _prevIndex,
	                            index: index,
	                            fromTouch: fromTouch,
	                            fromThumb: fromThumb
	                        });
	
	                        _this.lgBusy = true;
	
	                        clearTimeout(_this.hideBartimeout);
	
	                        // Add title if this.s.appendSubHtmlTo === lg-sub-html
	                        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
	
	                            // wait for slide animation to complete
	                            setTimeout(function () {
	                                _this.addHtml(index);
	                            }, _time);
	                        }
	
	                        this.arrowDisable(index);
	
	                        if (!fromTouch) {
	
	                            // remove all transitions
	                            _lgUtils2.default.addClass(_this.outer, 'lg-no-trans');
	
	                            for (var j = 0; j < this.___slide.length; j++) {
	                                _lgUtils2.default.removeClass(this.___slide[j], 'lg-prev-slide');
	                                _lgUtils2.default.removeClass(this.___slide[j], 'lg-next-slide');
	                            }
	
	                            if (index < _prevIndex) {
	                                _prev = true;
	                                if (index === 0 && _prevIndex === _length - 1 && !fromThumb) {
	                                    _prev = false;
	                                    _next = true;
	                                }
	                            } else if (index > _prevIndex) {
	                                _next = true;
	                                if (index === _length - 1 && _prevIndex === 0 && !fromThumb) {
	                                    _prev = true;
	                                    _next = false;
	                                }
	                            }
	
	                            if (_prev) {
	
	                                //prevslide
	                                _lgUtils2.default.addClass(this.___slide[index], 'lg-prev-slide');
	                                _lgUtils2.default.addClass(this.___slide[_prevIndex], 'lg-next-slide');
	                            } else if (_next) {
	
	                                // next slide
	                                _lgUtils2.default.addClass(this.___slide[index], 'lg-next-slide');
	                                _lgUtils2.default.addClass(this.___slide[_prevIndex], 'lg-prev-slide');
	                            }
	
	                            // give 50 ms for browser to add/remove class
	                            setTimeout(function () {
	                                _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-current'), 'lg-current');
	
	                                //_this.$slide.eq(_prevIndex).removeClass('lg-current');
	                                _lgUtils2.default.addClass(_this.___slide[index], 'lg-current');
	
	                                // reset all transitions
	                                _lgUtils2.default.removeClass(_this.outer, 'lg-no-trans');
	                            }, 50);
	                        } else {
	
	                            var touchPrev = index - 1;
	                            var touchNext = index + 1;
	
	                            if (index === 0 && _prevIndex === _length - 1) {
	
	                                // next slide
	                                touchNext = 0;
	                                touchPrev = _length - 1;
	                            } else if (index === _length - 1 && _prevIndex === 0) {
	
	                                // prev slide
	                                touchNext = 0;
	                                touchPrev = _length - 1;
	                            }
	
	                            _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-prev-slide'), 'lg-prev-slide');
	                            _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-current'), 'lg-current');
	                            _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-next-slide'), 'lg-next-slide');
	                            _lgUtils2.default.addClass(_this.___slide[touchPrev], 'lg-prev-slide');
	                            _lgUtils2.default.addClass(_this.___slide[touchNext], 'lg-next-slide');
	                            _lgUtils2.default.addClass(_this.___slide[index], 'lg-current');
	                        }
	
	                        if (_this.lGalleryOn) {
	                            setTimeout(function () {
	                                _this.loadContent(index, true, 0);
	                            }, this.s.speed + 50);
	
	                            setTimeout(function () {
	                                _this.lgBusy = false;
	                                _lgUtils2.default.trigger(_this.el, 'onAfterSlide', {
	                                    prevIndex: _prevIndex,
	                                    index: index,
	                                    fromTouch: fromTouch,
	                                    fromThumb: fromThumb
	                                });
	                            }, this.s.speed);
	                        } else {
	                            _this.loadContent(index, true, _this.s.backdropDuration);
	
	                            _this.lgBusy = false;
	                            _lgUtils2.default.trigger(_this.el, 'onAfterSlide', {
	                                prevIndex: _prevIndex,
	                                index: index,
	                                fromTouch: fromTouch,
	                                fromThumb: fromThumb
	                            });
	                        }
	
	                        _this.lGalleryOn = true;
	
	                        if (this.s.counter) {
	                            if (document.getElementById('lg-counter-current')) {
	                                document.getElementById('lg-counter-current').innerHTML = index + 1;
	                            }
	                        }
	                    }
	                };
	
	                /**
	                 *  @desc Go to next slide
	                 *  @param {Boolean} fromTouch - true if slide function called via touch event
	                 */
	                Plugin.prototype.goToNextSlide = function (fromTouch) {
	                    var _this = this;
	                    if (!_this.lgBusy) {
	                        if (_this.index + 1 < _this.___slide.length) {
	                            _this.index++;
	                            _lgUtils2.default.trigger(_this.el, 'onBeforeNextSlide', {
	                                index: _this.index
	                            });
	                            _this.slide(_this.index, fromTouch, false);
	                        } else {
	                            if (_this.s.loop) {
	                                _this.index = 0;
	                                _lgUtils2.default.trigger(_this.el, 'onBeforeNextSlide', {
	                                    index: _this.index
	                                });
	                                _this.slide(_this.index, fromTouch, false);
	                            } else if (_this.s.slideEndAnimatoin) {
	                                _lgUtils2.default.addClass(_this.outer, 'lg-right-end');
	                                setTimeout(function () {
	                                    _lgUtils2.default.removeClass(_this.outer, 'lg-right-end');
	                                }, 400);
	                            }
	                        }
	                    }
	                };
	
	                /**
	                 *  @desc Go to previous slide
	                 *  @param {Boolean} fromTouch - true if slide function called via touch event
	                 */
	                Plugin.prototype.goToPrevSlide = function (fromTouch) {
	                    var _this = this;
	                    if (!_this.lgBusy) {
	                        if (_this.index > 0) {
	                            _this.index--;
	                            _lgUtils2.default.trigger(_this.el, 'onBeforePrevSlide', {
	                                index: _this.index,
	                                fromTouch: fromTouch
	                            });
	                            _this.slide(_this.index, fromTouch, false);
	                        } else {
	                            if (_this.s.loop) {
	                                _this.index = _this.items.length - 1;
	                                _lgUtils2.default.trigger(_this.el, 'onBeforePrevSlide', {
	                                    index: _this.index,
	                                    fromTouch: fromTouch
	                                });
	                                _this.slide(_this.index, fromTouch, false);
	                            } else if (_this.s.slideEndAnimatoin) {
	                                _lgUtils2.default.addClass(_this.outer, 'lg-left-end');
	                                setTimeout(function () {
	                                    _lgUtils2.default.removeClass(_this.outer, 'lg-left-end');
	                                }, 400);
	                            }
	                        }
	                    }
	                };
	
	                Plugin.prototype.keyPress = function () {
	                    var _this = this;
	                    if (this.items.length > 1) {
	                        _lgUtils2.default.on(window, 'keyup.lg', function (e) {
	                            if (_this.items.length > 1) {
	                                if (e.keyCode === 37) {
	                                    e.preventDefault();
	                                    _this.goToPrevSlide();
	                                }
	
	                                if (e.keyCode === 39) {
	                                    e.preventDefault();
	                                    _this.goToNextSlide();
	                                }
	                            }
	                        });
	                    }
	
	                    _lgUtils2.default.on(window, 'keydown.lg', function (e) {
	                        if (_this.s.escKey === true && e.keyCode === 27) {
	                            e.preventDefault();
	                            if (!_lgUtils2.default.hasClass(_this.outer, 'lg-thumb-open')) {
	                                _this.destroy();
	                            } else {
	                                _lgUtils2.default.removeClass(_this.outer, 'lg-thumb-open');
	                            }
	                        }
	                    });
	                };
	
	                Plugin.prototype.arrow = function () {
	                    var _this = this;
	                    _lgUtils2.default.on(this.outer.querySelector('.lg-prev'), 'click.lg', function () {
	                        _this.goToPrevSlide();
	                    });
	
	                    _lgUtils2.default.on(this.outer.querySelector('.lg-next'), 'click.lg', function () {
	                        _this.goToNextSlide();
	                    });
	                };
	
	                Plugin.prototype.arrowDisable = function (index) {
	
	                    // Disable arrows if s.hideControlOnEnd is true
	                    if (!this.s.loop && this.s.hideControlOnEnd) {
	                        var next = this.outer.querySelector('.lg-next');
	                        var prev = this.outer.querySelector('.lg-prev');
	                        if (index + 1 < this.___slide.length) {
	                            next.removeAttribute('disabled');
	                            _lgUtils2.default.removeClass(next, 'disabled');
	                        } else {
	                            next.setAttribute('disabled', 'disabled');
	                            _lgUtils2.default.addClass(next, 'disabled');
	                        }
	
	                        if (index > 0) {
	                            prev.removeAttribute('disabled');
	                            _lgUtils2.default.removeClass(prev, 'disabled');
	                        } else {
	                            next.setAttribute('disabled', 'disabled');
	                            _lgUtils2.default.addClass(next, 'disabled');
	                        }
	                    }
	                };
	
	                Plugin.prototype.setTranslate = function (el, xValue, yValue) {
	                    // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
	                    if (this.s.useLeft) {
	                        el.style.left = xValue;
	                    } else {
	                        _lgUtils2.default.setVendor(el, 'Transform', 'translate3d(' + xValue + 'px, ' + yValue + 'px, 0px)');
	                    }
	                };
	
	                Plugin.prototype.touchMove = function (startCoords, endCoords) {
	
	                    var distance = endCoords - startCoords;
	
	                    if (Math.abs(distance) > 15) {
	                        // reset opacity and transition duration
	                        _lgUtils2.default.addClass(this.outer, 'lg-dragging');
	
	                        // move current slide
	                        this.setTranslate(this.___slide[this.index], distance, 0);
	
	                        // move next and prev slide with current slide
	                        this.setTranslate(document.querySelector('.lg-prev-slide'), -this.___slide[this.index].clientWidth + distance, 0);
	                        this.setTranslate(document.querySelector('.lg-next-slide'), this.___slide[this.index].clientWidth + distance, 0);
	                    }
	                };
	
	                Plugin.prototype.touchEnd = function (distance) {
	                    var _this = this;
	
	                    // keep slide animation for any mode while dragg/swipe
	                    if (_this.s.mode !== 'lg-slide') {
	                        _lgUtils2.default.addClass(_this.outer, 'lg-slide');
	                    }
	
	                    for (var i = 0; i < this.___slide.length; i++) {
	                        if (!_lgUtils2.default.hasClass(this.___slide[i], 'lg-current') && !_lgUtils2.default.hasClass(this.___slide[i], 'lg-prev-slide') && !_lgUtils2.default.hasClass(this.___slide[i], 'lg-next-slide')) {
	                            this.___slide[i].style.opacity = '0';
	                        }
	                    }
	
	                    // set transition duration
	                    setTimeout(function () {
	                        _lgUtils2.default.removeClass(_this.outer, 'lg-dragging');
	                        if (distance < 0 && Math.abs(distance) > _this.s.swipeThreshold) {
	                            _this.goToNextSlide(true);
	                        } else if (distance > 0 && Math.abs(distance) > _this.s.swipeThreshold) {
	                            _this.goToPrevSlide(true);
	                        } else if (Math.abs(distance) < 5) {
	
	                            // Trigger click if distance is less than 5 pix
	                            _lgUtils2.default.trigger(_this.el, 'onSlideClick');
	                        }
	
	                        for (var i = 0; i < _this.___slide.length; i++) {
	                            _this.___slide[i].removeAttribute('style');
	                        }
	                    });
	
	                    // remove slide class once drag/swipe is completed if mode is not slide
	                    setTimeout(function () {
	                        if (!_lgUtils2.default.hasClass(_this.outer, 'lg-dragging') && _this.s.mode !== 'lg-slide') {
	                            _lgUtils2.default.removeClass(_this.outer, 'lg-slide');
	                        }
	                    }, _this.s.speed + 100);
	                };
	
	                Plugin.prototype.enableSwipe = function () {
	                    var _this = this;
	                    var startCoords = 0;
	                    var endCoords = 0;
	                    var isMoved = false;
	
	                    if (_this.s.enableSwipe && _this.isTouch && _this.doCss()) {
	
	                        for (var i = 0; i < _this.___slide.length; i++) {
	                            /*jshint loopfunc: true */
	                            _lgUtils2.default.on(_this.___slide[i], 'touchstart.lg', function (e) {
	                                if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed') && !_this.lgBusy) {
	                                    e.preventDefault();
	                                    _this.manageSwipeClass();
	                                    startCoords = e.targetTouches[0].pageX;
	                                }
	                            });
	                        }
	
	                        for (var j = 0; j < _this.___slide.length; j++) {
	                            /*jshint loopfunc: true */
	                            _lgUtils2.default.on(_this.___slide[j], 'touchmove.lg', function (e) {
	                                if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
	                                    e.preventDefault();
	                                    endCoords = e.targetTouches[0].pageX;
	                                    _this.touchMove(startCoords, endCoords);
	                                    isMoved = true;
	                                }
	                            });
	                        }
	
	                        for (var k = 0; k < _this.___slide.length; k++) {
	                            /*jshint loopfunc: true */
	                            _lgUtils2.default.on(_this.___slide[k], 'touchend.lg', function () {
	                                if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
	                                    if (isMoved) {
	                                        isMoved = false;
	                                        _this.touchEnd(endCoords - startCoords);
	                                    } else {
	                                        _lgUtils2.default.trigger(_this.el, 'onSlideClick');
	                                    }
	                                }
	                            });
	                        }
	                    }
	                };
	
	                Plugin.prototype.enableDrag = function () {
	                    var _this = this;
	                    var startCoords = 0;
	                    var endCoords = 0;
	                    var isDraging = false;
	                    var isMoved = false;
	                    if (_this.s.enableDrag && !_this.isTouch && _this.doCss()) {
	                        for (var i = 0; i < _this.___slide.length; i++) {
	                            /*jshint loopfunc: true */
	                            _lgUtils2.default.on(_this.___slide[i], 'mousedown.lg', function (e) {
	                                // execute only on .lg-object
	                                if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
	                                    if (_lgUtils2.default.hasClass(e.target, 'lg-object') || _lgUtils2.default.hasClass(e.target, 'lg-video-play')) {
	                                        e.preventDefault();
	
	                                        if (!_this.lgBusy) {
	                                            _this.manageSwipeClass();
	                                            startCoords = e.pageX;
	                                            isDraging = true;
	
	                                            // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
	                                            _this.outer.scrollLeft += 1;
	                                            _this.outer.scrollLeft -= 1;
	
	                                            // *
	
	                                            _lgUtils2.default.removeClass(_this.outer, 'lg-grab');
	                                            _lgUtils2.default.addClass(_this.outer, 'lg-grabbing');
	
	                                            _lgUtils2.default.trigger(_this.el, 'onDragstart');
	                                        }
	                                    }
	                                }
	                            });
	                        }
	
	                        _lgUtils2.default.on(window, 'mousemove.lg', function (e) {
	                            if (isDraging) {
	                                isMoved = true;
	                                endCoords = e.pageX;
	                                _this.touchMove(startCoords, endCoords);
	                                _lgUtils2.default.trigger(_this.el, 'onDragmove');
	                            }
	                        });
	
	                        _lgUtils2.default.on(window, 'mouseup.lg', function (e) {
	                            if (isMoved) {
	                                isMoved = false;
	                                _this.touchEnd(endCoords - startCoords);
	                                _lgUtils2.default.trigger(_this.el, 'onDragend');
	                            } else if (_lgUtils2.default.hasClass(e.target, 'lg-object') || _lgUtils2.default.hasClass(e.target, 'lg-video-play')) {
	                                _lgUtils2.default.trigger(_this.el, 'onSlideClick');
	                            }
	
	                            // Prevent execution on click
	                            if (isDraging) {
	                                isDraging = false;
	                                _lgUtils2.default.removeClass(_this.outer, 'lg-grabbing');
	                                _lgUtils2.default.addClass(_this.outer, 'lg-grab');
	                            }
	                        });
	                    }
	                };
	
	                Plugin.prototype.manageSwipeClass = function () {
	                    var touchNext = this.index + 1;
	                    var touchPrev = this.index - 1;
	                    var length = this.___slide.length;
	                    if (this.s.loop) {
	                        if (this.index === 0) {
	                            touchPrev = length - 1;
	                        } else if (this.index === length - 1) {
	                            touchNext = 0;
	                        }
	                    }
	
	                    for (var i = 0; i < this.___slide.length; i++) {
	                        _lgUtils2.default.removeClass(this.___slide[i], 'lg-next-slide');
	                        _lgUtils2.default.removeClass(this.___slide[i], 'lg-prev-slide');
	                    }
	
	                    if (touchPrev > -1) {
	                        _lgUtils2.default.addClass(this.___slide[touchPrev], 'lg-prev-slide');
	                    }
	
	                    _lgUtils2.default.addClass(this.___slide[touchNext], 'lg-next-slide');
	                };
	
	                Plugin.prototype.mousewheel = function () {
	                    var _this = this;
	                    _lgUtils2.default.on(_this.outer, 'mousewheel.lg', function (e) {
	
	                        if (!e.deltaY) {
	                            return;
	                        }
	
	                        if (e.deltaY > 0) {
	                            _this.goToPrevSlide();
	                        } else {
	                            _this.goToNextSlide();
	                        }
	
	                        e.preventDefault();
	                    });
	                };
	
	                Plugin.prototype.closeGallery = function () {
	
	                    var _this = this;
	                    var mousedown = false;
	                    _lgUtils2.default.on(this.outer.querySelector('.lg-close'), 'click.lg', function () {
	                        _this.destroy();
	                    });
	
	                    if (_this.s.closable) {
	
	                        // If you drag the slide and release outside gallery gets close on chrome
	                        // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
	                        _lgUtils2.default.on(_this.outer, 'mousedown.lg', function (e) {
	
	                            if (_lgUtils2.default.hasClass(e.target, 'lg-outer') || _lgUtils2.default.hasClass(e.target, 'lg-item') || _lgUtils2.default.hasClass(e.target, 'lg-img-wrap')) {
	                                mousedown = true;
	                            } else {
	                                mousedown = false;
	                            }
	                        });
	
	                        _lgUtils2.default.on(_this.outer, 'mouseup.lg', function (e) {
	
	                            if (_lgUtils2.default.hasClass(e.target, 'lg-outer') || _lgUtils2.default.hasClass(e.target, 'lg-item') || _lgUtils2.default.hasClass(e.target, 'lg-img-wrap') && mousedown) {
	                                if (!_lgUtils2.default.hasClass(_this.outer, 'lg-dragging')) {
	                                    _this.destroy();
	                                }
	                            }
	                        });
	                    }
	                };
	
	                Plugin.prototype.destroy = function (d) {
	
	                    var _this = this;
	
	                    if (!d) {
	                        _lgUtils2.default.trigger(_this.el, 'onBeforeClose');
	                    }
	
	                    document.body.scrollTop = _this.prevScrollTop;
	                    document.documentElement.scrollTop = _this.prevScrollTop;
	
	                    /**
	                     * if d is false or undefined destroy will only close the gallery
	                     * plugins instance remains with the element
	                     *
	                     * if d is true destroy will completely remove the plugin
	                     */
	
	                    if (d) {
	                        if (!_this.s.dynamic) {
	                            // only when not using dynamic mode is $items a jquery collection
	
	                            for (var i = 0; i < this.items.length; i++) {
	                                _lgUtils2.default.off(this.items[i], '.lg');
	                                _lgUtils2.default.off(this.items[i], '.lgcustom');
	                            }
	                        }
	
	                        var lguid = _this.el.getAttribute('lg-uid');
	                        delete window.lgData[lguid];
	                        _this.el.removeAttribute('lg-uid');
	                    }
	
	                    // Unbind all events added by lightGallery
	                    _lgUtils2.default.off(this.el, '.lgtm');
	
	                    // Distroy all lightGallery modules
	                    for (var key in window.lgModules) {
	                        if (_this.modules[key]) {
	                            _this.modules[key].destroy();
	                        }
	                    }
	
	                    this.lGalleryOn = false;
	
	                    clearTimeout(_this.hideBartimeout);
	                    this.hideBartimeout = false;
	                    _lgUtils2.default.off(window, '.lg');
	                    _lgUtils2.default.removeClass(document.body, 'lg-on');
	                    _lgUtils2.default.removeClass(document.body, 'lg-from-hash');
	
	                    if (_this.outer) {
	                        _lgUtils2.default.removeClass(_this.outer, 'lg-visible');
	                    }
	
	                    _lgUtils2.default.removeClass(document.querySelector('.lg-backdrop'), 'in');
	                    setTimeout(function () {
	                        try {
	                            if (_this.outer) {
	                                _this.outer.parentNode.removeChild(_this.outer);
	                            }
	
	                            if (document.querySelector('.lg-backdrop')) {
	                                document.querySelector('.lg-backdrop').parentNode.removeChild(document.querySelector('.lg-backdrop'));
	                            }
	
	                            if (!d) {
	                                _lgUtils2.default.trigger(_this.el, 'onCloseAfter');
	                            }
	                        } catch (err) {}
	                    }, _this.s.backdropDuration + 50);
	                };
	
	                window.lightGallery = function (el, options) {
	                    if (!el) {
	                        return;
	                    }
	
	                    try {
	                        if (!el.getAttribute('lg-uid')) {
	                            var uid = 'lg' + window.lgData.uid++;
	                            window.lgData[uid] = new Plugin(el, options);
	                            el.setAttribute('lg-uid', uid);
	                        } else {
	                            try {
	                                window.lgData[el.getAttribute('lg-uid')].init();
	                            } catch (err) {
	                                console.error('lightGallery has not initiated properly');
	                            }
	                        }
	                    } catch (err) {
	                        console.error('lightGallery has not initiated properly');
	                    }
	                };
	            });
	        }, { "./lg-utils": 1 }] }, {}, [2])(2);
	});
	
	module.exports = window.lightGallery;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**!
	 * lg-fullscreen.js | 0.0.1 | July 25th 2016
	 * http://sachinchoolur.github.io/lightGallery/
	 * Copyright (c) 2016 Sachin N; 
	 * @license Apache 2.0 
	 */(function (f) {
	    if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
	        module.exports = f();
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        var g;if (typeof window !== "undefined") {
	            g = window;
	        } else if (typeof global !== "undefined") {
	            g = global;
	        } else if (typeof self !== "undefined") {
	            g = self;
	        } else {
	            g = this;
	        }g.LgFullsceen = f();
	    }
	})(function () {
	    var define, module, exports;return function e(t, n, r) {
	        function s(o, u) {
	            if (!n[o]) {
	                if (!t[o]) {
	                    var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
	                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
	                    var n = t[o][1][e];return s(n ? n : e);
	                }, l, l.exports, e, t, n, r);
	            }return n[o].exports;
	        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
	            s(r[o]);
	        }return s;
	    }({ 1: [function (require, module, exports) {
	            (function (global, factory) {
	                if (typeof define === "function" && define.amd) {
	                    define([], factory);
	                } else if (typeof exports !== "undefined") {
	                    factory();
	                } else {
	                    var mod = {
	                        exports: {}
	                    };
	                    factory();
	                    global.lgFullscreen = mod.exports;
	                }
	            })(this, function () {
	                'use strict';
	
	                var _extends = Object.assign || function (target) {
	                    for (var i = 1; i < arguments.length; i++) {
	                        var source = arguments[i];
	
	                        for (var key in source) {
	                            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                                target[key] = source[key];
	                            }
	                        }
	                    }
	
	                    return target;
	                };
	
	                var fullscreenDefaults = {
	                    fullScreen: true
	                };
	
	                var Fullscreen = function Fullscreen(element) {
	
	                    this.el = element;
	
	                    this.core = window.lgData[this.el.getAttribute('lg-uid')];
	                    this.core.s = _extends({}, fullscreenDefaults, this.core.s);
	
	                    this.init();
	
	                    return this;
	                };
	
	                Fullscreen.prototype.init = function () {
	                    var fullScreen = '';
	                    if (this.core.s.fullScreen) {
	
	                        // check for fullscreen browser support
	                        if (!document.fullscreenEnabled && !document.webkitFullscreenEnabled && !document.mozFullScreenEnabled && !document.msFullscreenEnabled) {
	                            return;
	                        } else {
	                            fullScreen = '<span class="lg-fullscreen lg-icon"></span>';
	                            this.core.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', fullScreen);
	                            this.fullScreen();
	                        }
	                    }
	                };
	
	                Fullscreen.prototype.requestFullscreen = function () {
	                    var el = document.documentElement;
	                    if (el.requestFullscreen) {
	                        el.requestFullscreen();
	                    } else if (el.msRequestFullscreen) {
	                        el.msRequestFullscreen();
	                    } else if (el.mozRequestFullScreen) {
	                        el.mozRequestFullScreen();
	                    } else if (el.webkitRequestFullscreen) {
	                        el.webkitRequestFullscreen();
	                    }
	                };
	
	                Fullscreen.prototype.exitFullscreen = function () {
	                    if (document.exitFullscreen) {
	                        document.exitFullscreen();
	                    } else if (document.msExitFullscreen) {
	                        document.msExitFullscreen();
	                    } else if (document.mozCancelFullScreen) {
	                        document.mozCancelFullScreen();
	                    } else if (document.webkitExitFullscreen) {
	                        document.webkitExitFullscreen();
	                    }
	                };
	
	                // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
	                Fullscreen.prototype.fullScreen = function () {
	                    var _this = this;
	
	                    utils.on(document, 'fullscreenchange.lgfullscreen webkitfullscreenchange.lgfullscreen mozfullscreenchange.lgfullscreen MSFullscreenChange.lgfullscreen', function () {
	                        if (utils.hasClass(_this.core.outer, 'lg-fullscreen-on')) {
	                            utils.removeClass(_this.core.outer, 'lg-fullscreen-on');
	                        } else {
	                            utils.addClass(_this.core.outer, 'lg-fullscreen-on');
	                        }
	                    });
	
	                    utils.on(this.core.outer.querySelector('.lg-fullscreen'), 'click.lg', function () {
	                        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
	                            _this.requestFullscreen();
	                        } else {
	                            _this.exitFullscreen();
	                        }
	                    });
	                };
	
	                Fullscreen.prototype.destroy = function () {
	
	                    // exit from fullscreen if activated
	                    this.exitFullscreen();
	
	                    utils.off(document, '.lgfullscreen');
	                };
	
	                window.lgModules.fullscreen = Fullscreen;
	            });
	        }, {}] }, {}, [1])(1);
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**!
	 * lg-zoom.js | 1.0.1 | December 22nd 2016
	 * http://sachinchoolur.github.io/lg-zoom.js
	 * Copyright (c) 2016 Sachin N; 
	 * @license GPLv3 
	 */(function (f) {
	    if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
	        module.exports = f();
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        var g;if (typeof window !== "undefined") {
	            g = window;
	        } else if (typeof global !== "undefined") {
	            g = global;
	        } else if (typeof self !== "undefined") {
	            g = self;
	        } else {
	            g = this;
	        }g.LgZoom = f();
	    }
	})(function () {
	    var define, module, exports;return function e(t, n, r) {
	        function s(o, u) {
	            if (!n[o]) {
	                if (!t[o]) {
	                    var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
	                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
	                    var n = t[o][1][e];return s(n ? n : e);
	                }, l, l.exports, e, t, n, r);
	            }return n[o].exports;
	        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
	            s(r[o]);
	        }return s;
	    }({ 1: [function (require, module, exports) {
	            (function (global, factory) {
	                if (typeof define === "function" && define.amd) {
	                    define([], factory);
	                } else if (typeof exports !== "undefined") {
	                    factory();
	                } else {
	                    var mod = {
	                        exports: {}
	                    };
	                    factory();
	                    global.lgZoom = mod.exports;
	                }
	            })(this, function () {
	                'use strict';
	
	                var _extends = Object.assign || function (target) {
	                    for (var i = 1; i < arguments.length; i++) {
	                        var source = arguments[i];
	
	                        for (var key in source) {
	                            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                                target[key] = source[key];
	                            }
	                        }
	                    }
	
	                    return target;
	                };
	
	                var getUseLeft = function getUseLeft() {
	                    var useLeft = false;
	                    var isChrome = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
	                    if (isChrome && parseInt(isChrome[2], 10) < 54) {
	                        useLeft = true;
	                    }
	
	                    return useLeft;
	                };
	
	                var zoomDefaults = {
	                    scale: 1,
	                    zoom: true,
	                    actualSize: true,
	                    enableZoomAfter: 300,
	                    useLeftForZoom: getUseLeft()
	                };
	
	                var Zoom = function Zoom(element) {
	
	                    this.el = element;
	
	                    this.core = window.lgData[this.el.getAttribute('lg-uid')];
	                    this.core.s = _extends({}, zoomDefaults, this.core.s);
	
	                    if (this.core.s.zoom && this.core.doCss()) {
	                        this.init();
	
	                        // Store the zoomable timeout value just to clear it while closing
	                        this.zoomabletimeout = false;
	
	                        // Set the initial value center
	                        this.pageX = window.innerWidth / 2;
	                        this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
	                    }
	
	                    return this;
	                };
	
	                Zoom.prototype.init = function () {
	
	                    var _this = this;
	                    var zoomIcons = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
	
	                    if (_this.core.s.actualSize) {
	                        zoomIcons += '<span id="lg-actual-size" class="lg-icon"></span>';
	                    }
	
	                    if (_this.core.s.useLeftForZoom) {
	                        utils.addClass(_this.core.outer, 'lg-use-left-for-zoom');
	                    } else {
	                        utils.addClass(_this.core.outer, 'lg-use-transition-for-zoom');
	                    }
	
	                    this.core.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', zoomIcons);
	
	                    // Add zoomable class
	                    utils.on(_this.core.el, 'onSlideItemLoad.lgtmzoom', function (event) {
	
	                        // delay will be 0 except first time
	                        var _speed = _this.core.s.enableZoomAfter + event.detail.delay;
	
	                        // set _speed value 0 if gallery opened from direct url and if it is first slide
	                        if (utils.hasClass(document.body, 'lg-from-hash') && event.detail.delay) {
	
	                            // will execute only once
	                            _speed = 0;
	                        } else {
	
	                            // Remove lg-from-hash to enable starting animation.
	                            utils.removeClass(document.body, 'lg-from-hash');
	                        }
	
	                        _this.zoomabletimeout = setTimeout(function () {
	                            utils.addClass(_this.core.___slide[event.detail.index], 'lg-zoomable');
	                        }, _speed + 30);
	                    });
	
	                    var scale = 1;
	                    /**
	                     * @desc Image zoom
	                     * Translate the wrap and scale the image to get better user experience
	                     *
	                     * @param {String} scaleVal - Zoom decrement/increment value
	                     */
	                    var zoom = function zoom(scaleVal) {
	
	                        var image = _this.core.outer.querySelector('.lg-current .lg-image');
	                        var _x;
	                        var _y;
	
	                        // Find offset manually to avoid issue after zoom
	                        var offsetX = (window.innerWidth - image.clientWidth) / 2;
	                        var offsetY = (window.innerHeight - image.clientHeight) / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
	
	                        _x = _this.pageX - offsetX;
	                        _y = _this.pageY - offsetY;
	
	                        var x = (scaleVal - 1) * _x;
	                        var y = (scaleVal - 1) * _y;
	
	                        utils.setVendor(image, 'Transform', 'scale3d(' + scaleVal + ', ' + scaleVal + ', 1)');
	                        image.setAttribute('data-scale', scaleVal);
	
	                        if (_this.core.s.useLeftForZoom) {
	                            image.parentElement.style.left = -x + 'px';
	                            image.parentElement.style.top = -y + 'px';
	                        } else {
	                            utils.setVendor(image.parentElement, 'Transform', 'translate3d(-' + x + 'px, -' + y + 'px, 0)');
	                        }
	
	                        image.parentElement.setAttribute('data-x', x);
	                        image.parentElement.setAttribute('data-y', y);
	                    };
	
	                    var callScale = function callScale() {
	                        if (scale > 1) {
	                            utils.addClass(_this.core.outer, 'lg-zoomed');
	                        } else {
	                            _this.resetZoom();
	                        }
	
	                        if (scale < 1) {
	                            scale = 1;
	                        }
	
	                        zoom(scale);
	                    };
	
	                    var actualSize = function actualSize(event, image, index, fromIcon) {
	                        var w = image.clientWidth;
	                        var nw;
	                        if (_this.core.s.dynamic) {
	                            nw = _this.core.s.dynamicEl[index].width || image.naturalWidth || w;
	                        } else {
	                            nw = _this.core.items[index].getAttribute('data-width') || image.naturalWidth || w;
	                        }
	
	                        var _scale;
	
	                        if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
	                            scale = 1;
	                        } else {
	                            if (nw > w) {
	                                _scale = nw / w;
	                                scale = _scale || 2;
	                            }
	                        }
	
	                        if (fromIcon) {
	                            _this.pageX = window.innerWidth / 2;
	                            _this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
	                        } else {
	                            _this.pageX = event.pageX || event.targetTouches[0].pageX;
	                            _this.pageY = event.pageY || event.targetTouches[0].pageY;
	                        }
	
	                        callScale();
	                        setTimeout(function () {
	                            utils.removeClass(_this.core.outer, 'lg-grabbing');
	                            utils.addClass(_this.core.outer, 'lg-grab');
	                        }, 10);
	                    };
	
	                    var tapped = false;
	
	                    // event triggered after appending slide content
	                    utils.on(_this.core.el, 'onAferAppendSlide.lgtmzoom', function (event) {
	
	                        var index = event.detail.index;
	
	                        // Get the current element
	                        var image = _this.core.___slide[index].querySelector('.lg-image');
	
	                        if (!_this.core.isTouch) {
	                            utils.on(image, 'dblclick', function (event) {
	                                actualSize(event, image, index);
	                            });
	                        }
	
	                        if (_this.core.isTouch) {
	                            utils.on(image, 'touchstart', function (event) {
	                                if (!tapped) {
	                                    tapped = setTimeout(function () {
	                                        tapped = null;
	                                    }, 300);
	                                } else {
	                                    clearTimeout(tapped);
	                                    tapped = null;
	                                    actualSize(event, image, index);
	                                }
	
	                                event.preventDefault();
	                            });
	                        }
	                    });
	
	                    // Update zoom on resize and orientationchange
	                    utils.on(window, 'resize.lgzoom scroll.lgzoom orientationchange.lgzoom', function () {
	                        _this.pageX = window.innerWidth / 2;
	                        _this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
	                        zoom(scale);
	                    });
	
	                    utils.on(document.getElementById('lg-zoom-out'), 'click.lg', function () {
	                        if (_this.core.outer.querySelector('.lg-current .lg-image')) {
	                            scale -= _this.core.s.scale;
	                            callScale();
	                        }
	                    });
	
	                    utils.on(document.getElementById('lg-zoom-in'), 'click.lg', function () {
	                        if (_this.core.outer.querySelector('.lg-current .lg-image')) {
	                            scale += _this.core.s.scale;
	                            callScale();
	                        }
	                    });
	
	                    utils.on(document.getElementById('lg-actual-size'), 'click.lg', function (event) {
	                        actualSize(event, _this.core.___slide[_this.core.index].querySelector('.lg-image'), _this.core.index, true);
	                    });
	
	                    // Reset zoom on slide change
	                    utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {
	                        scale = 1;
	                        _this.resetZoom();
	                    });
	
	                    // Drag option after zoom
	                    if (!_this.core.isTouch) {
	                        _this.zoomDrag();
	                    }
	
	                    if (_this.core.isTouch) {
	                        _this.zoomSwipe();
	                    }
	                };
	
	                // Reset zoom effect
	                Zoom.prototype.resetZoom = function () {
	                    utils.removeClass(this.core.outer, 'lg-zoomed');
	                    for (var i = 0; i < this.core.___slide.length; i++) {
	                        if (this.core.___slide[i].querySelector('.lg-img-wrap')) {
	                            this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('style');
	                            this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('data-x');
	                            this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('data-y');
	                        }
	                    }
	
	                    for (var j = 0; j < this.core.___slide.length; j++) {
	                        if (this.core.___slide[j].querySelector('.lg-image')) {
	                            this.core.___slide[j].querySelector('.lg-image').removeAttribute('style');
	                            this.core.___slide[j].querySelector('.lg-image').removeAttribute('data-scale');
	                        }
	                    }
	
	                    // Reset pagx pagy values to center
	                    this.pageX = window.innerWidth / 2;
	                    this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
	                };
	
	                Zoom.prototype.zoomSwipe = function () {
	                    var _this = this;
	                    var startCoords = {};
	                    var endCoords = {};
	                    var isMoved = false;
	
	                    // Allow x direction drag
	                    var allowX = false;
	
	                    // Allow Y direction drag
	                    var allowY = false;
	
	                    for (var i = 0; i < _this.core.___slide.length; i++) {
	
	                        /*jshint loopfunc: true */
	                        utils.on(_this.core.___slide[i], 'touchstart.lg', function (e) {
	
	                            if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
	                                var image = _this.core.___slide[_this.core.index].querySelector('.lg-object');
	
	                                allowY = image.offsetHeight * image.getAttribute('data-scale') > _this.core.outer.querySelector('.lg').clientHeight;
	                                allowX = image.offsetWidth * image.getAttribute('data-scale') > _this.core.outer.querySelector('.lg').clientWidth;
	                                if (allowX || allowY) {
	                                    e.preventDefault();
	                                    startCoords = {
	                                        x: e.targetTouches[0].pageX,
	                                        y: e.targetTouches[0].pageY
	                                    };
	                                }
	                            }
	                        });
	                    }
	
	                    for (var j = 0; j < _this.core.___slide.length; j++) {
	
	                        /*jshint loopfunc: true */
	                        utils.on(_this.core.___slide[j], 'touchmove.lg', function (e) {
	
	                            if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
	
	                                var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');
	                                var distanceX;
	                                var distanceY;
	
	                                e.preventDefault();
	                                isMoved = true;
	
	                                endCoords = {
	                                    x: e.targetTouches[0].pageX,
	                                    y: e.targetTouches[0].pageY
	                                };
	
	                                // reset opacity and transition duration
	                                utils.addClass(_this.core.outer, 'lg-zoom-dragging');
	
	                                if (allowY) {
	                                    distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y);
	                                } else {
	                                    distanceY = -Math.abs(_el.getAttribute('data-y'));
	                                }
	
	                                if (allowX) {
	                                    distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x);
	                                } else {
	                                    distanceX = -Math.abs(_el.getAttribute('data-x'));
	                                }
	
	                                if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
	
	                                    if (_this.core.s.useLeftForZoom) {
	                                        _el.style.left = distanceX + 'px';
	                                        _el.style.top = distanceY + 'px';
	                                    } else {
	                                        utils.setVendor(_el, 'Transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
	                                    }
	                                }
	                            }
	                        });
	                    }
	
	                    for (var k = 0; k < _this.core.___slide.length; k++) {
	
	                        /*jshint loopfunc: true */
	                        utils.on(_this.core.___slide[k], 'touchend.lg', function () {
	                            if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
	                                if (isMoved) {
	                                    isMoved = false;
	                                    utils.removeClass(_this.core.outer, 'lg-zoom-dragging');
	                                    _this.touchendZoom(startCoords, endCoords, allowX, allowY);
	                                }
	                            }
	                        });
	                    }
	                };
	
	                Zoom.prototype.zoomDrag = function () {
	
	                    var _this = this;
	                    var startCoords = {};
	                    var endCoords = {};
	                    var isDraging = false;
	                    var isMoved = false;
	
	                    // Allow x direction drag
	                    var allowX = false;
	
	                    // Allow Y direction drag
	                    var allowY = false;
	
	                    for (var i = 0; i < _this.core.___slide.length; i++) {
	
	                        /*jshint loopfunc: true */
	                        utils.on(_this.core.___slide[i], 'mousedown.lgzoom', function (e) {
	
	                            // execute only on .lg-object
	                            var image = _this.core.___slide[_this.core.index].querySelector('.lg-object');
	
	                            allowY = image.offsetHeight * image.getAttribute('data-scale') > _this.core.outer.querySelector('.lg').clientHeight;
	                            allowX = image.offsetWidth * image.getAttribute('data-scale') > _this.core.outer.querySelector('.lg').clientWidth;
	
	                            if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
	                                if (utils.hasClass(e.target, 'lg-object') && (allowX || allowY)) {
	                                    e.preventDefault();
	                                    startCoords = {
	                                        x: e.pageX,
	                                        y: e.pageY
	                                    };
	
	                                    isDraging = true;
	
	                                    // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
	                                    _this.core.outer.scrollLeft += 1;
	                                    _this.core.outer.scrollLeft -= 1;
	
	                                    utils.removeClass(_this.core.outer, 'lg-grab');
	                                    utils.addClass(_this.core.outer, 'lg-grabbing');
	                                }
	                            }
	                        });
	                    }
	
	                    utils.on(window, 'mousemove.lgzoom', function (e) {
	                        if (isDraging) {
	                            var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');
	                            var distanceX;
	                            var distanceY;
	
	                            isMoved = true;
	                            endCoords = {
	                                x: e.pageX,
	                                y: e.pageY
	                            };
	
	                            // reset opacity and transition duration
	                            utils.addClass(_this.core.outer, 'lg-zoom-dragging');
	
	                            if (allowY) {
	                                distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y);
	                            } else {
	                                distanceY = -Math.abs(_el.getAttribute('data-y'));
	                            }
	
	                            if (allowX) {
	                                distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x);
	                            } else {
	                                distanceX = -Math.abs(_el.getAttribute('data-x'));
	                            }
	
	                            if (_this.core.s.useLeftForZoom) {
	                                _el.style.left = distanceX + 'px';
	                                _el.style.top = distanceY + 'px';
	                            } else {
	                                utils.setVendor(_el, 'Transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
	                            }
	                        }
	                    });
	
	                    utils.on(window, 'mouseup.lgzoom', function (e) {
	
	                        if (isDraging) {
	                            isDraging = false;
	                            utils.removeClass(_this.core.outer, 'lg-zoom-dragging');
	
	                            // Fix for chrome mouse move on click
	                            if (isMoved && (startCoords.x !== endCoords.x || startCoords.y !== endCoords.y)) {
	                                endCoords = {
	                                    x: e.pageX,
	                                    y: e.pageY
	                                };
	                                _this.touchendZoom(startCoords, endCoords, allowX, allowY);
	                            }
	
	                            isMoved = false;
	                        }
	
	                        utils.removeClass(_this.core.outer, 'lg-grabbing');
	                        utils.addClass(_this.core.outer, 'lg-grab');
	                    });
	                };
	
	                Zoom.prototype.touchendZoom = function (startCoords, endCoords, allowX, allowY) {
	
	                    var _this = this;
	                    var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');
	                    var image = _this.core.___slide[_this.core.index].querySelector('.lg-object');
	                    var distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x);
	                    var distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y);
	                    var minY = (_this.core.outer.querySelector('.lg').clientHeight - image.offsetHeight) / 2;
	                    var maxY = Math.abs(image.offsetHeight * Math.abs(image.getAttribute('data-scale')) - _this.core.outer.querySelector('.lg').clientHeight + minY);
	                    var minX = (_this.core.outer.querySelector('.lg').clientWidth - image.offsetWidth) / 2;
	                    var maxX = Math.abs(image.offsetWidth * Math.abs(image.getAttribute('data-scale')) - _this.core.outer.querySelector('.lg').clientWidth + minX);
	
	                    if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
	                        if (allowY) {
	                            if (distanceY <= -maxY) {
	                                distanceY = -maxY;
	                            } else if (distanceY >= -minY) {
	                                distanceY = -minY;
	                            }
	                        }
	
	                        if (allowX) {
	                            if (distanceX <= -maxX) {
	                                distanceX = -maxX;
	                            } else if (distanceX >= -minX) {
	                                distanceX = -minX;
	                            }
	                        }
	
	                        if (allowY) {
	                            _el.setAttribute('data-y', Math.abs(distanceY));
	                        } else {
	                            distanceY = -Math.abs(_el.getAttribute('data-y'));
	                        }
	
	                        if (allowX) {
	                            _el.setAttribute('data-x', Math.abs(distanceX));
	                        } else {
	                            distanceX = -Math.abs(_el.getAttribute('data-x'));
	                        }
	
	                        if (_this.core.s.useLeftForZoom) {
	                            _el.style.left = distanceX + 'px';
	                            _el.style.top = distanceY + 'px';
	                        } else {
	                            utils.setVendor(_el, 'Transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
	                        }
	                    }
	                };
	
	                Zoom.prototype.destroy = function () {
	
	                    var _this = this;
	
	                    // Unbind all events added by lightGallery zoom plugin
	                    utils.off(_this.core.el, '.lgzoom');
	                    utils.off(window, '.lgzoom');
	                    for (var i = 0; i < _this.core.___slide.length; i++) {
	                        utils.off(_this.core.___slide[i], '.lgzoom');
	                    }
	
	                    utils.off(_this.core.el, '.lgtmzoom');
	                    _this.resetZoom();
	                    clearTimeout(_this.zoomabletimeout);
	                    _this.zoomabletimeout = false;
	                };
	
	                window.lgModules.zoom = Zoom;
	            });
	        }, {}] }, {}, [1])(1);
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**!
	 * lg-pager.js | 0.0.1 | July 25th 2016
	 * http://sachinchoolur.github.io/lightGallery/
	 * Copyright (c) 2016 Sachin N; 
	 * @license Apache 2.0 
	 */(function (f) {
	    if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
	        module.exports = f();
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        var g;if (typeof window !== "undefined") {
	            g = window;
	        } else if (typeof global !== "undefined") {
	            g = global;
	        } else if (typeof self !== "undefined") {
	            g = self;
	        } else {
	            g = this;
	        }g.LgPager = f();
	    }
	})(function () {
	    var define, module, exports;return function e(t, n, r) {
	        function s(o, u) {
	            if (!n[o]) {
	                if (!t[o]) {
	                    var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
	                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
	                    var n = t[o][1][e];return s(n ? n : e);
	                }, l, l.exports, e, t, n, r);
	            }return n[o].exports;
	        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
	            s(r[o]);
	        }return s;
	    }({ 1: [function (require, module, exports) {
	            (function (global, factory) {
	                if (typeof define === "function" && define.amd) {
	                    define([], factory);
	                } else if (typeof exports !== "undefined") {
	                    factory();
	                } else {
	                    var mod = {
	                        exports: {}
	                    };
	                    factory();
	                    global.lgPager = mod.exports;
	                }
	            })(this, function () {
	                'use strict';
	
	                var _extends = Object.assign || function (target) {
	                    for (var i = 1; i < arguments.length; i++) {
	                        var source = arguments[i];
	
	                        for (var key in source) {
	                            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                                target[key] = source[key];
	                            }
	                        }
	                    }
	
	                    return target;
	                };
	
	                var pagerDefaults = {
	                    pager: false
	                };
	
	                var Pager = function Pager(element) {
	
	                    this.el = element;
	
	                    this.core = window.lgData[this.el.getAttribute('lg-uid')];
	                    this.core.s = _extends({}, pagerDefaults, this.core.s);
	
	                    if (this.core.s.pager && this.core.items.length > 1) {
	                        this.init();
	                    }
	
	                    return this;
	                };
	
	                Pager.prototype.init = function () {
	                    var _this = this;
	                    var pagerList = '';
	                    var $pagerCont;
	                    var $pagerOuter;
	                    var timeout;
	
	                    _this.core.outer.querySelector('.lg').insertAdjacentHTML('beforeend', '<div class="lg-pager-outer"></div>');
	
	                    if (_this.core.s.dynamic) {
	                        for (var j = 0; j < _this.core.s.dynamicEl.length; j++) {
	                            pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.s.dynamicEl[j].thumb + '" /></div></span>';
	                        }
	                    } else {
	                        for (var i = 0; i < _this.core.items.length; i++) {
	                            if (!_this.core.s.exThumbImage) {
	                                pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.items[i].querySelector('img').getAttribute('src') + '" /></div></span>';
	                            } else {
	                                pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.items[i].getAttribute(_this.core.s.exThumbImage) + '" /></div></span>';
	                            }
	                        }
	                    }
	
	                    $pagerOuter = _this.core.outer.querySelector('.lg-pager-outer');
	
	                    $pagerOuter.innerHTML = pagerList;
	
	                    $pagerCont = _this.core.outer.querySelectorAll('.lg-pager-cont');
	                    for (var k = 0; k < $pagerCont.length; k++) {
	
	                        /*jshint loopfunc: true */
	                        (function (index) {
	                            utils.on($pagerCont[index], 'click.lg touchend.lg', function () {
	                                _this.core.index = index;
	                                _this.core.slide(_this.core.index, false, false);
	                            });
	                        })(k);
	                    }
	
	                    utils.on($pagerOuter, 'mouseover.lg', function () {
	                        clearTimeout(timeout);
	                        utils.addClass($pagerOuter, 'lg-pager-hover');
	                    });
	
	                    utils.on($pagerOuter, 'mouseout.lg', function () {
	                        timeout = setTimeout(function () {
	                            utils.removeClass($pagerOuter, 'lg-pager-hover');
	                        });
	                    });
	
	                    utils.on(_this.core.el, 'onBeforeSlide.lgtm', function (e) {
	                        for (var n = 0; n < $pagerCont.length; n++) {
	                            utils.removeClass($pagerCont[n], 'lg-pager-active');
	                            if (e.detail.index === n) {
	                                utils.addClass($pagerCont[n], 'lg-pager-active');
	                            }
	                        }
	                    });
	                };
	
	                Pager.prototype.destroy = function () {};
	
	                window.lgModules.pager = Pager;
	            });
	        }, {}] }, {}, [1])(1);
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (f) {
	    if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
	        module.exports = f();
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        var g;if (typeof window !== "undefined") {
	            g = window;
	        } else if (typeof global !== "undefined") {
	            g = global;
	        } else if (typeof self !== "undefined") {
	            g = self;
	        } else {
	            g = this;
	        }g.LgAutoplay = f();
	    }
	})(function () {
	    var define, module, exports;return function e(t, n, r) {
	        function s(o, u) {
	            if (!n[o]) {
	                if (!t[o]) {
	                    var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
	                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
	                    var n = t[o][1][e];return s(n ? n : e);
	                }, l, l.exports, e, t, n, r);
	            }return n[o].exports;
	        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
	            s(r[o]);
	        }return s;
	    }({ 1: [function (require, module, exports) {
	            (function (global, factory) {
	                if (typeof define === "function" && define.amd) {
	                    define([], factory);
	                } else if (typeof exports !== "undefined") {
	                    factory();
	                } else {
	                    var mod = {
	                        exports: {}
	                    };
	                    factory();
	                    global.lgAutoplay = mod.exports;
	                }
	            })(this, function () {
	                'use strict';
	
	                var _extends = Object.assign || function (target) {
	                    for (var i = 1; i < arguments.length; i++) {
	                        var source = arguments[i];
	
	                        for (var key in source) {
	                            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                                target[key] = source[key];
	                            }
	                        }
	                    }
	
	                    return target;
	                };
	
	                var autoplayDefaults = {
	                    autoplay: false,
	                    pause: 5000,
	                    progressBar: true,
	                    fourceAutoplay: false,
	                    autoplayControls: true,
	                    appendAutoplayControlsTo: '.lg-toolbar'
	                };
	
	                /**
	                 * Creates the autoplay plugin.
	                 * @param {object} element - lightGallery element
	                 */
	                var Autoplay = function Autoplay(element) {
	
	                    this.el = element;
	
	                    this.core = window.lgData[this.el.getAttribute('lg-uid')];
	
	                    // Execute only if items are above 1
	                    if (this.core.items.length < 2) {
	                        return false;
	                    }
	
	                    this.core.s = _extends({}, autoplayDefaults, this.core.s);
	                    this.interval = false;
	
	                    // Identify if slide happened from autoplay
	                    this.fromAuto = true;
	
	                    // Identify if autoplay canceled from touch/drag
	                    this.canceledOnTouch = false;
	
	                    // save fourceautoplay value
	                    this.fourceAutoplayTemp = this.core.s.fourceAutoplay;
	
	                    // do not allow progress bar if browser does not support css3 transitions
	                    if (!this.core.doCss()) {
	                        this.core.s.progressBar = false;
	                    }
	
	                    this.init();
	
	                    return this;
	                };
	
	                Autoplay.prototype.init = function () {
	                    var _this = this;
	
	                    // append autoplay controls
	                    if (_this.core.s.autoplayControls) {
	                        _this.controls();
	                    }
	
	                    // Create progress bar
	                    if (_this.core.s.progressBar) {
	                        _this.core.outer.querySelector('.lg').insertAdjacentHTML('beforeend', '<div class="lg-progress-bar"><div class="lg-progress"></div></div>');
	                    }
	
	                    // set progress
	                    _this.progress();
	
	                    // Start autoplay
	                    if (_this.core.s.autoplay) {
	                        _this.startlAuto();
	                    }
	
	                    // cancel interval on touchstart and dragstart
	                    utils.on(_this.el, 'onDragstart.lgtm touchstart.lgtm', function () {
	                        if (_this.interval) {
	                            _this.cancelAuto();
	                            _this.canceledOnTouch = true;
	                        }
	                    });
	
	                    // restore autoplay if autoplay canceled from touchstart / dragstart
	                    utils.on(_this.el, 'onDragend.lgtm touchend.lgtm onSlideClick.lgtm', function () {
	                        if (!_this.interval && _this.canceledOnTouch) {
	                            _this.startlAuto();
	                            _this.canceledOnTouch = false;
	                        }
	                    });
	                };
	
	                Autoplay.prototype.progress = function () {
	
	                    var _this = this;
	                    var _progressBar;
	                    var _progress;
	
	                    utils.on(_this.el, 'onBeforeSlide.lgtm', function () {
	
	                        // start progress bar animation
	                        if (_this.core.s.progressBar && _this.fromAuto) {
	                            _progressBar = _this.core.outer.querySelector('.lg-progress-bar');
	                            _progress = _this.core.outer.querySelector('.lg-progress');
	                            if (_this.interval) {
	                                _progress.removeAttribute('style');
	                                utils.removeClass(_progressBar, 'lg-start');
	                                setTimeout(function () {
	                                    utils.setVendor(_progress, 'Transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
	                                    utils.addClass(_progressBar, 'lg-start');
	                                }, 20);
	                            }
	                        }
	
	                        // Remove setinterval if slide is triggered manually and fourceautoplay is false
	                        if (!_this.fromAuto && !_this.core.s.fourceAutoplay) {
	                            _this.cancelAuto();
	                        }
	
	                        _this.fromAuto = false;
	                    });
	                };
	
	                // Manage autoplay via play/stop buttons
	                Autoplay.prototype.controls = function () {
	                    var _this = this;
	                    var _html = '<span class="lg-autoplay-button lg-icon"></span>';
	
	                    // Append autoplay controls
	                    _this.core.outer.querySelector(this.core.s.appendAutoplayControlsTo).insertAdjacentHTML('beforeend', _html);
	
	                    utils.on(_this.core.outer.querySelector('.lg-autoplay-button'), 'click.lg', function () {
	                        if (utils.hasClass(_this.core.outer, 'lg-show-autoplay')) {
	                            _this.cancelAuto();
	                            _this.core.s.fourceAutoplay = false;
	                        } else {
	                            if (!_this.interval) {
	                                _this.startlAuto();
	                                _this.core.s.fourceAutoplay = _this.fourceAutoplayTemp;
	                            }
	                        }
	                    });
	                };
	
	                // Autostart gallery
	                Autoplay.prototype.startlAuto = function () {
	                    var _this = this;
	
	                    utils.setVendor(_this.core.outer.querySelector('.lg-progress'), 'Transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
	                    utils.addClass(_this.core.outer, 'lg-show-autoplay');
	                    utils.addClass(_this.core.outer.querySelector('.lg-progress-bar'), 'lg-start');
	
	                    _this.interval = setInterval(function () {
	                        if (_this.core.index + 1 < _this.core.items.length) {
	                            _this.core.index++;
	                        } else {
	                            _this.core.index = 0;
	                        }
	
	                        _this.fromAuto = true;
	                        _this.core.slide(_this.core.index, false, false);
	                    }, _this.core.s.speed + _this.core.s.pause);
	                };
	
	                // cancel Autostart
	                Autoplay.prototype.cancelAuto = function () {
	                    clearInterval(this.interval);
	                    this.interval = false;
	                    if (this.core.outer.querySelector('.lg-progress')) {
	                        this.core.outer.querySelector('.lg-progress').removeAttribute('style');
	                    }
	
	                    utils.removeClass(this.core.outer, 'lg-show-autoplay');
	                    utils.removeClass(this.core.outer.querySelector('.lg-progress-bar'), 'lg-start');
	                };
	
	                Autoplay.prototype.destroy = function () {
	
	                    this.cancelAuto();
	                    if (this.core.outer.querySelector('.lg-progress-bar')) {
	                        this.core.outer.querySelector('.lg-progress-bar').parentNode.removeChild(this.core.outer.querySelector('.lg-progress-bar'));
	                    }
	                };
	
	                window.lgModules.autoplay = Autoplay;
	            });
	        }, {}] }, {}, [1])(1);
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (f) {
	    if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
	        module.exports = f();
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        var g;if (typeof window !== "undefined") {
	            g = window;
	        } else if (typeof global !== "undefined") {
	            g = global;
	        } else if (typeof self !== "undefined") {
	            g = self;
	        } else {
	            g = this;
	        }g.LgShare = f();
	    }
	})(function () {
	    var define, module, exports;return function e(t, n, r) {
	        function s(o, u) {
	            if (!n[o]) {
	                if (!t[o]) {
	                    var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
	                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
	                    var n = t[o][1][e];return s(n ? n : e);
	                }, l, l.exports, e, t, n, r);
	            }return n[o].exports;
	        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
	            s(r[o]);
	        }return s;
	    }({ 1: [function (require, module, exports) {
	            (function (global, factory) {
	                if (typeof define === "function" && define.amd) {
	                    define([], factory);
	                } else if (typeof exports !== "undefined") {
	                    factory();
	                } else {
	                    var mod = {
	                        exports: {}
	                    };
	                    factory();
	                    global.lgShare = mod.exports;
	                }
	            })(this, function () {
	                'use strict';
	
	                var _extends = Object.assign || function (target) {
	                    for (var i = 1; i < arguments.length; i++) {
	                        var source = arguments[i];
	
	                        for (var key in source) {
	                            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                                target[key] = source[key];
	                            }
	                        }
	                    }
	
	                    return target;
	                };
	
	                var shareSefaults = {
	                    share: true,
	                    facebook: true,
	                    facebookDropdownText: 'Facebook',
	                    twitter: true,
	                    twitterDropdownText: 'Twitter',
	                    googlePlus: true,
	                    googlePlusDropdownText: 'GooglePlus',
	                    pinterest: true,
	                    pinterestDropdownText: 'Pinterest'
	                };
	
	                var Share = function Share(element) {
	
	                    this.el = element;
	
	                    this.core = window.lgData[this.el.getAttribute('lg-uid')];
	                    this.core.s = _extends({}, shareSefaults, this.core.s);
	
	                    if (this.core.s.share) {
	                        this.init();
	                    }
	
	                    return this;
	                };
	
	                Share.prototype.init = function () {
	                    var _this = this;
	                    var shareHtml = '<span id="lg-share" class="lg-icon">' + '<ul class="lg-dropdown" style="position: absolute;">';
	                    shareHtml += _this.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + '</span></a></li>' : '';
	                    shareHtml += _this.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + '</span></a></li>' : '';
	                    shareHtml += _this.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + '</span></a></li>' : '';
	                    shareHtml += _this.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + '</span></a></li>' : '';
	                    shareHtml += '</ul></span>';
	
	                    this.core.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', shareHtml);
	                    this.core.outer.querySelector('.lg').insertAdjacentHTML('beforeend', '<div id="lg-dropdown-overlay"></div>');
	                    utils.on(document.getElementById('lg-share'), 'click.lg', function () {
	                        if (utils.hasClass(_this.core.outer, 'lg-dropdown-active')) {
	                            utils.removeClass(_this.core.outer, 'lg-dropdown-active');
	                        } else {
	                            utils.addClass(_this.core.outer, 'lg-dropdown-active');
	                        }
	                    });
	
	                    utils.on(document.getElementById('lg-dropdown-overlay'), 'click.lg', function () {
	                        utils.removeClass(_this.core.outer, 'lg-dropdown-active');
	                    });
	
	                    utils.on(_this.core.el, 'onAfterSlide.lgtm', function (event) {
	
	                        setTimeout(function () {
	                            document.getElementById('lg-share-facebook').setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(_this.core.items[event.detail.index].getAttribute('data-facebook-share-url') || window.location.href));
	
	                            document.getElementById('lg-share-twitter').setAttribute('href', 'https://twitter.com/intent/tweet?text=' + _this.core.items[event.detail.index].getAttribute('data-tweet-text') + '&url=' + encodeURIComponent(_this.core.items[event.detail.index].getAttribute('data-twitter-share-url') || window.location.href));
	
	                            document.getElementById('lg-share-googleplus').setAttribute('href', 'https://plus.google.com/share?url=' + encodeURIComponent(_this.core.items[event.detail.index].getAttribute('data-googleplus-share-url') || window.location.href));
	
	                            document.getElementById('lg-share-pinterest').setAttribute('href', 'http://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent(_this.core.items[event.detail.index].getAttribute('data-pinterest-share-url') || window.location.href) + '&media=' + encodeURIComponent(_this.core.items[event.detail.index].getAttribute('href') || _this.core.items[event.detail.index].getAttribute('data-src')) + '&description=' + _this.core.items[event.detail.index].getAttribute('data-pinterest-text'));
	                        }, 100);
	                    });
	                };
	
	                Share.prototype.destroy = function () {};
	
	                window.lgModules.share = Share;
	            });
	        }, {}] }, {}, [1])(1);
	});

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map