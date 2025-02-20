export interface RegisterUserData {
    fullName: string;
    username: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    birthDate: string;
    agreeToTerms: boolean;
  }


 export interface LoginRequest {
    email: string;
    password: string;
  }
  
 export interface LoginResponse {
    success: boolean;
    user?: {
      id: number;
      fullName: string;
      email: string;
      token?: string;
    };
    message?: string;
  }

  export interface CreatePostData {
    userId: string;
    description: string;
    image: string;
}

export interface PostResponse {
    id: string;
    userId: string;
    description: string;
    image: string;
    createdAt: string;
}
