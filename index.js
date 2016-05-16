import React, { PropTypes } from 'react';
import {
  Component,
  Animated,
  Text,
} from 'react-native';

export default class Warn extends Component {
  static propTypes = {
    message: PropTypes.string,
  }

  constructor(props){
    super(props);

    this.warnStyles = {
      height: 40,
      marginTop: new Animated.Value(-40),
    };
  }

  appear(){
    Animated.timing(this.warnStyles.marginTop, {
      toValue: 0,
    }).start();
  }

  disappear(){
    Animated.timing(this.warnStyles.marginTop, {
      toValue: -40,
    }).start();
  }

  render(){
    const { warnStyles } = this;
    return (
      <Animated.View
        style={[warnStyles, {
          alignItems: 'center',
          justifycontent: 'center',
          paddingVertical: 10,
        }]}
      >
        <Text>{this.props.message}</Text>
      </Animated.View>
    );
  }
}
