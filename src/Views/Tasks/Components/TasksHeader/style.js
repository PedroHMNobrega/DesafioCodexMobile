import {StyleSheet} from 'react-native';
import {
  FONT_FAMILY_MEDIUM,
  FONT_SIZE_LARGE,
  FONT_SIZE_XX_LARGE,
  WHITE,
} from '../../../../styles/styles.js';

const style = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    color: WHITE,
    fontSize: FONT_SIZE_XX_LARGE,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  logoutText: {
    color: WHITE,
    fontSize: FONT_SIZE_LARGE,
    fontFamily: FONT_FAMILY_MEDIUM,
    marginRight: 10,
  },
  logoutIcon: {
    color: WHITE,
  },
});

export default style;
