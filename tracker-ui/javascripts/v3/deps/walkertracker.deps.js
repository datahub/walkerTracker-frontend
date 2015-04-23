// Modernizr
window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.8.3",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document);
// Foundation
(function ($, window, document, undefined) {
  'use strict';

  var header_helpers = function (class_array) {
    var i = class_array.length;
    var head = $('head');

    while (i--) {
      if (head.has('.' + class_array[i]).length === 0) {
        head.append('<meta class="' + class_array[i] + '" />');
      }
    }
  };

  header_helpers([
    'foundation-mq-small',
    'foundation-mq-small-only',
    'foundation-mq-medium',
    'foundation-mq-medium-only',
    'foundation-mq-large',
    'foundation-mq-large-only',
    'foundation-mq-xlarge',
    'foundation-mq-xlarge-only',
    'foundation-mq-xxlarge',
    'foundation-data-attribute-namespace']);

  // Enable FastClick if present

  $(function () {
    if (typeof FastClick !== 'undefined') {
      // Don't attach to body if undefined
      if (typeof document.body !== 'undefined') {
        FastClick.attach(document.body);
      }
    }
  });

  // private Fast Selector wrapper,
  // returns jQuery object. Only use where
  // getElementById is not available.
  var S = function (selector, context) {
    if (typeof selector === 'string') {
      if (context) {
        var cont;
        if (context.jquery) {
          cont = context[0];
          if (!cont) {
            return context;
          }
        } else {
          cont = context;
        }
        return $(cont.querySelectorAll(selector));
      }

      return $(document.querySelectorAll(selector));
    }

    return $(selector, context);
  };

  // Namespace functions.

  var attr_name = function (init) {
    var arr = [];
    if (!init) {
      arr.push('data');
    }
    if (this.namespace.length > 0) {
      arr.push(this.namespace);
    }
    arr.push(this.name);

    return arr.join('-');
  };

  var add_namespace = function (str) {
    var parts = str.split('-'),
        i = parts.length,
        arr = [];

    while (i--) {
      if (i !== 0) {
        arr.push(parts[i]);
      } else {
        if (this.namespace.length > 0) {
          arr.push(this.namespace, parts[i]);
        } else {
          arr.push(parts[i]);
        }
      }
    }

    return arr.reverse().join('-');
  };

  // Event binding and data-options updating.

  var bindings = function (method, options) {
    var self = this,
        bind = function(){
          var $this = S(this),
              should_bind_events = !$this.data(self.attr_name(true) + '-init');
          $this.data(self.attr_name(true) + '-init', $.extend({}, self.settings, (options || method), self.data_options($this)));

          if (should_bind_events) {
            self.events(this);
          }
        };

    if (S(this.scope).is('[' + this.attr_name() +']')) {
      bind.call(this.scope);
    } else {
      S('[' + this.attr_name() +']', this.scope).each(bind);
    }
    // # Patch to fix #5043 to move this *after* the if/else clause in order for Backbone and similar frameworks to have improved control over event binding and data-options updating.
    if (typeof method === 'string') {
      return this[method].call(this, options);
    }

  };

  var single_image_loaded = function (image, callback) {
    function loaded () {
      callback(image[0]);
    }

    function bindLoad () {
      this.one('load', loaded);

      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var src = this.attr( 'src' ),
            param = src.match( /\?/ ) ? '&' : '?';

        param += 'random=' + (new Date()).getTime();
        this.attr('src', src + param);
      }
    }

    if (!image.attr('src')) {
      loaded();
      return;
    }

    if (image[0].complete || image[0].readyState === 4) {
      loaded();
    } else {
      bindLoad.call(image);
    }
  };

  /*
    https://github.com/paulirish/matchMedia.js
  */

  window.matchMedia = window.matchMedia || (function ( doc ) {

    'use strict';

    var bool,
        docElem = doc.documentElement,
        refNode = docElem.firstElementChild || docElem.firstChild,
        // fakeBody required for <FF4 when executed in <head>
        fakeBody = doc.createElement( 'body' ),
        div = doc.createElement( 'div' );

    div.id = 'mq-test-1';
    div.style.cssText = 'position:absolute;top:-100em';
    fakeBody.style.background = 'none';
    fakeBody.appendChild(div);

    return function (q) {

      div.innerHTML = '&shy;<style media="' + q + '"> #mq-test-1 { width: 42px; }</style>';

      docElem.insertBefore( fakeBody, refNode );
      bool = div.offsetWidth === 42;
      docElem.removeChild( fakeBody );

      return {
        matches : bool,
        media : q
      };

    };

  }( document ));

  /*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */

  (function(jQuery) {


  // requestAnimationFrame polyfill adapted from Erik MÃ¶ller
  // fixes from Paul Irish and Tino Zijdel
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

  var animating,
      lastTime = 0,
      vendors = ['webkit', 'moz'],
      requestAnimationFrame = window.requestAnimationFrame,
      cancelAnimationFrame = window.cancelAnimationFrame,
      jqueryFxAvailable = 'undefined' !== typeof jQuery.fx;

  for (; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {
    requestAnimationFrame = window[ vendors[lastTime] + 'RequestAnimationFrame' ];
    cancelAnimationFrame = cancelAnimationFrame ||
      window[ vendors[lastTime] + 'CancelAnimationFrame' ] ||
      window[ vendors[lastTime] + 'CancelRequestAnimationFrame' ];
  }

  function raf() {
    if (animating) {
      requestAnimationFrame(raf);

      if (jqueryFxAvailable) {
        jQuery.fx.tick();
      }
    }
  }

  if (requestAnimationFrame) {
    // use rAF
    window.requestAnimationFrame = requestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;

    if (jqueryFxAvailable) {
      jQuery.fx.timer = function (timer) {
        if (timer() && jQuery.timers.push(timer) && !animating) {
          animating = true;
          raf();
        }
      };

      jQuery.fx.stop = function () {
        animating = false;
      };
    }
  } else {
    // polyfill
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime(),
        timeToCall = Math.max(0, 16 - (currTime - lastTime)),
        id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };

  }

  }( $ ));

  function removeQuotes (string) {
    if (typeof string === 'string' || string instanceof String) {
      string = string.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '');
    }

    return string;
  }

  window.Foundation = {
    name : 'Foundation',

    version : '5.5.1',

    media_queries : {
      'small'       : S('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'small-only'  : S('.foundation-mq-small-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'medium'      : S('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'medium-only' : S('.foundation-mq-medium-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'large'       : S('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'large-only'  : S('.foundation-mq-large-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xlarge'      : S('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xlarge-only' : S('.foundation-mq-xlarge-only').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      'xxlarge'     : S('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, '')
    },

    stylesheet : $('<style></style>').appendTo('head')[0].sheet,

    global : {
      namespace : undefined
    },

    init : function (scope, libraries, method, options, response) {
      var args = [scope, method, options, response],
          responses = [];

      // check RTL
      this.rtl = /rtl/i.test(S('html').attr('dir'));

      // set foundation global scope
      this.scope = scope || this.scope;

      this.set_namespace();

      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {
        if (this.libs.hasOwnProperty(libraries)) {
          responses.push(this.init_lib(libraries, args));
        }
      } else {
        for (var lib in this.libs) {
          responses.push(this.init_lib(lib, libraries));
        }
      }

      S(window).load(function () {
        S(window)
          .trigger('resize.fndtn.clearing')
          .trigger('resize.fndtn.dropdown')
          .trigger('resize.fndtn.equalizer')
          .trigger('resize.fndtn.interchange')
          .trigger('resize.fndtn.joyride')
          .trigger('resize.fndtn.magellan')
          .trigger('resize.fndtn.topbar')
          .trigger('resize.fndtn.slider');
      });

      return scope;
    },

    init_lib : function (lib, args) {
      if (this.libs.hasOwnProperty(lib)) {
        this.patch(this.libs[lib]);

        if (args && args.hasOwnProperty(lib)) {
            if (typeof this.libs[lib].settings !== 'undefined') {
              $.extend(true, this.libs[lib].settings, args[lib]);
            } else if (typeof this.libs[lib].defaults !== 'undefined') {
              $.extend(true, this.libs[lib].defaults, args[lib]);
            }
          return this.libs[lib].init.apply(this.libs[lib], [this.scope, args[lib]]);
        }

        args = args instanceof Array ? args : new Array(args);
        return this.libs[lib].init.apply(this.libs[lib], args);
      }

      return function () {};
    },

    patch : function (lib) {
      lib.scope = this.scope;
      lib.namespace = this.global.namespace;
      lib.rtl = this.rtl;
      lib['data_options'] = this.utils.data_options;
      lib['attr_name'] = attr_name;
      lib['add_namespace'] = add_namespace;
      lib['bindings'] = bindings;
      lib['S'] = this.utils.S;
    },

    inherit : function (scope, methods) {
      var methods_arr = methods.split(' '),
          i = methods_arr.length;

      while (i--) {
        if (this.utils.hasOwnProperty(methods_arr[i])) {
          scope[methods_arr[i]] = this.utils[methods_arr[i]];
        }
      }
    },

    set_namespace : function () {

      // Description:
      //    Don't bother reading the namespace out of the meta tag
      //    if the namespace has been set globally in javascript
      //
      // Example:
      //    Foundation.global.namespace = 'my-namespace';
      // or make it an empty string:
      //    Foundation.global.namespace = '';
      //
      //

      // If the namespace has not been set (is undefined), try to read it out of the meta element.
      // Otherwise use the globally defined namespace, even if it's empty ('')
      var namespace = ( this.global.namespace === undefined ) ? $('.foundation-data-attribute-namespace').css('font-family') : this.global.namespace;

      // Finally, if the namsepace is either undefined or false, set it to an empty string.
      // Otherwise use the namespace value.
      this.global.namespace = ( namespace === undefined || /false/i.test(namespace) ) ? '' : namespace;
    },

    libs : {},

    // methods that can be inherited in libraries
    utils : {

      // Description:
      //    Fast Selector wrapper returns jQuery object. Only use where getElementById
      //    is not available.
      //
      // Arguments:
      //    Selector (String): CSS selector describing the element(s) to be
      //    returned as a jQuery object.
      //
      //    Scope (String): CSS selector describing the area to be searched. Default
      //    is document.
      //
      // Returns:
      //    Element (jQuery Object): jQuery object containing elements matching the
      //    selector within the scope.
      S : S,

      // Description:
      //    Executes a function a max of once every n milliseconds
      //
      // Arguments:
      //    Func (Function): Function to be throttled.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      // Returns:
      //    Lazy_function (Function): Function with throttling applied.
      throttle : function (func, delay) {
        var timer = null;

        return function () {
          var context = this, args = arguments;

          if (timer == null) {
            timer = setTimeout(function () {
              func.apply(context, args);
              timer = null;
            }, delay);
          }
        };
      },

      // Description:
      //    Executes a function when it stops being invoked for n seconds
      //    Modified version of _.debounce() http://underscorejs.org
      //
      // Arguments:
      //    Func (Function): Function to be debounced.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      //    Immediate (Bool): Whether the function should be called at the beginning
      //    of the delay instead of the end. Default is false.
      //
      // Returns:
      //    Lazy_function (Function): Function with debouncing applied.
      debounce : function (func, delay, immediate) {
        var timeout, result;
        return function () {
          var context = this, args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) {
              result = func.apply(context, args);
            }
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, delay);
          if (callNow) {
            result = func.apply(context, args);
          }
          return result;
        };
      },

      // Description:
      //    Parses data-options attribute
      //
      // Arguments:
      //    El (jQuery Object): Element to be parsed.
      //
      // Returns:
      //    Options (Javascript Object): Contents of the element's data-options
      //    attribute.
      data_options : function (el, data_attr_name) {
        data_attr_name = data_attr_name || 'options';
        var opts = {}, ii, p, opts_arr,
            data_options = function (el) {
              var namespace = Foundation.global.namespace;

              if (namespace.length > 0) {
                return el.data(namespace + '-' + data_attr_name);
              }

              return el.data(data_attr_name);
            };

        var cached_options = data_options(el);

        if (typeof cached_options === 'object') {
          return cached_options;
        }

        opts_arr = (cached_options || ':').split(';');
        ii = opts_arr.length;

        function isNumber (o) {
          return !isNaN (o - 0) && o !== null && o !== '' && o !== false && o !== true;
        }

        function trim (str) {
          if (typeof str === 'string') {
            return $.trim(str);
          }
          return str;
        }

        while (ii--) {
          p = opts_arr[ii].split(':');
          p = [p[0], p.slice(1).join(':')];

          if (/true/i.test(p[1])) {
            p[1] = true;
          }
          if (/false/i.test(p[1])) {
            p[1] = false;
          }
          if (isNumber(p[1])) {
            if (p[1].indexOf('.') === -1) {
              p[1] = parseInt(p[1], 10);
            } else {
              p[1] = parseFloat(p[1]);
            }
          }

          if (p.length === 2 && p[0].length > 0) {
            opts[trim(p[0])] = trim(p[1]);
          }
        }

        return opts;
      },

      // Description:
      //    Adds JS-recognizable media queries
      //
      // Arguments:
      //    Media (String): Key string for the media query to be stored as in
      //    Foundation.media_queries
      //
      //    Class (String): Class name for the generated <meta> tag
      register_media : function (media, media_class) {
        if (Foundation.media_queries[media] === undefined) {
          $('head').append('<meta class="' + media_class + '"/>');
          Foundation.media_queries[media] = removeQuotes($('.' + media_class).css('font-family'));
        }
      },

      // Description:
      //    Add custom CSS within a JS-defined media query
      //
      // Arguments:
      //    Rule (String): CSS rule to be appended to the document.
      //
      //    Media (String): Optional media query string for the CSS rule to be
      //    nested under.
      add_custom_rule : function (rule, media) {
        if (media === undefined && Foundation.stylesheet) {
          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);
        } else {
          var query = Foundation.media_queries[media];

          if (query !== undefined) {
            Foundation.stylesheet.insertRule('@media ' +
              Foundation.media_queries[media] + '{ ' + rule + ' }');
          }
        }
      },

      // Description:
      //    Performs a callback function when an image is fully loaded
      //
      // Arguments:
      //    Image (jQuery Object): Image(s) to check if loaded.
      //
      //    Callback (Function): Function to execute when image is fully loaded.
      image_loaded : function (images, callback) {
        var self = this,
            unloaded = images.length;

        if (unloaded === 0) {
          callback(images);
        }

        images.each(function () {
          single_image_loaded(self.S(this), function () {
            unloaded -= 1;
            if (unloaded === 0) {
              callback(images);
            }
          });
        });
      },

      // Description:
      //    Returns a random, alphanumeric string
      //
      // Arguments:
      //    Length (Integer): Length of string to be generated. Defaults to random
      //    integer.
      //
      // Returns:
      //    Rand (String): Pseudo-random, alphanumeric string.
      random_str : function () {
        if (!this.fidx) {
          this.fidx = 0;
        }
        this.prefix = this.prefix || [(this.name || 'F'), (+new Date).toString(36)].join('-');

        return this.prefix + (this.fidx++).toString(36);
      },

      // Description:
      //    Helper for window.matchMedia
      //
      // Arguments:
      //    mq (String): Media query
      //
      // Returns:
      //    (Boolean): Whether the media query passes or not
      match : function (mq) {
        return window.matchMedia(mq).matches;
      },

      // Description:
      //    Helpers for checking Foundation default media queries with JS
      //
      // Returns:
      //    (Boolean): Whether the media query passes or not

      is_small_up : function () {
        return this.match(Foundation.media_queries.small);
      },

      is_medium_up : function () {
        return this.match(Foundation.media_queries.medium);
      },

      is_large_up : function () {
        return this.match(Foundation.media_queries.large);
      },

      is_xlarge_up : function () {
        return this.match(Foundation.media_queries.xlarge);
      },

      is_xxlarge_up : function () {
        return this.match(Foundation.media_queries.xxlarge);
      },

      is_small_only : function () {
        return !this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_medium_only : function () {
        return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_large_only : function () {
        return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_xlarge_only : function () {
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up();
      },

      is_xxlarge_only : function () {
        return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up();
      }
    }
  };

  $.fn.foundation = function () {
    var args = Array.prototype.slice.call(arguments, 0);

    return this.each(function () {
      Foundation.init.apply(Foundation, [this].concat(args));
      return this;
    });
  };

}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.slider = {
    name : 'slider',

    version : '5.5.1',

    settings : {
      start : 0,
      end : 100,
      step : 1,
      precision : null,
      initial : null,
      display_selector : '',
      vertical : false,
      trigger_input_change : false,
      on_change : function () {}
    },

    cache : {},

    init : function (scope, method, options) {
      Foundation.inherit(this, 'throttle');
      this.bindings(method, options);
      this.reflow();
    },

    events : function () {
      var self = this;

      $(this.scope)
        .off('.slider')
        .on('mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider',
        '[' + self.attr_name() + ']:not(.disabled, [disabled]) .range-slider-handle', function (e) {
          if (!self.cache.active) {
            e.preventDefault();
            self.set_active_slider($(e.target));
          }
        })
        .on('mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider', function (e) {
          if (!!self.cache.active) {
            e.preventDefault();
            if ($.data(self.cache.active[0], 'settings').vertical) {
              var scroll_offset = 0;
              if (!e.pageY) {
                scroll_offset = window.scrollY;
              }
              self.calculate_position(self.cache.active, self.get_cursor_position(e, 'y') + scroll_offset);
            } else {
              self.calculate_position(self.cache.active, self.get_cursor_position(e, 'x'));
            }
          }
        })
        .on('mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider', function (e) {
          self.remove_active_slider();
        })
        .on('change.fndtn.slider', function (e) {
          self.settings.on_change();
        });

      self.S(window)
        .on('resize.fndtn.slider', self.throttle(function (e) {
          self.reflow();
        }, 300));
    },

    get_cursor_position : function (e, xy) {
      var pageXY = 'page' + xy.toUpperCase(),
          clientXY = 'client' + xy.toUpperCase(),
          position;

      if (typeof e[pageXY] !== 'undefined') {
        position = e[pageXY];
      } else if (typeof e.originalEvent[clientXY] !== 'undefined') {
        position = e.originalEvent[clientXY];
      } else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0][clientXY] !== 'undefined') {
        position = e.originalEvent.touches[0][clientXY];
      } else if (e.currentPoint && typeof e.currentPoint[xy] !== 'undefined') {
        position = e.currentPoint[xy];
      }

      return position;
    },

    set_active_slider : function ($handle) {
      this.cache.active = $handle;
    },

    remove_active_slider : function () {
      this.cache.active = null;
    },

    calculate_position : function ($handle, cursor_x) {
      var self = this,
          settings = $.data($handle[0], 'settings'),
          handle_l = $.data($handle[0], 'handle_l'),
          handle_o = $.data($handle[0], 'handle_o'),
          bar_l = $.data($handle[0], 'bar_l'),
          bar_o = $.data($handle[0], 'bar_o');

      requestAnimationFrame(function () {
        var pct;

        if (Foundation.rtl && !settings.vertical) {
          pct = self.limit_to(((bar_o + bar_l - cursor_x) / bar_l), 0, 1);
        } else {
          pct = self.limit_to(((cursor_x - bar_o) / bar_l), 0, 1);
        }

        pct = settings.vertical ? 1 - pct : pct;

        var norm = self.normalized_value(pct, settings.start, settings.end, settings.step, settings.precision);

        self.set_ui($handle, norm);
      });
    },

    set_ui : function ($handle, value) {
      var settings = $.data($handle[0], 'settings'),
          handle_l = $.data($handle[0], 'handle_l'),
          bar_l = $.data($handle[0], 'bar_l'),
          norm_pct = this.normalized_percentage(value, settings.start, settings.end),
          handle_offset = norm_pct * (bar_l - handle_l) - 1,
          progress_bar_length = norm_pct * 100,
          $handle_parent = $handle.parent(),
          $hidden_inputs = $handle.parent().children('input[type=hidden]');

      if (Foundation.rtl && !settings.vertical) {
        handle_offset = -handle_offset;
      }

      handle_offset = settings.vertical ? -handle_offset + bar_l - handle_l + 1 : handle_offset;
      this.set_translate($handle, handle_offset, settings.vertical);

      if (settings.vertical) {
        $handle.siblings('.range-slider-active-segment').css('height', progress_bar_length + '%');
      } else {
        $handle.siblings('.range-slider-active-segment').css('width', progress_bar_length + '%');
      }

      $handle_parent.attr(this.attr_name(), value).trigger('change').trigger('change.fndtn.slider');

      $hidden_inputs.val(value);
      if (settings.trigger_input_change) {
          $hidden_inputs.trigger('change');
      }

      if (!$handle[0].hasAttribute('aria-valuemin')) {
        $handle.attr({
          'aria-valuemin' : settings.start,
          'aria-valuemax' : settings.end
        });
      }
      $handle.attr('aria-valuenow', value);

      if (settings.display_selector != '') {
        $(settings.display_selector).each(function () {
          if (this.hasOwnProperty('value')) {
            $(this).val(value);
          } else {
            $(this).text(value);
          }
        });
      }

    },

    normalized_percentage : function (val, start, end) {
      return Math.min(1, (val - start) / (end - start));
    },

    normalized_value : function (val, start, end, step, precision) {
      var range = end - start,
          point = val * range,
          mod = (point - (point % step)) / step,
          rem = point % step,
          round = ( rem >= step * 0.5 ? step : 0);
      return ((mod * step + round) + start).toFixed(precision);
    },

    set_translate : function (ele, offset, vertical) {
      if (vertical) {
        $(ele)
          .css('-webkit-transform', 'translateY(' + offset + 'px)')
          .css('-moz-transform', 'translateY(' + offset + 'px)')
          .css('-ms-transform', 'translateY(' + offset + 'px)')
          .css('-o-transform', 'translateY(' + offset + 'px)')
          .css('transform', 'translateY(' + offset + 'px)');
      } else {
        $(ele)
          .css('-webkit-transform', 'translateX(' + offset + 'px)')
          .css('-moz-transform', 'translateX(' + offset + 'px)')
          .css('-ms-transform', 'translateX(' + offset + 'px)')
          .css('-o-transform', 'translateX(' + offset + 'px)')
          .css('transform', 'translateX(' + offset + 'px)');
      }
    },

    limit_to : function (val, min, max) {
      return Math.min(Math.max(val, min), max);
    },

    initialize_settings : function (handle) {
      var settings = $.extend({}, this.settings, this.data_options($(handle).parent())),
          decimal_places_match_result;

      if (settings.precision === null) {
        decimal_places_match_result = ('' + settings.step).match(/\.([\d]*)/);
        settings.precision = decimal_places_match_result && decimal_places_match_result[1] ? decimal_places_match_result[1].length : 0;
      }

      if (settings.vertical) {
        $.data(handle, 'bar_o', $(handle).parent().offset().top);
        $.data(handle, 'bar_l', $(handle).parent().outerHeight());
        $.data(handle, 'handle_o', $(handle).offset().top);
        $.data(handle, 'handle_l', $(handle).outerHeight());
      } else {
        $.data(handle, 'bar_o', $(handle).parent().offset().left);
        $.data(handle, 'bar_l', $(handle).parent().outerWidth());
        $.data(handle, 'handle_o', $(handle).offset().left);
        $.data(handle, 'handle_l', $(handle).outerWidth());
      }

      $.data(handle, 'bar', $(handle).parent());
      $.data(handle, 'settings', settings);
    },

    set_initial_position : function ($ele) {
      var settings = $.data($ele.children('.range-slider-handle')[0], 'settings'),
          initial = ((typeof settings.initial == 'number' && !isNaN(settings.initial)) ? settings.initial : Math.floor((settings.end - settings.start) * 0.5 / settings.step) * settings.step + settings.start),
          $handle = $ele.children('.range-slider-handle');
      this.set_ui($handle, initial);
    },

    set_value : function (value) {
      var self = this;
      $('[' + self.attr_name() + ']', this.scope).each(function () {
        $(this).attr(self.attr_name(), value);
      });
      if (!!$(this.scope).attr(self.attr_name())) {
        $(this.scope).attr(self.attr_name(), value);
      }
      self.reflow();
    },

    reflow : function () {
      var self = this;
      self.S('[' + this.attr_name() + ']').each(function () {
        var handle = $(this).children('.range-slider-handle')[0],
            val = $(this).attr(self.attr_name());
        self.initialize_settings(handle);

        if (val) {
          self.set_ui($(handle), parseFloat(val));
        } else {
          self.set_initial_position($(this));
        }
      });
    }
  };

}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  var Modernizr = Modernizr || false;

  Foundation.libs.joyride = {
    name : 'joyride',

    version : '5.5.1',

    defaults : {
      expose                   : false,     // turn on or off the expose feature
      modal                    : true,      // Whether to cover page with modal during the tour
      keyboard                 : true,      // enable left, right and esc keystrokes
      tip_location             : 'bottom',  // 'top' or 'bottom' in relation to parent
      nub_position             : 'auto',    // override on a per tooltip bases
      scroll_speed             : 1500,      // Page scrolling speed in milliseconds, 0 = no scroll animation
      scroll_animation         : 'linear',  // supports 'swing' and 'linear', extend with jQuery UI.
      timer                    : 0,         // 0 = no timer , all other numbers = timer in milliseconds
      start_timer_on_click     : true,      // true or false - true requires clicking the first button start the timer
      start_offset             : 0,         // the index of the tooltip you want to start on (index of the li)
      next_button              : true,      // true or false to control whether a next button is used
      prev_button              : true,      // true or false to control whether a prev button is used
      tip_animation            : 'fade',    // 'pop' or 'fade' in each tip
      pause_after              : [],        // array of indexes where to pause the tour after
      exposed                  : [],        // array of expose elements
      tip_animation_fade_speed : 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      cookie_monster           : false,     // true or false to control whether cookies are used
      cookie_name              : 'joyride', // Name the cookie you'll use
      cookie_domain            : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'
      cookie_expires           : 365,       // set when you would like the cookie to expire.
      tip_container            : 'body',    // Where will the tip be attached
      abort_on_close           : true,      // When true, the close event will not fire any callback
      tip_location_patterns    : {
        top : ['bottom'],
        bottom : [], // bottom should not need to be repositioned
        left : ['right', 'top', 'bottom'],
        right : ['left', 'top', 'bottom']
      },
      post_ride_callback     : function () {},    // A method to call once the tour closes (canceled or complete)
      post_step_callback     : function () {},    // A method to call after each step
      pre_step_callback      : function () {},    // A method to call before each step
      pre_ride_callback      : function () {},    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      post_expose_callback   : function () {},    // A method to call after an element has been exposed
      template : { // HTML segments for tip layout
        link          : '<a href="#close" class="joyride-close-tip">&times;</a>',
        timer         : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        tip           : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
        wrapper       : '<div class="joyride-content-wrapper"></div>',
        button        : '<a href="#" class="small button joyride-next-tip"></a>',
        prev_button   : '<a href="#" class="small button joyride-prev-tip"></a>',
        modal         : '<div class="joyride-modal-bg"></div>',
        expose        : '<div class="joyride-expose-wrapper"></div>',
        expose_cover  : '<div class="joyride-expose-cover"></div>'
      },
      expose_add_class : '' // One or more space-separated class names to be added to exposed element
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'throttle random_str');

      this.settings = this.settings || $.extend({}, this.defaults, (options || method));

      this.bindings(method, options)
    },

    go_next : function () {
      if (this.settings.$li.next().length < 1) {
        this.end();
      } else if (this.settings.timer > 0) {
        clearTimeout(this.settings.automate);
        this.hide();
        this.show();
        this.startTimer();
      } else {
        this.hide();
        this.show();
      }
    },

    go_prev : function () {
      if (this.settings.$li.prev().length < 1) {
        // Do nothing if there are no prev element
      } else if (this.settings.timer > 0) {
        clearTimeout(this.settings.automate);
        this.hide();
        this.show(null, true);
        this.startTimer();
      } else {
        this.hide();
        this.show(null, true);
      }
    },

    events : function () {
      var self = this;

      $(this.scope)
        .off('.joyride')
        .on('click.fndtn.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {
          e.preventDefault();
          this.go_next()
        }.bind(this))
        .on('click.fndtn.joyride', '.joyride-prev-tip', function (e) {
          e.preventDefault();
          this.go_prev();
        }.bind(this))

        .on('click.fndtn.joyride', '.joyride-close-tip', function (e) {
          e.preventDefault();
          this.end(this.settings.abort_on_close);
        }.bind(this))

        .on('keyup.fndtn.joyride', function (e) {
          // Don't do anything if keystrokes are disabled
          // or if the joyride is not being shown
          if (!this.settings.keyboard || !this.settings.riding) {
            return;
          }

          switch (e.which) {
            case 39: // right arrow
              e.preventDefault();
              this.go_next();
              break;
            case 37: // left arrow
              e.preventDefault();
              this.go_prev();
              break;
            case 27: // escape
              e.preventDefault();
              this.end(this.settings.abort_on_close);
          }
        }.bind(this));

      $(window)
        .off('.joyride')
        .on('resize.fndtn.joyride', self.throttle(function () {
          if ($('[' + self.attr_name() + ']').length > 0 && self.settings.$next_tip && self.settings.riding) {
            if (self.settings.exposed.length > 0) {
              var $els = $(self.settings.exposed);

              $els.each(function () {
                var $this = $(this);
                self.un_expose($this);
                self.expose($this);
              });
            }

            if (self.is_phone()) {
              self.pos_phone();
            } else {
              self.pos_default(false);
            }
          }
        }, 100));
    },

    start : function () {
      var self = this,
          $this = $('[' + this.attr_name() + ']', this.scope),
          integer_settings = ['timer', 'scrollSpeed', 'startOffset', 'tipAnimationFadeSpeed', 'cookieExpires'],
          int_settings_count = integer_settings.length;

      if (!$this.length > 0) {
        return;
      }

      if (!this.settings.init) {
        this.events();
      }

      this.settings = $this.data(this.attr_name(true) + '-init');

      // non configureable settings
      this.settings.$content_el = $this;
      this.settings.$body = $(this.settings.tip_container);
      this.settings.body_offset = $(this.settings.tip_container).position();
      this.settings.$tip_content = this.settings.$content_el.find('> li');
      this.settings.paused = false;
      this.settings.attempts = 0;
      this.settings.riding = true;

      // can we create cookies?
      if (typeof $.cookie !== 'function') {
        this.settings.cookie_monster = false;
      }

      // generate the tips and insert into dom.
      if (!this.settings.cookie_monster || this.settings.cookie_monster && !$.cookie(this.settings.cookie_name)) {
        this.settings.$tip_content.each(function (index) {
          var $this = $(this);
          this.settings = $.extend({}, self.defaults, self.data_options($this));

          // Make sure that settings parsed from data_options are integers where necessary
          var i = int_settings_count;
          while (i--) {
            self.settings[integer_settings[i]] = parseInt(self.settings[integer_settings[i]], 10);
          }
          self.create({$li : $this, index : index});
        });

        // show first tip
        if (!this.settings.start_timer_on_click && this.settings.timer > 0) {
          this.show('init');
          this.startTimer();
        } else {
          this.show('init');
        }

      }
    },

    resume : function () {
      this.set_li();
      this.show();
    },

    tip_template : function (opts) {
      var $blank, content;

      opts.tip_class = opts.tip_class || '';

      $blank = $(this.settings.template.tip).addClass(opts.tip_class);
      content = $.trim($(opts.li).html()) +
        this.prev_button_text(opts.prev_button_text, opts.index) +
        this.button_text(opts.button_text) +
        this.settings.template.link +
        this.timer_instance(opts.index);

      $blank.append($(this.settings.template.wrapper));
      $blank.first().attr(this.add_namespace('data-index'), opts.index);
      $('.joyride-content-wrapper', $blank).append(content);

      return $blank[0];
    },

    timer_instance : function (index) {
      var txt;

      if ((index === 0 && this.settings.start_timer_on_click && this.settings.timer > 0) || this.settings.timer === 0) {
        txt = '';
      } else {
        txt = $(this.settings.template.timer)[0].outerHTML;
      }
      return txt;
    },

    button_text : function (txt) {
      if (this.settings.tip_settings.next_button) {
        txt = $.trim(txt) || 'Next';
        txt = $(this.settings.template.button).append(txt)[0].outerHTML;
      } else {
        txt = '';
      }
      return txt;
    },

    prev_button_text : function (txt, idx) {
      if (this.settings.tip_settings.prev_button) {
        txt = $.trim(txt) || 'Previous';

        // Add the disabled class to the button if it's the first element
        if (idx == 0) {
          txt = $(this.settings.template.prev_button).append(txt).addClass('disabled')[0].outerHTML;
        } else {
          txt = $(this.settings.template.prev_button).append(txt)[0].outerHTML;
        }
      } else {
        txt = '';
      }
      return txt;
    },

    create : function (opts) {
      this.settings.tip_settings = $.extend({}, this.settings, this.data_options(opts.$li));
      var buttonText = opts.$li.attr(this.add_namespace('data-button')) || opts.$li.attr(this.add_namespace('data-text')),
          prevButtonText = opts.$li.attr(this.add_namespace('data-button-prev')) || opts.$li.attr(this.add_namespace('data-prev-text')),
        tipClass = opts.$li.attr('class'),
        $tip_content = $(this.tip_template({
          tip_class : tipClass,
          index : opts.index,
          button_text : buttonText,
          prev_button_text : prevButtonText,
          li : opts.$li
        }));

      $(this.settings.tip_container).append($tip_content);
    },

    show : function (init, is_prev) {
      var $timer = null;

      // are we paused?
      if (this.settings.$li === undefined || ($.inArray(this.settings.$li.index(), this.settings.pause_after) === -1)) {

        // don't go to the next li if the tour was paused
        if (this.settings.paused) {
          this.settings.paused = false;
        } else {
          this.set_li(init, is_prev);
        }

        this.settings.attempts = 0;

        if (this.settings.$li.length && this.settings.$target.length > 0) {
          if (init) { //run when we first start
            this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip);
            if (this.settings.modal) {
              this.show_modal();
            }
          }

          this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip);

          if (this.settings.modal && this.settings.expose) {
            this.expose();
          }

          this.settings.tip_settings = $.extend({}, this.settings, this.data_options(this.settings.$li));

          this.settings.timer = parseInt(this.settings.timer, 10);

          this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location];

          // scroll and hide bg if not modal
          if (!/body/i.test(this.settings.$target.selector)) {
            var joyridemodalbg = $('.joyride-modal-bg');
            if (/pop/i.test(this.settings.tipAnimation)) {
                joyridemodalbg.hide();
            } else {
                joyridemodalbg.fadeOut(this.settings.tipAnimationFadeSpeed);
            }
            this.scroll_to();
          }

          if (this.is_phone()) {
            this.pos_phone(true);
          } else {
            this.pos_default(true);
          }

          $timer = this.settings.$next_tip.find('.joyride-timer-indicator');

          if (/pop/i.test(this.settings.tip_animation)) {

            $timer.width(0);

            if (this.settings.timer > 0) {

              this.settings.$next_tip.show();

              setTimeout(function () {
                $timer.animate({
                  width : $timer.parent().width()
                }, this.settings.timer, 'linear');
              }.bind(this), this.settings.tip_animation_fade_speed);

            } else {
              this.settings.$next_tip.show();

            }

          } else if (/fade/i.test(this.settings.tip_animation)) {

            $timer.width(0);

            if (this.settings.timer > 0) {

              this.settings.$next_tip
                .fadeIn(this.settings.tip_animation_fade_speed)
                .show();

              setTimeout(function () {
                $timer.animate({
                  width : $timer.parent().width()
                }, this.settings.timer, 'linear');
              }.bind(this), this.settings.tip_animation_fade_speed);

            } else {
              this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed);
            }
          }

          this.settings.$current_tip = this.settings.$next_tip;

        // skip non-existant targets
        } else if (this.settings.$li && this.settings.$target.length < 1) {

          this.show(init, is_prev);

        } else {

          this.end();

        }
      } else {

        this.settings.paused = true;

      }

    },

    is_phone : function () {
      return matchMedia(Foundation.media_queries.small).matches &&
        !matchMedia(Foundation.media_queries.medium).matches;
    },

    hide : function () {
      if (this.settings.modal && this.settings.expose) {
        this.un_expose();
      }

      if (!this.settings.modal) {
        $('.joyride-modal-bg').hide();
      }

      // Prevent scroll bouncing...wait to remove from layout
      this.settings.$current_tip.css('visibility', 'hidden');
      setTimeout($.proxy(function () {
        this.hide();
        this.css('visibility', 'visible');
      }, this.settings.$current_tip), 0);
      this.settings.post_step_callback(this.settings.$li.index(),
        this.settings.$current_tip);
    },

    set_li : function (init, is_prev) {
      if (init) {
        this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset);
        this.set_next_tip();
        this.settings.$current_tip = this.settings.$next_tip;
      } else {
        if (is_prev) {
          this.settings.$li = this.settings.$li.prev();
        } else {
          this.settings.$li = this.settings.$li.next();
        }
        this.set_next_tip();
      }

      this.set_target();
    },

    set_next_tip : function () {
      this.settings.$next_tip = $('.joyride-tip-guide').eq(this.settings.$li.index());
      this.settings.$next_tip.data('closed', '');
    },

    set_target : function () {
      var cl = this.settings.$li.attr(this.add_namespace('data-class')),
          id = this.settings.$li.attr(this.add_namespace('data-id')),
          $sel = function () {
            if (id) {
              return $(document.getElementById(id));
            } else if (cl) {
              return $('.' + cl).first();
            } else {
              return $('body');
            }
          };

      this.settings.$target = $sel();
    },

    scroll_to : function () {
      var window_half, tipOffset;

      window_half = $(window).height() / 2;
      tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.settings.$next_tip.outerHeight());

      if (tipOffset != 0) {
        $('html, body').stop().animate({
          scrollTop : tipOffset
        }, this.settings.scroll_speed, 'swing');
      }
    },

    paused : function () {
      return ($.inArray((this.settings.$li.index() + 1), this.settings.pause_after) === -1);
    },

    restart : function () {
      this.hide();
      this.settings.$li = undefined;
      this.show('init');
    },

    pos_default : function (init) {
      var $nub = this.settings.$next_tip.find('.joyride-nub'),
          nub_width = Math.ceil($nub.outerWidth() / 2),
          nub_height = Math.ceil($nub.outerHeight() / 2),
          toggle = init || false;

      // tip must not be "display: none" to calculate position
      if (toggle) {
        this.settings.$next_tip.css('visibility', 'hidden');
        this.settings.$next_tip.show();
      }

      if (!/body/i.test(this.settings.$target.selector)) {
          var topAdjustment = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
              leftAdjustment = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;

          if (this.bottom()) {
            if (this.rtl) {
              this.settings.$next_tip.css({
                top : (this.settings.$target.offset().top + nub_height + this.settings.$target.outerHeight() + topAdjustment),
                left : this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + leftAdjustment});
            } else {
              this.settings.$next_tip.css({
                top : (this.settings.$target.offset().top + nub_height + this.settings.$target.outerHeight() + topAdjustment),
                left : this.settings.$target.offset().left + leftAdjustment});
            }

            this.nub_position($nub, this.settings.tip_settings.nub_position, 'top');

          } else if (this.top()) {
            if (this.rtl) {
              this.settings.$next_tip.css({
                top : (this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left : this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()});
            } else {
              this.settings.$next_tip.css({
                top : (this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left : this.settings.$target.offset().left + leftAdjustment});
            }

            this.nub_position($nub, this.settings.tip_settings.nub_position, 'bottom');

          } else if (this.right()) {

            this.settings.$next_tip.css({
              top : this.settings.$target.offset().top + topAdjustment,
              left : (this.settings.$target.outerWidth() + this.settings.$target.offset().left + nub_width + leftAdjustment)});

            this.nub_position($nub, this.settings.tip_settings.nub_position, 'left');

          } else if (this.left()) {

            this.settings.$next_tip.css({
              top : this.settings.$target.offset().top + topAdjustment,
              left : (this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - nub_width + leftAdjustment)});

            this.nub_position($nub, this.settings.tip_settings.nub_position, 'right');

          }

          if (!this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length) {

            $nub.removeClass('bottom')
              .removeClass('top')
              .removeClass('right')
              .removeClass('left');

            this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts];

            this.settings.attempts++;

            this.pos_default();

          }

      } else if (this.settings.$li.length) {

        this.pos_modal($nub);

      }

      if (toggle) {
        this.settings.$next_tip.hide();
        this.settings.$next_tip.css('visibility', 'visible');
      }

    },

    pos_phone : function (init) {
      var tip_height = this.settings.$next_tip.outerHeight(),
          tip_offset = this.settings.$next_tip.offset(),
          target_height = this.settings.$target.outerHeight(),
          $nub = $('.joyride-nub', this.settings.$next_tip),
          nub_height = Math.ceil($nub.outerHeight() / 2),
          toggle = init || false;

      $nub.removeClass('bottom')
        .removeClass('top')
        .removeClass('right')
        .removeClass('left');

      if (toggle) {
        this.settings.$next_tip.css('visibility', 'hidden');
        this.settings.$next_tip.show();
      }

      if (!/body/i.test(this.settings.$target.selector)) {

        if (this.top()) {

            this.settings.$next_tip.offset({top : this.settings.$target.offset().top - tip_height - nub_height});
            $nub.addClass('bottom');

        } else {

          this.settings.$next_tip.offset({top : this.settings.$target.offset().top + target_height + nub_height});
          $nub.addClass('top');

        }

      } else if (this.settings.$li.length) {
        this.pos_modal($nub);
      }

      if (toggle) {
        this.settings.$next_tip.hide();
        this.settings.$next_tip.css('visibility', 'visible');
      }
    },

    pos_modal : function ($nub) {
      this.center();
      $nub.hide();

      this.show_modal();
    },

    show_modal : function () {
      if (!this.settings.$next_tip.data('closed')) {
        var joyridemodalbg =  $('.joyride-modal-bg');
        if (joyridemodalbg.length < 1) {
          var joyridemodalbg = $(this.settings.template.modal);
          joyridemodalbg.appendTo('body');
        }

        if (/pop/i.test(this.settings.tip_animation)) {
            joyridemodalbg.show();
        } else {
            joyridemodalbg.fadeIn(this.settings.tip_animation_fade_speed);
        }
      }
    },

    expose : function () {
      var expose,
          exposeCover,
          el,
          origCSS,
          origClasses,
          randId = 'expose-' + this.random_str(6);

      if (arguments.length > 0 && arguments[0] instanceof $) {
        el = arguments[0];
      } else if (this.settings.$target && !/body/i.test(this.settings.$target.selector)) {
        el = this.settings.$target;
      } else {
        return false;
      }

      if (el.length < 1) {
        if (window.console) {
          console.error('element not valid', el);
        }
        return false;
      }

      expose = $(this.settings.template.expose);
      this.settings.$body.append(expose);
      expose.css({
        top : el.offset().top,
        left : el.offset().left,
        width : el.outerWidth(true),
        height : el.outerHeight(true)
      });

      exposeCover = $(this.settings.template.expose_cover);

      origCSS = {
        zIndex : el.css('z-index'),
        position : el.css('position')
      };

      origClasses = el.attr('class') == null ? '' : el.attr('class');

      el.css('z-index', parseInt(expose.css('z-index')) + 1);

      if (origCSS.position == 'static') {
        el.css('position', 'relative');
      }

      el.data('expose-css', origCSS);
      el.data('orig-class', origClasses);
      el.attr('class', origClasses + ' ' + this.settings.expose_add_class);

      exposeCover.css({
        top : el.offset().top,
        left : el.offset().left,
        width : el.outerWidth(true),
        height : el.outerHeight(true)
      });

      if (this.settings.modal) {
        this.show_modal();
      }

      this.settings.$body.append(exposeCover);
      expose.addClass(randId);
      exposeCover.addClass(randId);
      el.data('expose', randId);
      this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, el);
      this.add_exposed(el);
    },

    un_expose : function () {
      var exposeId,
          el,
          expose,
          origCSS,
          origClasses,
          clearAll = false;

      if (arguments.length > 0 && arguments[0] instanceof $) {
        el = arguments[0];
      } else if (this.settings.$target && !/body/i.test(this.settings.$target.selector)) {
        el = this.settings.$target;
      } else {
        return false;
      }

      if (el.length < 1) {
        if (window.console) {
          console.error('element not valid', el);
        }
        return false;
      }

      exposeId = el.data('expose');
      expose = $('.' + exposeId);

      if (arguments.length > 1) {
        clearAll = arguments[1];
      }

      if (clearAll === true) {
        $('.joyride-expose-wrapper,.joyride-expose-cover').remove();
      } else {
        expose.remove();
      }

      origCSS = el.data('expose-css');

      if (origCSS.zIndex == 'auto') {
        el.css('z-index', '');
      } else {
        el.css('z-index', origCSS.zIndex);
      }

      if (origCSS.position != el.css('position')) {
        if (origCSS.position == 'static') {// this is default, no need to set it.
          el.css('position', '');
        } else {
          el.css('position', origCSS.position);
        }
      }

      origClasses = el.data('orig-class');
      el.attr('class', origClasses);
      el.removeData('orig-classes');

      el.removeData('expose');
      el.removeData('expose-z-index');
      this.remove_exposed(el);
    },

    add_exposed : function (el) {
      this.settings.exposed = this.settings.exposed || [];
      if (el instanceof $ || typeof el === 'object') {
        this.settings.exposed.push(el[0]);
      } else if (typeof el == 'string') {
        this.settings.exposed.push(el);
      }
    },

    remove_exposed : function (el) {
      var search, i;
      if (el instanceof $) {
        search = el[0]
      } else if (typeof el == 'string') {
        search = el;
      }

      this.settings.exposed = this.settings.exposed || [];
      i = this.settings.exposed.length;

      while (i--) {
        if (this.settings.exposed[i] == search) {
          this.settings.exposed.splice(i, 1);
          return;
        }
      }
    },

    center : function () {
      var $w = $(window);

      this.settings.$next_tip.css({
        top : ((($w.height() - this.settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),
        left : ((($w.width() - this.settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())
      });

      return true;
    },

    bottom : function () {
      return /bottom/i.test(this.settings.tip_settings.tip_location);
    },

    top : function () {
      return /top/i.test(this.settings.tip_settings.tip_location);
    },

    right : function () {
      return /right/i.test(this.settings.tip_settings.tip_location);
    },

    left : function () {
      return /left/i.test(this.settings.tip_settings.tip_location);
    },

    corners : function (el) {
      var w = $(window),
          window_half = w.height() / 2,
          //using this to calculate since scroll may not have finished yet.
          tipOffset = Math.ceil(this.settings.$target.offset().top - window_half + this.settings.$next_tip.outerHeight()),
          right = w.width() + w.scrollLeft(),
          offsetBottom =  w.height() + tipOffset,
          bottom = w.height() + w.scrollTop(),
          top = w.scrollTop();

      if (tipOffset < top) {
        if (tipOffset < 0) {
          top = 0;
        } else {
          top = tipOffset;
        }
      }

      if (offsetBottom > bottom) {
        bottom = offsetBottom;
      }

      return [
        el.offset().top < top,
        right < el.offset().left + el.outerWidth(),
        bottom < el.offset().top + el.outerHeight(),
        w.scrollLeft() > el.offset().left
      ];
    },

    visible : function (hidden_corners) {
      var i = hidden_corners.length;

      while (i--) {
        if (hidden_corners[i]) {
          return false;
        }
      }

      return true;
    },

    nub_position : function (nub, pos, def) {
      if (pos === 'auto') {
        nub.addClass(def);
      } else {
        nub.addClass(pos);
      }
    },

    startTimer : function () {
      if (this.settings.$li.length) {
        this.settings.automate = setTimeout(function () {
          this.hide();
          this.show();
          this.startTimer();
        }.bind(this), this.settings.timer);
      } else {
        clearTimeout(this.settings.automate);
      }
    },

    end : function (abort) {
      if (this.settings.cookie_monster) {
        $.cookie(this.settings.cookie_name, 'ridden', {expires : this.settings.cookie_expires, domain : this.settings.cookie_domain});
      }

      if (this.settings.timer > 0) {
        clearTimeout(this.settings.automate);
      }

      if (this.settings.modal && this.settings.expose) {
        this.un_expose();
      }

      // Unplug keystrokes listener
      $(this.scope).off('keyup.joyride')

      this.settings.$next_tip.data('closed', true);
      this.settings.riding = false;

      $('.joyride-modal-bg').hide();
      this.settings.$current_tip.hide();

      if (typeof abort === 'undefined' || abort === false) {
        this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip);
        this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip);
      }

      $('.joyride-tip-guide').remove();
    },

    off : function () {
      $(this.scope).off('.joyride');
      $(window).off('.joyride');
      $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');
      $('.joyride-tip-guide, .joyride-modal-bg').remove();
      clearTimeout(this.settings.automate);
      this.settings = {};
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.equalizer = {
    name : 'equalizer',

    version : '5.5.1',

    settings : {
      use_tallest : true,
      before_height_change : $.noop,
      after_height_change : $.noop,
      equalize_on_stack : false
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'image_loaded');
      this.bindings(method, options);
      this.reflow();
    },

    events : function () {
      this.S(window).off('.equalizer').on('resize.fndtn.equalizer', function (e) {
        this.reflow();
      }.bind(this));
    },

    equalize : function (equalizer) {
      var isStacked = false,
          vals = equalizer.find('[' + this.attr_name() + '-watch]:visible'),
          settings = equalizer.data(this.attr_name(true) + '-init');

      if (vals.length === 0) {
        return;
      }
      var firstTopOffset = vals.first().offset().top;
      settings.before_height_change();
      equalizer.trigger('before-height-change').trigger('before-height-change.fndth.equalizer');
      vals.height('inherit');
      vals.each(function () {
        var el = $(this);
        if (el.offset().top !== firstTopOffset) {
          isStacked = true;
        }
      });

      if (settings.equalize_on_stack === false) {
        if (isStacked) {
          return;
        }
      };

      var heights = vals.map(function () { return $(this).outerHeight(false) }).get();

      if (settings.use_tallest) {
        var max = Math.max.apply(null, heights);
        vals.css('height', max);
      } else {
        var min = Math.min.apply(null, heights);
        vals.css('height', min);
      }
      settings.after_height_change();
      equalizer.trigger('after-height-change').trigger('after-height-change.fndtn.equalizer');
    },

    reflow : function () {
      var self = this;

      this.S('[' + this.attr_name() + ']', this.scope).each(function () {
        var $eq_target = $(this);
        self.image_loaded(self.S('img', this), function () {
          self.equalize($eq_target)
        });
      });
    }
  };
})(jQuery, window, window.document);
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.dropdown = {
    name : 'dropdown',

    version : '5.5.1',

    settings : {
      active_class : 'open',
      disabled_class : 'disabled',
      mega_class : 'mega',
      align : 'bottom',
      is_hover : false,
      hover_timeout : 150,
      opened : function () {},
      closed : function () {}
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'throttle');

      $.extend(true, this.settings, method, options);
      this.bindings(method, options);
    },

    events : function (scope) {
      var self = this,
          S = self.S;

      S(this.scope)
        .off('.dropdown')
        .on('click.fndtn.dropdown', '[' + this.attr_name() + ']', function (e) {
          var settings = S(this).data(self.attr_name(true) + '-init') || self.settings;
          if (!settings.is_hover || Modernizr.touch) {
            e.preventDefault();
            if (S(this).parent('[data-reveal-id]')) {
              e.stopPropagation();
            }
            self.toggle($(this));
          }
        })
        .on('mouseenter.fndtn.dropdown', '[' + this.attr_name() + '], [' + this.attr_name() + '-content]', function (e) {
          var $this = S(this),
              dropdown,
              target;

          clearTimeout(self.timeout);

          if ($this.data(self.data_attr())) {
            dropdown = S('#' + $this.data(self.data_attr()));
            target = $this;
          } else {
            dropdown = $this;
            target = S('[' + self.attr_name() + '="' + dropdown.attr('id') + '"]');
          }

          var settings = target.data(self.attr_name(true) + '-init') || self.settings;

          if (S(e.currentTarget).data(self.data_attr()) && settings.is_hover) {
            self.closeall.call(self);
          }

          if (settings.is_hover) {
            self.open.apply(self, [dropdown, target]);
          }
        })
        .on('mouseleave.fndtn.dropdown', '[' + this.attr_name() + '], [' + this.attr_name() + '-content]', function (e) {
          var $this = S(this);
          var settings;

          if ($this.data(self.data_attr())) {
              settings = $this.data(self.data_attr(true) + '-init') || self.settings;
          } else {
              var target   = S('[' + self.attr_name() + '="' + S(this).attr('id') + '"]'),
                  settings = target.data(self.attr_name(true) + '-init') || self.settings;
          }

          self.timeout = setTimeout(function () {
            if ($this.data(self.data_attr())) {
              if (settings.is_hover) {
                self.close.call(self, S('#' + $this.data(self.data_attr())));
              }
            } else {
              if (settings.is_hover) {
                self.close.call(self, $this);
              }
            }
          }.bind(this), settings.hover_timeout);
        })
        .on('click.fndtn.dropdown', function (e) {
          var parent = S(e.target).closest('[' + self.attr_name() + '-content]');
          var links  = parent.find('a');

          if (links.length > 0 && parent.attr('aria-autoclose') !== 'false') {
              self.close.call(self, S('[' + self.attr_name() + '-content]'));
          }

          if (e.target !== document && !$.contains(document.documentElement, e.target)) {
            return;
          }

          if (S(e.target).closest('[' + self.attr_name() + ']').length > 0) {
            return;
          }

          if (!(S(e.target).data('revealId')) &&
            (parent.length > 0 && (S(e.target).is('[' + self.attr_name() + '-content]') ||
              $.contains(parent.first()[0], e.target)))) {
            e.stopPropagation();
            return;
          }

          self.close.call(self, S('[' + self.attr_name() + '-content]'));
        })
        .on('opened.fndtn.dropdown', '[' + self.attr_name() + '-content]', function () {
          self.settings.opened.call(this);
        })
        .on('closed.fndtn.dropdown', '[' + self.attr_name() + '-content]', function () {
          self.settings.closed.call(this);
        });

      S(window)
        .off('.dropdown')
        .on('resize.fndtn.dropdown', self.throttle(function () {
          self.resize.call(self);
        }, 50));

      this.resize();
    },

    close : function (dropdown) {
      var self = this;
      dropdown.each(function () {
        var original_target = $('[' + self.attr_name() + '=' + dropdown[0].id + ']') || $('aria-controls=' + dropdown[0].id + ']');
        original_target.attr('aria-expanded', 'false');
        if (self.S(this).hasClass(self.settings.active_class)) {
          self.S(this)
            .css(Foundation.rtl ? 'right' : 'left', '-99999px')
            .attr('aria-hidden', 'true')
            .removeClass(self.settings.active_class)
            .prev('[' + self.attr_name() + ']')
            .removeClass(self.settings.active_class)
            .removeData('target');

          self.S(this).trigger('closed').trigger('closed.fndtn.dropdown', [dropdown]);
        }
      });
      dropdown.removeClass('f-open-' + this.attr_name(true));
    },

    closeall : function () {
      var self = this;
      $.each(self.S('.f-open-' + this.attr_name(true)), function () {
        self.close.call(self, self.S(this));
      });
    },

    open : function (dropdown, target) {
      this
        .css(dropdown
        .addClass(this.settings.active_class), target);
      dropdown.prev('[' + this.attr_name() + ']').addClass(this.settings.active_class);
      dropdown.data('target', target.get(0)).trigger('opened').trigger('opened.fndtn.dropdown', [dropdown, target]);
      dropdown.attr('aria-hidden', 'false');
      target.attr('aria-expanded', 'true');
      dropdown.focus();
      dropdown.addClass('f-open-' + this.attr_name(true));
    },

    data_attr : function () {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + this.name;
      }

      return this.name;
    },

    toggle : function (target) {
      if (target.hasClass(this.settings.disabled_class)) {
        return;
      }
      var dropdown = this.S('#' + target.data(this.data_attr()));
      if (dropdown.length === 0) {
        // No dropdown found, not continuing
        return;
      }

      this.close.call(this, this.S('[' + this.attr_name() + '-content]').not(dropdown));

      if (dropdown.hasClass(this.settings.active_class)) {
        this.close.call(this, dropdown);
        if (dropdown.data('target') !== target.get(0)) {
          this.open.call(this, dropdown, target);
        }
      } else {
        this.open.call(this, dropdown, target);
      }
    },

    resize : function () {
      var dropdown = this.S('[' + this.attr_name() + '-content].open');
      var target = $(dropdown.data("target"));

      if (dropdown.length && target.length) {
        this.css(dropdown, target);
      }
    },

    css : function (dropdown, target) {
      var left_offset = Math.max((target.width() - dropdown.width()) / 2, 8),
          settings = target.data(this.attr_name(true) + '-init') || this.settings;

      this.clear_idx();

      if (this.small()) {
        var p = this.dirs.bottom.call(dropdown, target, settings);

        dropdown.attr('style', '').removeClass('drop-left drop-right drop-top').css({
          position : 'absolute',
          width : '95%',
          'max-width' : 'none',
          top : p.top
        });

        dropdown.css(Foundation.rtl ? 'right' : 'left', left_offset);
      } else {

        this.style(dropdown, target, settings);
      }

      return dropdown;
    },

    style : function (dropdown, target, settings) {
      var css = $.extend({position : 'absolute'},
        this.dirs[settings.align].call(dropdown, target, settings));

      dropdown.attr('style', '').css(css);
    },

    // return CSS property object
    // `this` is the dropdown
    dirs : {
      // Calculate target offset
      _base : function (t) {
        var o_p = this.offsetParent(),
            o = o_p.offset(),
            p = t.offset();

        p.top -= o.top;
        p.left -= o.left;

        //set some flags on the p object to pass along
        p.missRight = false;
        p.missTop = false;
        p.missLeft = false;
        p.leftRightFlag = false;

        //lets see if the panel will be off the screen
        //get the actual width of the page and store it
        var actualBodyWidth;
        if (document.getElementsByClassName('row')[0]) {
          actualBodyWidth = document.getElementsByClassName('row')[0].clientWidth;
        } else {
          actualBodyWidth = window.outerWidth;
        }

        var actualMarginWidth = (window.outerWidth - actualBodyWidth) / 2;
        var actualBoundary = actualBodyWidth;

        if (!this.hasClass('mega')) {
          //miss top
          if (t.offset().top <= this.outerHeight()) {
            p.missTop = true;
            actualBoundary = window.outerWidth - actualMarginWidth;
            p.leftRightFlag = true;
          }

          //miss right
          if (t.offset().left + this.outerWidth() > t.offset().left + actualMarginWidth && t.offset().left - actualMarginWidth > this.outerWidth()) {
            p.missRight = true;
            p.missLeft = false;
          }

          //miss left
          if (t.offset().left - this.outerWidth() <= 0) {
            p.missLeft = true;
            p.missRight = false;
          }
        }

        return p;
      },

      top : function (t, s) {
        var self = Foundation.libs.dropdown,
            p = self.dirs._base.call(this, t);

        this.addClass('drop-top');

        if (p.missTop == true) {
          p.top = p.top + t.outerHeight() + this.outerHeight();
          this.removeClass('drop-top');
        }

        if (p.missRight == true) {
          p.left = p.left - this.outerWidth() + t.outerWidth();
        }

        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {
          self.adjust_pip(this, t, s, p);
        }

        if (Foundation.rtl) {
          return {left : p.left - this.outerWidth() + t.outerWidth(),
            top : p.top - this.outerHeight()};
        }

        return {left : p.left, top : p.top - this.outerHeight()};
      },

      bottom : function (t, s) {
        var self = Foundation.libs.dropdown,
            p = self.dirs._base.call(this, t);

        if (p.missRight == true) {
          p.left = p.left - this.outerWidth() + t.outerWidth();
        }

        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {
          self.adjust_pip(this, t, s, p);
        }

        if (self.rtl) {
          return {left : p.left - this.outerWidth() + t.outerWidth(), top : p.top + t.outerHeight()};
        }

        return {left : p.left, top : p.top + t.outerHeight()};
      },

      left : function (t, s) {
        var p = Foundation.libs.dropdown.dirs._base.call(this, t);

        this.addClass('drop-left');

        if (p.missLeft == true) {
          p.left =  p.left + this.outerWidth();
          p.top = p.top + t.outerHeight();
          this.removeClass('drop-left');
        }

        return {left : p.left - this.outerWidth(), top : p.top};
      },

      right : function (t, s) {
        var p = Foundation.libs.dropdown.dirs._base.call(this, t);

        this.addClass('drop-right');

        if (p.missRight == true) {
          p.left = p.left - this.outerWidth();
          p.top = p.top + t.outerHeight();
          this.removeClass('drop-right');
        } else {
          p.triggeredRight = true;
        }

        var self = Foundation.libs.dropdown;

        if (t.outerWidth() < this.outerWidth() || self.small() || this.hasClass(s.mega_menu)) {
          self.adjust_pip(this, t, s, p);
        }

        return {left : p.left + t.outerWidth(), top : p.top};
      }
    },

    // Insert rule to style psuedo elements
    adjust_pip : function (dropdown, target, settings, position) {
      var sheet = Foundation.stylesheet,
          pip_offset_base = 8;

      if (dropdown.hasClass(settings.mega_class)) {
        pip_offset_base = position.left + (target.outerWidth() / 2) - 8;
      } else if (this.small()) {
        pip_offset_base += position.left - 8;
      }

      this.rule_idx = sheet.cssRules.length;

      //default
      var sel_before = '.f-dropdown.open:before',
          sel_after  = '.f-dropdown.open:after',
          css_before = 'left: ' + pip_offset_base + 'px;',
          css_after  = 'left: ' + (pip_offset_base - 1) + 'px;';

      if (position.missRight == true) {
        pip_offset_base = dropdown.outerWidth() - 23;
        sel_before = '.f-dropdown.open:before',
        sel_after  = '.f-dropdown.open:after',
        css_before = 'left: ' + pip_offset_base + 'px;',
        css_after  = 'left: ' + (pip_offset_base - 1) + 'px;';
      }

      //just a case where right is fired, but its not missing right
      if (position.triggeredRight == true) {
        sel_before = '.f-dropdown.open:before',
        sel_after  = '.f-dropdown.open:after',
        css_before = 'left:-12px;',
        css_after  = 'left:-14px;';
      }

      if (sheet.insertRule) {
        sheet.insertRule([sel_before, '{', css_before, '}'].join(' '), this.rule_idx);
        sheet.insertRule([sel_after, '{', css_after, '}'].join(' '), this.rule_idx + 1);
      } else {
        sheet.addRule(sel_before, css_before, this.rule_idx);
        sheet.addRule(sel_after, css_after, this.rule_idx + 1);
      }
    },

    // Remove old dropdown rule index
    clear_idx : function () {
      var sheet = Foundation.stylesheet;

      if (typeof this.rule_idx !== 'undefined') {
        sheet.deleteRule(this.rule_idx);
        sheet.deleteRule(this.rule_idx);
        delete this.rule_idx;
      }
    },

    small : function () {
      return matchMedia(Foundation.media_queries.small).matches &&
        !matchMedia(Foundation.media_queries.medium).matches;
    },

    off : function () {
      this.S(this.scope).off('.fndtn.dropdown');
      this.S('html, body').off('.fndtn.dropdown');
      this.S(window).off('.fndtn.dropdown');
      this.S('[data-dropdown-content]').off('.fndtn.dropdown');
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.clearing = {
    name : 'clearing',

    version : '5.5.1',

    settings : {
      templates : {
        viewing : '<a href="#" class="clearing-close">&times;</a>' +
          '<div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />' +
          '<p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a>' +
          '<a href="#" class="clearing-main-next"><span></span></a></div>'
      },

      // comma delimited list of selectors that, on click, will close clearing,
      // add 'div.clearing-blackout, div.visible-img' to close on background click
      close_selectors : '.clearing-close, div.clearing-blackout',

      // Default to the entire li element.
      open_selectors : '',

      // Image will be skipped in carousel.
      skip_selector : '',

      touch_label : '',

      // event initializers and locks
      init : false,
      locked : false
    },

    init : function (scope, method, options) {
      var self = this;
      Foundation.inherit(this, 'throttle image_loaded');

      this.bindings(method, options);

      if (self.S(this.scope).is('[' + this.attr_name() + ']')) {
        this.assemble(self.S('li', this.scope));
      } else {
        self.S('[' + this.attr_name() + ']', this.scope).each(function () {
          self.assemble(self.S('li', this));
        });
      }
    },

    events : function (scope) {
      var self = this,
          S = self.S,
          $scroll_container = $('.scroll-container');

      if ($scroll_container.length > 0) {
        this.scope = $scroll_container;
      }

      S(this.scope)
        .off('.clearing')
        .on('click.fndtn.clearing', 'ul[' + this.attr_name() + '] li ' + this.settings.open_selectors,
          function (e, current, target) {
            var current = current || S(this),
                target = target || current,
                next = current.next('li'),
                settings = current.closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init'),
                image = S(e.target);

            e.preventDefault();

            if (!settings) {
              self.init();
              settings = current.closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');
            }

            // if clearing is open and the current image is
            // clicked, go to the next image in sequence
            if (target.hasClass('visible') &&
              current[0] === target[0] &&
              next.length > 0 && self.is_open(current)) {
              target = next;
              image = S('img', target);
            }

            // set current and target to the clicked li if not otherwise defined.
            self.open(image, current, target);
            self.update_paddles(target);
          })

        .on('click.fndtn.clearing', '.clearing-main-next',
          function (e) { self.nav(e, 'next') })
        .on('click.fndtn.clearing', '.clearing-main-prev',
          function (e) { self.nav(e, 'prev') })
        .on('click.fndtn.clearing', this.settings.close_selectors,
          function (e) { Foundation.libs.clearing.close(e, this) });

      $(document).on('keydown.fndtn.clearing',
          function (e) { self.keydown(e) });

      S(window).off('.clearing').on('resize.fndtn.clearing',
        function () { self.resize() });

      this.swipe_events(scope);
    },

    swipe_events : function (scope) {
      var self = this,
      S = self.S;

      S(this.scope)
        .on('touchstart.fndtn.clearing', '.visible-img', function (e) {
          if (!e.touches) { e = e.originalEvent; }
          var data = {
                start_page_x : e.touches[0].pageX,
                start_page_y : e.touches[0].pageY,
                start_time : (new Date()).getTime(),
                delta_x : 0,
                is_scrolling : undefined
              };

          S(this).data('swipe-transition', data);
          e.stopPropagation();
        })
        .on('touchmove.fndtn.clearing', '.visible-img', function (e) {
          if (!e.touches) {
            e = e.originalEvent;
          }
          // Ignore pinch/zoom events
          if (e.touches.length > 1 || e.scale && e.scale !== 1) {
            return;
          }

          var data = S(this).data('swipe-transition');

          if (typeof data === 'undefined') {
            data = {};
          }

          data.delta_x = e.touches[0].pageX - data.start_page_x;

          if (Foundation.rtl) {
            data.delta_x = -data.delta_x;
          }

          if (typeof data.is_scrolling === 'undefined') {
            data.is_scrolling = !!( data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y) );
          }

          if (!data.is_scrolling && !data.active) {
            e.preventDefault();
            var direction = (data.delta_x < 0) ? 'next' : 'prev';
            data.active = true;
            self.nav(e, direction);
          }
        })
        .on('touchend.fndtn.clearing', '.visible-img', function (e) {
          S(this).data('swipe-transition', {});
          e.stopPropagation();
        });
    },

    assemble : function ($li) {
      var $el = $li.parent();

      if ($el.parent().hasClass('carousel')) {
        return;
      }

      $el.after('<div id="foundationClearingHolder"></div>');

      var grid = $el.detach(),
          grid_outerHTML = '';

      if (grid[0] == null) {
        return;
      } else {
        grid_outerHTML = grid[0].outerHTML;
      }

      var holder = this.S('#foundationClearingHolder'),
          settings = $el.data(this.attr_name(true) + '-init'),
          data = {
            grid : '<div class="carousel">' + grid_outerHTML + '</div>',
            viewing : settings.templates.viewing
          },
          wrapper = '<div class="clearing-assembled"><div>' + data.viewing +
            data.grid + '</div></div>',
          touch_label = this.settings.touch_label;

      if (Modernizr.touch) {
        wrapper = $(wrapper).find('.clearing-touch-label').html(touch_label).end();
      }

      holder.after(wrapper).remove();
    },

    open : function ($image, current, target) {
      var self = this,
          body = $(document.body),
          root = target.closest('.clearing-assembled'),
          container = self.S('div', root).first(),
          visible_image = self.S('.visible-img', container),
          image = self.S('img', visible_image).not($image),
          label = self.S('.clearing-touch-label', container),
          error = false;

      // Event to disable scrolling on touch devices when Clearing is activated
      $('body').on('touchmove', function (e) {
        e.preventDefault();
      });

      image.error(function () {
        error = true;
      });

      function startLoad() {
        setTimeout(function () {
          this.image_loaded(image, function () {
            if (image.outerWidth() === 1 && !error) {
              startLoad.call(this);
            } else {
              cb.call(this, image);
            }
          }.bind(this));
        }.bind(this), 100);
      }

      function cb (image) {
        var $image = $(image);
        $image.css('visibility', 'visible');
        // toggle the gallery
        body.css('overflow', 'hidden');
        root.addClass('clearing-blackout');
        container.addClass('clearing-container');
        visible_image.show();
        this.fix_height(target)
          .caption(self.S('.clearing-caption', visible_image), self.S('img', target))
          .center_and_label(image, label)
          .shift(current, target, function () {
            target.closest('li').siblings().removeClass('visible');
            target.closest('li').addClass('visible');
          });
        visible_image.trigger('opened.fndtn.clearing')
      }

      if (!this.locked()) {
        visible_image.trigger('open.fndtn.clearing');
        // set the image to the selected thumbnail
        image
          .attr('src', this.load($image))
          .css('visibility', 'hidden');

        startLoad.call(this);
      }
    },

    close : function (e, el) {
      e.preventDefault();

      var root = (function (target) {
            if (/blackout/.test(target.selector)) {
              return target;
            } else {
              return target.closest('.clearing-blackout');
            }
          }($(el))),
          body = $(document.body), container, visible_image;

      if (el === e.target && root) {
        body.css('overflow', '');
        container = $('div', root).first();
        visible_image = $('.visible-img', container);
        visible_image.trigger('close.fndtn.clearing');
        this.settings.prev_index = 0;
        $('ul[' + this.attr_name() + ']', root)
          .attr('style', '').closest('.clearing-blackout')
          .removeClass('clearing-blackout');
        container.removeClass('clearing-container');
        visible_image.hide();
        visible_image.trigger('closed.fndtn.clearing');
      }

      // Event to re-enable scrolling on touch devices
      $('body').off('touchmove');

      return false;
    },

    is_open : function (current) {
      return current.parent().prop('style').length > 0;
    },

    keydown : function (e) {
      var clearing = $('.clearing-blackout ul[' + this.attr_name() + ']'),
          NEXT_KEY = this.rtl ? 37 : 39,
          PREV_KEY = this.rtl ? 39 : 37,
          ESC_KEY = 27;

      if (e.which === NEXT_KEY) {
        this.go(clearing, 'next');
      }
      if (e.which === PREV_KEY) {
        this.go(clearing, 'prev');
      }
      if (e.which === ESC_KEY) {
        this.S('a.clearing-close').trigger('click').trigger('click.fndtn.clearing');
      }
    },

    nav : function (e, direction) {
      var clearing = $('ul[' + this.attr_name() + ']', '.clearing-blackout');

      e.preventDefault();
      this.go(clearing, direction);
    },

    resize : function () {
      var image = $('img', '.clearing-blackout .visible-img'),
          label = $('.clearing-touch-label', '.clearing-blackout');

      if (image.length) {
        this.center_and_label(image, label);
        image.trigger('resized.fndtn.clearing')
      }
    },

    // visual adjustments
    fix_height : function (target) {
      var lis = target.parent().children(),
          self = this;

      lis.each(function () {
        var li = self.S(this),
            image = li.find('img');

        if (li.height() > image.outerHeight()) {
          li.addClass('fix-height');
        }
      })
      .closest('ul')
      .width(lis.length * 100 + '%');

      return this;
    },

    update_paddles : function (target) {
      target = target.closest('li');
      var visible_image = target
        .closest('.carousel')
        .siblings('.visible-img');

      if (target.next().length > 0) {
        this.S('.clearing-main-next', visible_image).removeClass('disabled');
      } else {
        this.S('.clearing-main-next', visible_image).addClass('disabled');
      }

      if (target.prev().length > 0) {
        this.S('.clearing-main-prev', visible_image).removeClass('disabled');
      } else {
        this.S('.clearing-main-prev', visible_image).addClass('disabled');
      }
    },

    center_and_label : function (target, label) {
      if (!this.rtl && label.length > 0) {
        label.css({
          marginLeft : -(label.outerWidth() / 2),
          marginTop : -(target.outerHeight() / 2)-label.outerHeight()-10
        });
      } else {
        label.css({
          marginRight : -(label.outerWidth() / 2),
          marginTop : -(target.outerHeight() / 2)-label.outerHeight()-10,
          left: 'auto',
          right: '50%'
        });
      }
      return this;
    },

    // image loading and preloading

    load : function ($image) {
      var href;

      if ($image[0].nodeName === 'A') {
        href = $image.attr('href');
      } else {
        href = $image.closest('a').attr('href');
      }

      this.preload($image);

      if (href) {
        return href;
      }
      return $image.attr('src');
    },

    preload : function ($image) {
      this
        .img($image.closest('li').next())
        .img($image.closest('li').prev());
    },

    img : function (img) {
      if (img.length) {
        var new_img = new Image(),
            new_a = this.S('a', img);

        if (new_a.length) {
          new_img.src = new_a.attr('href');
        } else {
          new_img.src = this.S('img', img).attr('src');
        }
      }
      return this;
    },

    // image caption

    caption : function (container, $image) {
      var caption = $image.attr('data-caption');

      if (caption) {
        container
          .html(caption)
          .show();
      } else {
        container
          .text('')
          .hide();
      }
      return this;
    },

    // directional methods

    go : function ($ul, direction) {
      var current = this.S('.visible', $ul),
          target = current[direction]();

      // Check for skip selector.
      if (this.settings.skip_selector && target.find(this.settings.skip_selector).length != 0) {
        target = target[direction]();
      }

      if (target.length) {
        this.S('img', target)
          .trigger('click', [current, target]).trigger('click.fndtn.clearing', [current, target])
          .trigger('change.fndtn.clearing');
      }
    },

    shift : function (current, target, callback) {
      var clearing = target.parent(),
          old_index = this.settings.prev_index || target.index(),
          direction = this.direction(clearing, current, target),
          dir = this.rtl ? 'right' : 'left',
          left = parseInt(clearing.css('left'), 10),
          width = target.outerWidth(),
          skip_shift;

      var dir_obj = {};

      // we use jQuery animate instead of CSS transitions because we
      // need a callback to unlock the next animation
      // needs support for RTL **
      if (target.index() !== old_index && !/skip/.test(direction)) {
        if (/left/.test(direction)) {
          this.lock();
          dir_obj[dir] = left + width;
          clearing.animate(dir_obj, 300, this.unlock());
        } else if (/right/.test(direction)) {
          this.lock();
          dir_obj[dir] = left - width;
          clearing.animate(dir_obj, 300, this.unlock());
        }
      } else if (/skip/.test(direction)) {
        // the target image is not adjacent to the current image, so
        // do we scroll right or not
        skip_shift = target.index() - this.settings.up_count;
        this.lock();

        if (skip_shift > 0) {
          dir_obj[dir] = -(skip_shift * width);
          clearing.animate(dir_obj, 300, this.unlock());
        } else {
          dir_obj[dir] = 0;
          clearing.animate(dir_obj, 300, this.unlock());
        }
      }

      callback();
    },

    direction : function ($el, current, target) {
      var lis = this.S('li', $el),
          li_width = lis.outerWidth() + (lis.outerWidth() / 4),
          up_count = Math.floor(this.S('.clearing-container').outerWidth() / li_width) - 1,
          target_index = lis.index(target),
          response;

      this.settings.up_count = up_count;

      if (this.adjacent(this.settings.prev_index, target_index)) {
        if ((target_index > up_count) && target_index > this.settings.prev_index) {
          response = 'right';
        } else if ((target_index > up_count - 1) && target_index <= this.settings.prev_index) {
          response = 'left';
        } else {
          response = false;
        }
      } else {
        response = 'skip';
      }

      this.settings.prev_index = target_index;

      return response;
    },

    adjacent : function (current_index, target_index) {
      for (var i = target_index + 1; i >= target_index - 1; i--) {
        if (i === current_index) {
          return true;
        }
      }
      return false;
    },

    // lock management

    lock : function () {
      this.settings.locked = true;
    },

    unlock : function () {
      this.settings.locked = false;
    },

    locked : function () {
      return this.settings.locked;
    },

    off : function () {
      this.S(this.scope).off('.fndtn.clearing');
      this.S(window).off('.fndtn.clearing');
    },

    reflow : function () {
      this.init();
    }
  };

}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  var noop = function () {};

  var Orbit = function (el, settings) {
    // Don't reinitialize plugin
    if (el.hasClass(settings.slides_container_class)) {
      return this;
    }

    var self = this,
        container,
        slides_container = el,
        number_container,
        bullets_container,
        timer_container,
        idx = 0,
        animate,
        timer,
        locked = false,
        adjust_height_after = false;

    self.slides = function () {
      return slides_container.children(settings.slide_selector);
    };

    self.slides().first().addClass(settings.active_slide_class);

    self.update_slide_number = function (index) {
      if (settings.slide_number) {
        number_container.find('span:first').text(parseInt(index) + 1);
        number_container.find('span:last').text(self.slides().length);
      }
      if (settings.bullets) {
        bullets_container.children().removeClass(settings.bullets_active_class);
        $(bullets_container.children().get(index)).addClass(settings.bullets_active_class);
      }
    };

    self.update_active_link = function (index) {
      var link = $('[data-orbit-link="' + self.slides().eq(index).attr('data-orbit-slide') + '"]');
      link.siblings().removeClass(settings.bullets_active_class);
      link.addClass(settings.bullets_active_class);
    };

    self.build_markup = function () {
      slides_container.wrap('<div class="' + settings.container_class + '"></div>');
      container = slides_container.parent();
      slides_container.addClass(settings.slides_container_class);

      if (settings.stack_on_small) {
        container.addClass(settings.stack_on_small_class);
      }

      if (settings.navigation_arrows) {
        container.append($('<a href="#"><span></span></a>').addClass(settings.prev_class));
        container.append($('<a href="#"><span></span></a>').addClass(settings.next_class));
      }

      if (settings.timer) {
        timer_container = $('<div>').addClass(settings.timer_container_class);
        timer_container.append('<span>');
        timer_container.append($('<div>').addClass(settings.timer_progress_class));
        timer_container.addClass(settings.timer_paused_class);
        container.append(timer_container);
      }

      if (settings.slide_number) {
        number_container = $('<div>').addClass(settings.slide_number_class);
        number_container.append('<span></span> ' + settings.slide_number_text + ' <span></span>');
        container.append(number_container);
      }

      if (settings.bullets) {
        bullets_container = $('<ol>').addClass(settings.bullets_container_class);
        container.append(bullets_container);
        bullets_container.wrap('<div class="orbit-bullets-container"></div>');
        self.slides().each(function (idx, el) {
          var bullet = $('<li>').attr('data-orbit-slide', idx).on('click', self.link_bullet);;
          bullets_container.append(bullet);
        });
      }

    };

    self._goto = function (next_idx, start_timer) {
      // if (locked) {return false;}
      if (next_idx === idx) {return false;}
      if (typeof timer === 'object') {timer.restart();}
      var slides = self.slides();

      var dir = 'next';
      locked = true;
      if (next_idx < idx) {dir = 'prev';}
      if (next_idx >= slides.length) {
        if (!settings.circular) {
          return false;
        }
        next_idx = 0;
      } else if (next_idx < 0) {
        if (!settings.circular) {
          return false;
        }
        next_idx = slides.length - 1;
      }

      var current = $(slides.get(idx));
      var next = $(slides.get(next_idx));

      current.css('zIndex', 2);
      current.removeClass(settings.active_slide_class);
      next.css('zIndex', 4).addClass(settings.active_slide_class);

      slides_container.trigger('before-slide-change.fndtn.orbit');
      settings.before_slide_change();
      self.update_active_link(next_idx);

      var callback = function () {
        var unlock = function () {
          idx = next_idx;
          locked = false;
          if (start_timer === true) {timer = self.create_timer(); timer.start();}
          self.update_slide_number(idx);
          slides_container.trigger('after-slide-change.fndtn.orbit', [{slide_number : idx, total_slides : slides.length}]);
          settings.after_slide_change(idx, slides.length);
        };
        if (slides_container.outerHeight() != next.outerHeight() && settings.variable_height) {
          slides_container.animate({'height': next.outerHeight()}, 250, 'linear', unlock);
        } else {
          unlock();
        }
      };

      if (slides.length === 1) {callback(); return false;}

      var start_animation = function () {
        if (dir === 'next') {animate.next(current, next, callback);}
        if (dir === 'prev') {animate.prev(current, next, callback);}
      };

      if (next.outerHeight() > slides_container.outerHeight() && settings.variable_height) {
        slides_container.animate({'height': next.outerHeight()}, 250, 'linear', start_animation);
      } else {
        start_animation();
      }
    };

    self.next = function (e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      self._goto(idx + 1);
    };

    self.prev = function (e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      self._goto(idx - 1);
    };

    self.link_custom = function (e) {
      e.preventDefault();
      var link = $(this).attr('data-orbit-link');
      if ((typeof link === 'string') && (link = $.trim(link)) != '') {
        var slide = container.find('[data-orbit-slide=' + link + ']');
        if (slide.index() != -1) {self._goto(slide.index());}
      }
    };

    self.link_bullet = function (e) {
      var index = $(this).attr('data-orbit-slide');
      if ((typeof index === 'string') && (index = $.trim(index)) != '') {
        if (isNaN(parseInt(index))) {
          var slide = container.find('[data-orbit-slide=' + index + ']');
          if (slide.index() != -1) {self._goto(slide.index() + 1);}
        } else {
          self._goto(parseInt(index));
        }
      }

    }

    self.timer_callback = function () {
      self._goto(idx + 1, true);
    }

    self.compute_dimensions = function () {
      var current = $(self.slides().get(idx));
      var h = current.outerHeight();
      if (!settings.variable_height) {
        self.slides().each(function(){
          if ($(this).outerHeight() > h) { h = $(this).outerHeight(); }
        });
      }
      slides_container.height(h);
    };

    self.create_timer = function () {
      var t = new Timer(
        container.find('.' + settings.timer_container_class),
        settings,
        self.timer_callback
      );
      return t;
    };

    self.stop_timer = function () {
      if (typeof timer === 'object') {
        timer.stop();
      }
    };

    self.toggle_timer = function () {
      var t = container.find('.' + settings.timer_container_class);
      if (t.hasClass(settings.timer_paused_class)) {
        if (typeof timer === 'undefined') {timer = self.create_timer();}
        timer.start();
      } else {
        if (typeof timer === 'object') {timer.stop();}
      }
    };

    self.init = function () {
      self.build_markup();
      if (settings.timer) {
        timer = self.create_timer();
        Foundation.utils.image_loaded(this.slides().children('img'), timer.start);
      }
      animate = new FadeAnimation(settings, slides_container);
      if (settings.animation === 'slide') {
        animate = new SlideAnimation(settings, slides_container);
      }

      container.on('click', '.' + settings.next_class, self.next);
      container.on('click', '.' + settings.prev_class, self.prev);

      if (settings.next_on_click) {
        container.on('click', '.' + settings.slides_container_class + ' [data-orbit-slide]', self.link_bullet);
      }

      container.on('click', self.toggle_timer);
      if (settings.swipe) {
        container.on('touchstart.fndtn.orbit', function (e) {
          if (!e.touches) {e = e.originalEvent;}
          var data = {
            start_page_x : e.touches[0].pageX,
            start_page_y : e.touches[0].pageY,
            start_time : (new Date()).getTime(),
            delta_x : 0,
            is_scrolling : undefined
          };
          container.data('swipe-transition', data);
          e.stopPropagation();
        })
        .on('touchmove.fndtn.orbit', function (e) {
          if (!e.touches) {
            e = e.originalEvent;
          }
          // Ignore pinch/zoom events
          if (e.touches.length > 1 || e.scale && e.scale !== 1) {
            return;
          }

          var data = container.data('swipe-transition');
          if (typeof data === 'undefined') {data = {};}

          data.delta_x = e.touches[0].pageX - data.start_page_x;

          if ( typeof data.is_scrolling === 'undefined') {
            data.is_scrolling = !!( data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y) );
          }

          if (!data.is_scrolling && !data.active) {
            e.preventDefault();
            var direction = (data.delta_x < 0) ? (idx + 1) : (idx - 1);
            data.active = true;
            self._goto(direction);
          }
        })
        .on('touchend.fndtn.orbit', function (e) {
          container.data('swipe-transition', {});
          e.stopPropagation();
        })
      }
      container.on('mouseenter.fndtn.orbit', function (e) {
        if (settings.timer && settings.pause_on_hover) {
          self.stop_timer();
        }
      })
      .on('mouseleave.fndtn.orbit', function (e) {
        if (settings.timer && settings.resume_on_mouseout) {
          timer.start();
        }
      });

      $(document).on('click', '[data-orbit-link]', self.link_custom);
      $(window).on('load resize', self.compute_dimensions);
      Foundation.utils.image_loaded(this.slides().children('img'), self.compute_dimensions);
      Foundation.utils.image_loaded(this.slides().children('img'), function () {
        container.prev('.' + settings.preloader_class).css('display', 'none');
        self.update_slide_number(0);
        self.update_active_link(0);
        slides_container.trigger('ready.fndtn.orbit');
      });
    };

    self.init();
  };

  var Timer = function (el, settings, callback) {
    var self = this,
        duration = settings.timer_speed,
        progress = el.find('.' + settings.timer_progress_class),
        start,
        timeout,
        left = -1;

    this.update_progress = function (w) {
      var new_progress = progress.clone();
      new_progress.attr('style', '');
      new_progress.css('width', w + '%');
      progress.replaceWith(new_progress);
      progress = new_progress;
    };

    this.restart = function () {
      clearTimeout(timeout);
      el.addClass(settings.timer_paused_class);
      left = -1;
      self.update_progress(0);
    };

    this.start = function () {
      if (!el.hasClass(settings.timer_paused_class)) {return true;}
      left = (left === -1) ? duration : left;
      el.removeClass(settings.timer_paused_class);
      start = new Date().getTime();
      progress.animate({'width' : '100%'}, left, 'linear');
      timeout = setTimeout(function () {
        self.restart();
        callback();
      }, left);
      el.trigger('timer-started.fndtn.orbit')
    };

    this.stop = function () {
      if (el.hasClass(settings.timer_paused_class)) {return true;}
      clearTimeout(timeout);
      el.addClass(settings.timer_paused_class);
      var end = new Date().getTime();
      left = left - (end - start);
      var w = 100 - ((left / duration) * 100);
      self.update_progress(w);
      el.trigger('timer-stopped.fndtn.orbit');
    };
  };

  var SlideAnimation = function (settings, container) {
    var duration = settings.animation_speed;
    var is_rtl = ($('html[dir=rtl]').length === 1);
    var margin = is_rtl ? 'marginRight' : 'marginLeft';
    var animMargin = {};
    animMargin[margin] = '0%';

    this.next = function (current, next, callback) {
      current.animate({marginLeft : '-100%'}, duration);
      next.animate(animMargin, duration, function () {
        current.css(margin, '100%');
        callback();
      });
    };

    this.prev = function (current, prev, callback) {
      current.animate({marginLeft : '100%'}, duration);
      prev.css(margin, '-100%');
      prev.animate(animMargin, duration, function () {
        current.css(margin, '100%');
        callback();
      });
    };
  };

  var FadeAnimation = function (settings, container) {
    var duration = settings.animation_speed;
    var is_rtl = ($('html[dir=rtl]').length === 1);
    var margin = is_rtl ? 'marginRight' : 'marginLeft';

    this.next = function (current, next, callback) {
      next.css({'margin' : '0%', 'opacity' : '0.01'});
      next.animate({'opacity' :'1'}, duration, 'linear', function () {
        current.css('margin', '100%');
        callback();
      });
    };

    this.prev = function (current, prev, callback) {
      prev.css({'margin' : '0%', 'opacity' : '0.01'});
      prev.animate({'opacity' : '1'}, duration, 'linear', function () {
        current.css('margin', '100%');
        callback();
      });
    };
  };

  Foundation.libs = Foundation.libs || {};

  Foundation.libs.orbit = {
    name : 'orbit',

    version : '5.5.1',

    settings : {
      animation : 'slide',
      timer_speed : 10000,
      pause_on_hover : true,
      resume_on_mouseout : false,
      next_on_click : true,
      animation_speed : 500,
      stack_on_small : false,
      navigation_arrows : true,
      slide_number : true,
      slide_number_text : 'of',
      container_class : 'orbit-container',
      stack_on_small_class : 'orbit-stack-on-small',
      next_class : 'orbit-next',
      prev_class : 'orbit-prev',
      timer_container_class : 'orbit-timer',
      timer_paused_class : 'paused',
      timer_progress_class : 'orbit-progress',
      slides_container_class : 'orbit-slides-container',
      preloader_class : 'preloader',
      slide_selector : '*',
      bullets_container_class : 'orbit-bullets',
      bullets_active_class : 'active',
      slide_number_class : 'orbit-slide-number',
      caption_class : 'orbit-caption',
      active_slide_class : 'active',
      orbit_transition_class : 'orbit-transitioning',
      bullets : true,
      circular : true,
      timer : true,
      variable_height : false,
      swipe : true,
      before_slide_change : noop,
      after_slide_change : noop
    },

    init : function (scope, method, options) {
      var self = this;
      this.bindings(method, options);
    },

    events : function (instance) {
      var orbit_instance = new Orbit(this.S(instance), this.S(instance).data('orbit-init'));
      this.S(instance).data(this.name + '-instance', orbit_instance);
    },

    reflow : function () {
      var self = this;

      if (self.S(self.scope).is('[data-orbit]')) {
        var $el = self.S(self.scope);
        var instance = $el.data(self.name + '-instance');
        instance.compute_dimensions();
      } else {
        self.S('[data-orbit]', self.scope).each(function (idx, el) {
          var $el = self.S(el);
          var opts = self.data_options($el);
          var instance = $el.data(self.name + '-instance');
          instance.compute_dimensions();
        });
      }
    }
  };

}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.offcanvas = {
    name : 'offcanvas',

    version : '5.5.1',

    settings : {
      open_method : 'move',
      close_on_click : false
    },

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function () {
      var self = this,
          S = self.S,
          move_class = '',
          right_postfix = '',
          left_postfix = '';

      if (this.settings.open_method === 'move') {
        move_class = 'move-';
        right_postfix = 'right';
        left_postfix = 'left';
      } else if (this.settings.open_method === 'overlap_single') {
        move_class = 'offcanvas-overlap-';
        right_postfix = 'right';
        left_postfix = 'left';
      } else if (this.settings.open_method === 'overlap') {
        move_class = 'offcanvas-overlap';
      }

      S(this.scope).off('.offcanvas')
        .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {
          self.click_toggle_class(e, move_class + right_postfix);
          if (self.settings.open_method !== 'overlap') {
            S('.left-submenu').removeClass(move_class + right_postfix);
          }
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.left-off-canvas-menu a', function (e) {
          var settings = self.get_settings(e);
          var parent = S(this).parent();

          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {
            self.hide.call(self, move_class + right_postfix, self.get_wrapper(e));
            parent.parent().removeClass(move_class + right_postfix);
          } else if (S(this).parent().hasClass('has-submenu')) {
            e.preventDefault();
            S(this).siblings('.left-submenu').toggleClass(move_class + right_postfix);
          } else if (parent.hasClass('back')) {
            e.preventDefault();
            parent.parent().removeClass(move_class + right_postfix);
          }
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {
          self.click_toggle_class(e, move_class + left_postfix);
          if (self.settings.open_method !== 'overlap') {
            S('.right-submenu').removeClass(move_class + left_postfix);
          }
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.right-off-canvas-menu a', function (e) {
          var settings = self.get_settings(e);
          var parent = S(this).parent();

          if (settings.close_on_click && !parent.hasClass('has-submenu') && !parent.hasClass('back')) {
            self.hide.call(self, move_class + left_postfix, self.get_wrapper(e));
            parent.parent().removeClass(move_class + left_postfix);
          } else if (S(this).parent().hasClass('has-submenu')) {
            e.preventDefault();
            S(this).siblings('.right-submenu').toggleClass(move_class + left_postfix);
          } else if (parent.hasClass('back')) {
            e.preventDefault();
            parent.parent().removeClass(move_class + left_postfix);
          }
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          self.click_remove_class(e, move_class + left_postfix);
          S('.right-submenu').removeClass(move_class + left_postfix);
          if (right_postfix) {
            self.click_remove_class(e, move_class + right_postfix);
            S('.left-submenu').removeClass(move_class + left_postfix);
          }
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          self.click_remove_class(e, move_class + left_postfix);
          $('.left-off-canvas-toggle').attr('aria-expanded', 'false');
          if (right_postfix) {
            self.click_remove_class(e, move_class + right_postfix);
            $('.right-off-canvas-toggle').attr('aria-expanded', 'false');
          }
        });
    },

    toggle : function (class_name, $off_canvas) {
      $off_canvas = $off_canvas || this.get_wrapper();
      if ($off_canvas.is('.' + class_name)) {
        this.hide(class_name, $off_canvas);
      } else {
        this.show(class_name, $off_canvas);
      }
    },

    show : function (class_name, $off_canvas) {
      $off_canvas = $off_canvas || this.get_wrapper();
      $off_canvas.trigger('open').trigger('open.fndtn.offcanvas');
      $off_canvas.addClass(class_name);
    },

    hide : function (class_name, $off_canvas) {
      $off_canvas = $off_canvas || this.get_wrapper();
      $off_canvas.trigger('close').trigger('close.fndtn.offcanvas');
      $off_canvas.removeClass(class_name);
    },

    click_toggle_class : function (e, class_name) {
      e.preventDefault();
      var $off_canvas = this.get_wrapper(e);
      this.toggle(class_name, $off_canvas);
    },

    click_remove_class : function (e, class_name) {
      e.preventDefault();
      var $off_canvas = this.get_wrapper(e);
      this.hide(class_name, $off_canvas);
    },

    get_settings : function (e) {
      var offcanvas  = this.S(e.target).closest('[' + this.attr_name() + ']');
      return offcanvas.data(this.attr_name(true) + '-init') || this.settings;
    },

    get_wrapper : function (e) {
      var $off_canvas = this.S(e ? e.target : this.scope).closest('.off-canvas-wrap');

      if ($off_canvas.length === 0) {
        $off_canvas = this.S('.off-canvas-wrap');
      }
      return $off_canvas;
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.alert = {
    name : 'alert',

    version : '5.5.1',

    settings : {
      callback : function () {}
    },

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function () {
      var self = this,
          S = this.S;

      $(this.scope).off('.alert').on('click.fndtn.alert', '[' + this.attr_name() + '] .close', function (e) {
        var alertBox = S(this).closest('[' + self.attr_name() + ']'),
            settings = alertBox.data(self.attr_name(true) + '-init') || self.settings;

        e.preventDefault();
        if (Modernizr.csstransitions) {
          alertBox.addClass('alert-close');
          alertBox.on('transitionend webkitTransitionEnd oTransitionEnd', function (e) {
            S(this).trigger('close').trigger('close.fndtn.alert').remove();
            settings.callback();
          });
        } else {
          alertBox.fadeOut(300, function () {
            S(this).trigger('close').trigger('close.fndtn.alert').remove();
            settings.callback();
          });
        }
      });
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.reveal = {
    name : 'reveal',

    version : '5.5.1',

    locked : false,

    settings : {
      animation : 'fadeAndPop',
      animation_speed : 250,
      close_on_background_click : true,
      close_on_esc : true,
      dismiss_modal_class : 'close-reveal-modal',
      multiple_opened : false,
      bg_class : 'reveal-modal-bg',
      root_element : 'body',
      open : function(){},
      opened : function(){},
      close : function(){},
      closed : function(){},
      bg : $('.reveal-modal-bg'),
      css : {
        open : {
          'opacity' : 0,
          'visibility' : 'visible',
          'display' : 'block'
        },
        close : {
          'opacity' : 1,
          'visibility' : 'hidden',
          'display' : 'none'
        }
      }
    },

    init : function (scope, method, options) {
      $.extend(true, this.settings, method, options);
      this.bindings(method, options);
    },

    events : function (scope) {
      var self = this,
          S = self.S;

      S(this.scope)
        .off('.reveal')
        .on('click.fndtn.reveal', '[' + this.add_namespace('data-reveal-id') + ']:not([disabled])', function (e) {
          e.preventDefault();

          if (!self.locked) {
            var element = S(this),
                ajax = element.data(self.data_attr('reveal-ajax'));

            self.locked = true;

            if (typeof ajax === 'undefined') {
              self.open.call(self, element);
            } else {
              var url = ajax === true ? element.attr('href') : ajax;

              self.open.call(self, element, {url : url});
            }
          }
        });

      S(document)
        .on('click.fndtn.reveal', this.close_targets(), function (e) {
          e.preventDefault();
          if (!self.locked) {
            var settings = S('[' + self.attr_name() + '].open').data(self.attr_name(true) + '-init') || self.settings,
                bg_clicked = S(e.target)[0] === S('.' + settings.bg_class)[0];

            if (bg_clicked) {
              if (settings.close_on_background_click) {
                e.stopPropagation();
              } else {
                return;
              }
            }

            self.locked = true;
            self.close.call(self, bg_clicked ? S('[' + self.attr_name() + '].open') : S(this).closest('[' + self.attr_name() + ']'));
          }
        });

      if (S('[' + self.attr_name() + ']', this.scope).length > 0) {
        S(this.scope)
          // .off('.reveal')
          .on('open.fndtn.reveal', this.settings.open)
          .on('opened.fndtn.reveal', this.settings.opened)
          .on('opened.fndtn.reveal', this.open_video)
          .on('close.fndtn.reveal', this.settings.close)
          .on('closed.fndtn.reveal', this.settings.closed)
          .on('closed.fndtn.reveal', this.close_video);
      } else {
        S(this.scope)
          // .off('.reveal')
          .on('open.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.open)
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.opened)
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.open_video)
          .on('close.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.close)
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.closed)
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.close_video);
      }

      return true;
    },

    // PATCH #3: turning on key up capture only when a reveal window is open
    key_up_on : function (scope) {
      var self = this;

      // PATCH #1: fixing multiple keyup event trigger from single key press
      self.S('body').off('keyup.fndtn.reveal').on('keyup.fndtn.reveal', function ( event ) {
        var open_modal = self.S('[' + self.attr_name() + '].open'),
            settings = open_modal.data(self.attr_name(true) + '-init') || self.settings ;
        // PATCH #2: making sure that the close event can be called only while unlocked,
        //           so that multiple keyup.fndtn.reveal events don't prevent clean closing of the reveal window.
        if ( settings && event.which === 27  && settings.close_on_esc && !self.locked) { // 27 is the keycode for the Escape key
          self.close.call(self, open_modal);
        }
      });

      return true;
    },

    // PATCH #3: turning on key up capture only when a reveal window is open
    key_up_off : function (scope) {
      this.S('body').off('keyup.fndtn.reveal');
      return true;
    },

    open : function (target, ajax_settings) {
      var self = this,
          modal;

      if (target) {
        if (typeof target.selector !== 'undefined') {
          // Find the named node; only use the first one found, since the rest of the code assumes there's only one node
          modal = self.S('#' + target.data(self.data_attr('reveal-id'))).first();
        } else {
          modal = self.S(this.scope);

          ajax_settings = target;
        }
      } else {
        modal = self.S(this.scope);
      }

      var settings = modal.data(self.attr_name(true) + '-init');
      settings = settings || this.settings;

      if (modal.hasClass('open') && target.attr('data-reveal-id') == modal.attr('id')) {
        return self.close(modal);
      }

      if (!modal.hasClass('open')) {
        var open_modal = self.S('[' + self.attr_name() + '].open');

        if (typeof modal.data('css-top') === 'undefined') {
          modal.data('css-top', parseInt(modal.css('top'), 10))
            .data('offset', this.cache_offset(modal));
        }

        this.key_up_on(modal);    // PATCH #3: turning on key up capture only when a reveal window is open

        modal.on('open.fndtn.reveal').trigger('open.fndtn.reveal');

        if (open_modal.length < 1) {
          this.toggle_bg(modal, true);
        }

        if (typeof ajax_settings === 'string') {
          ajax_settings = {
            url : ajax_settings
          };
        }

        if (typeof ajax_settings === 'undefined' || !ajax_settings.url) {
          if (open_modal.length > 0) {
            if (settings.multiple_opened) {
              this.to_back(open_modal);
            } else {
              this.hide(open_modal, settings.css.close);
            }
          }

          this.show(modal, settings.css.open);
        } else {
          var old_success = typeof ajax_settings.success !== 'undefined' ? ajax_settings.success : null;

          $.extend(ajax_settings, {
            success : function (data, textStatus, jqXHR) {
              if ( $.isFunction(old_success) ) {
                var result = old_success(data, textStatus, jqXHR);
                if (typeof result == 'string') {
                  data = result;
                }
              }

              modal.html(data);
              self.S(modal).foundation('section', 'reflow');
              self.S(modal).children().foundation();

              if (open_modal.length > 0) {
                if (settings.multiple_opened) {
                  this.to_back(open_modal);
                } else {
                  this.hide(open_modal, settings.css.close);
                }
              }
              self.show(modal, settings.css.open);
            }
          });

          $.ajax(ajax_settings);
        }
      }
      self.S(window).trigger('resize');
    },

    close : function (modal) {
      var modal = modal && modal.length ? modal : this.S(this.scope),
          open_modals = this.S('[' + this.attr_name() + '].open'),
          settings = modal.data(this.attr_name(true) + '-init') || this.settings;

      if (open_modals.length > 0) {
        this.locked = true;
        this.key_up_off(modal);   // PATCH #3: turning on key up capture only when a reveal window is open
        modal.trigger('close').trigger('close.fndtn.reveal');

        if ((settings.multiple_opened && open_modals.length === 1) || !settings.multiple_opened || modal.length > 1) {
          this.toggle_bg(modal, false);
          this.to_front(modal);
        }

        if (settings.multiple_opened) {
          this.hide(modal, settings.css.close, settings);
          this.to_front($($.makeArray(open_modals).reverse()[1]));
        } else {
          this.hide(open_modals, settings.css.close, settings);
        }
      }
    },

    close_targets : function () {
      var base = '.' + this.settings.dismiss_modal_class;

      if (this.settings.close_on_background_click) {
        return base + ', .' + this.settings.bg_class;
      }

      return base;
    },

    toggle_bg : function (modal, state) {
      if (this.S('.' + this.settings.bg_class).length === 0) {
        this.settings.bg = $('<div />', {'class': this.settings.bg_class})
          .appendTo('body').hide();
      }

      var visible = this.settings.bg.filter(':visible').length > 0;
      if ( state != visible ) {
        if ( state == undefined ? visible : !state ) {
          this.hide(this.settings.bg);
        } else {
          this.show(this.settings.bg);
        }
      }
    },

    show : function (el, css) {
      // is modal
      if (css) {
        var settings = el.data(this.attr_name(true) + '-init') || this.settings,
            root_element = settings.root_element;

        if (el.parent(root_element).length === 0) {
          var placeholder = el.wrap('<div style="display: none;" />').parent();

          el.on('closed.fndtn.reveal.wrapped', function () {
            el.detach().appendTo(placeholder);
            el.unwrap().unbind('closed.fndtn.reveal.wrapped');
          });

          el.detach().appendTo(root_element);
        }

        var animData = getAnimationData(settings.animation);
        if (!animData.animate) {
          this.locked = false;
        }
        if (animData.pop) {
          css.top = $(window).scrollTop() - el.data('offset') + 'px';
          var end_css = {
            top: $(window).scrollTop() + el.data('css-top') + 'px',
            opacity: 1
          };

          return setTimeout(function () {
            return el
              .css(css)
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.trigger('opened').trigger('opened.fndtn.reveal');
              }.bind(this))
              .addClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        if (animData.fade) {
          css.top = $(window).scrollTop() + el.data('css-top') + 'px';
          var end_css = {opacity: 1};

          return setTimeout(function () {
            return el
              .css(css)
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.trigger('opened').trigger('opened.fndtn.reveal');
              }.bind(this))
              .addClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        return el.css(css).show().css({opacity : 1}).addClass('open').trigger('opened').trigger('opened.fndtn.reveal');
      }

      var settings = this.settings;

      // should we animate the background?
      if (getAnimationData(settings.animation).fade) {
        return el.fadeIn(settings.animation_speed / 2);
      }

      this.locked = false;

      return el.show();
    },

    to_back : function(el) {
      el.addClass('toback');
    },

    to_front : function(el) {
      el.removeClass('toback');
    },

    hide : function (el, css) {
      // is modal
      if (css) {
        var settings = el.data(this.attr_name(true) + '-init');
        settings = settings || this.settings;

        var animData = getAnimationData(settings.animation);
        if (!animData.animate) {
          this.locked = false;
        }
        if (animData.pop) {
          var end_css = {
            top: - $(window).scrollTop() - el.data('offset') + 'px',
            opacity: 0
          };

          return setTimeout(function () {
            return el
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.css(css).trigger('closed').trigger('closed.fndtn.reveal');
              }.bind(this))
              .removeClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        if (animData.fade) {
          var end_css = {opacity : 0};

          return setTimeout(function () {
            return el
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.css(css).trigger('closed').trigger('closed.fndtn.reveal');
              }.bind(this))
              .removeClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        return el.hide().css(css).removeClass('open').trigger('closed').trigger('closed.fndtn.reveal');
      }

      var settings = this.settings;

      // should we animate the background?
      if (getAnimationData(settings.animation).fade) {
        return el.fadeOut(settings.animation_speed / 2);
      }

      return el.hide();
    },

    close_video : function (e) {
      var video = $('.flex-video', e.target),
          iframe = $('iframe', video);

      if (iframe.length > 0) {
        iframe.attr('data-src', iframe[0].src);
        iframe.attr('src', iframe.attr('src'));
        video.hide();
      }
    },

    open_video : function (e) {
      var video = $('.flex-video', e.target),
          iframe = video.find('iframe');

      if (iframe.length > 0) {
        var data_src = iframe.attr('data-src');
        if (typeof data_src === 'string') {
          iframe[0].src = iframe.attr('data-src');
        } else {
          var src = iframe[0].src;
          iframe[0].src = undefined;
          iframe[0].src = src;
        }
        video.show();
      }
    },

    data_attr : function (str) {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + str;
      }

      return str;
    },

    cache_offset : function (modal) {
      var offset = modal.show().height() + parseInt(modal.css('top'), 10);

      modal.hide();

      return offset;
    },

    off : function () {
      $(this.scope).off('.fndtn.reveal');
    },

    reflow : function () {}
  };

  /*
   * getAnimationData('popAndFade') // {animate: true,  pop: true,  fade: true}
   * getAnimationData('fade')       // {animate: true,  pop: false, fade: true}
   * getAnimationData('pop')        // {animate: true,  pop: true,  fade: false}
   * getAnimationData('foo')        // {animate: false, pop: false, fade: false}
   * getAnimationData(null)         // {animate: false, pop: false, fade: false}
   */
  function getAnimationData(str) {
    var fade = /fade/i.test(str);
    var pop = /pop/i.test(str);
    return {
      animate : fade || pop,
      pop : pop,
      fade : fade
    };
  }
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.interchange = {
    name : 'interchange',

    version : '5.5.1',

    cache : {},

    images_loaded : false,
    nodes_loaded : false,

    settings : {
      load_attr : 'interchange',

      named_queries : {
        'default'     : 'only screen',
        'small'       : Foundation.media_queries['small'],
        'small-only'  : Foundation.media_queries['small-only'],
        'medium'      : Foundation.media_queries['medium'],
        'medium-only' : Foundation.media_queries['medium-only'],
        'large'       : Foundation.media_queries['large'],
        'large-only'  : Foundation.media_queries['large-only'],
        'xlarge'      : Foundation.media_queries['xlarge'],
        'xlarge-only' : Foundation.media_queries['xlarge-only'],
        'xxlarge'     : Foundation.media_queries['xxlarge'],
        'landscape'   : 'only screen and (orientation: landscape)',
        'portrait'    : 'only screen and (orientation: portrait)',
        'retina'      : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
          'only screen and (min--moz-device-pixel-ratio: 2),' +
          'only screen and (-o-min-device-pixel-ratio: 2/1),' +
          'only screen and (min-device-pixel-ratio: 2),' +
          'only screen and (min-resolution: 192dpi),' +
          'only screen and (min-resolution: 2dppx)'
      },

      directives : {
        replace : function (el, path, trigger) {
          // The trigger argument, if called within the directive, fires
          // an event named after the directive on the element, passing
          // any parameters along to the event that you pass to trigger.
          //
          // ex. trigger(), trigger([a, b, c]), or trigger(a, b, c)
          //
          // This allows you to bind a callback like so:
          // $('#interchangeContainer').on('replace', function (e, a, b, c) {
          //   console.log($(this).html(), a, b, c);
          // });

          if (/IMG/.test(el[0].nodeName)) {
            var orig_path = el[0].src;

            if (new RegExp(path, 'i').test(orig_path)) {
              return;
            }

            el[0].src = path;

            return trigger(el[0].src);
          }
          var last_path = el.data(this.data_attr + '-last-path'),
              self = this;

          if (last_path == path) {
            return;
          }

          if (/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(path)) {
            $(el).css('background-image', 'url(' + path + ')');
            el.data('interchange-last-path', path);
            return trigger(path);
          }

          return $.get(path, function (response) {
            el.html(response);
            el.data(self.data_attr + '-last-path', path);
            trigger();
          });

        }
      }
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'throttle random_str');

      this.data_attr = this.set_data_attr();
      $.extend(true, this.settings, method, options);
      this.bindings(method, options);
      this.load('images');
      this.load('nodes');
    },

    get_media_hash : function () {
        var mediaHash = '';
        for (var queryName in this.settings.named_queries ) {
            mediaHash += matchMedia(this.settings.named_queries[queryName]).matches.toString();
        }
        return mediaHash;
    },

    events : function () {
      var self = this, prevMediaHash;

      $(window)
        .off('.interchange')
        .on('resize.fndtn.interchange', self.throttle(function () {
            var currMediaHash = self.get_media_hash();
            if (currMediaHash !== prevMediaHash) {
                self.resize();
            }
            prevMediaHash = currMediaHash;
        }, 50));

      return this;
    },

    resize : function () {
      var cache = this.cache;

      if (!this.images_loaded || !this.nodes_loaded) {
        setTimeout($.proxy(this.resize, this), 50);
        return;
      }

      for (var uuid in cache) {
        if (cache.hasOwnProperty(uuid)) {
          var passed = this.results(uuid, cache[uuid]);

          if (passed) {
            this.settings.directives[passed
              .scenario[1]].call(this, passed.el, passed.scenario[0], (function (passed) {
                if (arguments[0] instanceof Array) {
                  var args = arguments[0];
                } else {
                  var args = Array.prototype.slice.call(arguments, 0);
                }

                return function() {
                  passed.el.trigger(passed.scenario[1], args);
                }
              }(passed)));
          }
        }
      }

    },

    results : function (uuid, scenarios) {
      var count = scenarios.length;

      if (count > 0) {
        var el = this.S('[' + this.add_namespace('data-uuid') + '="' + uuid + '"]');

        while (count--) {
          var mq, rule = scenarios[count][2];
          if (this.settings.named_queries.hasOwnProperty(rule)) {
            mq = matchMedia(this.settings.named_queries[rule]);
          } else {
            mq = matchMedia(rule);
          }
          if (mq.matches) {
            return {el : el, scenario : scenarios[count]};
          }
        }
      }

      return false;
    },

    load : function (type, force_update) {
      if (typeof this['cached_' + type] === 'undefined' || force_update) {
        this['update_' + type]();
      }

      return this['cached_' + type];
    },

    update_images : function () {
      var images = this.S('img[' + this.data_attr + ']'),
          count = images.length,
          i = count,
          loaded_count = 0,
          data_attr = this.data_attr;

      this.cache = {};
      this.cached_images = [];
      this.images_loaded = (count === 0);

      while (i--) {
        loaded_count++;
        if (images[i]) {
          var str = images[i].getAttribute(data_attr) || '';

          if (str.length > 0) {
            this.cached_images.push(images[i]);
          }
        }

        if (loaded_count === count) {
          this.images_loaded = true;
          this.enhance('images');
        }
      }

      return this;
    },

    update_nodes : function () {
      var nodes = this.S('[' + this.data_attr + ']').not('img'),
          count = nodes.length,
          i = count,
          loaded_count = 0,
          data_attr = this.data_attr;

      this.cached_nodes = [];
      this.nodes_loaded = (count === 0);

      while (i--) {
        loaded_count++;
        var str = nodes[i].getAttribute(data_attr) || '';

        if (str.length > 0) {
          this.cached_nodes.push(nodes[i]);
        }

        if (loaded_count === count) {
          this.nodes_loaded = true;
          this.enhance('nodes');
        }
      }

      return this;
    },

    enhance : function (type) {
      var i = this['cached_' + type].length;

      while (i--) {
        this.object($(this['cached_' + type][i]));
      }

      return $(window).trigger('resize').trigger('resize.fndtn.interchange');
    },

    convert_directive : function (directive) {

      var trimmed = this.trim(directive);

      if (trimmed.length > 0) {
        return trimmed;
      }

      return 'replace';
    },

    parse_scenario : function (scenario) {
      // This logic had to be made more complex since some users were using commas in the url path
      // So we cannot simply just split on a comma
      var directive_match = scenario[0].match(/(.+),\s*(\w+)\s*$/),
      media_query         = scenario[1];

      if (directive_match) {
        var path  = directive_match[1],
        directive = directive_match[2];
      } else {
        var cached_split = scenario[0].split(/,\s*$/),
        path             = cached_split[0],
        directive        = '';
      }

      return [this.trim(path), this.convert_directive(directive), this.trim(media_query)];
    },

    object : function (el) {
      var raw_arr = this.parse_data_attr(el),
          scenarios = [],
          i = raw_arr.length;

      if (i > 0) {
        while (i--) {
          var split = raw_arr[i].split(/\(([^\)]*?)(\))$/);

          if (split.length > 1) {
            var params = this.parse_scenario(split);
            scenarios.push(params);
          }
        }
      }

      return this.store(el, scenarios);
    },

    store : function (el, scenarios) {
      var uuid = this.random_str(),
          current_uuid = el.data(this.add_namespace('uuid', true));

      if (this.cache[current_uuid]) {
        return this.cache[current_uuid];
      }

      el.attr(this.add_namespace('data-uuid'), uuid);

      return this.cache[uuid] = scenarios;
    },

    trim : function (str) {

      if (typeof str === 'string') {
        return $.trim(str);
      }

      return str;
    },

    set_data_attr : function (init) {
      if (init) {
        if (this.namespace.length > 0) {
          return this.namespace + '-' + this.settings.load_attr;
        }

        return this.settings.load_attr;
      }

      if (this.namespace.length > 0) {
        return 'data-' + this.namespace + '-' + this.settings.load_attr;
      }

      return 'data-' + this.settings.load_attr;
    },

    parse_data_attr : function (el) {
      var raw = el.attr(this.attr_name()).split(/\[(.*?)\]/),
          i = raw.length,
          output = [];

      while (i--) {
        if (raw[i].replace(/[\W\d]+/, '').length > 4) {
          output.push(raw[i]);
        }
      }

      return output;
    },

    reflow : function () {
      this.load('images', true);
      this.load('nodes', true);
    }

  };

}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs['magellan-expedition'] = {
    name : 'magellan-expedition',

    version : '5.5.1',

    settings : {
      active_class : 'active',
      threshold : 0, // pixels from the top of the expedition for it to become fixes
      destination_threshold : 20, // pixels from the top of destination for it to be considered active
      throttle_delay : 30, // calculation throttling to increase framerate
      fixed_top : 0, // top distance in pixels assigend to the fixed element on scroll
      offset_by_height : true,  // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
      duration : 700, // animation duration time
      easing : 'swing' // animation easing
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'throttle');
      this.bindings(method, options);
    },

    events : function () {
      var self = this,
          S = self.S,
          settings = self.settings;

      // initialize expedition offset
      self.set_expedition_position();

      S(self.scope)
        .off('.magellan')
        .on('click.fndtn.magellan', '[' + self.add_namespace('data-magellan-arrival') + '] a[href^="#"]', function (e) {
          e.preventDefault();
          var expedition = $(this).closest('[' + self.attr_name() + ']'),
              settings = expedition.data('magellan-expedition-init'),
              hash = this.hash.split('#').join(''),
              target = $('a[name="' + hash + '"]');

          if (target.length === 0) {
            target = $('#' + hash);

          }

          // Account for expedition height if fixed position
          var scroll_top = target.offset().top - settings.destination_threshold + 1;
          if (settings.offset_by_height) {
            scroll_top = scroll_top - expedition.outerHeight();
          }

          $('html, body').stop().animate({
            'scrollTop' : scroll_top
          }, settings.duration, settings.easing, function () {
            if (history.pushState) {
              history.pushState(null, null, '#' + hash);
            } else {
              location.hash = '#' + hash;
            }
          });
        })
        .on('scroll.fndtn.magellan', self.throttle(this.check_for_arrivals.bind(this), settings.throttle_delay));

      $(window)
        .on('resize.fndtn.magellan', self.throttle(this.set_expedition_position.bind(this), settings.throttle_delay));
    },

    check_for_arrivals : function () {
      var self = this;
      self.update_arrivals();
      self.update_expedition_positions();
    },

    set_expedition_position : function () {
      var self = this;
      $('[' + this.attr_name() + '=fixed]', self.scope).each(function (idx, el) {
        var expedition = $(this),
            settings = expedition.data('magellan-expedition-init'),
            styles = expedition.attr('styles'), // save styles
            top_offset, fixed_top;

        expedition.attr('style', '');
        top_offset = expedition.offset().top + settings.threshold;

        //set fixed-top by attribute
        fixed_top = parseInt(expedition.data('magellan-fixed-top'));
        if (!isNaN(fixed_top)) {
          self.settings.fixed_top = fixed_top;
        }

        expedition.data(self.data_attr('magellan-top-offset'), top_offset);
        expedition.attr('style', styles);
      });
    },

    update_expedition_positions : function () {
      var self = this,
          window_top_offset = $(window).scrollTop();

      $('[' + this.attr_name() + '=fixed]', self.scope).each(function () {
        var expedition = $(this),
            settings = expedition.data('magellan-expedition-init'),
            styles = expedition.attr('style'), // save styles
            top_offset = expedition.data('magellan-top-offset');

        //scroll to the top distance
        if (window_top_offset + self.settings.fixed_top >= top_offset) {
          // Placeholder allows height calculations to be consistent even when
          // appearing to switch between fixed/non-fixed placement
          var placeholder = expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']');
          if (placeholder.length === 0) {
            placeholder = expedition.clone();
            placeholder.removeAttr(self.attr_name());
            placeholder.attr(self.add_namespace('data-magellan-expedition-clone'), '');
            expedition.before(placeholder);
          }
          expedition.css({position :'fixed', top : settings.fixed_top}).addClass('fixed');
        } else {
          expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']').remove();
          expedition.attr('style', styles).css('position', '').css('top', '').removeClass('fixed');
        }
      });
    },

    update_arrivals : function () {
      var self = this,
          window_top_offset = $(window).scrollTop();

      $('[' + this.attr_name() + ']', self.scope).each(function () {
        var expedition = $(this),
            settings = expedition.data(self.attr_name(true) + '-init'),
            offsets = self.offsets(expedition, window_top_offset),
            arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']'),
            active_item = false;
        offsets.each(function (idx, item) {
          if (item.viewport_offset >= item.top_offset) {
            var arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']');
            arrivals.not(item.arrival).removeClass(settings.active_class);
            item.arrival.addClass(settings.active_class);
            active_item = true;
            return true;
          }
        });

        if (!active_item) {
          arrivals.removeClass(settings.active_class);
        }
      });
    },

    offsets : function (expedition, window_offset) {
      var self = this,
          settings = expedition.data(self.attr_name(true) + '-init'),
          viewport_offset = window_offset;

      return expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']').map(function (idx, el) {
        var name = $(this).data(self.data_attr('magellan-arrival')),
            dest = $('[' + self.add_namespace('data-magellan-destination') + '=' + name + ']');
        if (dest.length > 0) {
          var top_offset = dest.offset().top - settings.destination_threshold;
          if (settings.offset_by_height) {
            top_offset = top_offset - expedition.outerHeight();
          }
          top_offset = Math.floor(top_offset);
          return {
            destination : dest,
            arrival : $(this),
            top_offset : top_offset,
            viewport_offset : viewport_offset
          }
        }
      }).sort(function (a, b) {
        if (a.top_offset < b.top_offset) {
          return -1;
        }
        if (a.top_offset > b.top_offset) {
          return 1;
        }
        return 0;
      });
    },

    data_attr : function (str) {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + str;
      }

      return str;
    },

    off : function () {
      this.S(this.scope).off('.magellan');
      this.S(window).off('.magellan');
    },

    reflow : function () {
      var self = this;
      // remove placeholder expeditions used for height calculation purposes
      $('[' + self.add_namespace('data-magellan-expedition-clone') + ']', self.scope).remove();
    }
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.accordion = {
    name : 'accordion',

    version : '5.5.1',

    settings : {
      content_class : 'content',
      active_class : 'active',
      multi_expand : false,
      toggleable : true,
      callback : function () {}
    },

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function () {
      var self = this;
      var S = this.S;
      S(this.scope)
      .off('.fndtn.accordion')
      .on('click.fndtn.accordion', '[' + this.attr_name() + '] > .accordion-navigation > a', function (e) {
        var accordion = S(this).closest('[' + self.attr_name() + ']'),
            groupSelector = self.attr_name() + '=' + accordion.attr(self.attr_name()),
            settings = accordion.data(self.attr_name(true) + '-init') || self.settings,
            target = S('#' + this.href.split('#')[1]),
            aunts = $('> .accordion-navigation', accordion),
            siblings = aunts.children('.' + settings.content_class),
            active_content = siblings.filter('.' + settings.active_class);

        e.preventDefault();

        if (accordion.attr(self.attr_name())) {
          siblings = siblings.add('[' + groupSelector + '] dd > ' + '.' + settings.content_class);
          aunts = aunts.add('[' + groupSelector + '] .accordion-navigation');
        }

        if (settings.toggleable && target.is(active_content)) {
          target.parent('.accordion-navigation').toggleClass(settings.active_class, false);
          target.toggleClass(settings.active_class, false);
          settings.callback(target);
          target.triggerHandler('toggled', [accordion]);
          accordion.triggerHandler('toggled', [target]);
          return;
        }

        if (!settings.multi_expand) {
          siblings.removeClass(settings.active_class);
          aunts.removeClass(settings.active_class);
        }

        target.addClass(settings.active_class).parent().addClass(settings.active_class);
        settings.callback(target);
        target.triggerHandler('toggled', [accordion]);
        accordion.triggerHandler('toggled', [target]);
      });
    },

    off : function () {},

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.topbar = {
    name : 'topbar',

    version : '5.5.1',

    settings : {
      index : 0,
      sticky_class : 'sticky',
      custom_back_text : true,
      back_text : 'Back',
      mobile_show_parent_link : true,
      is_hover : true,
      scrolltop : true, // jump to top when sticky nav menu toggle is clicked
      sticky_on : 'all'
    },

    init : function (section, method, options) {
      Foundation.inherit(this, 'add_custom_rule register_media throttle');
      var self = this;

      self.register_media('topbar', 'foundation-mq-topbar');

      this.bindings(method, options);

      self.S('[' + this.attr_name() + ']', this.scope).each(function () {
        var topbar = $(this),
            settings = topbar.data(self.attr_name(true) + '-init'),
            section = self.S('section, .top-bar-section', this);
        topbar.data('index', 0);
        var topbarContainer = topbar.parent();
        if (topbarContainer.hasClass('fixed') || self.is_sticky(topbar, topbarContainer, settings) ) {
          self.settings.sticky_class = settings.sticky_class;
          self.settings.sticky_topbar = topbar;
          topbar.data('height', topbarContainer.outerHeight());
          topbar.data('stickyoffset', topbarContainer.offset().top);
        } else {
          topbar.data('height', topbar.outerHeight());
        }

        if (!settings.assembled) {
          self.assemble(topbar);
        }

        if (settings.is_hover) {
          self.S('.has-dropdown', topbar).addClass('not-click');
        } else {
          self.S('.has-dropdown', topbar).removeClass('not-click');
        }

        // Pad body when sticky (scrolled) or fixed.
        self.add_custom_rule('.f-topbar-fixed { padding-top: ' + topbar.data('height') + 'px }');

        if (topbarContainer.hasClass('fixed')) {
          self.S('body').addClass('f-topbar-fixed');
        }
      });

    },

    is_sticky : function (topbar, topbarContainer, settings) {
      var sticky     = topbarContainer.hasClass(settings.sticky_class);
      var smallMatch = matchMedia(Foundation.media_queries.small).matches;
      var medMatch   = matchMedia(Foundation.media_queries.medium).matches;
      var lrgMatch   = matchMedia(Foundation.media_queries.large).matches;

       if (sticky && settings.sticky_on === 'all') {
          return true;
       }
       if (sticky && this.small() && settings.sticky_on.indexOf('small') !== -1) {
           if (smallMatch && !medMatch && !lrgMatch) { return true; }
       }
       if (sticky && this.medium() && settings.sticky_on.indexOf('medium') !== -1) {
           if (smallMatch && medMatch && !lrgMatch) { return true; }
       }
       if (sticky && this.large() && settings.sticky_on.indexOf('large') !== -1) {
           if (smallMatch && medMatch && lrgMatch) { return true; }
       }

       // fix for iOS browsers
       if (sticky && navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
        return true;
       }
       return false;
    },

    toggle : function (toggleEl) {
      var self = this,
          topbar;

      if (toggleEl) {
        topbar = self.S(toggleEl).closest('[' + this.attr_name() + ']');
      } else {
        topbar = self.S('[' + this.attr_name() + ']');
      }

      var settings = topbar.data(this.attr_name(true) + '-init');

      var section = self.S('section, .top-bar-section', topbar);

      if (self.breakpoint()) {
        if (!self.rtl) {
          section.css({left : '0%'});
          $('>.name', section).css({left : '100%'});
        } else {
          section.css({right : '0%'});
          $('>.name', section).css({right : '100%'});
        }

        self.S('li.moved', section).removeClass('moved');
        topbar.data('index', 0);

        topbar
          .toggleClass('expanded')
          .css('height', '');
      }

      if (settings.scrolltop) {
        if (!topbar.hasClass('expanded')) {
          if (topbar.hasClass('fixed')) {
            topbar.parent().addClass('fixed');
            topbar.removeClass('fixed');
            self.S('body').addClass('f-topbar-fixed');
          }
        } else if (topbar.parent().hasClass('fixed')) {
          if (settings.scrolltop) {
            topbar.parent().removeClass('fixed');
            topbar.addClass('fixed');
            self.S('body').removeClass('f-topbar-fixed');

            window.scrollTo(0, 0);
          } else {
            topbar.parent().removeClass('expanded');
          }
        }
      } else {
        if (self.is_sticky(topbar, topbar.parent(), settings)) {
          topbar.parent().addClass('fixed');
        }

        if (topbar.parent().hasClass('fixed')) {
          if (!topbar.hasClass('expanded')) {
            topbar.removeClass('fixed');
            topbar.parent().removeClass('expanded');
            self.update_sticky_positioning();
          } else {
            topbar.addClass('fixed');
            topbar.parent().addClass('expanded');
            self.S('body').addClass('f-topbar-fixed');
          }
        }
      }
    },

    timer : null,

    events : function (bar) {
      var self = this,
          S = this.S;

      S(this.scope)
        .off('.topbar')
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .toggle-topbar', function (e) {
          e.preventDefault();
          self.toggle(this);
        })
        .on('click.fndtn.topbar', '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function (e) {
            var li = $(this).closest('li');
            if (self.breakpoint() && !li.hasClass('back') && !li.hasClass('has-dropdown')) {
              self.toggle();
            }
        })
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] li.has-dropdown', function (e) {
          var li = S(this),
              target = S(e.target),
              topbar = li.closest('[' + self.attr_name() + ']'),
              settings = topbar.data(self.attr_name(true) + '-init');

          if (target.data('revealId')) {
            self.toggle();
            return;
          }

          if (self.breakpoint()) {
            return;
          }

          if (settings.is_hover && !Modernizr.touch) {
            return;
          }

          e.stopImmediatePropagation();

          if (li.hasClass('hover')) {
            li
              .removeClass('hover')
              .find('li')
              .removeClass('hover');

            li.parents('li.hover')
              .removeClass('hover');
          } else {
            li.addClass('hover');

            $(li).siblings().removeClass('hover');

            if (target[0].nodeName === 'A' && target.parent().hasClass('has-dropdown')) {
              e.preventDefault();
            }
          }
        })
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown>a', function (e) {
          if (self.breakpoint()) {

            e.preventDefault();

            var $this = S(this),
                topbar = $this.closest('[' + self.attr_name() + ']'),
                section = topbar.find('section, .top-bar-section'),
                dropdownHeight = $this.next('.dropdown').outerHeight(),
                $selectedLi = $this.closest('li');

            topbar.data('index', topbar.data('index') + 1);
            $selectedLi.addClass('moved');

            if (!self.rtl) {
              section.css({left : -(100 * topbar.data('index')) + '%'});
              section.find('>.name').css({left : 100 * topbar.data('index') + '%'});
            } else {
              section.css({right : -(100 * topbar.data('index')) + '%'});
              section.find('>.name').css({right : 100 * topbar.data('index') + '%'});
            }

            topbar.css('height', $this.siblings('ul').outerHeight(true) + topbar.data('height'));
          }
        });

      S(window).off('.topbar').on('resize.fndtn.topbar', self.throttle(function () {
          self.resize.call(self);
      }, 50)).trigger('resize').trigger('resize.fndtn.topbar').load(function () {
          // Ensure that the offset is calculated after all of the pages resources have loaded
          S(this).trigger('resize.fndtn.topbar');
      });

      S('body').off('.topbar').on('click.fndtn.topbar', function (e) {
        var parent = S(e.target).closest('li').closest('li.hover');

        if (parent.length > 0) {
          return;
        }

        S('[' + self.attr_name() + '] li.hover').removeClass('hover');
      });

      // Go up a level on Click
      S(this.scope).on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown .back', function (e) {
        e.preventDefault();

        var $this = S(this),
            topbar = $this.closest('[' + self.attr_name() + ']'),
            section = topbar.find('section, .top-bar-section'),
            settings = topbar.data(self.attr_name(true) + '-init'),
            $movedLi = $this.closest('li.moved'),
            $previousLevelUl = $movedLi.parent();

        topbar.data('index', topbar.data('index') - 1);

        if (!self.rtl) {
          section.css({left : -(100 * topbar.data('index')) + '%'});
          section.find('>.name').css({left : 100 * topbar.data('index') + '%'});
        } else {
          section.css({right : -(100 * topbar.data('index')) + '%'});
          section.find('>.name').css({right : 100 * topbar.data('index') + '%'});
        }

        if (topbar.data('index') === 0) {
          topbar.css('height', '');
        } else {
          topbar.css('height', $previousLevelUl.outerHeight(true) + topbar.data('height'));
        }

        setTimeout(function () {
          $movedLi.removeClass('moved');
        }, 300);
      });

      // Show dropdown menus when their items are focused
      S(this.scope).find('.dropdown a')
        .focus(function () {
          $(this).parents('.has-dropdown').addClass('hover');
        })
        .blur(function () {
          $(this).parents('.has-dropdown').removeClass('hover');
        });
    },

    resize : function () {
      var self = this;
      self.S('[' + this.attr_name() + ']').each(function () {
        var topbar = self.S(this),
            settings = topbar.data(self.attr_name(true) + '-init');

        var stickyContainer = topbar.parent('.' + self.settings.sticky_class);
        var stickyOffset;

        if (!self.breakpoint()) {
          var doToggle = topbar.hasClass('expanded');
          topbar
            .css('height', '')
            .removeClass('expanded')
            .find('li')
            .removeClass('hover');

            if (doToggle) {
              self.toggle(topbar);
            }
        }

        if (self.is_sticky(topbar, stickyContainer, settings)) {
          if (stickyContainer.hasClass('fixed')) {
            // Remove the fixed to allow for correct calculation of the offset.
            stickyContainer.removeClass('fixed');

            stickyOffset = stickyContainer.offset().top;
            if (self.S(document.body).hasClass('f-topbar-fixed')) {
              stickyOffset -= topbar.data('height');
            }

            topbar.data('stickyoffset', stickyOffset);
            stickyContainer.addClass('fixed');
          } else {
            stickyOffset = stickyContainer.offset().top;
            topbar.data('stickyoffset', stickyOffset);
          }
        }

      });
    },

    breakpoint : function () {
      return !matchMedia(Foundation.media_queries['topbar']).matches;
    },

    small : function () {
      return matchMedia(Foundation.media_queries['small']).matches;
    },

    medium : function () {
      return matchMedia(Foundation.media_queries['medium']).matches;
    },

    large : function () {
      return matchMedia(Foundation.media_queries['large']).matches;
    },

    assemble : function (topbar) {
      var self = this,
          settings = topbar.data(this.attr_name(true) + '-init'),
          section = self.S('section, .top-bar-section', topbar);

      // Pull element out of the DOM for manipulation
      section.detach();

      self.S('.has-dropdown>a', section).each(function () {
        var $link = self.S(this),
            $dropdown = $link.siblings('.dropdown'),
            url = $link.attr('href'),
            $titleLi;

        if (!$dropdown.find('.title.back').length) {

          if (settings.mobile_show_parent_link == true && url) {
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-large-up"><a class="parent-link js-generated" href="' + url + '">' + $link.html() +'</a></li>');
          } else {
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>');
          }

          // Copy link to subnav
          if (settings.custom_back_text == true) {
            $('h5>a', $titleLi).html(settings.back_text);
          } else {
            $('h5>a', $titleLi).html('&laquo; ' + $link.html());
          }
          $dropdown.prepend($titleLi);
        }
      });

      // Put element back in the DOM
      section.appendTo(topbar);

      // check for sticky
      this.sticky();

      this.assembled(topbar);
    },

    assembled : function (topbar) {
      topbar.data(this.attr_name(true), $.extend({}, topbar.data(this.attr_name(true)), {assembled : true}));
    },

    height : function (ul) {
      var total = 0,
          self = this;

      $('> li', ul).each(function () {
        total += self.S(this).outerHeight(true);
      });

      return total;
    },

    sticky : function () {
      var self = this;

      this.S(window).on('scroll', function () {
        self.update_sticky_positioning();
      });
    },

    update_sticky_positioning : function () {
      var klass = '.' + this.settings.sticky_class,
          $window = this.S(window),
          self = this;

      if (self.settings.sticky_topbar && self.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
        var distance = this.settings.sticky_topbar.data('stickyoffset');
        if (!self.S(klass).hasClass('expanded')) {
          if ($window.scrollTop() > (distance)) {
            if (!self.S(klass).hasClass('fixed')) {
              self.S(klass).addClass('fixed');
              self.S('body').addClass('f-topbar-fixed');
            }
          } else if ($window.scrollTop() <= distance) {
            if (self.S(klass).hasClass('fixed')) {
              self.S(klass).removeClass('fixed');
              self.S('body').removeClass('f-topbar-fixed');
            }
          }
        }
      }
    },

    off : function () {
      this.S(this.scope).off('.fndtn.topbar');
      this.S(window).off('.fndtn.topbar');
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.tab = {
    name : 'tab',

    version : '5.5.1',

    settings : {
      active_class : 'active',
      callback : function () {},
      deep_linking : false,
      scroll_to_content : true,
      is_hover : false
    },

    default_tab_hashes : [],

    init : function (scope, method, options) {
      var self = this,
          S = this.S;

      this.bindings(method, options);

      // store the initial href, which is used to allow correct behaviour of the
      // browser back button when deep linking is turned on.
      self.entry_location = window.location.href;

      this.handle_location_hash_change();

      // Store the default active tabs which will be referenced when the
      // location hash is absent, as in the case of navigating the tabs and
      // returning to the first viewing via the browser Back button.
      S('[' + this.attr_name() + '] > .active > a', this.scope).each(function () {
        self.default_tab_hashes.push(this.hash);
      });
    },

    events : function () {
      var self = this,
          S = this.S;

      var usual_tab_behavior =  function (e) {
          var settings = S(this).closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');
          if (!settings.is_hover || Modernizr.touch) {
            e.preventDefault();
            e.stopPropagation();
            self.toggle_active_tab(S(this).parent());
          }
        };

      S(this.scope)
        .off('.tab')
        // Click event: tab title
        .on('focus.fndtn.tab', '[' + this.attr_name() + '] > * > a', usual_tab_behavior )
        .on('click.fndtn.tab', '[' + this.attr_name() + '] > * > a', usual_tab_behavior )
        // Hover event: tab title
        .on('mouseenter.fndtn.tab', '[' + this.attr_name() + '] > * > a', function (e) {
          var settings = S(this).closest('[' + self.attr_name() + ']').data(self.attr_name(true) + '-init');
          if (settings.is_hover) {
            self.toggle_active_tab(S(this).parent());
          }
        });

      // Location hash change event
      S(window).on('hashchange.fndtn.tab', function (e) {
        e.preventDefault();
        self.handle_location_hash_change();
      });
    },

    handle_location_hash_change : function () {

      var self = this,
          S = this.S;

      S('[' + this.attr_name() + ']', this.scope).each(function () {
        var settings = S(this).data(self.attr_name(true) + '-init');
        if (settings.deep_linking) {
          // Match the location hash to a label
          var hash;
          if (settings.scroll_to_content) {
            hash = self.scope.location.hash;
          } else {
            // prefix the hash to prevent anchor scrolling
            hash = self.scope.location.hash.replace('fndtn-', '');
          }
          if (hash != '') {
            // Check whether the location hash references a tab content div or
            // another element on the page (inside or outside the tab content div)
            var hash_element = S(hash);
            if (hash_element.hasClass('content') && hash_element.parent().hasClass('tabs-content')) {
              // Tab content div
              self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=' + hash + ']').parent());
            } else {
              // Not the tab content div. If inside the tab content, find the
              // containing tab and toggle it as active.
              var hash_tab_container_id = hash_element.closest('.content').attr('id');
              if (hash_tab_container_id != undefined) {
                self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=#' + hash_tab_container_id + ']').parent(), hash);
              }
            }
          } else {
            // Reference the default tab hashes which were initialized in the init function
            for (var ind = 0; ind < self.default_tab_hashes.length; ind++) {
              self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=' + self.default_tab_hashes[ind] + ']').parent());
            }
          }
        }
       });
     },

    toggle_active_tab : function (tab, location_hash) {
      var self = this,
          S = self.S,
          tabs = tab.closest('[' + this.attr_name() + ']'),
          tab_link = tab.find('a'),
          anchor = tab.children('a').first(),
          target_hash = '#' + anchor.attr('href').split('#')[1],
          target = S(target_hash),
          siblings = tab.siblings(),
          settings = tabs.data(this.attr_name(true) + '-init'),
          interpret_keyup_action = function (e) {
            // Light modification of Heydon Pickering's Practical ARIA Examples: http://heydonworks.com/practical_aria_examples/js/a11y.js

            // define current, previous and next (possible) tabs

            var $original = $(this);
            var $prev = $(this).parents('li').prev().children('[role="tab"]');
            var $next = $(this).parents('li').next().children('[role="tab"]');
            var $target;

            // find the direction (prev or next)

            switch (e.keyCode) {
              case 37:
                $target = $prev;
                break;
              case 39:
                $target = $next;
                break;
              default:
                $target = false
                  break;
            }

            if ($target.length) {
              $original.attr({
                'tabindex' : '-1',
                'aria-selected' : null
              });
              $target.attr({
                'tabindex' : '0',
                'aria-selected' : true
              }).focus();
            }

            // Hide panels

            $('[role="tabpanel"]')
              .attr('aria-hidden', 'true');

            // Show panel which corresponds to target

            $('#' + $(document.activeElement).attr('href').substring(1))
              .attr('aria-hidden', null);

          },
          go_to_hash = function(hash) {
            // This function allows correct behaviour of the browser's back button when deep linking is enabled. Without it
            // the user would get continually redirected to the default hash.
            var is_entry_location = window.location.href === self.entry_location,
                default_hash = settings.scroll_to_content ? self.default_tab_hashes[0] : is_entry_location ? window.location.hash :'fndtn-' + self.default_tab_hashes[0].replace('#', '')

            if (!(is_entry_location && hash === default_hash)) {
              window.location.hash = hash;
            }
          };

      // allow usage of data-tab-content attribute instead of href
      if (S(this).data(this.data_attr('tab-content'))) {
        target_hash = '#' + S(this).data(this.data_attr('tab-content')).split('#')[1];
        target = S(target_hash);
      }

      if (settings.deep_linking) {

        if (settings.scroll_to_content) {

          // retain current hash to scroll to content
          go_to_hash(location_hash || target_hash);

          if (location_hash == undefined || location_hash == target_hash) {
            tab.parent()[0].scrollIntoView();
          } else {
            S(target_hash)[0].scrollIntoView();
          }
        } else {
          // prefix the hashes so that the browser doesn't scroll down
          if (location_hash != undefined) {
            go_to_hash('fndtn-' + location_hash.replace('#', ''));
          } else {
            go_to_hash('fndtn-' + target_hash.replace('#', ''));
          }
        }
      }

      // WARNING: The activation and deactivation of the tab content must
      // occur after the deep linking in order to properly refresh the browser
      // window (notably in Chrome).
      // Clean up multiple attr instances to done once
      tab.addClass(settings.active_class).triggerHandler('opened');
      tab_link.attr({'aria-selected' : 'true',  tabindex : 0});
      siblings.removeClass(settings.active_class)
      siblings.find('a').attr({'aria-selected' : 'false',  tabindex : -1});
      target.siblings().removeClass(settings.active_class).attr({'aria-hidden' : 'true',  tabindex : -1});
      target.addClass(settings.active_class).attr('aria-hidden', 'false').removeAttr('tabindex');
      settings.callback(tab);
      target.triggerHandler('toggled', [tab]);
      tabs.triggerHandler('toggled', [target]);

      tab_link.off('keydown').on('keydown', interpret_keyup_action );
    },

    data_attr : function (str) {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + str;
      }

      return str;
    },

    off : function () {},

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.abide = {
    name : 'abide',

    version : '5.5.1',

    settings : {
      live_validate : true,
      validate_on_blur : true,
      focus_on_invalid : true,
      error_labels : true, // labels with a for="inputId" will recieve an `error` class
      error_class : 'error',
      timeout : 1000,
      patterns : {
        alpha : /^[a-zA-Z]+$/,
        alpha_numeric : /^[a-zA-Z0-9]+$/,
        integer : /^[-+]?\d+$/,
        number : /^[-+]?\d*(?:[\.\,]\d+)?$/,

        // amex, visa, diners
        card : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
        cvv : /^([0-9]){3,4}$/,

        // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
        email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,

        url : /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
        // abc.de
        domain : /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,

        datetime : /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
        // YYYY-MM-DD
        date : /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
        // HH:MM:SS
        time : /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
        dateISO : /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
        // MM/DD/YYYY
        month_day_year : /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
        // DD/MM/YYYY
        day_month_year : /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,

        // #FFF or #FFFFFF
        color : /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
      },
      validators : {
        equalTo : function (el, required, parent) {
          var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,
              to    = el.value,
              valid = (from === to);

          return valid;
        }
      }
    },

    timer : null,

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function (scope) {
      var self = this,
          form = self.S(scope).attr('novalidate', 'novalidate'),
          settings = form.data(this.attr_name(true) + '-init') || {};

      this.invalid_attr = this.add_namespace('data-invalid');

      form
        .off('.abide')
        .on('submit.fndtn.abide validate.fndtn.abide', function (e) {
          var is_ajax = /ajax/i.test(self.S(this).attr(self.attr_name()));
          return self.validate(self.S(this).find('input, textarea, select').get(), e, is_ajax);
        })
        .on('reset', function () {
          return self.reset($(this));
        })
        .find('input, textarea, select')
          .off('.abide')
          .on('blur.fndtn.abide change.fndtn.abide', function (e) {
            if (settings.validate_on_blur === true) {
              self.validate([this], e);
            }
          })
          .on('keydown.fndtn.abide', function (e) {
            if (settings.live_validate === true && e.which != 9) {
              clearTimeout(self.timer);
              self.timer = setTimeout(function () {
                self.validate([this], e);
              }.bind(this), settings.timeout);
            }
          });
    },

    reset : function (form) {
      form.removeAttr(this.invalid_attr);
      $(this.invalid_attr, form).removeAttr(this.invalid_attr);
      $('.' + this.settings.error_class, form).not('small').removeClass(this.settings.error_class);
    },

    validate : function (els, e, is_ajax) {
      var validations = this.parse_patterns(els),
          validation_count = validations.length,
          form = this.S(els[0]).closest('form'),
          submit_event = /submit/.test(e.type);

      // Has to count up to make sure the focus gets applied to the top error
      for (var i = 0; i < validation_count; i++) {
        if (!validations[i] && (submit_event || is_ajax)) {
          if (this.settings.focus_on_invalid) {
            els[i].focus();
          }
          form.trigger('invalid').trigger('invalid.fndtn.abide');
          this.S(els[i]).closest('form').attr(this.invalid_attr, '');
          return false;
        }
      }

      if (submit_event || is_ajax) {
        form.trigger('valid').trigger('valid.fndtn.abide');
      }

      form.removeAttr(this.invalid_attr);

      if (is_ajax) {
        return false;
      }

      return true;
    },

    parse_patterns : function (els) {
      var i = els.length,
          el_patterns = [];

      while (i--) {
        el_patterns.push(this.pattern(els[i]));
      }

      return this.check_validation_and_apply_styles(el_patterns);
    },

    pattern : function (el) {
      var type = el.getAttribute('type'),
          required = typeof el.getAttribute('required') === 'string';

      var pattern = el.getAttribute('pattern') || '';

      if (this.settings.patterns.hasOwnProperty(pattern) && pattern.length > 0) {
        return [el, this.settings.patterns[pattern], required];
      } else if (pattern.length > 0) {
        return [el, new RegExp(pattern), required];
      }

      if (this.settings.patterns.hasOwnProperty(type)) {
        return [el, this.settings.patterns[type], required];
      }

      pattern = /.*/;

      return [el, pattern, required];
    },

    // TODO: Break this up into smaller methods, getting hard to read.
    check_validation_and_apply_styles : function (el_patterns) {
      var i = el_patterns.length,
          validations = [],
          form = this.S(el_patterns[0][0]).closest('[data-' + this.attr_name(true) + ']'),
          settings = form.data(this.attr_name(true) + '-init') || {};
      while (i--) {
        var el = el_patterns[i][0],
            required = el_patterns[i][2],
            value = el.value.trim(),
            direct_parent = this.S(el).parent(),
            validator = el.getAttribute(this.add_namespace('data-abide-validator')),
            is_radio = el.type === 'radio',
            is_checkbox = el.type === 'checkbox',
            label = this.S('label[for="' + el.getAttribute('id') + '"]'),
            valid_length = (required) ? (el.value.length > 0) : true,
            el_validations = [];

        var parent, valid;

        // support old way to do equalTo validations
        if (el.getAttribute(this.add_namespace('data-equalto'))) { validator = 'equalTo' }

        if (!direct_parent.is('label')) {
          parent = direct_parent;
        } else {
          parent = direct_parent.parent();
        }

        if (validator) {
          valid = this.settings.validators[validator].apply(this, [el, required, parent]);
          el_validations.push(valid);
        }

        if (is_radio && required) {
          el_validations.push(this.valid_radio(el, required));
        } else if (is_checkbox && required) {
          el_validations.push(this.valid_checkbox(el, required));
        } else {

          if (el_patterns[i][1].test(value) && valid_length ||
            !required && el.value.length < 1 || $(el).attr('disabled')) {
            el_validations.push(true);
          } else {
            el_validations.push(false);
          }

          el_validations = [el_validations.every(function (valid) {return valid;})];

          if (el_validations[0]) {
            this.S(el).removeAttr(this.invalid_attr);
            el.setAttribute('aria-invalid', 'false');
            el.removeAttribute('aria-describedby');
            parent.removeClass(this.settings.error_class);
            if (label.length > 0 && this.settings.error_labels) {
              label.removeClass(this.settings.error_class).removeAttr('role');
            }
            $(el).triggerHandler('valid');
          } else {
            this.S(el).attr(this.invalid_attr, '');
            el.setAttribute('aria-invalid', 'true');

            // Try to find the error associated with the input
            var errorElem = parent.find('small.' + this.settings.error_class, 'span.' + this.settings.error_class);
            var errorID = errorElem.length > 0 ? errorElem[0].id : '';
            if (errorID.length > 0) {
              el.setAttribute('aria-describedby', errorID);
            }

            // el.setAttribute('aria-describedby', $(el).find('.error')[0].id);
            parent.addClass(this.settings.error_class);
            if (label.length > 0 && this.settings.error_labels) {
              label.addClass(this.settings.error_class).attr('role', 'alert');
            }
            $(el).triggerHandler('invalid');
          }
        }
        validations.push(el_validations[0]);
      }
      validations = [validations.every(function (valid) {return valid;})];
      return validations;
    },

    valid_checkbox : function (el, required) {
      var el = this.S(el),
          valid = (el.is(':checked') || !required || el.get(0).getAttribute('disabled'));

      if (valid) {
        el.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);
      } else {
        el.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);
      }

      return valid;
    },

    valid_radio : function (el, required) {
      var name = el.getAttribute('name'),
          group = this.S(el).closest('[data-' + this.attr_name(true) + ']').find("[name='" + name + "']"),
          count = group.length,
          valid = false,
          disabled = false;

      // Has to count up to make sure the focus gets applied to the top error
        for (var i=0; i < count; i++) {
            if( group[i].getAttribute('disabled') ){
                disabled=true;
                valid=true;
            } else {
                if (group[i].checked){
                    valid = true;
                } else {
                    if( disabled ){
                        valid = false;
                    }
                }
            }
        }

      // Has to count up to make sure the focus gets applied to the top error
      for (var i = 0; i < count; i++) {
        if (valid) {
          this.S(group[i]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);
        } else {
          this.S(group[i]).attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);
        }
      }

      return valid;
    },

    valid_equal : function (el, required, parent) {
      var from  = document.getElementById(el.getAttribute(this.add_namespace('data-equalto'))).value,
          to    = el.value,
          valid = (from === to);

      if (valid) {
        this.S(el).removeAttr(this.invalid_attr);
        parent.removeClass(this.settings.error_class);
        if (label.length > 0 && settings.error_labels) {
          label.removeClass(this.settings.error_class);
        }
      } else {
        this.S(el).attr(this.invalid_attr, '');
        parent.addClass(this.settings.error_class);
        if (label.length > 0 && settings.error_labels) {
          label.addClass(this.settings.error_class);
        }
      }

      return valid;
    },

    valid_oneof : function (el, required, parent, doNotValidateOthers) {
      var el = this.S(el),
        others = this.S('[' + this.add_namespace('data-oneof') + ']'),
        valid = others.filter(':checked').length > 0;

      if (valid) {
        el.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class);
      } else {
        el.attr(this.invalid_attr, '').parent().addClass(this.settings.error_class);
      }

      if (!doNotValidateOthers) {
        var _this = this;
        others.each(function () {
          _this.valid_oneof.call(_this, this, null, null, true);
        });
      }

      return valid;
    }
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.tooltip = {
    name : 'tooltip',

    version : '5.5.1',

    settings : {
      additional_inheritable_classes : [],
      tooltip_class : '.tooltip',
      append_to : 'body',
      touch_close_text : 'Tap To Close',
      disable_for_touch : false,
      hover_delay : 200,
      show_on : 'all',
      tip_template : function (selector, content) {
        return '<span data-selector="' + selector + '" id="' + selector + '" class="'
          + Foundation.libs.tooltip.settings.tooltip_class.substring(1)
          + '" role="tooltip">' + content + '<span class="nub"></span></span>';
      }
    },

    cache : {},

    init : function (scope, method, options) {
      Foundation.inherit(this, 'random_str');
      this.bindings(method, options);
    },

    should_show : function (target, tip) {
      var settings = $.extend({}, this.settings, this.data_options(target));

      if (settings.show_on === 'all') {
        return true;
      } else if (this.small() && settings.show_on === 'small') {
        return true;
      } else if (this.medium() && settings.show_on === 'medium') {
        return true;
      } else if (this.large() && settings.show_on === 'large') {
        return true;
      }
      return false;
    },

    medium : function () {
      return matchMedia(Foundation.media_queries['medium']).matches;
    },

    large : function () {
      return matchMedia(Foundation.media_queries['large']).matches;
    },

    events : function (instance) {
      var self = this,
          S = self.S;

      self.create(this.S(instance));

      $(this.scope)
        .off('.tooltip')
        .on('mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip',
          '[' + this.attr_name() + ']', function (e) {
          var $this = S(this),
              settings = $.extend({}, self.settings, self.data_options($this)),
              is_touch = false;

          if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && S(e.target).is('a')) {
            return false;
          }

          if (/mouse/i.test(e.type) && self.ie_touch(e)) {
            return false;
          }

          if ($this.hasClass('open')) {
            if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {
              e.preventDefault();
            }
            self.hide($this);
          } else {
            if (settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {
              return;
            } else if (!settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {
              e.preventDefault();
              S(settings.tooltip_class + '.open').hide();
              is_touch = true;
            }

            if (/enter|over/i.test(e.type)) {
              this.timer = setTimeout(function () {
                var tip = self.showTip($this);
              }.bind(this), self.settings.hover_delay);
            } else if (e.type === 'mouseout' || e.type === 'mouseleave') {
              clearTimeout(this.timer);
              self.hide($this);
            } else {
              self.showTip($this);
            }
          }
        })
        .on('mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', '[' + this.attr_name() + '].open', function (e) {
          if (/mouse/i.test(e.type) && self.ie_touch(e)) {
            return false;
          }

          if ($(this).data('tooltip-open-event-type') == 'touch' && e.type == 'mouseleave') {
            return;
          } else if ($(this).data('tooltip-open-event-type') == 'mouse' && /MSPointerDown|touchstart/i.test(e.type)) {
            self.convert_to_touch($(this));
          } else {
            self.hide($(this));
          }
        })
        .on('DOMNodeRemoved DOMAttrModified', '[' + this.attr_name() + ']:not(a)', function (e) {
          self.hide(S(this));
        });
    },

    ie_touch : function (e) {
      // How do I distinguish between IE11 and Windows Phone 8?????
      return false;
    },

    showTip : function ($target) {
      var $tip = this.getTip($target);
      if (this.should_show($target, $tip)) {
        return this.show($target);
      }
      return;
    },

    getTip : function ($target) {
      var selector = this.selector($target),
          settings = $.extend({}, this.settings, this.data_options($target)),
          tip = null;

      if (selector) {
        tip = this.S('span[data-selector="' + selector + '"]' + settings.tooltip_class);
      }

      return (typeof tip === 'object') ? tip : false;
    },

    selector : function ($target) {
      var id = $target.attr('id'),
          dataSelector = $target.attr(this.attr_name()) || $target.attr('data-selector');

      if ((id && id.length < 1 || !id) && typeof dataSelector != 'string') {
        dataSelector = this.random_str(6);
        $target
          .attr('data-selector', dataSelector)
          .attr('aria-describedby', dataSelector);
      }

      return (id && id.length > 0) ? id : dataSelector;
    },

    create : function ($target) {
      var self = this,
          settings = $.extend({}, this.settings, this.data_options($target)),
          tip_template = this.settings.tip_template;

      if (typeof settings.tip_template === 'string' && window.hasOwnProperty(settings.tip_template)) {
        tip_template = window[settings.tip_template];
      }

      var $tip = $(tip_template(this.selector($target), $('<div></div>').html($target.attr('title')).html())),
          classes = this.inheritable_classes($target);

      $tip.addClass(classes).appendTo(settings.append_to);

      if (Modernizr.touch) {
        $tip.append('<span class="tap-to-close">' + settings.touch_close_text + '</span>');
        $tip.on('touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', function (e) {
          self.hide($target);
        });
      }

      $target.removeAttr('title').attr('title', '');
    },

    reposition : function (target, tip, classes) {
      var width, nub, nubHeight, nubWidth, column, objPos;

      tip.css('visibility', 'hidden').show();

      width = target.data('width');
      nub = tip.children('.nub');
      nubHeight = nub.outerHeight();
      nubWidth = nub.outerHeight();

      if (this.small()) {
        tip.css({'width' : '100%'});
      } else {
        tip.css({'width' : (width) ? width : 'auto'});
      }

      objPos = function (obj, top, right, bottom, left, width) {
        return obj.css({
          'top' : (top) ? top : 'auto',
          'bottom' : (bottom) ? bottom : 'auto',
          'left' : (left) ? left : 'auto',
          'right' : (right) ? right : 'auto'
        }).end();
      };

      objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', target.offset().left);

      if (this.small()) {
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', 12.5, $(this.scope).width());
        tip.addClass('tip-override');
        objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);
      } else {
        var left = target.offset().left;
        if (Foundation.rtl) {
          nub.addClass('rtl');
          left = target.offset().left + target.outerWidth() - tip.outerWidth();
        }
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', left);
        tip.removeClass('tip-override');
        if (classes && classes.indexOf('tip-top') > -1) {
          if (Foundation.rtl) {
            nub.addClass('rtl');
          }
          objPos(tip, (target.offset().top - tip.outerHeight()), 'auto', 'auto', left)
            .removeClass('tip-override');
        } else if (classes && classes.indexOf('tip-left') > -1) {
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left - tip.outerWidth() - nubHeight))
            .removeClass('tip-override');
          nub.removeClass('rtl');
        } else if (classes && classes.indexOf('tip-right') > -1) {
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left + target.outerWidth() + nubHeight))
            .removeClass('tip-override');
          nub.removeClass('rtl');
        }
      }

      tip.css('visibility', 'visible').hide();
    },

    small : function () {
      return matchMedia(Foundation.media_queries.small).matches &&
        !matchMedia(Foundation.media_queries.medium).matches;
    },

    inheritable_classes : function ($target) {
      var settings = $.extend({}, this.settings, this.data_options($target)),
          inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'radius', 'round'].concat(settings.additional_inheritable_classes),
          classes = $target.attr('class'),
          filtered = classes ? $.map(classes.split(' '), function (el, i) {
            if ($.inArray(el, inheritables) !== -1) {
              return el;
            }
          }).join(' ') : '';

      return $.trim(filtered);
    },

    convert_to_touch : function ($target) {
      var self = this,
          $tip = self.getTip($target),
          settings = $.extend({}, self.settings, self.data_options($target));

      if ($tip.find('.tap-to-close').length === 0) {
        $tip.append('<span class="tap-to-close">' + settings.touch_close_text + '</span>');
        $tip.on('click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose', function (e) {
          self.hide($target);
        });
      }

      $target.data('tooltip-open-event-type', 'touch');
    },

    show : function ($target) {
      var $tip = this.getTip($target);

      if ($target.data('tooltip-open-event-type') == 'touch') {
        this.convert_to_touch($target);
      }

      this.reposition($target, $tip, $target.attr('class'));
      $target.addClass('open');
      $tip.fadeIn(150);
    },

    hide : function ($target) {
      var $tip = this.getTip($target);

      $tip.fadeOut(150, function () {
        $tip.find('.tap-to-close').remove();
        $tip.off('click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose');
        $target.removeClass('open');
      });
    },

    off : function () {
      var self = this;
      this.S(this.scope).off('.fndtn.tooltip');
      this.S(this.settings.tooltip_class).each(function (i) {
        $('[' + self.attr_name() + ']').eq(i).attr('title', $(this).text());
      }).remove();
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
// SwiftClick
function SwiftClick (contextEl)
{
    // if SwiftClick has already been initialised on this element then return the instance that's already in the Dictionary.
    if (typeof SwiftClick.swiftDictionary[contextEl] !== "undefined") return SwiftClick.swiftDictionary[contextEl];

    // add this instance of SwiftClick to the dictionary using the contextEl as the key.
    SwiftClick.swiftDictionary[contextEl] = this;

    this.options =
    {
        elements: {a:"a", div:"div", span:"span", button:"button"},
        maxTouchDrift: 30
    };

    var _self                           = this,
        _swiftContextEl                 = contextEl,
        _swiftContextElOriginalClick    = _swiftContextEl.onclick,
        _currentlyTrackingTouch         = false,
        _touchStartPoint                = {x:0, y:0},
        _scrollStartPoint               = {x:0, y:0},
        _shouldSynthesizeClickEvent     = true,
        _clickedAlready                 = false;


    // SwiftClick is only initialised if both touch and orientationchange are supported.
    if ("onorientationchange" in window && "ontouchstart" in window)
    {
        init();
    }

    function init ()
    {
        // check if the swift el already has a click handler and if so hijack it so it get's fired after SwiftClick's, instead of beforehand.
        if (typeof _swiftContextElOriginalClick === "function")
        {
            _swiftContextEl.addEventListener("click", hijackedSwiftElClickHandler, false);
            _swiftContextEl.onclick = null;
        }

        _swiftContextEl.addEventListener("touchstart", touchStartHandler, false);
        _swiftContextEl.addEventListener("click", clickHandler, true);
    }

    function hijackedSwiftElClickHandler (event)
    {
        _swiftContextElOriginalClick(event);
    }

    function touchStartHandler (event)
    {
        var targetEl = event.target,
            nodeName = targetEl.nodeName.toLowerCase(),
            touch = event.changedTouches[0];

        // store touchstart positions so we can check for changes later (within touchend handler).
        _touchStartPoint.x = touch.pageX;
        _touchStartPoint.y = touch.pageY;
        _scrollStartPoint = getScrollPoint();

        // don't synthesize an event if the node is not an acceptable type (the type isn't in the dictionary).
        if (typeof _self.options.elements[nodeName] === "undefined")
        {
            return true;
        }

        // don't synthesize an event if we are already tracking an element.
        if (_currentlyTrackingTouch)
        {
            _shouldSynthesizeClickEvent = false;
            return true;
        }

        event.stopPropagation();

        _currentlyTrackingTouch = true;

        // only add the 'touchend' listener now that we know the element should be tracked.
        targetEl.removeEventListener("touchend", touchEndHandler, false);
        targetEl.addEventListener("touchend", touchEndHandler, false);
    }

    function touchEndHandler (event)
    {
        var targetEl = event.target,
            touchend,
            allowFurtherEventsWhenCancellingSyntheticClick = true;

        targetEl.removeEventListener("touchend", touchEndHandler, false);

        touchend = event.changedTouches[0];

        // cancel the touch if the node type is unacceptable (not in the dictionary), or if the touchpoint position has drifted significantly.
        if (!_shouldSynthesizeClickEvent ||
            Math.abs(touchend.pageX - _touchStartPoint.x) > _self.options.maxTouchDrift ||
            Math.abs(touchend.pageY - _touchStartPoint.y) > _self.options.maxTouchDrift ||
            Math.abs(getScrollPoint().x - _scrollStartPoint.x) > _self.options.maxTouchDrift ||
            Math.abs(getScrollPoint().y - _scrollStartPoint.y) > _self.options.maxTouchDrift)
        {

            // stop further events if we are already tracking.
            if (_currentlyTrackingTouch)
            {
                event.stopPropagation();
                event.preventDefault();
                allowFurtherEventsWhenCancellingSyntheticClick = false;
            }

            // reset vars to default state before returning early, effectively cancelling the creation of a synthetic click event.
            _currentlyTrackingTouch = false;
            _shouldSynthesizeClickEvent = true;
            return allowFurtherEventsWhenCancellingSyntheticClick;
        }

        // prevent default actions and create the synthetic click event before returning false.
        event.stopPropagation();
        event.preventDefault();

        _clickedAlready = false;

        targetEl.focus();
        synthesizeClickEvent(targetEl, touchend);

        // reset vars to default state before returning early, effectively cancelling the creation of a synthetic click event.
        _currentlyTrackingTouch = false;
        _shouldSynthesizeClickEvent = true;

        return false;
    }

    function clickHandler (event)
    {
        var targetEl = event.target,
            nodeName = targetEl.nodeName.toLowerCase();

        if (typeof _self.options.elements[nodeName] !== "undefined")
        {
            if (_clickedAlready)
            {
                _clickedAlready = false;

                event.stopPropagation();
                event.preventDefault();
                return false;
            }

            _clickedAlready = true;
        }
    }

    function synthesizeClickEvent (el, touchend)
    {
        // synthesize a click event.
        var clickEvent = document.createEvent("MouseEvents");
        clickEvent.initMouseEvent("click", true, true, window, 1, touchend.screenX, touchend.screenY, touchend.clientX, touchend.clientY, false, false, false, false, 0, null);

        el.dispatchEvent(clickEvent);
    }

    function getScrollPoint ()
    {
        var scrollPoint = {

            x : window.pageXOffset ||
                document.body.scrollLeft ||
                document.documentElement.scrollLeft ||
                0,
            y : window.pageYOffset ||
                document.body.scrollTop ||
                document.documentElement.scrollTop ||
                0
        };

        return scrollPoint;
    }

    // add an array of node names (strings) for which swift clicks should be synthesized.
    _self.addNodeNamesToTrack = function (nodeNamesArray)
    {
        var i = 0,
            length = nodeNamesArray.length,
            currentNodeName;

        for (i; i < length; i++)
        {
            if (typeof nodeNamesArray[i] !== "string") throw new TypeError ("all values within the 'nodeNames' array must be of type 'string'");

            currentNodeName = nodeNamesArray[i].toLowerCase();
            _self.options.elements[currentNodeName] = currentNodeName;
        }
    };

    _self.replaceNodeNamesToTrack = function (nodeNamesArray)
    {
        _self.options.elements = {};
        _self.addNodeNamesToTrack(nodeNamesArray);
    };
}

SwiftClick.swiftDictionary = {};

// use a basic implementation of the composition pattern in order to create new instances of SwiftClick.
SwiftClick.attach = function (contextEl)
{
    "use strict";

    // if SwiftClick has already been initialised on this element then return the instance that's already in the Dictionary.
    if (typeof SwiftClick.swiftDictionary[contextEl] !== "undefined") return SwiftClick.swiftDictionary[contextEl];

    return new SwiftClick(contextEl);
};


// check for AMD/Module support, otherwise define SwiftClick as a global variable.
if (typeof define !== "undefined" && define.amd)
{
    // AMD. Register as an anonymous module.
    define (function()
    {
        "use strict";
        return SwiftClick;
    });

}
else if (typeof module !== "undefined" && module.exports)
{
    module.exports = SwiftClick;
}
else
{
    window.SwiftClick = SwiftClick;
}
// Underscore v1.5.1
!function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.1";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(j.has(n,a)&&t.call(e,n[a],a,n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=F(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(null==t?j.identity:t);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};j.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)})},j.countBy=function(n,t,r){return k(n,t,r,function(n,t){j.has(n,t)||(n[t]=0),n[t]++})},j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var R=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return R(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var M=function(){};j.bind=function(n,t){var r,e;if(w&&n.bind===w)return w.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));M.prototype=n.prototype;var u=new M;M.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u=null;return function(){var i=this,a=arguments,o=function(){u=null,r||(e=n.apply(i,a))},c=r&&!u;return clearTimeout(u),u=setTimeout(o,t),c&&(e=n.apply(i,a)),e}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push(n[r]);return t},j.pairs=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push([r,n[r]]);return t},j.invert=function(n){var t={};for(var r in n)j.has(n,r)&&(t[n[r]]=r);return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n"," ":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this);
// Backbone v1.1.2
(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeners;if(!r)return this;var s=!e&&!i;if(typeof e==="object")i=this;if(t)(r={})[t._listenerId]=t;for(var n in r){r[n].off(e,i,this);if(s)delete this._listeners[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={});var n=e._listenerId||(e._listenerId=h.uniqueId("l"));s[n]=e;if(typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i;var r=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};h.extend(this,h.pick(e,p));if(e.parse)r=this.parse(r,e)||{};if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};var p=["url","urlRoot","collection"];h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};R(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false;i=h.extend({validate:true},i);if(!this._validate(r,i))return false;if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};R(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}R(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}));return false}});var v=["keys","values","pairs","invert","pick","omit"];h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var g=a.Collection=function(t,e){e||(e={});if(e.url)this.url=e.url;if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,merge:false,remove:false};h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t];e||(e={});var i,r,s,n;for(i=0,r=t.length;i<r;i++){n=this.get(t[i]);if(!n)continue;delete this._byId[n.id];delete this._byId[n.cid];s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m);if(e.parse)t=this.parse(t,e);if(!h.isArray(t))t=t?[t]:[];var i,s,a,o,u,l;var c=e.at;var f=this.comparator&&c==null&&e.sort!==false;var d=h.isString(this.comparator)?this.comparator:null;var p=[],v=[],g={};for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue;if(u=this.get(a)){if(e.remove)g[u.cid]=true;if(e.merge){u.set(a.attributes,e);if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true;this.length+=p.length;if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true});if(e.silent)return this;for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e);return this},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return this},push:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:this.length},e));return t},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:0},e));return t},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0;return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},sortedIndex:function(t,e,i){e||(e=this.comparator);var r=h.isFunction(e)?e:function(t){return t.get(e)};return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};R(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(s){if(e.wait)i.add(t,e);if(r)r(t,s,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e||(e={});e.collection=this;var i=new this.model(t,e);if(!i._validate(t,e)){this.trigger("invalid",this,t,e);return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var w=["groupBy","countBy","sortBy"];h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var b=a.View=function(t){this.cid=h.uniqueId("view");this._configure(t||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(x);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t);h.extend(this,h.pick(t,E));this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=k[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var S=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var $=/\((.*?)\)/g;var T=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var P=/^\/+|\/+$/g;var O=/msie [\w.]+/;var C=/\/$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({},{root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(P,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}});return i},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:e};t=this.getFragment(t||"");if(this.fragment===t)return;this.fragment=t;var i=this.root+t;if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var j=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=g.extend=S.extend=b.extend=I.extend=j;var U=function(){throw new Error('A "url" property or function must be specified')};var R=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
// Symbolset
if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android [1-2]\.)/.test(navigator.userAgent)) {
  var ss_set={'notifications disabled':'\uD83D\uDD15','notificationsdisabled':'\uD83D\uDD15','notification disabled':'\uD83D\uDD15','notificationdisabled':'\uD83D\uDD15','telephone disabled':'\uE300','telephonedisabled':'\uE300','writing disabled':'\uE071','calendar remove':'\uF071','pencil disabled':'\uE071','writingdisabled':'\uE071','delete calendar':'\uF073','calendar delete':'\uF073','remove calendar':'\uF071','check calendar':'\uF072','pencildisabled':'\uE071','deletecalendar':'\uF073','navigate right':'\u25BB','calendardelete':'\uF073','cloud download':'\uEB00','phone disabled':'\uE300','calendar check':'\uF072','removecalendar':'\uF071','medium battery':'\uEA11','calendarremove':'\uF071','battery medium':'\uEA11','female avatar':'\uD83D\uDC67','notifications':'\uD83D\uDD14','navigate left':'\u25C5','clouddownload':'\uEB00','navigate down':'\uF501','bell disabled':'\uD83D\uDD15','shopping cart':'\uE500','phonedisabled':'\uE300','calendarcheck':'\uF072','call disabled':'\uE300','empty battery':'\uEA13','navigateright':'\u25BB','mediumbattery':'\uEA11','battery empty':'\uEA13','batterymedium':'\uEA11','checkcalendar':'\uF072','direct right':'\u25B9','high battery':'\uEA10','calldisabled':'\uE300','notification':'\uD83D\uDD14','rotate right':'\u21BB','navigatedown':'\uF501','navigateleft':'\u25C5','femaleavatar':'\uD83D\uDC67','batteryempty':'\uEA13','emptybattery':'\uEA13','battery high':'\uEA10','shoppingcart':'\uE500','fast forward':'\u23E9','cloud upload':'\uEB40','full battery':'\uD83D\uDD0B','belldisabled':'\uD83D\uDD15','skip forward':'\u23ED','battery full':'\uD83D\uDD0B','add calendar':'\uF070','calendar add':'\uF070','mobile phone':'\uD83D\uDCF1','remove date':'\uF071','directright':'\u25B9','direct left':'\u25C3','information':'\u2139','cloudupload':'\uEB40','male avatar':'\uD83D\uDC64','batteryhigh':'\uEA10','skipforward':'\u23ED','female user':'\uD83D\uDC67','low battery':'\uEA12','navigate up':'\uF500','videocamera':'\uD83D\uDCF9','photographs':'\uD83C\uDF04','rotateright':'\u21BB','thumbs down':'\uD83D\uDC4E','high volume':'\uD83D\uDD0A','credit card':'\uD83D\uDCB3','volume high':'\uD83D\uDD0A','highbattery':'\uEA10','dollar sign':'\uD83D\uDCB2','fullbattery':'\uD83D\uDD0B','delete date':'\uF073','rotate left':'\u21BA','battery low':'\uEA12','addcalendar':'\uF070','fastforward':'\u23E9','calendaradd':'\uF070','batteryfull':'\uD83D\uDD0B','mobilephone':'\uD83D\uDCF1','direct down':'\u25BE','highvolume':'\uD83D\uDD0A','navigation':'\uE670','smartphone':'\uD83D\uDCF1','screenshot':'\u2316','dollarsign':'\uD83D\uDCB2','creditcard':'\uD83D\uDCB3','hard drive':'\uE7B0','femaleuser':'\uD83D\uDC67','maleavatar':'\uD83D\uDC64','removedate':'\uF071','check date':'\uF072','microphone':'\uD83C\uDFA4','eyedropper':'\uE200','deletedate':'\uF073','volume low':'\uD83D\uDD09','low volume':'\uD83D\uDD09','volumehigh':'\uD83D\uDD0A','half heart':'\uE1A0','directions':'\uE672','navigateup':'\uF500','cell phone':'\uD83D\uDCF1','thumbsdown':'\uD83D\uDC4E','photograph':'\uD83C\uDF04','disapprove':'\uD83D\uDC4E','batterylow':'\uEA12','lowbattery':'\uEA12','down right':'\u2B0A','thumbnails':'\uE9A3','attachment':'\uD83D\uDCCE','visibility':'\uD83D\uDC40','connection':'\uEB85','descending':'\u25BE','directdown':'\u25BE','rotateleft':'\u21BA','directleft':'\u25C3','pull quote':'\u201C','down left':'\u2B0B','backspace':'\u232B','paperclip':'\uD83D\uDCCE','direct up':'\u25B4','dashboard':'\uF000','male user':'\uD83D\uDC64','cellphone':'\uD83D\uDCF1','checkmark':'\u2713','checkdate':'\uF072','harddrive':'\uE7B0','halfheart':'\uE1A0','pie chart':'\uE570','downright':'\u2B0A','musicnote':'\u266B','telephone':'\uD83D\uDCDE','briefcase':'\uD83D\uDCBC','bar chart':'\uD83D\uDCCA','ascending':'\u25B4','skip back':'\u23EE','crosshair':'\u2316','thumbs up':'\uD83D\uDC4D','volumelow':'\uD83D\uDD09','open book':'\uD83D\uDCD6','pullquote':'\u201C','half star':'\uE1A1','lowvolume':'\uD83D\uDD09','stopwatch':'\u23F1','maleuser':'\uD83D\uDC64','typeface':'\uED01','redirect':'\u21AA','contract':'\uEE01','document':'\uD83D\uDCC4','skipback':'\u23EE','question':'\u2753','computer':'\uD83D\uDCBB','sign out':'\uEE02','subtract':'\u002D','settings':'\u2699','pictures':'\uD83C\uDF04','database':'\uE7A0','location':'\uE6D0','signpost':'\uE672','navigate':'\uE670','calendar':'\uD83D\uDCC5','piechart':'\uE570','barchart':'\uD83D\uDCCA','add date':'\uF070','openbook':'\uD83D\uDCD6','envelope':'\u2709','facetime':'\uE320','end call':'\uE300','halfstar':'\uE1A1','favorite':'\u22C6','thumbsup':'\uD83D\uDC4D','bookmark':'\uD83D\uDD16','keywords':'\uE100','trashcan':'\uE0D0','previous':'\u25C5','insecure':'\uD83D\uDD13','up right':'\u2B08','unlocked':'\uD83D\uDD13','downleft':'\u2B0B','directup':'\u25B4','zoom out':'\uE003','dropdown':'\u25BE','download':'\uEB01','notebook':'\uD83D\uDCD3','desktop':'\uD83D\uDCBB','endcall':'\uE300','display':'\uD83D\uDCBB','monitor':'\uD83D\uDCBB','loading':'\uEB83','syncing':'\uEB82','visible':'\uD83D\uDC40','approve':'\uD83D\uDC4D','zoom in':'\uE002','signout':'\uEE02','refresh':'\u21BB','private':'\uD83D\uDD12','log out':'\uEE02','caution':'\u26D4','warning':'\u26A0','battery':'\uD83D\uDD0B','package':'\uD83D\uDCE6','dislike':'\uD83D\uDC4E','dictate':'\uD83C\uDFA4','descend':'\u25BE','forward':'\u27A1','speaker':'\uD83D\uDD08','windows':'\uE202','avatars':'\uD83D\uDC65','zoomout':'\uE003','up left':'\u2B09','printer':'\u2399','compass':'\uE671','droplet':'\uD83D\uDCA7','keyword':'\uE100','comment':'\uD83D\uDCAC','shuffle':'\uD83D\uDD00','airplay':'\uE800','retweet':'\uF600','picture':'\uD83C\uDF04','upright':'\u2B08','compose':'\uD83D\uDCDD','adddate':'\uF070','columns':'\uE9A2','checked':'\u2713','mobile':'\uD83D\uDCF1','cursor':'\uE001','search':'\uD83D\uDD0E','zoomin':'\uE002','iphone':'\uD83D\uDCF1','attach':'\uD83D\uDCCE','pencil':'\u270E','ascend':'\u25B4','upleft':'\u2B09','tablet':'\uEA01','laptop':'\uEA00','eraser':'\u2710','locked':'\uD83D\uDD12','secure':'\uD83D\uDD12','unlock':'\uD83D\uDD13','public':'\uD83D\uDD13','target':'\u25CE','folder':'\uD83D\uDCC1','tagged':'\uE100','sample':'\uE200','layers':'\uE202','avatar':'\uD83D\uDC64','locate':'\uE670','replay':'\u21BA','upload':'\uEB41','repeat':'\uD83D\uDD01','volume':'\uD83D\uDD08','camera':'\uD83D\uDCF7','layout':'\uEDA0','action':'\uEE00','delete':'\u2421','images':'\uD83C\uDF04','photos':'\uD83C\uDF04','remove':'\u002D','expand':'\u2922','hyphen':'\u002D','videos':'\uD83D\uDCF9','rewind':'\u23EA','logout':'\uEE02','record':'\u25CF','alert':'\u26A0','clock':'\u23F2','pause':'\uE8A0','merge':'\uEB81','write':'\u270E','erase':'\u2710','nodes':'\uEB85','video':'\uD83D\uDCF9','right':'\u27A1','trash':'\uE0D0','quote':'\u201C','minus':'\u002D','eject':'\u23CF','visit':'\uEE00','check':'\u2713','photo':'\uD83C\uDF04','share':'\uEE00','heart':'\u2665','close':'\u2421','image':'\uD83C\uDF04','cloud':'\u2601','zelda':'\uE1A0','phone':'\uD83D\uDCDE','sound':'\uD83D\uDD08','reply':'\u21A9','email':'\u2709','inbox':'\uD83D\uDCE5','audio':'\u266B','music':'\u266B','users':'\uD83D\uDC65','price':'\uD83D\uDCB2','globe':'\uD83C\uDF0E','print':'\u2399','earth':'\uD83C\uDF0E','world':'\uD83C\uDF0E','timer':'\u23F1','skip':'\u23ED','font':'\uED01','time':'\u23F2','fork':'\uEB80','home':'\u2302','zoom':'\uE002','exit':'\uEE02','cost':'\uD83D\uDCB2','cart':'\uE500','view':'\uD83D\uDC40','text':'\uED00','user':'\uD83D\uDC64','talk':'\uD83D\uDCAC','chat':'\uD83D\uDCAC','look':'\uD83D\uDC40','bell':'\uD83D\uDD14','stop':'\u25A0','send':'\uE350','redo':'\u21BB','link':'\uD83D\uDD17','call':'\uD83D\uDCDE','list':'\uED50','undo':'\u21BA','crop':'\uE201','book':'\uD83D\uDCD5','star':'\u22C6','gear':'\u2699','work':'\uD83D\uDCBC','move':'\uE070','drop':'\uD83D\uDCA7','love':'\u2665','edit':'\u270E','like':'\uD83D\uDC4D','flag':'\u2691','date':'\uD83D\uDCC5','next':'\u25BB','tags':'\uE100','info':'\u2139','page':'\uD83D\uDCC4','cell':'\uD83D\uDCF1','ipad':'\uEA01','play':'\u25B6','sync':'\uEB82','grid':'\uE9A0','plus':'\u002B','file':'\uD83D\uDCC4','help':'\u2753','rows':'\uE9A1','down':'\u2B07','lock':'\uD83D\uDD12','wifi':'\uEB84','left':'\u2B05','back':'\u2B05','mail':'\u2709','key':'\uD83D\uDD11','ban':'\uD83D\uDEAB','add':'\u002B','tag':'\uE100','out':'\uEE00','cog':'\u2699','rss':'\uE310','map':'\uE673','mic':'\uD83C\uDFA4','eye':'\uD83D\uDC40','hdd':'\uE7B0','pin':'\uD83D\uDCCD','box':'\uD83D\uDCE6','fax':'\uD83D\uDCE0','up':'\u2B06'};

  if (typeof ss_icons !== 'object' || typeof ss_icons !== 'object') {
    var ss_icons = ss_set;
    var ss_keywords = [];
    for (var i in ss_set) { ss_keywords.push(i); };
  } else {
    for (var i in ss_set) { ss_icons[i] = ss_set[i]; ss_keywords.push(i); }
  };

  if (typeof ss_legacy !== 'function') {

    /* domready.js */
    !function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("ss_ready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})

    var ss_legacy = function(node) {

      if (!node instanceof Object) return false;

      if (node.length) {
        for (var i=0; i<node.length; i++) {
          ss_legacy(node[i]);
        }
        return;
      };

      if (node.value) {
        node.value = ss_liga(node.value);
      } else if (node.nodeValue) {
        node.nodeValue = ss_liga(node.nodeValue);
      } else if (node.innerHTML) {
        node.innerHTML = ss_liga(node.innerHTML);
      }

    };

    var ss_getElementsByClassName = function(node, classname) {
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    };

    var ss_liga = function(that) {
      var re = new RegExp(ss_keywords.join('|').replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"),"gi");
      return that.replace(re, function(v) {
        return ss_icons[v.toLowerCase()];
      });
    };

    ss_ready(function() {
      if (document.getElementsByClassName) {
        ss_legacy(document.getElementsByClassName('ss-icon'));
      } else {
        ss_legacy(ss_getElementsByClassName(document.body, 'ss-icon'));
      }
    });

  }

};
// Jenks breaks v1.0.0
function jenks(data, n_classes) {

    // Compute the matrices required for Jenks breaks. These matrices
    // can be used for any classing of data with `classes <= n_classes`
    function getMatrices(data, n_classes) {

        // in the original implementation, these matrices are referred to
        // as `LC` and `OP`
        //
        // * lower_class_limits (LC): optimal lower class limits
        // * variance_combinations (OP): optimal variance combinations for all classes
        var lower_class_limits = [],
            variance_combinations = [],
            // loop counters
            i, j,
            // the variance, as computed at each step in the calculation
            variance = 0;

        // Initialize and fill each matrix with zeroes
        for (i = 0; i < data.length + 1; i++) {
            var tmp1 = [], tmp2 = [];
            for (j = 0; j < n_classes + 1; j++) {
                tmp1.push(0);
                tmp2.push(0);
            }
            lower_class_limits.push(tmp1);
            variance_combinations.push(tmp2);
        }

        for (i = 1; i < n_classes + 1; i++) {
            lower_class_limits[1][i] = 1;
            variance_combinations[1][i] = 0;
            // in the original implementation, 9999999 is used but
            // since Javascript has `Infinity`, we use that.
            for (j = 2; j < data.length + 1; j++) {
                variance_combinations[j][i] = Infinity;
            }
        }

        for (var l = 2; l < data.length + 1; l++) {

            // `SZ` originally. this is the sum of the values seen thus
            // far when calculating variance.
            var sum = 0,
                // `ZSQ` originally. the sum of squares of values seen
                // thus far
                sum_squares = 0,
                // `WT` originally. This is the number of
                w = 0,
                // `IV` originally
                i4 = 0;

            // in several instances, you could say `Math.pow(x, 2)`
            // instead of `x * x`, but this is slower in some browsers
            // introduces an unnecessary concept.
            for (var m = 1; m < l + 1; m++) {

                // `III` originally
                var lower_class_limit = l - m + 1,
                    val = data[lower_class_limit - 1];

                // here we're estimating variance for each potential classing
                // of the data, for each potential number of classes. `w`
                // is the number of data points considered so far.
                w++;

                // increase the current sum and sum-of-squares
                sum += val;
                sum_squares += val * val;

                // the variance at this point in the sequence is the difference
                // between the sum of squares and the total x 2, over the number
                // of samples.
                variance = sum_squares - (sum * sum) / w;

                i4 = lower_class_limit - 1;

                if (i4 !== 0) {
                    for (j = 2; j < n_classes + 1; j++) {
                        // if adding this element to an existing class
                        // will increase its variance beyond the limit, break
                        // the class at this point, setting the lower_class_limit
                        // at this point.
                        if (variance_combinations[l][j] >=
                            (variance + variance_combinations[i4][j - 1])) {
                            lower_class_limits[l][j] = lower_class_limit;
                            variance_combinations[l][j] = variance +
                                variance_combinations[i4][j - 1];
                        }
                    }
                }
            }

            lower_class_limits[l][1] = 1;
            variance_combinations[l][1] = variance;
        }

        // return the two matrices. for just providing breaks, only
        // `lower_class_limits` is needed, but variances can be useful to
        // evaluage goodness of fit.
        return {
            lower_class_limits: lower_class_limits,
            variance_combinations: variance_combinations
        };
    }



    // the second part of the jenks recipe: take the calculated matrices
    // and derive an array of n breaks.
    function breaks(data, lower_class_limits, n_classes) {

        var k = data.length - 1,
            kclass = [],
            countNum = n_classes;

        // the calculation of classes will never include the upper and
        // lower bounds, so we need to explicitly set them
        kclass[n_classes] = data[data.length - 1];
        kclass[0] = data[0];

        // the lower_class_limits matrix is used as indexes into itself
        // here: the `k` variable is reused in each iteration.
        while (countNum > 1) {
            kclass[countNum - 1] = data[lower_class_limits[k][countNum] - 2];
            k = lower_class_limits[k][countNum] - 1;
            countNum--;
        }

        return kclass;
    }

    if (n_classes > data.length) return null;

    // sort data in numerical order, since this is expected
    // by the matrices function
    data = data.slice().sort(function (a, b) { return a - b; });

    // get our basic matrices
    var matrices = getMatrices(data, n_classes),
        // we only need lower class limits here
        lower_class_limits = matrices.lower_class_limits;

    // extract n_classes out of the computed matrices
    return breaks(data, lower_class_limits, n_classes);

}
// Helper functions
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); };
}

function getCookie(key) {
    if (!key) {
        return null;
    }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

function isInteger(x) {
    return (typeof x === 'number') && (x % 1 === 0);
}

function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}

function formatCurrency(n, decimalPlaces) {
    return "$" + numberWithCommas(n.toFixed(decimalPlaces));
}

var monthNames = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function timestampToAPStyleDate(timestamp) {
    var dateObj = new Date(timestamp);

    var correctedHours = dateObj.getHours();
    var correctedMinutes = dateObj.getMinutes();
    var postOrAnte = "a.m.";

    if (correctedHours >= 12) {
        correctedHours = correctedHours - 12;
        postOrAnte = "p.m.";
    }

    if (correctedHours === 0) {
        correctedHours = 12;
    }
    if (correctedMinutes < 10) {
        correctedMinutes = "0" + correctedMinutes;
    }

    var formattedWeekday = weekdays[dateObj.getDay()];
    var formattedDate = monthNames[dateObj.getMonth()] + " " + dateObj.getDate() + ", " + dateObj.getFullYear();
    var formattedTime = correctedHours + ":" + correctedMinutes + " " + postOrAnte;

    return [formattedWeekday, formattedDate, formattedTime];
}
// WalkerTracker templates v3.0.0
templates = {
    "general": {
        backButtonContents: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<a class="back-button" href="#"><span>&lsaquo;</span></a>';}return __p;},
        homepage: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="homepage-contents"><div class="homepage-inner"><div class="top-article homepage-box"><a href="http://www.jsonline.com/news/statepolitics/scott-walkers-teen-years-in-delavan-put-him-on-the-road-to-politics-b99464746z1-297155471.html"><img src="http://media.jrn.com/images/b99466421z.1_20150322000236_000_guradvrj.2-0.jpg" /><h1 class="headline">Scott Walker&rsquo;s teen years in Delavan put him on the road to&nbsp;politics</h1><p class="tease-text"><span class="timestamp"><span class="ts-inner">March 21, 2015</span> | </span> As a high school junior at Delavan-Darien High School, Scott Walker (third from left) was chosen as an alternate for Badger Boys State and ended up taking the place of another teen chosen to go to the leadership camp.</p></a></div><div class="belt homepage-box"><div class="divider"><h4>Scott Walker presidential news</h4></div><div class="featured_content">'; _.each(articles, function(article) { __p+='<div class="features_story"><h3 class="headline"><a href="'+((__t=( article.link ))===null?'':__t)+'">'+((__t=( article.headline ))===null?'':__t)+'</a></h3><p>'+((__t=( article.description ))===null?'':__t)+'</p></div>'; }); __p+='</div></div><div class="clearer"></div><ul class="section-triggers homepage-box"><li class="trigger trigger-one" facet-slug="travel"><div class="trigger-icon ss-icon ss-briefcase"></div><h5>Travel</h5></li><li class="trigger trigger-two" facet-slug="campaign-finance"><div class="trigger-icon ss-icon ss-moneybag"></div><h5>Contributions</h5></li><li class="trigger trigger-three" facet-slug="media-appearances"><div class="trigger-icon ss-icon ss-tv"></div><h5>Media appearances</h5></li><div class="clearer"></div></ul><div class="clearer"></div></div></div>';}return __p;},
        list: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div id="'+((__t=( listHolderID ))===null?'':__t)+'"><h3>'+((__t=( listHeaderBase ))===null?'':__t)+'</h3><ul class="'+((__t=( listClass ))===null?'':__t)+'"></ul><div class="pagination"></div></div><a class="exit-off-canvas" style="height: 991px;"></a>';}return __p;},
        menuButtonContents: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<a class="right-off-canvas-toggle menu-icon" href="#"><span></span></a>';}return __p;},
        nav: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<section class="left-small"></section><section class="middle tab-bar-section"><h1 class="title">'+((__t=( appTitle ))===null?'':__t)+'</h1></section><section class="right-small"></section><a class="exit-off-canvas"></a>';}return __p;},
        offCanvasMenuBase: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<ul class="off-canvas-list"></ul>';}return __p;},
        offCanvasLabelItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<label>'+((__t=( value ))===null?'':__t)+'</label>';}return __p;},
        offCanvasMenuItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<a class="menu-trigger '+((__t=( anchorClass ))===null?'':__t)+'" href="'+((__t=( anchorLink ))===null?'':__t)+'"><span class="'+((__t=( spanClass ))===null?'':__t)+'">'+((__t=( value ))===null?'':__t)+'</span></a>';}return __p;},
        tagArchive: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div id="'+((__t=( listHolderID ))===null?'':__t)+'"><h3>'+((__t=( tagArchiveHeaderPlaceholder ))===null?'':__t)+'</h3><ul class="'+((__t=( tagArchiveClass ))===null?'':__t)+'"></ul><div class="pagination"></div></div><a class="exit-off-canvas" style="height: 991px;"></a>';}return __p;},
        tagPagination: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div>'; if (paginationData.prevPage !== null) { __p+='<a class="pagination-left pagination-link" href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/tags/'+((__t=( pagelessQueryDict ))===null?'':__t)+'page='+((__t=( paginationData.prevPage ))===null?'':__t)+'/">&lsaquo; Back</a>'; } __p+=''; if (paginationData.nextPage !== null) { __p+='<a class="pagination-right pagination-link" href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/tags/'+((__t=( pagelessQueryDict ))===null?'':__t)+'page='+((__t=( paginationData.nextPage ))===null?'':__t)+'/">Next &rsaquo;</a>'; } __p+='<div class="pagination-center">Page <span class="current-page">'+((__t=( paginationData.currentPage ))===null?'':__t)+'</span> of <span class="total-pages">'+((__t=( paginationData.totalPages ))===null?'':__t)+'</span></div><div class="clearer"></div></div>';}return __p;},
        wrapper: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="off-canvas-wrap" data-offcanvas><div class="inner-wrap '+((__t=( activeSection ))===null?'':__t)+'-shown"><nav class="tab-bar"></nav><aside class="right-off-canvas-menu"></aside>'; _.each(sections, function(section) { __p+='<section class="'+((__t=( section ))===null?'':__t)+' view-section"></section>'; }); __p+='</div></div>';}return __p;},
    },
    "campaign-finance": {
        aboutThisApp: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="about-this-app"><div class="about-app-trigger">About this data<span class="trigger-up ss-icon ss-navigateup"></span><span class="trigger-down ss-icon ss-navigatedown"></span></div><div class="about-app-flexible"><p>The campaign finance data come from reports Friends of Scott Walker filed with the Wisconsin Government Accountability Board from July 2003 through January 2015. During that period, Scott Walker held either county office or statewide office.</p><p>He was county executive from 2002 through 2010, running one unsuccessful campaign for governor in 2006.</p><p>From 2010 to 2014, Walker won three gubernatorial elections: the 2010 general, the 2012 recall and the 2014 general.</p><p>This application was developed by <a href="mailto:ajvestal@journalsentinel.com">Allan James Vestal</a>, <a href="mailto:mandre@journalsentinel.com">Michael Andre</a> and <a href="mailto:kcrowe@journalsentinel.com">Kevin Crowe</a> of the Journal Sentinel&nbsp;staff.</p></div></div>';}return __p;},
        adItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="ad-holder"><div class="ad-warning">Advertisement</div><iframe id="51a4f9b058955" name="51a4f9b058955" src="http://ox-d.jrn.com/w/1.0/afr?auid=421130&cb='+((__t=( cbValue ))===null?'':__t)+'" frameborder="0" scrolling="no"><a href="http://ox-d.jrn.com/w/1.0/rc?cs=51a4f9b058955&cb='+((__t=( cbValue ))===null?'':__t)+'" target="_blank"><img src="http://ox-d.jrn.com/w/1.0/ai?auid=421130&cs=51a4f9b058955&cb='+((__t=( cbValue ))===null?'':__t)+'" border="0" alt=""></a></iframe></div>';}return __p;},
        bonusItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<a href="'+((__t=( itemURL ))===null?'':__t)+'"><div class="bonus-link-text">Open <span class="bonus-type">'+((__t=( itemToOpen ))===null?'':__t)+'</span> &raquo;</div></a>';}return __p;},
        detail: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="detail-card donation-detail"><h1>Financial contributions from '+((__t=( rowData.stateNameFull ))===null?'':__t)+'</h1><h3>Donations to Scott Walker&rsquo;s state committee, '+((__t=( dataStartDate ))===null?'':__t)+'&thinsp;&ndash;&thinsp;'+((__t=( dataEndDate ))===null?'':__t)+'</h3><h2><span class="date-info"><span class="date-clause">'; print(numberWithCommas(rowData.donationCount)); __p+=' '; if (rowData.donationCount === 1) { __p+='donation'; } else { __p+='donations'; } __p+='</span><span class="divider"> &diams; </span><span class="place-clause">'; print(formatCurrency(rowData.donationTotal, 0)); __p+=' total</span></span></h2><p class="obbes-upper-link"><a href="'+((__t=( rowData.tableLinkURL ))===null?'':__t)+'" target="_blank">Explore all donations from '+((__t=( rowData.stateNameFull ))===null?'':__t)+'&nbsp;&raquo;</a></p><div class="attribute-stat-line row"><div class="attribute-stat-line-mid"><div class="attribute-stat-line-inner"><div class="attribute-stat small-4 columns"><div class="big-number"><span class="number-ancillary">#</span><span>'+((__t=( rowData.nationalRank ))===null?'':__t)+'</span></div><div class="number-reference">nationally in money raised</div></div><div class="attribute-stat small-4 columns"><div class="big-number"><span>'; print(numberWithCommas(rowData.smallDonations)); __p+='</span></div><div class="number-reference">contributions of $50 or less</div></div><div class="attribute-stat small-4 columns"><div class="big-number"><span>'; print(numberWithCommas(rowData.maxDonations)); __p+='</span></div><div class="number-reference">$10,000+ contributions</div></div><div class="clearer"></div></div></div></div><div class="multi-attribute no-header donor-table"><div class="donor-header">Biggest donations</div><table id="largest-donations"><thead><tr><th>Donor</th><th>Amount</th><th class="show-for-medium-up">Date</th><th>Employer</th><th class="show-for-medium-up">City</th></tr></thead><tbody></tbody></table><p class="obbes-lower-link"><a href="'+((__t=( rowData.tableLinkURL ))===null?'':__t)+'" target="_blank"></a></p></div>'; print(renderTemplate("campaign-finance", "aboutThisApp", {})); __p+='</div>';}return __p;},
        donorTableRow: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<tr><td>'+((__t=( webName ))===null?'':__t)+'</td><td>'; print(formatCurrency(ContributionAmount, 2)); __p+='</td><td>'; print(timestampToAPStyleDate(unixTransactionDate * 1000)[1]); __p+='</td><td class="show-for-medium-up">'+((__t=( EmployerName ))===null?'':__t)+'</td><td class="show-for-medium-up">'+((__t=( City ))===null?'':__t)+'</td></tr>';}return __p;},
        listHeader: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<span>'+((__t=( baseDisplay ))===null?'':__t)+' <span class="selected-area">'+((__t=( enhancedDisplay ))===null?'':__t)+'</span></span><span class="top-pagination">Page '+((__t=( currentPage ))===null?'':__t)+'/'+((__t=( totalPages ))===null?'':__t)+'</span>';}return __p;},
        listItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<a href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/items/'+((__t=( rowData.statePostalLower ))===null?'':__t)+'/"><div class="stateface stateface-'+((__t=( rowData.statePostalLower ))===null?'':__t)+'"></div><div class="donation-details"><h4 class="description"><span class="ranking">('+((__t=( rowData.rank ))===null?'':__t)+')</span> '+((__t=( rowData.stateNameFull ))===null?'':__t)+'</h4><h5 class="location">'; print(numberWithCommas(rowData.donationCount)); __p+=' '; if (rowData.donationCount === 1) { __p+='donation'; } else { __p+='donations'; } __p+='</h5></div><h6 class="donation-totals"><span class="total">'; print(formatCurrency(rowData.donationTotal, 0)); __p+='</span><span class="to-date">'+((__t=( rowData.dataStartDate ))===null?'':__t)+'&thinsp;&ndash;&thinsp;'+((__t=( rowData.dataEndDate ))===null?'':__t)+'</span></h6><div class="clearer"></div></a>';}return __p;},
        pagination: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div>'; if (paginationData.prevPage !== null) { __p+='<a class="pagination-left pagination-link" href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/refine/'+((__t=( pagelessQueryDict ))===null?'':__t)+'page='+((__t=( paginationData.prevPage ))===null?'':__t)+'/">&lsaquo; Back</a>'; } __p+=''; if (paginationData.nextPage !== null) { __p+='<a class="pagination-right pagination-link" href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/refine/'+((__t=( pagelessQueryDict ))===null?'':__t)+'page='+((__t=( paginationData.nextPage ))===null?'':__t)+'/">Next &rsaquo;</a>'; } __p+='<div class="pagination-center">Page <span class="current-page">'+((__t=( paginationData.currentPage ))===null?'':__t)+'</span> of <span class="total-pages">'+((__t=( paginationData.totalPages ))===null?'':__t)+'</span></div><div class="clearer"></div></div>';}return __p;},
        placeholderItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="placeholder-inner"><div>No donation records found.</div></div>';}return __p;},
        visualization: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="detail-card"><div class="finance-map-holder map-holder">'; if (viewMode === "US") { __p+='<h1 class="map-title"><span class="title-underline">Contributions to Scott Walker&rsquo;s statewide&nbsp;campaigns</span></h1><ul class="stately"><li data-state="al" class="al">A</li><li data-state="ak" class="ak">B</li><li data-state="ar" class="ar">C</li><li data-state="az" class="az">D</li><li data-state="ca" class="ca">E</li><li data-state="co" class="co">F</li><li data-state="ct" class="ct">G</li><li data-state="de" class="de">H</li><li data-state="dc" class="dc">I</li><li data-state="fl" class="fl">J</li><li data-state="ga" class="ga">K</li><li data-state="hi" class="hi">L</li><li data-state="id" class="id">M</li><li data-state="il" class="il">N</li><li data-state="in" class="in">O</li><li data-state="ia" class="ia">P</li><li data-state="ks" class="ks">Q</li><li data-state="ky" class="ky">R</li><li data-state="la" class="la">S</li><li data-state="me" class="me">T</li><li data-state="md" class="md">U</li><li data-state="ma" class="ma">V</li><li data-state="mi" class="mi">W</li><li data-state="mn" class="mn">X</li><li data-state="ms" class="ms">Y</li><li data-state="mo" class="mo">Z</li><li data-state="mt" class="mt">a</li><li data-state="ne" class="ne">b</li><li data-state="nv" class="nv">c</li><li data-state="nh" class="nh">d</li><li data-state="nj" class="nj">e</li><li data-state="nm" class="nm">f</li><li data-state="ny" class="ny">g</li><li data-state="nc" class="nc">h</li><li data-state="nd" class="nd">i</li><li data-state="oh" class="oh">j</li><li data-state="ok" class="ok">k</li><li data-state="or" class="or">l</li><li data-state="pa" class="pa">m</li><li data-state="ri" class="ri">n</li><li data-state="sc" class="sc">o</li><li data-state="sd" class="sd">p</li><li data-state="tn" class="tn">q</li><li data-state="tx" class="tx">r</li><li data-state="ut" class="ut">s</li><li data-state="va" class="va">t</li><li data-state="vt" class="vt">u</li><li data-state="wa" class="wa">v</li><li data-state="wv" class="wv">w</li><li data-state="wi" class="wi">x</li><li data-state="wy" class="wy">y</li><div id="popouts-holder"><div id="popout-ri" class="ri popout-box" hover-title="rhode-island">R.I.</div><div id="popout-de" class="de popout-box" hover-title="delaware">Del.</div><div id="popout-dc" class="dc popout-box" hover-title="district-of-columbia">D.C.</div></div></ul><ul class="choropleth-legend"><li><span class="legend-swatch tier-one">&#9635;</span><span class="legend-label">'+((__t=( legend.one ))===null?'':__t)+'</span></li><li><span class="legend-swatch tier-two">&#9635;</span><span class="legend-label">'+((__t=( legend.two ))===null?'':__t)+'</span></li><li><span class="legend-swatch tier-three">&#9635;</span><span class="legend-label">'+((__t=( legend.three ))===null?'':__t)+'</span></li><li><span class="legend-swatch tier-four">&#9635;</span><span class="legend-label">'+((__t=( legend.four ))===null?'':__t)+'</span></li><li><span class="legend-swatch tier-five">&#9635;</span><span class="legend-label">'+((__t=( legend.five ))===null?'':__t)+'</span></li><div class="clearer"></div></ul>'; } else { __p+=''; } __p+='<h1 class="table-header">Highest-contributing '; if (viewMode === "US") { __p+='states'; } __p+='</h1><table class="state-frequencies"><thead><tr><th>'; if (viewMode === "US") { __p+='State'; } else { __p+='City'; } __p+='</th><th>Number of donations</th><th>Donation totals</th></tr></thead><tbody>'; _.each(frequencies, function(r) { __p+='<tr><td>'; if (viewMode === "US") { __p+=''+((__t=( r.stateNameFull ))===null?'':__t)+''; } else { __p+=''+((__t=( r.city ))===null?'':__t)+''; } __p+='</td><td>'; print(numberWithCommas(r.count)); __p+='</td><td>'; print(formatCurrency(r.total, 2)); __p+='</td></tr>'; }); __p+='</tbody></table>'; print(renderTemplate("campaign-finance", "aboutThisApp", {})); __p+='</div></div>';}return __p;}
    },
    "media-appearances": {
        aboutThisApp: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="about-this-app"><div class="about-app-trigger">About this information<span class="trigger-up ss-icon ss-navigateup"></span><span class="trigger-down ss-icon ss-navigatedown"></span></div><div class="about-app-flexible"><p>The Milwaukee Journal Sentinel is tracking Gov. Scott Walker&rsquo;s positions on major issues. The Walker Tracker highlights key national media interviews with Walker since 2011.</p><p>Contact the Journal Sentinel&rsquo;s <a href="mailto:dumhoefer@journalsentinel.com">Dave Umhoefer</a> with additions to the list of interviews.</p><p>This application was developed by <a href="mailto:ajvestal@journalsentinel.com">Allan James Vestal</a>, <a href="mailto:mandre@journalsentinel.com">Michael Andre</a> and <a href="mailto:kcrowe@journalsentinel.com">Kevin Crowe</a> of the Journal Sentinel&nbsp;staff.</p></div></div>';}return __p;},
        adItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="ad-holder"><div class="ad-warning">Advertisement</div><iframe id="51a4f9b058955" name="51a4f9b058955" src="http://ox-d.jrn.com/w/1.0/afr?auid=421130&cb='+((__t=( cbValue ))===null?'':__t)+'" frameborder="0" scrolling="no"><a href="http://ox-d.jrn.com/w/1.0/rc?cs=51a4f9b058955&cb='+((__t=( cbValue ))===null?'':__t)+'" target="_blank"><img src="http://ox-d.jrn.com/w/1.0/ai?auid=421130&cs=51a4f9b058955&cb='+((__t=( cbValue ))===null?'':__t)+'" border="0" alt=""></a></iframe></div>';}return __p;},
        bonusItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<a href="'+((__t=( itemURL ))===null?'':__t)+'"><div class="bonus-link-text">Open <span class="bonus-type">'+((__t=( itemToOpen ))===null?'':__t)+'</span> &raquo;</div></a>';}return __p;},
        detail: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="detail-card"><h1>'; if (rowData.show) { __p+=''+((__t=( rowData.show ))===null?'':__t)+' '; } else { __p+=''+((__t=( rowData.organization.name ))===null?'':__t)+''; } __p+='</h1><h2><span class="date-info"><span class="date-clause">'+((__t=( rowData.interviewDate ))===null?'':__t)+'</span>'; if (rowData.show) { __p+='<span class="divider"> &diams; </span><span class="organization">'+((__t=( rowData.organization.name ))===null?'':__t)+'</span>'; } __p+='</span></h2>'; if (typeof rowData.publicNotes !== "undefined" && rowData.publicNotes !== null) { __p+='<div class="attribute-section"><div class="attribute-name">Notes</div><div class="attribute-value">'+((__t=( rowData.publicNotes ))===null?'':__t)+'</div></div>'; } __p+=''; if (typeof rowData.transcript !== "undefined" && rowData.transcript !== null) { __p+='<div class="attribute-section no-header"><div class="attribute-value inline-value"><a href="'+((__t=( rowData.transcript ))===null?'':__t)+'" target="_blank">Transcript</a></div><div class="clearer"></div></div>'; } __p+=''; if (typeof rowData.recordings !== "undefined" && rowData.recordings.length > 0) { __p+='<div class="attribute-section multi-attribute"><div class="attribute-name">Recordings</div>'; _.each(rowData.recordings, function(recording){ __p+='<div class="attribute-value inline-value"><a href="'+((__t=( recording.link ))===null?'':__t)+'" target="_blank">'+((__t=( recording.type ))===null?'':__t)+' recording</a></div>'; }); __p+='<div class="clearer"></div></div>'; } __p+=''; if (typeof rowData.tags !== "undefined" && rowData.tags.length > 0) { __p+='<div class="attribute-section tag-display"><div class="attribute-name">Issues discussed</div><ul class="tag-list">'; _.each(rowData.tags, function(tag) { __p+='<li class="tag"><a href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/refine/issue='+((__t=( tag.slug ))===null?'':__t)+'/">'+((__t=( tag.name ))===null?'':__t)+'</a></li>'; }); __p+='</ul><div class="clearer"></div></div>'; } __p+=''; print(renderTemplate("media-appearances", "aboutThisApp", {})); __p+='</div>';}return __p;},
        listHeader: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<span>'+((__t=( baseDisplay ))===null?'':__t)+' <span class="selected-area">'+((__t=( enhancedDisplay ))===null?'':__t)+'</span></span><span class="top-pagination">Page '+((__t=( currentPage ))===null?'':__t)+'/'+((__t=( totalPages ))===null?'':__t)+'</span>';}return __p;},
        listItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<a href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/items/'+((__t=( rowData.id ))===null?'':__t)+'/"><div class="appearance-details"><h4 class="description">'; if (rowData.show) { __p+=''+((__t=( rowData.show ))===null?'':__t)+''; } else { __p+=''+((__t=( rowData.organization.name ))===null?'':__t)+''; } __p+='</h4><h5 class="location"><span class="organization-name">'; if (rowData.show) { __p+=''+((__t=( rowData.organization.name ))===null?'':__t)+''; } else { __p+='General coverage'; } __p+='</span></h5></div><h6 class="date"><span class="month">'+((__t=( rowData.dateComponents.month ))===null?'':__t)+'</span><span class="hidden"> </span><span class="day">'+((__t=( rowData.dateComponents.day))===null?'':__t)+'</span><span class="hidden">, </span><span class="year">'+((__t=( rowData.dateComponents.year ))===null?'':__t)+'</span></h6><div class="clearer"></div></a>';}return __p;},
        pagination: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div>'; if (paginationData.prevPage !== null) { __p+='<a class="pagination-left pagination-link" href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/refine/'+((__t=( pagelessQueryDict ))===null?'':__t)+'page='+((__t=( paginationData.prevPage ))===null?'':__t)+'/">&lsaquo; Newer</a>'; } __p+=''; if (paginationData.nextPage !== null) { __p+='<a class="pagination-right pagination-link" href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/refine/'+((__t=( pagelessQueryDict ))===null?'':__t)+'page='+((__t=( paginationData.nextPage ))===null?'':__t)+'/">Older &rsaquo;</a>'; } __p+='<div class="pagination-center">Page <span class="current-page">'+((__t=( paginationData.currentPage ))===null?'':__t)+'</span> of <span class="total-pages">'+((__t=( paginationData.totalPages ))===null?'':__t)+'</span></div><div class="clearer"></div></div>';}return __p;},
        placeholderItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="placeholder-inner"><div>No interviews found.</div></div>';}return __p;},
        tagArchiveHeader: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<span>'+((__t=( enhancedDisplay ))===null?'':__t)+' <span class="selected-area">in '+((__t=( baseDisplay ))===null?'':__t)+'</span></span>';}return __p;},
        tagArchiveItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<a href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/refine/issue='+((__t=( rowData.slug ))===null?'':__t)+'/"><div class="visit-details"><h4 class="description">'+((__t=( rowData.name ))===null?'':__t)+'</h4><h5 class="location">'+((__t=( rowData.count ))===null?'':__t)+' interview'; if (rowData.count != 1) { __p+='s'; } __p+='</h5></div></a>';}return __p;},
        visualization: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="detail-card"><div class="appearance-map-holder map-holder"><h1 class="table-header">Interviews by '; if (viewType === "All organizations") { __p+='organization'; } else { __p+='show'; } __p+='</h1><table class="state-frequencies"><thead><tr><th>'; if (viewType === "All organizations") { __p+='Organization'; } else { __p+='Show'; } __p+='</th><th>Interviews</th><th>Latest</th></tr></thead><tbody>'; _.each(frequencies, function(r) { __p+='<tr><td>'; if (viewType === "All organizations") { __p+=''+((__t=( r.organization ))===null?'':__t)+''; } else { __p+=''+((__t=( r.show_name ))===null?'':__t)+''; } __p+='</td><td>'+((__t=( r.frequency ))===null?'':__t)+'</td><td>'+((__t=( r.latest ))===null?'':__t)+'</td></tr>'; }); __p+='</tbody></table>'; print(renderTemplate("media-appearances", "aboutThisApp", {})); __p+='</div></div>';}return __p;},
    },
    "travel": {
        aboutThisApp: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="about-this-app"><div class="about-app-trigger">About this data<span class="trigger-up ss-icon ss-navigateup"></span><span class="trigger-down ss-icon ss-navigatedown"></span></div><div class="about-app-flexible"><p>Information on Scott Walker&rsquo;s travel is compiled by Dave Umhoefer and others from the Milwaukee Journal Sentinel staff. Only out-of-state trips are&nbsp;listed.</p><p>Information comes from publicly reported information. <a href="mailto:dumhoefer@journalsentinel.com">Contact the Journal Sentinel</a> if you know of a trip we have not&nbsp;listed.</p><p>This application was developed by <a href="mailto:ajvestal@journalsentinel.com">Allan James Vestal</a>, <a href="mailto:mandre@journalsentinel.com">Michael Andre</a> and <a href="mailto:kcrowe@journalsentinel.com">Kevin Crowe</a> of the Journal Sentinel&nbsp;staff.</p></div></div>';}return __p;},
        adItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="ad-holder"><div class="ad-warning">Advertisement</div><iframe id="51a4f9b058955" name="51a4f9b058955" src="http://ox-d.jrn.com/w/1.0/afr?auid=421130&cb='+((__t=( cbValue ))===null?'':__t)+'" frameborder="0" scrolling="no"><a href="http://ox-d.jrn.com/w/1.0/rc?cs=51a4f9b058955&cb='+((__t=( cbValue ))===null?'':__t)+'" target="_blank"><img src="http://ox-d.jrn.com/w/1.0/ai?auid=421130&cs=51a4f9b058955&cb='+((__t=( cbValue ))===null?'':__t)+'" border="0" alt=""></a></iframe></div>';}return __p;},
        bonusItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<a href="'+((__t=( itemURL ))===null?'':__t)+'"><div class="bonus-link-text">Open <span class="bonus-type">'+((__t=( itemToOpen ))===null?'':__t)+'</span> &raquo;</div></a>';}return __p;},
        detail: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="detail-card"><h1>'+((__t=( rowData.description ))===null?'':__t)+'</h1><h2><span class="date-info"><span class="date-clause">'+((__t=( rowData.startDate ))===null?'':__t)+'</span><span class="divider"> &diams; </span><span class="place-clause">'+((__t=( rowData.city ))===null?'':__t)+', '+((__t=( rowData.state ))===null?'':__t)+'</span></span></h2>'; if (typeof rowData.sponsors !== "undefined" && rowData.sponsors !== null) { __p+='<div class="attribute-section no-top-line"><div class="attribute-name">Sponsors</div><div class="attribute-value">'+((__t=( rowData.sponsors ))===null?'':__t)+'</div></div>'; } __p+=''; if (typeof rowData.activity !== "undefined" && rowData.activity !== null) { __p+='<div class="attribute-section"><div class="attribute-name">Activity</div><div class="attribute-value">'+((__t=( rowData.activity ))===null?'':__t)+'</div></div>'; } __p+=''; if ((typeof rowData.announcement !== "undefined" && rowData.announcement !== null) || (typeof rowData.transcript !== "undefined" && rowData.transcript !== null)) { __p+='<div class="attribute-section multi-attribute no-header">'; if (typeof rowData.announcement !== "undefined" && rowData.announcement !== null) { __p+='<div class="attribute-value inline-value"><a href="'+((__t=( rowData.announcement ))===null?'':__t)+'" target="_blank">Announcement</a></div>'; } __p+=''; if (typeof rowData.transcript !== "undefined" && rowData.transcript !== null) { __p+='<div class="attribute-value inline-value"><a href="'+((__t=( rowData.transcript ))===null?'':__t)+'" target="_blank">Transcript</a></div>'; } __p+='<div class="clearer"></div></div>'; } __p+=''; if (typeof rowData.recordings !== "undefined" && rowData.recordings.length > 0) { __p+='<div class="attribute-section multi-attribute"><div class="attribute-name">Recordings</div>'; _.each(rowData.recordings, function(recording){ __p+='<div class="attribute-value inline-value"><a href="'+((__t=( recording.link ))===null?'':__t)+'" target="_blank">'+((__t=( recording.type ))===null?'':__t)+' recording</a></div>'; }); __p+='<div class="clearer"></div></div>'; } __p+=''; if (typeof rowData.coverage !== "undefined" && rowData.coverage.length > 0) { __p+='<div class="attribute-section multi-line"><div class="attribute-name">Media coverage</div><ul>'; _.each(rowData.coverage, function(cItem) { __p+='<li class="attribute-value"><a href="'+((__t=( cItem.link ))===null?'':__t)+'" target="_blank">'+((__t=( cItem.organization ))===null?'':__t)+'</a></li>'; }); __p+='</ul></div>'; } __p+=''; if (typeof rowData.tags !== "undefined" && rowData.tags.length > 0) { __p+='<div class="attribute-section tag-display"><div class="attribute-name">Issues discussed</div><ul class="tag-list">'; _.each(rowData.tags, function(tag) { __p+='<li class="tag"><a href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/refine/issue='+((__t=( tag.slug ))===null?'':__t)+'/">'+((__t=( tag.name ))===null?'':__t)+'</a></li>'; }); __p+='</ul><div class="clearer"></div></div>'; } __p+=''; print(renderTemplate("travel", "aboutThisApp", {})); __p+='</div>';}return __p;},
        listHeader: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<span>'+((__t=( baseDisplay ))===null?'':__t)+' <span class="selected-area">'+((__t=( enhancedDisplay ))===null?'':__t)+'</span></span><span class="top-pagination">Page '+((__t=( currentPage ))===null?'':__t)+'/'+((__t=( totalPages ))===null?'':__t)+'</span>';}return __p;},
        listItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<a href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/items/'+((__t=( rowData.id ))===null?'':__t)+'/"><div class="stateface stateface-'+((__t=( rowData.statePostalLower ))===null?'':__t)+'"></div><div class="visit-details"><h4 class="description">'+((__t=( rowData.description ))===null?'':__t)+'</h4><h5 class="location"><span class="city">'+((__t=( rowData.city ))===null?'':__t)+'</span>, <span class="state">'+((__t=( rowData.state ))===null?'':__t)+'</span></h5></div><h6 class="date"><span class="month">'+((__t=( rowData.dateComponents.month ))===null?'':__t)+'</span><span class="hidden"> </span><span class="day">'+((__t=( rowData.dateComponents.day))===null?'':__t)+'</span><span class="hidden">, </span><span class="year">'+((__t=( rowData.dateComponents.year ))===null?'':__t)+'</span></h6><div class="clearer"></div></a>';}return __p;},
        pagination: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div>'; if (paginationData.prevPage !== null) { __p+='<a class="pagination-left pagination-link" href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/refine/'+((__t=( pagelessQueryDict ))===null?'':__t)+'page='+((__t=( paginationData.prevPage ))===null?'':__t)+'/">&lsaquo; Newer</a>'; } __p+=''; if (paginationData.nextPage !== null) { __p+='<a class="pagination-right pagination-link" href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/refine/'+((__t=( pagelessQueryDict ))===null?'':__t)+'page='+((__t=( paginationData.nextPage ))===null?'':__t)+'/">Older &rsaquo;</a>'; } __p+='<div class="pagination-center">Page <span class="current-page">'+((__t=( paginationData.currentPage ))===null?'':__t)+'</span> of <span class="total-pages">'+((__t=( paginationData.totalPages ))===null?'':__t)+'</span></div><div class="clearer"></div></div>';}return __p;},
        placeholderItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="placeholder-inner"><div>No visits found.</div></div>';}return __p;},
        tagArchiveHeader: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<span>'+((__t=( enhancedDisplay ))===null?'':__t)+' <span class="selected-area">in '+((__t=( baseDisplay ))===null?'':__t)+'</span></span>';}return __p;},
        tagArchiveItem: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<a href="#!/'+((__t=( facetSlug ))===null?'':__t)+'/refine/issue='+((__t=( rowData.slug ))===null?'':__t)+'/"><div class="visit-details"><h4 class="description">'+((__t=( rowData.name ))===null?'':__t)+'</h4><h5 class="location">'+((__t=( rowData.count ))===null?'':__t)+' event'; if (rowData.count != 1) { __p+='s'; } __p+='</h5></div></a>';}return __p;},
        visualization: function(obj){var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};with(obj||{}){__p+='<div class="detail-card"><div class="events-map-holder map-holder">'; if (viewMode === "US") { __p+='<h1 class="map-title"><span class="title-underline">Scott Walker&rsquo;s out-of-state&nbsp;visits</span></h1><ul class="stately"><li data-state="al" class="al">A</li><li data-state="ak" class="ak">B</li><li data-state="ar" class="ar">C</li><li data-state="az" class="az">D</li><li data-state="ca" class="ca">E</li><li data-state="co" class="co">F</li><li data-state="ct" class="ct">G</li><li data-state="de" class="de">H</li><li data-state="dc" class="dc">I</li><li data-state="fl" class="fl">J</li><li data-state="ga" class="ga">K</li><li data-state="hi" class="hi">L</li><li data-state="id" class="id">M</li><li data-state="il" class="il">N</li><li data-state="in" class="in">O</li><li data-state="ia" class="ia">P</li><li data-state="ks" class="ks">Q</li><li data-state="ky" class="ky">R</li><li data-state="la" class="la">S</li><li data-state="me" class="me">T</li><li data-state="md" class="md">U</li><li data-state="ma" class="ma">V</li><li data-state="mi" class="mi">W</li><li data-state="mn" class="mn">X</li><li data-state="ms" class="ms">Y</li><li data-state="mo" class="mo">Z</li><li data-state="mt" class="mt">a</li><li data-state="ne" class="ne">b</li><li data-state="nv" class="nv">c</li><li data-state="nh" class="nh">d</li><li data-state="nj" class="nj">e</li><li data-state="nm" class="nm">f</li><li data-state="ny" class="ny">g</li><li data-state="nc" class="nc">h</li><li data-state="nd" class="nd">i</li><li data-state="oh" class="oh">j</li><li data-state="ok" class="ok">k</li><li data-state="or" class="or">l</li><li data-state="pa" class="pa">m</li><li data-state="ri" class="ri">n</li><li data-state="sc" class="sc">o</li><li data-state="sd" class="sd">p</li><li data-state="tn" class="tn">q</li><li data-state="tx" class="tx">r</li><li data-state="ut" class="ut">s</li><li data-state="va" class="va">t</li><li data-state="vt" class="vt">u</li><li data-state="wa" class="wa">v</li><li data-state="wv" class="wv">w</li><li data-state="wi" class="wi tier-zero">x</li><li data-state="wy" class="wy">y</li><div id="popouts-holder"><div id="popout-ri" class="ri popout-box" hover-title="rhode-island">R.I.</div><div id="popout-de" class="de popout-box" hover-title="delaware">Del.</div><div id="popout-dc" class="dc popout-box" hover-title="district-of-columbia">D.C.</div></div></ul><ul class="choropleth-legend"><li><span class="legend-swatch tier-one">&#9635;</span><span class="legend-label">0&nbsp;visits</span></li><li><span class="legend-swatch tier-two">&#9635;</span><span class="legend-label">1&thinsp;&ndash;&thinsp;5&nbsp;visits</span></li><li><span class="legend-swatch tier-three">&#9635;</span><span class="legend-label">6&thinsp;&ndash;&thinsp;10&nbsp;visits</span></li><li><span class="legend-swatch tier-four">&#9635;</span><span class="legend-label">&gt;&nbsp;10&nbsp;visits</span></li><div class="clearer"></div></ul>'; } else { __p+=''; } __p+='<h1 class="table-header">Most-visited '; if (viewMode === "US") { __p+='states'; } else { __p+='cities'; } __p+='</h1><table class="state-frequencies"><thead><tr><th>'; if (viewMode === "US") { __p+='State'; } else { __p+='City'; } __p+='</th><th>Visits</th><th>Latest visit</th></tr></thead><tbody>'; _.each(frequencies, function(r) { __p+='<tr><td>'; if (viewMode === "US") { __p+=''+((__t=( r.state ))===null?'':__t)+''; } else { __p+=''+((__t=( r.city ))===null?'':__t)+''; } __p+='</td><td>'+((__t=( r.frequency ))===null?'':__t)+'</td><td>'+((__t=( r.latest ))===null?'':__t)+'</td></tr>'; }); __p+='</tbody></table>'; print(renderTemplate("travel", "aboutThisApp", {})); __p+='</div></div>';}return __p;},
    }
};
// WalkerTracker v3.0.0
var debug = false;

