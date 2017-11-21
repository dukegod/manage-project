import React from 'react';
import { StyleSheet, Text, View, Button, PixelRatio } from 'react-native';

export default class Footercomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressLearnMore() {
    console.log(this);
  }
  render() {
    return (
      <View style={styles.fc}>
        <View style={{ width: '100%', height: 20, backgroundColor: 'red' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fc: {
    width: '100%',
    height: PixelRatio.getPixelSizeForLayoutSize(16),
    backgroundColor: '#ededed',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
