import {StyleSheet} from 'react-native';
import {
  FONT_FAMILY_LIGTH,
  FONT_SIZE_MEDIUM,
  LIGHTERGRAY,
} from '../../styles/styles.js';

const style = StyleSheet.create({
  inputContainer: {
    paddingVertical: 10,
  },
  inputLabel: {
    fontSize: FONT_SIZE_MEDIUM,
    fontFamily: FONT_FAMILY_LIGTH,
    marginBottom: 5,
    marginLeft: 5,
  },
  pickerContainer: {
    borderRadius: 20,
    backgroundColor: LIGHTERGRAY,
  },
  pickerItem: {
    color: 'black',
  },
});

export default style;
