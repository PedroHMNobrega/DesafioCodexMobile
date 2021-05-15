import React, {useState} from 'react';
import style from './style.js';
import {TouchableOpacity, View} from 'react-native';
import {CreateAccountForm} from './Components/CreateAccountForm';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

const CreateAccount = () => {
  const [error, setError] = useState('');
  const navigator = useNavigation();

  function handleGoBack() {
    navigator.goBack();
  }

  return (
    <View style={style.container}>
      <View style={style.returnContainer}>
        <TouchableOpacity style={style.returnButton} onPress={handleGoBack}>
          <FontAwesomeIcon icon={faArrowLeft} size={30} style={style.returnIcon} />
        </TouchableOpacity>
      </View>
      <CreateAccountForm error={error} setError={setError} />
    </View>
  );
};

export default CreateAccount;