var generateURLs = {
    'campaign-finance': {
        list: function(listView) {
            var specificURL, queryPage,
                query = listView.queryDict;

            if (_.isEmpty(query)) {
                queryPage = 1;
            } else {
                queryPage = 1;
                if (_.has(query, 'page')) {
                    var queryPageCandidate = query.page;
                    if ($.isNumeric(queryPageCandidate) &&
                            parseInt(queryPageCandidate, 10) > 0) {
                        queryPage = parseInt(
                            queryPageCandidate,
                            10
                        ).toString();
                    }
                }
            }

            specificURL = "campaign-finance/all/?page=" +
                                    queryPage;

            if (debug) {
                return listView.facetConfig.baseURL + specificURL;
            } else {
                return listView.facetConfig.baseURL + specificURL +
                        "&spaceless=true";
            }
        },
        detail: function(view) {
            var specificURL;

            specificURL = "campaign-finance/by-state/" + view.dataID + "/";

            if (debug) {
                return view.facetConfig.baseURL + specificURL;
            } else {
                return view.facetConfig.baseURL + specificURL +
                        "?spaceless=true";
            }
        }
    },
    'media-appearances': {
        list: function(listView) {
            var specificURL, queryOrganization, queryIssueSlug, queryPage,
                query = listView.queryDict;

            if (_.isEmpty(query)) {
                queryOrganization = "all";
                queryIssue = null;
                queryPage = 1;
            } else {
                queryOrganization = "all";
                if (_.has(query, 'organization')) {
                    var queryOrganizationCandidate = query.organization;

                    // Can add more processing later if need be.
                    queryOrganization = queryOrganizationCandidate.toLowerCase();
                }

                queryIssueSlug = null;
                if (_.has(query, 'issue')) {
                    var issueSlugCandidate = query.issue;

                    // Can add more processing here if need be.
                    queryIssueSlug = issueSlugCandidate;
                }

                queryPage = 1;
                if (_.has(query, 'page')) {
                    var queryPageCandidate = query.page;
                    if ($.isNumeric(queryPageCandidate) &&
                            parseInt(queryPageCandidate, 10) > 0) {
                        queryPage = parseInt(
                            queryPageCandidate,
                            10
                        ).toString();
                    }
                }
            }

            if ((typeof queryIssueSlug == "undefined") ||
                    (queryIssueSlug === null)) {
                listView.chaperone.view.tagArchiveQueryDict = {};

                if (queryOrganization == "all") {
                    specificURL = "media-appearances/all/?page=" +
                                    queryPage;
                } else {
                    specificURL = "media-appearances/organization/" +
                                    queryOrganization + "/?page=" + queryPage;
                }
            } else {
                specificURL = "media-appearances/tag/" + queryIssueSlug +
                                "/?page=" + queryPage;
            }

            if (debug) {
                return listView.facetConfig.baseURL + specificURL;
            } else {
                return listView.facetConfig.baseURL + specificURL +
                        "&spaceless=true";
            }
        },
        tagArchive: function(view) {
            var specificURL, queryPage,
                query = view.queryDict;

            if (_.isEmpty(query)) {
                queryPage = 1;
            } else {
                queryPage = 1;
                if (_.has(query, 'page')) {
                    var queryPageCandidate = query.page;
                    if ($.isNumeric(queryPageCandidate) &&
                            parseInt(queryPageCandidate, 10) > 0) {
                        queryPage = parseInt(
                            queryPageCandidate,
                            10
                        ).toString();
                    }
                }
            }

            specificURL = "media-appearances/tags/by-page/?page=" + queryPage;

            if (debug) {
                return view.facetConfig.baseURL + specificURL;
            } else {
                return view.facetConfig.baseURL + specificURL +
                            "&spaceless=true";
            }
        },
        detail: function(view) {
            var specificURL = "media-appearances/id/" + view.dataID + "/";

            if (debug) {
                return view.facetConfig.baseURL + specificURL;
            } else {
                return view.facetConfig.baseURL + specificURL +
                            "?spaceless=true";
            }
        }
    },
    'travel': {
        list: function(listView) {
            var specificURL, queryArea, queryIssueSlug, queryPage,
                query = listView.queryDict;

            if (_.isEmpty(query)) {
                queryArea = "US";
                queryIssue = null;
                queryPage = 1;
            } else {
                queryArea = "US";
                if (_.has(query, 'area')) {
                    var queryAreaCandidate = query.area,
                        areaMatchCount = _.where(
                            listView.facetConfig.queryAreas,
                            {a: queryAreaCandidate}
                        ).length;

                    if (areaMatchCount > 0) {
                        queryArea = queryAreaCandidate;
                    }
                }

                queryIssueSlug = null;
                if (_.has(query, 'issue')) {
                    var issueSlugCandidate = query.issue;

                    // Can add more processing here if need be.
                    queryIssueSlug = issueSlugCandidate;
                }

                queryPage = 1;
                if (_.has(query, 'page')) {
                    var queryPageCandidate = query.page;
                    if ($.isNumeric(queryPageCandidate) &&
                            parseInt(queryPageCandidate, 10) > 0) {
                        queryPage = parseInt(
                            queryPageCandidate,
                            10
                        ).toString();
                    }
                }
            }

            if ((typeof queryIssueSlug == "undefined") ||
                    (queryIssueSlug === null)) {
                listView.chaperone.view.tagArchiveQueryDict = {};

                if (queryArea == "US") {
                    specificURL = "events/all/?page=" +
                                    queryPage;
                } else {
                    specificURL = "events/state/" + queryArea +
                                    "/?page=" + queryPage;
                }
            } else {
                specificURL = "events/tag/" + queryIssueSlug +
                                "/?page=" + queryPage;
            }

            if (debug) {
                return listView.facetConfig.baseURL + specificURL;
            } else {
                return listView.facetConfig.baseURL + specificURL +
                        "&spaceless=true";
            }
        },
        tagArchive: function(view) {
            var specificURL, queryPage,
                query = view.queryDict;

            if (_.isEmpty(query)) {
                queryPage = 1;
            } else {
                queryPage = 1;
                if (_.has(query, 'page')) {
                    var queryPageCandidate = query.page;
                    if ($.isNumeric(queryPageCandidate) &&
                            parseInt(queryPageCandidate, 10) > 0) {
                        queryPage = parseInt(
                            queryPageCandidate,
                            10
                        ).toString();
                    }
                }
            }

            specificURL = "events/tags/by-page/?page=" + queryPage;

            if (debug) {
                return view.facetConfig.baseURL + specificURL;
            } else {
                return view.facetConfig.baseURL + specificURL +
                            "&spaceless=true";
            }
        },
        detail: function(view) {
            var specificURL = "events/id/" + view.dataID + "/";

            if (debug) {
                return view.facetConfig.baseURL + specificURL;
            } else {
                return view.facetConfig.baseURL + specificURL +
                            "?spaceless=true";
            }
        }
    }
};


