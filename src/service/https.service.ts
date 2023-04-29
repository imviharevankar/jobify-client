import axios from "axios";
// import { getSessionStorage } from "helper/storage";
// import { StorageKeys } from "util/storageKeys";

export const axiosPost = (
  url: string,
  body: object,
  contentType: string,
  authKeyExists: boolean,
) => {
  const headers = {
    "Content-Type": contentType,
    // ...(authKeyExists) && { Authorization: `Bearer ${getSessionStorage(StorageKeys.TOKEN)}` },
    ...(authKeyExists) && { Authorization: "" },
  };
  return axios.post(url, body, { headers });
};

export const axiosGet = (
  url: string,
  config?: object,
) => {
  const headers = {
    ...config,
    // ...(authKeyExists) && { Authorization: `Bearer ${getSessionStorage(StorageKeys.TOKEN)}` },
  };
  return axios.get(url, { headers });
};

export const axiosPatch = (
  url: string,
  body: object,
  contentType: string,
) => {
  const headers = {
    "Content-Type": contentType,
    // ...(authKeyExists) && { Authorization: `Bearer ${getSessionStorage(StorageKeys.TOKEN)}` },

  };
  return axios.patch(url, body, { headers });
};

export const axiosPut = (
  url: string,
  body: object,
  contentType: string,
) => {
  const headers = {
    "Content-Type": contentType,
    // ...(authKeyExists) && { Authorization: `Bearer ${getSessionStorage(StorageKeys.TOKEN)}` },

  };
  return axios.put(url, body, { headers });
};