import React from 'react';
import {StatusBar, View} from 'react-native';
import style from './style.js';
import {TasksHeader} from './Components/TasksHeader';
import {TaskList} from './Components/TaskList';
import {WHITE} from '../../styles/styles.js';

const Tasks = () => {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <TasksHeader />
      <TaskList />
    </View>
  );
};

export default Tasks;
