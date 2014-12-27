/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var _gaq = _gaq || [];

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);U=[h];if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
if(typeof SvpBrowserDetect === "undefined") var SvpBrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	getParam: function(param) {
		var value = "unknown parameter";
		switch(param) {
			case 'browser' :
				value = this.browser;
			break;
			case 'version' :
				value = this.version;
			break;
			case 'OS' :
				value = this.OS;
			break;
		}
		return value;
	},
	searchString: function (data) {
		for(var i = 0; i < data.length; i++) {
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if(typeof dataString != "undefined" && dataString) {
				if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
			}
			else if(typeof dataProp != "undefined" && dataProp) return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
		{string: navigator.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb"},
		{string: navigator.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version"},
		{prop: window.opera, identity: "Opera"},
		{string: navigator.vendor, subString: "iCab", identity: "iCab"},
		{string: navigator.vendor, subString: "KDE", identity: "Konqueror"},
		{string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
		{string: navigator.vendor, subString: "Camino", identity: "Camino"},
		{string: navigator.userAgent, subString: "Netscape", identity: "Netscape"}, //for newer Netscapes (6+)
		{string: navigator.userAgent, subString: "MSIE", identity: "Explorer",versionSearch: "MSIE"},
		{string: navigator.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv"},
		{string: navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla"} //for older Netscapes (4-)
	],
	dataOS : [
		{string: navigator.userAgent, subString: "iPhone", identity: "iPlatform"},
		{string: navigator.userAgent, subString: "iPod", identity: "iPlatform"},
		{string: navigator.userAgent, subString: "iPad", identity: "iPlatform"},
		{string: navigator.platform, subString: "Win", identity: "Windows"},
		{string: navigator.platform, subString: "Mac", identity: "Mac"},
		{string: navigator.platform, subString: "Linux", identity: "Linux"}
	]
};
if(typeof SvpPlayerInstances === "undefined") var SvpPlayerInstances = {
	instances: {},
	registerInstance: function(id, instance) {
		this.instances[id] = instance;
	},
	getInstance: function(id) {
		return this.instances[id];
	},
	getPlayerInstance: function(playerId) {
		for(var key in this.instances) {
			var instance = this.instances[key];
			if(instance.vars.clip_id == playerId) return instance;
		}
		return null;
	},
	removeInstance: function(id) {
		delete this.instances[id];
	}
};
if(typeof SvpPlayerIndexes === "undefined") var SvpPlayerIndexes = 0;
if(typeof svpHashTicketCode === "undefined") {
	var hash=window.location.hash;
	if(hash.indexOf('ticket=') !== -1) {
		var params = hash.split('&');
		var svpHashTicketCode = params[0].replace('#ticket=', '');
		var clip = params[1] !== undefined ? params[1] : '';
		if(clip.indexOf('clip=') !== -1) {
			var clipKey = clip.replace('clip=', '');
			window.location.hash='#clip='+clipKey;
		}
	}
}

function SVPDynamicPlayer(id, url, width, height, internal_params, vars, params) {
	//Player variables
	this.player_object_id = id;
	this.player_url = url;
	this.player_width = width;
	this.player_height = height;
	this.min_player_width = 320;
	this.min_player_height = 240;
	this.def_player_width = 400;
	this.def_player_height = 341;
	this.def_big_player_width = 800;
	this.def_big_player_height = 450;
	this.def_player_skin = 0;
	this.def_player_controls_height = 19;
	this.player_align = 'NONE'; //Available values: TL, TC, TR, ML, MC, MR, BL, BC, BR, NONE
	this.player_offset_x = 0;
	this.player_offset_y = 0;
	this.player_offset_left = undefined;
	this.player_offset_top = undefined;
	this.site_root = 'https:' === document.location.protocol ? "https://pl.webvideocore.net/" : "http://play.streamingvideoprovider.com/";
	this.services_entry = 'https:' === document.location.protocol ? "https://player.webvideocore.net/" : "http://player.webvideocore.net/";
	this.staticCache = true;

	this.player_instance = null;
	this.back_player_instance = null;
	this.backup_player_id = null;
	this.player_in_fs_mode = false;
	this.player_fullscreen_mode = 'DOUBLE'; //Available values: DOUBLE, FILL, FIXED, NATIVE, NONE
	this.player_fs_width = 0;
	this.player_fs_height = 0;
	this.player_background_color = '';
	this.player_background_transparency = 0; //in percents
	this.player_keep_state_on_scroll = false;
	this.player_keep_state_on_resize = false;
	this.auto_show = true;
	this.is_responsive = false;
	this.flashActive = true;
	this.respondTimeout = null;

	this.vars = typeof vars != "undefined" ? vars : {};
	this.params = typeof params != "undefined" ? params : {};
	this.internal_params = typeof internal_params != "undefined" ? internal_params : {};
	this.iPlatform = true;
	this.visibilityInterval = null;
	this.visibilityDelay = 250;
	this.baseZindex = 10000;
	this.isMobile = false;
	this.isPPV = false;
	this.isDownloadable = false;
	this.documentAppend = false;

	// TRACKING VARIABLES
	this.clipName = '';
	this.gaTrackingEnabled = false;
	this.gaTrackingCode = '';
	this.refCode = '';
	// END OF TRACKING VARIABLES

	//Internal variables
	SvpBrowserDetect.init();
	this._d = document;
	this._w = window;
	this.browser = SvpBrowserDetect.browser;
	this.version = SvpBrowserDetect.version;
	this.OS = SvpBrowserDetect.OS;
	this.player_id = null;
	this.defaultEventListeners = {PPV: 'TIMELINE', DOWNLOAD: 'TIMELINE', INITIALIZED: 'PLAYER', GA: 'TIMELINE', START: 'PLAYHEAD'};
	this.flash_version = '9.0.0';
	this.express_install = 'expressInstall.swf';
	this.player_content_html =
	'<div class="svp_no_flash" style="width:100%;position:absolute;height:100%;background: #000;text-align:center;-webkit-transform-style: preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;">'+
		'<div id="svp_no_flash_layer'+this.vars.clip_id+'" style="position:relative; display:inline-block; color:#fff; overflow:hidden; margin:auto 10px; text-align:center; font-size:11px; font-family:Arial, Helvetica, sans-serif;  top: 50%;transform: translateY(-50%);-moz-transform: translateY(-50%);-webkit-transform: translateY(-50%);">'+
			'<p align="left" style="color:#fff;margin:0;padding:0;font-size:12px;line-height16px;">'+
				'<a href="http://get.adobe.com/flashplayer/" target="_blank"><img border="0" src="'+this.site_root+'img/flash_icon.png" style="float:left; margin-right:11px;width:20vmin; max-width:80px;"/></a>'+
				'<b style="font-size:14px;">ADOBE FLASH PLAYER</b><br />'+
				'You are either missing or need to update your <b>ADOBE Flash Player</b> in order to see this video .<br /><br />'+
				'<a style="color:#3ac9f8; text-decoration:none; font-size:11px; font-weight:bold;" href="http://get.adobe.com/flashplayer/" target="_blank">Download Now</a>'+
			'</p>'+
		'</div>'+
	'</div>';
	this.transformInputParameters = function(params) {
		var out_params = [];
		for(var x in params) {
			out_params[x] = eval('(typeof(' + params[x] + ') != "undefined");') ? eval(params[x]) : undefined;
		}
		return out_params;
	};
	this.getWindowSize = function() {
		var windowWidth = 0, windowHeight = 0;
		if(typeof(this._w.innerWidth) == 'number') {
			//Non-IE
			windowWidth = this._w.innerWidth;
			windowHeight = this._w.innerHeight;
		}
		else if(this._d.documentElement && (this._d.documentElement.clientWidth || this._d.documentElement.clientHeight)) {
			//IE 6+ in 'standards compliant mode'
			windowWidth = this._d.documentElement.clientWidth;
			windowHeight = this._d.documentElement.clientHeight;
		}
		else if(this._d.body && (this._d.body.clientWidth || this._d.body.clientHeight)) {
			//IE 4 compatible
			windowWidth = this._d.body.clientWidth;
			windowHeight = this._d.body.clientHeight;
		}
		return [windowWidth, windowHeight];
	};
	this.getDocumentSize = function() {
		var documentWidth = Math.max(
			Math.max(this._d.body.scrollWidth, this._d.documentElement.scrollWidth),
			Math.max(this._d.body.offsetWidth, this._d.documentElement.offsetWidth),
			Math.max(this._d.body.clientWidth, this._d.documentElement.clientWidth)
		);
		var documentHeight = Math.max(
			Math.max(this._d.body.scrollHeight, this._d.documentElement.scrollHeight),
			Math.max(this._d.body.offsetHeight, this._d.documentElement.offsetHeight),
			Math.max(this._d.body.clientHeight, this._d.documentElement.clientHeight)
		);
		return [documentWidth, documentHeight];
	};
	this.getWindowScrollXY = function() {
		var windowScrollX = 0, windowScrollY = 0;
		if(typeof(window.pageYOffset) == 'number') {
			//Netscape compliant
			windowScrollY = window.pageYOffset;
			windowScrollX = window.pageXOffset;
		}
		else if(document.body && (document.body.scrollLeft || document.body.scrollTop)) {
			//DOM compliant
			windowScrollY = document.body.scrollTop;
			windowScrollX = document.body.scrollLeft;
		}
		else if(document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
			//IE6 standards compliant mode
			windowScrollY = document.documentElement.scrollTop;
			windowScrollX = document.documentElement.scrollLeft;
		}
		return [windowScrollX, windowScrollY];
	},
	this.getObject = function(id) {
		var object = null;
		if(this._d.getElementById) {
			object = this._d.getElementById(id);
		}
		else if(this._d.layers) {
			object = this._d.layers[id];
		}
		else if(this._d.all) {
			object = this._d.all[id];
		}
		return object;
	},
	this.createElement = function(nodeName, name, id, style) {
		var node;
		try {
			var attributes = '';
			if(typeof name != "undefined") attributes += ' name="' + name + '"';
			if(typeof id != "undefined") attributes += ' id="' + id + '"';
			if(typeof style != "undefined") attributes += ' style="' + style + '"';
			node = this._d.createElement('<' + nodeName + attributes + '>');

		} catch (e) {
			node = this._d.createElement(nodeName);
			if(typeof name != "undefined") node.setAttribute('name', name);
			if(typeof id != "undefined") node.setAttribute('id', id);
			if(typeof style != "undefined") node.setAttribute('style', style);
		}
		return node;
	},
	this.getElementPosition = function(element) {
		var x = 0, y = 0;
		if(typeof element.x !== "undefined" && typeof element.y !== "undefined") {
			x += element.x;
			y += element.y;
		}
		else {
			do {
				x += element.offsetLeft;
				y += element.offsetTop;
				element = element.offsetParent;
			}
			while(element !== null);
		}
		return [x,y];
	},
	this.parseVars = function(vars) {
		this.checkParsedVars(this.transformInputParameters(vars));
	},
	this.checkParsedVars = function(vars) {
		//Required variables
		this.vars.clip_id = (typeof vars.clip_id === "undefined") ? 0 : vars.clip_id;

		//Optional variables
		this.vars.color = (typeof vars.player_color === "undefined") ? "#9C9EA4" : vars.player_color;
		this.vars.color1 = (typeof vars.player_color1 === "undefined") ? "#FCF6FC" : vars.player_color1;
		if(this.vars.colorHighlight) this.vars.color1 = this.vars.colorHighlight;
		if(this.vars.colorBase) this.vars.color2 = this.vars.colorBase;
		this.vars.color_ratio = (typeof vars.player_color_ratio === "undefined") ? "0.6" : vars.player_color_ratio;

		var alpha = (typeof vars.alpha === "undefined") ? false : vars.alpha;
		var stretch_video = (typeof vars.stretch_video === "undefined") ? 0 : vars.stretch_video;
		var pause = (typeof vars.pause === "undefined" || vars.pause == '0') ? false : vars.pause;
		var repeat = (typeof vars.repeat === "undefined" || vars.repeat == '0') ? false : vars.repeat;

		this.vars.autoHide = (typeof vars.auto_hide === "undefined" || vars.auto_hide === '') ? '0' : vars.auto_hide;
		this.vars.brandNW = (typeof vars.brand_new_window === "undefined" || vars.brand_new_window === '') ? '1' : vars.brand_new_window;

		var start_img = (typeof vars.start_img === "undefined") ? 0 : vars.start_img;
		if(start_img) this.vars.start_img = start_img;

		var start_volume = (typeof vars.start_volume === "undefined") ? '' : vars.start_volume;
		if(start_volume) this.vars.start_volume = start_volume;

		var transparent = (typeof vars.transparent === "undefined") ? true : vars.transparent;
		if(transparent === "false") transparent = false;

		var direct = (typeof vars.direct === "undefined") ? false : vars.direct;
		if(direct === "false") direct = false;
		this.direct = direct;

		no_fullscreen = (typeof vars.no_fullscreen === "undefined" || vars.no_fullscreen == '0') ? false : vars.no_fullscreen;
		no_fs = (typeof vars.no_fs === "undefined" || vars.no_fs == '0') ? false : vars.no_fs;
		no_controls = (typeof vars.no_controls === "undefined") ? 0 : parseInt(vars.no_controls, 10);
		true_fullscreen = (typeof vars.fs_mode === "undefined") ? false : vars.fs_mode == '1';
		native_fullscreen = (typeof vars.fs_mode === "undefined") ? false : vars.fs_mode == '2';
		this.only_fs = (typeof vars.only_fs === "undefined") ? false : vars.only_fs;
		if(no_controls === 1) {
			no_fullscreen = true;
			this.only_fs = false;
		}

		if(this.internal_params.skin == '3') {
			var no_fs = typeof vars.no_fs === "undefined" || parseInt(vars.no_fs, 10) === 1;
			var no_fullscreen = typeof vars.no_fullscreen === "undefined" || parseInt(vars.no_fullscreen, 10) === 1;

			if(no_fs && no_fullscreen && vars.fs_mode !== '2') {
				vars.fs_mode = '0';
			} else {
				vars.fs_mode = '2';
			}
		}

		if(no_fullscreen) this.player_fullscreen_mode = 'NONE';
		this.player_keep_state_on_resize = true;

		if(!this.only_fs) {
			this.params.quality = "high";

			if(direct) {
				this.params.wmode = "direct";
			}
			else if(transparent) {
				this.params.wmode = "transparent";
			}
			else if(native_fullscreen) {
				this.params.wmode = "window";
			}
			else {
				this.params.wmode = "opaque";
			}
			if(native_fullscreen) {
				this.params.allowFullScreen = "true";
				this.vars.native_fs = "1";
			}

			if(alpha) this.vars.alphaPlayer = "1";
			if(pause) this.vars.autoStart = "0";
			else this.vars.autoStart = "1";
			if(repeat) this.vars.repeatVideo = "1";
			if(stretch_video) this.vars.stretch_video = "1";
			if(no_fullscreen) this.vars.no_fs = "1";

			if(!no_fullscreen) {
				if(typeof vars.fs_mode == "undefined") {
					this.player_fullscreen_mode = 'NONE';
				}
				else if(!vars.fs_mode) {
					this.player_fullscreen_mode = 'FIXED';
					this.player_fs_height = this.def_big_player_height;
					this.player_fs_width = this.def_big_player_width;
				}
				else if(vars.fs_mode == "1") {
					this.player_fullscreen_mode = 'FILL';
					this.params.wmode = 'transparent';
				}
				else {
					this.player_fullscreen_mode = 'NATIVE';
				}
			}
			if(no_controls === 1) {
				this.vars.noControls = no_controls;
			}
		}
		else {
			this.vars.fullscreen = "1";
			if(typeof vars.fs_mode == "undefined" || !vars.fs_mode || this.vars.fs_popin === '1') {
				this.player_fullscreen_mode = 'FIXED';
				this.player_fs_height = this.def_big_player_height;
				this.player_fs_width = this.def_big_player_width;
			}
			else {
				this.player_fullscreen_mode = 'FILL';
				this.params.wmode = 'transparent';
			}
		}
		if(typeof vars.bg_color !== "undefined") this.player_background_color = vars.bg_color;
		var location = '';
		try {
			location = self.location.href;
		}
		catch(e) {}
		this.vars.page = encodeURIComponent(location);
		if(typeof vars.player_align !== "undefined" && vars.player_align !== "" && vars.player_align !== "NONE") {
			this.player_align = vars.player_align;
			this.player_keep_state_on_scroll = true;
		}
		if(typeof vars.offset_x !== "undefined" && vars.offset_x !== "") this.player_offset_x = vars.offset_x;
		if(typeof vars.offset_y !== "undefined" && vars.offset_y !== "") this.player_offset_y = vars.offset_y;
		if(typeof vars.bg_transp !== "undefined" && vars.bg_transp !== "") this.player_background_transparency = vars.bg_transp;
		if(typeof vars.prebuffer !== "undefined" && vars.prebuffer !== "") this.vars.preLoad = vars.prebuffer;
		if(typeof vars.rid !== "undefined") this.vars.rid = vars.rid;
		if(typeof vars.ext !== "undefined") this.vars.ext = vars.ext;
		if(typeof vars.referer !== "undefined") this.vars.referer = encodeURIComponent(vars.referer);
		if(typeof vars.preview !== "undefined") this.vars.is_preview = vars.preview;
		if(typeof vars.start_volume !== "undefined" && vars.start_volume !== "") this.vars.start_volume = vars.start_volume;
		if(typeof vars.close_button !== "undefined" && vars.close_button !== "") this.vars.close_button = vars.close_button;
		this.params.allowScriptAccess = "always";
		this.params.allowNetworking = "all";
		this.params.LOOP = "false";
		this.params.swLiveConnect = "true";
		this.params.bgcolor = '#000000';
		if(typeof vars.pbgcolor != "undefined") this.params.bgcolor = vars.pbgcolor;
		this.is_responsive = (typeof vars.is_responsive !== 'undefined' && vars.is_responsive === 'true');
		if(this.is_responsive) {
			var container = document.getElementById(this.internal_params.use_div);
			var width = parseInt(container.style.width, 10), height = parseInt(container.style.height, 10);
			this.size_proportion = height / width;
			container.style.width = '100%';
		}
	};
	this.parseInternalParams = function(internal_params) {
		this.checkParsedInternalParams(this.transformInputParameters(internal_params));
	},
	this.checkParsedInternalParams = function(internal_params) {
		if(typeof this.player_height == "undefined" || !this.player_height) {
			this.player_height = (typeof internal_params.player_height == "undefined") ? this.def_player_height : internal_params.player_height;
		}
		if(typeof this.player_width == "undefined" || !this.player_width) {
			this.player_width = (typeof internal_params.player_width == "undefined") ? this.def_player_width : internal_params.player_width;
		}
		var skin = (typeof internal_params.skin == "undefined") ? this.def_player_skin : internal_params.skin;
		if(typeof this.player_object_id == "undefined" || !this.player_object_id) {
			this.player_object_id = (typeof internal_params.use_div == "undefined") ? '' : internal_params.use_div;
		}
		this.player_url = this.site_root + 'player' + skin + '.swf';
		this.player_controls_height = (typeof internal_params.player_controls_height == "undefined") ? this.def_player_controls_height : internal_params.player_controls_height;
		if(typeof internal_params.auto_show != "undefined" && internal_params.auto_show == "false") this.auto_show = false;
	};
	this.init = function(e) {
		var player_content = null;
		this.use_existing_div = true;
		if(typeof this.player_object_id === "undefined" || !this.player_object_id) {
			this.use_existing_div = false;
			this.player_id = 'svp_' + (typeof this.vars.clip_id == "undefined" ? Math.floor(Math.random() * 100000000001) : this.vars.clip_id);
		}
		else if(this.need_new_layer) {
			this.player_id = this.player_align != 'NONE' ? this.player_object_id : 'svp_' + this.player_object_id;
		}
		else {
			this.player_id = 'svp_' + this.player_object_id;
			player_content = this.createElement('div', this.player_id, this.player_id, 'width:' + this.player_width + 'px' + ';' + 'height:' + this.player_height + 'px' + ';');
			var object = this.getObject(this.player_object_id);
			if(object !== null) {
				player_content.innerHTML = object.innerHTML;
				object.innerHTML = '';
				object.appendChild(player_content);
			}
		}
		if(typeof this.vars.rid === "undefined") this.vars.rid = new Date().getTime() + Math.floor(Math.random() * 100000000001);

		this.attributes = {
			id: this.player_id,
			name: this.player_id
		};
		//create player div layer
		if(!this.only_fs && this.need_new_layer) {
			if(this.player_align !== 'NONE') {
				player_content = this.getObject(this.player_object_id);
			}
			else {
				player_content = this.createElement('div', this.player_id, this.player_id);
			}
			if(this.player_keep_state_on_scroll) {
				this.static_div = this.createElement('div', 'static_' + this.player_id, 'static_' + this.player_id, 'width:' + this.player_width + 'px' + ';' + 'height:' + this.player_height + 'px' + ';');
				this.static_div.style.position = 'fixed';
				this.static_div.style.zIndex = ++SvpPlayerIndexes + this.baseZindex;

				this.static_div.appendChild(player_content);
				this._d.body.insertBefore(this.static_div, this._d.body.childNodes[0]);
			}
			else {
				this._d.body.appendChild(player_content);
			}
		}
		if(this.use_existing_div && this.need_new_layer && this.player_align === 'NONE') {
			var params = this.getElementPosition(this.getObject(this.player_object_id));
			this.player_offset_left = params[0];
			this.player_offset_top = params[1];
		}

		this.addListener(this._w, 'resize', this.onResize);
		SvpPlayerInstances.registerInstance(this.vars.rid, this);
		if(!this.auto_show) {
			this.getObject(this.player_id).style.display = 'none';
			if(this.static_div) this.static_div.style.display = 'none';
		}
		else if(!this.only_fs) this.embedPlayer();
		this.executePlayerEvent('PLAYER.INIT', true);
	};
	this.onResize = (function(self) {
		return function(e) {
			if(self.player_keep_state_on_resize && self.need_new_layer) {
				self.resize(e);
			} else if(self.is_responsive && (self.flashActive || self.isMobile)) {
				self.respond();
			}
		};
	})(this);
	this.bindPlayerEvents=function(events){
		for(var category in events) {
			this.addPlayerEventListener(events[category] + '.' + category, this.onPlayerEvent);
		}
	};
	this.onPlayerEvent = function(event,object,type) {
		if(type==='PLAYER.INITIALIZED'){
			var container = document.getElementById(object.player_object_id);
			var btn = container.getElementsByTagName('a');
			if(btn[0] !== undefined) {
				var id = btn[0].id;
				var dt = document.getElementById(id);
				dt.parentNode.removeChild(dt);
			}
		} else if(type==='TIMELINE.GA') {
			var eventData = event.split(',');
			if(eventData[0].length > 0) {
				object.gaTrackingEnabled = true; object.gaTrackingCode = eventData[0]; object.clipName = eventData[1]; object.refCode = eventData[2];
				(function() {
					var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
					ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
					var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
				})();
			}
		} else if(type==='PLAYHEAD.START' && object.gaTrackingEnabled === true) {
			_gaq.push(['_setAccount', object.gaTrackingCode]);
			_gaq.push(['_trackEvent', 'Videos Played', object.refCode, object.clipName]);
		} else if(type === 'TIMELINE.PPV' || type === 'TIMELINE.DOWNLOAD') {
			var r=(object.staticCache===false?'?v='+(new Date().getTime()):'');
			var eventParams = event.split(',');
			var eventCat = type.split('.')[1];
			svpJSLoader.JS.load(object.site_root+'js/dplayerUtils.js'+r,function(){
				svpDplayerUtils.SETTINGS.cache=object.staticCache;
				svpDplayerUtils.CORE.init(function(){
					var params = {};
					if(eventCat==='PPV'){
						params.layout = parseInt(eventParams[0], 10);
						if(object.html_playlist !== true) params.layout = 1;
						if(object.params.wmode !== "transparent" && object.html5_player_locked !== true) params.hide_bg = 1;
						if(object.html5_player_locked === true && object.html_playlist !== true) params.close = 0;
						params.is_live = typeof eventParams[1] !== "undefined" ? parseInt(eventParams[1], 10) : 0;
						params.bg_image = typeof eventParams[2] !== "undefined" ? eventParams[2] : false;
						params.tmode = typeof eventParams[3] !== "undefined" ? parseInt(eventParams[3], 10) : 0;
						svpDplayerUtils.PPV.init(params,object);
						object.isPPV = true;

					}else if(eventCat==='DOWNLOAD'){
						svpDplayerUtils.DL.init(params,object,'');
						object.isDownloadable = true;
					}
				},function(){alert('There is a problem with initializiation of utils library. Please try again in a few minutes.');});
			},function(){alert('There is a problem with loading of utils library. Please try again in a few minutes.');});
		}
	};
	this.addListener = function(elem, evt, func) {
		if(elem === this._w && evt === 'load' && document.readyState === 'complete') {
			func();
			return true;
		}
		if(elem.addEventListener) { //W3C DOM
			elem.addEventListener(evt, func, false);
			return true;
		}
		else if(elem.attachEvent) { //IE DOM
			var r = elem.attachEvent("on" + evt, func);
			return r;
		}
		return false;
	};
	this.removeListener = function(elem, evt, func) {
		if(elem.removeEventListener) { //W3C DOM
			elem.removeEventListener(evt, func, false);
			return true;
		}
		else if(elem.detachEvent) { //IE DOM
			var r = elem.detachEvent("on" + evt, func);
			return r;
		}
		return false;
	};
	this.createCSS = function(css) {
		this.style = this._d.createElement('style');
		this.style.setAttribute("type", "text/css");
		this.style.setAttribute("media", "screen");
		this.style.setAttribute("id", 'svp_style_sheet_' + this.player_id);
		var valid = true;
		if(this.style.styleSheet) { //IE
			try {
				this.style.styleSheet.cssText = css;
			}
			catch(e) {
				valid = false;
			}
		}
		else { //the world
			var styleText = this._d.createTextNode(css);
			try {
				this.style.appendChild(styleText);
			}
			catch(e) {
				valid = false;
			}
		}
		if(valid) {
			this.head = this._d.getElementsByTagName('head')[0];
			this.head.appendChild(this.style);
		}
	};
	this.removeCSS = function() {
		if(typeof this.head !== "undefined") {
			this.head.removeChild(this.style);
		}
	};
	this.openFullscreen = function() {
		//cache current values
		this.player_in_fs_mode = true;
		this.cached_width = this.player_width;
		this.cached_height = this.player_height;
		this.cached_align = this.player_align;
		this.cached_offset_left = this.player_offset_left;
		this.cached_offset_top = this.player_offset_top;
		this.cached_overflow = this._d.body.style.overflow;

		var windowSizes = null;
		var windowScrolling = this.getWindowScrollXY();
		this.cached_scroll_x = windowScrolling[0];
		this.cached_scroll_y = windowScrolling[1];

		this._d.body.style.overflow = "hidden";

		if((this.player_fullscreen_mode === 'FIXED' || this.player_fullscreen_mode === 'FILL') && (this.browser === 'Explorer' || this.browser === 'Opera')) {
			this.createCSS("html {overflow:hidden;}");
		}

		if(this.player_background_color !== '' && this.player_fullscreen_mode !== 'FILL') {
			this.background_id = 'player_background_' + this.player_id;

			windowSizes = this.getWindowSize();
			var documentSizes = this.getDocumentSize();
			windowWidth = Math.max(documentSizes[0], windowSizes[0]);
			windowHeight = Math.max(documentSizes[1], windowSizes[1]);
			var transparency = this.player_background_transparency;
			if(transparency > 100) transparency = 100;
			if(transparency < 0) transparency = 0;
			transparency = 100 - transparency;
			if(this.browser == 'Explorer') transparency_string = "filter:alpha(opacity=" + transparency + ");opacity:"+transparency / 100;
			else transparency_string = "opacity:" + transparency / 100;
			// var z = ++SvpPlayerIndexes + this.baseZindex;
			var z= this.player_instance.style.zIndex ? this.player_instance.style.zIndex - 1 : ++SvpPlayerIndexes + this.baseZindex;
			this.background_content = this.createElement('div', this.background_id, this.background_id, "margin:0;width:" + windowWidth + "px;height:" + windowHeight + "px;top:0;left:0;z-index:" + z + ";overflow:hidden;position:absolute;background-color:" + this.player_background_color + ";" + transparency_string + ";");
			this._d.body.appendChild(this.background_content);
			var thisObject = this;

			if(this.player_fullscreen_mode === 'FIXED' && this.vars.fs_popin == '1') {
				this.background_content.onclick = function() {
					if(typeof thisObject.protectionId !== "undefined") svpDplayerUtils.PPV.hide(thisObject.protectionId,1);
					ClosePlayer(thisObject.vars.rid);
				};
			}
		}

		if(this.player_fullscreen_mode == 'DOUBLE') {
			this.player_width *= 2;
			this.player_height *= 2;
			this.player_align = 'MC';
			this.player_offset_left = undefined;
			this.player_offset_top = undefined;
		}
		else if(this.player_fullscreen_mode == 'FIXED') {
			this.player_width = this.player_fs_width;
			this.player_height = this.player_fs_height;
			this.player_align = 'MC';
			this.player_offset_left = undefined;
			this.player_offset_top = undefined;
		}
		else if(this.player_fullscreen_mode == 'FILL') {
			this.player_align = 'NONE';
			this.player_offset_left = undefined;
			this.player_offset_top = undefined;

			windowSizes = this.getWindowSize();
			windowWidth = windowSizes[0];
			windowHeight = windowSizes[1];
			this.player_width = windowWidth;
			this.player_height = windowHeight;
			this._w.scrollTo(0, 0);
		}
		this.positionPlayer();
	};
	this.closeFullscreen = function() {
		this.player_in_fs_mode = false;

		if(this.player_background_color !== '' && this.player_fullscreen_mode !== 'FILL') {
			this._d.body.removeChild(this.background_content);
			delete this.background_content;
		}
		if((this.player_fullscreen_mode === 'FILL' || this.player_fullscreen_mode === 'FIXED') && (this.browser === 'Explorer' || this.browser === 'Opera')) this.removeCSS();
		if(this.player_fullscreen_mode === 'FILL') this._w.scrollTo(this.cached_scroll_x, this.cached_scroll_y);

		this._d.body.style.overflow = this.cached_overflow;
		this.player_width = this.cached_width;
		this.player_height = this.cached_height;
		this.player_align = this.cached_align;
		this.player_offset_left = this.cached_offset_left;
		this.player_offset_top = this.cached_offset_top;

		this.positionPlayer();
	};
	this.execute = function() {
		this.need_new_layer = this.player_align !== 'NONE' || (this.player_fullscreen_mode !== 'NONE' && this.player_fullscreen_mode !== 'NATIVE');
		if(!this.need_new_layer) {
			this.init();
		}
		else {
			if(!this.auto_show) {
				this.getObject(this.internal_params.use_div).style.display = 'none';
			}
			var thisObject = this;
			this.addListener(this._w, 'load', this.onLoad);
		}
	};
	this.onLoad = (function(self) {
		return function(e) {
			self.init();
		};
	})(this);
	this.resize = function(e) {
		var windowSizes = null;
		if(this.player_instance !== null) {
			if(this.player_in_fs_mode === true) {
				if(this.player_fullscreen_mode === 'FILL') {
					windowSizes = this.getWindowSize();
					windowWidth = windowSizes[0];
					windowHeight = windowSizes[1];
					this.player_width = windowWidth;
					this.player_height = windowHeight;
				}
				else if(this.player_fullscreen_mode === 'FIXED') {
					windowSizes = this.getWindowSize();
					var documentSizes = this.getDocumentSize();
					windowWidth = Math.max(documentSizes[0], windowSizes[0]);
					windowHeight = Math.max(documentSizes[1], windowSizes[1]);
					if(this.player_fs_width > windowSizes[0]) this.player_width = windowSizes[0];
					else this.player_width = this.player_fs_width;
					if(this.player_fs_height > windowSizes[1]) this.player_height = windowSizes[1];
					else this.player_height = this.player_fs_height;
					this.background_content.style.width = windowWidth + 'px';
					this.background_content.style.height = windowHeight + 'px';
				}
				this.positionPlayer();
			}
			else {
				if(this.player_align == 'NONE') {
					if(this.player_object_id) {
						var pos = this.getElementPosition(this.getObject(this.player_object_id));
						this.player_offset_left = pos[0];
						this.player_offset_top = pos[1];
					}
				}
				this.positionPlayer();
			}
		}
	};
	this.respond = function() {
		if(this.respondTimeout) {
			clearTimeout(this.respondTimeout);
		}
		var that = this;
		this.respondTimeout = setTimeout(function() {
			var container = that.player_instance.parentNode;
			var width = parseInt(container.offsetWidth, 10);
			var height = Math.round(width * that.size_proportion);
			container.style.height = height + 'px';
		}, 200);
	};
	this.positionPlayer = function() {
		var offsetLeft = 0, offsetTop = 0;

		if(typeof this.player_offset_left !== "undefined" && typeof this.player_offset_top !== "undefined") {
			offsetLeft = this.player_offset_left;
			offsetTop = this.player_offset_top;
		}
		else if(this.player_align !== 'NONE') {
			var windowSizes = this.getWindowSize();
			var documentSizes = this.getDocumentSize();
			var windowWidth = Math.min(documentSizes[0], windowSizes[0]);
			var windowHeight = Math.min(documentSizes[1], windowSizes[1]);

			if(this.player_align === 'TL' || this.player_align === 'ML' || this.player_align === 'BL') {
				offsetLeft = 0 + Math.floor(this.player_offset_x);
			}
			else if(this.player_align === 'TC' || this.player_align === 'MC' || this.player_align === 'BC') {
				offsetLeft = Math.floor(( Math.floor(windowWidth) - Math.floor(this.player_width)) / 2) + Math.floor(this.player_offset_x);
			}
			else {
				offsetLeft =  Math.floor(windowWidth) - Math.floor(this.player_width) - Math.floor(this.player_offset_x);
			}

			if(this.player_align === 'TL' || this.player_align === 'TC' || this.player_align === 'TR') {
				offsetTop = 0 +  Math.floor(this.player_offset_y);
			}
			else if(this.player_align === 'ML' || this.player_align === 'MC' || this.player_align === 'MR') {
				offsetTop = (Math.floor(windowHeight) -  Math.floor(this.player_height)) / 2 + Math.floor(this.player_offset_y);
			}
			else {
				offsetTop =  Math.floor(windowHeight) - Math.floor(this.player_height) - Math.floor(this.player_offset_y);
			}

			if(this.player_fullscreen_mode === 'FIXED' && this.player_align !== 'NONE') {
				var windowScrolling = this.getWindowScrollXY();
				offsetLeft += windowScrolling[0];
				offsetTop += windowScrolling[1];
			}
		}

		if(this.player_keep_state_on_scroll) {
			if(this.browser === 'Explorer' && this.version <= 6) {
				var style = " {position:absolute;top:expression(0+((e=document.documentElement.scrollTop)?e:document.body.scrollTop)+'px');left: expression(0+((e=document.documentElement.scrollLeft)?e:document.body.scrollLeft)+'px');}";
				this.createCSS("#" + this.player_instance.id + style);
				this.createCSS("#" + this.static_div.id + style);

				this.static_div.style.top = offsetTop + 'px';
				this.static_div.style.left = offsetLeft + 'px';
				this.static_div.style.position = 'absolute';
			}
			else {
				this.static_div.style.top = offsetTop + 'px';
				this.static_div.style.left = offsetLeft + 'px';
			}
		}
		else {
			this.player_instance.style.position = 'absolute';
			this.player_instance.style.left = offsetLeft + 'px';
			this.player_instance.style.top = offsetTop + 'px';

			this.player_instance.style.width = this.player_width + 'px';
			this.player_instance.style.height = this.player_height + 'px';
		}
		this.executePlayerEvent('PLAYER.POSITION_CHANGED', true);
	};
	this.embedPlayer = function() {
		if(this.only_fs) {
			var player_content = this.createElement('div', this.player_id, this.player_id, 'width:' + this.player_width + 'px' + ';' + 'height:' + this.player_height + 'px' + ';');
			player_content.innerHTML = this.player_content_html;
			this._d.body.appendChild(player_content);
		}
		if(this.vars.fs_popin==='1'){
			delete this.vars.only_fs;
			if(!this.direct) this.params.wmode='window';
			else this.params.wmode='direct';
			this.params.allowFullScreen='true';
			delete this.vars.fullscreen;
		}
		swfobject.embedSWF(this.player_url, this.player_id, this.player_width, this.player_height, this.flash_version, this.express_install, this.vars, this.params, this.attributes, this.onSuccessEmbed);
	};
	this.iPlatformVideoData = function(videoID) {
		var head = this._d.getElementsByTagName('head')[0];
		var script = this._d.createElement('script');
		var id = typeof videoID !== "undefined" ? videoID : this.vars.clip_id;
		script.id = 'ajax_video_path';
		script.src = this.services_entry + 'index.php?l=info&a=ajax_video_info&file=' + id + '&rid=' + this.vars.rid + '&page=' + escape(typeof svpCurrentPage !== 'undefined' ? svpCurrentPage : window.location.href) + '&preview=' + this.vars.is_preview;
		head.appendChild(script);
	};
	this.confirmClose = function() {
		if(this.html5_player_locked === true) this.buildVideoTag(this.services_entry + 'index.php?l=info&a=404', this.real_image_src);
	};
	this.confirmComplete = function() {
		if(this.html5_player_locked === true) this.buildVideoTag(this.real_video_src, this.real_image_src);
	};
	this.buildVideoTag = function(video_src, image_src) {
		var width = 0, height = 0;
		if(this.only_fs) {
			if(this.player_fullscreen_mode === 'FILL') {
				var windowSizes = this.getWindowSize();
				windowWidth = windowSizes[0];
				windowHeight = windowSizes[1];
				width = windowWidth;
				height = windowHeight;
			}
			else {
				width = this.player_fs_width;
				height = this.player_fs_height;
			}
		}
		else {
			width = this.player_width;
			height = this.player_height;
		}

		var html5_video_id = 'html5_video_' + this.vars.clip_id;
		var src = ' src="' + video_src + '"';
		var type = ' type="video/flv"';
		var tagWidth = ' width="' + width + '"';
		var tagHeight = ' height="' + height + '"';
		//var autoplay = this.vars.pause != '1' ? ' autoplay="autoplay"' : '';
		var autoplay = '';
		var loop = this.vars.repeat == '1' ? ' loop="loop"' : '';
		var muted = this.vars.start_volume == '0' ? ' audio="muted"' : '';
		//var poster = this.vars.pause == '1' && this.vars.start_img == '1' ? ' poster="' + image_src + '"' : '';
		var poster = ' poster="' + image_src + '"';
		//var controls = this.vars.no_controls != '1' ? ' controls="controls"' : '';
		var controls = ' controls="controls"';
		var preload = this.vars.prebuffer == '1' ? ' preload="auto"' : '';
		var canvas = ' <canvas class="svp_html5_canvas"' + tagWidth + tagHeight + ' style="top: 0;left: 0;width: 100%;max-width: 100%;height: auto;"></canvas>'
		var style = this.is_responsive ? ' style="top: 0;left: 0;width: 100%;max-width: 100%;height: 100%;position:absolute;"' : '';
		var tag = '<video id="' + html5_video_id + '"' + tagWidth + tagHeight + src + autoplay + loop + muted + poster + controls + preload + style + '><source' + src + type + '/>Your browser does not support the video tag.</video>';
		if(this.only_fs || this.player_align != 'NONE') tag = '<a href="#" onclick="ClosePlayer(\'' + this.vars.rid + '\');return false;" style="float:right;">[x]</a><br/>' + tag;
		this.player_instance = this.getObject(this.player_id);
		if(this.is_responsive) {
			this.player_instance.innerHTML = canvas + tag;
		} else {
			this.player_instance.innerHTML = tag;
		}
		if(this.only_fs) this.openFullscreen();
		else if (this.player_align != 'NONE') this.positionPlayer();

		this.html5_player_instance = this.getObject(html5_video_id);
		this.html5_player_locked = false;

		if(this.is_responsive) this.respond();
		this.executePlayerEvent('PLAYER.CLIP_CHANGED', true);
	};
	this.videoTagEmbed = function(video_src, image_src, event_data, live_video_data) {
		this.eventObject = {};
		this.live_video = live_video_data.live_video === 1;
		if(this.live_video && live_video_data.is_started === 0) {
			var offlineBox = '';
			if(live_video_data.offline_overlay === 1) {
				var titleHeight = 32;
				var titleWidth = live_video_data.offline_title.length * titleHeight / 2;
				var subTitleHeight = 17;
				var subTitleWidth = live_video_data.offline_descr.length * subTitleHeight / 2;

				var boxWidth = Math.max(titleWidth, subTitleWidth) + 20;
				var boxHeight = titleHeight + subTitleHeight + 30;
				var boxX = Math.ceil((this.player_width - boxWidth) / 2);
				var boxY = Math.ceil((this.player_height * 20) / 100);

				var titleY = boxY + titleHeight + 5;
				var subtitleY = boxY + titleHeight + 15 + subTitleHeight;

				offlineBox = '<rect width="' + boxWidth + '" height="' + boxHeight + '" x="' + boxX + '" y="' + boxY + '" rx="10" ry="10" fill="#000000" style="fill-opacity:0.6"/><text y="' + titleY + '" text-anchor="middle" dx="50%" stroke="none" fill="#ffffff" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-size: 32px; line-height: normal; font-family: Arial;"><tspan>' + live_video_data.offline_title + '</tspan></text><text y="' + subtitleY + '" text-anchor="middle" dx="50%" stroke="none" fill="#ffffff" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-size: 17px; line-height: normal; font-family: Arial;"><tspan>' + live_video_data.offline_descr + '</tspan></text>';
			}

			var offlineBackground = '';
			if(image_src !== '') {
				var width = live_video_data.image_width;
				var height = live_video_data.image_height;
				var ratio = width / height;
				if(width > this.player_width) {
					width = this.player_width;
					height = Math.ceil(width / ratio);
				}
				if(height > this.player_height) {
					height = this.player_height;
					width = Math.ceil(height * ratio);
				}
				var x = Math.ceil((this.player_width - width) / 2);
				var y = Math.ceil((this.player_height - height) / 2);
				offlineBackground = '<image xlink:href="data:image/jpg;base64,' + live_video_data.image_b64 + '" width="' + width + 'px" height="' + height + 'px" x="' + x + '" y="' + y + '"/>';
			}
			else {
				offlineBackground = '<g id="Layer_1"><rect x="0" fill="#F6F6F8" width="14.285%" height="100%"/><rect x="14.285%" fill="#ECE922" width="14.285%" height="100%"/><rect x="28.57%" fill="#64CAD8" width="14.285%" height="100%"/><rect x="42.855%" fill="#76C043" width="14.285%" height="100%"/><rect x="57.14%" fill="#B64D9F" width="14.285%" height="100%"/><rect x="71.425%" fill="#EE1D23" width="14.285%" height="100%"/><rect x="85.71%" fill="#37509D" width="14.285%" height="100%"/></g><g id="Layer_2"><rect x="0" y="70%" fill="#384EA9" width="14.285%" height="10%"/><rect x="14.285%" y="70%" fill="#010003" width="14.285%" height="10%"/><rect x="28.57%" y="70%" fill="#B6509C" width="14.285%" height="10%"/><rect x="42.855%" y="70%" fill="#010101" width="14.285%" height="10%"/><rect x="57.14%" y="70%" fill="#64C8D8" width="14.285%" height="10%"/><rect x="71.425%" y="70%" fill="#020403" width="14.285%" height="10%"/><rect x="85.71%" y="70%" fill="#EFEFEF" width="14.285%" height="10%"/></g><g id="Layer_3"><rect x="0" y="80%" fill="#013D59" width="16.6%" height="20%"/><rect x="16.6%" y="80%" fill="#F5F6F8" width="16.6%" height="20%"/><rect x="33.3%" y="80%" fill="#28246E" width="16.6%" height="20%"/><rect x="49.8%" y="80%" fill="#000201" width="16.6%" height="20%"/><rect x="66.4%" y="80%" fill="#3B3B3D" width="16.6%" height="20%"/><rect x="83%" y="80%" fill="#010101" width="16.9%" height="20%"/></g>';
			}
			image_src = 'data:image/svg+xml;base64,' + Base64.encode('<svg style="overflow: hidden; position: relative;" version="1.1" id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ' + this.player_width + ' ' + this.player_height + '" preserveAspectRatio="none">' + offlineBackground + offlineBox + '</svg>');
		}

		if(event_data) {
			var eventDataParams = event_data.split(';');
			for(var i = 0; i < eventDataParams.length; i++) {
				var paramData = eventDataParams[i].split('=');
				this.eventObject[paramData[0]] = paramData[1];
			}
			this.real_video_src = video_src;
			this.real_image_src = image_src;
			var player_img = '<img src="'+image_src+'" width="'+this.player_width+'" height="'+this.player_height+'" border="0"/>';
			this.getObject(this.player_id).innerHTML = player_img;
			this.html5_player_instance = undefined;
			this.html5_player_locked = true;
			this.executePlayerEvent('PLAYER.CLIP_CHANGED', true);
			this.executePlayerEvent('TIMELINE.PPV', this.eventObject.params);
		}
		else {
			if(typeof this.html5_player_instance !== "undefined") {
				this.html5_player_instance.src = video_src;
				this.html5_player_instance.poster = image_src;
			}
			else {
				this.buildVideoTag(video_src, image_src);
			}
		}
	};
	this.setVisibilityInterval = function() {
		if(this.visibilityDelay <= 0 || this.visibilityInterval !== null) return false;
		var hidden = false;
		var thisObject = this;
		this.visibilityInterval = setInterval(function() {
			var instance = thisObject.back_player_instance !== null ? thisObject.back_player_instance : thisObject.player_instance;
			if(instance.parentNode !== null && typeof instance.registerJSEvent === "undefined") {
				if(!hidden) hidden = true;
			}
			else {
				if(hidden) {
					hidden = false;
					thisObject.registerEvents();
				}
			}
		}, this.visibilityDelay);
	};
	this.registerCachedEvents = function() {
		if(typeof this.eventStack === 'undefined') return false;
		var length = this.eventStack.length;
		if(length > 0) this.setVisibilityInterval();
		for(var i = 0; i < length; i++) {
			this.registerJSEvent(this.eventStack[i]);
		}
	};
	this.registerEvents = function() {
		for(var event in this.eventHandlers) {
			this.registerJSEvent(event);
		}
	};
	this.initEvents = function() {
		var thisObject = this;
		this.eventInterval = setInterval(function() {
			thisObject.checkRegisterJSEvents();
		}, 5);
	};
	this.checkRegisterJSEvents = function() {
		if(this.player_object && typeof this.player_object.registerJSEvent) {
			clearInterval(this.eventInterval);

			this.registerCachedEvents();
			this.executePlayerEvent('PLAYER.STARTED', true);
		}
	};
	this.registerJSEvent = function(event) {
		this.player_instance.registerJSEvent(event, 'SvpPlayerInstances.instances[' + this.vars.rid + '].eventHandlers["' + event + '"].fireEvent');
	};
	this.onSuccessEmbed = function(self) {
		return function(e) {
			self.successEmbed(e);
		};
	}(this);
	this.successEmbed = function(e) {
		this.flashActive = false;

		if(e.success === true && typeof e.ref !== "undefined") {
			this.player_instance = e.ref;
			this.player_instance.style.display = 'block';
			this.flashActive = true;
		}
		else {
			this.player_instance = this.getObject(this.player_id);

			this.isMobile = this.iPlatform === true && (this.OS === "iPlatform" || navigator.userAgent.toLowerCase().indexOf("android") > -1);
			if(this.isMobile) {
				this.iPlatformVideoData();
			}
			else if(this.player_instance !== null) {
				this.player_instance.innerHTML = this.player_content_html;
			}
		}

		if(this.flashActive === true) {
			this.initEvents();
		}

		if(this.use_existing_div && this.need_new_layer && this.player_align === 'NONE') {
			this.getObject(this.player_object_id).innerHTML = '';
		}
		this.documentAppend = this.isMobile === false && this.browser !== 'Explorer' && this.browser !== 'Opera' && this.need_new_layer && !this.player_keep_state_on_scroll;
		if(this.documentAppend) {
			this._d.documentElement.appendChild(this.player_instance);
		}

		if(this.only_fs) {
			this.openFullscreen();
		}
		else if(this.need_new_layer) {
			this.positionPlayer();
		}
		if(this.is_responsive && this.flashActive){
			var that=this;
			setTimeout(function(){
				that.respond();
			}, 200);
		}
		if((this.only_fs || this.need_new_layer) && !this.player_keep_state_on_scroll) this.player_instance.style.zIndex = ++SvpPlayerIndexes + this.baseZindex;
	};
	this.destroy = function() {
		if(this.isPPV) svpDplayerUtils.PPV.destroy(this);
		if(this.isDownloadable) svpDplayerUtils.DL.destroy(this);

		this.removeListener(this._w, 'load', this.onLoad);
		this.removeListener(this._w, 'resize', this.onResize);

		if(this.visibilityInterval !== null) {
			clearInterval(this.visibilityInterval);
			this.visibilityInterval = null;
		}
		if(this.documentAppend) this._d.documentElement.removeChild(this.player_instance);
		if(this.isMobile) this._d.body.removeChild(this.player_instance);
		else swfobject.removeSWF(this.player_id);
		if(this.static_div && this.auto_show) this._d.body.removeChild(this.static_div);

		SvpPlayerInstances.removeInstance(this.vars.rid);
		delete this.player_instance;
	};
	this.show = function() {
		if(this.backup_player_id !== null) return false;
		var player_object = this.getObject(this.player_id);
		player_object.style.display = '';
		if(this.static_div) this.static_div.style.display = '';
		this.backup_player_id = this.player_id;
		this.backup_player_content = player_object.innerHTML;
		this.player_id = 'layer_' + this.player_id;
		this.attributes = {
			id: this.player_id,
			name: this.player_id
		};
		var player_content = this.createElement('div', this.player_id, this.player_id, 'width:' + this.player_width + 'px' + ';' + 'height:' + this.player_height + 'px' + ';');
		player_content.innerHTML = this.backup_player_content;
		player_object.innerHTML = '';
		player_object.appendChild(player_content);
		this.embedPlayer();
	};
	this.hide = function() {
		if(this.backup_player_id === null) return false;
		this.player_id = this.backup_player_id;
		this.attributes = {
			id: this.player_id,
			name: this.player_id
		};
		var player_object = this.getObject(this.player_id);
		player_object.style.display = 'none';
		if(this.static_div) this.static_div.style.display = 'none';
		this.destroy();
		player_object.innerHTML = this.backup_player_content;
		this.backup_player_id = null;
	};
	this.play = function() {this.player_instance.playerCommand('play');};
	this.pause = function() {this.player_instance.playerCommand('pause');};
	this.stop = function() {this.player_instance.playerCommand('stop');};
	this.toggle = function() {this.player_instance.playerCommand('toggle');};
	this.replay = function() {this.player_instance.playerCommand('replay');};
	this.adjust = function() {this.player_instance.playerCommand('adjust');};
	this.toggleAudio = function() {this.player_instance.playerCommand('toggle_audio');};
	this.mute = function() {this.player_instance.playerCommand('mute');};
	this.unMute = function() {this.player_instance.playerCommand('unmute');};
	this.seekToAndPlay = function(seconds) {this.player_instance.playerSeekToAndPlay(seconds);};
	this.seekToAndPause = function(seconds) {this.player_instance.playerSeekToAndPause(seconds);};
	this.setVolume = function(volume) {this.player_instance.playerSetVolume(volume);};
	this.loadVideo = function(videoID) {
		this.vars.clip_id = videoID;
		if(this.isMobile) {
			this.iPlatformVideoData(videoID);
		}
		else {

			if(this.getVideoID() !== videoID){
				this.player_instance.playerLoadVideo(videoID);
				this.executePlayerEvent('PLAYER.CLIP_CHANGED', true);
			}
		}
	};
	this.isPlaying = function() {return this.player_instance.get_isPlaying();};
	this.isPaused = function() {return this.player_instance.get_isPaused();};
	this.isComplete = function() {return this.player_instance.get_isComplete();};
	this.getVideoID = function() {return this.player_instance.get_videoID();};
	this.getStreamTime = function() {return this.player_instance.get_streamTime();};
	this.getStreamDuration = function() {return this.player_instance.get_streamDuration();};
	this.getVolume = function() {return this.player_instance.get_volume();};
	this.isMuted = function() {return this.player_instance.get_isMuted();};
	this.isLive = function() {return this.player_instance.get_isLive();};
	this.addPlayerEventListener = function(event, eventHandler) {
		var registered = false;
		if(typeof this.eventHandlers === "undefined") this.eventHandlers = {};
		if(typeof this.eventHandlers[event] === "undefined") this.eventHandlers[event] = {};
		else registered = true;
		if(typeof this.eventHandlers[event].listeners === "undefined") this.eventHandlers[event].listeners = [];

		this.eventHandlers[event].listeners.push(eventHandler);
		var thisEvent = event;
		var thisObject = this;
		if(typeof this.eventHandlers[event].fireEvent === "undefined") this.eventHandlers[event].fireEvent = function(args) {
			thisObject.executePlayerEvent(thisEvent, args);
		};
		if(this.player_instance && this.player_instance.registerJSEvent) {
			if(!registered) {
				this.registerJSEvent(event);
				this.setVisibilityInterval();
			}
		}
		else {
			var exists = false;
			if(typeof this.eventStack === "undefined") this.eventStack = [];
			for(var i = 0; i < this.eventStack.length; i++) {
				if(this.eventStack[i] === event) exists = true;
			}
			if(exists === false) this.eventStack.push(event);
		}
	};
	this.removePlayerEventListener = function(event, eventHandler) {
		if(typeof this.eventHandlers === "undefined") return;
		if(typeof this.eventHandlers[event] === "undefined") return;
		if(typeof this.eventHandlers[event].listeners === "undefined") return;
		for(var i = 0; i < this.eventHandlers[event].listeners.length; i++) {
			if(this.eventHandlers[event].listeners[i] === eventHandler) {
				this.eventHandlers[event].listeners.splice(i);
				break;
			}
		}
		if(this.eventHandlers[event].listeners.length === 0) delete this.eventHandlers[event];
		var empty = true;
		for(var k in this.eventHandlers) {
			empty = false;
			break;
		}
		if(empty && this.visibilityInterval !== null) {
			clearInterval(this.visibilityInterval);
			this.visibilityInterval = null;
		}
	};
	this.executePlayerEvent = function(event, args) {
		if(typeof this.eventHandlers === "undefined") return;
		if(typeof this.eventHandlers[event] === "undefined") return;
		if(typeof this.eventHandlers[event].listeners === "undefined") return;
		for(var i = 0; typeof this.eventHandlers[event] !== 'undefined' && i < this.eventHandlers[event].listeners.length; i++){
			this.eventHandlers[event].listeners[i](args,this,event);
		}
	};
	this.onConfirmResult = function(self) {
		return function(e, o) {
			var att=e.split(':'),
			s=typeof att[0]!=='undefined'?unescape(att[0]):'',
			ed=typeof att[1]!=='undefined'?unescape(att[1]).replace(/&amp;/g, '&').split(';'):'',
			m=typeof att[2]!=='undefined'?unescape(att[2]):'';
			var d = {};
			for(var i=0;i<ed.length;i++){
				var val=ed[i].split('=');
				var idx=val.shift();
				d[idx]=val.join('=');
			}
			if(d.code==='PPV')svpDplayerUtils.PPV.confirmResponse(o,d.code,s,m);
			else if(d.code==='DL'){
				var iframe = document.createElement('iframe');
				iframe.style.display = 'none';
				document.body.appendChild(iframe);
				iframe.src = d.storage_link;
			}
		};
	}(this);

	if(typeof vars !== "undefined") this.checkParsedVars(this.vars);
	if(typeof internal_params !== "undefined") this.checkParsedInternalParams(this.internal_params);
	this.bindPlayerEvents(this.defaultEventListeners);
	this.addPlayerEventListener('CONFIRM.RESULT', this.onConfirmResult);
}
function get_page() {
	return window.location.href;
}
function OpenFullScreen(id) {
	var instance = SvpPlayerInstances.getInstance(id);
	if(typeof instance != "undefined") {
		if(instance.only_fs) {
			instance.embedPlayer();
		}
		else {
			instance.openFullscreen();
		}
	}
	else if (typeof id != 'undefined') {
		SvpPlayerInstances.registerInstance(id, svp_player);
		svp_player.vars.rid = id;
		svp_player.embedPlayer();
	}
}
function ClosePlayer(id) {
	setTimeout(function() {
		DoClosePlayer(id);
	}, 50);
}
function DoClosePlayer(id) {
	var instance = SvpPlayerInstances.getInstance(id);
	instance.executePlayerEvent('PLAYER.CLOSED', true);
	if(instance.only_fs) {
		var link = instance.getObject('svp_' + id);
		instance.closeFullscreen();
		instance.destroy();
		if(link !== null) link.focus();
	}
	else if((typeof instance.vars.close_button != "undefined" && instance.vars.close_button == 1)) {
		instance.destroy();
	}
	else instance.closeFullscreen();
}
function playerInitialize(id) {
	var instance = SvpPlayerInstances.getInstance(id);
	instance.registerEvents();
}
function iPlatformFetchURL(id, video_src, image_src, event_data, live_video_data) {
	var instance = SvpPlayerInstances.getInstance(id);
	instance.videoTagEmbed(video_src, image_src, event_data, live_video_data);
}
if(typeof svpJSLoader === "undefined") {
	var svpJSLoader={};
	svpJSLoader.JS=(function(){
		var h,stack={},loaded=[],tr=0,mtr=5,tm=3000;
		function load(u,sC,eC,nt){
			var lock=true;
			for(var i=0;i<loaded.length;i++){
				if(loaded[i]===u){
					sC();return false;
				}
			}
			if(nt===1) lock=false;
			else{
				if(typeof stack[u]==='undefined'){
					stack[u]=[];
					lock=false;
				}
				stack[u].push({sC:sC,eC:eC});
			}
			if(!lock) {
				var s=document.createElement('script');
				s.id='svp_js_'+(new Date().getTime())+Math.floor((Math.random()*1000));
				s.src=u;
				s.async=true;
				s.onload=s.onreadystatechange=function(){
					if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){
						loaded.push(u);
						clearTimeout(t);
						s.onload=s.onreadystatechange=null;
						for(var i=0;i<stack[u].length;i++){
							var ob=stack[u][i].sC;
							if(typeof ob!=='undefined') ob();
						}
						delete stack[u];
					}
				};
				var t=setTimeout(function(){
					clearTimeout(t);
					h.removeChild(s);
					if(tr<mtr){
						tr++;
						svpJSLoader.JS.load(u,sC,eC,1);
					}
					else{
						tr=0;
						for(var i=0;i<stack[u].length;i++){
							var ob=stack[u][i].eC;
							if(typeof ob!=='undefined') ob();
						}
						delete stack[u];
					}
				},tm);
				if(!h) h=document.getElementsByTagName('head')[0];
				h.appendChild(s);
			}
		}
		return {
			load:load
		};
	}());
}