import { configureStore } from "@reduxjs/toolkit"
import authData from "../store/auth"

export const store = configureStore({
  reducer: {
    auth: authData,
  },
})