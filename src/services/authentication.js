import {userApi} from '../api/userApi.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const tokenKey = 'taskomp-tokenKey';

export const login = async (email, password) => {
  const token = await userApi.login(email, password);
  await AsyncStorage.setItem(tokenKey, token);
};

export const logout = async () => {
  const token = await getToken();
  try {
    await userApi.logout(token);
    await AsyncStorage.removeItem(tokenKey);
  } catch (e) {
    await AsyncStorage.removeItem(tokenKey);
  }
};

export const getToken = async () => {
  return await AsyncStorage.getItem(tokenKey);
};

export const verifyLogin = async () => {
  const token = await getToken();
  return token != null;
};
