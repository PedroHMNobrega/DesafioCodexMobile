import React, {useContext} from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import style from './style.js';
import {DataContext} from '../../Providers/messageProvider.js';
import {BLACK, WHITE} from '../../styles/styles.js';

const Loading = () => {
  const {loading} = useContext(DataContext);

  return (
    loading && (
      <View style={style.mask}>
        <StatusBar backgroundColor={BLACK} barStyle={'light-content'} />
        <View style={style.loadingContainer}>
          <ActivityIndicator size="large" color={WHITE} />
        </View>
      </View>
    )
  );
};

export default Loading;
