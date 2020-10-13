//This is an example code for Bottom Navigation//
import React, {useState} from 'react';
//import react in our code.
import {
  Text,
  View,
  Switch,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Swid from './components/Switch';
// import ipFile from './components/variable';
export default class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      first_name: '',
      last_name: '',
      loading: false,
      disabled: false,
      isLoading: true,
      Id: '',
      switch1Value: false,
    };
  }

  componentDidMount() {
    return (
      // fetch('http://192.168.1.80/mobile_app/bottom/API/get_all.php')
      fetch('http://192.168.43.69/mobile_app/bottom/API/get_all.php')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({data: responseJson});
        })
        .catch((error) => {
          console.error(error);
        })
    );
  }

  toggleSwitch1 = (value) => {
    this.setState({switch1Value: value});
  };

  //Home Screen to show in Home Option
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
            MY DEVICE
          </Text>
        </View>

        <View
          style={{
            flex: 0.8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.boxDevice}
                onPress={() =>
                  this.props.navigation.navigate('Details', {
                    params: item.Id,
                  })
                }>
                <View style={{margin: 10}}>
                  <Text style={styles.textPublic}>
                    Serial number : {item.SerialNumber}
                  </Text>
                  <Text style={styles.textPublic}>Detail : {item.Detail}</Text>
                  <View
                    style={{
                      transform: [{rotate: '90deg'}],
                      position: 'absolute',
                      margin: 15,
                      marginLeft: 220,
                    }}>
                    <Swid value1={item.OpenStatus} />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.submit}
            onPress={() => this.props.navigation.navigate('AllDevice')}>
            <Text style={styles.submitText}>more</Text>
          </TouchableOpacity>
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
    marginTop: 16,
  },
  boxDevice: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: 300,
    height: 70,
    marginTop: 16,
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
    width: 170,
    height: 50,
    padding: 10,
    marginTop: 30,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
  },
  textPublic: {
    color: '#fff',
  },
});
