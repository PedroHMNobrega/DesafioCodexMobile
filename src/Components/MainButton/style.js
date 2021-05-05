import {StyleSheet} from 'react-native';
import {CRIMSON2, FONT_FAMILY_BOLD, WHITE} from '../../styles/styles.js';

const style = StyleSheet.create({
  saveButton: {
    alignItems: 'center',
    backgroundColor: CRIMSON2,
    width: 150,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  saveText: {
    color: WHITE,
    fontSize: 18,
    fontFamily: FONT_FAMILY_BOLD,
  },
});

export default style;
