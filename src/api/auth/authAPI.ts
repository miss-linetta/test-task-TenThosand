import { instance } from './instance';
import { AuthLoginRequest, AuthLoginResponse } from './types';

export const login = async (
  data: AuthLoginRequest,
): Promise<AuthLoginResponse> => {
  console.log(data);
  const response = await instance.post<AuthLoginResponse>('/login', data);
  return response.data;
};
