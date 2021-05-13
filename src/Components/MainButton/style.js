import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BLACK,
  FONT_FAMILY_MEDIUM,
  WHITE,
} from '../../styles/styles.js';

const style = StyleSheet.create({
  saveButton: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    elevation: 5,
  },
  saveText: {
    fontSize: 18,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  saveButtonPrimary: {
    borderRadius: 5,
    backgroundColor: WHITE,
    marginTop: 10,
  },
  saveTextPrimary: {
    color: BLACK,
  },
  saveButtonSecondary: {
    borderRadius: 15,
    backgroundColor: BACKGROUND_COLOR,
    marginTop: 20,
  },
  saveTextSecondary: {
    color: WHITE,
  },
});

export default style;
