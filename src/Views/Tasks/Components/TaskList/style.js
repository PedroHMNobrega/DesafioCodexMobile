import {Dimensions, StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  FONT_FAMILY_BOLD,
  FONT_SIZE_X_LARGE,
  WHITE,
} from '../../../../styles/styles.js';

const style = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height - 100,
  },
  title: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_X_LARGE,
  },
  addTaskButton: {
    backgroundColor: BACKGROUND_COLOR,
    padding: 10,
    borderRadius: 100,
  },
  addTaskIcon: {
    color: WHITE,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    // paddingBottom: 10,
  },
  taskContainer: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default style;
