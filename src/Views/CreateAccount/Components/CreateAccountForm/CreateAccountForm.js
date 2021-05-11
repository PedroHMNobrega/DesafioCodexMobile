import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import style from './style.js';
import {MainTextInput} from '../../../../Components/MainTextInput';
import {useNavigation} from '@react-navigation/native';
import {MainButton} from '../../../../Components/MainButton';
import {userApi} from '../../../../api/userApi.js';

const CreateAccountForm = ({error, setError}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigation();

  async function handleCreate() {
    try {
      await userApi.createUser(name, email, password);
      navigator.goBack();
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Fazer Cadastro</Text>
      <ScrollView style={style.form}>
        <MainTextInput value={name} setValue={setName} label={'Name'} />
        <MainTextInput value={email} setValue={setEmail} label={'Email'} />
        <MainTextInput
          value={password}
          setValue={setPassword}
          label={'Senha'}
        />
        <MainButton title={'CADASTRAR'} callback={handleCreate} />
      </ScrollView>
    </View>
  );
};

export default CreateAccountForm;
