import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function ShareValue() {
  const offset = useSharedValue(0);
  const pressed = useSharedValue(false);
  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value == true ? '#FEEF86' : '#001972',
      transform: [{scale: pressed.value == true ? 1.2 : 1}],
    };
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(offset.value)}],
    };
  });
  const handleTapGesture = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
    },
  });
  return (
    <View>
      <Animated.View style={[animatedStyle, style.box]}></Animated.View>
      <Button
        title="Move"
        onPress={() => (offset.value = Math.random() * 255)}
      />
      <Text>Tap Gesturem</Text>
      <TapGestureHandler onGestureEvent={handleTapGesture}>
        <Animated.View style={[style.ball, uas]} />
      </TapGestureHandler>
    </View>
  );
}
const style = StyleSheet.create({
  box: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
  },
  ball: {
    borderRadius: 12,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default ShareValue;
