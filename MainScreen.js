import React from 'react';
import {Button, View} from 'react-native';

function MainScreen({navigation}) {
  return (
    <View>
      <Button
        title="Share Value"
        onPress={() => navigation.navigate('Share Value')}
      />
      <Button
        title="Entering"
        onPress={() => navigation.navigate('Entering')}
      />
    </View>
  );
}

export default MainScreen;
