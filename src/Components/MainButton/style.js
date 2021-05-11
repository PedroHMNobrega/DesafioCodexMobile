import {StyleSheet} from 'react-native';
import {BLACK, FONT_FAMILY_MEDIUM, WHITE} from '../../styles/styles.js';

const style = StyleSheet.create({
  saveButton: {
    alignItems: 'center',
    backgroundColor: WHITE,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 5,
    marginTop: 10,
  },
  saveText: {
    color: BLACK,
    fontSize: 18,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
});

export default style;
