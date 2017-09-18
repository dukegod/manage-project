import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Headcomp extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}> Project Manage </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#eeeeee',
    fontSize: 36,
    color: '#000000'
  },
});