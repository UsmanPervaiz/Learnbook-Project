if (self.CavalryLogger) { CavalryLogger.start_js(["1FgDE"]); }

__d("ChatReliabilityEvents",[],(function a(b,c,d,e,f,g){f.exports={ERROR:"error",CHANNEL_DISCONNECT:"channel_disconnect",CHANNEL_CONNECT:"channel_connect",CHANNEL_INIT:"channel_init",CHANNEL_NOCONFIG:"channel_noconfig",CHANNEL_HISTORY_INVALID:"channel_history_invalid",CHANNEL_STALLED:"channel_stalled",MESSAGE_RECEIVED:"msg_received",THREAD_INFO_ENDPOINT_FATAL:"thread_info_fatal"};}),null);
__d("ChatSidebarSections",[],(function a(b,c,d,e,f,g){f.exports={ADMINED_PAGES:"admined_pages",MORE_ONLINE_FRIENDS:"more_online_friends",MORE_ONLINE_COWORKERS:"more_online_coworkers",OFFLINE_USERS:"offline_users",ORDERED_LIST:"ordered_list",ORDERED_COWORKERS:"ordered_coworkers",TYPEAHEAD:"typeahead",NOW_PINNED_LIST:"now_pinned_list",NEARBY:"nearby"};}),null);
__d("MessagingTag",[],(function a(b,c,d,e,f,g){f.exports={GROUPS:"groups",UNREAD:"unread",FLAGGED:"flagged",ACTION_ARCHIVED:"action:archived",INBOX:"inbox",OTHER:"other",PENDING:"pending",MONTAGE:"montage",EVENT:"event",SENT:"sent",SPAM:"spam",UPDATES:"broadcasts_inbox",BCC:"header:bcc",FILTERED_CONTENT:"filtered_content",FILTERED_CONTENT_BH:"filtered_content_bh",FILTERED_CONTENT_ACCOUNT:"filtered_content_account",FILTERED_CONTENT_QUASAR:"filtered_content_quasar",FILTERED_CONTENT_INVALID_APP:"filtered_content_invalid_app",UNAVAILABLE_ATTACHMENT:"unavailable_attachment",ARCHIVED:"archived",EMAIL:"email",VOICEMAIL:"voicemail",SPAM_SPOOFING:"spam:spoofing",SPOOF_WARNING:"MTA:spoof_warning",SMS_TAG_ROOT:"SMSShortcode:",APP_ID_ROOT:"app_id:",DOMAIN_AUTH_PASS:"MTA:dmarc:pass",DOMAIN_AUTH_FAIL:"MTA:dmarc:fail",MTA_SYSTEM_MESSAGE:"MTA:system_message",EMAIL_MESSAGE:"source:email",MARKETPLACE:"marketplace",ROOM:"room",IRIS_MAPPING:{FOLDER_INVALID:null,FOLDER_INBOX:"inbox",FOLDER_OTHER:"other",FOLDER_SPAM:"spam",FOLDER_PENDING:"pending",FOLDER_MONTAGE:"montage",FOLDER_HIDDEN:"hidden",FOLDER_DISABLED:"disabled"}};}),null);
__d("PagesLoggerEventEnum",[],(function a(b,c,d,e,f,g){f.exports={CLICK:"click",CREATE:"create",DELETE:"delete",DRAG:"drag",HOVER:"hover",IMPRESSION:"impression",RECEIVE_REQUEST:"receive_request",RECEIVE_RESPONSE:"receive_response",SCROLL:"scroll",SEND_REQUEST:"send_request",SEND_RESPONSE:"send_response",UPDATE:"update"};}),null);
__d("PagesLoggerEventTargetEnum",[],(function a(b,c,d,e,f,g){f.exports={ABOUT_TAB:"about_tab",CONFIRM_APPLY_PAGE_TEMPLATE_BUTTON:"confirm_apply_page_template_button",EDIT_PAGE_TEMPLATE_ROW:"edit_page_template_row",PAGE_GET_DIRECTIONS:"page_get_directions",PAGE_MESSAGE:"page_message",PAGE_PHONE:"page_phone",PAGE_PROFILE:"page_profile",PAGE_SAVE:"page_save",PAGE_TAB_BAR:"page_tab_bar",PAGE_TEMPLATE:"page_template",PAGE_TEMPLATE_NUX_TOUR:"page_template_nux_tour",PAGE_WEBSITE:"page_website",PAGES_COVER_VIDEO:"pages_cover_video",PAGES_PRIMARY_CTA_BUTTON:"pages_primary_cta_button"};}),null);
__d("SyncRequestStatusEnum",[],(function a(b,c,d,e,f,g){f.exports={PENDING:0,ACCEPTED:1,REJECTED:2,EXPIRED:3,CANCELED:4,namesByValue:["PENDING","ACCEPTED","REJECTED","EXPIRED","CANCELED"]};}),null);
__d("VideoPlayerOrigins",[],(function a(b,c,d,e,f,g){f.exports={NEWSFEED:"newsfeed",USER_TIMELINE:"user_timeline",PAGE_TIMELINE:"page_timeline",PERMALINK:"permalink",GROUP:"group",CONNECTED_TV:"connected_tv",CONNECTED_TV_DISCOVERY:"connected_tv_discovery",CONNECTED_TV_PLAYER:"connected_tv_player",CONNECTED_TV_PROFILE:"connected_tv_profile",VIDEO_HOME:"video_home",VIDEO_HOME_FEED:"video_home_feed",VIDEO_HOME_REACTION:"video_home_reaction",VIDEO_HOME_MAIN:"video_home_main",VIDEO_HOME_GUIDE:"video_home_guide",VIDEO_TAB:"video_tab",EXTERNAL:"external",INSTANT_ARTICLES:"instant_articles",INTERN:"intern",BACKSTAGE:"backstage",INSTANT_SHOPPING:"instant_shopping",REDSPACE:"redspace",SAVED:"saved",SEARCH:"search",NOTIFICATIONS:"notifications",UNKNOWN:"unknown",LIVE_CONTROL_PANEL:"live_control_panel",LIVE_MAP:"live_map",LIVE_REDIRECT:"live_redirect",LIVE_EMBED_REDIRECT:"live_embed_redirect",LOCAL_NEWS:"local_news",PAGES_MODULE:"pages_module",PAGES_VIDEO_TAB:"pages_video_tab",BACKGROUND_PLAY:"background_play",QUICK_PROMOTION:"quick_promotion",CULTURAL_MOMENTS:"cultural_moments_share",SPHERIAL_VIDEO_EDITING:"spherial_video_editing",EXPLORE_FEED:"explorefeed",RHC:"rhc",ADS:"ads",CANVAS:"canvas",COMMERCE:"commerce",COMPOSER:"composer",DASH:"dash",FACEWEB:"faceweb",FEEDBACK:"feedback",FRIENDS:"friends",EVENTS:"events",HELP:"help",INFRASTRUCTURE:"infrastructure",LOGIN:"login",MARKETING:"marketing",MESSAGING:"messaging",NAVIGATION:"navigation",PHOTOS:"photos",PRIVACY:"privacy",SETTINGS:"settings",STORY_VIEW:"story_view",WEBVIEW:"webview",TRENDING:"trending",FACECAST_NUX:"facecast_nux",PIXELCLOUD:"pixelcloud",TAROT:"tarot",GAMEROOM:"gameroom",LEARN:"learn",BEEPER:"beeper",FACECAST_BEEPER:"facecast_beeper",JOB_SEARCH:"job_search",TOP_LIVE_BOOKMARK:"top_live_bookmark"};}),null);
__d('ChatproxyPresence',['Arbiter','AvailableListConstants','AvailableListInitialData','BanzaiODS','ChannelConstants','LastActiveTimes','PresenceStatus','debounceAcrossTransitions','ClientChromeExperimentsData'],(function a(b,c,d,e,f,g){var h=c('ClientChromeExperimentsData').ClientChromeAvailableListInitialDataPreloader;function i(k){var l=k.activeList,m=k.lastActiveTimes;if(l)c('PresenceStatus').setMultiActive(l,'available_list_active');if(m&&!Array.isArray(m))c('LastActiveTimes').update(m);}function j(k){'use strict';this.$ChatproxyPresence1=k;this.$ChatproxyPresence2=false;this.$ChatproxyPresence3=c('AvailableListInitialData').chatNotif;this.$ChatproxyPresence4=false;if(h){h.onLoaded(i);}else i(c('AvailableListInitialData'));}j.prototype.subscribe=function(){'use strict';c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('chatproxy-presence'),this.updatePresenceInfo.bind(this));c('Arbiter').subscribe(c('ChannelConstants').ON_INVALID_HISTORY,function(){this.$ChatproxyPresence2=true;}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').RTI_SESSION,function(k,l){if(l)this.$ChatproxyPresence4=l;}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('get_debug_presence'),function(k,l){var m=c('PresenceStatus').getAllDebugInfo(),n=c('LastActiveTimes').getDebugData();for(var o in n){var p=m[o];if(p===undefined){p={};m[o]=p;}p.l=Math.floor(n[o]);}this.$ChatproxyPresence4.issueRequest('/debug_presence',{},m,function(){c('BanzaiODS').bumpEntityKey('ChatproxyPresence','debug_presence.sucess');});}.bind(this));};j.prototype.getRTISession=function(){'use strict';return this.$ChatproxyPresence4;};j.prototype.updatePresenceInfo=function(k,l){'use strict';if(this.$ChatproxyPresence2){this.$ChatproxyPresence2=false;c('PresenceStatus').resetPresenceData();}l=l.obj;var m=l.buddyList;c('PresenceStatus').setMultiChatproxy(m);var n=false;if(l.chatNotif!==undefined)n=this.$ChatproxyPresence3!==l.chatNotif;if(n)this.$ChatproxyPresence3=l.chatNotif;if(l.gamers)c('PresenceStatus').setPlayingCanvasGameFriends(l.gamers);if(n)this.$ChatproxyPresence1(c('AvailableListConstants').ON_CHAT_NOTIFICATION_CHANGED,this.$ChatproxyPresence3);c('debounceAcrossTransitions')(function(){this.$ChatproxyPresence1(c('AvailableListConstants').ON_AVAILABILITY_CHANGED);}.bind(this),0)();};j.prototype.getWebChatNotification=function(){'use strict';return this.$ChatproxyPresence3;};f.exports=j;}),18);
__d('ChatReliabilityTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:ChatReliabilityLoggerConfig',this.$ChatReliabilityTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:ChatReliabilityLoggerConfig',this.$ChatReliabilityTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$ChatReliabilityTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$ChatReliabilityTypedLogger1=babelHelpers['extends']({},this.$ChatReliabilityTypedLogger1,j);return this;};h.prototype.setEvent=function(j){this.$ChatReliabilityTypedLogger1.event=j;return this;};h.prototype.setEventData=function(j){this.$ChatReliabilityTypedLogger1.event_data=j;return this;};var i={event:true,event_data:true};f.exports=h;}),18);
__d('ChatReliabilityInstrumentation',['ChatReliabilityEvents','ChatReliabilityTypedLogger','MercuryConfig'],(function a(b,c,d,e,f,g){'use strict';var h=function j(event,k){if(!c('MercuryConfig').EnableReliabilityLogging)return;new (c('ChatReliabilityTypedLogger'))().setEvent(event).setEventData(k).log();},i={logERROR:function j(k){h(c('ChatReliabilityEvents').ERROR,k);},logCHANNEL_DISCONNECT:function j(k){h(c('ChatReliabilityEvents').CHANNEL_DISCONNECT,k);},logCHANNEL_CONNECT:function j(k){h(c('ChatReliabilityEvents').CHANNEL_CONNECT,k);},logCHANNEL_HISTORY_INVALID:function j(k){h(c('ChatReliabilityEvents').CHANNEL_HISTORY_INVALID,k);},logMESSAGE_RECEIVED:function j(k){h(c('ChatReliabilityEvents').MESSAGE_RECEIVED,k);},logCHANNEL_STALLED:function j(k){h(c('ChatReliabilityEvents').CHANNEL_STALLED,k);},logCHANNEL_INIT:function j(k){h(c('ChatReliabilityEvents').CHANNEL_INIT,k);},logCHANNEL_NOCONFIG:function j(k){h(c('ChatReliabilityEvents').CHANNEL_NOCONFIG,k);}};f.exports=i;}),null);
__d('PresenceStatusActionTypes',['keyMirror'],(function a(b,c,d,e,f,g){'use strict';f.exports=c('keyMirror')({AVAILABILITY_CHANGED:null});}),null);
__d("TypingStates",[],(function a(b,c,d,e,f,g){var h={INACTIVE:0,TYPING:1,QUITTING:2};f.exports=h;}),null);
__d('AvailableList',['Arbiter','ArbiterMixin','AsyncRequest','AvailableListConstants','BanzaiODS','Bootloader','ChannelConstants','ChatConfig','ChatDispatcher','ChatproxyPresence','ChatReliabilityInstrumentation','ChatVisibility','CurrentUser','FBID','ErrorUtils','JSLogger','LastActiveTimes','PresencePrivacy','PresenceStatus','PresenceStatusActionTypes','Run','ServerTime','TypingStates','debounceAcrossTransitions','emptyFunction','requireWeak'],(function a(b,c,d,e,f,g){'use strict';c('BanzaiODS').setEntitySample('presence',.0001);var h=babelHelpers['extends']({},c('AvailableListConstants'),c('ArbiterMixin')),i=/\D/;h.subscribe([c('AvailableListConstants').ON_AVAILABILITY_CHANGED,c('AvailableListConstants').ON_UPDATE_ERROR],function(p,q){c('Arbiter').inform(p,q);});c('PresenceStatus').subscribe('change',c('debounceAcrossTransitions')(function(){h.inform(c('AvailableListConstants').ON_AVAILABILITY_CHANGED);},0));var j=c('debounceAcrossTransitions')(function(){h.inform(c('AvailableListConstants').ON_AVAILABILITY_CHANGED);c('ChatDispatcher').dispatch({type:c('PresenceStatusActionTypes').AVAILABILITY_CHANGED});},0);function k(p,q,r,s,t){if(p===c('CurrentUser').getID())return;var u=c('PresenceStatus').set(p,q,r,s,t);if(u){var v=c('debounceAcrossTransitions')(function(){h.inform(c('AvailableListConstants').ON_AVAILABILITY_CHANGED,p);c('ChatDispatcher').dispatch({type:c('PresenceStatusActionTypes').AVAILABILITY_CHANGED,id:p});},0);v();}}function l(p){var q=p.payload.availability||{};for(var r in q)k(r&&r.toString(),q[r].a,true,'mercury_tabs',q[r].c);}function m(p){if(!p||i.test(p)){c('ChatReliabilityInstrumentation').logERROR('bad id for available list: '+p);return;}new (c('AsyncRequest'))('/ajax/mercury/tabs_presence.php').setData({target_id:p}).setHandler(l).setErrorHandler(c('emptyFunction')).setAllowCrossPageTransition(true).send();}function n(p,q){q.chat_config=c('ChatConfig').getDebugInfo();q.available_list_debug_info={count:c('PresenceStatus').getOnlineIDs().length};}var o=undefined;try{o=new (c('ChatproxyPresence'))(function(event){h.inform(event);});o.subscribe();}catch(p){c('ErrorUtils').reportError&&c('ErrorUtils').reportError(p,false);c('ChatReliabilityInstrumentation').logERROR(p.getMessage());}Object.assign(h,{getChatproxyPresenceObject:function p(){return o;},get:function p(q){return c('PresenceStatus').get(q);},updateForID:function p(q){if(c('ChatConfig').get('presence_page_green_dot_sub')&&!c('FBID').isUser(q))return;m(q);if(c('PresencePrivacy').getVisibility()==c('PresencePrivacy').ONLINE)c('Run').onAfterLoad(function(){return c('Bootloader').loadModules(["ChannelManager","ChannelTransport"],function(r,s){r.startChannelManager();s.sendAdditionalBuddyRequest(r.getCompleteConfig(),q);},'AvailableList');});},getWebChatNotification:function p(){return o&&o.getWebChatNotification();},isReady:function p(){return !!o;},set:function p(q,r,s,t){k(q,r,true,s,t);}});c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,n);c('PresencePrivacy').subscribe(['privacy-changed','privacy-availability-changed','privacy-user-presence-response'],j);c('requireWeak')('ChannelConnection',function(p){return p.subscribe([p.CONNECTED,p.RECONNECTING,p.SHUTDOWN,p.MUTE_WARNING,p.UNMUTE_WARNING],j);});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('buddylist_overlay'),function(p,q){var r={},s=q.obj.overlay;for(var t in s){h.set(t,s[t].a,s[t].s||'channel',s[t].vc);if(s[t].la)r[t]=s[t].la;}c('LastActiveTimes').update(r);});c('Arbiter').subscribe([c('ChannelConstants').getArbiterType('typ'),c('ChannelConstants').getArbiterType('ttyp')],function(p,q){var r=q.obj;if(r.st===c('TypingStates').TYPING){var s=r.from;if(c('ChatVisibility').isOnline()){c('BanzaiODS').bumpEntityKey('presence','stale_presence_check_typing');var t=c('PresenceStatus').get(s);if(t!=c('AvailableListConstants').ACTIVE){var u=c('LastActiveTimes').get(s)*1000,v=c('ServerTime').get();if(!u){c('BanzaiODS').bumpEntityKey('presence','no_detailed_presence_typing');}else if(v-u>5*60*1000){var w='stale_presence_typing',x=v-u;if(x<10*60*1000){w+='600';}else if(x<60*60*1000)w+='3600';c('BanzaiODS').bumpEntityKey('presence',w);}}}h.set(s&&s.toString(),c('AvailableListConstants').ACTIVE,'channel-typing');}});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('messaging'),function(p,q){if(!c('ChatVisibility').isOnline())return;var r=q.obj;if(r.message&&r.message.timestamp&&r.message.sender_fbid){var s=c('ServerTime').get(),t=r.message.timestamp;if(s-t<2*60*1000){c('BanzaiODS').bumpEntityKey('presence','stale_presence_check');var u=r.message.sender_fbid,v=c('PresenceStatus').get(u);if(v==c('AvailableListConstants').ACTIVE)return;var w=c('LastActiveTimes').get(u)*1000;if(!w){c('BanzaiODS').bumpEntityKey('presence','no_detailed_presence');}else if(t-w>5*60*1000){var x='stale_presence',y=t-w;if(y<10*60*1000){x+='600';}else if(y<60*60*1000)x+='3600';c('BanzaiODS').bumpEntityKey('presence',x);}}}});f.exports=h;}),18);
__d('ChatTypeaheadConstants',[],(function a(b,c,d,e,f,g){var h={USER_TYPE:'user',THREAD_TYPE:'thread',FRIEND_TYPE:'friend',NON_FRIEND_TYPE:'non_friend',FB4C_TYPE:'fb4c',PAGE_TYPE:'page',MEETING_ROOM_PAGE_TYPE:'meeting_room_page',COMMERCE_PAGE_TYPE:'commerce_page',HEADER_TYPE:'header',INTERNAL_BOT_PAGE_TYPE:'internal_bot_page',GAME_TYPE:'game'};f.exports=h;}),null);
__d('PagesTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:PagesLoggerConfig',this.$PagesTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:PagesLoggerConfig',this.$PagesTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$PagesTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$PagesTypedLogger1=babelHelpers['extends']({},this.$PagesTypedLogger1,j);return this;};h.prototype.setEvent=function(j){this.$PagesTypedLogger1.event=j;return this;};h.prototype.setEventLocation=function(j){this.$PagesTypedLogger1.event_location=j;return this;};h.prototype.setEventTarget=function(j){this.$PagesTypedLogger1.event_target=j;return this;};h.prototype.setLogSource=function(j){this.$PagesTypedLogger1.log_source=j;return this;};h.prototype.setPageID=function(j){this.$PagesTypedLogger1.page_id=j;return this;};h.prototype.setSessionid=function(j){this.$PagesTypedLogger1.sessionid=j;return this;};h.prototype.setTags=function(j){this.$PagesTypedLogger1.tags=c('GeneratedLoggerUtils').serializeVector(j);return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$PagesTypedLogger1=babelHelpers['extends']({},this.$PagesTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={event:true,event_location:true,event_target:true,log_source:true,page_id:true,sessionid:true,tags:true};f.exports=h;}),null);
__d('PagesLogger',['PagesLoggerEventEnum','PagesTypedLogger'],(function a(b,c,d,e,f,g){var h='extra_data_',i={log:function j(k,event,l){var m=arguments.length<=3||arguments[3]===undefined?null:arguments[3],n=arguments.length<=4||arguments[4]===undefined?[]:arguments[4],o=arguments.length<=5||arguments[5]===undefined?{}:arguments[5];Object.keys(o).forEach(function(p){var q=o[p];if(q instanceof Array||q instanceof Object)q=JSON.stringify(q);o[h+p]=q;delete o[p];});new (c('PagesTypedLogger'))().setPageID(k).setEvent(event).setEventTarget(l).setEventLocation(m).setLogSource('pages_logger').setTags(n).updateExtraData(o).log();},registerLogOnClick:function j(k,l,m){var n=arguments.length<=3||arguments[3]===undefined?null:arguments[3],o=arguments.length<=4||arguments[4]===undefined?[]:arguments[4],p=arguments.length<=5||arguments[5]===undefined?{}:arguments[5];k.addEventListener('click',function(){this.log(l,c('PagesLoggerEventEnum').CLICK,m,n,o,p);}.bind(this));}};f.exports=i;}),null);
__d('ChatOpenTabEventLogger',['Banzai','ChatImpressionLogger','ChatTypeaheadConstants','MercuryIDs','MercuryParticipantTypes','PagesLogger','PagesLoggerEventEnum','PagesLoggerEventTargetEnum'],(function a(b,c,d,e,f,g){'use strict';var h='messaging_tracking',i={log:function j(k,l,m,n){var o={referrer:k||'',message_thread_id:l,message_view:'chat',timestamp_send:Date.now(),message_target_ids:[]};if(m!==undefined)o.message_target_ids=[m];c('ChatImpressionLogger').logImpression(k,m,n);c('Banzai').post(h,o,{delay:0,retry:true});var p=c('MercuryIDs').getUserIDFromThreadID(String(l));c('Banzai').post('page_message_button_click',{page_id:p,ref:k});},logUser:function j(k,l,m){var n=c('MercuryIDs').getThreadIDFromUserID(l);this.log(k,n,l,m);},logPage:function j(k,l){this.logUser(k,l);this._pagesLogger(k,l);},logByType:function j(k,l,m){if(k===c('ChatTypeaheadConstants').THREAD_TYPE){this.log(l,m);}else if(k===c('ChatTypeaheadConstants').MEETING_ROOM_PAGE_TYPE){var n=c('MercuryIDs').getUserIDFromThreadID(m);this.log(l,m,n);}else if(!k||k===c('MercuryParticipantTypes').FRIEND||k===c('ChatTypeaheadConstants').FRIEND_TYPE||k===c('ChatTypeaheadConstants').PAGE_TYPE||k===c('ChatTypeaheadConstants').USER_TYPE){var o=void 0;if(c('MercuryIDs').isValidThreadID(m))o=c('MercuryIDs').getUserIDFromThreadID(m);this.log(l,m,o);if(k===c('ChatTypeaheadConstants').PAGE_TYPE)this._pagesLogger(l,m);}else this.log(l,m);},_pagesLogger:function j(k,l){c('PagesLogger').log(l,c('PagesLoggerEventEnum').CLICK,c('PagesLoggerEventTargetEnum').PAGE_MESSAGE,k);}};f.exports=i;}),null);
__d('FBRTCStore',['FBRTCDispatcher','FluxStore'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('FluxStore'));i=h&&h.prototype;function j(){i.constructor.call(this,c('FBRTCDispatcher'));}j.prototype.__emitChange=function(){this.__emitter.emit(this.__changeEvent);};f.exports=j;}),18);
__d('FBRTCCallBlockingStore',['Arbiter','AsyncRequest','BanzaiLogger','ChannelConstants','FBRTCDispatcher','FBRTCStore','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=false,k=0,l=null,m='call_block_setting_changed';h=babelHelpers.inherits(n,c('FBRTCStore'));i=h&&h.prototype;n.prototype.init=function(o){this.$FBRTCCallBlockingStore1(o);c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('videocall_block_setting'),this.$FBRTCCallBlockingStore2.bind(this));};n.prototype.__onDispatch=function(o){if(o.type!==m)return;this.$FBRTCCallBlockingStore1(o.data);};n.prototype.$FBRTCCallBlockingStore1=function(o){switch(o){case 0:j=false;this.$FBRTCCallBlockingStore3();break;case -1:j=true;this.$FBRTCCallBlockingStore3();break;default:j=true;this.$FBRTCCallBlockingStore4(o);}this.__emitChange();};n.prototype.$FBRTCCallBlockingStore4=function(o){if(l===null)l=c('setTimeoutAcrossTransitions')(this.turnOnVideoCalling.bind(this),o*1000);};n.prototype.getBlockingStatus=function(){return j;};n.prototype.turnOnVideoCalling=function(){new (c('AsyncRequest'))('/ajax/chat/settings.php').setHandler(this.$FBRTCCallBlockingStore5.bind(this)).setData({call_blocked_until:0}).send();};n.prototype.turnOffVideoCalling=function(o){k=o;new (c('AsyncRequest'))('/ajax/chat/settings.php').setHandler(this.$FBRTCCallBlockingStore6.bind(this)).setData({call_blocked_until:o}).send();};n.prototype.$FBRTCCallBlockingStore3=function(){if(l){clearTimeout(l);l=null;}};n.prototype.$FBRTCCallBlockingStore5=function(){c('FBRTCDispatcher').dispatch({type:m,data:0});c('BanzaiLogger').log('VideoCallLoggerConfig',{event:m,message:'enable'});};n.prototype.$FBRTCCallBlockingStore6=function(){c('FBRTCDispatcher').dispatch({type:m,data:k});c('BanzaiLogger').log('VideoCallLoggerConfig',{event:m,message:'disable_'+k});};n.prototype.$FBRTCCallBlockingStore2=function(o,p){c('FBRTCDispatcher').dispatch({type:m,data:p.obj.value});};function n(){h.apply(this,arguments);}f.exports=new n();}),18);
__d('ChatOptions',['Arbiter','ChannelConstants','ChatSidebarActions','ChatSidebarVisibility','FBRTCCallBlockingStore','JSLogger','PresenceUtil','SidebarType','ChatOptionsInitialData'],(function a(b,c,d,e,f,g){var h=c('JSLogger').create('chat_options'),i={};(function(){var k=c('ChatOptionsInitialData');for(var l in k){var m=k[l];if(l==='call_blocked_until'){c('FBRTCCallBlockingStore').init(m);}else i[l]=!!m;}})();var j=Object.assign(new (c('Arbiter'))(),{getSetting:function k(l){return i[l];},setSetting:function k(l,m,n){if(l==='sidebar_mode'){c('ChatSidebarVisibility').shouldShowSidebarIgnoreEnabled(null,function(o,p){if(m){c('ChatSidebarActions').enable(o?c('SidebarType').SIDEBAR:c('SidebarType').BUDDYLIST);}else c('ChatSidebarActions').disable();});return;}if(this.getSetting(l)==m)return;if(n){n='from_'+n;h.log(n,{name:l,new_value:m,old_value:this.getSetting(l)});}i[l]=!!m;c('Arbiter').inform('chat/option-changed',{name:l,value:m});}});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('setting'),function(k,l){var m=l.obj;if(m.window_id===c('PresenceUtil').getSessionID())return;j.setSetting(m.setting,!!m.value,'channel');});c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(k,l){l.chat_options=i;});f.exports=j;}),18);
__d('ChatQuietLinks',['DataStore','DOM','Event','Parent','UserAgent_DEPRECATED','getOrCreateDOMID'],(function a(b,c,d,e,f,g){var h={},i={silenceLinks:function m(n){j(n,this.removeEmptyHrefs.bind(this));},nukeLinks:function m(n){j(n,this.removeAllHrefs.bind(this));},removeEmptyHrefs:function m(n){k(n,function(o){return !o||o==='#';});},removeAllHrefs:function m(n){k(n);}};function j(m,n){var o=!!c('UserAgent_DEPRECATED').chrome(),p=!!c('UserAgent_DEPRECATED').chrome()||c('UserAgent_DEPRECATED').ie()>=9||c('UserAgent_DEPRECATED').firefox()>=4;if(h[c('getOrCreateDOMID')(m)])return;h[c('getOrCreateDOMID')(m)]=true;if(!p)return;if(!o){n&&n(m);return;}c('Event').listen(m,'mouseover',function q(r){var s=c('Parent').byTag(r.getTarget(),'a');if(s){var t=s.getAttribute('href');if(l(t)){c('DataStore').set(s,'stashedHref',s.getAttribute('href'));s.removeAttribute('href');}}});c('Event').listen(m,'mouseout',function q(r){var s=c('Parent').byTag(r.getTarget(),'a'),t=s&&c('DataStore').remove(s,'stashedHref');if(l(t))s.setAttribute('href',t);});c('Event').listen(m,'mousedown',function(q){if(!q.isDefaultRequested())return true;var r=c('Parent').byTag(q.getTarget(),'a'),s=r&&c('DataStore').get(r,'stashedHref');if(l(s))r.setAttribute('href',s);});}function k(m,n){var o=c('DOM').scry(m,'a');if(n)o=o.filter(function(p){return n(p.getAttribute('href'));});o.forEach(function(p){p.removeAttribute('href');if(!p.tabIndex)p.setAttribute('tabindex',0);});}function l(m){return m&&m!=='#';}f.exports=i;}),null);
__d('ChatUnreadCountActionTypes',['keyMirror'],(function a(b,c,d,e,f,g){'use strict';f.exports=c('keyMirror')({COUNT_UPDATED:null});}),null);
__d('TypeaheadFacepile',['DOM'],(function a(b,c,d,e,f,g){function h(){}h.render=function(i){var j=[c('DOM').create('span',{className:'splitpic leftpic'},[c('DOM').create('img',{alt:'',src:i[0]})]),c('DOM').create('span',{className:'splitpic'+(i[2]?' toppic':'')},[c('DOM').create('img',{alt:'',src:i[1]})])];if(i[2])j.push(c('DOM').create('span',{className:'splitpic bottompic'},[c('DOM').create('img',{alt:'',src:i[2]})]));return c('DOM').create('span',{className:'splitpics clearfix'},j);};f.exports=h;}),null);
__d('FantaDispatcher',['ExplicitRegistrationDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('ExplicitRegistrationDispatcher'));i=h&&h.prototype;function j(){h.apply(this,arguments);}f.exports=new j({strict:false});}),18);
__d('WebMessengerThreadPermalinks',['MercuryIDs','MessagingTag','MessengerURIConstants','URI','WWWBase','requireWeak'],(function a(b,c,d,e,f,g){'use strict';var h={getThreadURI:function j(k,l,m){var n='';if(c('MercuryIDs').isCanonical(k)){n=c('MercuryIDs').tokenize(k).value;}else c('requireWeak')('MercuryThreadIDMap',function(p){n=p.get().getServerIDFromClientIDNow(k);});var o=h.getThreadURIFromServerID(n,m);l&&l(o);},getThreadURIFromServerID:function j(k,l){var m=new (c('URI'))(c('WWWBase').uri),n=c('MessengerURIConstants').FACEBOOK_PREFIX;if(l&&l!=c('MessagingTag').INBOX)n+='/'+l;m.setPath(n+c('MessengerURIConstants').THREAD_PREFIX+k);return m.toString();},getThreadURIFromUserID:function j(k,l){var m=new (c('URI'))(c('WWWBase').uri),n=c('MessengerURIConstants').FACEBOOK_PREFIX;m.setPath(i(n,l)+'/t/'+k);return m.toString();}};function i(j,k){if(k&&k!=c('MessagingTag').INBOX)j+='/'+k;return j;}f.exports=h;}),null);
__d('FantaTabActions',['Bootloader','FantaDispatcher','MercuryConfig','MessengerURIConstants','URI','WebMessengerThreadPermalinks','goURI','ifRequired','keyMirror'],(function a(b,c,d,e,f,g){'use strict';var h=c('keyMirror')({BLUR_TAB:null,CLOSE_ALL_TABS:null,CLOSE_AND_TAB_NEXT:null,CLOSE_TAB:null,FOCUS_NEXT_TAB:null,FOCUS_PREVIOUS_TAB:null,FOCUS_TAB:null,LOAD_FROM_DATA:null,MERCURY_REGISTER_TAB_FOCUS_DEPRECATED:null,MINIMIZE_ALL_TABS:null,MINIMIZE_TAB:null,OPEN_TAB:null,REPLACE_TAB:null,SCROLL_BOTTOM_CHANGED:null,SET_ALLOWED_RAISED_TABS:null,SET_MESSAGE_COUNT:null,SHOW_UNSEEN_MESSAGES:null,UNMINIMIZE_TAB:null});function i(k){var l=k?new (c('URI'))(c('WebMessengerThreadPermalinks').getThreadURIFromServerID(k)):new (c('URI'))(c('MessengerURIConstants').BASE_PATH+c('MessengerURIConstants').COMPOSE_SUBPATH);c('ifRequired')('BusinessURI.brands',function(m){return c('goURI')(m(l));},function(){return c('goURI')(l);});}var j={Types:h,openTab:function k(l){this.dispatchOrBootloadGetMessages(function(){c('FantaDispatcher').dispatch({type:h.OPEN_TAB,tabID:l});if(c('MercuryConfig').FantaTabView){c('ifRequired')('FantaTabsReactApp',function(m){this._tryLoadSlimApp(l);}.bind(this),function(){this._tryLoadSlimApp(l,function(){return i(l);});}.bind(this));}else c('ifRequired')('FantaTabsApp',function(m){this._tryLoadSlimApp(l);}.bind(this),function(){this._tryLoadSlimApp(l,function(){return i(l);});}.bind(this));}.bind(this));},_tryLoadSlimApp:function k(l,m){c('ifRequired')('FantaTabsSlimApp',function(n){c('ifRequired')('FantaAppStore',function(){},function(){n.getPumpedUp(function(){c('FantaDispatcher').dispatch({type:h.OPEN_TAB,tabID:l});});});},function(){return m&&m(l);});},registerTabFocusDeprecated:function k(l,m,n,o){c('FantaDispatcher').dispatch({type:h.MERCURY_REGISTER_TAB_FOCUS_DEPRECATED,tabID:l,focusCallback:m,blurCallback:n,focusOnMountDEPRECATED:o});},replaceTab:function k(l,m){c('FantaDispatcher').dispatch({type:h.REPLACE_TAB,tabID:l,newTabID:m});},minimizeTab:function k(l){c('FantaDispatcher').dispatch({type:h.MINIMIZE_TAB,tabID:l});},minimizeAllTabs:function k(){c('FantaDispatcher').dispatch({type:h.MINIMIZE_ALL_TABS});},unminimizeTab:function k(l){c('FantaDispatcher').dispatch({type:h.UNMINIMIZE_TAB,tabID:l});},closeTab:function k(l){c('FantaDispatcher').dispatch({type:h.CLOSE_TAB,tabID:l});},closeAllTabs:function k(){c('FantaDispatcher').dispatch({type:h.CLOSE_ALL_TABS});},closeAndTabNext:function k(l){c('FantaDispatcher').dispatch({type:h.CLOSE_AND_TAB_NEXT,tabID:l});},focusTab:function k(l){c('FantaDispatcher').dispatch({type:h.FOCUS_TAB,tabID:l});},blurTab:function k(l){c('FantaDispatcher').dispatch({type:h.BLUR_TAB,tabID:l});},setAllowedRaisedTabs:function k(l){c('FantaDispatcher').dispatch({type:h.SET_ALLOWED_RAISED_TABS,allowedRaisedTabs:l});},setMessageCount:function k(l,m){c('FantaDispatcher').dispatch({type:h.SET_MESSAGE_COUNT,threadID:l,messageCount:m});},loadFromData:function k(l){this.dispatchOrBootloadGetMessages(function(){c('FantaDispatcher').dispatch({type:h.LOAD_FROM_DATA,tabData:l});});},focusNextTab:function k(event){c('FantaDispatcher').dispatch({type:h.FOCUS_NEXT_TAB,event:event});},focusPreviousTab:function k(event){c('FantaDispatcher').dispatch({type:h.FOCUS_PREVIOUS_TAB,event:event});},scrollBottomChanged:function k(l,m,n){c('FantaDispatcher').dispatch({type:h.SCROLL_BOTTOM_CHANGED,isScrolledToBottom:m,tabID:l,showUnseenMessages:n});},showUnseenMessages:function k(l){c('FantaDispatcher').dispatch({type:h.SHOW_UNSEEN_MESSAGES,tabID:l});},dispatchOrBootloadGetMessages:function k(l){if(c('MercuryConfig').FantaTabView){c('ifRequired')('FantaReducersGetMessages',function(){l();},function(){c('ifRequired')('FantaAppStore',function(m){c('Bootloader').loadModules(["FantaReducersGetMessages"],function(n){m.addReducers(n);l();},'FantaTabActions');},function(){l();});});}else l();}};f.exports=j;}),null);
__d('MessengerDispatcher',['Dispatcher_DEPRECATED'],(function a(b,c,d,e,f,g){'use strict';f.exports=new (c('Dispatcher_DEPRECATED'))();}),null);
__d('EmoticonEmojiList',[],(function a(b,c,d,e,f,g){f.exports={names:{':)':'slightsmile',':-)':'slightsmile',':]':'slightsmile','=)':'smile','(:':'slightsmile','(=':'smile',':(':'frown',':-(':'frown',':[':'frown','=(':'frown',')=':'frown',';-P':'winktongue',';P':'winktongue',';-p':'winktongue',';p':'winktongue',':poop:':'poop',':P':'tongue',':-P':'tongue',':-p':'tongue',':p':'tongue','=P':'tongue','=p':'tongue','=D':'grin',':-D':'slightgrin',':D':'slightgrin',':o':'gasp',':-O':'gasp',':O':'gasp',':-o':'gasp',';)':'wink',';-)':'wink','8-)':'glasses','8)':'glasses','B-)':'glasses','B)':'glasses','>:(':'grumpy','>:-(':'grumpy',':/':'unsure',':-/':'unsure',':\\':'unsure',':-\\':'unsure','=/':'unsure','=\\':'unsure',':\'(':'cry',':\'-(':'cry','3:)':'devil','3:-)':'devil','O:)':'angel','O:-)':'angel','0:)':'angel','0:-)':'angel',':*':'kiss',':-*':'kiss',';-*':'winkkiss',';*':'winkkiss','<3':'heart','&lt;3':'heart','\u2665':'heart','^_^':'kiki','^~^':'kiki','-_-':'expressionless',':-|':'squint',':|':'squint','>:o':'upset','>:O':'upset','>:-O':'upset','>:-o':'upset','>_<':'persevere','>.<':'persevere','<(")':'penguin',O_O:'flushface',o_o:'flushface','0_0':'flushface',T_T:'crying','T-T':'crying',ToT:'crying','-3-':'flushkiss','\'-_-':'sweating','(y)':'like',':like:':'like','(Y)':'like','(n)':'dislike','(N)':'dislike'},emote2emojis:{slightsmile:'1f642',smile:'1f60a',frown:'1f61e',winktongue:'1f61c',poop:'1f4a9',tongue:'1f61b',slightgrin:'1f600',grin:'1f603',gasp:'1f62e',wink:'1f609',glasses:'1f60e',grumpy:'1f620',unsure:'1f615',cry:'1f622',devil:'1f608',angel:'1f607',kiss:'1f617',winkkiss:'1f618',heart:'2764',kiki:'1f60a',expressionless:'1f611',squint:'1f610',upset:'1f620',persevere:'1f623',penguin:'1f427',flushface:'1f633',crying:'1f62d',flushkiss:'1f61a',sweating:'1f613',like:'f0000',dislike:'1f44e'},symbols:{slightsmile:':)',smile:'=)',frown:':(',winktongue:';-P',poop:':poop:',tongue:':P',slightgrin:':D',grin:'=D',gasp:':o',wink:';)',glasses:'8-)',grumpy:'>:(',unsure:':/',cry:':\'(',devil:'3:)',angel:'O:)',kiss:':*',winkkiss:';*',heart:'<3',kiki:'^_^',expressionless:'-_-',squint:':-|',upset:'>:o',persevere:'>_<',penguin:'<(")',flushface:'O_O',crying:'T_T',flushkiss:'-3-',sweating:'\'-_-',like:'(y)',dislike:'(n)'},regexp:/(^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|\-3\-|\'\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))([\s\'\".,!?]|<br>|$)/,noncapturingRegexp:/(?:^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:poop:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|\-3\-|\'\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))(?:[\s\'\".,!?]|<br>|$)/};}),null);