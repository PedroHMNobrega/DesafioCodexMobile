import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import style from './style.js';

const Task = ({task, setSelectedTask}) => {
  const name = task.name;
  const priority = task.priority;

  function getStyle() {
    if (priority === 'alta') {
      return style.highPriority;
    } else {
      return style.lowPriority;
    }
  }

  function handleSelectTask() {
    setSelectedTask(task);
  }

  return (
    <TouchableWithoutFeedback onPress={handleSelectTask}>
      <View style={style.taskContainer}>
        <Text style={style.taskName}>{name}</Text>
        <View style={[style.taskPriorityContainer, getStyle()]}>
          <Text style={style.taskPriority}>{priority.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Task;
