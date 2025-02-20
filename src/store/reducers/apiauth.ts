import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiSlice } from "../../services/api";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: Boolean(localStorage.getItem("token")),
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setTokens: (state, action: PayloadAction<{ token: string }>) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    resetToken: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(apiSlice.endpoints.loginUser.matchPending, (state) => {
        state.loading = true;
      })
      .addMatcher(apiSlice.endpoints.loginUser.matchFulfilled, (state, action) => {
        const { token } = action.payload;
        localStorage.setItem("token", token);
        state.token = token;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addMatcher(apiSlice.endpoints.loginUser.matchRejected, (state) => {
        state.token = null;
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addMatcher(apiSlice.endpoints.logout.matchFulfilled, (state) => {
        localStorage.removeItem("token");
        state.token = null;
        state.isAuthenticated = false;
        state.loading = false;
      });
  },
});

export const { setTokens, resetToken, setLoading } = authSlice.actions;
export default authSlice.reducer;
