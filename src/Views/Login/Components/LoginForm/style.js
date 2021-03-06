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
  createButtonContainer: {
    marginBottom: -15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  createButton: {
    paddingTop: 5,
    paddingLeft: 10,
  },
  createText: {
    color: WHITE,
    fontFamily: FONT_FAMILY_MEDIUM,
    fontSize: FONT_SIZE_MEDIUM,
  },
});

export default style;