facetConfigs = {
    'media-appearances': {
        baseURL: "http://aukofer.dhb.io/api/v3/",
        parseListViewFacets: function(view, facetsCandidate) {
            var facetsFinalized = {};

            if (_.has(facetsCandidate, 'organization')) {
                // var organizationCandidate = facetsCandidate.organization
                //                                     .toLowerCase();

                // var stateAbbreviations = _.pluck(
                //     view.facetConfig.queryAreas,
                //     'a'
                // );

                // if (_.contains(
                //             stateAbbreviations,
                //             organizationCandidate
                //         )) {
                //     if (organizationCandidate != "all") {
                //         facetsFinalized['organization'] = organizationCandidate;
                //     }
                // }

                facetsFinalized['organization'] = facetsCandidate.organization
                                                                .toLowerCase();
            }

            if (_.has(facetsCandidate, 'issue')) {
                facetsFinalized['issue'] = facetsCandidate.issue;
            }

            if (_.has(facetsCandidate, 'page')) {
                var pageCandidate = parseInt(
                    facetsCandidate.page,
                    10
                );

                if (isInteger(pageCandidate)) {
                    facetsFinalized['page'] = pageCandidate;
                }
            }

            return facetsFinalized;
        },
        parseTagArchiveFacets: function(view, facetsCandidate) {
            var facetsFinalized = {};

            if (_.has(facetsCandidate, 'page')) {
                var pageCandidate = parseInt(
                    facetsCandidate.page,
                    10
                );

                if (isInteger(pageCandidate)) {
                    facetsFinalized['page'] = pageCandidate;
                }
            }

            return facetsFinalized;
        },
        reassembleFacets: function(queryDict) {
            var facetList = [],
                facetFormatted;

            _.each(queryDict, function(value, key) {
                if (key == "page") {
                    facetList.push(key + '=' + value);
                } else {
                    facetList.push(key + '=' +
                                value.toLowerCase());
                }
            });

            facetFormatted = facetList.join(",");

            return facetFormatted;
        },
        storeListResponseData: function(view, dataObject) {
            view.collectionData = dataObject.appearances;

            view.organizationList = dataObject.mediaOrganizations;

            view.verboseTagName = dataObject.tagName;

            view.paginationData = dataObject.pagination;
        },
        generateListItemContext: function(view, row) {
            return row;
        },
        listHasRightNav: true,
        renderRightNav: function(view) {
            var activeArea,
                rightNavElements = [],
                filterByOrganization = {
                    title: "Filter by organization",
                    items: [],
                    order: 1
                };

            rightNavElements.push({
                title: "Filter by issue",
                items: [
                    {
                        anchorClass: "tags-trigger",
                        anchorLink: "#!/" + view.facetSlug + "/tags/",
                        spanClass: "ss-icon ss-tag",
                        value: "Issues &raquo;"
                    }
                ],
                order: 0
            });

            if (_.has(view.queryDict, 'organization')) {
                activeOrganization = view.queryDict.organization;
            } else {
                activeOrganization = "all";
            }

            _.each(view.organizationList, function(organization) {
                var anchorClass = "organization-trigger",
                    queryDict = _.clone(view.queryDict);

                queryDict.organization = organization.a;

                delete queryDict.page;

                var facetFormatted = view.facetConfig
                                            .reassembleFacets(
                                                queryDict
                                            ),
                    anchorLink;

                if (organization.a == "US") {
                    anchorLink = "#!/" + view.facetSlug + "/";
                } else {
                    anchorLink = "#!/" + view.facetSlug +
                                 "/refine/" + facetFormatted + "/";
                }

                if (activeOrganization == organization.a) {
                    anchorClass += " active";
                }

                filterByOrganization.items.push({
                    anchorClass: anchorClass,
                    anchorLink: anchorLink,
                    spanClass: "",
                    value: organization.fn
                });
            });

            rightNavElements.push(filterByOrganization);

            view.chaperone.view.rightMenu.setListElements(
                rightNavElements
            );
        },
        enhanceHeader: function(view) {
            var headerText = "";

            if (_.has(view.queryDict, 'organization')) {
                var matchingState;

                if ((view.queryDict.organization != "all") &&
                        (typeof view.organizationList != "undefined")) {
                    var matchingOrganization = _.findWhere(
                        view.organizationList,
                        {
                            a: view.queryDict.organization
                        }
                    ).fn;

                    headerText = "by " + matchingOrganization;
                }
            } else if (_.has(view.queryDict, 'issue')) {
                return 'mentioning "' + view.verboseTagName + '"';
            }

            return " " + headerText;
        },
        enhanceTagArchiveHeader: function(view) {
            var headerText = "Issues discussed";

            return headerText;
        },
        // callbacks: {},
        listHolderID: "appearances",
        listHeaderBase: "Interviews",
        listClass: "appearance-list",
        tagArchiveHeaderPlaceholder: "Issues discussed",
        tagArchiveClass: "appearance-tags",
        itemClasses: {
            detail: "appearance",
            advertisement: "ad",
            tagArchiveItem: "tag",
            tagAdvertisement: "ad",
            placeholder: "placeholder"
        },
        generateDetailViewContext: function(data, initialContext) {
            var context = _.clone(initialContext);

            context.rowData = data.appearance;

            return context;
        },
        generateBonusItemClass: function(view) {
            var itemClass, isStateView, isTagView,
                pagelessQueryDict = _.clone(
                    view.chaperone.chaperone.view.listQueryDict
                );

            delete pagelessQueryDict.page;

            var isAllOrganizationsView = _.isEmpty(pagelessQueryDict);

            if (!isAllOrganizationsView) {
                isOrganizationView = _.has(pagelessQueryDict, 'organization');
                isTagView = _.has(pagelessQueryDict, 'issue');
            }

            if (isAllOrganizationsView) {
                itemClass = "organization-list";
            } else if (isOrganizationView) {
                itemClass = "show-list";
            } else if (isTagView) {
                itemClass = "tag-list";
            }

            return itemClass;
        },
        generateBonusItemURL: function(view) {
            var listURL, isStateView, isTagView,
                pagelessQueryDict = _.clone(
                    view.chaperone.chaperone.view.listQueryDict
                );

            delete pagelessQueryDict.page;

            var isAllOrganizationsView = _.isEmpty(pagelessQueryDict);

            if (!isAllOrganizationsView) {
                isOrganizationView = _.has(pagelessQueryDict, 'organization');
                isTagView = _.has(pagelessQueryDict, 'issue');
            }

            if (isAllOrganizationsView) {
                listURL = "#!/" + view.chaperone.facetSlug + "/in-depth/";
            } else if (isOrganizationView) {
                listURL = "#!/" + view.chaperone.facetSlug + "/refine/" +
                    view.chaperone.facetConfig.reassembleFacets(
                        view.pagelessQueryDict
                    ) +
                    "/in-depth/";
            } else if (isTagView) {
                listURL = "#!/" + view.chaperone.facetSlug + "/tags/";
            }

            return listURL;
        },
        generateBonusItemContext: function(view) {
            var isStateView, isTagView,
                pagelessQueryDict = _.clone(
                    view.chaperone.chaperone.view.listQueryDict
                ),
                contextObj = {};

            delete pagelessQueryDict.page;

            var isAllOrganizationsView = _.isEmpty(pagelessQueryDict);

            if (!isAllOrganizationsView) {
                isOrganizationView = _.has(pagelessQueryDict, 'organization');
                isTagView = _.has(pagelessQueryDict, 'issue');
            }

            if (isAllOrganizationsView) {
                contextObj.itemToOpen = "list of organizations";
            } else if (isOrganizationView) {
                contextObj.itemToOpen = "list of shows";
            } else if (isTagView) {
                contextObj.itemToOpen = "list of all issues";
            }

            return contextObj;
        },
        renderVisualization: function(view, callbackFunction) {
            var statsURL,
                viewType = "all",
                query = view.chaperone.view.listQueryDict,
                organizationMatches;

            if (_.has(query, 'organization')) {
                var organizationCandidate = query.organization.toLowerCase();

                // Here's where we'd verify organization slugs if we
                // chose to.
                viewType = organizationCandidate;
            }

            if (debug) {
                statsURL = view.facetConfig.baseURL +
                                "media-appearances/" +
                                "visualizations/" +
                                viewType.toLowerCase() + "/";
            } else {
                statsURL = view.facetConfig.baseURL +
                                "media-appearances/" +
                                "visualizations/" +
                                viewType.toLowerCase() + "/" +
                                "?spaceless=true";
            }

            $.ajax({
                url: statsURL,
                dataType: "jsonp",
                // jsonpCallback: "loadStats",
                type: "GET",
                jsonp: "callback",
                contentType: "application/json",
                success: function(data) {
                    if (typeof callbackFunction != "undefined") {
                        if (callbackFunction !== null) {
                            callbackFunction(data);
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // TODO: Capture error and send to Sentry.
                }
            });
        },
        visualizationDataMap: {
            "currentMode": "currentView",
            "frequencyCounts": "appearanceCounts"
        },
        generateVisualizationContext: function(view) {
            return {
                viewType: view.currentMode,
                frequencies: view.frequencyCounts
            };
        },
        visualizationPostRenderHooks: function(view) {
            // var tierMaxes = [0, 5, 10];

            // if (view.currentMode == "US") {
            //     _.each(view.frequencyCounts, function(location) {
            //         view.facetConfig.classifyState(
            //             view.$el.find(".stately"),
            //             location.stateAbbrev,
            //             tierMaxes,
            //             location.frequency
            //         );
            //     });
            // }

            // resizeChoropleth();
        },
        detailPostRenderHooks: function(view) {}
    },
    'campaign-finance': {
        // parseTagArchiveFacets: function(view, facetsCandidate) {},
        // enhanceTagArchiveHeader: function(view) {},
        // tagArchiveHeaderPlaceholder: "",
        // tagArchiveClass: "",
        // renderRightNav: function(listView) {},
        // generateListRightNav: function(view) {},
        baseURL: "http://aukofer.dhb.io/api/v3/",
        parseListViewFacets: function(view, facetsCandidate) {
            var facetsFinalized = {};

            if (_.has(facetsCandidate, 'page')) {
                var pageCandidate = parseInt(
                    facetsCandidate.page,
                    10
                );

                if (isInteger(pageCandidate)) {
                    facetsFinalized['page'] = pageCandidate;
                }
            }

            return facetsFinalized;
        },
        reassembleFacets: function(queryDict) {
            var facetList = [],
                facetFormatted;

            _.each(queryDict, function(value, key) {
                if (key == "page") {
                    facetList.push(key + '=' + value);
                } else {
                    facetList.push(key + '=' +
                                value.toLowerCase());
                }
            });

            facetFormatted = facetList.join(",");

            return facetFormatted;
        },
        storeListResponseData: function(view, dataObject) {
            view.collectionData = dataObject.aggregates;

            view.dataStartDate = dataObject.startDate;
            view.dataEndDate = dataObject.endDate;

            view.verboseTagName = dataObject.tagName;

            view.paginationData = dataObject.pagination;
        },
        generateListItemContext: function(view, row) {
            row.dataStartDate = view.dataStartDate;
            row.dataEndDate = view.dataEndDate;

            return row;
        },
        listHasRightNav: false,
        enhanceHeader: function(view) {
            return "";
        },
        callbacks: {
            list: "loadStateDonationTotals",
            detail: "loadStateSummary"
        },
        listHolderID: "finances",
        listHeaderBase: "Donations to Walker&rsquo;s state committee",
        listClass: "donation-list",
        itemClasses: {
            detail: "donation",
            advertisement: "ad",
            // tagArchiveItem: "tag",
            // tagAdvertisement: "ad",
            placeholder: "placeholder"
        },
        generateDetailViewContext: function(data, initialContext) {
            var context = _.clone(initialContext);

            context.rowData = data.stateData;
            context.dataStartDate = data.startDate;
            context.dataEndDate = data.endDate;

            return context;
        },
        generateBonusItemClass: function(view) {
            var itemClass = "map";

            return itemClass;
        },
        generateBonusItemURL: function(view) {
            var listURL = "#!/" + view.chaperone.facetSlug + "/in-depth/";

            return listURL;
        },
        generateBonusItemContext: function(view) {
            var contextObj = {};

            contextObj.itemToOpen = "state-by-state map";

            return contextObj;
        },
        renderVisualization: function(view, callbackFunction) {
            var statsURL = view.facetConfig.baseURL + "campaign-finance/" +
                                "visualizations/us/";

            if (!debug) {
                statsURL = statsURL + "?spaceless=true";
            }

            $.ajax({
                url: statsURL,
                dataType: "jsonp",
                // jsonpCallback: "loadStats",
                type: "GET",
                jsonp: "callback",
                contentType: "application/json",
                success: function(data) {
                    if (typeof callbackFunction != "undefined") {
                        if (callbackFunction !== null) {
                            callbackFunction(data);
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // TODO: Capture error and send to Sentry.
                }
            });
        },
        visualizationDataMap: {
            "currentMode": "currentArea",
            "frequencyCounts": "locationCounts"
        },
        generateVisualizationContext: function(view) {
            var jenksCount = 5,
                legendFormatted,
                maxes = jenks(
                    _.pluck(view.frequencyCounts, 'total'),
                    jenksCount
                ).splice(1, (jenksCount - 1));

            legendFormatted = {
                one: formatCurrency(0, 0) +
                    "&thinsp;&ndash;&thinsp;" + formatCurrency(maxes[0], 0),
                two: formatCurrency(maxes[0], 0) +
                    "&thinsp;&ndash;&thinsp;" + formatCurrency(maxes[1], 0),
                three: formatCurrency(maxes[1], 0) +
                    "&thinsp;&ndash;&thinsp;" + formatCurrency(maxes[2], 0),
                four: formatCurrency(maxes[2], 0) +
                    "&thinsp;&ndash;&thinsp;" + formatCurrency(maxes[3], 0),
                five: "&gt;&nbsp;" + formatCurrency(maxes[2], 0)
            };

            view.tierMaxes = maxes;

            return {
                viewMode: view.currentMode,
                legend: legendFormatted,
                frequencies: view.frequencyCounts
            };
        },
        visualizationPostRenderHooks: function(view) {
            if (view.currentMode == "US") {
                _.each(view.frequencyCounts, function(location) {
                    view.facetConfig.classifyState(
                        view.$el.find(".stately"),
                        location.statePostal,
                        view.tierMaxes,
                        location.total
                    );
                });
            }

            resizeChoropleth();
        },
        classifyState: function(element, areaAbbrev, tierMaxes, sortAttr) {
            if (sortAttr > tierMaxes[3]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-five");
                eee = element;
            } else if (sortAttr > tierMaxes[2]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-four");
            } else if (sortAttr > tierMaxes[1]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-three");
            } else if (sortAttr > tierMaxes[0]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-two");
            } else {
                element.find("." + areaAbbrev)
                            .addClass("tier-one");
            }
        },
        detailPostRenderHooks: function(view) {
            if (typeof view.rowContext != "undefined") {
                $.ajax({
                    url: view.rowContext.rowData.queryURL,
                    dataType: "jsonp",
                    // jsonpCallback: "loadStats",
                    type: "GET",
                    jsonp: "callback",
                    contentType: "application/json",
                    success: function(data) {
                        var tableBody = view.$el.find(
                            "#largest-donations tbody"
                        );

                        _.each(data.results.slice(0,10), function(row) {
                            var nextRowHTML = renderTemplate(
                                view.facetSlug,
                                "donorTableRow",
                                row
                            );
                            tableBody.append(nextRowHTML);
                        });

                        view.$el.find(".obbes-lower-link a").html(
                            "Explore all donations from " +
                            view.rowContext.rowData.stateNameFull +
                            "&nbsp;&raquo;"
                        );
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        // TODO: Capture error and send to Sentry.
                    }
                });
            }
        }
    },
    'travel': {
        baseURL: "http://aukofer.dhb.io/api/v3/",
        queryAreas: [{a:"US",fn:"Entire U.S."},{a:"AL",fn:"Alabama"},{a:"AK",fn:"Alaska"},{a:"AZ",fn:"Arizona"},{a:"AR",fn:"Arkansas"},{a:"CA",fn:"California"},{a:"CO",fn:"Colorado"},{a:"CT",fn:"Connecticut"},{a:"DE",fn:"Delaware"},{a:"DC",fn:"D.C."},{a:"FL",fn:"Florida"},{a:"GA",fn:"Georgia"},{a:"HI",fn:"Hawaii"},{a:"ID",fn:"Idaho"},{a:"IL",fn:"Illinois"},{a:"IN",fn:"Indiana"},{a:"IA",fn:"Iowa"},{a:"KS",fn:"Kansas"},{a:"KY",fn:"Kentucky"},{a:"LA",fn:"Louisiana"},{a:"ME",fn:"Maine"},{a:"MD",fn:"Maryland"},{a:"MA",fn:"Massachusetts"},{a:"MI",fn:"Michigan"},{a:"MN",fn:"Minnesota"},{a:"MS",fn:"Mississippi"},{a:"MO",fn:"Missouri"},{a:"MT",fn:"Montana"},{a:"NE",fn:"Nebraska"},{a:"NV",fn:"Nevada"},{a:"NH",fn:"New Hampshire"},{a:"NJ",fn:"New Jersey"},{a:"NM",fn:"New Mexico"},{a:"NY",fn:"New York"},{a:"NC",fn:"North Carolina"},{a:"ND",fn:"North Dakota"},{a:"OH",fn:"Ohio"},{a:"OK",fn:"Oklahoma"},{a:"OR",fn:"Oregon"},{a:"PA",fn:"Pennsylvania"},{a:"RI",fn:"Rhode Island"},{a:"SC",fn:"South Carolina"},{a:"SD",fn:"South Dakota"},{a:"TN",fn:"Tennessee"},{a:"TX",fn:"Texas"},{a:"UT",fn:"Utah"},{a:"VT",fn:"Vermont"},{a:"VA",fn:"Virginia"},{a:"WA",fn:"Washington"},{a:"WV",fn:"West Virginia"},{a:"WY",fn:"Wyoming"}],
        parseListViewFacets: function(view, facetsCandidate) {
            var facetsFinalized = {};

            if (_.has(facetsCandidate, 'area')) {
                var areaCandidate = facetsCandidate.area
                                                    .toUpperCase();

                var stateAbbreviations = _.pluck(
                    view.facetConfig.queryAreas,
                    'a'
                );

                if (_.contains(
                            stateAbbreviations,
                            areaCandidate
                        )) {
                    if (areaCandidate != "US") {
                        facetsFinalized['area'] = areaCandidate;
                    }
                }
            }

            if (_.has(facetsCandidate, 'issue')) {
                facetsFinalized['issue'] = facetsCandidate.issue;
            }

            if (_.has(facetsCandidate, 'page')) {
                var pageCandidate = parseInt(
                    facetsCandidate.page,
                    10
                );

                if (isInteger(pageCandidate)) {
                    facetsFinalized['page'] = pageCandidate;
                }
            }

            return facetsFinalized;
        },
        parseTagArchiveFacets: function(view, facetsCandidate) {
            var facetsFinalized = {};

            if (_.has(facetsCandidate, 'page')) {
                var pageCandidate = parseInt(
                    facetsCandidate.page,
                    10
                );

                if (isInteger(pageCandidate)) {
                    facetsFinalized['page'] = pageCandidate;
                }
            }

            return facetsFinalized;
        },
        reassembleFacets: function(queryDict) {
            var facetList = [],
                facetFormatted;

            _.each(queryDict, function(value, key) {
                if (key == "page") {
                    facetList.push(key + '=' + value);
                } else {
                    facetList.push(key + '=' +
                                value.toLowerCase());
                }
            });

            facetFormatted = facetList.join(",");

            return facetFormatted;
        },
        storeListResponseData: function(view, dataObject) {
            view.collectionData = dataObject.events;

            view.verboseTagName = dataObject.tagName;

            view.paginationData = dataObject.pagination;
        },
        generateListItemContext: function(view, row) {
            return row;
        },
        listHasRightNav: true,
        renderRightNav: function(view) {
            var activeArea,
                rightNavElements = [],
                filterByArea = {
                    title: "Filter by area",
                    items: [],
                    order: 1
                };

            rightNavElements.push({
                title: "Filter by issue",
                items: [
                    {
                        anchorClass: "tags-trigger",
                        anchorLink: "#!/" + view.facetSlug + "/tags/",
                        spanClass: "ss-icon ss-tag",
                        value: "Issues &raquo;"
                    }
                ],
                order: 0
            });

            if (_.has(view.queryDict, 'area')) {
                activeArea = view.queryDict.area;
            } else {
                activeArea = "US";
            }

            _.each(view.facetConfig.queryAreas, function(area) {
                var anchorClass = "area-trigger",
                    queryDict = _.clone(view.queryDict);

                queryDict.area = area.a;

                delete queryDict.page;

                var facetFormatted = view.facetConfig
                                            .reassembleFacets(
                                                queryDict
                                            ),
                    anchorLink;

                if (area.a == "US") {
                    anchorLink = "#!/" + view.facetSlug + "/";
                } else {
                    anchorLink = "#!/" + view.facetSlug +
                                 "/refine/" + facetFormatted + "/";
                }

                if (activeArea == area.a) {
                    anchorClass += " active";
                }

                filterByArea.items.push({
                    anchorClass: anchorClass,
                    anchorLink: anchorLink,
                    spanClass: "stateface stateface-" +
                                    area.a.toLowerCase(),
                    value: area.fn
                });
            });

            rightNavElements.push(filterByArea);

            view.chaperone.view.rightMenu.setListElements(
                rightNavElements
            );
        },
        enhanceHeader: function(view) {
            var headerText = "nationwide";

            if (_.has(view.queryDict, 'area')) {
                var matchingState;

                if (view.queryDict.area == "DC") {
                    matchingState = "Washington, D.C.";
                } else {
                    matchingState = _.findWhere(
                        view.facetConfig.queryAreas,
                        {
                            a: view.queryDict.area
                        }
                    ).fn;
                }

                headerText = "in " + matchingState;
            } else if (_.has(view.queryDict, 'issue')) {
                return 'mentioning "' + view.verboseTagName + '"';
            }

            return " " + headerText;
        },
        enhanceTagArchiveHeader: function(view) {
            var headerText = "Issues discussed";

            return headerText;
        },
        // callbacks: {},
        listHolderID: "events",
        listHeaderBase: "Visits",
        listClass: "visit-list",
        tagArchiveHeaderPlaceholder: "Issues discussed",
        tagArchiveClass: "visit-tags",
        itemClasses: {
            detail: "visit",
            advertisement: "ad",
            tagArchiveItem: "tag",
            tagAdvertisement: "ad",
            placeholder: "placeholder"
        },
        generateDetailViewContext: function(data, initialContext) {
            var context = _.clone(initialContext);

            context.rowData = data.event;

            return context;
        },
        generateBonusItemClass: function(view) {
            var itemClass, isStateView, isTagView,
                pagelessQueryDict = _.clone(
                    view.chaperone.chaperone.view.listQueryDict
                );

            delete pagelessQueryDict.page;

            var isNationalView = _.isEmpty(pagelessQueryDict);

            if (!isNationalView) {
                isStateView = _.has(pagelessQueryDict, 'area');
                isTagView = _.has(pagelessQueryDict, 'issue');
            }

            if (isNationalView) {
                itemClass = "map";
            } else if (isStateView) {
                itemClass = "state-list";
            } else if (isTagView) {
                itemClass = "tag-list";
            }

            return itemClass;
        },
        generateBonusItemURL: function(view) {
            var listURL, isStateView, isTagView,
                pagelessQueryDict = _.clone(
                    view.chaperone.chaperone.view.listQueryDict
                );

            delete pagelessQueryDict.page;

            var isNationalView = _.isEmpty(pagelessQueryDict);

            if (!isNationalView) {
                isStateView = _.has(pagelessQueryDict, 'area');
                isTagView = _.has(pagelessQueryDict, 'issue');
            }

            if (isNationalView) {
                listURL = "#!/" + view.chaperone.facetSlug + "/in-depth/";
            } else if (isStateView) {
                listURL = "#!/" + view.chaperone.facetSlug + "/refine/" +
                    view.chaperone.facetConfig.reassembleFacets(
                        view.pagelessQueryDict
                    ) +
                    "/in-depth/";
            } else if (isTagView) {
                listURL = "#!/" + view.chaperone.facetSlug + "/tags/";
            }

            return listURL;
        },
        generateBonusItemContext: function(view) {
            var isStateView, isTagView,
                pagelessQueryDict = _.clone(
                    view.chaperone.chaperone.view.listQueryDict
                ),
                contextObj = {};

            delete pagelessQueryDict.page;

            var isNationalView = _.isEmpty(pagelessQueryDict);

            if (!isNationalView) {
                isStateView = _.has(pagelessQueryDict, 'area');
                isTagView = _.has(pagelessQueryDict, 'issue');
            }

            if (isNationalView) {
                contextObj.itemToOpen = "state-by-state map";
            } else if (isStateView) {
                contextObj.itemToOpen = "city-by-city list";
            } else if (isTagView) {
                contextObj.itemToOpen = "list of all issues";
            }

            return contextObj;
        },
        renderVisualization: function(view, callbackFunction) {
            var statsURL,
                viewType = "US",
                query = view.chaperone.view.listQueryDict,
                areaMatches;

            if (_.has(query, 'area')) {
                var queryAreaCandidate = query.area.toUpperCase();

                areaMatches = _.where(
                            view.facetConfig.queryAreas,
                            {a: queryAreaCandidate}
                        );

                if (areaMatches.length > 0) {
                    viewType = areaMatches[0].a;
                }
            }

            if (debug) {
                statsURL = view.facetConfig.baseURL +
                                "events/" +
                                "visualizations/" +
                                viewType.toLowerCase() + "/";
            } else {
                statsURL = view.facetConfig.baseURL +
                                "events/" +
                                "visualizations/" +
                                viewType.toLowerCase() + "/" +
                                "?spaceless=true";
            }

            $.ajax({
                url: statsURL,
                dataType: "jsonp",
                // jsonpCallback: "loadStats",
                type: "GET",
                jsonp: "callback",
                contentType: "application/json",
                success: function(data) {
                    if (typeof callbackFunction != "undefined") {
                        if (callbackFunction !== null) {
                            callbackFunction(data);
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // TODO: Capture error and send to Sentry.
                }
            });
        },
        visualizationDataMap: {
            "currentMode": "currentArea",
            "frequencyCounts": "locationCounts"
        },
        generateVisualizationContext: function(view) {
            return {
                viewMode: view.currentMode,
                frequencies: view.frequencyCounts
            };
        },
        visualizationPostRenderHooks: function(view) {
            var tierMaxes = [0, 5, 10];

            if (view.currentMode == "US") {
                _.each(view.frequencyCounts, function(location) {
                    view.facetConfig.classifyState(
                        view.$el.find(".stately"),
                        location.stateAbbrev,
                        tierMaxes,
                        location.frequency
                    );
                });
            }

            resizeChoropleth();
        },
        detailPostRenderHooks: function(view) {},
        classifyState: function(element, areaAbbrev, tierMaxes, frequency) {
            if (frequency > tierMaxes[2]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-four");
            } else if (frequency > tierMaxes[1]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-three");
            } else if (frequency > tierMaxes[0]) {
                element.find("." + areaAbbrev)
                            .addClass("tier-two");
            } else {
                // element.find("." + areaAbbrev)
                //             .addClass("tier-one");
            }
        }
    }
};


var AppView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        self.currentViewLevel = -1;
        self.listQueryDict = {};
        self.tagArchiveQueryDict = {};

        if (typeof config != "undefined") {
            if (typeof config.currentViewLevel != "undefined") {
                self.currentViewLevel = config.currentViewLevel;
            }
        }

        self.navView = new NavView({
            chaperone: self
        });

        self.rightMenu = new OffCanvasMenuView({
            chaperone: self,
            side: "right"
        });

        self.contentViews = {
            0: {
                view: null,
                topClass: "homepage"
            },
            1: {
                view: null,
                topClass: "list-view"
            },
            2: {
                view: null,
                topClass: "detail-view"
            }
        };
    },

    setViewLevel: function(newLevel) {
        var self = this;

        self.currentViewLevel = newLevel;

        return self;
    },

    switchViewLevel: function(levelNumber) {
        var self = this,
            oldLevel = self.contentViews[self.currentViewLevel],
            newLevel = self.contentViews[levelNumber],
            oldClass = oldLevel.topClass + "-shown",
            newClass = newLevel.topClass + "-shown";

        $(".inner-wrap").removeClass(oldClass).addClass(newClass);

        newLevel.view.transitionAnimations(oldLevel);

        self.currentViewLevel = levelNumber;

        return self;
    },

    attachView: function(view, position) {
        var self = this;

        self.contentViews[position].view = view;

        return self;
    },

    removeView: function(position) {
        // NOTE: To prevent animation jitters (or more
        // serious issues), only call this after a view is
        // completely off-screen! (Hint: You can achieve
        // this with a setTimeout() function.)
        var self = this,
            viewToDelete = self.contentViews[position].view;

        // console.log("Removed " + position);

        // Remove all DOM objects, events and data related
        // to the view.
        deleteView(viewToDelete);

        // Then set contentViews[viewLevel].view to null.
        self.contentViews[position].view = null;

        return self;
    },

    render: function() {
        var self = this,
            viewSections = [],
            navView = self.navView;

        _.each(self.contentViews, function(v, k) {
            viewSections.push(v.topClass);
        });

        var htmlContents = renderTemplate(
            "general",
            "wrapper",
            {
                activeSection: self.contentViews[
                        self.currentViewLevel
                    ].topClass,
                sections: viewSections
            }
        );

        self.$el.html(htmlContents);

        navView.setElement($(".tab-bar")).render();

        self.rightMenu.setElement($(".right-off-canvas-menu"));

        _.each(self.contentViews, function(v, k) {
            if (typeof v.view != "undefined" && v.view !== null) {
                self.renderSection(v, null, null);
            }
        });

        reframeWindow();

        return self;
    },

    renderSection: function(section, previousView, newViewLevel) {
        var self = this;

        section.view.setElement($("." + section.topClass));

        section.view.render(previousView);

        section.view.bindEvents();

        if (typeof previousView != "undefined") {
            if (previousView === null) {
                section.view.transitionAnimations(null);
            }
        }

        if (newViewLevel !== null) {
            self.switchViewLevel(newViewLevel);
        }

        return self;
    }
});


var NavView = Backbone.View.extend({
    initialize: function() {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    generateAppTitle: function() {
        return "JS WalkerTracker";
    },

    render: function() {
        var self = this;

        var htmlContents = renderTemplate(
            "general",
            "nav",
            {
                appTitle: self.generateAppTitle()
            }
        );

        self.$el.html(htmlContents);

        return self;
    }
});


var OffCanvasMenuView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.side != "undefined") {
                self.side = config.side;
            }
        }
    },

    setListElements: function(elementDict) {
        var self = this;

        self.elementViews = [];

        _.each(elementDict, function(elementCategory) {
            var titleLabelView = new OCLabelItemView({
                chaperone: self,
                value: elementCategory.title
            });

            self.elementViews.push(titleLabelView);

            _.each(elementCategory.items, function(item) {
                var itemView = new OCMenuItemView({
                    chaperone: self,
                    valueDict: item
                });

                self.elementViews.push(itemView);
            });
        });

        return self;
    },

    render: function() {
        var self = this;

        var htmlContents = renderTemplate(
            "general",
            "offCanvasMenuBase",
            {}
        );

        self.$el.html(htmlContents);

        var navList = self.$el.find(".off-canvas-list");

        _.each(self.elementViews, function(view) {
            var htmlItem = $('<li></li>');
            navList.append(htmlItem);

            view.setElement(htmlItem);
            view.render();
            view.bindEvents();
        });

        self.$el.find('.menu-trigger').on('click', function() {
            $('.off-canvas-wrap').removeClass('move-left');
        });

        return self;
    }
});


