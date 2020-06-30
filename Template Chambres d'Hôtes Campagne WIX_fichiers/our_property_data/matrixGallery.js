define("matrixGallery",["lodash","coreUtils","santa-components","componentsCore","skins","reactDOM","zepto","galleriesCommon","displayer"],function(t,e,i,o,s,r,n,a,l){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=913)}({0:function(e,i){e.exports=t},1:function(t,i){t.exports=e},2:function(t,e){t.exports=i},3:function(t,e){t.exports=o},5:function(t,e){t.exports=s},50:function(t,e){t.exports=a},6:function(t,e){t.exports=r},60:function(t,e){t.exports=l},7:function(t,e){t.exports=n},913:function(t,e,i){var o,s;o=[i(2),i(0),i(5),i(3),i(1),i(50),i(60),i(6),i(7),i(914)],void 0===(s=function(t,e,i,o,s,r,n,a,l,p){"use strict";var h=s.matrixCalculations,m=s.matrixScalingCalculations,g=r.utils.galleriesHelperFunctions,d=s.galleriesCommonLayout,c=["topPadding","imgHeightDiff"];function f(t,e,i){return i<=t*e?"fullView":"hiddenChildren"}function u(t){return Math.max(g.MIN_GALLERY_HEIGHT,t)}var y={displayName:"MatrixGallery",propTypes:e.assign({shouldResetGalleryToOriginalState:t.santaTypesDefinitions.RenderFlags.shouldResetGalleryToOriginalState.isRequired,compProp:t.santaTypesDefinitions.Component.compProp.isRequired,compData:t.santaTypesDefinitions.Component.compData.isRequired,style:t.santaTypesDefinitions.Component.style.isRequired,skin:t.santaTypesDefinitions.Component.skin.isRequired,compTheme:t.santaTypesDefinitions.Component.theme,currentUrlPageId:t.santaTypesDefinitions.Component.currentUrlPageId.isRequired,isMobileView:t.santaTypesDefinitions.isMobileView,isMobileDevice:t.santaTypesDefinitions.Device.isMobileDevice,layoutContainerClassName:t.santaTypesDefinitions.Layout.layoutContainerClassName,isTabletDevice:t.santaTypesDefinitions.Device.isTabletDevice,isResponsive:t.santaTypesDefinitions.RendererModel.isResponsive,isExperimentOpen:t.santaTypesDefinitions.isExperimentOpen,compActions:t.santaTypesDefinitions.Component.compActions.isRequired},t.utils.santaTypesUtils.getSantaTypesByDefinition(n)),mixins:[o.mixins.skinBasedComp,o.mixins.skinInfo,o.mixins.createChildComponentMixin],getInitialState:function(){return this.prevCompProps=e.cloneDeep(this.props.compProp),this.prevCompData=e.cloneDeep(this.props.compData),this.galleryStyleHeight=e.cloneDeep(this.props.style.height),this.compTheme=e.cloneDeep(this.props.compTheme),this.skin=e.cloneDeep(this.props.skin),this.getInitStateAndResetInstance(this.props)},getInitStateAndResetInstance:function(t){var e=t||this.props;this.shouldResetGalleryToOriginalState=e.shouldResetGalleryToOriginalState;var i=h.getAvailableRowsNumber(e.compProp.maxRows,e.compProp.numCols,e.compData.items.length),o=e.isMobileView?"mobileView":"desktopView";if(this.showMoreClicked=!1,e.compProp.itemHeight){var s=g.getGalleryHeight(i,i,e.compProp.margin,e.skin,e.style.height,e.compProp.itemHeight);this.galleryHeight=u(s)}else this.galleryHeight=u(e.style.height);return this.itemHeight=e.compProp.itemHeight?e.compProp.itemHeight:h.getItemHeight(e.compProp.margin,this.galleryHeight,i,g.getSkinHeightDiff(e.skin)),{numberOfRows:i,$mobile:e.isMobileDevice||e.isTabletDevice()?"mobile":"notMobile",$displayDevice:o,$state:f(i,e.compProp.numCols,e.compData.items.length)}},createDisplayer:function(t,e,o,s){var r=this.getDisplayerSkin(),n=i.skinsMap.get(this.props.skin),a=i.skinsMap.get(r),l=n.exports&&n.exports.bottomGap||0,p=this.getParams(c,r),d=g.getDisplayerHeightDiff(a,p,this.state.$displayDevice),f=g.getDisplayerWidthDiff(a,this.state.$displayDevice),u=m.getSizeAfterScaling({itemHeight:s,itemWidth:o,displayerData:t,imageMode:this.props.compProp.imageMode,widthDiff:f,heightDiff:d,bottomGap:l}),y=h.getItemPosition(e,o,s,this.props.compProp.margin,this.props.compProp.numCols);return this.createChildComponent(t,"wysiwyg.viewer.components.Displayer","imageItem",{key:t.id,ref:t.id,id:this.props.id+t.id,currentUrlPageId:this.props.currentUrlPageId,galleryId:this.props.id,galleryDataId:this.props.compData.id,imageWrapperSize:u.imageWrapperSize,imageIndex:e,heightDiff:d,widthDiff:f,bottomGap:l,style:this.props.isResponsive?{}:{width:u.displayerSize.width,height:u.displayerSize.height,position:"absolute",left:y.left,top:y.top}})},createDisplayers:function(){var t=e.take(this.props.compData.items,this.props.isResponsive?Number.MAX_SAFE_INTEGER:this.props.compProp.numCols*this.state.numberOfRows),i=h.getItemWidth(this.props.compProp.margin,this.props.compProp.numCols,this.props.style.width,g.getSkinWidthDiff(this.props.skin)),o=this.itemHeight||h.getItemHeight(this.props.compProp.margin,this.galleryHeight,this.state.numberOfRows,g.getSkinHeightDiff(this.props.skin));return e.map(t,function(t,e){return this.createDisplayer(t,e,i,o)}.bind(this))},componentWillReceiveProps:function(t){var i=h.getAvailableRowsNumber(t.compProp.maxRows,t.compProp.numCols,t.compData.items.length),o={},s=!1;if(this.prevCompProps.maxRows===t.compProp.maxRows&&this.prevCompProps.numCols===t.compProp.numCols&&this.prevCompData.items.length===t.compData.items.length||(s=!0,o.numberOfRows=i,this.galleryHeight=u(g.getGalleryHeight(this.state.numberOfRows,i,this.prevCompProps.margin,this.skin,this.galleryHeight)),o.$state=f(i,t.compProp.numCols,t.compData.items.length)),this.galleryStyleHeight!==t.style.height&&(s=!0,this.galleryHeight=u(t.style.height)),this.shouldResetGalleryToOriginalState!==t.shouldResetGalleryToOriginalState&&(this.shouldResetGalleryToOriginalState&&this.resetGalleryState&&this.resetGalleryState(t),this.shouldResetGalleryToOriginalState=t.shouldResetGalleryToOriginalState),s||function(t,i){if(t&&i&&t.skin===i.skin){var o=e.pick(t.style.properties,c),s=e.pick(i.style.properties,c);return!e.isEqual(o,s)}return!1}(this.compTheme,t.compTheme)){this.itemHeight=h.getItemHeight(t.compProp.margin,this.galleryHeight,i,g.getSkinHeightDiff(this.skin));var r=g.getSkinHeightDiff(this.skin),n=o.numberOfRows||this.state.numberOfRows;this.galleryHeight=n*this.itemHeight+(n-1)*this.prevCompProps.margin+r}e.isEmpty(o)||this.setState(o),this.prevCompProps=e.cloneDeep(t.compProp),this.prevCompData=e.cloneDeep(t.compData),this.galleryStyleHeight=e.cloneDeep(t.style.height),this.compTheme=e.cloneDeep(t.compTheme),this.skin=e.cloneDeep(t.skin)},getSkinProperties:function(){var t={showMore:{style:this.props.isResponsive?{display:"none"}:{},children:this.props.compProp.showMoreLabel,onClick:this.showMoreRows,tabIndex:"0",onKeyDown:o.utils.accessibility.keyboardInteractions.activateBySpaceOrEnterButton},itemsContainer:{children:this.createDisplayers(),style:{height:"100%"},className:this.props.isResponsive?this.props.layoutContainerClassName:"",onKeyDown:this.onKeyDown},"":{"data-height-diff":g.getSkinHeightDiff(this.props.skin),"data-width-diff":g.getSkinWidthDiff(this.props.skin),"data-presented-row":this.state.numberOfRows,"data-num-cols":this.props.compProp.numCols,"data-image-mode":this.props.compProp.imageMode,"data-margin":this.props.compProp.margin,style:this.props.isResponsive?{}:{height:this.galleryHeight}}};return(this.showMoreClicked||"fullView"===this.state.$state)&&d.updateSkinPropsForFlexibleHeightGallery(t,this.galleryHeight),t},showMoreRows:function(){var t=h.getAvailableRowsNumber(this.state.numberOfRows+this.props.compProp.incRows,this.props.compProp.numCols,this.props.compData.items.length);this.showMoreClicked=!0,this.galleryHeight=u(g.getGalleryHeight(this.state.numberOfRows,t,this.props.compProp.margin,this.props.skin,this.galleryHeight)),this.registerReLayout(),this.setState({numberOfRows:t,$state:f(t,this.props.compProp.numCols,this.props.compData.items.length)})},getDisplayerSkin:function(){return this.getSkinExports().imageItem.skin},navigateGalleryFocus:function(t,e){var i,s=o.utils.accessibility.getTabbaleElements(a.findDOMNode(this)),r=s.indexOf(t),n=Math.ceil(s.length/this.state.numberOfRows);"ArrowDown"===e&&(i=r+n)>=s.length&&(i%=s.length),"ArrowUp"===e&&(i=r-n)<0&&(i=s.length-Math.abs(i)),"ArrowRight"===e&&(i=r+1)>=s.length&&(i=0),"ArrowLeft"===e&&(i=r-1)<0&&(i=s.length-1);var p=s[i];p&&l(p).focus()},onKeyDown:function(t){e.includes(["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],t.key)&&(t.stopPropagation(),t.preventDefault(),this.navigateGalleryFocus(t.target,t.key))}};return o.compRegistrar.register("wysiwyg.viewer.components.MatrixGallery",y),i.skinsMap.addBatch(p),y}.apply(e,o))||(t.exports=s)},914:function(t,e,i){var o,s,r;"undefined"!=typeof self&&self,s=[],void 0===(r="function"==typeof(o=function(){"use strict";var t={"skins.viewer.gallerymatrix.MatrixGalleryIronSkin":{react:[["div","itemsContainer",[],{}],["div",null,["_pos"],{},["div","showMore",[],{}]]],exports:{heightDiff:40,imageItem:{skin:"skins.viewer.gallerymatrix.MatrixDisplayerIronSkin",styleGroup:"inherit"}},params:{txt:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{txt:"color_15",fntds:"font_8"},css:{"%_pos":"height:30px !important;position:absolute;right:0;bottom:0;left:0;text-align:center;","%showMore":"cursor:pointer;display:inline-block;line-height:45px !important;padding:0 10px;text-decoration:underline !important;color:[txt];[fntds]",'%[data-state~="fullView"] %showMore':"display:none;","%itemsContainer":"position:absolute;top:0;right:0;bottom:45px !important;left:0;"}},"skins.viewer.gallerymatrix.MatrixGalleryScotchTapeSkin":{react:[["div","itemsContainer",[],{}],["div",null,["_pos"],{},["div","showMore",[],{}]]],exports:{heightDiff:50,imageItem:{skin:"skins.viewer.gallerymatrix.MatrixDisplayerScotchTapeSkin",styleGroup:"inherit"}},params:{txt:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{txt:"color_15",fntds:"font_8"},css:{"%_pos":"height:30px !important;position:absolute;right:0;bottom:0;left:0;text-align:center;","%showMore":"cursor:pointer;display:inline-block;line-height:45px !important;padding:0 10px;text-decoration:underline !important;color:[txt];[fntds]",'%[data-state~="fullView"] %showMore':"display:none;","%itemsContainer":"position:absolute;left:0;right:0;top:10px;bottom:45px !important;"}},"wysiwyg.common.components.matrixgallery.viewer.skins.MatrixGallerySeparateTextBoxSkin":{react:[["div","itemsContainer",[],{}],["div","showMore",[],{}]],exports:{heightDiff:40,imageItem:{skin:"wysiwyg.common.components.matrixgallery.viewer.skins.MatrixDisplayerSeparateTextBoxSkin",styleGroup:"inherit"}},params:{showMoreClr:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{showMoreClr:"color_13",fntds:"font_9"},css:{"%showMore":"color:[showMoreClr];[fntds]  cursor:pointer;text-decoration:underline !important;height:30px;line-height:30px;position:absolute;bottom:0;left:35%;right:35%;text-align:center;",'%[data-state~="fullView"] %showMore':"display:none;"}},"wysiwyg.common.components.matrixgallery.viewer.skins.MatrixGalleryTextOnCenterSkin":{react:[["div","itemsContainer",[],{}],["div",null,["_pos"],{},["div","showMore",[],{}]]],exports:{heightDiff:25,imageItem:{skin:"wysiwyg.common.components.matrixgallery.viewer.skins.MatrixDisplayerTextOnCenterSkin",styleGroup:"inherit"}},params:{showMoreColor:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{showMoreColor:"color_11",fntds:"font_9"},css:{"%_pos":"height:2.3em;position:absolute;right:0;bottom:0;left:0;text-align:center;","%showMore":"cursor:pointer;display:inline-block;line-height:2.3em !important;padding:0 10px;text-decoration:underline !important;color:[showMoreColor];[fntds]",'%[data-state~="fullView"] %showMore':"display:none;","%itemsContainer":"position:absolute;top:0;right:0;bottom:2.3em;left:0;"}},"wysiwyg.viewer.skins.displayers.CircleDetailedDisplayer":{react:[["div","imageWrapper",[],{},["div","zoom",[],{},["div","image",[],{}]]],["div","panel",[],{},["div","title",[],{}],["div","description",[],{}],["a","link",[],{}]],["div",null,["_xxx"],{}]],exports:{image:{skin:"skins.core.ImageSkin"}},params:{brw:"SIZE",rd:"BORDER_RADIUS",bg:"BG_COLOR_ALPHA",shd:"BOX_SHADOW",tdr:"URL",trns:"TRANSITION",txt:"TEXT_COLOR",bg1:"BG_COLOR"},paramsDefaults:{brw:"0",rd:"50%",bg:"color_11",shd:"0 1px 3px rgba(0, 0, 0, 0.5)",tdr:"BASE_THEME_DIRECTORY",trns:"opacity 0.5s ease 0s",txt:"color_15",bg1:"color_11"},paramsMutators:{bg1:{type:"alpha",value:.6}},css:{"%_xxx":"position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];[rd]  background-color:[bg];[shd]  overflow:hidden;background:url([tdr]net.png) center center repeat;","%":"[rd]  background-color:[bg];[shd]  overflow:hidden;","%zoom":"position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];overflow:hidden;","%panel":"opacity:0;[trns]  [rd]  background-color:[bg1];color:[txt];text-align:center;padding:20%;position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];","%image":"overflow:hidden;[rd]","%:hover > %panel":"opacity:1;"}},"wysiwyg.viewer.skins.displayers.PolaroidDisplayer":{react:[["a","link",[],{}],["div","imageWrapper",[],{},["div",null,["_wrp"],{},["div","image",[],{}]]],["div","panel",["_panel"],{},["div","title",[],{}],["div","description",[],{}]],["a","link",[],{}]],exports:{heightDiff:40,image:{skin:"skins.core.ImageSkin"}},params:{bg:"BG_COLOR_ALPHA",rd:"BORDER_RADIUS"},paramsDefaults:{bg:"color_11",rd:"5px"},css:{"%":"background-color:[bg];[rd]","%imageWrapper":"position:absolute !important;top:10 !important;right:10 !important;bottom:10 !important;left:10 !important;","%_wrp":"position:absolute !important;top:10px !important;right:10px !important;bottom:10px !important;left:10px !important;","%panel":"position:absolute;bottom:0;left:0;right:0;color:#fff;padding:10px;"}},"wysiwyg.viewer.skins.gallery.CircleMatrixGallery":{react:[["div","itemsContainer",[],{}],["div","showMore",[],{}]],exports:{heightDiff:40,imageItem:{skin:"wysiwyg.viewer.skins.displayers.CircleDetailedDisplayer",styleGroup:"inherit"}},params:{shd:"BOX_SHADOW",bg:"BG_COLOR_ALPHA",txt:"TEXT_COLOR"},paramsDefaults:{shd:"0 1px 3px rgba(0, 0, 0, 0.5)",bg:"color_1",txt:"color_10"},css:{"%showMore":"[shd]  background-color:[bg];color:[txt];cursor:pointer;position:absolute;bottom:0;left:35%;right:35%;text-align:center;height:30px;line-height:30px;",'%[data-state~="fullView"] %showMore':"display:none;"}},"wysiwyg.viewer.skins.gallery.MatrixGallerySkin":{react:[["div","itemsContainer",[],{}],["div","showMore",[],{}],["div",null,["_xxx"],{}]],exports:{heightDiff:40,imageItem:{skin:"wysiwyg.viewer.skins.displayers.DetailedDisplayerSkin",styleGroup:"displayer"}},params:{bg:"BG_COLOR_ALPHA",tdr:"URL"},paramsDefaults:{bg:"color_1",tdr:"BASE_THEME_DIRECTORY"},css:{"%showMore":"position:absolute;cursor:pointer;height:20px;line-height:20px;padding:0 5px;bottom:0;background-color:[bg];",'%[data-state~="fullView"] %showMore':"display:none;","%_xxx":"position:absolute;top:0;right:0;bottom:0;left:0;background:url([tdr]net.png) center center repeat;"}},"wysiwyg.viewer.skins.gallery.PolaroidMatrixGallery":{react:[["div","itemsContainer",[],{}],["div","showMore",[],{}]],exports:{imageItem:{skin:"wysiwyg.viewer.skins.displayers.PolaroidDisplayer",styleGroup:"displayer"}},css:{"%showMore":"position:absolute;cursor:pointer;height:20px;bottom:0;",'%[data-state~="fullView"] %showMore':"display:none;","%itemsContainer":"position:absolute;top:0;right:0;bottom:20px;left:0;"}},"wysiwyg.viewer.skins.gallerymatrix.BlogMatrixGallery":{react:[["div","itemsContainer",[],{}],["div",null,["_pos"],{},["div","showMore",[],{}]]],exports:{heightDiff:25,imageItem:{skin:"wysiwyg.viewer.skins.gallerymatrix.BlogMatrixDisplayer",styleGroup:"inherit"}},params:{txt:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{txt:"color_15",fntds:"font_8"},css:{"%_pos":"height:2.3em;position:absolute;right:0;bottom:0;left:0;text-align:center;","%showMore":"cursor:pointer;display:inline-block;line-height:2.3em !important;padding:0 10px;text-decoration:underline !important;color:[txt];[fntds]",'%[data-state~="fullView"] %showMore':"display:none;","%itemsContainer":"position:absolute;top:0;right:0;bottom:2.3em;left:0;"}},"wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerVintage":{react:[["div",null,["_shadowImgTL","_bgShadow"],{}],["div",null,["_shadowImgTR","_bgShadow"],{}],["div",null,["_shadowImgBL","_bgShadow"],{}],["div",null,["_shadowImgBR","_bgShadow"],{}],["div",null,["_bg"],{}],["a","link",[],{},["div","imageWrapper",[],{},["div",null,["_imgBorder"],{},["div","image",[],{}]],["div","zoom",[],{}]],["ul",null,["_panel"],{},["li",null,["_ttl"],{},["h6","title",[],{}]],["li",null,["_desc"],{},["p","description",[],{}]]]]],exports:{heightDiff:80,image:{skin:"skins.core.ImageSkin"}},params:{shd:"BOX_SHADOW",bg:"BG_COLOR_ALPHA",brw:"PADDING_SIZE",bgh:"BG_COLOR_ALPHA",trans:"TRANSITION",fntt:"FONT",ttl:"TEXT_COLOR",txt:"TEXT_COLOR",fntds:"FONT",tdr:"URL"},paramsDefaults:{shd:"0 1px 5px rgba(0, 0, 0, 0.1)",bg:"color_11",brw:"5px",bgh:"color_17",trans:"opacity 0.4s ease 0s",fntt:"font_6",ttl:"color_15",txt:"color_15",fntds:"font_8",tdr:"BASE_THEME_DIRECTORY"},css:{"%_bg":"position:absolute;top:0;right:0;bottom:0;left:0;[shd]  background:[bg];","%imageWrapper":"position:absolute;top:0;right:0;bottom:0;left:0;","%_imgBorder":"position:absolute;top:0;right:0;bottom:0;left:0;padding:[brw] [brw] 0 [brw];","%zoom":"position:absolute;top:[brw];bottom:0;left:[brw];right:[brw];background:[bgh];opacity:0;[trans]","%_panel":"height:60px;position:absolute;bottom:0;left:0;right:0;padding:0 10px;text-align:center;","%title":"[fntt]  color:[ttl];white-space:nowrap;overflow:hidden;position:absolute;bottom:44px;left:10px;right:10px;height:1.2em;","%description":"color:[txt];[fntds]  white-space:nowrap;overflow:hidden;position:absolute;bottom:28px;left:10px;right:10px;height:1.2em;","%link":"color:[txt];[fntds]  position:absolute;bottom:10px;left:10px;right:10px;text-decoration:underline !important;white-space:nowrap;overflow:hidden;height:1.2em;","%_bgShadow":"background-image:url([tdr]shadow_photo.png);background-repeat:no-repeat;width:168px;height:154px;","%_shadowImgTL":"background-position:0 0;position:absolute;left:-15px;top:-18px;","%_shadowImgTR":"background-position:100% 0;position:absolute;right:-17px;top:-20px;","%_shadowImgBL":"background-position:0 100%;position:absolute;left:-16px;bottom:-16px;","%_shadowImgBR":"background-position:100% 100%;position:absolute;right:-19px;bottom:-16px;",'%[data-state~="alignLeft"] %title':"text-align:left;",'%[data-state~="alignCenter"] %title':"text-align:center;",'%[data-state~="alignRight"] %title':"text-align:right;",'%[data-state~="alignLeft"] %description':"text-align:left;",'%[data-state~="alignCenter"] %description':"text-align:center;",'%[data-state~="alignRight"] %description':"text-align:right;",'%[data-state~="alignLeft"] %link':"text-align:left;",'%[data-state~="alignCenter"] %link':"text-align:center;",'%[data-state~="alignRight"] %link':"text-align:right;",'%[data-state~="rollover"]:hover %zoom':"opacity:1;[trans]"}},"wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryCircleSkin":{react:[["div","itemsContainer",[],{}],["div","showMore",[],{}]],exports:{heightDiff:40,imageItem:{skin:"wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerCircleSkin",styleGroup:"inherit"}},params:{txt:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{txt:"color_15",fntds:"font_8"},css:{"%showMore":"color:[txt];[fntds]  cursor:pointer;text-decoration:underline !important;height:30px;line-height:30px;position:absolute;bottom:0;left:35%;right:35%;text-align:center;",'%[data-state~="fullView"] %showMore':"display:none;"}},"wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryDefaultSkin":{react:[["div","itemsContainer",[],{}],["div",null,["_pos"],{},["div","showMore",[],{}]]],exports:{heightDiff:25,imageItem:{skin:"wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerDefaultSkin",styleGroup:"inherit"}},params:{txt:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{txt:"color_15",fntds:"font_8"},css:{"%_pos":"height:2.3em;position:absolute;right:0;bottom:0;left:0;text-align:center;","%showMore":"cursor:pointer;display:inline-block;line-height:2.3em !important;padding:0 10px;text-decoration:underline !important;color:[txt];[fntds]",'%[data-state~="fullView"] %showMore':"display:none;","%itemsContainer":"position:absolute;top:0;right:0;bottom:2.3em;left:0;"}},"wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryLiftedShadow":{react:[["div","itemsContainer",[],{}],["div",null,["_pos"],{},["div","showMore",[],{}]]],exports:{heightDiff:25,imageItem:{skin:"wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerLiftedShadow",styleGroup:"inherit"}},params:{txt:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{txt:"color_15",fntds:"font_8"},css:{"%_pos":"height:2.3em;position:absolute;right:0;bottom:0;left:0;text-align:center;","%showMore":"cursor:pointer;display:inline-block;line-height:2.3em !important;padding:0 10px;text-decoration:underline !important;color:[txt];[fntds]",'%[data-state~="fullView"] %showMore':"display:none;","%itemsContainer":"position:absolute;top:0;right:0;bottom:2.3em;left:0;"}},"wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryPolaroidSkin":{react:[["div","itemsContainer",[],{}],["div",null,["_pos"],{},["div","showMore",[],{}]]],exports:{heightDiff:25,imageItem:{skin:"wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerPolaroidSkin",styleGroup:"inherit"}},params:{txt:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{txt:"color_15",fntds:"font_8"},css:{"%_pos":"height:2.3em;position:absolute;right:0;bottom:0;left:0;text-align:center;","%showMore":"cursor:pointer;display:inline-block;line-height:2.3em !important;padding:0 10px;text-decoration:underline !important;color:[txt];[fntds]",'%[data-state~="fullView"] %showMore':"display:none;","%itemsContainer":"position:absolute;top:0;right:0;bottom:2.3em;left:0;"}},"wysiwyg.viewer.skins.gallerymatrix.MatrixGallerySloopy":{react:[["div","itemsContainer",[],{}],["div",null,["_pos"],{},["div","showMore",[],{}]]],exports:{heightDiff:25,imageItem:{skin:"wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerSloopy",styleGroup:"inherit"}},params:{txt:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{txt:"color_15",fntds:"font_8"},css:{"%":"z-index:0;","%_pos":"height:2.3em;position:absolute;right:0;bottom:0;left:0;text-align:center;","%showMore":"cursor:pointer;display:inline-block;line-height:2.3em !important;padding:0 10px;text-decoration:underline !important;color:[txt];[fntds]",'%[data-state~="fullView"] %showMore':"display:none;","%itemsContainer":"position:absolute;top:0;right:0;bottom:2.3em;left:0;"}},"wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryTextBelowSkin":{react:[["div","itemsContainer",[],{}],["div",null,["_pos"],{},["div","showMore",[],{}]]],exports:{heightDiff:25,imageItem:{skin:"wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerTextBelowSkin",styleGroup:"inherit"}},params:{txt:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{txt:"color_15",fntds:"font_8"},css:{"%_pos":"height:2.3em;position:absolute;right:0;bottom:0;left:0;text-align:center;","%showMore":"cursor:pointer;display:inline-block;line-height:2.3em !important;padding:0 10px;text-decoration:underline !important;color:[txt];[fntds]",'%[data-state~="fullView"] %showMore':"display:none;","%itemsContainer":"position:absolute;top:0;right:0;bottom:2.3em;left:0;"}},"wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryTextSlideUpSkin":{react:[["div","itemsContainer",[],{}],["div",null,["_pos"],{},["div","showMore",[],{}]]],exports:{heightDiff:25,imageItem:{skin:"wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerTextSlideUpSkin",styleGroup:"inherit"}},params:{showMoreColor:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{showMoreColor:"color_13",fntds:"font_9"},css:{"%_pos":"height:2.3em;position:absolute;right:0;bottom:0;left:0;text-align:center;","%showMore":"cursor:pointer;display:inline-block;line-height:2.3em !important;padding:0 10px;text-decoration:underline !important;color:[showMoreColor];[fntds]",'%[data-state~="fullView"] %showMore':"display:none;","%itemsContainer":"position:absolute;top:0;right:0;bottom:2.3em;left:0;"}},"wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryTransparentSkin":{react:[["div","itemsContainer",[],{}],["div",null,["_pos"],{},["div","showMore",[],{}]]],exports:{heightDiff:25,imageItem:{skin:"wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerTransparentSkin",styleGroup:"inherit"}},params:{showMoreColor:"TEXT_COLOR",fntdsTrans:"FONT"},paramsDefaults:{showMoreColor:"color_13",fntdsTrans:"font_9"},css:{"%_pos":"height:2.3em;position:absolute;right:0;bottom:0;left:0;text-align:center;","%showMore":"cursor:pointer;display:inline-block;line-height:2.3em !important;padding:0 10px;text-decoration:underline !important;color:[showMoreColor];[fntdsTrans]",'%[data-state~="fullView"] %showMore':"display:none;","%itemsContainer":"position:absolute;top:0;right:0;bottom:2.3em;left:0;"}},"wysiwyg.viewer.skins.gallerymatrix.MatrixGalleryVintage":{react:[["div","itemsContainer",[],{}],["div",null,["_pos"],{},["div","showMore",[],{}]]],exports:{heightDiff:25,imageItem:{skin:"wysiwyg.viewer.skins.gallerymatrix.MatrixDisplayerVintage",styleGroup:"inherit"}},params:{txt:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{txt:"color_15",fntds:"font_8"},css:{"%_pos":"height:2.3em;position:absolute;right:0;bottom:0;left:0;text-align:center;","%showMore":"cursor:pointer;display:inline-block;line-height:2.3em !important;padding:0 10px;text-decoration:underline !important;color:[txt];[fntds]","%itemsContainer":"position:absolute;top:0;right:0;bottom:2.3em;left:0;",'%[data-state~="fullView"] %showMore':"display:none;"}},"wysiwyg.viewer.skins.gallerymatrix.PolaroidCustomHeightSkin":{react:[["div","itemsContainer",[],{}],["div","showMore",[],{}]],exports:{heightDiff:25,imageItem:{skin:"wysiwyg.viewer.skins.gallerymatrix.PolaroidDisplayerCustomHeightSkin",styleGroup:"inherit"}},params:{showMoreColor:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{showMoreColor:"color_13",fntds:"font_8"},css:{"%itemsContainer":"position:absolute;top:0;right:0;bottom:25px;left:0;","%showMore":"color:[showMoreColor];[fntds]  position:absolute;left:0;right:0;bottom:0;text-align:center;text-decoration:underline !important;cursor:pointer;",'%[data-state~="fullView"] %showMore':"display:none;"}},"wysiwyg.viewer.skins.gallerymatrix.TextBottomCustomHeightSkin":{react:[["div","itemsContainer",[],{}],["div","showMore",[],{}]],exports:{heightDiff:25,imageItem:{skin:"wysiwyg.viewer.skins.gallerymatrix.TextBottomDisplayerCustomHeightSkin",styleGroup:"inherit"}},params:{showMoreColor:"TEXT_COLOR",fntds:"FONT"},paramsDefaults:{showMoreColor:"color_13",fntds:"font_8"},css:{"%itemsContainer":"position:absolute;top:0;right:0;bottom:25px;left:0;","%showMore":"color:[showMoreColor];[fntds]  position:absolute;left:0;right:0;bottom:0;text-align:center;text-decoration:underline !important;cursor:pointer !important;",'%[data-state~="fullView"] %showMore':"display:none;"}}};return t})?o.apply(e,s):o)||(t.exports=r)}})});
//# sourceMappingURL=matrixGallery.min.js.map