import React from 'react';
import {Text, TextInput, View} from 'react-native';
import style from './style.js';
import {WHITE} from '../../styles/styles.js';

const MainTextInput = ({
  label,
  placeholder,
  value,
  setValue,
  error = false,
  password = false,
  labelColor = WHITE,
}) => {
  function getStyle() {
    if (error) {
      return [style.textInput, style.error];
    }
    return style.textInput;
  }

  return (
    <View style={style.inputContainer}>
      <Text style={[style.inputLabel, {color: labelColor}]}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={text => setValue(text.trimStart())}
        style={getStyle()}
        secureTextEntry={password}
      />
    </View>
  );
};

export default MainTextInput;
