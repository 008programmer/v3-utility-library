!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).MarkerClusterer=t()}(this,(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function i(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var i=[],s=!0,n=!1,r=void 0;try{for(var a,o=e[Symbol.iterator]();!(s=(a=o.next()).done)&&(i.push(a.value),!t||i.length!==t);s=!0);}catch(e){n=!0,r=e}finally{try{s||null==o.return||o.return()}finally{if(n)throw r}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function t(){e(this,t),function(e,t){for(var i in t.prototype)e.prototype[i]=t.prototype[i]}(t,google.maps.OverlayView)};function u(e){return Object.keys(e).reduce((function(t,i){return e[i]&&t.push(i+":"+e[i]),t}),[]).join(";")}function h(e){return e?e+"px":void 0}var c=function(t){function r(t,i){var s;return e(this,r),(s=a(this,n(r).call(this))).cluster_=t,s.styles_=i,s.center_=null,s.div_=null,s.sums_=null,s.visible_=!1,s.style=null,s.setMap(t.getMap()),s}return s(r,t),i(r,[{key:"onAdd",value:function(){var e,t,i=this,s=this.cluster_.getMarkerClusterer(),n=o(google.maps.version.split("."),2),r=n[0],a=n[1],l=100*parseInt(r,10)+parseInt(a,10);this.div_=document.createElement("div"),this.visible_&&this.show(),this.getPanes().overlayMouseTarget.appendChild(this.div_),this.boundsChangedListener_=google.maps.event.addListener(this.getMap(),"bounds_changed",(function(){t=e})),google.maps.event.addDomListener(this.div_,"mousedown",(function(){e=!0,t=!1})),l>=332&&google.maps.event.addDomListener(this.div_,"touchstart",(function(e){e.stopPropagation()})),google.maps.event.addDomListener(this.div_,"click",(function(n){if(e=!1,!t){if(google.maps.event.trigger(s,"click",i.cluster_),google.maps.event.trigger(s,"clusterclick",i.cluster_),s.getZoomOnClick()){var r=s.getMaxZoom(),a=i.cluster_.getBounds();s.getMap().fitBounds(a),setTimeout((function(){s.getMap().fitBounds(a),null!==r&&s.getMap().getZoom()>r&&s.getMap().setZoom(r+1)}),100)}n.cancelBubble=!0,n.stopPropagation&&n.stopPropagation()}})),google.maps.event.addDomListener(this.div_,"mouseover",(function(){google.maps.event.trigger(s,"mouseover",i.cluster_)})),google.maps.event.addDomListener(this.div_,"mouseout",(function(){google.maps.event.trigger(s,"mouseout",i.cluster_)}))}},{key:"onRemove",value:function(){this.div_&&this.div_.parentNode&&(this.hide(),google.maps.event.removeListener(this.boundsChangedListener_),google.maps.event.clearInstanceListeners(this.div_),this.div_.parentNode.removeChild(this.div_),this.div_=null)}},{key:"draw",value:function(){if(this.visible_){var e=this.getPosFromLatLng_(this.center_);this.div_.style.top=e.y+"px",this.div_.style.left=e.x+"px"}}},{key:"hide",value:function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1}},{key:"show",value:function(){this.div_&&(this.div_.className=this.className_,this.div_.style.cssText=this.createCss_(this.getPosFromLatLng_(this.center_)),this.div_.innerHTML=(this.style.url?this.getImageElementHtml():"")+this.getLabelDivHtml(),void 0===this.sums_.title||""===this.sums_.title?this.div_.title=this.cluster_.getMarkerClusterer().getTitle():this.div_.title=this.sums_.title,this.div_.style.display=""),this.visible_=!0}},{key:"getLabelDivHtml",value:function(){var e=this.cluster_.getMarkerClusterer().ariaLabelFn(this.sums_.text),t={position:"absolute",top:h(this.anchorText_[0]),left:h(this.anchorText_[1]),color:this.style.textColor,"font-size":h(this.style.textSize),"font-family":this.style.fontFamily,"font-weight":this.style.fontWeight,"font-style":this.style.fontStyle,"text-decoration":this.style.textDecoration,"text-align":"center",width:h(this.style.width),"line-height":h(this.style.textLineHeight)};return'\n<div aria-label="'.concat(e,'" style="').concat(u(t),'" tabindex="0">\n  <span aria-hidden="true">').concat(this.sums_.text,"</span>\n</div>\n")}},{key:"getImageElementHtml",value:function(){var e=(this.style.backgroundPosition||"0 0").split(" "),t=parseInt(e[0].replace(/^\s+|\s+$/g,""),10),i=parseInt(e[1].replace(/^\s+|\s+$/g,""),10),s={};if(this.cluster_.getMarkerClusterer().getEnableRetinaIcons())s={width:h(this.style.width),height:h(this.style.height)};else{var n=-1*i,r=-1*t+this.style.width,a=-1*i+this.style.height,o=-1*t;s={clip:"rect(".concat(n,"px, ").concat(r,"px, ").concat(a,"px, ").concat(o,"px)")}}var l=u(Object.assign({position:"absolute",top:h(i),left:h(t)},s));return'<img alt="'.concat(this.sums_.text,'" aria-hidden="true" src="').concat(this.style.url,'" style="').concat(l,'"/>')}},{key:"useStyle",value:function(e){this.sums_=e;var t=Math.max(0,e.index-1);t=Math.min(this.styles_.length-1,t),this.style=this.styles_[t],this.anchorText_=this.style.anchorText||[0,0],this.anchorIcon_=this.style.anchorIcon||[Math.floor(this.style.height/2),Math.floor(this.style.width/2)],this.className_=this.cluster_.getMarkerClusterer().getClusterClass()+" "+(this.style.className||"cluster-"+t)}},{key:"setCenter",value:function(e){this.center_=e}},{key:"createCss_",value:function(e){return u({"z-index":"".concat(this.cluster_.getMarkerClusterer().getZIndex()),top:h(e.y),left:h(e.x),width:h(this.style.width),height:h(this.style.height),cursor:"pointer",position:"absolute","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-o-user-select":"none","user-select":"none"})}},{key:"getPosFromLatLng_",value:function(e){var t=this.getProjection().fromLatLngToDivPixel(e);return t.x=Math.floor(t.x-this.anchorIcon_[1]),t.y=Math.floor(t.y-this.anchorIcon_[0]),t}}]),r}(l),g=function(){function t(i){e(this,t),this.markerClusterer_=i,this.map_=this.markerClusterer_.getMap(),this.minClusterSize_=this.markerClusterer_.getMinimumClusterSize(),this.averageCenter_=this.markerClusterer_.getAverageCenter(),this.markers_=[],this.center_=null,this.bounds_=null,this.clusterIcon_=new c(this,this.markerClusterer_.getStyles())}return i(t,[{key:"getSize",value:function(){return this.markers_.length}},{key:"getMarkers",value:function(){return this.markers_}},{key:"getCenter",value:function(){return this.center_}},{key:"getMap",value:function(){return this.map_}},{key:"getMarkerClusterer",value:function(){return this.markerClusterer_}},{key:"getBounds",value:function(){for(var e=new google.maps.LatLngBounds(this.center_,this.center_),t=this.getMarkers(),i=0;i<t.length;i++)e.extend(t[i].getPosition());return e}},{key:"remove",value:function(){this.clusterIcon_.setMap(null),this.markers_=[],delete this.markers_}},{key:"addMarker",value:function(e){if(this.isMarkerAlreadyAdded_(e))return!1;if(this.center_){if(this.averageCenter_){var t=this.markers_.length+1,i=(this.center_.lat()*(t-1)+e.getPosition().lat())/t,s=(this.center_.lng()*(t-1)+e.getPosition().lng())/t;this.center_=new google.maps.LatLng(i,s),this.calculateBounds_()}}else this.center_=e.getPosition(),this.calculateBounds_();e.isAdded=!0,this.markers_.push(e);var n=this.markers_.length,r=this.markerClusterer_.getMaxZoom();if(null!==r&&this.map_.getZoom()>r)e.getMap()!==this.map_&&e.setMap(this.map_);else if(n<this.minClusterSize_)e.getMap()!==this.map_&&e.setMap(this.map_);else if(n===this.minClusterSize_)for(var a=0;a<n;a++)this.markers_[a].setMap(null);else e.setMap(null);return!0}},{key:"isMarkerInClusterBounds",value:function(e){return this.bounds_.contains(e.getPosition())}},{key:"calculateBounds_",value:function(){var e=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(e)}},{key:"updateIcon",value:function(){var e=this.markers_.length,t=this.markerClusterer_.getMaxZoom();if(null!==t&&this.map_.getZoom()>t)this.clusterIcon_.hide();else if(e<this.minClusterSize_)this.clusterIcon_.hide();else{var i=this.markerClusterer_.getStyles().length,s=this.markerClusterer_.getCalculator()(this.markers_,i);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.useStyle(s),this.clusterIcon_.show()}}},{key:"isMarkerAlreadyAdded_",value:function(e){if(this.markers_.indexOf)return-1!==this.markers_.indexOf(e);for(var t=0;t<this.markers_.length;t++)if(e===this.markers_[t])return!0;return!1}}]),t}(),_=function(e,t,i){return void 0!==e[t]?e[t]:i},d=function(t){function r(t){var i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e(this,r),(i=a(this,n(r).call(this))).options=o,i.markers_=[],i.clusters_=[],i.listeners_=[],i.activeMap_=null,i.ready_=!1,i.ariaLabelFn=i.options.ariaLabelFn||function(){return""},i.zIndex_=i.options.zIndex||google.maps.Marker.MAX_ZINDEX+1,i.gridSize_=i.options.gridSize||60,i.minClusterSize_=i.options.minimumClusterSize||2,i.maxZoom_=i.options.maxZoom||null,i.styles_=i.options.styles||[],i.title_=i.options.title||"",i.zoomOnClick_=_(i.options,"zoomOnClick",!0),i.averageCenter_=_(i.options,"averageCenter",!1),i.ignoreHidden_=_(i.options,"ignoreHidden",!1),i.enableRetinaIcons_=_(i.options,"enableRetinaIcons",!1),i.imagePath_=i.options.imagePath||r.IMAGE_PATH,i.imageExtension_=i.options.imageExtension||r.IMAGE_EXTENSION,i.imageSizes_=i.options.imageSizes||r.IMAGE_SIZES,i.calculator_=i.options.calculator||r.CALCULATOR,i.batchSize_=i.options.batchSize||r.BATCH_SIZE,i.batchSizeIE_=i.options.batchSizeIE||r.BATCH_SIZE_IE,i.clusterClass_=i.options.clusterClass||"cluster",-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(i.batchSize_=i.batchSizeIE_),i.setupStyles_(),i.addMarkers(s,!0),i.setMap(t),i}return s(r,t),i(r,[{key:"onAdd",value:function(){var e=this;this.activeMap_=this.getMap(),this.ready_=!0,this.repaint(),this.prevZoom_=this.getMap().getZoom(),this.listeners_=[google.maps.event.addListener(this.getMap(),"zoom_changed",(function(){var t=e.getMap(),i=t.minZoom||0,s=Math.min(t.maxZoom||100,t.mapTypes[t.getMapTypeId()].maxZoom),n=Math.min(Math.max(e.getMap().getZoom(),i),s);e.prevZoom_!=n&&(e.prevZoom_=n,e.resetViewport_(!1))})),google.maps.event.addListener(this.getMap(),"idle",(function(){e.redraw_()}))]}},{key:"onRemove",value:function(){for(var e=0;e<this.markers_.length;e++)this.markers_[e].getMap()!==this.activeMap_&&this.markers_[e].setMap(this.activeMap_);for(var t=0;t<this.clusters_.length;t++)this.clusters_[t].remove();this.clusters_=[];for(var i=0;i<this.listeners_.length;i++)google.maps.event.removeListener(this.listeners_[i]);this.listeners_=[],this.activeMap_=null,this.ready_=!1}},{key:"draw",value:function(){}},{key:"setupStyles_",value:function(){if(!(this.styles_.length>0))for(var e=0;e<this.imageSizes_.length;e++){var t=this.imageSizes_[e];this.styles_.push(r.withDefaultStyle({url:this.imagePath_+(e+1)+"."+this.imageExtension_,height:t,width:t}))}}},{key:"fitMapToMarkers",value:function(){for(var e=this.getMarkers(),t=new google.maps.LatLngBounds,i=0;i<e.length;i++)!e[i].getVisible()&&this.getIgnoreHidden()||t.extend(e[i].getPosition());this.getMap().fitBounds(t)}},{key:"getGridSize",value:function(){return this.gridSize_}},{key:"setGridSize",value:function(e){this.gridSize_=e}},{key:"getMinimumClusterSize",value:function(){return this.minClusterSize_}},{key:"setMinimumClusterSize",value:function(e){this.minClusterSize_=e}},{key:"getMaxZoom",value:function(){return this.maxZoom_}},{key:"setMaxZoom",value:function(e){this.maxZoom_=e}},{key:"getZIndex",value:function(){return this.zIndex_}},{key:"setZIndex",value:function(e){this.zIndex_=e}},{key:"getStyles",value:function(){return this.styles_}},{key:"setStyles",value:function(e){this.styles_=e}},{key:"getTitle",value:function(){return this.title_}},{key:"setTitle",value:function(e){this.title_=e}},{key:"getZoomOnClick",value:function(){return this.zoomOnClick_}},{key:"setZoomOnClick",value:function(e){this.zoomOnClick_=e}},{key:"getAverageCenter",value:function(){return this.averageCenter_}},{key:"setAverageCenter",value:function(e){this.averageCenter_=e}},{key:"getIgnoreHidden",value:function(){return this.ignoreHidden_}},{key:"setIgnoreHidden",value:function(e){this.ignoreHidden_=e}},{key:"getEnableRetinaIcons",value:function(){return this.enableRetinaIcons_}},{key:"setEnableRetinaIcons",value:function(e){this.enableRetinaIcons_=e}},{key:"getImageExtension",value:function(){return this.imageExtension_}},{key:"setImageExtension",value:function(e){this.imageExtension_=e}},{key:"getImagePath",value:function(){return this.imagePath_}},{key:"setImagePath",value:function(e){this.imagePath_=e}},{key:"getImageSizes",value:function(){return this.imageSizes_}},{key:"setImageSizes",value:function(e){this.imageSizes_=e}},{key:"getCalculator",value:function(){return this.calculator_}},{key:"setCalculator",value:function(e){this.calculator_=e}},{key:"getBatchSizeIE",value:function(){return this.batchSizeIE_}},{key:"setBatchSizeIE",value:function(e){this.batchSizeIE_=e}},{key:"getClusterClass",value:function(){return this.clusterClass_}},{key:"setClusterClass",value:function(e){this.clusterClass_=e}},{key:"getMarkers",value:function(){return this.markers_}},{key:"getTotalMarkers",value:function(){return this.markers_.length}},{key:"getClusters",value:function(){return this.clusters_}},{key:"getTotalClusters",value:function(){return this.clusters_.length}},{key:"addMarker",value:function(e,t){this.pushMarkerTo_(e),t||this.redraw_()}},{key:"addMarkers",value:function(e,t){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&this.pushMarkerTo_(e[i]);t||this.redraw_()}},{key:"pushMarkerTo_",value:function(e){var t=this;e.getDraggable()&&google.maps.event.addListener(e,"dragend",(function(){t.ready_&&(e.isAdded=!1,t.repaint())})),e.isAdded=!1,this.markers_.push(e)}},{key:"removeMarker",value:function(e,t){var i=this.removeMarker_(e);return!t&&i&&this.repaint(),i}},{key:"removeMarkers",value:function(e,t){for(var i=!1,s=0;s<e.length;s++){var n=this.removeMarker_(e[s]);i=i||n}return!t&&i&&this.repaint(),i}},{key:"removeMarker_",value:function(e){var t=-1;if(this.markers_.indexOf)t=this.markers_.indexOf(e);else for(var i=0;i<this.markers_.length;i++)if(e===this.markers_[i]){t=i;break}return-1!==t&&(e.setMap(null),this.markers_.splice(t,1),!0)}},{key:"clearMarkers",value:function(){this.resetViewport_(!0),this.markers_=[]}},{key:"repaint",value:function(){var e=this.clusters_.slice();this.clusters_=[],this.resetViewport_(!1),this.redraw_(),setTimeout((function(){for(var t=0;t<e.length;t++)e[t].remove()}),0)}},{key:"getExtendedBounds",value:function(e){var t=this.getProjection(),i=new google.maps.LatLng(e.getNorthEast().lat(),e.getNorthEast().lng()),s=new google.maps.LatLng(e.getSouthWest().lat(),e.getSouthWest().lng()),n=t.fromLatLngToDivPixel(i);n.x+=this.gridSize_,n.y-=this.gridSize_;var r=t.fromLatLngToDivPixel(s);r.x-=this.gridSize_,r.y+=this.gridSize_;var a=t.fromDivPixelToLatLng(n),o=t.fromDivPixelToLatLng(r);return e.extend(a),e.extend(o),e}},{key:"redraw_",value:function(){this.createClusters_(0)}},{key:"resetViewport_",value:function(e){for(var t=0;t<this.clusters_.length;t++)this.clusters_[t].remove();this.clusters_=[];for(var i=0;i<this.markers_.length;i++){var s=this.markers_[i];s.isAdded=!1,e&&s.setMap(null)}}},{key:"distanceBetweenPoints_",value:function(e,t){var i=(t.lat()-e.lat())*Math.PI/180,s=(t.lng()-e.lng())*Math.PI/180,n=Math.sin(i/2)*Math.sin(i/2)+Math.cos(e.lat()*Math.PI/180)*Math.cos(t.lat()*Math.PI/180)*Math.sin(s/2)*Math.sin(s/2);return 6371*(2*Math.atan2(Math.sqrt(n),Math.sqrt(1-n)))}},{key:"isMarkerInBounds_",value:function(e,t){return t.contains(e.getPosition())}},{key:"addToClosestCluster_",value:function(e){for(var t=4e4,i=null,s=0;s<this.clusters_.length;s++){var n=this.clusters_[s],r=n.getCenter();if(r){var a=this.distanceBetweenPoints_(r,e.getPosition());a<t&&(t=a,i=n)}}if(i&&i.isMarkerInClusterBounds(e))i.addMarker(e);else{var o=new g(this);o.addMarker(e),this.clusters_.push(o)}}},{key:"createClusters_",value:function(e){var t=this;if(this.ready_){var i;0===e&&(google.maps.event.trigger(this,"clusteringbegin",this),void 0!==this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),i=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));for(var s=this.getExtendedBounds(i),n=Math.min(e+this.batchSize_,this.markers_.length),r=e;r<n;r++){var a=this.markers_[r];!a.isAdded&&this.isMarkerInBounds_(a,s)&&(!this.ignoreHidden_||this.ignoreHidden_&&a.getVisible())&&this.addToClosestCluster_(a)}if(n<this.markers_.length)this.timerRefStatic=window.setTimeout((function(){t.createClusters_(n)}),0);else{delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this);for(var o=0;o<this.clusters_.length;o++)this.clusters_[o].updateIcon()}}}}],[{key:"CALCULATOR",value:function(e,t){for(var i=0,s=e.length,n=s;0!==n;)n=Math.floor(n/10),i++;return i=Math.min(i,t),{text:s.toString(),index:i,title:""}}},{key:"withDefaultStyle",value:function(e){return Object.assign({textColor:"black",textSize:11,textDecoration:"none",textLineHeight:e.height,fontWeight:"bold",fontStyle:"normal",fontFamily:"Arial,sans-serif",backgroundPosition:"0 0"},e)}}]),r}(l);return d.BATCH_SIZE=2e3,d.BATCH_SIZE_IE=500,d.IMAGE_PATH="../images/m",d.IMAGE_EXTENSION="png",d.IMAGE_SIZES=[53,56,66,78,90],d}));
//# sourceMappingURL=markerclustererplus.umd.js.map
