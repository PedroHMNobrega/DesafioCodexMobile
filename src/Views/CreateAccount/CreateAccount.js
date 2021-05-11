import React, {useState} from 'react';
import style from './style.js';
import {View} from 'react-native';
import {CreateAccountForm} from './Components/CreateAccountForm';
import {LoginHeader} from '../Login/Components/LoginHeader';
import {Message} from '../../Components/Message';

const CreateAccount = () => {
  const [error, setError] = useState('');

  return (
    <View style={style.container}>
      <Message message={error} setMessage={setError} type={'error'} />
      <LoginHeader />
      <CreateAccountForm error={error} setError={setError} />
    </View>
  );
};

export default CreateAccount;