var OCLabelItemView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.value != "undefined") {
                self.value = config.value;
            }
        }
    },

    render: function() {
        var self = this;

        var htmlContents = renderTemplate(
            "general",
            "offCanvasLabelItem",
            {
                value: self.value
            }
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this;

        return self;
    }
});


var OCMenuItemView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.valueDict != "undefined") {
                self.valueDict = config.valueDict;
            }
        }
    },

    render: function() {
        var self = this;

        var htmlContents = renderTemplate(
            "general",
            "offCanvasMenuItem",
            {
                anchorClass: self.valueDict.anchorClass,
                anchorLink: self.valueDict.anchorLink,
                spanClass: self.valueDict.spanClass,
                value: self.valueDict.value
            }
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this;

        return self;
    }
});


var HomepageView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }

        self.chaperone.view.listQueryDict = {};
        self.chaperone.view.tagArchiveQueryDict = {};
    },

    render: function(previousView) {
        var self = this,
            headlineListURL = "http://aukofer.dhb.io/api/v3/" +
                                "latest-articles-feed/";

        if (!debug) {
            headlineListURL += "?spaceless=true";
        }

        $.ajax({
            url: headlineListURL,
            dataType: "jsonp",
            type: "GET",
            jsonp: "callback",
            contentType: "application/json",
            success: function(data) {
                if (data.status[0] == "2") {
                    dd = data.articles;

                    var htmlContents = renderTemplate(
                        "general",
                        "homepage",
                        {
                            articles: data.articles
                        }
                    );

                    self.$el.html(htmlContents);

                    self.bindEvents();
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // TODO: Capture error and send to Sentry.
            }
        });
    },

    bindEvents: function() {
        var self = this;

        var triggers = self.$el.find(
            ".homepage-contents .section-triggers .trigger"
        );

        triggers.unbind();

        triggers.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        triggers.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        triggers.on('click', function(event) {
            event.stopPropagation();

            var facetSlug = $(this).attr('facet-slug');

            $(this).addClass('chosen');
            $(this).removeClass('tapped');

            self.chaperone.navigate("!/" + facetSlug + "/", true);

            return false;
        });

        return self;
    },

    transitionAnimations: function(previousView) {
        var self = this,
            navView = self.chaperone.view.navView,
            leftNav = navView.$el.find(".left-small"),
            rightNav = navView.$el.find(".right-small");

        if (typeof previousView == "undefined") {
            previousView = null;
        }

        if (leftNav.is(":visible")) {
            if (previousView !== null) {
                leftNav.fadeOut(450);
            } else {
                leftNav.hide();
            }
        }

        if (rightNav.is(":visible")) {
            if (previousView !== null) {
                rightNav.fadeOut(450);
            } else {
                rightNav.hide();
            }
        }

        if (previousView !== null) {
            var previousFacet = previousView.view.facetSlug;

            self.$el.find(".section-triggers .trigger")
                    .removeClass("chosen");
            self.$el.find(".section-triggers .trigger[facet-slug='" +
                                    previousFacet +
                            "']").addClass("chosen");

            setTimeout(function() {
                $(".section-triggers > .chosen").removeClass("chosen");
            }, 300);
        }

        if (previousView !== null) {
            // console.log("Animate ex " + previousView.topClass);
        } else {
            // console.log("Animate primum movens");
        }

        return self;
    }
});


