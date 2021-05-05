import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import style from './style.js';

const ErrorMessage = ({error, setError, message}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (error) {
      setVisible(true);
      setError(false);
      setTimeout(() => setVisible(false), 4000);
    }
  }, [error, setError]);

  function showError() {
    if (visible) {
      return (
        <View style={style.container}>
          <Text style={style.message}>{message}</Text>
        </View>
      );
    } else {
      return null;
    }
  }

  return showError();
};

export default ErrorMessage;
