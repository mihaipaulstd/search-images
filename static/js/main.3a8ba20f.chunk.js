(this["webpackJsonpsearch-app"]=this["webpackJsonpsearch-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(68)},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),i=a.n(s),o=a(13),c=a(3),l=a(4),u=a(6),h=a(5),d=a(1),m=a(7),b=a(27),p=a(28),g=a.n(p),f=a(29),O=a.n(f),v=a(12),j=a.n(v),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={hidden:!0,blurred:!0},a.imageRef=r.a.createRef(),a.show=a.show.bind(Object(d.a)(a)),a.hide=a.hide.bind(Object(d.a)(a)),a.focus=a.focus.bind(Object(d.a)(a)),a.blur=a.blur.bind(Object(d.a)(a)),a.triggerModal=a.triggerModal.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.show()}),this.props.opacityDelay),setTimeout((function(){e.focus()}),this.props.blurDelay),this.imageRef.current.addEventListener("click",this.triggerModal)}},{key:"show",value:function(){this.setState({hidden:!1})}},{key:"hide",value:function(){this.setState({hidden:!0})}},{key:"focus",value:function(){this.setState({blurred:!1})}},{key:"blur",value:function(){this.setState({blurred:!0})}},{key:"triggerModal",value:function(){this.props.triggerModal({imageProperties:this.props.imageProperties})}},{key:"render",value:function(){return r.a.createElement("div",{className:"imageCard ".concat(this.state.hidden?"hidden":""," ").concat(this.state.blurred?"blurred":"")},r.a.createElement("img",{src:this.props.src,ref:this.imageRef}))}}]),t}(n.Component),C=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("h2",{className:"formTitle"},"Search images")}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={term:""},a.onInputChange=a.onInputChange.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onInputChange",value:function(e){this.setState({term:e.target.value}),this.props.onChange(e.target.value)}},{key:"render",value:function(){return r.a.createElement("input",{className:"formInput",type:"text",spellCheck:"false",value:this.state.term,onChange:this.onInputChange,autoFocus:!0})}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={term:""},a.onInputChange=a.onInputChange.bind(Object(d.a)(a)),a.onFormSubmit=a.onFormSubmit.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onInputChange",value:function(e){this.setState({term:e})}},{key:"onFormSubmit",value:function(e){e.preventDefault(),e.target.querySelector("input").blur(),this.props.onSubmit(this.state.term)}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"searchForm"},r.a.createElement(C,null),r.a.createElement(k,{onChange:this.onInputChange}))}}]),t}(n.Component),M=a(30),E=a.n(M).a.create({baseURL:"https://api.pexels.com/",headers:{Authorization:"563492ad6f91700001000001cc1c1c42d7d749968d5bbb920ad21688"}});j.a.setAppElement("#root");var I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={per_load:20,loads:0,images:new Array,currentImage:new Object,currentTerm:null,showModal:!1},e.fetchImages=e.fetchImages.bind(Object(d.a)(e)),e.handleOpenModal=e.handleOpenModal.bind(Object(d.a)(e)),e.handleCloseModal=e.handleCloseModal.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){var e=document.querySelector(".imageContainer");O()(e,(function(){return new g.a(e,{itemSelector:".imageCard",columnWidth:".imageCardSizer",percentPosition:!0}).layout()}))}},{key:"fetchImages",value:function(e){var t=this;E.get("/v1/search",{params:{query:e||this.state.currentTerm,per_page:this.state.per_load,page:this.state.loads+1}}).then((function(a){t.setState({images:[].concat(Object(o.a)(t.state.images),Object(o.a)(a.data.photos)),loads:t.state.loads+1,currentTerm:e||t.state.currentTerm})}))}},{key:"handleOpenModal",value:function(e){var t=e.imageProperties;this.setState({showModal:!0,currentImage:t})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app container"},r.a.createElement(S,{onSubmit:this.fetchImages}),r.a.createElement(b.a,{className:"imageContainer",dataLength:this.state.images.length,next:this.fetchImages,scrollThreshold:.7,hasMore:!0,loader:r.a.createElement("div",null)},r.a.createElement("div",{className:"imageCardSizer"}),this.state.images.map((function(t,a){return r.a.createElement(y,{key:t.id,opacityDelay:50*a,src:t.src.large,imageProperties:t,triggerModal:e.handleOpenModal})})),r.a.createElement(j.a,{isOpen:this.state.showModal,contentLabel:"onRequestClose",onRequestClose:this.handleCloseModal,className:"Modal",overlayClassName:"Overlay"},r.a.createElement("img",{src:"undefined"!==typeof this.state.currentImage.src?this.state.currentImage.src.original:""}))))}}]),t}(n.Component),w=document.getElementById("root");i.a.render(r.a.createElement(I,null),w)}},[[31,1,2]]]);
//# sourceMappingURL=main.3a8ba20f.chunk.js.map