var ListView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;

                self.setQueryDict({});
            } else {
                self.setQueryDict({});
            }

            if (typeof config.facetSlug != "undefined") {
                self.facetSlug = config.facetSlug;

                self.facetConfig = facetConfigs[self.facetSlug];
            }

            if (typeof config.queryDict != "undefined") {
                self.setQueryDict(config.queryDict);
            }

            if (typeof config.initialFacets != "undefined") {
                var facetList = config.initialFacets.split(','),
                    facetsCandidate = {};

                _.each(facetList, function(facet) {
                    var facetSplit = facet.split('=');

                    facetsCandidate[facetSplit[0]] = facetSplit[1];
                });

                var initialFacets = self.facetConfig
                                        .parseListViewFacets(
                                            self,
                                            facetsCandidate
                                        );

                if (_.isEmpty(initialFacets)) {
                    var noFacetsURL = "!/" + self.facetSlug + "/";
                    if (Backbone.history.fragment != noFacetsURL) {
                        self.chaperone.navigate(
                            noFacetsURL,
                            false
                        );
                    }
                } else {
                    self.setQueryDict(initialFacets);
                }
            }
        }

        self.listHeaderView = new ListHeaderView({
            chaperone: self
        });

        self.paginationView = new PaginationView({
            chaperone: self
        });
    },

    setQueryDict: function(newQueryDict) {
        var self = this,
            qd = {};

        if (typeof newQueryDict == "undefined" ||
                newQueryDict === null) {
            qd = {};
        } else {
            qd = newQueryDict;
        }

        self.queryDict = qd;
        self.chaperone.view.listQueryDict = qd;

        return self;
    },

    createURL: function() {
        var self = this;

        self.queryURL = generateURLs[self.facetSlug].list(self);

        return self;
    },

    fetchItems: function(callbackFunction) {
        var self = this,
            ajaxConfig = {
                url: self.queryURL,
                dataType: "jsonp",
                type: "GET",
                jsonp: "callback",
                contentType: "application/json",
                success: function(data) {
                    if (typeof callbackFunction != "undefined") {
                        if (callbackFunction !== null) {
                            callbackFunction(data);
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // TODO: Capture error and send to Sentry.
                }
            };

        if (_.has(self.facetConfig, "callbacks")) {
            if (_.has(self.facetConfig.callbacks, "list")) {
                ajaxConfig.jsonpCallback = self.facetConfig.callbacks.list;
            }
        }

        $.ajax(ajaxConfig);
    },

    populateListItems: function() {
        var self = this,
            adView,
            dataLength = self.collectionData.length;

        self.listItemViews = [];

        if (dataLength > 0) {
            _.each(self.collectionData, function(row) {
                var context = self.facetConfig.generateListItemContext(
                        self,
                        row
                    ),
                    listItem = new ListItemView({
                    chaperone: self,
                    data: context
                });

                self.listItemViews.push(listItem);
            });

            var bonusView = new ListBonusView({
                chaperone: self
            });

            if (dataLength >= 3) {
                adView = new AdView({
                    chaperone: self
                });
            }

            if (dataLength >= 8) {
                // Add visualization at position 4.
                self.listItemViews.splice(3, 0, bonusView);

                // Add ad at position 8.
                self.listItemViews.splice(7, 0, adView);
            } else if (dataLength >= 6) {
                // Add visualization at position 3.
                self.listItemViews.splice(2, 0, bonusView);

                // Add ad at position 6.
                self.listItemViews.splice(5, 0, adView);
            } else if (dataLength >= 3) {
                // Add visualization at position 2.
                self.listItemViews.splice(1, 0, bonusView);

                // Add ad at position 5.
                self.listItemViews.splice(4, 0, adView);
            } else {
                // Add visualization at position 2.
                self.listItemViews.splice(1, 0, bonusView);
            }
        } else {
            var noItemsView = new NoItemsView({
                chaperone: self
            });
            self.listItemViews.push(noItemsView);

            adView = new AdView({
                chaperone: self
            });
            self.listItemViews.push(adView);
        }

        return self;
    },

    buildList: function() {
        var self = this,
            fc = self.facetConfig,
            listDiv = self.$el.find("." + fc.listClass),
            listHeaderView = self.listHeaderView,
            paginationView = self.paginationView;

        self.createURL().fetchItems(function(data) {
            var headerH3 = self.$el.find("h3"),
                paginationElement = self.$el.find(".pagination"),
                adClass = fc.itemClasses.advertisement;

            if (data.status[0] == "2") {
                listDiv.empty();

                fc.storeListResponseData(self, data);

                if (_.has(self.facetConfig, 'listHasRightNav') &&
                    (self.facetConfig.listHasRightNav === true)) {
                        fc.renderRightNav(self);

                        self.chaperone.view.rightMenu.render();
                }

                listHeaderView.emptyElement()
                                    .setElement(headerH3)
                                    .render();

                self.populateListItems();

                _.each(self.listItemViews, function(itemView) {
                    var itemHolder = $(itemView.buildItemHolder());
                    listDiv.append(itemHolder);

                    itemView.setElement(itemHolder)
                            .render()
                            .bindEvents();
                });

                paginationView.emptyElement()
                                .setElement(paginationElement)
                                .render();
            } else {
                // Status handling TK.
            }
        });

        return self;
    },

    render: function(previousView) {
        var self = this,
            navView = self.chaperone.view.navView,
            fc = self.facetConfig;

        if (navView.$el.find(".left-small > *").length === 0) {
            // console.log("Placed back button.");

            navView.$el.find(".left-small").html(
                renderTemplate("general", "backButtonContents", {})
            );
        }

        if (navView.$el.find(".right-small > *").length === 0) {
            navView.$el.find(".right-small").html(
                renderTemplate("general", "menuButtonContents", {})
            );
        }

        navView.$el.find(".left-small .back-button").unbind();

        navView.$el.find(".right-small .menu-icon").unbind();

        var htmlContents = renderTemplate(
            "general",
            "list",
            {
                listHolderID: fc.listHolderID,
                listHeaderBase: fc.listHeaderBase,
                listClass: fc.listClass
            }
        );

        self.$el.html(htmlContents);

        if (_.has(self.queryDict, 'page')) {
            if (parseInt(self.queryDict.page, 10) == 1) {
                var pagelessQueryDict = _.clone(self.queryDict);
                delete pagelessQueryDict.page;

                if (_.isEmpty(pagelessQueryDict)) {
                    redirectURL = "!/" + self.facetSlug + "/";
                } else {
                    redirectURL = "!/" + self.facetSlug +
                        "/refine/" + self.facetConfig
                                        .reassembleFacets(
                                            pagelessQueryDict
                                        ) +
                        "/";
                }

                self.chaperone.navigate(redirectURL, false);
            }
        }

        self.buildList();

        return self;
    },

    bindEvents: function() {
        var self = this,
            navView = self.chaperone.view.navView;

        $(".exit-off-canvas").on('click', function(event) {
            event.stopPropagation();

            $(".off-canvas-wrap").removeClass("move-left");

            return false;
        });

        var backNav = navView.$el.find(".back-button"),
            menuNav = navView.$el.find(".menu-icon"),
            prevURL;

        backNav.unbind();
        menuNav.unbind();

        backNav.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });
        backNav.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });
        backNav.on('click', function(event) {
            event.stopPropagation();

            $(this).addClass('chosen');
            $(this).removeClass('tapped');

            if ((_.has(self.queryDict, 'page')) &&
                        (self.queryDict.page > 1)) {
                var pagelessQueryDict = _.clone(self.queryDict);
                delete pagelessQueryDict.page;

                pagelessQueryDict.page = self.queryDict.page - 1;

                prevURL = "!/" + self.facetSlug + "/refine/" +
                                    self.facetConfig
                                        .reassembleFacets(
                                            pagelessQueryDict
                                        ) +
                            "/";
            } else if ((!_.isEmpty(self.queryDict)) &&
                        (!_.has(self.queryDict, 'page'))) {
                if (!_.isEmpty(self.chaperone.view.tagArchiveQueryDict)) {
                    prevURL = "!/" + self.facetSlug + "/tags/" +
                            self.facetConfig.reassembleFacets(
                                    self.chaperone.view
                                        .tagArchiveQueryDict
                            ) + "/";
                } else {
                    prevURL = "!/" + self.facetSlug + "/";
                }
            } else {
                prevURL = "!/";
            }

            self.chaperone.navigate(prevURL, true);

            return false;
        });

        if (_.has(self.facetConfig, 'listHasRightNav') &&
                    (self.facetConfig.listHasRightNav === true)) {
            menuNav.on('touchstart', function(event) {
                $(this).addClass('tapped');
            });
            menuNav.on('touchend', function(event) {
                $(this).removeClass('tapped');
            });
            menuNav.on('click', function(event) {
                event.stopPropagation();

                reframeWindow();

                $(this).addClass('chosen');
                $(this).removeClass('tapped');

                $(".off-canvas-wrap").addClass("move-left");

                return false;
            });
        }

        return self;
    },

    transitionAnimations: function(previousView) {
        var self = this,
            navView = self.chaperone.view.navView,
            leftNav = navView.$el.find(".left-small"),
            rightNav = navView.$el.find(".right-small");

        if (typeof previousView == "undefined") {
            previousView = null;
        }

        if (!leftNav.is(":visible")) {
            if (previousView !== null) {
                leftNav.delay(200).fadeIn(450);
            } else {
                leftNav.show();
            }
        } else {
            if (previousView !== null) {
                leftNav.fadeOut(325);
                leftNav.fadeIn(325);
            }
        }

        if (_.has(self.facetConfig, 'listHasRightNav') &&
                    (self.facetConfig.listHasRightNav === true)) {
            if (!rightNav.is(":visible")) {
                if (previousView !== null) {
                    rightNav.delay(200).fadeIn(450);
                } else {
                    rightNav.show();
                }
            } else {
                if (previousView !== null) {
                    rightNav.fadeOut(325);
                    rightNav.fadeIn(325);
                }
            }
        } else {
            if (rightNav.is(":visible")) {
                if (previousView !== null) {
                    rightNav.fadeOut(450);
                } else {
                    rightNav.hide();
                }
            }
        }

        if (previousView !== null) {
            // console.log("Animate ex " + previousView.topClass);
        } else {
            // console.log("Animate primum movens");
        }

        return self;
    }
});


