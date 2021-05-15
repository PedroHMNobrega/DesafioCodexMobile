import React, {useState} from 'react';
import {BackHandler, FlatList, Text, View} from 'react-native';
import style from './style.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {taskApi} from '../../../../api/taskApi.js';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {logout} from '../../../../services/authentication.js';
import {Task} from '../Task';
import {AddTask} from '../AddTask';
import {UpdateTask} from '../UpdateTask';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const navigator = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      listTasks();
    }, [showAddTask, selectedTask]),
  );

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (showAddTask) {
          setShowAddTask(false);
          return true;
        } else {
          BackHandler.exitApp();
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [showAddTask]),
  );

  async function listTasks() {
    try {
      const apiTasks = await taskApi.getTasks();
      setTasks(apiTasks);
    } catch (e) {
      await logout();
      navigator.replace('Login');
    }
  }

  function handleAddTask() {
    setShowAddTask(true);
  }

  return (
    <>
      {showAddTask && <AddTask setShowAddTask={setShowAddTask} />}
      {selectedTask !== null && (
        <UpdateTask setSelectedTask={setSelectedTask} task={selectedTask} />
      )}
      <View style={style.container}>
        <FlatList
          data={tasks}
          keyExtractor={task => task._id}
          ListHeaderComponent={
            <View style={style.taskTitleContainer}>
              <Text style={style.title}>Tarefas</Text>
              <TouchableOpacity onPress={handleAddTask}>
                <View style={style.addTaskButton}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    style={style.addTaskIcon}
                    size={25}
                  />
                </View>
              </TouchableOpacity>
            </View>
          }
          renderItem={({item}) => (
            <Task
              task={item}
              listTasks={listTasks}
              setSelectedTask={setSelectedTask}
            />
          )}
          style={style.scrollContainer}
        />
      </View>
    </>
  );
};

export default TaskList;
