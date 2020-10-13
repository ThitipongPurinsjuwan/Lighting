import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
export default class SliderExample extends React.Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.state = {
      id: navigation.getParam('params', ''),
      price: '0',
      optical: 0,
    };
  }
  // state = {price: '0'};
  updatePrice = (price) => {
    this.setState({price: price});
  };

  updateOptical = () => {
    this.setState(() => {
      fetch('http://192.168.43.69/mobile_app/bottom/API/update_optical.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          optical: this.state.price,
          id: this.state.id,
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
      <View style={{flex: 1, margin: 50, alignContent: 'center'}}>
        <Text
          style={{
            marginBottom: 20,
            fontSize: 20,
            color: '#294b57',
            textAlign: 'center',
          }}>
          Optical Light Of {this.state.id}
        </Text>
        <Slider
          onValueChange={this.updatePrice}
          maximumValue={10}
          minimumValue={0}
          step={1}
        />
        <Text
          style={{
            marginTop: 20,
            fontSize: 30,
            color: 'red',
            textAlign: 'center',
          }}>
          {this.state.price}
        </Text>
        <TouchableOpacity onPress={this.updateOptical}>
          <Text style={styles.textPublic2}>Ok</Text>
        </TouchableOpacity>
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
  textPublic2: {
    color: '#294b57',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    // alignContent: 'center',
  },
});
