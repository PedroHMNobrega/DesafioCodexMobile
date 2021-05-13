import React from 'react';
import style from './style.js';
import {Picker} from '@react-native-picker/picker';
import {Text, View} from 'react-native';
import {WHITE} from '../../styles/styles.js';

const MainPicker = ({value, setValue, label, options, labelColor = WHITE}) => {
  return (
    <View style={style.inputContainer}>
      <Text style={[style.inputLabel, {color: labelColor}]}>{label}</Text>
      <View style={style.pickerContainer}>
        <Picker
          selectedValue={value}
          onValueChange={itemValue => setValue(itemValue)}>
          {options.map((item, index) => (
            <Picker.Item
              label={item.label}
              value={item.value}
              key={index}
              style={style.pickerItem}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default MainPicker;
