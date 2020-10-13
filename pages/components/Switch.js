import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const App = ({value1}) => {
  const values = value1 === '1' ? true : false;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{transform: [{rotate: '270deg'}]}}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={'#f4f3f4'}
        onValueChange={toggleSwitch}
        value={values}
      />
    </View>
  );
};

export default App;
