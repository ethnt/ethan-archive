/*
* Symbolset
* www.symbolset.com
* Copyright © 2013 Oak Studios LLC
*
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-FONTNAME.js"></script>
*/

if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android [1-2]\.|BlackBerry.*WebKit)/.test(navigator.userAgent) && !/(IEMobile)/.test(navigator.userAgent)) {

  var ss_set={'five hundred pixels':'\uF642','fivehundredpixels':'\uF642','five hundred px':'\uF642','github octocat':'\uF671','stack overflow':'\uF672','stackoverflow':'\uF672','fivehundredpx':'\uF642','githuboctocat':'\uF671','kickstarter':'\uF681','app dot net':'\uF614','google plus':'\uF613','googleplus':'\uF613','foursquare':'\uF690','soundcloud':'\uF6B3','letterboxd':'\uF632','blackberry':'\uF6F4','delicious':'\uF655','posterous':'\uF623','pinterest':'\uF650','microsoft':'\uF6F1','thumbs up':'\uD83D\uDC4D','telephone':'\uD83D\uDCDE','appdotnet':'\uF614','wordpress':'\uF621','instagram':'\uF641','facebook':'\uF610','thumbsup':'\uD83D\uDC4D','readmill':'\uF652','pinboard':'\uF654','dribbble':'\uF660','envelope':'\u2709','google +':'\uF613','linkedin':'\uF612','twitter':'\uF611','approve':'\uD83D\uDC4D','behance':'\uF661','youtube':'\uF630','blogger':'\uF622','dropbox':'\uF653','octocat':'\uF671','android':'\uF6F3','google+':'\uF613','last fm':'\uF6B2','app net':'\uF614','windows':'\uF6F2','spotify':'\uF6B1','flickr':'\uF640','lastfm':'\uF6B2','zerply':'\uF615','appnet':'\uF614','paypal':'\uF680','tumblr':'\uF620','github':'\uF670','svpply':'\uF651','reddit':'\uF616','share':'\uF601','phone':'\uD83D\uDCDE','apple':'\uF8FF','vimeo':'\uF631','email':'\u2709','steam':'\uF617','quora':'\uF624','500px':'\uF642','skype':'\uF6A0','like':'\uD83D\uDC4D','mail':'\u2709','call':'\uD83D\uDCDE','link':'\uD83D\uDD17','rdio':'\uF6B0','yelp':'\uF691','etsy':'\uF682','vine':'\uF633','rss':'\uE310'};


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
      if (document.querySelectorAll) {
        return document.querySelectorAll('.'+classname);
      }
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
