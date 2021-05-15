import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style.js';

const MainButton = ({callback, title, type = 'primary'}) => {
  function getType() {
    if (type === 'primary') {
      return styles.primary;
    } else {
      return styles.secondary;
    }
  }

  return (
    <View style={style.buttonContainer}>
      <TouchableOpacity
        onPress={callback}
        style={[style.saveButton, getType().saveButton]}>
        <Text style={[style.saveText, getType().saveText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  primary: {
    saveButton: style.saveButtonPrimary,
    saveText: style.saveTextPrimary,
  },
  secondary: {
    saveButton: style.saveButtonSecondary,
    saveText: style.saveTextSecondary,
  },
};

export default MainButton;
