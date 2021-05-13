import React, {useContext, useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import style from './style.js';
import {BLACK} from '../../styles/styles.js';
import {MainTextInput} from '../../Components/MainTextInput';
import {DataContext} from '../../Providers/messageProvider.js';
import {MainPicker} from '../../Components/MainPicker';
import {MainButton} from '../../Components/MainButton';
import {taskApi} from '../../api/taskApi.js';

const AddTask = ({setShowAddTask}) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [priority, setPriority] = useState('alta');
  const {displayMessage} = useContext(DataContext);

  async function handleAdd() {
    if (name.length === 0) {
      setNameError(true);
      return;
    }

    try {
      await taskApi.addTask(name, priority);
      displayMessage('success', 'Tarefa adicionada com sucesso!');
      setShowAddTask(false);
    } catch (e) {
      displayMessage('error', 'Erro ao adicionar tarefa.');
    }
  }

  return (
    <>
      <StatusBar backgroundColor={BLACK} barStyle={'light-content'} />
      <View style={style.container}>
        <View style={style.form}>
          <Text style={style.title}>Adicionar Tarefa</Text>
          <MainTextInput
            label={'Nome'}
            value={name}
            setValue={setName}
            labelColor={BLACK}
            error={nameError}
          />
          <MainPicker
            value={priority}
            setValue={setPriority}
            label={'Prioridade'}
            labelColor={BLACK}
            options={[
              {label: 'Alta', value: 'alta'},
              {label: 'Baixa', value: 'baixa'},
            ]}
          />
          <MainButton
            title={'Adicionar'}
            callback={handleAdd}
            type={'secondary'}
          />
        </View>
      </View>
    </>
  );
};

export default AddTask;
