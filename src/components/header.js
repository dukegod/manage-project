import React from 'react';
import { StyleSheet, Text, View, PixelRatio } from 'react-native';

export default class Headcomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressLearnMore() {
    console.log(this);
  }
  render() {
    return (
      <View>
        <Text style={styles.header}> Fuel consumption statistics </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: PixelRatio.getPixelSizeForLayoutSize(60),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(80),
    textAlign: 'center',
    backgroundColor: 'green',
    fontSize: 30,
    color: '#000000'
    // marginTop: ''
  }
});
