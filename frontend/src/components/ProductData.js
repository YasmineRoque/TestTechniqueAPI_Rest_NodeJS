import {
  http,
  handleHttpResponse,
  handleHttpError,
  fetcher,
} from "../app/http";
import useSWR from "swr";
import { getAuthorizationHeader } from "../app/auth";
import { useSelector } from "react-redux";
import { selectUser } from "../app/authSlice";

export const createProduct = async ({ data }) => {
  const authHeader = getAuthorizationHeader();

  return await http
    .post(`/create`, data, {
      headers: {
        ...authHeader,
      },
    })
    .then(handleHttpResponse)
    .catch(handleHttpError);
};

export const useProducts = ({ isUpdated }) => {
  const user = useSelector(selectUser);
  const { data, error, mutate } = useSWR(
    {
      endpoint: `/create`,
      user,
    },
    fetcher
  );

  if (isUpdated) {
    mutate(data);
  }

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useProduct = ({ id, ...swrOptions }) => {
  const user = useSelector(selectUser);
  const endpoint = id ? { endpoint: `/product/${id}`, user } : null;
  const { data, error } = useSWR(endpoint, fetcher, swrOptions);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const updateProduct = async ({ id, data }) => {
  const authHeader = getAuthorizationHeader();

  return await http
    .patch(`/maj/${id}`, data, {
      headers: {
        ...authHeader,
      },
    })
    .then(handleHttpResponse)
    .catch(handleHttpError);
};

export const deleteProduct = async ({ id }) => {
  const authHeader = getAuthorizationHeader();

  return await http
    .delete(`/delete${id}`, {
      headers: {
        ...authHeader,
      },
    })
    .then(handleHttpResponse)
    .catch(handleHttpError);
};
