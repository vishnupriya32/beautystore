import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loginUserStatus: null,
    error: null,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginUserStatus = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginUserStatus = 'success';
        state.user = action.payload;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginUserStatus = 'failed';
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export default userSlice.reducer;
