import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import ShareValue from './Screens/ShareValue';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Share Value" component={ShareValue} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
