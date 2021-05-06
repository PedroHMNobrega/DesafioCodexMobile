import {request} from './request.js';
import {apiUrl} from '../config/apiUrl.js';

async function login(email, password) {
  const body = {
    email: email,
    password: password,
  };
  const response = await request.postRequest(body, apiUrl + 'users/login');
  return response.access_token;
}

async function logout(token) {
  await request.getRequest(apiUrl + 'users/logout', token);
}

async function createUser(name, email, password) {
  const body = {
    name: name,
    email: email,
    password: password,
  };
  await request.postRequest(body, apiUrl + 'users');
}

export const userApi = {
  login,
  logout,
  createUser,
};
