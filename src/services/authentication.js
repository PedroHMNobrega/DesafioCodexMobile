import {userApi} from '../api/userApi.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const tokenKey = 'taskomp-tokenKey';

export const login = async (email, password) => {
  const token = await userApi.login(email, password);
  AsyncStorage.setItem(tokenKey, token);
};

export const logout = async () => {
  const token = getToken();
  try {
    await userApi.logout(token);
    AsyncStorage.removeItem(tokenKey);
  } catch (e) {
    AsyncStorage.removeItem(tokenKey);
  }
};

export const getToken = () => {
  return AsyncStorage.getItem(tokenKey);
};

export const verifyLogin = () => {
  const token = getToken();
  return token != null;
};
