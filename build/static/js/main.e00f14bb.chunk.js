(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(10),r=a.n(o),s=(a(16),a(3)),l=a(4),c=a(6),d=a(5),m=a(1),h=a(7),k=(a(17),a(2)),u=a.n(k);u.a.setOptions({breaks:!0});var w=new u.a.Renderer;w.link=function(e,t,a){return'<a target="_blank" href="'.concat(e,'">').concat(a,"</a>")};var f="Marked - Markdown Parser\n========================\n\n[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.\n\nHow To Use The Demo\n-------------------\n\n1. Type in stuff on the left.\n2. See the live updates on the right.\n\nThat's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:\n\n- **Preview:**  A live display of the generated HTML as it would render in a browser.\n- **HTML Source:**  The generated HTML before your browser makes it pretty.\n- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.\n- **Quick Reference:**  A brief run-down of how to format things using markdown.\n\nWhy Markdown?\n-------------\n\nIt's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,\n\n> The overriding design goal for Markdown's\n> formatting syntax is to make it as readable\n> as possible. The idea is that a\n> Markdown-formatted document should be\n> publishable as-is, as plain text, without\n> looking like it's been marked up with tags\n> or formatting instructions.\n\n[Marked]: https://github.com/markedjs/marked/\n[Markdown]: http://daringfireball.net/projects/markdown/\n\nInline `code` has `back-ticks around` it.\n\nHere's some JS code:\n\n```javascript\nvar s = \"JavaScript is great!\";\nalert(s);\n```\n\nMade with:\n\n\n[logoreact]: https://goo.gl/Umyytc \"react.js logo\"\n[logomarked]: https://marked.js.org/img/logo-black.svg \"marked.js logo\"\n![alt text][logoreact] -and- ![alt text][logomarked]\n",b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={minimized:"editor-toolbar-min",content:f},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleClickMinimize=a.handleClickMinimize.bind(Object(m.a)(a)),a.handleClickMaximize=a.handleClickMaximize.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleClickMinimize",value:function(){this.setState({minimized:"editor-toolbar-min"})}},{key:"handleClickMaximize",value:function(){this.setState({minimized:"editor-toolbar-max"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"wraper fluid-container"},i.a.createElement("div",{id:"editor-toolbar",className:this.state.minimized},i.a.createElement("i",{className:"fab fa-free-code-camp"}," Editor"),i.a.createElement("span",null,i.a.createElement("i",{onClick:this.handleClickMinimize,className:"fa fa-window-minimize"}),i.a.createElement("i",{onClick:this.handleClickMaximize,className:"fa fa-window-maximize"}))),i.a.createElement("textarea",{type:"text",id:"editor",className:this.state.minimized,value:this.state.content,onChange:this.handleChange}),i.a.createElement(v,{content:u()(this.state.content,{renderer:w})}))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={minimized:"preview-toolbar-min"},a.handleClickMinimize=a.handleClickMinimize.bind(Object(m.a)(a)),a.handleClickMaximize=a.handleClickMaximize.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClickMinimize",value:function(){this.setState({minimized:"preview-toolbar-min"})}},{key:"handleClickMaximize",value:function(){this.setState({minimized:"preview-toolbar-max"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"fluid-container"},i.a.createElement("div",{className:"spacer"}),i.a.createElement("div",{id:"preview-toolbar",className:this.state.minimized},i.a.createElement("i",{className:"fab fa-free-code-camp"}," Previewer"),i.a.createElement("span",null,i.a.createElement("i",{onClick:this.handleClickMinimize,className:"fa fa-window-minimize"}),i.a.createElement("i",{onClick:this.handleClickMaximize,className:"fa fa-window-maximize"}))),i.a.createElement("div",{id:"preview",className:this.state.minimized,dangerouslySetInnerHTML:{__html:this.props.content}}))}}]),t}(n.Component),p=b;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(p,null),document.getElementById("reactor")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.e00f14bb.chunk.js.map