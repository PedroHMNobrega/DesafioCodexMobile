import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BLACK,
  FONT_FAMILY_MEDIUM,
  WHITE,
} from '../../styles/styles.js';

const style = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  saveButton: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    elevation: 5,
    marginTop: 10,
  },
  saveText: {
    fontSize: 18,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  saveButtonPrimary: {
    marginTop: 30,
    borderRadius: 30,
    width: 170,
    backgroundColor: WHITE,
  },
  saveTextPrimary: {
    color: BLACK,
  },
  saveButtonSecondary: {
    borderRadius: 15,
    backgroundColor: BACKGROUND_COLOR,
  },
  saveTextSecondary: {
    color: WHITE,
  },
});

export default style;
