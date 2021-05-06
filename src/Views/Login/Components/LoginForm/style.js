import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;

const style = StyleSheet.create({
  container: {
    flex: 7,
    paddingHorizontal: 30,
    width: width,
  },
  form: {
  }
});

export default style;
