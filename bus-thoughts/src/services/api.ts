import axios from "axios";
// import { auth } from "../../src/config/firebase.config";

const BASE_URL =
  process.env.NEXT_PUBLIC_SOCKET_URL! +
  (process.env.NEXT_PUBLIC_BASE_URL ?? "api/v1");

export const getHeaders = async () => {
  const headers = {};
  return headers;
};

export const getData = async (url: string, payload?: any) => {
  const data = axios
    .get(`${BASE_URL}${url}`, {
      headers: await getHeaders(),
      ...(payload && { params: payload }),
    })
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      if (!error?.response) {
        throw new Error(
          "The server is down at the moment, please try again later"
        );
      }
    });
  return data;
};

export const getResponseStatus = async (url: string, payload?: any) => {
  const status = await axios
    .get(`${BASE_URL}${url}`, {
      headers: await getHeaders(),
      ...(payload && { params: payload }),
    })
    .then((response: any) => {
      return response.status;
    })
    .catch((error: any) => {
      if (!error?.response) {
        throw new Error(
          "The server is down at the moment, please try again later"
        );
      }
    });
  return status;
};

export const postData = async (url: string, payload?: any) => {
  const data = axios
    .post(`${BASE_URL}${url}`, payload, {
      headers: await getHeaders(),
    })
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      if (!error?.response) {
        throw new Error(
          "The server is down at the moment, please try again later"
        );
      }
    });
  return data;
};

export const putData = async (url: string, payload?: any) => {
  const data = axios
    .put(`${BASE_URL}${url}`, payload, {
      headers: await getHeaders(),
    })
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      if (!error?.response) {
        throw new Error(
          "The server is down at the moment, please try again later"
        );
      }
    });
  return data;
};

export const patchData = async (url: string, payload?: any) => {
  const data = axios
    .patch(`${BASE_URL}${url}`, payload, {
      headers: await getHeaders(),
    })
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      if (!error?.response) {
        throw new Error(
          "The server is down at the moment, please try again later"
        );
      }
    });
  return data;
};

export const deleteData = async (url: string, payload?: any) => {
  const data = axios
    .delete(`${BASE_URL}${url}`, {
      headers: await getHeaders(),
      ...(payload && { params: payload }),
    })
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      if (!error?.response) {
        throw new Error(
          "The server is down at the moment, please try again later"
        );
      }
    });
  return data;
};
