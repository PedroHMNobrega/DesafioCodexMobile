import {Alert} from 'react-native';

export const deleteAlert = (title, message, callback) => {
  Alert.alert(
    title,
    message,
    [
    {
      text: 'Cancelar',
      style: 'cancel',
    },
    {
      text: 'Deletar',
      onPress: callback,
    },
  ]);
};
