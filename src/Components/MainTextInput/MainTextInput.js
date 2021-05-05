import React from 'react';
import {Text, TextInput, View} from 'react-native';
import style from './style.js';

const MainTextInput = ({label, placeholder, value, setValue, error}) => {
  function getStyle() {
    if (error) {
      return [style.textInput, style.error];
    }
    return style.textInput;
  }

  return (
    <View style={style.inputContainer}>
      <Text style={style.inputLabel}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={text => setValue(text.trimStart())}
        style={getStyle()}
      />
    </View>
  );
};

export default MainTextInput;
