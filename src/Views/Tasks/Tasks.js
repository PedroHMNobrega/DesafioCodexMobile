import React from 'react';
import {View} from 'react-native';
import style from './style.js';
import {TasksHeader} from './Components/TasksHeader';
import {TaskList} from './Components/TaskList';

const Tasks = () => {
  return (
    <View style={style.container}>
      <TasksHeader />
      <TaskList />
    </View>
  );
};

export default Tasks;
