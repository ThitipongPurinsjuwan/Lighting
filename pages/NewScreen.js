//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
//import all the basic component we have used
// import Swid from './components/Switch';
export default class NewScreen extends React.Component {
  //Profile Screen to show from Open profile button
  state = {
    isModalVisible: false,
    isModalVisibleEnterSN: false,
    serialNumber: '',
    detail: '',
    save: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  toggleModalSN = () => {
    this.setState({
      isModalVisibleEnterSN: !this.state.isModalVisibleEnterSN,
    });
    this.state.save = !this.state.save;
    if (this.state.serialNumber !== '' || this.state.detail !== '') {
      if (!this.state.save) {
        this.saveData();
      }
    }
  };

  saveData = () => {
    this.setState({loading: true, disabled: true}, () => {
      fetch('http://192.168.43.69/mobile_app/bottom/API/insert_data.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serialNumber: this.state.serialNumber,
          detail: this.state.detail,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          alert(responseJson);
          // this.setState({loading: false, disabled: false});
        })
        .catch((error) => {
          console.error(error);
          // this.setState({loading: false, disabled: false});
        });
    });
  };

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
            NEW DEVICE
          </Text>
        </View>

        <View
          style={{
            flex: 0.8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.boxDevice} onPress={this.toggleModal}>
            <Modal isVisible={this.state.isModalVisible}>
              <View
                style={{
                  flex: 0.5,
                  backgroundColor: 'rgba(255,255,255,1)',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 100,
                    fontSize: 30,
                  }}>
                  No Device..!
                </Text>
                <TouchableOpacity title="Hide modal" onPress={this.toggleModal}>
                  <Text style={styles.textPublic}>Ok</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <View style={{margin: 10}}>
              <Text style={styles.textPublic}>Search Device</Text>
              {/* <Text style={styles.textPublic}>Enter Serial Number</Text> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxDevice}
            onPress={this.toggleModalSN}>
            <Modal isVisible={this.state.isModalVisibleEnterSN}>
              {/*  */}
              <View style={styles.container}>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Serial Number"
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({serialNumber: text})}
                />

                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder="Detail"
                  style={styles.textInput}
                  onChangeText={(text) => this.setState({detail: text})}
                />
                <View
                  style={{
                    flex: 0.5,
                    marginTop: 25,
                  }}>
                  <TouchableOpacity
                    title="Hide modal"
                    onPress={this.toggleModalSN}>
                    <Text style={styles.textPublic}>Ok</Text>
                  </TouchableOpacity>
                </View>
                {/* <TouchableOpacity
                  disabled={this.state.disabled}
                  activeOpacity={0.8}
                  style={styles.Btn}
                  onPress={this.saveData}>
                  <Text style={styles.btnText}>Insert</Text>
                </TouchableOpacity> */}
              </View>
              {/*  */}
            </Modal>
            <View style={{margin: 10}}>
              <Text style={styles.textPublic}>Enter Serial Number</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingHorizontal: 25,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
  },

  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 5,
    alignSelf: 'stretch',
    padding: 8,
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  boxDevice: {
    backgroundColor: 'rgba(255,255,255,1)',
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
    color: '#294b57',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 5,
    // alignContent: 'center',
  },
});
