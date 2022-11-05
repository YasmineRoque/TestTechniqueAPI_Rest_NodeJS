// office/src/app/http.js

import axios from "axios";
import _ from "lodash";
import { getAuthorizationHeader } from "./auth";

const http = axios.create({
  baseURL: "http://localhost:5000",
  // timeout: 8500,
  headers: { "Test-Technique": "frontend", ...getAuthorizationHeader() },
  validateStatus: (status) => status < 300,
});

const handleHttpResponse = ({ data, status, config, request }) => {
  return {
    data: _.get(data, "data", {}),
    status: status,
    error: request.statusText,
    method: config.method,
    message: _.get(data, "message", "No data"),
  };
};

const handleHttpError = ({ response, request, message, config }) => {
  if (response) {
    return {
      data: response.data,
      status: response.status,
      error: request.statusText,
      method: config.method,
      message: message,
    };
  } else if (request) {
    return {
      data: config,
      status: request.status,
      error: request.statusText,
      method: config.method,
      message: message,
    };
  } else {
    return {
      data: config,
      status: null,
      error: "Request can't be sent",
      method: config.method,
      message: message,
    };
  }
};

const fetcher = async ({ endpoint, token, user }) => {
  const headers = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (_.isString(user.token) && _.get(user, "expire", 0) > 0) {
    headers.Authorization = `Bearer ${user.token}`;
  }

  const response = await http
    .get(endpoint, { headers })
    .then(handleHttpResponse)
    .catch(handleHttpError);

  return response;
};

const longFetcher = async ({ endpoint, token, user }) => {
  const headers = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (_.isString(user.token) && _.get(user, "expire", 0) > 0) {
    headers.Authorization = `Bearer ${user.token}`;
  }

  const response = await http
    .get(endpoint, {
      timeout: 25000,
      headers,
    })
    .then(handleHttpResponse)
    .catch(handleHttpError);

  return response;
};

export { fetcher, longFetcher, http, handleHttpResponse, handleHttpError };