var PaginationView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    emptyElement: function() {
        var self = this;

        self.$el.empty();

        return self;
    },

    render: function() {
        var self = this,
            queryDict = _.clone(self.chaperone.queryDict),
            pagelessQueryDict = "";

        delete queryDict.page;

        if (!_.isEmpty(queryDict)) {
            pagelessQueryDict = self.chaperone.facetConfig
                                                .reassembleFacets(
                                                    queryDict
                                                ) + ",";
        }

        var htmlContents = renderTemplate(
            self.chaperone.facetSlug,
            "pagination",
            {
                facetSlug: self.chaperone.facetSlug,
                paginationData: self.chaperone.paginationData,
                pagelessQueryDict: pagelessQueryDict
            }
        );

        self.$el.html(htmlContents);

        return self;
    }
});


var VisualizationView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.facetSlug != "undefined") {
                self.facetSlug = config.facetSlug;

                self.facetConfig = facetConfigs[self.facetSlug];
            }

            if (typeof config.facets != "undefined") {
                var facetList = config.facets.split(','),
                    facetsCandidate = {};

                _.each(facetList, function(facet) {
                    var facetSplit = facet.split('=');

                    facetsCandidate[facetSplit[0]] = facetSplit[1];
                });

                var initialFacets = self.facetConfig
                                        .parseListViewFacets(
                                            self,
                                            facetsCandidate
                                        );

                if (_.isEmpty(initialFacets)) {
                    var noFacetsURL = "!/" + self.facetSlug + "/in-depth/";
                    if (Backbone.history.fragment != noFacetsURL) {
                        self.chaperone.navigate(
                            noFacetsURL,
                            false
                        );
                    }
                } else {
                    self.setQueryDict(initialFacets);
                }
            }
        }

        self.chaperone.view.tagArchiveQueryDict = {};

        self.isFacetlessView = _.isEmpty(
            self.chaperone.view.listQueryDict
        );
    },

    setQueryDict: function(newQueryDict) {
        var self = this,
            qd = {};

        if (typeof newQueryDict == "undefined" ||
                newQueryDict === null) {
            qd = {};
        } else {
            qd = newQueryDict;
        }

        self.queryDict = qd;
        self.chaperone.view.listQueryDict = qd;

        return self;
    },

    render: function() {
        var self = this,
            navView = self.chaperone.view.navView,
            fc = self.facetConfig,
            htmlContents;

        if (navView.$el.find(".left-small > *").length === 0) {
            // console.log("Placed back button.");

            navView.$el.find(".left-small").html(
                renderTemplate("general", "backButtonContents", {})
            );
        }

        navView.$el.find(".left-small .back-button").unbind();

        fc.renderVisualization(self, function(data) {
            if (data.status[0] == "2") {

                _.each(fc.visualizationDataMap, function(value, key) {
                    self[key] = data[value];
                });

                var values = fc.generateVisualizationContext(self);

                htmlContents = renderTemplate(
                    self.facetSlug,
                    "visualization",
                    values
                );
            }

            self.$el.html(htmlContents);

            fc.visualizationPostRenderHooks(self);

            self.bindEvents();
        });

        return self;
    },

    bindEvents: function() {
        var self = this,
            navView = self.chaperone.view.navView,
            listQuery = self.chaperone.view.listQueryDict,
            listURL;

        var backNav = navView.$el.find(".back-button"),
            appTrigger = $(".about-app-trigger");

        appTrigger.unbind();

        appTrigger.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        appTrigger.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        appTrigger.on('click', function(event) {
            event.stopPropagation();

            $(this).removeClass('tapped');

            if ($(this).parent().hasClass("active")) {
                $(this).parent().removeClass("active");

                $(this).next().slideUp(650);
            } else {
                $(this).parent().addClass("active");

                $(this).next().slideDown(650);
            }
        });

        backNav.unbind();

        backNav.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        backNav.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        backNav.on('click', function(event) {
            event.stopPropagation();

            $(this).addClass('chosen');
            $(this).removeClass('tapped');

            if (self.isFacetlessView) {
                listURL = "!/" + self.facetSlug + "/";
            } else {
                listURL = "!/" + self.facetSlug +
                        "/refine/" +
                        self.facetConfig.reassembleFacets(
                            listQuery
                        ) + "/";
            }

            self.chaperone.navigate(
                listURL,
                true
            );

            return false;
        });

        return self;
    },

    transitionAnimations: function(previousView) {
        var self = this,
            navView = self.chaperone.view.navView,
            leftNav = navView.$el.find(".left-small"),
            rightNav = navView.$el.find(".right-small");

        if (typeof previousView == "undefined") {
            previousView = null;
        }

        if (!leftNav.is(":visible")) {
            if (previousView !== null) {
                leftNav.delay(200).fadeIn(450);
            } else {
                leftNav.show();
            }
        } else {
            if (previousView !== null) {
                leftNav.fadeOut(325);
                leftNav.fadeIn(325);
            }
        }

        if (rightNav.is(":visible")) {
            if (previousView !== null) {
                rightNav.fadeOut(450);
            } else {
                rightNav.hide();
            }
        }

        if (previousView !== null) {
            // console.log("Animate ex " + previousView.topClass);
        } else {
            // console.log("Animate primum movens");
        }

        return self;
    }
});

