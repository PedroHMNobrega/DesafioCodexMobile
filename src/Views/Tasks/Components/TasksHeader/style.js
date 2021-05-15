import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  FONT_FAMILY_MEDIUM,
  FONT_SIZE_LARGE,
  FONT_SIZE_XX_LARGE,
  WHITE,
} from '../../../../styles/styles.js';

const style = StyleSheet.create({
  container: {
    height: 58,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    color: BACKGROUND_COLOR,
    fontSize: FONT_SIZE_XX_LARGE,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  logoutText: {
    color: BACKGROUND_COLOR,
    fontSize: FONT_SIZE_LARGE,
    fontFamily: FONT_FAMILY_MEDIUM,
    marginRight: 5,
  },
  logoutIcon: {
    color: BACKGROUND_COLOR,
  },
});

export default style;
