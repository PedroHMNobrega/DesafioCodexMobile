import {Dimensions, StyleSheet} from 'react-native';
import {
  FONT_FAMILY_MEDIUM,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_X_LARGE,
  FONT_SIZE_XX_LARGE,
  WHITE,
} from '../../../../styles/styles.js';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    width: width,
    height: height,
    zIndex: 9999,
    padding: 20,
  },
  form: {
    marginTop: 50,
    backgroundColor: WHITE,
    padding: 20,
    borderRadius: 20,
  },
  goBackButton: {
    height: 40,
    width: 40,
    marginTop: -10,
    marginLeft: -10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY_MEDIUM,
    fontSize: FONT_SIZE_X_LARGE,
    marginBottom: 5,
    marginTop: -10,
  },
});

export default style;
