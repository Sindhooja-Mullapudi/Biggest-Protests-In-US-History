(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{Iny9:function(t,e,s){"use strict";s.r(e),s.d(e,"StoryEditor",(function(){return F}));var o=s("VtSi"),r=s.n(o),i=s("9fIP"),n=s("MMYH"),a=s("pWxA"),c=s("K/z8"),p=s("sRHE"),u=s("8K1b"),l=s("zjfJ"),d=s("ERkP"),y=s.n(d),h=s("2SGB"),S=s("YQpL"),f=s("7xIC"),m=s.n(f),b=s("txt0"),v=s("7sDT"),I=s("AuFC"),g=s("Y/5s"),O=s("LqVs"),j=s("2gSQ"),D=s("wTCQ"),w=s("R+Fi"),C=s("yhfQ"),T=s("WTRt"),k=s("h0mi"),P=s("CBeR"),A=s("BVlg"),U=s("GA+H"),E=s("i8u9"),H=s("fC0e"),R=s("0voo"),x=s("MHYw"),B=y.a.createElement;function M(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var F=function(t){Object(u.a)(y,t);var e,o=(e=y,function(){var t,s=Object(p.a)(e);if(M()){var o=Object(p.a)(this).constructor;t=Reflect.construct(s,arguments,o)}else t=s.apply(this,arguments);return Object(c.a)(this,t)});function y(t){var e;return Object(i.a)(this,y),e=o.call(this,t),Object(l.a)(Object(a.a)(e),"deleteItem",(function(){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(Object(D.b)({id:e.props.storyItem.itemId,userSession:e.props.userSession,toast:e.props.toast}));case 2:b.a.trackEvent(b.a.Category.Story,b.a.Action.Story_DeleteStory,b.a.Name.BuilderHeader),m.a.push("/stories","".concat(e.props.config.BASE_URL,"/stories"));case 4:case"end":return t.stop()}}),null,null,null,Promise)})),Object(l.a)(Object(a.a)(e),"favoriteItem",(function(){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(D.c)({id:e.props.storyItem.itemId,userSession:e.props.userSession,toast:e.props.toast,owner:e.props.storyItem.itemOwner,itemType:"story"}));case 1:case"end":return t.stop()}}),null,null,null,Promise)})),Object(l.a)(Object(a.a)(e),"unfavoriteItem",(function(){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(D.e)({id:e.props.storyItem.itemId,userSession:e.props.userSession,toast:e.props.toast,owner:e.props.storyItem.itemOwner,itemType:"story"}));case 1:case"end":return t.stop()}}),null,null,null,Promise)})),Object(l.a)(Object(a.a)(e),"onStorySave",(function(t,s){t&&e.notifyStorySaveError()})),Object(l.a)(Object(a.a)(e),"notifyStorySaveError",(function(){e.props.toast.add({type:"error",title:B(h.a,{id:"component.storyEditor.saveErrorTitle"}),details:B(h.a,{id:"component.storyEditor.saveErrorDetails"})})})),Object(l.a)(Object(a.a)(e),"updateTitle",(function(t){e.setState({draftStoryTitle:t})})),Object(l.a)(Object(a.a)(e),"saveSettings",(function(t){var s=t.gaid,o=t.isPublishedDateHidden,r=t.isSocialIconsHidden;e.story.do("updateGAID",s),e.story.do("updatePubDateHiddenStatus",o),e.story.do("updateSocialIconsHiddenStatus",r),b.a.trackEvent(b.a.Category.Builder,b.a.Action.Builder_Settings_AddGoogleAnalytics),e.props.toast.add({type:"success",title:e.props.intl.formatMessage({id:"component.builderHeader.story.settings.toast.success"})})})),Object(l.a)(Object(a.a)(e),"resetStory",(function(){var t;null===(t=e.story)||void 0===t||t.do("reset")})),e.state={storyUI:void 0,draftStoryTitle:"",websiteTheme:void 0,isDuplicateStoryAllowed:!1},e}return Object(n.a)(y,[{key:"componentDidMount",value:function(){var t,e=this;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return this.props.storyItem.userSession=this.props.userSession,this.props.userSession&&this.props.userSession.getUser(),o.next=4,r.a.awrap(Object(w.a)(this.props.storyItem));case 4:t=o.sent,this.props.storyItem.setGetStoryDataMethod((function(){return e.story.do("getStoryDataForSave")})),this.props.storyItem.setParseItemResourcesForPublish(C.a),this.props.storyItem.setUpdateStoryTitle((function(t){return e.story.do("setCoverTitle",t)})),this.props.storyItem.on("story-save-end",this.onStorySave),Promise.resolve(Object(R.a)()?s.e(25).then(s.t.bind(null,"LNcM",7)):void 0).then((function(){return Object(T.a)(e.props.storyItem.itemDraftData,k.a.Builder,{storyItem:e.props.storyItem,config:e.props.config,featureDecisions:e.props.featureDecisions,environment:e.props.environment,lazy:!window.location.search.includes("lazy=false"),lab:window.location.search.includes("lab=true"),intl:e.props.intl,immersive:{toast:e.props.toast}})})).then((function(t){return e.story=t,e.story.on("story-data-update",e.props.storyItem.autosaveStory),e.story.on("story-title-update",e.updateTitle),e.story.render()})).then((function(s){var o=e.story.do("getStoryTheme");e.setState({storyUI:s,websiteTheme:Object(g.c)(o.websiteThemeId),draftStoryTitle:e.story.do("getCoverTitle"),isDuplicateStoryAllowed:t}),e.props.onStoryRendered()})).catch((function(){b.a.trackEvent(b.a.Category.Builder,b.a.Action.Story_Render_Error,e.props.storyItem.itemId),Object(x.d)({config:e.props.config,signInUrl:e.props.signInUrl,userSession:e.props.userSession})}));case 10:case"end":return o.stop()}}),null,this,null,Promise)}},{key:"render",value:function(){var t,e=this.props.storyItem.getItemPublishStatus(),s=this.props.storyItem.itemSharingLevel,o=this.story?this.story.do("getGAID"):"",r=!!this.story&&this.story.do("isPublishedDateHidden"),i=!!this.story&&this.story.do("isSocialIconsHidden"),n="update"===(null===(t=this.props.storyItem.itemDetails)||void 0===t?void 0:t.itemControl);return B(d.Fragment,null,this.state.websiteTheme&&B(g.a,{theme:this.state.websiteTheme},B(P.a,{isCoAuthor:n},B(H.a,{origin:this.props.origin,title:this.state.draftStoryTitle,storyId:this.props.storyItem.itemId,isSaving:this.props.isSaving,publishStatus:e,sharingLevel:s,googleAnalyticsKey:o,signInUrl:this.props.signInUrl,onTitleClicked:this.resetStory,onFavoriteClicked:this.favoriteItem,onUnfavoriteClicked:this.unfavoriteItem,onDeleteClicked:this.deleteItem,onPublishClicked:this.props.onPublish,onStorySettingsSave:this.saveSettings,onShareStoryClicked:this.props.onShareStory,isDuplicateStoryAllowed:this.state.isDuplicateStoryAllowed,onDuplicateStoryClicked:this.props.onDuplicateStoryClicked,isDuplicateNudgeShowing:this.props.isDuplicateNudgeShowing,onDuplicateNudgeClose:this.props.onDuplicateNudgeClose,onDiscardUnpublishedClicked:this.props.onDiscardUnpublishedClicked,onUnpublishClicked:this.props.onUnpublishClicked,userSession:this.props.userSession,storyMapUserPrivileges:this.props.storyMapUserPrivileges,isPublishedDateHidden:r,isSocialIconsHidden:i,storyType:A.a.Story,featureDecisions:this.props.featureDecisions,environment:this.props.environment},B(U.a.Provider,{value:this.props.storyItem},this.state.storyUI)))))}}]),y}(d.Component);e.default=Object(S.c)(Object(v.c)(Object(E.b)(Object(I.c)(Object(O.b)(Object(j.a)(F))))))}}]);