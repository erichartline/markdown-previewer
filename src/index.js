import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './styles/app.css';


class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({markdown: event.target.value});
  }

  rawMarkup() {
    let rawMarkup = marked(this.state.markdown, {sanitize: true});
    return {__html: rawMarkup};
  }

  render() {
    return (
        <Grid fluid>
          <Row>
            <Col xs={12}>
            <h1 id="headline">React Markdown Previewer</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <textarea id="editor" value={this.state.markdown} onChange={this.handleChange}></textarea>
              <h5><a href="https://en.wikipedia.org/wiki/Markdown" rel="noopener noreferrer" target="_blank">What is Markdown?</a>&nbsp;<span><i className="fa fa-external-link" aria-hidden="true"></i></span></h5>
            </Col>
            <Col xs={6}>
              <div id="preview" dangerouslySetInnerHTML={this.rawMarkup()}></div>
            </Col>
          </Row><br />
          <Row>
            <Col xs={12} id="footer">
            <p>Written and coded by <a href="http://www.erichartline.net" rel="noopener noreferrer" target="_blank">Eric Hartline</a> for <a href="http://www.freecodecamp.org/" rel="noopener noreferrer" target="_blank">freeCodeCamp</a> <i className="fa fa-free-code-camp" aria-hidden="true">.</i></p>
            </Col>
          </Row>
        </Grid>
    )
  }
}

const placeholder = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[freeCodeCamp](https://freecodecamp.org/)*'

ReactDOM.render(<Markdown />, document.getElementById('app'));
