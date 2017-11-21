import React from 'react';
import { StyleSheet, Text, View, PixelRatio } from 'react-native';

export default class Headcomp extends React.Component {
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
    height: PixelRatio.getPixelSizeForLayoutSize(40),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(40),
    textAlign: 'center',
    backgroundColor: 'green',
    fontSize: 36,
    color: '#000000'
  },
});