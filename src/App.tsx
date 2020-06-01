import * as React from 'react'
import Editor from './Component/Editor'

interface state {}

export default class App extends React.Component<{}, state> {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="col-12 text-center text-white py-5">Markdown Editor</h1>
        </div>
        <Editor />
        <div className="row">
          <h6 className="col-12 text-center text-white py-5">
            Designed and Coded By @Hachour Fouad
          </h6>
        </div>
      </div>
    )
  }
}
