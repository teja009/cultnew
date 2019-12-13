/**
 * cbpScroller.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
!function(a){"use strict";function c(){var c=b.clientHeight,d=a.innerHeight;return c<d?d:c}function d(){return a.pageYOffset||b.scrollTop}function e(a){var b=0,c=0;do isNaN(a.offsetTop)||(b+=a.offsetTop),isNaN(a.offsetLeft)||(c+=a.offsetLeft);while(a=a.offsetParent);return{top:b,left:c}}function f(a,b){var f=a.offsetHeight,g=d(),h=g+c(),i=e(a).top,j=i+f,b=b||0;return i+f*b<=h&&j>=g}function g(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function h(a,b){this.el=a,this.options=g(this.defaults,b),this._init()}var b=a.document.documentElement;h.prototype={defaults:{viewportFactor:.2},_init:function(){if(!Modernizr.touch){this.sections=Array.prototype.slice.call(this.el.querySelectorAll(".cbp-so-section")),this.didScroll=!1;var b=this;this.sections.forEach(function(a,b){f(a)||classie.add(a,"cbp-so-init")});var c=function(){b.didScroll||(b.didScroll=!0,setTimeout(function(){b._scrollPage()},60))},d=function(){function a(){b._scrollPage(),b.resizeTimeout=null}b.resizeTimeout&&clearTimeout(b.resizeTimeout),b.resizeTimeout=setTimeout(a,200)};a.addEventListener("scroll",c,!1),a.addEventListener("resize",d,!1)}},_scrollPage:function(){var a=this;this.sections.forEach(function(b,c){f(b,a.options.viewportFactor)?classie.add(b,"cbp-so-animate"):(classie.add(b,"cbp-so-init"),classie.remove(b,"cbp-so-animate"))}),this.didScroll=!1}},a.cbpScroller=h}(window);