var DetailView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.facetSlug != "undefined") {
                self.facetSlug = config.facetSlug;

                self.facetConfig = facetConfigs[self.facetSlug];
            }

            if (typeof config.dataID != "undefined") {
                self.dataID = config.dataID;
            }
        }

        self.isFacetlessView = _.isEmpty(
                                self.chaperone.view
                                            .listQueryDict
                            );
    },

    createURL: function() {
        var self = this;

        self.queryURL = generateURLs[self.facetSlug].detail(self);

        return self;
    },

    fetchItem: function(callbackFunction) {
        var self = this,
            ajaxConfig = {
                url: self.queryURL,
                dataType: "jsonp",
                // jsonpCallback: self.facetConfig.callbacks.detail,
                type: "GET",
                jsonp: "callback",
                contentType: "application/json",
                success: function(data) {
                    if (typeof callbackFunction != "undefined") {
                        if (callbackFunction !== null) {
                            callbackFunction(data);
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // TODO: Capture error and send to Sentry.
                }
            };

        if (_.has(self.facetConfig, "callbacks")) {
            if (_.has(self.facetConfig.callbacks, "detail")) {
                ajaxConfig.jsonpCallback = self.facetConfig.callbacks.detail;
            }
        }

        $.ajax(ajaxConfig);
    },

    render: function() {
        var self = this,
            navView = self.chaperone.view.navView,
            fc = self.facetConfig;

        if (navView.$el.find(".left-small > *").length === 0) {
            // console.log("Placed back button.");

            navView.$el.find(".left-small").html(
                renderTemplate("general", "backButtonContents", {})
            );
        }

        navView.$el.find(".left-small .back-button").unbind();

        self.createURL().fetchItem(function(data) {
            var htmlContents = "";

            if (data.status[0] == "2") {
                self.rowContext = fc.generateDetailViewContext(
                    data,
                    {
                        facetSlug: self.facetSlug
                    }
                );

                htmlContents = renderTemplate(
                    self.facetSlug,
                    "detail",
                    self.rowContext
                );
            } else {
                // Status handling TK.
            }

            self.$el.html(htmlContents);

            self.postRender().bindEvents();
        });

        return self;
    },

    postRender: function() {
        var self = this,
            fc = self.facetConfig;

        fc.detailPostRenderHooks(self);

        return self;
    },

    bindEvents: function(callbackFunction) {
        var self = this,
            navView = self.chaperone.view.navView,
            listQuery = self.chaperone.view.listQueryDict,
            listURL;

        var backNav = navView.$el.find(".back-button"),
            appTrigger = $(".about-app-trigger");

        appTrigger.unbind();

        appTrigger.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        appTrigger.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        appTrigger.on('click', function(event) {
            event.stopPropagation();

            $(this).removeClass('tapped');

            if ($(this).parent().hasClass("active")) {
                $(this).parent().removeClass("active");

                $(this).next().slideUp(650);
            } else {
                $(this).parent().addClass("active");

                $(this).next().slideDown(650);
            }
        });

        backNav.unbind();

        backNav.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        backNav.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        backNav.on('click', function(event) {
            event.stopPropagation();

            $(this).addClass('chosen');
            $(this).removeClass('tapped');

            if (self.isFacetlessView) {
                listURL = "!/" + self.facetSlug + "/";
            } else {
                listURL = "!/" + self.facetSlug +
                        "/refine/" +
                        self.facetConfig.reassembleFacets(
                            listQuery
                        ) + "/";
            }

            self.chaperone.navigate(
                listURL,
                true
            );

            return false;
        });

        return self;
    },

    transitionAnimations: function(previousView) {
        var self = this,
            navView = self.chaperone.view.navView,
            leftNav = navView.$el.find(".left-small"),
            rightNav = navView.$el.find(".right-small");

        if (typeof previousView == "undefined") {
            previousView = null;
        }

        if (!leftNav.is(":visible")) {
            if (previousView !== null) {
                leftNav.delay(200).fadeIn(450);
            } else {
                leftNav.show();
            }
        } else {
            if (previousView !== null) {
                leftNav.fadeOut(325);
                leftNav.fadeIn(325);
            }
        }

        if (rightNav.is(":visible")) {
            if (previousView !== null) {
                rightNav.fadeOut(450);
            } else {
                rightNav.hide();
            }
        }

        if (previousView !== null) {
            // console.log("Animate ex " + previousView.topClass);
        } else {
            // console.log("Animate primum movens");
        }

        return self;
    }
});

