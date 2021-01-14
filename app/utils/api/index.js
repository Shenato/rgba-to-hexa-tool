async function handleResponse(response, bypass = false, silent = false) {
  if (!bypass && (response.status < 200 || response.status >= 300)) {
    if (!silent) {
      const responseBodyText = await response.text();
      console.error(responseBodyText);
    }
    throw response;
  }
}

async function callApi({
  method = "GET",
  hasBody = false,
  url,
  body,
  options = {},
}) {
  const response = await fetch(url, {
    method,
    headers: {
      ...(hasBody && { "Content-Type": "application/json" }),
    },
    ...(hasBody && body && { body: JSON.stringify(body) }),
  });
  await handleResponse(response, options.bypass, options.silent);
  try {
    return await response.json();
  } catch (e) {
    return undefined;
  }
}

export default {
  get: (url, options) => callApi({ url, options }),
  post: (url, body, options) =>
    callApi({
      method: "POST",
      hasBody: true,
      url,
      body,
      options,
    }),
  put: (url, body, options) =>
    callApi({
      method: "PUT",
      hasBody: true,
      url,
      body,
      options,
    }),
  patch: (url, body, options) =>
    callApi({
      method: "PATCH",
      hasBody: true,
      url,
      body,
      options,
    }),
  destroy: (url, body, options) =>
    callApi({
      method: "DELETE",
      url,
      body,
      options,
    }),
};
