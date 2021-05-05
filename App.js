import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Home} from './src/Views/Home';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Provider from './src/Providers/userInfoProvider.js';
import {createStackNavigator} from '@react-navigation/stack';
import {COR_DE_FUNDO} from './src/styles/styles.js';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Provider>
        <SafeAreaView style={style.container}>
          <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen
              name={'Home'}
              component={Home}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_DE_FUNDO,
    width: '100%',
  },
});

export default App;
