import {StyleSheet} from 'react-native';
import {BACKGROUND_COLOR, WHITE} from '../../styles/styles.js';

const style = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    flex: 1,
  },
  returnContainer: {
    paddingLeft: 20,
    paddingVertical: 20,
  },
  returnButton: {
    width: 50,
  },
  returnIcon: {
    color: WHITE,
  },
});

export default style;
