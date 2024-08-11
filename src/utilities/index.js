/* eslint-disable no-unused-vars */
import axios from "axios";

const env = process.env.REACT_APP_ENV;

const getBaseApi = () => {
 let baseApi = process.env.REACT_APP_API_PRODUCTION;
 if (env === "local") {
  baseApi = process.env.REACT_APP_API_LOCAL;
 }
 return baseApi;
};

const apiRequest = async ({ url, method = "GET", body = null }) => {
 const baseUrl = getBaseApi();
 try {
  const options = {
   method,
   url: `${baseUrl}${url}`,
   headers: {
    "Content-Type": "application/json",
   },
   ...(body && { data: body }),
  };
  const response = await axios(options);
  return response;
 } catch (e) {
  throw e.response ? e.response.data : e;
 }
};

const getLocalStorage = (key) => {
 return localStorage.getItem(key);
};

const setLocalStorage = (key, value) => {
 localStorage.setItem(key, value);
 dispatchEvent(new Event("storage"));
};

const clearLocalStorage = (key) => {
 localStorage.removeItem(key);
 dispatchEvent(new Event("storage"));
};

export { apiRequest, getLocalStorage, setLocalStorage, clearLocalStorage };
