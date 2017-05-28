// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Navigation from 'components/Navigation';
import { setNotification } from './actions';
import { selectNotification } from './selectors';
import Wrapper from './Wrapper';
import type { Dispatch } from './types';

class App extends Component {
  props: {
    children: ?Array<React.Element<>>,
    actions: {
      setNotification: (notification: string) => Object
    },
    notification: string
  }
  render(): React$Element<any> {
    return (
      <Wrapper>
        <Navigation />
        {
          this.props.notification.length !== 0 &&
          <a
            onClick={(): Object => this.props.actions.setNotification('')}
          >
            {this.props.notification} [x]
          </a>
        }
        {this.props.children}
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  notification: selectNotification()
});

function mapDispatchToProps(dispatch: Dispatch): Object {
  return {
    actions: {
      setNotification: (text: string): Object => dispatch(setNotification(text))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
