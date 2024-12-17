export type TResponse = {
  code?: number;
  success: boolean;
  message: string;
  data?: any;
  error?: any;
  errors?: any;
};

export type TError = {
  code?: number;
  success: boolean;
  message: string;
  errors?: any;
};
