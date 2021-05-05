import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './style.js';

const MainButton = ({callback, title}) => {
  return (
    <TouchableOpacity onPress={callback} style={style.saveButton}>
      <Text style={style.saveText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
