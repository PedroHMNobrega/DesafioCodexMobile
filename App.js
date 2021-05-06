import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Login} from './src/Views/Login';
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
      <StatusBar backgroundColor={COR_DE_FUNDO} barStyle={'light-content'} />
      <Provider>
        <SafeAreaView style={style.container}>
          <Stack.Navigator initialRouteName={'Login'}>
            <Stack.Screen
              name={'Login'}
              component={Login}
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
