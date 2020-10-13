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
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Tile} from 'react-native-elements';
// import {showMessage, hideMessage} from 'react-native-flash-message';
import DropdownAlert from 'react-native-dropdownalert';
// import ipFile from './components/variable';
export default class modeScreen extends React.Component {
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

  // componentDidMount() {
  //     return (
  //       // fetch('http://192.168.1.80/mobile_app/bottom/API/get_all.php')
  //       fetch('http://172.16.28.141/mobile_app/bottom/API/get_all.php')
  //         .then((response) => response.json())
  //         .then((responseJson) => {
  //           this.setState({data: responseJson});
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         })
  //     );
  //   }
  //   toggleSwitch1 = (value) => {
  //     this.setState({switch1Value: value});
  // }

  // alertMoview() {
  //   this.dropDownAlertRef.alertWithType(
  //     'success',
  //     'Success',
  //     'You light mode movie',
  //   );
  // }
  //Home Screen to show in Home Option
  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <View>
            <DropdownAlert ref={(ref) => (this.dropDownAlertRef = ref)} />
          </View>
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
                MODE
              </Text>
            </View>

            <View
              style={{
                flex: 0.8,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
                marginRight: 20,
              }}>
              <Tile
                imageSrc={require('../Image/m1.jpg')}
                height={120}
                title="Movie"
                titleStyle={{fontSize: 40, fontWeight: 'bold'}}
                featured

                // caption="Some Caption Text"
              />
              <Tile
                imageSrc={require('../Image/m2.jpg')}
                height={120}
                title="Sleep"
                titleStyle={{fontSize: 40, fontWeight: 'bold'}}
                featured
                // caption="Some Caption Text"
              />
              <Tile
                imageSrc={require('../Image/m3.jpg')}
                height={120}
                title="Read"
                titleStyle={{fontSize: 40, fontWeight: 'bold'}}
                featured
                // caption="Some Caption Text"
              />
              <Tile
                // containerStyle={{shadowColor: 'red', padding: 10}}
                imageSrc={require('../Image/m4.jpg')}
                height={120}
                title="Work"
                titleStyle={{fontSize: 40, fontWeight: 'bold'}}
                featured
                // caption="Some Caption Text"
              />
              <Tile
                imageSrc={require('../Image/m5.jpg')}
                height={120}
                title="Party"
                titleStyle={{fontSize: 40, fontWeight: 'bold'}}
                featured
                // caption="Some Caption Text"
              />
              <Tile
                imageSrc={require('../Image/m6.jpg')}
                height={120}
                title="Make up"
                titleStyle={{fontSize: 40, fontWeight: 'bold'}}
                featured
                // caption="Some Caption Text"
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
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
    // width: 300,
    height: 70,
    marginTop: 16,
    shadowColor: '#000',
    alignSelf: 'stretch',
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
