import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getStatusLogin = createAsyncThunk('auth/getStatusLogin', async () => {
  const statusLogin = await localStorage.getItem('status-login')
  return statusLogin
})

const authData = createSlice({
  name: "auth",
  initialState: {
    isLoadingAuth: true,
    isLogin: false,
  },
  reducers: {
    updateDataLogin: (state, action) => {
      state.isLoadingAuth = action.payload.isLoadingAuth
      state.isLogin = action.payload.isLogin
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStatusLogin.pending, (state) => {
        state.isLoadingAuth = true
      })
      .addCase(getStatusLogin.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.isLoadingAuth = false
          state.isLogin = true
        } else {
          state.isLoadingAuth = false
          state.isLogin = false
        }
      })
      .addCase(getStatusLogin.rejected, (state) => {
        state.isLoadingAuth = false
        state.isLogin = false
      })
  }
})

export const { updateDataLogin } = authData.actions
export default authData.reducer
