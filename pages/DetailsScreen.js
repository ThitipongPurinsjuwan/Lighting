//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
//import all the basic component we have used
import Swid from './components/Switch';
export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.state = {
      loading: false,
      disabled: false,
      itemUSERNAME: [],
      isLoading: true,
      id: navigation.getParam('params', ''),
    };
  }

  componentDidMount() {
    var api =
      'http://192.168.1.80/mobile_app/bottom/API/get_where_id.php?Id=' +
      this.state.id;
    return fetch(api)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  //Detail Screen to show from any Open detail button
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#294b57'}}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'flex-start',
            padding: 25,
          }}>
          <View
            style={{
              width: 6,
              height: 50,
              backgroundColor: '#0299c7',
            }}
          />
          <Text
            style={{
              fontSize: 25,
              alignItems: 'center',
              padding: 10,
              color: 'white',
            }}>
            DEVICE
          </Text>
        </View>

        <View
          style={{
            flex: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.boxDevice}
                onPress={() => this.props.navigation.navigate('Details')}>
                <View style={{margin: 10}}>
                  <Text style={styles.textPublic}>
                    {this.state.id}Serial number : {item.SerialNumber}
                  </Text>
                  <Text style={styles.textPublic}>Detail : {item.Detail}</Text>
                  <Text style={styles.textPublic}>
                    Time Uesd : {item.TimeUsed}
                  </Text>
                  <View
                    style={{
                      transform: [{rotate: '90deg'}],
                      position: 'absolute',
                      margin: 15,
                      marginLeft: 220,
                    }}>
                    <Swid />
                  </View>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    marginTop: 60,
                    marginLeft: 20,
                  }}>
                  <TouchableOpacity
                    style={styles.submit}
                    onPress={() =>
                      this.props.navigation.navigate('ColorTone', {
                        p: item.Id,
                      })
                    }>
                    <Text style={styles.submitText}>Color</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.submit}
                    onPress={() =>
                      this.props.navigation.navigate('Slider', {
                        params: item.Id,
                      })
                    }>
                    <Text style={styles.submitText}>Lighting</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    position: 'absolute',
                    marginTop: 60,
                    marginLeft: 160,
                  }}>
                  <TouchableOpacity
                    style={styles.submit}
                    onPress={() => this.props.navigation.navigate('')}>
                    <Text style={styles.submitText}>Timer</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 10,
  },
  boxDevice: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: 300,
    height: 250,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  submit: {
    width: 120,
    height: 40,
    padding: 8,
    marginTop: 30,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  textPublic: {
    color: '#fff',
  },
});
