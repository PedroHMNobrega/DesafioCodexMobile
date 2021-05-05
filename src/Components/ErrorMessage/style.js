import {StyleSheet} from 'react-native';
import {
  CRIMSON,
  FONT_FAMILY_MEDIUM,
  FONT_SIZE_MEDIUM,
  WHITE,
} from '../../styles/styles.js';

const style = StyleSheet.create({
  container: {
    backgroundColor: CRIMSON,
    padding: 20,
  },
  message: {
    textAlign: 'center',
    color: WHITE,
    fontFamily: FONT_FAMILY_MEDIUM,
    fontSize: FONT_SIZE_MEDIUM,
  },
});

export default style;