var ListHeaderView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    emptyElement: function() {
        var self = this;

        self.$el.empty();

        return self;
    },

    render: function() {
        var self = this,
            fc = self.chaperone.facetConfig;

        var htmlContents = renderTemplate(
            self.chaperone.facetSlug,
            "listHeader",
            {
                baseDisplay: fc.listHeaderBase,
                enhancedDisplay: fc.enhanceHeader(self.chaperone),
                currentPage: self.chaperone.paginationData.currentPage,
                totalPages: self.chaperone.paginationData.totalPages
            }
        );

        self.$el.html(htmlContents);

        return self;
    }
});

var ListItemView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.data != "undefined") {
                self.data = config.data;
            }
        }
    },

    buildItemHolder: function() {
        var self = this,
            itemClass = self.chaperone.facetConfig
                                        .itemClasses.detail;

        return '<li class="' + itemClass + '" data-id="' +
                                self.data.id + '"></li>';
    },

    render: function() {
        var self = this;

        var htmlContents = renderTemplate(
            self.chaperone.facetSlug,
            "listItem",
            {
                rowData: self.data,
                facetSlug: self.chaperone.facetSlug
            }
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this;

        self.$el.unbind();

        self.$el.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        self.$el.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        return self;
    }
});


var NoItemsView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    buildItemHolder: function() {
        var self = this,
            itemClass = self.chaperone.facetConfig
                                        .itemClasses
                                        .placeholder;

        return '<li class="' + itemClass + '"></li>';
    },

    render: function() {
        var self = this,
            facetConfig = self.chaperone.facetConfig;

        var htmlContents = renderTemplate(
            self.chaperone.facetSlug,
            "placeholderItem",
            {}
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this;

        return self;
    }
});


var AdView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    buildItemHolder: function() {
        var self = this,
            itemClass = self.chaperone.facetConfig
                                        .itemClasses.advertisement;

        return '<li class="' + itemClass + '"></li>';
    },

    render: function() {
        var self = this,
            facetConfig = self.chaperone.facetConfig;

        var htmlContents = renderTemplate(
            self.chaperone.facetSlug,
            "adItem",
            {
                cbValue: Date.now()
            }
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this;

        return self;
    }
});


var ListBonusView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }

        self.pagelessQueryDict = _.clone(self.chaperone.queryDict);
        delete self.pagelessQueryDict.page;
    },

    buildItemHolder: function() {
        var self = this,
            fc = self.chaperone.facetConfig,
            itemClass = fc.generateBonusItemClass(self);

        return '<li class="bonus-item ' + itemClass + '"></li>';
    },

    render: function() {
        var self = this,
            fc = self.chaperone.facetConfig,
            facetSlug = self.chaperone.facetSlug,
            listURL,
            context = fc.generateBonusItemContext(self);

        context.itemURL = fc.generateBonusItemURL(self);

        var htmlContents = renderTemplate(
            self.chaperone.facetSlug,
            "bonusItem",
            context
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this,
            fc = self.chaperone.facetConfig,
            facetSlug = self.chaperone.facetSlug;

        self.$el.unbind();

        self.$el.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });

        self.$el.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });

        return self;
    }
});


var TagArchiveView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;

                self.setQueryDict({});
            } else {
                self.setQueryDict({});
            }

            if (typeof config.facetSlug != "undefined") {
                self.facetSlug = config.facetSlug;

                self.facetConfig = facetConfigs[self.facetSlug];
            }

            if (typeof config.queryDict != "undefined") {
                self.setQueryDict(config.queryDict);
            }

            if (typeof config.initialFacets != "undefined") {
                var facetList = config.initialFacets.split(','),
                    facetsCandidate = {};

                _.each(facetList, function(facet) {
                    var facetSplit = facet.split('=');

                    facetsCandidate[facetSplit[0]] = facetSplit[1];
                });

                var initialFacets = self.facetConfig
                                        .parseTagArchiveFacets(
                                            self,
                                            facetsCandidate
                                        );

                if (_.isEmpty(initialFacets)) {
                    var noFacetsURL = "!/" + self.facetSlug + "/";
                    if (Backbone.history.fragment != noFacetsURL) {
                        self.chaperone.navigate(
                            noFacetsURL,
                            false
                        );
                    }
                } else {
                    self.setQueryDict(initialFacets);
                }
            }
        }

        self.listHeaderView = new TagArchiveHeaderView({
            chaperone: self
        });

        self.isFacetlessView = _.isEmpty(
            self.chaperone.view.tagArchiveQueryDict
        );

        self.paginationView = new TagPaginationView({
            chaperone: self
        });
    },

    setQueryDict: function(newQueryDict) {
        var self = this,
            qd = {};

        if (typeof newQueryDict == "undefined" ||
                newQueryDict === null) {
            qd = {};
        } else {
            qd = newQueryDict;
        }

        self.queryDict = qd;
        self.chaperone.view.tagArchiveQueryDict = qd;

        return self;
    },

    createURL: function() {
        var self = this;

        self.queryURL = generateURLs[self.facetSlug]
                            .tagArchive(self);

        return self;
    },

    fetchItems: function(callbackFunction) {
        var self = this;

        $.ajax({
            url: self.queryURL,
            dataType: "jsonp",
            // jsonpCallback: self.facetConfig.callbacks.tagArchive,
            type: "GET",
            jsonp: "callback",
            contentType: "application/json",
            success: function(data) {
                if (typeof callbackFunction != "undefined") {
                    if (callbackFunction !== null) {
                        callbackFunction(data);
                    }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // TODO: Capture error and send to Sentry.
            }
        });
    },

    populateListItems: function() {
        var self = this,
            adView,
            dataLength = self.collectionData.length;

        self.listItemViews = [];

        if (dataLength > 0) {
            _.each(self.collectionData, function(row) {
                var listItem = new TagArchiveItemView({
                    chaperone: self,
                    data: row
                });

                self.listItemViews.push(listItem);
            });

            if (dataLength >= 3) {
                adView = new AdView({
                    chaperone: self
                });
            }

            if (dataLength >= 3) {
                // Add visualization at position 2.
                self.listItemViews.splice(2, 0, adView);
            } else {
                // Add visualization at position 1.
                self.listItemViews.splice(1, 0, adView);
            }
        } else {
            var noTagItemsView = new NoTagItemsView({
                chaperone: self
            });
            self.listItemViews.push(noTagItemsView);

            adView = new AdView({
                chaperone: self
            });
            self.listItemViews.push(adView);
        }

        return self;
    },

    buildList: function() {
        var self = this,
            fc = self.facetConfig,
            listDiv = self.$el.find("." + fc.tagArchiveClass),
            listHeaderView = self.listHeaderView,
            paginationView = self.paginationView;

        self.createURL().fetchItems(function (data) {
            var headerH3 = self.$el.find("h3"),
                paginationElement = self.$el.find(".pagination"),
                adClass = fc.itemClasses.tagAdvertisement;

            if (data.status[0] == "2") {
                listDiv.empty();

                self.collectionData = data.tags;

                self.paginationData = data.pagination;

                listHeaderView.emptyElement()
                                .setElement(headerH3)
                                .render();

                self.populateListItems();

                _.each(self.listItemViews, function(itemView) {
                    var itemHolder = $(itemView.buildItemHolder());
                    listDiv.append(itemHolder);

                    itemView.setElement(itemHolder).render();
                });

                paginationView.emptyElement()
                                .setElement(paginationElement)
                                .render();
            } else {
                // Status handling TK.
            }
        });

        return self;
    },

    render: function() {
        var self = this,
            navView = self.chaperone.view.navView;
            fc = self.facetConfig;

        if (navView.$el.find(".left-small > *").length === 0) {
            // console.log("Placed back button.");

            navView.$el.find(".left-small").html(
                renderTemplate("general", "backButtonContents", {})
            );
        }

        if (navView.$el.find(".right-small > *").length === 0) {
            navView.$el.find(".right-small").html(
                renderTemplate("general", "menuButtonContents", {})
            );
        }

        navView.$el.find(".left-small .back-button").unbind();

        navView.$el.find(".right-small .menu-icon").unbind();

        var htmlContents = renderTemplate(
            "general",
            "tagArchive",
            {
                listHolderID: fc.listHolderID,
                tagArchiveHeaderPlaceholder: fc.tagArchiveHeaderPlaceholder,
                tagArchiveClass: fc.tagArchiveClass
            }
        );

        self.$el.html(htmlContents);

        if (_.has(self.queryDict, 'page')) {
            if (parseInt(self.queryDict.page, 10) == 1) {
                var pagelessQueryDict = _.clone(self.queryDict);
                delete pagelessQueryDict.page;

                if (_.isEmpty(pagelessQueryDict)) {
                    redirectURL = "!/" + self.facetSlug + "/tags/";
                } else {
                    redirectURL = "!/" + self.facetSlug +
                        "/tags/" + self.facetConfig
                                        .reassembleFacets(
                                            pagelessQueryDict
                                        ) +
                        "/";
                }

                self.chaperone.navigate(redirectURL, false);
            }
        }

        self.buildList();

        return self;
    },

    bindEvents: function() {
        var self = this,
            navView = self.chaperone.view.navView,
            prevURL,
            backNav = navView.$el.find(".back-button");

        backNav.unbind();

        backNav.on('touchstart', function(event) {
            $(this).addClass('tapped');
        });
        backNav.on('touchend', function(event) {
            $(this).removeClass('tapped');
        });
        backNav.on('click', function(event) {
            event.stopPropagation();

            $(this).addClass('chosen');
            $(this).removeClass('tapped');

            if ((_.has(self.queryDict, 'page')) &&
                        (self.queryDict.page > 1)) {
                var pagelessQueryDict = _.clone(self.queryDict);
                delete pagelessQueryDict.page;

                pagelessQueryDict.page = self.queryDict.page - 1;

                prevURL = "!/" + self.facetSlug + "/tags/" +
                                    self.facetConfig
                                        .reassembleFacets(
                                            pagelessQueryDict
                                        ) +
                            "/";
            } else if ((!_.isEmpty(self.queryDict)) &&
                        (!_.has(self.queryDict, 'page'))) {
                prevURL = "!/" + self.facetSlug + "/tags/";
            } else {
                prevURL = "!/" + self.facetSlug + "/";
            }

            self.chaperone.navigate(prevURL, true);

            return false;
        });

        return self;
    },

    transitionAnimations: function(previousView) {
        var self = this,
            navView = self.chaperone.view.navView,
            leftNav = navView.$el.find(".left-small"),
            rightNav = navView.$el.find(".right-small");

        if (typeof previousView == "undefined") {
            previousView = null;
        }

        if (!leftNav.is(":visible")) {
            if (previousView !== null) {
                leftNav.delay(200).fadeIn(450);
            } else {
                leftNav.show();
            }
        } else {
            if (previousView !== null) {
                leftNav.fadeOut(325);
                leftNav.fadeIn(325);
            }
        }

        if (rightNav.is(":visible")) {
            if (previousView !== null) {
                rightNav.fadeOut(450);
            } else {
                rightNav.hide();
            }
        }

        if (previousView !== null) {
            // console.log("Animate ex " + previousView.topClass);
        } else {
            // console.log("Animate primum movens");
        }

        return self;
    }
});


var TagArchiveHeaderView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    emptyElement: function() {
        var self = this;

        self.$el.empty();

        return self;
    },

    render: function() {
        var self = this,
            fc = self.chaperone.facetConfig;

        var htmlContents = renderTemplate(
            self.chaperone.facetSlug,
            "tagArchiveHeader",
            {
                baseDisplay: fc.listHeaderBase,
                enhancedDisplay: fc.enhanceTagArchiveHeader(
                    self.chaperone
                )
            }
        );

        self.$el.html(htmlContents);

        return self;
    }
});


var TagPaginationView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    emptyElement: function() {
        var self = this;

        self.$el.empty();

        return self;
    },

    render: function() {
        var self = this,
            queryDict = _.clone(self.chaperone.queryDict),
            pagelessQueryDict = "";

        delete queryDict.page;

        if (!_.isEmpty(queryDict)) {
            pagelessQueryDict = self.chaperone.facetConfig
                                                .reassembleFacets(
                                                    queryDict
                                                ) + ",";
        }

        var htmlContents = renderTemplate(
            "general",
            "tagPagination",
            {
                facetSlug: self.chaperone.facetSlug,
                paginationData: self.chaperone.paginationData,
                pagelessQueryDict: pagelessQueryDict
            }
        );

        self.$el.html(htmlContents);

        return self;
    }
});


var TagArchiveItemView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }

            if (typeof config.data != "undefined") {
                self.data = config.data;
            }
        }
    },

    buildItemHolder: function() {
        var self = this,
            itemClass = self.chaperone.facetConfig
                                    .itemClasses.tagArchiveItem;

        return '<li class="' + itemClass + '" data-slug="' +
                                self.data.slug + '"></li>';
    },

    render: function() {
        var self = this;

        var htmlContents = renderTemplate(
            self.chaperone.facetSlug,
            "tagArchiveItem",
            {
                facetSlug: self.chaperone.facetSlug,
                rowData: self.data
            }
        );

        self.$el.html(htmlContents);

        return self;
    }
});


var NoTagItemsView = Backbone.View.extend({
    initialize: function(config) {
        var self = this;

        if (typeof config != "undefined") {
            if (typeof config.chaperone != "undefined") {
                self.chaperone = config.chaperone;
            }
        }
    },

    buildItemHolder: function() {
        var self = this,
            itemClass = self.chaperone.facetConfig
                                        .itemClasses
                                        .placeholder;

        return '<li class="' + itemClass + '"></li>';
    },

    render: function() {
        var self = this,
            facetConfig = self.chaperone.facetConfig;

        var htmlContents = renderTemplate(
            self.chaperone.facetSlug,
            "placeholderItem",
            {}
        );

        self.$el.html(htmlContents);

        return self;
    },

    bindEvents: function() {
        var self = this;

        return self;
    }
});


var AppRouter = Backbone.Router.extend({
    routes: {
        "!/": "homeScreen",
        "!/:facetSlug/": "facetList",
        "!/:facetSlug/in-depth/": "facetDataVis",
        "!/:facetSlug/refine/:facets/": "facetList",
        "!/:facetSlug/refine/:facets/in-depth/": "facetDataVis",
        "!/:facetSlug/tags/": "allTags",
        "!/:facetSlug/tags/:facets/": "allTags",
        "!/:facetSlug/items/:itemID/": "facetDetail"
    },

    initialize: function() {
        var self = this;

        self.view = new AppView({ el: $("#app") });

        var foundURL = Backbone.history.start();
        if (foundURL === false) {
            self.navigate("!/", {
                trigger: true
            });
        }
    },

    homeScreen: function() {
        var self = this,
            mainView = self.view,
            contentViews = mainView.contentViews,
            currentViewLevel = mainView.currentViewLevel,
            newViewLevel = 0;

        var homepage = new HomepageView({
            chaperone: self
        });

        mainView.attachView(homepage, newViewLevel);

        if (typeof mainView != "undefined") {
            if (currentViewLevel < 0) {
                mainView.setViewLevel(newViewLevel)
                        .render();
            } else if (currentViewLevel == newViewLevel) {
                mainView.renderSection(
                    contentViews[newViewLevel],
                    null,
                    null
                );
            } else {
                var newView = contentViews[newViewLevel],
                    currentView = contentViews[currentViewLevel];

                mainView.renderSection(
                    newView,
                    currentView,
                    newViewLevel
                );

                setTimeout(function() {
                    mainView.removeView(currentViewLevel);
                }, 750);
            }
        } else {
            // TK.
        }
    },

    facetList: function(facetSlug, initialFacets) {
        var self = this,
            mainView = self.view,
            contentViews = mainView.contentViews,
            currentViewLevel = mainView.currentViewLevel,
            newViewLevel = 1;

        var list = new ListView({
            chaperone: self,
            facetSlug: facetSlug,
            initialFacets: initialFacets
        });

        mainView.attachView(list, newViewLevel);

        if (typeof mainView != "undefined") {
            if (currentViewLevel < 0) {
                mainView.setViewLevel(newViewLevel)
                        .render();
            } else if (currentViewLevel == newViewLevel) {
                mainView.renderSection(
                    contentViews[newViewLevel],
                    null,
                    null
                );
            } else {
                var newView = contentViews[newViewLevel],
                    currentView = contentViews[currentViewLevel];

                mainView.renderSection(
                    newView,
                    currentView,
                    newViewLevel
                );

                setTimeout(function() {
                    mainView.removeView(currentViewLevel);
                }, 750);
            }
        } else {
            // TK.
        }
    },

    facetDataVis: function(facetSlug, facets) {
        var self = this,
            mainView = self.view,
            contentViews = mainView.contentViews,
            currentViewLevel = mainView.currentViewLevel,
            newViewLevel = 2;

        var dataVis = new VisualizationView({
            chaperone: self,
            facetSlug: facetSlug,
            facets: facets
        });

        mainView.attachView(dataVis, newViewLevel);

        if (typeof mainView != "undefined") {
            if (currentViewLevel < 0) {
                mainView.setViewLevel(newViewLevel)
                        .render();
            } else if (currentViewLevel == newViewLevel) {
                mainView.renderSection(
                    contentViews[newViewLevel],
                    null,
                    null
                );
            } else {
                var newView = contentViews[newViewLevel],
                    currentView = contentViews[currentViewLevel];

                mainView.renderSection(
                    newView,
                    currentView,
                    newViewLevel
                );

                setTimeout(function() {
                    mainView.removeView(currentViewLevel);
                }, 750);
            }
        } else {
            // TK.
        }
    },

    facetDetail: function(facetSlug, itemID) {
        var self = this,
            mainView = self.view,
            contentViews = mainView.contentViews,
            currentViewLevel = mainView.currentViewLevel,
            newViewLevel = 2;

        var detail = new DetailView({
            chaperone: self,
            facetSlug: facetSlug,
            dataID: itemID
        });

        mainView.attachView(detail, newViewLevel);

        if (typeof mainView != "undefined") {
            if (currentViewLevel < 0) {
                mainView.setViewLevel(newViewLevel)
                        .render();
            } else if (currentViewLevel == newViewLevel) {
                mainView.renderSection(
                    contentViews[newViewLevel],
                    null,
                    null
                );
            } else {
                var newView = contentViews[newViewLevel],
                    currentView = contentViews[currentViewLevel];

                mainView.renderSection(
                    newView,
                    currentView,
                    newViewLevel
                );

                setTimeout(function() {
                    mainView.removeView(currentViewLevel);
                }, 750);
            }
        } else {
            // TK.
        }
    },

    allTags: function(facetSlug, initialFacets) {
        var self = this,
            mainView = self.view,
            contentViews = mainView.contentViews,
            currentViewLevel = mainView.currentViewLevel,
            newViewLevel = 1;

        var tagArchive = new TagArchiveView({
            chaperone: self,
            facetSlug: facetSlug,
            initialFacets: initialFacets
        });

        mainView.attachView(tagArchive, newViewLevel);

        if (typeof mainView != "undefined") {
            if (currentViewLevel < 0) {
                mainView.setViewLevel(newViewLevel)
                        .render();
            } else if (currentViewLevel == newViewLevel) {
                mainView.renderSection(
                    contentViews[newViewLevel],
                    null,
                    null
                );
            } else {
                var newView = contentViews[newViewLevel],
                    currentView = contentViews[currentViewLevel];

                mainView.renderSection(
                    newView,
                    currentView,
                    newViewLevel
                );

                setTimeout(function() {
                    mainView.removeView(currentViewLevel);
                }, 750);
            }
        } else {
            // TK.
        }
    }
});


function renderTemplate(nameSpace, templateName, context) {
    return templates[nameSpace][templateName](context);
}


function deleteView(backboneView) {
    backboneView.undelegateEvents();
    backboneView.$el.removeData().unbind();
    backboneView.$el.empty();
    backboneView.stopListening();

    return backboneView;
}


function resizeChoropleth() {
    var mapHolderWidth = $(".map-holder").width(),
        statelyWidth = mapHolderWidth;

    if (mapHolderWidth > 600) {
        statelyWidth = 600;
    }

    $(".stately").width(statelyWidth);
    $(".stately li").css({"font-size": statelyWidth});
}


function reframeWindow() {
    var windowHeight = $(window).height(),
        classList = [
            ".homepage",
            ".list-view",
            ".detail-view",

            ".homepage .exit-off-canvas",
            ".list-view .exit-off-canvas",
            ".detail-view .exit-off-canvas",

            ".right-off-canvas-menu",
            ".tab-bar .exit-off-canvas"
        ];

    $(classList).each(function(i, inheritingClass) {
        var newHeight = 0;

        if (
                inheritingClass == ".right-off-canvas-menu"
            ) {
            newHeight = windowHeight;
        } else if (
                inheritingClass == ".tab-bar .exit-off-canvas"
            ) {
            newHeight = $(".tab-bar").outerHeight();
        } else if (
                inheritingClass == ".homepage .exit-off-canvas"
            ) {
            newHeight = $($(".homepage > *")[0]).outerHeight();
        } else if (
                inheritingClass == ".list-view .exit-off-canvas"
            ) {
            newHeight = $($(".list-view > *")[0]).outerHeight();
        } else if (
                inheritingClass == ".detail-view .exit-off-canvas"
            ) {
            newHeight = $($(".detail-view > *")[0]).outerHeight();
        } else {
            newHeight = windowHeight - $(".tab-bar").outerHeight();
        }

        $(inheritingClass).height(newHeight);
    });

    resizeChoropleth();
}

// jQuery bound functions.
$(document).ready(function() {
    SwiftClick.attach(document.body);

    app = new AppRouter();
});


$(window).resize(function() {
    reframeWindow();
});