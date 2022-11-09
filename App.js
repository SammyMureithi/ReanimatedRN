import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import MainScreen from './MainScreen';
import Entering from './Screens/Entering';
import ShareValue from './Screens/ShareValue';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Share Value" component={ShareValue} />
        <Stack.Screen name="Entering" component={Entering} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
