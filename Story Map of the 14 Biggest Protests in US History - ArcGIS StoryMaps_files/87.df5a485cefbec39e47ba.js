(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{DJse:function(e,t,i){"use strict";i.r(t),i.d(t,"ImageBuilder",(function(){return U}));var a=i("cxan"),o=i("9fIP"),r=i("MMYH"),n=i("pWxA"),s=i("K/z8"),c=i("sRHE"),p=i("8K1b"),l=i("zjfJ"),d=i("ERkP"),u=i.n(d),m=i("2SGB"),h=i("YQpL"),g=i("g2IE"),b=i("AuFC"),f=i("2gSQ"),O=i("JmSK"),j=i("+L/X"),P=i("mmNb"),w=i("ZjWX"),S=i("/StV"),C=i("M6On"),I=i("ix8t"),y=i("7Mlx"),v=i("ZaeZ"),M=i("7/Cc"),T=i("pcrg"),F=u.a.createElement;function D(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function k(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?D(Object(i),!0).forEach((function(t){Object(l.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):D(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var U=function(e){Object(p.a)(u,e);var t,i=(t=u,function(){var e,i=Object(c.a)(t);if(x()){var a=Object(c.a)(this).constructor;e=Reflect.construct(i,arguments,a)}else e=i.apply(this,arguments);return Object(s.a)(this,e)});function u(e){var t;return Object(o.a)(this,u),t=i.call(this,e),Object(l.a)(Object(n.a)(t),"renderPropertiesModal",(function(){var e={id:"imageAltText",title:F(m.a,{id:"builder.common.altText"}),description:F(m.a,{id:"builder.image.propertiesDescription"}),value:t.state.alt,onChange:t.handleInputChange},i=t.getFocalPointImageUrl(),a={id:i,customComponent:F(y.a,{mediaType:"image",imageUrl:i,placementType:t.state.mediaPlacement.type,onPlacementTypeUpdate:t.handlePlacementTypeChange,focalPoint:t.state.mediaPlacement.fill,onFocalPointUpdate:t.handleFocalPointChange,canFit:t.props.canFit,showFullScreenPreview:t.props.showFullScreenPlacementPreview,fitColor:t.state.mediaPlacement.fit?t.state.mediaPlacement.fit.color:M.a,onFitColorUpdate:t.handleFitColorChange})},o=[{id:"image-properties",modalProperties:t.props.isCropped?[a,e]:[e]}];return F(w.a,{isShowingModal:t.state.isShowingSettingsModal,mediaTitle:t.props.intl.formatMessage({id:"builder.image.properties"}),tabs:o,onConfirm:t.onPropertiesModalConfirm,onDiscard:t.onPropertiesModalDiscard})})),Object(l.a)(Object(n.a)(t),"getMimeType",(function(e){return e.slice(e.indexOf("/")+1,e.indexOf(";"))})),Object(l.a)(Object(n.a)(t),"imgSrcIsBase64",(function(e){var i=t.getMimeType(e),a="data:image/".concat(i,";base64");return!!e.match(a)})),Object(l.a)(Object(n.a)(t),"convertBase64ToBlob",(function(e,t,i){return Object(g.a)(e)})),Object(l.a)(Object(n.a)(t),"processNewImage",(function(e){var i=t.convertBase64ToBlob(e,Date.now().toString(),t.getMimeType(e));Object(v.a)(i).then((function(e){t.uploadImageFile(e,i)})).catch((function(e){t.setState({isUploading:!1}),"max-file-size-exceeded"===e&&t.props.toast.add({type:"error",title:F(m.a,{id:"builder.image.uploadErrorTitle"}),details:F(m.a,{id:"builder.image.uploadErrorDescription"})})}))})),Object(l.a)(Object(n.a)(t),"uploadImageFile",(function(e,i){var a="".concat(Date.now().toString(),".").concat(i.type.slice(i.type.indexOf("/")+1)),o=t.props.storyItem,r={resourceName:a,resource:i,isAdd:!0};o.upsertItemResource(r).then((function(i){var o={provider:"item-resource",src:"https://".concat(t.props.config.PORTAL_HOST,"/sharing/rest/content/items/").concat(t.props.storyItem.itemId,"/resources/").concat(a),resourceId:a,height:e.height,width:e.width};t.props.setImage(o),t.setState({isUploading:!1})})).catch((function(e){t.setState({isUploading:!1}),t.props.toast.add({type:"error",title:F(m.a,{id:"builder.image.uploadErrorTitle"}),details:F(m.a,{id:"builder.image.uploadFailDescription"})})}))})),Object(l.a)(Object(n.a)(t),"handleInputChange",(function(e){t.setState({alt:e.target.value})})),Object(l.a)(Object(n.a)(t),"handleFocalPointChange",(function(e){t.setState((function(t){return{mediaPlacement:k({},t.mediaPlacement,{fill:e})}}))})),Object(l.a)(Object(n.a)(t),"handlePlacementTypeChange",(function(e){t.setState((function(t){return{mediaPlacement:k({},t.mediaPlacement,{type:e})}}))})),Object(l.a)(Object(n.a)(t),"handleFitColorChange",(function(e){t.setState((function(t){return{mediaPlacement:k({},t.mediaPlacement,{fit:{color:e}})}}))})),Object(l.a)(Object(n.a)(t),"onPropertiesModalConfirm",(function(){t.updateSettings(),t.closePropertiesModal()})),Object(l.a)(Object(n.a)(t),"onPropertiesModalDiscard",(function(){t.resetSettings(),t.closePropertiesModal()})),Object(l.a)(Object(n.a)(t),"updateSettings",(function(){t.props.updateAlt(t.state.alt),t.props.updateMediaPlacement(t.state.mediaPlacement)})),Object(l.a)(Object(n.a)(t),"resetSettings",(function(){t.setState({alt:t.props.alt}),t.setState({mediaPlacement:t.props.mediaPlacement})})),Object(l.a)(Object(n.a)(t),"openPropertiesModal",(function(){t.setState({isShowingSettingsModal:!0})})),Object(l.a)(Object(n.a)(t),"closePropertiesModal",(function(){t.setState({isShowingSettingsModal:!1})})),Object(l.a)(Object(n.a)(t),"getFocalPointImageUrl",(function(){if(t.props.resourceId&&t.props.resourceId.length){var e=Object(v.b)({fileName:t.props.resourceId,imageNodeWidth:400});return t.props.storyItem.getItemResourceImageFullUrl(t.props.resourceId,e)}return""})),t.state={alt:t.props.alt,windowWidth:0,isShowingSettingsModal:!1,mediaPlacement:t.props.mediaPlacement,isUploading:!1},t}return Object(r.a)(u,[{key:"componentDidMount",value:function(){this.props.src&&this.imgSrcIsBase64(this.props.src)&&(this.setState({isUploading:!0}),this.processNewImage(this.props.src)),this.setState({windowWidth:window.innerWidth})}},{key:"render",value:function(){var e=this.props.showSizeOptions?{full:!!(this.props.width&&this.props.width>=O.b.Full),float:!0,wide:!!(this.props.width&&this.props.width>=O.b.Wide),standard:!0}:{full:!1,float:!1,wide:!1,standard:!1},t=F(d.Fragment,null,F(T.default,Object(a.a)({},this.props,{windowWidth:this.state.windowWidth,mediaWrapperCaption:F(P.a,{text:this.props.caption||"",placeholder:this.props.intl.formatMessage({id:"builder.image.addCaptionPlaceholder"}),updateCaption:this.props.updateCaption,insertTextBlock:this.props.insertTextBlock,alignmentLg:this.props.captionAlignmentLg,isIntersecting:this.props.isIntersecting,id:this.props.blockId,customCaptionColors:this.props.customCaptionColors,updateCustomCaptionColors:this.props.updateCustomCaptionColors})})),this.renderPropertiesModal());return this.props.isInserted&&this.state.isUploading&&this.props.hasLoadingIndicator?F(I.a,{showLoadingIndicator:!0,backgroundColor:this.props.loadingBackgroundColor,themeOverrideId:this.props.placeholderThemeOverrideId}):F(d.Fragment,null,(this.props.resourceId||this.props.src)&&this.state.windowWidth&&(this.props.showFullToolbar?F(S.a,{size:this.props.size,possibleSizes:e,onDeleteClicked:this.props.delete,onSettingsClicked:this.openPropertiesModal,updateSize:this.props.updateSize},t):F(C.a,{onDeleteClicked:this.props.delete,onSettingsClicked:this.props.showSettingsOption?this.openPropertiesModal:void 0,thumbnails:this.props.thumbnails,updateOrder:this.props.updateOrder,mediaPanelInserterItems:this.props.mediaPanelInserterItems,isToolbarHidden:!this.props.showControls},t)))}},{key:"componentDidUpdate",value:function(e){this.props.alt!==e.alt&&this.setState({alt:this.props.alt}),this.props.mediaPlacement!==e.mediaPlacement&&this.setState({mediaPlacement:this.props.mediaPlacement||M.b})}}]),u}(d.PureComponent);Object(l.a)(U,"defaultProps",{mediaPlacement:M.b}),t.default=Object(b.c)(Object(h.c)(Object(j.b)(Object(f.a)(U))))}}]);