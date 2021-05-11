import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import style from './style.js';
import {DataContext} from '../../Providers/messageProvider.js';

const Message = () => {
  const [visible, setVisible] = useState(false);
  const {type, message, resetMessage} = useContext(DataContext);

  useEffect(() => {
    if (message !== '') {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        resetMessage();
      }, 4000);
    }
  }, [message, resetMessage]);

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
