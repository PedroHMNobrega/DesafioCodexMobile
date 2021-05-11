import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import style from './style.js';
import {MainTextInput} from '../../../../Components/MainTextInput';
import {useNavigation} from '@react-navigation/native';
import {MainButton} from '../../../../Components/MainButton';
import {login} from '../../../../services/authentication.js';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigator = useNavigation();

  async function handleLogin() {
    try {
      await login(email, password);
      navigator.push('Home');
    } catch (e) {
      setError(e.message);
    }
  }

  function handleCriarConta() {
    navigator.push('CreateAccount');
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Login</Text>
      <ScrollView style={style.form}>
        <MainTextInput value={email} setValue={setEmail} label={'Email'} />
        <MainTextInput
          value={password}
          setValue={setPassword}
          label={'Senha'}
        />
        <View style={style.createButtonContainer}>
          <TouchableOpacity style={style.createButton} onPress={handleCriarConta}>
            <Text style={style.createText}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
        <MainButton title={'LOGIN'} callback={handleLogin} />
      </ScrollView>
    </View>
  );
};

export default LoginForm;
