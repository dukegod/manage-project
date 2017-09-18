import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ListPage extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}> list Component </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#eeeeee',
    fontSize: 20,
    color: '#000000'
  },
});