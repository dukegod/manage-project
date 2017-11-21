import React from 'react';
import { StyleSheet, Text, View, ListView} from 'react-native';
import '../utils/storage';

async function getData() {
  return await storage.load({key: 'testkey'})
}


export default class ListPage extends React.Component {

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['90'])
    }
  }

  componentDidMount() {
    getData().then(re=>{
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        dataSource: ds.cloneWithRows(re)
      })
    }).catch(e=>console.log(e))
  }

  render() {
    return (
      <View>
        <Text style={styles.header}> Recharge record </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text> Time: {rowData.recordTime}, Km: {rowData.recordKm}, Liter: {rowData.recordLitre}, Money: {rowData.recordMoney}</Text>}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomColor: '#dddddd',
    borderStyle: 'solid',
    borderBottomWidth: 1
  },
});
