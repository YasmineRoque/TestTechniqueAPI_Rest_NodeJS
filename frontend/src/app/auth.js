// office/src/app/auth.js

import _ from "lodash";

const STORAGE_KEY = "TestTechnique:auth";

const initialValues = {
  username: "",
  identifier: "",
  expire: -1,
  token: null,
  loggedIn: false,
};

export const setAuth = async (auth) => {
  const defaults = {
    username: undefined,
    identifier: undefined,
    expire: undefined,
    token: undefined,
    loggedIn: undefined,
  };
  const storage = JSON.stringify(_.defaults(defaults, auth), null);
  localStorage.setItem(STORAGE_KEY, storage);
};

export const getAuth = () => {
  const storage = localStorage.getItem(STORAGE_KEY);
  const auth = JSON.parse(storage);

  if (!_.isObjectLike(auth)) {
    return null;
  }

  return _.defaults(auth, initialValues);
};

export const removeAuth = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getAuthorizationHeader = () => {
  const auth = getAuth();
  return _.get(auth, "token", null)
    ? { Authorization: `Bearer ${auth.token}` }
    : null;
};
