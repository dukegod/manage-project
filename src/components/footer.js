import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Footercomp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressLearnMore(e) {
    console.log(e);
  }
  render() {
    return (
      <View style={styles.fc}>
        <Button style={styles.but}
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
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fc:{
    backgroundColor: '#eeeeee',
  },
  but: {
    // display: 'flex',
    // flex: 1,
    // flexDirection: 'row',
    flex: 1,
    fontSize: 36,
  },
});