import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mask: {
    position: 'absolute',
    zIndex: 999999,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    padding: 30,
  },
});

export default style;
