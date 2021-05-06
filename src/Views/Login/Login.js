import React from 'react';
import {View} from 'react-native';
import style from './style.js';
import {LoginHeader} from './Components/LoginHeader';
import {LoginForm} from './Components/LoginForm';

const Login = () => {
  return (
    <View style={style.container}>
      <LoginHeader />
      <LoginForm />
    </View>
  );
};

export default Login;
