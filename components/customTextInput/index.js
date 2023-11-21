import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CustomTextInput = props => {
  return (
    <View>
      <TextInput
        placeholder="Hello"
        onChangeText={props.onChangedText}
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 16,
    backgroundColor: '#00bbff',
    width: 300,
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
});

export default CustomTextInput;
