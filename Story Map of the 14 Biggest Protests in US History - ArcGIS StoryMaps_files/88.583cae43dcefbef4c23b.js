(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"do+P":function(e,t,n){"use strict";n.r(t),n.d(t,"Image",(function(){return C}));var a=n("VtSi"),s=n.n(a),r=n("9fIP"),i=n("MMYH"),o=n("pWxA"),c=n("PRnZ"),u=n("K/z8"),l=n("sRHE"),p=n("8K1b"),d=n("zjfJ"),h=n("ERkP"),f=n.n(h),g=n("txt0"),m=n("NX3A"),w=n("h0mi"),b=n("O8Oa"),y=n("nmTH"),P=n("7/Cc"),v=n("KDNM");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var C=function(e){Object(p.a)(h,e);var t,a=(t=h,function(){var e,n=Object(l.a)(t);if(x()){var a=Object(l.a)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return Object(u.a)(this,e)});function h(e){var t;if(Object(r.a)(this,h),t=a.call(this,e),Object(d.a)(Object(o.a)(t),"applyProps",(function(){var e;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if("function"!==typeof t.states.overrideCallback){n.next=5;break}return n.next=3,s.a.awrap(t.getProps());case 3:e=n.sent,t.states.overrideCallback({blockProps:e});case 5:case"end":return n.stop()}}),null,null,null,Promise)})),Object(d.a)(Object(o.a)(t),"observe",(function(e){return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(t.states.observer.observe(Object(o.a)(t),e));case 2:case"end":return n.stop()}}),null,null,null,Promise)})),Object(y.a)(Object(o.a)(t)),t.states.hasLoadingIndicator=!1,t.states.loadingBackgroundColor=void 0,t.states.canFit=!0,t.states.showFullScreenPlacementPreview=!1,t.states.showFullScreenButton=!1,t.states.showControls=!0,t.states.isPartOfFullScreen=!1,t.states.isMedia=!0,t.states.dnd.hasDraggedPlaceholder=!0,t.states.showSettingsOption=!0,t.states.isExpandableMedia=t.mode===w.a.Viewer,"undefined"!==typeof e.resourceId&&(t.data.image=e.resourceId),"undefined"!==typeof t.data.image&&(t.imageResource=t.getResourceById(t.data.image)),"undefined"===typeof t.imageResource)throw new Error;return"undefined"===typeof t.data.caption&&(t.data.caption=""),"undefined"===typeof t.data.alt&&(t.data.alt=""),t.addEventListener("getMediaId",(function(){if(t.imageResource)return t.imageResource.getImageItemId()})),t.addEventListener("getAltText",(function(){if(t.data.alt)return t.data.alt})),t.addEventListener("applyProps",(function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.awrap(t.applyProps());case 2:case"end":return e.stop()}}),null,null,null,Promise)})),t.addEventListener("getImageHeight",(function(){return t.imageResource.getHeight()})),t.addEventListener("getImageWidth",(function(){return t.imageResource.getWidth()})),t}return Object(i.a)(h,[{key:"getBlockComponent",value:function(){return this.mode===w.a.Viewer?f.a.lazy((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"pcrg"))})):f.a.lazy((function(){return Promise.all([n.e(2),n.e(0),n.e(1),n.e(87)]).then(n.bind(null,"DJse"))}))}},{key:"getResources",value:function(){return[this.imageResource]}},{key:"getViewerProps",value:function(){var e=this;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{alt:this.data.alt,caption:this.data.caption,credits:this.data.credits,customCaptionColors:this.data.customCaptionColors,resourceId:this.imageResource.getImageItemId(),height:this.imageResource.getHeight(),width:this.imageResource.getWidth(),mediaPlacement:this.config&&this.config.placement?this.config.placement:void 0,aspectRatio:this.states.aspectRatio,heightConstrained:this.states.heightConstrained,widthConstrained:this.states.widthConstrained,captionAlignmentLg:this.states.captionAlignment,showCaption:this.states.showCaption,isCropped:this.states.isCropped,isCompact:this.states.isCompact,fillParent:this.states.fillParent,isFullScreen:this.states.isFullScreen,isPartOfFullScreen:this.states.isPartOfFullScreen,onToggleFullScreen:this.states.showFullScreenButton?function(){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.states.isFullScreen=!e.states.isFullScreen,t.next=3,s.a.awrap(e.update({skipSave:!0}));case 3:return t.next=5,s.a.awrap(e.applyProps());case 5:case"end":return t.stop()}}),null,null,null,Promise)}:void 0,isIntersecting:this.states.observer.isIntersecting,observe:this.observe,blockId:this.id,printMode:this.getGlobalState("printMode"),showOpenInNewTabButton:this.states.showOpenInNewTabButton,openInNewTabUrl:this.states.openInNewTabUrl,shouldUseWindowWidth:this.states.shouldUseWindowWidth,isExpandableMedia:this.states.isExpandableMedia});case 1:case"end":return t.stop()}}),null,this,null,Promise)}},{key:"getBuilderProps",value:function(){var e=this;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=I,t.t1={},t.next=4,s.a.awrap(this.getViewerProps());case 4:return t.t2=t.sent,t.t3={showSizeOptions:this.states.showSizeOptions,showFullToolbar:this.states.showFullToolbar,showSettingsOption:this.states.showSettingsOption,isInserted:this.states.isInserted,hasLoadingIndicator:this.states.hasLoadingIndicator,loadingBackgroundColor:this.states.loadingBackgroundColor,placeholderThemeOverrideId:this.states.placeholderThemeOverrideId,canFit:this.states.canFit,showFullScreenPlacementPreview:this.states.showFullScreenPlacementPreview,showControls:this.states.showControls,src:this.imageResource.getImageUrl(),provider:this.imageResource?this.imageResource.getProvider():"",size:this.getLayoutSize(),thumbnails:this.states.thumbnails,updateOrder:this.states.updateOrder,mediaPanelInserterItems:this.states.mediaPanelInserterItems,updateSize:function(t){e.updateSize(t)},setImage:function(t){var n=e.getResource();"undefined"!==typeof n&&(n.setData(t),e.update(),e.parent&&e.parent.do("onImageUploaded"))},updateImage:function(){},updateImageType:function(e){console.log("update image type: ",e)},updateCaption:function(t){e.data.caption=t,t&&Object(v.a)(t)||!e.data.customCaptionColors||delete e.data.customCaptionColors,e.update()},updateAlt:function(t){return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.data.alt=t,n.next=3,s.a.awrap(e.update());case 3:return n.next=5,s.a.awrap(e.applyProps());case 5:case"end":return n.stop()}}),null,null,null,Promise)},updateMediaPlacement:function(t){var n,a,r,i;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e.config||(e.config={placement:P.b}),n=e.config.placement&&e.config.placement.type,a=e.config.placement&&e.config.placement.fit&&e.config.placement.fit.color,r=t.fit&&t.fit.color,i=r!==a,"fit"===t.type&&r&&(i||"fill"===n)&&g.a.trackEvent(g.a.Category.Builder,g.a.Action.Builder_PlacementEditor_SelectFitColor,r),e.config.placement=t,o.next=9,s.a.awrap(e.update());case 9:return o.next=11,s.a.awrap(e.applyProps());case 11:case"end":return o.stop()}}),null,null,null,Promise)},forceUpdate:function(){e.update()},insertTextBlock:function(){e.parent&&e.insertBlock({type:"text",mode:w.a.Builder,parent:e.parent,index:e.getIndex()+1,data:{text:"",type:"paragraph"},states:{hasFocus:!0}})},delete:function(){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(e.remove());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),null,null,null,Promise)},updateCustomCaptionColors:function(t){return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.data.customCaptionColors=t,n.next=3,s.a.awrap(e.update());case 3:case"end":return n.stop()}}),null,null,null,Promise)}},t.abrupt("return",(0,t.t0)(t.t1,t.t2,t.t3));case 7:case"end":return t.stop()}}),null,this,null,Promise)}},{key:"getLayoutProps",value:function(){return I({},Object(c.a)(Object(l.a)(h.prototype),"getLayoutProps",this).call(this),{spacingTop:m.a.spacing.xl,spacingBottom:m.a.spacing.xl,spacingTopSm:m.a.spacing.sm,spacingBottomSm:m.a.spacing.sm,postInserterProps:this.getBetweenInserterProps(),preInserterProps:this.getBetweenInserterProps(!0),hasDragHandle:!0})}},{key:"getResource",value:function(){return this.getResourceById(this.data.image)}}]),h}(b.a);Object(d.a)(C,"type","image"),Object(d.a)(C,"getInstance",(function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new C(Object(b.b)(e,C.type)));case 1:case"end":return t.stop()}}),null,null,null,Promise)})),t.default=C}}]);