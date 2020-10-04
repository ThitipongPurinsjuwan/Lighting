//This is an example code for Bottom Navigation//
import React from 'react';
import {Button, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import StoreScreen from './pages/StoreScreen';
import QRCodeScreen from './pages/QrcodeScreen';
import NewScreen from './pages/NewScreen';
import ColorTone from './pages/ColorScreen';
import SliderScreen from './pages/SliderLight';
import InsertLight from './pages/subScreen/InsertLight';
import AllDeviceScreen from './pages/AllDevice';

// var db = openDatabase({ name: 'UserDatabase.db' });

// const CreateTbl = ({ navigation }) => {
//   useEffect(() => {
//     db.transaction(function (txn) {
//       txn.executeSql(
//         "SELECT name FROM sqlite_master WHERE type='table' AND name='table_light'",
//         [],
//         function (tx, res) {
//           console.log('item:', res.rows.length);
//           if (res.rows.length == 0) {
//             txn.executeSql('DROP TABLE IF EXISTS table_light', []);
//             txn.executeSql(
//               'CREATE TABLE IF NOT EXISTS table_light(item_id INTEGER PRIMARY KEY AUTOINCREMENT, serial_number VARCHAR(20), detail VARCHAR(50), swtich INT(2), color VARCHAR(20), lighting INTEGER )',
//               []
//             );
//           }
//         }
//       );
//     });
//   }, []);
// };

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {screen: HomeScreen},
    Details: {screen: DetailsScreen},
    ColorTone: {screen: ColorTone},
    Slider: {screen: SliderScreen},
    Insert: {screen: InsertLight},
    AllDevice: {screen: AllDeviceScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#294b57',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  },
);

const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: {screen: SettingsScreen},
    Details: {screen: DetailsScreen},
    Store: {screen: StoreScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#294b57',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  },
);
const NewStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    New: {screen: NewScreen},
    InsertLight: {screen: InsertLight},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#294b57',
      },
      headerTintColor: '#FFFFFF',
      title: 'New',
      //Header title
    },
  },
);
const StoreStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Store: {screen: StoreScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#294b57',
      },
      headerTintColor: '#FFFFFF',
      title: 'Store',
      //Header title
    },
  },
);
const QRCodeStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    QRCode: {screen: QRCodeScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#294b57',
      },
      headerTintColor: '#FFFFFF',
      title: 'QRCode',
      //Header title
    },
  },
);

// Bottom Bar
const App = createBottomTabNavigator(
  {
    Home: {screen: HomeStack},
    Store: {screen: StoreStack},
    New: {screen: NewStack},
    QRCode: {screen: QRCodeStack},
    Settings: {screen: SettingsStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Settings') {
          iconName = `settings-outline`;
        } else if (routeName === 'Store') {
          iconName = `pricetags-outline`;
        } else if (routeName === 'QRCode') {
          iconName = `qr-code-outline`;
        } else if (routeName === 'New') {
          iconName = `add-circle-outline`;
        }
        return <IconComponent name={iconName} size={28} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#294b57',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(App);
