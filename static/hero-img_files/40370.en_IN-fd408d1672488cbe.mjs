"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[40370],{263148:(e,i,t)=>{t.d(i,{Se:()=>k,iw:()=>P,gV:()=>h,G3:()=>f,Gj:()=>b,Jd:()=>m,$3:()=>g});var r=t(29156),a=t(658583),n=t(622541),s=t(107366),o=t(460270);let l=e=>"string"!=typeof e&&e?e.state:null;var d=t(337478),c=t(940910),u=t(998449),p=t(797258),_=t(467139);let m=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isOffsiteUrl:e,event:i})=>!e&&(i.metaKey||i.ctrlKey),g=({location:e,pinId:i,surface:t})=>!!t&&!_.ZF.includes(t)||e.pathname.includes(i),k=(e,i)=>{let t=Math.round(1e3*Math.random())+"",r=Math.round(1e3*Math.random())+"";a.t8((0,n.GS)(t),r);let s={token:`${t}-${r}`,url:e,...i&&!i.params?i.queryParams:i?.params&&{pin:i.params.pinId??void 0,isThirdPartyAd:i.params.isThirdPartyAd??void 0,csr:i.params.csrId&&!i.params.pinId?i.params.csrId:void 0,client_tracking_params:i.params.clientTrackingParams,aux_data:i.params.auxData?JSON.stringify(i.params.auxData):void 0}};return`/offsite/?${(0,d.Z)(s)}`},b=(e,i)=>{(0,r.Z)(k(e,i),!0,i?.features)},P=async({clientTrackingParams:e,href:i,isMounted:t,pinId:r,spamCheckCallback:a})=>{let n=await (0,s.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:r,url:i}});if(!n.resource_response.error&&t){let e=n.resource_response.data||{},{message:i,redirect_status:t,url:r}=e,s=["blocked","suspicious","porn"].includes(t);a({blocked:s,message:i,redirectStatus:t,sanitized_url:r})}},f=({event:e,onHistoryChange:i,href:t,history:a,target:n})=>{let s=(0,o.Z)(t),d=l(t)??{},_=(0,c.Z)(s);_===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===n?(0,r.Z)(s,"blank"===n):a&&_===p.Z.SAME_ORIGIN&&(a.push((0,u.Z)({url:s}),{from:a.location,...d}),i&&i({event:e}))}},340370:(e,i,t)=>{t.d(i,{Z:()=>p});var r=t(667294),a=t(616550),n=t(798580),s=t(263148),o=t(96761),l=t(460270),d=t(862249),c=t(557874),u=t(953565);function p(e){let{externalData:i,href:t,onHistoryChange:p,target:_}=e,[m,h]=(0,r.useState)(null),[g,k]=(0,r.useState)(!1),b=(0,a.k6)(),P=(0,a.TH)(),f=(0,l.Z)(t),y=(0,d.Z)({url:f}),{showWarning:I}=(0,c.s)()??{},{pin:S,surface:w}=i||{},A=S?(0,n.Z)({boardUrl:S.board?.url,location:P,pinId:S.entityId,pinnerUserName:S.pinner?.username,storyPinDataId:S.storyPinDataId,trackingParams:S.trackingParams,trackingParamsMap:S.trackingParamsMap}):null,x=(0,o.Z)();return(0,r.useEffect)(()=>(k(!0),()=>{k(!1)}),[]),(0,r.useEffect)(()=>{y&&S&&null===m&&g&&(!S.promoter||S.isDownstreamPromotion)&&(0,s.$3)({location:P,pinId:S.entityId,surface:w})&&(0,s.iw)({clientTrackingParams:A,isMounted:g,pinId:S.entityId,spamCheckCallback:e=>h(e),href:f})},[A,S,w,f,y,g,P,m]),({event:e})=>{if(!(0,s.gV)({isOffsiteUrl:y,event:e})){if(e.preventDefault(),!t||"string"==typeof t&&t.startsWith("#")){(0,u.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:P.pathname,href:t}});return}y||i?.dangerouslyForceOffsiteUrl?x({auxData:i?.auxData,clientTrackingParams:A,pin:i?.pin&&{attributionSourceId:i.pin.attributionSourceId,campaignId:i.pin.campaignId,isPromoted:i.pin.isPromoted,pinPromotionId:i.pin.pinPromotionId,isThirdPartyAd:i.pin.isThirdPartyAd,advertiserId:i.pin.advertiserId,destinationUrl:i.pin.destinationUrl,link:i.pin.link,domain:i.pin.domain},pinId:i?.pin?.entityId,queryParams:i?.queryParams,showWarning:I,spamCheck:m,url:f}):(0,s.G3)({event:e,href:t,history:b,onHistoryChange:p,target:"blank"===_?"blank":null})}}}},96761:(e,i,t)=>{t.d(i,{Z:()=>_});var r=t(453880),a=t(934378),n=t(263032),s=t(86785),o=t(214877),l=t(263148),d=t(171966);let c=(e,i,t)=>{let r=document.createElement("a");r.setAttribute("href",i),r.setAttribute("target","_blank"),r.setAttribute("rel","noopener nofollow noreferrer"),r.style.cursor="pointer",r.style.display="block",r.setAttribute(a.$N.ATTRIBUTION_SOURCE_ID,e),r.setAttribute(a.$N.ATTRIBUTE_DESTINATION,t),r.setAttribute(a.$N.ATTRIBUTE_ON,t),r.click()},u=(e,i,t,r,s,o,l)=>{let d=(0,n.m_)(e,[t,r,s],!0,o,l),c=document.createElement("a");c.setAttribute("href",i),c.setAttribute("target","_blank"),c.setAttribute("rel","noopener nofollow noreferrer"),c.style.cursor="pointer",c.style.display="block",c.setAttribute(a.NR.SOURCE,d),c.click()},p=()=>{let{logContextEvent:e}=(0,o.v)();return({attributionSourceId:i,auxData:t,campaignId:a,clientTrackingParams:n,href:o,isPromoted:d,pinId:p,pinPromotionId:_,isThirdPartyAd:m,advertiserId:h,destinationUrl:g,link:k,domain:b})=>{if(!d)return!1;let P=(0,r.Z)(),f=(0,l.Se)(o,{params:{pinId:p,csrId:null,clientTrackingParams:n,auxData:t,isThirdPartyAd:m}}),y=P?.userAgent.browserName??"";if((0,s.G6)(y)){let{group:t}=P?.experimentsClient.checkExperiment("m10n_event_conversion_measurement")??{},r=P?.userAgent.browserVersion?P.userAgent.browserVersion:"0.0",s=parseFloat(r.split(".")[0]+"."+r.split(".")[1]);if(i&&s>=14.1&&["enabled_safari"].includes(t))return c(i,f,o),e({event_type:101,clientTrackingParams:n,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:_||"",click_measurement_campaign_id:a||"",is_pcm:!0,attribution_source_id:i,page_url:o}}),!0}else if((0,s.i7)(y)&&window.document.featurePolicy?.allowsFeature("attribution-reporting"))return u(i,f,g,k,b,a,h),e({event_type:101,clientTrackingParams:n,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:_||"",click_measurement_campaign_id:a||"",is_arapi:!0,attribution_source_id:i,page_url:o}}),!0;return!1}},_=e=>{let i=p();return({auxData:t,clientTrackingParams:r,pin:a,pinId:n,queryParams:s,showWarning:o,spamCheck:c,url:u})=>{if("undefined"!=typeof window&&window.Windows){(0,d.Z)(u,{clientTrackingParams:r,pinId:n,hasPin:!!a,auxData:t,isThirdPartyAd:a?.isThirdPartyAd});return}if(!a&&!e?.isFromClickthroughLink){(0,l.Gj)(u,s?{queryParams:s}:{params:{pinId:n}});return}if(c?.blocked){o?.(c);return}a&&i({attributionSourceId:a.attributionSourceId,auxData:t,campaignId:a.campaignId?String(a.campaignId):null,clientTrackingParams:r,href:u,isPromoted:a.isPromoted,pinId:n,pinPromotionId:a.pinPromotionId?String(a.pinPromotionId):null,isThirdPartyAd:a.isThirdPartyAd,advertiserId:a.advertiserId?a.advertiserId:null,destinationUrl:a.destinationUrl,link:a.link,domain:a.domain})||(0,l.Gj)(u,{params:{clientTrackingParams:r,auxData:t,pinId:n,isThirdPartyAd:a?.isThirdPartyAd}})}}},460270:(e,i,t)=>{t.d(i,{Z:()=>r});let r=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},998449:(e,i,t)=>{t.d(i,{Z:()=>n});let r=(e,i)=>0===e.lastIndexOf(i,0);var a=t(885896);let n=({url:e})=>{let i=(0,a.Z)("/");return r(e,i)?e.substr(i.length-1):e}},171966:(e,i,t)=>{t.d(i,{Z:()=>n});var r=t(107366),a=t(263148);function n(e,i){let{auxData:t,clientTrackingParams:n,hasPin:s,pinId:o,isThirdPartyAd:l}=i||{},d={pin_id:o,check_only:!0,client_tracking_params:s?n:void 0,url:e,aux_data:JSON.stringify(t)};l&&(d.third_party_ad=o,delete d.pin_id),(0,r.Z)({url:"/v3/offsite/",data:d}).then(i=>{if(i&&i.resource_response&&!i.resource_response.error){let{resource_response:e}=i,{redirect_status:t,url:r}=e.data,a=["blocked","suspicious","porn"].includes(t);if(!a){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(r);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,a.Gj)(e,{params:s?{pinId:o,clientTrackingParams:n,auxData:t,isThirdPartyAd:l}:{pinId:o}})})}},467139:(e,i,t)=>{t.d(i,{UP:()=>o,Wv:()=>a,ZF:()=>r,zI:()=>n,zl:()=>s});let r=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],a=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],n=[...a,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],s=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],o=["BaseBoardPinGrid"]},557874:(e,i,t)=>{t.d(i,{Z:()=>g,s:()=>h});var r=t(667294),a=t(342513),n=t(608575),s=t(883119),o=t(930837),l=t(140017),d=t(339001),c=t(785893);let u=()=>{let e=(0,l.ZP)(),{dismissWarning:i}=h()??{};return(0,c.jsx)(s.xu,{paddingX:3,children:(0,c.jsx)(s.zx,{color:"red",fullWidth:!0,onClick:i,text:e.bt("OK", "Okay", "Dismiss a modal stating that clicking through to a link has been blocked", undefined, true)})})},p=()=>{let e=(0,l.ZP)();return(0,c.jsx)(s.xv,{inline:!0,weight:"bold",children:(0,c.jsx)(s.rU,{display:"inlineBlock",href:"https://policy.pinterest.com/community-guidelines#section-spam",target:"blank",underline:"hover",children:e.bt("Learn more", "Learn more", "Link text leading to policy website", undefined, true)})})},_=({message:e,sanitized_url:i})=>{let t=(0,l.ZP)(),{dismissWarning:r}=h()??{};return(0,c.jsx)(o.ZP,{accessibilityModalLabel:t.bt("We have blocked this link", "We have blocked this link", "Modal label when clicking a spammy link", undefined, true),footer:(0,c.jsx)(u,{}),heading:t.bt("Heads up!", "Heads up!", "Modal heading when clicking through to a link has been blocked", undefined, true),onDismiss:r,children:(0,c.jsxs)(s.xu,{padding:6,children:[(0,c.jsx)(s.xv,{children:(0,d.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,c.jsx)(p,{},"learnMoreLink")})}),(0,c.jsxs)(s.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,c.jsx)(s.xu,{marginEnd:3,children:(0,c.jsx)(s.JO,{accessibilityLabel:t.bt("Blocked link address", "Blocked link address", "Icon label preceding a block url", undefined, true),color:"error",icon:"report",inline:!0,size:24})}),(0,c.jsx)(s.xv,{inline:!0,lineClamp:1,weight:"bold",children:n.parse(i).hostname})]})]})})},{Provider:m,useMaybeHook:h}=(0,a.Z)("SpammyClickthrough");function g({children:e}){let[i,t]=(0,r.useState)(null),a=(0,r.useCallback)(()=>{t(null)},[t]),n=(0,r.useCallback)(e=>{t(e)},[t]),s=(0,r.useMemo)(()=>({dismissWarning:a,showWarning:n}),[a,n]);return(0,c.jsxs)(m,{value:s,children:[i&&(0,c.jsx)(_,{...i}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/40370.en_IN-fd408d1672488cbe.mjs.map