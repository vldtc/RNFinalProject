import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = props => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: '#fff000',
    borderRadius: 14,
  },
});

export default CustomButton;
