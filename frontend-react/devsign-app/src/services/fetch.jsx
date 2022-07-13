const headers = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
  'Access-Control-Allow-Origin':'*'
});

const get = async (url) => {
  console.log('url', url)
  const response = await fetch(url, {
    method: "GET",
    headers: headers(),
  });
  return await response.json();
};

const post = async (url, body) => {
  const response = await fetch(url, {
    mode: 'no-cors',
    method: "POST",
    headers: headers(),
    body,
  });
  return await response.json();
};

const put = async (url, body) => {
  const response = await fetch(url, {
    mode: 'no-cors',
    method: "PUT",
    headers: headers(),
    body,
  });
  return await response.json();
};

const _delete = async (url) => {
  const response = await fetch(url, {
    mode: 'no-cors',
    method: "DELETE",
    headers: headers(),
  });
  return await response.json();
};

export const http = {
  get,
  post,
  put,
  delete: _delete,
};