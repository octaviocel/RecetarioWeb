import axios from "axios";
import SecureLS from "secure-ls";
import createAuthRefreshInterceptor from "axios-auth-refresh";

import { baseURL } from "../utils/constants";

const ls = new SecureLS({ encodingType: "aes" });

const httpClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshAuthLogic = async (failedRequest) => {
  const token = ls.get("_accessToken");
  if (token) {
    axios
      .post(
        `${baseURL}/auth/refresh`,
        {},
        {
          headers: {
            Authorization: "Bearer " + JSON.parse(token),
          },
        }
      )
      .then(async (tokenResponse) => {
        const aT = tokenResponse.data.accessToken;
        const rT = tokenResponse.data.refreshToken;

        ls.set("_accessToken", JSON.stringify(aT));
        ls.set("_refreshToken", JSON.stringify(rT));

        failedRequest.response.config.headers["Authorization"] = "Bearer " + aT;
        return Promise.resolve();
      });
  }
};

createAuthRefreshInterceptor(httpClient, refreshAuthLogic);

httpClient.interceptors.request.use(
  function (config) {
    const url = config.url;
    const accessToken = ls.get("_accessToken");
    const refreshToken = ls.get("_refreshToken");

    config.headers = {
      "Content-Type": "application/json",
    };

    if (accessToken || refreshToken) {
      config.headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          url.includes("/logout")
            ? JSON.parse(refreshToken)
            : JSON.parse(accessToken)
        }`,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        ls.removeAll();
      }
      return Promise.reject(error.response.data);
    } else {
      return Promise.reject({
        status: 500,
        message: "Error de conexión con el servidor.",
      });
    }
  }
);

const httpFormDataClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

createAuthRefreshInterceptor(httpFormDataClient, refreshAuthLogic);

httpFormDataClient.interceptors.request.use(
  function (config) {
    const token = ls.get("_accessToken");
    config.headers = {
      "Content-Type": "multipart/form-data",
    };

    if (token) {
      config.headers = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${JSON.parse(token)}`,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { httpFormDataClient };

export default httpClient;
