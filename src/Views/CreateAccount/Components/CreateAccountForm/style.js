import {Dimensions, StyleSheet} from 'react-native';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_MEDIUM,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_XX_LARGE,
  WHITE,
} from '../../../../styles/styles.js';

const width = Dimensions.get('screen').width;

const style = StyleSheet.create({
  container: {
    flex: 7,
    paddingHorizontal: 30,
    width: width,
  },
  title: {
    color: WHITE,
    textAlign: 'center',
    fontSize: FONT_SIZE_XX_LARGE,
    fontFamily: FONT_FAMILY_BOLD,
  },
  form: {
  },
});

export default style;
