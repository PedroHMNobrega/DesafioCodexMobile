async function getRequest(url, token) {
  const response = await fetch(url, {
    method: 'GET',
    headers: getHeaders(token),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
}

async function deleteRequest(url, token) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: getHeaders(token),
  });

  if (!response.status === 204) {
    throw new Error('Erro ao remover tarefa.');
  }
}

async function postRequest(body, url, token) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: getHeaders(token),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }
  return result;
}

async function putRequest(url, body, token) {
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: getHeaders(token),
  });

  if (!response.status === 204) {
    throw new Error('Erro ao editar tarefa.');
  }
}

function getHeaders(token) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  if (token) {
    headers.append('Authorization', 'Bearer ' + token);
  }
  return headers;
}

export const request = {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
};
