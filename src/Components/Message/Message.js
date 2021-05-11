import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import style from './style.js';

const Message = ({message, setMessage, type}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message !== '') {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setMessage('');
      }, 4000);
    }
  }, [message, setMessage]);

  function getClass() {
    switch (type) {
      case 'success':
        return style.success;
      case 'error':
        return style.error;
      default:
        return style.alert;
    }
  }

  function showError() {
    if (visible) {
      return (
        <View style={[style.container, getClass()]}>
          <Text style={style.message}>{message}</Text>
        </View>
      );
    }
    return null;
  }

  return showError();
};

export default Message;
