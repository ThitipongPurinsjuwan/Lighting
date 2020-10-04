// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_light'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_light', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_light(item_id INTEGER PRIMARY KEY AUTOINCREMENT, serial_number VARCHAR(20), detail VARCHAR(50), swtich INT(2), color VARCHAR(20), lighting INTEGER )',
              []
            );
          }
        }
      );
    });
  }, []);

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1, backgroundColor: 'white' }}>
//         <View style={{ flex: 1 }}>
//           <Mytext text="SQLite Example" />
//           <Mybutton
//             title="Register"
//             customClick={() => navigation.navigate('Register')}
//           />
//           <Mybutton
//             title="Update"
//             customClick={() => navigation.navigate('Update')}
//           />
//           <Mybutton
//             title="View"
//             customClick={() => navigation.navigate('View')}
//           />
//           <Mybutton
//             title="View All"
//             customClick={() => navigation.navigate('ViewAll')}
//           />
//           <Mybutton
//             title="Delete"
//             customClick={() => navigation.navigate('Delete')}
//           />
//         </View>
//         <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
//           Example of SQLite Database in React Native
//         </Text>
//         <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
//           www.aboutreact.com
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
};

export default HomeScreen;