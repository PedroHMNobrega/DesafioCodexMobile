import React from 'react';
import {Image, View} from 'react-native';
import style from './style.js';
import {LOGO} from '../../../../util/constants.js';

const LoginHeader = () => {
  return (
    <View style={style.container}>
      <Image source={LOGO} resizeMode={'contain'} style={style.logo} />
    </View>
  );
};

export default LoginHeader;
