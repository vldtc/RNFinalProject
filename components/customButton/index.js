import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text>Login</Text>
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
