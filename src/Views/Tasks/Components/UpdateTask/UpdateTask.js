import React, {useContext, useState} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import style from './style.js';
import {BLACK} from '../../../../styles/styles.js';
import {MainTextInput} from '../../../../Components/MainTextInput';
import {DataContext} from '../../../../Providers/messageProvider.js';
import {MainPicker} from '../../../../Components/MainPicker';
import {MainButton} from '../../../../Components/MainButton';
import {taskApi} from '../../../../api/taskApi.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const UpdateTask = ({setSelectedTask, task}) => {
  const [name, setName] = useState(task.name);
  const [nameError, setNameError] = useState(false);
  const [priority, setPriority] = useState(task.priority);
  const id = task._id;
  const {displayMessage, setLoading} = useContext(DataContext);

  async function handleUpdate() {
    if (name.length === 0) {
      setNameError(true);
      return;
    }

    setLoading(true);
    try {
      await taskApi.updateTask(id, name, priority);
      displayMessage('success', 'Tarefa editada com sucesso!');
      setSelectedTask(null);
    } catch (e) {
      displayMessage('error', 'Erro ao editar tarefa.');
    }
    setLoading(false);
  }

  function handleGoBack() {
    setSelectedTask(null);
  }

  async function handleDelete() {
    setLoading(true);
    try {
      await taskApi.deleteTask(id);
      displayMessage('success', 'Tarefa deletada com sucesso!');
      setSelectedTask(null);
    } catch (e) {
      displayMessage('error', 'Erro ao deletar tarefa.');
    }
    setLoading(false);
  }

  return (
    <>
      <StatusBar backgroundColor={BLACK} barStyle={'light-content'} />
      <View style={style.container}>
        <View style={style.form}>
          <TouchableOpacity onPress={handleGoBack} style={style.goBackButton}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} />
          </TouchableOpacity>
          <Text style={style.title}>Editar Tarefa</Text>
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
          <View style={style.deleteTaskContainer}>
            <TouchableOpacity style={style.deleteTaskButton} onPress={handleDelete}>
              <Text style={style.deleteTask}>Apagar Tarefa</Text>
            </TouchableOpacity>
          </View>
          <MainButton
            title={'Editar'}
            callback={handleUpdate}
            type={'secondary'}
          />
        </View>
      </View>
    </>
  );
};

export default UpdateTask;
