
interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  accesstoken : string;
}

export interface User {
  username: string;
  email: string;
  password?: string;
}

export interface Post {
  id: number;
  userId: number;
  content: string;
  mediaUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Like {
  id: number;
  postId: number;
  userId: number;
  createdAt: string;
}

export interface Follower {
  id: number;
  followerId: number;
  followingId: number;
  createdAt: string;
}

export interface Notification {
  id: number;
  userId: number;
  type: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}
