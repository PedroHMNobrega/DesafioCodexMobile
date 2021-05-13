import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import style from './style.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {taskApi} from '../../../../api/taskApi.js';
import {useNavigation} from '@react-navigation/native';
import {logout} from '../../../../services/authentication.js';
import {Task} from '../Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigator = useNavigation();

  async function listTasks() {
    try {
      const apiTasks = await taskApi.getTasks();
      setTasks(apiTasks);
    } catch (e) {
      navigator.replace('Login');
      await logout();
    }
  }

  useEffect(() => {
    listTasks();
  }, []);

  return (
    <View style={style.container}>
      <View style={style.taskContainer}>
        <Text style={style.title}>Tarefas</Text>
        <TouchableOpacity>
          <View style={style.addTaskButton}>
            <FontAwesomeIcon
              icon={faPlus}
              style={style.addTaskIcon}
              size={25}
            />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={task => task._id}
        renderItem={({item}) => <Task task={item} listTasks={listTasks} />}
      />
    </View>
  );
};

export default TaskList;
