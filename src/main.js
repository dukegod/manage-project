import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Headcomp from './components/header';
import Footercomp from './components/footer';
import ListPage from './pages/listItem';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Headcomp/>
        <ScrollView style={{ backgroundColor: '#ffffff' }}>
          <ListPage/>
        </ScrollView>
        <Footercomp/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex : 1,
  },
});
