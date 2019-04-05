import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

/* Marked.js: allow <br/> conversion for CR */
marked.setOptions({
  breaks: true,
});
/* Marked.js: anchor links open in new tab */
const markedRenderer = new marked.Renderer();
markedRenderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
}

const preloadedContent = `Marked - Markdown Parser
========================

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.

How To Use The Demo
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/

Inline \`code\` has \`back-ticks around\` it.

Here's some JS code:

\`\`\`javascript
var s = "JavaScript is great!";
alert(s);
\`\`\`

Made with:


[logoreact]: https://goo.gl/Umyytc "react.js logo"
[logomarked]: https://marked.js.org/img/logo-black.svg "marked.js logo"
![alt text][logoreact] -and- ![alt text][logomarked]
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minimized: "editor-toolbar-min",
      content: preloadedContent
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickMinimize = this.handleClickMinimize.bind(this);
    this.handleClickMaximize = this.handleClickMaximize.bind(this);
  }
  handleChange(e) {
    this.setState({content: e.target.value});
  }
  handleClickMinimize(){
    this.setState({minimized: "editor-toolbar-min"});
  }
  handleClickMaximize(){
    this.setState({minimized: "editor-toolbar-max"})
  }
  render() {
    return (
      <div className="wraper fluid-container">
        <div id="editor-toolbar" className={this.state.minimized}>
          <i className="fab fa-free-code-camp"> Editor</i>
          <span>
            <i onClick={this.handleClickMinimize} className="fa fa-window-minimize"></i>
            <i onClick={this.handleClickMaximize} className="fa fa-window-maximize"></i>
          </span>
        </div>
        <textarea type="text" id="editor" className={this.state.minimized} value={this.state.content} onChange={this.handleChange}/>
        <Preview content={marked(this.state.content, {renderer: markedRenderer})}/>
      </div>
    );
  }
};

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minimized: "preview-toolbar-min"
    }
    this.handleClickMinimize = this.handleClickMinimize.bind(this);
    this.handleClickMaximize = this.handleClickMaximize.bind(this);
  }
  handleClickMinimize(){
    this.setState({minimized: "preview-toolbar-min"});
  }
  handleClickMaximize(){
    this.setState({minimized: "preview-toolbar-max"})
  }
  render() {
    return (
      <div className="fluid-container">
        <div className="spacer"></div>
        <div id="preview-toolbar" className={this.state.minimized}>
          <i className="fab fa-free-code-camp"> Previewer</i>
          <span>
            <i onClick={this.handleClickMinimize} className="fa fa-window-minimize"></i>
            <i onClick={this.handleClickMaximize} className="fa fa-window-maximize"></i>
          </span>
        </div>
        <div id="preview" className={this.state.minimized} dangerouslySetInnerHTML={{__html: this.props.content}}></div>
        
      </div>
    );
  }
}

export default App;
