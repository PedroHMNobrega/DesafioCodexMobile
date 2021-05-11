import {request} from './request.js';
import {apiUrl} from '../config/apiUrl.js';
import {getToken} from '../services/authentication.js';
import {stringUtil} from '../util/stringUtil.js';

async function getTasks(token) {
  return await request.getRequest(apiUrl + 'tasks', token);
}

async function addTask(name, priority) {
  [name] = stringUtil.trimString([name]);

  const body = {
    name: name,
    priority: priority,
  };
  await request.postRequest(body, apiUrl + 'tasks', getToken());
}

async function deleteTask(id) {
  await request.deleteRequest(apiUrl + 'task/' + id, getToken());
}

async function updateTask(id, name, priority) {
  [name] = stringUtil.trimString([name]);

  const body = {
    name: name,
    priority: priority,
  };
  await request.putRequest(apiUrl + 'task/' + id, body, getToken());
}

export const taskApi = {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
};
