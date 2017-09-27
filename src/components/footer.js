import React from 'react';
import { StyleSheet, Text, View, Button, PixelRatio } from 'react-native';

export default class Footercomp extends React.Component {
  constructor(props) {
    var ii = 90;
    super(props);
    this.state = {};
  }
  onPressLearnMore() {
    console.log(this);
  }
  render() {
    return (
      <View style={styles.fc}>
        <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
        {/* <Button style={styles.but}
          onPress={this.onPressLearnMore.bind(this)}
          title="已经完成"
          color="green"
        />
        <Button style={styles.but}
          onPress={this.onPressLearnMore.bind(this)}
          title="进行中..."
          color="#841584"
        />
        <Button style={styles.but}
          onPress={this.onPressLearnMore.bind(this)}
          title="未完成..."
          color="#ff0000"
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fc: {
    width: '100%',
    height: PixelRatio.getPixelSizeForLayoutSize(16),
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  but: {
    // flex: 1,
    width: '33%',
    // height: PixelRatio.getPixelSizeForLayoutSize(16),
    backgroundColor: 'red',
    // lineHeight: PixelRatio.getPixelSizeForLayoutSize(16),
    // textAlign: 'center',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
  },
});
