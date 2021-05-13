import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './style.js';

const MainButton = ({callback, title, type = 'primary'}) => {
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

  function getType() {
    if (type === 'primary') {
      return styles.primary;
    } else {
      return styles.secondary;
    }
  }

  return (
    <TouchableOpacity
      onPress={callback}
      style={[style.saveButton, getType().saveButton]}>
      <Text style={[style.saveText, getType().saveText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
