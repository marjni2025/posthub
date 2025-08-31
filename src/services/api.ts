import { Post, Comment, User } from '../types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiService = {
  async getPosts(page: number = 1, limit: number = 10): Promise<Post[]> {
    const response = await fetch(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`);
    return response.json();
  },

  async getAllPosts(): Promise<Post[]> {
    const response = await fetch(`${BASE_URL}/posts`);
    return response.json();
  },

  async getPostById(id: number): Promise<Post> {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    return response.json();
  },

  async getCommentsByPostId(postId: number): Promise<Comment[]> {
    const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    return response.json();
  },

  async getUsers(): Promise<User[]> {
    const response = await fetch(`${BASE_URL}/users`);
    return response.json();
  },

  async getUserById(id: number): Promise<User> {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    return response.json();
  }
};