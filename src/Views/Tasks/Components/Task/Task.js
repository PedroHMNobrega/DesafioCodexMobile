import React from 'react';
import {Text, View} from 'react-native';
import style from './style.js';

const Task = ({task, listTasks}) => {
  const id = task._id;
  const name = task.name;
  const priority = task.priority;

  function getStyle() {
    if (priority === 'alta') {
      return style.highPriority;
    } else {
      return style.lowPriority;
    }
  }

  return (
    <View style={style.taskContainer}>
      <Text style={style.taskName}>{name}</Text>
      <View style={[style.taskPriorityContainer, getStyle()]}>
        <Text style={style.taskPriority}>{priority.toUpperCase()}</Text>
      </View>
    </View>
  );
};

export default Task;
