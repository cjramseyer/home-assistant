!function(){"use strict";var t,e=function(){return e=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},e.apply(this,arguments)};function i(t,e,i,n){return new(i||(i=Promise))((function(o,s){function r(t){try{c(n.next(t))}catch(t){s(t)}}function a(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}c((n=n.apply(t,e||[])).next())}))}function n(t,e){var i,n,o,s,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(c){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(r=0)),r;)try{if(i=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,n=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(o=r.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){r=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(6===a[0]&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t],n=0}finally{i=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var o,s,r="kiosk-mode",a="kiosk_mode",c="[ Non critial warning ]",h=":shadowRoot";!function(t){t.HEADER="kmHeader",t.SIDEBAR="kmSidebar",t.OVERFLOW="kmOverflow",t.MENU_BUTTON="kmMenuButton",t.ACCOUNT="kmAccount",t.SEARCH="kmSearch",t.ASSISTANT="kmAssistant",t.REFRESH="kmRefresh",t.UNUSED_ENTITIES="kmUnusedEntities",t.RELOAD_RESOURCES="kmReloadResources",t.EDIT_DASHBOARD="kmEditDashboard",t.OVERFLOW_MOUSE="kmOverflowMouse",t.MOUSE="kmMouse"}(o||(o={})),function(t){t.KIOSK="kiosk",t.CACHE="cache",t.CLEAR_CACHE="clear_km_cache",t.DISABLE_KIOSK_MODE="disable_km",t.HIDE_SIDEBAR="hide_sidebar",t.HIDE_HEADER="hide_header",t.HIDE_OVERFLOW="hide_overflow",t.HIDE_MENU_BUTTON="hide_menubutton",t.HIDE_ACCOUNT="hide_account",t.HIDE_SEARCH="hide_search",t.HIDE_ASSISTANT="hide_assistant",t.HIDE_REFRESH="hide_refresh",t.HIDE_UNUSED_ENTITIES="hide_unused_entities",t.HIDE_RELOAD_RESOURCES="hide_reload_resources",t.HIDE_EDIT_DASHBOARD="hide_edit_dashboard",t.BLOCK_OVERFLOW="block_overflow",t.BLOCK_MOUSE="block_mouse"}(s||(s={}));var E,d="".concat("ui",".common"),u="".concat("ui",".panel"),l="".concat(u,".lovelace"),S="".concat(l,".menu");!function(t){t.SEARCH="SEARCH",t.ASSIST="ASSIST",t.REFRESH="REFRESH",t.UNUSED_ENTITIES="UNUSED_ENTITIES",t.RELOAD_RESOURCES="RELOAD_RESOURCES",t.EDIT_DASHBOARD="EDIT_DASHBOARD"}(E||(E={}));var _,R=Object.freeze(((t={})[E.SEARCH]="".concat(S,".search"),t[E.ASSIST]="".concat(S,".assist"),t[E.REFRESH]="".concat(d,".refresh"),t[E.UNUSED_ENTITIES]="".concat(l,".unused_entities.title"),t[E.RELOAD_RESOURCES]="".concat(S,".reload_resources"),t[E.EDIT_DASHBOARD]="".concat(S,".configure_ui"),t));!function(t){t.HOME_ASSISTANT="home-assistant",t.HOME_ASSISTANT_MAIN="home-assistant-main",t.HA_PANEL_LOVELACE="ha-panel-lovelace",t.PARTIAL_PANEL_RESOLVER="partial-panel-resolver",t.HUI_ROOT="hui-root",t.HUI_VIEW="hui-view",t.MENU_ITEM="ha-icon-button",t.MENU_ITEM_ICON="mwc-icon-button",t.OVERLAY_MENU_ITEM="mwc-list-item",t.HA_SIDEBAR="ha-sidebar",t.HA_DRAWER="ha-drawer",t.TOOLBAR=".toolbar",t.ACTION_ITEMS=".action-items"}(_||(_={}));var O,A="true",f="boolean",I="state_changed",D=function(t){return Array.isArray(t)?t:[t]},T=function(t){return t instanceof ShadowRoot?t.host.localName:t.localName},H=function(t){var e=T(t);return t.querySelector("#".concat(a,"_").concat(e))},p=function(t,e){var i=T(e),n=H(e);n||((n=document.createElement("style")).setAttribute("id","".concat(a,"_").concat(i)),e.appendChild(n)),n.innerHTML=t},b=function(t){D(t).forEach((function(t){var e=T(t);H(t)&&t.querySelector("#".concat(a,"_").concat(e)).remove()}))},w=function(t){return D(t).some((function(t){return window.location.search.includes(t)}))},U=function(t,e){D(t).forEach((function(t){return window.localStorage.setItem(t,e)}))},v=function(t){return D(t).some((function(t){return window.localStorage.getItem(t)===A}))},N=function(t){return Object.entries(t).map((function(t){var e=t[0],i=t[1];return"".concat(e,":").concat(i)})).join(";")+";"},k=function(t){return Object.entries(t).map((function(t){var e=t[0],i=t[1];return"".concat(e,"{").concat(N(i),"}")})).join("")},m=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.map((function(t){return"".concat(t,"{display: none !important;}")})).join("")},C=function(t){var e=0,i=Object.values(R);return new Promise((function(n,o){var s=function(){var r,a=null===(r=null==t?void 0:t.hass)||void 0===r?void 0:r.resources,c=!1;if(a){var h=t.hass.language;i.find((function(t){return!a[h][t]}))||(c=!0)}c?n(a):++e<500?setTimeout(s,50):o()};s()}))},M=function(t,e,i){return new Promise((function(n,o){var s=0,a=function(){var c=t();c&&e(c)?n(c):++s<500?setTimeout(a,50):o(new Error("".concat(r,": Cannot select ").concat(i," after ").concat(500," attempts. Giving up!")))};a()}))},L=".toolbar",y=".action-items",B="ha-button-menu",g="mwc-list-item",K={HEADER:k({"#view":{"min-height":"100vh !important","--header-height":"0px"},".header":{display:"none"}}),ACCOUNT:m(".profile"),MENU_BUTTON:m(".menu ha-icon-button"),MENU_BUTTON_BURGER:m("ha-menu-button"),MOUSE:k({"body::after":{bottom:"0",content:'""',cursor:"none",display:"block",left:"0",position:"fixed",right:"0",top:"0","z-index":"999999"}}),SIDEBAR:k({":host":{"--mdc-drawer-width":"0 !important"},"partial-panel-resolver":{"--mdc-top-app-bar-width":"100% !important"},"ha-drawer > ha-sidebar":{display:"none"},".header":{width:"100% !important"}}),ASIDE:m(".mdc-drawer"),OVERFLOW_MENU:m("".concat(L," > ").concat(y," > ").concat(B)),BLOCK_OVERFLOW:k((O={},O["".concat(L," > ").concat(y," > ").concat(B)]={"pointer-events":"none !important"},O)),SEARCH:m("".concat(L," > ").concat(y,' > ha-icon-button[data-selector="').concat(E.SEARCH,'"]'),"".concat(L," > ").concat(y," > ").concat(B," > ").concat(g,'[data-selector="').concat(E.SEARCH,'"]')),ASSISTANT:m("".concat(L," > ").concat(y,' > ha-icon-button[data-selector="').concat(E.ASSIST,'"]'),"".concat(L," > ").concat(y," > ").concat(B," > ").concat(g,'[data-selector="').concat(E.ASSIST,'"]')),REFRESH:m("".concat(L," > ").concat(y," > ").concat(B," > ").concat(g,'[data-selector="').concat(E.REFRESH,'"]')),UNUSED_ENTITIES:m("".concat(L," > ").concat(y," > ").concat(B," > ").concat(g,'[data-selector="').concat(E.UNUSED_ENTITIES,'"]')),RELOAD_RESOURCES:m("".concat(L," > ").concat(y," > ").concat(B," > ").concat(g,'[data-selector="').concat(E.RELOAD_RESOURCES,'"]')),EDIT_DASHBOARD:m("".concat(L," > ").concat(y," > ").concat(B," > ").concat(g,'[data-selector="').concat(E.EDIT_DASHBOARD,'"]'))},x=function(){function t(){this.lines=[{content:"%c≡ kiosk-mode",color:"white",background:"#03a9f4"},{content:"%cversion ".concat("2.0.0")}]}return t.prototype.log=function(){var t=[],i=[],n=this.lines.length-1,o={"border-color":"#424242","border-style":"solid",display:"inline-block","font-family":"monospace","font-size":"12px"};this.lines.forEach((function(s,r){t.push(s.content.padEnd(27)),t.push("%c⋮"),r!==n&&t.push("%c\n");var a="0 0 0 1px",c="0 1px 0 1px";0===n?(a="1px 0 1px 1px",c="1px 1px 1px 0"):0===r?(a="1px 0 0 1px",c="1px 1px 0 0"):r===n&&(a="0 0 1px 1px",c="0 1px 1px 0"),i.push(N(e(e({},o),{background:s.background||"white",color:s.color||"#424242",padding:0===r?"1px 0px 1px 5px":"1px 0px 1px 10px","border-width":a}))),i.push(N(e(e({},o),{background:s.background||"white",color:s.color||"white",padding:0===r?"1px 5px":"1px 5px 1px 0px","border-width":c}))),r!==n&&i.push("")})),console.info.apply(console,function(t,e,i){if(i||2===arguments.length)for(var n,o=0,s=e.length;o<s;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}([t.join("")],i,!1))},t}(),F=function(){function t(){var t=this;window.kioskModeEntities={},w(s.CLEAR_CACHE)&&U([o.HEADER,o.SIDEBAR,o.OVERFLOW,o.MENU_BUTTON,o.ACCOUNT,o.SEARCH,o.ASSISTANT,o.REFRESH,o.UNUSED_ENTITIES,o.RELOAD_RESOURCES,o.EDIT_DASHBOARD,o.OVERFLOW_MOUSE,o.MOUSE],"false");i(t,void 0,void 0,(function(){var t,e,i,o,s=this;return n(this,(function(n){switch(n.label){case 0:return t=this,[4,M((function(){return document.querySelector(_.HOME_ASSISTANT)}),(function(t){return!(!t||!t.shadowRoot)}),_.HOME_ASSISTANT)];case 1:return t.ha=n.sent(),e=this,[4,M((function(){var t;return null===(t=s.ha.shadowRoot.querySelector(_.HOME_ASSISTANT_MAIN))||void 0===t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(_.HOME_ASSISTANT_MAIN).concat(h))];case 2:return e.main=n.sent(),i=this,[4,M((function(){var t,e;return null===(e=null===(t=s.ha)||void 0===t?void 0:t.hass)||void 0===e?void 0:e.user}),(function(t){return!!t}),"".concat(_.HOME_ASSISTANT," > hass > user"))];case 3:return i.user=n.sent(),[4,M((function(){return s.main.querySelector(_.PARTIAL_PANEL_RESOLVER)}),(function(t){return!!t}),"".concat(_.HOME_ASSISTANT_MAIN," > ").concat(_.PARTIAL_PANEL_RESOLVER))];case 4:return o=n.sent(),this.run(),this.entityWatch(),new MutationObserver(this.watchDashboards).observe(o,{childList:!0}),[2]}}))})),this.resizeWindowBinded=this.resizeWindow.bind(this)}return t.prototype.run=function(t){var e=this;void 0===t&&(t=this.main.querySelector(_.HA_PANEL_LOVELACE)),t&&(this.lovelace=t,M((function(){var e;return null===(e=null==t?void 0:t.lovelace)||void 0===e?void 0:e.config}),(function(t){return!!t}),"Lovelace config").then((function(t){e.processConfig(t.kiosk_mode||{})})))},t.prototype.processConfig=function(t){return i(this,void 0,void 0,(function(){var e,a,E,d,u,l,S,O,A,f,I,T,H,p,b=this;return n(this,(function(U){switch(U.label){case 0:return e=this.ha.hass.panelUrl,window.kioskModeEntities[e]||(window.kioskModeEntities[e]=[]),this.hideHeader=!1,this.hideSidebar=!1,this.hideOverflow=!1,this.hideMenuButton=!1,this.hideAccount=!1,this.hideSearch=!1,this.hideAssistant=!1,this.hideRefresh=!1,this.hideUnusedEntities=!1,this.hideReloadResources=!1,this.hideEditDashboard=!1,this.blockOverflow=!1,this.blockMouse=!1,this.ignoreEntity=!1,this.ignoreMobile=!1,this.ignoreDisableKm=!1,a=this,[4,M((function(){var t,e,i;return null===(i=null===(e=null===(t=b.lovelace)||void 0===t?void 0:t.shadowRoot)||void 0===e?void 0:e.querySelector(_.HUI_ROOT))||void 0===i?void 0:i.shadowRoot}),(function(t){return!!t}),"".concat(_.HUI_ROOT).concat(h))];case 1:return a.huiRoot=U.sent(),E=this,[4,M((function(){return b.main.querySelector(_.HA_DRAWER)}),(function(t){return!!t}),_.HA_DRAWER)];case 2:return E.drawerLayout=U.sent(),d=this,[4,M((function(){return b.huiRoot.querySelector(_.TOOLBAR)}),(function(t){return!!t}),_.TOOLBAR)];case 3:return d.appToolbar=U.sent(),u=this,[4,M((function(){var t;return null===(t=b.drawerLayout.querySelector(_.HA_SIDEBAR))||void 0===t?void 0:t.shadowRoot}),(function(t){return!!t}),"".concat(_.HA_SIDEBAR).concat(h))];case 4:if(u.sideBarRoot=U.sent(),(N=this.ha,i(void 0,void 0,void 0,(function(){var t,e,i,o,s;return n(this,(function(n){switch(n.label){case 0:return[4,C(N)];case 1:return t=n.sent(),e=N.hass.language,i=t[e],o=Object.entries(R),s=o.map((function(t){var e=t[0],n=t[1];return[i[n],e]})),[2,Object.fromEntries(s)]}}))}))).then((function(t){b.menuTranslations=t,b.updateMenuItemsLabels()})).catch((function(){console.warn("".concat(r,": ").concat(c," Cannot get resources translations"))})),(l=v([o.HEADER,o.SIDEBAR,o.OVERFLOW,o.MENU_BUTTON,o.ACCOUNT,o.SEARCH,o.ASSISTANT,o.REFRESH,o.UNUSED_ENTITIES,o.RELOAD_RESOURCES,o.EDIT_DASHBOARD,o.OVERFLOW_MOUSE,o.MOUSE])||w([s.KIOSK,s.HIDE_HEADER,s.HIDE_SIDEBAR,s.HIDE_OVERFLOW,s.HIDE_MENU_BUTTON,s.HIDE_ACCOUNT,s.HIDE_SEARCH,s.HIDE_ASSISTANT,s.HIDE_REFRESH,s.HIDE_RELOAD_RESOURCES,s.HIDE_UNUSED_ENTITIES,s.HIDE_EDIT_DASHBOARD,s.BLOCK_OVERFLOW,s.BLOCK_MOUSE]))&&(this.hideHeader=v(o.HEADER)||w([s.KIOSK,s.HIDE_HEADER]),this.hideSidebar=v(o.SIDEBAR)||w([s.KIOSK,s.HIDE_SIDEBAR]),this.hideOverflow=v(o.OVERFLOW)||w([s.KIOSK,s.HIDE_OVERFLOW]),this.hideMenuButton=v(o.MENU_BUTTON)||w([s.KIOSK,s.HIDE_MENU_BUTTON]),this.hideAccount=v(o.ACCOUNT)||w([s.KIOSK,s.HIDE_ACCOUNT]),this.hideSearch=v(o.SEARCH)||w([s.KIOSK,s.HIDE_SEARCH]),this.hideAssistant=v(o.ASSISTANT)||w([s.KIOSK,s.HIDE_ASSISTANT]),this.hideRefresh=v(o.REFRESH)||w([s.KIOSK,s.HIDE_REFRESH]),this.hideUnusedEntities=v(o.UNUSED_ENTITIES)||w([s.KIOSK,s.HIDE_UNUSED_ENTITIES]),this.hideReloadResources=v(o.RELOAD_RESOURCES)||w([s.KIOSK,s.HIDE_RELOAD_RESOURCES]),this.hideEditDashboard=v(o.EDIT_DASHBOARD)||w([s.KIOSK,s.HIDE_EDIT_DASHBOARD]),this.blockOverflow=v(o.OVERFLOW_MOUSE)||w([s.BLOCK_OVERFLOW]),this.blockMouse=v(o.MOUSE)||w([s.BLOCK_MOUSE])),this.hideHeader=l?this.hideHeader:t.kiosk||t.hide_header,this.hideSidebar=l?this.hideSidebar:t.kiosk||t.hide_sidebar,this.hideOverflow=l?this.hideOverflow:t.kiosk||t.hide_overflow,this.hideMenuButton=l?this.hideMenuButton:t.kiosk||t.hide_menubutton,this.hideAccount=l?this.hideAccount:t.kiosk||t.hide_account,this.hideSearch=l?this.hideSearch:t.kiosk||t.hide_search,this.hideAssistant=l?this.hideAssistant:t.kiosk||t.hide_assistant,this.hideRefresh=l?this.hideRefresh:t.kiosk||t.hide_refresh,this.hideUnusedEntities=l?this.hideUnusedEntities:t.kiosk||t.hide_unused_entities,this.hideReloadResources=l?this.hideReloadResources:t.kiosk||t.hide_reload_resources,this.hideEditDashboard=l?this.hideEditDashboard:t.kiosk||t.hide_edit_dashboard,this.blockOverflow=l?this.blockOverflow:t.block_overflow,this.blockMouse=l?this.blockMouse:t.block_mouse,(S=this.user.is_admin?t.admin_settings:t.non_admin_settings)&&this.setOptions(S),t.user_settings&&D(t.user_settings).forEach((function(t){D(t.users).some((function(t){return t.toLowerCase()===b.user.name.toLowerCase()}))&&b.setOptions(t)})),(O=this.ignoreMobile?null:t.mobile_settings)&&(A=O.custom_width?O.custom_width:812,window.innerWidth<=A&&this.setOptions(O)),f=this.ignoreEntity?null:t.entity_settings)for(I=0,T=f;I<T.length;I++)H=T[I],p=Object.keys(H.entity)[0],window.kioskModeEntities[e].includes(p)||window.kioskModeEntities[e].push(p),this.ha.hass.states[p].state==H.entity[p]&&(s.HIDE_HEADER in H&&(this.hideHeader=H[s.HIDE_HEADER]),s.HIDE_SIDEBAR in H&&(this.hideSidebar=H[s.HIDE_SIDEBAR]),s.HIDE_OVERFLOW in H&&(this.hideOverflow=H[s.HIDE_OVERFLOW]),s.HIDE_MENU_BUTTON in H&&(this.hideMenuButton=H[s.HIDE_MENU_BUTTON]),s.HIDE_ACCOUNT in H&&(this.hideAccount=H[s.HIDE_ACCOUNT]),s.HIDE_SEARCH in H&&(this.hideSearch=H[s.HIDE_SEARCH]),s.HIDE_ASSISTANT in H&&(this.hideAssistant=H[s.HIDE_ASSISTANT]),s.HIDE_REFRESH in H&&(this.hideRefresh=H[s.HIDE_REFRESH]),s.HIDE_UNUSED_ENTITIES in H&&(this.hideUnusedEntities=H[s.HIDE_UNUSED_ENTITIES]),s.HIDE_RELOAD_RESOURCES in H&&(this.hideReloadResources=H[s.HIDE_RELOAD_RESOURCES]),s.HIDE_EDIT_DASHBOARD in H&&(this.hideEditDashboard=H[s.HIDE_EDIT_DASHBOARD]),s.BLOCK_OVERFLOW in H&&(this.blockOverflow=H[s.BLOCK_OVERFLOW]),s.BLOCK_MOUSE in H&&(this.blockMouse=H[s.BLOCK_MOUSE]),s.KIOSK in H&&(this.hideHeader=this.hideSidebar=H[s.KIOSK]));return w(s.DISABLE_KIOSK_MODE)&&!this.ignoreDisableKm||this.insertStyles(),[2]}var N}))}))},t.prototype.insertStyles=function(){if(this.hideHeader?(p(K.HEADER,this.huiRoot),w(s.CACHE)&&U(o.HEADER,A)):b(this.huiRoot),this.hideSidebar?(p(K.SIDEBAR,this.drawerLayout),p(K.ASIDE,this.drawerLayout.shadowRoot),w(s.CACHE)&&U(o.SIDEBAR,A)):(b(this.drawerLayout),b(this.drawerLayout.shadowRoot)),this.hideAccount||this.hideMenuButton){var t=[this.hideAccount?K.ACCOUNT:"",this.hideMenuButton?K.MENU_BUTTON:""];p(t.join(""),this.sideBarRoot),this.hideAccount&&w(s.CACHE)&&U(o.ACCOUNT,A)}else b(this.sideBarRoot);if(this.hideSearch||this.hideAssistant||this.hideRefresh||this.hideUnusedEntities||this.hideReloadResources||this.hideEditDashboard||this.hideMenuButton||this.hideOverflow||this.blockOverflow||this.hideSidebar){t=[this.hideSearch?K.SEARCH:"",this.hideAssistant?K.ASSISTANT:"",this.hideRefresh?K.REFRESH:"",this.hideUnusedEntities?K.UNUSED_ENTITIES:"",this.hideReloadResources?K.RELOAD_RESOURCES:"",this.hideEditDashboard?K.EDIT_DASHBOARD:"",this.hideOverflow?K.OVERFLOW_MENU:"",this.blockOverflow?K.BLOCK_OVERFLOW:"",this.hideMenuButton||this.hideSidebar?K.MENU_BUTTON_BURGER:""];p(t.join(""),this.appToolbar),w(s.CACHE)&&(this.hideSearch&&U(o.SEARCH,A),this.hideAssistant&&U(o.ASSISTANT,A),this.hideRefresh&&U(o.REFRESH,A),this.hideUnusedEntities&&U(o.UNUSED_ENTITIES,A),this.hideReloadResources&&U(o.RELOAD_RESOURCES,A),this.hideEditDashboard&&U(o.EDIT_DASHBOARD,A),this.hideOverflow&&U(o.OVERFLOW,A),this.blockOverflow&&U(o.OVERFLOW_MOUSE,A),this.hideMenuButton&&U(o.MENU_BUTTON,A))}else b(this.appToolbar);this.blockMouse?(p(K.MOUSE,document.body),w(s.CACHE)&&U(o.MOUSE,A)):b(document.body),window.removeEventListener("resize",this.resizeWindowBinded),window.addEventListener("resize",this.resizeWindowBinded),window.dispatchEvent(new Event("resize"))},t.prototype.resizeWindow=function(){var t=this;window.clearTimeout(this.resizeDelay),this.resizeDelay=window.setTimeout((function(){t.updateMenuItemsLabels()}),250)},t.prototype.watchDashboards=function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){t.localName===_.HA_PANEL_LOVELACE&&window.KioskMode.run(t)}))}))},t.prototype.updateMenuItemsLabels=function(){var t=this;this.menuTranslations&&(M((function(){return t.appToolbar.querySelectorAll("".concat(_.TOOLBAR," > ").concat(_.ACTION_ITEMS," > ").concat(_.MENU_ITEM))}),(function(t){return!!t}),":scope > ".concat(_.ACTION_ITEMS," > ").concat(_.MENU_ITEM)).then((function(e){e.forEach((function(e){if(e&&e.dataset&&!e.dataset.selector){var i=e.shadowRoot.querySelector(_.MENU_ITEM_ICON);e.dataset.selector=t.menuTranslations[i.title]}}))})).catch((function(t){console.warn("".concat(r,": ").concat(c," ").concat(t))})),this.user.is_admin&&M((function(){return t.appToolbar.querySelectorAll(_.OVERLAY_MENU_ITEM)}),(function(t){return!(!t||!t.length)}),"".concat(_.TOOLBAR," > ").concat(_.OVERLAY_MENU_ITEM)).then((function(e){e.forEach((function(e){if(e&&e.dataset&&!e.dataset.selector){var i=e.textContent.trim();e.dataset.selector=t.menuTranslations[i]}}))})).catch((function(t){console.warn("".concat(r,": ").concat(c," ").concat(t))})))},t.prototype.entityWatch=function(){return i(this,void 0,void 0,(function(){var t=this;return n(this,(function(e){switch(e.label){case 0:return[4,window.hassConnection];case 1:return e.sent().conn.subscribeMessage((function(e){return t.entityWatchCallback(e)}),{type:"subscribe_events",event_type:I}),[2]}}))}))},t.prototype.entityWatchCallback=function(t){var e=window.kioskModeEntities[this.ha.hass.panelUrl]||[];!e.length||t.event_type!==I||!e.includes(t.data.entity_id)||t.data.old_state&&t.data.new_state.state===t.data.old_state.state||this.run()},t.prototype.setOptions=function(t){this.hideHeader=t.kiosk||t.hide_header,this.hideSidebar=t.kiosk||t.hide_sidebar,this.hideOverflow=t.kiosk||t.hide_overflow,this.hideMenuButton=t.kiosk||t.hide_menubutton,this.hideAccount=t.kiosk||t.hide_account,this.hideSearch=t.kiosk||t.hide_search,this.hideAssistant=t.kiosk||t.hide_assistant,this.hideRefresh=t.kiosk||t.hide_refresh,this.hideUnusedEntities=t.kiosk||t.hide_unused_entities,this.hideReloadResources=t.kiosk||t.hide_reload_resources,this.hideEditDashboard=t.kiosk||t.hide_edit_dashboard,this.blockOverflow=t.block_overflow,this.blockMouse=t.block_mouse,this.ignoreEntity=typeof t.ignore_entity_settings===f?t.ignore_entity_settings:this.ignoreEntity,this.ignoreMobile=typeof t.ignore_mobile_settings===f?t.ignore_mobile_settings:this.ignoreMobile,this.ignoreDisableKm=typeof t.ignore_disable_km===f?t.ignore_disable_km:this.ignoreDisableKm},t}();(new x).log(),Promise.resolve(customElements.whenDefined(_.HUI_VIEW)).then((function(){window.KioskMode=new F}))}();