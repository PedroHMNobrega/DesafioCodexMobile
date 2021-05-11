import React from 'react';
import {View} from 'react-native';
import style from './style.js';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const TaskList = () => {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text>Tarefas</Text>
        <TouchableOpacity>
          <View style={style.addTaskButton}>
            <FontAwesomeIcon icon={faPlus} style={style.addTaskIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskList;
