import {StyleSheet} from 'react-native';
import {
  BLACK,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_LIGTH,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  WHITE,
} from '../../../../styles/styles.js';

const style = StyleSheet.create({
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
  taskName: {
    color: BLACK,
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_LARGE,
    width: '60%',
  },
  taskPriorityContainer: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  taskPriority: {
    color: WHITE,
    fontFamily: FONT_FAMILY_LIGTH,
    fontSize: FONT_SIZE_MEDIUM,
  },
  highPriority: {
    backgroundColor: 'crimson',
  },
  lowPriority: {
    backgroundColor: '#0cc15e',
  },
});

export default style;
