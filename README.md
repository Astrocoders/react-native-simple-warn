# react-native-simple-warn
Simple warn for React Native that appears with a slide down effect.

## Usage

```js
// ...
import Warn from 'react-native-simple-warn';

export default class Something extends {
  _show(){
    this.refs.warn.appear();
  }

  _hide(){
    this.refs.warn.disappear();
  }

  render(){
    return (
      <View>
        <Warn
          ref="warn"
          message={'You know nothing, Jon Snow'}
          style={someAdditionalStyle}
        />
        <Button onPress={this._show.bind(this)}>Click me</Button>
        <Button onPress={this._hide.bind(this)}>Click me also</Button>
      </View>
    );  
  },  
}
```
