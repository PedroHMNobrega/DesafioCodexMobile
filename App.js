import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Login} from './src/Views/Login';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Provider from './src/Providers/messageProvider.js';
import {createStackNavigator} from '@react-navigation/stack';
import {COR_DE_FUNDO} from './src/styles/styles.js';
import {CreateAccount} from './src/Views/CreateAccount';
import {Message} from './src/Components/Message';
import {Tasks} from './src/Views/Tasks';

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
          <Message />
          <Stack.Navigator initialRouteName={'Login'}>
            <Stack.Screen
              name={'Login'}
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={'CreateAccount'}
              component={CreateAccount}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={'Tasks'}
              component={Tasks}
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
