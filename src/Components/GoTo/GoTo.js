import React from 'react';
import style from './style.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const GoTo = ({size, icon, goTo, params = {}}) => {
  const navigator = useNavigation();

  function handleGoTo() {
    navigator.push(goTo, params);
  }

  return (
    <TouchableOpacity onPress={handleGoTo} style={style.iconContainer}>
      <FontAwesomeIcon icon={icon} size={size} />
    </TouchableOpacity>
  );
};

export default GoTo;
