if (self.CavalryLogger) { CavalryLogger.start_js(["TiJJG"]); }

__d('rayInterceptsBox',['invariant'],(function a(b,c,d,e,f,g,h){function i(k,l){var m=Object.keys(k);l.forEach(function(n){m.indexOf(n)!==-1||h(0);typeof k[n]==='number'||h(0);});}var j={check:function k(l,m){i(l,['minX','maxX','minY','maxY']);i(m,['x','y','dx','dy']);l.maxX>l.minX&&l.maxY>l.minY||h(0);if(m.dx===0&&m.dy===0)return false;if(m.x>=l.minX&&m.x<=l.maxX&&m.y>=l.minY&&m.y<=l.maxY)return true;var n=(l.minX-m.x)/m.dx,o=(l.maxX-m.x)/m.dx,p=(l.minY-m.y)/m.dy,q=(l.maxY-m.y)/m.dy,r=Math.max(Math.min(n,o),Math.min(p,q)),s=Math.min(Math.max(n,o),Math.max(p,q));if(r<0)return false;if(r>s)return false;return true;}};f.exports=j;}),null);
__d('AdsMouseStateStore',['invariant','$','Arbiter','Event','EventEmitter','Run','SubscriptionsHandler','Vector','ge','keyMirror','rayInterceptsBox','throttle'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=30,l=500,m='pagelet_ego_pane',n=c('keyMirror')({STATIONARY:null,INTENT:null,HOVER:null,NO_INTENT:null});function o(event){try{return {x:event.clientX||event.x,y:event.clientY||event.y};}catch(r){var q=Math.random()*1000;return {x:q,y:q};}}i=babelHelpers.inherits(p,c('EventEmitter'));j=i&&i.prototype;function p(){var q=arguments.length<=0||arguments[0]===undefined?m:arguments[0],r=arguments.length<=1||arguments[1]===undefined?l:arguments[1];j.constructor.call(this);this.destroy=function(){if(this.$AdsMouseStateStore8)this.$AdsMouseStateStore8.release();this.removeAllListeners();}.bind(this);this.onPageTransition=function(event){this.$AdsMouseStateStore10();}.bind(this);this.onMouseMove=function(event){this.calculateState(o(event));}.bind(this);this.$AdsMouseStateStore7=q;this.$AdsMouseStateStore10();this.$AdsMouseStateStore8=new (c('SubscriptionsHandler'))().addSubscriptions(c('Event').listen(document,'mousemove',c('throttle')(this.onMouseMove,r)),c('Arbiter').subscribe('page_transition',this.onPageTransition));c('Run').onLeave(this.destroy);}p.prototype.$AdsMouseStateStore10=function(){this.$AdsMouseStateStore1=n.STATIONARY;this.$AdsMouseStateStore2=this.$AdsMouseStateStore3=0;this.$AdsMouseStateStore4=Date.now();this.$AdsMouseStateStore5=this.$AdsMouseStateStore7;this.$AdsMouseStateStore6=Infinity;};p.prototype.getState=function(){return this.$AdsMouseStateStore1;};p.prototype.updateRhcID=function(q){c('$')(q)||h(0);this.$AdsMouseStateStore5=q;};p.prototype.getRhcID=function(){return this.$AdsMouseStateStore5;};p.prototype.__updateMousePos=function(q){this.$AdsMouseStateStore2=q.x;this.$AdsMouseStateStore3=q.y;};p.prototype.isRhcPresent=function(){if(!c('ge')(this.$AdsMouseStateStore5))return false;var q=this.getRhcDimensions();return q.y>0&&q.x>0;};p.prototype.getRhc=function(){return c('$')(this.$AdsMouseStateStore5);};p.prototype.getRhcPosition=function(){return c('Vector').getElementPosition(this.getRhc());};p.prototype.getRhcScreenPos=function(){var q=c('Vector').getScrollPosition(),r=this.getRhcPosition();return {x:r.x-q.x,y:r.y-q.y};};p.prototype.getRhcDimensions=function(){return c('Vector').getElementDimensions(this.getRhc());};p.prototype.getPointToRectSquareDist=function(){return this.$AdsMouseStateStore6;};p.prototype.isPointWithinDist=function(q){var r=this.getPointToRectSquareDist();return r<=q*q;};p.prototype.getRhcBoundingBox=function(){var q=this.getRhcDimensions(),r=this.getRhcScreenPos();return {minX:r.x,maxX:r.x+q.x,minY:r.y,maxY:r.y+q.y};};p.prototype.$AdsMouseStateStore11=function(q){var r=this.getRhcBoundingBox(),s={x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2},t=Math.abs(r.minX-r.maxX),u=Math.abs(r.minY-r.maxY),v=Math.max(Math.abs(q.x-s.x)-t/2,0),w=Math.max(Math.abs(q.y-s.y)-u/2,0);this.$AdsMouseStateStore6=v*v+w*w;};p.prototype.isPosContainedInRhc=function(q){var r=this.getRhcBoundingBox();return q.x>=r.minX&&q.x<=r.maxX&&q.y>=r.minY&&q.y<=r.maxY;};p.prototype.hasMovedMinDistance=function(q){var r=q.x-this.$AdsMouseStateStore2,s=q.y-this.$AdsMouseStateStore3;return r*r+s*s>=k*k;};p.prototype.tooSoon=function(){return Date.now()-this.$AdsMouseStateStore4<l;};p.prototype.$AdsMouseStateStore12=function(){this.$AdsMouseStateStore4=Date.now();};p.prototype.calculateState=function(q){if(this.tooSoon())return;this.$AdsMouseStateStore12();if(!this.isRhcPresent())return;if(this.isPosContainedInRhc(q)){this.transitionToState(n.HOVER);this.$AdsMouseStateStore6=0;this.__updateMousePos(q);this.scheduleCheckup();return;}else if(!this.hasMovedMinDistance(q)){this.transitionToState(n.STATIONARY);return;}this.$AdsMouseStateStore11(q);var r=this.isMovingTowardsRhc(q)?n.INTENT:n.NO_INTENT;this.transitionToState(r);this.__updateMousePos(q);this.scheduleCheckup();};p.prototype.isMovingTowardsRhc=function(q){var r={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3};if(this.isPosContainedInRhc(r))return true;var s=this.getRhcBoundingBox(),t={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3,dx:q.x-this.$AdsMouseStateStore2,dy:q.y-this.$AdsMouseStateStore3};return c('rayInterceptsBox').check(s,t);};p.prototype.scheduleCheckup=function(){var q={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3};setTimeout(function(){this.calculateState(q);}.bind(this),l*1.5);};p.prototype.transitionToState=function(q){if(q===this.$AdsMouseStateStore1)return;this.$AdsMouseStateStore1=q;this.emit('change');};p.get=function(){if(!p.$AdsMouseStateStore13)p.$AdsMouseStateStore13=new p();return p.$AdsMouseStateStore13;};p.STATES=n;p.MIN_MOVE_DISTANCE=k;p.THROTTLE_TIME=l;f.exports=p;}),null);
__d('BusinessURI.brands',['BizSiteIdentifier.brands','BusinessConf','isFacebookURI','URI'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('URI'));i=h&&h.prototype;function j(l,m){'use strict';i.constructor.call(this,l);if(c('BizSiteIdentifier.brands').isBizSite()){var n=m||c('BizSiteIdentifier.brands').getBusinessID();if(n)this.addQueryData(c('BusinessConf').BIZ_ID_PARAM_NAME,n);if(!this.$BusinessURI1(this.getSubdomain()))this.setSubdomain(c('BusinessConf').DOMAIN);}if(!c('isFacebookURI')(this))throw new Error('Business URI must be FB URI');return this;}j.prototype.$BusinessURI1=function(l){'use strict';return l==='developers';};var k=function l(m,n){return new j(m,n);};k.BusinessURI=j;f.exports=k;}),null);
__d('FBProfilePhotoShadow.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';var l=this.props,m=l.className,n=l.children,o=babelHelpers.objectWithoutProperties(l,['className','children']),p=c('React').Children.only(n);return c('React').createElement('div',babelHelpers['extends']({},o,{className:c('joinClasses')(m,"_38vo")}),c('React').cloneElement(p,{className:c('joinClasses')(p.props.className,"_44ma")}));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d("ScriptPathState",["Arbiter"],(function a(b,c,d,e,f,g){var h,i,j,k,l=100,m={setIsUIPageletRequest:function n(o){j=o;},setUserURISampleRate:function n(o){k=o;},reset:function n(){h=null;i=false;j=false;},_shouldUpdateScriptPath:function n(){return i&&!j;},_shouldSendURI:function n(){return Math.random()<k;},getParams:function n(){var o={};if(m._shouldUpdateScriptPath()){if(m._shouldSendURI()&&h!==null)o.user_uri=h.substring(0,l);}else o.no_script_path=1;return o;}};c("Arbiter").subscribe("pre_page_transition",function(n,o){i=true;h=o.to.getUnqualifiedURI().toString();});f.exports=b.ScriptPathState=m;}),null);
__d('AjaxPipeRequest',['Arbiter','AsyncRequest','BigPipe','CSS','DOM','Env','PageEvents','PageletSet','ScriptPathState','URI','containsNode','ge','goOrReplace','performance','performanceAbsoluteNow'],(function a(b,c,d,e,f,g){var h,i=0;function j(m,n){var o=c('ge')(m);if(!o)return;if(!n)o.style.minHeight='100px';var p=c('PageletSet').getPageletIDs();for(var q=0;q<p.length;q++){var r=p[q];if(c('containsNode')(o,c('ge')(r)))c('PageletSet').removePagelet(r);}c('Arbiter').inform(c('PageEvents').AJAXPIPE_ONBEFORECLEARCANVAS,{canvasID:m});c('DOM').empty(o);c('Arbiter').inform('pagelet/destroy',{id:null,root:o});}function k(m,n){var o=c('ge')(m);if(o&&!n)o.style.minHeight='100px';}function l(m,n){'use strict';this._uri=m;this._query_data=n;this._request=new (c('AsyncRequest'))();this._request.disableArtilleryTracing();this._canvas_id=null;this._allow_cross_page_transition=true;this._arbiter=new (c('Arbiter'))();this._requestID=i++;}l.prototype.setCanvasId=function(m){'use strict';this._canvas_id=m;return this;};l.prototype.setURI=function(m){'use strict';this._uri=m;return this;};l.prototype.setData=function(m){'use strict';this._query_data=m;return this;};l.prototype.getData=function(m){'use strict';return this._query_data;};l.prototype.setAllowCrossPageTransition=function(m){'use strict';this._allow_cross_page_transition=m;return this;};l.prototype.setAppend=function(m){'use strict';this._append=m;return this;};l.prototype.send=function(){'use strict';this._arbiter.inform(c('PageEvents').AJAXPIPE_SEND,{rid:this._requestID,quickling:!!this._isQuickling,ts:c('performanceAbsoluteNow')()},c('Arbiter').BEHAVIOR_PERSISTENT);var m={ajaxpipe:1,ajaxpipe_token:c('Env').ajaxpipe_token};Object.assign(m,c('ScriptPathState').getParams());c('ScriptPathState').reset();this._request.setOption('useIframeTransport',true).setURI(this._uri).setData(Object.assign(m,this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._automatic){this._relevantRequest=h;}else h=this._request;if(this._isQuickling){var n=c('performance').clearResourceTimings||c('performance').webkitClearResourceTimings;if(n)n.call(c('performance'));}this._request.send();return this;};l.prototype._preBootloadFirstResponse=function(m){'use strict';return false;};l.prototype._fireDomContentCallback=function(){'use strict';this._arbiter.inform(c('PageEvents').AJAXPIPE_DOMREADY,true,c('Arbiter').BEHAVIOR_STATE);};l.prototype._fireOnloadCallback=function(){'use strict';if(window.console&&console.timeStamp)console.timeStamp('perf_trace {"name": "e2e",'+' "parent": "PageEvents.AJAXPIPE_ONLOAD"}');this._arbiter.inform(c('PageEvents').AJAXPIPE_ONLOAD,{lid:this.pipe.lid,rid:this._requestID,ts:c('performanceAbsoluteNow')()},c('Arbiter').BEHAVIOR_STATE);};l.prototype._isRelevant=function(m){'use strict';return this._request==h||this._automatic&&this._relevantRequest==h||this._jsNonBlock||h&&h._allowIrrelevantRequests;};l.prototype._preBootloadHandler=function(m){'use strict';var n=m.getPayload();if(!n||n.redirect||!this._isRelevant(m))return false;var o=false;if(m.is_first){!this._append&&!this._displayCallback&&j(this._canvas_id,this._constHeight);o=this._preBootloadFirstResponse(m);this.pipe=new (c('BigPipe'))({__sf:m.__sf,arbiter:this._arbiter,rootNodeID:this._canvas_id,lid:this._request.lid,rid:this._requestID,isAjax:true,domContentCallback:this._fireDomContentCallback.bind(this),onloadCallback:this._fireOnloadCallback.bind(this),domContentEvt:c('PageEvents').AJAXPIPE_DOMREADY,onloadEvt:c('PageEvents').AJAXPIPE_ONLOAD,jsNonBlock:this._jsNonBlock,automatic:this._automatic,displayCallback:this._displayCallback,allowIrrelevantRequests:this._allowIrrelevantRequests});}return o;};l.prototype._redirect=function(m){'use strict';if(m.redirect){if(m.force||!this.isPageActive(m.redirect)){var n=['ajaxpipe','ajaxpipe_token'].concat(this.getSanitizedParameters());c('goOrReplace')(window.location,new (c('URI'))(m.redirect).removeQueryData(n),true);}else{var o=b.PageTransitions;o.go(m.redirect,true);}return true;}else return false;};l.prototype.isPageActive=function(m){'use strict';return true;};l.prototype.getSanitizedParameters=function(){'use strict';return [];};l.prototype._versionCheck=function(m){'use strict';return true;};l.prototype._onInitialResponse=function(m){'use strict';var n=m.getPayload();if(!this._isRelevant(m))return false;if(!n)return true;if(this._redirect(n)||!this._versionCheck(n))return false;return true;};l.prototype._processFirstResponse=function(m){'use strict';var n=m.getPayload();if(c('ge')(this._canvas_id)&&n.canvas_class!=null)c('CSS').setClass(this._canvas_id,n.canvas_class);};l.prototype.setFirstResponseCallback=function(m){'use strict';this._firstResponseCallback=m;return this;};l.prototype.setFirstResponseHandler=function(m){'use strict';this._processFirstResponse=m;return this;};l.prototype._onResponse=function(m){'use strict';var n=m.payload;if(!this._isRelevant(m))return c('AsyncRequest').suppressOnloadToken;if(m.is_first){this._processFirstResponse(m);this._firstResponseCallback&&this._firstResponseCallback();n.provides=n.provides||[];n.provides.push('uipage_onload');}if(n){if('content' in n.content&&this._canvas_id!==null){if(this._append)n.append=this._canvas_id;var o=n.content.content;delete n.content.content;n.content[this._canvas_id]=o;}if(n.secondFlushPayload){this.pipe.setSecondFlushPayload(n.secondFlushPayload);}else this.pipe.onPageletArrive(n);}if(m.is_last)k(this._canvas_id,this._constHeight);return c('AsyncRequest').suppressOnloadToken;};l.prototype.setNectarModuleDataSafe=function(m){'use strict';this._request.setNectarModuleDataSafe(m);return this;};l.prototype.setFinallyHandler=function(m){'use strict';this._request.setFinallyHandler(m);return this;};l.prototype.setErrorHandler=function(m){'use strict';this._request.setErrorHandler(m);return this;};l.prototype.setTransportErrorHandler=function(m){'use strict';this._request.setTransportErrorHandler(m);return this;};l.prototype.abort=function(){'use strict';this._request.abort();if(h==this._request)h=null;this._request=null;return this;};l.prototype.setJSNonBlock=function(m){'use strict';this._jsNonBlock=m;return this;};l.prototype.setAutomatic=function(m){'use strict';this._automatic=m;return this;};l.prototype.setDisplayCallback=function(m){'use strict';this._displayCallback=m;return this;};l.prototype.setConstHeight=function(m){'use strict';this._constHeight=m;return this;};l.prototype.setAllowIrrelevantRequests=function(m){'use strict';this._allowIrrelevantRequests=m;return this;};l.prototype.getAsyncRequest=function(){'use strict';return this._request;};l.getCurrentRequest=function(){'use strict';return h;};l.setCurrentRequest=function(m){'use strict';h=m;};f.exports=l;}),null);
__d('DocumentTitle',['Arbiter'],(function a(b,c,d,e,f,g){var h=document.title,i=null,j=1500,k=[],l=0,m=null,n=false;function o(){if(k.length>0){if(!n){p(k[l].title);l=++l%k.length;}else q();}else{clearInterval(m);m=null;q();}}function p(s){document.title=s;n=true;}function q(){r.set(i||h,true);n=false;}var r={get:function s(){return h;},set:function s(t,u){document.title=t;if(!u){h=t;i=null;c('Arbiter').inform('update_title',t);}else i=t;},blink:function s(t){var u={title:t};k.push(u);if(m===null)m=setInterval(o,j);return {stop:function v(){var w=k.indexOf(u);if(w>=0){k.splice(w,1);if(l>w){l--;}else if(l==w&&l==k.length)l=0;}}};}};f.exports=r;}),null);
__d("Ease",[],(function a(b,c,d,e,f,g){var h={makePowerOut:function i(j){var k=h.makePowerIn(j);return function(l){return 1-k(1-l);};},makePowerIn:function i(j){return function(k){var l=Math.pow(k,j);return (l*10000|0)/10000;};},makePowerInOut:function i(j){var k=h.makePowerIn(j),l=h.makePowerOut(j);return function(m){return m<.5?.5*k(m*2):.5*l(m*2-1)+.5;};},expoOut:function i(j){return 1-Math.pow(2,-10*j);},expoIn:function i(j){return 1-h.expoOut(1-j);},expoInOut:function i(j){return j<.5?.5*h.expoIn(j*2):.5*h.expoOut(j*2-1)+.5;},sineOut:function i(j){return Math.sin(j*Math.PI*.5);},sineIn:function i(j){return 1-Math.cos(j*Math.PI*.5);},sineInOut:function i(j){return -.5*(Math.cos(Math.PI*j)-1);},circOut:function i(j){j--;return Math.sqrt(1-j*j);},circIn:function i(j){return 1-h.circOut(1-j);},circInOut:function i(j){return j<.5?.5*h.circIn(j*2):.5*h.circOut(j*2-1)+.5;},bounceOut:function i(j){if(j<1/2.75){return 7.5625*j*j;}else if(j<2/2.75){return 7.5625*(j-=1.5/2.75)*j+.75;}else if(j<2.5/2.75){return 7.5625*(j-=2.25/2.75)*j+.9375;}else return 7.5625*(j-=2.625/2.75)*j+.984375;},bounceIn:function i(j){return 1-h.bounceOut(1-j);},bounceInOut:function i(j){return j<.5?.5*h.bounceIn(j*2):.5*h.bounceOut(j*2-1)+.5;},makeBounceOut:function i(j){j=j||1;return function(k){k=(1-Math.cos(k*Math.PI*j))*(1-k)+k;return 1-Math.abs(1-k);};},makeBounceIn:function i(j){var k=h.makeBounceOut(j);return function(l){return 1-k(1-l);};},makeElasticOut:function i(j,k){j<1&&(j=1);var l=Math.PI*2;return function(m){if(m===0||m===1)return m;var n=k/l*Math.asin(1/j);return j*Math.pow(2,-10*m)*Math.sin((m-n)*l/k)+1;};},makeElasticIn:function i(j,k){var l=h.makeElasticOut(j,k);return function(m){return 1-l(1-m);};},makeElasticInOut:function i(j,k){k*=1.5;var l=h.makeElasticIn(j,k),m=h.makeElasticOut(j,k);return function(n){return n<.5?.5*l(n*2):.5*m(n*2-1)+.5;};},makeBackOut:function i(j){var k=h.makeBackIn(j);return function(l){return 1-k(1-l);};},makeBackIn:function i(j){return function(k){return k*k*((j+1)*k-j);};},makeBackInOut:function i(j){j*=1.525;var k=h.makeBackIn(j),l=h.makeBackOut(j);return function(m){return m<.5?.5*k(m*2):.5*l(m*2-1)+.5;};}};h.elasticOut=h.makeElasticOut(1,.3);h.elasticIn=h.makeElasticIn(1,.3);h.elasticInOut=h.makeElasticInOut(1,.3);h.backOut=h.makeBackOut(1.7);h.backIn=h.makeBackIn(1.7);h.backInOut=h.makeBackInOut(1.7);f.exports=h;}),null);
__d('MenuDeprecated',['Event','Arbiter','CSS','DataStore','DOM','HTML','Keys','Parent','Style','UserAgent_DEPRECATED','emptyFunction','Run'],(function a(b,c,d,e,f,g){var h='menu:mouseover',i=null;function j(t){if(c('CSS').hasClass(t,'uiMenuContainer'))return t;return c('Parent').byClass(t,'uiMenu');}function k(t){return c('Parent').byClass(t,'uiMenuItem');}function l(t){if(document.activeElement){var u=k(document.activeElement);return t.indexOf(u);}return -1;}function m(t){return c('DOM').find(t,'a.itemAnchor');}function n(t){return c('CSS').hasClass(t,'checked');}function o(t){return !c('CSS').hasClass(t,'disabled')&&c('Style').get(t,'display')!=='none';}function p(event){var t=document.activeElement;if(!t||!c('Parent').byClass(t,'uiMenu')||!c('DOM').isInputNode(t)){var u=k(event.getTarget());u&&s.focusItem(u);}}function q(t){c('UserAgent_DEPRECATED').firefox()&&m(t).blur();s.inform('select',{menu:j(t),item:t});}var r=function t(){r=c('emptyFunction');var u={};u.click=function(event){var v=k(event.getTarget());if(v&&o(v)){q(v);var w=m(v),x=w.href,y=w.getAttribute('rel');return y&&y!=='ignore'||x&&x.charAt(x.length-1)!=='#';}};u.keydown=function(event){var v=event.getTarget();if(event.getModifiers().any)return;if(!i||c('DOM').isInputNode(v))return;var w=c('Event').getKeyCode(event),x;switch(w){case c('Keys').UP:case c('Keys').DOWN:var y=s.getEnabledItems(i);x=l(y);s.focusItem(y[x+(w===c('Keys').UP?-1:1)]);return false;case c('Keys').SPACE:var z=k(v);if(z){q(z);event.prevent();}break;default:var aa=String.fromCharCode(w).toLowerCase(),ba=s.getEnabledItems(i);x=l(ba);var ca=x,da=ba.length;while(~x&&(ca=++ca%da)!==x||!~x&&++ca<da){var ea=s.getItemLabel(ba[ca]);if(ea&&ea.charAt(0).toLowerCase()===aa){s.focusItem(ba[ca]);return false;}}}};c('Event').listen(document.body,u);},s=Object.assign(new (c('Arbiter'))(),{focusItem:function t(u){if(u&&o(u)){this._removeSelected(j(u));c('CSS').addClass(u,'selected');m(u).focus();}},getEnabledItems:function t(u){return s.getItems(u).filter(o);},getCheckedItems:function t(u){return s.getItems(u).filter(n);},getItems:function t(u){return c('DOM').scry(u,'li.uiMenuItem');},getItemLabel:function t(u){return u.getAttribute('data-label',2)||'';},isItemChecked:function t(u){return c('CSS').hasClass(u,'checked');},autoregister:function t(u,v,w){u.subscribe('show',function(){s.register(v,w);});u.subscribe('hide',function(){s.unregister(v);});},register:function t(u,v){u=j(u);r();if(!c('DataStore').get(u,h))c('DataStore').set(u,h,c('Event').listen(u,'mouseover',p));if(v!==false)i=u;},setItemEnabled:function t(u,v){if(!v&&!c('DOM').scry(u,'span.disabledAnchor')[0])c('DOM').appendContent(u,c('DOM').create('span',{className:c('DOM').find(u,'a').className+' disabledAnchor'},c('HTML')(m(u).innerHTML)));c('CSS').conditionClass(u,'disabled',!v);},toggleItem:function t(u){var v=!s.isItemChecked(u);s.setItemChecked(u,v);},setItemChecked:function t(u,v){c('CSS').conditionClass(u,'checked',v);m(u).setAttribute('aria-checked',v);},unregister:function t(u){u=j(u);var v=c('DataStore').remove(u,h);v&&v.remove();i=null;this._removeSelected(u);},_removeSelected:function t(u){s.getItems(u).filter(function(v){return c('CSS').hasClass(v,'selected');}).forEach(function(v){c('CSS').removeClass(v,'selected');});}});f.exports=s;}),null);
__d('OnVisible',['Arbiter','DOM','Event','Parent','Run','Vector','ViewportBounds','coalesce','queryThenMutateDOM'],(function a(b,c,d,e,f,g){var h=[],i,j=0,k=[],l,m,n,o,p;function q(){h.forEach(function(w){w.remove();});if(m){m.remove();l.remove();i.unsubscribe();m=l=i=null;}j=0;h.length=0;}function r(){if(!h.length){q();return;}k.length=0;n=c('Vector').getScrollPosition().y;o=c('Vector').getViewportDimensions().y;p=c('ViewportBounds').getTop();for(var w=0;w<h.length;++w){var x=h[w];if(isNaN(x.elementHeight))k.push(w);x.elementHeight=c('Vector').getElementDimensions(x.element).y;x.elementPos=c('Vector').getElementPosition(x.element);x.hidden=c('Parent').byClass(x.element,'hidden_elem');if(x.scrollArea){x.scrollAreaHeight=c('Vector').getElementDimensions(x.scrollArea).y;x.scrollAreaY=c('Vector').getElementPosition(x.scrollArea).y;}}j=w;}function s(){for(var w=Math.min(h.length,j)-1;w>=0;--w){var x=h[w];if(!x.elementPos||x.removed){h.splice(w,1);continue;}if(x.hidden)continue;var y=n+o+x.buffer,z=false;if(y>x.elementPos.y){var aa=n+p-x.buffer,ba=n+p+o+x.buffer,ca=x.elementPos.y+x.elementHeight,da=!x.strict||aa<x.elementPos.y&&ba>ca;z=da;if(z&&x.scrollArea){var ea=x.scrollAreaY+x.scrollAreaHeight+x.buffer;z=x.elementPos.y>=x.scrollAreaY-x.buffer&&x.elementPos.y<ea;}}if(x.inverse?!z:z){x.remove();x.handler(k.indexOf(w)!==-1);}}}function t(){u();if(h.length)return;m=c('Event').listen(window,'scroll',u);l=c('Event').listen(window,'resize',u);i=c('Arbiter').subscribe('dom-scroll',u);}function u(){c('queryThenMutateDOM')(r,s,'OnVisible/positionCheck');}function v(w,x,y,z,aa,ba){'use strict';this.element=w;this.handler=x;this.strict=y;this.buffer=c('coalesce')(z,300);this.inverse=c('coalesce')(aa,false);this.scrollArea=ba||null;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible1();if(h.length===0)c('Run').onLeave(q);t();h.push(this);}v.prototype.remove=function(){'use strict';if(this.removed)return;this.removed=true;if(this.scrollAreaListener)this.scrollAreaListener.remove();};v.prototype.reset=function(){'use strict';this.elementHeight=null;this.removed=false;if(this.scrollArea)this.scrollAreaListener=this.$OnVisible1();h.indexOf(this)===-1&&h.push(this);t();};v.prototype.setBuffer=function(w){'use strict';this.buffer=w;u();};v.prototype.checkBuffer=function(){'use strict';u();};v.prototype.getElement=function(){'use strict';return this.element;};v.prototype.$OnVisible1=function(){'use strict';return c('Event').listen(c('DOM').find(this.scrollArea,'.uiScrollableAreaWrap'),'scroll',this.checkBuffer);};Object.assign(v,{checkBuffer:u});f.exports=v;}),null);
__d('XAsyncRequest',['AsyncRequest'],(function a(b,c,d,e,f,g){function h(i){'use strict';this.$XAsyncRequest1=new (c('AsyncRequest'))(i);}h.prototype.setMethod=function(i){'use strict';this.$XAsyncRequest1.setMethod(i);return this;};h.prototype.setData=function(i){'use strict';this.$XAsyncRequest1.setData(i);return this;};h.prototype.setHandler=function(i){'use strict';this.$XAsyncRequest1.setHandler(i);return this;};h.prototype.setErrorHandler=function(i){'use strict';this.$XAsyncRequest1.setErrorHandler(i);return this;};h.prototype.send=function(){'use strict';this.$XAsyncRequest1.send();return this;};h.prototype.abort=function(){'use strict';this.$XAsyncRequest1.abort();};f.exports=h;}),null);
__d("UIPageletContentCache",[],(function a(b,c,d,e,f,g){var h={cache:{},getContent:function i(j){if(j in this.cache)return this.cache[j];return null;},setContent:function i(j,k){this.cache[j]=k;}};f.exports=h;}),null);
__d('UIPagelet',['ActorURI','AjaxPipeRequest','AsyncRequest','DOM','HTML','ScriptPathState','UIPageletContentCache','URI','emptyFunction','ge','isElementNode'],(function a(b,c,d,e,f,g){function h(i,j,k){'use strict';var l=i&&c('isElementNode')(i)?i.id:i;this._id=l||null;this._element=c('ge')(i||c('DOM').create('div'));this._src=j||null;this._context_data=k||{};this._data={};this._handler=c('emptyFunction');this._request=null;this._use_ajaxpipe=false;this._use_post_request=false;this._is_bundle=true;this._allow_cross_page_transition=false;this._append=false;this._cache_content=false;this._content_cache_key='';}h.prototype.getElement=function(){'use strict';return this._element;};h.prototype.setHandler=function(i){'use strict';this._handler=i;return this;};h.prototype.go=function(i,j){'use strict';if(arguments.length>=2||typeof i=='string'){this._src=i;this._data=j||{};}else if(arguments.length==1)this._data=i;this.refresh();return this;};h.prototype.setAllowCrossPageTransition=function(i){'use strict';this._allow_cross_page_transition=i;return this;};h.prototype.setBundleOption=function(i){'use strict';this._is_bundle=i;return this;};h.prototype.setErrorHandler=function(i){'use strict';this._errorHandler=i;return this;};h.prototype.setTransportErrorHandler=function(i){'use strict';this.transportErrorHandler=i;return this;};h.prototype.refresh=function(){'use strict';if(this._use_ajaxpipe){c('ScriptPathState').setIsUIPageletRequest(true);this._request=new (c('AjaxPipeRequest'))();this._request.setCanvasId(this._id).setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler).setAllowIrrelevantRequests(this._allowIrrelevantRequests);if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);}else{if(this._cache_content){var i=c('UIPageletContentCache').getContent(this._content_cache_key);if(i!==null){this.handleContent(i);return this;}}var j=function(n){this._request=null;var o=c('HTML')(n.getPayload());this.handleContent(o);if(this._cache_content)c('UIPageletContentCache').setContent(this._content_cache_key,o);}.bind(this),k=this._displayCallback,l=this._finallyHandler;this._request=new (c('AsyncRequest'))().setMethod('GET').setReadOnly(true).setOption('bundle',this._is_bundle).setHandler(function(n){if(k){k(j.bind(null,n));}else j(n);l&&l();});if(this._errorHandler)this._request.setErrorHandler(this._errorHandler);if(this.transportErrorHandler)this._request.setTransportErrorHandler(this.transportErrorHandler);if(this._use_post_request)this._request.setMethod('POST');}var m=babelHelpers['extends']({},this._context_data,this._data);if(this._actorID)m[c('ActorURI').PARAMETER_ACTOR]=this._actorID;this._request.setURI(this._src).setAllowCrossPageTransition(this._allow_cross_page_transition).setData({data:JSON.stringify(m)}).send();return this;};h.prototype.handleContent=function(i){'use strict';if(this._append){c('DOM').appendContent(this._element,i);}else c('DOM').setContent(this._element,i);this._handler();};h.prototype.cancel=function(){'use strict';if(this._request)this._request.abort();};h.prototype.setUseAjaxPipe=function(i){'use strict';this._use_ajaxpipe=!!i;return this;};h.prototype.setUsePostRequest=function(i){'use strict';this._use_post_request=!!i;return this;};h.prototype.setAppend=function(i){'use strict';this._append=!!i;return this;};h.prototype.setJSNonBlock=function(i){'use strict';this._jsNonblock=!!i;return this;};h.prototype.setAutomatic=function(i){'use strict';this._automatic=!!i;return this;};h.prototype.setDisplayCallback=function(i){'use strict';this._displayCallback=i;return this;};h.prototype.setConstHeight=function(i){'use strict';this._constHeight=!!i;return this;};h.prototype.setFinallyHandler=function(i){'use strict';this._finallyHandler=i;return this;};h.prototype.setAllowIrrelevantRequests=function(i){'use strict';this._allowIrrelevantRequests=i;return this;};h.prototype.setActorID=function(i){'use strict';this._actorID=i;return this;};h.prototype.setCacheContent=function(i){'use strict';this._cache_content=i;return this;};h.prototype.setContentCacheKey=function(i){'use strict';this._content_cache_key=i;return this;};h.appendToInline=function(i,j){'use strict';var k=c('ge')(i),l=c('ge')(j);if(k&&l){while(l.firstChild)c('DOM').appendContent(k,l.firstChild);c('DOM').remove(l);}};h.loadFromEndpoint=function(i,j,k,l){'use strict';l=l||{};var m='/ajax/pagelet/generic.php/'+i;if(l.intern)m='/intern'+m;var n=new (c('URI'))(m.replace(/\/+/g,'/'));if(l.subdomain)n.setSubdomain(l.subdomain);var o=false,p='';if(l.contentCacheKey){o=true;p=i+','+String(l.contentCacheKey);}var q=new h(j,n,k).setUseAjaxPipe(l.usePipe).setBundleOption(l.bundle!==false).setAppend(l.append).setJSNonBlock(l.jsNonblock).setAutomatic(l.automatic).setDisplayCallback(l.displayCallback).setConstHeight(l.constHeight).setAllowCrossPageTransition(l.crossPage).setFinallyHandler(l.finallyHandler||c('emptyFunction')).setErrorHandler(l.errorHandler).setTransportErrorHandler(l.transportErrorHandler).setAllowIrrelevantRequests(l.allowIrrelevantRequests).setActorID(l.actorID).setCacheContent(o).setContentCacheKey(p).setUsePostRequest(l.usePostRequest);l.handler&&q.setHandler(l.handler);q.go();return q;};h.loadFromEndpointBatched=function(i,j,k){'use strict';var l=i.slice(0,k),m=i.slice(k);if(m.length>0){var n=l[l.length-1],o=c('emptyFunction');if(n.options&&n.options.finallyHandler)o=n.options.finallyHandler;n.options=babelHelpers['extends']({},n.options,{finallyHandler:function p(){o();window.setTimeout(function(){h.loadFromEndpointBatched(m,j,k);},1);}});}l.forEach(function(p){h.loadFromEndpoint(p.controller,p.target_element,p.data,babelHelpers['extends']({},p.options,j,{bundle:true}));});};f.exports=h;}),null);
__d('idx',[],(function a(b,c,d,e,f,g){'use strict';function h(n,o){try{return o(n);}catch(p){if(p instanceof TypeError)if(j(p)){return null;}else if(l(p))return undefined;throw p;}}var i=void 0;function j(n){var o=n.message;if(!i)i=m(null);return i.test(o);}var k=void 0;function l(n){var o=n.message;if(!k)k=m(undefined);return k.test(o);}var m=new Function('$object$','\n  try {\n    $object$.$property$;\n  } catch (error) {\n    return new RegExp(\n      error.message\n        .replace(/[-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g, \'\\\\$&\')\n        .replace(\'\\\\$object\\\\$\', \'.+\')\n        .replace(\'\\\\$property\\\\$\', \'.+\')\n    );\n  }\n  throw new Error(\'Expected property access on \' + $object$ + \' to throw.\');\n');f.exports=h;}),null);
__d('randomShuffle',['randomInt'],(function a(b,c,d,e,f,g){function h(i){for(var j=i.length-1;j>0;j--){var k=c('randomInt').call(this,j+1);if(k!=j){var l=i[k];i[k]=i[j];i[j]=l;}}return i;}f.exports=h;}),null);
__d('base62',[],(function a(b,c,d,e,f,g){'use strict';var h='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';function i(j){if(!j)return '0';var k='';while(j>0){k=h[j%62]+k;j=Math.floor(j/62);}return k;}f.exports=i;}),null);
__d("XPlatformXOutableElementController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/platform\/async\/xoutelement\/",{type:{type:"Enum",required:true,enumType:0},fbid:{type:"Int",required:true}});}),null);