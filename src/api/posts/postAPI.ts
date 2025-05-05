import { instance } from './instance';
import { Post } from './types';

export const getPosts = async (): Promise<Post[]> => {
  const response = await instance.get<Post[]>('/posts');
  return response.data;
};
