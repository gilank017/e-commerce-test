import { createSlice } from "@reduxjs/toolkit"

const authData = createSlice({
  name: "auth",
  initialState: {
    isLoadingAuth: false,
    isLogin: false,
    email: ''
  },
  reducers: {
    updateDataLogin: (state, action) => {
      state.isLoadingAuth = action.payload.isLoadingAuth
      state.isLogin = action.payload.isLogin
      state.email = action.payload.email
    }
  }
})

export const { updateDataLogin } = authData.actions
export default authData.reducer