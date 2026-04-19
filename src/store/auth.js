import { createSlice } from "@reduxjs/toolkit"

const authData = createSlice({
  name: "auth",
  initialState: {
    isLoadingAuth: false,
    isLogin: false,
  },
  reducers: {
    updateDataLogin: (state, action) => {
      state.isLoadingAuth = action.payload.isLoadingAuth
      state.isLogin = action.payload.isLogin
    }
  }
})

export const { updateDataLogin } = authData.actions
export default authData.reducer