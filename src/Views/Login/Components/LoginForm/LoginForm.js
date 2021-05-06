import React, {useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import style from './style.js';
import {MainTextInput} from '../../../../Components/MainTextInput';

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleLogin() {

  }

  return (
    <View style={style.container}>
      <Text>Login</Text>
      <ScrollView style={style.form}>
        <MainTextInput value={email} setValue={setEmail} label={'Email'} />
        <MainTextInput
          value={password}
          setValue={setPassword}
          label={'Senha'}
        />
        <Button title={'Entrar'} onPress={handleLogin} />
      </ScrollView>
    </View>
  );
};

export default LoginForm;
