import * as React from 'react'
import marked from 'marked'

interface Props {}
interface State {
  textarea: string
}

export default class Editor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      textarea: `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`,
    }
  }

  render() {
    const HTML = marked(this.state.textarea)
    return (
      <div className="row justify-content-center" id="drum-machine">
        <div className="col-12">
          <div className="row">
            <div
              className="col-12 d-flex align-items-center bg-dark text-white "
              style={{ height: 40 }}>
              Markdown Editor
            </div>
            <textarea
              id="editor"
              cols={30}
              rows={10}
              className="text-white bg-dark col-12"
              onChange={e => this.setState({ textarea: e.currentTarget.value })}
              value={this.state.textarea}></textarea>
          </div>
        </div>
        <div className="col-12 my-4 ">
          <div className="row">
            <div
              className="col-12 d-flex align-items-center bg-dark text-white border border-white"
              style={{ height: 40 }}>
              Preview
            </div>
            <div
              className="col-12 p-2 text-white bg-warning"
              id="preview"
              style={{ minHeight: 400 }}
              dangerouslySetInnerHTML={{ __html: HTML }}
            />
          </div>
        </div>
      </div>
    )
  }
}
