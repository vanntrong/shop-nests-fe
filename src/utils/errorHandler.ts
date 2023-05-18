/* eslint-disable @typescript-eslint/no-unsafe-call */

import toast from "react-hot-toast";

const isResponseError = ({ response }: any) => {
  return !!response;
};

const isServerError = ({ response: { status } }: any) => {
  return status >= 500;
};

const isUserError = ({ response: { status } }: any) => {
  return status >= 400 && status < 500;
};

const isUnauthorized = ({ error }: any) => {
  const status = error && error.response && error.response.status;
  return status === 403 || status === 401;
};

const isRequestError = ({ response, request }: any) => {
  return !response && !!request;
};

const notifyError = (error: any) => {
  const {
    response,
    message,
    config: {
      headers: { enabledNoticeError },
    },
  } = error;
  const errorMessage = response && response.data && response.data.message;

  if (!enabledNoticeError) return;

  toast.error(errorMessage || message, {
    position: "bottom-right",
  });
  return errorMessage;
};

type TErrorHandler = ({ error, next }: any) => any;

export const serverErrorHandler: TErrorHandler = function ({ error, next }: any) {
  if (!isResponseError(error) || !isServerError(error)) {
    return next();
  }
  return notifyError(error);
};

export const userErrorHandler: TErrorHandler = function ({ error, next }: any) {
  if (!isResponseError(error) || !isUserError(error)) {
    return next();
  }
  return notifyError(error);
};

export const unauthorizedErrorHandler: TErrorHandler = function ({ error, next }: any) {
  if (!isUnauthorized(error)) {
    return next();
  }
  return notifyError(error);
};

export const requestErrorHandler: TErrorHandler = function ({ error, next }: any) {
  if (!isRequestError(error)) {
    return next();
  }
  return notifyError(error);
};

export const otherErrorHandler: TErrorHandler = function ({ error, next }: any) {
  if (isResponseError(error) || isRequestError(error) || isUnauthorized(error)) {
    return next();
  }
  return notifyError(error);
};

export function createHandlerChain(handlers: TErrorHandler[]) {
  return function handlerChain(error: any) {
    const stack = [...handlers];
    function next() {
      if (stack.length === 0) {
        return;
      }
      const nextHandler = stack.pop();
      if (nextHandler) {
        nextHandler({ error, next });
      }
    }
    next();
    return Promise.reject(error);
  };
}
