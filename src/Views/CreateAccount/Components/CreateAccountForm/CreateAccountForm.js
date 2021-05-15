import React, {useContext, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import style from './style.js';
import {MainTextInput} from '../../../../Components/MainTextInput';
import {useNavigation} from '@react-navigation/native';
import {MainButton} from '../../../../Components/MainButton';
import {userApi} from '../../../../api/userApi.js';
import {DataContext} from '../../../../Providers/messageProvider.js';

const CreateAccountForm = ({error, setError}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigation();
  const {displayMessage, setLoading} = useContext(DataContext);

  async function handleCreate() {
    setLoading(true);
    try {
      await userApi.createUser(name, email, password);
      navigator.goBack();
      displayMessage('success', 'Usuário cadastrado com sucesso!');
    } catch (e) {
      displayMessage('error', e.message);
    }
    setLoading(false);
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Fazer Cadastro</Text>
      <ScrollView style={style.form}>
        <MainTextInput value={name} setValue={setName} label={'Nome'} />
        <MainTextInput value={email} setValue={setEmail} label={'Email'} />
        <MainTextInput
          value={password}
          setValue={setPassword}
          label={'Senha'}
          password={true}
        />
        <MainButton title={'CADASTRAR'} callback={handleCreate} />
      </ScrollView>
    </View>
  );
};

export default CreateAccountForm;
