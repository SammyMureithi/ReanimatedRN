import React from 'react';
import {Button, Text, View} from 'react-native';
import Animated, {Layout, SlideInRight} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';

function Entering() {
  const data = [
    {name: 'Mure', id: 1},
    {name: 'John', id: 2},
    {name: 'Lewis', id: 3},
    {name: 'Kiptoo', id: 4},
    {name: 'Ngugi', id: 5},
    {name: 'James', id: 6},
  ];
  const res = data.map(element => {
    return (
      <Animated.View
        entering={SlideInRight.delay(element.id * 255)}
        layout={Layout.springify()}
        key={element.id}>
        <Text>{element.name}</Text>
      </Animated.View>
    );
  });
  function addItem() {
    data.push({name: 'James', id: Math.random() * 10});
  }
  return (
    <SafeAreaView>
      <Animated.View>
        <Text>Entering</Text>
        {res}
      </Animated.View>
      <Button onPress={addItem} title="Add Item" />
    </SafeAreaView>
  );
}

export default Entering;
