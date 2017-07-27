let React = require('react');
let ReactDOM = require('react-dom');
let marked = require('marked');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './styles/app.scss';

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: 'This is placeholder text.'
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
      <MuiThemeProvider>
        <Grid fluid>
        <Row>
          <Col>
            <textarea cols="50" rows="25" value={this.state.markdown} onChange={this.handleChange}></textarea>
          </Col>
          <Col>
            <div dangerouslySetInnerHTML={this.rawMarkup()}></div>
          </Col>
        </Row>
      </Grid>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<Markdown />, document.getElementById('app'));
