import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  BLACK,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_LIGTH,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_X_LARGE,
  WHITE,
} from '../../../../styles/styles.js';

const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
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
