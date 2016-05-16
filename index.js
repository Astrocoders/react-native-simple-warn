import React, { PropTypes } from 'react';
import {
  Component,
  Animated,
  Text,
  View,
} from 'react-native';

export default class Warn extends Component {
  static propTypes = {
    message: PropTypes.string,
    style: View.propTypes.style,
    textStyle: View.propTypes.style,
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
          justifyContent: 'center',
          paddingVertical: 10,
        }, this.props.style]}
      >
        <Text style={this.props.textStyle}>{this.props.message}</Text>
      </Animated.View>
    );
  }
}
