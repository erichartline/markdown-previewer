var React = require('react');
var ReactDOM = require('react-dom');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './styles/app.scss';

class Markdown extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid>
        <Row>
          <Col xs={6} md={3} lg={2}>
            Hello, world!
          </Col>
          <Col xs={6} md={3} lg={2}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<Markdown />, document.getElementById('app'));
