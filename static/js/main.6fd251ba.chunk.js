(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2YVFR",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__F4iko"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2sLyU",Modal:"Modal_Modal__2wzI0"}},17:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1fi7i"}},18:function(e,t,a){e.exports={Button:"LoadMore_Button__1Uocf"}},25:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),o=a(7),s=a.n(o),l=(a(25),a(3)),i=a(4),u=a(6),h=a(5),m=a(8),p=a.n(m),b=a(15),d=a(10),g=a(16),f=a.n(g),j=a(12),y=a.n(j),O=a(13),v=a.n(O),x=document.querySelector("#modal-root"),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).closeModal=function(t){console.log("close MODAL",Date.now()),"Escape"===t.code&&e.props.onClose(),t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModal)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(o.createPortal)(Object(r.jsx)("div",{className:v.a.Overlay,onClick:this.closeModal,children:Object(r.jsx)("div",{className:v.a.Modal,children:Object(r.jsx)("img",{src:t,alt:a})})}),x)}}]),a}(n.Component),_=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt,n=e.largeImageURL;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("li",{className:y.a.ImageGalleryItem,children:Object(r.jsx)("img",{src:t,alt:a,onClick:this.toggleModal,className:y.a.ImageGalleryItemImage})}),this.state.showModal&&Object(r.jsx)(S,{src:n,alt:a,onClose:this.toggleModal})]})}}]),a}(n.Component),I=a(17),w=a.n(I),M=a(19),k=function(){function e(t){Object(l.a)(this,e),this.options=Object(M.a)({BASE_URL:"https://pixabay.com/api/",defaultOptions:"image_type=photo&orientation=horizontal",page:1,per_page:12,key:"19030678-ed1e5f4c74f32611df53e834e"},t)}return Object(i.a)(e,[{key:"getUrl",value:function(){var e=this.options,t=e.BASE_URL,a=e.defaultOptions,r=e.searchQuery,n=e.page,c=e.per_page,o=e.key;return"".concat(t,"?").concat(a,"&q=").concat(r,"&page=").concat(n,"&per_page=").concat(c,"&key=").concat(o)}},{key:"fetchImages",value:function(){var e=Object(d.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,this.options.page+=1,e.abrupt("return",a.json().then((function(e){return e.hits})));case 8:e.prev=8,e.t0=e.catch(0),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u041a\u0415\u0427",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getImages",value:function(e){e&&(this.options.searchQuery=e,this.options.page=1);var t=this.getUrl();return this.fetchImages(t)}}]),e}(),Q=a(18),N=a.n(Q);function C(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{type:"button",className:N.a.Button,onClick:function(){console.log("before loadMore()"),e.loadMore(),console.log("after loadMore()")},children:"Load More"})})}var G="idle",L="pending",U="resolved",F="rejected",A=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={gallery:[],status:G},e.apiService=new k,e.loadMore=function(){e.fetchImagesOnSearch()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchImagesOnSearch(this.props.searchQuery)}},{key:"componentDidUpdate",value:function(e,t){var a=e.searchQuery,r=t.gallery.length,n=this.state.gallery.length,c=r*n;this.props.searchQuery!==a?(this.setState({gallery:[]}),this.fetchImagesOnSearch(this.props.searchQuery)):n!==r&&(c&&window.scrollTo({top:this.scroll,behavior:"smooth"}),this.scroll=document.documentElement.scrollHeight-document.querySelector("#searchbar").scrollHeight)}},{key:"fetchImagesOnSearch",value:function(){var e=Object(d.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({status:L}),e.next=3,this.apiService.getImages(t).then((function(e){return e}));case 3:if((a=e.sent).length){e.next=7;break}return this.setState({status:F}),e.abrupt("return");case 7:this.setState((function(e){var t=e.gallery;return{gallery:[].concat(Object(b.a)(t),Object(b.a)(a))}})),this.setState({status:U});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,a=e.gallery;return Object(r.jsxs)(r.Fragment,{children:[L===t&&Object(r.jsx)(f.a,{type:"Rings",color:"#bfbfbf",className:"loader"}),F===t&&!a.length&&Object(r.jsx)("h1",{children:"Nothing founded"}),!a.length||Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("ul",{className:w.a.ImageGallery,children:a.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,c=e.tags;return Object(r.jsx)(_,{src:a,largeImageURL:n,alt:c},t)}))}),U===t&&Object(r.jsx)(C,{loadMore:this.loadMore}),F===t&&Object(r.jsx)("h1",{children:"there are no more images...."})]})]})}}]),a}(n.Component),R=a(14),B=(a(48),a(9)),E=a.n(B),D=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.changeQuery=function(t){e.setState({searchQuery:t.target.value})},e.submitForm=function(t){t.preventDefault();var a=e.state.searchQuery.trim();if(!a)return Object(R.b)("to finds some, needs type some"),void e.setState({searchQuery:""});e.props.onSubmit(a.toLowerCase())},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("header",{className:E.a.Searchbar,id:"searchbar",children:Object(r.jsxs)("form",{className:E.a.form,onSubmit:this.submitForm,children:[Object(r.jsx)("button",{type:"submit",className:E.a.button,children:Object(r.jsx)("span",{className:E.a.label,children:"Search"})}),Object(r.jsx)("input",{className:E.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.changeQuery,value:this.state.searchQuery})]})}),Object(r.jsx)(R.a,{})]})}}]),a}(n.Component),q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={submitedSearchQuery:""},e.handleFormSubmit=function(t){t!==e.state.submitedSearchQuery&&e.setState({submitedSearchQuery:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(D,{onSubmit:this.handleFormSubmit}),this.state.submitedSearchQuery&&Object(r.jsx)(A,{searchQuery:this.state.submitedSearchQuery})]})}}]),a}(n.Component);s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(q,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__mKfzV",form:"Searchbar_form__2M-7G",button:"Searchbar_button__1n0UZ",label:"Searchbar_label__1TgjR",input:"Searchbar_input__3BNr0"}}},[[49,1,2]]]);
//# sourceMappingURL=main.6fd251ba.chunk.js.map