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
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
  },
  message: {
    textAlign: 'center',
    color: WHITE,
    fontFamily: FONT_FAMILY_MEDIUM,
    fontSize: FONT_SIZE_MEDIUM,
  },
  success: {
    backgroundColor: '#0cc15e',
  },
  error: {
    backgroundColor: 'crimson',
  },
  alert: {
    backgroundColor: '#ffc700',
  },
});

export default style;
