import {StyleSheet} from 'react-native';
import {
  BLACK,
  FONT_FAMILY_LIGTH,
  FONT_SIZE_MEDIUM,
  LIGHTERGRAY,
  WHITE,
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
    color: WHITE,
  },
  textInput: {
    borderRadius: 20,
    backgroundColor: LIGHTERGRAY,
    padding: 15,
    alignItems: 'center',
    color: BLACK,
  },
  error: {
    borderWidth: 2,
    borderColor: 'crimson',
  },
});

export default style;
