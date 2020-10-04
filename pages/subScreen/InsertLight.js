// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to register the user

import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const InsertLight = ({ navigation }) => {
  let [serialNumber, setserialNumber] = useState('');
  let [detail, setDetail] = useState('');
  let [swid, setSwid]= useState('');
  let [color, setColor] = useState('');
  let [lighting, setLighting] = useState('');

  let register_user = () => {
    console.log(serialNumber, detail, swid, color, lighting);

    if (!serialNumber) {
      alert('Please fill serialNumber');
      return;
    }
    if (!detail) {
      alert('Please fill detail');
      return;
    }
    if (!swid) {
      alert('Please fill swid');
      return;
    }
    if (!color) {
      alert('Please fill color');
      return;
    }
    if (!lighting) {
      alert('Please fill lighting');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_light (serial_number, detail, swtich, color, lighting) VALUES (?,?,?,?,?)',
        [serialNumber, detail, swid, color, lighting],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Enter Serial Number"
                onChangeText={(serialNumber) => setserialNumber(serialNumber)}
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Enter Detail"
                onChangeText={(detail) => setDetail(detail)}
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Enter 0 1 switch on off"
                onChangeText={(swid) => setSwid(swid)}
                maxLength={10}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Enter color"
                onChangeText={(color) => setColor(color)}
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Enter lighting number"
                onChangeText={(lighting) => setLighting(lighting)}
                keyboardType="numeric"
                style={{ padding: 10 }}
              />
              <Mybutton title="Submit" customClick={register_user} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Example of SQLite Database in React Native
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default InsertLight;